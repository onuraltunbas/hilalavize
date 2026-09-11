import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yönetici Paneli | Hilal Avize & Elektrik",
  description: "Hilal Avize ve Elektrik Şubesi Ürün ve Katalog Yönetim Portalı.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
