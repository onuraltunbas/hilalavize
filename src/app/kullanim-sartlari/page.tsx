import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Hilal Elektrik Avize Aksesuar",
  description: "Hilal Elektrik Avize Aksesuar web sitesi kullanım koşulları.",
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Kullanım Şartları ve Koşulları
        </h1>
        <p>
          Bu web sitesini ziyaret ederek ve kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Sitede yer alan görsel ve içerikler Hilal Elektrik Avize Aksesuar tanıtım ve katalog amacıyla hazırlanmıştır.
        </p>
      </div>
    </div>
  );
}
