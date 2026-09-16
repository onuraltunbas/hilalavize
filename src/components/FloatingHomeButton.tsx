"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export function FloatingHomeButton() {
  const pathname = usePathname();

  // Yalnızca anasayfa dışındaki sayfalarda görüntüle
  if (pathname === "/") return null;

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <Link
        href="/"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-surface/95 text-foreground border border-border/90 hover:border-bronze shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_18px_rgba(212,175,55,0.35)] backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Ana Sayfaya Dön"
        title="Ana Sayfaya Dön"
      >
        <Home className="w-5 h-5 text-bronze group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
}
