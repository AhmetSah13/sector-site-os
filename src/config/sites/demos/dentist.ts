import type { SiteConfig } from "@/types/site-config";

export const dentistConfig: SiteConfig = {
  businessName: "Dentavia Klinik",
  sector: "dentist",
  slogan: "Sağlıklı gülüşler, güvenilir ellerde",
  description:
    "Modern teknoloji ve deneyimli hekim kadromuzla implant, estetik diş hekimliği ve genel diş tedavilerinde kişiye özel çözümler sunuyoruz.",
  contact: {
    phone: "+90 212 555 01 23",
    email: "info@dentavia.com",
    address: "Bağdat Cad. No: 142",
    city: "Kadıköy, İstanbul",
    mapUrl: "https://maps.google.com",
    whatsapp: "905321234567",
    workingHours: "Pzt–Cmt: 09:00 – 19:00",
  },
  theme: {
    primary: "oklch(0.52 0.14 220)",
    primaryForeground: "oklch(0.99 0 0)",
    accent: "oklch(0.75 0.12 195)",
    accentForeground: "oklch(0.2 0.04 220)",
    heroGradientFrom: "oklch(0.97 0.02 220)",
    heroGradientTo: "oklch(0.99 0 0)",
  },
  services: [
    {
      id: "implant",
      title: "İmplant Tedavisi",
      description:
        "Kayıp dişleriniz için kalıcı, doğal görünümlü implant çözümleri.",
      icon: "Sparkles",
    },
    {
      id: "whitening",
      title: "Diş Beyazlatma",
      description:
        "Güvenli ve etkili profesyonel beyazlatma ile parlak bir gülüş.",
      icon: "Sun",
    },
    {
      id: "orthodontics",
      title: "Ortodonti",
      description:
        "Şeffaf plak ve tel tedavileriyle düzgün ve estetik diş dizilimi.",
      icon: "AlignCenter",
    },
    {
      id: "pediatric",
      title: "Çocuk Diş Hekimliği",
      description:
        "Çocuklara özel, konforlu ve korkusuz diş tedavi deneyimi.",
      icon: "Heart",
    },
    {
      id: "aesthetic",
      title: "Estetik Diş",
      description:
        "Lamina, bonding ve gülüş tasarımı ile hayalinizdeki gülüş.",
      icon: "Smile",
    },
    {
      id: "emergency",
      title: "Acil Diş",
      description:
        "Ağrı ve travma durumlarında aynı gün acil müdahale hizmeti.",
      icon: "Siren",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Ayşe Yılmaz",
      role: "İmplant hastası",
      content:
        "Yıllardır ertelediğim implant tedavimi Dentavia'da tamamladım. Süreç boyunca her adım açıklandı, sonuçtan çok memnunum.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Mehmet Kaya",
      role: "Ortodonti hastası",
      content:
        "Şeffaf plak tedavisi beklediğimden çok daha rahattı. Ekip her kontrolde ilgili ve profesyoneldi.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Zeynep Demir",
      role: "Estetik diş",
      content:
        "Gülüş tasarımı sonrası özgüvenim arttı. Klinik hijyenik, modern ve sıcak bir ortam.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "İlk muayene ücretsiz mi?",
      answer:
        "Evet, ilk muayene ve dijital ağız içi değerlendirme randevunuz ücretsizdir. Tedavi planı bu görüşmede paylaşılır.",
    },
    {
      id: "f2",
      question: "İmplant tedavisi ne kadar sürer?",
      answer:
        "Kemik yapısına göre değişmekle birlikte çoğu vakada 3–6 ay içinde kalıcı protez tamamlanır.",
    },
    {
      id: "f3",
      question: "Taksit imkânı var mı?",
      answer:
        "Anlaşmalı bankalar ve klinik içi ödeme planları ile tedavinizi kolayca planlayabilirsiniz.",
    },
    {
      id: "f4",
      question: "Acil durumlarda ne yapmalıyım?",
      answer:
        "Mesai saatleri içinde doğrudan arayın; mesai dışında WhatsApp hattımızdan ulaşabilirsiniz.",
    },
  ],
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/dentavia",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/dentavia",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@dentavia",
    },
  ],
  about: {
    title: "Gülüşünüze değer veriyoruz",
    paragraphs: [
      "2010 yılından bu yana İstanbul'da hizmet veren Dentavia Klinik, hasta memnuniyetini merkeze alan bir yaklaşımla çalışır.",
      "Dijital tomografi, intraoral tarayıcı ve CAD/CAM teknolojileriyle tedavilerinizi minimum sürede, maksimum konforla tamamlıyoruz.",
    ],
    highlights: [
      { label: "Deneyim", value: "15+ yıl" },
      { label: "Mutlu hasta", value: "12.000+" },
      { label: "Uzman hekim", value: "8" },
      { label: "Memnuniyet", value: "%98" },
    ],
    imageAlt: "Modern diş kliniği tedavi odası",
    bullets: [
      "Steril ve modern klinik ortamı",
      "Kişiye özel tedavi planı",
      "Şeffaf fiyatlandırma",
    ],
  },
  sectionLayout: [
    { id: "hero", enabled: true, variant: "default" },
    { id: "services", enabled: true, variant: "cards" },
    { id: "about", enabled: true, variant: "default" },
    { id: "gallery", enabled: true, variant: "grid" },
    { id: "testimonials", enabled: true, variant: "cards" },
    { id: "faq", enabled: true, variant: "accordion" },
    { id: "cta", enabled: true, variant: "default" },
    { id: "contact", enabled: true, variant: "default" },
  ],
  sections: {
    hero: {
      badge: "Ücretsiz ilk muayene",
      primaryCta: "Randevu Oluştur",
      secondaryCta: "Hizmetlerimiz",
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Size özel tedavi çözümleri",
      description:
        "Deneyimli ekibimiz ve modern ekipmanlarımızla kapsamlı hizmet sunuyoruz.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "Hastalarımız ne diyor?",
      description: "Binlerce mutlu hastanın güvenini kazandık.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Merak ettiklerinizin yanıtları burada.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Randevu ve bilgi için bize ulaşın",
      description:
        "Formu doldurun veya doğrudan arayın — en kısa sürede dönüş yapalım.",
    },
    cta: {
      title: "Sağlıklı gülüşünüz bir randevu uzağınızda",
      description:
        "Ücretsiz ilk muayene için hemen iletişime geçin. Ekibimiz size en uygun zamanı ayarlasın.",
      callLabel: "Hemen Ara",
      whatsappLabel: "WhatsApp ile yazın",
    },
  },
  seo: {
    title: "Dentavia Klinik | İstanbul Diş Kliniği",
    description:
      "İmplant, estetik diş, ortodonti ve çocuk diş hekimliği. Kadıköy'de modern diş kliniği — ücretsiz ilk muayene.",
    keywords: [
      "diş kliniği istanbul",
      "implant",
      "estetik diş",
      "kadıköy diş hekimi",
    ],
  },
};
