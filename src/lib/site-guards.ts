import type { SiteConfig } from "@/types/site-config";
import { getWhatsAppPhone, normalizePhoneDigits } from "@/lib/links";

export function hasServices(config: SiteConfig): boolean {
  return (config.services?.length ?? 0) > 0;
}

export function hasTestimonials(config: SiteConfig): boolean {
  return (config.testimonials?.length ?? 0) > 0;
}

export function hasFaqs(config: SiteConfig): boolean {
  return (config.faqs?.length ?? 0) > 0;
}

export function hasAbout(config: SiteConfig): boolean {
  const { about } = config;
  return Boolean(about?.title?.trim()) && (about.paragraphs?.length ?? 0) > 0;
}

export function hasPhone(config: SiteConfig): boolean {
  return normalizePhoneDigits(config.contact.phone).length >= 10;
}

export function hasEmail(config: SiteConfig): boolean {
  const email = config.contact.email?.trim() ?? "";
  return email.includes("@") && email.includes(".");
}

export function hasWhatsApp(config: SiteConfig): boolean {
  return getWhatsAppPhone(config.contact).length >= 10;
}

export function hasSocialLinks(config: SiteConfig): boolean {
  return (config.socialLinks?.length ?? 0) > 0;
}
