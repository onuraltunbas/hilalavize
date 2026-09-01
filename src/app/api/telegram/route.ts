import { NextRequest, NextResponse } from "next/server";
import {
  sendTelegramMessage,
  sendTelegramPhoto,
  getTelegramFileUrl,
  isUserLoggedIn,
  loginUser,
  logoutUser,
  findProductByIdOrName,
  formatProductDetails,
  CATEGORY_PREFIXES,
  generateNextProductId,
  deleteProductByIdOrName,
  getWizardState,
  setWizardState,
  clearWizardState,
  getUserDisplayName,
  registerChat,
  broadcastToAllAdmins,
} from "@/lib/telegram/bot";
import { PRODUCTS, Product } from "@/data/products";
import { saveProductAsync, deleteProductAsync } from "@/lib/products-store";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body) {
      return NextResponse.json({ ok: true });
    }

    const message = body.message || body.channel_post || body.my_chat_member;
    const chat = message?.chat;
    const chatId = chat?.id;
    const fromId = message?.from?.id || chatId;
    const text = (message?.text || message?.caption || "").trim();
    const photos = message?.photo;
    const userDisplayName = getUserDisplayName(message?.from);

    if (!chatId) {
      return NextResponse.json({ ok: true });
    }

    // Her gelen chat/kanal ID'sini ortak yayın listesine kaydet
    registerChat(chatId);

    // Kanalda paylaşım veya bot ekleme durumu
    if (body.channel_post || chat?.type === "channel" || chat?.type === "supergroup" || chat?.type === "group") {
      registerChat(chatId);
      if (text.startsWith("/giris") || text === "/start" || text === "/bagla" || text === "/kanal") {
        await sendTelegramMessage(
          chatId,
          `✅ *Kanal Başarıyla Bağlandı!*\n\nBu kanal (*${chat?.title || "Hilal Avize Yönetim"}*) bildirim sistemine eklendi. Artık eklenen ve silinen tüm ürünler canlı olarak buraya aktarılacaktır. 📢`
        );
        return NextResponse.json({ ok: true });
      }
    }

    // 1. /giris [şifre] Komutu
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
        registerChat(chatId);
        await sendTelegramMessage(
          chatId,
          `🔓 *Giriş Başarılı!*\n\nHoş geldiniz *${userDisplayName}*.\nTüm komutları görmek için /yardim yazabilirsiniz.`
        );

        // Diğer yöneticilere canlı bildirim
        await broadcastToAllAdmins(
          `📢 *YÖNETİM BİLDİRİMİ*\n👤 *${userDisplayName}* az önce sisteme giriş yaptı.`,
          chatId
        );
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Hatalı Şifre!*\n\nLütfen yönetici şifrenizi doğru girdiğinizden emin olun.`
        );
      }
      return NextResponse.json({ ok: true });
    }

    // 2. /cikis Komutu
    if (text === "/cikis" || text === "/logout") {
      logoutUser(fromId);
      await sendTelegramMessage(
        chatId,
        `🔒 *Oturum Kapatıldı!*\n\nGüvenli çıkış yapıldı. Tekrar işlem yapmak için \`/giris [şifre]\` yazınız.`
      );
      await broadcastToAllAdmins(
        `📢 *YÖNETİM BİLDİRİMİ*\n👤 *${userDisplayName}* sistemden çıkış yaptı.`,
        chatId
      );
      return NextResponse.json({ ok: true });
    }

    // 3. Şifre Doğrulama Kapısı
    if (!isUserLoggedIn(fromId)) {
      await sendTelegramMessage(
        chatId,
        `🔒 *Oturum Kilitli!* Lütfen giriş yapın.`
      );
      return NextResponse.json({ ok: true });
    }

    // ─── BURADAN SONRASI GİRİŞ YAPMIŞ YÖNETİCİLER İÇİNDİR ───

    // 4. /iptal Komutu (Sihirbazı tamamen sıfırlama ve temizleme)
    if (text === "/iptal" || text === "/cancel") {
      clearWizardState(fromId);
      await sendTelegramMessage(
        chatId,
        `❌ *İşlem Tamamen İptal Edildi!*\n\nYarıda kalan tüm geçici bilgiler silindi ve sıfırlandı.\n\nTekrar ürün eklemek istediğinizde \`/ekle\` yazarak *1. Adımdan (en baştan)* başlayabilirsiniz.`
      );
      return NextResponse.json({ ok: true });
    }

    // 5. /yardim Komutu
    if (text === "/yardim" || text === "/start" || text === "/komutlar" || text === "/help") {
      clearWizardState(fromId);
      const helpMsg = `👑 *Hilal Avize Yönetici Komutları*
━━━━━━━━━━━━━━━━━━━━
👤 *Aktif Yönetici:* ${userDisplayName}

🔍 *Ürün Sorgulama:*
• \`/urun [ID veya İsim]\`
  _Örnek: \`/urun AVZ-001\` veya \`/urun padisah\`_
  _Ürünün fotoğrafını, teknik özelliklerini ve linkini getirir._

📸 *Hızlı Ürün Ekleme (6 Adım):*
• \`/ekle\`
  _Sırayla sorarak otomatik ID (Örn: AVZ-003) ile yeni ürün ekler ve tüm yöneticilere duyurur._

🗑️ *Ürün Silme:*
• \`/sil [ID veya İsim]\`
  _Örnek: \`/sil AVZ-001\`_
  _(Ürün silinse bile ID'ler geri sarmaz, sıradaki numaradan devam eder)._

📋 *Ürün Listesi:*
• \`/liste\`
  _Sitedeki tüm ürünlerin ID ve kategori dökümünü listeler._

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

    // 6. /durum Komutu
    if (text === "/durum") {
      await sendTelegramMessage(
        chatId,
        `✅ *Sistem Durumu: Aktif*\n\n👤 *Yönetici:* ${userDisplayName}\n🔐 *Oturum:* Açık\n📦 *Yayındaki Ürün Sayısı:* ${PRODUCTS.length}\n🌐 *Web Sitesi:* https://hilalavize-five.vercel.app`
      );
      return NextResponse.json({ ok: true });
    }

    // 7. /liste Komutu
    if (text === "/liste") {
      let listMsg = `📋 *Kayıtlı Ürün Listesi (${PRODUCTS.length} Ürün):*\n━━━━━━━━━━━━━━━━━━━━\n`;
      PRODUCTS.forEach((p, idx) => {
        listMsg += `${idx + 1}. \`[${p.id}]\` *${p.name}*\n   📂 ${p.categoryName} | 🏢 ${p.branch}\n\n`;
      });
      listMsg += `_Detay görmek için \`/urun [ID]\`, silmek için \`/sil [ID]\` yazabilirsiniz._`;
      await sendTelegramMessage(chatId, listMsg);
      return NextResponse.json({ ok: true });
    }

    // 8. /sil Komutu (Ürün Silme ve Diğer Yöneticilere Canlı Duyuru)
    if (text.startsWith("/sil") || text.startsWith("/delete")) {
      clearWizardState(fromId);
      const query = text.replace(/^\/sil\s*/, "").replace(/^\/delete\s*/, "").trim();

      if (!query) {
        await sendTelegramMessage(
          chatId,
          `⚠️ Lütfen silmek istediğiniz ürünün ID'sini veya adını yazın.\nÖrnek: \`/sil AVZ-001\``
        );
        return NextResponse.json({ ok: true });
      }

      const res = deleteProductByIdOrName(query);
      if (res.success && res.product) {
        await deleteProductAsync(query);

        const deleteMsg = `🗑️ *ÜRÜN BAŞARIYLA SİLİNDİ!*
━━━━━━━━━━━━━━━━━━━━
👤 *Silen Yönetici:* ${userDisplayName}
🆔 *Silinen ID:* \`${res.product.id}\`
🏷️ *Ürün Adı:* ${res.product.name}
📂 *Kategori:* ${res.product.categoryName}

🔢 *ID Sırası Korundu:* Bu kategorideki sıradaki yeni ürün ID'si \`${res.nextIdForCategory}\` olarak devam edecektir. Eski numara tekrar kullanılmaz.`;

        await sendTelegramMessage(chatId, deleteMsg);

        // Diğer yöneticilere/kanala duyuru
        await broadcastToAllAdmins(
          `📢 *YÖNETİM BİLDİRİMİ: ÜRÜN SİLİNDİ!*\n\n👤 *Silen Yönetici:* ${userDisplayName}\n🆔 *Silinen ID:* \`${res.product.id}\`\n🏷️ *Ürün:* ${res.product.name}\n🔢 *Sıradaki Yeni ID:* \`${res.nextIdForCategory}\``,
          chatId
        );
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Ürün Bulunamadı!* \n\n"${query}" aramasına uygun silinecek ürün bulunamadı. \`/liste\` yazarak kayıtlı ID'leri görebilirsiniz.`
        );
      }
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
          `⚠️ Lütfen aramak istediğiniz ürünün ID'sini veya adını yazın.\nÖrnek: \`/urun AVZ-001\` veya \`/urun padisah\``
        );
        return NextResponse.json({ ok: true });
      }

      const foundProduct = findProductByIdOrName(query);

      if (foundProduct) {
        const details = formatProductDetails(foundProduct);
        const fullImageUrl = foundProduct.image.startsWith("http") || foundProduct.image.startsWith("data:")
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

    // ─── 10. SADELEŞTİRİLMİŞ 6 ADIMLI HIZLI ÜRÜN EKLEME SİHİRBAZI (/ekle) ───

    // A) /ekle Başlatma
    if (text === "/ekle") {
      clearWizardState(fromId);
      setWizardState(fromId, {
        step: "WAITING_PHOTO",
        creatorName: userDisplayName,
        data: {},
      });

      await sendTelegramMessage(
        chatId,
        `📸 *YENİ ÜRÜN EKLEME (Adım 1/6)*
━━━━━━━━━━━━━━━━━━━━
👤 *Ekleyen:* ${userDisplayName}

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
        wizard.data.photoFileId = bestPhoto.file_id;
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

        // Otomatik sıralı ID üretme (001, 002, 005, 006...)
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
        if (text.length < 2) {
          await sendTelegramMessage(chatId, `⚠️ Lütfen geçerli bir ürün adı yazınız.`);
          return NextResponse.json({ ok: true });
        }

        wizard.data.name = text;
        wizard.step = "WAITING_DIMENSIONS";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `📐 *4. Adım: Ürünün Boyutlarını / Ölçülerini yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: Çap: 85 cm, Yükseklik: 100 cm (Ayarlanabilir Zincir)_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 4: Boyutlar
      if (wizard.step === "WAITING_DIMENSIONS") {
        wizard.data.dimensions = text;
        wizard.step = "WAITING_LIGHTING";
        setWizardState(fromId, wizard);

        await sendTelegramMessage(
          chatId,
          `💡 *5. Adım (Son Adım): Aydınlatma & Duy Tipini yazınız.*
━━━━━━━━━━━━━━━━━━━━
_Örnek: 8x E14 LED Kandil Duy (Sıcak Beyaz Işık Uyumlu)_
_(Mobilya / Aksesuar ise 'Dekoratif Mobilya' yazabilirsiniz)_`
        );
        return NextResponse.json({ ok: true });
      }

      // ADIM 5: Duy / Aydınlatma (VE DOĞRUDAN TAMAMLAMA & YAYINLAMA)
      if (wizard.step === "WAITING_LIGHTING") {
        wizard.data.lightingType = text;

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
        const creator = wizard.creatorName || userDisplayName;
        const photoToSend = d.photoFileId || d.photoUrl || "/images/800x800_modern_led_halka_avize.jpg";
        const finalImage = d.photoUrl || "/images/800x800_modern_led_halka_avize.jpg";

        const newProduct: Product = {
          id: d.id || `${prefix}-001`,
          slug,
          name: d.name || "Yeni Ürün",
          categorySlug: cat.slug,
          categoryName: cat.name,
          badge: "Yeni Sezon Koleksiyon",
          shortDescription: d.name || "",
          description: d.name || "",
          dimensions: d.dimensions || "Standart",
          lightingType: d.lightingType || "LED",
          branch,
          image: finalImage,
          images: [finalImage],
          features: [],
          seoTitle: `${d.name} Kahramanmaraş | Hilal Avize`,
          seoDescription: `${d.name} modeli Kahramanmaraş Hilal Avize Showroom'unda.`,
        };

        // Ürünü kalıcı depoya kaydet ve belleğe işle
        await saveProductAsync(newProduct);
        PRODUCTS.unshift(newProduct);

        clearWizardState(fromId);

        const successMsg = `🎉 *TEBRİKLER! YENİ ÜRÜN BAŞARIYLA EKLENDİ!*
━━━━━━━━━━━━━━━━━━━━
👤 *Ekleyen Yönetici:* ${creator}
🆔 *ID:* \`${d.id}\`
🏷️ *Ürün Adı:* ${d.name}
📂 *Kategori:* ${cat.name} (\`${cat.slug}\`)
📐 *Boyut:* ${d.dimensions}
💡 *Duy:* ${d.lightingType}
🏢 *Şube:* ${branch === "showroom" ? "Avize Showroom" : "Elektrik Şubesi"}

🌐 *Canlı Web Sayfası:*
https://hilalavize-five.vercel.app/urun/${slug}

_Ürün başarıyla oluşturuldu ve web sitenize işlendi._`;

        await sendTelegramPhoto(chatId, photoToSend, successMsg);

        // Diğer tüm yöneticilere ve gruba canlı yayın (Broadcast)
        const broadcastAnnouncement = `📢 *YÖNETİM BİLDİRİMİ: YENİ ÜRÜN EKLENDİ!*
━━━━━━━━━━━━━━━━━━━━
👤 *Ekleyen:* ${creator}
🆔 *ID:* \`${d.id}\`
🏷️ *Ürün Adı:* ${d.name}
📂 *Kategori:* ${cat.name}
📐 *Boyut:* ${d.dimensions}
💡 *Duy:* ${d.lightingType}
🌐 *İncele:* https://hilalavize-five.vercel.app/urun/${slug}`;

        await broadcastToAllAdmins(broadcastAnnouncement, chatId, photoToSend);

        return NextResponse.json({ ok: true });
      }
    }

    // 11. Sadece Ürün Adı veya ID yazıldıysa otomatik algıla
    const autoProduct = findProductByIdOrName(text);
    if (autoProduct) {
      const details = formatProductDetails(autoProduct);
      const fullImageUrl = autoProduct.image.startsWith("http") || autoProduct.image.startsWith("data:")
        ? autoProduct.image
        : `https://hilalavize-five.vercel.app${autoProduct.image}`;
      await sendTelegramPhoto(chatId, fullImageUrl, details);
      return NextResponse.json({ ok: true });
    }

    // 12. Bilinmeyen mesajlar
    await sendTelegramMessage(
      chatId,
      `ℹ️ Komutu anlayamadım.\n\nÜrün eklemek için \`/ekle\`, silmek için \`/sil [ID]\`, komutları görmek için \`/yardim\` yazabilirsiniz.`
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
