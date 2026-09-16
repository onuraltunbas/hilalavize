import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

export const dynamic = "force-dynamic";

const CATEGORY_CONFIGS: Record<
  string,
  { prefix: string; name: string; folder: string; step?: number; defaultBadge: string }
> = {
  "tekli-avizeler": {
    prefix: "TKL",
    name: "Üçlü & Tekli Avizeler ve Sarkıtlar",
    folder: "tekli-avizeler",
    defaultBadge: "Sarkıt Avize",
  },
  "aplik-ve-spotlar": {
    prefix: "ASP",
    name: "Aplik ve Spot Aydınlatma",
    folder: "aplik-ve-spotlar",
    defaultBadge: "Duvar Apliği",
  },
  "yerli-urunler": {
    prefix: "YRL",
    name: "Yerli Üretim Koleksiyonu",
    folder: "yerli-urunler",
    step: 10,
    defaultBadge: "Özel Ölçü Üretim",
  },
  "ledli-grup": {
    prefix: "LED",
    name: "Modern LED Avizeler",
    folder: "ledli-grup",
    defaultBadge: "Modern LED Seri",
  },
  klasik: {
    prefix: "KLS",
    name: "Klasik Kristal Avizeler",
    folder: "klasik",
    defaultBadge: "Klasik Kristal",
  },
  aksesuar: {
    prefix: "AKS",
    name: "Aksesuarlar",
    folder: "aksesuar",
    defaultBadge: "Showroom Özel Koleksiyon",
  },
};

function getNextProductCode(catSlug: string) {
  const rootDir = process.cwd();
  const catConfig = CATEGORY_CONFIGS[catSlug];
  if (!catConfig) {
    throw new Error(`Geçersiz kategori: ${catSlug}`);
  }

  const jsonPath = path.join(rootDir, "products", catConfig.folder, "urunler.json");
  let items: any[] = [];
  if (fs.existsSync(jsonPath)) {
    try {
      items = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    } catch {}
  }

  if (catConfig.step === 10) {
    let max = 690;
    for (const item of items) {
      const m = String(item.code || item.id || "").match(/YRL-(\d+)/i);
      if (m) {
        const val = parseInt(m[1], 10);
        if (val > max) max = val;
      }
    }
    const nextVal = max + 10;
    return {
      code: `HL-YRL-${nextVal}`,
      id: `YRL-${nextVal}`,
      no: items.length + 1,
      categoryName: catConfig.name,
      prefix: catConfig.prefix,
    };
  } else {
    let max = 0;
    const regex = new RegExp(`${catConfig.prefix}-(\\d+)`, "i");
    for (const item of items) {
      const m = String(item.code || item.id || "").match(regex);
      if (m) {
        const val = parseInt(m[1], 10);
        if (val > max) max = val;
      }
    }
    const nextNum = max + 1;
    const codeStr = `${catConfig.prefix}-${String(nextNum).padStart(3, "0")}`;
    return {
      code: `HL-${codeStr}`,
      id: codeStr,
      no: items.length + 1,
      categoryName: catConfig.name,
      prefix: catConfig.prefix,
    };
  }
}

// GET: Kategoriye göre sonraki üretilecek kodu döner
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const categorySlug = searchParams.get("categorySlug");

    if (!categorySlug || !CATEGORY_CONFIGS[categorySlug]) {
      return NextResponse.json(
        { success: false, error: "Geçerli bir kategori belirtilmedi." },
        { status: 400 }
      );
    }

    const codeInfo = getNextProductCode(categorySlug);
    return NextResponse.json({
      success: true,
      ...codeInfo,
    });
  } catch (error: any) {
    console.error("GET /api/admin/products/add error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Kod üretilemedi." },
      { status: 500 }
    );
  }
}

