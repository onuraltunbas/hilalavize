import { NextResponse } from "next/server";
import { getAdminUsers, saveAdminUsers, logAdminActivity } from "@/lib/admin-storage";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    const users = await getAdminUsers();

    // 1. GİRİŞ İŞLEMİ (LOGIN)
    if (action === "login") {
      const username = String(body.username || "").toLowerCase().trim();
      const password = String(body.password || "").trim();

      if (!username || !password) {
        return NextResponse.json(
          { success: false, error: "Kullanıcı adı ve şifre gereklidir." },
          { status: 400 }
        );
      }

      const user = users[username];
      if (!user || user.password !== password) {
        return NextResponse.json(
          { success: false, error: "Kullanıcı adı veya şifre hatalı!" },
          { status: 401 }
        );
      }

      // Giriş aktivitesini logla (Kalıcı)
      await logAdminActivity({
        username,
        displayName: user.displayName || username,
        action: "login",
        description: `${user.displayName || username} sisteme giriş yaptı.`,
      });

      return NextResponse.json({
        success: true,
        user: {
          username: user.username,
          displayName: user.displayName,
        },
      });
    }

    // 2. ŞİFRE DEĞİŞTİRME (CHANGE PASSWORD)
    if (action === "change-password") {
      const username = String(body.username || "").toLowerCase().trim();
      const currentPassword = String(body.currentPassword || "").trim();
      const newPassword = String(body.newPassword || "").trim();
      const confirmPassword = String(body.confirmPassword || "").trim();

      if (!username || !currentPassword || !newPassword || !confirmPassword) {
        return NextResponse.json(
          { success: false, error: "Lütfen tüm alanları doldurun." },
          { status: 400 }
        );
      }

      if (newPassword !== confirmPassword) {
        return NextResponse.json(
          { success: false, error: "Yeni şifreler birbiriyle eşleşmiyor!" },
          { status: 400 }
        );
      }

      if (newPassword.length < 3) {
        return NextResponse.json(
          { success: false, error: "Yeni şifre en az 3 karakter olmalıdır." },
          { status: 400 }
        );
      }

      const user = users[username];
      if (!user || user.password !== currentPassword) {
        return NextResponse.json(
          { success: false, error: "Mevcut (eski) şifrenizi hatalı girdiniz!" },
          { status: 400 }
        );
      }

      users[username].password = newPassword;
      users[username].updatedAt = new Date().toISOString();
      await saveAdminUsers(users);

      // Aktiviteyi logla
      await logAdminActivity({
        username,
        displayName: user.displayName || username,
        action: "password_change",
        description: `${user.displayName || username} şifresini değiştirdi.`,
      });

      return NextResponse.json({
        success: true,
        message: "Şifreniz başarıyla değiştirildi.",
      });
    }

    // 3. ÇIKIŞ LOGLAMA (LOGOUT)
    if (action === "logout") {
      const username = String(body.username || "").toLowerCase().trim();
      const displayName = String(body.displayName || username);
      if (username) {
        await logAdminActivity({
          username,
          displayName,
          action: "logout",
          description: `${displayName} sistemden çıkış yaptı.`,
        });
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Geçersiz işlem." }, { status: 400 });
  } catch (error) {
    console.error("POST /api/admin/auth error:", error);
    return NextResponse.json({ success: false, error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}
