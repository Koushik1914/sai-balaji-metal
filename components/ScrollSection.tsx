"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

import { fadeUpVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ScrollSection({
  className,
  children,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={fadeUpVariants}
      {...props}
    >
      {children}
    </motion.section>
  );
}
