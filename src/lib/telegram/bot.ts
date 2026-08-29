import { PRODUCTS, Product } from "@/data/products";

// Ortam Değişkenleri ve Sabitler
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8836427661:AAF0N11G29uJKkTQ0sZO-FzF7QQXRZTrg3Q";
const ADMIN_IDS = (process.env.TELEGRAM_ADMIN_IDS || "")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);

// Yönetici Şifresi
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "hilal1976";

// Kategori & ID Ön Ek Eşleşmeleri
export const CATEGORY_PREFIXES: Record<string, { name: string; slug: string }> = {
  AVZ: { name: "Lüks & Modern Avizeler", slug: "avizeler" },
  APL: { name: "Dekoratif Duvar Aplikleri", slug: "aplikler" },
  SPT: { name: "Spot & Manyetik Ray Spot Sistemleri", slug: "spot-ve-ray-spot" },
  ABJ: { name: "Abajur & Lambader Koleksiyonu", slug: "abajur-ve-lambaderler" },
  AYN: { name: "Dekoratif & Akıllı LED Aynalar", slug: "dekoratif-aynalar" },
  DST: { name: "Özel Tasarım Duvar & Masa Saatleri", slug: "duvar-ve-masa-saatleri" },
  SUS: { name: "Cam Sanat & Süs Eşyaları", slug: "cam-sus-esyalari" },
  ANH: { name: "Lüks Anahtar & Priz Serileri", slug: "anahtar-ve-priz-serileri" },
  KOL: { name: "Dekoratif Koltuk & Berjerler", slug: "dekoratif-koltuk-ve-berjerler" },
  SEH: { name: "Dekoratif Mermer & Bronz Sehpalar", slug: "dekoratif-sehpalar" },
};

// Aktif Oturumlar
const activeSessions = new Map<string, number>();
const SESSION_DURATION_MS = 4 * 60 * 60 * 1000; // 4 saat

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
    return true;
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
        p.id.toLowerCase().replace("-", "") === clean ||
        p.slug.toLowerCase() === clean ||
        p.name.toLowerCase().includes(clean)
    ) || null
  );
}

// Ürün Detay Kartı
export function formatProductDetails(product: Product): string {
  return `📦 *Ürün Bilgi Kartı (ID: ${product.id})*
━━━━━━━━━━━━━━━━━━━━
🏷️ *Ürün Adı:* ${product.name}
📂 *Kategori:* ${product.categoryName} (\`${product.categorySlug}\`)
🎨 *Tarz:* ${product.style}
🏢 *Şube:* ${product.branch === "showroom" ? "Avize Showroom" : "Elektrik Şubesi"}

📝 *Açıklama:*
${product.description}

📐 *Boyutlar:* ${product.dimensions}
✨ *Malzeme:* ${product.material}
💡 *Duy/Aydınlatma:* ${product.lightingType}

⭐ *Öne Çıkan Özellikler:*
${product.features.map((f) => `• ${f}`).join("\n")}

🌐 *Canlı Web Sayfası:*
https://hilalavize-five.vercel.app/urun/${product.slug}`;
}

// Ürün Ekleme Şablon Metni
export function getProductAddTemplate(): string {
  return `📝 *STANDART ÜRÜN EKLEME ŞABLONU*
━━━━━━━━━━━━━━━━━━━━
Fotoğraf gönderirken açıklama (caption) kısmına bu şablonu kopyalayıp doldurunuz:

\`\`\`
/ekle
ID: AVZ-101
Ad: Venedik 8 Kollu Gold Kristal Avize
Tarz: İhtişamlı & Klasik
Malzeme: Döküm Pirinç & K9 Kristal
Boyut: Çap: 85cm, Yükseklik: 100cm
Duy: 8x E14 LED Kandil Duy
Açıklama: Geniş salonlar için altın varak kaplama kristal avize.
Özellikler:
- 8 Adet E14 Kandil Duy
- Saf döküm pirinç gövde
- Kırılmaya karşı özel ahşap kasa
- Ücretsiz montaj
\`\`\`

🏷️ *Geçerli ID Ön Ekleri:*
• \`AVZ-\` : Avize
• \`APL-\` : Aplik
• \`SPT-\` : Spot & Ray Spot
• \`ABJ-\` : Abajur & Lambader
• \`AYN-\` : Ayna
• \`DST-\` : Duvar & Masa Saati
• \`SUS-\` : Cam Sanat / Süs Eşyaları
• \`ANH-\` : Anahtar & Priz
• \`KOL-\` : Koltuk & Berjer
• \`SEH-\` : Sehpa`;
}

