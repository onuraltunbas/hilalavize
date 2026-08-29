# 🏛️ Hilal Elektrik Avize Aksesuar — Detaylı Web Sitesi Yönetim ve Kullanım Kılavuzu

Bu kılavuz, **Hilal Elektrik Avize Aksesuar** web platformunuzda ürün ekleme, silme, düzenleme, mağaza ve iletişim bilgilerini değiştirme, görselleri yükleme ve siteyi Railway üzerinde canlıya alma işlemlerinin tamamını en ince ayrıntısına kadar açıklar.

---

## 📑 İÇİNDEKİLER

1. [Projenin Temel Yapısı ve Dosya Haritası](#1-projenin-temel-yapısı-ve-dosya-haritası)
2. [Ürün Yönetimi (Ekleme, Düzenleme, Silme)](#2-ürün-yönetimi-ekleme-düzenleme-silme)
3. [Görsel ve Fotoğraf Yönetimi](#3-görsel-ve-fotoğraf-yönetimi)
4. [Şube, Telefon ve İletişim Bilgilerini Güncelleme](#4-şube-telefon-ve-iletişim-bilgilerini-güncelleme)
5. [Kategorileri Yönetme](#5-kategorileri-yönetme)
6. [Hizmetler, SSS ve Müşteri Yorumlarını Yönetme](#6-hizmetler-sss-ve-müşteri-yorumlarını-yönetme)
7. [Sayfa Metinleri ve Tasarımı Değiştirme](#7-sayfa-metinleri-ve-tasarımı-değiştirme)
8. [Bilgisayarınızda Test Etme ve Canlı Önizleme](#8-bilgisayarınızda-test-etme-ve-canlı-önizleme)
9. [Değişiklikleri Railway ile Canlıya Alma (Git & Push)](#9-değişiklikleri-railway-ile-canlıya-alma-git--push)
10. [Önemli Kurallar, Hata Önleme ve İpuçları](#10-önemli-kurallar-hata-önleme-ve-ipuçları)

---

## 1. PROJENİN TEMEL YAPISI VE DOSYA HARİTASI

Sitenin tüm kaynak kodları bilgisayarınızda `/home/onur/hilalavize` klasöründe yer alır.

```text
/home/onur/hilalavize/
├── src/
│   ├── data/                 ⭐ [VERİ MERKEZİ] Tüm içerikler burada saklanır!
│   │   ├── company.ts        -> Mağaza isimleri, 2 şubenin adresleri, telefonlar, çalışma saatleri.
│   │   ├── products.ts       -> Sitedeki tüm ürünler, özellikleri, görselleri ve açıklamaları.
│   │   ├── categories.ts     -> 10 ana kategori ve vitrin sayaçları.
│   │   ├── services.ts       -> Aydınlatma danışmanlığı, montaj ve elektrik işçiliği hizmetleri.
│   │   ├── faqs.ts           -> Sıkça Sorulan Sorular (SSS).
│   │   ├── reviews.ts        -> Doğrulanmış müşteri yorumları ve projeler.
│   │   └── locations.ts      -> Kahramanmaraş ve Onikişubat yerel SEO içerikleri.
│   │
│   ├── components/           -> Sitedeki görsel bloklar (Navbar, Footer, Hero, Ürün Kartları).
│   ├── app/                  -> Sayfaların rota dosyaları (Anasayfa, Koleksiyonlar, İletişim vb.).
│   └── app/globals.css       -> Renk paleti (Noctis Gece Mavisi & Marigold Altın Sarısı).
│
├── public/
│   └── images/               🖼️ [GÖRSEL KLASÖRÜ] Ürün fotoğrafları ve logolar burada durur.
│
├── Dockerfile                -> Railway otomatik derleme ve yayınlama dosyası.
├── package.json              -> Proje bağımlılıkları ve çalıştırma komutları.
└── README.md                 -> Proje genel özeti.
```

---

## 2. ÜRÜN YÖNETİMİ (EKLEME, DÜZENLEME, SİLME)

Sitedeki tüm ürünler tek bir merkezden, `src/data/products.ts` dosyasından yönetilir.

### ➕ 2.1. Yeni Ürün Ekleme Adımları

1. `src/data/products.ts` dosyasını bir metin düzenleyici ile açın.
2. `PRODUCTS` dizisinin en sonuna gidin.
3. Son ürünün ardına bir virgül koyarak aşağıdaki hazır şablonu yapıştırın:

```typescript
{
  id: "urun-11",                                        // Benzersiz ürün kimliği (örn: urun-11, urun-12)
  slug: "venedig-kristal-sarkit-avize",                // Ürünün link uzantısı (/urun/venedig-kristal-sarkit-avize)
  name: "Venedik 8 Kollu Asfour Kristal Sarkıt Avize", // Sitede görünen tam ürün adı
  categorySlug: "avizeler",                            // Kategorisi ("avizeler", "aplikler", "spot-ve-ray-spot" vb.)
  categoryName: "Lüks & Modern Avizeler",              // Kategori adı
  style: "İhtişamlı & Klasik",                        // Tarzı: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist"
  badge: "Yeni Sezon",                                 // Ürün üzerindeki etiket (Opsiyonel: "En Çok Satan", "Özel Tasarım" vb.)
  shortDescription: "Saf pirinç gövde üzerine Asfour kristal prizmalarla donatılmış 8 kollu sarkıt avize.",
  description: "Yemek masası üzeri ve salonlar için özel olarak tasarlanan Venedik Serisi; ışıltılı kristal taşları ve altın varak kaplama gövdesiyle mekanınıza zarafet katar.",
  material: "Döküm Masif Pirinç & Asfour Kristal Taşlar",
  dimensions: "Çap: 75 cm, Yükseklik: 95 cm (Zincir Boyu Ayarlanabilir)",
  lightingType: "8x E14 LED Duy (Sıcak Beyaz Uyumlu)",
  branch: "showroom",                                  // Hangi şubede sergileniyor: "showroom" veya "electrical"
  image: "/images/800x800_venedig_avize.jpg",          // public/images içine koyduğunuz fotoğrafın adı
  features: [
    "8 Adet E14 Kandil Tipi Duy",
    "Kararmaya Karşı Korumalı Altın Kaplama",
    "Özel Darbe Emici Kutu ile Güvenli Nakliye",
    "Hilal Avize Montaj Güvencesi"
  ]
},
```

---

### ✏️ 2.2. Var Olan Ürünü Düzenleme
1. `src/data/products.ts` dosyasında değiştirmek istediğiniz ürünü bulun (Örn: `name`, `dimensions`, `material` veya `description`).
2. İlgili satırdaki tırnak içindeki metni değiştirip dosyayı kaydedin.
3. Sitenizdeki ürün kartı, ürün detay sayfası ve WhatsApp danışma butonları **otomatik olarak** yeni bilgilerle güncellenecektir.

---

### 🗑️ 2.3. Ürün Silme
1. `src/data/products.ts` dosyasını açın.
2. Silmek istediğiniz ürünün `{` parantezinden başlayıp `},` bitimine kadar olan kısmını tamamen silin ve dosyayı kaydedin.

---

## 3. GÖRSEL VE FOTOĞRAF YÖNETİMİ

Sitedeki tüm fotoğraflar `/home/onur/hilalavize/public/images/` klasöründe yer alır.

### 📐 Görsel Boyutlandırma ve İsimlendirme Standartları

* **Ürün Fotoğrafları:** `800x800` piksel, kare format.
  * *İsimlendirme Formatı:* `800x800_[urun_adi].jpg` (Örn: `800x800_venedig_avize.jpg`)
* **Mağaza / Vitrin Fotoğrafları:** `1920x1080` piksel, yatay format.
  * *İsimlendirme Formatı:* `1920x1080_[tanim].jpg` (Örn: `1920x1080_hero_showroom.jpg`)
* **Logo:** `512x512` piksel, şeffaf PNG formatında (`512x512_hilal_logo.png`).

### 📥 Yeni Fotoğraf Yükleme Adımları:
1. Fotoğrafınızı hazırlayın (JPG veya PNG).
2. Dosyayı doğrudan `/home/onur/hilalavize/public/images/` klasörüne yapıştırın.
3. `src/data/products.ts` dosyasındaki ürününüzün `image` alanına `"/images/800x800_dosya_adiniz.jpg"` yazın.

---

## 4. ŞUBE, TELEFON VE İLETİŞİM BİLGİLERİNİ GÜNCELLEME

Tüm mağaza iletişim bilgileri tek bir dosyadan yönetilir: `src/data/company.ts`.

### 📞 Telefon veya WhatsApp Numarasını Değiştirmek:
`src/data/company.ts` dosyasını açın:
* **Lütfiye Bilal Telefonunu Değiştirmek İçin:**
  * `phone: "+905053801350"` -> Yeni numara
  * `phoneFormatted: "0505 380 13 50"` -> Ekranda görünecek hali
  * `whatsapp: "905053801350"` -> Başında artı olmadan WhatsApp numarası
* **Murat Bilal (Elektrik Şubesi) Telefonunu Değiştirmek İçin:**
  * `phone: "+905559778349"` satırını güncelleyin.

### 📍 Adres veya Çalışma Saatlerini Değiştirmek:
`src/data/company.ts` içinde ilgili şubenin:
* `address.full` satırını
* `workingHours.days` ve `workingHours.hours` satırlarını düzenlemeniz yeterlidir.

---

## 5. KATEGORİLERİ YÖNETME

Sitedeki 10 ana kategori `src/data/categories.ts` dosyasında tanımlıdır:
* `avizeler` (Lüks & Modern Avizeler)
* `aplikler` (Dekoratif Duvar Aplikleri)
* `spot-ve-ray-spot` (Spot & Manyetik Ray Spot Sistemleri)
* `abajur-ve-lambader` (Abajur & Lambader Koleksiyonu)
* `dekoratif-aynalar` (Dekoratif & Akıllı LED Aynalar)
* `duvar-ve-masa-saatleri` (Özel Tasarım Duvar & Masa Saatleri)
* `cam-sus-esyalari` (Cam Sanat & Süs Eşyaları)
* `anahtar-ve-priz-serileri` (Lüks Anahtar & Priz Serileri)
* `dekoratif-koltuk-ve-berjerler` (Dekoratif Koltuk & Berjerler)
* `dekoratif-sehpalar` (Dekoratif Mermer & Bronz Sehpalar)

Bir kategorinin başlığını, açıklamasını veya vitrindeki ürün sayısını (`itemCount`) değiştirmek için `src/data/categories.ts` dosyasını düzenleyebilirsiniz.

---

## 6. HİZMETLER, SSS VE MÜŞTERİ YORUMLARINI YÖNETME

* **Hizmetler (Aydınlatma Danışmanlığı, Montaj, Elektrik İşi vb.):**
  * Dosya: `src/data/services.ts`
  * Hizmet başlığı, aşamaları (`steps`) ve faydalarını (`benefits`) buradan değiştirebilirsiniz.
* **Sıkça Sorulan Sorular (SSS):**
  * Dosya: `src/data/faqs.ts`
  * Yeni bir soru eklemek için `{ question: "Soru metni", answer: "Cevap metni" }` bloğu ekleyin.
* **Müşteri Yorumları:**
  * Dosya: `src/data/reviews.ts`
  * Müşterilerinizin yorumlarını, isimlerini, projelerini ve verdikleri puanları buradan yönetin.

---

## 7. SAYFA METİNLERİ VE TASARIMI DEĞİŞTİRME

* **Anasayfa Başlıkları ve Sloganları:** `src/components/HeroSection.tsx`
* **Hakkımızda Sayfası Metinleri:** `src/app/hakkimizda/page.tsx`
* **Şubelerimiz & İletişim Sayfası:** `src/app/subelerimiz/page.tsx`
* **Tasarım Renkleri (Noctis & Marigold):** `src/app/globals.css`
  * Ana Gece Mavisi: `#0B132B` ve `#080D1A`
  * Marigold Altın Sarısı: `#F59E0B` ve `#D97706`

---

## 8. BİLGİSAYARINIZDA TEST ETME VE CANLI ÖNİZLEME

Yaptığınız değişiklikleri canlıya göndermeden önce bilgisayarınızda test etmek için:

1. Terminali açın.
2. Şu komutları girin:
   ```bash
   cd /home/onur/hilalavize
   npm run dev
   ```
3. Tarayıcınızdan **`http://localhost:3000`** adresini açın.
4. Dosyayı her kaydedişinizde tarayıcı sayfayı otomatik yenileyecek ve değişiklikleri anında göreceksiniz.
5. İşiniz bittiğinde terminalde `Ctrl + C` tuşlarına basarak durdurabilirsiniz.

---

## 9. DEĞİŞİKLİKLERİ RAILWAY İLE CANLIYA ALMA (GIT & PUSH)

Bilgisayarınızda yaptığınız her değişiklik tek bir komutla Railway üzerinden canlı web sitenize yüklenir:

```bash
cd /home/onur/hilalavize
git add .
git commit -m "urunler ve fiyatlar guncellendi"
git push origin main
```

Bu komuttan sonra:
* Kodlarınız GitHub deponuza gönderilir.
* **Railway bunu saniyeler içinde otomatik olarak algılar**, sitenizi derler ve kesintisiz olarak canlıya geçirir!

---

## 10. ÖNEMLİ KURALLAR, HATA ÖNLEME VE İPUÇLARI

1. **Virgül ve Tırnak Kuralları:**
   * TypeScript ve JSON veri dosyalarında (`products.ts`, `company.ts` vb.) her özelliğin sonuna virgül (`,`) koymayı ve metinleri çift tırnak (`"..."`) içinde yazmayı unutmayın.
2. **Slug (Link) Kuralları:**
   * `slug` alanlarında Türkçe karakter (ç, ğ, ı, ö, ş, ü), boşluk veya özel sembol kullanmayın. Sadece küçük harf ve tire kullanın (Örn: `kristal-avize-modeli`).
3. **Telefon Numarası Formatı:**
   * WhatsApp linkleri için numaraları mutlaka ülke koduyla ve artı işareti olmadan yazın (Örn: `905053801350`).
4. **Hata Kontrolü:**
   * Push yapmadan önce projenizde herhangi bir yazım hatası olup olmadığını test etmek için şu komutu çalıştırabilirsiniz:
   ```bash
   npm run check
   ```
   *(Bu komut 0 hata ile tamamlandığında projeniz %100 sorunsuz yayına hazırdır).*
