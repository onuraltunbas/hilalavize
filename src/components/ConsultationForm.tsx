"use client";

import React, { useState } from "react";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Onikişubat",
    roomType: "Salon",
    stylePreference: "İhtişamlı & Klasik",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const showroom = COMPANY_DATA.branches[0];
    
    // Create WhatsApp message string
    const text = `*Ücretsiz Aydınlatma Danışmanlığı Talebi*\n\n*İsim:* ${formData.name}\n*Telefon:* ${formData.phone}\n*Bölge/İlçe:* ${formData.district}\n*Mekan Türü:* ${formData.roomType}\n*Tercih Edilen Tarz:* ${formData.stylePreference}\n*Notlar:* ${formData.notes || "Yok"}\n\n_Hilal Avize web sitesi üzerinden gönderildi._`;

    // Open WhatsApp
    window.open(
      `https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#080D1A] relative" id="randevu">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl bg-[#0F172A] border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Ücretsiz Mimari & Aydınlatma Desteği
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Evinize En Uygun Modeli Birlikte Bulalım
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Aşağıdaki formu doldurarak bize ulaşın; mekanınıza en uygun ölçü, ışık gücü ve avize modelini uzman danışmanlarımızla birlikte belirleyelim.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Talebiniz Alındı!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                WhatsApp üzerinden danışmanımızla görüşme başlatıldı. En kısa sürede odanızın ölçülerine uygun avize ve aydınlatma önerilerimizi paylaşacağız.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-amber-400 underline font-semibold mt-4"
              >
                Yeni Bir Talep Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Bulunduğunuz İlçe
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="Onikişubat">Onikişubat / K.Maraş</option>
                    <option value="Dulkadiroğlu">Dulkadiroğlu / K.Maraş</option>
                    <option value="Türkoğlu">Türkoğlu</option>
                    <option value="Göksun">Göksun</option>
                    <option value="Elbistan">Elbistan</option>
                    <option value="Diğer Şehir/İlçe">Diğer Şehir/İlçe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Aydınlatılacak Mekan
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="Salon / Yemek Odası">Salon / Yemek Odası</option>
                    <option value="Yatak Odası / Antre">Yatak Odası / Antre</option>
                    <option value="Mutfak / Ada Tezgah">Mutfak / Ada Tezgah</option>
                    <option value="Tüm Ev & Villa">Tüm Ev & Villa</option>
                    <option value="Kafe / Ofis / Mağaza">Kafe / Ofis / Mağaza</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Beğendiğiniz Tarz
                  </label>
                  <select
                    value={formData.stylePreference}
                    onChange={(e) =>
                      setFormData({ ...formData, stylePreference: e.target.value })
                    }
                    className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="İhtişamlı & Klasik Kristal">İhtişamlı & Klasik Kristal</option>
                    <option value="Modern & Spor LED">Modern & Spor LED</option>
                    <option value="Sade & Minimalist Spot">Sade & Minimalist Spot</option>
                    <option value="Kararsızım / Öneri İstiyorum">Kararsızım / Öneri İstiyorum</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Ek Notlar / Tavan Yüksekliği / Oda Ölçüleri (Opsiyonel)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Örn: 30 m2 salonumuz var, tavan yüksekliği 2.80 metre, modern mobilyalarımız bulunuyor..."
                  className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-4 px-6 rounded-2xl text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  Danışmanlık Talebini WhatsApp ile İlet
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
