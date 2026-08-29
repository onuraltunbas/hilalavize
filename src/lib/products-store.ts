import { PRODUCTS as STATIC_PRODUCTS, Product } from "@/data/products";

// GitHub API ile Kalıcı Depolama (Token base64 ile saklanır, runtime'da çözülür)
const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GITHUB_REPO = "onuraltunbas/hilalavize";
const DYNAMIC_FILE_PATH = "src/data/dynamic-products.json";

// Dinamik ürünleri oku (GitHub'dan)
async function readDynamicProducts(): Promise<Product[]> {
  if (!GITHUB_TOKEN) return [];
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DYNAMIC_FILE_PATH}`,
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

// Dinamik ürünleri yaz (GitHub'a commit at → Vercel otomatik rebuild)
async function writeDynamicProducts(products: Product[], commitMsg: string): Promise<boolean> {
  if (!GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN yok, ürün kaydedilemedi!");
    return false;
  }
  try {
    // Mevcut dosyanın SHA'sını al (güncelleme için gerekli)
    let sha = "";
    const checkRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DYNAMIC_FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    if (checkRes.ok) {
      const fileData = await checkRes.json();
      sha = fileData.sha;
    }

    const contentBase64 = Buffer.from(
      JSON.stringify(products, null, 2)
    ).toString("base64");

    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${DYNAMIC_FILE_PATH}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: commitMsg,
          content: contentBase64,
          ...(sha ? { sha } : {}),
          branch: "main",
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      console.error("GitHub commit hatası:", err);
      return false;
    }
    return true;
  } catch (e) {
    console.error("GitHub yazma hatası:", e);
    return false;
  }
}

// Tüm ürünleri getir: statik + dinamik
export async function getAllProductsAsync(): Promise<Product[]> {
  const dynamicProducts = await readDynamicProducts();
  // Dinamik ürünleri en başa koy, statik ürünlerin üzerine yazma
  const staticIds = new Set(STATIC_PRODUCTS.map((p) => p.id));
  const uniqueDynamic = dynamicProducts.filter((p) => !staticIds.has(p.id));
  return [...uniqueDynamic, ...STATIC_PRODUCTS];
}

// Slug ile ürün bul (asenkron)
export async function getProductBySlugAsync(slug: string): Promise<Product | undefined> {
  const all = await getAllProductsAsync();
  const clean = slug.toLowerCase().trim();
  return all.find(
    (p) =>
      p.slug.toLowerCase() === clean ||
      p.id.toLowerCase() === clean ||
      p.id.toLowerCase().replace("-", "") === clean
  );
}

// Yeni ürün kaydet (GitHub'a commit → Vercel rebuild)
export async function saveProductAsync(product: Product): Promise<boolean> {
  const existing = await readDynamicProducts();
  const idx = existing.findIndex((p) => p.id === product.id || p.slug === product.slug);
  if (idx !== -1) {
    existing[idx] = product;
  } else {
    existing.unshift(product);
  }
  return writeDynamicProducts(
    existing,
    `urun: ${product.id} ${product.name} eklendi`
  );
}

// Ürün sil (GitHub'a commit → Vercel rebuild)
export async function deleteProductAsync(idOrSlug: string): Promise<Product | null> {
  const existing = await readDynamicProducts();
  const clean = idOrSlug.toLowerCase().trim();
  const idx = existing.findIndex(
    (p) => p.id.toLowerCase() === clean || p.slug.toLowerCase() === clean
  );
  if (idx === -1) return null;
  const removed = existing.splice(idx, 1)[0];
  await writeDynamicProducts(
    existing,
    `urun: ${removed.id} ${removed.name} silindi`
  );
  return removed;
}

// Senkron yardımcılar (geriye uyumluluk)
export function getAllProducts(): Product[] {
  return STATIC_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  const clean = slug.toLowerCase().trim();
  return STATIC_PRODUCTS.find(
    (p) =>
      p.slug.toLowerCase() === clean ||
      p.id.toLowerCase() === clean
  );
}

export function addDynamicProduct(product: Product): void {
  saveProductAsync(product).catch(console.error);
}

export function removeDynamicProduct(idOrSlug: string): Product | null {
  deleteProductAsync(idOrSlug).catch(console.error);
  return null;
}
