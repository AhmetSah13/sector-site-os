# Image Guide — Müşteri görselleri

Client mode müşteri görselleri `public/` altında tutulur; Next.js bunları kökten `/images/...` olarak sunar.

---

## Klasör standardı

Her müşteri için:

```
public/images/clients/{clientKey}/
  hero.jpg
  about.jpg
  gallery-1.jpg
  gallery-2.jpg
  gallery-3.jpg
```

`{clientKey}` = `NEXT_PUBLIC_SITE_KEY` ve config dosya adı (ör. `acme-dental`).

`npm run create:client` bu klasörü otomatik oluşturur (`.gitkeep` ile).

---

## Dosya adları ve kullanım

| Dosya | Önerilen kullanım | Config alanı |
|-------|-------------------|--------------|
| `hero.jpg` | Ana görsel / OG paylaşım | `seo.ogImage` |
| `about.jpg` | Hakkımızda bölümü | `about.image` + `about.imageAlt` |
| `gallery-1.jpg` … `gallery-3.jpg` | Portföy / klinik / ürün (ileride veya özel section) | Projeye göre path referansı |

**Config path formatı** (leading slash, `public` yok):

```ts
image: "/images/clients/acme-dental/about.jpg",
ogImage: "/images/clients/acme-dental/hero.jpg",
```

---

## Teknik kurallar

- Görseller `next/image` veya `SiteImage` ile render edilir — uzaktan URL için `next.config.ts` → `images.remotePatterns` gerekir; müşteri dosyaları için gerekmez.
- Her görselde anlamlı `alt` metni (`about.imageAlt`).
- Format: **JPEG** veya **WebP** (fotoğraf); logo için **SVG** veya PNG.
- Boyut hedefleri (rehber):
  - Hero / OG: 1200×630 veya 1920×1080, sıkıştırılmış
  - About: 800×600 – 1200×900
  - Gallery: 800×800 veya 4:3 kırpım

---

## İş akışı

1. `npm run create:client` → klasör oluşur
2. Müşteriden onaylı görselleri alın
3. Dosyaları standart isimlerle klasöre koyun
4. `{clientKey}.ts` içinde path’leri güncelleyin
5. `npm run dev` (client env) ile görsel kırıklığı kontrol edin
6. `npm run preflight` → deploy

---

## Git

Görseller repo’da tutulabilir veya büyük dosyalar için `.gitignore` + deploy öncesi CI/upload kullanılabilir. Müşteri tesliminde config + görsel klasörünün yedeğini alın.

---

**İlgili:** [CLIENT_DELIVERY_GUIDE.md](./CLIENT_DELIVERY_GUIDE.md) · [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md)
