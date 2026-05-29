# Production Checklist

Müşteri sitesini canlıya almadan önce bu listeyi kullanın. Otomatik kontroller için önce:

```bash
npm run preflight
```

`preflight` config doğrulama, lint ve production build çalıştırır. Aşağıdaki maddeler insan gözüyle tamamlanır.

---

## Config kontrolü

- [ ] `NEXT_PUBLIC_SITE_KEY` ile `clientRegistry` içindeki `key` birebir eşleşiyor
- [ ] `src/config/sites/clients/{clientKey}.ts` dosyası mevcut ve export doğru
- [ ] `businessName`, `sector`, `slogan`, `description` müşteri onaylı metinler
- [ ] `contact.phone`, `email`, `address`, `city`, `whatsapp` güncel
- [ ] `contact.whatsapp` yalnızca rakam + ülke kodu (ör. `905321234567`, `+` yok)
- [ ] `theme.primary` ve marka renkleri onaylı
- [ ] `sections` — tüm section başlıkları ve CTA metinleri sektöre uygun
- [ ] Boş bırakılan `services` / `testimonials` / `faqs` bilinçli (ilgili bölüm gizlenir)
- [ ] `npm run validate:sites` hatasız (preflight içinde de çalışır)

## İçerik kontrolü

- [ ] Yazım ve dil bilgisi (Türkçe karakterler, tutarlı üslup)
- [ ] İşletme adı header, hero ve metadata’da tutarlı
- [ ] `about.paragraphs` ve `about.bullets` gerçek müşteri bilgisi
- [ ] `about.highlights` sayıları doğrulanabilir (abartılı iddia yok)
- [ ] Hizmet kartları (`services`) başlık + açıklama anlamlı
- [ ] Referanslar (`testimonials`) gerçek veya “örnek” olarak işaretlendi
- [ ] SSS (`faqs`) müşterinin sık sorulan sorularını yansıtıyor
- [ ] İletişim formu **demo** olduğu müşteriye söylendi (backend yok, gönderim yok)

## Görsel kontrolü

- [ ] Görseller `public/images/clients/{clientKey}/` altında — bkz. [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)
- [ ] Config’teki yollar `/images/clients/{clientKey}/...` ile başlıyor
- [ ] Her kullanılan görselde `alt` metni (`about.imageAlt` veya anlamlı başlık)
- [ ] Görseller sıkıştırılmış (web için makul boyut; hero genelde &lt; 500 KB hedef)
- [ ] `seo.ogImage` varsa dosya mevcut (önerilen 1200×630)
- [ ] Placeholder / stok fotoğraf kalmadı (müşteri onayı)

## Link kontrolü

- [ ] **Telefon** — mobilde `tel:` ile arama açılıyor
- [ ] **E-posta** — `mailto:` doğru adres
- [ ] **WhatsApp** — doğru numara, `wa.me` açılıyor
- [ ] **Harita** — Google Maps arama veya `contact.mapUrl` doğru konum
- [ ] `socialLinks` — Instagram, Facebook vb. `https://` ile çalışıyor (boş linkler bilinçli)
- [ ] Harici linkler yeni sekmede / güvenli açılıyor (varsa)

## SEO kontrolü

- [ ] `seo.title` ve `seo.description` benzersiz ve 60 / 160 karakter civarında okunabilir
- [ ] `seo.keywords` (varsa) sektörle uyumlu
- [ ] `NEXT_PUBLIC_SITE_URL` production domain ile ayarlı
- [ ] `/sitemap.xml` erişilebilir
- [ ] `/robots.txt` doğru sitemap URL’si gösteriyor
- [ ] Sayfa kaynağında JSON-LD (`LocalBusiness`) mevcut
- [ ] Open Graph önizlemesi (Facebook / LinkedIn debugger veya benzeri) kontrol edildi

## Responsive kontrol

- [ ] **Mobil (~375px):** header sheet menü, hero CTA’lar, WhatsApp FAB
- [ ] **Tablet (~768px):** grid düzeni, padding
- [ ] **Desktop (1280px+):** nav linkleri, max-width container
- [ ] Uzun işletme adı header’da taşmıyor
- [ ] Gizlenen section’lar menüde görünmüyor
- [ ] Client mode’da `/demos` ve agency vitrini **görünmüyor**

## Deploy kontrolü

- [ ] `npm run preflight` başarılı
- [ ] Vercel environment variables doğru — bkz. [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [ ] `NEXT_PUBLIC_SITE_MODE=client`
- [ ] `NEXT_PUBLIC_SITE_KEY={clientKey}`
- [ ] `NEXT_PUBLIC_SITE_URL=https://www.musteri-domain.com`
- [ ] Production URL ile `npm run build` (client env ile) test edildi
- [ ] Custom domain DNS / SSL aktif
- [ ] Favicon ve marka varlıkları (isteğe bağlı) yüklendi

## Teslim sonrası kontrol

- [ ] Canlı sitede tüm linkler tekrar tıklandı
- [ ] Müşteri domain’inde HTTPS zorunlu
- [ ] Müşteriye config güncelleme = yeniden deploy süreci anlatıldı
- [ ] Küçük metin revizeleri için iletişim kanalı belirlendi — bkz. [CLIENT_DELIVERY_GUIDE.md](./CLIENT_DELIVERY_GUIDE.md)
- [ ] Yedek: config dosyası ve görseller arşivlendi

---

**Hızlı komutlar**

```bash
npm run create:client    # Yeni müşteri iskeleti
npm run preflight        # Deploy öncesi otomatik kontrol
npm run dev              # Yerel önizleme (client env ile)
```

**İlgili dosyalar**

| Dosya | Rol |
|-------|-----|
| `scripts/validate-sites.ts` | Config şema ve format doğrulama |
| `src/lib/metadata.ts` | OG, Twitter, canonical |
| `src/lib/links.ts` | tel, mailto, WhatsApp, Maps |
| `src/config/site-registry.ts` | Client kayıt |
