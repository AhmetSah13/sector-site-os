import { activeSiteConfig } from "@/config";
import { SectorSite } from "@/components/site/SectorSite";

export default function Home() {
  return <SectorSite config={activeSiteConfig} />;
}
