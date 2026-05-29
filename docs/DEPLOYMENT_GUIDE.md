# Deployment Guide

sector-site-os aynı kod tabanından **agency** (portfolyo + demolar) ve **client** (tek müşteri sitesi) modunda deploy edilir. Deploy öncesi her zaman:

```bash
npm run preflight
```

---

## Ortam değişkenleri

| Değişken | Zorunlu | Açıklama |
|----------|---------|----------|
| `NEXT_PUBLIC_SITE_URL` | Evet | Canonical URL (sitemap, OG, JSON-LD). Sonunda `/` olmamalı. |
| `NEXT_PUBLIC_SITE_MODE` | Hayır | `agency` (varsayılan) veya `client` |
| `NEXT_PUBLIC_SITE_KEY` | Client modda evet | `clientRegistry` içindeki `key` (ör. `acme-dental`) |

### Agency deployment

Ajans vitrini + demo galeri + `/demos/[sector]` sayfaları.

```env
NEXT_PUBLIC_SITE_URL=https://www.sizin-ajans-domain.com
NEXT_PUBLIC_SITE_MODE=agency
```

`NEXT_PUBLIC_SITE_MODE` boş bırakılırsa agency kabul edilir.

**Rotalar:**

- `/` → hizmet vitrini (`ServiceLanding`)
- `/demos` → demo galeri
- `/demos/dentist`, `/demos/cafe`, … → sektör demoları

### Client deployment

Yalnızca müşteri `SectorSite`; demo ve vitrin yok.

```env
NEXT_PUBLIC_SITE_URL=https://www.musteri-domain.com
NEXT_PUBLIC_SITE_MODE=client
NEXT_PUBLIC_SITE_KEY=acme-dental
```

**Rotalar:**

- `/` → müşteri sitesi
- `/demos`, `/demos/*` → `404`

Geçersiz veya eksik `SITE_KEY` → build/runtime’da site bulunamaz.

---

## Vercel environment variables

1. Vercel projesi → **Settings** → **Environment Variables**
2. Her değişkeni **Production** (ve gerekiyorsa Preview) için ekleyin
3. Değişiklik sonrası **Redeploy** gerekir (Next.js public env build zamanında gömülür)

**Örnek — agency projesi**

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.ahmetsahorkin.com` |
| `NEXT_PUBLIC_SITE_MODE` | `agency` |

**Örnek — müşteri projesi**

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.acmedental.com` |
| `NEXT_PUBLIC_SITE_MODE` | `client` |
| `NEXT_PUBLIC_SITE_KEY` | `acme-dental` |

### Her müşteri için ayrı Vercel project (önerilen)

| Neden | Açıklama |
|-------|----------|
| İzolasyon | Bir müşterinin env’i diğerini etkilemez |
| Domain | Müşteri domain’i doğrudan projeye bağlanır |
| Build | Client mode build yalnızca o siteyi üretir (`/demos` SSG yok) |
| Faturalama | Müşteri bazlı limit / ekip erişimi |

Alternatif: tek repo + çoklu Vercel project, aynı Git bağlantısı, farklı env setleri.

### Yerel client mode test

`.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_MODE=client
NEXT_PUBLIC_SITE_KEY=sample-client
```

```bash
npm run dev
```

Production önizleme:

```bash
# .env.local ile aynı değerler
npm run build
npm run start
```

---

## Deploy akışı

### Agency

1. `service.ts` ve demo config’ler güncel
2. `npm run preflight`
3. Vercel’e bağla, agency env’leri gir
4. Deploy → `/` ve `/demos` kontrol et

### Client

1. `npm run create:client` veya manuel config
2. Görselleri `public/images/clients/{clientKey}/` altına koy — [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)
3. Config’te görsel yollarını güncelle
4. `.env.local` ile client mode test
5. [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) manuel maddeler
6. `npm run preflight`
7. Ayrı Vercel project, client env’leri, müşteri domain’i
8. Canlıda link + SEO kontrolü

---

## Build notları

- `NEXT_PUBLIC_*` değişkenleri **build** sırasında okunur; Vercel’de env değiştirdikten sonra yeniden build şart.
- Client mode’da `generateStaticParams` demo rotalarını üretmez; çıktı daha küçük ve `/demos` erişilemez.
- `validate:sites` client mode için `.env.local` / `.env` içindeki `SITE_KEY`’i de doğrular.

---

## Sorun giderme

| Belirti | Olası neden |
|---------|-------------|
| Ana sayfa agency vitrini | `SITE_MODE` agency veya boş |
| 404 ana sayfa | `SITE_KEY` registry’de yok veya yazım hatası |
| Yanlış canonical / sitemap | `NEXT_PUBLIC_SITE_URL` güncel değil |
| Demolar client’ta görünüyor | `SITE_MODE=client` build’e girmemiş; redeploy |
| OG görsel yok | `seo.ogImage` yolu veya dosya eksik |

---

**İlgili dokümanlar**

- [CLIENT_DELIVERY_GUIDE.md](./CLIENT_DELIVERY_GUIDE.md) — uçtan uca müşteri teslimi
- [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) — deploy öncesi liste
