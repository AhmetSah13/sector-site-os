import { dentistConfig } from "@/config/sectors/dentist";
import { cafeConfig } from "@/config/sectors/cafe";
import { gymConfig } from "@/config/sectors/gym";
import { beautyConfig } from "@/config/sectors/beauty";
import { realEstateConfig } from "@/config/sectors/realEstate";
import type { SiteConfig } from "@/types/site-config";

/** URL slug for /demos/[sector] routes */
export type DemoSectorSlug =
  | "dentist"
  | "cafe"
  | "gym"
  | "beauty"
  | "real-estate";

export interface SectorRegistryEntry {
  key: DemoSectorSlug;
  label: string;
  description: string;
  config: SiteConfig;
}

export const sectorRegistry = [
  {
    key: "dentist",
    label: "Diş Kliniği",
    description:
      "İmplant, estetik diş ve genel tedavi hizmetleri için modern klinik sitesi demosu.",
    config: dentistConfig,
  },
  {
    key: "cafe",
    label: "Kafe & Kahve",
    description:
      "Brunch, üçüncü dalga kahve ve etkinlik odaklı sıcak bir kafe landing demosu.",
    config: cafeConfig,
  },
  {
    key: "gym",
    label: "Spor Salonu",
    description:
      "Üyelik, PT ve grup dersleri için 7/24 fitness merkezi sitesi demosu.",
    config: gymConfig,
  },
  {
    key: "beauty",
    label: "Güzellik Salonu",
    description:
      "Cilt bakımı, saç ve lazer hizmetleri için premium beauty studio demosu.",
    config: beautyConfig,
  },
  {
    key: "real-estate",
    label: "Gayrimenkul",
    description:
      "Konut, ticari ve yatırım danışmanlığı için kurumsal emlak sitesi demosu.",
    config: realEstateConfig,
  },
] as const satisfies readonly SectorRegistryEntry[];

export type SectorRegistry = typeof sectorRegistry;

const slugSet = new Set<string>(sectorRegistry.map((entry) => entry.key));

export function isDemoSectorSlug(slug: string): slug is DemoSectorSlug {
  return slugSet.has(slug);
}

export function getSectorEntryBySlug(
  slug: string
): SectorRegistryEntry | undefined {
  return sectorRegistry.find((entry) => entry.key === slug);
}

export function getSectorConfigBySlug(slug: string): SiteConfig | undefined {
  return getSectorEntryBySlug(slug)?.config;
}

export const demoSectorSlugs: DemoSectorSlug[] = sectorRegistry.map(
  (entry) => entry.key
);
