"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ScrollSection } from "@/components/ScrollSection";
import { easeTransition } from "@/lib/motion";
import { GALLERY_ITEMS } from "@/lib/constants";

export function Gallery() {
  return (
    <ScrollSection id="gallery" className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706]">
          Gallery
        </p>

        <h2 className="mt-3 text-center font-heading text-3xl font-bold uppercase tracking-wide text-[#1F1F1F] sm:text-4xl">
          Our Products &amp; Work
        </h2>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={easeTransition(0.45, { delay: i * 0.04 })}
              className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[#E2E4E6] shadow-sm ${
                item.tall ? "min-h-[280px]" : "min-h-[200px]"
              }`}
            >
              {/* IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                  unoptimized
                />
              </div>

              {/* DARK OVERLAY */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/60"
                aria-hidden
              />

              {/* LABEL */}
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <span className="relative z-10 font-heading text-sm font-semibold uppercase tracking-wide text-white drop-shadow-md sm:text-base">
                  {item.label}
                </span>
              </div>

              {/* HOVER EFFECT */}
              <div className="pointer-events-none absolute inset-0 bg-[#1F1F1F]/0 transition-colors duration-300 group-hover:bg-[#1F1F1F]/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
