import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceConfig } from "@/config/service";
import { ServiceLanding } from "@/components/service/ServiceLanding";
import { SectorSite } from "@/components/site/SectorSite";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildSiteMetadata, buildServiceMetadata } from "@/lib/metadata";
import { getActiveClientSite, isClientMode } from "@/lib/site-mode";

export async function generateMetadata(): Promise<Metadata> {
  if (isClientMode()) {
    const config = getActiveClientSite();
    if (!config) {
      return { title: "Site bulunamadı" };
    }
    return buildSiteMetadata(config, { canonical: "/" });
  }

  return buildServiceMetadata(serviceConfig);
}

export default function Home() {
  if (isClientMode()) {
    const config = getActiveClientSite();
    if (!config) {
      notFound();
    }

    return (
      <>
        <JsonLd config={config} />
        <SectorSite config={config} />
      </>
    );
  }

  return <ServiceLanding config={serviceConfig} />;
}
