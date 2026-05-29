import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  demoSectorSlugs,
  getSectorEntryBySlug,
} from "@/config/sector-registry";
import { DemoBanner } from "@/components/demos/DemoBanner";
import { SectorSite } from "@/components/site/SectorSite";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteMetadata } from "@/lib/metadata";

interface DemoSectorPageProps {
  params: Promise<{ sector: string }>;
}

export function generateStaticParams() {
  return demoSectorSlugs.map((sector) => ({ sector }));
}

export async function generateMetadata({
  params,
}: DemoSectorPageProps): Promise<Metadata> {
  const { sector } = await params;
  const entry = getSectorEntryBySlug(sector);

  if (!entry) {
    return { title: "Demo bulunamadı" };
  }

  return buildSiteMetadata(entry.config, {
    canonical: `/demos/${entry.key}`,
  });
}

export default async function DemoSectorPage({ params }: DemoSectorPageProps) {
  const { sector } = await params;
  const entry = getSectorEntryBySlug(sector);

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
