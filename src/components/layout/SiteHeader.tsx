"use client";

import { useState } from "react";
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

const navLinks = [
  { href: "#services", label: "Hizmetler" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#testimonials", label: "Yorumlar" },
  { href: "#faq", label: "SSS" },
  { href: "#contact", label: "İletişim" },
];

interface SiteHeaderProps {
  config: SiteConfig;
}

export function SiteHeader({ config }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const phoneHref = buildTelHref(config.contact.phone);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {config.businessName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden gap-2 sm:inline-flex">
            <a href={phoneHref}>
              <Phone className="size-4" />
              Randevu Al
            </a>
          </Button>
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
                <SheetTitle>{config.businessName}</SheetTitle>
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
                <Button asChild className="mt-4 w-full">
                  <a
                    href={phoneHref}
                    onClick={() => setOpen(false)}
                  >
                    Randevu Al
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
