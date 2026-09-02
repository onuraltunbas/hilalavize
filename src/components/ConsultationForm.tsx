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

  // İsim ve Soyismin ilk harflerini otomatik büyük harf yapan fonksiyon (Türkçe karakter duyarlı)
  const formatTitleCase = (text: string) => {
    return text.replace(/(?:^|\s)\S/g, (char) => char.toLocaleUpperCase("tr"));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTitleCase(e.target.value);
    setFormData((prev) => ({ ...prev, name: formatted }));
  };

  // Akıllı, Tek Parça ve Son Derece Sade Mesaj Sentezi
  const generateAiMessage = useMemo(() => {
    // 1. Saate göre dinamik selamlama
    const currentHour = new Date().getHours();
    const isEvening = currentHour >= 17 || currentHour < 6;
    const greeting = isEvening ? "İyi akşamlar" : "İyi günler";

    // 2. İsim (Her kelimenin ilk harfi otomatik büyük)
    const rawName = formData.name.trim();
    const userName = rawName
      ? rawName
          .split(" ")
          .map((w) => w.charAt(0).toLocaleUpperCase("tr") + w.slice(1))
          .join(" ")
      : "";

    const nameStr = userName ? `${greeting}, ben ${userName}.` : `${greeting},`;

    // 3. Mekan hitabı
    let roomStr = "evim için";
    const rt = formData.roomType.toLowerCase();
    if (rt.includes("ofis") || rt.includes("mağaza") || rt.includes("kafe")) {
      roomStr = "ofisim için";
    } else if (rt.includes("salon")) {
      roomStr = "salonum için";
    } else if (rt.includes("oturma")) {
      roomStr = "oturma odam için";
    } else if (rt.includes("yatak")) {
      roomStr = "yatak odam için";
    } else if (rt.includes("mutfak")) {
      roomStr = "mutfağım için";
    } else if (rt.includes("antre") || rt.includes("koridor")) {
      roomStr = "antrem için";
    } else if (rt.includes("villa") || rt.includes("tüm ev")) {
      roomStr = "evimiz için";
    }

    // 4. Tarz hitabı
    let styleStr = "uygun";
    const st = formData.stylePreference.toLowerCase();
    if (st.includes("klasik") || st.includes("kristal")) {
      styleStr = "klasik kristal";
    } else if (st.includes("modern") || st.includes("led")) {
      styleStr = "modern LED";
    } else if (st.includes("spot") || st.includes("minimalist")) {
      styleStr = "sade ray spot";
    }

    // 5. Notları sade bir büyüklük / detay cümlesine çevir
    let detailSentence = "";
    if (formData.notes.trim()) {
      let n = formData.notes.trim();

      // Selamları temizle
      n = n.replace(/^(merhaba|selam|selamlar|iyi günler|iyi akşamlar|kolay gelsin)[\s,.\-!]+/gi, "");

      // Konuşma dili dolgularını temizle
      n = n
        .replace(/\b(falan|filan|vs|gibi|şey|bişey|bi|baya|cok|çook)\b/gi, "")
        .replace(/\s+/g, " ")
        .trim();

      // Metrekare ve metre dönüştürme
      n = n.replace(/(\d+)\s*(metrekare|m2|metre kare)/gi, "$1 m²");
      n = n.replace(/(\d+[,.]\d+)\s*(metre|m|mt)/gi, "$1 m");

      if (n) {
        // Eğer içinde metrekare veya oda büyüklüğü varsa
        if (n.includes("m²") || n.toLowerCase().includes("büyük") || n.toLowerCase().includes("küçük")) {
          const roomSubject = roomStr.replace(" için", "in büyüklüğü");
          // Sadece ölçüyü veya sadeleştirilmiş hali al
          detailSentence = ` ${roomSubject.charAt(0).toLocaleUpperCase("tr") + roomSubject.slice(1)} ${n.toLowerCase().replace(/^(ofis|salon|oda|mekan)(in|ın|ün|un)?\s*(büyüklüğü)?\s*/gi, "")}.`.replace(/\.\.+/, ".");
        } else {
          n = n.charAt(0).toLocaleUpperCase("tr") + n.slice(1);
          if (!n.endsWith(".")) n += ".";
          detailSentence = ` ${n}`;
        }
      }
    }

    // 6. Tek, akıcı ve eksiksiz paragraf
    return `${nameStr} ${roomStr.charAt(0).toLocaleUpperCase("tr") + roomStr.slice(1)} ${styleStr} tarzında bir avize arıyorum.${detailSentence} Elinizdeki hazır modeller ve fiyat seçenekleri hakkında bilgi alabilir miyim?`;
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
    <section className="py-20 bg-background relative border-b border-border" id="randevu">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="dgaraj-card p-6 sm:p-12 relative overflow-hidden">
          {/* Başlık */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="editorial-tag">
              <Sparkles className="w-3.5 h-3.5 text-bronze" />
              Ücretsiz Mimari & Aydınlatma Desteği
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Evinize En Uygun Modeli Birlikte Bulalım
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Formu doldurun; mekanınıza en uygun ölçü, ışık gücü ve avize modelini uzman danışmanlarımızla birlikte belirleyelim.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Talebiniz WhatsApp&apos;a Aktarıldı!</h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                Mesajınız oluşturularak WhatsApp danışmanımıza iletildi. En kısa sürede odanızın ölçülerine uygun avize ve aydınlatma önerilerimizi paylaşacağız.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-bronze underline font-semibold mt-4"
              >
                Yeni Bir Talep Oluştur
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* İsim ve Telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleNameChange}
                    placeholder="Örn: Onur Altunbaş"
                    className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Seçimler */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Bulunduğunuz İlçe
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none transition-colors"
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
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Aydınlatılacak Mekan
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none transition-colors"
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
                  <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                    Beğendiğiniz Tarz
                  </label>
                  <select
                    value={formData.stylePreference}
                    onChange={(e) =>
                      setFormData({ ...formData, stylePreference: e.target.value })
                    }
                    className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground focus:outline-none transition-colors"
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
                <label className="block text-xs font-semibold text-foreground/80 mb-1.5">
                  Ek Notlar / Tavan Yüksekliği / Oda Ölçüleri (Opsiyonel)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Örn: 10 m2 alanımız var, yeterli ışık sağlayan ledli model arıyoruz..."
                  className="w-full bg-surface-subtle border border-border focus:border-bronze rounded-xl px-4 py-3 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-colors"
                />
              </div>

              {/* Gönder Butonu */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Danışmanlık Talebini Gönder (WhatsApp)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
