import { PRODUCTS as INITIAL_PRODUCTS, Product } from "@/data/products";

// Bellek İçi Önbellek
let memoryProducts: Product[] = [...INITIAL_PRODUCTS];

// 1. Upstash Redis / Vercel KV REST API
const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || "";
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || "";

// 2. GitHub Token (Otomatik Git Commiti ile Kalıcı Veri)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const GITHUB_REPO = process.env.GITHUB_REPOSITORY || "onuraltunbas/hilalavize";

// Tüm Ürünleri Çekme (Asenkron - Kalıcı Depodan)
export async function getAllProductsAsync(): Promise<Product[]> {
  // A) Redis / KV Kontrolü
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      const res = await fetch(`${REDIS_URL}/get/dynamic_products`, {
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
        cache: "no-store",
      });
      const data = await res.json();
      if (data.result) {
        const parsed = typeof data.result === "string" ? JSON.parse(data.result) : data.result;
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryProducts = parsed;
          return memoryProducts;
        }
      }
    } catch (e) {
      console.error("Redis okuma hatası:", e);
    }
  }

  // B) GitHub API Kontrolü
  if (GITHUB_TOKEN) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/dynamic-products.json`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
          cache: "no-store",
        }
      );
      if (res.ok) {
        const fileData = await res.json();
        const content = Buffer.from(fileData.content, "base64").toString("utf-8");
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryProducts = parsed;
          return memoryProducts;
        }
      }
    } catch (e) {
      console.error("GitHub okuma hatası:", e);
    }
  }

  return memoryProducts;
}

// Slug ile Ürün Bulma
export async function getProductBySlugAsync(slug: string): Promise<Product | undefined> {
  const cleanSlug = slug.toLowerCase().trim();
  const all = await getAllProductsAsync();
  return all.find(
    (p) =>
      p.slug.toLowerCase() === cleanSlug ||
      p.id.toLowerCase() === cleanSlug ||
      p.id.toLowerCase().replace("-", "") === cleanSlug
  );
}

// Senkron Fonksiyonlar (Geriye Uyumluluk İçin)
export function getAllProducts(): Product[] {
  return memoryProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  const cleanSlug = slug.toLowerCase().trim();
  return memoryProducts.find(
    (p) =>
      p.slug.toLowerCase() === cleanSlug ||
      p.id.toLowerCase() === cleanSlug ||
      p.id.toLowerCase().replace("-", "") === cleanSlug
  );
}

export function getProductById(id: string): Product | undefined {
  const cleanId = id.toUpperCase().trim();
  return memoryProducts.find((p) => p.id.toUpperCase() === cleanId);
}

// Yeni Ürün Kaydetme (Kalıcı Bulut & Bellek)
export async function saveProductAsync(product: Product): Promise<void> {
  // Belleğe ekle
  const existingIdx = memoryProducts.findIndex((p) => p.id === product.id || p.slug === product.slug);
  if (existingIdx !== -1) {
    memoryProducts[existingIdx] = product;
  } else {
    memoryProducts.unshift(product);
  }

  // A) Redis / KV'ye Yaz
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      await fetch(`${REDIS_URL}/set/dynamic_products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REDIS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(memoryProducts)),
      });
    } catch (e) {
      console.error("Redis yazma hatası:", e);
    }
  }

  // B) GitHub API ile Repoya Otomatik Commit At
  if (GITHUB_TOKEN) {
    try {
      let sha = "";
      const checkRes = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/dynamic-products.json`,
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

      const contentBase64 = Buffer.from(JSON.stringify(memoryProducts, null, 2)).toString("base64");

      await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/dynamic-products.json`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `feat(catalog): yeni urun eklendi [${product.id}] ${product.name}`,
            content: contentBase64,
            sha: sha || undefined,
            branch: "main",
          }),
        }
      );
    } catch (e) {
      console.error("GitHub commit hatası:", e);
    }
  }
}

// Ürün Silme (Kalıcı Bulut & Bellek)
export async function deleteProductAsync(idOrSlug: string): Promise<Product | null> {
  const clean = idOrSlug.toLowerCase().trim();
  const index = memoryProducts.findIndex(
    (p) => p.id.toLowerCase() === clean || p.slug.toLowerCase() === clean
  );

  if (index === -1) return null;

  const removed = memoryProducts.splice(index, 1)[0];

  // A) Redis / KV Güncelle
  if (REDIS_URL && REDIS_TOKEN) {
    try {
      await fetch(`${REDIS_URL}/set/dynamic_products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${REDIS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(JSON.stringify(memoryProducts)),
      });
    } catch (e) {
      console.error("Redis silme hatası:", e);
    }
  }

  // B) GitHub API Güncelle
  if (GITHUB_TOKEN) {
    try {
      const checkRes = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/dynamic-products.json`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      if (checkRes.ok) {
        const fileData = await checkRes.json();
        const contentBase64 = Buffer.from(JSON.stringify(memoryProducts, null, 2)).toString("base64");

        await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/contents/src/data/dynamic-products.json`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: `feat(catalog): urun silindi [${removed.id}] ${removed.name}`,
              content: contentBase64,
              sha: fileData.sha,
              branch: "main",
            }),
          }
        );
      }
    } catch (e) {
      console.error("GitHub silme hatası:", e);
    }
  }

  return removed;
}

// Senkron ekleme ve silme yardımcıları
export function addDynamicProduct(product: Product): void {
  saveProductAsync(product);
}

export function removeDynamicProduct(idOrSlug: string): Product | null {
  const clean = idOrSlug.toLowerCase().trim();
  const index = memoryProducts.findIndex(
    (p) => p.id.toLowerCase() === clean || p.slug.toLowerCase() === clean
  );
  if (index !== -1) {
    const removed = memoryProducts.splice(index, 1);
    deleteProductAsync(idOrSlug);
    return removed[0];
  }
  return null;
}
