import type { SiteConfig } from "@/types/site-config";
import { getServiceIcon } from "@/lib/icons";
import { resolveSectionCopy } from "@/lib/section-copy";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServicesSectionProps {
  config: SiteConfig;
  variant?: string;
}

export function ServicesSection({
  config,
  variant = "default",
}: ServicesSectionProps) {
  const copy = resolveSectionCopy(config);

  return (
    <SectionShell id="services" data-section-variant={variant}>
      <FadeIn>
        <SectionHeading
          eyebrow={copy.services.eyebrow}
          title={copy.services.title}
          description={copy.services.description}
        />
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {config.services.map((service, index) => {
          const Icon = getServiceIcon(service.icon);
          return (
            <FadeIn key={service.id} delay={index * 0.05}>
              <Card className="h-full border-border/80 bg-card/80 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Bilgi al →
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
