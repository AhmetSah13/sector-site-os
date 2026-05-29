"use client";

import { ArrowRight, Calendar } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/FadeIn";
import { buildTelHref } from "@/lib/links";
import { resolveSectionCopy } from "@/lib/section-copy";
import { shouldRenderSection } from "@/lib/section-layout";
import { hasPhone } from "@/lib/site-guards";

interface HeroSectionProps {
  config: SiteConfig;
  variant?: string;
}

export function HeroSection({ config, variant = "default" }: HeroSectionProps) {
  const copy = resolveSectionCopy(config);
  const phoneHref = buildTelHref(config.contact.phone);
  const showPhoneCta = hasPhone(config) && phoneHref;
  const showServicesCta = shouldRenderSection(config, "services");

  return (
    <section
      id="hero"
      data-section-variant={variant}
      className="relative overflow-hidden border-b border-border/60"
      style={{
        background: `linear-gradient(135deg, var(--hero-from) 0%, var(--hero-to) 55%, var(--background) 100%)`,
      }}
    >
      <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {copy.hero.badge ? (
            <FadeIn>
              <Badge
                variant="secondary"
                className="mb-6 border border-primary/15 bg-background/80 px-3 py-1 text-primary"
              >
                {copy.hero.badge}
              </Badge>
            </FadeIn>
          ) : null}

          <FadeIn delay={0.05}>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              {config.slogan}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
              {config.description}
            </p>
          </FadeIn>

          {(showPhoneCta || showServicesCta) && (
            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
                {showPhoneCta ? (
                  <Button asChild size="lg" className="h-11 w-full gap-2 px-6 sm:w-auto">
                    <a href={phoneHref}>
                      <Calendar className="size-4" />
                      {copy.hero.primaryCta}
                    </a>
                  </Button>
                ) : null}
                {showServicesCta ? (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 w-full gap-2 px-6 sm:w-auto"
                  >
                    <a href="#services">
                      {copy.hero.secondaryCta}
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                ) : null}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.2}>
            <p className="mt-6 text-sm text-muted-foreground sm:mt-8">
              <span className="font-medium text-foreground">
                {config.businessName}
              </span>
              {config.contact.city ? (
                <>
                  {" · "}
                  {config.contact.city}
                </>
              ) : null}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
