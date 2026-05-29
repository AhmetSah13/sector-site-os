import type { Metadata } from "next";
import type { SiteConfig } from "@/types/site-config";
import type { ServiceConfig } from "@/types/service-config";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

function resolveOgImageUrl(config: SiteConfig): string | undefined {
  const ogImage = config.seo?.ogImage?.trim();
  if (!ogImage) return undefined;

  if (/^https?:\/\//i.test(ogImage)) return ogImage;
  return absoluteUrl(ogImage.startsWith("/") ? ogImage : `/${ogImage}`);
}

export interface BuildSiteMetadataOptions {
  /** Path for canonical and Open Graph URL, e.g. `/demos/cafe` */
  canonical?: string;
}

export function buildSiteMetadata(
  config: SiteConfig,
  options?: BuildSiteMetadataOptions
): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = options?.canonical ?? "/";
  const pageUrl = absoluteUrl(canonicalPath);
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
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
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

export function buildServiceMetadata(
  config: ServiceConfig,
  options?: BuildSiteMetadataOptions
): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalPath = options?.canonical ?? "/";
  const pageUrl = absoluteUrl(canonicalPath);
  const title = config.seo?.title ?? config.title;
  const description = config.seo?.description ?? config.description;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s | ${config.name}`,
    },
    description,
    keywords: config.seo?.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: config.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
