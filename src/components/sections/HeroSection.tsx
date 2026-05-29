"use client";

import { ArrowRight, Calendar } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/FadeIn";
import { buildTelHref } from "@/lib/links";

interface HeroSectionProps {
  config: SiteConfig;
}

export function HeroSection({ config }: HeroSectionProps) {
  const phoneHref = buildTelHref(config.contact.phone);

  return (
    <section
      className="relative overflow-hidden border-b border-border/60"
      style={{
        background: `linear-gradient(135deg, var(--hero-from) 0%, var(--hero-to) 55%, var(--background) 100%)`,
      }}
    >
      <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <Badge
              variant="secondary"
              className="mb-6 border border-primary/15 bg-background/80 px-3 py-1 text-primary"
            >
              {config.sector === "dentist"
                ? "Ücretsiz ilk muayene"
                : "Profesyonel hizmet"}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {config.slogan}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {config.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 gap-2 px-6">
                <a href={phoneHref}>
                  <Calendar className="size-4" />
                  Randevu Oluştur
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-6">
                <a href="#services">
                  Hizmetlerimiz
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                {config.businessName}
              </span>
              {" · "}
              {config.contact.city}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
