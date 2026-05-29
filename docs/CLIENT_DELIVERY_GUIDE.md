# Client Delivery Guide

Müşteri sitesini sıfırdan canlıya alma ve teslim etme akışı. Teknik deploy detayları için [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

## 1. Yeni müşteri sitesi oluşturma

```bash
npm run create:client
```

Script sorar: işletme adı, `clientKey` (slug), sektör, base demo, iletişim, renk vb.

**Oluşturulanlar:**

- `src/config/sites/clients/{clientKey}.ts`
- `public/images/clients/{clientKey}/` (boş klasör + `.gitkeep`)
- `site-registry.ts` ve `config/index.ts` güncellemesi (mümkünse otomatik)

Duplicate `clientKey` veya geçersiz slug → script durur, üzerine yazmaz.

---

## 2. Müşteri bilgilerini config’e işleme

1. Oluşturulan `{clientKey}.ts` dosyasını açın
2. Demo’dan kopyalanan placeholder metinleri müşteri onaylı içerikle değiştirin
3. Kontrol alanları:
   - `businessName`, `slogan`, `description`
   - `contact.*` (telefon, e-posta, adres, WhatsApp)
   - `services`, `testimonials`, `faqs`
   - `about` (paragraflar, bullets, highlights)
   - `sectionLayout` (sıra, `enabled`, `variant`)
   - `sections` (başlıklar, CTA metinleri — copy)
   - `gallery` (galeri görselleri; boşsa section görünmez)
   - `theme` (marka renkleri)
   - `seo` (title, description, ogImage)
   - `socialLinks`

```bash
npm run validate:sites
```

Hataları düzeltin; uyarıları (boş sosyal link vb.) bilinçli bırakın veya doldurun.

### Section control

`sectionLayout` ile hangi bölümlerin görüneceğini ve sırasını ayarlayın. `enabled: false` olanlar render edilmez. `sectionLayout` yoksa varsayılan sıra kullanılır.

```ts
sectionLayout: [
  { id: "hero", enabled: true, variant: "default" },
  { id: "services", enabled: true, variant: "cards" },
  { id: "testimonials", enabled: false, variant: "cards" },
  { id: "contact", enabled: true, variant: "default" },
],
```

İçerik guard’ları geçerlidir: örneğin `services: []` ise services section yine görünmez. `variant` şimdilik yalnızca ilerideki tasarım varyantları için saklanır.

---

## 3. Görselleri yerleştirme

Standart klasör: `public/images/clients/{clientKey}/`

Detaylı isimlendirme ve config bağlantısı: [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)

Özet:

```
public/images/clients/{clientKey}/
  hero.jpg
  about.jpg
  gallery-1.jpg
  gallery-2.jpg
  gallery-3.jpg
```

Config örneği (`about.image`):

```ts
about: {
  // ...
  image: "/images/clients/acme-dental/about.jpg",
  imageAlt: "Acme Dental klinik iç mekan",
},
seo: {
  ogImage: "/images/clients/acme-dental/hero.jpg",
},
gallery: [
  {
    id: "g1",
    src: "/images/clients/acme-dental/gallery-1.jpg",
    alt: "Klinik iç mekan",
  },
],
```

`sectionLayout` içinde `{ id: "gallery", enabled: true }` olmalı ve `gallery` dizisi dolu olmalı.

---

## 4. Linkleri test etme

Yerel `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_MODE=client
NEXT_PUBLIC_SITE_KEY={clientKey}
```

```bash
npm run dev
```

Tıklayarak doğrulayın:

- Header / hero CTA → iletişim bölümü
- Telefon, e-posta, WhatsApp, harita
- Sosyal medya ikonları (dolu olanlar)
- WhatsApp floating button (mobil)

---

## 5. Client mode test etme

| Kontrol | Beklenen |
|---------|----------|
| `/` | Müşteri `SectorSite` |
| `/demos` | 404 |
| Demo banner | Yok |
| Agency vitrin | Yok |

Production’a yakın test:

```bash
npm run preflight
npm run start
```

---

## 6. Deploy alma

1. [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) — manuel maddeler
2. `npm run preflight` — otomatik maddeler
3. Vercel: **ayrı project**, client env’leri — [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
4. Custom domain bağla
5. Canlı URL’de tekrar link + mobil kontrol

**Müşteriye iletilecek env özeti (referans):**

```env
NEXT_PUBLIC_SITE_URL=https://www.musteri-domain.com
NEXT_PUBLIC_SITE_MODE=client
NEXT_PUBLIC_SITE_KEY={clientKey}
```

---

## 7. Teslim sonrası küçük revize süreci

Bu stack’te içerik **config + görseller + yeniden deploy** ile güncellenir; panel veya CMS yoktur.

**Tipik revizeler (dahil / sınırlı kapsam):**

- Yazım düzeltmesi, telefon/adres güncellemesi
- 1–2 hizmet kartı metni
- SSS ekleme/çıkarma
- Görsel değiştirme (aynı dosya adı veya config yolu)

**Süreç:**

1. Müşteri değişikliği yazılı iletir (e-posta / ticket)
2. Config veya `public/images/clients/{clientKey}/` güncellenir
3. `npm run preflight` yerelde
4. Vercel redeploy
5. Canlıda 2 dakikalık smoke test

**Kapsam dışı (yeni teklif):**

- Yeni section / sayfa tipi
- Form backend, randevu sistemi, çok dilli yapı
- Tasarım sistemi değişikliği

Müşteriye teslim notunda: “İçerik güncellemeleri X iş günü içinde, deploy sonrası yayına alınır” şeklinde SLA belirtin.

---

## Özet komutlar

```bash
npm run create:client
# ... config + görseller ...
npm run preflight
npm run dev          # geliştirme
# Vercel deploy
```

**Checklist:** [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)
