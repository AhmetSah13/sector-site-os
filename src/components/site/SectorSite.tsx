import type { ReactElement } from "react";
import type { SectionId, SiteConfig } from "@/types/site-config";
import { themeToCssVariables } from "@/lib/theme";
import {
  resolveSectionLayout,
  shouldRenderSection,
} from "@/lib/section-layout";
import { hasWhatsApp } from "@/lib/site-guards";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

interface SectorSiteProps {
  config: SiteConfig;
}

function renderSection(
  config: SiteConfig,
  id: SectionId,
  variant: string
): ReactElement | null {
  switch (id) {
    case "hero":
      return <HeroSection key={id} config={config} variant={variant} />;
    case "services":
      return <ServicesSection key={id} config={config} variant={variant} />;
    case "about":
      return <AboutSection key={id} config={config} variant={variant} />;
    case "gallery":
      return <GallerySection key={id} config={config} variant={variant} />;
    case "testimonials":
      return (
        <TestimonialsSection key={id} config={config} variant={variant} />
      );
    case "faq":
      return <FAQSection key={id} config={config} variant={variant} />;
    case "cta":
      return <CTASection key={id} config={config} variant={variant} />;
    case "contact":
      return <ContactSection key={id} config={config} variant={variant} />;
    default:
      return null;
  }
}

export function SectorSite({ config }: SectorSiteProps) {
  const layout = resolveSectionLayout(config);

  return (
    <div
      className="sector-site flex min-h-full flex-col"
      style={themeToCssVariables(config.theme)}
      data-sector={config.sector}
    >
      <SiteHeader config={config} />
      <main className="flex-1">
        {layout.map((item) => {
          if (!shouldRenderSection(config, item.id)) {
            return null;
          }
          return renderSection(config, item.id, item.variant ?? "default");
        })}
      </main>
      <Footer config={config} />
      {hasWhatsApp(config) ? <WhatsAppButton config={config} /> : null}
    </div>
  );
}
