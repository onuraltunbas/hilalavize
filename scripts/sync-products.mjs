import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const PRODUCTS_DIR = path.join(rootDir, "products");
const PUBLIC_PRODUCTS_DIR = path.join(rootDir, "public", "products");
const COMPILED_JSON_PATH = path.join(rootDir, "src", "data", "compiled-products.json");
const GENERATED_TS_PATH = path.join(rootDir, "src", "data", "products.ts");

const CATEGORY_CONFIGS = {
  klasik: {
    slug: "klasik",
    name: "Klasik Avizeler",
    prefix: "KLS",
    defaultBranch: "showroom",
    defaultImage: "/images/theresa_kapak.jpeg",
  },
  "ledli-grup": {
    slug: "ledli-grup",
    name: "LED'li Avizeler",
    prefix: "LED",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_modern_led_halka_avize.jpg",
  },
  "tekli-avizeler": {
    slug: "tekli-avizeler",
    name: "Tekli Avizeler & Sarkıtlar",
    prefix: "TKL",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_modern_led_halka_avize.jpg",
  },
  "aplik-ve-spotlar": {
    slug: "aplik-ve-spotlar",
    name: "Aplik & Spot Aydınlatma",
    prefix: "ASP",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_dekoratif_duvar_aplik.jpg",
  },
  aksesuar: {
    slug: "aksesuar",
    name: "Lüks Aksesuar & Çini Koleksiyonu",
    prefix: "AKS",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_ufleme_cam_vazo_aksesuar.jpg",
  },
  "yerli-urunler": {
    slug: "yerli-urunler",
    name: "Yerli Üretim Koleksiyonu",
    prefix: "YRL",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_klasik_kollu_kristal_avize.jpg",
  },
  kategorisiz: {
    slug: "kategorisiz",
    name: "Tüm Avizeler (Yeni Eklenenler)",
    prefix: "AVZ",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_klasik_kollu_kristal_avize.jpg",
  },
};

