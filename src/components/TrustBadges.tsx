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
    <section className="py-14 bg-surface-subtle border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_DATA.trustBadges.map((badge, idx) => {
            const Icon = iconMap[badge.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="dgaraj-card p-5 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-surface-subtle border border-border flex items-center justify-center text-bronze shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
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
