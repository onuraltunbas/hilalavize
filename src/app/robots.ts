import { MetadataRoute } from "next";
import { COMPANY_DATA } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${COMPANY_DATA.siteUrl}/sitemap.xml`,
  };
}
