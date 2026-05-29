"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buildTelHref } from "@/lib/links";
import { resolveSectionCopy } from "@/lib/section-copy";
import {
  hasAbout,
  hasFaqs,
  hasPhone,
  hasServices,
  hasTestimonials,
} from "@/lib/site-guards";

interface SiteHeaderProps {
  config: SiteConfig;
}

export function SiteHeader({ config }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const phoneHref = buildTelHref(config.contact.phone);
  const showPhone = hasPhone(config) && phoneHref;
  const copy = resolveSectionCopy(config);

  const navLinks = useMemo(
    () =>
      [
        { href: "#services", label: "Hizmetler", visible: hasServices(config) },
        { href: "#about", label: "Hakkımızda", visible: hasAbout(config) },
        {
          href: "#testimonials",
          label: "Yorumlar",
          visible: hasTestimonials(config),
        },
        { href: "#faq", label: "SSS", visible: hasFaqs(config) },
        { href: "#contact", label: "İletişim", visible: true },
      ].filter((link) => link.visible),
    [config]
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          <span className="block truncate">{config.businessName}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {showPhone ? (
            <Button asChild size="sm" className="hidden gap-2 sm:inline-flex">
              <a href={phoneHref}>
                <Phone className="size-4" />
                <span className="hidden lg:inline">{copy.hero.primaryCta}</span>
                <span className="lg:hidden">Ara</span>
              </a>
            </Button>
          ) : null}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Menüyü aç"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="pr-8">{config.businessName}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                {showPhone ? (
                  <Button asChild className="mt-4 w-full">
                    <a href={phoneHref} onClick={() => setOpen(false)}>
                      {copy.hero.primaryCta}
                    </a>
                  </Button>
                ) : null}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
