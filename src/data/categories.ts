export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  coverImage?: string;
  featured: boolean;
  styles?: string[];
  subcategories: string[];
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: "klasik",
    name: "Klasik Avizeler",
    shortName: "Klasik",
    tagline: "Maria Theresa & Baccarat Aileleri, Kollu ve Taşlı Saray Serileri",
    description:
      "Saray tipi klasik avizeler. Ağır döküm pirinç gövdeler, birinci sınıf kristal prizmalar, Maria Theresa cam giydirmeli kollar ve Baccarat kalın kesme kristal avizeler.",
    seoTitle: "Klasik Avize Modelleri Kahramanmaraş | Maria Theresa & Baccarat - Hilal Avize",
    seoDescription:
      "Kahramanmaraş'ta saray tipi klasik avizeler, Maria Theresa ve Baccarat kristal taşlı avize modelleri Hilal Avize Showroom'unda.",
    image: "/images/theresa_kapak.jpeg",
    coverImage: "/images/theresa_kapak.jpeg",
    featured: true,
    subcategories: [
      "Maria Theresa Ailesi",
      "Baccarat Ailesi",
      "Kollu Grup",
      "Taşlı Grup",
    ],
    itemCount: 24,
  },
  {
    slug: "ledli-grup",
    name: "LED'li Avizeler",
    shortName: "LED'li Grup",
    tagline: "Modern Geometrik LED Sarkıtlar ve Halka Avize Sistemleri",
    description:
      "Modern mimari LED avizeler. 3 renk kademeli ışık modları, estetik halkalar ve enerji tasarruflu yüksek ışık kalitesi.",
    seoTitle: "Modern LED Avize Modelleri Kahramanmaraş | LED Sarkıtlar - Hilal Avize",
    seoDescription:
      "Modern halka LED avizeler, 3 renk kademeli sarkıt modelleri ve mimari aydınlatma çeşitleri Kahramanmaraş Hilal Avize'de.",
    image: "/images/800x800_modern_led_halka_avize.jpg",
    featured: true,
    subcategories: [
      "Modern LED Halkalar",
      "Lineer LED Sarkıtlar",
      "Geometrik Tasarımlar",
      "3 Renk Kademeli LED Modeller",
    ],
    itemCount: 28,
  },
  {
    slug: "metal-grup",
    name: "Metal Avizeler",
    shortName: "Metal Grup",
    tagline: "Fırçalanmış Gold, Mat Siyah ve Antik Eskitme Metal Gövdeler",
    description:
      "Elektrostatik fırın boyalı metal avizeler. Modern, endüstriyel ve loft mekanlar için sağlam ve estetik tasarımlar.",
    seoTitle: "Metal Avize Modelleri Kahramanmaraş | Gold & Siyah Metal Avize - Hilal Avize",
    seoDescription:
      "Fırçalanmış gold ve mat siyah metal avize çeşitleri, modern ve endüstriyel aydınlatmalar Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/800x800_modern_led_halka_avize.jpg",
    featured: true,
    subcategories: [
      "Gold Metal Avizeler",
      "Mat Siyah & Antrasit",
      "Endüstriyel & Loft Modeller",
      "Metal Kollu Avizeler",
    ],
    itemCount: 20,
  },
  {
    slug: "aplik-ve-spotlar",
    name: "Aplik & Spot Aydınlatma",
    shortName: "Aplik & Spot",
    tagline: "Dekoratif Duvar Aplikleri, Manyetik Ray ve Gömme Spot Sistemleri",
    description:
      "Klasik ve modern duvar aplikleri, manyetik ray spot sistemleri, gömme ve sıva üstü mimari tavan spotları.",
    seoTitle: "Aplik ve Spot Aydınlatma Modelleri Kahramanmaraş | Hilal Avize & Elektrik",
    seoDescription:
      "Lüks duvar aplikleri, mimari manyetik ray spotlar ve tavan spot lambaları Kahramanmaraş Hilal Avize & Elektrik şubelerinde.",
    image: "/images/800x800_dekoratif_duvar_aplik.jpg",
    featured: true,
    subcategories: [
      "Duvar Aplikleri",
      "Manyetik Ray Spotlar",
      "Gömme Tavan Spotları",
      "Sıva Üstü Silindir Spotlar",
    ],
    itemCount: 32,
  },
  {
    slug: "aksesuar",
    name: "Lüks Aksesuar & Çini Koleksiyonu",
    shortName: "Aksesuar",
    tagline: "El Yapımı Çini Sanat Eserleri ve Seçkin İthal Aksesuarlar",
    description:
      "Geleneksel Türk el işçiliği çini vazolar, kaseler ve panolar; yaşam alanlarınızı tamamlayan seçkin ithal konsol objeleri, tasarım aynalar ve saatler.",
    seoTitle: "El Yapımı Çini ve İthal Aksesuarlar Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "El yapımı çini sanat eserleri, ithal lüks konsol aksesuarları, dekoratif aynalar ve saatler Hilal Avize & Aksesuar Showroom'unda.",
    image: "/images/800x800_ufleme_cam_vazo_aksesuar.jpg",
    featured: true,
    subcategories: [
      "El Yapımı Çini Aksesuarlar",
      "İthal Aksesuarlar",
      "Dekoratif Aynalar",
      "Tasarım Saatler",
      "Cam Sanat Eserleri",
    ],
    itemCount: 36,
  },
  {
    slug: "yerli-urunler",
    name: "Yerli Üretim Koleksiyonu",
    shortName: "Yerli Ürünler",
    tagline: "Yüksek Kalite Standartlarında Özel İmalat Yerli Tasarımlar",
    description:
      "Usta ellerde titizlikle üretilen, uzun ömürlü malzeme kalitesi ve özgün tasarımlara sahip yerli üretim aydınlatma modelleri.",
    seoTitle: "Yerli Üretim Aydınlatma ve Avize Çeşitleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Yerli üretim aydınlatmalar, özel imalat şık avizeler ve aplikler Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    subcategories: [
      "Yerli Üretim Avizeler",
      "Yerli İmalat Aplikler",
      "Özel Proje Aydınlatmaları",
    ],
    itemCount: 20,
  },
  {
    slug: "kategorisiz",
    name: "Tüm Avizeler (Yeni Eklenenler)",
    shortName: "Tüm Avizeler",
    tagline: "Hilal Avize Showroom Tüm Modeller",
    description:
      "Kahramanmaraş showroomumuzda sergilenen avize modellerimiz. Yeni eklenen ve sınıflandırılmayı bekleyen tüm seçkin tasarımlar.",
    seoTitle: "Tüm Avize Koleksiyonu Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Hilal Avize Kahramanmaraş tüm avize modelleri tek vitrinde. Canlı showroom modelleri ve teknik detaylar.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    subcategories: [
      "Yeni Eklenen Modeller",
      "Showroom Koleksiyonu",
    ],
    itemCount: 54,
  },
];
