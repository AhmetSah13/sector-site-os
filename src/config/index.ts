import { dentistConfig } from "@/config/sectors/dentist";
import { cafeConfig } from "@/config/sectors/cafe";
import { gymConfig } from "@/config/sectors/gym";
import { beautyConfig } from "@/config/sectors/beauty";
import { realEstateConfig } from "@/config/sectors/realEstate";
import type { SiteConfig, SectorId } from "@/types/site-config";

/**
 * Active site configuration for the current deployment.
 * Swap this import when building for a different sector/client.
 */
export const activeSiteConfig: SiteConfig = dentistConfig;

/** All available sector configs — use for previews or env-based selection */
export const sectorConfigs: Record<SectorId, SiteConfig> = {
  dentist: dentistConfig,
  cafe: cafeConfig,
  gym: gymConfig,
  beauty: beautyConfig,
  "real-estate": realEstateConfig,
};

export function getSectorConfig(sector: SectorId): SiteConfig {
  return sectorConfigs[sector] ?? dentistConfig;
}

export {
  dentistConfig,
  cafeConfig,
  gymConfig,
  beautyConfig,
  realEstateConfig,
};
