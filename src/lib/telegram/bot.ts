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
const SESSION_DURATION_MS = 6 * 60 * 60 * 1000; // 6 saat

// Kategori Başına En Yüksek Kullanılmış ID Sayaç Takibi (Ürün silinse bile ID geri sarmaz, hep ileri gider)
const highestAllocatedIdMap = new Map<string, number>();

// İlk yüklemede mevcut ürünlerin en yüksek ID'lerini kaydet
PRODUCTS.forEach((p) => {
  const parts = p.id.split("-");
  if (parts.length === 2) {
    const prefix = parts[0].toUpperCase();
    const num = parseInt(parts[1], 10);
    if (!isNaN(num)) {
      const currentMax = highestAllocatedIdMap.get(prefix) || 0;
      if (num > currentMax) {
        highestAllocatedIdMap.set(prefix, num);
      }
    }
  }
});

// Adım Adım Ürün Ekleme Sihirbazı Durumları
export type WizardStep =
  | "WAITING_PHOTO"
  | "WAITING_CATEGORY"
  | "WAITING_NAME"
  | "WAITING_STYLE"
  | "WAITING_MATERIAL"
  | "WAITING_DIMENSIONS"
  | "WAITING_LIGHTING"
  | "WAITING_DESCRIPTION"
  | "WAITING_FEATURES";

export interface WizardState {
  step: WizardStep;
  data: {
    photoUrl?: string;
    prefix?: string;
    id?: string;
    name?: string;
    style?: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist";
    material?: string;
    dimensions?: string;
    lightingType?: string;
    description?: string;
    features?: string[];
  };
}

const wizardStates = new Map<string, WizardState>();

export function getWizardState(userId: number | string): WizardState | undefined {
  return wizardStates.get(String(userId));
}

export function setWizardState(userId: number | string, state: WizardState): void {
  wizardStates.set(String(userId), state);
}

export function clearWizardState(userId: number | string): void {
  wizardStates.delete(String(userId));
}

// Otomatik Sıradaki ID'yi Üretme (Örn: AVZ-003, AVZ-006 - Asla Geri Dönmez)
export function generateNextProductId(prefix: string): string {
  const cleanPrefix = prefix.toUpperCase();

  // 1. Mevcut ürünlerdeki en büyük numarayı bul
  const matchingProducts = PRODUCTS.filter((p) =>
    p.id.toUpperCase().startsWith(`${cleanPrefix}-`)
  );

  let currentMax = highestAllocatedIdMap.get(cleanPrefix) || 0;

  matchingProducts.forEach((p) => {
    const numPart = p.id.split("-")[1];
    const num = parseInt(numPart, 10);
    if (!isNaN(num) && num > currentMax) {
      currentMax = num;
    }
  });

  const nextNum = currentMax + 1;
  highestAllocatedIdMap.set(cleanPrefix, nextNum);

  // 3 Haneli Format (001, 002, 005, 006 ...)
  const formattedNum = String(nextNum).padStart(3, "0");
  return `${cleanPrefix}-${formattedNum}`;
}

// Ürün Silme İşlemi (Sayaç korunur, silinen ID geri dönmez)
export function deleteProductByIdOrName(query: string): { success: boolean; product?: Product; nextIdForCategory?: string } {
  const product = findProductByIdOrName(query);
  if (!product) {
    return { success: false };
  }

  const prefix = product.id.split("-")[0].toUpperCase();
  const num = parseInt(product.id.split("-")[1] || "0", 10);

  // Sayaçta bu numaranın kaydedildiğinden emin ol
  const currentMax = highestAllocatedIdMap.get(prefix) || 0;
  if (num > currentMax) {
    highestAllocatedIdMap.set(prefix, num);
  }

  // Listeden çıkar
  const index = PRODUCTS.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    PRODUCTS.splice(index, 1);
  }

  const nextNum = (highestAllocatedIdMap.get(prefix) || num) + 1;
  const nextIdForCategory = `${prefix}-${String(nextNum).padStart(3, "0")}`;

  return {
    success: true,
    product,
    nextIdForCategory,
  };
}

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
  wizardStates.delete(String(userId));
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
