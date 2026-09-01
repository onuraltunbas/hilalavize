import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#0B132B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hilalavize.com"),
  title: {
    default: "Hilal Elektrik Avize Aksesuar | Kahramanmaraş Lüks Aydınlatma Showroomu",
    template: "%s | Hilal Elektrik Avize Aksesuar",
  },
  description:
    "Kahramanmaraş Onikişubat'ta lüks saray tipi kristal avizeler, modern LED sarkıtlar, dekoratif aynalar, cam süs eşyaları, saatler ve elektrik malzemeleri. Ücretsiz danışmanlık ve montaj güvencesi.",
  keywords: [
    "Kahramanmaraş avize",
    "Onikişubat avize mağazaları",
    "Hilal Avize Kahramanmaraş",
    "Kahramanmaraş elektrikçi",
    "kristal avize modelleri",
    "modern LED avize",
    "manyetik ray spot",
    "dokunmatik led ayna",
    "lüks cam anahtar priz",
    "dekoratif saat ve berjer",
  ],
  authors: [{ name: "Hilal Elektrik Avize Aksesuar" }],
  creator: "Hilal Elektrik Avize Aksesuar",
  publisher: "Hilal Elektrik Avize Aksesuar",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hilalavize.com",
    siteName: "Hilal Elektrik Avize Aksesuar",
    title: "Hilal Elektrik Avize Aksesuar | Kahramanmaraş Lüks Aydınlatma",
    description:
      "Kahramanmaraş Onikişubat'ta 2 uzman şubemizle lüks avize, modern aydınlatma, dekoratif aksesuarlar ve profesyonel elektrik montaj hizmeti sunuyoruz.",
    images: [
      {
        url: "/images/1920x1080_hero_showroom.jpg",
        width: 1920,
        height: 1080,
        alt: "Hilal Avize Showroom Kahramanmaraş",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilal Elektrik Avize Aksesuar | Kahramanmaraş",
    description:
      "Lüks kristal avizeler, modern sarkıtlar, dekoratif aynalar ve elektrik malzemeleri. Kahramanmaraş Onikişubat.",
    images: ["/images/1920x1080_hero_showroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/hilal_logo.png",
    shortcut: "/images/hilal_logo.png",
    apple: "/images/hilal_logo.png",
  },
  verification: {
    google: "google-site-verification-kodunuz-buraya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#080D1A] text-slate-100 antialiased selection:bg-[#F59E0B] selection:text-slate-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
