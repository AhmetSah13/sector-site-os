import { Phone } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { buildTelHref, buildWhatsAppHref } from "@/lib/links";
import { resolveSectionCopy } from "@/lib/section-copy";
import { hasPhone, hasWhatsApp } from "@/lib/site-guards";

interface CTASectionProps {
  config: SiteConfig;
}

export function CTASection({ config }: CTASectionProps) {
  const copy = resolveSectionCopy(config);
  const phoneHref = buildTelHref(config.contact.phone);
  const whatsappHref = buildWhatsAppHref(
    config.contact,
    `Merhaba, ${config.businessName} üzerinden randevu almak istiyorum.`
  );
  const showPhone = hasPhone(config) && phoneHref;
  const showWhatsApp = hasWhatsApp(config) && whatsappHref;

  if (!showPhone && !showWhatsApp) return null;

  return (
    <SectionShell variant="primary" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <FadeIn>
        <div className="relative mx-auto max-w-3xl px-1 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {copy.cta.title}
          </h2>
          <p className="mt-4 text-base text-primary-foreground/80 sm:text-lg">
            {copy.cta.description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {showPhone ? (
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-11 w-full gap-2 bg-background text-foreground hover:bg-background/90 sm:w-auto"
              >
                <a href={phoneHref}>
                  <Phone className="size-4" />
                  {copy.cta.callLabel}
                </a>
              </Button>
            ) : null}
            {showWhatsApp ? (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {copy.cta.whatsappLabel}
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
