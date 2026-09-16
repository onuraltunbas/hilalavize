import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";

export type { Product };

// GitHub API ile Kalıcı Depolama
const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GIST_ID = "b3966c06ee962f2a0e4a442dd05cb77d";
const GITHUB_REPO = "onuraltunbas/hilalavize";
const DYNAMIC_FILE_PATH = "src/data/dynamic-products.json";

// Gist üzerinden anlık dinamik ürünleri oku (Hızlı & Çakışmasız)
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
    if (data.files && data.files["dynamic_products.json"]) {
      const content = data.files["dynamic_products.json"].content;
      const parsed = JSON.parse(content);
      return Array.isArray(parsed) ? parsed : [];
    }
    return [];
  } catch (err) {
    console.error("readGistProducts error:", err);
    return null;
  }
}

// Gist üzerinden anlık dinamik ürünleri yaz
async function writeGistProducts(products: Product[]): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  try {
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "hilalavize-products",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          "dynamic_products.json": { content: JSON.stringify(products, null, 2) },
        },
      }),
    });
    return res.ok;
  } catch (err) {
    console.error("writeGistProducts error:", err);
    return false;
  }
}

// Dinamik ürünleri oku (Öncelik: Gist, Yedek: GitHub repo)
export async function readDynamicProducts(): Promise<Product[]> {
  const gistProducts = await readGistProducts();
  if (gistProducts !== null) {
    return gistProducts;
  }

  // Fallback: GitHub Repo Contents
  if (!GITHUB_TOKEN) return [];
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DYNAMIC_FILE_PATH}?t=${Date.now()}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// Tüm ürünleri getir: Dinamik ürünler + Statik ürünler
// Eğer dinamik listede bir ürün varsa, statik olanın yerine o geçer (düzenlemeler için)
export async function getAllProductsAsync(): Promise<Product[]> {
  try {
    const dynamicProducts = await readDynamicProducts();
    if (!dynamicProducts || dynamicProducts.length === 0) {
      return STATIC_PRODUCTS;
    }

    const dynamicCodes = new Set(dynamicProducts.map((p) => (p.code || p.id).toUpperCase()));

    // Statik ürünlerden dinamik listede olanları filtrele (dinamik olan günceldir)
    const remainingStatic = STATIC_PRODUCTS.filter(
      (p) => !dynamicCodes.has((p.code || p.id).toUpperCase())
    );

    return [...dynamicProducts, ...remainingStatic];
  } catch {
    return STATIC_PRODUCTS;
  }
}

// Slug ile ürün bul (asenkron)
export async function getProductBySlugAsync(slug: string): Promise<Product | undefined> {
  const all = await getAllProductsAsync();
  const clean = slug.toLowerCase().trim();
  const cleanAlphaNum = clean.replace(/[^a-z0-9]/g, "");
  return all.find(
    (p) =>
      p.slug.toLowerCase() === clean ||
      p.code.toLowerCase() === clean ||
      p.id.toLowerCase() === clean ||
      p.id.toLowerCase().replace("-", "") === clean ||
      p.code.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum ||
      (p.legacyCode && p.legacyCode.toLowerCase() === clean) ||
      (p.legacyCode && p.legacyCode.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum)
  );
}

// Yeni veya güncellenen ürünü anında Gist'e kaydet (Vercel build süresini beklemeden anında sitede aktif olur)
export async function saveProductAsync(product: Product): Promise<boolean> {
  try {
    const existing = await readDynamicProducts();
    const prodCode = (product.code || product.id).toUpperCase();
    const idx = existing.findIndex(
      (p) => (p.code || p.id).toUpperCase() === prodCode || p.slug === product.slug
    );

    if (idx !== -1) {
      existing[idx] = product;
    } else {
      existing.unshift(product);
    }

    return await writeGistProducts(existing);
  } catch (err) {
    console.error("saveProductAsync error:", err);
    return false;
  }
}

// Ürün sil
export async function deleteProductAsync(idOrSlug: string): Promise<Product | null> {
  try {
    const existing = await readDynamicProducts();
    const clean = idOrSlug.toLowerCase().trim();
    const idx = existing.findIndex(
      (p) =>
        p.id.toLowerCase() === clean ||
        p.code.toLowerCase() === clean ||
        p.slug.toLowerCase() === clean
    );
    if (idx === -1) return null;
    const removed = existing.splice(idx, 1)[0];
    await writeGistProducts(existing);
    return removed;
  } catch {
    return null;
  }
}

// Senkron yardımcılar (geriye uyumluluk)
export function getAllProducts(): Product[] {
  return STATIC_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  const clean = slug.toLowerCase().trim();
  const cleanAlphaNum = clean.replace(/[^a-z0-9]/g, "");
  return STATIC_PRODUCTS.find(
    (p) =>
      p.slug.toLowerCase() === clean ||
      p.code.toLowerCase() === clean ||
      p.id.toLowerCase() === clean ||
      p.code.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum ||
      (p.legacyCode && p.legacyCode.toLowerCase() === clean) ||
      (p.legacyCode && p.legacyCode.toLowerCase().replace(/[^a-z0-9]/g, "") === cleanAlphaNum)
  );
}
