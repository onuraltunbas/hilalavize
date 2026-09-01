import React from "react";
import { COMPANY_DATA } from "@/data/company";

export function JsonLd() {
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "@id": `${COMPANY_DATA.siteUrl}/#organization`,
    name: COMPANY_DATA.name,
    alternateName: "Hilal Avize Kahramanmaraş",
    url: COMPANY_DATA.siteUrl,
    logo: `${COMPANY_DATA.siteUrl}/images/hilal_logo.png`,
    image: `${COMPANY_DATA.siteUrl}/images/1920x1080_hero_showroom.jpg`,
    description: COMPANY_DATA.description,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: showroom.address.street,
      addressLocality: showroom.address.district,
      addressRegion: showroom.address.city,
      addressCountry: "TR",
    },
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
        closes: "17:00",
      },
    ],
    department: [
      {
        "@type": "LightingStore",
        name: showroom.name,
        image: `${COMPANY_DATA.siteUrl}/images/1920x1080_hero_showroom.jpg`,
        telephone: showroom.contacts[0].phone,
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
        name: electrical.name,
        image: `${COMPANY_DATA.siteUrl}/images/1920x1080_elektrik_sube.jpg`,
        telephone: electrical.contacts[0].phone,
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
