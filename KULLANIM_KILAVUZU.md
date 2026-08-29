# 🏛️ Hilal Elektrik Avize Aksesuar — Kapsamlı Web Sitesi Kullanım ve Yönetim Kılavuzu

Bu kılavuz, **Hilal Elektrik Avize Aksesuar** web platformunun hem **ziyaretçiler tarafından nasıl kullanıldığını ve hangi akıllı özelliklere sahip olduğunu**, hem de mağaza yöneticisi olarak **ürün ekleme, silme, düzenleme, mağaza/şube bilgisi güncelleme, görsel yükleme ve Railway canlı yayın işlemlerini** en ince detayına kadar açıklar.

---

## 📑 İÇİNDEKİLER

1. [Genel Bakış ve Platform Mimarisi](#1-genel-bakış-ve-platform-mimarisi)
2. [Sitenin Özellikleri ve Kullanım Rehberi (Ziyaretçi Deneyimi)](#2-sitenin-özellikleri-ve-kullanım-rehberi-ziyaretçi-deneyimi)
   - 2.1. Lüks Header ve İki Şubeli Üst İletişim Barı
   - 2.2. Hero Bölümü ve Eyleme Geçirici Butonlar (CTA)
   - 2.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
   - 2.4. İki Uzman Şube Kartları ve GPS Koordinatlı Yol Tarifi
   - 2.5. Koleksiyonlar Vitrini, Canlı Arama ve Filtreleme
   - 2.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
   - 2.7. Akıllı ve Doğal Dil WhatsApp Danışmanlık Sistemi
   - 2.8. Yüzen Hızlı Danışma Butonu (Floating Contact)
   - 2.9. Hizmetler, Müşteri Yorumları, SSS ve Kurumsal Sayfalar
3. [Ürün Yönetimi (Ekleme, Düzenleme, Silme)](#3-ürün-yönetimi-ekleme-düzenleme-silme)
   - 3.1. Ürün Veri Alanlarının Detaylı Açıklamaları
   - 3.2. Adım Adım Yeni Ürün Ekleme Şablonu
   - 3.3. Var Olan Ürünü Düzenleme
   - 3.4. Ürün Silme
4. [Görsel ve Fotoğraf Yönetimi](#4-görsel-ve-fotoğraf-yönetimi)
   - 4.1. Boyutlandırma Standartları (800x800, 1920x1080, 512x512)
   - 4.2. İsimlendirme Kuralı
   - 4.3. Yeni Fotoğraf Yükleme ve Ürünle Eşleştirme
5. [Şubeler, Yetkililer ve İletişim Bilgilerini Güncelleme](#5-şubeler-yetkililer-ve-iletişim-bilgilerini-güncelleme)
   - 5.1. Telefon ve WhatsApp Numaralarını Değiştirme
   - 5.2. Adres, Çalışma Saatleri ve GPS Koordinatlarını Güncelleme
6. [Kategoriler ve Vitrin Yönetimi](#6-kategoriler-ve-vitrin-yönetimi)
7. [Hizmetler, SSS ve Müşteri Yorumlarını Yönetme](#7-hizmetler-sss-ve-müşteri-yorumlarını-yönetme)
8. [Yerel SEO, Google İndeksleme ve Zengin Arama Sonuçları](#8-yerel-seo-google-indeksleme-ve-zengin-arama-sonuçları)
9. [Bilgisayarınızda Test Etme ve Canlı Önizleme (Localhost)](#9-bilgisayarınızda-test-etme-ve-canlı-önizleme-localhost)
10. [Değişiklikleri Railway ile Canlıya Alma (Git & Push)](#10-değişiklikleri-railway-ile-canlıya-alma-git--push)
11. [Hata Önleme, Kod Güvenliği ve İpuçları](#11-hata-önleme-kod-güvenliği-ve-ipuçları)

---

## 1. GENEL BAKIŞ VE PLATFORM MİMARİSİ

* **Teknoloji Altyapısı:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS.
* **Tasarım & Renk Paleti:**
  * **Noctis Gece Mavisi (`#0B132B`, `#080D1A`):** Asil, prestijli, modern zemin.
  * **Marigold Altın Amber (`#F59E0B`, `#D97706`):** Işıltılı kristal ve aydınlatma vurguları.
  * **Krem & Şampanya (`#FAF7F2`):** Dengeli ve ferah ara tonlar.
* **Dosya Konumu:** `/home/onur/hilalavize`

---

## 2. SİTENİN ÖZELLİKLERİ VE KULLANIM REHBERİ (ZİYARETÇİ DENEYİMİ)

Siteniz e-ticaret sepet satışı yerine; **mağaza showroom ziyaretlerini artırma, prestijli marka algısı oluşturma ve WhatsApp/telefon üzerinden doğrudan sıcak satışa dönüştürme** amacıyla tasarlanmıştır.

### 2.1. Lüks Header ve İki Şubeli Üst İletişim Barı
* **En Üst Bilgi Çubuğu:** Sitenin en tepesinde Onikişubat Kahramanmaraş konumu, çalışma saatleri (`Pzt - Cmt: 09:00 - 17:00`), Showroom yetkilisinin telefonu (`0505 380 13 50`), Elektrik şubesinin telefonu (`0555 977 83 49`) ve tek tıkla WhatsApp Danışma butonu yer alır.
* **Ana Navbar (Menü):** Şeffaf arka planlı büyük Hilal Avize logosu, Tüm Koleksiyonlar, Kategoriler (Açılır mega menü), Hizmetlerimiz, Şubelerimiz & İletişim, Hakkımızda, SSS linkleri ve dikkat çekici *"✨ Ücretsiz Danışmanlık"* butonu bulunur.

### 2.2. Hero Bölümü ve Eyleme Geçirici Butonlar (CTA)
* Sayfa açıldığında ziyaretçiyi yüksek çözünürlüklü showroom görseli, güçlü H1 başlığı ve iki adet ana buton karşılar:
  1. **"Koleksiyonları Keşfet":** Ziyaretçiyi doğrudan tüm avize ve dekorasyon modellerinin listelendiği sayfaya yönlendirir.
  2. **"WhatsApp ile Danış & Fiyat Al":** Danışman Lütfiye Hanım ile anında WhatsApp sohbeti başlatır.
* Hemen altında **4'lü Güven Rozetleri** yer alır (2 Uzman Şube, %100 K9 Kristal Kalitesi, Ücretsiz Mimari Danışmanlık, Güvenli Nakliye & Montaj Sözü).

### 2.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
* Ziyaretçiler kendi evlerinin zevkine göre 3 ana tarzdan birini seçebilir:
  * 👑 **İhtişamlı & Klasik:** Ağır kollu saray avizeleri, K9 kristal taşlar, varaklı detaylar ve kadife berjerler.
  * ⚡ **Modern & Spor:** Geometrik halka LED'ler, fırçalanmış gold detaylar, dokunmatik LED aynalar ve mermer sehpalar.
  * 🌿 **Sade & Minimalist:** Manyetik ray spot sistemleri, gömme tavan aydınlatmaları ve temperli cam anahtar-priz serileri.
* Seçilen tarza göre altındaki ürünler anında filtrelenerek gösterilir.

### 2.4. İki Uzman Şube Kartları ve GPS Koordinatlı Yol Tarifi
* Sitede iki şubenin ayrımı son derece nettir:
  1. **Hilal Avize & Aksesuar Showroom (Umut Kent Sitesi):** Lütfiye Bilal ve Çiğdem Altunbaş'ın doğrudan telefon ve WhatsApp hatları, şube özellikleri ve **"Yol Tarifi Al"** butonu.
  2. **Hilal Elektrik & Tesisat Şubesi (Eymen Sitesi):** Murat Bilal'in doğrudan iletişim bilgisi, elektrik malzemeleri, priz ve sigorta montaj desteği ve **"Yol Tarifi Al"** butonu.
* **Tam Koordinatlı Navigasyon:** Ziyaretçi yol tarifi butonuna bastığında Google Haritalar kullanıcının o anki konumundan mağazanın tam kapısına (`37.5856...` ve `37.5915...`) canlı rota çizer.

### 2.5. Koleksiyonlar Vitrini, Canlı Arama ve Filtreleme
* `/koleksiyonlar` sayfasına giren ziyaretçi:
  * Arama kutusuna ürün adı, malzeme veya özellik yazarak anında canlı arama yapabilir.
  * Tarz filtreleri (Klasik / Modern / Minimalist) veya Kategori filtreleri (Avize, Aplik, Spot, Ayna, Saat, Sehpa vb.) ile tek tıkla aradığı ürün grubuna ulaşabilir.

### 2.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
* Her ürün kartında **"Detay Gör"** ve **"Fiyat Sor"** butonları bulunur.
* Ürün detay sayfasında ürünün yüksek çözünürlüklü fotoğrafı, malzemesi, ölçüleri, duy/ışık tipi, öne çıkan avantajları ve doğrudan o ürünü soran hazır WhatsApp butonu yer alır.

### 2.7. Akıllı ve Doğal Dil WhatsApp Danışmanlık Sistemi
Sayfanın altındaki *"Evinize En Uygun Modeli Birlikte Bulalım"* formu, son derece akıllı bir yapay zeka mesaj motoruna sahiptir:
* **Otomatik Baş Harf Büyütme:** Kullanıcı adını küçük harflerle yazsa bile (`onur altunbaş`), sistem Türkçe kurallarına uygun olarak (`Onur Altunbaş`) baş harfleri otomatik büyütür.
* **Günün Saatine Göre Dinamik Selamlama:**
  * Saat **06:00 - 17:00** arasındaysa ➡️ *"İyi günler, ben Onur Altunbaş..."*
  * Saat **17:00 - 06:00** arasındaysa ➡️ *"İyi akşamlar, ben Onur Altunbaş..."*
* **Doğal, Teknik ve Akıcı Cümle Dönüştürme:**
  * Kullanıcı mekânı, tarzı ve notları seçtiğinde yapay zeka aradaki tüm gereksiz konuşma dolgularını temizler, ölçüleri (`10 m²`, `2.90 m`) teknik formata çevirir ve tek parça, saygılı bir mesaj oluşturur:
  > *"İyi günler, ben Onur Altunbaş. Ofisim için modern LED tarzında bir avize arıyorum. Ofisimin büyüklüğü yaklaşık 10 m². Elinizdeki hazır modeller ve fiyat seçenekleri hakkında bilgi alabilir miyim?"*
* **"Danışmanlık Talebini Gönder (WhatsApp)"** butonuna basıldığı anda bu hazır mesajla WhatsApp açılır.

### 2.8. Yüzen Hızlı Danışma Butonu (Floating Contact)
* Ekranın sağ alt köşesinde sürekli sabit duran yeşil canlı WhatsApp butonu yer alır.
* Tıklandığında hem Showroom hem de Elektrik şubesinin yetkililerine hızlıca yazma veya arama yapma menüsü açılır.

---

## 3. ÜRÜN YÖNETİMİ (EKLEME, DÜZENLEME, SİLME)

Tüm ürünler [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasından yönetilir.

### 3.1. Ürün Veri Alanlarının Detaylı Açıklamaları

| Alan Adı | Tip | Açıklama / Örnek |
| :--- | :--- | :--- |
| `id` | Metin | Benzersiz kimlik (örn: `"p1"`, `"p11"`, `"urun-15"`) |
| `slug` | Metin | Sayfa linki URL'si (örn: `"venedig-kristal-avize"` -> `/urun/venedig-kristal-avize`) |
| `name` | Metin | Ürünün sitede görünen tam başlığı |
| `categorySlug` | Metin | Bağlı olduğu kategori (`"avizeler"`, `"aplikler"`, `"spot-ve-ray-spot"` vb.) |
| `categoryName` | Metin | Kategorinin ekranda görünen adı |
| `style` | Metin | `"İhtişamlı & Klasik"` \| `"Modern & Spor"` \| `"Sade & Minimalist"` |
| `badge` | Metin | Ürün fotoğrafı üzerindeki sarı rozet (örn: `"Yeni Sezon"`, `"Popüler"`) |
| `shortDescription` | Metin | Ürün kartında görünen 1-2 cümlelik kısa özet |
| `description` | Metin | Ürün detay sayfasındaki kapsamlı açıklama |
| `material` | Metin | Malzeme bilgisi (örn: `"Döküm Pirinç & K9 Kristal"`) |
| `dimensions` | Metin | Ölçü bilgisi (örn: `"Çap: 90 cm, Yükseklik: 120 cm"`) |
| `lightingType` | Metin | Duy / LED tipi (örn: `"12x E14 LED Duy (Sıcak Beyaz)"`) |
| `branch` | Metin | `"showroom"` (Avize Showroom) veya `"electrical"` (Elektrik Şubesi) |
| `image` | Metin | Görsel yolu (örn: `"/images/800x800_venedig_avize.jpg"`) |
| `features` | Liste | Ürünün 3-5 maddelik öne çıkan özellikleri |

---

### 3.2. Adım Adım Yeni Ürün Ekleme Şablonu

[src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasını açın, `PRODUCTS` dizisinin en altına şu şablonu ekleyin:

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

### 3.3. Var Olan Ürünü Düzenleme
1. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasında değiştirmek istediğiniz ürünü bulun.
2. `name`, `dimensions`, `material` veya `description` satırlarındaki tırnak içindeki metni değiştirip dosyayı kaydedin.

### 3.4. Ürün Silme
1. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasını açın.
2. Silmek istediğiniz ürünün `{` parantezinden başlayıp `},` bitimine kadar olan bloğunu silin ve kaydedin.

---

## 4. GÖRSEL VE FOTOĞRAF YÖNETİMİ

Tüm görseller `/home/onur/hilalavize/public/images/` klasöründe saklanır.

### 4.1. Boyutlandırma Standartları
* **Ürün Fotoğrafları:** `800x800` piksel, kare format (JPG veya PNG).
* **Büyük Vitrin / Hero Fotoğrafları:** `1920x1080` piksel, yatay format (JPG).
* **Logo:** `512x512` piksel, arka planı şeffaf PNG formatında (`512x512_hilal_logo.png`).

### 4.2. İsimlendirme Kuralı
* Fotoğraflar mutlaka `[GENİŞLİK]x[YÜKSEKLİK]_[isim].[uzantı]` kuralına uygun olmalıdır.
  * Örnek: `800x800_modern_led_halka_avize.jpg`
  * Örnek: `1920x1080_hero_showroom.jpg`

### 4.3. Yeni Fotoğraf Yükleme ve Ürünle Eşleştirme
1. Fotoğrafınızı `800x800` boyutunda hazırlayın (Örn: `800x800_yeni_model.jpg`).
2. Dosyayı `/home/onur/hilalavize/public/images/` klasörüne yapıştırın.
3. [src/data/products.ts](file:///home/onur/hilalavize/src/data/products.ts) dosyasındaki ürünün `image` alanına `"/images/800x800_yeni_model.jpg"` yazın.

---

## 5. ŞUBELER, YETKİLİLER VE İLETİŞİM BİLGİLERİNİ GÜNCELLEME

Tüm kurumsal iletişim bilgileri tek merkezden, [src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) dosyasından yönetilir.

### 5.1. Telefon ve WhatsApp Numaralarını Değiştirme
[src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) dosyasını açın:
* **Showroom Yetkilileri (Lütfiye Hanım & Çiğdem Hanım):**
  * `phone: "+905053801350"` -> Arama yapılacak telefon
  * `phoneFormatted: "0505 380 13 50"` -> Ekranda görünen format
  * `whatsapp: "905053801350"` -> Başında artı olmadan WhatsApp numarası
* **Elektrik Şubesi (Murat Bey):**
  * `phone: "+905559778349"`
  * `whatsapp: "905559778349"`

### 5.2. Adres, Çalışma Saatleri ve GPS Koordinatlarını Güncelleme
[src/data/company.ts](file:///home/onur/hilalavize/src/data/company.ts) içinde ilgili şubenin:
* `address.full`: Açık adres metni
* `workingHours.days` ve `workingHours.hours`: Çalışma günleri ve saatleri
* `googleMapsUrl`: Google Haritalar navigasyon linki (Koordinatlar: `37.585632903905484, 36.85069134447522` ve `37.59150608778074, 36.8587423123147`)

---

## 6. KATEGORİLER VE VİTRİN YÖNETİMİ

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

## 7. HİZMETLER, SSS VE MÜŞTERİ YORUMLARINI YÖNETME

* **Hizmetler (Danışmanlık, Montaj, Tesisat, Mimari Proje):** [src/data/services.ts](file:///home/onur/hilalavize/src/data/services.ts)
* **Sıkça Sorulan Sorular (SSS):** [src/data/faqs.ts](file:///home/onur/hilalavize/src/data/faqs.ts)
* **Doğrulanmış Müşteri Yorumları:** [src/data/reviews.ts](file:///home/onur/hilalavize/src/data/reviews.ts)

---

## 8. YEREL SEO, GOOGLE İNDEKSLEME VE ZENGİN ARAMA SONUÇLARI

* **Lokasyon Sayfaları:** [src/data/locations.ts](file:///home/onur/hilalavize/src/data/locations.ts) (Kahramanmaraş, Onikişubat, Yirmiikigün Mh., Dulkadiroğlu yerel aramaları için özel sayfalar).
* **Dinamik XML Sitemap:** `/sitemap.xml` (Tüm sayfalar Google'a otomatik bildirilir).
* **Robots Dosyası:** `/robots.txt` (Arama motoru botlarına tam erişim izni verir).
* **Schema.org Yapısal Verisi:** `LocalBusiness`, `Product`, `FAQPage` ve `BreadcrumbList` etiketleri ile Google aramalarında yıldızlı puanlar ve mağaza kartı çıkar.

---

## 9. BİLGİSAYARINIZDA TEST ETME VE CANLI ÖNİZLEME (LOCALHOST)

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

## 10. DEĞİŞİKLİKLERİ RAILWAY İLE CANLIYA ALMA (GIT & PUSH)

Bilgisayarınızda yaptığınız her değişiklik tek bir komutla Railway üzerinden canlı web sitenize yüklenir:

```bash
cd /home/onur/hilalavize
git add .
git commit -m "urunler ve iletisim bilgileri guncellendi"
git push origin main
```

Bu komuttan sonra:
1. Değişiklikler GitHub deponuza (`onuraltunbas/hilalavize`) gönderilir.
2. **Railway bunu saniyeler içinde otomatik olarak algılar.**
3. Dockerfile üzerinden derlemeyi tamamlar ve sitenizi kesintisiz olarak canlıya alır!

---

## 11. HATA ÖNLEME, KOD GÜVENLİĞİ VE İPUÇLARI

1. **Virgül ve Tırnak Kuralı:** TypeScript dosyalarında (`products.ts`, `company.ts` vb.) her özelliğin sonuna virgül (`,`) koymayı ve metinleri çift tırnak (`"..."`) içine yazmayı unutmayın.
2. **Link (Slug) Kuralı:** `slug` alanlarında Türkçe karakter (ç, ğ, ı, ö, ş, ü), boşluk veya özel işaret kullanmayın (Örn: `modern-halka-led-avize`).
3. **WhatsApp Numarası:** `whatsapp` alanlarına numarayı daima başında artı olmadan ve ülke koduyla yazın (Örn: `905053801350`).
4. **Hata Kontrolü (Check Komutu):** Push yapmadan önce yazım veya derleme hatası olup olmadığını test etmek için şu komutu çalıştırabilirsiniz:
   ```bash
   npm run check
   ```
   *(Bu komut 0 hata verdiğinde siteniz %100 sorunsuz yayına hazırdır).*
