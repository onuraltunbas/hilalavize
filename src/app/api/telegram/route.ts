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
  getProductAddTemplate,
  parseAndValidateProduct,
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
          `🔓 *Giriş Başarılı!*\n\nHoş geldiniz Hilal Avize Yöneticisi.\nTüm komutları görmek için \`/yardim\` yazabilirsiniz.`
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

    // 5. /yardim Komutu
    if (text === "/yardim" || text === "/start" || text === "/komutlar" || text === "/help") {
      const helpMsg = `👑 *Hilal Avize Yönetici Komutları*
━━━━━━━━━━━━━━━━━━━━

🔍 *Ürün Sorgulama:*
• \`/urun [ID veya İsim]\`
  _Örnek: \`/urun AVZ-01\` veya \`/urun padisah\`_
  _Ürünün fotoğrafını, teknik özelliklerini ve linkini getirir._

📋 *Ürün Listesi:*
• \`/liste\`
  _Sitedeki tüm ürünlerin ID ve kategori dökümünü listeler._

📸 *Yeni Ürün Ekleme:*
• \`/ekle\`
  _Kopyalayıp doldurabileceğiniz standart ürün şablonunu gösterir._

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

    // 6. /ekle Komutu (Fotoğrafsız tek başına şablon isteme)
    if (text === "/ekle" || text === "/sablon") {
      await sendTelegramMessage(chatId, getProductAddTemplate());
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

    // 10. Fotoğraf ile Yeni Ürün Ekleme (Doğrulama ve Eksik Bilgi Kontrolü)
    if (photos && photos.length > 0 && (text.includes("/ekle") || text.includes("ID:") || text.includes("Ad:"))) {
      const bestPhoto = photos[photos.length - 1];
      const photoFileUrl = await getTelegramFileUrl(bestPhoto.file_id);

      const validation = parseAndValidateProduct(
        text,
        photoFileUrl || "/images/800x800_modern_led_halka_avize.jpg"
      );

      if (!validation.success) {
        const errorDetails = validation.missingFields?.join("\n") || "";
        const warnMsg = `⚠️ *EKSİK VEYA HATALI BİLGİLER VAR!*
━━━━━━━━━━━━━━━━━━━━
Lütfen aşağıdaki eksik alanları tamamlayarak fotoğrafı tekrar gönderiniz:

${errorDetails}

━━━━━━━━━━━━━━━━━━━━
${getProductAddTemplate()}`;

        await sendTelegramMessage(chatId, warnMsg);
        return NextResponse.json({ ok: true });
      }

      const p = validation.product!;

      const successMsg = `✅ *YENİ ÜRÜN BAŞARIYLA OLUŞTURULDU!*
━━━━━━━━━━━━━━━━━━━━
🆔 *ID:* \`${p.id}\`
🏷️ *Ürün Adı:* ${p.name}
📂 *Kategori:* ${p.categoryName} (\`${p.categorySlug}\`)
✨ *Tarz:* ${p.style}
📐 *Boyut:* ${p.dimensions}
💡 *Duy:* ${p.lightingType}
🏢 *Şube:* ${p.branch === "showroom" ? "Avize Showroom" : "Elektrik Şubesi"}

🌐 *Canlı Ürün Sayfası:*
https://hilalavize-five.vercel.app/urun/${p.slug}

_Ürün veritabanına ve web sitenize başarıyla işlendi._`;

      await sendTelegramMessage(chatId, successMsg);
      return NextResponse.json({ ok: true });
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
      `ℹ️ Komutu anlayamadım.\n\nKullanabileceğiniz tüm komutlar için \`/yardim\` yazabilirsiniz.`
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
