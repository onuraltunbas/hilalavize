"use client";

import React, { useState } from "react";
import { COMPANY_DATA } from "@/data/company";
import {
  MessageCircle,
  Phone,
  Store,
  Zap,
  X,
} from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#0B132B] border border-[#F59E0B]/40 rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-white">Canlı İletişim & Danışma</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 py-3">
            {/* Showroom Contact */}
            <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-amber-500/20">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                <Store className="w-4 h-4" /> Avize & Dekorasyon Showroom
              </div>
              <p className="text-[11px] text-slate-400 mb-2.5">
                Avize danışmanlığı, lüks koleksiyonlar ve showroom randevusu.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                    "Merhaba, Hilal Avize showroomunuzdaki ürünler ve danışmanlık hakkında bilgi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href={`tel:${showroom.contacts[0].phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Ara
                </a>
              </div>
            </div>

            {/* Electrical Store Contact */}
            <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-amber-500/20">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-1">
                <Zap className="w-4 h-4" /> Elektrik & Tesisat Şubesi
              </div>
              <p className="text-[11px] text-slate-400 mb-2.5">
                Elektrik malzemeleri, cam anahtar-priz, priz montajı & sigorta işleri (Murat Bilal).
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent(
                    "Merhaba, elektrik malzemesi ve montaj hizmeti hakkında bilgi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href={`tel:${electrical.contacts[0].phone}`}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold py-2 px-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> Ara
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>Çalışma Saatleri: 09:00 - 17:00</span>
            <span className="text-amber-400 font-medium">Kahramanmaraş</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-900/50 border border-emerald-400/40 transition-all transform hover:scale-105"
        aria-label="Hızlı İletişim ve Danışma"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5" />
        <span className="text-xs tracking-wide pr-1">Hızlı Danışma & Fiyat</span>
      </button>
    </div>
  );
}
