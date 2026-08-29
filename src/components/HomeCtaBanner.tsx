import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, MessageCircle, Store } from "lucide-react";

export function HomeCtaBanner() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="bg-[#050811] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#111D38] to-[#0B132B] border border-[#F59E0B]/30 p-8 sm:p-12 shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F59E0B]/15 text-amber-400 border border-[#F59E0B]/30">
                <Sparkles className="w-3.5 h-3.5" />
                Kahramanmaraş&apos;ın En Kapsamlı Aydınlatma Vitrini
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Evinize En Uygun Avizeyi Beraber Seçelim!
              </h2>
              <p className="text-sm text-slate-300">
                Odanızın fotoğrafını WhatsApp&apos;tan bize iletin veya Onikişubat&apos;taki showroomumuza gelin; ücretsiz aydınlatma danışmanlığı ile doğru ebat, doğru ışık gücü ve tarzı belirleyelim.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, salonum için avize ve aydınlatma danışmanlığı almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp&apos;tan Fotoğraf Gönder
              </a>
              <Link
                href="/subelerimiz"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Store className="w-4 h-4" />
                Showroom Yol Tarifi Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
