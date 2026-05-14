import type { Variants } from "framer-motion";

/**
 * Shared cubic-bezier easing. Tuple literal types as `Easing` (not `number[]`)
 * for Framer Motion / motion-dom `Transition`.
 */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll-section fade-up; explicitly `Variants` for strict `variants` prop typing. */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: MOTION_EASE },
  },
};

/** Standard page / UI transitions using {@link MOTION_EASE}. */
export function easeTransition(
  duration: number,
  extra?: { delay?: number }
): { duration: number; ease: typeof MOTION_EASE; delay?: number } {
  return extra ? { duration, ease: MOTION_EASE, ...extra } : { duration, ease: MOTION_EASE };
}
