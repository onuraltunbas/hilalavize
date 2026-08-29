export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  branch: "showroom" | "electrical" | "both";
  iconName: string;
  image: string;
  benefits: string[];
  steps: {
    title: string;
    description: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: "aydinlatma-danismanligi",
    title: "Ücretsiz Mekan & Aydınlatma Danışmanlığı",
    shortTitle: "Aydınlatma Danışmanlığı",
    tagline: "Evinizin ve Projenizin Mimarisine En Uygun Avize ve Işık Tasarımı",
    description:
      "Salonunuzun, yemek odanızın veya villanızın tavan yüksekliği, metrekare büyüklüğü, duvar renkleri ve mobilya tarzı avize seçiminde kritik önem taşır. Hilal Avize uzman danışmanlarımızla birlikte mekan fotoğraflarınızı inceleyerek en doğru ebat, ışık şiddeti ve tarzda modelleri belirliyoruz.",
    branch: "showroom",
    iconName: "Compass",
    image: "/images/1920x1080_hero_showroom.jpg",
    benefits: [
      "Tavan yüksekliği ve metrekareye uygun lümen/ebat hesaplaması",
      "Klasik, modern ve spor mobilyalarla kusursuz stil uyumu",
      "Işık rengi ve sıcaklığı (Kelvin) rehberliği",
      "Showroomda birebir ürünleri canlı deneme ve karşılaştırma imkanı",
    ],
    steps: [
      {
        title: "1. Mekan Bilgisi & Fotoğraf Paylaşımı",
        description: "Odanızın fotoğrafını veya planını bize WhatsApp üzerinden iletin ya da showroomumuza getirin.",
      },
      {
        title: "2. Ölçü & Işık İhtiyacı Analizi",
        description: "Danışmanlarımız mekanınız için gerekli lamba sayısı, duy tipi ve ebatı belirler.",
      },
      {
        title: "3. Model Seçimi & Önizleme",
        description: "Beğendiğiniz modeller arasından bütçenize ve zevkinize en uygun koleksiyon seçilir.",
      },
    ],
    seoTitle: "Kahramanmaraş Ücretsiz Aydınlatma ve Avize Danışmanlığı | Hilal Avize",
    seoDescription:
      "Evinize en uygun avize ve aydınlatma modelini Hilal Avize'nin uzman danışmanlarıyla belirleyin. Ücretsiz stil ve lümen danışmanlığı.",
  },
  {
    slug: "montaj-ve-guvenli-teslimat",
    title: "Özenli Nakliye & Profesyonel Montaj Hizmeti",
    shortTitle: "Nakliye & Montaj",
    tagline: "Kırılmaya Karşı %100 Güvenceli Taşıma ve Uzman Montaj Ustaları",
    description:
      "Kristal avizelerin ve hassas cam ürünlerin taşınması özel uzmanlık gerektirir. Hilal Avize olarak tüm ürünlerimizi darbeye dayanıklı özel paketlerle adresinize ulaştırıyor, tavan taşıma kapasitesini kontrol ederek güvenli şekilde asıyoruz.",
    branch: "showroom",
    iconName: "Truck",
    image: "/images/800x800_klasik_kollu_kristal_avize.jpg",
    benefits: [
      "Kristal ve cam parçaların tek tek korumalı ambalajlanması",
      "Ağır avizeler için çelik dübel ve tavan mukavemet kontrolü",
      "Temiz ve titiz işçilik ile anahtar teslim kurulum",
      "Montaj sonrası elektrik bağlantı ve test kontrolleri",
    ],
    steps: [
      {
        title: "1. Randevu & Planlama",
        description: "Sizin için en uygun gün ve saatte teslimat ve montaj randevusu oluşturulur.",
      },
      {
        title: "2. Güvenli Sevkiyat",
        description: "Özel ambalajlı ürünler kapınıza kadar hasarsız taşınır.",
      },
      {
        title: "3. Uzman Kurulum ve Test",
        description: "Usta montaj ekibimiz avizenizi tavana sağlamca sabitler ve tüm lambaları test eder.",
      },
    ],
    seoTitle: "Kahramanmaraş Avize Montajı ve Güvenli Teslimat | Hilal Avize",
    seoDescription:
      "Avize montajı, tavan asma ve kırılmaya karşı korumalı nakliye hizmeti Kahramanmaraş genelinde Hilal Avize güvencesiyle.",
  },
  {
    slug: "elektrik-montaj-ve-tadilat",
    title: "Profesyonel Elektrik & Tesisat Uygulamaları",
    shortTitle: "Elektrik & Tesisat Hizmeti",
    tagline: "Priz Montajı, Sigorta Değişimi, Spot Delimi ve Tesisat İşleri",
    description:
      "Hilal Elektrik şubemiz; anahtar-priz montajı, sigorta panosu değişimi ve bakımı, alçıpan spot delimi, ray spot hat çekimi ve bina içi elektrik arıza/onarım işlerinde profesyonel ustalarımızla çözüm sunar.",
    branch: "electrical",
    iconName: "Zap",
    image: "/images/1920x1080_elektrik_sube.jpg",
    benefits: [
      "TSE ve CE standartlarına tam uygun güvenli elektrik işçiliği",
      "Priz, anahtar, dimmer ve sensör montajları",
      "Otomatik sigorta, kaçak akım rölesi ve pano düzenleme",
      "Manyetik ray spot ve LED trafo altyapısı kurulumu",
    ],
    steps: [
      {
        title: "1. İhtiyaç Tespiti",
        description: "Yapılacak elektrik işini Murat Bilal (+90 555 977 83 49) ile görüşerek detaylandırın.",
      },
      {
        title: "2. Malzeme Seçimi",
        description: "Gerekli lüks anahtar, priz, kablo veya sigortalar elektrik şubemizden temin edilir.",
      },
      {
        title: "3. Profesyonel Uygulama",
        description: "Ustalarımız adresinize gelerek temiz, güvenli ve nizami bir montaj gerçekleştirir.",
      },
    ],
    seoTitle: "Kahramanmaraş Elektrik Ustası, Priz Montajı & Tesisat | Hilal Elektrik",
    seoDescription:
      "Kahramanmaraş Onikişubat elektrik tesisat ustası, priz değişimi, sigorta panosu montajı ve ray spot uygulaması.",
  },
  {
    slug: "mimari-ve-toplu-proje-destegi",
    title: "Mimari ve Toplu Proje Çözüm Ortaklığı",
    shortTitle: "Mimari Proje Desteği",
    tagline: "Villa, Otel, Kafe, Restoran ve Konut Projelerine Özel Tedarik",
    description:
      "İç mimarlar, müteahhitler ve proje yöneticileri için özel tasarım aydınlatma, toplu anahtar-priz tedariği, teknik şartnameye uygun ürün temini ve özel üretim imkanları sağlıyoruz.",
    branch: "both",
    iconName: "Building",
    image: "/images/800x800_manyetik_ray_spot_sistem.jpg",
    benefits: [
      "Proje bazlı özel fiyatlandırma ve esnek tedarik süreci",
      "Özel ölçü ve renkte avize / aplik üretimi",
      "Mekan 3D renderlarına uygun ürün önerileri",
      "Zamanında ve eksiksiz şantiye teslimatı",
    ],
    steps: [
      {
        title: "1. Proje & Pafta İncelemesi",
        description: "Mimari projeniz ve aydınlatma planınız teknik ekibimizce incelenir.",
      },
      {
        title: "2. Numune & Teklif Sunumu",
        description: "Uygun ürün alternatifleri, katalog ve proje teklif dosyası hazırlanır.",
      },
      {
        title: "3. Tedarik & Lojistik",
        description: "Ürünler proje takvimine uygun şekilde partiler halinde şantiyeye teslim edilir.",
      },
    ],
    seoTitle: "İç Mimarlara ve Projelere Özel Aydınlatma Çözümleri Kahramanmaraş | Hilal Avize",
    seoDescription:
      "Kahramanmaraş villa, otel ve konut projeleri için toptan aydınlatma, anahtar priz ve özel avize imalatı Hilal Avize'de.",
  },
];
