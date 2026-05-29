import { Star } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsSectionProps {
  config: SiteConfig;
}

export function TestimonialsSection({ config }: TestimonialsSectionProps) {
  return (
    <SectionShell id="testimonials">
      <FadeIn>
        <SectionHeading
          eyebrow="Yorumlar"
          title="Hastalarımız ne diyor?"
          description="Binlerce mutlu hastanın güvenini kazandık."
        />
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {config.testimonials.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.06}>
            <Card className="h-full border-border/80 bg-card shadow-sm">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
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
        ))}
      </div>
    </SectionShell>
  );
}
