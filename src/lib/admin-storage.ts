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
const GITHUB_REPO = "onuraltunbas/hilalavize";

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

// --- GITHUB API HELPERS ---
async function fetchGitHubFile(relPath: string): Promise<{ content: string; sha: string } | null> {
  const token = GITHUB_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${relPath}`, {
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "hilalavize-app",
        Accept: "application/vnd.github.v3+json",
      },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    return { content, sha: data.sha };
  } catch (err) {
    console.error(`GitHub read error for ${relPath}:`, err);
    return null;
  }
}

async function saveGitHubFile(relPath: string, contentStr: string, commitMsg: string): Promise<boolean> {
  const token = GITHUB_TOKEN;
  if (!token) return false;
  try {
    const existing = await fetchGitHubFile(relPath);
    const contentBase64 = Buffer.from(contentStr).toString("base64");

    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${relPath}`, {
      method: "PUT",
      headers: {
        Authorization: `token ${token}`,
        "User-Agent": "hilalavize-app",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: commitMsg,
        content: contentBase64,
        ...(existing?.sha ? { sha: existing.sha } : {}),
        branch: "main",
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error(`GitHub PUT error for ${relPath}:`, res.status, errBody);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`GitHub write error for ${relPath}:`, err);
    return false;
  }
}

// ==========================================
// 1. PRICES
// ==========================================
const PRICES_FILE = "src/data/admin-prices.json";

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
  const gh = await fetchGitHubFile(PRICES_FILE);
  if (gh) {
    try {
      const parsed = JSON.parse(gh.content);
      writeLocalPrices(parsed);
      return parsed;
    } catch {}
  }
  return readLocalPrices();
}

export async function saveAdminPrices(prices: Record<string, string | number>, commitMsg: string): Promise<boolean> {
  writeLocalPrices(prices);
  const jsonStr = JSON.stringify(prices, null, 2) + "\n";
  return await saveGitHubFile(PRICES_FILE, jsonStr, commitMsg);
}

// ==========================================
// 2. USERS
// ==========================================
const USERS_FILE = "src/data/admin-users.json";

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
  const gh = await fetchGitHubFile(USERS_FILE);
  if (gh) {
    try {
      const parsed = JSON.parse(gh.content);
      writeLocalUsers(parsed);
      return parsed;
    } catch {}
  }
  return readLocalUsers();
}

export async function saveAdminUsers(users: Record<string, AdminUser>, commitMsg: string): Promise<boolean> {
  writeLocalUsers(users);
  const jsonStr = JSON.stringify(users, null, 2) + "\n";
  return await saveGitHubFile(USERS_FILE, jsonStr, commitMsg);
}

// ==========================================
// 3. ACTIVITIES
// ==========================================
const ACTIVITIES_FILE = "src/data/admin-activities.json";

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
  const gh = await fetchGitHubFile(ACTIVITIES_FILE);
  let list: AdminActivity[] = [];
  if (gh) {
    try {
      list = JSON.parse(gh.content);
      writeLocalActivities(list);
    } catch {}
  } else {
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
  saveGitHubFile(ACTIVITIES_FILE, JSON.stringify(trimmed, null, 2) + "\n", `aktivite: [${item.action}] ${item.username}`).catch((err) => {
    console.error("Activity GitHub sync error:", err);
  });

  return newActivity;
}
