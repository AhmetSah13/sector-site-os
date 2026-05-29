import type { SiteConfig } from "@/types/site-config";

export const realEstateConfig: SiteConfig = {
  businessName: "PrimeNest Gayrimenkul",
  sector: "real-estate",
  slogan: "Doğru adres, doğru yatırım",
  description:
    "Konut, ticari ve yatırım amaçlı gayrimenkulde İstanbul ve çevresinde güvenilir danışmanlık, profesyonel değerleme ve anahtar teslim alım-satım süreçleri.",
  contact: {
    phone: "+90 212 600 19 00",
    email: "info@primenest.com.tr",
    address: "Maslak Mah. Büyükdere Cad. No: 255",
    city: "Sarıyer, İstanbul",
    mapUrl: "https://maps.google.com",
    whatsapp: "905301112233",
    workingHours: "Pzt–Cmt: 09:30 – 19:00",
  },
  theme: {
    primary: "oklch(0.42 0.08 250)",
    primaryForeground: "oklch(0.99 0 0)",
    accent: "oklch(0.68 0.1 200)",
    accentForeground: "oklch(0.2 0.04 250)",
    heroGradientFrom: "oklch(0.96 0.02 250)",
    heroGradientTo: "oklch(0.99 0 0)",
  },
  services: [
    {
      id: "residential",
      title: "Konut Alım & Satım",
      description:
        "Daire, villa ve rezidans portföyünde yerinde gösterim ve hukuki süreç desteği.",
      icon: "Home",
    },
    {
      id: "commercial",
      title: "Ticari Gayrimenkul",
      description:
        "Ofis, mağaza ve depo kiralama; yatırım getirisi analizi ile birlikte.",
      icon: "Building2",
    },
    {
      id: "rental",
      title: "Kiralama Yönetimi",
      description:
        "Kiracı bulma, sözleşme, tahsilat ve bakım koordinasyonu tek elden.",
      icon: "Key",
    },
    {
      id: "valuation",
      title: "Değerleme & Ekspertiz",
      description:
        "SPK lisanslı partnerlerle banka onaylı gayrimenkul değerleme raporu.",
      icon: "Sparkles",
    },
    {
      id: "investment",
      title: "Yatırım Danışmanlığı",
      description:
        "Bölgesel fiyat trendleri, kira çarpanı ve vergi optimizasyonu rehberliği.",
      icon: "MapPin",
    },
    {
      id: "foreign",
      title: "Yabancı Alıcı Hizmeti",
      description:
        "Vatandaşlık ve oturum izni süreçlerinde çeviri, noter ve tapu desteği.",
      icon: "Users",
    },
  ],
  testimonials: [
    {
      id: "t1",
      name: "Hakan Demirtaş",
      role: "Konut alıcısı",
      content:
        "Beşiktaş'taki dairemizi 3 haftada sattılar, fiyat beklentimizin üzerinde kapandı. Süreç şeffaf ve profesyoneldi.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Laura Schmidt",
      role: "Yabancı yatırımcı",
      content:
        "Citizenship sürecinde her adımda yanımızdaydılar. İngilizce iletişim ve tapu işlemleri sorunsuz tamamlandı.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Zehra Aydın",
      role: "Kiralama yönetimi",
      content:
        "3 dairemizin kirasını ve bakımını PrimeNest yönetiyor; 2 yıldır gecikme yaşamadık. Raporlama çok düzenli.",
      rating: 5,
    },
  ],
  faqs: [
    {
      id: "f1",
      question: "Komisyon oranlarınız nedir?",
      answer:
        "Konut satışında standart %2 + KDV danışmanlık bedeli uygulanır; kiralamada genelde bir aylık kira + KDV alınır. Portföy büyüklüğüne göre özel anlaşma yapılabilir.",
    },
    {
      id: "f2",
      question: "Ekspertiz raporu ne kadar sürer?",
      answer:
        "Randevu sonrası 2–3 iş günü içinde banka uyumlu rapor teslim edilir.",
    },
    {
      id: "f3",
      question: "Yabancılar tapu alabilir mi?",
      answer:
        "Evet, askeri izin ve tapu müdürlüğü şartlarıyla; ekibimiz tüm evrak ve tercüme sürecini yönetir.",
    },
    {
      id: "f4",
      question: "Hangi bölgelerde hizmet veriyorsunuz?",
      answer:
        "Ağırlıklı Avrupa Yakası (Beşiktaş, Şişli, Sarıyer, Kağıthane) ve Anadolu Yakası seçili ilçeler; ticari portföy tüm İstanbul.",
    },
  ],
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/primenest" },
    { platform: "linkedin", url: "https://linkedin.com/company/primenest" },
    { platform: "youtube", url: "https://youtube.com/@primenest" },
  ],
  about: {
    title: "Gayrimenkulde güvenilir ortağınız",
    paragraphs: [
      "2012'den bu yana 1.200'den fazla başarılı işlem tamamlayan PrimeNest, İstanbul'un kurumsal ve bireysel yatırımcılarına özel portföy sunar.",
      "Dijital sanal tur, 3D plan ve CRM tabanlı müşteri takibi ile alıcı-satıcıyı hızlı ve şeffaf şekilde buluşturuyoruz.",
    ],
    highlights: [
      { label: "Tamamlanan işlem", value: "1.200+" },
      { label: "Aktif portföy", value: "180+" },
      { label: "Danışman", value: "24" },
      { label: "Ort. satış süresi", value: "28 gün" },
    ],
    imageAlt: "Modern ofis ve şehir manzaralı salon",
    bullets: [
      "Şeffaf süreç yönetimi",
      "SPK uyumlu değerleme ağı",
      "Yabancı alıcıya tam destek",
    ],
  },
  sections: {
    hero: {
      badge: "Ücretsiz değerleme görüşmesi",
      primaryCta: "Danışmanlık Al",
      secondaryCta: "Portföy",
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Konut, ticari ve yatırım danışmanlığı",
      description:
        "Alım-satım, kiralama ve yatırım süreçlerinde uçtan uca profesyonel destek.",
    },
    testimonials: {
      eyebrow: "Referanslar",
      title: "Müşterilerimiz ne diyor?",
      description: "PrimeNest ile başarılı işlem tamamlayan müşterilerimiz.",
    },
    faq: {
      eyebrow: "SSS",
      title: "Sık sorulan sorular",
      description: "Komisyon, değerleme ve yabancı alıcı süreçleri hakkında.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Gayrimenkul danışmanlığı için iletişim",
      description:
        "Portföyünüz veya yatırım hedefleriniz için uzman danışmanımızla görüşün.",
    },
    cta: {
      title: "Doğru adres, doğru yatırım",
      description:
        "Ücretsiz ön görüşme ve portföy analizi için hemen iletişime geçin.",
      callLabel: "Hemen Ara",
      whatsappLabel: "WhatsApp ile yazın",
    },
  },
  seo: {
    title: "PrimeNest Gayrimenkul | İstanbul Emlak Danışmanlığı",
    description:
      "Konut, ticari ve yatırım gayrimenkul. Maslak merkezli emlak danışmanlığı — ücretsiz değerleme randevusu.",
    keywords: [
      "istanbul emlak",
      "gayrimenkul danışmanlığı",
      "maslak emlak",
      "yabancıya satılık daire",
    ],
  },
};
