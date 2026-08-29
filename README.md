# Hilal Elektrik Avize Aksesuar

> Kahramanmaraş Onikişubat Lüks Aydınlatma, Avize, Dekorasyon ve Elektrik Showroom Web Platformu

---

## 🌟 Proje Özellikleri

- **Teknoloji:** Next.js 16 (App Router, Turbopack, React 19), Tailwind CSS v4, TypeScript, Lucide Icons, shadcn/ui.
- **Tema & Renk Paleti:** Noctis Gece Mavisi (`#0B132B`), Marigold Zengin Altın Sarısı (`#F59E0B`), Krem & Şampanya detaylar.
- **İki Uzman Şube Yönetimi:**
  - **Avize & Aksesuar Showroom:** Umut Kent Sitesi F Blok No: 4A (Lütfiye Bilal: 0505 380 13 50, Çiğdem Altunbaş: 0506 905 96 32)
  - **Elektrik & Tesisat Şubesi:** Eymen Sitesi No: 12 (Murat Bilal: 0555 977 83 49)
- **Koleksiyonlar & Kategoriler:**
  - 👑 İhtişamlı & Klasik Saray kristalleri ve 24 kollu avizeler
  - ⚡ Modern & Spor halka LED sarkıtlar ve geometrik modeller
  - 🌿 Sade & Minimalist manyetik ray spotlar ve gömme tavan sistemleri
  - 🪞 Dokunmatik LED buğu önleyicili aynalar ve varaklı klasik aynalar
  - 🕰️ Hakiki mermer kadranlı lüks duvar saatleri
  - 🏺 El üfleme amber cam vazolar ve Murano aksesuarlar
  - 🔘 Temperli cam çerçeveli lüks anahtar & priz serileri
  - 🛋️ Kadife tasarım berjerler & İtalyan Calacatta mermer sehpalar
- **Dönüşüm & CTA Odaklı:** Tek tıkla WhatsApp canlı danışma, doğrudan telefon araması, ücretsiz mekan aydınlatma danışmanlığı randevu formu, Google Haritalar yol tarifi.
- **SEO & Schema.org Mimarisi:**
  - Semantik H1-H3 başlık hiyerarşisi
  - Dinamik OpenGraph, Twitter Cards ve Canonical etiketleri
  - `LocalBusiness`, `Organization`, `Product`, `BreadcrumbList`, `FAQPage` JSON-LD zengin arama sonuçları yapısal verisi
  - Dinamik XML Sitemap (`/sitemap.xml`) ve `/robots.txt`
  - Yerel SEO sayfaları (Kahramanmaraş, Onikişubat, Yirmiikigün Mh., Dulkadiroğlu)
- **Görsel Standart:** `[GENİŞLİK]x[YÜKSEKLİK]_[isim].[uzantı]` formatında optimize edilmiş yüksek çözünürlüklü görseller (`public/images/`).
- **Yasal Sayfalar:** Gizlilik Politikası, KVKK Aydınlatma Metni, Kullanım Koşulları, Çerez Politikası.
- **Railway & Docker Desteği:** Multi-stage production standalone Dockerfile ile Railway'e sıfır yapılandırmayla tam uyumlu dağıtım.

---

## 🚀 Yerel Geliştirme (Local Development)

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Lint, TypeScript ve Production Build kontrolü
npm run check
```

---

## 🚂 Railway Dağıtımı (Deployment)

1. [GitHub](https://github.com/onuraltunbas/hilalavize) deposuna `git push origin main` ile kodları gönderin.
2. [Railway Dashboard](https://railway.app)'a gidin.
3. **New Project** -> **Deploy from GitHub repo** -> **hilalavize** reposunu seçin.
4. Railway projeyi otomatik olarak algılayıp Next.js standalone container olarak birkaç saniyede canlıya alacaktır.
