import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, MessageCircle, Store } from "lucide-react";

export function HomeCtaBanner() {
  const showroom = COMPANY_DATA.branches[0];

  return (
    <section className="bg-surface-subtle py-14 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="dgaraj-card p-6 sm:p-10 relative overflow-hidden bg-surface">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2.5 max-w-2xl">
              <span className="editorial-tag">
                <Sparkles className="w-3.5 h-3.5 text-bronze" />
                Kahramanmaraş&apos;ın En Kapsamlı Aydınlatma Vitrini
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Evinize En Uygun Avizeyi Beraber Seçelim!
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
                className="bg-[#059669] hover:bg-[#047857] text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp&apos;tan Fotoğraf Gönder
              </a>
              <Link
                href="/subelerimiz"
                className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-border shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <Store className="w-4 h-4 text-bronze" />
                Showroom Yol Tarifi Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
