import { NextResponse } from "next/server";
import { getAdminActivities, logAdminActivity } from "@/lib/admin-storage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const activities = await getAdminActivities();
    return NextResponse.json({
      success: true,
      activities,
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error("GET /api/admin/activities error:", error);
    return NextResponse.json({ success: false, activities: [] }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, displayName, action, description, metadata } = body;

    if (!username || !action || !description) {
      return NextResponse.json(
        { success: false, error: "Eksik aktivite parametreleri." },
        { status: 400 }
      );
    }

    const newActivity = await logAdminActivity({
      username,
      displayName,
      action,
      description,
      metadata,
    });

    return NextResponse.json({
      success: true,
      activity: newActivity,
    }, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("POST /api/admin/activities error:", error);
    return NextResponse.json({ success: false, error: "Aktivite kaydedilemedi." }, { status: 500 });
  }
}
