import Link from "next/link";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Shown only on /demos/[sector] preview pages — not used on client production sites.
 */
export function DemoBanner() {
  return (
    <div
      role="note"
      className="relative z-[60] border-b border-amber-200/80 bg-amber-50 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/90 dark:text-amber-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-2.5 sm:flex-row sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-center text-sm sm:text-left">
          <Info className="size-4 shrink-0" aria-hidden />
          <span>
            Bu bir demo çalışmasıdır. İşletmenize özel olarak uyarlanabilir.
          </span>
        </p>
        <Button
          asChild
          size="sm"
          variant="outline"
          className="shrink-0 border-amber-300 bg-background/80 hover:bg-background dark:border-amber-800"
        >
          <Link href="/#contact">Teklif Al</Link>
        </Button>
      </div>
    </div>
  );
}
