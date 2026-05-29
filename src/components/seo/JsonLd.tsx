import type { SiteConfig } from "@/types/site-config";
import { buildMapsHref, buildTelHref, getWhatsAppPhone } from "@/lib/links";
import { getSiteUrl } from "@/lib/site-url";

interface JsonLdProps {
  config: SiteConfig;
}

export function JsonLd({ config }: JsonLdProps) {
  const { contact } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.businessName,
    description: config.description,
    url: getSiteUrl(),
    telephone: buildTelHref(contact.phone).replace("tel:", ""),
    email: contact.email.trim(),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: contact.city,
      addressCountry: "TR",
    },
    sameAs: config.socialLinks.map((l) => l.url),
    ...(contact.workingHours
      ? { openingHours: contact.workingHours }
      : {}),
    hasMap: buildMapsHref(contact),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${getWhatsAppPhone(contact)}`,
      contactType: "customer service",
      availableLanguage: ["Turkish", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
