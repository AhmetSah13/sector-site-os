import { dentistConfig } from "@/config/sites/demos/dentist";
import { cafeConfig } from "@/config/sites/demos/cafe";
import { gymConfig } from "@/config/sites/demos/gym";
import { beautyConfig } from "@/config/sites/demos/beauty";
import { realEstateConfig } from "@/config/sites/demos/realEstate";
import { sampleClientConfig } from "@/config/sites/clients/sampleClient";
import { testDentalConfig } from "@/config/sites/clients/test-dental";
import type { SiteConfig } from "@/types/site-config";

export type SiteRegistryType = "demo" | "client";

/** URL slug for /demos/[sector] routes */
export type DemoSectorSlug =
  | "dentist"
  | "cafe"
  | "gym"
  | "beauty"
  | "real-estate";

export type ClientSiteKey = "sample-client" | (string & {});

export interface SiteRegistryEntry {
  key: string;
  type: SiteRegistryType;
  label: string;
  description: string;
  config: SiteConfig;
}

export const demoRegistry = [
  {
    key: "dentist",
    type: "demo",
    label: "Diş Kliniği",
    description:
      "İmplant, estetik diş ve genel tedavi hizmetleri için modern klinik sitesi demosu.",
    config: dentistConfig,
  },
  {
    key: "cafe",
    type: "demo",
    label: "Kafe & Kahve",
    description:
      "Brunch, üçüncü dalga kahve ve etkinlik odaklı sıcak bir kafe landing demosu.",
    config: cafeConfig,
  },
  {
    key: "gym",
    type: "demo",
    label: "Spor Salonu",
    description:
      "Üyelik, PT ve grup dersleri için 7/24 fitness merkezi sitesi demosu.",
    config: gymConfig,
  },
  {
    key: "beauty",
    type: "demo",
    label: "Güzellik Salonu",
    description:
      "Cilt bakımı, saç ve lazer hizmetleri için premium beauty studio demosu.",
    config: beautyConfig,
  },
  {
    key: "real-estate",
    type: "demo",
    label: "Gayrimenkul",
    description:
      "Konut, ticari ve yatırım danışmanlığı için kurumsal emlak sitesi demosu.",
    config: realEstateConfig,
  },
] as const satisfies readonly SiteRegistryEntry[];

export const clientRegistry = [
  {
    key: "sample-client",
    type: "client",
    label: "SmileCare Örnek Klinik",
    description:
      "Client mode deploy testi — gerçek müşteri değil, örnek diş kliniği config’i.",
    config: sampleClientConfig,
  },
  {
    key: "test-dental",
    type: "client",
    label: "Test Detntal Clinic",
    description: "Dişçilik",
    config: testDentalConfig,
  },
] as const satisfies readonly SiteRegistryEntry[];

export const siteRegistry: SiteRegistryEntry[] = [
  ...demoRegistry,
  ...clientRegistry,
];

const demoSlugSet = new Set<string>(demoRegistry.map((e) => e.key));
const clientKeySet = new Set<string>(clientRegistry.map((e) => e.key));

export function isDemoSectorSlug(slug: string): slug is DemoSectorSlug {
  return demoSlugSet.has(slug);
}

export function isClientSiteKey(key: string): key is ClientSiteKey {
  return clientKeySet.has(key);
}

export function getDemoEntryBySlug(
  slug: string
): SiteRegistryEntry | undefined {
  return demoRegistry.find((entry) => entry.key === slug);
}

export function getClientEntryByKey(
  key: string
): SiteRegistryEntry | undefined {
  return clientRegistry.find((entry) => entry.key === key);
}

export function getDemoConfigBySlug(slug: string): SiteConfig | undefined {
  return getDemoEntryBySlug(slug)?.config;
}

export function getClientConfigByKey(key: string): SiteConfig | undefined {
  return getClientEntryByKey(key)?.config;
}

export const demoSectorSlugs: DemoSectorSlug[] = demoRegistry.map(
  (entry) => entry.key
);

export const clientSiteKeys: string[] = clientRegistry.map((entry) => entry.key);

/** @deprecated Use demoRegistry */
export const sectorRegistry = demoRegistry;

/** @deprecated Use getDemoEntryBySlug */
export const getSectorEntryBySlug = getDemoEntryBySlug;

/** @deprecated Use getDemoConfigBySlug */
export const getSectorConfigBySlug = getDemoConfigBySlug;
