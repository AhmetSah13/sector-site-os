import { dentistConfig } from "@/config/sectors/dentist";
import type { SiteConfig, SectorId } from "@/types/site-config";
import {
  sectorRegistry,
  getSectorConfigBySlug,
} from "@/config/sector-registry";

export {
  sectorRegistry,
  getSectorEntryBySlug,
  getSectorConfigBySlug,
  isDemoSectorSlug,
  demoSectorSlugs,
  type DemoSectorSlug,
  type SectorRegistryEntry,
} from "@/config/sector-registry";

/**
 * Active site configuration for the root `/` route.
 * Swap this import when building for a different sector/client.
 */
export const activeSiteConfig: SiteConfig = dentistConfig;

/** All sector configs keyed by sector id (registry-backed) */
export const sectorConfigs: Record<SectorId, SiteConfig> = Object.fromEntries(
  sectorRegistry.map((entry) => [entry.key, entry.config])
) as Record<SectorId, SiteConfig>;

export function getSectorConfig(sector: SectorId): SiteConfig {
  return getSectorConfigBySlug(sector) ?? dentistConfig;
}

export {
  dentistConfig,
} from "@/config/sectors/dentist";
export { cafeConfig } from "@/config/sectors/cafe";
export { gymConfig } from "@/config/sectors/gym";
export { beautyConfig } from "@/config/sectors/beauty";
export { realEstateConfig } from "@/config/sectors/realEstate";
