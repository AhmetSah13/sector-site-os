import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { sectorRegistry } from "@/config/sector-registry";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DemoGallery() {
  return (
    <div className="min-h-full bg-gradient-to-b from-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 border border-border bg-background"
          >
            <LayoutGrid className="size-3.5" />
            sector-site-os
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Sektör demoları
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tek template, farklı sektör config’leri. Aşağıdan bir demo seçerek
            canlı önizlemeyi açın.
          </p>
          <Button asChild variant="outline" size="sm" className="mt-6">
            <Link href="/">Hizmet sayfasına dön</Link>
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {sectorRegistry.map((entry) => (
            <li key={entry.key}>
              <Card className="flex h-full flex-col border-border/80 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{entry.label}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {entry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <p className="text-xs text-muted-foreground">
                    {entry.config.businessName}
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full gap-2">
                    <Link href={`/demos/${entry.key}`}>
                      Demoyu Gör
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
