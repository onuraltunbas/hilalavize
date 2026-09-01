// BU DOSYA OTOMATİK OLUŞTURULMAKTADIR.
// Ürün eklemek için 'products/[kategori]/urunler.json' dosyasını ve 'products/[kategori]/photo/' klasörünü kullanınız.

export interface Product {
  id: string;
  code: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  badge?: string;
  subcategory?: string;
  description: string;
  shortDescription: string;
  dimensions: string;
  lightingType: string;
  branch: "showroom" | "electrical";
  image: string;
  images: string[];
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "KLS-001",
    "code": "HL-KLS-001",
    "slug": "maria-theresa-klasik-cam-giydirmeli-kristal-saray-avizesi",
    "name": "Maria Theresa Klasik Cam Giydirmeli Kristal Saray Avizesi",
    "categorySlug": "klasik",
    "categoryName": "Klasik Avizeler",
    "badge": "Maria Theresa Ailesi",
    "subcategory": "Maria Theresa",
    "description": "Maria Theresa Klasik Cam Giydirmeli Kristal Saray Avizesi, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 90 cm ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Cam giydirmeli kıvrımlı kolları, altın rozet detayları ve parıltılı kristal prizmalarıyla görkemli Maria Theresa saray avizesi.",
    "dimensions": "Çap: 90 cm",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/klasik/photo/10.jpeg",
    "images": [
      "/products/klasik/photo/10.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Çap: 90 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Maria Theresa Klasik Cam Giydirmeli Kristal Saray Avizesi Kahramanmaraş | Hilal Avize",
    "seoDescription": "Maria Theresa Klasik Cam Giydirmeli Kristal Saray Avizesi modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "KLS-002",
    "code": "HL-KLS-002",
    "slug": "maria-theresa-cok-kollu-asil-kristal-avize",
    "name": "Maria Theresa Çok Kollu Asil Kristal Avize",
    "categorySlug": "klasik",
    "categoryName": "Klasik Avizeler",
    "badge": "Maria Theresa Ailesi",
    "subcategory": "Maria Theresa",
    "description": "Maria Theresa Çok Kollu Asil Kristal Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 90 cm ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "İhtişamlı cam kase göbeği, berrak kristal sarkıt taşları ve E14 kandil aydınlatmasıyla salonunuza saray zarafeti katar.",
    "dimensions": "Çap: 90 cm",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/klasik/photo/20.jpeg",
    "images": [
      "/products/klasik/photo/20.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Çap: 90 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Maria Theresa Çok Kollu Asil Kristal Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Maria Theresa Çok Kollu Asil Kristal Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "KLS-003",
    "code": "HL-KLS-003",
    "slug": "maria-theresa-ihtisamli-kristal-salon-avizesi",
    "name": "Maria Theresa İhtişamlı Kristal Salon Avizesi",
    "categorySlug": "klasik",
    "categoryName": "Klasik Avizeler",
    "badge": "Maria Theresa Ailesi",
    "subcategory": "Maria Theresa",
    "description": "Maria Theresa İhtişamlı Kristal Salon Avizesi, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 90 cm ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Geniş hacimli şaşalı kristal dizilimi, özel cam rozetleri ve yüksek ışık kapasitesiyle seçkin mekanlar için tasarlandı.",
    "dimensions": "Çap: 90 cm",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/klasik/photo/30.jpeg",
    "images": [
      "/products/klasik/photo/30.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Çap: 90 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Maria Theresa İhtişamlı Kristal Salon Avizesi Kahramanmaraş | Hilal Avize",
    "seoDescription": "Maria Theresa İhtişamlı Kristal Salon Avizesi modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "KLS-004",
    "code": "HL-KLS-004",
    "slug": "baccarat-prizmatik-agir-kesme-kristal-luks-avize",
    "name": "Baccarat Prizmatik Ağır Kesme Kristal Lüks Avize",
    "categorySlug": "klasik",
    "categoryName": "Klasik Avizeler",
    "badge": "Baccarat Ailesi",
    "subcategory": "Baccarat",
    "description": "Baccarat Prizmatik Ağır Kesme Kristal Lüks Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 90 cm ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ağır döküm kalın kesme kristal kolları, kusursuz ışık kırılımları ve E14 kandil duylarıyla lüksün ve asaletin simgesi Baccarat avize.",
    "dimensions": "Çap: 90 cm",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/klasik/photo/40.jpeg",
    "images": [
      "/products/klasik/photo/40.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Çap: 90 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Baccarat Prizmatik Ağır Kesme Kristal Lüks Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Baccarat Prizmatik Ağır Kesme Kristal Lüks Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "LED-001",
    "code": "HL-LED-001",
    "slug": "modern-geometrik-cubuk-led-sarkit-avize-l1000h1500",
    "name": "Modern Geometrik Çubuk LED Sarkıt Avize (L1000*H1500)",
    "categorySlug": "ledli-grup",
    "categoryName": "LED'li Avizeler",
    "badge": "Modern LED Seri",
    "description": "Modern Geometrik Çubuk LED Sarkıt Avize (L1000*H1500), Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Uzunluk: 100 cm / Yükseklik: 150 cm (L1000*H1500mm) ölçüleri, Dahili Yüksek Verimli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "L1000*H1500mm ebatlarında dinamik çapraz çubuk tasarımı ve kristal uçlu LED aydınlatmasıyla salon ve yemek masaları için tasarlanmış lüks LED avize.",
    "dimensions": "Uzunluk: 100 cm / Yükseklik: 150 cm (L1000*H1500mm)",
    "lightingType": "Dahili Yüksek Verimli LED Modülü",
    "branch": "showroom",
    "image": "/products/ledli-grup/photo/10.png",
    "images": [
      "/products/ledli-grup/photo/10.png"
    ],
    "features": [
      "Dahili Yüksek Verimli LED Modülü",
      "Uzunluk: 100 cm / Yükseklik: 150 cm (L1000*H1500mm)",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Geometrik Çubuk LED Sarkıt Avize (L1000*H1500) Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Geometrik Çubuk LED Sarkıt Avize (L1000*H1500) modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-001",
    "code": "HL-TKL-001",
    "slug": "dekoratif-tekli-sarkit-avize-model-1",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 1",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 1, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 1.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/10.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/10.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 1 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 1 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-002",
    "code": "HL-TKL-002",
    "slug": "dekoratif-tekli-sarkit-avize-model-2",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 2",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 2, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 2.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/20.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/20.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 2 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 2 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-003",
    "code": "HL-TKL-003",
    "slug": "dekoratif-tekli-sarkit-avize-model-3",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 3",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 3, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 3.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/30.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/30.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 3 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 3 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-004",
    "code": "HL-TKL-004",
    "slug": "dekoratif-tekli-sarkit-avize-model-4",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 4",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 4, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 4.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/40.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/40.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 4 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 4 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-005",
    "code": "HL-TKL-005",
    "slug": "dekoratif-tekli-sarkit-avize-model-5",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 5",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 5, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 5.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/50.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/50.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 5 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 5 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "TKL-006",
    "code": "HL-TKL-006",
    "slug": "dekoratif-tekli-sarkit-avize-model-6",
    "name": "Dekoratif Tekli Sarkıt Avize - Model 6",
    "categorySlug": "tekli-avizeler",
    "categoryName": "Tekli Avizeler & Sarkıtlar",
    "badge": "Tekli Sarkıt",
    "description": "Dekoratif Tekli Sarkıt Avize - Model 6, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Ada üstü, mutfak masası ve antreler için şık tasarımlı, E27 duylu dekoratif tekli sarkıt avize Model 6.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/tekli-avizeler/photo/60.jpeg",
    "images": [
      "/products/tekli-avizeler/photo/60.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tekli Sarkıt Avize - Model 6 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tekli Sarkıt Avize - Model 6 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-001",
    "code": "HL-ASP-001",
    "slug": "modern-dekoratif-led-duvar-apligi-model-1",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 1",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 1, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 1.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/10.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/10.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 1 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 1 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-002",
    "code": "HL-ASP-002",
    "slug": "modern-dekoratif-led-duvar-apligi-model-2",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 2",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 2, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 2.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/20.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/20.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 2 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 2 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-003",
    "code": "HL-ASP-003",
    "slug": "modern-dekoratif-led-duvar-apligi-model-3",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 3",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 3, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 3.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/30.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/30.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 3 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 3 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-004",
    "code": "HL-ASP-004",
    "slug": "modern-dekoratif-led-duvar-apligi-model-4",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 4",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 4, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 4.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/40.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/40.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 4 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 4 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-005",
    "code": "HL-ASP-005",
    "slug": "modern-dekoratif-led-duvar-apligi-model-5",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 5",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 5, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 5.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/50.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/50.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 5 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 5 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-006",
    "code": "HL-ASP-006",
    "slug": "modern-dekoratif-led-duvar-apligi-model-6",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 6",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 6, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 6.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/60.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/60.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 6 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 6 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-007",
    "code": "HL-ASP-007",
    "slug": "modern-dekoratif-led-duvar-apligi-model-7",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 7",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 7, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 7.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/70.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/70.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 7 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 7 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-008",
    "code": "HL-ASP-008",
    "slug": "modern-dekoratif-led-duvar-apligi-model-8",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 8",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 8, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 8.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/80.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/80.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 8 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 8 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-009",
    "code": "HL-ASP-009",
    "slug": "modern-dekoratif-led-duvar-apligi-model-9",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 9",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 9, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 9.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/90.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/90.jpeg",
      "/products/aplik-ve-spotlar/photo/91.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 9 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 9 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-010",
    "code": "HL-ASP-010",
    "slug": "modern-dekoratif-led-duvar-apligi-model-10",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 10",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 10, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 10.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/10.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/10.jpeg",
      "/products/aplik-ve-spotlar/photo/100.jpeg",
      "/products/aplik-ve-spotlar/photo/101.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 10 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 10 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-011",
    "code": "HL-ASP-011",
    "slug": "modern-dekoratif-led-duvar-apligi-model-11",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 11",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 11, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 11.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/110.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/110.jpeg",
      "/products/aplik-ve-spotlar/photo/111.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 11 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 11 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-012",
    "code": "HL-ASP-012",
    "slug": "modern-dekoratif-led-duvar-apligi-model-12",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 12",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 12, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 12.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/120.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/120.jpeg",
      "/products/aplik-ve-spotlar/photo/121.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 12 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 12 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-013",
    "code": "HL-ASP-013",
    "slug": "modern-dekoratif-led-duvar-apligi-model-13",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 13",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 13, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 13.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/130.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/130.jpeg",
      "/products/aplik-ve-spotlar/photo/131.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 13 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 13 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-014",
    "code": "HL-ASP-014",
    "slug": "modern-dekoratif-led-duvar-apligi-model-14",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 14",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 14, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 14.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/140.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/140.jpeg",
      "/products/aplik-ve-spotlar/photo/141.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 14 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 14 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-015",
    "code": "HL-ASP-015",
    "slug": "modern-dekoratif-led-duvar-apligi-model-15",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 15",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 15, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 15.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/150.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/150.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 15 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 15 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "ASP-016",
    "code": "HL-ASP-016",
    "slug": "modern-dekoratif-led-duvar-apligi-model-16",
    "name": "Modern Dekoratif LED Duvar Apliği - Model 16",
    "categorySlug": "aplik-ve-spotlar",
    "categoryName": "Aplik & Spot Aydınlatma",
    "badge": "LED Duvar Apliği",
    "description": "Modern Dekoratif LED Duvar Apliği - Model 16, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Standart Duvar Ölçüsü ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Salon, antre, koridor ve yatak başı için zarif ışık hüzmesi sunan, enerji tasarruflu modern LED duvar apliği Model 16.",
    "dimensions": "Standart Duvar Ölçüsü",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/aplik-ve-spotlar/photo/160.jpeg",
    "images": [
      "/products/aplik-ve-spotlar/photo/160.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Standart Duvar Ölçüsü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Dekoratif LED Duvar Apliği - Model 16 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Dekoratif LED Duvar Apliği - Model 16 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-001",
    "code": "HL-AVZ-001",
    "slug": "maxira-modern-led-sarkit-avize",
    "name": "Maxira Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Yeni Sezon",
    "description": "Maxira Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 80 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "80 cm geniş çapı ve yüksek ışık verimiyle salon ve yemek masaları için tasarlanmış modern LED avize.",
    "dimensions": "Çap: 80 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/10.jpeg",
    "images": [
      "/products/kategorisiz/photo/10.jpeg",
      "/products/kategorisiz/photo/11.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 80 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Maxira Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Maxira Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-002",
    "code": "HL-AVZ-002",
    "slug": "renvio-gold-led-sarkit-avize",
    "name": "Renvio Gold LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Popüler Model",
    "description": "Renvio Gold LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında şık gold gövdeli ve homojen ışık yayan modern LED sarkıt avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/20.jpeg",
    "images": [
      "/products/kategorisiz/photo/20.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Renvio Gold LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Renvio Gold LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-003",
    "code": "HL-AVZ-003",
    "slug": "carvella-lineer-led-avize",
    "name": "Carvella Lineer LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Büyük Boy Seri",
    "description": "Carvella Lineer LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. 180 x 35 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "180x35 cm uzun formuyla geniş ada tezgahları ve uzun yemek masaları için mimari lineer avize.",
    "dimensions": "180 x 35 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/30.jpeg",
    "images": [
      "/products/kategorisiz/photo/30.jpeg",
      "/products/kategorisiz/photo/31.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "180 x 35 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Carvella Lineer LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Carvella Lineer LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-004",
    "code": "HL-AVZ-004",
    "slug": "carvella-kompakt-lineer-led-avize",
    "name": "Carvella Kompakt Lineer LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Yeni Model",
    "description": "Carvella Kompakt Lineer LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. 120 x 35 cm ölçüleri, Dahili LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "120x35 cm ideal ebadıyla mutfak adaları ve modern salonlar için minimalist lineer avize.",
    "dimensions": "120 x 35 cm",
    "lightingType": "Dahili LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/40.jpeg",
    "images": [
      "/products/kategorisiz/photo/40.jpeg",
      "/products/kategorisiz/photo/41.jpeg"
    ],
    "features": [
      "Dahili LED Modülü",
      "120 x 35 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Carvella Kompakt Lineer LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Carvella Kompakt Lineer LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-005",
    "code": "HL-AVZ-005",
    "slug": "sevona-dairesel-led-sarkit-avize",
    "name": "Sevona Dairesel LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Sevona Dairesel LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında dairesel akıcı formu ve yumuşak ışık dağılımıyla ferah mekanlar oluşturan LED avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/50.jpeg",
    "images": [
      "/products/kategorisiz/photo/50.jpeg",
      "/products/kategorisiz/photo/51.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Sevona Dairesel LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Sevona Dairesel LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-006",
    "code": "HL-AVZ-006",
    "slug": "addo-buyuk-boy-led-sarkit-avize",
    "name": "Addo Büyük Boy LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Geniş Salonlar İçin",
    "description": "Addo Büyük Boy LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 90 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "90 cm dev çapı ve estetik halka tasarımıyla yüksek tavanlı salonlara prestij katan LED avize.",
    "dimensions": "Çap: 90 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/60.jpeg",
    "images": [
      "/products/kategorisiz/photo/60.jpeg",
      "/products/kategorisiz/photo/61.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 90 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Addo Büyük Boy LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Addo Büyük Boy LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-007",
    "code": "HL-AVZ-007",
    "slug": "addo-modern-led-sarkit-avize",
    "name": "Addo Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Addo Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında kompakt ve zarif tasarımıyla oturma odaları ve salonlar için ideal aydınlatma.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/70.jpeg",
    "images": [
      "/products/kategorisiz/photo/70.jpeg",
      "/products/kategorisiz/photo/71.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Addo Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Addo Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-008",
    "code": "HL-AVZ-008",
    "slug": "trivon-uclu-tasarim-led-sarkit-avize",
    "name": "Trivon Üçlü Tasarım LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Tasarım Seri",
    "description": "Trivon Üçlü Tasarım LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında mimari açılı formuyla mekana derinlik kazandıran özel tasarım LED avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/80.jpeg",
    "images": [
      "/products/kategorisiz/photo/80.jpeg",
      "/products/kategorisiz/photo/81.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Trivon Üçlü Tasarım LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Trivon Üçlü Tasarım LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-009",
    "code": "HL-AVZ-009",
    "slug": "trivon-kristal-vurgulu-led-sarkit-avize",
    "name": "Trivon Kristal Vurgulu LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Trivon Kristal Vurgulu LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında ışığı kıran özel difüzör camı ve yüksek ışık gücüne sahip modern avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/90.jpeg",
    "images": [
      "/products/kategorisiz/photo/90.jpeg",
      "/products/kategorisiz/photo/91.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Trivon Kristal Vurgulu LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Trivon Kristal Vurgulu LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-010",
    "code": "HL-AVZ-010",
    "slug": "operis-geometrik-led-sarkit-avize",
    "name": "Operis Geometrik LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Operis Geometrik LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında geometrik hatları ve göz alıcı parlaklığıyla modern konutların vazgeçilmez modeli.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/10.jpeg",
    "images": [
      "/products/kategorisiz/photo/10.jpeg",
      "/products/kategorisiz/photo/100.jpeg",
      "/products/kategorisiz/photo/101.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Operis Geometrik LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Operis Geometrik LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-011",
    "code": "HL-AVZ-011",
    "slug": "minvex-modern-led-sarkit-avize",
    "name": "Minvex Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Minvex Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında minimalist profili ve enerji tasarruflu yüksek parlaklık sunan LED avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/11.jpeg",
    "images": [
      "/products/kategorisiz/photo/11.jpeg",
      "/products/kategorisiz/photo/110.jpeg",
      "/products/kategorisiz/photo/111.jpeg"
    ],
    "features": [
      "Dahili 3 Renk LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Minvex Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Minvex Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-012",
    "code": "HL-AVZ-012",
    "slug": "avsira-luks-led-sarkit-avize",
    "name": "Avsıra Lüks LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Lüks Koleksiyon",
    "description": "Avsıra Lüks LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 75 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "75 cm geniş çapıyla salonunuzun merkezinde ışıltılı bir odak noktası oluşturan lüks LED avize.",
    "dimensions": "Çap: 75 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/120.jpeg",
    "images": [
      "/products/kategorisiz/photo/120.jpeg",
      "/products/kategorisiz/photo/121.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 75 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Avsıra Lüks LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Avsıra Lüks LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-013",
    "code": "HL-AVZ-013",
    "slug": "seralya-zarif-led-sarkit-avize",
    "name": "Seralya Zarif LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Seralya Zarif LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 65 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "65 cm çapında estetik kıvrımları ve gözü yormayan sıcak amber ışığıyla zarif bir avize modeli.",
    "dimensions": "Çap: 65 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/130.jpeg",
    "images": [
      "/products/kategorisiz/photo/130.jpeg",
      "/products/kategorisiz/photo/131.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 65 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Seralya Zarif LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Seralya Zarif LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-014",
    "code": "HL-AVZ-014",
    "slug": "porenya-dalgali-led-sarkit-avize",
    "name": "Porenya Dalgalı LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Özel Tasarım",
    "description": "Porenya Dalgalı LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 75 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "75 cm çapında organik dalgalı formuyla modern dekorasyonlara dinamizm katan heykelsi LED avize.",
    "dimensions": "Çap: 75 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/140.jpeg",
    "images": [
      "/products/kategorisiz/photo/140.jpeg",
      "/products/kategorisiz/photo/141.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 75 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Porenya Dalgalı LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Porenya Dalgalı LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-015",
    "code": "HL-AVZ-015",
    "slug": "ekerd-mimari-led-sarkit-avize",
    "name": "Ekerd Mimari LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Ekerd Mimari LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 80 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "80 cm çapında güçlü aydınlatma performansı ve fırçalanmış gövde kalitesiyle üst segment avize.",
    "dimensions": "Çap: 80 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/150.jpeg",
    "images": [
      "/products/kategorisiz/photo/150.jpeg",
      "/products/kategorisiz/photo/151.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 80 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Ekerd Mimari LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Ekerd Mimari LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-016",
    "code": "HL-AVZ-016",
    "slug": "orvella-buyuk-boy-led-avize",
    "name": "Orvella Büyük Boy LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Çok Satan",
    "description": "Orvella Büyük Boy LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 85 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "85 cm geniş çapıyla büyük metrekareli salonlar ve villalar için tasarlanmış görkemli LED avize.",
    "dimensions": "Çap: 85 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/160.jpeg",
    "images": [
      "/products/kategorisiz/photo/160.jpeg",
      "/products/kategorisiz/photo/161.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 85 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Orvella Büyük Boy LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Orvella Büyük Boy LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-017",
    "code": "HL-AVZ-017",
    "slug": "orvella-modern-led-sarkit-avize",
    "name": "Orvella Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Orvella Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 65 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "65 cm çapında zarif ölçüleri ve ayarlanabilir askı yüksekliği ile şık salon aydınlatması.",
    "dimensions": "Çap: 65 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/170.jpeg",
    "images": [
      "/products/kategorisiz/photo/170.jpeg",
      "/products/kategorisiz/photo/171.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 65 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Orvella Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Orvella Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-018",
    "code": "HL-AVZ-018",
    "slug": "peroria-tasarim-led-sarkit-avize",
    "name": "Peroria Tasarım LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Peroria Tasarım LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapında modern ışık halkaları ve homojen parlaklığıyla çağdaş mekanlar için üretildi.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/180.jpeg",
    "images": [
      "/products/kategorisiz/photo/180.jpeg",
      "/products/kategorisiz/photo/181.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Peroria Tasarım LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Peroria Tasarım LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-019",
    "code": "HL-AVZ-019",
    "slug": "yomira-geometrik-led-sarkit-avize",
    "name": "Yomıra Geometrik LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Yomıra Geometrik LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapında estetik geometrik formuyla yaşam alanınıza modern bir sanat dokunuşu kazandırır.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/190.jpeg",
    "images": [
      "/products/kategorisiz/photo/190.jpeg",
      "/products/kategorisiz/photo/191.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Yomıra Geometrik LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Yomıra Geometrik LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-020",
    "code": "HL-AVZ-020",
    "slug": "juvex-halka-led-sarkit-avize",
    "name": "Juvex Halka LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Trend Model",
    "description": "Juvex Halka LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 80 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "80 cm çapında asil duruşu ve güçlü LED aydınlatmasıyla salonunuzu aydınlatan modern sarkıt.",
    "dimensions": "Çap: 80 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/20.jpeg",
    "images": [
      "/products/kategorisiz/photo/20.jpeg",
      "/products/kategorisiz/photo/200.jpeg",
      "/products/kategorisiz/photo/201.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 80 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Juvex Halka LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Juvex Halka LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-021",
    "code": "HL-AVZ-021",
    "slug": "serry-luks-led-sarkit-avize",
    "name": "Serry Lüks LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Serry Lüks LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapında ışıltılı detayları ve 3 farklı renk sıcaklığı seçeneğiyle lüks salon avizesi.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/210.jpeg",
    "images": [
      "/products/kategorisiz/photo/210.jpeg",
      "/products/kategorisiz/photo/211.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Serry Lüks LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Serry Lüks LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-022",
    "code": "HL-AVZ-022",
    "slug": "zevrox-kompakt-led-sarkit-avize",
    "name": "Zevrox Kompakt LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Zevrox Kompakt LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 50 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "50 cm çapında kompakt odalar, antreler ve mutfak masaları için zarif ve verimli LED avize.",
    "dimensions": "Çap: 50 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/220.jpeg",
    "images": [
      "/products/kategorisiz/photo/220.jpeg",
      "/products/kategorisiz/photo/221.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 50 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Zevrox Kompakt LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Zevrox Kompakt LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-023",
    "code": "HL-AVZ-023",
    "slug": "zevrox-buyuk-salon-led-avizesi",
    "name": "Zevrox Büyük Salon LED Avizesi",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Dev Boyut (120 cm)",
    "description": "Zevrox Büyük Salon LED Avizesi, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 120 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "120 cm devasa çapı ile villa salonları, otel lobileri ve geniş yaşam alanları için anıtsal LED avize.",
    "dimensions": "Çap: 120 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/230.jpeg",
    "images": [
      "/products/kategorisiz/photo/230.jpeg",
      "/products/kategorisiz/photo/231.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 120 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Zevrox Büyük Salon LED Avizesi Kahramanmaraş | Hilal Avize",
    "seoDescription": "Zevrox Büyük Salon LED Avizesi modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-024",
    "code": "HL-AVZ-024",
    "slug": "liria-saray-tipi-genis-led-avize",
    "name": "Liria Saray Tipi Geniş LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Premium Koleksiyon",
    "description": "Liria Saray Tipi Geniş LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 100 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "100 cm geniş çapı, çoklu ışık katmanları ve göz alıcı parlaklığıyla üst segment lüks LED avize.",
    "dimensions": "Çap: 100 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/240.jpeg",
    "images": [
      "/products/kategorisiz/photo/240.jpeg",
      "/products/kategorisiz/photo/241.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 100 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Liria Saray Tipi Geniş LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Liria Saray Tipi Geniş LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-025",
    "code": "HL-AVZ-025",
    "slug": "relvolia-modern-led-sarkit-avize",
    "name": "Relvolia Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Relvolia Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 55 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "55 cm çapında estetik halka yapısı ve 3 renk kademeli ışık moduyla modern salon ve oturma odası avizesi.",
    "dimensions": "Çap: 55 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/250.jpeg",
    "images": [
      "/products/kategorisiz/photo/250.jpeg",
      "/products/kategorisiz/photo/251.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 55 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Relvolia Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Relvolia Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-026",
    "code": "HL-AVZ-026",
    "slug": "vella-minimalist-led-sarkit-avize",
    "name": "Vella Minimalist LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Vella Minimalist LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 45 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "45 cm kompakt ebadı ve zarif kıvrımlarıyla antre, mutfak masası ve oturma köşeleri için şık LED avize.",
    "dimensions": "Çap: 45 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/260.jpeg",
    "images": [
      "/products/kategorisiz/photo/260.jpeg",
      "/products/kategorisiz/photo/261.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 45 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Vella Minimalist LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Vella Minimalist LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-027",
    "code": "HL-AVZ-027",
    "slug": "menekse-modern-led-avize",
    "name": "Menekşe Modern LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Menekşe Modern LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapında çiçek formlu modern ışık yapısıyla yaşam alanınıza ferah ve sıcak bir ambiyans katar.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/270.jpeg",
    "images": [
      "/products/kategorisiz/photo/270.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Menekşe Modern LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Menekşe Modern LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-028",
    "code": "HL-AVZ-028",
    "slug": "menekse-luks-led-avize-model-2",
    "name": "Menekşe Lüks LED Avize Model 2",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Menekşe Lüks LED Avize Model 2, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm geniş çapı, fırçalanmış gövde detayları ve homojen LED parlaklığı ile salonlar için özel seri.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/280.jpeg",
    "images": [
      "/products/kategorisiz/photo/280.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Menekşe Lüks LED Avize Model 2 Kahramanmaraş | Hilal Avize",
    "seoDescription": "Menekşe Lüks LED Avize Model 2 modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-029",
    "code": "HL-AVZ-029",
    "slug": "carles-geometrik-led-avize",
    "name": "Carles Geometrik LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Büyük Salon Modeli",
    "description": "Carles Geometrik LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 95 cm, Uzunluk: 100 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "95 cm çapı ve 100 cm ayarlanabilir uzunluğuyla yüksek tavanlı geniş salonlara mimari prestij kazandırır.",
    "dimensions": "Çap: 95 cm, Uzunluk: 100 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/290.jpeg",
    "images": [
      "/products/kategorisiz/photo/290.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 95 cm, Uzunluk: 100 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Carles Geometrik LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Carles Geometrik LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-030",
    "code": "HL-AVZ-030",
    "slug": "loya-tasarim-sarkit-avize",
    "name": "Loya Tasarım Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Loya Tasarım Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Yükseklik: 130 cm ölçüleri, E27 Standart Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "130 cm sarkıt uzunluğu ve E27 duy seçeneğiyle rustik ve modern mekanlar için heykelsi avize.",
    "dimensions": "Yükseklik: 130 cm",
    "lightingType": "E27 Standart Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/30.jpeg",
    "images": [
      "/products/kategorisiz/photo/30.jpeg",
      "/products/kategorisiz/photo/300.jpeg"
    ],
    "features": [
      "E27 Standart Duy (LED Ampul Uyumlu)",
      "Yükseklik: 130 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Loya Tasarım Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Loya Tasarım Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-031",
    "code": "HL-AVZ-031",
    "slug": "laura-luks-sarkit-avize",
    "name": "Laura Lüks Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Zarif Seri",
    "description": "Laura Lüks Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Yükseklik: 120 cm ölçüleri, E14 Kandil Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "120 cm ayarlanabilir sarkıt zinciri ve E14 kandil duylarıyla yemek odaları ve salonlar için lüks avize.",
    "dimensions": "Yükseklik: 120 cm",
    "lightingType": "E14 Kandil Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/31.jpeg",
    "images": [
      "/products/kategorisiz/photo/31.jpeg",
      "/products/kategorisiz/photo/310.jpeg",
      "/products/kategorisiz/photo/311.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Ampul Uyumlu)",
      "Yükseklik: 120 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Laura Lüks Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Laura Lüks Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-032",
    "code": "HL-AVZ-032",
    "slug": "norelia-kompakt-led-sarkit-avize",
    "name": "Norelia Kompakt LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Norelia Kompakt LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 45 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "45 cm çapında minimal şıklığı ve göz kamaştırmayan homojen LED ışığıyla modern yaşam alanlarına özel.",
    "dimensions": "Çap: 45 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/320.jpeg",
    "images": [
      "/products/kategorisiz/photo/320.jpeg",
      "/products/kategorisiz/photo/321.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 45 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Norelia Kompakt LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Norelia Kompakt LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-033",
    "code": "HL-AVZ-033",
    "slug": "zoye-dekoratif-sarkit-avize",
    "name": "Zoye Dekoratif Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Zoye Dekoratif Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, E14 Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında klasik ve moderni birleştiren tasarımıyla salon ve oturma odalarına ışıltı katan model.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "E14 Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/330.jpeg",
    "images": [
      "/products/kategorisiz/photo/330.jpeg",
      "/products/kategorisiz/photo/331.jpeg"
    ],
    "features": [
      "E14 Duy (LED Ampul Uyumlu)",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Zoye Dekoratif Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Zoye Dekoratif Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-034",
    "code": "HL-AVZ-034",
    "slug": "ophelia-mini-led-sarkit-avize",
    "name": "Ophelia Mini LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Ophelia Mini LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 30 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "30 cm mini çapıyla ikili veya üçlü ada üstü kombinasyonları ve yatak başı sarkıtları için ideal.",
    "dimensions": "Çap: 30 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/340.jpeg",
    "images": [
      "/products/kategorisiz/photo/340.jpeg",
      "/products/kategorisiz/photo/341.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 30 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Ophelia Mini LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Ophelia Mini LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-035",
    "code": "HL-AVZ-035",
    "slug": "vintage-tasarim-led-sarkit-avize",
    "name": "Vintage Tasarım LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Özel Tasarım",
    "description": "Vintage Tasarım LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapında vintage esintili mimari hatları ve modern LED teknolojisiyle göz alıcı bir tasarım.",
    "dimensions": "Çap: 70 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/350.jpeg",
    "images": [
      "/products/kategorisiz/photo/350.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Vintage Tasarım LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Vintage Tasarım LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-036",
    "code": "HL-AVZ-036",
    "slug": "dekoratif-modern-led-avize",
    "name": "Dekoratif Modern LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Modern LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 70 cm, Yükseklik: 100 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "70 cm çapı ve 100 cm sarkıt yüksekliğiyle salon ve yemek masaları üzerinde kusursuz bir ışık şaheseri.",
    "dimensions": "Çap: 70 cm, Yükseklik: 100 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/360.jpeg",
    "images": [
      "/products/kategorisiz/photo/360.jpeg",
      "/products/kategorisiz/photo/361.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 70 cm, Yükseklik: 100 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Modern LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Modern LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-037",
    "code": "HL-AVZ-037",
    "slug": "dekoratif-modern-led-sarkit-avize",
    "name": "Dekoratif Modern LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Modern LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 50 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "50 cm çapında dairesel formu ve 3 renk kademeli ışık moduyla modern LED sarkıt avize.",
    "dimensions": "Çap: 50 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/370.jpeg",
    "images": [
      "/products/kategorisiz/photo/370.jpeg",
      "/products/kategorisiz/photo/371.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 50 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Modern LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Modern LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-038",
    "code": "HL-AVZ-038",
    "slug": "dekoratif-dairesel-led-sarkit-avize",
    "name": "Dekoratif Dairesel LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Dairesel LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm ideal ebadı ve homojen parlaklığıyla yemek masaları ve salonlar için şık LED sarkıt.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/380.jpeg",
    "images": [
      "/products/kategorisiz/photo/380.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Dairesel LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Dairesel LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-039",
    "code": "HL-AVZ-039",
    "slug": "dekoratif-genis-halka-led-avize",
    "name": "Dekoratif Geniş Halka LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Büyük Boy",
    "description": "Dekoratif Geniş Halka LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 80 cm ölçüleri, Dahili Yüksek Güçlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "80 cm geniş çapı ve güçlü ışık yayılımıyla salon ve oturma alanlarına ferahlık katan model.",
    "dimensions": "Çap: 80 cm",
    "lightingType": "Dahili Yüksek Güçlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/390.jpeg",
    "images": [
      "/products/kategorisiz/photo/390.jpeg",
      "/products/kategorisiz/photo/391.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü LED Modülü",
      "Çap: 80 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Geniş Halka LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Geniş Halka LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-040",
    "code": "HL-AVZ-040",
    "slug": "dekoratif-hibrit-led-ve-ampullu-avize",
    "name": "Dekoratif Hibrit LED ve Ampullü Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Çift Işık Modu",
    "description": "Dekoratif Hibrit LED ve Ampullü Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 55 cm ölçüleri, Dahili LED + E14/E27 Ampul Kombinasyonu aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "55 cm çapında hem dahili LED şeritleri hem de ampul duy yuvalarıyla zengin bir ışık kombinasyonu.",
    "dimensions": "Çap: 55 cm",
    "lightingType": "Dahili LED + E14/E27 Ampul Kombinasyonu",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/40.jpeg",
    "images": [
      "/products/kategorisiz/photo/40.jpeg",
      "/products/kategorisiz/photo/400.jpeg",
      "/products/kategorisiz/photo/401.jpeg"
    ],
    "features": [
      "Dahili LED + E14/E27 Ampul Kombinasyonu",
      "Çap: 55 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Hibrit LED ve Ampullü Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Hibrit LED ve Ampullü Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-041",
    "code": "HL-AVZ-041",
    "slug": "dekoratif-kompakt-led-avize",
    "name": "Dekoratif Kompakt LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Kompakt LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 45 cm ölçüleri, Dahili LED Aydınlatma Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "45 cm çapında minimalist çizgileri ve enerji tasarruflu LED teknolojisiyle modern yaşam alanlarına özel.",
    "dimensions": "Çap: 45 cm",
    "lightingType": "Dahili LED Aydınlatma Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/41.jpeg",
    "images": [
      "/products/kategorisiz/photo/41.jpeg",
      "/products/kategorisiz/photo/410.jpeg",
      "/products/kategorisiz/photo/411.jpeg"
    ],
    "features": [
      "Dahili LED Aydınlatma Modülü",
      "Çap: 45 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Kompakt LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Kompakt LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-042",
    "code": "HL-AVZ-042",
    "slug": "dekoratif-tasarim-led-sarkit-avize",
    "name": "Dekoratif Tasarım LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Tasarım LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 50 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "50 cm çapında estetik halka dizilimi ve ayarlanabilir askı boyuyla odanıza değer katan LED avize.",
    "dimensions": "Çap: 50 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/420.jpeg",
    "images": [
      "/products/kategorisiz/photo/420.jpeg",
      "/products/kategorisiz/photo/421.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 50 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Tasarım LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Tasarım LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-043",
    "code": "HL-AVZ-043",
    "slug": "plafonyer-tavana-monteli-led-avize",
    "name": "Plafonyer Tavana Monteli LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Plafonyer Tavana Monteli LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 40 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "40 cm çapında tavana sıfır montajlı, modern ve alçak tavanlı odalar için ferah aydınlatma sağlayan plafonyer LED avize.",
    "dimensions": "Çap: 40 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/430.jpeg",
    "images": [
      "/products/kategorisiz/photo/430.jpeg",
      "/products/kategorisiz/photo/431.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 40 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Plafonyer Tavana Monteli LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Plafonyer Tavana Monteli LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-044",
    "code": "HL-AVZ-044",
    "slug": "dekoratif-kure-sarkit-avize",
    "name": "Dekoratif Küre Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Küre Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 55 cm ölçüleri, E14 Kandil Duy (LED Ampul Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "55 cm çapında modern sarkıt gövdesi ve E14 duy tipiyle yemek odaları ve salonlar için şık avize.",
    "dimensions": "Çap: 55 cm",
    "lightingType": "E14 Kandil Duy (LED Ampul Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/440.jpeg",
    "images": [
      "/products/kategorisiz/photo/440.jpeg",
      "/products/kategorisiz/photo/441.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Ampul Uyumlu)",
      "Çap: 55 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Küre Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Küre Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-045",
    "code": "HL-AVZ-045",
    "slug": "kristal-tasli-modern-led-avize",
    "name": "Kristal Taşlı Modern LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Kristal Seri",
    "description": "Kristal Taşlı Modern LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 65 cm ölçüleri, Dahili Kristal Difüzörlü LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "65 cm çapında berrak kristal taş detayları ve güçlü LED ışığıyla salonlara ışıltı katan model.",
    "dimensions": "Çap: 65 cm",
    "lightingType": "Dahili Kristal Difüzörlü LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/450.jpeg",
    "images": [
      "/products/kategorisiz/photo/450.jpeg",
      "/products/kategorisiz/photo/451.jpeg"
    ],
    "features": [
      "Dahili Kristal Difüzörlü LED Modülü",
      "Çap: 65 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Kristal Taşlı Modern LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Kristal Taşlı Modern LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-046",
    "code": "HL-AVZ-046",
    "slug": "saray-tipi-dev-kristal-led-avize",
    "name": "Saray Tipi Dev Kristal LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Dev Boyut (120 cm)",
    "description": "Saray Tipi Dev Kristal LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 120 cm ölçüleri, Dahili Yüksek Güçlü Kristal LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "120 cm görkemli çapı, parıltılı kristal taş dizilimi ve yüksek ışık kapasitesiyle büyük salon ve villa avizesi.",
    "dimensions": "Çap: 120 cm",
    "lightingType": "Dahili Yüksek Güçlü Kristal LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/460.jpeg",
    "images": [
      "/products/kategorisiz/photo/460.jpeg"
    ],
    "features": [
      "Dahili Yüksek Güçlü Kristal LED Modülü",
      "Çap: 120 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Saray Tipi Dev Kristal LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Saray Tipi Dev Kristal LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-047",
    "code": "HL-AVZ-047",
    "slug": "klasik-cam-kollu-luks-avize",
    "name": "Klasik Cam Kollu Lüks Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Cam İşçiliği",
    "description": "Klasik Cam Kollu Lüks Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Özel kıvrımlı cam kolları ve E14 kandil duylarıyla zamansız klasik salon zarafeti.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/470.jpeg",
    "images": [
      "/products/kategorisiz/photo/470.jpeg",
      "/products/kategorisiz/photo/471.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Klasik Cam Kollu Lüks Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Klasik Cam Kollu Lüks Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-048",
    "code": "HL-AVZ-048",
    "slug": "kristal-tasli-hibrit-led-avize",
    "name": "Kristal Taşlı Hibrit LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Kristal Taşlı Hibrit LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E14 Duy + Dahili LED Aydınlatma aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Kristal prizmaların ışıltısı ve E14 + LED çift ışık moduyla zenginleştirilmiş salon avizesi.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E14 Duy + Dahili LED Aydınlatma",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/480.jpeg",
    "images": [
      "/products/kategorisiz/photo/480.jpeg"
    ],
    "features": [
      "E14 Duy + Dahili LED Aydınlatma",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Kristal Taşlı Hibrit LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Kristal Taşlı Hibrit LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-049",
    "code": "HL-AVZ-049",
    "slug": "kristal-tasli-tasarim-led-avize",
    "name": "Kristal Taşlı Tasarım LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Kristal Taşlı Tasarım LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, Dahili Kristal LED Işık Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Işıltılı kristal taşlarla çevrili modern halka gövdesiyle göz kamaştıran LED avize modeli.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "Dahili Kristal LED Işık Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/490.jpeg",
    "images": [
      "/products/kategorisiz/photo/490.jpeg"
    ],
    "features": [
      "Dahili Kristal LED Işık Modülü",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Kristal Taşlı Tasarım LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Kristal Taşlı Tasarım LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-050",
    "code": "HL-AVZ-050",
    "slug": "kirpi-model-modern-sarkit-avize",
    "name": "Kirpi Model Modern Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Özel Tasarım",
    "description": "Kirpi Model Modern Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Kirpi formunda ışığı 360 derece saçan metalik çubukları ve E14 duylarıyla mekana modern bir derinlik katar.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/50.jpeg",
    "images": [
      "/products/kategorisiz/photo/50.jpeg",
      "/products/kategorisiz/photo/500.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Kirpi Model Modern Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Kirpi Model Modern Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-051",
    "code": "HL-AVZ-051",
    "slug": "kristal-tasli-dairesel-led-avize",
    "name": "Kristal Taşlı Dairesel LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Kristal Taşlı Dairesel LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, Dahili Kristal LED Işık Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Kristal prizmalar arasından süzülen homojen LED ışığıyla ferah ve lüks mekanlar oluşturan avize.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "Dahili Kristal LED Işık Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/51.jpeg",
    "images": [
      "/products/kategorisiz/photo/51.jpeg",
      "/products/kategorisiz/photo/510.jpeg"
    ],
    "features": [
      "Dahili Kristal LED Işık Modülü",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Kristal Taşlı Dairesel LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Kristal Taşlı Dairesel LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-052",
    "code": "HL-AVZ-052",
    "slug": "minimalist-cizgisel-sarkit-led-avize",
    "name": "Minimalist Çizgisel Sarkıt LED Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Minimalist Çizgisel Sarkıt LED Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Akıcı ve zarif sarkıt formuyla oturma odaları ve salonlar için çağdaş LED aydınlatma.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/520.jpeg",
    "images": [
      "/products/kategorisiz/photo/520.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Minimalist Çizgisel Sarkıt LED Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Minimalist Çizgisel Sarkıt LED Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-053",
    "code": "HL-AVZ-053",
    "slug": "modern-metal-kollu-sarkit-avize",
    "name": "Modern Metal Kollu Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Modern Metal Kollu Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Ayarlanabilir Yükseklik / Standart Ölçü ölçüleri, E14 Kandil Duy (LED Uyumlu) aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "Fırçalanmış metal kolları ve E14 kandil duylarıyla modern ve endüstriyel çizgileri birleştiren avize.",
    "dimensions": "Ayarlanabilir Yükseklik / Standart Ölçü",
    "lightingType": "E14 Kandil Duy (LED Uyumlu)",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/530.jpeg",
    "images": [
      "/products/kategorisiz/photo/530.jpeg"
    ],
    "features": [
      "E14 Kandil Duy (LED Uyumlu)",
      "Ayarlanabilir Yükseklik / Standart Ölçü",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Modern Metal Kollu Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Modern Metal Kollu Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-054",
    "code": "HL-AVZ-054",
    "slug": "dekoratif-dairesel-led-sarkit-avize-avz-054",
    "name": "Dekoratif Dairesel LED Sarkıt Avize",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "description": "Dekoratif Dairesel LED Sarkıt Avize, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Çap: 60 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "60 cm çapında modern dairesel formu ve 3 renk kademeli ışık moduyla salon ve oturma alanlarına zarafet katan LED avize.",
    "dimensions": "Çap: 60 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/540.jpeg",
    "images": [
      "/products/kategorisiz/photo/540.jpeg",
      "/products/kategorisiz/photo/541.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Çap: 60 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Dairesel LED Sarkıt Avize Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Dairesel LED Sarkıt Avize modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  },
  {
    "id": "AVZ-055",
    "code": "HL-AVZ-055",
    "slug": "dekoratif-modern-led-avize-120cm",
    "name": "Dekoratif Modern LED Avize 120cm",
    "categorySlug": "kategorisiz",
    "categoryName": "Tüm Avizeler (Yeni Eklenenler)",
    "badge": "Modern LED Seri",
    "description": "Dekoratif Modern LED Avize 120cm, Kahramanmaraş Hilal Showroom kalitesi ve güvencesiyle sunulmaktadır. Boy / Çap: 120 cm ölçüleri, Dahili 3 Renk Kademeli LED Modülü aydınlatması ile estetik ve yüksek verimli ışık sağlar.",
    "shortDescription": "120 cm geniş ebatlı modern formu ve 3 renk kademeli yüksek verimli LED ışık sistemiyle salon ve prestijli alanlar için tasarlandı.",
    "dimensions": "Boy / Çap: 120 cm",
    "lightingType": "Dahili 3 Renk Kademeli LED Modülü",
    "branch": "showroom",
    "image": "/products/kategorisiz/photo/550.jpeg",
    "images": [
      "/products/kategorisiz/photo/550.jpeg"
    ],
    "features": [
      "Dahili 3 Renk Kademeli LED Modülü",
      "Boy / Çap: 120 cm",
      "Hilal Avize Güvencesiyle Hasarsız Teslimat",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği"
    ],
    "seoTitle": "Dekoratif Modern LED Avize 120cm Kahramanmaraş | Hilal Avize",
    "seoDescription": "Dekoratif Modern LED Avize 120cm modeli, özellikleri ve fiyat danışmanlığı. Kahramanmaraş Hilal Avize & Elektrik Showroom'unda canlı inceleyin."
  }
];
