"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  buildMailtoHref,
  buildMapsHref,
  buildTelHref,
} from "@/lib/links";

interface ContactSectionProps {
  config: SiteConfig;
}

export function ContactSection({ config }: ContactSectionProps) {
  const { contact } = config;
  const phoneHref = buildTelHref(contact.phone);
  const emailHref = buildMailtoHref(contact.email, {
    subject: `${config.businessName} — Web sitesi iletişim`,
  });
  const mapsHref = buildMapsHref(contact);

  return (
    <SectionShell id="contact">
      <FadeIn>
        <SectionHeading
          eyebrow="İletişim"
          title="Randevu ve bilgi için bize ulaşın"
          description="Formu doldurun veya doğrudan arayın — en kısa sürede dönüş yapalım."
        />
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-4">
            <Card className="border-border/80 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">İletişim bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <a
                  href={phoneHref}
                  className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{contact.phone}</span>
                </a>
                <a
                  href={emailHref}
                  className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{contact.email}</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>
                    {contact.address}
                    <br />
                    {contact.city}
                  </span>
                </div>
                {contact.workingHours ? (
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{contact.workingHours}</span>
                  </div>
                ) : null}
              </CardContent>
            </Card>

            <Button asChild variant="outline" className="w-full">
              <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                <MapPin className="size-4" />
                Haritada görüntüle
              </a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <Card className="border-border/80 shadow-sm">
            <CardContent className="pt-6">
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
                aria-label="İletişim formu"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ad Soyad
                    </label>
                    <Input id="name" name="name" placeholder="Adınız Soyadınız" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone-input" className="text-sm font-medium">
                      Telefon
                    </label>
                    <Input
                      id="phone-input"
                      name="phone"
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email-input" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input
                    id="email-input"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Randevu veya sorularınız..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Mesaj Gönder
                </Button>
                <p className="text-xs text-muted-foreground">
                  MVP aşamasında form demo amaçlıdır; backend entegrasyonu
                  sonraki sürümde eklenecektir.
                </p>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </SectionShell>
  );
}
