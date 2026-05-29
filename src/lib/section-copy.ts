import type { ResolvedSectionCopy, SiteConfig } from "@/types/site-config";

export function resolveSectionCopy(config: SiteConfig): ResolvedSectionCopy {
  const s = config.sections;

  return {
    hero: {
      badge: s?.hero?.badge ?? config.businessName,
      primaryCta: s?.hero?.primaryCta ?? "İletişime Geç",
      secondaryCta: s?.hero?.secondaryCta ?? "Hizmetler",
    },
    services: {
      eyebrow: s?.services?.eyebrow ?? "Hizmetler",
      title: s?.services?.title ?? `${config.businessName} — Hizmetler`,
      description: s?.services?.description ?? config.description,
    },
    gallery: {
      eyebrow: s?.gallery?.eyebrow ?? "Galeri",
      title: s?.gallery?.title ?? "Galeri",
      description:
        s?.gallery?.description ??
        `${config.businessName} — fotoğraf ve çalışma örnekleri.`,
    },
    testimonials: {
      eyebrow: s?.testimonials?.eyebrow ?? "Yorumlar",
      title: s?.testimonials?.title ?? "Müşterilerimiz ne diyor?",
      description:
        s?.testimonials?.description ??
        `${config.businessName} deneyimini paylaşan misafirlerimiz.`,
    },
    faq: {
      eyebrow: s?.faq?.eyebrow ?? "SSS",
      title: s?.faq?.title ?? "Sık sorulan sorular",
      description:
        s?.faq?.description ?? "Merak ettiklerinizin yanıtları burada.",
    },
    contact: {
      eyebrow: s?.contact?.eyebrow ?? "İletişim",
      title: s?.contact?.title ?? "Bize ulaşın",
      description:
        s?.contact?.description ??
        "Formu doldurun veya doğrudan arayın — en kısa sürede dönüş yapalım.",
    },
    cta: {
      title: s?.cta?.title ?? config.slogan,
      description: s?.cta?.description ?? config.description,
      callLabel: s?.cta?.callLabel ?? "Hemen Ara",
      whatsappLabel: s?.cta?.whatsappLabel ?? "WhatsApp ile yazın",
    },
  };
}
