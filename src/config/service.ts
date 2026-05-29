import type { ServiceConfig } from "@/types/service-config";

export const serviceConfig: ServiceConfig = {
  name: "Ahmet Şahin Orkin",
  title: "Küçük işletmeler için modern web siteleri",
  description:
    "Yazılım mühendisliği öğrencisi ve web geliştirici olarak; Next.js tabanlı sektör altyapısını işletmenize özel içerik, renk ve iletişimle kısa sürede yayına hazırlıyorum.",
  email: "ahmetbeys2g@gmail.com",
  whatsapp: "",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/ahmet-orkin-2aa526296/",
      label: "LinkedIn",
    },
    {
      platform: "github",
      url: "https://github.com/AhmetSah13",
      label: "GitHub",
    },
  ],
  hero: {
    headline: "Küçük işletmeler için hızlı, modern ve mobil uyumlu web siteleri",
    subheadline:
      "Hazır sektör altyapısını (Next.js, React, Tailwind) işletmenize özel metin, renk, görsel ve WhatsApp odaklı iletişimle uyarlayıp kısa sürede canlıya alıyorum.",
    primaryCta: { label: "Demoları Gör", href: "/demos" },
    secondaryCta: { label: "Teklif Al", href: "#contact" },
  },
  features: [
    {
      id: "mobile",
      title: "Mobil uyumlu tasarım",
      description:
        "Tailwind CSS ile telefon, tablet ve masaüstünde net, hızlı ve tutarlı bir deneyim.",
    },
    {
      id: "whatsapp",
      title: "WhatsApp odaklı iletişim",
      description:
        "Tek tıkla mesaj, arama ve harita yönlendirmesi — müşteriniz size anında ulaşır.",
    },
    {
      id: "seo",
      title: "SEO uyumlu yapı",
      description:
        "Metadata, sitemap ve robots.txt ile arama motorlarına hazır, düzenli sayfa mimarisi.",
    },
    {
      id: "delivery",
      title: "Hızlı teslim",
      description:
        "Sektör şablonu sayesinde içerikleriniz toplandıktan sonra kısa döngüde yayın.",
    },
    {
      id: "sector",
      title: "Sektöre göre özelleştirme",
      description:
        "Diş kliniği, kafe, spor salonu, güzellik ve emlak için canlı demo tabanları hazır.",
    },
    {
      id: "launch",
      title: "Yayına alma desteği",
      description:
        "Vercel veya benzeri platformda deploy ve domain yönlendirme sürecinde rehberlik.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "İşletme bilgilerinizi alıyorum",
      description:
        "Hizmetler, iletişim, görseller ve marka tercihlerinizi netleştiriyoruz.",
    },
    {
      step: 2,
      title: "Sektöre uygun altyapıyı seçiyorum",
      description:
        "İşletmenize en yakın demo şablonunu temel alarak site iskeletini belirliyorum.",
    },
    {
      step: 3,
      title: "İçerik ve görsel uyarlaması",
      description:
        "Metinler, tema renkleri ve görseller markanıza göre özelleştirilir.",
    },
    {
      step: 4,
      title: "Test ve yayın",
      description:
        "Mobil kontrol, link testleri ve temel SEO kontrollerinden sonra site yayına alınır.",
    },
  ],
  packages: [
    {
      id: "starter",
      name: "Başlangıç Site",
      priceLabel: "Teklif ile",
      description:
        "Yeni açılan veya hızlı dijital vitrin isteyen işletmeler için odaklı tek sayfa deneyimi.",
      highlights: [
        "Hero, hizmet özeti ve iletişim",
        "WhatsApp ve harita entegrasyonu",
        "Mobil öncelikli responsive tasarım",
      ],
    },
    {
      id: "business",
      name: "Kurumsal Site",
      priceLabel: "Teklif ile",
      description:
        "Güven veren tam yapı: hizmetler, hakkımızda, yorumlar, SSS ve güçlü iletişim alanı.",
      highlights: [
        "Çok bölümlü kurumsal landing",
        "SEO metadata ve yapılandırılmış veri",
        "Sektör demosu tabanlı hızlı kurulum",
      ],
      featured: true,
    },
    {
      id: "premium",
      name: "Premium Site",
      priceLabel: "İhtiyaca göre",
      description:
        "Ek içerik blokları, öncelikli iletişim ve genişletilmiş yayın desteği isteyen işletmeler için.",
      highlights: [
        "Kapsam genişletme ve ek bölümler",
        "Öncelikli revizyon turu",
        "Deploy, domain ve son kontrol desteği",
      ],
    },
  ],
  demoCta: {
    title: "Canlı sektör demolarını inceleyin",
    description:
      "Aynı altyapının diş kliniği, kafe, spor salonu, güzellik ve emlak için nasıl göründüğünü demo galerisinde görebilirsiniz.",
    buttonLabel: "Demo galerisine git",
    href: "/demos",
  },
  contact: {
    title: "Projeniz için teklif alın",
    description:
      "İşletmenizi ve sektörünüzü kısaca yazın; size uygun paket ve tahmini süre için geri dönüş yapayım.",
    formNote:
      "Form demo amaçlıdır; gönderim simüle edilir. Hızlı dönüş için e-posta veya LinkedIn üzerinden de ulaşabilirsiniz.",
  },
  seo: {
    title: "Ahmet Şahin Orkin | Küçük işletmeler için web siteleri",
    description:
      "Next.js ve React ile mobil uyumlu, SEO dostu, WhatsApp odaklı işletme siteleri. Sektör demolarını inceleyin, teklif alın.",
    keywords: [
      "freelance web geliştirici",
      "küçük işletme web sitesi",
      "next.js landing page",
      "sektörel web sitesi",
      "mobil uyumlu web tasarım",
    ],
  },
};
