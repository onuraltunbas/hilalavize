import React from "react";
import { Metadata } from "next";
import { COMPANY_DATA } from "@/data/company";
import { ConsultationForm } from "@/components/ConsultationForm";
import {
  MapPin,
  MessageCircle,
  Clock,
  Navigation,
  Store,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Şubelerimiz & İletişim | Hilal Avize ve Elektrik Kahramanmaraş",
  description:
    "Hilal Avize & Aksesuar Showroom ve Hilal Elektrik Şubesi adresleri, telefon numaraları, WhatsApp hatları ve Google Haritalar yol tarifi. Onikişubat Kahramanmaraş.",
};

export default function BranchesPage() {
  const showroom = COMPANY_DATA.branches[0];
  const electrical = COMPANY_DATA.branches[1];

  return (
    <div className="py-12 sm:py-16 bg-[#080D1A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Store className="w-3.5 h-3.5" />
            Kahramanmaraş Onikişubat
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            Şubelerimiz & İletişim
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Kahramanmaraş Onikişubat Yirmiikigün Mahallesi&apos;nde yer alan 2 ayrı uzman şubemizle hizmetinizdeyiz. Showroomumuza gelerek modelleri canlı inceleyebilir veya telefon/WhatsApp ile anında ulaşabilirsiniz.
          </p>
        </div>

        {/* 2 Branches Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Branch 1 */}
          <div className="bg-[#0F172A] border border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{showroom.name}</h2>
                <p className="text-xs text-amber-400 font-medium">{showroom.headline}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {showroom.description}
            </p>

            <div className="bg-[#132238] p-5 rounded-2xl border border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Adres: </span>
                  {showroom.address.full}
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Çalışma Saatleri: </span>
                  {showroom.workingHours.days} | {showroom.workingHours.hours}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Yetkili İletişim:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {showroom.contacts.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-white">{c.name}</div>
                    <div className="text-[11px] text-slate-400">{c.role}</div>
                    <a
                      href={`tel:${c.phone}`}
                      className="text-xs text-amber-400 font-semibold block pt-1 hover:underline"
                    >
                      {c.phoneFormatted}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, Hilal Avize Showroom şubenizden ürünler hakkında bilgi almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Yaz
              </a>

              <a
                href={showroom.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Yol Tarifi (Harita)
              </a>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="bg-[#0F172A] border border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{electrical.name}</h2>
                <p className="text-xs text-amber-400 font-medium">{electrical.headline}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {electrical.description}
            </p>

            <div className="bg-[#132238] p-5 rounded-2xl border border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Adres: </span>
                  {electrical.address.full}
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-200 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Çalışma Saatleri: </span>
                  {electrical.workingHours.days} | {electrical.workingHours.hours}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Yetkili İletişim:
              </div>
              <div className="grid grid-cols-1 gap-2">
                {electrical.contacts.map((c, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-white">{c.name}</div>
                    <div className="text-[11px] text-slate-400">{c.role}</div>
                    <a
                      href={`tel:${c.phone}`}
                      className="text-xs text-amber-400 font-semibold block pt-1 hover:underline"
                    >
                      {c.phoneFormatted}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${electrical.contacts[0].whatsapp}?text=${encodeURIComponent(
                  "Merhaba, Hilal Elektrik şubenizden malzeme ve montaj hizmeti hakkında bilgi almak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp ile Yaz
              </a>

              <a
                href={electrical.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Yol Tarifi (Harita)
              </a>
            </div>
          </div>
        </div>

        {/* Consultation Form */}
        <ConsultationForm />
      </div>
    </div>
  );
}
