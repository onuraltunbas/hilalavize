import React from "react";
import { Metadata } from "next";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBadges } from "@/components/TrustBadges";
import { BranchesSection } from "@/components/BranchesSection";

export const metadata: Metadata = {
  title: "Hizmetlerimiz, Şubelerimiz ve İletişim | Hilal Avize ve Elektrik Kahramanmaraş",
  description:
    "Mekan aydınlatma danışmanlığı, kırılmaya karşı korumalı nakliye ve montaj, elektrik şubemiz, showroom adres ve iletişim bilgilerimiz.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <ServicesSection />
      <TrustBadges />
      <BranchesSection />
    </div>
  );
}
