import type { SiteConfig } from "@/types/site-config";
import { themeToCssVariables } from "@/lib/theme";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

interface SectorSiteProps {
  config: SiteConfig;
}

export function SectorSite({ config }: SectorSiteProps) {
  return (
    <div
      className="sector-site flex min-h-full flex-col"
      style={themeToCssVariables(config.theme)}
      data-sector={config.sector}
    >
      <SiteHeader config={config} />
      <main className="flex-1">
        <HeroSection config={config} />
        <ServicesSection config={config} />
        <AboutSection config={config} />
        <TestimonialsSection config={config} />
        <FAQSection config={config} />
        <CTASection config={config} />
        <ContactSection config={config} />
      </main>
      <Footer config={config} />
      <WhatsAppButton config={config} />
    </div>
  );
}
