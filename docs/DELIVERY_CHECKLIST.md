# Teslim Kalitesi Kontrol Listesi

Bu liste, **sector-site-os** ile üretilen bir sektör sitesini müşteriye teslim etmeden önce tamamlanması gereken kontrolleri içerir.

## 1. Sektör config

- [ ] Doğru sektör dosyası `src/config/index.ts` içinde `activeSiteConfig` olarak seçildi
- [ ] `businessName`, `slogan`, `description` müşteri onaylı metinlerle güncellendi
- [ ] `contact.phone`, `email`, `address`, `city` gerçek bilgilerle dolduruldu
- [ ] `contact.whatsapp` ülke koduyla birlikte rakamlardan oluşuyor (ör. `905321234567`)
- [ ] `services`, `testimonials`, `faqs` içerikleri sektöre uygun ve yazım hatası yok
- [ ] `theme` renkleri marka kimliğiyle uyumlu
- [ ] `socialLinks` URL’leri canlı ve `https://` ile açılıyor

## 2. SEO & metadata

- [ ] `.env` veya deploy ortamında `NEXT_PUBLIC_SITE_URL` production domain’i ile ayarlandı
- [ ] `seo.title` ve `seo.description` benzersiz ve 60 / 160 karakter hedefine yakın
- [ ] `seo.keywords` hedef arama terimlerini kapsıyor
- [ ] `seo.ogImage` eklendiyse `public/` altında 1200×630 önerilen görsel mevcut
- [ ] `/sitemap.xml` production URL’de erişilebilir
- [ ] `/robots.txt` sitemap satırını doğru domain ile gösteriyor
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — JSON-LD hatasız (isteğe bağlı)

## 3. İletişim linkleri

- [ ] **Telefon** (`tel:+90…`) mobilde arama ekranını açıyor
- [ ] **E-posta** (`mailto:`) varsayılan mail istemcisini açıyor
- [ ] **WhatsApp** (`wa.me/90…`) doğru numaraya yönleniyor ve ön mesaj okunabilir
- [ ] **Harita** butonu Google Maps’te doğru adresi arıyor (generic `maps.google.com` otomatik düzeltilir)

## 4. Görseller

- [ ] Tüm içerik görselleri `next/image` (`SiteImage`) ile kullanılıyor
- [ ] Her görselde anlamlı `alt` metni var (`about.imageAlt` veya başlık)
- [ ] Görseller `public/` altında optimize edilmiş (WebP/AVIF önerilir)
- [ ] Uzak (CDN) görseller kullanılıyorsa `next.config.ts` → `images.remotePatterns` tanımlı

## 5. UI & erişilebilirlik

- [ ] Mobil (375px), tablet ve masaüstü kırılımları kontrol edildi
- [ ] Header menü ve WhatsApp butonu çakışmıyor
- [ ] Tüm CTA’lar tıklanabilir ve odak halkası görünür
- [ ] Form alanları `label` ile eşleşiyor

## 6. Build & deploy

- [ ] `npm run build` hatasız tamamlanıyor
- [ ] `npm run lint` (varsa) temiz
- [ ] Production’da favicon / marka varlıkları yüklü
- [ ] Analytics veya domain DNS müşteri tarafında planlandı (proje dışı)

## 7. Bilinçli kapsam dışı (MVP)

- [ ] Müşteriye formun **demo** olduğu ve backend/CMS olmadığı bildirildi
- [ ] İçerik güncellemelerinin config dosyası veya yeniden deploy ile yapılacağı netleştirildi

---

**Hızlı komutlar**

```bash
npm run build
npm run start
# Sitemap: http://localhost:3000/sitemap.xml
# Robots:  http://localhost:3000/robots.txt
```

**İlgili dosyalar:** `src/lib/metadata.ts`, `src/lib/links.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`