// Ayrıştırma ve Alan Doğrulama (Eksik Bilgi Kontrolü)
export interface ParseResult {
  success: boolean;
  product?: Partial<Product>;
  missingFields?: string[];
  errorMsg?: string;
}

export function parseAndValidateProduct(text: string, photoUrl: string): ParseResult {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const getField = (prefix: string) => {
    const line = lines.find((l) => l.toLowerCase().startsWith(prefix.toLowerCase()));
    if (!line) return "";
    return line.substring(line.indexOf(":") + 1).trim();
  };

  const missingFields: string[] = [];

  const id = getField("id") || getField("ürün id");
  if (!id) {
    missingFields.push("❌ *ID* (Örn: AVZ-101, APL-101, SEH-101)");
  }

  const name = getField("ad") || getField("isim") || getField("ürün adı");
  if (!name) {
    missingFields.push("❌ *Ürün Adı* (Örn: Floransa 12 Kollu Kristal Avize)");
  }

  const material = getField("malzeme");
  if (!material) {
    missingFields.push("❌ *Malzeme* (Örn: Döküm Pirinç & K9 Kristal)");
  }

  const dimensions = getField("boyut") || getField("ölçü") || getField("ebat");
  if (!dimensions) {
    missingFields.push("❌ *Boyutlar* (Örn: Çap: 90cm, Yükseklik: 110cm)");
  }

  const lightingType = getField("duy") || getField("aydınlatma") || getField("ışık");
  if (!lightingType) {
    missingFields.push("❌ *Duy/Aydınlatma* (Örn: 12x E14 LED Duy veya Dahili LED)");
  }

  const description = getField("açıklama");
  if (!description) {
    missingFields.push("❌ *Açıklama* (Ürünün mekana kattığı zarafeti anlatan 1-2 cümle)");
  }

  const features = lines
    .filter((l) => l.startsWith("-") || l.startsWith("•") || l.startsWith("*"))
    .map((l) => l.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);

  if (features.length === 0) {
    missingFields.push("❌ *Öne Çıkan Özellikler* (En az 1-2 madde: - Özellik şeklinde)");
  }

  if (missingFields.length > 0) {
    return {
      success: false,
      missingFields,
    };
  }

  // ID Ön ekine göre otomatik kategori eşleştirme
  const prefix = id.split("-")[0].toUpperCase();
  const categoryMatch = CATEGORY_PREFIXES[prefix] || {
    name: "Lüks & Modern Avizeler",
    slug: "avizeler",
  };

  const styleRaw = getField("tarz") || getField("stil");
  let style: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist" = "Modern & Spor";
  if (styleRaw.toLowerCase().includes("klasik") || styleRaw.toLowerCase().includes("saray")) {
    style = "İhtişamlı & Klasik";
  } else if (styleRaw.toLowerCase().includes("minimal") || styleRaw.toLowerCase().includes("sade")) {
    style = "Sade & Minimalist";
  }

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

  const branch = (prefix === "SPT" || prefix === "ANH") ? "electrical" : "showroom";

  return {
    success: true,
    product: {
      id: id.toUpperCase(),
      slug: slug || id.toLowerCase(),
      name,
      categorySlug: categoryMatch.slug,
      categoryName: categoryMatch.name,
      style,
      badge: "Yeni Sezon Koleksiyon",
      shortDescription: description.slice(0, 120),
      description,
      material,
      dimensions,
      lightingType,
      branch,
      image: photoUrl,
      images: [photoUrl],
      features,
      seoTitle: `${name} Kahramanmaraş | Hilal Avize`,
      seoDescription: `${name} modeli Kahramanmaraş Hilal Avize Showroom'unda.`,
    },
  };
}
