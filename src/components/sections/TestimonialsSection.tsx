import { Star } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { resolveSectionCopy } from "@/lib/section-copy";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsSectionProps {
  config: SiteConfig;
}

function clampRating(rating?: number): number {
  if (rating == null || Number.isNaN(rating)) return 5;
  return Math.min(5, Math.max(0, Math.round(rating)));
}

export function TestimonialsSection({ config }: TestimonialsSectionProps) {
  const copy = resolveSectionCopy(config);

  return (
    <SectionShell id="testimonials">
      <FadeIn>
        <SectionHeading
          eyebrow={copy.testimonials.eyebrow}
          title={copy.testimonials.title}
          description={copy.testimonials.description}
        />
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {config.testimonials.map((item, index) => {
          const stars = clampRating(item.rating);
          return (
            <FadeIn key={item.id} delay={index * 0.06}>
              <Card className="h-full border-border/80 bg-card shadow-sm">
                <CardContent className="flex h-full flex-col pt-6">
                  {stars > 0 ? (
                    <div className="mb-4 flex gap-0.5">
                      {Array.from({ length: stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  ) : null}
                  <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                    &ldquo;{item.content}&rdquo;
                  </blockquote>
                  <footer className="mt-6 border-t border-border/60 pt-4">
                    <p className="font-medium">{item.name}</p>
                    {item.role ? (
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    ) : null}
                  </footer>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </SectionShell>
  );
}
