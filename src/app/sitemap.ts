import type { MetadataRoute } from "next";
import { demoSectorSlugs } from "@/config/sector-registry";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...demoSectorSlugs.map((sector) => ({
      url: `${baseUrl}/demos/${sector}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
