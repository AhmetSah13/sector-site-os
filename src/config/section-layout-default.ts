import type { SectionLayoutItem } from "@/types/site-config";

/** Varsayılan section sırası — config.sectionLayout yoksa kullanılır. */
export const DEFAULT_SECTION_LAYOUT: SectionLayoutItem[] = [
  { id: "hero", enabled: true, variant: "default" },
  { id: "services", enabled: true, variant: "cards" },
  { id: "about", enabled: true, variant: "default" },
  { id: "gallery", enabled: true, variant: "grid" },
  { id: "testimonials", enabled: true, variant: "cards" },
  { id: "faq", enabled: true, variant: "accordion" },
  { id: "cta", enabled: true, variant: "default" },
  { id: "contact", enabled: true, variant: "default" },
];
