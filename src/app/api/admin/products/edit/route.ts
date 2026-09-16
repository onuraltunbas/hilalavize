import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { commitFilesToGitHub, isServerlessReadOnly, getRepoFileContent, GitCommitFile } from "@/lib/github-sync";
import { getAdminPrices, saveAdminPrices } from "@/lib/admin-storage";
import { saveProductAsync, getProductBySlugAsync } from "@/lib/products-store";
import { Product } from "@/data/products";

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
    const isReadOnly = isServerlessReadOnly();

    // 1. Kategoriyi tespit et
    let targetCategorySlug = categorySlug;
    let targetFolder = CATEGORY_CONFIGS[categorySlug]?.folder;

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

    if (!isReadOnly) {
      try {
        if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });
        if (!fs.existsSync(publicPhotoDir)) fs.mkdirSync(publicPhotoDir, { recursive: true });
      } catch {}
    }

    // 2. Yeni fotoğrafları hazırla
    const gitFilesToCommit: GitCommitFile[] = [];
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

        if (!isReadOnly) {
          try {
            const buffer = Buffer.from(rawBase64, "base64");
            fs.writeFileSync(path.join(photoDir, fileName), buffer);
            fs.writeFileSync(path.join(publicPhotoDir, fileName), buffer);
          } catch (localImgErr) {
            console.warn("Yerel fotoğraf kaydetme uyarısı:", localImgErr);
          }
        }

        gitFilesToCommit.push({
          path: `products/${targetFolder}/photo/${fileName}`,
          content: rawBase64,
          isBase64: true,
        });
        gitFilesToCommit.push({
          path: `public/products/${targetFolder}/photo/${fileName}`,
          content: rawBase64,
          isBase64: true,
        });

        savedNewImageUrls.push(`/products/${targetFolder}/photo/${fileName}`);
      });
    }

    // 3. Nihai fotoğraf listesi
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
    let items: any[] = [];
    if (fs.existsSync(urunlerJsonPath)) {
      try {
        items = JSON.parse(fs.readFileSync(urunlerJsonPath, "utf-8"));
      } catch {}
    }

    if (items.length === 0) {
      const remoteContent = await getRepoFileContent(`products/${targetFolder}/urunler.json`);
      if (remoteContent) {
        try {
          items = JSON.parse(remoteContent);
        } catch {}
      }
    }

    let itemIndex = items.findIndex(
      (it) => it.code === code || it.id === code || `HL-${it.id}` === code
    );

    let existingItem = itemIndex !== -1 ? items[itemIndex] : null;

    // Eğer urunler.json içinde bulunamazsa dinamik depodan al
    if (!existingItem) {
      const dynProduct = await getProductBySlugAsync(code.toLowerCase());
      if (dynProduct) {
        existingItem = dynProduct;
      }
    }

    if (!existingItem) {
      return NextResponse.json(
        { success: false, error: `Ürün sistemde bulunamadı (${code}).` },
        { status: 404 }
      );
    }

    // Silinen fotoğrafları yerel diskteyse temizle (serverless değilse)
    if (!isReadOnly) {
      const oldImages: string[] = Array.isArray(existingItem.images)
        ? existingItem.images
        : existingItem.photo
        ? [existingItem.photo]
        : [];

      const deletedImages = oldImages.filter((oldImg) => !finalImages.includes(oldImg));
      deletedImages.forEach((delImg) => {
        try {
          if (delImg.startsWith(`/products/${targetFolder}/photo/`)) {
            const fileName = path.basename(delImg);
            const p1 = path.join(photoDir, fileName);
            const p2 = path.join(publicPhotoDir, fileName);
            if (fs.existsSync(p1)) fs.unlinkSync(p1);
            if (fs.existsSync(p2)) fs.unlinkSync(p2);
          }
        } catch {}
      });
    }

    // Güncellenmiş nesne
    const updatedItem = {
      ...existingItem,
      name: (name !== undefined && name !== null && String(name).trim() !== "") ? String(name).trim() : (existingItem.name || code),
      badge: badge !== undefined ? String(badge).trim() : (existingItem.badge || catConfig.defaultBadge),
      dimensions: dimensions !== undefined ? String(dimensions).trim() : (existingItem.dimensions || "Standart Ölçü"),
      lightingType: lightingType !== undefined ? String(lightingType).trim() : (existingItem.lightingType || "LED Uyumlu"),
      shortDescription: shortDescription !== undefined ? String(shortDescription).trim() : existingItem.shortDescription,
      images: finalImages,
    };

    if (itemIndex !== -1) {
      items[itemIndex] = updatedItem;
    } else {
      items.push(updatedItem);
    }

    const updatedJsonStr = JSON.stringify(items, null, 2);

    if (!isReadOnly) {
      try {
        fs.writeFileSync(urunlerJsonPath, updatedJsonStr, "utf-8");
        fs.writeFileSync(
          path.join(rootDir, "public", "products", targetFolder, "urunler.json"),
          updatedJsonStr,
          "utf-8"
        );
      } catch (localWriteJsonErr) {
        console.warn("Yerel urunler.json güncelleme uyarısı:", localWriteJsonErr);
      }
    }

    gitFilesToCommit.push({
      path: `products/${targetFolder}/urunler.json`,
      content: updatedJsonStr,
    });
    gitFilesToCommit.push({
      path: `public/products/${targetFolder}/urunler.json`,
      content: updatedJsonStr,
    });

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

    // 6. ANLIK KULLANILABİLİRLİK: Dinamik Ürün Deposuna (Gist) Kaydet
    const fullClientProduct: Product = {
      id: updatedItem.id || code,
      code: updatedItem.code || code,
      name: updatedItem.name,
      slug: (updatedItem.slug || code).toLowerCase(),
      categorySlug: targetCategorySlug,
      categoryName: catConfig.name,
      badge: updatedItem.badge,
      dimensions: updatedItem.dimensions,
      lightingType: updatedItem.lightingType,
      shortDescription: updatedItem.shortDescription,
      description: updatedItem.shortDescription || "",
      image: finalImages[0],
      images: finalImages,
      branch: (updatedItem.branch || "showroom") as "showroom" | "electrical",
      features: updatedItem.features || [
        "Hilal Avize Güvencesiyle 2 Yıl Garanti",
        "Birinci Sınıf Malzeme ve İşçilik",
        "Kolay Temizlenebilir Yüzey",
        "Türkiye Geneli Sigortalı Kargo",
      ],
      seoTitle: `${code} - ${catConfig.name} | Hilal Avize`,
      seoDescription: updatedItem.shortDescription || "",
    };

    try {
      await saveProductAsync(fullClientProduct);
    } catch (saveErr) {
      console.warn("Dinamik ürün güncelleme uyarısı:", saveErr);
    }

    // 7. KALICI REPO KAYDI
    if (isReadOnly) {
      try {
        commitFilesToGitHub(
          gitFilesToCommit,
          `feat(product): ${code} urunu duzenlendi`
        ).catch((ghErr) => console.error("Arka plan GitHub commit hatası:", ghErr));
      } catch (commitErr) {
        console.error("GitHub commit tetikleme hatası:", commitErr);
      }
    } else {
      try {
        execSync("node scripts/sync-products.mjs", { cwd: rootDir });
        execSync(
          `git add products/ public/products/ compiled-products.json && git commit -m "feat(product): ${code} urunu duzenlendi"`,
          { cwd: rootDir, stdio: "ignore" }
        );
      } catch (localSyncErr) {
        console.warn("Yerel sync / commit uyarısı:", localSyncErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `${code} başarıyla güncellendi.`,
      product: fullClientProduct,
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
