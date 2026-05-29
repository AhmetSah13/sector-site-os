export {
  siteRegistry,
  demoRegistry,
  clientRegistry,
  demoSectorSlugs,
  clientSiteKeys,
  getDemoEntryBySlug,
  getClientEntryByKey,
  getDemoConfigBySlug,
  getClientConfigByKey,
  isDemoSectorSlug,
  isClientSiteKey,
  type SiteRegistryEntry,
  type SiteRegistryType,
  type DemoSectorSlug,
  type ClientSiteKey,
  /** @deprecated */ sectorRegistry,
  /** @deprecated */ getSectorEntryBySlug,
  /** @deprecated */ getSectorConfigBySlug,
} from "@/config/site-registry";

export { serviceConfig } from "@/config/service";

export { dentistConfig } from "@/config/sites/demos/dentist";
export { cafeConfig } from "@/config/sites/demos/cafe";
export { gymConfig } from "@/config/sites/demos/gym";
export { beautyConfig } from "@/config/sites/demos/beauty";
export { realEstateConfig } from "@/config/sites/demos/realEstate";
export { sampleClientConfig } from "@/config/sites/clients/sampleClient";
export { testDentalConfig } from "@/config/sites/clients/test-dental";
