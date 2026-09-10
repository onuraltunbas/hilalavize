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
    url: COMPANY_DATA.siteUrl,
    logo: `${COMPANY_DATA.siteUrl}/images/hilal_logo.png`,
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
    </>
  );
}
