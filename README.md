# sector-site-os

Tek bir master template üzerinden farklı sektörlere (diş kliniği, kafe, spor salonu, güzellik, emlak vb.) hızlıca uyarlanabilen, mobil uyumlu ve SEO odaklı statik web siteleri üretmek için tasarlanmış bir **site üretim sistemi**dir.

> Backend, CMS veya veritabanı yoktur. İçerik TypeScript config dosyalarından gelir.

## Deployment modları

`NEXT_PUBLIC_SITE_MODE` ile aynı repo iki modda çalışır:

| Mod | Env | `/` | `/demos` |
|-----|-----|-----|----------|
| **Agency** (varsayılan) | `agency` veya boş | Hizmet vitrini | Demo galeri + sektör demoları |
| **Client** | `client` | Müşteri `SectorSite` | `404` (notFound) |

Client modda ayrıca `NEXT_PUBLIC_SITE_KEY` gerekir (ör. `sample-client`).

### Agency mode

- `/` → `ServiceLanding` (`src/config/service.ts`)
- `/demos` → demo galeri
- `/demos/[sector]` → `SectorSite` + `DemoBanner`

### Client mode

- `/` → seçilen müşteri config’i ile yalnızca `SectorSite` (banner ve vitrin yok)
- `/demos` ve `/demos/*` → erişilemez
- Geçersiz `SITE_KEY` → `404`

### Vercel environment variables

**Ajans / portfolyo deploy:**

```env
NEXT_PUBLIC_SITE_URL=https://www.sizin-domain.com
NEXT_PUBLIC_SITE_MODE=agency
```

**Müşteri deploy (örnek test):**

```env
NEXT_PUBLIC_SITE_URL=https://www.musteri-domain.com
NEXT_PUBLIC_SITE_MODE=client
NEXT_PUBLIC_SITE_KEY=sample-client
```

Yerel test:

```bash
# Agency (varsayılan)
npm run dev

# Client mode
# .env.local içine NEXT_PUBLIC_SITE_MODE=client ve NEXT_PUBLIC_SITE_KEY=sample-client
npm run dev
```

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com)
- Framer Motion
- lucide-react

## Kurulum

```bash
git clone <repo-url>
cd sector-site-os
npm install
cp .env.example .env.local
```

`.env.local` için `.env.example` dosyasını kopyalayın.

Production deploy öncesi domain’i gerçek URL ile güncelleyin.

## Geliştirme komutları

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu ([http://localhost:3000](http://localhost:3000)) |
| `npm run build` | Production build |
| `npm run start` | Production sunucu (`build` sonrası) |
| `npm run lint` | ESLint kontrolü |
| `npm run validate:sites` | Demo/client config doğrulama (deploy öncesi) |

## Config validation

Deploy veya build öncesi tüm demo/client config’lerini doğrulayın:

```bash
npm run validate:sites
```

Kontroller: zorunlu alanlar, slug formatı, e-posta/telefon/WhatsApp, services/testimonials/faqs içerikleri, boş sosyal link uyarıları, duplicate key, client mode için geçerli `NEXT_PUBLIC_SITE_KEY`.

Örnek çıktı:

```
[OK] demo:dentist
[WARN] demo:cafe -> instagram link is empty
[ERROR] client:sample-client -> config.businessName is required
```

Hata varsa exit code `1`. Uyarılar build’i durdurmaz.

Client mode env doğrulaması için `.env.local` otomatik okunur (varsa).

Build sonrası SEO dosyaları:

- [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
- [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

## Site registry

Merkezi kayıt: `src/config/site-registry.ts`

```
src/config/sites/
  demos/          # Sektör şablonları (agency /demos)
    dentist.ts
    cafe.ts
    gym.ts
    beauty.ts
    realEstate.ts
  clients/        # Müşteri production config’leri
    sampleClient.ts   # Client mode test (sample-client)
```

Her kayıt: `key`, `type` (`demo` | `client`), `label`, `description`, `config`.

Agency demo URL’leri: `/demos/dentist`, `/demos/cafe`, `/demos/gym`, `/demos/beauty`, `/demos/real-estate`.

## Hizmet vitrini config

Agency modda `/` içeriği `src/config/service.ts` dosyasından gelir.

## Site config mantığı

`SectorSite` → section bileşenleri yalnızca `SiteConfig` prop’undan render olur. Boş `services` / `testimonials` / `faqs` dizilerinde ilgili bölüm gizlenir.

### Önemli config alanları

| Alan | Açıklama |
|------|----------|
| `businessName`, `slogan`, `description` | Hero ve marka metinleri |
| `contact` | Telefon, e-posta, adres, WhatsApp, harita |
| `theme` | Renkler (CSS değişkenleri) |
| `services`, `testimonials`, `faqs` | Liste içerikleri |
| `about` | Hakkımızda; `bullets`, isteğe bağlı `image` |
| `sections` | Section başlıkları ve CTA metinleri |
| `socialLinks` | Sosyal medya |
| `seo` | Metadata, Open Graph, Twitter |

İletişim linkleri `src/lib/links.ts` üzerinden normalize edilir (`tel:+90…`, `mailto:`, `wa.me`, Google Maps arama).

## Yeni demo config eklemek

1. `src/config/sites/demos/yeni-sektor.ts` — `SiteConfig` doldurun.
2. `src/config/site-registry.ts` → `demoRegistry` dizisine ekleyin.
3. Gerekirse `src/lib/icons.ts` güncelleyin.
4. `npm run build` (agency mode).

## Yeni müşteri config eklemek

1. `src/config/sites/clients/musteri-adi.ts` oluşturun.
2. `clientRegistry` içine `type: "client"` ile ekleyin (`key` = `NEXT_PUBLIC_SITE_KEY`).
3. Vercel’de ayrı proje veya environment:
   - `NEXT_PUBLIC_SITE_MODE=client`
   - `NEXT_PUBLIC_SITE_KEY=musteri-adi`
4. [docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md) maddelerini tamamlayın.

`src/lib/site-mode.ts`: `getSiteMode()`, `isAgencyMode()`, `isClientMode()`, `getActiveClientSite()`.

## Proje yapısı

```
src/
  app/              page (mode-aware), demos, sitemap, robots
  config/
    service.ts
    site-registry.ts
    sites/demos/*
    sites/clients/*
  components/
    service/        ServiceLanding (agency only)
    site/           SectorSite
    demos/          DemoGallery, DemoBanner (agency demos only)
  lib/              site-mode, metadata, links, …
  types/            site-config.ts, service-config.ts
docs/
  DELIVERY_CHECKLIST.md
```

## Teslim kontrolü

Müşteri demosu / teslim öncesi: **[docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md)**
