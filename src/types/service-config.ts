export type ServiceSocialPlatform = "linkedin" | "github";

export interface ServiceSocialLink {
  platform: ServiceSocialPlatform;
  url: string;
  label?: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  priceLabel: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export interface ServiceConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  whatsapp: string;
  socialLinks: ServiceSocialLink[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  features: ServiceFeature[];
  processSteps: ServiceProcessStep[];
  packages: ServicePackage[];
  demoCta: {
    title: string;
    description: string;
    buttonLabel: string;
    href: string;
  };
  contact: {
    title: string;
    description: string;
    formNote: string;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}
