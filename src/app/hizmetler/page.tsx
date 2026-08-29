import React from "react";
import { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { TrustBadges } from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Özel Hizmetlerimiz | Hilal Avize & Elektrik Kahramanmaraş",
  description:
    "Mekan aydınlatma danışmanlığı, kırılmaya karşı korumalı nakliye ve montaj, priz montajı ve sigorta değişimi gibi profesyonel elektrik hizmetleri.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 bg-[#080D1A] min-h-screen">
      <ServicesSection />
      <TrustBadges />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        <ConsultationForm />
      </div>
    </div>
  );
}
