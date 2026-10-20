import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllGuides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/guides", "/about", "/contact"];
  const staticUrls = staticPages.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date("2026-10-19"),
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const guideUrls = getAllGuides().map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticUrls, ...guideUrls];
}
