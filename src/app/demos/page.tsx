import type { Metadata } from "next";
import { DemoGallery } from "@/components/demos/DemoGallery";
import { getSiteUrl } from "@/lib/site-url";
import { requireAgencyMode } from "@/lib/require-agency-mode";

export const metadata: Metadata = {
  title: "Sektör Demoları | sector-site-os",
  description:
    "Diş kliniği, kafe, spor salonu, güzellik ve gayrimenkul için config-driven web sitesi demoları.",
  alternates: {
    canonical: "/demos",
  },
  openGraph: {
    title: "Sektör Demoları | sector-site-os",
    description:
      "Tek template ile çok sektörlü web sitesi üretim sistemi — canlı demolar.",
    url: `${getSiteUrl()}/demos`,
    locale: "tr_TR",
    type: "website",
  },
};

export default function DemosPage() {
  requireAgencyMode();
  return <DemoGallery />;
}
