"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { SiteConfig } from "@/types/site-config";
import { buildWhatsAppHref } from "@/lib/links";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  config: SiteConfig;
  className?: string;
}

export function WhatsAppButton({ config, className }: WhatsAppButtonProps) {
  const href = buildWhatsAppHref(
    config.contact,
    `Merhaba, ${config.businessName} web sitesinden yazıyorum.`
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 ring-4 ring-background sm:right-6 sm:bottom-6",
        className
      )}
    >
      <MessageCircle className="size-7" />
    </motion.a>
  );
}
