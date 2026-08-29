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
  styles: string[];
  subcategories: string[];
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: "avizeler",
    name: "Lüks & Modern Avizeler",
    shortName: "Avizeler",
    tagline: "Salonlarınızı ve Yaşam Alanlarınızı Büyüleyen Işık Şaheserleri",
    description:
      "Ağır kollu saray tipi kristal avizelerden modern spor geometrik LED sarkıtlara, sade ve şık tasarımlardan ihtişamlı çok katlı modellere kadar Kahramanmaraş'ın en zengin avize koleksiyonu.",
    seoTitle: "Kahramanmaraş Avize Modelleri | Kristal & Modern LED Avizeler - Hilal Avize",
    seoDescription:
      "Kahramanmaraş'ta en şık lüks kristal avizeler, modern LED sarkıtlar ve spor aydınlatma modelleri Hilal Avize Showroom'unda. Ücretsiz danışmanlık ve montaj güvencesiyle.",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor", "Sade & Minimalist"],
    subcategories: ["Kristal Kollu Avizeler", "Modern LED Halkalar", "Sarkıt Avizeler", "Tekli & Çoklu Sarkıtlar", "Otel & Salon Avizeleri"],
    itemCount: 48,
  },
  {
    slug: "aplikler",
    name: "Dekoratif Duvar Aplikleri",
    shortName: "Aplikler",
    tagline: "Duvarlarınıza Zarafet ve Sıcak Ambiyans Katan Işık Dokunuşları",
    description:
      "Klasik pirinç gövdeli kristal duvar aplikleri, modern çizgili çift yönlü LED aplikler, merdiven ve koridor aydınlatmaları ile tablo spotları.",
    seoTitle: "Kahramanmaraş Duvar Aplikleri Modelleri | Kristal & LED Aplik - Hilal Avize",
    seoDescription:
      "Salon, koridor ve yatak odaları için lüks kristal ve modern LED duvar aplik çeşitleri Hilal Avize'de. Şık ve dayanıklı aydınlatma tasarımları.",
    image: "/images/800x800_dekoratif_duvar_aplik.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor", "Sade & Minimalist"],
    subcategories: ["Kristal Aplikler", "Modern LED Aplikler", "Tablo & Ayna Üstü Aplikler", "Dış Mekan & Bahçe Aplikleri"],
    itemCount: 32,
  },
  {
    slug: "spot-ve-ray-spot",
    name: "Spot & Manyetik Ray Spot Sistemleri",
    shortName: "Spot Aydınlatma",
    tagline: "Mimari ve Modern Mekanlar İçin Kusursuz Işık Yönlendirmesi",
    description:
      "Manyetik ray spot sistemleri, sıva altı ve sıva üstü tavan spotları, yönlendirilebilir odak ışıkları ve modern mimari aydınlatma armatürleri.",
    seoTitle: "Manyetik Ray Spot ve Gömme Spot Aydınlatma Kahramanmaraş | Hilal Elektrik",
    seoDescription:
      "Mimari ray spot sistemleri, manyetik tavan spotları ve gömme spot lambalar Kahramanmaraş Hilal Elektrik şubesinde. Profesyonel montaj desteğiyle.",
    image: "/images/800x800_manyetik_ray_spot_sistem.jpg",
    featured: true,
    styles: ["Modern & Spor", "Sade & Minimalist", "Mimari Çözümler"],
    subcategories: ["Manyetik Ray Spotlar", "Gömme Tavan Spotları", "Sıva Üstü Silindir Spotlar", "Dekoratif LED Spotlar"],
    itemCount: 28,
  },
  {
    slug: "abajur-ve-lambader",
    name: "Abajur & Lambader Koleksiyonu",
    shortName: "Abajur & Lambader",
    tagline: "Masa Üstü ve Köşe Alanlarda Zarafet Dolu Sıcak Işık",
    description:
      "Kristal gövdeli komodin abajurları, ipek başlıklı salon abajurları, pirinç detaylı heykelsi lambaderler ve okuma lambaları.",
    seoTitle: "Lüks Abajur ve Lambader Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Yatak odası abajurları, salon köşe lambaderleri ve kristal dekoratif masa lambaları Hilal Avize Showroom'unda sizleri bekliyor.",
    image: "/images/800x800_kadife_tasarim_berjer.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor", "Sade & Minimalist"],
    subcategories: ["Klasik Kristal Abajurlar", "Modern Köşe Lambaderleri", "Masa & Çalışma Lambaları", "Otel Tipi Abajurlar"],
    itemCount: 24,
  },
  {
    slug: "dekoratif-aynalar",
    name: "Dekoratif & Akıllı LED Aynalar",
    shortName: "Aynalar",
    tagline: "Mekanlara Derinlik, Işık ve Lüks Kazandıran Tasarım Aynalar",
    description:
      "Dokunmatik buğu önleyicili LED banyo ve salon aynaları, varaklı oymalı ihtişamlı klasik aynalar, bronz ve füme metal çerçeveli modern konsol aynaları.",
    seoTitle: "Dekoratif LED ve Varaklı Duvar Aynaları Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Kahramanmaraş dekoratif ayna modelleri: Dokunmatik LED ışıklı banyo ve salon aynaları, varaklı klasik aynalar Hilal Avize Showroom'da.",
    image: "/images/800x800_dokunmatik_led_ayna.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor", "Sade & Minimalist"],
    subcategories: ["Dokunmatik LED Aynalar", "Varaklı Klasik Aynalar", "Metal & Bronz Konsol Aynaları", "Boy Aynaları"],
    itemCount: 22,
  },
  {
    slug: "duvar-ve-masa-saatleri",
    name: "Özel Tasarım Duvar & Masa Saatleri",
    shortName: "Saatler",
    tagline: "Zamanı Zarafetle Gösteren Heykelsi Duvar Aksesuarları",
    description:
      "Hakiki mermer kadranlı büyük salon duvar saatleri, çark mekanizmalı metal lüks saatler, pirinç ve gold masa saatleri.",
    seoTitle: "Lüks Duvar ve Masa Saatleri Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "Büyük boy dekoratif duvar saatleri, mermer kadranlı lüks salon saatleri Hilal Avize & Aksesuar mağazasında.",
    image: "/images/800x800_ozel_tasarim_duvar_saati.jpg",
    featured: true,
    styles: ["Modern & Spor", "İhtişamlı & Klasik", "Sade & Minimalist"],
    subcategories: ["Büyük Boy Duvar Saatleri", "Mermer Kadranlı Saatler", "Çarklı Metal Saatler", "Masa & Konsol Saatleri"],
    itemCount: 18,
  },
  {
    slug: "cam-sus-esyalari",
    name: "Cam Sanat & Süs Eşyaları",
    shortName: "Cam Eşyalar",
    tagline: "El İşçiliği Üfleme Cam, Vazo ve Kristal Dekoratif Objeler",
    description:
      "Altın varak detaylı el üfleme cam vazolar, Murano tarzı kristal kaseler, renkli cam heykeller ve seçkin konsol aksesuarları.",
    seoTitle: "El Yapımı Cam Süs Eşyaları & Kristal Objeler Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "Özel el üfleme cam vazolar, kristal kaseler ve lüks dekorasyon aksesuarları Hilal Aksesuar Showroom'unda.",
    image: "/images/800x800_ufleme_cam_vazo_aksesuar.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor"],
    subcategories: ["Üfleme Cam Vazolar", "Kristal Meyvelikler & Kaseler", "Dekoratif Cam Objeler", "Altın Varaklı Cam Aksesuarlar"],
    itemCount: 36,
  },
  {
    slug: "anahtar-ve-priz-serileri",
    name: "Lüks Anahtar & Priz Serileri",
    shortName: "Anahtar & Priz",
    tagline: "Temperli Cam, Fırçalanmış Metal ve Akıllı Dokunmatik Butonlar",
    description:
      "Siyah, beyaz ve füme cam çerçeveli lüks anahtar-prizler, şampanya gold fırçalanmış metal seriler, akıllı aydınlatma anahtarları ve priz kombinasyonları.",
    seoTitle: "Lüks Cam ve Metal Çerçeveli Anahtar Priz Çeşitleri Kahramanmaraş | Hilal Elektrik",
    seoDescription:
      "Ev ve villalar için lüks cam çerçeveli anahtar ve priz takımları, güvenilir elektrik malzemeleri Kahramanmaraş Hilal Elektrik şubesinde.",
    image: "/images/800x800_luks_cam_anahtar_priz.jpg",
    featured: true,
    styles: ["Modern & Spor", "Sade & Minimalist", "Lüks Seri"],
    subcategories: ["Cam Çerçeveli Anahtarlar", "Metal Butonlu Prizler", "Dimmer & Işık Ayarlayıcılar", "Akıllı Ev Anahtarları"],
    itemCount: 42,
  },
  {
    slug: "dekoratif-koltuk-ve-berjerler",
    name: "Dekoratif Koltuk & Berjerler",
    shortName: "Koltuk & Berjer",
    tagline: "Aydınlatmanızla Bütünleşen Konforlu ve Gösterişli Oturma Köşeleri",
    description:
      "Kraliyet mavisi ve zümrüt yeşili kadife berjerler, gold ayaklı tasarım dinlenme koltukları, gösterişli ve modern tekli koltuk modelleri.",
    seoTitle: "Lüks Tasarım Berjer ve Dekoratif Koltuklar Kahramanmaraş | Hilal Avize & Aksesuar",
    seoDescription:
      "Salon ve dinlenme köşeleri için şık kadife berjerler, tasarım dekoratif koltuklar Hilal Avize Showroom'unda.",
    image: "/images/800x800_kadife_tasarim_berjer.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor"],
    subcategories: ["Kadife Lüks Berjerler", "Gold Ayaklı Dinlenme Koltukları", "Tasarım Tekli Koltuklar"],
    itemCount: 14,
  },
  {
    slug: "dekoratif-sehpalar",
    name: "Dekoratif Mermer & Bronz Sehpalar",
    shortName: "Sehpalar",
    tagline: "İtalyan Mermeri ve Bronz Metalin Kusursuz Uyumu",
    description:
      "Calacatta mermer tablalı yuvarlak orta sehpalar, bronz ve gold metal ayaklı zigon sehpalar, füme camlı modern yan sehpalar.",
    seoTitle: "Mermer Orta Sehpa ve Yan Sehpa Modelleri Kahramanmaraş | Hilal Aksesuar",
    seoDescription:
      "Doğal mermer orta sehpalar, gold ayaklı zigon ve yan sehpa takımları Hilal Avize & Aksesuar Showroom'unda sizleri bekliyor.",
    image: "/images/800x800_mermer_bronz_orta_sehpa.jpg",
    featured: true,
    styles: ["İhtişamlı & Klasik", "Modern & Spor", "Sade & Minimalist"],
    subcategories: ["Mermer Orta Sehpalar", "Bronz & Gold Zigon Sehpalar", "Cam Tablalı Yan Sehpalar", "Tasarım C Sehpalar"],
    itemCount: 16,
  },
];
