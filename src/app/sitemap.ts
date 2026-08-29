import { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { SERVICES } from "@/data/services";
import { LOCATIONS } from "@/data/locations";
import { COMPANY_DATA } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_DATA.siteUrl;

  const staticPages = [
    "",
    "/koleksiyonlar",
    "/subelerimiz",
    "/iletisim",
    "/hizmetler",
    "/hakkimizda",
    "/sss",
    "/randevu",
    "/gizlilik-politikasi",
    "/kvkk-aydinlatma-metni",
    "/kullanim-sartlari",
    "/cerez-politikasi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${baseUrl}/kategori/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const productPages = PRODUCTS.map((p) => ({
    url: `${baseUrl}/urun/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/hizmetler/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationPages = LOCATIONS.map((l) => ({
    url: `${baseUrl}/lokasyon/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...servicePages,
    ...locationPages,
  ];
}
