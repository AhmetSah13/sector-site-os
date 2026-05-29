import { CheckCircle2 } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { FadeIn } from "@/components/shared/FadeIn";
import { SiteImage } from "@/components/shared/SiteImage";

interface AboutSectionProps {
  config: SiteConfig;
}

export function AboutSection({ config }: AboutSectionProps) {
  const { about } = config;

  return (
    <SectionShell id="about" variant="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="none">
          {about.image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/80">
              <SiteImage
                src={about.image}
                alt={about.imageAlt ?? about.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/30 to-background ring-1 ring-border/80">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <p className="text-5xl font-semibold tracking-tight text-primary">
                    {about.highlights?.[0]?.value ?? "15+"}
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {about.highlights?.[0]?.label ?? "Yıllık deneyim"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </FadeIn>

        <div>
          <FadeIn>
            <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
              Hakkımızda
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.title}
            </h2>
          </FadeIn>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={0.05 * (index + 1)}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          {about.highlights && about.highlights.length > 1 ? (
            <FadeIn delay={0.2}>
              <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {about.highlights.slice(1).map((item) => (
                  <li
                    key={item.label}
                    className="rounded-xl border border-border/80 bg-background p-4 shadow-sm"
                  >
                    <p className="text-2xl font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.label}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ) : null}

          <FadeIn delay={0.25}>
            <ul className="mt-8 space-y-3">
              {[
                "Steril ve modern klinik ortamı",
                "Kişiye özel tedavi planı",
                "Şeffaf fiyatlandırma",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm sm:text-base">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </SectionShell>
  );
}
