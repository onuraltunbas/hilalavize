import React from "react";
import { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | Hilal Avize & Elektrik",
  description:
    "Avize seçimi, kristal taş kalitesi, montaj ve teslimat garantisi, elektrik işlemleri hakkında merak edilen tüm sorular ve yanıtları.",
};

export default function SssPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <FaqSection />
    </div>
  );
}