function turkishToSlug(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Bir ürün için tüm fotoğrafları bul (10.jpg, 11.jpg, 12.jpg vs. veya AVZ-001.jpg)
function findPhotosForProduct(catFolder, itemNo, productId, customPhoto, customImages) {
  if (Array.isArray(customImages) && customImages.length > 0) {
    return customImages;
  }
  if (customPhoto) {
    return [customPhoto];
  }

  const photoDir = path.join(PRODUCTS_DIR, catFolder, "photo");
  const rootPhotoDir = path.join(PRODUCTS_DIR, "photo");
  const foundImages = [];
  const validExts = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"];

  // 1. Kullanıcının istediği kural:
  // no = 1 -> 10, 11, 12, 13...
  // no = 2 -> 20, 21, 22...
  // no = 10 -> 100, 101, 102...
  if (fs.existsSync(photoDir)) {
    const files = fs.readdirSync(photoDir);
    const prefixBase = `${itemNo}`; // 1, 2, 10...

    // Aday dosya isimleri: 10, 11, 12... VEYA 1, 1_1, 1_2... VEYA ID
    const matchingFiles = files.filter((f) => {
      if (f.startsWith(".")) return false;
      const baseName = path.parse(f).name;
      const ext = path.parse(f).ext;
      if (!validExts.includes(ext)) return false;

      // Kural 1: 10, 11, 12, ... (itemNo=1 için 10-19 arası, itemNo=10 için 100-109 arası)
      if (/^\d+$/.test(baseName)) {
        const val = parseInt(baseName, 10);
        const startVal = itemNo * 10;
        const endVal = startVal + 9;
        if (val >= startVal && val <= endVal) return true;
        // Tek rakam yazıldıysa (örn: 1.jpg)
        if (baseName === String(itemNo)) return true;
      }

      // Kural 2: ID ile adlandırma (Örn: AVZ-001.jpg, AVZ-001_1.jpg)
      if (productId && (baseName === productId || baseName.startsWith(`${productId}_`) || baseName.startsWith(`${productId}-`))) {
        return true;
      }

      // Kural 3: 1_1, 1_2 formatı
      if (baseName.startsWith(`${prefixBase}_`) || baseName.startsWith(`${prefixBase}-`)) {
        return true;
      }

      return false;
    });

    // Doğal sıralama yap: 10.jpg, 11.jpg, 12.jpg...
    matchingFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

    for (const f of matchingFiles) {
      foundImages.push(`/products/${catFolder}/photo/${f}`);
    }
  }

  // 2. Kategori klasöründe yoksa kök products/photo/ klasörüne bak
  if (foundImages.length === 0 && fs.existsSync(rootPhotoDir)) {
    const files = fs.readdirSync(rootPhotoDir);
    const matchingFiles = files.filter((f) => {
      const baseName = path.parse(f).name;
      const ext = path.parse(f).ext;
      if (!validExts.includes(ext)) return false;
      return productId && (baseName === productId || baseName.startsWith(`${productId}_`));
    });

    matchingFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
    for (const f of matchingFiles) {
      foundImages.push(`/products/photo/${f}`);
    }
  }

  return foundImages;
}

function processAllProducts() {
  console.log("[Ürün Sistemi] 🚀 Kategorilere göre ürün senkronizasyonu başlatılıyor...");

  // Public dizinini temizle ve senkronize et
  if (!fs.existsSync(PUBLIC_PRODUCTS_DIR)) {
    fs.mkdirSync(PUBLIC_PRODUCTS_DIR, { recursive: true });
  }
  copyDirRecursive(PRODUCTS_DIR, PUBLIC_PRODUCTS_DIR);

  const allProcessedProducts = [];
  const usedSlugs = new Set();
  const usedIds = new Set();

  // 1. Kategoriler klasörlerini tara
  const categoryFolders = Object.keys(CATEGORY_CONFIGS);

  for (const catSlug of categoryFolders) {
    const catConfig = CATEGORY_CONFIGS[catSlug];
    const catDirPath = path.join(PRODUCTS_DIR, catSlug);
    const urunlerJsonPath = path.join(catDirPath, "urunler.json");

    if (!fs.existsSync(catDirPath)) {
      fs.mkdirSync(path.join(catDirPath, "photo"), { recursive: true });
      fs.writeFileSync(urunlerJsonPath, "[]\n", "utf-8");
    }

    let items = [];
    if (fs.existsSync(urunlerJsonPath)) {
      try {
        const raw = fs.readFileSync(urunlerJsonPath, "utf-8");
        items = JSON.parse(raw);
      } catch (err) {
        console.error(`[Ürün Sistemi] ❌ ${catSlug}/urunler.json ayrıştırma hatası:`, err.message);
      }
    }

    if (!Array.isArray(items)) items = [];

    items.forEach((item, index) => {
      const itemNo = item.no || index + 1;
      const id = (item.id || `${catConfig.prefix}-${String(itemNo).padStart(3, "0")}`).toUpperCase().trim();
      const code = item.code || `HL-${id}`;
      usedIds.add(id);

      // Fotoğrafları bul (10.jpg, 11.jpg vb.)
      let productImages = findPhotosForProduct(catSlug, itemNo, id, item.photo || item.image, item.images);
      if (productImages.length === 0) {
        productImages = [catConfig.defaultImage];
      }

      const mainImage = productImages[0];

      // Slug
      let slug = item.slug ? turkishToSlug(item.slug) : turkishToSlug(item.name || id);
      if (!slug) slug = `${catSlug}-${id.toLowerCase()}`;
      if (usedSlugs.has(slug)) {
        slug = `${slug}-${id.toLowerCase()}`;
      }
      usedSlugs.add(slug);

      // Akıllı İsimlendirme (İsim yazılmazsa kategoriye uygun otomatik lüks isim atanır)
      let name = item.name;
      if (!name || name.trim() === "") {
        if (catSlug === "avizeler") {
          name = `Dekoratif Modern LED Avize - Model ${itemNo}`;
        } else if (catSlug === "aplikler") {
          name = `Dekoratif Duvar Apliği - Model ${itemNo}`;
        } else if (catSlug === "spot-ve-ray-spot") {
          name = `Dekoratif Manyetik Ray Spot - Model ${itemNo}`;
        } else if (catSlug === "abajur-ve-lambader") {
          name = `Dekoratif Lüks Lambader - Model ${itemNo}`;
        } else if (catSlug === "dekoratif-aynalar") {
          name = `Dekoratif Akıllı LED Ayna - Model ${itemNo}`;
        } else if (catSlug === "duvar-ve-masa-saatleri") {
          name = `Özel Tasarım Dekoratif Saat - Model ${itemNo}`;
        } else if (catSlug === "cam-sus-esyalari") {
          name = `El Yapımı Cam Süs Eşyası - Model ${itemNo}`;
        } else if (catSlug === "anahtar-ve-priz-serileri") {
          name = `Lüks Cam Anahtar & Priz - Model ${itemNo}`;
        } else if (catSlug === "dekoratif-koltuk-ve-berjerler") {
          name = `Özel Tasarım Lüks Berjer - Model ${itemNo}`;
        } else if (catSlug === "dekoratif-sehpalar") {
          name = `Dekoratif Mermer & Bronz Sehpa - Model ${itemNo}`;
        } else {
          name = `${catConfig.name} - Model ${itemNo}`;
        }
      }

      // Akıllı Ölçü / Boyut (Ölçü yazılmazsa 'Ayarlanabilir Yükseklik / Standart Ölçü' atanır)
      const rawDim = item.dimensions || item.olculer || item.boyutlar;
      const dimensions = rawDim && rawDim.trim() !== "" ? rawDim.trim() : "Ayarlanabilir Yükseklik / Standart Ölçü";

      // Akıllı Aydınlatma / Duy
      const rawLight = item.lightingType || item.duy || item.aydinlatma;
      const lightingType = rawLight && rawLight.trim() !== "" ? rawLight.trim() : (catSlug === "avizeler" || catSlug === "aplikler" || catSlug === "spot-ve-ray-spot" ? "Dahili LED / E14-E27 Uyumlu" : "Dekoratif Aydınlatma / Obje");
      const branch = item.branch || catConfig.defaultBranch;
      const badge = item.badge || undefined;
      const subcategory = item.subcategory || item.altKategori || undefined;

      const shortDescription =
        item.shortDescription ||
        item.kisaAciklama ||
        `${name}; ${dimensions} ölçüleri ve ${lightingType} aydınlatması ile yaşam alanlarınıza değer katar.`;

      const description =
        item.description ||
        item.aciklama ||
        `${name}, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. ${dimensions} ölçüleri, ${lightingType} aydınlatması ile estetik ve yüksek verimli ışık sağlar.`;

      const features = Array.isArray(item.features)
        ? item.features
        : [
            `${lightingType}`,
            `${dimensions}`,
            "Hilal Avize Güvencesiyle Hasarsız Teslimat",
            "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği",
          ];

      const seoTitle = item.seoTitle || `${name} Kahramanmaraş | Hilal Avize`;
      const seoDescription =
        item.seoDescription ||
        `${name} modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin.`;

      allProcessedProducts.push({
        id,
        code,
        slug,
        name,
        categorySlug: catConfig.slug,
        categoryName: catConfig.name,
        badge,
        subcategory,
        description,
        shortDescription,
        dimensions,
        lightingType,
        branch,
        image: mainImage,
        images: productImages,
        features,
        seoTitle,
        seoDescription,
      });
    });
  }

  // 2. Compiled JSON & TS Kaydet
  fs.writeFileSync(COMPILED_JSON_PATH, JSON.stringify(allProcessedProducts, null, 2), "utf-8");

  const tsContent = `// BU DOSYA OTOMATİK OLUŞTURULMAKTADIR.
// Ürün eklemek için 'products/[kategori]/urunler.json' dosyasını ve 'products/[kategori]/photo/' klasörünü kullanınız.

export interface Product {
  id: string;
  code: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  badge?: string;
  subcategory?: string;
  description: string;
  shortDescription: string;
  dimensions: string;
  lightingType: string;
  branch: "showroom" | "electrical";
  image: string;
  images: string[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

export const PRODUCTS: Product[] = ${JSON.stringify(allProcessedProducts, null, 2)};
`;

  fs.writeFileSync(GENERATED_TS_PATH, tsContent, "utf-8");

  console.log(`[Ürün Sistemi] ✅ Toplam ${allProcessedProducts.length} ürün 10 kategoriden başarıyla derlendi.`);
}

processAllProducts();
