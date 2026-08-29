import { PRODUCTS, Product } from "@/data/products";

// Ortam Değişkenleri ve Sabitler
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8836427661:AAF0N11G29uJKkTQ0sZO-FzF7QQXRZTrg3Q";
const ADMIN_IDS = (process.env.TELEGRAM_ADMIN_IDS || "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);

// Yönetici Şifresi (Ortam değişkeninden veya varsayılan)
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hilal1998";

// Aktif Oturumlar (Kullanıcı ID -> Giriş Zamanı)
// Oturum süresi: 3 saat hareketsizlik sonrası otomatik kilitlenir
const activeSessions = new Map<string, number>();
const SESSION_DURATION_MS = 3 * 60 * 60 * 1000; // 3 saat

// Oturum Doğrulama
export function isUserLoggedIn(userId: number | string): boolean {
  const uId = String(userId);
  const lastActive = activeSessions.get(uId);
  if (!lastActive) return false;

  const now = Date.now();
  if (now - lastActive > SESSION_DURATION_MS) {
    activeSessions.delete(uId);
    return false;
  }

  // Harekette oturumu yenile
  activeSessions.set(uId, now);
  return true;
}

// Oturum Açma
export function loginUser(userId: number | string, passwordAttempt: string): boolean {
  if (passwordAttempt === ADMIN_PASSWORD) {
    activeSessions.set(String(userId), Date.now());
    return true;
  }
  return false;
}

// Oturum Kapatma
export function logoutUser(userId: number | string): void {
  activeSessions.delete(String(userId));
}

// Telegram Mesaj Gönderme
export async function sendTelegramMessage(chatId: number | string, text: string) {
  if (!BOT_TOKEN) return;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("Telegram mesaj hatası:", error);
  }
}

// Telegram Fotoğraf Gönderme
export async function sendTelegramPhoto(chatId: number | string, photoUrlOrFileId: string, caption: string) {
  if (!BOT_TOKEN) return;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        photo: photoUrlOrFileId,
        caption,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("Telegram fotoğraf gönderme hatası:", error);
  }
}

// Telegram Dosya Linki Alma
export async function getTelegramFileUrl(fileId: string): Promise<string | null> {
  if (!BOT_TOKEN) return null;
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${fileId}`);
    const data = await res.json();
    if (data.ok && data.result.file_path) {
      return `https://api.telegram.org/file/bot${BOT_TOKEN}/${data.result.file_path}`;
    }
  } catch (e) {
    console.error("Dosya yolu hatası:", e);
  }
  return null;
}

// Telegram ID Yetki Kontrolü
export function isAuthorizedAdminId(userId: number | string): boolean {
  if (ADMIN_IDS.length === 0) {
    return true; // Eğer liste henüz boşsa ID gösterip şifreye bırakır
  }
  return ADMIN_IDS.includes(String(userId));
}

// Ürün Arama (ID veya İsme Göre)
export function findProductByIdOrName(query: string): Product | null {
  const clean = query.trim().toLowerCase();
  if (!clean) return null;

  return (
    PRODUCTS.find(
      (p) =>
        p.id.toLowerCase() === clean ||
        p.slug.toLowerCase() === clean ||
        p.name.toLowerCase().includes(clean)
    ) || null
  );
}

// Ürün Detay Metni Formatı
export function formatProductDetails(product: Product): string {
  return `📦 *Ürün Bilgi Kartı (ID: ${product.id})*
━━━━━━━━━━━━━━━━━━━━
🏷️ *Ürün Adı:* ${product.name}
📂 *Kategori:* ${product.categoryName} (\`${product.categorySlug}\`)
🎨 *Tarz:* ${product.style}
🏢 *Şube:* ${product.branch === "showroom" ? "Showroom (Avize & Dekorasyon)" : "Elektrik Şubesi"}

📝 *Açıklama:*
${product.description}

📐 *Boyutlar:* ${product.dimensions}
✨ *Malzeme:* ${product.material}
💡 *Duy/Işık:* ${product.lightingType}

⭐ *Öne Çıkan Özellikler:*
${product.features.map((f) => `• ${f}`).join("\n")}

🌐 *Canlı Web Sayfası:*
https://hilalavize.vercel.app/urun/${product.slug}`;
}

// Metinden Ürün Nesnesi Çıkarma
export function parseProductFromText(text: string, photoUrl: string = "/images/800x800_modern_led_halka_avize.jpg"): Partial<Product> | null {
  try {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const getField = (prefix: string) => {
      const line = lines.find((l) => l.toLowerCase().startsWith(prefix.toLowerCase()));
      if (!line) return "";
      return line.substring(line.indexOf(":") + 1).trim();
    };

    const id = getField("id") || getField("ürün id") || `hl-${Date.now().toString().slice(-4)}`;
    const name = getField("ad") || getField("isim") || getField("ürün adı");
    if (!name) return null;

    const categorySlug = getField("kategori") || "avizeler";
    const categoryName = getField("kategori adı") || "Lüks & Modern Avizeler";
    const styleRaw = getField("tarz") || getField("stil");
    let style: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist" = "Modern & Spor";
    if (styleRaw.toLowerCase().includes("klasik") || styleRaw.toLowerCase().includes("saray")) {
      style = "İhtişamlı & Klasik";
    } else if (styleRaw.toLowerCase().includes("minimal") || styleRaw.toLowerCase().includes("sade")) {
      style = "Sade & Minimalist";
    }

    const description = getField("açıklama") || `${name} - Hilal Avize özel koleksiyonu.`;
    const material = getField("malzeme") || "Özel Tasarım Gövde & Kristal/Metal";
    const dimensions = getField("boyut") || getField("ölçü") || getField("ebat") || "Standart Showroom Ölçüsü";
    const lightingType = getField("duy") || getField("aydınlatma") || "E27 / E14 LED Uyumlu";

    const slug = name
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const features = lines
      .filter((l) => l.startsWith("-") || l.startsWith("•") || l.startsWith("*"))
      .map((l) => l.replace(/^[-•*]\s*/, "").trim())
      .filter(Boolean);

    return {
      id,
      slug: slug || id,
      name,
      categorySlug,
      categoryName,
      style,
      badge: "Yeni Sezon Koleksiyon",
      shortDescription: description.slice(0, 120),
      description,
      material,
      dimensions,
      lightingType,
      branch: "showroom",
      image: photoUrl,
      images: [photoUrl],
      features: features.length > 0 ? features : ["Hilal Avize Kalite Güvencesi", "Özel Ambalaj ve Güvenli Teslimat", "Ücretsiz Montaj Desteği"],
      seoTitle: `${name} Kahramanmaraş | Hilal Avize`,
      seoDescription: `${name} modeli Kahramanmaraş Hilal Avize Showroom'unda.`,
    };
  } catch (error) {
    console.error("Ürün ayrıştırma hatası:", error);
    return null;
  }
}
