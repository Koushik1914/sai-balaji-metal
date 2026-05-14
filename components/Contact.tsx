"use client";

import { useState } from "react";

import { ScrollSection } from "@/components/ScrollSection";
import { ViewOnMapsButton } from "@/components/ViewOnMapsButton";
import { Button } from "@/components/ui/button";
import { SITE, waUrl, WHATSAPP_DEFAULT } from "@/lib/constants";

export function Contact() {
  const [mapError, setMapError] = useState(false);

  return (
    <ScrollSection id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706]">
            Contact Us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-[#1F1F1F] sm:text-4xl">
            Visit Our Shop
          </h2>

          <ul className="mt-8 space-y-4 font-body text-base leading-[1.7] text-[#5C6770]">
            <li>
              <span className="font-semibold text-[#1F1F1F]">Address: </span>
              {SITE.address}
            </li>
            <li>
              <span className="font-semibold text-[#1F1F1F]">Phone: </span>
              <a
                href={SITE.phoneTel}
                className="text-[#D97706] underline-offset-2 hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#1F1F1F]">WhatsApp: </span>
              <a
                href={waUrl(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97706] underline-offset-2 hover:underline"
              >
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#1F1F1F]">Email: </span>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all text-[#D97706] underline-offset-2 hover:underline"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <span className="font-semibold text-[#1F1F1F]">Timings: </span>
              {SITE.timings}
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full rounded-2xl sm:min-w-[160px] sm:flex-1"
            >
              <a href={SITE.phoneTel} className="min-h-[48px] justify-center">
                📞 Call Now
              </a>
            </Button>
            <ViewOnMapsButton
              tone="light"
              size="lg"
              className="w-full rounded-2xl sm:min-w-[180px] sm:flex-1"
            />
            <Button
              asChild
              size="lg"
              className="w-full rounded-2xl sm:min-w-[180px] sm:flex-1"
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
          </div>
        </div>

        <div className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-[#E2E4E6] bg-[#F8F9FA] shadow-sm lg:min-h-full">
          {!mapError ? (
            <iframe
              title="Sai Balaji Metal Industries on Google Maps"
              src={SITE.mapsEmbedSrc}
              className="h-full min-h-[360px] w-full flex-1 border-0 lg:min-h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              onError={() => setMapError(true)}
            />
          ) : null}

          {mapError ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="font-body text-[#5C6770]">
                Map preview could not be loaded in your browser.
              </p>
              <ViewOnMapsButton tone="light" size="lg" className="rounded-2xl" />
            </div>
          ) : (
            <div className="border-t border-[#E2E4E6] bg-white p-3 sm:hidden">
              <ViewOnMapsButton
                tone="light"
                size="default"
                className="w-full rounded-xl"
              />
            </div>
          )}

          {!mapError ? (
            <div className="hidden border-t border-[#E2E4E6] bg-white p-3 sm:block">
              <ViewOnMapsButton
                tone="light"
                size="default"
                className="w-full rounded-xl"
              />
            </div>
          ) : null}
        </div>
      </div>
    </ScrollSection>
  );
}
