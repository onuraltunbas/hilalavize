import React from "react";
import { COMPANY_DATA } from "@/data/company";
import { Sparkles, Compass, ShieldCheck, Store } from "lucide-react";

export function TrustBadges() {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Compass,
    ShieldCheck,
    Store,
  };

  return (
    <section className="py-14 bg-[#0B132B] border-y border-[#F59E0B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.trustBadges.map((badge, idx) => {
            const Icon = iconMap[badge.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-[#0F172A]/80 p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
