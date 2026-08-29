export interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  type: "showroom" | "electrical";
  headline: string;
  description: string;
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    full: string;
  };
  contacts: {
    name: string;
    role: string;
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
  }[];
  workingHours: {
    days: string;
    hours: string;
    sunday: string;
  };
  features: string[];
  image: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
    formatted: string;
  };
}

export const COMPANY_DATA = {
  name: "Hilal Elektrik Avize Aksesuar",
  shortName: "Hilal Avize",
  tagline: "Işığın ve Zarafetin Kahramanmaraş'taki Buluşma Noktası",
  description:
    "Hilal Elektrik Avize Aksesuar, Kahramanmaraş Onikişubat'ta iki ayrı uzman şubesiyle hizmet vermektedir. Lüks avize, modern aplik, ray spot, cam sanat objeleri, ayna, saat, dekoratif mobilya showroomumuz ve profesyonel elektrik malzemeleri & uygulama şubemizle yaşam alanlarınızı aydınlatıyoruz.",
  siteUrl: "https://hilalavize-five.vercel.app",
  establishedYear: "1998",
  socials: {
    instagram: "https://www.instagram.com/hilal.avize/",
    instagramHandle: "@hilal.avize",
  },
  
  branches: [
    {
      id: "avize-showroom",
      name: "Hilal Avize & Aksesuar Showroom Şubesi",
      shortName: "Avize & Dekorasyon Showroom",
      type: "showroom",
      headline: "Lüks Avize, Aydınlatma & Özel Dekorasyon Koleksiyonları",
      description:
        "Modern LED avizelerden ihtişamlı saray tipi kristal kollu modellere, dekoratif aynalardan İtalyan mermer sehpa ve berjerlere kadar seçkin ev dekorasyonu vitrini.",
      address: {
        street: "91056. Sokak Umut Kent Sitesi F Blok Altı No: 4A",
        neighborhood: "Yirmiikigün Mahallesi",
        district: "Onikişubat",
        city: "Kahramanmaraş",
        full: "Yirmiikigün Mah. 91056. Sok. Umut Kent Sitesi F Blok Altı No: 4A, Onikişubat / Kahramanmaraş",
      },
      contacts: [
        {
          name: "Lütfiye Bilal",
          role: "Showroom & Aydınlatma Danışmanı",
          phone: "+905053801350",
          phoneFormatted: "0505 380 13 50",
          whatsapp: "905053801350",
        },
        {
          name: "Çiğdem Altunbaş",
          role: "Dekorasyon & Müşteri İlişkileri",
          phone: "+905069059632",
          phoneFormatted: "0506 905 96 32",
          whatsapp: "905069059632",
        },
      ],
      workingHours: {
        days: "Pazartesi - Cumartesi",
        hours: "09:00 - 17:00",
        sunday: "Pazar Günleri Kapalı (Özel Randevu ile Açılabilir)",
      },
      features: [
        "1. Sınıf K9 & Asfour Kristal Cam Kalitesi",
        "Evinize & Mekanınıza Özel Ücretsiz Aydınlatma Danışmanlığı",
        "Kırılmaya Karşı %100 Güvenceli Özenli Nakliye",
        "Uzman Ekiple Güvenli Montaj Hizmeti",
        "İhtişamlı Klasik & Modern Spor Geniş Ürün Yelpazesi",
      ],
      image: "/images/1920x1080_hero_showroom.jpg",
      googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=37.585632903905484,36.85069134447522",
      embedMapUrl: "https://maps.google.com/maps?q=37.585632903905484,36.85069134447522&hl=tr&z=16&output=embed",
      coordinates: {
        lat: 37.585632903905484,
        lng: 36.85069134447522,
        formatted: "37.585632903905484, 36.85069134447522",
      },
    },
    {
      id: "elektrik-sube",
      name: "Hilal Elektrik & Tesisat Malzemeleri Şubesi",
      shortName: "Elektrik & Tesisat Şubesi",
      type: "electrical",
      headline: "Toptan & Perakende Elektrik Malzemeleri ve Profesyonel Uygulama",
      description:
        "Tüm elektrik malzemeleri, lüks anahtar & priz serileri, sigorta kutuları, kablo ve aydınlatma armatürleri satışı ile profesyonel montaj, sigorta değişimi ve elektrik uygulama hizmetleri.",
      address: {
        street: "Şehit Polis Ali Mülazımoğlu Caddesi Eymen Sitesi Altı No: 12",
        neighborhood: "Yirmiikigün Mahallesi",
        district: "Onikişubat",
        city: "Kahramanmaraş",
        full: "Yirmiikigün Mah. Şehit Polis Ali Mülazımoğlu Cad. Eymen Sitesi Altı No: 12, Onikişubat / Kahramanmaraş",
      },
      contacts: [
        {
          name: "Murat Bilal",
          role: "Elektrik & Proje Sorumlusu",
          phone: "+905559778349",
          phoneFormatted: "0555 977 83 49",
          whatsapp: "905559778349",
        },
      ],
      workingHours: {
        days: "Pazartesi - Cumartesi",
        hours: "09:00 - 17:00",
        sunday: "Pazar Günleri Kapalı",
      },
      features: [
        "Lüks Cam & Metal Çerçeveli Anahtar-Priz Serileri",
        "TSE ve CE Belgeli Orijinal Elektrik Malzemeleri",
        "Profesyonel Elektrik Montajı, Priz & Sigorta Değişimi",
        "Manyetik Ray Spot ve Gömme Tavan Spot Çözümleri",
        "Konut, Villa ve Ticari Alan Tesisat Desteği",
      ],
      image: "/images/1920x1080_elektrik_sube.jpg",
      googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=37.59150608778074,36.8587423123147",
      embedMapUrl: "https://maps.google.com/maps?q=37.59150608778074,36.8587423123147&hl=tr&z=16&output=embed",
      coordinates: {
        lat: 37.59150608778074,
        lng: 36.8587423123147,
        formatted: "37.59150608778074, 36.8587423123147",
      },
    },
  ] as BranchInfo[],
  
  trustBadges: [
    {
      title: "%100 Kristal ve Birinci Sınıf Malzeme",
      description: "Tüm avizelerimizde yüksek berraklıkta kristal camlar ve uzun ömürlü yüksek lümenli LED çipler kullanılır.",
      icon: "Sparkles",
    },
    {
      title: "Ücretsiz Mekan Aydınlatma Danışmanlığı",
      description: "Odanızın tavan yüksekliğine, metrekaresine ve mobilya tarzınıza en uygun modeli birlikte seçiyoruz.",
      icon: "Compass",
    },
    {
      title: "Özenli Nakliye & Güvenli Montaj",
      description: "Ürünlerinizi kırılma riskine karşı özel ambalajla taşıyor, uzman ustalarımızla titizlikle monte ediyoruz.",
      icon: "ShieldCheck",
    },
    {
      title: "İki Kapsamlı Uzman Şube",
      description: "Onikişubat'ta hem lüks avize dekorasyon showroomumuz hem de tam donanımlı elektrik şubemizle yanınızdayız.",
      icon: "Store",
    },
  ],
};
