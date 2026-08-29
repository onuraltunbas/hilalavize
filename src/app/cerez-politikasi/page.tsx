import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çerez Politikası | Hilal Elektrik Avize Aksesuar",
  description: "Web sitemizde kullanılan çerezler hakkında bilgilendirme.",
};

export default function CookiesPage() {
  return (
    <div className="py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Çerez Politikası
        </h1>
        <p>
          Sitemizin temel işlevselliğini sağlamak ve kullanıcı deneyimini iyileştirmek amacıyla teknik çerezler kullanılmaktadır.
        </p>
      </div>
    </div>
  );
}
