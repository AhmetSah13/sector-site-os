# Teslim Kalitesi Kontrol Listesi

**sector-site-os** ile üretilen bir sektör sitesini müşteri demosu veya canlı teslim öncesi bu listeyi kullanın.

## 0. Demo hazırlığı

- [ ] `src/config/index.ts` → doğru `activeSiteConfig` seçildi
- [ ] `npm run build` ve `npm run lint` hatasız
- [ ] `npm run dev` ile mobil / tablet / desktop görünüm kontrol edildi
- [ ] `.env.local` içinde `NEXT_PUBLIC_SITE_URL` ayarlı (production’da gerçek domain)

## 1. Sektör config

- [ ] `businessName`, `slogan`, `description` demo veya müşteri metinleriyle güncel
- [ ] `sections` — tüm section başlıkları ve CTA metinleri sektöre uygun (hardcoded component metni yok)
- [ ] `about.bullets` dolduruldu (varsa About listesi)
- [ ] `contact.phone`, `email`, `address`, `city` doğru
- [ ] `contact.whatsapp` yalnızca rakam + ülke kodu (ör. `905321234567`)
- [ ] `services`, `testimonials`, `faqs` — boş bırakılacaksa bilinçli (ilgili section gizlenir)
- [ ] `theme` marka renkleriyle uyumlu
- [ ] `socialLinks` URL’leri `https://` ile çalışıyor

## 2. SEO & metadata

- [ ] `seo.title` ve `seo.description` benzersiz
- [ ] `seo.ogImage` varsa `public/` altında dosya mevcut (1200×630 önerilir)
- [ ] `/sitemap.xml` erişilebilir
- [ ] `/robots.txt` doğru sitemap URL’si gösteriyor
- [ ] View Page Source → JSON-LD (`LocalBusiness`) mevcut

## 3. İletişim linkleri

Tüm linkler `src/lib/links.ts` üzerinden üretilir:

- [ ] **Telefon** → `tel:+90…` (mobilde arama açılır)
- [ ] **E-posta** → `mailto:` geçerli adres
- [ ] **WhatsApp** → `https://wa.me/90…` doğru numara + mesaj
- [ ] **Harita** → Google Maps arama veya özel `mapUrl` (generic `maps.google.com` otomatik düzeltilir)

## 4. Görseller

- [ ] İçerik görselleri yalnızca `SiteImage` / `next/image` ile (`about.image` opsiyonel)
- [ ] Her görselde `alt` metni (`about.imageAlt` veya başlık)
- [ ] Uzak görseller için `next.config.ts` → `images.remotePatterns`

## 5. UI & responsive

- [ ] **Mobil (~375px):** header menü (sheet), hero butonları tam genişlik, WhatsApp FAB görünür
- [ ] **Tablet (~768px):** grid’ler 2 sütun, padding dengeli
- [ ] **Desktop (1280px+):** max-width container, nav linkleri görünür
- [ ] Uzun işletme adı header’da taşmıyor (truncate)
- [ ] Boş section yok (gizlenen bölümler menüde de görünmüyor)

## 6. Build & deploy

- [ ] `npm run build` başarılı
- [ ] `npm run start` ile production önizleme
- [ ] Favicon / marka varlıkları (isteğe bağlı)
- [ ] Müşteriye formun **demo** olduğu söylendi (backend yok)

## 7. Bilinçli kapsam dışı (MVP)

- [ ] Backend, CMS, veritabanı eklenmedi
- [ ] İçerik güncellemesi config + yeniden deploy ile yapılır

---

**Hızlı komutlar**

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

**İlgili dosyalar**

| Dosya | Rol |
|-------|-----|
| `src/lib/metadata.ts` | Open Graph, Twitter, canonical |
| `src/lib/links.ts` | tel, mailto, WhatsApp, Maps |
| `src/lib/section-copy.ts` | Section metinleri (config) |
| `src/lib/site-guards.ts` | Boş veri / section gizleme |
| `src/app/sitemap.ts` | Sitemap |
| `src/app/robots.ts` | Robots |
