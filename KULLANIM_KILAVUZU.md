# 🏛️ Hilal Elektrik Avize Aksesuar — Kapsamlı Web Sitesi Kullanım ve Yönetim Kılavuzu

Bu kılavuz, **Hilal Elektrik Avize Aksesuar** web platformunuzun (Next.js 16 + React 19 + TypeScript + Tailwind CSS) tüm işleyişini, ziyaretçi özelliklerini, akıllı yapay zeka WhatsApp danışma sistemini, Telegram yönetim botunu, ürün/şube yönetimini ve Vercel canlı yayın süreçlerini en ince detayına kadar açıklar.

---

## 📑 İÇİNDEKİLER

1. [Genel Bakış ve Canlı Yayın Bilgileri](#1-genel-bakış-ve-canlı-yayın-bilgileri)
2. [Projenin Dosya Haritası ve Mimari Yapısı](#2-projenin-dosya-haritası-ve-mimari-yapısı)
3. [Sitenin Özellikleri ve Kullanım Rehberi (Ziyaretçi Deneyimi)](#3-sitenin-özellikleri-ve-kullanım-rehberi-ziyaretçi-deneyimi)
   - 3.1. Üst İletişim Çubuğu ve Modern Header
   - 3.2. Lüks Hero Bölümü ve Hızlı Eylem Butonları (CTA)
   - 3.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
   - 3.4. İki Uzman Şube ve GPS Koordinatlı Canlı Yol Tarifi
   - 3.5. Koleksiyonlar Vitrini, Canlı Arama ve Dinamik Filtreleme
   - 3.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
   - 3.7. Akıllı ve Doğal Dil WhatsApp Danışmanlık Sistemi
   - 3.8. Yüzen Hızlı Danışma Butonu (Floating Widget)
   - 3.9. Anasayfaya Özel Danışmanlık ve Yol Tarifi Alanı
   - 3.10. Hizmetler, Müşteri Yorumları, SSS ve Kurumsal Sayfalar
4. [Ürün Yönetimi (Ekleme, Düzenleme, Silme)](#4-ürün-yönetimi-ekleme-düzenleme-silme)
5. [Görsel ve Fotoğraf Yönetimi](#5-görsel-ve-fotoğraf-yönetimi)
6. [Şubeler, Yetkililer ve İletişim Bilgilerini Güncelleme](#6-şubeler-yetkililer-ve-iletişim-bilgilerini-güncelleme)
7. [Kategoriler ve Vitrin Yönetimi (Dinamik Sayaçlar)](#7-kategoriler-ve-vitrin-yönetimi-dinamik-sayaçlar)
8. [Hizmetler, SSS ve Müşteri Yorumlarını Yönetme](#8-hizmetler-sss-ve-müşteri-yorumlarını-yönetme)
9. [Yerel SEO, Google İndeksleme ve Zengin Arama Sonuçları](#9-yerel-seo-google-indeksleme-ve-zengin-arama-sonuçları)
10. [Bilgisayarınızda Test Etme ve Canlı Önizleme (Localhost)](#10-bilgisayarınızda-test-etme-ve-canlı-önizleme-localhost)
11. [Değişiklikleri Vercel ile Canlıya Alma (Git & Push)](#11-değişiklikleri-vercel-ile-canlıya-alma-git--push)
12. [Gelecekte Özel Domain (hilalavize.com vb.) Bağlama](#12-gelecekte-özel-domain-hilalavizecom-vb-bağlama)
13. [Hata Önleme, Kod Güvenliği ve İpuçları](#13-hata-önleme-kod-güvenliği-ve-ipuçları)
14. [🤖 TELEGRAM İLE HIZLI ÜRÜN EKLEME & YÖNETİCİ BOTU KILAVUZU](#14-telegram-ile-hizli-ürün-ekleme--yönetici-botu-kilavuzu)
    - 14.1. Güvenlik & Giriş Şifresi
    - 14.2. Standart Ürün ID Formatı (3 Haneli Monoton Artan)
    - 14.3. Telegram Bot Komutları Tablosu
    - 14.4. Sadeleştirilmiş 6 Adımlı Hızlı Ürün Ekleme Sihirbazı (`/ekle`)
    - 14.5. Özel Telegram Kanalı & Çoklu Yönetici Canlı Yayın Sistemi
    - 14.6. Ürün Silme ve ID Sırası Koruma Mantığı (`/sil`)

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
│   │   ├── products.ts       -> Sitedeki temel ürünler, malzeme, ölçü, duy ve fiyat danışma bilgileri.
│   │   ├── categories.ts     -> 10 ana kategori ve vitrin yapılandırmaları.
│   │   ├── services.ts       -> Aydınlatma danışmanlığı, montaj ve elektrik işçiliği hizmetleri.
│   │   ├── faqs.ts           -> Sıkça Sorulan Sorular (SSS).
│   │   ├── reviews.ts        -> Doğrulanmış müşteri yorumları ve referans projeler.
│   │   └── locations.ts      -> Kahramanmaraş ve Onikişubat yerel SEO içerikleri.
│   │
│   ├── lib/                  ⚡ [İŞ MANTIĞI & SİSTEMLER]
│   │   ├── products-store.ts -> Dinamik ve kalıcı ürün depolama motoru.
│   │   └── telegram/bot.ts   -> Telegram yönetim botu, oturum yönetimi ve ID üretici.
│   │
│   ├── components/           -> Görsel arayüz bileşenleri:
│   │   ├── Navbar.tsx        -> Üst menü, dinamik linkler ve mobil çekmece.
│   │   ├── Footer.tsx        -> Alt bilgi alanı, şube adresleri, harita linkleri ve yasal menü.
│   │   ├── HomeCtaBanner.tsx -> Sadece anasayfaya özel WhatsApp & Yol tarifi alanı.
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
* Her sayfanın en üstünde Onikişubat Showroom ve Elektrik Şubesi telefonları yer alır.
* Masaüstünde kategoriler şık bir açılır menü (dropdown) ile gezilebilir.

### 3.2. Lüks Hero Bölümü ve Hızlı Eylem Butonları (CTA)
* Görkemli vitrin görseli ve **"Koleksiyonları Keşfet"** ile **"Uzmana Danış"** yönlendirmeleri bulunur.

### 3.3. İnteraktif Tarz Seçici (Klasik, Modern, Minimalist)
* Müşteriler tek dokunuşla evlerinin tarzına göre filtreleme yapabilir.

### 3.4. İki Uzman Şube ve Canlı Yol Tarifi
1. **Hilal Avize & Aksesuar Showroom:** Yirmiikigün Mah., Şehit Polis Ali Mülazımoğlu Cad.
2. **Hilal Elektrik & Tesisat Şubesi:** Süleymanşah Mah., 10056. Sokak.

### 3.5. Koleksiyonlar Vitrini, Canlı Arama ve Dinamik Filtreleme
* Ziyaretçiler arama çubuğundan ürün adı, ölçü veya duy tipine göre canlı filtreleme yapabilir.
* **Sayaç Dinamiktir:** Sitede o an yayında olan toplam ürün sayısı anlık olarak hesaplanır.

### 3.6. Ürün Detay Sayfaları ve Hızlı Bilgi/Fiyat Alma
* Her ürün için özel dinamik sayfa (`/urun/[slug]`) açılır.
* Ürün fotoğrafı, tarz rozeti, boyutları ve aydınlatma/duy tipi görüntülenir.
* Müşteri **"WhatsApp ile Fiyat & Bilgi Al"** butonuna bastığında ürünün adı ve linki WhatsApp mesajına otomatik yazılmış olarak açılır.

### 3.7. Anasayfaya Özel Danışmanlık ve Yol Tarifi Alanı
* `Evinize En Uygun Avizeyi Beraber Seçelim!` bölümü **yalnızca Anasayfada (`/`)** yer alır. Diğer sayfalarda gereksiz kalabalık yapmaz.

---

## 4. 🤖 TELEGRAM İLE HIZLI ÜRÜN EKLEME & YÖNETİCİ BOTU KILAVUZU

Sitenize, bilgisayara ihtiyaç duymadan **akıllı telefonunuzdan Telegram ile 10 saniyede ürün eklemenizi ve silmenizi** sağlayan güçlü bir yönetim botu entegre edilmiştir.

### 🔑 14.1. Güvenlik & Giriş Şifresi:
* **Yönetici Giriş Şifresi:** `hilal1976`
* Botu kullanmak için tek yapmanız gereken şifreyi girmektir:
  👉 `/giris hilal1976`
* Giriş yapıldığında sistem adınızı, soyadınızı ve kullanıcı adınızı (`@kullaniciadi`) otomatik tanır.
* Güvenli çıkış için:
  👉 `/cikis`

---

### 🏷️ 14.2. Standart Ürün ID Formatı (3 Haneli Monoton Artan):
Sitedeki ve Telegram'daki tüm ürünler düzen ve takip için 3 haneli standart formatı kullanır:
* `AVZ-` : Avizeler (Örn: `AVZ-001`, `AVZ-002`, `AVZ-003`...)
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

### 📱 14.3. Telegram Bot Komutları Tablosu:

| Komut | Açıklama | Örnek Kullanım |
| :--- | :--- | :--- |
| **`/giris [şifre]`** | Yönetici oturumu açar | `/giris hilal1976` |
| **`/ekle`** | 6 adımlı hızlı ürün ekleme sihirbazını başlatır | `/ekle` |
| **`/sil [ID]`** | Ürünü siler, sayaç sırasını korur | `/sil AVZ-003` |
| **`/urun [ID/İsim]`** | Ürün fotoğrafını ve özelliklerini getirir | `/urun AVZ-001` |
| **`/liste`** | Yayındaki tüm ürünleri ve ID'lerini döker | `/liste` |
| **`/iptal`** | Yarıda kalan işlemi tamamen temizler ve sıfırlar | `/iptal` |
| **`/durum`** | Oturum ve sistem bağlantı durumunu gösterir | `/durum` |
| **`/yardim`** | Tüm komut listesini ve ipuçlarını gösterir | `/yardim` |
| **`/cikis`** | Oturumu kapatır ve botu kilitler | `/cikis` |

---

### 📸 14.4. Sadeleştirilmiş 6 Adımlı Hızlı Ürün Ekleme Sihirbazı (`/ekle`):

Bota **/ekle** yazdığınızda bot sizinle konuşarak sırayla şu **6 temel bilgiyi** sorar:

1. 📸 **1. Adım (Fotoğraf):** Ürünün fotoğrafını bota gönderin.
2. 📂 **2. Adım (Kategori / Tür):** Listeden rakamı seçin (Örn: `1` = Avize).
   * 🆔 *Bot bu adımda sıradaki benzersiz ID'yi (Örn: `AVZ-004`) otomatik üretir.*
3. 🏷️ **3. Adım (Ürün Adı):** Ürünün adını yazın (Örn: `Venedik Gold Kristal Avize`).
4. 🎨 **4. Adım (Tarzı):** `1` (Klasik), `2` (Modern) veya `3` (Minimalist) yazın.
5. 📐 **5. Adım (Boyutlar):** Ölçüleri yazın (Örn: `Çap: 60 cm, Yükseklik: 80 cm`).
6. 💡 **6. Adım (Aydınlatma / Duy):** Işık tipini yazın (Örn: `8x E14 LED Kandil Duy`).

> [!NOTE]
> **Hızlı Akış:** Gereksiz zaman kaybını önlemek için malzeme, uzun açıklama ve madde madde özellik girme zorunluluğu kaldırılmıştır. 6. adımı yazdığınız anda ürün sitenizde canlıya geçer!

---

### 📢 14.5. Özel Telegram Kanalı & Çoklu Yönetici Canlı Yayın Sistemi:
* Ekip üyelerinizin ne yaptığını tek bir ekrandan görmesi için **"Hilal Ürün Yönetim Sistemi"** kanalınıza canlı yayın bağlanmıştır.
* **Kanalı Bota Bağlama (Tek Seferlik):**
  1. Botu kanalınıza **Yönetici (Admin)** olarak ekleyin.
  2. Kanalın içine girip bir kez **/giris hilal1976** veya **/bagla** yazın.
* **Sonuç:** Siz veya diğer yöneticiler özelden ürün eklediğinde veya sildiğinde, ürünün fotoğrafı, kimin eklediği ve web linki anında bu kanala otomatik canlı bildirim olarak düşer!

---

### 🗑️ 14.6. Ürün Silme ve ID Sırası Koruma Mantığı (`/sil`):
* Bir ürünü silmek için: `/sil AVZ-005`
* **Sayaç Koruması:** `AVZ-005` silinse bile sayaç geri sarmaz. Yeni bir avize eklediğinizde sistem **`AVZ-006`** numarasından devam eder. Böylece geçmiş kayıtlar ve siparişler asla karışmaz.

---

## 5. GÖRSEL VE FOTOĞRAF YÖNETİMİ

* **Telegram ile Yüklenenler:** Telegram'dan gönderdiğiniz ürün fotoğrafları sistem tarafından otomatik işlenir ve sitenizde hemen görüntülenir.
* **Manuel Dosya Yüklemeleri:**
  * Ürün Görselleri: `/public/images/` klasörüne `800x800_urun_adi.jpg` formatında kaydedilir.
  * Banner Görselleri: `1920x1080_hero_showroom.jpg` formatında olmalıdır.

---

## 6. ŞUBELER, YETKİLİLER VE İLETİŞİM BİLGİLERİ

Telefon, adres veya yetkili değiştirmek için `/src/data/company.ts` dosyasını açıp ilgili satırı düzenlemeniz yeterlidir:

```typescript
// /src/data/company.ts
export const COMPANY_DATA = {
  name: "Hilal Elektrik Avize Aksesuar",
  siteUrl: "https://hilalavize-five.vercel.app",
  branches: [
    {
      id: "showroom",
      name: "Hilal Avize & Aksesuar Showroom",
      address: "Yirmiikigün Mah. Şehit Polis Ali Mülazımoğlu Cad. No:24/A Onikişubat / KAHRAMANMARAŞ",
      // ...
    }
  ]
};
```

---

## 7. KATEGORİLER VE VİTRİN YÖNETİMİ (DİNAMİK SAYAÇLAR)

Sitedeki tüm kategori sayfaları (`/kategori/[slug]`) ve koleksiyonlar vitrini (`/koleksiyonlar`) **canlı ve dinamik** çalışır.
* Eklenen yeni ürünler ilgili kategoride anında belirir.
* Sayfa üstündeki **"X Model Teşhirde / Listeleniyor"** sayaçları yayındaki ürün sayısına göre otomatik artar veya azalır.

---

## 8. HİZMETLER, SSS VE MÜŞTERİ YORUMLARI

* **Hizmetler:** `/src/data/services.ts`
* **Sıkça Sorulan Sorular:** `/src/data/faqs.ts`
* **Müşteri Yorumları:** `/src/data/reviews.ts`

> [!IMPORTANT]
> **Terminoloji Kuralı:** Sitemizde ve hizmetlerimizde asla "ücretsiz montaj" ibaresi kullanılmaz; daima **"Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"** ifadesi yer alır.

---

## 9. YEREL SEO VE GOOGLE İNDEKSLEME

Siteniz Google arama motorunda Kahramanmaraş aramalarında en üstte çıkacak şekilde yapılandırılmıştır:
* `sitemap.xml` ve `robots.txt` otomatik üretilir.
* Schema.org `LocalBusiness` ve `Product` zengin snippet etiketleri her ürün ve şube sayfasında mevcuttur.

---

## 10. BİLGİSAYARINIZDA TEST ETME (LOCALHOST)

Terminalden sitenizi bilgisayarınızda çalıştırmak için:

```bash
cd /home/onur/hilalavize
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresini açarak canlı önizleyebilirsiniz.

---

## 11. DEĞİŞİKLİKLERİ VERCEL İLE CANLIYA ALMA (GIT & PUSH)

Kodlarda bir değişiklik yaptığınızda sitenizi canlıya aktarmak için terminalden sırasıyla şu komutları girin:

```bash
cd /home/onur/hilalavize
git add .
git commit -m "feat: yeni guncellemeler yapildi"
git push origin main
```

*(Push ettiğiniz anda Vercel otomatik olarak ~20 saniyede sitenizi derler ve tüm dünyaya yayınlar).*

---

## 12. HATA ÖNLEME VE KOD GÜVENLİĞİ

Kodları canlıya göndermeden önce tam doğrulama yapmak için:

```bash
npm run check
```

Bu komut **ESLint + TypeScript tip kontrolü + Next.js build** adımlarını test eder ve 0 hata ile geçtiğinde projenizin kusursuz olduğunu garanti eder.
