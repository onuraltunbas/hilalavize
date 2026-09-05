import React from "react";
import { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Ücretsiz Aydınlatma Danışmanlığı ve Randevu | Hilal Avize",
  description:
    "Evinize en uygun avize ve aydınlatma modelini seçmek için uzman danışmanlarımızla iletişime geçin veya showroom randevusu oluşturun.",
};

export default function RandevuPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <ConsultationForm />
      <TrustBadges />
    </div>
  );
}
