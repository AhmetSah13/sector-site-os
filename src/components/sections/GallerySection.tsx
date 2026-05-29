import type { SiteConfig } from "@/types/site-config";
import { resolveSectionCopy } from "@/lib/section-copy";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { SiteImage } from "@/components/shared/SiteImage";

interface GallerySectionProps {
  config: SiteConfig;
  variant?: string;
}

export function GallerySection({ config, variant = "default" }: GallerySectionProps) {
  const copy = resolveSectionCopy(config);
  const images = config.gallery ?? [];

  return (
    <SectionShell id="gallery" variant="muted" data-section-variant={variant}>
      <FadeIn>
        <SectionHeading
          eyebrow={copy.gallery.eyebrow}
          title={copy.gallery.title}
          description={copy.gallery.description}
        />
      </FadeIn>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
        {images.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.05}>
            <figure className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border/80">
              <SiteImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {image.caption ? (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
