import type { SectionId, SiteConfig } from "@/types/site-config";
import { DEFAULT_SECTION_LAYOUT } from "@/config/section-layout-default";
import {
  hasAbout,
  hasFaqs,
  hasGallery,
  hasServices,
  hasTestimonials,
} from "@/lib/site-guards";

export { DEFAULT_SECTION_LAYOUT } from "@/config/section-layout-default";

export const SUPPORTED_SECTION_IDS = [
  "hero",
  "services",
  "about",
  "gallery",
  "testimonials",
  "faq",
  "cta",
  "contact",
] as const satisfies readonly SectionId[];

export function resolveSectionLayout(
  config: SiteConfig
): typeof DEFAULT_SECTION_LAYOUT {
  return config.sectionLayout ?? DEFAULT_SECTION_LAYOUT;
}

export function getSectionLayoutItem(
  config: SiteConfig,
  id: SectionId
): (typeof DEFAULT_SECTION_LAYOUT)[number] | undefined {
  return resolveSectionLayout(config).find((item) => item.id === id);
}

export function getSectionVariant(config: SiteConfig, id: SectionId): string {
  return getSectionLayoutItem(config, id)?.variant ?? "default";
}

/** Layout enabled flag — does not check content guards. */
export function isSectionEnabledInLayout(
  config: SiteConfig,
  id: SectionId
): boolean {
  const item = getSectionLayoutItem(config, id);
  if (!item) return true;
  return item.enabled;
}

/** Layout + content guards — used for render and nav. */
export function shouldRenderSection(
  config: SiteConfig,
  id: SectionId
): boolean {
  if (!isSectionEnabledInLayout(config, id)) {
    return false;
  }

  switch (id) {
    case "hero":
    case "cta":
    case "contact":
      return true;
    case "services":
      return hasServices(config);
    case "about":
      return hasAbout(config);
    case "gallery":
      return hasGallery(config);
    case "testimonials":
      return hasTestimonials(config);
    case "faq":
      return hasFaqs(config);
    default:
      return false;
  }
}
