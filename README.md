# sector-site-os

Tek bir master template üzerinden farklı sektörlere (diş kliniği, kafe, spor salonu, güzellik, emlak vb.) hızlıca uyarlanabilen, mobil uyumlu ve SEO odaklı statik web siteleri üretmek için tasarlanmış bir **site üretim sistemi**dir.

> Backend, CMS veya veritabanı yoktur. Tüm içerik TypeScript config dosyalarından gelir.

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

`.env.local` örneği:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Production deploy öncesi domain’i gerçek URL ile güncelleyin.

## Geliştirme komutları

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu ([http://localhost:3000](http://localhost:3000)) |
| `npm run build` | Production build |
| `npm run start` | Production sunucu (`build` sonrası) |
| `npm run lint` | ESLint kontrolü |

Build sonrası SEO dosyaları:

- [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
- [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

## Demo sunumu (multi-sector routing)

Tüm sektör demoları tek galeri üzerinden açılır:

| URL | Açıklama |
|-----|----------|
| [/demos](http://localhost:3000/demos) | Demo galeri — sektör kartları |
| `/demos/dentist` | Diş kliniği |
| `/demos/cafe` | Kafe |
| `/demos/gym` | Spor salonu |
| `/demos/beauty` | Güzellik |
| `/demos/real-estate` | Gayrimenkul |

Registry: `src/config/sector-registry.ts` (`key`, `label`, `description`, `config`).

Kök `/` route’u değişmedi — `activeSiteConfig` (varsayılan: dentist) ile çalışır.

## Tek deploy sektör seçimi

Aktif müşteri/sektör `src/config/index.ts` içinden seçilir:

```typescript
import { cafeConfig } from "@/config/sectors/cafe";

export const activeSiteConfig: SiteConfig = cafeConfig;
```

Hazır sektörler: `dentist`, `cafe`, `gym`, `beauty`, `real-estate` (`realEstate.ts`).

Registry ile okuma:

```typescript
import { getSectorConfig } from "@/config";

const config = getSectorConfig("gym");
```

`npm run dev` ile sayfayı yenileyerek demo’yu gösterin.

## Sektör config mantığı

Her sektör `SiteConfig` tipinde bir dosyadır:

```
src/config/sectors/
  dentist.ts
  cafe.ts
  gym.ts
  beauty.ts
  realEstate.ts
```

`SectorSite` → section bileşenleri (`HeroSection`, `ServicesSection`, …) yalnızca `config` prop’undan render olur. Section başlıkları ve CTA metinleri `config.sections` içinde tanımlanır; boş `services` / `testimonials` / `faqs` dizilerinde ilgili bölüm otomatik gizlenir.

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

## Yeni sektör config’i eklemek

1. `src/config/sectors/yeni-sektor.ts` oluşturun — `SiteConfig` tipine uygun doldurun (`sections` ve `about.bullets` dahil).
2. `src/config/index.ts` → `sectorConfigs` ve export listesine ekleyin.
3. Gerekirse `src/lib/icons.ts` içine hizmet ikon adlarını ekleyin.
4. `activeSiteConfig` import’unu yeni config’e çevirin.
5. `npm run build` ve [docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md) maddelerini tamamlayın.

## Proje yapısı

```
src/
  app/              layout, page, sitemap, robots
  config/           activeSiteConfig + sector dosyaları
  components/
    site/           SectorSite
    sections/       Hero, Services, About, …
    layout/         Header, Footer, WhatsApp
    seo/            JsonLd
    shared/         FadeIn, SiteImage, …
  lib/              metadata, links, section-copy, site-guards
  types/            site-config.ts
docs/
  DELIVERY_CHECKLIST.md
```

## Teslim kontrolü

Müşteri demosu / teslim öncesi: **[docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md)**
