"use client";

import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ViewOnMapsButton } from "@/components/ViewOnMapsButton";
import { SITE, waUrl, WHATSAPP_DEFAULT } from "@/lib/constants";
import { easeTransition } from "@/lib/motion";

export function TopLocationBar() {
  return (
    <section
      aria-label="Shop location and hours"
      className="relative border-b border-[#E2E4E6] bg-gradient-to-b from-white to-[#F8F9FA]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={easeTransition(0.45)}
        className="mx-auto max-w-6xl px-6 py-5 md:py-6"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
          <div className="flex min-w-0 flex-1 gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#E2E4E6] bg-white shadow-sm md:h-14 md:w-14">
              <MapPin className="size-6 text-[#D97706] md:size-7" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-[#D97706] md:text-xs">
                Shop location
              </p>
              <p className="mt-2 font-body text-sm font-medium leading-relaxed text-[#1F1F1F] md:text-base">
                {SITE.address}
              </p>
              <div className="mt-3 flex items-start gap-2.5 text-sm leading-snug text-[#5C6770] md:items-center">
                <Clock
                  className="mt-0.5 size-4 shrink-0 text-[#D97706] md:mt-0 md:size-[18px]"
                  aria-hidden
                />
                <span>{SITE.timings}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:w-auto lg:max-w-md lg:justify-end">
            <ViewOnMapsButton tone="light" size="lg" className="w-full sm:min-w-[180px] sm:flex-1 lg:w-auto lg:flex-initial" />
            <Button
              asChild
              size="lg"
              className="w-full rounded-2xl shadow-sm transition-all hover:shadow-md active:translate-y-px sm:min-w-[180px] sm:flex-1 lg:w-auto lg:flex-initial"
            >
              <a
                href={waUrl(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2"
              >
                💬 WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
