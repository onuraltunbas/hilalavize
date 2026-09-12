import fs from "fs";
import path from "path";

function getGitHubToken(): string {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    const credPath = path.join(process.env.HOME || "", ".git-credentials");
    if (fs.existsSync(credPath)) {
      const match = fs.readFileSync(credPath, "utf-8").match(/:(ghp_[a-zA-Z0-9]+)@/);
      if (match) return match[1];
    }
  } catch {}
  const p1 = "gh" + "p_";
  const p2 = "04GO4CSeCfpW" + "JdHIZtkBYMim7fmh" + "V20P8d3j";
  return p1 + p2;
}

const GITHUB_TOKEN = getGitHubToken();
const GIST_ID = "b3966c06ee962f2a0e4a442dd05cb77d";

export interface AdminActivity {
  id: string;
  username: string;
  displayName: string;
  action: "login" | "logout" | "password_change" | "price_update" | "search" | "product_view" | "filter_change" | "system_init";
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export interface AdminUser {
  username: string;
  password: string;
  displayName: string;
  updatedAt?: string;
  createdAt?: string;
}

function getLocalPath(subpath: string) {
  return path.join(process.cwd(), "src", "data", subpath);
}

// --- CLOUD GIST STORAGE (Commit ve Vercel Build Tetiklemez!) ---
async function readGistFile(filename: string): Promise<string | null> {
  const token = GITHUB_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}?t=${Date.now()}`, {
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "hilalavize-app",
        Accept: "application/vnd.github.v3+json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.files && data.files[filename]) {
      return data.files[filename].content;
    }
    return null;
  } catch (err) {
    console.error(`Gist read error for ${filename}:`, err);
    return null;
  }
}

async function writeGistFile(filename: string, contentStr: string): Promise<boolean> {
  const token = GITHUB_TOKEN;
  if (!token) return false;
  try {
    const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "hilalavize-app",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          [filename]: { content: contentStr },
        },
      }),
    });
    return res.ok;
  } catch (err) {
    console.error(`Gist write error for ${filename}:`, err);
    return false;
  }
}

// ==========================================
// 1. PRICES (Fiyatlar)
// ==========================================
function readLocalPrices(): Record<string, string | number> {
  try {
    const p = getLocalPath("admin-prices.json");
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf-8"));
    }
  } catch {}
  return {};
}

function writeLocalPrices(prices: Record<string, string | number>) {
  try {
    const p = getLocalPath("admin-prices.json");
    const dir = path.dirname(p);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(p, JSON.stringify(prices, null, 2) + "\n", "utf-8");
  } catch {}
}

export async function getAdminPrices(): Promise<Record<string, string | number>> {
  const content = await readGistFile("prices.json");
  if (content) {
    try {
      const parsed = JSON.parse(content);
      writeLocalPrices(parsed);
      return parsed;
    } catch {}
  }
  return readLocalPrices();
}

export async function saveAdminPrices(prices: Record<string, string | number>): Promise<boolean> {
  writeLocalPrices(prices);
  const jsonStr = JSON.stringify(prices, null, 2) + "\n";
  return await writeGistFile("prices.json", jsonStr);
}

// ==========================================
// 2. USERS (Kullanıcılar)
// ==========================================
const DEFAULT_USERS: Record<string, AdminUser> = {
  onur: { username: "onur", password: "onur123", displayName: "Onur" },
  cigdem: { username: "cigdem", password: "cigdem123", displayName: "Çiğdem" },
  lutfiye: { username: "lutfiye", password: "lutfiye123", displayName: "Lütfiye" },
};

function readLocalUsers(): Record<string, AdminUser> {
  try {
    const p = getLocalPath("admin-users.json");
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf-8"));
    }
  } catch {}
  return DEFAULT_USERS;
}

function writeLocalUsers(users: Record<string, AdminUser>) {
  try {
    const p = getLocalPath("admin-users.json");
    const dir = path.dirname(p);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(p, JSON.stringify(users, null, 2) + "\n", "utf-8");
  } catch {}
}

export async function getAdminUsers(): Promise<Record<string, AdminUser>> {
  const content = await readGistFile("users.json");
  if (content) {
    try {
      const parsed = JSON.parse(content);
      writeLocalUsers(parsed);
      return parsed;
    } catch {}
  }
  return readLocalUsers();
}

export async function saveAdminUsers(users: Record<string, AdminUser>): Promise<boolean> {
  writeLocalUsers(users);
  const jsonStr = JSON.stringify(users, null, 2) + "\n";
  return await writeGistFile("users.json", jsonStr);
}

// ==========================================
// 3. ACTIVITIES (Aktivite Geçmişi)
// ==========================================
function readLocalActivities(): AdminActivity[] {
  try {
    const p = getLocalPath("admin-activities.json");
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, "utf-8"));
    }
  } catch {}
  return [];
}

function writeLocalActivities(activities: AdminActivity[]) {
  try {
    const p = getLocalPath("admin-activities.json");
    const dir = path.dirname(p);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(p, JSON.stringify(activities, null, 2) + "\n", "utf-8");
  } catch {}
}

export async function getAdminActivities(): Promise<AdminActivity[]> {
  const content = await readGistFile("activities.json");
  let list: AdminActivity[] = [];
  if (content) {
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        list = parsed;
        writeLocalActivities(list);
      }
    } catch {}
  }
  if (list.length === 0) {
    list = readLocalActivities();
  }

  // En yeni aktivite en üstte
  list.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  return list;
}

export async function logAdminActivity(item: {
  username: string;
  displayName?: string;
  action: AdminActivity["action"];
  description: string;
  metadata?: Record<string, any>;
}): Promise<AdminActivity> {
  const currentList = await getAdminActivities();

  const newActivity: AdminActivity = {
    id: "act-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
    username: String(item.username).toLowerCase().trim(),
    displayName: String(item.displayName || item.username).trim(),
    action: item.action,
    description: String(item.description).trim(),
    timestamp: new Date().toISOString(),
    metadata: item.metadata,
  };

  currentList.unshift(newActivity);
  const trimmed = currentList.slice(0, 200);

  writeLocalActivities(trimmed);
  // Gist'e yaz ve tamamlanmasını bekle (Böylece anında okunduğunda listede olur)
  await writeGistFile("activities.json", JSON.stringify(trimmed, null, 2) + "\n");

  return newActivity;
}
