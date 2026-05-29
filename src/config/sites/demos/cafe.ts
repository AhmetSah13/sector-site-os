import type { SiteConfig } from "@/types/site-config";

export const cafeConfig: SiteConfig = {
  businessName: "Kahve Durağı",
  sector: "cafe",
  slogan: "Her yudumda İstanbul'un sıcaklığı",
  description:
    "Özel kavrum çekirdeklerimiz, ev yapımı tatlılarımız ve samimi atmosferimizle Moda'da günün her anına eşlik eden üçüncü dalga kahve deneyimi.",
  contact: {
    phone: "+90 216 444 02 10",
    email: "hello@kahveduragi.com",
    address: "Moda Cad. No: 48",
    city: "Kadıköy, İstanbul",
    mapUrl: "https://maps.google.com",
    whatsapp: "905551112233",
    workingHours: "Her gün: 08:00 – 23:00",
  },
  theme: {
    primary: "oklch(0.45 0.1 55)",
    primaryForeground: "oklch(0.99 0.01 90)",
    accent: "oklch(0.72 0.14 75)",
    accentForeground: "oklch(0.25 0.06 55)",
    heroGradientFrom: "oklch(0.97 0.03 75)",
    heroGradientTo: "oklch(0.99 0.01 90)",
  },
  services: [
    {
      id: "espresso",
      title: "Espresso & Filtre Kahve",
      description:
        "Günlük taze öğütülmüş tek origin ve harman çekirdeklerle hazırlanan sıcak içecekler.",
      icon: "Coffee",
    },
    {
      id: "brunch",
      title: "Kahvaltı & Brunch",
      description:
        "Organik yumurta, ev reçelleri ve artisan ekmeklerle zengin sabah menüsü.",
      icon: "ChefHat",
    },
    {
      id: "desserts",
      title: "Ev Yapımı Tatlılar",
      description:
        "Günlük fırından çıkan cheesecake, brownie ve mevsimsel pasta çeşitleri.",
      icon: "Utensils",
    },
    {
      id: "cold",
      title: "Soğuk İçecekler",
      description:
        "Cold brew, affogato ve özel aromalı buzlu latte seçenekleri.",
      icon: "Wine",
    },
    {
      id: "events",
      title: "Etkinlik & Workshop",
      description:
        "Latte art atölyeleri, cupping geceleri ve özel doğum günü organizasyonları.",
      icon: "Users",
    },
    {
      id: "catering",
      title: "Kurumsal Catering",
      description:
        "Ofis toplantıları ve etkinlikler için mobil kahve barı ve ikram paketleri.",
      icon: "Sparkles",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Elif Arslan",
      role: "Düzenli müşteri",
      content:
        "Cold brew'ları şehirdeki en dengeli tat. Sabahları laptop'umla geldiğim favori köşem burası.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Can Öztürk",
      role: "Brunch misafiri",
      content:
        "Pazar brunch menüsü harika, servis hızlı ve ekip her zaman güleryüzlü. Arkadaşlarıma sürekli öneriyorum.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Selin Aktaş",
      role: "Latte art workshop",
      content:
        "Workshop çok eğlenceliydi, baristalar sabırla öğretti. Artık evde de güzel latte yapabiliyorum.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Rezervasyon gerekli mi?",
      answer:
        "Hafta içi walk-in karşılıyoruz. Hafta sonu brunch ve 6+ kişilik gruplar için WhatsApp'tan masa ayırtmanızı öneririz.",
    },
    {
      id: "f2",
      question: "Vegan ve glutensiz seçenek var mı?",
      answer:
        "Evet, süt alternatifleri (yulaf, badem), vegan tatlılar ve glutensiz atıştırmalıklar menümüzde mevcuttur.",
    },
    {
      id: "f3",
      question: "Kahve çekirdeği satışı yapıyor musunuz?",
      answer:
        "250 g ve 1 kg paketler halinde kavrum tarihi yazılı çekirdek satışımız vardır; dilediğiniz öğütme profilini seçebilirsiniz.",
    },
    {
      id: "f4",
      question: "Wi-Fi ve priz var mı?",
      answer:
        "Ücretsiz yüksek hızlı Wi-Fi ve masalarda/USB şarj noktaları bulunur; uzun çalışma seansları için uygundur.",
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/kahveduragi" },
    { platform: "tiktok", url: "https://tiktok.com/@kahveduragi" },
    { platform: "facebook", url: "https://facebook.com/kahveduragi" },
  ],
  about: {
    title: "Mahalle kahveciliğinin modern yüzü",
    paragraphs: [
      "2018'de Moda'da küçük bir köşe dükkân olarak açılan Kahve Durağı, bugün yerel çekirdek üreticileriyle doğrudan çalışan bağımsız bir kahve evi.",
      "Sürdürülebilir ambalaj, kompost programı ve atık kahve grounds geri dönüşümüyle çevreye duyarlı işletme modelini benimsiyoruz.",
    ],
    highlights: [
      { label: "Kavrum çeşidi", value: "12+" },
      { label: "Günlük misafir", value: "400+" },
      { label: "Barista", value: "6" },
      { label: "Google puanı", value: "4.9" },
    ],
    imageAlt: "Sıcak kahve ve brunch masası",
    bullets: [
      "Günlük taze kavrum çekirdekler",
      "Vegan ve glutensiz seçenekler",
      "Ücretsiz Wi-Fi ve çalışma köşeleri",
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
      badge: "Moda'da üçüncü dalga kahve",
      primaryCta: "Masa Ayırt",
      secondaryCta: "Menüyü Gör",
    },
    services: {
      eyebrow: "Menü",
      title: "Kahve, brunch ve atıştırmalıklar",
      description:
        "Özel kavrum çekirdekler ve ev yapımı tatlılarla günün her anına eşlik ediyoruz.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "Misafirlerimiz ne diyor?",
      description: "Moda'nın favori kahve durağından gerçek yorumlar.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Rezervasyon, menü ve etkinlikler hakkında bilgiler.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Bize ulaşın veya rezervasyon yapın",
      description:
        "Grup rezervasyonu ve catering talepleri için formu doldurun veya WhatsApp'tan yazın.",
    },
    cta: {
      title: "Bir sonraki kahveniz burada",
      description:
        "Brunch ve özel etkinlikler için yerinizi ayırtın. Sizi ağırlamaktan mutluluk duyarız.",
      callLabel: "Hemen Ara",
      whatsappLabel: "WhatsApp ile yazın",
    },
  },
  seo: {
    title: "Kahve Durağı | Moda Kahve & Brunch",
    description:
      "Kadıköy Moda'da üçüncü dalga kahve, brunch ve ev yapımı tatlılar. Rezervasyon ve catering için iletişime geçin.",
    keywords: ["moda kahve", "brunch kadıköy", "third wave istanbul", "kahve durağı"],
  },
};
