import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hilalelektrikavize.com"),
  title: {
    default: "Hilal Elektrik & Avize | Kahramanmaraş Lüks Avize, Aydınlatma ve Elektrik",
    template: "%s | Hilal Elektrik & Avize Kahramanmaraş",
  },
  description:
    "Hilal Elektrik & Avize Kahramanmaraş Onikişubat'ta lüks saray tipi kristal avizeler, modern LED aplikler, dekoratif aksesuarlar ve toptan-perakende elektrik malzemeleri ile hizmetinizde. Ücretsiz keşif ve profesyonel montaj.",
  keywords: [
    "Hilal",
    "Hilal Elektrik",
    "Hilal Avize",
    "Hilal Elektrik Avize",
    "Hilal Elektrik Kahramanmaraş",
    "Hilal Avize Kahramanmaraş",
    "hilalelektrikavize.com",
    "Kahramanmaraş avize",
    "Kahramanmaraş elektrikçi",
    "Kahramanmaraş aydınlatma",
    "Onikişubat avize mağazaları",
    "Onikişubat elektrik malzemeleri",
    "kristal avize modelleri",
    "modern LED avize",
    "manyetik ray spot",
    "dokunmatik led ayna",
    "lüks cam anahtar priz",
    "avize tamiri ve montajı Kahramanmaraş",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Hilal Elektrik & Avize", url: "https://hilalelektrikavize.com" }],
  creator: "Hilal Elektrik & Avize",
  publisher: "Hilal Elektrik & Avize",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hilalelektrikavize.com",
    siteName: "Hilal Elektrik & Avize",
    title: "Hilal Elektrik & Avize | Kahramanmaraş Lüks Aydınlatma ve Elektrik",
    description:
      "Kahramanmaraş Onikişubat'ta 2 uzman şubemizle lüks avize, modern aydınlatma, dekoratif aksesuarlar ve profesyonel elektrik montaj hizmeti sunuyoruz.",
    images: [
      {
        url: "/images/1920x1080_hero_showroom.jpg",
        width: 1920,
        height: 1080,
        alt: "Hilal Elektrik ve Avize Showroom Kahramanmaraş",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilal Elektrik & Avize | Kahramanmaraş",
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
    google: "G-SbhMGn5dtReztay-3XYcfb7G8gUT-XVfPDG_Lg23U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                document.documentElement.classList.remove('dark');
                localStorage.removeItem('theme');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${cinzel.variable} ${playfair.variable} min-h-screen bg-background text-foreground antialiased selection:bg-[#93826E] selection:text-white font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
