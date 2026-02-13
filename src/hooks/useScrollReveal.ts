import { useReducedMotion } from "motion/react";
import type { Variant } from "motion/react";

export const useScrollReveal = (delay = 0) => {
  const reduced = useReducedMotion();

  const hidden: Variant = reduced
    ? { opacity: 1 }
    : { opacity: 0, y: 40, filter: "blur(4px)" };

  const visible: Variant = reduced
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        },
      };

  return { hidden, visible };
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};