// POST: Yeni ürün ekler (SADECE 'onur' kullanıcısı)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      username,
      categorySlug,
      dimensions,
      lightingType,
      badge,
      shortDescription,
      images, // array of { name: string, base64: string }
    } = body;

    // GÜVENLİK KONTROLÜ: Sadece 'onur' kullanıcısı yapabilir!
    const cleanUsername = String(username || "").toLowerCase().trim();
    if (cleanUsername !== "onur") {
      return NextResponse.json(
        {
          success: false,
          error: "Bu işlemi sadece 'onur' kullanıcı adı olan yetkili yapabilir.",
        },
        { status: 403 }
      );
    }

    if (!categorySlug || !CATEGORY_CONFIGS[categorySlug]) {
      return NextResponse.json(
        { success: false, error: "Lütfen geçerli bir kategori seçin." },
        { status: 400 }
      );
    }

    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { success: false, error: "En az 1 adet ürün görseli yüklemelisiniz." },
        { status: 400 }
      );
    }

    const catConfig = CATEGORY_CONFIGS[categorySlug];
    const rootDir = process.cwd();

    // 1. Kod Üretimi
    const { code, id, no } = getNextProductCode(categorySlug);

    // 2. Görselleri Kaydet (products/ & public/products/)
    const photoDir = path.join(rootDir, "products", catConfig.folder, "photo");
    const publicPhotoDir = path.join(rootDir, "public", "products", catConfig.folder, "photo");

    if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });
    if (!fs.existsSync(publicPhotoDir)) fs.mkdirSync(publicPhotoDir, { recursive: true });

    const savedImageUrls: string[] = [];

    images.forEach((imgObj: { name: string; base64: string }, index: number) => {
      // Base64 header temizle: data:image/jpeg;base64,...
      let rawBase64 = imgObj.base64 || "";
      let ext = ".jpeg";
      if (rawBase64.includes(";base64,")) {
        const parts = rawBase64.split(";base64,");
        const mime = parts[0].replace("data:", "");
        if (mime === "image/png") ext = ".png";
        else if (mime === "image/webp") ext = ".webp";
        rawBase64 = parts[1];
      } else {
        const parsedExt = path.extname(imgObj.name || "").toLowerCase();
        if (parsedExt) ext = parsedExt;
      }

      const fileName = index === 0 ? `${code}${ext}` : `${code}_${index + 1}${ext}`;
      const destPath1 = path.join(photoDir, fileName);
      const destPath2 = path.join(publicPhotoDir, fileName);

      const buffer = Buffer.from(rawBase64, "base64");
      fs.writeFileSync(destPath1, buffer);
      try {
        fs.writeFileSync(destPath2, buffer);
      } catch {}

      savedImageUrls.push(`/products/${catConfig.folder}/photo/${fileName}`);
    });

    // 3. Ürün Objesini Oluştur
    const cleanDim = String(dimensions || "").trim() || "Standart Ölçü / Ayarlanabilir Yükseklik";
    const cleanLight = String(lightingType || "").trim() || "LED Uyumlu";
    const cleanBadge = String(badge || "").trim() || catConfig.defaultBadge;
    const cleanDesc =
      String(shortDescription || "").trim() ||
      `${code}; ${cleanDim} ölçüleri ve ${cleanLight} aydınlatması ile yaşam alanlarınıza değer katar.`;

    const newProductItem: any = {
      no,
      id,
      code,
      name: code,
      badge: cleanBadge,
      dimensions: cleanDim,
      lightingType: cleanLight,
      shortDescription: cleanDesc,
      images: savedImageUrls,
    };

    if (categorySlug === "yerli-urunler") {
      newProductItem.features = [
        "İstediğiniz Renkte, Ebatta ve Şekilde Özel İmalat",
        "Mekanınıza Göre Ayarlanabilir Taşıyıcı Boyu",
        "Hilal Avize Güvencesiyle Hasarsız Teslimat",
        "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği",
      ];
    }

    // 4. urunler.json Dosyasına Ekle
    const urunlerJsonPath = path.join(rootDir, "products", catConfig.folder, "urunler.json");
    const publicUrunlerJsonPath = path.join(rootDir, "public", "products", catConfig.folder, "urunler.json");

    let currentItems: any[] = [];
    if (fs.existsSync(urunlerJsonPath)) {
      try {
        currentItems = JSON.parse(fs.readFileSync(urunlerJsonPath, "utf-8"));
      } catch {}
    }

    currentItems.push(newProductItem);
    const jsonStr = JSON.stringify(currentItems, null, 2);
    fs.writeFileSync(urunlerJsonPath, jsonStr, "utf-8");
    try {
      fs.writeFileSync(publicUrunlerJsonPath, jsonStr, "utf-8");
    } catch {}

    // 5. Kategori Sayaç Güncellemesi (src/data/categories.ts)
    try {
      const catTsPath = path.join(rootDir, "src", "data", "categories.ts");
      if (fs.existsSync(catTsPath)) {
        let catTsContent = fs.readFileSync(catTsPath, "utf-8");
        // İlgili kategorinin itemCount değerini 1 artır
        const regex = new RegExp(`(slug:\\s*["\']${categorySlug}["\'][\\s\\S]*?itemCount:\\s*)(\\d+)`, "m");
        if (regex.test(catTsContent)) {
          catTsContent = catTsContent.replace(regex, (_m, p1, p2) => `${p1}${parseInt(p2, 10) + 1}`);
          fs.writeFileSync(catTsPath, catTsContent, "utf-8");
        }
      }
    } catch (catErr) {
      console.warn("categories.ts itemCount güncelleme uyarısı:", catErr);
    }

    // 6. sync-products.mjs Scriptini Çalıştır (compiled-products.json ve products.ts anında güncellenir)
    try {
      execSync("node scripts/sync-products.mjs", { cwd: rootDir });
    } catch (syncErr: any) {
      console.error("sync-products çalıştırma hatası:", syncErr.message);
    }

    // 7. Yerel Git Commit (Arka planda kalıcı hale getirme)
    try {
      execSync(
        `git add products/${catConfig.folder}/ products/ compiled-products.json public/products/ src/data/categories.ts && git commit -m "feat(product): yeni urun ${code} eklendi"`,
        { cwd: rootDir, stdio: "ignore" }
      );
    } catch {}

    return NextResponse.json({
      success: true,
      message: `${code} ürünü başarıyla sisteme eklendi.`,
      product: {
        id,
        code,
        name: code,
        categorySlug,
        categoryName: catConfig.name,
        badge: cleanBadge,
        dimensions: cleanDim,
        lightingType: cleanLight,
        shortDescription: cleanDesc,
        image: savedImageUrls[0],
        images: savedImageUrls,
        branch: "showroom",
      },
    });
  } catch (error: any) {
    console.error("POST /api/admin/products/add error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Ürün eklenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
