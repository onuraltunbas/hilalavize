import React from "react";
import { Metadata } from "next";
import { BranchesSection } from "@/components/BranchesSection";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Şubelerimiz & İletişim | Hilal Avize ve Elektrik Kahramanmaraş",
  description:
    "Hilal Avize & Aksesuar Showroom ve Hilal Elektrik Şubesi adresleri, telefon numaraları, WhatsApp hatları ve Google Haritalar yol tarifi. Onikişubat Kahramanmaraş.",
};

export default function BranchesPage() {
  return (
    <div className="bg-[#080D1A] min-h-screen">
      {/* 2 Branches Comparison with Integrated Interactive Map & GPS Directions */}
      <BranchesSection />

      {/* Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        <ConsultationForm />
      </div>
    </div>
  );
}
