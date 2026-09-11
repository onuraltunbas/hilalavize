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
    image: "/images/categories/theresa_kapak.jpeg",
    coverImage: "/images/categories/theresa_kapak.jpeg",
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
    image: "/images/categories/banner_led.jpg",
    coverImage: "/images/categories/banner_led.jpg",
    featured: true,
    subcategories: [],
    itemCount: 51,
  },
  {
    slug: "tekli-avizeler",
    name: "Üçlü & Tekli Avizeler ve Sarkıtlar",
    shortName: "Üçlü & Tekli Sarkıt",
    tagline: "Ada Tezgahı, Yemek Masası ve Köşe Alanlar İçin Şık Sarkıtlar",
    description:
      "Mutfak adaları, yemek masaları, salon köşeleri ve antreler için özel tasarlanmış modern üçlü ve tekli sarkıt avizeler.",
    seoTitle: "Üçlü ve Tekli Avize Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Üçlü ve tekli sarkıt avize modelleri, cam ve metal sarkıtlar Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/images/categories/banner_sarkitlar.jpg",
    coverImage: "/images/categories/banner_sarkitlar.jpg",
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
    itemCount: 17,
  },
  {
    slug: "yerli-urunler",
    name: "Yerli Üretim Koleksiyonu",
    shortName: "Yerli Üretim",
    tagline: "İstediğiniz Renkte, Ebatta ve Şekilde Mekanınıza ve Hayallerinize Göre Ürünler",
    description:
      "İstediğiniz renkte, ebatta ve şekilde mekanınıza ve hayallerinize göre özel imalat galeri boşluğu ve salon avizeleri.",
    seoTitle: "Yerli Üretim Avizeler Kahramanmaraş | Hilal Avize",
    seoDescription:
      "İstediğiniz renkte, ebatta ve şekilde mekanınıza göre yerli üretim galeri boşluğu avizeleri Kahramanmaraş Hilal Avize Showroom'unda.",
    image: "/products/yerli-urunler/photo/700.jpeg",
    coverImage: "/products/yerli-urunler/photo/770.jpeg",
    featured: true,
    subcategories: [],
    itemCount: 8,
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
    image: "/images/categories/banner_aksesuarlar.jpg",
    coverImage: "/images/categories/banner_aksesuarlar.jpg",
    featured: true,
    subcategories: [
      "Lüks İthal Aksesuarlar",
      "Çini Aksesuarlar",
      "Tablo ve Aynalar",
    ],
    itemCount: 33,
  },
];
