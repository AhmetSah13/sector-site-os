"use client";

import type { SiteConfig } from "@/types/site-config";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  config: SiteConfig;
}

export function FAQSection({ config }: FAQSectionProps) {
  return (
    <SectionShell id="faq" variant="muted">
      <FadeIn>
        <SectionHeading
          eyebrow="SSS"
          title="Sık sorulan sorular"
          description="Merak ettiklerinizin yanıtları burada."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl rounded-2xl border border-border/80 bg-background px-4 shadow-sm sm:px-6"
        >
          {config.faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="py-4 text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </SectionShell>
  );
}
