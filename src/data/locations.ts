export interface LocationPage {
  slug: string;
  name: string;
  district: string;
  city: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  highlights: string[];
  nearbyDistricts: string[];
  primaryBranch: "showroom" | "electrical" | "both";
}

export const LOCATIONS: LocationPage[] = [
  {
    slug: "kahramanmaras-avize-aydinlatma",
    name: "Kahramanmaraş Genel",
    district: "Merkez & Tüm İlçeler",
    city: "Kahramanmaraş",
    title: "Kahramanmaraş Lüks Avize, Aydınlatma & Elektrik Mağazası",
    description:
      "Kahramanmaraş'ın tüm ilçe ve mahallelerine lüks saray avizeleri, modern LED sarkıtlar, dekoratif aynalar, cam süs eşyaları, saatler ve elektrik malzemeleri tedarik ediyoruz. Yerinde montaj ve uzman danışmanlık ayrıcalığıyla.",
    seoTitle: "Kahramanmaraş Avize Mağazaları & Elektrikçiler | Hilal Avize & Elektrik",
    seoDescription:
      "Kahramanmaraş'ın en zengin avize, aplik, spot, ayna ve elektrik malzemeleri çeşitleri Hilal Elektrik Avize Aksesuar'da. Showroomumuza bekleriz.",
    highlights: [
      "Kahramanmaraş genelinde adrese teslim ve profesyonel montaj",
      "Geniş showroomda yüzlerce avize modelini canlı görme imkanı",
      "Mimar ve ev sahiplerine özel aydınlatma danışmanlığı",
      "Elektrik malzemeleri ve tesisat işlerinde hızlı servis",
    ],
    nearbyDistricts: ["Onikişubat", "Dulkadiroğlu", "Türkoğlu", "Göksun", "Afşin", "Elbistan", "Pazarcık", "Andırın"],
    primaryBranch: "both",
  },
  {
    slug: "onikisubat-elektrik-avize",
    name: "Onikişubat",
    district: "Onikişubat",
    city: "Kahramanmaraş",
    title: "Onikişubat Avize, Aydınlatma, Priz ve Elektrik Malzemeleri",
    description:
      "Onikişubat ilçesinde yer alan 2 ayrı şubemizle (Avize & Dekorasyon Showroom ve Elektrik Tesisat Şubesi) Onikişubat sakinlerine en yakın, en kaliteli aydınlatma ve elektrik çözümlerini sunuyoruz.",
    seoTitle: "Onikişubat Avizeciler & Elektrik Malzemesi | Hilal Avize Showroom",
    seoDescription:
      "Onikişubat Kahramanmaraş'ta modern ve klasik avize çeşitleri, LED spotlar, cam çerçeveli anahtar prizler Hilal Avize ve Elektrik şubelerinde.",
    highlights: [
      "Onikişubat Yirmiikigün Mahallesi'nde merkezi konumda 2 şube",
      "Aynı gün keşif, montaj ve teslimat imkanı",
      "Priz takma, sigorta arıza ve elektrik bakım hizmetleri",
      "Otopark kolaylığı ve ferah showroom deneyimi",
    ],
    nearbyDistricts: ["Yirmiikigün", "Binevler", "Üngüt", "Boğaziçi", "Haydar Çavuş", "Hürriyet", "Necip Fazıl"],
    primaryBranch: "both",
  },
  {
    slug: "yirmiikigun-mahallesi-avize-showroom",
    name: "Yirmiikigün Mahallesi",
    district: "Onikişubat",
    city: "Kahramanmaraş",
    title: "Yirmiikigün Mahallesi Hilal Avize & Elektrik Şubeleri",
    description:
      "Yirmiikigün Mahallesi Umut Kent Sitesi ve Eymen Sitesi altındaki mağazalarımızla mahallemize ve tüm şehre en üstün hizmeti vermekten gurur duyuyoruz.",
    seoTitle: "Yirmiikigün Mahallesi Avize ve Elektrikçi | Hilal Avize Showroom",
    seoDescription:
      "Yirmiikigün Mah. Umut Kent ve Eymen Sitesi altı Hilal Avize & Elektrik. Avize, ayna, saat, abajur ve elektrik montajı.",
    highlights: [
      "Umut Kent Sitesi F Blok Altı No: 4A Avize Showroom",
      "Şehit Polis Ali Mülazımoğlu Cad. Eymen Sitesi No: 12 Elektrik Şubesi",
      "Yürüme mesafesinde kolay erişim ve geniş ürün teşhiri",
    ],
    nearbyDistricts: ["Umut Kent Sitesi", "Eymen Sitesi", "Şehit Polis Ali Mülazımoğlu Cad.", "91056. Sokak"],
    primaryBranch: "both",
  },
  {
    slug: "dulkadiroglu-avize-aydinlatma",
    name: "Dulkadiroğlu",
    district: "Dulkadiroğlu",
    city: "Kahramanmaraş",
    title: "Dulkadiroğlu Lüks Avize ve Elektrik Tedariği",
    description:
      "Dulkadiroğlu bölgesindeki ev, tarihi konak, restoran ve iş yerleri için özel avizeler, sarkıt aydınlatmalar ve elektrik tesisat malzemeleri.",
    seoTitle: "Dulkadiroğlu Avize ve Aydınlatma Mağazası | Hilal Avize Kahramanmaraş",
    seoDescription:
      "Dulkadiroğlu ilçesi için klasik ve modern avize modelleri, aplikler, ray spotlar. Korumalı nakliye ve montaj ile Hilal Avize'de.",
    highlights: [
      "Tarihi ve modern konseptlere uygun avize tasarımları",
      "Dulkadiroğlu geneline hızlı ve güvenli montaj servisi",
      "Toplu elektrik malzemesi ve tesisat desteği",
    ],
    nearbyDistricts: ["Doğukent", "Bahçelievler", "İsmetpaşa", "Yavuz Selim", "Sütçü İmam"],
    primaryBranch: "both",
  },
];
