# 📦 HİLAL AVİZE — KATEGORİ BAZLI ÜRÜN & ÇOKLU FOTOĞRAF YÖNETİM MERKEZİ

Tüm ürünler kategorilerine ayrılmış klasörlerde saklanır. Artık karmaşık ID'lerle uğraşmanıza gerek yok; **10, 11, 20, 21, 100, 101** gibi kolay rakamlarla istediğiniz kadar fotoğraf ekleyebilirsiniz!

---

## 📂 KATEGORİ KLASÖRLERİ YAPISI

```text
products/
├── avizeler/
│   ├── photo/            🖼️ 10.jpg (1. ürün kapak), 11.jpg (1. ürün 2. foto), 20.jpg (2. ürün)...
│   └── urunler.json      📄 Avize modellerinin listesi
├── aplikler/
│   ├── photo/            🖼️ 10.jpg, 11.jpg, 20.jpg...
│   └── urunler.json
├── spot-ve-ray-spot/
│   ├── photo/
│   └── urunler.json
├── abajur-ve-lambader/
│   ├── photo/
│   └── urunler.json
├── dekoratif-aynalar/
│   ├── photo/
│   └── urunler.json
├── duvar-ve-masa-saatleri/
│   ├── photo/
│   └── urunler.json
├── cam-sus-esyalari/
│   ├── photo/
│   └── urunler.json
├── anahtar-ve-priz-serileri/
│   ├── photo/
│   └── urunler.json
├── dekoratif-koltuk-ve-berjerler/
│   ├── photo/
│   └── urunler.json
└── dekoratif-sehpalar/
    ├── photo/
    └── urunler.json
```

---

## 📸 FOTOĞRAF NUMARALANDIRMA MANTIĞI

Her kategori klasöründeki `photo/` dizinine fotoğrafları atarken şu basit kuralı kullanın:

* **1. Ürün İçin:**
  * 1. Fotoğraf (Kapak): **`10.jpg`**
  * 2. Fotoğraf (Detay): **`11.jpg`**
  * 3. Fotoğraf (Açı): **`12.jpg`**
* **2. Ürün İçin:**
  * 1. Fotoğraf (Kapak): **`20.jpg`**
  * 2. Fotoğraf (Detay): **`21.jpg`**
  * 3. Fotoğraf (Açı): **`22.jpg`**
* **3. Ürün İçin:**
  * 1. Fotoğraf (Kapak): **`30.jpg`**
  * 2. Fotoğraf (Detay): **`31.jpg`**
* **10. Ürün İçin:**
  * 1. Fotoğraf (Kapak): **`100.jpg`**
  * 2. Fotoğraf (Detay): **`101.jpg`**

*(Sadece tek fotoğraf varsa `10.jpg` veya `20.jpg` koymanız yeterlidir. Birden fazla fotoğraf koyarsanız sitede otomatik galeri ve küçük önizleme kutucukları açılır).*

---

## 📝 `urunler.json` DOSYASINA ÜRÜN EKLEME ŞABLONU

İlgili kategorinin `urunler.json` dosyasını açıp listenin içine şu şablonu ekleyin:

```json
  {
    "no": 1,
    "name": "Padişah 24 Kollu Asfour Kristal Saray Avizesi",
    "dimensions": "Çap: 120 cm, Yükseklik: 140 cm",
    "lightingType": "24x E14 Duy (LED Uyumlu)",
    "badge": "Özel Tasarım Koleksiyon",
    "shortDescription": "Ağır döküm gövde ve berrak kristal prizmalarla donatılmış saray zarafeti."
  }
```

---

## 💡 AKILLI OTOMATİK DOLDURMA (ZAMAN KAZANDIRAN ÖZELLİK)
* **İsim Yazmazsanız:** Otomatik olarak `"Dekoratif Modern LED Avize - Model X"` gibi şık ve SEO uyumlu bir isim atanır.
* **Ölçü Yazmazsanız:** Otomatik olarak `"Ayarlanabilir Yükseklik / Standart Ölçü"` atanır.
* **Aydınlatma Yazmazsanız:** Otomatik olarak `"Dahili LED / E14-E27 Uyumlu"` atanır.
* *(Yani sadece fotoğrafı atıp `{"no": 25}` yazmanız bile ürünü canlıya almak için yeterlidir!)*

---

## 🚀 3 ADIMDA CANLIYA ALMA

1. Fotoğrafları `products/[kategori]/photo/` klasörüne atın (`10.jpg`, `11.jpg` vb.).
2. `products/[kategori]/urunler.json` dosyasına ürün bilgilerini yazın (`"no": 1`).
3. Terminalden pushlayın:
   ```bash
   git add .
   git commit -m "feat: yeni urunler eklendi"
   git push origin main
   ```
