import type { ServiceConfig } from "@/types/service-config";

export const serviceConfig: ServiceConfig = {
  name: "sector-site-os",
  title: "Küçük işletmeler için modern web siteleri",
  description:
    "Sektörünüze uygun hazır altyapıyı işletmenize özel içerik, renk ve görsellerle kısa sürede yayına alıyorum.",
  email: "hello@sectorsite.dev",
  whatsapp: "905551234567",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/ahmetsah",
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
      "Sektörünüze uygun hazır altyapıyı işletmenize özel içerik, renk ve görsellerle kısa sürede yayına alıyorum.",
    primaryCta: { label: "Demoları Gör", href: "/demos" },
    secondaryCta: { label: "Teklif Al", href: "#contact" },
  },
  features: [
    {
      id: "mobile",
      title: "Mobil uyumlu tasarım",
      description:
        "Telefon, tablet ve masaüstünde tutarlı, okunaklı ve hızlı deneyim.",
    },
    {
      id: "whatsapp",
      title: "WhatsApp odaklı iletişim",
      description:
        "Müşterileriniz tek tıkla size ulaşır; arama ve harita linkleri hazır.",
    },
    {
      id: "seo",
      title: "SEO’ya uygun sayfa yapısı",
      description:
        "Metadata, sitemap ve temiz HTML ile arama motorlarına hazır altyapı.",
    },
    {
      id: "delivery",
      title: "Hızlı teslim",
      description:
        "Sektör şablonu sayesinde içerik toplandıktan sonra kısa sürede yayın.",
    },
    {
      id: "sector",
      title: "Sektöre göre özelleştirme",
      description:
        "Diş kliniği, kafe, spor salonu, güzellik ve emlak için hazır demo tabanı.",
    },
    {
      id: "launch",
      title: "Yayına alma desteği",
      description:
        "Domain bağlama ve production deploy sürecinde yanınızdayım.",
    },
  ],
  processSteps: [
    {
      step: 1,
      title: "İşletme bilgilerini alıyorum",
      description:
        "Hizmetleriniz, iletişim bilgileriniz, görseller ve marka tercihlerinizi topluyoruz.",
    },
    {
      step: 2,
      title: "Sektöre uygun demo altyapısını seçiyorum",
      description:
        "İşletmenize en yakın sektör şablonunu temel alarak yapıyı belirliyorum.",
    },
    {
      step: 3,
      title: "İçerik, renk ve görselleri uyarlıyorum",
      description:
        "Metinler, tema renkleri ve görseller markanıza göre özelleştirilir.",
    },
    {
      step: 4,
      title: "Siteyi test edip yayına alıyorum",
      description:
        "Mobil kontrol, link testleri ve SEO kontrollerinden sonra site canlıya alınır.",
    },
  ],
  packages: [
    {
      id: "starter",
      name: "Başlangıç Site",
      priceLabel: "Teklif ile",
      description: "Tek sayfa veya kompakt vitrin — hızlı online görünürlük.",
      highlights: [
        "Hero + iletişim",
        "WhatsApp & harita",
        "Mobil uyumlu",
      ],
    },
    {
      id: "business",
      name: "Kurumsal Site",
      priceLabel: "Teklif ile",
      description:
        "Hizmetler, hakkımızda, SSS ve referanslarla tam kurumsal yapı.",
      highlights: [
        "Tüm temel bölümler",
        "SEO metadata",
        "Sektör demosu tabanı",
      ],
      featured: true,
    },
    {
      id: "premium",
      name: "Premium Site",
      priceLabel: "Özel teklif",
      description:
        "Ek sayfalar, gelişmiş içerik ve öncelikli teslim ile genişletilmiş paket.",
      highlights: [
        "Özel bölümler",
        "Öncelikli destek",
        "Deploy & domain yardımı",
      ],
    },
  ],
  demoCta: {
    title: "Sektör demolarını canlı inceleyin",
    description:
      "Diş kliniği, kafe, spor salonu, güzellik ve gayrimenkul için hazır demo siteleri tek tıkla açılır.",
    buttonLabel: "Demo galerisine git",
    href: "/demos",
  },
  contact: {
    title: "Teklif ve bilgi için iletişime geçin",
    description:
      "Projenizi kısaca anlatın; size uygun paket ve süre için geri dönüş yapayım.",
    formNote:
      "Form demo amaçlıdır; gönderim simüle edilir. Hızlı dönüş için WhatsApp tercih edilir.",
  },
  seo: {
    title: "sector-site-os | Küçük işletmeler için web siteleri",
    description:
      "Mobil uyumlu, SEO dostu ve sektöre özel web siteleri. Canlı demoları inceleyin, teklif alın.",
    keywords: [
      "küçük işletme web sitesi",
      "sektörel web sitesi",
      "mobil uyumlu site",
      "istanbul web tasarım",
    ],
  },
};
