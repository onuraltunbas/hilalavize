import React from "react";
import { REVIEWS } from "@/data/reviews";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#080D1A] relative" id="musteri-yorumlari">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            %100 Gerçek Müşteri Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Müşterilerimizin Hilal Avize Yorumları
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Kahramanmaraş genelinde villalardan dairelere, mimari ofislerden ticari alanlara kadar gerçekleştirdiğimiz montaj ve aydınlatma projeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0F172A] p-6 rounded-3xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> Doğrulanmış Müşteri
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 space-y-1">
                <div className="font-bold text-white text-xs">{rev.author}</div>
                <div className="text-[11px] text-amber-400">{rev.location}</div>
                <div className="text-[10px] text-slate-500">{rev.projectType}</div>
                {rev.productMentioned && (
                  <div className="text-[10px] text-slate-400 font-medium pt-1">
                    Ürün: {rev.productMentioned}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
