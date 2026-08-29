import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Hilal Elektrik Avize Aksesuar",
  description: "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <div className="py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          KVKK Aydınlatma Metni
        </h1>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, veri sorumlusu sıfatıyla Hilal Elektrik Avize Aksesuar tarafından kişisel verilerinizin işlenme amaçları, hukuki sebepleri ve haklarınız aşağıda bilgilerinize sunulmaktadır.
        </p>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">Veri Sorumlusu</h2>
          <p>
            Hilal Elektrik Avize Aksesuar - Yirmiikigün Mah. 91056. Sok. Umut Kent Sitesi F Blok No: 4A Onikişubat / Kahramanmaraş
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white">İşlenen Kişisel Verileriniz ve Haklarınız</h2>
          <p>
            Kanunun 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini talep etme haklarına sahipsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
