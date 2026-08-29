# 🏛️ Hilal Elektrik Avize Aksesuar — Kapsamlı Web Sitesi Kullanım ve Yönetim Kılavuzu

Bu kılavuz, **Hilal Elektrik Avize Aksesuar** web platformunuzun (Next.js 16 + React 19 + TypeScript + Tailwind CSS) tüm işleyişini, ziyaretçi özelliklerini, akıllı yapay zeka WhatsApp danışma sistemini, ürün/şube yönetimini ve Vercel canlı yayın süreçlerini en ince detayına kadar açıklar.

---

## 📑 İÇİNDEKİLER

1. [Genel Bakış ve Canlı Yayın Bilgileri](#1-genel-bakış-ve-canlı-yayın-bilgileri)
2. [Projenin Dosya Haritası ve Mimari Yapısı](#2-projenin-dosya-haritası-ve-mimari-yapısı)
3. [Sitenin Özellikleri ve Kullanım Rehberi (Ziyaretçi Deneyimi)](#3-sitenin-özellikleri-ve-kullanım-rehberi-ziyaretçi-deneyimi)
   - 3.1. Üst İletişim Çubuğu ve Modern Header
   - 3.2. Lüks Hero Bölümü ve Hızlı Eylem Butonları (CTA)
   - 3.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
   - 3.4. İki Uzman Şube ve GPS Koordinatlı Canlı Yol Tarifi
   - 3.5. Koleksiyonlar Vitrini, Canlı Arama ve Filtreleme
   - 3.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
   - 3.7. Akıllı ve Doğal Dil WhatsApp Danışmanlık Sistemi
   - 3.8. Yüzen Hızlı Danışma Butonu (Floating Widget)
   - 3.9. Hizmetler, Müşteri Yorumları, SSS ve Kurumsal Sayfalar
4. [Ürün Yönetimi (Ekleme, Düzenleme, Silme)](#4-ürün-yönetimi-ekleme-düzenleme-silme)
   - 4.1. Ürün Veri Alanlarının Detaylı Tablosu
   - 4.2. Adım Adım Yeni Ürün Ekleme Şablonu
   - 4.3. Var Olan Ürünü Düzenleme
   - 4.4. Ürün Silme
5. [Görsel ve Fotoğraf Yönetimi](#5-görsel-ve-fotoğraf-yönetimi)
   - 5.1. Boyutlandırma Standartları (800x800, 1920x1080, 512x512)
   - 5.2. İsimlendirme Kuralı
   - 5.3. Yeni Fotoğraf Yükleme ve Ürünle Eşleştirme
6. [Şubeler, Yetkililer ve İletişim Bilgilerini Güncelleme](#6-şubeler-yetkililer-ve-iletişim-bilgilerini-güncelleme)
   - 6.1. Telefon ve WhatsApp Numaralarını Değiştirme
   - 6.2. Adres, Çalışma Saatleri ve GPS Koordinatlarını Güncelleme
7. [Kategoriler ve Vitrin Yönetimi](#7-kategoriler-ve-vitrin-yönetimi)
8. [Hizmetler, SSS ve Müşteri Yorumlarını Yönetme](#8-hizmetler-sss-ve-müşteri-yorumlarını-yönetme)
9. [Yerel SEO, Google İndeksleme ve Zengin Arama Sonuçları](#9-yerel-seo-google-indeksleme-ve-zengin-arama-sonuçları)
10. [Bilgisayarınızda Test Etme ve Canlı Önizleme (Localhost)](#10-bilgisayarınızda-test-etme-ve-canlı-önizleme-localhost)
11. [Değişiklikleri Vercel ile Canlıya Alma (Git & Push)](#11-değişiklikleri-vercel-ile-canlıya-alma-git--push)
12. [Gelecekte Özel Domain (hilalavize.com vb.) Bağlama](#12-gelecekte-özel-domain-hilalavizecom-vb-bağlama)
13. [Hata Önleme, Kod Güvenliği ve İpuçları](#13-hata-önleme-kod-güvenliği-ve-ipuçları)

---

## 1. GENEL BAKIŞ VE CANLI YAYIN BİLGİLERİ

* **Resmi Web Sitesi Adresi:** [https://hilalavize-five.vercel.app](https://hilalavize-five.vercel.app)
* **GitHub Kaynak Deposu:** [https://github.com/onuraltunbas/hilalavize](https://github.com/onuraltunbas/hilalavize)
* **Hosting / Sunucu Altyapısı:** Vercel Global Edge Network (Ömür boyu ücretsiz, sınırsız bant genişliği, otomatik SSL güvenlik sertifikalı).
* **Tasarım & Renk Paleti:**
  * **Noctis Gece Mavisi (`#0B132B`, `#080D1A`):** Asil, prestijli, derin modern zemin.
  * **Marigold Altın Amber (`#F59E0B`, `#D97706`):** Işıltılı kristal, pirinç ve aydınlatma vurguları.
  * **Krem & Şampanya (`#FAF7F2`):** Dengeli, ferah ve gözü yormayan ara tonlar.

---

## 2. PROJENİN DOSYA HARİTASI VE MİMARİ YAPISI

Sitenin tüm kaynak kodları bilgisayarınızda `/home/onur/hilalavize` dizininde yer alır:

```text
/home/onur/hilalavize/
├── src/
│   ├── data/                 ⭐ [VERİ MERKEZİ] Tüm içerikler burada saklanır!
│   │   ├── company.ts        -> Mağaza adları, 2 şubenin adresleri, telefonlar, koordinatlar, çalışma saatleri.
│   │   ├── products.ts       -> Sitedeki tüm ürünler, malzeme, ölçü, duy ve fiyat danışma bilgileri.
│   │   ├── categories.ts     -> 10 ana kategori ve vitrin ürün sayaçları.
│   │   ├── services.ts       -> Aydınlatma danışmanlığı, montaj ve elektrik işçiliği hizmetleri.
│   │   ├── faqs.ts           -> Sıkça Sorulan Sorular (SSS).
│   │   ├── reviews.ts        -> Doğrulanmış müşteri yorumları ve projeler.
│   │   └── locations.ts      -> Kahramanmaraş ve Onikişubat yerel SEO içerikleri.
│   │
│   ├── components/           -> Görsel arayüz blokları:
│   │   ├── Navbar.tsx        -> Üst menü, yeni şeffaf logo ve iletişim butonları.
│   │   ├── Footer.tsx        -> Alt bilgi alanı, şube adresleri, harita linkleri ve yasal menü.
│   │   ├── HeroSection.tsx   -> Lüks vitrin açılış alanı ve ana butonlar.
│   │   ├── StyleSelector.tsx -> Klasik / Modern / Minimalist tarz seçici.
│   │   ├── BranchesSection.tsx -> İki şubenin karşılaştırma kartları ve harita yol tarifleri.
│   │   ├── ConsultationForm.tsx -> Akıllı WhatsApp danışmanlık formu.
│   │   ├── FloatingContact.tsx  -> Ekranın sağ altındaki yüzen hızlı iletişim paneli.
│   │   ├── ProductCard.tsx   -> Ürün kartı tasarımı.
│   │   └── ProductModal.tsx  -> Hızlı ürün inceleme açılır penceresi (Popup).
│   │
│   ├── app/                  -> Sayfa rotaları (Anasayfa, Koleksiyonlar, Kategoriler, Ürünler, Hizmetler vb.).
│   └── app/globals.css       -> Renkler, lüks altın parıltı efektleri ve yazı tipleri.
│
├── public/
│   └── images/               🖼️ [GÖRSELLER] Ürün fotoğrafları ve yüksek çözünürlüklü logolar.
│
├── next.config.ts            -> Next.js ve Vercel yapılandırması.
├── package.json              -> Proje paketleri ve çalıştırma komutları.
├── KULLANIM_KILAVUZU.md      -> Bu kılavuzun proje içi kopyası.
└── README.md                 -> Proje genel tanıtımı.
```

---

## 3. SİTENİN ÖZELLİKLERİ VE KULLANIM REHBERİ (ZİYARETÇİ DENEYİMİ)

Siteniz, e-ticaret sepet satışı yerine; **mağaza showroom ziyaretlerini artırmak, kurumsal prestij kazandırmak ve WhatsApp/telefon üzerinden doğrudan sıcak satışa dönüştürmek** amacıyla tasarlanmıştır.

### 3.1. Üst İletişim Çubuğu ve Modern Header
* **En Üst Bilgi Barı:** Onikişubat Kahramanmaraş konumu, çalışma saatleri (`Pzt - Cmt: 09:00 - 17:00`), Showroom yetkilisinin telefonu (`0505 380 13 50`), Elektrik şubesinin telefonu (`0555 977 83 49`) ve tek tıkla WhatsApp Danışma butonu yer alır.
* **Ana Header & Logo:** Yeni yüksek çözünürlüklü şeffaf Hilal Avize logosu büyütülmüş ve net bir şekilde sol üstte yer alır. Menüde; Anasayfa, Tüm Koleksiyonlar, Kategoriler (Açılır mega menü), Hizmetlerimiz, Şubelerimiz & İletişim, Hakkımızda, SSS ve dikkat çekici *"✨ Ücretsiz Danışmanlık"* butonu bulunur.

### 3.2. Lüks Hero Bölümü ve Hızlı Eylem Butonları (CTA)
* Sayfa açıldığında ziyaretçiyi yüksek kaliteli showroom atmosferi, güçlü semantik başlıklar ve iki ana buton karşılar:
  1. **"Koleksiyonları Keşfet":** Ziyaretçiyi doğrudan tüm avize ve dekorasyon modellerinin listelendiği `/koleksiyonlar` sayfasına yönlendirir.
  2. **"WhatsApp ile Danış & Fiyat Al":** Danışman Lütfiye Hanım ile anında WhatsApp sohbeti başlatır.
* Hemen altında **4'lü Güven Rozetleri** yer alır (2 Uzman Şube, %100 K9 Kristal Kalitesi, Ücretsiz Mimari Danışmanlık, Güvenli Nakliye & Montaj Sözü).

### 3.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
* Ziyaretçiler evlerinin tarzına göre 3 ana sekmeden birine tıklayabilir:
  * 👑 **İhtişamlı & Klasik:** Ağır kollu saray avizeleri, K9 kristal prizmalar, varaklı detaylar ve kadife berjerler.
  * ⚡ **Modern & Spor:** Geometrik halka LED'ler, fırçalanmış gold detaylar, dokunmatik LED aynalar ve mermer sehpalar.
  * 🌿 **Sade & Minimalist:** Manyetik ray spot sistemleri, gömme tavan aydınlatmaları ve temperli cam anahtar-priz serileri.
* Seçilen tarza göre altındaki ürünler anında filtrelenerek gösterilir.

### 3.4. İki Uzman Şube ve GPS Koordinatlı Canlı Yol Tarifi
* İki şubenin ayrımı sitede son derece nettir:
  1. **Hilal Avize & Aksesuar Showroom (Umut Kent Sitesi F Blok No: 4A):** Lütfiye Bilal (`0505 380 13 50`) ve Çiğdem Altunbaş (`0506 905 96 32`) doğrudan arama/WhatsApp butonları ve **"Yol Tarifi Al"** butonu.
  2. **Hilal Elektrik & Tesisat Şubesi (Eymen Sitesi No: 12):** Murat Bilal (`0555 977 83 49`) iletişim bilgisi, elektrik malzemeleri, priz ve sigorta montaj desteği ve **"Yol Tarifi Al"** butonu.
* **Tam Koordinatlı Canlı Rota:** Ziyaretçi yol tarifi butonuna bastığında Google Haritalar kullanıcının o anki konumundan mağazanın tam kapısına (`37.585632903905484, 36.85069134447522` ve `37.59150608778074, 36.8587423123147`) canlı navigasyon başlatır.

### 3.5. Koleksiyonlar Vitrini, Canlı Arama ve Filtreleme
* `/koleksiyonlar` sayfasında:
  * Canlı arama çubuğuna ürün adı, malzeme veya özellik yazıldığında anında filtreleme yapılır.
  * Tarz ve kategori hapları ile tek tıkla istenen ürün grubuna ulaşılır.

### 3.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
* Her ürün kartında **"Detay Gör"** ve **"Fiyat Sor"** butonları bulunur.
* Ürün detay sayfasında yüksek çözünürlüklü fotoğraflar, malzeme bilgisi, ölçüler, duy/ışık tipi, avantajlar ve doğrudan o ürünü soran WhatsApp bağlantısı yer alır.

### 3.7. Akıllı ve Doğal Dil WhatsApp Danışmanlık Sistemi
Sayfanın altındaki *"Evinize En Uygun Modeli Birlikte Bulalım"* formu akıllı bir yapay zeka mantığıyla çalışır:
* **Otomatik Baş Harf Büyütme:** Kullanıcı adını küçük harflerle yazsa dahi (`onur altunbaş`), Türkçe karakter kurallarına göre (`Onur Altunbaş`) baş harfler anında büyük harfe çevrilir.
* **Günün Saatine Göre Dinamik Selamlama:**
  * Saat **06:00 - 17:00** arasındaysa ➡️ *"İyi günler, ben Onur Altunbaş..."*
  * Saat **17:00 - 06:00** arasındaysa ➡️ *"İyi akşamlar, ben Onur Altunbaş..."*
* **Akıcı ve Saygılı Tek Parça Cümle:**
  * Kullanıcı mekânı, tarzı ve notları seçtiğinde yapay zeka gereksiz konuşma dolgularını temizler, ölçüleri (`10 m²`, `2.90 m`) teknik formata çevirir ve tek parça, net bir mesaj oluşturur:
  > *"İyi günler, ben Onur Altunbaş. Ofisim için modern LED tarzında bir avize arıyorum. Ofisimin büyüklüğü yaklaşık 10 m². Elinizdeki hazır modeller ve fiyat seçenekleri hakkında bilgi alabilir miyim?"*
* **"Danışmanlık Talebini Gönder (WhatsApp)"** butonuna basıldığı anda bu hazır mesajla WhatsApp açılır.

### 3.8. Yüzen Hızlı Danışma Butonu (Floating Widget)
* Ekranın sağ alt köşesinde sürekli sabit duran yeşil canlı WhatsApp butonu yer alır.
* Tıklandığında hem Showroom hem de Elektrik şubesinin yetkililerine hızlıca yazma veya arama yapma menüsü açılır.

---

## 4. ÜRÜN YÖNETİMİ (EKLEME, DÜZENLEME, SİLME)

Tüm ürünler tek bir dosyadan, [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasından yönetilir.

### 4.1. Ürün Veri Alanlarının Detaylı Tablosu

| Alan Adı | Tip | Açıklama / Örnek |
| :--- | :--- | :--- |
| `id` | Metin | Benzersiz ürün kimliği (örn: `"p1"`, `"p11"`, `"urun-15"`) |
| `slug` | Metin | Sayfa linki URL uzantısı (örn: `"venedig-kristal-avize"` -> `/urun/venedig-kristal-avize`) |
| `name` | Metin | Ürünün sitede görünen tam adı |
| `categorySlug` | Metin | Bağlı olduğu kategori (`"avizeler"`, `"aplikler"`, `"spot-ve-ray-spot"` vb.) |
| `categoryName` | Metin | Kategorinin ekranda görünen adı |
| `style` | Metin | `"İhtişamlı & Klasik"` \| `"Modern & Spor"` \| `"Sade & Minimalist"` |
| `badge` | Metin | Ürün fotoğrafı üzerindeki sarı etiket (örn: `"Yeni Sezon"`, `"Popüler"`) |
| `shortDescription` | Metin | Ürün kartında görünen 1-2 cümlelik kısa özet |
| `description` | Metin | Ürün detay sayfasındaki kapsamlı açıklama |
| `material` | Metin | Malzeme bilgisi (örn: `"Döküm Pirinç & K9 Kristal"`) |
| `dimensions` | Metin | Ölçü bilgisi (örn: `"Çap: 90 cm, Yükseklik: 120 cm"`) |
| `lightingType` | Metin | Duy / LED tipi (örn: `"12x E14 LED Duy (Sıcak Beyaz)"`) |
| `branch` | Metin | `"showroom"` (Avize Showroom) veya `"electrical"` (Elektrik Şubesi) |
| `image` | Metin | Görsel yolu (örn: `"/images/800x800_venedig_avize.jpg"`) |
| `features` | Liste | Ürünün 3-5 maddelik öne çıkan özellikleri |

---

### 4.2. Adım Adım Yeni Ürün Ekleme Şablonu

[src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasını açın, `PRODUCTS` dizisinin en altına şu şablonu kopyalayıp yapıştırın:

```typescript
{
  id: "p11",
  slug: "venedig-sekiz-kollu-kristal-sarkit-avize",
  name: "Venedik 8 Kollu Asfour Kristal Sarkıt Avize",
  categorySlug: "avizeler",
  categoryName: "Lüks & Modern Avizeler",
  style: "İhtişamlı & Klasik",
  badge: "Yeni Sezon",
  shortDescription: "Saf masif pirinç gövde ve K9 Asfour kristal prizmalarla donatılmış 8 kollu sarkıt avize.",
  description: "Yemek masaları ve salonlar için tasarlanan Venedik Serisi; ışıltılı kristal taşları ve altın varak kaplama gövdesiyle mekanınıza zarafet katar.",
  material: "Döküm Masif Pirinç & Asfour Kristal",
  dimensions: "Çap: 75 cm, Yükseklik: 95 cm (Ayarlanabilir Zincir)",
  lightingType: "8x E14 LED Duy (Sıcak Amber Uyumlu)",
  branch: "showroom",
  image: "/images/800x800_venedig_avize.jpg",
  features: [
    "8 Adet E14 Kandil Tipi Duy",
    "Kararmaya Karşı Koruyucu Altın Vernik Kaplama",
    "Özel Darbe Emici Ahşap Sandık ile Güvenli Nakliye",
    "Hilal Avize Uzman Ekibi Montaj Güvencesi"
  ]
},
```

---

### 4.3. Var Olan Ürünü Düzenleme
1. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasında değiştirmek istediğiniz ürünü bulun.
2. `name`, `dimensions`, `material`, `price` veya `description` satırlarındaki tırnak içindeki metni düzenleyip kaydedin.

### 4.4. Ürün Silme
1. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasını açın.
2. Silmek istediğiniz ürünün `{` parantezinden başlayıp `},` bitimine kadar olan bloğunu silin ve kaydedin.

---

## 5. GÖRSEL VE FOTOĞRAF YÖNETİMİ

Tüm görseller `/home/onur/hilalavize/public/images/` klasöründe saklanır.

### 5.1. Boyutlandırma Standartları
* **Ürün Fotoğrafları:** `800x800` piksel, kare format (JPG veya PNG).
* **Büyük Vitrin / Hero Fotoğrafları:** `1920x1080` piksel, yatay format (JPG).
* **Logo:** `512x512` piksel, arka planı şeffaf PNG formatında (`512x512_hilal_logo.png`).

### 5.2. İsimlendirme Kuralı
* Fotoğraflar mutlaka `[GENİŞLİK]x[YÜKSEKLİK]_[isim].[uzantı]` kuralına uygun olmalıdır.
  * Örnek: `800x800_modern_led_halka_avize.jpg`
  * Örnek: `1920x1080_hero_showroom.jpg`

### 5.3. Yeni Fotoğraf Yükleme ve Ürünle Eşleştirme
1. Fotoğrafınızı `800x800` boyutunda hazırlayın (Örn: `800x800_yeni_model.jpg`).
2. Dosyayı `/home/onur/hilalavize/public/images/` klasörüne yapıştırın.
3. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasındaki ürünün `image` alanına `"/images/800x800_yeni_model.jpg"` yazın.

---

## 6. ŞUBELER, YETKİLİLER VE İLETİŞİM BİLGİLERİNİ GÜNCELLEME

Tüm kurumsal iletişim bilgileri tek merkezden, [src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) dosyasından yönetilir.

### 6.1. Telefon ve WhatsApp Numaralarını Değiştirme
[src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) dosyasını açın:
* **Showroom Yetkilileri (Lütfiye Hanım & Çiğdem Hanım):**
  * `phone: "+905053801350"` -> Arama yapılacak telefon
  * `phoneFormatted: "0505 380 13 50"` -> Ekranda görünen format
  * `whatsapp: "905053801350"` -> Başında artı olmadan WhatsApp numarası
* **Elektrik Şubesi (Murat Bey):**
  * `phone: "+905559778349"`
  * `whatsapp: "905559778349"`

### 6.2. Adres, Çalışma Saatleri ve GPS Koordinatlarını Güncelleme
[src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) içinde ilgili şubenin:
* `address.full`: Açık adres metni
* `workingHours.days` ve `workingHours.hours`: Çalışma günleri ve saatleri
* `googleMapsUrl`: Google Haritalar navigasyon linki (Koordinatlar: `37.585632903905484, 36.85069134447522` ve `37.59150608778074, 36.8587423123147`)

---

## 7. KATEGORİLER VE VİTRİN YÖNETİMİ

Kategoriler [src/data/categories.ts](file:///home/onur/hilalavize/src/data/categories.ts) dosyasındadır:
1. `avizeler` (Lüks & Modern Avizeler)
2. `aplikler` (Dekoratif Duvar Aplikleri)
3. `spot-ve-ray-spot` (Spot & Manyetik Ray Spot Sistemleri)
4. `abajur-ve-lambader` (Abajur & Lambader Koleksiyonu)
5. `dekoratif-aynalar` (Dekoratif & Akıllı LED Aynalar)
6. `duvar-ve-masa-saatleri` (Özel Tasarım Duvar & Masa Saatleri)
7. `cam-sus-esyalari` (Cam Sanat & Süs Eşyaları)
8. `anahtar-ve-priz-serileri` (Lüks Anahtar & Priz Serileri)
9. `dekoratif-koltuk-ve-berjerler` (Dekoratif Koltuk & Berjerler)
10. `dekoratif-sehpalar` (Dekoratif Mermer & Bronz Sehpalar)

Bir kategorinin başlığını, açıklamasını veya vitrindeki ürün sayısını (`itemCount`) bu dosyadan değiştirebilirsiniz.

---

## 8. HİZMETLER, SSS VE MÜŞTERİ YORUMLARINI YÖNETME

* **Hizmetler (Danışmanlık, Montaj, Tesisat, Mimari Proje):** [src/data/services.ts](file:///home/onur/hilalavize/src/data/services.ts)
* **Sıkça Sorulan Sorular (SSS):** [src/data/faqs.ts](file:///home/onur/hilalavize/src/data/faqs.ts)
* **Doğrulanmış Müşteri Yorumları:** [src/data/reviews.ts](file:///home/onur/hilalavize/src/data/reviews.ts)

---

## 9. YEREL SEO, GOOGLE İNDEKSLEME VE ZENGİN ARAMA SONUÇLARI

* **Lokasyon Sayfaları:** [src/data/locations.ts](file:///home/onur/hilalavize/src/data/locations.ts) (Kahramanmaraş, Onikişubat, Yirmiikigün Mh., Dulkadiroğlu yerel aramaları için özel sayfalar).
* **Dinamik XML Sitemap:** `/sitemap.xml` (Tüm sayfalar Google'a otomatik bildirilir).
* **Robots Dosyası:** `/robots.txt` (Arama motoru botlarına tam erişim izni verir).
* **Schema.org Yapısal Verisi:** `LocalBusiness`, `Product`, `FAQPage` ve `BreadcrumbList` etiketleri ile Google aramalarında yıldızlı puanlar ve mağaza kartı çıkar.

---

## 10. BİLGİSAYARINIZDA TEST ETME VE CANLI ÖNİZLEME (LOCALHOST)

Değişikliklerinizi canlıya göndermeden önce bilgisayarınızda görmek için:

1. Terminali açın.
2. Şu komutu çalıştırın:
   ```bash
   cd /home/onur/hilalavize
   npm run dev
   ```
3. Tarayıcınızdan **`http://localhost:3000`** adresine gidin.
4. Dosyayı her kaydedişinizde ekran anında güncellenir.
5. Durdurmak için terminalde `Ctrl + C` yapın.

---

## 11. DEĞİŞİKLİKLERİ VERCEL İLE CANLIYA ALMA (GIT & PUSH)

Bilgisayarınızda yaptığınız her değişiklik tek bir komutla Vercel üzerinden canlı web sitenize yüklenir:

```bash
cd /home/onur/hilalavize
git add .
git commit -m "urunler ve iletisim bilgileri guncellendi"
git push origin main
```

Bu komuttan sonra:
1. Değişiklikler GitHub deponuza (`onuraltunbas/hilalavize`) gönderilir.
2. **Vercel bunu saniyeler içinde otomatik olarak algılar.**
3. Derlemeyi tamamlar ve sitenizi kesintisiz olarak canlıya alır!

---

## 12. GELECEKTE ÖZEL DOMAIN (hilalavize.com VB.) BAĞLAMA

Eğer ileride kendinize ait bir `.com` veya `.com.tr` alan adı satın alırsanız:

1. [vercel.com](https://vercel.com) Dashboard'a girin.
2. `hilalavize` projenize tıklayın.
3. **Settings** -> **Domains** bölümüne geçin.
4. Satın aldığınız alan adını (örn: `hilalavize.com.tr` veya `hilalavize.com`) yazıp **Add** butonuna basın.
5. Vercel'in size vereceği `CNAME` / `A` kayıtlarını domain firmanızın (Metunic, İsimtescil, vb.) DNS paneline ekleyin.
6. Siteniz anında kendi özel alan adınızla açılacaktır!

---

## 13. HATA ÖNLEME, KOD GÜVENLİĞİ VE İPUÇLARI

1. **Virgül ve Tırnak Kuralı:** TypeScript dosyalarında (`products.ts`, `company.ts` vb.) her özelliğin sonuna virgül (`,`) koymayı ve metinleri çift tırnak (`"..."`) içine yazmayı unutmayın.
2. **Link (Slug) Kuralı:** `slug` alanlarında Türkçe karakter (ç, ğ, ı, ö, ş, ü), boşluk veya özel işaret kullanmayın (Örn: `modern-halka-led-avize`).
3. **WhatsApp Numarası:** `whatsapp` alanlarına numarayı daima başında artı olmadan ve ülke koduyla yazın (Örn: `905053801350`).
4. **Hata Kontrolü (Check Komutu):** Push yapmadan önce yazım veya derleme hatası olup olmadığını test etmek için şu komutu çalıştırabilirsiniz:
   ```bash
   npm run check
   ```
   *(Bu komut 0 hata verdiğinde siteniz %100 sorunsuz yayına hazırdır).*

---

## 14. 🤖 TELEGRAM İLE ÜRÜN EKLEME & YÖNETİCİ BOTU KILAVUZU

Sitenize **yalnızca yetkili yöneticilerin** Telegram üzerinden fotoğraf ve detay göndererek ürün eklemesini ve ürün sorgulamasını sağlayan akıllı Telegram Botu entegre edilmiştir.

### 🔑 14.1. Güvenlik & Giriş Şifresi:
* **Yönetici Giriş Şifresi:** `hilal1976`
* Botu açtığınızda işlem yapabilmek için önce şu komutu yazmalısınız:
  👉 `/giris hilal1976`
* Güvenli çıkış için:
  👉 `/cikis`

---

### 🏷️ 14.2. Standart Ürün ID Ön Ekleri (3 Haneli Monoton Artan):
Sitedeki ve Telegram'daki tüm ürünler düzen için şu standart ID formatını kullanır:
* `AVZ-` : Avizeler (Örn: `AVZ-001`, `AVZ-002`, `AVZ-006`...)
* `APL-` : Duvar Aplikleri (Örn: `APL-001`, `APL-002`...)
* `SPT-` : Spot & Ray Spot Sistemleri (Örn: `SPT-001`...)
* `ABJ-` : Abajur & Lambaderler (Örn: `ABJ-001`...)
* `AYN-` : Aynalar (Örn: `AYN-001`...)
* `DST-` : Duvar & Masa Saatleri (Örn: `DST-001`...)
* `SUS-` : Cam Sanat / Süs Eşyaları (Örn: `SUS-001`...)
* `ANH-` : Lüks Anahtar & Priz Serileri (Örn: `ANH-001`...)
* `KOL-` : Koltuk & Berjerler (Örn: `KOL-001`...)
* `SEH-` : Orta & Yan Sehpalar (Örn: `SEH-001`...)

---

### 📱 14.3. Telegram Bot Komutları:

* 📖 **`/yardim`** : Tüm komutları ve kullanım detaylarını listeler.
* 📸 **`/ekle`** : Adım adım konuşarak yeni ürün ekleme sihirbazını başlatır.
* 🗑️ **`/sil [ID]`** : Ürünü siler; ID sırasını korur (Örn: `/sil AVZ-005`).
* 🔍 **`/urun [ID veya İsim]`** : Ürünün fotoğrafını, teknik özelliklerini ve linkini getirir (Örn: `/urun AVZ-001`).
* 📋 **`/liste`** : Sitedeki tüm ürünlerin ID listesini verir.
* ❌ **`/iptal`** : Yarıda kalan işlemi tamamen temizler ve sıfırlar.
* ⚡ **`/durum`** : Oturum ve site bağlantı durumunu gösterir.
* 🔒 **`/cikis`** : Güvenli çıkış yapar ve botu kilitler.

---

### 📸 14.4. İnteraktif Ürün Ekleme Sihirbazı (`/ekle`):
Bota **/ekle** yazdığınızda sistem size sırayla sorar:
1. Ürün Fotoğrafı
2. Ürün Türü (Otomatik sıradaki ID üretilir, örn: `AVZ-003`)
3. Ürün Adı
4. Tarzı (`1: Klasik`, `2: Modern`, `3: Minimalist`)
5. Malzemesi
6. Boyutları / Ölçüleri
7. Duy / Aydınlatma Tipi
8. Açıklaması
9. Öne Çıkan Özellikleri

İşlem tamamlandığında ürün sitenize anında eklenir ve canlı web linkiyle teyit kartı gönderilir!
