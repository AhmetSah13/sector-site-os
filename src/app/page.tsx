import { activeSiteConfig } from "@/config";
import { SectorSite } from "@/components/site/SectorSite";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd config={activeSiteConfig} />
      <SectorSite config={activeSiteConfig} />
    </>
  );
}
