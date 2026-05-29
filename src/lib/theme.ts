import type { CSSProperties } from "react";
import type { SiteTheme } from "@/types/site-config";

export function themeToCssVariables(theme: SiteTheme): CSSProperties {
  return {
    "--primary": theme.primary,
    "--primary-foreground":
      theme.primaryForeground ?? "oklch(0.99 0 0)",
    "--accent": theme.accent ?? theme.primary,
    "--accent-foreground":
      theme.accentForeground ?? theme.primaryForeground ?? "oklch(0.99 0 0)",
    "--hero-from": theme.heroGradientFrom ?? "oklch(0.97 0.01 220)",
    "--hero-to": theme.heroGradientTo ?? "oklch(0.99 0 0)",
  } as CSSProperties;
}
