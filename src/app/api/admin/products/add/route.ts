import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { commitFilesToGitHub, isServerlessReadOnly, getRepoFileContent, GitCommitFile } from "@/lib/github-sync";
import { saveProductAsync, readDynamicProducts } from "@/lib/products-store";

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

async function getNextProductCode(catSlug: string) {
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

  // Eğer sunucusuz ortamda dosya boş veya eksikse GitHub'dan çekmeyi dene
  if (items.length === 0) {
    const remoteContent = await getRepoFileContent(`products/${catConfig.folder}/urunler.json`);
    if (remoteContent) {
      try {
        items = JSON.parse(remoteContent);
      } catch {}
    }
  }

  // Dinamik olarak eklenmiş ama henüz derlenmemiş ürünleri de dahil et
  try {
    const dynamicItems = await readDynamicProducts();
    const catDynamics = dynamicItems.filter((d) => d.categorySlug === catSlug);
    for (const d of catDynamics) {
      if (!items.some((it) => (it.code || it.id) === (d.code || d.id))) {
        items.push(d);
      }
    }
  } catch {}

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

    const codeInfo = await getNextProductCode(categorySlug);
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
    const isReadOnly = isServerlessReadOnly();

    // 1. Kod Üretimi
    const { code, id, no } = await getNextProductCode(categorySlug);

    // 2. Görselleri Hazırla
    const gitFilesToCommit: GitCommitFile[] = [];
    const savedImageUrls: string[] = [];
    const photoDir = path.join(rootDir, "products", catConfig.folder, "photo");
    const publicPhotoDir = path.join(rootDir, "public", "products", catConfig.folder, "photo");

    // Yerel disk yazılabilir ise klasörleri aç
    if (!isReadOnly) {
      try {
        if (!fs.existsSync(photoDir)) fs.mkdirSync(photoDir, { recursive: true });
        if (!fs.existsSync(publicPhotoDir)) fs.mkdirSync(publicPhotoDir, { recursive: true });
      } catch {}
    }

    images.forEach((imgObj: { name: string; base64: string }, index: number) => {
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

      // Yerel ortamsa diske yazmayı dene (hata verirse güvenle yakala)
      if (!isReadOnly) {
        try {
          const buffer = Buffer.from(rawBase64, "base64");
          fs.writeFileSync(path.join(photoDir, fileName), buffer);
          fs.writeFileSync(path.join(publicPhotoDir, fileName), buffer);
        } catch (localWriteErr) {
          console.warn("Yerel disk yazma uyarısı:", localWriteErr);
        }
      }

      // GitHub commit listesine ekle
      gitFilesToCommit.push({
        path: `products/${catConfig.folder}/photo/${fileName}`,
        content: rawBase64,
        isBase64: true,
      });
      gitFilesToCommit.push({
        path: `public/products/${catConfig.folder}/photo/${fileName}`,
        content: rawBase64,
        isBase64: true,
      });

      // Sitede kullanılacak yerel yol
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

    // 4. urunler.json Dosyasını Güncelle
    const urunlerJsonPath = path.join(rootDir, "products", catConfig.folder, "urunler.json");
    let currentItems: any[] = [];
    if (fs.existsSync(urunlerJsonPath)) {
      try {
        currentItems = JSON.parse(fs.readFileSync(urunlerJsonPath, "utf-8"));
      } catch {}
    }

    if (currentItems.length === 0) {
      const remoteContent = await getRepoFileContent(`products/${catConfig.folder}/urunler.json`);
      if (remoteContent) {
        try {
          currentItems = JSON.parse(remoteContent);
        } catch {}
      }
    }

    currentItems.push(newProductItem);
    const jsonStr = JSON.stringify(currentItems, null, 2);

    if (!isReadOnly) {
      try {
        fs.writeFileSync(urunlerJsonPath, jsonStr, "utf-8");
        fs.writeFileSync(
          path.join(rootDir, "public", "products", catConfig.folder, "urunler.json"),
          jsonStr,
          "utf-8"
        );
      } catch (localJsonErr) {
        console.warn("Yerel urunler.json yazma uyarısı:", localJsonErr);
      }
    }

    gitFilesToCommit.push({
      path: `products/${catConfig.folder}/urunler.json`,
      content: jsonStr,
    });
    gitFilesToCommit.push({
      path: `public/products/${catConfig.folder}/urunler.json`,
      content: jsonStr,
    });

    // 5. categories.ts Sayaç Güncellemesi
    try {
      const catTsPath = path.join(rootDir, "src", "data", "categories.ts");
      let catTsContent = "";
      if (fs.existsSync(catTsPath)) {
        catTsContent = fs.readFileSync(catTsPath, "utf-8");
      } else {
        catTsContent = (await getRepoFileContent("src/data/categories.ts")) || "";
      }

      if (catTsContent) {
        const regex = new RegExp(`(slug:\\s*["\']${categorySlug}["\'][\\s\\S]*?itemCount:\\s*)(\\d+)`, "m");
        if (regex.test(catTsContent)) {
          catTsContent = catTsContent.replace(regex, (_m, p1, p2) => `${p1}${parseInt(p2, 10) + 1}`);
          if (!isReadOnly) {
            try {
              fs.writeFileSync(catTsPath, catTsContent, "utf-8");
            } catch {}
          }
          gitFilesToCommit.push({
            path: "src/data/categories.ts",
            content: catTsContent,
          });
        }
      }
    } catch (catErr) {
      console.warn("categories.ts güncelleme uyarısı:", catErr);
    }

    // 6. ANLIK KULLANILABİLİRLİK: Gist / Dinamik Ürün Deposuna Kaydet (Sıfır bekleme süresi)
    const clientProduct = {
      id,
      code,
      name: code,
      slug: code.toLowerCase(),
      categorySlug,
      categoryName: catConfig.name,
      badge: cleanBadge,
      dimensions: cleanDim,
      lightingType: cleanLight,
      shortDescription: cleanDesc,
      description: cleanDesc,
      image: savedImageUrls[0],
      images: savedImageUrls,
      branch: "showroom" as const,
      features: newProductItem.features || [
        "Hilal Avize Güvencesiyle 2 Yıl Garanti",
        "Birinci Sınıf Malzeme ve İşçilik",
        "Kolay Temizlenebilir Yüzey",
        "Türkiye Geneli Sigortalı Kargo",
      ],
      seoTitle: `${code} - ${catConfig.name} | Hilal Avize`,
      seoDescription: cleanDesc,
    };
    // 6. ANLIK KULLANILABİLİRLİK: Gist / Dinamik Ürün Deposuna Kaydet
    const gistSaved = await saveProductAsync(clientProduct);
    if (!gistSaved) {
      console.error("UYARI: Ürün Gist deposuna kaydedilemedi! Code:", code);
    }

    // 7. KALICI REPO KAYDI & VERCEL OTOMATİK DERLEME
    if (isReadOnly) {
      // Vercel Serverless Ortamı: GitHub API ile tek commit at (arka planda)
      try {
        await commitFilesToGitHub(
          gitFilesToCommit,
          `feat(product): yeni urun ${code} eklendi (${catConfig.name})`
        );
      } catch (commitErr) {
        console.error("GitHub commit hatası:", commitErr);
      }
    } else {
      // Yerel Ortam: Scripti çalıştır ve yerel git commit at
      try {
        execSync("node scripts/sync-products.mjs", { cwd: rootDir });
        execSync(
          `git add products/ public/products/ src/data/categories.ts compiled-products.json && git commit -m "feat(product): yeni urun ${code} eklendi"`,
          { cwd: rootDir, stdio: "ignore" }
        );
      } catch (localSyncErr) {
        console.warn("Yerel sync / commit uyarısı:", localSyncErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `${code} ürünü başarıyla sisteme eklendi.`,
      product: clientProduct,
    });
  } catch (error: any) {
    console.error("POST /api/admin/products/add error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Ürün eklenirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
