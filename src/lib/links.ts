import type { ContactInfo } from "@/types/site-config";

/** Strip formatting; normalize Turkish numbers starting with 0 to 90… */
export function normalizePhoneDigits(phone: string): string {
  let digits = phone.replace(/\D/g, "");

  if (digits.startsWith("0") && digits.length === 11) {
    digits = `90${digits.slice(1)}`;
  }

  return digits;
}

/** RFC 3966 — international tel link */
export function buildTelHref(phone: string): string | undefined {
  const digits = normalizePhoneDigits(phone);
  if (digits.length < 10) return undefined;
  return `tel:+${digits}`;
}

export function getWhatsAppPhone(contact: ContactInfo): string {
  const source = contact.whatsapp?.trim() || contact.phone;
  return normalizePhoneDigits(source);
}

export function buildWhatsAppUrl(
  phone: string,
  message?: string
): string | undefined {
  const digits = normalizePhoneDigits(phone);
  if (digits.length < 10) return undefined;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function buildWhatsAppHref(
  contact: ContactInfo,
  message?: string
): string | undefined {
  return buildWhatsAppUrl(getWhatsAppPhone(contact), message);
}

export function buildMailtoHref(
  email: string,
  params?: { subject?: string; body?: string }
): string | undefined {
  const trimmed = email.trim();
  if (!trimmed.includes("@")) return undefined;

  const search = new URLSearchParams();
  if (params?.subject) search.set("subject", params.subject);
  if (params?.body) search.set("body", params.body);

  const qs = search.toString();
  return qs ? `mailto:${trimmed}?${qs}` : `mailto:${trimmed}`;
}

function buildGoogleMapsSearchUrl(address: string, city: string): string {
  const query = encodeURIComponent(`${address}, ${city}`.trim());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function isGenericGoogleMapsUrl(url: URL): boolean {
  if (!url.hostname.includes("google.")) return false;

  const path = url.pathname.replace(/\/$/, "") || "/";
  const hasPlace = path.includes("/place") || url.searchParams.has("query");

  return !hasPlace && (path === "/" || path === "/maps");
}

/** Resolves map links; generic google.com/maps → search query from address */
export function buildMapsHref(
  contact: Pick<ContactInfo, "mapUrl" | "address" | "city">
): string {
  const address = contact.address?.trim() ?? "";
  const city = contact.city?.trim() ?? "";
  const fallback = buildGoogleMapsSearchUrl(address, city);

  if (!address && !city) return fallback;

  const raw = contact.mapUrl?.trim();
  if (!raw) return fallback;

  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`);
    if (!["http:", "https:"].includes(url.protocol)) return fallback;
    if (isGenericGoogleMapsUrl(url)) return fallback;
    return url.toString();
  } catch {
    return fallback;
  }
}

export function normalizeExternalUrl(url: string): string | undefined {
  const trimmed = url.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}
