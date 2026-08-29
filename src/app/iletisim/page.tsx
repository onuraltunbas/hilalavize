import React from "react";
import { Metadata } from "next";
import { BranchesSection } from "@/components/BranchesSection";

export const metadata: Metadata = {
  title: "Şubelerimiz & İletişim | Hilal Avize ve Elektrik Kahramanmaraş",
  description:
    "Hilal Avize & Aksesuar Showroom ve Hilal Elektrik Şubesi adresleri, telefon numaraları, WhatsApp hatları ve Google Haritalar yol tarifi. Onikişubat Kahramanmaraş.",
};

export default function BranchesPage() {
  return (
    <div className="bg-[#080D1A] min-h-screen">
      <BranchesSection />
    </div>
  );
}
