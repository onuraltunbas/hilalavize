"use client";

import React, { useState } from "react";
import { COMPANY_DATA } from "@/data/company";
import {
  MessageCircle,
  Store,
  Zap,
  X,
} from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-surface border border-border rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-foreground">Canlı İletişim ve Danışma</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-subtle transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3 py-3">
            {/* Showroom Contact */}
            <div className="bg-surface-subtle p-3.5 rounded-lg border border-border">
              <div className="text-xs font-bold text-bronze flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                <Store className="w-3.5 h-3.5" /> Avize ve Dekorasyon Showroom
              </div>
              <p className="text-[11px] text-muted-foreground mb-2.5">
                Avize danışmanlığı, lüks koleksiyonlar ve showroom randevusu.
              </p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                    "Merhaba, Hilal Avize showroomunuzdaki ürünler ve aydınlatma hakkında bilgi ve fiyat teklifi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm w-full"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp ile Teklif Al
                </a>
              </div>
            </div>

            {/* Electrical Store Contact */}
            <div className="bg-surface-subtle p-3.5 rounded-lg border border-border">
              <div className="text-xs font-bold text-bronze flex items-center gap-1.5 mb-1 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Elektrik ve Tesisat Şubesi
              </div>
              <p className="text-[11px] text-muted-foreground mb-2.5">
                Elektrik malzemeleri, cam anahtar-priz, priz montajı ve sigorta işleri (Murat Bilal).
              </p>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent(
                    "Merhaba, elektrik malzemesi ve montaj hizmeti hakkında bilgi ve fiyat teklifi almak istiyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm w-full"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp ile Teklif Al
                </a>
              </div>
            </div>

            {/* Instagram Follow */}
            <a
              href={COMPANY_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-95 text-white font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram: {COMPANY_DATA.socials.instagramHandle}</span>
            </a>
          </div>

          <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Çalışma: 09:00 - 17:00</span>
            <span className="text-bronze font-medium">Kahramanmaraş</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold px-4 py-3 rounded-full shadow-lg border border-emerald-400/30 transition-all transform hover:scale-105"
        aria-label="Hızlı İletişim ve Danışma"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs tracking-wide pr-0.5">Danışma ve Fiyat</span>
      </button>
    </div>
  );
}
