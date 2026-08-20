"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Fine barre de progression de lecture (2px, primary) fixée en haut de la
 * fenêtre, au-dessus du header. Rendue uniquement sur les pages article.
 * Spring désactivé si prefers-reduced-motion (la barre suit le scroll sans
 * inertie, l'information de progression reste disponible).
 */
export function ReadingProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
      style={{ scaleX: prefersReducedMotion ? scrollYProgress : springProgress }}
    />
  );
}
