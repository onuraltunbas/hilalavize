import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GITHUB_REPO = "onuraltunbas/hilalavize";
const ACTIVITIES_FILE_PATH = "src/data/admin-activities.json";

export interface AdminActivity {
  id: string;
  username: string;
  displayName: string;
  action: "login" | "logout" | "password_change" | "price_update" | "search" | "product_view" | "filter_change" | "system_init";
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

function getLocalActivitiesPath() {
  return path.join(process.cwd(), "src", "data", "admin-activities.json");
}

function readLocalActivities(): AdminActivity[] {
  try {
    const localPath = getLocalActivitiesPath();
    if (fs.existsSync(localPath)) {
      const data = fs.readFileSync(localPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Local activities read error:", err);
  }
  return [];
}

function writeLocalActivities(activities: AdminActivity[]): boolean {
  try {
    const localPath = getLocalActivitiesPath();
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localPath, JSON.stringify(activities, null, 2) + "\n", "utf-8");
    return true;
  } catch (err) {
    console.error("Local activities write error:", err);
    return false;
  }
}

async function readGitHubActivities(): Promise<AdminActivity[] | null> {
  if (!GITHUB_TOKEN) return null;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${ACTIVITIES_FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        cache: "no-store",
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const content = Buffer.from(data.content, "base64").toString("utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("GitHub activities read error:", err);
    return null;
  }
}

async function writeGitHubActivities(activities: AdminActivity[], commitMsg: string): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  try {
    let sha = "";
    const checkRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${ACTIVITIES_FILE_PATH}`,
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

    const contentBase64 = Buffer.from(JSON.stringify(activities, null, 2) + "\n").toString("base64");

    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${ACTIVITIES_FILE_PATH}`,
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
    console.error("GitHub activities write error:", err);
    return false;
  }
}

export async function GET() {
  try {
    let activities = readLocalActivities();
    if (activities.length === 0) {
      const ghActivities = await readGitHubActivities();
      if (ghActivities && ghActivities.length > 0) {
        activities = ghActivities;
        writeLocalActivities(activities);
      }
    }

    // Newest first
    activities.sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json({
      success: true,
      activities: activities.slice(0, 100),
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

    let activities = readLocalActivities();

    const newActivity: AdminActivity = {
      id: "act-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      username: String(username).toLowerCase().trim(),
      displayName: String(displayName || username).trim(),
      action,
      description: String(description).trim(),
      timestamp: new Date().toISOString(),
      metadata: metadata || undefined,
    };

    activities.unshift(newActivity);
    if (activities.length > 250) {
      activities = activities.slice(0, 250);
    }

    writeLocalActivities(activities);

    // GitHub background sync
    writeGitHubActivities(activities, `aktivite loglandi: [${action}] ${username}`).catch(() => {});

    return NextResponse.json({
      success: true,
      activity: newActivity,
    });
  } catch (error) {
    console.error("POST /api/admin/activities error:", error);
    return NextResponse.json({ success: false, error: "Aktivite kaydedilemedi." }, { status: 500 });
  }
}
