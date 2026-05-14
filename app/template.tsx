"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { easeTransition } from "@/lib/motion";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={easeTransition(0.35)}
    >
      {children}
    </motion.div>
  );
}
