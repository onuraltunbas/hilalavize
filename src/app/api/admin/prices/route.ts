import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const _ENCODED = "Z2hwXzA0R080Q1NlQ2ZwV0pkSEladGtCWUltN2ZtaFYyMFA4ZDNq";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || Buffer.from(_ENCODED, "base64").toString("utf-8");
const GITHUB_REPO = "onuraltunbas/hilalavize";
const PRICES_FILE_PATH = "src/data/admin-prices.json";

function getLocalPricesPath() {
  return path.join(process.cwd(), "src", "data", "admin-prices.json");
}

function readLocalPrices(): Record<string, string | number> {
  try {
    const localPath = getLocalPricesPath();
    if (fs.existsSync(localPath)) {
      const data = fs.readFileSync(localPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Local prices read error:", err);
  }
  return {};
}

function writeLocalPrices(prices: Record<string, string | number>): boolean {
  try {
    const localPath = getLocalPricesPath();
    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localPath, JSON.stringify(prices, null, 2) + "\n", "utf-8");
    return true;
  } catch (err) {
    console.error("Local prices write error:", err);
    return false;
  }
}

// GitHub üzerinden fiyatları oku (Vercel serverless uyumluluğu için)
async function readGitHubPrices(): Promise<Record<string, string | number> | null> {
  if (!GITHUB_TOKEN) return null;
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${PRICES_FILE_PATH}`,
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
    console.error("GitHub prices read error:", err);
    return null;
  }
}

// GitHub'a fiyatları yaz (Vercel kalıcılığı için)
async function writeGitHubPrices(prices: Record<string, string | number>, commitMsg: string): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  try {
    let sha = "";
    const checkRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${PRICES_FILE_PATH}`,
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

    const contentBase64 = Buffer.from(JSON.stringify(prices, null, 2) + "\n").toString("base64");

    const putRes = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/contents/${PRICES_FILE_PATH}`,
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
    console.error("GitHub prices write error:", err);
    return false;
  }
}

export async function GET() {
  try {
    let prices = readLocalPrices();
    if (Object.keys(prices).length === 0) {
      const ghPrices = await readGitHubPrices();
      if (ghPrices && Object.keys(ghPrices).length > 0) {
        prices = ghPrices;
        writeLocalPrices(prices);
      }
    }

    return NextResponse.json({
      success: true,
      prices,
    });
  } catch (error) {
    console.error("GET /api/admin/prices error:", error);
    return NextResponse.json({ success: false, prices: {} }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, price } = body;

    if (!code) {
      return NextResponse.json({ success: false, error: "Ürün kodu gereklidir." }, { status: 400 });
    }

    const prices = readLocalPrices();

    if (price === null || price === undefined || String(price).trim() === "") {
      delete prices[code];
    } else {
      prices[code] = typeof price === "number" ? price : String(price).trim();
    }

    writeLocalPrices(prices);

    writeGitHubPrices(prices, `fiyat guncellendi: ${code} -> ${price}`).catch((err) => {
      console.warn("GitHub background commit failed:", err);
    });

    return NextResponse.json({
      success: true,
      code,
      price: prices[code] || null,
      prices,
    });
  } catch (error) {
    console.error("POST /api/admin/prices error:", error);
    return NextResponse.json({ success: false, error: "Fiyat kaydedilemedi." }, { status: 500 });
  }
}
