"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or customized cookies
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Short delay for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookie_consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-500">
      <div className="dgaraj-card bg-surface/95 backdrop-blur-md p-5 border border-border shadow-2xl rounded-2xl space-y-3.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-foreground font-bold text-sm">
            <div className="w-7 h-7 rounded-lg bg-surface-subtle border border-border flex items-center justify-center text-bronze shrink-0">
              <Cookie className="w-4 h-4" />
            </div>
            <span>Çerez (Cookie) Kullanımı</span>
          </div>

          <button
            onClick={handleAcceptEssential}
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface-subtle transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Sitemizde size en iyi kullanıcı deneyimini sunabilmek, site trafiğini analiz etmek ve güvenliğinizi sağlamak amacıyla yasal mevzuata uygun çerezler kullanmaktayız. Detaylı bilgi için{" "}
          <Link
            href="/cerez-politikasi"
            className="text-bronze font-medium underline hover:text-foreground transition-colors"
          >
            Çerez Politikamızı
          </Link>{" "}
          ve{" "}
          <Link
            href="/kvkk-aydinlatma-metni"
            className="text-bronze font-medium underline hover:text-foreground transition-colors"
          >
            KVKK Metnimizi
          </Link>{" "}
          inceleyebilirsiniz.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-primary text-primary-foreground hover:opacity-90 font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-bronze" />
            Kabul Et
          </button>

          <button
            onClick={handleAcceptEssential}
            className="bg-surface-subtle hover:bg-border text-foreground font-semibold py-2.5 px-3 rounded-lg text-xs transition-colors border border-border shrink-0"
          >
            Yalnızca Zorunlu
          </button>
        </div>
      </div>
    </div>
  );
}
