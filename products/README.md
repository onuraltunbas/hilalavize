# 📦 HİLAL AVİZE — YENİ ÜRÜN EKLEME & YÖNETİM MERKEZİ

Bu klasör (`products/`), web sitenize **en kolay ve en hızlı** şekilde yeni ürün eklemeniz için tasarlanmıştır.

---

## ⚡ 3 ADIMDA YENİ ÜRÜN EKLEME

### 📸 1. Adım: Fotoğrafı Yükleyin
* Ürününüzün fotoğrafını `products/photo/` klasörüne atın.
* Fotoğrafın adını ürünün **ID numarası** yapın (Örn: `AVZ-003.jpg`, `APL-002.png`, `AYN-002.webp`).

---

### 📝 2. Adım: Ürün Bilgilerini Yazın
* `products/products.json` dosyasını açın.
* En alta (veya istediğiniz sıraya) aşağıdaki şablonu kopyalayıp bilgileri doldurun:

```json
  {
    "id": "AVZ-003",
    "name": "Kapadokya Bal Kristal Sarkıt Avize",
    "category": "avizeler",
    "style": "İhtişamlı & Klasik",
    "dimensions": "Çap: 80 cm, Yükseklik: 110 cm",
    "lightingType": "12x E14 LED Duy",
    "material": "Döküm Pirinç & Bal Rengi Kristal Taşlar",
    "badge": "Yeni Sezon",
    "shortDescription": "Özel bal köpüğü kristal taşlar ve altın kaplama gövdesiyle lüks salon avizesi."
  }
```

---

### 🚀 3. Adım: Değişiklikleri Canlıya Alın (Git & Push)
Terminalden şu 3 komutu yazıp GitHub'a yükleyin:

```bash
git add .
git commit -m "feat: yeni urunler eklendi"
git push origin main
```

*(Push ettiğiniz anda Vercel ~20 saniye içinde siteyi otomatik günceller ve yeni ürün sitenizde yayına girer!)*

---

## 🏷️ KATEGORİ & ID KODLARI TABLOSU

| ID Ön Eki | Kategori Adı | `category` Değeri | Otomatik Şube |
| :--- | :--- | :--- | :--- |
| **`AVZ-`** | Lüks & Modern Avizeler | `"avizeler"` | Showroom |
| **`APL-`** | Dekoratif Duvar Aplikleri | `"aplikler"` | Showroom |
| **`SPT-`** | Spot & Manyetik Ray Spot Sistemleri | `"spot-ve-ray-spot"` | Elektrik Şubesi |
| **`ABJ-`** | Abajur & Lambader Koleksiyonu | `"abajur-ve-lambader"` | Showroom |
| **`AYN-`** | Dekoratif & Akıllı LED Aynalar | `"dekoratif-aynalar"` | Showroom |
| **`DST-`** | Özel Tasarım Duvar & Masa Saatleri | `"duvar-ve-masa-saatleri"` | Showroom |
| **`SUS-`** | Cam Sanat & Süs Eşyaları | `"cam-sus-esyalari"` | Showroom |
| **`ANH-`** | Lüks Anahtar & Priz Serileri | `"anahtar-ve-priz-serileri"` | Elektrik Şubesi |
| **`KOL-`** | Dekoratif Koltuk & Berjerler | `"dekoratif-koltuk-ve-berjerler"` | Showroom |
| **`SEH-`** | Dekoratif Mermer & Bronz Sehpalar | `"dekoratif-sehpalar"` | Showroom |

---

## 🎨 TARZ SEÇENEKLERİ (`style`)
Aşağıdaki 3 seçenekten birini yazabilirsiniz:
1. `"İhtişamlı & Klasik"`
2. `"Modern & Spor"`
3. `"Sade & Minimalist"`

---

## 💡 İPUÇLARI & ÖZELLİKLER
* **Otomatik SEO:** Ürün adınıza göre Google SEO başlıkları ve açıklamaları otomatik hazırlanır.
* **Otomatik Link (Slug):** Ürün adınıza göre web adresi (`/urun/urun-adi`) otomatik oluşturulur.
* **Otomatik Fotoğraf Eşleşmesi:** Fotoğraf dosya uzantınız `.jpg`, `.jpeg`, `.png` veya `.webp` olabilir; sistem ID'ye göre fotoğrafı otomatik bulur ve bağlar.
* **Fotoğraf Yoksa:** Fotoğraf yüklenmemişse bile site hata vermez, ait olduğu kategorinin şık varsayılan görselini otomatik gösterir.
