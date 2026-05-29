import type { Metadata } from "next";
import type { SiteConfig } from "@/types/site-config";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

function resolveOgImageUrl(config: SiteConfig): string | undefined {
  const ogImage = config.seo?.ogImage?.trim();
  if (!ogImage) return undefined;

  if (/^https?:\/\//i.test(ogImage)) return ogImage;
  return absoluteUrl(ogImage.startsWith("/") ? ogImage : `/${ogImage}`);
}

export function buildSiteMetadata(config: SiteConfig): Metadata {
  const siteUrl = getSiteUrl();
  const title = config.seo?.title ?? config.businessName;
  const description = config.seo?.description ?? config.description;
  const ogImageUrl = resolveOgImageUrl(config);
  const twitterHandle = config.seo?.twitterHandle?.replace(/^@/, "");

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${config.businessName}`,
    },
    description,
    keywords: config.seo?.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: config.businessName,
      locale: "tr_TR",
      type: "website",
      ...(ogImageUrl
        ? {
            images: [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: config.businessName,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: ogImageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(twitterHandle ? { site: `@${twitterHandle}` } : {}),
      ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: config.sector,
  };
}
