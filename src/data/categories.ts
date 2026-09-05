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
    slug: "tekli-avizeler",
    name: "Tekli Avizeler & Sarkıtlar",
    shortName: "Tekli & Sarkıt",
    tagline: "Ada Tezgahı, Yemek Masası ve Köşe Alanlar İçin Şık Tekli Sarkıtlar",
    description:
      "Mutfak adaları, yemek masaları, yatak başları ve antreler için özel tasarlanmış modern ve cam fanuslu tekli sarkıt avizeler.",
    seoTitle: "Tekli Avize ve Sarkıt Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Mutfak adası ve yemek masası tekli sarkıt modelleri, cam ve metal tekli avizeler Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/categories/banner_sarkitlar.jpg",
    coverImage: "/images/categories/banner_sarkitlar.jpg",
    featured: true,
    subcategories: [
      "Modern Tekli Sarkıtlar",
      "Cam Fanuslu Modeller",
      "Metal Sarkıtlar",
      "Ada Üstü Aydınlatma",
    ],
    itemCount: 6,
  },
  {
    slug: "klasik",
    name: "Klasik & Kristal Avizeler",
    shortName: "Klasik",
    tagline: "Maria Theresa & Baccarat Aileleri, Kollu, Taşlı ve Metal Kollu Saray Serileri",
    description:
      "Saray tipi klasik avizeler. Ağır döküm pirinç gövdeler, birinci sınıf kristal prizmalar, Maria Theresa cam giydirmeli kollar, Baccarat kalın kesme kristal ve metal kollu avizeler.",
    seoTitle: "Klasik Avize Modelleri Kahramanmaraş | Maria Theresa & Baccarat - Hilal Avize",
    seoDescription:
      "Kahramanmaraş'ta saray tipi klasik avizeler, Maria Theresa, Baccarat ve metal kollu klasik avize modelleri Hilal Avize Showroom'unda.",
    image: "/images/categories/theresa_kapak.jpeg",
    coverImage: "/images/categories/theresa_kapak.jpeg",
    featured: true,
    subcategories: [
      "Maria Theresa Ailesi",
      "Baccarat Ailesi",
      "Metal Kollular",
      "Kollu Grup",
      "Taşlı Grup",
    ],
    itemCount: 9,
  },
  {
    slug: "ledli-grup",
    name: "Modern LED Avizeler",
    shortName: "LED'li Grup",
    tagline: "Modern Geometrik LED Sarkıtlar ve Halka Avize Sistemleri",
    description:
      "Modern mimari LED avizeler. 3 renk kademeli ışık modları, estetik halkalar ve enerji tasarruflu yüksek ışık kalitesi.",
    seoTitle: "Modern LED Avize Modelleri Kahramanmaraş | LED Sarkıtlar - Hilal Avize",
    seoDescription:
      "Modern halka LED avizeler, 3 renk kademeli sarkıt modelleri ve mimari aydınlatma çeşitleri Kahramanmaraş Hilal Avize'de.",
    image: "/images/categories/banner_led.jpg",
    coverImage: "/images/categories/banner_led.jpg",
    featured: true,
    subcategories: [
      "Modern LED Halkalar",
      "Lineer LED Sarkıtlar",
      "Geometrik Tasarımlar",
      "3 Renk Kademeli LED Modeller",
    ],
    itemCount: 51,
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
    image: "/images/categories/banner_aplikler.jpg",
    coverImage: "/images/categories/banner_aplikler.jpg",
    featured: true,
    subcategories: [
      "Duvar Aplikleri",
      "Manyetik Ray Spotlar",
      "Gömme Tavan Spotları",
      "Sıva Üstü Silindir Spotlar",
    ],
    itemCount: 17,
  },
  {
    slug: "aksesuar",
    name: "Lüks Aksesuar & Çini Koleksiyonu",
    shortName: "Aksesuar & Çini",
    tagline: "El Yapımı Çini Sanat Eserleri ve Seçkin İthal Aksesuarlar",
    description:
      "Geleneksel Türk el işçiliği çini vazolar, kaseler ve panolar; yaşam alanlarınızı tamamlayan seçkin ithal konsol objeleri, tasarım aynalar ve saatler.",
    seoTitle: "El Yapımı Çini ve İthal Aksesuarlar Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "El yapımı çini sanat eserleri, ithal lüks konsol aksesuarları, dekoratif aynalar ve saatler Hilal Avize & Aksesuar Showroom'unda.",
    image: "/images/categories/banner_aksesuarlar.jpg",
    coverImage: "/images/categories/banner_aksesuarlar.jpg",
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
    image: "/images/categories/banner_yerli_uretim.webp",
    coverImage: "/images/categories/banner_yerli_uretim.webp",
    featured: true,
    subcategories: [
      "Yerli Üretim Avizeler",
      "Yerli İmalat Aplikler",
      "Özel Proje Aydınlatmaları",
    ],
    itemCount: 20,
  },
];
