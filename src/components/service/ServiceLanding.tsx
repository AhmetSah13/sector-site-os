"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe,
  Mail,
  MessageCircle,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ServiceConfig } from "@/types/service-config";
import { serviceConfig } from "@/config/service";
import { ServiceHeader } from "@/components/service/ServiceHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  buildMailtoHref,
  buildWhatsAppUrl,
  normalizeExternalUrl,
} from "@/lib/links";
import { cn } from "@/lib/utils";

const featureIcons = [
  Smartphone,
  MessageCircle,
  Search,
  Rocket,
  Sparkles,
  Wrench,
] as const;

interface ServiceLandingProps {
  config?: ServiceConfig;
}

export function ServiceLanding({ config = serviceConfig }: ServiceLandingProps) {
  const whatsappHref = buildWhatsAppUrl(
    config.whatsapp,
    `Merhaba, ${config.name} üzerinden web sitesi teklifi almak istiyorum.`
  );
  const emailHref = buildMailtoHref(config.email, {
    subject: `${config.name} — Teklif talebi`,
  });

  const socialLinks = config.socialLinks
    .map((link) => ({
      ...link,
      href: normalizeExternalUrl(link.url),
    }))
    .filter((link) => link.href);

  return (
    <div className="flex min-h-full flex-col">
      <ServiceHeader config={config} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
          <div className="pointer-events-none absolute -right-20 top-0 size-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="mb-6 border border-border">
                Web sitesi üretim sistemi
              </Badge>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight">
                {config.hero.headline}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                {config.hero.subheadline}
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-11 w-full gap-2 sm:w-auto">
                  <Link href={config.hero.primaryCta.href}>
                    {config.hero.primaryCta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 w-full sm:w-auto"
                >
                  <Link href={config.hero.secondaryCta.href}>
                    {config.hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                Neler sunuyorum
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                İşletmeniz için hazır altyapı, özel dokunuş
              </h2>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <li key={feature.id}>
                    <Card className="h-full border-border/80 shadow-sm">
                      <CardHeader>
                        <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <CardTitle className="text-base">{feature.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          className="scroll-mt-20 border-y border-border/60 bg-muted/30 py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                Nasıl çalışıyorum
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Dört adımda yayına
              </h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {config.processSteps.map((step) => (
                <li key={step.step} className="relative">
                  <div className="flex h-full flex-col rounded-xl border border-border/80 bg-background p-5 shadow-sm">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                      {step.step}
                    </span>
                    <h3 className="mt-4 font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                Paketler
              </p>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                İhtiyacınıza uygun seviye
              </h2>
              <p className="mt-3 text-muted-foreground">
                Net fiyat yerine projenize göre teklif — şeffaf kapsam.
              </p>
            </div>
            <ul className="grid gap-4 lg:grid-cols-3">
              {config.packages.map((pkg) => (
                <li key={pkg.id}>
                  <Card
                    className={cn(
                      "flex h-full flex-col border-border/80 shadow-sm",
                      pkg.featured && "ring-2 ring-primary/30"
                    )}
                  >
                    <CardHeader>
                      {pkg.featured ? (
                        <Badge className="mb-2 w-fit">Popüler</Badge>
                      ) : null}
                      <CardTitle>{pkg.name}</CardTitle>
                      <p className="text-2xl font-semibold tracking-tight">
                        {pkg.priceLabel}
                      </p>
                      <CardDescription className="leading-relaxed">
                        {pkg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                      <ul className="space-y-2">
                        {pkg.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="size-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="#contact">Teklif iste</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="border-y border-border/60 bg-primary py-14 text-primary-foreground sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <Globe className="mx-auto mb-4 size-10 opacity-90" />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {config.demoCta.title}
            </h2>
            <p className="mt-4 text-primary-foreground/85 sm:text-lg">
              {config.demoCta.description}
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 h-11 gap-2 bg-background text-foreground hover:bg-background/90"
            >
              <Link href={config.demoCta.href}>
                {config.demoCta.buttonLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-medium tracking-wide text-primary uppercase">
                  İletişim
                </p>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {config.contact.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {config.contact.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {whatsappHref ? (
                    <Button asChild className="gap-2">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="size-4" />
                        WhatsApp
                      </a>
                    </Button>
                  ) : null}
                  {emailHref ? (
                    <Button asChild variant="outline" className="gap-2">
                      <a href={emailHref}>
                        <Mail className="size-4" />
                        E-posta
                      </a>
                    </Button>
                  ) : null}
                  {socialLinks.map((link) => (
                    <Button key={link.platform} asChild variant="outline" size="sm">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label ?? link.platform}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <Card className="border-border/80 shadow-sm">
                <CardContent className="pt-6">
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                    aria-label="Teklif formu"
                  >
                    <div className="space-y-2">
                      <label htmlFor="svc-name" className="text-sm font-medium">
                        Ad Soyad
                      </label>
                      <Input id="svc-name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="svc-email" className="text-sm font-medium">
                        E-posta
                      </label>
                      <Input id="svc-email" name="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="svc-msg" className="text-sm font-medium">
                        Projeniz
                      </label>
                      <Textarea
                        id="svc-msg"
                        name="message"
                        rows={4}
                        placeholder="Sektör, hedef ve istediğiniz özellikler..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Gönder
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      {config.contact.formNote}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>© {new Date().getFullYear()} {config.name}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/demos" className="hover:text-foreground">
              Demolar
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              İletişim
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
