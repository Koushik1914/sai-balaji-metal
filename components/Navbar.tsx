"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ViewOnMapsButton } from "@/components/ViewOnMapsButton";
import { Button } from "@/components/ui/button";
import { easeTransition } from "@/lib/motion";
import { NAV_LINKS, SITE, waUrl, WHATSAPP_DEFAULT } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E4E6]/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#home"
          className="font-heading text-base font-bold tracking-tight text-[#1F1F1F] sm:text-lg"
          onClick={() => setOpen(false)}
        >
          {SITE.name}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5C6770] transition-colors hover:text-[#1F1F1F]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Button asChild size="lg" variant="secondary" className="rounded-xl">
            <a href={SITE.phoneTel} className="min-h-[44px]">
              📞 Call Now
            </a>
          </Button>
          <ViewOnMapsButton
            tone="light"
            size="default"
            compact
            className="rounded-xl px-4"
          />
          <Button asChild size="lg" className="rounded-xl">
            <a
              href={waUrl(WHATSAPP_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px]"
            >
              💬 WhatsApp
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2E4E6] bg-white text-[#1F1F1F] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={easeTransition(0.28)}
            className="overflow-hidden border-t border-[#E2E4E6] bg-white lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-[#1F1F1F] hover:bg-[#F8F9FA]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button asChild size="lg" variant="secondary" className="w-full rounded-xl">
                  <a href={SITE.phoneTel}>📞 Call Now</a>
                </Button>
                <ViewOnMapsButton
                  tone="light"
                  size="lg"
                  className="w-full rounded-xl"
                />
                <Button asChild size="lg" className="w-full rounded-xl">
                  <a
                    href={waUrl(WHATSAPP_DEFAULT)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
