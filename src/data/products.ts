export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  style: "İhtişamlı & Klasik" | "Modern & Spor" | "Sade & Minimalist";
  badge?: string;
  description: string;
  shortDescription: string;
  material: string;
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
    id: "AVZ-01",
    slug: "padisah-kristal-kollu-saray-avizesi",
    name: "Padişah 24 Kollu Asfour Kristal Saray Avizesi",
    categorySlug: "avizeler",
    categoryName: "Lüks & Modern Avizeler",
    style: "İhtişamlı & Klasik",
    badge: "Özel Tasarım Koleksiyon",
    shortDescription: "Ağır döküm pirinç gövde ve Asfour berrak kristal prizmalarla donatılmış 24 kollu saray zarafeti.",
    description:
      "Geniş salonlar, villalar ve yüksek tavanlı mekanlar için özel olarak üretilen Padişah Serisi; saf pirinç üzerine altın varak kaplama ve ışığı gökkuşağı renginde kıran K9/Asfour kristal taşlarla donatılmıştır. Görkemi ve ihtişamı evinizin merkezine taşır.",
    material: "Döküm Pirinç & K9 Saf Kristal Taşlar",
    dimensions: "Çap: 120 cm, Yükseklik: 140 cm (Ayarlanabilir Zincir)",
    lightingType: "24x E14 Duy (Dimmerlenebilir Sıcak Beyaz LED Uyumlu)",
    branch: "showroom",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    images: [
      "/images/800x800_klasik_kollu_kristal_avize.jpg",
      "/images/1920x1080_hero_showroom.jpg",
    ],
    features: [
      "24 Adet E14 Kandil Tipi Duy",
      "Saf Ağır Döküm Pirinç İskelet",
      "Işığı Kırıcı Özel Kesim Kristal Prizmalar",
      "Kırılmaya Karşı Güvenli Özel Ahşap Kasa ile Nakliye",
      "Hilal Avize Uzman Ekibi Tarafından Profesyonel Montaj Desteği",
    ],
    seoTitle: "Padişah 24 Kollu Kristal Saray Avizesi Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Ağır pirinç döküm ve K9 kristal taşlı 24 kollu saray avizesi modeli. Kahramanmaraş Hilal Avize Showroom'unda canlı inceleyin.",
  },
  {
    id: "AVZ-02",
    slug: "solaris-gold-uc-halkali-led-avize",
    name: "Solaris Üçlü Geometrik Halka LED Sarkıt Avize",
    categorySlug: "avizeler",
    categoryName: "Lüks & Modern Avizeler",
    style: "Modern & Spor",
    badge: "En Çok Satan Modern Seri",
    shortDescription: "Fırçalanmış marigold altın gövdeli, 3 halkalı mimari modern LED avize.",
    description:
      "Modern ve spor salonların vazgeçilmezi Solaris Serisi, farklı açılarda konumlandırılabilen bağımsız 3 halkasıyla mekana dinamik bir hava katar. Yüksek verimli Samsung LED çipleri ve homojen difüzör camı sayesinde gözü yormayan sıcak amber ışık yayar.",
    material: "Eloksallı Alüminyum & Silikon Opal Difüzör",
    dimensions: "Halka Çapları: 80 cm + 60 cm + 40 cm, Yükseklik: Max 150 cm",
    lightingType: "Dahili 95W 3 Renk Kademeli (3000K-4000K-6500K) LED Çip",
    branch: "showroom",
    image: "/images/800x800_modern_led_halka_avize.jpg",
    images: [
      "/images/800x800_modern_led_halka_avize.jpg",
      "/images/1920x1080_hero_showroom.jpg",
    ],
    features: [
      "Uzaktan Kumanda & Duvar Anahtarı ile Işık Tonu Ayarı",
      "Ayarlanabilir Çelik Askı Halatları ile İstenilen Formu Verme",
      "50.000 Saat Kesintisiz LED Ömrü",
      "A++ Enerji Tasarrufu",
    ],
    seoTitle: "Solaris 3 Halkalı Modern LED Avize Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Gold fırçalanmış 3 halkalı modern LED sarkıt avize modeli. Yüksek ışık gücü ve kumandalı renk değişimi Hilal Avize'de.",
  },
  {
    id: "APL-01",
    slug: "aurora-fluteli-kristal-duvar-apligi",
    name: "Aurora Çift Yönlü Yivli Kristal Duvar Apliği",
    categorySlug: "aplikler",
    categoryName: "Dekoratif Duvar Aplikleri",
    style: "İhtişamlı & Klasik",
    badge: "Popüler Ürün",
    shortDescription: "Fırçalanmış pirinç gövdeli, boru yivli kristal camlı lüks duvar apliği.",
    description:
      "Salon konsol arkası, koridor ve yatak başı için tasarlanan Aurora Aplik, yukarı ve aşağı yönlü ışık kırılımlarıyla duvarlarınızda adeta ışık desenleri oluşturur.",
    material: "Fırçalanmış Masif Pirinç & Yivli Optik Cam",
    dimensions: "Genişlik: 12 cm, Yükseklik: 48 cm, Derinlik: 10 cm",
    lightingType: "2x G9 LED Duy (3000K Sıcak Amber Işık Dahil)",
    branch: "showroom",
    image: "/images/800x800_dekoratif_duvar_aplik.jpg",
    images: ["/images/800x800_dekoratif_duvar_aplik.jpg"],
    features: [
      "Çift Yönlü Sıcak Işık Hüzmesi",
      "Kararmaya ve Neme Dayanıklı Pirinç Kaplama",
      "Kolay Montaj Sistemi",
    ],
    seoTitle: "Aurora Kristal Duvar Apliği Kahramanmaraş | Hilal Avize",
    seoDescription: "Yivli kristal camlı ve gold gövdeli lüks salon duvar apliği modeli Hilal Avize Showroom'unda.",
  },
  {
    id: "SPT-01",
    slug: "invisa-manyetik-ray-spot-aydinlatma-sistemi",
    name: "Invisa Manyetik Ray Spot & Lineer Tavan Sistemi",
    categorySlug: "spot-ve-ray-spot",
    categoryName: "Spot & Manyetik Ray Spot Sistemleri",
    style: "Sade & Minimalist",
    badge: "Mimarların Tercihi",
    shortDescription: "Gömme ve sıva üstü manyetik ray profili, tak-çıkar spot modülleri.",
    description:
      "Mimari projelerde ve modern konutlarda tavan estetiğini en üst düzeye çıkaran Invisa manyetik ray sistemi, modülleri dilediğiniz gibi kaydırmanıza ve yönlendirmenize olanak tanır.",
    material: "Ekstrüde Alüminyum & Manyetik Bakır İletken Ray",
    dimensions: "Ray Uzunluğu: 1m, 2m, 3m (Birbirine Eklenebilir Modüler)",
    lightingType: "24V / 48V Güvenli Düşük Gerilim Osram LED Modüller",
    branch: "electrical",
    image: "/images/800x800_manyetik_ray_spot_sistem.jpg",
    images: ["/images/800x800_manyetik_ray_spot_sistem.jpg"],
    features: [
      "Aletsiz Tek Elle Tak-Çıkar Manyetik Kilit",
      "360 Derece Dönebilen Spot ve Geniş Açılı Lineer Modüller",
      "Göz Kamaştırmayan UGR<19 Anti-Glare Lensler",
      "Hilal Elektrik Tarafından Profesyonel Tesisat Kurulumu",
    ],
    seoTitle: "Manyetik Ray Spot Tavan Aydınlatması Kahramanmaraş | Hilal Elektrik",
    seoDescription:
      "Modern manyetik ray spot sistemleri ve armatürleri. Kahramanmaraş Hilal Elektrik şubesinde teknik destek ve montaj.",
  },
  {
    id: "AYN-01",
    slug: "luna-dokunmatik-led-bugu-onleyicili-ayna",
    name: "Luna Gold Çerçeveli Akıllı Dokunmatik LED Ayna",
    categorySlug: "dekoratif-aynalar",
    categoryName: "Dekoratif & Akıllı LED Aynalar",
    style: "Modern & Spor",
    badge: "Akıllı Teknoloji",
    shortDescription: "Halo ambiyans arka aydınlatmalı, dijital saatli ve buğu önleyicili banyo & salon aynası.",
    description:
      "Yuvarlak fırçalanmış gold çerçeveye sahip Luna Ayna; dokunmatik sensör ile açılıp kapanabilir, ışık tonu kısılabilir ve rezistanslı ısıtma pedi sayesinde banyoda buğu yapmaz.",
    material: "Flotal Ekolojik Ayna & Fırçalanmış Alüminyum Gövde",
    dimensions: "Çap: 80 cm, Kalınlık: 3.5 cm",
    lightingType: "CRI>90 Yüksek Renk Doğruluğu Sağlayan IP44 Su Geçirmez LED",
    branch: "showroom",
    image: "/images/800x800_dokunmatik_led_ayna.jpg",
    images: ["/images/800x800_dokunmatik_led_ayna.jpg"],
    features: [
      "Dokunmatik Dimmer ve Renk Sıcaklığı Geçişi (3000K/4000K/6000K)",
      "Entegre Buğu Önleyici Rezistans",
      "Dijital Saat ve Sıcaklık Göstergesi",
      "Kararmaya Karşı 5 Yıl Flotal Ayna Garantisi",
    ],
    seoTitle: "Luna Dokunmatik LED Işıklı Ayna Modelleri Kahramanmaraş | Hilal Avize",
    seoDescription: "Gold çerçeveli yuvarlak LED ayna ve buğu önleyicili banyo/salon aynası Hilal Avize Showroom'unda.",
  },
  {
    id: "DST-01",
    slug: "artisan-mermer-kadranli-metal-duvar-saati",
    name: "Artisan Çift Çemberli Mermer Kadranlı Lüks Duvar Saati",
    categorySlug: "duvar-ve-masa-saatleri",
    categoryName: "Özel Tasarım Duvar & Masa Saatleri",
    style: "Modern & Spor",
    badge: "Tasarım Ödüllü",
    shortDescription: "Hakiki beyaz Calacatta mermer göbekli ve mat siyah/gold metal çift çemberli salon saati.",
    description:
      "Sessiz akar saniyeli mekanizması ile sıfır ses çıkaran Artisan Duvar Saati, mermer ve metalin zengin kontrastını duvarlarınıza taşır.",
    material: "Doğal Calacatta Mermer & Elektrostatik Fırın Boyalı Metal",
    dimensions: "Çap: 70 cm, Derinlik: 5 cm",
    lightingType: "Mekanik Saat (Pil ile Çalışır)",
    branch: "showroom",
    image: "/images/800x800_ozel_tasarim_duvar_saati.jpg",
    images: ["/images/800x800_ozel_tasarim_duvar_saati.jpg"],
    features: [
      "Sessiz ve Hassas Akar Mekanizma",
      "Doğal Mermer Damar Dokusu (Her Ürün Benzersizdir)",
      "Pirinç Vurgulu Akrep ve Yelkovan",
    ],
    seoTitle: "Artisan Mermer ve Gold Büyük Duvar Saati Kahramanmaraş | Hilal Aksesuar",
    seoDescription: "Lüks dekoratif salon duvar saatleri ve büyük boy mermer saat modelleri Hilal Aksesuar'da.",
  },
  {
    id: "SUS-01",
    slug: "murano-altin-varakli-ufleme-cam-vazo-seti",
    name: "Murano Amber & Altın Varaklı El Üfleme Cam Vazo Seti",
    categorySlug: "cam-sus-esyalari",
    categoryName: "Cam Sanat & Süs Eşyaları",
    style: "İhtişamlı & Klasik",
    badge: "El İşçiliği Özel Seri",
    shortDescription: "Geleneksel üfleme tekniğiyle üretilmiş, 24K altın tozlu amber kristal vazo ve kase seti.",
    description:
      "Cam ustalarının nefesi ve el emeğiyle şekillenen bu benzersiz set, ışığı altında ışıltılı altın parçacıklarıyla parlayarak konsol ve yemek masalarında sanatsal bir odak noktası oluşturur.",
    material: "El Üfleme Kristal Cam & 24K Altın Varak Taneleri",
    dimensions: "Büyük Vazo: 38 cm, Orta Vazo: 28 cm, Kase: 22 cm Çap",
    lightingType: "Dekoratif Obje",
    branch: "showroom",
    image: "/images/800x800_ufleme_cam_vazo_aksesuar.jpg",
    images: ["/images/800x800_ufleme_cam_vazo_aksesuar.jpg"],
    features: [
      "%100 El Emeği Üfleme Sanatı",
      "İçinde Gerçek Altın Varak Tanecikleri",
      "Ağır ve Dengeli Kristal Taban",
    ],
    seoTitle: "Murano El Yapımı Cam Vazo ve Aksesuarlar Kahramanmaraş | Hilal Aksesuar",
    seoDescription: "Altın varaklı el üfleme cam süs eşyaları ve lüks masa üstü objeler Hilal Avize & Aksesuar'da.",
  },
  {
    id: "ANH-01",
    slug: "prestige-temperli-siyah-cam-cerceveli-anahtar-priz",
    name: "Prestige Temperli Siyah Cam & Gold Çerçeveli Anahtar Priz Serisi",
    categorySlug: "anahtar-ve-priz-serileri",
    categoryName: "Lüks Anahtar & Priz Serileri",
    style: "Modern & Spor",
    badge: "Lüks Elektrik Serisi",
    shortDescription: "Çizilmez temperli kristal cam panel, şampanya gold fırçalanmış dış çerçeve.",
    description:
      "Evlerinizde ve villalarınızda standart plastik prizlerin yerine lüks bir dokunuş katan Prestige serisi; dokunmatik veya mekanik butonlu anahtarları ve çocuk korumalı prizleriyle güvenliği ve zarafeti birleştirir.",
    material: "4mm Temperli Kristal Cam & Masif Alüminyum Çerçeve",
    dimensions: "Standart Sıva Altı Kasa Uyumlu (Modüler 1'li, 2'li, 3'lü, 4'lü Kombinasyon)",
    lightingType: "Gece Konumunu Gösteren Yumuşak LED Işıklı Butonlar",
    branch: "electrical",
    image: "/images/800x800_luks_cam_anahtar_priz.jpg",
    images: ["/images/800x800_luks_cam_anahtar_priz.jpg"],
    features: [
      "Çizilmeye ve Isıya Dayanıklı Temperli Cam Yüzey",
      "Çocuk Korumalı Emniyetli Priz Mekanizması",
      "Kolay Silinebilir ve Leke Tutmaz Yüzey",
      "Hilal Elektrik Tarafından Yerinde Güvenli Montaj",
    ],
    seoTitle: "Temperli Cam Çerçeveli Lüks Anahtar Priz Kahramanmaraş | Hilal Elektrik",
    seoDescription: "Siyah ve beyaz cam çerçeveli lüks anahtar priz çeşitleri Kahramanmaraş Hilal Elektrik şubesinde.",
  },
  {
    id: "KOL-01",
    slug: "majestic-kraliyet-mavisi-kadife-berjer",
    name: "Majestic Gold Ayaklı Gece Mavisi Kadife Tasarım Berjer",
    categorySlug: "dekoratif-koltuk-ve-berjerler",
    categoryName: "Dekoratif Koltuk & Berjerler",
    style: "İhtişamlı & Klasik",
    badge: "Showroom Özel Ürünü",
    shortDescription: "Su itici birinci sınıf lüks kadife kumaş, ergonomik sırt ve titanyum gold paslanmaz ayaklar.",
    description:
      "Avizenizin ve lambaderinizin sıcak ışığı altında kitap okumak veya dinlenmek için tasarlanan Majestic Berjer, derin noctis mavi kadifesiyle mekanınıza asil bir duruş kazandırır.",
    material: "İthal Soft Kadife & Fırınlanmış Gürgen İskelet & Titanyum Gold Metal Ayak",
    dimensions: "Genişlik: 82 cm, Derinlik: 85 cm, Yükseklik: 95 cm",
    lightingType: "Dekoratif Mobilya",
    branch: "showroom",
    image: "/images/800x800_kadife_tasarim_berjer.jpg",
    images: ["/images/800x800_kadife_tasarim_berjer.jpg"],
    features: [
      "35 DNS Yüksek Yoğunluklu Konfor Süngeri",
      "Silinebilir Leke Tutmaz İpeksi Kadife Doku",
      "Paslanmaz Titanyum Gold Kaplama Ayaklar",
    ],
    seoTitle: "Lüks Mavi Kadife Berjer ve Tekli Koltuk Kahramanmaraş | Hilal Aksesuar",
    seoDescription: "Gold ayaklı tasarım kadife berjer modelleri Hilal Avize & Aksesuar Showroom'unda.",
  },
  {
    id: "SEH-01",
    slug: "imperia-italyan-calacatta-mermer-ikili-orta-sehpa",
    name: "Imperia İtalyan Calacatta Mermer İkili İç İçe Orta Sehpa",
    categorySlug: "dekoratif-sehpalar",
    categoryName: "Dekoratif Mermer & Bronz Sehpalar",
    style: "Modern & Spor",
    badge: "Hakiki Doğal Mermer",
    shortDescription: "Özel koruma cilalı hakiki mermer tabla ve fırçalanmış marigold bronz çember ayaklar.",
    description:
      "Birbirinin içine geçebilen modüler ikili tasarımı ile alan tasarrufu sağlayan Imperia Orta Sehpa seti, doğal mermerin eşsiz damarlarıyla salonunuzun zeminini taçlandırır.",
    material: "Doğal Calacatta Beyaz Mermer & Paslanmaz Bronz Çelik",
    dimensions: "Büyük: Çap 85 cm - Yükseklik 45 cm, Küçük: Çap 65 cm - Yükseklik 38 cm",
    lightingType: "Dekoratif Mobilya",
    branch: "showroom",
    image: "/images/800x800_mermer_bronz_orta_sehpa.jpg",
    images: ["/images/800x800_mermer_bronz_orta_sehpa.jpg"],
    features: [
      "Doğal Taş Koruma Cilası (Leke ve Sıvı İtici)",
      "CNC Kesim Pahlı Mermer Kenarlar",
      "Ağır ve Sarsılmaz Bronz Metal İskelet",
    ],
    seoTitle: "Calacatta Mermer İkili Yuvarlak Orta Sehpa Kahramanmaraş | Hilal Aksesuar",
    seoDescription: "Doğal mermer tablalı bronz ayaklı lüks orta sehpa takımları Hilal Avize & Aksesuar'da.",
  },
];
