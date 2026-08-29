import { NextResponse } from "next/server";
import { getAllProductsAsync } from "@/lib/products-store";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = await getAllProductsAsync();
    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Products API error:", error);
    return NextResponse.json({ success: false, products: [] }, { status: 500 });
  }
}
