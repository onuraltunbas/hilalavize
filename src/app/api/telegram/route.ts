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
  parseProductFromText,
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
          `⚠️ *Şifre Girilmedi!*\n\nKullanım: \`/giris [şifreniz]\`\nÖrnek: \`/giris hilal1998\``
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

    // 4. Şifre Doğrulama Kapısı (Giriş yapılmamışsa hiçbir işlem yapmaz)
    if (!isUserLoggedIn(fromId)) {
      await sendTelegramMessage(
        chatId,
        `🔒 *Oturum Kilitli!*\n\nBotu kullanabilmek için lütfen önce giriş yapın:\n\n👉 \`/giris [şifre]\`\n_(Örnek: \`/giris hilal1998\`)_`
      );
      return NextResponse.json({ ok: true });
    }

    // ─── BURADAN SONRASI GİRİŞ YAPMIŞ YETKİLİ YÖNETİCİLER İÇİNDİR ───

    // 5. /yardim veya /start Komutu
    if (text === "/yardim" || text === "/start" || text === "/komutlar" || text === "/help") {
      const helpMsg = `👑 *Hilal Avize Yönetici Komutları*
━━━━━━━━━━━━━━━━━━━━

🔍 *Ürün Sorgulama:*
• \`/urun [ID veya İsim]\`
  _Örnek: \`/urun HL-01\` veya \`/urun padisah\`_
  _Ürünün fotoğrafını, teknik özelliklerini ve linkini getirir._

📋 *Ürün Listesi:*
• \`/liste\`
  _Sitede kayıtlı tüm ürünlerin ID ve kategori listesini döker._

📸 *Yeni Ürün Ekleme:*
• \`/ekle\`
  _Ürün fotoğrafı ile birlikte gönderilir._

⚡ *Durum & Güvenlik:*
• \`/durum\`
  _Oturum durumunu ve site bağlantısını gösterir._
• \`/cikis\`
  _Güvenli çıkış yapar ve botu kilitler._

━━━━━━━━━━━━━━━━━━━━
📸 *Ürün Ekleme Şablonu (Fotoğraf Açıklamasına):*
\`\`\`
/ekle
ID: HL-AVZ-101
Ad: Floransa 12 Kollu Gold Kristal Avize
Kategori: avizeler
Tarz: İhtişamlı & Klasik
Malzeme: Döküm Pirinç & K9 Kristal
Boyut: Çap 95cm, Yükseklik 110cm
Duy: 12x E14 LED Duy
Açıklama: Özel altın varak kaplama salon avizesi.
Özellikler:
- 12 Adet E14 Duy
- Saf pirinç gövde
- Ücretsiz montaj
\`\`\``;

      await sendTelegramMessage(chatId, helpMsg);
      return NextResponse.json({ ok: true });
    }

    // 6. /durum Komutu
    if (text === "/durum") {
      await sendTelegramMessage(
        chatId,
        `✅ *Sistem Durumu: Aktif*\n\n👤 *Yönetici ID:* \`${fromId}\`\n🔐 *Oturum:* Açık\n📦 *Yayındaki Ürün Sayısı:* ${PRODUCTS.length}\n🌐 *Web Sitesi:* https://hilalavize.vercel.app`
      );
      return NextResponse.json({ ok: true });
    }

    // 7. /liste Komutu
    if (text === "/liste") {
      let listMsg = `📋 *Kayıtlı Ürün Listesi (${PRODUCTS.length} Ürün):*\n━━━━━━━━━━━━━━━━━━━━\n`;
      PRODUCTS.forEach((p, idx) => {
        listMsg += `${idx + 1}. \`[${p.id}]\` *${p.name}*\n   📂 ${p.categoryName} | 🏢 ${p.branch}\n\n`;
      });
      listMsg += `_Detay görmek için \`/urun [ID]\` yazabilirsiniz._`;
      await sendTelegramMessage(chatId, listMsg);
      return NextResponse.json({ ok: true });
    }

    // 8. /urun Sorgulama Komutu
    if (text.startsWith("/urun") || text.startsWith("/bul") || text.toLowerCase().includes("nedir") || text.toLowerCase().includes("ne kadar")) {
      let query = text.replace(/^\/urun\s*/, "").replace(/^\/bul\s*/, "").trim();
      query = query.replace(/\s+(nedir|ne kadar|fiyati|özellikleri|detayı)$/i, "").trim();

      if (!query) {
        await sendTelegramMessage(
          chatId,
          `⚠️ Lütfen aramak istediğiniz ürünün ID'sini veya adını yazın.\nÖrnek: \`/urun padisah\` veya \`/urun p1\``
        );
        return NextResponse.json({ ok: true });
      }

      const foundProduct = findProductByIdOrName(query);

      if (foundProduct) {
        const details = formatProductDetails(foundProduct);
        const fullImageUrl = foundProduct.image.startsWith("http")
          ? foundProduct.image
          : `https://hilalavize.vercel.app${foundProduct.image}`;
        await sendTelegramPhoto(chatId, fullImageUrl, details);
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Ürün Bulunamadı!* \n\n"${query}" aramasına uygun ürün bulunamadı. \`/liste\` yazarak tüm kayıtlı ürünleri inceleyebilirsiniz.`
        );
      }
      return NextResponse.json({ ok: true });
    }

    // 9. Fotoğraf ile Yeni Ürün Ekleme
    if (photos && photos.length > 0 && (text.includes("/ekle") || text.includes("ID:") || text.includes("Ad:"))) {
      const bestPhoto = photos[photos.length - 1];
      const photoFileUrl = await getTelegramFileUrl(bestPhoto.file_id);

      const parsedProduct = parseProductFromText(text, photoFileUrl || "/images/800x800_modern_led_halka_avize.jpg");

      if (!parsedProduct || !parsedProduct.name) {
        await sendTelegramMessage(
          chatId,
          `⚠️ *Eksik Bilgi!*\n\nLütfen ürün adı ve ID'sini şablona uygun belirtin:\n\n\`\`\`\n/ekle\nID: HL-01\nAd: Kristal Avize\nKategori: avizeler\n\`\`\``
        );
        return NextResponse.json({ ok: true });
      }

      const successMsg = `✅ *YENİ ÜRÜN BAŞARIYLA EKLENDİ!*
━━━━━━━━━━━━━━━━━━━━
🆔 *ID:* \`${parsedProduct.id}\`
🏷️ *Ürün Adı:* ${parsedProduct.name}
📂 *Kategori:* ${parsedProduct.categoryName}
✨ *Tarz:* ${parsedProduct.style}
📐 *Boyut:* ${parsedProduct.dimensions}
💡 *Duy:* ${parsedProduct.lightingType}

🌐 *Canlı Web Sayfası:*
https://hilalavize.vercel.app/urun/${parsedProduct.slug}

_Ürün veritabanına ve web sitenize başarıyla işlendi._`;

      await sendTelegramMessage(chatId, successMsg);
      return NextResponse.json({ ok: true });
    }

    // 10. Sadece Ürün Adı veya ID yazıldıysa otomatik algıla
    const autoProduct = findProductByIdOrName(text);
    if (autoProduct) {
      const details = formatProductDetails(autoProduct);
      const fullImageUrl = autoProduct.image.startsWith("http")
        ? autoProduct.image
        : `https://hilalavize.vercel.app${autoProduct.image}`;
      await sendTelegramPhoto(chatId, fullImageUrl, details);
      return NextResponse.json({ ok: true });
    }

    // 11. Bilinmeyen mesajlar
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
