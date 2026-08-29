import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token =
    req.nextUrl.searchParams.get("token") ||
    process.env.TELEGRAM_BOT_TOKEN ||
    "8836427661:AAF0N11G29uJKkTQ0sZO-FzF7QQXRZTrg3Q";

  const webhookUrl = "https://hilalavize.vercel.app/api/telegram";
  const telegramApiUrl = `https://api.telegram.org/bot${token}/setWebhook?url=${encodeURIComponent(
    webhookUrl
  )}`;

  try {
    const res = await fetch(telegramApiUrl);
    const data = await res.json();

    return NextResponse.json({
      success: data.ok,
      message: data.ok
        ? "✅ TEBRİKLER! Telegram Bot Webhook Başarıyla Kuruldu ve Aktif Edildi."
        : "❌ Hata Oluştu",
      telegramResponse: data,
      botWebhookUrl: webhookUrl,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error?.message || "Sunucu hatası",
    });
  }
}
