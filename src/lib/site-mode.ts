import { getClientConfigByKey } from "@/config/site-registry";
import type { SiteConfig } from "@/types/site-config";

export type SiteMode = "agency" | "client";

export function getSiteMode(): SiteMode {
  const raw = process.env.NEXT_PUBLIC_SITE_MODE?.trim().toLowerCase();
  return raw === "client" ? "client" : "agency";
}

export function getActiveSiteKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_SITE_KEY?.trim();
  return key || undefined;
}

export function isAgencyMode(): boolean {
  return getSiteMode() === "agency";
}

export function isClientMode(): boolean {
  return getSiteMode() === "client";
}

export function getActiveClientSite(): SiteConfig | undefined {
  if (!isClientMode()) return undefined;

  const key = getActiveSiteKey();
  if (!key) return undefined;

  return getClientConfigByKey(key);
}

export function requireActiveClientSite(): SiteConfig {
  const config = getActiveClientSite();
  if (!config) {
    throw new Error(
      "Client mode requires a valid NEXT_PUBLIC_SITE_KEY matching a client registry entry."
    );
  }
  return config;
}
