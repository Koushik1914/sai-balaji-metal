"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Cylinder,
  Droplets,
  Fence,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";

import { ScrollSection } from "@/components/ScrollSection";
import { PRODUCTS, waUrl, type ProductItem } from "@/lib/constants";
import { easeTransition } from "@/lib/motion";

const iconMap: Record<
  ProductItem["icon"],
  ComponentType<{ className?: string }>
> = {
  pipe: Cylinder,
  droplets: Droplets,
  layers: Layers,
  fence: Fence,
  sparkles: Sparkles,
  wrench: Wrench,
};

export function Products() {
  return (
    <ScrollSection id="products" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#D97706]">
          Our Products
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold uppercase tracking-wide text-[#1F1F1F] sm:text-4xl">
          Everything You Need to Build
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => {
            const Icon = iconMap[product.icon];
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={easeTransition(0.45, { delay: index * 0.05 })}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col rounded-2xl border border-[#E2E4E6] bg-white p-6 shadow-sm transition-shadow hover:border-[#D97706]/35 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E4E6] bg-[#F8F9FA] text-[#1F1F1F] transition-colors group-hover:border-[#D97706]/40 group-hover:text-[#D97706]">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#1F1F1F]">
                  {product.name}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-[1.7] text-[#5C6770]">
                  {product.description}
                </p>
                <a
                  href={waUrl(product.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 font-body text-sm font-semibold text-[#D97706] transition-opacity hover:opacity-80"
                >
                  Ask on WhatsApp <span aria-hidden>→</span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </ScrollSection>
  );
}
