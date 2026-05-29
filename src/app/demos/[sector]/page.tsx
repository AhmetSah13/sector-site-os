import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  demoSectorSlugs,
  getDemoEntryBySlug,
} from "@/config/site-registry";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { SectorSite } from "@/components/site/SectorSite";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteMetadata } from "@/lib/metadata";
import { isClientMode } from "@/lib/site-mode";
import { requireAgencyMode } from "@/lib/require-agency-mode";

interface DemoSectorPageProps {
  params: Promise<{ sector: string }>;
}

export function generateStaticParams() {
  if (isClientMode()) {
    return [];
  }

  return demoSectorSlugs.map((sector) => ({ sector }));
}

export async function generateMetadata({
  params,
}: DemoSectorPageProps): Promise<Metadata> {
  if (isClientMode()) {
    return { title: "Sayfa bulunamadı" };
  }

  const { sector } = await params;
  const entry = getDemoEntryBySlug(sector);

  if (!entry) {
    return { title: "Demo bulunamadı" };
  }

  return buildSiteMetadata(entry.config, {
    canonical: `/demos/${entry.key}`,
  });
}

export default async function DemoSectorPage({ params }: DemoSectorPageProps) {
  requireAgencyMode();

  const { sector } = await params;
  const entry = getDemoEntryBySlug(sector);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <JsonLd config={entry.config} />
      <DemoBanner />
      <SectorSite config={entry.config} />
    </>
  );
}
