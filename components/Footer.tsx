import Link from "next/link";

import { ViewOnMapsButton } from "@/components/ViewOnMapsButton";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, waUrl, WHATSAPP_DEFAULT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#5C6770]/30 bg-[#1F1F1F] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold">{SITE.name}</p>
          <p className="mt-2 font-body text-sm leading-[1.7] text-[#C8CED4]">
            {SITE.tagline}
          </p>
          <p className="mt-4 font-body text-sm leading-[1.7] text-[#A8B0B8]">
            {SITE.address}
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <ViewOnMapsButton
              tone="footer"
              size="lg"
              className="w-full focus-visible:ring-offset-[#1F1F1F] sm:w-auto sm:min-w-[170px]"
            />
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl shadow-sm transition-all hover:shadow-md active:translate-y-px sm:w-auto sm:min-w-[170px] focus-visible:ring-offset-[#1F1F1F]"
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

        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#D97706]">
            Quick Links
          </p>
          <ul className="mt-4 flex flex-col gap-2 font-body text-sm text-[#C8CED4]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#D97706]">
            Contact
          </p>
          <ul className="mt-4 space-y-2 font-body text-sm leading-[1.7] text-[#C8CED4]">
            <li>
              <a href={SITE.phoneTel} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={waUrl(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="text-[#A8B0B8]">{SITE.timings}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#5C6770]/40">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center font-body text-xs text-[#A8B0B8] sm:text-sm">
          © 2024 Sai Balaji Metal Industries. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
