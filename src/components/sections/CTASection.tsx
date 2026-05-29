import { Phone } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { buildTelHref, buildWhatsAppHref } from "@/lib/links";

interface CTASectionProps {
  config: SiteConfig;
}

export function CTASection({ config }: CTASectionProps) {
  const phoneHref = buildTelHref(config.contact.phone);
  const whatsappHref = buildWhatsAppHref(
    config.contact,
    `Merhaba, ${config.businessName} üzerinden randevu almak istiyorum.`
  );

  return (
    <SectionShell variant="primary" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
      <FadeIn>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Sağlıklı gülüşünüz bir randevu uzağınızda
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Ücretsiz ilk muayene için hemen iletişime geçin. Ekibimiz size en
            uygun zamanı ayarlasın.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <a href={phoneHref}>
                <Phone className="size-4" />
                Hemen Ara
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile yazın
              </a>
            </Button>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
