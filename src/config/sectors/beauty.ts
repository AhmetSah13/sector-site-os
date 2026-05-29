import type { SiteConfig } from "@/types/site-config";

export const beautyConfig: SiteConfig = {
  businessName: "Lumière Beauty Studio",
  sector: "beauty",
  slogan: "Işıltınızı ortaya çıkarın",
  description:
    "Cilt bakımı, kalıcı makyaj, saç ve tırnak hizmetlerinde uzman ekibimiz ve lüks stüdyo ortamımızla kendinize ayırdığınız zamana değer katıyoruz.",
  contact: {
    phone: "+90 216 777 03 44",
    email: "randevu@lumierebeauty.com",
    address: "Bağdat Cad. No: 312",
    city: "Suadiye, İstanbul",
    mapUrl: "https://maps.google.com",
    whatsapp: "905447776655",
    workingHours: "Sal–Paz: 10:00 – 20:00",
  },
  theme: {
    primary: "oklch(0.55 0.16 350)",
    primaryForeground: "oklch(0.99 0 0)",
    accent: "oklch(0.78 0.1 350)",
    accentForeground: "oklch(0.28 0.06 350)",
    heroGradientFrom: "oklch(0.97 0.02 350)",
    heroGradientTo: "oklch(0.99 0 0)",
  },
  services: [
    {
      id: "facial",
      title: "Cilt Bakımı & HydraFacial",
      description:
        "Kişiye özel analiz sonrası derin temizlik, peeling ve nemlendirme protokolleri.",
      icon: "Sparkles",
    },
    {
      id: "hair",
      title: "Saç Tasarım & Bakım",
      description:
        "Kesim, renklendirme, keratin ve özel gün saç makyajı hizmetleri.",
      icon: "Scissors",
    },
    {
      id: "nails",
      title: "Manikür & Pedikür",
      description:
        "Jel, kalıcı oje ve medikal ayak bakımı; hijyenik tek kullanımlık setler.",
      icon: "Flower2",
    },
    {
      id: "pmu",
      title: "Kalıcı Makyaj",
      description:
        "Microblading, dudak renklendirme ve eyeliner — doğal görünüm garantisi.",
      icon: "Sun",
    },
    {
      id: "laser",
      title: "Lazer Epilasyon",
      description:
        "FDA onaylı cihazlarla tüm cilt tiplerine uygun, ağrısız seans planı.",
      icon: "Heart",
    },
    {
      id: "bridal",
      title: "Gelin & Özel Gün",
      description:
        "Prova dahil komple gelin paketi; eve veya salona mobil makyaj seçeneği.",
      icon: "AlignCenter",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Merve Şahin",
      role: "HydraFacial müşterisi",
      content:
        "Cildim ilk seanstan sonra bile canlandı. Uzmanlar ürünleri detaylı anlattı, stüdyo çok şık ve hijyenik.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Aylin Koç",
      role: "Gelin paketi",
      content:
        "Düğün günü makyajım 14 saat dayandı! Prova sürecinde sabırla denediler, tam istediğim soft glam oldu.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Ece Polat",
      role: "Lazer epilasyon",
      content:
        "6 seans sonunda istediğim sonuca ulaştım. Seanslar kısa, personel her zaman nazik ve bilgilendirici.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Randevu nasıl alınır?",
      answer:
        "WhatsApp, telefon veya web formu üzerinden randevu alabilirsiniz. Popüler saatler için 3–5 gün önceden ayırtmanızı öneririz.",
    },
    {
      id: "f2",
      question: "İlk cilt bakımında ne yapılır?",
      answer:
        "Ücretsiz cilt analizi sonrası 60–90 dk'lık temizlik ve nemlendirme uygulanır; ev bakım ürün önerisi paylaşılır.",
    },
    {
      id: "f3",
      question: "Kalıcı makyaj ne kadar kalıcı?",
      answer:
        "Tekniğe göre 12–24 ay arası solma olur; 1 yıl sonra ücretsiz kontrol randevusu sunuyoruz.",
    },
    {
      id: "f4",
      question: "İptal ve erteleme politikası nedir?",
      answer:
        "24 saat öncesine kadar ücretsiz erteleme yapılabilir; geç iptallerde seans ücretinin %50'si tahsil edilir.",
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/lumierebeauty" },
    { platform: "tiktok", url: "https://tiktok.com/@lumierebeauty" },
    { platform: "facebook", url: "https://facebook.com/lumierebeauty" },
  ],
  about: {
    title: "Güzellikte kişisel dokunuş",
    paragraphs: [
      "Suadiye'de butik konseptle hizmet veren Lumière, uluslararası sertifikalı estetisyen ve kuaförlerden oluşan 10 kişilik uzman kadrosuyla çalışır.",
      "Dermokozmetik partnerlerimiz cruelty-free ve dermatolojik test onaylı ürünlerden seçilir; her uygulama öncesi alerji testi yapılır.",
    ],
    highlights: [
      { label: "Uzman", value: "10" },
      { label: "Mutlu müşteri", value: "8.500+" },
      { label: "Hizmet", value: "25+" },
      { label: "Tekrar oranı", value: "%92" },
    ],
    imageAlt: "Lüks güzellik stüdyosu makyaj masası",
    bullets: [
      "Dermatolojik test onaylı ürünler",
      "Uzman estetisyen kadrosu",
      "Online randevu kolaylığı",
    ],
  },
  sections: {
    hero: {
      badge: "İlk cilt analizi ücretsiz",
      primaryCta: "Randevu Al",
      secondaryCta: "Hizmetler",
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Cilt, saç ve güzellik ritüelleri",
      description:
        "Kişiye özel bakım protokolleri ve lüks stüdyo deneyimiyle ışıltınızı ortaya çıkarın.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "Müşterilerimiz ne diyor?",
      description: "Lumière deneyimini paylaşan misafirlerimizden yorumlar.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Randevu, bakım süreleri ve iptal politikası hakkında.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Randevu ve danışmanlık",
      description:
        "Popüler saatler için önceden randevu almanızı öneririz. Form veya WhatsApp ile ulaşın.",
    },
    cta: {
      title: "Kendinize ayırdığınız zamanı güzelleştirin",
      description:
        "Ücretsiz cilt analizi randevunuzu hemen alın. Uzman ekibimiz sizi bekliyor.",
      callLabel: "Hemen Ara",
      whatsappLabel: "WhatsApp ile yazın",
    },
  },
  seo: {
    title: "Lumière Beauty Studio | Suadiye Güzellik Salonu",
    description:
      "Cilt bakımı, saç, tırnak, lazer epilasyon ve gelin makyajı. Bağdat Caddesi'nde premium beauty studio — online randevu.",
    keywords: [
      "güzellik salonu suadiye",
      "hydrafacial istanbul",
      "gelin makyajı",
      "lazer epilasyon",
    ],
  },
};
