# 📦 HİLAL AVİZE — KATEGORİ BAZLI ÜRÜN & ÇOKLU FOTOĞRAF YÖNETİM MERKEZİ

Tüm ürünler kategorilerine ayrılmış klasörlerde saklanır. Artık karmaşık ID'lerle uğraşmanıza gerek yok; **10, 11, 20, 21, 100, 101** gibi kolay rakamlarla istediğiniz kadar fotoğraf ekleyebilirsiniz!

---

## 📂 YENİ KATEGORİ KLASÖRLERİ YAPISI

```text
products/
├── kategorisiz/          📦 YENİ EKLENEN TÜM AVİZELER (Ana Havuz)
│   ├── photo/            🖼️ 10.jpg, 11.jpg, 20.jpg, 30.jpg...
│   └── urunler.json      📄 Modellerin listesi (no: 1, no: 2...)
├── klasik/               👑 1. Klasik (Maria Theresa, Baccarat, Kollu & Taşlı)
│   ├── photo/            🖼️ 10.jpeg (580), 20.jpeg (590), 30.jpeg (600), 40.jpeg (610)...
│   └── urunler.json
├── ledli-grup/           ⚡ 2. LED'li Grup
│   ├── photo/
│   └── urunler.json
├── metal-grup/           🔩 3. Metal Grup
│   ├── photo/
│   └── urunler.json
├── aplik-ve-spotlar/     💡 4. Aplik & Spot Aydınlatma (Duvar Aplikleri + Ray/Gömme Spotlar)
│   ├── photo/
│   └── urunler.json
├── aksesuar/             🏺 5. Aksesuar (El yapımı çini, İthal aksesuarlar)
│   ├── photo/
│   └── urunler.json
└── yerli-urunler/        🇹🇷 6. Yerli Üretim Aydınlatma Koleksiyonu
    ├── photo/
    └── urunler.json
```

> **📌 Bilgi:** Yeni bir görsel ekleyeceğinizde aksini belirtmediğiniz sürece fotoğrafları ve bilgileri `products/kategorisiz/` klasörüne ekleyebilirsiniz!

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
