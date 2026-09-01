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
  avizeler: {
    slug: "avizeler",
    name: "Lüks & Modern Avizeler",
    prefix: "AVZ",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_klasik_kollu_kristal_avize.jpg",
  },
  aplikler: {
    slug: "aplikler",
    name: "Dekoratif Duvar Aplikleri",
    prefix: "APL",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_dekoratif_duvar_aplik.jpg",
  },
  "spot-ve-ray-spot": {
    slug: "spot-ve-ray-spot",
    name: "Spot & Manyetik Ray Spot Sistemleri",
    prefix: "SPT",
    defaultBranch: "electrical",
    defaultImage: "/images/800x800_manyetik_ray_spot_sistem.jpg",
  },
  "abajur-ve-lambader": {
    slug: "abajur-ve-lambader",
    name: "Abajur & Lambader Koleksiyonu",
    prefix: "ABJ",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_kadife_tasarim_berjer.jpg",
  },
  "dekoratif-aynalar": {
    slug: "dekoratif-aynalar",
    name: "Dekoratif & Akıllı LED Aynalar",
    prefix: "AYN",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_dokunmatik_led_ayna.jpg",
  },
  "duvar-ve-masa-saatleri": {
    slug: "duvar-ve-masa-saatleri",
    name: "Özel Tasarım Duvar & Masa Saatleri",
    prefix: "DST",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_ozel_tasarim_duvar_saati.jpg",
  },
  "cam-sus-esyalari": {
    slug: "cam-sus-esyalari",
    name: "Cam Sanat & Süs Eşyaları",
    prefix: "SUS",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_ufleme_cam_vazo_aksesuar.jpg",
  },
  "anahtar-ve-priz-serileri": {
    slug: "anahtar-ve-priz-serileri",
    name: "Lüks Anahtar & Priz Serileri",
    prefix: "ANH",
    defaultBranch: "electrical",
    defaultImage: "/images/800x800_luks_cam_anahtar_priz.jpg",
  },
  "dekoratif-koltuk-ve-berjerler": {
    slug: "dekoratif-koltuk-ve-berjerler",
    name: "Dekoratif Koltuk & Berjerler",
    prefix: "KOL",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_kadife_tasarim_berjer.jpg",
  },
  "dekoratif-sehpalar": {
    slug: "dekoratif-sehpalar",
    name: "Dekoratif Mermer & Bronz Sehpalar",
    prefix: "SEH",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_mermer_bronz_orta_sehpa.jpg",
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

      const name = item.name || `${catConfig.name} - Model ${itemNo}`;
      const style = item.style || "Modern & Spor";
      const dimensions = item.dimensions || item.olculer || item.boyutlar || "Standart Ölçü";
      const lightingType = item.lightingType || item.duy || item.aydinlatma || "E14 / E27 / LED Uyumlu";
      const material = item.material || item.malzeme || "Özel Hilal Tasarım";
      const branch = item.branch || catConfig.defaultBranch;
      const badge = item.badge || undefined;

      const shortDescription =
        item.shortDescription ||
        item.kisaAciklama ||
        `${name}; ${material} gövde yapısı ve ${dimensions} ölçüleriyle yaşam alanlarınıza değer katar.`;

      const description =
        item.description ||
        item.aciklama ||
        `${name}, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. ${dimensions} ölçüleri, ${lightingType} aydınlatması ile estetik ve yüksek verimli ışık sağlar.`;

      const features = Array.isArray(item.features)
        ? item.features
        : [
            `${lightingType}`,
            `${dimensions}`,
            `${material}`,
            "Hilal Avize Güvencesiyle Hasarsız Teslimat",
            "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği",
          ];

      const seoTitle = item.seoTitle || `${name} Kahramanmaraş | Hilal Avize`;
      const seoDescription =
        item.seoDescription ||
        `${name} modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin.`;

      allProcessedProducts.push({
        id,
        slug,
        name,
        categorySlug: catConfig.slug,
        categoryName: catConfig.name,
        style,
        badge,
        description,
        shortDescription,
        material,
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
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  style: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist";
  badge?: string;
  description: string;
  shortDescription: string;
  material: string;
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
