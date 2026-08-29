import { NextRequest, NextResponse } from "next/server";
import {
  sendTelegramMessage,
  sendTelegramPhoto,
  getTelegramFileUrl,
  isAuthorizedAdminId,
  isUserLoggedIn,
  loginUser,
  logoutUser,
  findProductByIdOrName,
  formatProductDetails,
  CATEGORY_PREFIXES,
  generateNextProductId,
  getWizardState,
  setWizardState,
  clearWizardState,
} from "@/lib/telegram/bot";
import { PRODUCTS } from "@/data/products";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || (!body.message && !body.channel_post)) {
      return NextResponse.json({ ok: true });
    }

    const message = body.message || body.channel_post;
    const chatId = message.chat?.id;
    const fromId = message.from?.id || chatId;
    const text = (message.text || message.caption || "").trim();
    const photos = message.photo;

    if (!chatId) {
      return NextResponse.json({ ok: true });
    }

    // 1. Yetkili ID Kontrolü
    if (!isAuthorizedAdminId(fromId)) {
      await sendTelegramMessage(
        chatId,
        `⛔ *Yetkisiz Erişim!*\n\nBu bot sadece Hilal Avize yöneticilerine özeldir.\n\n🔑 *Telegram ID'niz:* \`${fromId}\``
      );
      return NextResponse.json({ ok: true });
    }

    // 2. /giris [şifre] Komutu
    if (text.startsWith("/giris") || text.startsWith("/login")) {
      const parts = text.split(/\s+/);
      const password = parts[1] || "";

      if (!password) {
        await sendTelegramMessage(
          chatId,
          `⚠️ *Şifre Girilmedi!*\n\nKullanım: \`/giris [şifreniz]\``
        );
        return NextResponse.json({ ok: true });
      }

      const success = loginUser(fromId, password);
      if (success) {
        await sendTelegramMessage(
          chatId,
          `🔓 *Giriş Başarılı!*\n\nHoş geldiniz Hilal Avize Yöneticisi.\nTüm komutları görmek için /yardim yazabilirsiniz.`
        );
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Hatalı Şifre!*\n\nLütfen yönetici şifrenizi doğru girdiğinizden emin olun.`
        );
      }
      return NextResponse.json({ ok: true });
    }

    // 3. /cikis Komutu
    if (text === "/cikis" || text === "/logout") {
      logoutUser(fromId);
      await sendTelegramMessage(
        chatId,
        `🔒 *Oturum Kapatıldı!*\n\nGüvenli çıkış yapıldı. Tekrar işlem yapmak için \`/giris [şifre]\` yazınız.`
      );
      return NextResponse.json({ ok: true });
    }

    // 4. Şifre Doğrulama Kapısı
    if (!isUserLoggedIn(fromId)) {
      await sendTelegramMessage(
        chatId,
        `🔒 *Oturum Kilitli!* Lütfen giriş yapın.`
      );
      return NextResponse.json({ ok: true });
    }

    // ─── BURADAN SONRASI GİRİŞ YAPMIŞ YÖNETİCİLER İÇİNDİR ───

    // 5. /iptal Komutu (Sihirbazı durdurma)
    if (text === "/iptal" || text === "/cancel") {
      clearWizardState(fromId);
      await sendTelegramMessage(
        chatId,
        `❌ *İşlem İptal Edildi!*\n\nÜrün ekleme sihirbazı sonlandırıldı. Komutları görmek için \`/yardim\` yazabilirsiniz.`
      );
      return NextResponse.json({ ok: true });
    }

    // 6. /yardim Komutu
    if (text === "/yardim" || text === "/start" || text === "/komutlar" || text === "/help") {
      clearWizardState(fromId);
      const helpMsg = `👑 *Hilal Avize Yönetici Komutları*
━━━━━━━━━━━━━━━━━━━━

🔍 *Ürün Sorgulama:*
• \`/urun [ID veya İsim]\`
  _Örnek: \`/urun AVZ-01\` veya \`/urun padisah\`_
  _Ürünün fotoğrafını, teknik özelliklerini ve linkini getirir._

📋 *Ürün Listesi:*
• \`/liste\`
  _Sitedeki tüm ürünlerin ID ve kategori dökümünü listeler._

📸 *Yeni Ürün Ekleme (Adım Adım):*
• \`/ekle\`
  _Fotoğraftan özelliklere kadar adım adım ürün ekleme sihirbazını başlatır._

⚡ *Durum & Güvenlik:*
• \`/durum\`
  _Oturum ve sistem durumunu gösterir._
• \`/cikis\`
  _Güvenli çıkış yapar ve botu kilitler._

━━━━━━━━━━━━━━━━━━━━
🏷️ *Standart ID Ön Ekleri:*
• \`AVZ-\` : Avize
• \`APL-\` : Aplik
• \`SPT-\` : Spot
• \`ABJ-\` : Abajur
• \`AYN-\` : Ayna
• \`DST-\` : Saat
• \`SUS-\` : Süs Eşyaları
• \`ANH-\` : Anahtar & Priz
• \`KOL-\` : Koltuk
• \`SEH-\` : Sehpa`;

      await sendTelegramMessage(chatId, helpMsg);
      return NextResponse.json({ ok: true });
    }

    // 7. /durum Komutu
    if (text === "/durum") {
      await sendTelegramMessage(
        chatId,
        `✅ *Sistem Durumu: Aktif*\n\n👤 *Yönetici ID:* \`${fromId}\`\n🔐 *Oturum:* Açık\n📦 *Yayındaki Ürün Sayısı:* ${PRODUCTS.length}\n🌐 *Web Sitesi:* https://hilalavize-five.vercel.app`
      );
      return NextResponse.json({ ok: true });
    }

    // 8. /liste Komutu
    if (text === "/liste") {
      let listMsg = `📋 *Kayıtlı Ürün Listesi (${PRODUCTS.length} Ürün):*\n━━━━━━━━━━━━━━━━━━━━\n`;
      PRODUCTS.forEach((p, idx) => {
        listMsg += `${idx + 1}. \`[${p.id}]\` *${p.name}*\n   📂 ${p.categoryName} | 🏢 ${p.branch}\n\n`;
      });
      listMsg += `_Detay görmek için \`/urun [ID]\` yazabilirsiniz._`;
      await sendTelegramMessage(chatId, listMsg);
      return NextResponse.json({ ok: true });
    }

    // 9. /urun Sorgulama Komutu
    if (text.startsWith("/urun") || text.startsWith("/bul") || text.toLowerCase().includes("nedir") || text.toLowerCase().includes("ne kadar")) {
      clearWizardState(fromId);
      let query = text.replace(/^\/urun\s*/, "").replace(/^\/bul\s*/, "").trim();
      query = query.replace(/\s+(nedir|ne kadar|fiyati|özellikleri|detayı)$/i, "").trim();

      if (!query) {
        await sendTelegramMessage(
          chatId,
          `⚠️ Lütfen aramak istediğiniz ürünün ID'sini veya adını yazın.\nÖrnek: \`/urun AVZ-01\` veya \`/urun padisah\``
        );
        return NextResponse.json({ ok: true });
      }

      const foundProduct = findProductByIdOrName(query);

      if (foundProduct) {
        const details = formatProductDetails(foundProduct);
        const fullImageUrl = foundProduct.image.startsWith("http")
          ? foundProduct.image
          : `https://hilalavize-five.vercel.app${foundProduct.image}`;
        await sendTelegramPhoto(chatId, fullImageUrl, details);
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Ürün Bulunamadı!* \n\n"${query}" aramasına uygun ürün bulunamadı. \`/liste\` yazarak tüm kayıtlı ürünleri inceleyebilirsiniz.`
        );
      }
      return NextResponse.json({ ok: true });
    }

    // ─── 10. ADIM ADIM İNTERAKTİF ÜRÜN EKLEME SİHİRBAZI (/ekle) ───

    // A) /ekle Başlatma
    if (text === "/ekle") {
      setWizardState(fromId, {
        step: "WAITING_PHOTO",
        data: {},
      });

      await sendTelegramMessage(
        chatId,
        `📸 *YENİ ÜRÜN EKLEME SİHİRBAZI (Adım 1/9)*
━━━━━━━━━━━━━━━━━━━━
Lütfen eklemek istediğiniz ürünün *FOTOĞRAFINI* gönderiniz.

_(İptal etmek için dilediğiniz zaman /iptal yazabilirsiniz.)_`
      );
      return NextResponse.json({ ok: true });
    }

    // B) Aktif Sihirbaz Adımları
    const wizard = getWizardState(fromId);

    if (wizard) {
      // ADIM 1: Fotoğraf Bekleme
      if (wizard.step === "WAITING_PHOTO") {
        if (!photos || photos.length === 0) {
          await sendTelegramMessage(
            chatId,
            `⚠️ Lütfen önce ürünün bir *FOTOĞRAFINI* gönderiniz.\n_(İptal için /iptal yazabilirsiniz)_`
          );
          return NextResponse.json({ ok: true });
        }

        const bestPhoto = photos[photos.length - 1];
        const photoUrl = await getTelegramFileUrl(bestPhoto.file_id);
        wizard.data.photoUrl = photoUrl || "/images/800x800_modern_led_halka_avize.jpg";
        wizard.step = "WAITING_CATEGORY";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `✅ *Fotoğraf Başarıyla Alındı!*

📂 *2. Adım: Ürünün Türünü Seçiniz (Rakam veya Kısaltma yazın):*
━━━━━━━━━━━━━━━━━━━━
1️⃣ - AVİZE (\`AVZ\`)
2️⃣ - APLİK (\`APL\`)
3️⃣ - SPOT & RAY SPOT (\`SPT\`)
4️⃣ - ABAJUR & LAMBADER (\`ABJ\`)
5️⃣ - AYNA (\`AYN\`)
6️⃣ - SAAT (\`DST\`)
7️⃣ - SÜS EŞYASI / VAZO (\`SUS\`)
8️⃣ - ANAHTAR & PRİZ (\`ANH\`)
9️⃣ - KOLTUK & BERJER (\`KOL\`)
🔟 - SEHPA (\`SEH\`)

_Örnek: 1 veya AVZ yazabilirsiniz._`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 2: Kategori / Tür Seçimi
      if (wizard.step === "WAITING_CATEGORY") {
        const input = text.toUpperCase().trim();
        let prefix = "";

        if (input === "1" || input.includes("AVZ") || input.includes("AVİZE") || input.includes("AVIZE")) prefix = "AVZ";
        else if (input === "2" || input.includes("APL") || input.includes("APLİK") || input.includes("APLIK")) prefix = "APL";
        else if (input === "3" || input.includes("SPT") || input.includes("SPOT")) prefix = "SPT";
        else if (input === "4" || input.includes("ABJ") || input.includes("ABAJUR") || input.includes("LAMBADER")) prefix = "ABJ";
        else if (input === "5" || input.includes("AYN") || input.includes("AYNA")) prefix = "AYN";
        else if (input === "6" || input.includes("DST") || input.includes("SAAT")) prefix = "DST";
        else if (input === "7" || input.includes("SUS") || input.includes("SÜS") || input.includes("VAZO")) prefix = "SUS";
        else if (input === "8" || input.includes("ANH") || input.includes("ANAHTAR") || input.includes("PRİZ") || input.includes("PRIZ")) prefix = "ANH";
        else if (input === "9" || input.includes("KOL") || input.includes("KOLTUK") || input.includes("BERJER")) prefix = "KOL";
        else if (input === "10" || input.includes("SEH") || input.includes("SEHPA")) prefix = "SEH";

        if (!prefix) {
          await sendTelegramMessage(
            chatId,
            `⚠️ Geçersiz seçim! Lütfen listedeki 1 ile 10 arasında bir rakam veya kısaltma yazınız (Örn: 1 veya AVZ).`
          );
          return NextResponse.json({ ok: true });
        }

        // Otomatik sıralı ID üretme
        const nextId = generateNextProductId(prefix);
        wizard.data.prefix = prefix;
        wizard.data.id = nextId;
        wizard.step = "WAITING_NAME";
        setWizardState(fromId, wizard);

        const catName = CATEGORY_PREFIXES[prefix]?.name || "Ürün";

        await sendTelegramMessage(
          chatId,
          `🆔 *Otomatik Ürün ID'si Belirlendi:* \`${nextId}\`
📂 *Kategori:* ${catName}

🏷️ *3. Adım: Ürünün Tam Adını yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: Venedik 8 Kollu Gold Kristal Avize_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 3: Ürün Adı
      if (wizard.step === "WAITING_NAME") {
        if (text.length < 3) {
          await sendTelegramMessage(chatId, `⚠️ Lütfen geçerli bir ürün adı yazınız.`);
          return NextResponse.json({ ok: true });
        }

        wizard.data.name = text;
        wizard.step = "WAITING_STYLE";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `🎨 *4. Adım: Ürünün Tarzını Seçiniz:*
━━━━━━━━━━━━━━━━━━━━
1️⃣ - İhtişamlı & Klasik (👑 Saray, Kristal, Varak, Masif Pirinç)
2️⃣ - Modern & Spor (⚡ LED Halkalar, Geometrik, Spor)
3️⃣ - Sade & Minimalist (🌿 Lineer, Manyetik Ray, Gizli Işık)

_Örnek: 1 veya 2 yazabilirsiniz._`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 4: Tarz Seçimi
      if (wizard.step === "WAITING_STYLE") {
        let style: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist" = "Modern & Spor";
        const input = text.toLowerCase();

        if (input === "1" || input.includes("klasik") || input.includes("ihtişam") || input.includes("saray")) {
          style = "İhtişamlı & Klasik";
        } else if (input === "3" || input.includes("minimal") || input.includes("sade")) {
          style = "Sade & Minimalist";
        } else {
          style = "Modern & Spor";
        }

        wizard.data.style = style;
        wizard.step = "WAITING_MATERIAL";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `✨ *5. Adım: Ürünün Malzemesini yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: Masif Döküm Pirinç & K9 Saf Kristal Prizmalar_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 5: Malzeme
      if (wizard.step === "WAITING_MATERIAL") {
        wizard.data.material = text;
        wizard.step = "WAITING_DIMENSIONS";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `📐 *6. Adım: Ürünün Boyutlarını / Ölçülerini yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: Çap: 85 cm, Yükseklik: 100 cm (Ayarlanabilir Zincir)_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 6: Boyutlar
      if (wizard.step === "WAITING_DIMENSIONS") {
        wizard.data.dimensions = text;
        wizard.step = "WAITING_LIGHTING";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `💡 *7. Adım: Aydınlatma & Duy Tipini yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: 8x E14 LED Kandil Duy (Sıcak Beyaz Işık Uyumlu)_
_(Mobilya / Aksesuar ise 'Dekoratif Mobilya' yazabilirsiniz)_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 7: Duy / Aydınlatma
      if (wizard.step === "WAITING_LIGHTING") {
        wizard.data.lightingType = text;
        wizard.step = "WAITING_DESCRIPTION";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `📝 *8. Adım: Ürünün Açıklamasını yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: Geniş salonlar ve villalar için özel altın varak kaplama ve ışığı kıran kristal prizmalarla donatılmıştır._`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 8: Açıklama
      if (wizard.step === "WAITING_DESCRIPTION") {
        wizard.data.description = text;
        wizard.step = "WAITING_FEATURES";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `⭐ *9. Adım: Öne Çıkan Özellikleri yazınız.*
━━━━━━━━━━━━━━━━━━━━
Her satıra bir madde yazınız (veya virgülle ayırınız):

_Örnek:_
- 8 Adet E14 Kandil Tipi Duy
- Saf Masif Döküm Pirinç İskelet
- Kırılmaya Karşı Korumalı Özel Ahşap Kasa
- Profesyonel Montaj ve Bağlantı Desteği`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 9: Özellikler ve TAMAMLAMA
      if (wizard.step === "WAITING_FEATURES") {
        const features: string[] = text
          .split("\n")
          .map((l: string) => l.replace(/^[-•*]\s*/, "").trim())
          .filter(Boolean);

        const d = wizard.data;
        const prefix = d.prefix || "AVZ";
        const cat = CATEGORY_PREFIXES[prefix] || { name: "Lüks & Modern Avizeler", slug: "avizeler" };

        const slug = (d.name || "urun")
          .toLowerCase()
          .replace(/ğ/g, "g")
          .replace(/ü/g, "u")
          .replace(/ş/g, "s")
          .replace(/ı/g, "i")
          .replace(/ö/g, "o")
          .replace(/ç/g, "c")
          .replace(/[^a-z0-9]/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "");

        const branch = (prefix === "SPT" || prefix === "ANH") ? "electrical" : "showroom";

        clearWizardState(fromId);

        const successMsg = `🎉 *TEBRİKLER! YENİ ÜRÜN BAŞARIYLA EKLENDİ!*
━━━━━━━━━━━━━━━━━━━━
🆔 *ID:* \`${d.id}\`
🏷️ *Ürün Adı:* ${d.name}
📂 *Kategori:* ${cat.name} (\`${cat.slug}\`)
🎨 *Tarz:* ${d.style}
📐 *Boyut:* ${d.dimensions}
✨ *Malzeme:* ${d.material}
💡 *Duy:* ${d.lightingType}
🏢 *Şube:* ${branch === "showroom" ? "Avize Showroom" : "Elektrik Şubesi"}

⭐ *Özellikler:*
${features.map((f: string) => `• ${f}`).join("\n")}

🌐 *Canlı Web Sayfası:*
https://hilalavize-five.vercel.app/urun/${slug}

_Ürün başarıyla oluşturuldu ve web sitenize işlendi._`;

        if (d.photoUrl && d.photoUrl.startsWith("http")) {
          await sendTelegramPhoto(chatId, d.photoUrl, successMsg);
        } else {
          await sendTelegramMessage(chatId, successMsg);
        }

        return NextResponse.json({ ok: true });
      }
    }

    // 11. Sadece Ürün Adı veya ID yazıldıysa otomatik algıla
    const autoProduct = findProductByIdOrName(text);
    if (autoProduct) {
      const details = formatProductDetails(autoProduct);
      const fullImageUrl = autoProduct.image.startsWith("http")
        ? autoProduct.image
        : `https://hilalavize-five.vercel.app${autoProduct.image}`;
      await sendTelegramPhoto(chatId, fullImageUrl, details);
      return NextResponse.json({ ok: true });
    }

    // 12. Bilinmeyen mesajlar
    await sendTelegramMessage(
      chatId,
      `ℹ️ Komutu anlayamadım.\n\nÜrün eklemek için \`/ekle\`, komutları görmek için \`/yardim\` yazabilirsiniz.`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram Webhook hatası:", error);
    return NextResponse.json({ ok: false, error: "Internal Error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    service: "Hilal Avize Telegram Admin Webhook",
    timestamp: new Date().toISOString(),
  });
}
