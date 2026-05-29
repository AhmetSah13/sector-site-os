export type SectorId =
  | "dentist"
  | "cafe"
  | "gym"
  | "beauty"
  | "real-estate"
  | (string & {});

export interface SiteTheme {
  primary: string;
  primaryForeground?: string;
  accent?: string;
  accentForeground?: string;
  heroGradientFrom?: string;
  heroGradientTo?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  mapUrl?: string;
  whatsapp?: string;
  workingHours?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "youtube"
  | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label?: string;
}

export interface SectionHeadingCopy {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface HeroSectionCopy {
  badge?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export interface CtaSectionCopy {
  title: string;
  description: string;
  callLabel?: string;
  whatsappLabel?: string;
}

export interface SiteSectionsCopy {
  hero?: HeroSectionCopy;
  services?: SectionHeadingCopy;
  testimonials?: SectionHeadingCopy;
  faq?: SectionHeadingCopy;
  contact?: SectionHeadingCopy;
  cta?: CtaSectionCopy;
}

export type ResolvedSectionCopy = {
  hero: Required<HeroSectionCopy>;
  services: Required<SectionHeadingCopy>;
  testimonials: Required<SectionHeadingCopy>;
  faq: Required<SectionHeadingCopy>;
  contact: Required<SectionHeadingCopy>;
  cta: Required<CtaSectionCopy>;
};

export interface AboutContent {
  title: string;
  paragraphs: string[];
  highlights?: { label: string; value: string }[];
  bullets?: string[];
  /** Path under /public, e.g. /images/about.jpg — rendered via next/image */
  image?: string;
  imageAlt?: string;
}

export interface SiteSEO {
  title?: string;
  description?: string;
  keywords?: string[];
  /** Path under /public or absolute URL — used for Open Graph & Twitter */
  ogImage?: string;
  /** Without @ — e.g. "dentaviaklinik" */
  twitterHandle?: string;
}

export interface SiteConfig {
  businessName: string;
  sector: SectorId;
  slogan: string;
  description: string;
  contact: ContactInfo;
  theme: SiteTheme;
  services: ServiceItem[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  socialLinks: SocialLink[];
  about: AboutContent;
  /** Section başlıkları, CTA metinleri ve hero butonları */
  sections?: SiteSectionsCopy;
  seo?: SiteSEO;
}
