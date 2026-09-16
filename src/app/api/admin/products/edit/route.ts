import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { getAdminPrices, saveAdminPrices } from "@/lib/admin-storage";

export const dynamic = "force-dynamic";

const CATEGORY_CONFIGS: Record<
  string,
  { prefix: string; name: string; folder: string; defaultBadge: string }
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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      username,
      code,
      categorySlug,
      name,
      dimensions,
      lightingType,
      badge,
      shortDescription,
      price,
      keptImages = [],
      newImages = [],
    } = body;

    // GÜVENLİK: Sadece 'onur' kullanıcısı ürün düzenleyebilir!
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

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Düzenlenecek ürün kodu belirtilmedi." },
        { status: 400 }
      );
    }

    const rootDir = process.cwd();

    // 1. Kategoriyi tespit et
    let targetCategorySlug = categorySlug;
    let targetFolder = CATEGORY_CONFIGS[categorySlug]?.folder;

    // Eğer categorySlug belirtilmemişse veya bulunamazsa klasörleri tara
    if (!targetFolder) {
      for (const [slug, conf] of Object.entries(CATEGORY_CONFIGS)) {
        const testPath = path.join(rootDir, "products", conf.folder, "urunler.json");
        if (fs.existsSync(testPath)) {
          try {
            const data: any[] = JSON.parse(fs.readFileSync(testPath, "utf-8"));
            if (data.some((item) => item.code === code || item.id === code || `HL-${item.id}` === code)) {
              targetCategorySlug = slug;
              targetFolder = conf.folder;
              break;
            }
          } catch {}
        }
      }
    }

    if (!targetFolder || !CATEGORY_CONFIGS[targetCategorySlug]) {
      return NextResponse.json(
        { success: false, error: `Ürün kategorisi bulunamadı: ${code}` },
        { status: 404 }
      );
    }

    const catConfig = CATEGORY_CONFIGS[targetCategorySlug];
    const photoDir = path.join(rootDir, "products", targetFolder, "photo");
    const publicPhotoDir = path.join(rootDir, "public", "products", targetFolder, "photo");

    if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });
    if (!fs.existsSync(publicPhotoDir)) fs.mkdirSync(publicPhotoDir, { recursive: true });

    // 2. Yeni fotoğrafları kaydet
    const savedNewImageUrls: string[] = [];
    if (Array.isArray(newImages) && newImages.length > 0) {
      newImages.forEach((imgObj: { name: string; base64: string }, index: number) => {
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

        const timestamp = Date.now();
        const safeCode = code.replace(/[^a-zA-Z0-9_-]/g, "_");
        const fileName = `${safeCode}_add_${timestamp}_${index + 1}${ext}`;
        const destPath1 = path.join(photoDir, fileName);
        const destPath2 = path.join(publicPhotoDir, fileName);

        const buffer = Buffer.from(rawBase64, "base64");
        fs.writeFileSync(destPath1, buffer);
        try {
          fs.writeFileSync(destPath2, buffer);
        } catch {}

        savedNewImageUrls.push(`/products/${targetFolder}/photo/${fileName}`);
      });
    }

    // 3. Nihai fotoğraf listesini oluştur (tutulanlar + yeniler)
    const validKeptImages = Array.isArray(keptImages)
      ? keptImages.filter((img) => typeof img === "string" && img.trim() !== "")
      : [];
    const finalImages = [...validKeptImages, ...savedNewImageUrls];

    if (finalImages.length === 0) {
      return NextResponse.json(
        { success: false, error: "Ürünün en az 1 adet görseli bulunmalıdır." },
        { status: 400 }
      );
    }

    // 4. urunler.json dosyasını güncelle
    const urunlerJsonPath = path.join(rootDir, "products", targetFolder, "urunler.json");
    const publicUrunlerJsonPath = path.join(rootDir, "public", "products", targetFolder, "urunler.json");

    if (!fs.existsSync(urunlerJsonPath)) {
      return NextResponse.json(
        { success: false, error: "Kategori veri dosyası bulunamadı." },
        { status: 404 }
      );
    }

    let items: any[] = [];
    try {
      items = JSON.parse(fs.readFileSync(urunlerJsonPath, "utf-8"));
    } catch {
      return NextResponse.json(
        { success: false, error: "Kategori veri dosyası okunamadı." },
        { status: 500 }
      );
    }

    const itemIndex = items.findIndex(
      (it) => it.code === code || it.id === code || `HL-${it.id}` === code
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        { success: false, error: `Ürün veritabanında bulunamadı (${code}).` },
        { status: 404 }
      );
    }

    const existingItem = items[itemIndex];

    // Eski fotoğraflardan silinenleri tespit et ve güvenliyse diskten temizle
    const oldImages: string[] = Array.isArray(existingItem.images)
      ? existingItem.images
      : existingItem.photo
      ? [existingItem.photo]
      : [];

    const deletedImages = oldImages.filter((oldImg) => !finalImages.includes(oldImg));
    deletedImages.forEach((delImg) => {
      try {
        // Yalnızca bu ürünün kendi fotoğraf klasöründeki dosyaları sil
        if (delImg.startsWith(`/products/${targetFolder}/photo/`)) {
          const fileName = path.basename(delImg);
          const p1 = path.join(photoDir, fileName);
          const p2 = path.join(publicPhotoDir, fileName);
          if (fs.existsSync(p1)) fs.unlinkSync(p1);
          if (fs.existsSync(p2)) fs.unlinkSync(p2);
        }
      } catch (err) {
        console.warn("Dosya silme uyarısı:", delImg, err);
      }
    });

    // Güncellenmiş alanlar
    const updatedItem = {
      ...existingItem,
      name: (name !== undefined && name !== null && String(name).trim() !== "") ? String(name).trim() : (existingItem.name || code),
      badge: badge !== undefined ? String(badge).trim() : (existingItem.badge || catConfig.defaultBadge),
      dimensions: dimensions !== undefined ? String(dimensions).trim() : (existingItem.dimensions || "Standart Ölçü"),
      lightingType: lightingType !== undefined ? String(lightingType).trim() : (existingItem.lightingType || "LED Uyumlu"),
      shortDescription: shortDescription !== undefined ? String(shortDescription).trim() : existingItem.shortDescription,
      images: finalImages,
    };

    items[itemIndex] = updatedItem;

    const updatedJsonStr = JSON.stringify(items, null, 2);
    fs.writeFileSync(urunlerJsonPath, updatedJsonStr, "utf-8");
    try {
      fs.writeFileSync(publicUrunlerJsonPath, updatedJsonStr, "utf-8");
    } catch {}

    // 5. Fiyat güncellemesi varsa kaydet
    if (price !== undefined) {
      try {
        const prices = await getAdminPrices();
        if (price === null || String(price).trim() === "") {
          delete prices[code];
        } else {
          prices[code] = typeof price === "number" ? price : String(price).trim();
        }
        await saveAdminPrices(prices);
      } catch (priceErr) {
        console.warn("Fiyat kaydetme uyarısı:", priceErr);
      }
    }

    // 6. sync-products.mjs Scriptini Çalıştır
    try {
      execSync("node scripts/sync-products.mjs", { cwd: rootDir });
    } catch (syncErr: any) {
      console.error("sync-products çalıştırma hatası:", syncErr.message);
    }

    // 7. Git commit (arka planda)
    try {
      execSync(
        `git add products/${targetFolder}/ products/ compiled-products.json public/products/ && git commit -m "feat(product): ${code} urunu duzenlendi"`,
        { cwd: rootDir, stdio: "ignore" }
      );
    } catch {}

    return NextResponse.json({
      success: true,
      message: `${code} başarıyla güncellendi.`,
      product: {
        id: updatedItem.id || code,
        code: updatedItem.code || code,
        name: updatedItem.name,
        categorySlug: targetCategorySlug,
        categoryName: catConfig.name,
        badge: updatedItem.badge,
        dimensions: updatedItem.dimensions,
        lightingType: updatedItem.lightingType,
        shortDescription: updatedItem.shortDescription,
        image: finalImages[0],
        images: finalImages,
      },
      price: price !== undefined ? price : undefined,
    });
  } catch (error: any) {
    console.error("POST /api/admin/products/edit error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Ürün düzenlenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
