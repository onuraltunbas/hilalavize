"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis
  const getPages = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const pages = getPages();

  return (
    <nav
      role="navigation"
      aria-label="Sayfalandırma"
      className={cn("mx-auto flex w-full justify-center items-center select-none", className)}
      {...props}
    >
      <ul className="flex flex-row items-center gap-1.5 sm:gap-3">
        {/* Önceki Buton */}
        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Önceki sayfa"
            className="size-9 rounded-xl border-none bg-neutral-100/80 hover:bg-neutral-200/90 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer dark:bg-neutral-900/50 dark:hover:bg-neutral-800"
          >
            <ChevronLeft className="size-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </li>

        {/* Sayfa Numaraları */}
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <li key={`ellipsis-${index}`} className="flex items-center justify-center size-9 text-muted-foreground text-sm font-medium">
                ...
              </li>
            );
          }

          const pageNum = Number(page);
          const isActive = pageNum === currentPage;

          return (
            <li key={`page-${pageNum}`}>
              <button
                type="button"
                onClick={() => onPageChange(pageNum)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "size-9 rounded-xl border-none transition-all text-sm font-medium flex items-center justify-center cursor-pointer active:scale-95",
                  isActive
                    ? "bg-white text-black shadow-sm shadow-neutral-400/50 dark:bg-neutral-900 dark:text-white dark:shadow-neutral-700 font-bold border border-neutral-200/80 dark:border-neutral-800"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
                )}
              >
                {pageNum}
              </button>
            </li>
          );
        })}

        {/* Sonraki Buton */}
        <li>
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Sonraki sayfa"
            className="size-9 rounded-xl border-none bg-neutral-100/80 hover:bg-neutral-200/90 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center cursor-pointer dark:bg-neutral-900/50 dark:hover:bg-neutral-800"
          >
            <ChevronRight className="size-5 text-neutral-700 dark:text-neutral-300" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
