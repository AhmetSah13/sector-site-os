import type { ComponentType } from "react";
import Link from "next/link";
import type { SiteConfig, SocialPlatform } from "@/types/site-config";
import { Separator } from "@/components/ui/separator";
import { normalizeExternalUrl } from "@/lib/links";
import {
  hasAbout,
  hasFaqs,
  hasServices,
} from "@/lib/site-guards";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconTwitter({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconTiktok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socialIcons: Record<SocialPlatform, ComponentType<{ className?: string }>> = {
  instagram: IconInstagram,
  facebook: IconFacebook,
  linkedin: IconLinkedin,
  youtube: IconYoutube,
  twitter: IconTwitter,
  tiktok: IconTiktok,
};

interface FooterProps {
  config: SiteConfig;
}

export function Footer({ config }: FooterProps) {
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: "#services", label: "Hizmetler", visible: hasServices(config) },
    { href: "#about", label: "Hakkımızda", visible: hasAbout(config) },
    { href: "#faq", label: "SSS", visible: hasFaqs(config) },
    { href: "#contact", label: "İletişim", visible: true },
  ].filter((link) => link.visible);

  const socialLinks = config.socialLinks
    .map((link) => ({
      ...link,
      href: normalizeExternalUrl(link.url),
    }))
    .filter((link) => link.href);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-semibold">
              {config.businessName}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {config.slogan}
            </p>
            {socialLinks.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.platform];
                  return (
                    <a
                      key={`${link.platform}-${link.url}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      aria-label={link.label ?? link.platform}
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          {footerLinks.length > 0 ? (
            <div>
              <p className="text-sm font-medium">Hızlı bağlantılar</p>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div>
            <p className="text-sm font-medium">İletişim</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {config.contact.phone ? <li>{config.contact.phone}</li> : null}
              {config.contact.email ? <li>{config.contact.email}</li> : null}
              {config.contact.address || config.contact.city ? (
                <li>
                  {[config.contact.address, config.contact.city]
                    .filter(Boolean)
                    .join(", ")}
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          © {year} {config.businessName}. Tüm hakları saklıdır. · sector-site-os
        </p>
      </div>
    </footer>
  );
}
