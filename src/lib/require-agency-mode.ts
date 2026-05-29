import { notFound } from "next/navigation";
import { isClientMode } from "@/lib/site-mode";

/** Call at the start of agency-only routes (e.g. /demos). */
export function requireAgencyMode(): void {
  if (isClientMode()) {
    notFound();
  }
}
