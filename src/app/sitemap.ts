import type { MetadataRoute } from "next";
import { demoSectorSlugs } from "@/config/site-registry";
import { getSiteUrl } from "@/lib/site-url";
import { getActiveClientSite, isClientMode } from "@/lib/site-mode";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const lastModified = new Date();

  if (isClientMode()) {
    if (!getActiveClientSite()) {
      return [];
    }

    return [
      {
        url: baseUrl,
        lastModified,
        changeFrequency: "monthly",
        priority: 1,
      },
    ];
  }

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
