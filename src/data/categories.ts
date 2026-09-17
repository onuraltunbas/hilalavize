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
    name: "Klasik Kristal Avizeler",
    shortName: "Klasik Kristal",
    tagline: "Maria Theresa ve Baccarat Aileleri, Taşlı ve Kollu Saray Serileri",
    description:
      "Saray tipi klasik avizeler. Ağır döküm pirinç gövdeler, birinci sınıf kristal prizmalar, Maria Theresa cam giydirmeli kollar, Baccarat kalın kesme kristal ve pirinç avizeler.",
    seoTitle: "Klasik Kristal Avize Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Kahramanmaraş'ta saray tipi klasik kristal avizeler, Maria Theresa, Baccarat ve kollu klasik avize modelleri Hilal Avize Showroom'unda.",
    image: "/images/categories/klasik_kristal_avizeler.jpg",
    coverImage: "/images/categories/klasik_kristal_avizeler.jpg",
    featured: true,
    subcategories: [],
    itemCount: 9,
  },
  {
    slug: "ledli-grup",
    name: "Modern LED Avizeler",
    shortName: "Modern LED",
    tagline: "Modern Geometrik LED Sarkıtlar ve Halka Avize Sistemleri",
    description:
      "Modern mimari LED avizeler. 3 renk kademeli ışık modları, estetik halkalar ve enerji tasarruflu yüksek ışık kalitesi.",
    seoTitle: "Modern LED Avize Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Modern halka LED avizeler, 3 renk kademeli sarkıt modelleri ve mimari aydınlatma çeşitleri Kahramanmaraş Hilal Avize'de.",
    image: "/images/categories/modern_led_avizeler.png",
    coverImage: "/images/categories/modern_led_avizeler.png",
    featured: true,
    subcategories: [],
    itemCount: 51,
  },
  {
    slug: "tekli-avizeler",
    name: "Cam Sarkıt Avizeler",
    shortName: "Cam Sarkıt Avizeler",
    tagline: "Ada Tezgahı, Yemek Masası ve Köşe Alanlar İçin Şık Cam Sarkıtlar",
    description:
      "Mutfak adaları, yemek masaları, salon köşeleri ve antreler için özel tasarlanmış modern cam sarkıt avizeler.",
    seoTitle: "Cam Sarkıt Avize Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Modern cam sarkıt avize modelleri, üfleme cam ve metal detaylı tasarımlar Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/categories/cam_sarkit_avizeler.png",
    coverImage: "/images/categories/cam_sarkit_avizeler.png",
    featured: true,
    subcategories: [],
    itemCount: 6,
  },
  {
    slug: "aplik-ve-spotlar",
    name: "Aplik ve Spot Aydınlatma",
    shortName: "Aplik ve Spot",
    tagline: "Dekoratif Duvar Aplikleri, Manyetik Ray ve Gömme Spot Sistemleri",
    description:
      "Klasik ve modern duvar aplikleri, manyetik ray spot sistemleri, gömme ve sıva üstü mimari tavan spotları.",
    seoTitle: "Aplik ve Spot Aydınlatma Modelleri Kahramanmaraş | Hilal Avize ve Elektrik",
    seoDescription:
      "Lüks duvar aplikleri, mimari manyetik ray spotlar ve tavan spot lambaları Kahramanmaraş Hilal Avize ve Elektrik şubelerinde.",
    image: "/images/categories/banner_aplikler.jpg",
    coverImage: "/images/categories/banner_aplikler.jpg",
    featured: true,
    subcategories: [],
    itemCount: 27,
  },
  {
    slug: "yerli-urunler",
    name: "Özel İmalat Avizeler",
    shortName: "Özel İmalat Avizeler",
    tagline: "İstediğiniz Renkte, Ebatta ve Şekilde Mekanınıza ve Hayallerinize Göre Ürünler",
    description:
      "İstediğiniz renkte, ebatta ve şekilde mekanınıza ve hayallerinize göre özel imalat galeri boşluğu ve salon avizeleri.",
    seoTitle: "Özel İmalat Avizeler Kahramanmaraş | Hilal Avize",
    seoDescription:
      "İstediğiniz renkte, ebatta ve şekilde mekanınıza göre özel imalat galeri boşluğu ve salon avizeleri Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/categories/ozel_imalat_avizeler.jpg",
    coverImage: "/images/categories/ozel_imalat_avizeler.jpg",
    featured: true,
    subcategories: [],
    itemCount: 43,
  },
  {
    slug: "aksesuar",
    name: "Aksesuarlar",
    shortName: "Aksesuarlar",
    tagline: "Lüks İthal Aksesuarlar, El Yapımı Çini Sanatı, Tablo ve Aynalar",
    description:
      "Geleneksel Türk el işçiliği çini vazolar ve kaseler; yaşam alanlarınızı tamamlayan seçkin ithal konsol objeleri, aynalı sanat tabloları ve dekoratif aksesuarlar.",
    seoTitle: "Lüks Aksesuarlar, Çini, Tablo ve Aynalar Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "Lüks ithal konsol aksesuarları, el yapımı çini sanat eserleri, dekoratif aynalar ve tablolar Hilal Avize ve Aksesuar Showroom'unda.",
    image: "/images/categories/aksesuarlar.jpg",
    coverImage: "/images/categories/aksesuarlar.jpg",
    featured: true,
    subcategories: [
      "Lüks İthal Aksesuarlar",
      "Çini Aksesuarlar",
      "Tablo ve Aynalar",
    ],
    itemCount: 33,
  },
];
