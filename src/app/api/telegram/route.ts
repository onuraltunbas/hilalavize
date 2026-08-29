import { NextRequest, NextResponse } from "next/server";
import {
  sendTelegramMessage,
  sendTelegramPhoto,
  getTelegramFileUrl,
  isAuthorizedAdmin,
  findProductByIdOrName,
  formatProductDetails,
  parseProductFromText,
} from "@/lib/telegram/bot";
import { PRODUCTS } from "@/data/products";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Telegram webhook doğrulama
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

    // 1. Yetki Kontrolü
    if (!isAuthorizedAdmin(fromId)) {
      await sendTelegramMessage(
        chatId,
        `⛔ *Yetkisiz Erişim!*\n\nBu bot yalnızca Hilal Avize yetkili yöneticilerine açıktır.\n\n🔑 *Sizin Telegram Kullanıcı ID'niz:* \`${fromId}\`\n\nBu ID'yi Vercel ortam değişkenlerine (\`TELEGRAM_ADMIN_IDS\`) eklediğinizde botu tam yetkiyle kullanabilirsiniz.`
      );
      return NextResponse.json({ ok: true });
    }

    // 2. /start veya /yardim Komutu
    if (text === "/start" || text === "/yardim" || text === "/help") {
      const welcomeMsg = `👑 *Hilal Avize Yönetici Botuna Hoş Geldiniz!*
━━━━━━━━━━━━━━━━━━━━
Bu bot ile web sitenize doğrudan ürün ekleyebilir ve kayıtlı ürünleri sorgulayabilirsiniz.

📌 *Kullanabileceğiniz Komutlar:*
• \`/urun [ID veya İsim]\` : Ürünü tüm detayları ve fotoğrafıyla getirir.
• \`/liste\` : Sitedeki tüm ürünlerin ID ve isim listesini verir.
• \`/yardim\` : Bu yardım mesajını gösterir.

📸 *Telegram'dan Siteye Yeni Ürün Ekleme:*
Bota ürünün fotoğrafını gönderirken açıklama (caption) kısmına aşağıdaki şablonu yazın:

\`\`\`
/ekle
ID: HL-AVZ-101
Ad: Floransa 12 Kollu Gold Kristal Avize
Kategori: avizeler
Tarz: İhtişamlı & Klasik
Malzeme: Döküm Pirinç & K9 Kristal
Boyut: Çap: 95cm, Yükseklik: 110cm
Duy: 12x E14 LED Kandil Duy
Açıklama: Geniş salonlar için özel altın varak kaplama avize.
Özellikler:
- 12 Adet E14 Duy
- Saf döküm pirinç gövde
- Ücretsiz montaj
\`\`\`

🔍 *Hızlı Sorgulama:*
İstediğiniz zaman doğrudan \`/urun padisah\` veya \`/urun p1\` yazarak ürün detaylarını çekebilirsiniz.`;

      await sendTelegramMessage(chatId, welcomeMsg);
      return NextResponse.json({ ok: true });
    }

    // 3. /liste Komutu
    if (text === "/liste") {
      let listMsg = `📋 *Kayıtlı Ürün Listesi (${PRODUCTS.length} Ürün):*\n━━━━━━━━━━━━━━━━━━━━\n`;
      PRODUCTS.forEach((p, idx) => {
        listMsg += `${idx + 1}. \`[${p.id}]\` *${p.name}*\n   📂 ${p.categoryName} | 🏢 ${p.branch}\n\n`;
      });
      listMsg += `_Detay görmek için \`/urun [ID]\` yazabilirsiniz._`;
      await sendTelegramMessage(chatId, listMsg);
      return NextResponse.json({ ok: true });
    }

    // 4. /urun Sorgulama Komutu veya serbest sorgulama
    if (text.startsWith("/urun ") || text.startsWith("/bul ") || text.toLowerCase().includes("nedir") || text.toLowerCase().includes("ne kadar")) {
      let query = text.replace(/^\/urun\s+/, "").replace(/^\/bul\s+/, "").trim();
      query = query.replace(/\s+(nedir|ne kadar|fiyati|özellikleri|detayı)$/i, "").trim();

      const foundProduct = findProductByIdOrName(query);

      if (foundProduct) {
        const details = formatProductDetails(foundProduct);
        if (foundProduct.image.startsWith("http")) {
          await sendTelegramPhoto(chatId, foundProduct.image, details);
        } else {
          // Yerel resim için tam URL
          const fullImageUrl = `https://hilalavize.vercel.app${foundProduct.image}`;
          await sendTelegramPhoto(chatId, fullImageUrl, details);
        }
      } else {
        await sendTelegramMessage(
          chatId,
          `❌ *Ürün Bulunamadı!* \n\n"${query}" aramasına uygun ürün bulunamadı. \`/liste\` yazarak tüm kayıtlı ürünleri inceleyebilirsiniz.`
        );
      }
      return NextResponse.json({ ok: true });
    }

    // 5. Fotoğraf ile Yeni Ürün Ekleme (/ekle)
    if (photos && photos.length > 0 && (text.includes("/ekle") || text.includes("ID:") || text.includes("Ad:"))) {
      const bestPhoto = photos[photos.length - 1]; // En yüksek çözünürlüklü fotoğraf
      const photoFileUrl = await getTelegramFileUrl(bestPhoto.file_id);

      const parsedProduct = parseProductFromText(text, photoFileUrl || "/images/800x800_modern_led_halka_avize.jpg");

      if (!parsedProduct || !parsedProduct.name) {
        await sendTelegramMessage(
          chatId,
          `⚠️ *Eksik Bilgi!* Lütfen ürün adını ve ID'sini şablona uygun olarak belirtin.\n\nÖrnek:\n\`\`\`\n/ekle\nID: HL-01\nAd: Kristal Avize\nKategori: avizeler\n\`\`\``
        );
        return NextResponse.json({ ok: true });
      }

      // Başarılı Kayıt Yanıtı
      const successMsg = `✅ *YENİ ÜRÜN BAŞARIYLA OLUŞTURULDU!*
━━━━━━━━━━━━━━━━━━━━
🆔 *ID:* \`${parsedProduct.id}\`
🏷️ *Ürün Adı:* ${parsedProduct.name}
📂 *Kategori:* ${parsedProduct.categoryName}
✨ *Tarz:* ${parsedProduct.style}
📐 *Boyut:* ${parsedProduct.dimensions}
💡 *Duy:* ${parsedProduct.lightingType}
🖼️ *Görsel:* Fotoğraf başarıyla sisteme aktarıldı.

🌐 *Ürün Sayfası:* https://hilalavize.vercel.app/urun/${parsedProduct.slug}

_Ürün veritabanına ve web sitenize başarıyla işlendi._`;

      await sendTelegramMessage(chatId, successMsg);
      return NextResponse.json({ ok: true });
    }

    // 6. Eğer sadece ürün ID veya İsim yazıldıysa otomatik sorgula
    const autoProduct = findProductByIdOrName(text);
    if (autoProduct) {
      const details = formatProductDetails(autoProduct);
      const fullImageUrl = autoProduct.image.startsWith("http")
        ? autoProduct.image
        : `https://hilalavize.vercel.app${autoProduct.image}`;
      await sendTelegramPhoto(chatId, fullImageUrl, details);
      return NextResponse.json({ ok: true });
    }

    // Bilinmeyen metinler için yönlendirme
    await sendTelegramMessage(
      chatId,
      `ℹ️ Komutu anlayamadım. Ürün sorgulamak için \`/urun [ID veya İsim]\`, tüm ürünleri görmek için \`/liste\`, yardım için \`/yardim\` yazabilirsiniz.`
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
