"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-background relative border-b border-border" id="sss">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14 space-y-3">
          <span className="editorial-tag">
            <HelpCircle className="w-3.5 h-3.5 text-bronze" />
            Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Sıkça Sorulan Sorular (SSS)
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Avize seçimi, kristal kalitesi, montaj süreci ve elektrik şubemizle ilgili tüm detaylar.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="dgaraj-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-foreground hover:text-bronze font-bold text-sm sm:text-base transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-bronze shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
