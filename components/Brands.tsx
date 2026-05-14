"use client";

import { ScrollSection } from "@/components/ScrollSection";
import { BRANDS } from "@/lib/constants";

export function Brands() {
  return (
    <ScrollSection
      id="brands"
      className="border-b border-[#E2E4E6] bg-[#F1F3F5] py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 sm:flex-row sm:items-center sm:gap-6">
        <p className="shrink-0 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#5C6770]">
          Trusted Brands:
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {BRANDS.map((brand, i) => (
            <span key={brand} className="flex flex-wrap items-center gap-2">
              {i > 0 && (
                <span className="hidden text-[#5C6770] sm:inline" aria-hidden>
                  ·
                </span>
              )}
              <span className="inline-flex items-center rounded-full border border-[#E2E4E6] bg-white px-4 py-2 font-heading text-sm font-semibold text-[#1F1F1F] shadow-sm">
                {brand}
              </span>
            </span>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
