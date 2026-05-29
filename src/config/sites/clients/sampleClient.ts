import type { SiteConfig } from "@/types/site-config";

/**
 * Client mode test config — not a real customer.
 * Use with NEXT_PUBLIC_SITE_MODE=client and NEXT_PUBLIC_SITE_KEY=sample-client
 */
export const sampleClientConfig: SiteConfig = {
  businessName: "SmileCare Örnek Klinik",
  sector: "dentist",
  slogan: "Client mode test — özelleştirilmiş diş kliniği sitesi",
  description:
    "Bu site yalnızca production client mode doğrulaması içindir. Gerçek müşteri içeriği ile değiştirilir.",
  contact: {
    phone: "+90 216 000 00 00",
    email: "ornek@smilecare-test.com",
    address: "Örnek Mah. Test Sok. No: 1",
    city: "İstanbul",
    whatsapp: "905550000000",
    workingHours: "Pzt–Cmt: 09:00 – 18:00",
  },
  theme: {
    primary: "oklch(0.48 0.12 200)",
    primaryForeground: "oklch(0.99 0 0)",
    accent: "oklch(0.7 0.1 195)",
    accentForeground: "oklch(0.2 0.04 200)",
    heroGradientFrom: "oklch(0.96 0.02 200)",
    heroGradientTo: "oklch(0.99 0 0)",
  },
  services: [
    {
      id: "checkup",
      title: "Genel Muayene",
      description: "Dijital değerlendirme ve kişisel tedavi planı.",
      icon: "Sparkles",
    },
    {
      id: "whitening",
      title: "Diş Beyazlatma",
      description: "Güvenli profesyonel beyazlatma uygulaması.",
      icon: "Sun",
    },
    {
      id: "implant",
      title: "İmplant",
      description: "Kalıcı ve doğal görünümlü implant çözümleri.",
      icon: "Heart",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Test Kullanıcı",
      role: "Client mode",
      content: "Örnek referans metni — gerçek müşteri yorumu ile değiştirilir.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Bu site gerçek mi?",
      answer:
        "Hayır. Bu yapılandırma yalnızca client mode deploy testi içindir.",
    },
  ],
  socialLinks: [],
  about: {
    title: "Client mode örnek sitesi",
    paragraphs: [
      "Bu config, müşteri deploy’unda yalnızca SectorSite bileşeninin render edildiğini doğrulamak içindir.",
      "Demo banner ve hizmet vitrini bu modda görünmez.",
    ],
    highlights: [
      { label: "Mod", value: "Client" },
      { label: "Key", value: "sample-client" },
    ],
    bullets: ["Production-ready SectorSite", "Config-driven içerik"],
  },
  sections: {
    hero: {
      badge: "Örnek müşteri sitesi",
      primaryCta: "İletişime Geç",
      secondaryCta: "Hizmetler",
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Örnek hizmet listesi",
      description: "Müşteri onayı sonrası gerçek hizmetlerle güncellenir.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "Örnek yorumlar",
      description: "Gerçek müşteri geri bildirimleri eklenecektir.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Örnek SSS içeriği.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bize ulaşın",
      description: "Örnek iletişim bölümü.",
    },
    cta: {
      title: "Client mode aktif",
      description: "Bu sayfa seçilen müşteri config’i ile doğrudan yayınlanır.",
      callLabel: "Ara",
      whatsappLabel: "WhatsApp",
    },
  },
  seo: {
    title: "SmileCare Örnek Klinik | Client Mode Test",
    description: "sector-site-os client mode örnek müşteri sitesi.",
    keywords: ["client mode", "örnek site"],
  },
};
