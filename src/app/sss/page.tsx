import React from "react";
import { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { ConsultationForm } from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | Hilal Avize & Elektrik",
  description:
    "Avize seçimi, kristal taş kalitesi, montaj ve teslimat garantisi, elektrik işlemleri hakkında merak edilen tüm sorular ve yanıtları.",
};

export default function SssPage() {
  return (
    <div className="py-12 bg-[#080D1A] min-h-screen">
      <FaqSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <ConsultationForm />
      </div>
    </div>
  );
}
