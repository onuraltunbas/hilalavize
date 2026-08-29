"use client";

import React, { useState, useMemo } from "react";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Onikişubat",
    roomType: "Salon / Yemek Odası",
    stylePreference: "İhtişamlı & Klasik Kristal",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Akıllı ve Doğal Dil Mesaj Sentezi (Ücretsiz, Yerel & Anlık Yapay Zeka Mantığı)
  const generateAiMessage = useMemo(() => {
    // 1. Günün saatine göre dinamik karşılama (17:00 - 06:00 arası İyi Akşamlar, 06:00 - 17:00 arası İyi Günler)
    const currentHour = new Date().getHours();
    const isEvening = currentHour >= 17 || currentHour < 6;
    const greeting = isEvening ? "İyi akşamlar" : "İyi günler";

    // 2. İsim & Lokasyon formatlama
    const userName = formData.name.trim() ? formData.name.trim() : "";
    const namePart = userName ? `${greeting}, ben ${userName}.` : `${greeting},`;
    const districtPart = formData.district ? `${formData.district}'den ulaşıyorum.` : "Kahramanmaraş'tan ulaşıyorum.";

    // 3. Mekan ve Tarz ifadesi
    const intentPart = `${formData.roomType} için ${formData.stylePreference.toLowerCase()} tarzında avize ve aydınlatma modellerinizi inceliyorum.`;

    // 4. Ek notları yapay zeka ile temizleme ve cümle içine akıcı entegre etme
    let notesFormatted = "";
    if (formData.notes.trim()) {
      // Baştaki merhaba/selam gibi mükerrer selamlamaları akıllıca ayıkla
      let cleanNotes = formData.notes.trim();
      cleanNotes = cleanNotes.replace(/^(merhaba|selam|selamlar|iyi günler|iyi akşamlar)[\s,.\-!]+/gi, "");
      cleanNotes = cleanNotes.charAt(0).toUpperCase() + cleanNotes.slice(1);

      notesFormatted = `\n\n📌 *Mekan Detayları & Notlarım:* ${cleanNotes}`;
    }

    // 5. Nezaket ve Eylem Çağrısı (CTA)
    const closingPart = `Bu kriterlere uygun elinizdeki hazır modeller, showroom seçenekleri ve fiyat bilgisi hakkında yardımcı olabilir misiniz?`;
    const phonePart = formData.phone.trim() ? `\n\n📞 *İletişim:* ${formData.phone.trim()}` : "";

    return `${namePart} ${districtPart}\n\n${intentPart}${notesFormatted}\n\n${closingPart}${phonePart}\n\n_Hilal Avize web sitesi üzerinden gönderildi._`;
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const showroom = COMPANY_DATA.branches[0];

    // WhatsApp Web / App yönlendirmesi
    window.open(
      `https://wa.me/${showroom.contacts[0].whatsapp}?text=${encodeURIComponent(generateAiMessage)}`,
      "_blank"
    );

    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#080D1A] relative" id="randevu">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl bg-[#0F172A] border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Başlık */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Ücretsiz Mimari & Aydınlatma Desteği
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Evinize En Uygun Modeli Birlikte Bulalım
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Formu doldurun; yapay zeka asistanımız talebinizi derli toplu ve anlaşılır bir WhatsApp mesajına dönüştürsün, danışmanlarımız hemen en uygun modelleri önersin.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Talebiniz WhatsApp&apos;a Aktarıldı!</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Yapay zeka tarafından hazırlanan özenli mesajınız ile görüşme başlatıldı. Danışmanlarımız en kısa sürede mekanınıza en uygun avize ve aydınlatma önerilerini paylaşacaktır.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-amber-400 underline font-semibold mt-4"
              >
                Yeni Bir Danışmanlık Talebi Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* İsim ve Telefon */}
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
                    placeholder="Örn: Onur Altunbaş"
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

              {/* Seçimler */}
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
                    <option value="Afşin">Afşin</option>
                    <option value="Pazarcık">Pazarcık</option>
                    <option value="Diğer İl/İlçe">Diğer İl/İlçe</option>
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
                    <option value="Oturma Odası / TV Odası">Oturma Odası / TV Odası</option>
                    <option value="Yatak Odası / Giyinme Odası">Yatak Odası / Giyinme Odası</option>
                    <option value="Mutfak / Ada Tezgah">Mutfak / Ada Tezgah</option>
                    <option value="Antre / Koridor / Merdiven Boşluğu">Antre / Koridor / Merdiven Boşluğu</option>
                    <option value="Tüm Ev & Villa Projesi">Tüm Ev & Villa Projesi</option>
                    <option value="Ofis / Mağaza / Kafe">Ofis / Mağaza / Kafe</option>
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
                    <option value="İhtişamlı & Klasik Kristal">👑 İhtişamlı & Klasik Kristal</option>
                    <option value="Modern & Spor LED">⚡ Modern & Spor LED</option>
                    <option value="Sade & Minimalist Ray Spot">🌿 Sade & Minimalist Ray Spot</option>
                    <option value="Kararsızım / Uzman Önerisi İstiyorum">💡 Kararsızım / Öneri İstiyorum</option>
                  </select>
                </div>
              </div>

              {/* Ek Notlar */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Ek Notlar / Tavan Yüksekliği / Oda Ölçüleri / Özel İstekleriniz
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Örn: 35 m2 salonumuz var, tavan yüksekliği 2.90m, gold detaylı mobilyalarımız bulunuyor, 8 veya 12 kollu kristal avize bakıyoruz..."
                  className="w-full bg-[#132238] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              {/* 
              Akıllı Yapay Zeka Mesaj Önizlemesi Kutusu (İleride istenirse açılabilir)
              <div className="bg-[#111D38] border border-amber-500/30 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                    <Bot className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span>Yapay Zeka Tarafından Düzenlenen Akıllı WhatsApp Mesajı:</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <RefreshCw className="w-2.5 h-2.5" /> Canlı Düzenleniyor
                  </span>
                </div>

                <div className="bg-[#0B132B] border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 whitespace-pre-line leading-relaxed font-sans border-l-4 border-l-amber-500">
                  {generateAiMessage}
                </div>
              </div>
              */}

              {/* Gönder Butonu */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold py-4 px-6 rounded-2xl text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  Yapay Zeka ile Düzenlenen Mesajı WhatsApp&apos;tan Gönder
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
