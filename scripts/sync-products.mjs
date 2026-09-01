import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const PRODUCTS_JSON_PATH = path.join(rootDir, "products", "products.json");
const PHOTO_SRC_DIR = path.join(rootDir, "products", "photo");
const PHOTO_DEST_DIR = path.join(rootDir, "public", "products", "photo");
const COMPILED_JSON_PATH = path.join(rootDir, "src", "data", "compiled-products.json");
const GENERATED_TS_PATH = path.join(rootDir, "src", "data", "products.ts");

// Kategori & Ön Ek Eşleştirmeleri
const CATEGORY_MAP = {
  avizeler: {
    slug: "avizeler",
    name: "Lüks & Modern Avizeler",
    prefix: "AVZ",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_klasik_kollu_kristal_avize.jpg",
  },
  AVZ: {
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
  APL: {
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
  SPT: {
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
  "abajur-ve-lambaderler": {
    slug: "abajur-ve-lambader",
    name: "Abajur & Lambader Koleksiyonu",
    prefix: "ABJ",
    defaultBranch: "showroom",
    defaultImage: "/images/800x800_kadife_tasarim_berjer.jpg",
  },
  ABJ: {
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
  AYN: {
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
  DST: {
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
  SUS: {
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
  ANH: {
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
  KOL: {
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
  SEH: {
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

function syncPhotos() {
  if (!fs.existsSync(PHOTO_SRC_DIR)) {
    fs.mkdirSync(PHOTO_SRC_DIR, { recursive: true });
  }
  if (!fs.existsSync(PHOTO_DEST_DIR)) {
    fs.mkdirSync(PHOTO_DEST_DIR, { recursive: true });
  }

  const files = fs.readdirSync(PHOTO_SRC_DIR);
  let copiedCount = 0;

  for (const file of files) {
    if (file.startsWith(".")) continue;
    const srcFile = path.join(PHOTO_SRC_DIR, file);
    const destFile = path.join(PHOTO_DEST_DIR, file);

    const stat = fs.statSync(srcFile);
    if (stat.isFile()) {
      fs.copyFileSync(srcFile, destFile);
      copiedCount++;
    }
  }

  console.log(`[Ürün Sistemi] 📸 ${copiedCount} fotoğraf products/photo/ -> public/products/photo/ klasörüne senkronize edildi.`);
}

function findPhotoForProduct(productId, customPhoto) {
  if (customPhoto) return customPhoto;

  const validExts = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".PNG", ".JPEG", ".WEBP"];
  
  // Önce products/photo içinde ID'ye göre ara
  for (const ext of validExts) {
    const filename = `${productId}${ext}`;
    const fullPath = path.join(PHOTO_SRC_DIR, filename);
    if (fs.existsSync(fullPath)) {
      return `/products/photo/${filename}`;
    }
  }

  // public/products/photo içinde kontrol et
  for (const ext of validExts) {
    const filename = `${productId}${ext}`;
    const fullPath = path.join(PHOTO_DEST_DIR, filename);
    if (fs.existsSync(fullPath)) {
      return `/products/photo/${filename}`;
    }
  }

  return null;
}

function compileProducts() {
  if (!fs.existsSync(PRODUCTS_JSON_PATH)) {
    console.error(`[Ürün Sistemi] ❌ ${PRODUCTS_JSON_PATH} bulunamadı!`);
    process.exit(1);
  }

  const rawData = fs.readFileSync(PRODUCTS_JSON_PATH, "utf-8");
  let rawList;
  try {
    rawList = JSON.parse(rawData);
  } catch (err) {
    console.error(`[Ürün Sistemi] ❌ products/products.json JSON ayrıştırma hatası:`, err.message);
    process.exit(1);
  }

  if (!Array.isArray(rawList)) {
    console.error(`[Ürün Sistemi] ❌ products.json geçerli bir dizi (array) olmalıdır!`);
    process.exit(1);
  }

  const processedProducts = [];
  const usedSlugs = new Set();
  const usedIds = new Set();

  for (let i = 0; i < rawList.length; i++) {
    const item = rawList[i];
    const id = (item.id || `URN-${String(i + 1).padStart(3, "0")}`).toUpperCase().trim();
    
    if (usedIds.has(id)) {
      console.warn(`[Ürün Sistemi] ⚠️ Uyarı: ${id} ID'si birden fazla kullanılmış!`);
    }
    usedIds.add(id);

    // Kategori tespiti (slug veya ön ek üzerinden)
    const rawCategory = (item.category || item.categorySlug || id.split("-")[0] || "avizeler").trim();
    const catConfig = CATEGORY_MAP[rawCategory] || CATEGORY_MAP[id.split("-")[0]] || CATEGORY_MAP["avizeler"];

    // Slug üretimi
    let slug = item.slug ? turkishToSlug(item.slug) : turkishToSlug(item.name || id);
    if (!slug) slug = `urun-${id.toLowerCase()}`;
    
    if (usedSlugs.has(slug)) {
      slug = `${slug}-${id.toLowerCase()}`;
    }
    usedSlugs.add(slug);

    // Fotoğraf tespiti
    let photoPath = findPhotoForProduct(id, item.photo || item.image);
    if (!photoPath) {
      photoPath = catConfig.defaultImage;
    }

    const name = item.name || `${catConfig.name} - ${id}`;
    const style = item.style || "Modern & Spor";
    const dimensions = item.dimensions || item.olculer || item.boyutlar || "Standart Ölçü";
    const lightingType = item.lightingType || item.duy || item.aydinlatma || "E14 / E27 / LED Uyumlu";
    const material = item.material || item.malzeme || "Özel Hilal Tasarım";
    const branch = item.branch || catConfig.defaultBranch;
    const badge = item.badge || (i < 3 ? "Öne Çıkan Ürün" : undefined);

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

    processedProducts.push({
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
      image: photoPath,
      images: Array.isArray(item.images) && item.images.length > 0 ? item.images : [photoPath],
      features,
      seoTitle,
      seoDescription,
    });
  }

  // 1. JSON olarak kaydet
  fs.writeFileSync(COMPILED_JSON_PATH, JSON.stringify(processedProducts, null, 2), "utf-8");

  // 2. TypeScript products.ts dosyasını güncelle
  const tsContent = `// BU DOSYA OTOMATİK OLUŞTURULMAKTADIR.
// Ürün eklemek veya düzenlemek için 'products/products.json' dosyasını ve 'products/photo/' klasörünü kullanınız.

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

export const PRODUCTS: Product[] = ${JSON.stringify(processedProducts, null, 2)};
`;

  fs.writeFileSync(GENERATED_TS_PATH, tsContent, "utf-8");

  console.log(`[Ürün Sistemi] ✅ Toplam ${processedProducts.length} adet ürün başarıyla derlendi ve hazırlandı.`);
}

console.log("[Ürün Sistemi] 🚀 Ürün senkronizasyonu başlatılıyor...");
syncPhotos();
compileProducts();
console.log("[Ürün Sistemi] 🎉 Tüm ürünler ve fotoğraflar hazır!");
