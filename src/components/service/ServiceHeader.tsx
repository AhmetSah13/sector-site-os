"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { ServiceConfig } from "@/types/service-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#features", label: "Hizmetler" },
  { href: "#process", label: "Süreç" },
  { href: "#packages", label: "Paketler" },
  { href: "/demos", label: "Demolar" },
  { href: "#contact", label: "İletişim" },
];

interface ServiceHeaderProps {
  config: ServiceConfig;
}

export function ServiceHeader({ config }: ServiceHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink font-semibold tracking-tight">
          <span className="block truncate">{config.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href={config.hero.secondaryCta.href}>
              {config.hero.secondaryCta.label}
            </Link>
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
                <SheetTitle>{config.name}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full">
                  <Link
                    href={config.hero.secondaryCta.href}
                    onClick={() => setOpen(false)}
                  >
                    {config.hero.secondaryCta.label}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
