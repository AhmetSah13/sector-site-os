# sector-site-os

Tek bir master template üzerinden farklı sektörlere (diş kliniği, kafe, spor salonu, güzellik, emlak vb.) hızlıca uyarlanabilen, mobil uyumlu ve SEO odaklı statik web siteleri üretmek için tasarlanmış bir **site üretim sistemi**dir.

> Backend, CMS veya veritabanı yoktur. İçerik TypeScript config dosyalarından gelir.

## Site yapısı

| Route | Açıklama |
|-------|----------|
| `/` | **Hizmet vitrini** — küçük işletmelere web sitesi satış landing page (`src/config/service.ts`) |
| `/demos` | **Demo galeri** — sektör kartları ve önizleme linkleri |
| `/demos/[sector]` | **Sektör demoları** — `SectorSite` + demo üst barı (ör. `/demos/dentist`) |

Müşteri teslim sitesi yalnızca `SectorSite` + sektör config kullanır; demo barı production’da eklenmez.

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

Hazır demo slug’ları: `dentist`, `cafe`, `gym`, `beauty`, `real-estate`.

## Hizmet vitrini config

Ana sayfa içeriği `src/config/service.ts` dosyasından gelir: iletişim, paketler, özellikler, süreç adımları ve sosyal linkler. Boş sosyal linkler otomatik gizlenir.

## Müşteri sitesi (tek sektör deploy)

Tek müşteri için yalnızca ilgili sektör config’i kullanılır (`SectorSite`). Örnek referans: `src/config/index.ts` içindeki `activeSiteConfig` veya doğrudan sektör dosyası import’u.

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
  app/              layout, page (vitrin), demos, sitemap, robots
  config/           service.ts, sector-registry, sectors/*
  components/
    service/        ServiceLanding, ServiceHeader
    site/           SectorSite (müşteri / demo siteleri)
    demos/          DemoGallery, DemoBanner
    sections/       Hero, Services, About, …
  lib/              metadata, links, section-copy, site-guards
  types/            site-config.ts, service-config.ts
docs/
  DELIVERY_CHECKLIST.md
```

## Teslim kontrolü

Müşteri demosu / teslim öncesi: **[docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md)**
