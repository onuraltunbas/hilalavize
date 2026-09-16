import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function JsonLd() {
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY_DATA.siteUrl}/#website`,
    name: "Hilal Elektrik Avize",
    alternateName: [
      "Hilal",
      "Hilal Elektrik",
      "Hilal Avize",
      "Hilal Elektrik Avize",
      "Hilal Elektrik Kahramanmaraş",
      "hilalelektrikavize.com",
    ],
    url: COMPANY_DATA.siteUrl,
    inLanguage: "tr-TR",
    description: COMPANY_DATA.description,
    publisher: {
      "@id": `${COMPANY_DATA.siteUrl}/#organization`,
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeGoodsStore", "LightingStore", "Electrician"],
    "@id": `${COMPANY_DATA.siteUrl}/#organization`,
    name: COMPANY_DATA.name,
    legalName: "Hilal Elektrik Avize Aksesuar",
    alternateName: [
      "Hilal",
      "Hilal Elektrik",
      "Hilal Avize",
      "Hilal Elektrik Avize",
      "Hilal Avize Kahramanmaraş",
      "Hilal Elektrik Kahramanmaraş",
      "Hilal Aydınlatma",
    ],
    logo: `${COMPANY_DATA.siteUrl}/images/Gemini_Generated_Image_6kicah6kicah6kic-removebg-preview.png`,
    image: [
      `${COMPANY_DATA.siteUrl}/images/1920x1080_hero_showroom.jpg`,
      `${COMPANY_DATA.siteUrl}/images/1920x1080_elektrik_sube.jpg`,
    ],
    description: COMPANY_DATA.description,
    priceRange: "$$",
    currenciesAccepted: "TRY",
    paymentAccepted: "Nakit, Kredi Kartı, Banka Havalesi",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Kahramanmaraş",
      },
      {
        "@type": "AdministrativeArea",
        name: "Onikişubat",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dulkadiroğlu",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: showroom.address.street,
      addressLocality: showroom.address.district,
      addressRegion: showroom.address.city,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: showroom.coordinates.lat,
      longitude: showroom.coordinates.lng,
    },
    hasMap: showroom.googleMapsUrl,
    sameAs: [
      COMPANY_DATA.socials.instagram,
      showroom.googleMapsUrl,
      electrical.googleMapsUrl,
    ],
    telephone: showroom.contacts[0].phone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    founder: {
      "@type": "Person",
      "name": "Onur ALTUNBAŞ",
    },
    slogan: "Kahramanmaraş'ın En Kapsamlı Avize ve Aydınlatma Mağazası",
    brand: {
      "@type": "Brand",
      "name": "Hilal Avize",
    },
    knowsAbout: [
      "Avize",
      "Hilal Avize",
      "Hilal Elektrik",
      "Hilal",
      "Kahramanmaraş Avize",
      "Klasik Kristal Avize",
      "Modern LED Avize",
      "Cam Sarkıt Avize",
      "Özel İmalat Galeri Boşluğu Avizesi",
      "Mimari Aydınlatma Tasarımı",
      "Aydınlatma Danışmanlığı",
      "Çelik Dübel Avize Montajı",
      "Elektrik Malzemeleri ve Tesisat",
      "İç Mekan Aydınlatma",
      "LED Aydınlatma Sistemleri",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Avize ve Aydınlatma Koleksiyonları",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Özel İmalat Avizeler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Özel Tasarım Galeri Boşluğu ve Salon Avizeleri",
                description: "Yüksek tavanlar, villa galeri boşlukları ve mimari projeler için özel ölçü avize üretimi.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Klasik Kristal Avizeler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Birinci Sınıf Taşlı Kristal Avizeler",
                description: "Işıltılı, zarif ve zamansız klasik salon kristal avizeleri.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Modern LED Avizeler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Kumandalı ve Dimmerlı Modern LED Avizeler",
                description: "Minimalist çizgiler, renk geçişli ve tasarruflu yeni nesil aydınlatma.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Cam Sarkıt Avizeler",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Üfleme Cam ve Füme Sarkıt Avizeler",
                description: "Mutfak adaları, yemek masaları ve oturma odaları için sıcak tasarım cam sarkıtlar.",
              },
            },
          ],
        },
      ],
    },
    department: [
      {
        "@type": "LightingStore",
        "@id": `${COMPANY_DATA.siteUrl}/#showroom`,
        name: showroom.name,
        alternateName: ["Hilal Avize Showroom", "Hilal Avize"],
        image: `${COMPANY_DATA.siteUrl}/images/1920x1080_hero_showroom.jpg`,
        telephone: showroom.contacts[0].phone,
        hasMap: showroom.googleMapsUrl,
        geo: {
          "@type": "GeoCoordinates",
          latitude: showroom.coordinates.lat,
          longitude: showroom.coordinates.lng,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: showroom.address.street,
          addressLocality: showroom.address.district,
          addressRegion: showroom.address.city,
          addressCountry: "TR",
        },
      },
      {
        "@type": "Electrician",
        "@id": `${COMPANY_DATA.siteUrl}/#electrical`,
        name: electrical.name,
        alternateName: ["Hilal Elektrik", "Hilal Elektrik Tesisat"],
        image: `${COMPANY_DATA.siteUrl}/images/1920x1080_elektrik_sube.jpg`,
        telephone: electrical.contacts[0].phone,
        hasMap: electrical.googleMapsUrl,
        geo: {
          "@type": "GeoCoordinates",
          latitude: electrical.coordinates.lat,
          longitude: electrical.coordinates.lng,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: electrical.address.street,
          addressLocality: electrical.address.district,
          addressRegion: electrical.address.city,
          addressCountry: "TR",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kahramanmaraş'ta avize nereden alınır?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kahramanmaraş'ta avize ve aydınlatma ihtiyaçlarınız için Hilal Avize, Onikişubat'taki 3 katlı showroomunda klasik kristal, modern LED, cam sarkıt ve özel tasarım galeri boşluğu avizelerinden oluşan en geniş koleksiyonu sunmaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "Özel ölçü veya galeri boşluğu avizesi yaptırabilir miyim?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Hilal Avize, yüksek tavanlı evler, villalar, oteller ve ticari projeler için mimari ekibiyle mekanınıza özel ölçü ve tasarım avize imalatı gerçekleştirmektedir.",
        },
      },
      {
        "@type": "Question",
        name: "Avize montajı ve kurulum hizmeti veriyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet. Hilal Elektrik & Avize kendi usta kadrosuyla özellikle ağır kristal ve yüksek tavan avizelerinde çelik dübel montajı ve güvenli elektrik bağlantısı dahil anahtar teslim montaj hizmeti sağlamaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "Hilal Elektrik & Avize nerede?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avize ve Aydınlatma Showroomumuz Kahramanmaraş Onikişubat Haydar Çavuş Caddesi üzerindedir. Toptan ve perakende Elektrik Malzemeleri şubemiz ise Kahramanmaraş Dulkadiroğlu ilçesinde hizmet vermektedir.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
