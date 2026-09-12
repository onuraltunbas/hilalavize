import { NextResponse } from "next/server";
import { getAdminPrices, saveAdminPrices, logAdminActivity } from "@/lib/admin-storage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const prices = await getAdminPrices();
    return NextResponse.json({
      success: true,
      prices,
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error("GET /api/admin/prices error:", error);
    return NextResponse.json({ success: false, prices: {} }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, price, username, displayName } = body;

    if (!code) {
      return NextResponse.json({ success: false, error: "Ürün kodu gereklidir." }, { status: 400 });
    }

    const prices = await getAdminPrices();
    const oldPrice = prices[code];

    if (price === null || price === undefined || String(price).trim() === "") {
      delete prices[code];
    } else {
      prices[code] = typeof price === "number" ? price : String(price).trim();
    }

    // Fiyatı kalıcı olarak hem yerel hem GitHub'a kaydet
    await saveAdminPrices(prices, `fiyat guncellendi: ${code} -> ${price}`);

    // Aktiviteyi anında kaydet
    if (username) {
      const userLabel = displayName || username;
      const newPriceFormatted = prices[code] ? `${prices[code]} ₺` : "Kaldırıldı";
      const oldPriceFormatted = oldPrice ? `${oldPrice} ₺` : "Belirtilmemişti";

      await logAdminActivity({
        username,
        displayName: userLabel,
        action: "price_update",
        description: `${userLabel}, ${code} kodlu ürünün fiyatını güncelledi (${oldPriceFormatted} ➔ ${newPriceFormatted}).`,
        metadata: { code, oldPrice, newPrice: prices[code] || null },
      });
    }

    return NextResponse.json({
      success: true,
      code,
      price: prices[code] || null,
      prices,
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("POST /api/admin/prices error:", error);
    return NextResponse.json({ success: false, error: "Fiyat kaydedilemedi." }, { status: 500 });
  }
}
