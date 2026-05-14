"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ViewOnMapsButton } from "@/components/ViewOnMapsButton";
import { Button } from "@/components/ui/button";
import { easeTransition } from "@/lib/motion";
import { SITE, waUrl, WHATSAPP_DEFAULT } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE.heroBackgroundImage}
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
      </div>
      <div
        className="absolute inset-0 z-[1] steel-hero-bg opacity-[0.22]"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[2] bg-[#1F1F1F]/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={easeTransition(0.55)}
          className="max-w-3xl"
        >
          <p className="mb-6 inline-block rounded-full border border-[#D97706]/40 bg-[#D97706]/10 px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706] sm:text-sm">
            Est. {SITE.est}
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Premium Steel &
            <br />
            Hardware Solutions
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-[1.7] text-[#C8CED4] sm:text-lg">
            Steel Pipes · GP Pipes · Roofing Sheets · Gate Materials ·
            Fabrication Accessories
            <br />
            <span className="text-[#A8B0B8]">
              Serving Srikakulam with trusted brands since {SITE.est}
            </span>
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
            <Button
              asChild
              size="lg"
              className="w-full rounded-2xl shadow-sm transition-all hover:shadow-md active:translate-y-px sm:w-auto sm:min-w-[200px]"
            >
              <a
                href={waUrl(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] justify-center"
              >
                💬 WhatsApp Us
              </a>
            </Button>
            <ViewOnMapsButton
              tone="hero"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[200px] focus-visible:ring-offset-[#1F1F1F]"
            />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-2xl border-2 sm:w-auto sm:min-w-[160px] focus-visible:ring-offset-[#1F1F1F]"
            >
              <a href={SITE.phoneTel} className="min-h-[48px] justify-center">
                📞 Call Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <a
        href="#brands"
        className="absolute bottom-8 left-1/2 z-[15] flex -translate-x-1/2 flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
        aria-label="Scroll to content"
      >
        <span className="sr-only">Scroll down</span>
        <ChevronDown className="size-8 animate-chevron-bounce" aria-hidden />
      </a>
    </section>
  );
}
