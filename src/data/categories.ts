export interface Category {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
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
    tagline: "Kollu, Taşlı, Maria Theresa ve Baccarat Saray Serileri",
    description:
      "Tamamı %100 yerli üretim saray tipi klasik avizeler. Ağır döküm pirinç gövdeler, birinci sınıf kristal prizmalar, Maria Theresa ve Baccarat zarafeti.",
    seoTitle: "Klasik Avize Modelleri Kahramanmaraş | Kollu & Taşlı Kristal Avize - Hilal Avize",
    seoDescription:
      "Kahramanmaraş'ta %100 yerli üretim saray tipi klasik avizeler, Maria Theresa ve Baccarat taşlı avize modelleri Hilal Avize Showroom'unda.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    subcategories: [
      "Kollu Grup",
      "Taşlı Grup",
      "Maria Theresa Ailesi",
      "Baccarat Ailesi",
    ],
    itemCount: 24,
  },
  {
    slug: "ledli-grup",
    name: "LED'li Avizeler",
    shortName: "LED'li Grup",
    tagline: "Modern Geometrik LED Sarkıtlar ve Halka Avize Sistemleri",
    description:
      "Tamamı %100 yerli üretim modern mimari LED avizeler. 3 renk kademeli ışık modları, estetik halkalar ve enerji tasarruflu yüksek ışık kalitesi.",
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
      "Tamamı %100 yerli üretim elektrostatik fırın boyalı metal avizeler. Modern, endüstriyel ve loft mekanlar için sağlam ve estetik tasarımlar.",
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
    slug: "galeri-boslugu",
    name: "Galeri Boşluğu & Merdiven Avizeleri",
    shortName: "Galeri Boşluğu",
    tagline: "Yüksek Tavanlı Villalar, Dubleks Merdiven Boşlukları ve Otel Lobileri",
    description:
      "Tamamı %100 yerli üretim, yüksek tavanlı dubleks villalar, sarmal merdiven boşlukları ve prestijli lobiler için özel ölçüde üretilen anıtsal dev avizeler.",
    seoTitle: "Galeri Boşluğu ve Merdiven Avizeleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Dubleks villalar ve yüksek tavanlı mekanlar için özel üretim sarmal galeri boşluğu avizeleri Hilal Avize Kahramanmaraş'ta.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    subcategories: [
      "Sarmal Kristal Avizeler",
      "Çok Katlı Sarkıtlar",
      "Villa Merdiven Boşluğu",
      "Otel & Lobi Avizeleri",
    ],
    itemCount: 16,
  },
  {
    slug: "aplikler",
    name: "Dekoratif Duvar Aplikleri",
    shortName: "Aplikler",
    tagline: "Duvarlarınıza Zarafet ve Sıcak Ambiyans Katan Klasik & LED Aplikler",
    description:
      "Klasik kristal, modern LED ve fırçalanmış metal duvar aplikleri. Koridor, yatak başı, salon ve merdiven duvar aydınlatmaları.",
    seoTitle: "Kahramanmaraş Duvar Aplikleri Modelleri | Kristal & LED Aplik - Hilal Avize",
    seoDescription:
      "Salon, koridor ve yatak odaları için lüks kristal ve modern LED duvar aplik çeşitleri Hilal Avize'de. Şık ve dayanıklı tasarımlar.",
    image: "/images/800x800_dekoratif_duvar_aplik.jpg",
    featured: true,
    subcategories: [
      "Kristal Aplikler",
      "Modern LED Aplikler",
      "Metal Kollu Aplikler",
      "Tablo & Ayna Üstü Aplikler",
    ],
    itemCount: 32,
  },
  {
    slug: "spotlar",
    name: "Spot & Manyetik Ray Sistemleri",
    shortName: "Spotlar",
    tagline: "Manyetik Ray Spot Sistemleri ve Gömme Tavan Spotları",
    description:
      "Manyetik ray spot sistemleri, sıva altı ve sıva üstü tavan spotları, yönlendirilebilir odak ışıkları ve modern mimari aydınlatma armatürleri.",
    seoTitle: "Manyetik Ray Spot ve Gömme Spot Aydınlatma Kahramanmaraş | Hilal Elektrik",
    seoDescription:
      "Mimari ray spot sistemleri, manyetik tavan spotları ve gömme spot lambalar Kahramanmaraş Hilal Elektrik şubesinde.",
    image: "/images/800x800_manyetik_ray_spot_sistem.jpg",
    featured: true,
    subcategories: [
      "Manyetik Ray Spotlar",
      "Gömme Tavan Spotları",
      "Sıva Üstü Silindir Spotlar",
      "Dekoratif LED Spotlar",
    ],
    itemCount: 28,
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
    slug: "kategorisiz",
    name: "Tüm Avizeler (Yeni Eklenenler)",
    shortName: "Tüm Avizeler",
    tagline: "Hilal Avize Showroom %100 Yerli Üretim Tüm Modeller",
    description:
      "Kahramanmaraş showroomumuzda sergilenen %100 yerli üretim avize modellerimiz. Yeni eklenen ve sınıflandırılmayı bekleyen tüm seçkin tasarımlar.",
    seoTitle: "Tüm Avize Koleksiyonu Kahramanmaraş | Yerli Üretim Avizeler - Hilal Avize",
    seoDescription:
      "Hilal Avize Kahramanmaraş %100 yerli üretim tüm avize modelleri tek vitrinde. Canlı showroom modelleri ve teknik detaylar.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    subcategories: [
      "Yeni Eklenen Modeller",
      "Showroom Koleksiyonu",
      "%100 Yerli Üretim Avizeler",
    ],
    itemCount: 53,
  },
];
