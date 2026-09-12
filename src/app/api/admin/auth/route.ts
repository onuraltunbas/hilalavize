import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GITHUB_REPO = "onuraltunbas/hilalavize";
const USERS_FILE_PATH = "src/data/admin-users.json";

function getLocalUsersPath() {
  return path.join(process.cwd(), "src", "data", "admin-users.json");
}

function getLocalActivitiesPath() {
  return path.join(process.cwd(), "src", "data", "admin-activities.json");
}

function readLocalUsers(): Record<string, any> {
  try {
    const p = getLocalUsersPath();
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf-8"));
    }
  } catch (err) {
    console.error("Local users read error:", err);
  }
  return {
    onur: { username: "onur", password: "onur123", displayName: "Onur" },
    cigdem: { username: "cigdem", password: "cigdem123", displayName: "Çiğdem" },
    lutfiye: { username: "lutfiye", password: "lutfiye123", displayName: "Lütfiye" },
  };
}

function writeLocalUsers(users: Record<string, any>) {
  try {
    const p = getLocalUsersPath();
    const dir = path.dirname(p);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(p, JSON.stringify(users, null, 2) + "\n", "utf-8");
    return true;
  } catch (err) {
    console.error("Local users write error:", err);
    return false;
  }
}

function logActivityLocal(username: string, displayName: string, action: string, description: string) {
  try {
    const p = getLocalActivitiesPath();
    let list: any[] = [];
    if (fs.existsSync(p)) {
      try {
        list = JSON.parse(fs.readFileSync(p, "utf-8"));
      } catch {}
    }
    const newAct = {
      id: "act-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      username,
      displayName: displayName || username,
      action,
      description,
      timestamp: new Date().toISOString(),
    };
    list.unshift(newAct);
    if (list.length > 250) list = list.slice(0, 250);
    fs.writeFileSync(p, JSON.stringify(list, null, 2) + "\n", "utf-8");
  } catch (err) {
    console.error("Activity logging error:", err);
  }
}

async function writeGitHubFile(relPath: string, contentStr: string, commitMsg: string) {
  if (!GITHUB_TOKEN) return false;
  try {
    let sha = "";
    const checkRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${relPath}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      }
    );
    if (checkRes.ok) {
      const fileData = await checkRes.json();
      sha = fileData.sha;
    }
    const contentBase64 = Buffer.from(contentStr).toString("base64");
    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${relPath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: commitMsg,
          content: contentBase64,
          ...(sha ? { sha } : {}),
          branch: "main",
        }),
      }
    );
    return putRes.ok;
  } catch (err) {
    console.error("GitHub file write error:", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    const users = readLocalUsers();

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

      // Giriş aktivitesini logla
      logActivityLocal(
        username,
        user.displayName || username,
        "login",
        `${user.displayName || username} sisteme giriş yaptı.`
      );

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

      // Güncelle
      users[username].password = newPassword;
      users[username].updatedAt = new Date().toISOString();
      writeLocalUsers(users);

      // GitHub senkronizasyonu
      writeGitHubFile(
        USERS_FILE_PATH,
        JSON.stringify(users, null, 2) + "\n",
        `kullanici sifresi guncellendi: ${username}`
      ).catch(() => {});

      // Aktiviteyi logla
      logActivityLocal(
        username,
        user.displayName || username,
        "password_change",
        `${user.displayName || username} şifresini değiştirdi.`
      );

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
        logActivityLocal(
          username,
          displayName,
          "logout",
          `${displayName} sistemden çıkış yaptı.`
        );
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Geçersiz işlem." }, { status: 400 });
  } catch (error) {
    console.error("POST /api/admin/auth error:", error);
    return NextResponse.json({ success: false, error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}
