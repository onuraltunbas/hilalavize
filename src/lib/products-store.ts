import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";

export type { Product };

// GitHub API ile Kalıcı Depolama
const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GIST_ID = "b3966c06ee962f2a0e4a442dd05cb77d";

const GIST_FILENAME = "dynamic_products.json";

// =============================================
// GIST OKUMA / YAZMA (Anlık bulut depolama)
// =============================================

/**
 * Gist'teki dynamic_products.json dosyasını okur.
 * - Dosya varsa: içeriğini parse edip döner
 * - Dosya yoksa: null döner (henüz hiç oluşturulmamış)
 * - Hata olursa: null döner
 */
async function readGistProducts(): Promise<Product[] | null> {
  if (!GITHUB_TOKEN) return null;
  try {
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "hilalavize-products",
        Accept: "application/vnd.github.v3+json",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();

    // Dosya Gist'te mevcut mu kontrol et
    if (data.files && data.files[GIST_FILENAME]) {
      const content = data.files[GIST_FILENAME].content;
      if (!content || content.trim() === "") return [];
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [];
    }

    // Dosya Gist'te henüz yok — null döndür (yokluğu işaretle)
    return null;
  } catch (err) {
    console.error("readGistProducts error:", err);
    return null;
  }
}

/**
 * Dinamik ürünleri Gist'e yazar. Dosya yoksa oluşturur, varsa günceller.
 */
async function writeGistProducts(products: Product[]): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  try {
    const jsonContent = JSON.stringify(products, null, 2);
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "hilalavize-products",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          [GIST_FILENAME]: { content: jsonContent },
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("writeGistProducts failed:", res.status, errText);
      return false;
    }
    return true;
  } catch (err) {
    console.error("writeGistProducts error:", err);
    return false;
  }
}

// =============================================
// DİNAMİK ÜRÜN OKUMA
// =============================================

/**
 * Tüm dinamik ürünleri okur (Gist'ten).
 * Gist'te dosya yoksa veya hata olursa boş dizi döner.
 */
export async function readDynamicProducts(): Promise<Product[]> {
  const gistResult = await readGistProducts();
  if (gistResult !== null) {
    return gistResult;
  }
  // Gist'te dosya henüz yok — boş dizi döndür
  return [];
}

// =============================================
// TÜM ÜRÜNLERİ GETİR (Statik + Dinamik)
// =============================================

/**
 * Tüm ürünleri birleştirir:
 * - Dinamik ürünler (Gist'ten okunan) önceliklidir
 * - Statik ürünlerden (products.ts) dinamik listede aynı code'la olanlar çıkartılır
 * - Sonuç: dinamik + kalan statik
 */
export async function getAllProductsAsync(): Promise<Product[]> {
  try {
    const dynamicProducts = await readDynamicProducts();

    if (!dynamicProducts || dynamicProducts.length === 0) {
      return STATIC_PRODUCTS;
    }

    // Dinamik ürün kodlarını set'e al
    const dynamicCodes = new Set(
      dynamicProducts.map((p) => (p.code || p.id || "").toUpperCase())
    );

    // Statik ürünlerden dinamikte olanları çıkart (dinamik olan günceldir)
    const remainingStatic = STATIC_PRODUCTS.filter(
      (p) => !dynamicCodes.has((p.code || p.id || "").toUpperCase())
    );

    return [...dynamicProducts, ...remainingStatic];
  } catch (err) {
    console.error("getAllProductsAsync error:", err);
    return STATIC_PRODUCTS;
  }
}

// =============================================
// SLUG İLE ÜRÜN BUL
// =============================================

export async function getProductBySlugAsync(slug: string): Promise<Product | undefined> {
  const all = await getAllProductsAsync();
  const clean = slug.toLowerCase().trim();
  const cleanAlphaNum = clean.replace(/[^a-z0-9]/g, "");
  return all.find(
    (p) =>
      p.slug?.toLowerCase() === clean ||
      p.code?.toLowerCase() === clean ||
      p.id?.toLowerCase() === clean ||
      p.id?.toLowerCase().replace("-", "") === clean ||
      p.code?.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum ||
      (p.legacyCode && p.legacyCode.toLowerCase() === clean) ||
      (p.legacyCode && p.legacyCode.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum)
  );
}

// =============================================
// ÜRÜN KAYDET (Ekleme veya Güncelleme)
// =============================================

/**
 * Bir ürünü Gist deposuna kaydeder.
 * - Aynı code ile mevcut ürün varsa günceller
 * - Yoksa başa ekler
 * - await ile çağrılmalı, sonuç döner
 */
export async function saveProductAsync(product: Product): Promise<boolean> {
  try {
    const existing = await readDynamicProducts();
    const prodCode = (product.code || product.id || "").toUpperCase();
    const idx = existing.findIndex(
      (p) =>
        (p.code || p.id || "").toUpperCase() === prodCode ||
        (p.slug && product.slug && p.slug === product.slug)
    );

    if (idx !== -1) {
      existing[idx] = product;
    } else {
      existing.unshift(product);
    }

    const result = await writeGistProducts(existing);
    if (!result) {
      console.error("saveProductAsync: Gist yazma başarısız!");
    }
    return result;
  } catch (err) {
    console.error("saveProductAsync error:", err);
    return false;
  }
}

// =============================================
// ÜRÜN SİL
// =============================================

export async function deleteProductAsync(idOrSlug: string): Promise<Product | null> {
  try {
    const existing = await readDynamicProducts();
    const clean = idOrSlug.toLowerCase().trim();
    const idx = existing.findIndex(
      (p) =>
        (p.id || "").toLowerCase() === clean ||
        (p.code || "").toLowerCase() === clean ||
        (p.slug || "").toLowerCase() === clean
    );
    if (idx === -1) return null;
    const removed = existing.splice(idx, 1)[0];
    await writeGistProducts(existing);
    return removed;
  } catch {
    return null;
  }
}

// =============================================
// SENKRON YARDIMCILAR (Geriye Uyumluluk)
// =============================================

export function getAllProducts(): Product[] {
  return STATIC_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  const clean = slug.toLowerCase().trim();
  const cleanAlphaNum = clean.replace(/[^a-z0-9]/g, "");
  return STATIC_PRODUCTS.find(
    (p) =>
      p.slug?.toLowerCase() === clean ||
      p.code?.toLowerCase() === clean ||
      p.id?.toLowerCase() === clean ||
      p.code?.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum ||
      (p.legacyCode && p.legacyCode.toLowerCase() === clean) ||
      (p.legacyCode && p.legacyCode.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum)
  );
}
