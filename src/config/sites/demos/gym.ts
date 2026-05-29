import type { SiteConfig } from "@/types/site-config";

export const gymConfig: SiteConfig = {
  businessName: "FitZone Spor Merkezi",
  sector: "gym",
  slogan: "Güçlü vücut, güçlü zihin",
  description:
    "7/24 açık salonumuz, sertifikalı antrenörlerimiz ve kişisel programlarımızla hedeflerinize ulaşmanız için premium fitness deneyimi sunuyoruz.",
  contact: {
    phone: "+90 212 333 07 00",
    email: "info@fitzone.com.tr",
    address: "Büyükdere Cad. No: 201",
    city: "Levent, İstanbul",
    mapUrl: "https://maps.google.com",
    whatsapp: "905339998877",
    workingHours: "7/24 açık · Resepsiyon 06:00 – 22:00",
  },
  theme: {
    primary: "oklch(0.5 0.2 25)",
    primaryForeground: "oklch(0.99 0 0)",
    accent: "oklch(0.65 0.18 45)",
    accentForeground: "oklch(0.2 0.05 25)",
    heroGradientFrom: "oklch(0.96 0.02 25)",
    heroGradientTo: "oklch(0.99 0 0)",
  },
  services: [
    {
      id: "membership",
      title: "Üyelik Paketleri",
      description:
        "Aylık, 3 aylık ve yıllık esnek üyelik; tüm ekipman ve grup derslerine erişim.",
      icon: "Dumbbell",
    },
    {
      id: "pt",
      title: "Kişisel Antrenman",
      description:
        "Hedef odaklı bire bir PT seansları; vücut analizi ve beslenme önerisi dahil.",
      icon: "Activity",
    },
    {
      id: "classes",
      title: "Grup Dersleri",
      description:
        "HIIT, yoga, pilates, spinning ve crossfit — haftalık 40+ ders programı.",
      icon: "Users",
    },
    {
      id: "wellness",
      title: "Sauna & Recovery",
      description:
        "Finlandiya saunası, buhar odası ve foam roller alanı ile toparlanma.",
      icon: "Heart",
    },
    {
      id: "nutrition",
      title: "Beslenme Danışmanlığı",
      description:
        "Diyetisyen eşliğinde makro planlama ve supplement rehberliği.",
      icon: "Sparkles",
    },
    {
      id: "corporate",
      title: "Kurumsal Wellness",
      description:
        "Şirketlere özel üyelik, mobil ölçüm günleri ve ofis içi antrenman.",
      icon: "Sun",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Burak Yıldız",
      role: "1 yıllık üye",
      content:
        "6 ayda 12 kg yağ kaybı ve belirgin kas kazanımı. PT ekibi motive edici ve programlar bilimsel.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Deniz Kara",
      role: "Grup dersi üyesi",
      content:
        "Spinning ve pilates dersleri çok kaliteli. Salon her zaman temiz, ekipmanlar yeni nesil.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Oğuz Tekin",
      role: "Kurumsal üyelik",
      content:
        "Ofisimiz FitZone ile anlaştı; ekip olarak hem verimlilik hem moral arttı. 7/24 olması büyük artı.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Deneme üyeliği var mı?",
      answer:
        "Evet, 3 günlük ücretsiz deneme ile tüm alanları ve 2 grup dersini test edebilirsiniz. Randevu için resepsiyonu arayın.",
    },
    {
      id: "f2",
      question: "Üyelik dondurulabilir mi?",
      answer:
        "Sağlık raporu veya 15+ günlük seyahat durumunda yılda 1 kez 30 güne kadar dondurma hakkınız vardır.",
    },
    {
      id: "f3",
      question: "Havlu ve kilit dolabı dahil mi?",
      answer:
        "Premium ve üzeri paketlerde dijital dolap, havlu ve içecek istasyonu dahildir.",
    },
    {
      id: "f4",
      question: "Yeni başlayanlar için program var mı?",
      answer:
        "İlk hafta ücretsiz orientation ve makine kullanım eğitimi verilir; ardından seviyenize uygun program atanır.",
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/fitzonegym" },
    { platform: "youtube", url: "https://youtube.com/@fitzonegym" },
    { platform: "tiktok", url: "https://tiktok.com/@fitzonegym" },
  ],
  about: {
    title: "Hedefinize birlikte ulaşıyoruz",
    paragraphs: [
      "Levent'te 2.500 m² kapalı alanda hizmet veren FitZone, 2015'ten beri İstanbul'un en yoğun kurumsal wellness partnerlerinden biri.",
      "Technogym ekipman parkuru, performans lab ve mobil uygulama ile antrenmanlarınızı takip edin, salon dolulukunu anlık görün.",
    ],
    highlights: [
      { label: "Aktif üye", value: "3.200+" },
      { label: "Antrenör", value: "18" },
      { label: "Grup dersi / hafta", value: "40+" },
      { label: "Memnuniyet", value: "%96" },
    ],
    imageAlt: "Modern fitness salonu ve ağırlık alanı",
    bullets: [
      "7/24 açık salon",
      "Sertifikalı personal trainer",
      "Ücretsiz 3 günlük deneme",
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
      badge: "3 gün ücretsiz deneme",
      primaryCta: "Üyelik Başlat",
      secondaryCta: "Programları İncele",
    },
    services: {
      eyebrow: "Programlar",
      title: "Hedefinize uygun antrenman",
      description:
        "Üyelik, kişisel antrenman ve grup dersleriyle fitness yolculuğunuzu planlayın.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "Üyelerimiz ne diyor?",
      description: "FitZone ile hedeflerine ulaşan üyelerden geri bildirimler.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Üyelik, dondurma ve yeni başlayanlar hakkında yanıtlar.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Salon turu ve üyelik için iletişim",
      description:
        "Ücretsiz deneme randevusu veya kurumsal teklif için bize ulaşın.",
    },
    cta: {
      title: "Güçlü vücut, güçlü zihin — bugün başlayın",
      description:
        "3 günlük ücretsiz deneme ile salonu ve eğitmenleri tanıyın. Sınırlı kontenjan.",
      callLabel: "Hemen Ara",
      whatsappLabel: "WhatsApp ile yazın",
    },
  },
  seo: {
    title: "FitZone Spor Merkezi | Levent 7/24 Fitness",
    description:
      "Kişisel antrenman, grup dersleri ve premium üyelik. Levent'te 7/24 açık spor merkezi — ücretsiz deneme randevusu.",
    keywords: ["levent gym", "fitness istanbul", "personal training", "7/24 spor salonu"],
  },
};
