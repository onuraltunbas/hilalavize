import React from "react";
import { Metadata } from "next";
import { BranchesSection } from "@/components/BranchesSection";

export const metadata: Metadata = {
  title: "Şubelerimiz ve İletişim | Hilal Avize ve Elektrik Kahramanmaraş",
  description:
    "Hilal Avize ve Aksesuar Showroom ve Hilal Elektrik Şubesi adresleri, telefon numaraları, WhatsApp hatları ve Google Haritalar yol tarifi. Onikişubat Kahramanmaraş.",
};

export default function BranchesPage() {
  return (
    <div className="bg-background min-h-screen">
      <BranchesSection />
    </div>
  );
}
