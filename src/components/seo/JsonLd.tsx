import type { SiteConfig } from "@/types/site-config";
import {
  buildMapsHref,
  buildTelHref,
  getWhatsAppPhone,
  normalizeExternalUrl,
} from "@/lib/links";
import { getSiteUrl } from "@/lib/site-url";
import { hasSocialLinks } from "@/lib/site-guards";

interface JsonLdProps {
  config: SiteConfig;
}

export function JsonLd({ config }: JsonLdProps) {
  const { contact } = config;
  const telHref = buildTelHref(contact.phone);
  const whatsappDigits = getWhatsAppPhone(contact);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: config.businessName,
    description: config.description,
    url: getSiteUrl(),
    ...(telHref ? { telephone: telHref.replace("tel:", "") } : {}),
    ...(contact.email?.trim()
      ? { email: contact.email.trim() }
      : {}),
    ...((contact.address || contact.city) && {
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: contact.city,
        addressCountry: "TR",
      },
    }),
    ...(hasSocialLinks(config)
      ? {
          sameAs: config.socialLinks
            .map((l) => normalizeExternalUrl(l.url))
            .filter(Boolean),
        }
      : {}),
    ...(contact.workingHours
      ? { openingHours: contact.workingHours }
      : {}),
    hasMap: buildMapsHref(contact),
    ...(whatsappDigits.length >= 10
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${whatsappDigits}`,
            contactType: "customer service",
            availableLanguage: ["Turkish", "English"],
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
