# sector-site-os

Tek bir master template üzerinden farklı sektörlere (diş kliniği, kafe, spor salonu, güzellik, emlak vb.) hızlıca uyarlanabilen, mobil uyumlu ve SEO odaklı statik web siteleri üretmek için tasarlanmış bir **site üretim sistemi**dir.

> Backend, CMS veya veritabanı yoktur. Tüm içerik TypeScript config dosyalarından gelir.

## Stack

- [Next.js](https://nextjs.org) (App Router)
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

`.env.local` içinde production domain’inizi tanımlayın:

```env
NEXT_PUBLIC_SITE_URL=https://www.ornek-musteri.com
```

Geliştirme sunucusu:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Sektör config mantığı

Her müşteri / sektör için bir `SiteConfig` objesi tanımlanır. Örnek yapı:

```
src/config/sectors/
  dentist.ts
  cafe.ts
  gym.ts
  beauty.ts
  realEstate.ts
```

Aktif site `src/config/index.ts` dosyasından seçilir:

```typescript
import { cafeConfig } from "@/config/sectors/cafe";

export const activeSiteConfig: SiteConfig = cafeConfig;
```

Tüm sektörler registry üzerinden de erişilebilir:

```typescript
import { getSectorConfig } from "@/config";

const config = getSectorConfig("gym");
```

`SectorSite` bileşeni bu config’i alır; section’lar (`HeroSection`, `ServicesSection`, …) içeriği otomatik render eder. Tasarım ve layout sektörler arasında aynı kalır, yalnızca metin, tema renkleri ve iletişim bilgileri değişir.

### Config alanları

| Alan | Açıklama |
|------|----------|
| `businessName`, `sector`, `slogan`, `description` | Marka ve hero metinleri |
| `contact` | Telefon, e-posta, adres, WhatsApp, harita |
| `theme` | CSS değişkenleri (primary, accent, gradient) |
| `services`, `testimonials`, `faqs` | Sayfa section içerikleri |
| `about` | Hakkımızda metni; isteğe bağlı `image` (`/public/…`) |
| `socialLinks` | Sosyal medya URL’leri |
| `seo` | Title, description, keywords, `ogImage`, `twitterHandle` |

## SEO

Metadata `src/lib/metadata.ts` üzerinden config’den üretilir (Open Graph, Twitter, canonical).

- `src/app/sitemap.ts` — `/sitemap.xml`
- `src/app/robots.ts` — `/robots.txt`
- `src/components/seo/JsonLd.tsx` — `LocalBusiness` yapılandırılmış veri

İletişim linkleri merkezi olarak `src/lib/links.ts` içinde normalize edilir (`tel:`, `mailto:`, `wa.me`, Google Maps).

Görseller için proje standardı: `src/components/shared/SiteImage.tsx` (`next/image` sarmalayıcısı).

## Teslim öncesi kontrol

Müşteri teslimi için: **[docs/DELIVERY_CHECKLIST.md](docs/DELIVERY_CHECKLIST.md)**

## Proje yapısı (özet)

```
src/
  app/              # layout, page, sitemap, robots
  config/           # activeSiteConfig + sector dosyaları
  components/
    site/           # SectorSite master template
    sections/       # Hero, Services, About, …
    layout/         # Header, Footer, WhatsApp
    shared/         # FadeIn, SiteImage, …
  lib/              # metadata, links, theme, icons
  types/            # site-config.ts
```

## Yeni sektör eklemek

1. `src/config/sectors/yeni-sektor.ts` oluşturun (`SiteConfig` tipine uygun).
2. `src/config/index.ts` içinde `sectorConfigs` ve export listesine ekleyin.
3. Gerekirse `src/lib/icons.ts` içine hizmet ikonlarını ekleyin.
4. `activeSiteConfig` import’unu yeni dosyaya çevirin.
5. `docs/DELIVERY_CHECKLIST.md` maddelerini tamamlayın.

## Lisans

Private / proje sahibine aittir.
