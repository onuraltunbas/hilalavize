import React from "react";
import { REVIEWS } from "@/data/reviews";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background relative border-b border-border" id="musteri-yorumlari">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="editorial-tag">
            <Star className="w-3.5 h-3.5 fill-bronze text-bronze" />
            %100 Gerçek Müşteri Deneyimleri
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Müşterilerimizin Hilal Avize Yorumları
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Kahramanmaraş genelinde villalardan dairelere, mimari ofislerden ticari alanlara kadar gerçekleştirdiğimiz montaj ve aydınlatma projeleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="dgaraj-card p-5 flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-bronze text-bronze" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Doğrulanmış
                    </span>
                  )}
                </div>

                <p className="text-xs text-foreground/80 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-border space-y-0.5 text-xs">
                <div className="font-bold text-foreground">{rev.author}</div>
                <div className="text-[11px] text-bronze font-medium">{rev.location}</div>
                <div className="text-[10px] text-muted-foreground">{rev.projectType}</div>
                {rev.productMentioned && (
                  <div className="text-[10px] text-muted-foreground/80 font-normal pt-1">
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
