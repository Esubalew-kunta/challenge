import type { Variants } from "framer-motion";

/**
 * Bibliothèque d'animations AI Makers — variants Framer Motion réutilisables.
 * Inventoriées depuis le site Framer live (aimakers.fr) et calées sur les
 * règles UX : 150-300ms micro-interactions, transform/opacity uniquement,
 * respect de prefers-reduced-motion via useReducedMotion() dans les composants.
 */

/** Apparition au scroll — le standard du site (sections, titres, cards) */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Apparitions en cascade pour les grilles de cards (stagger des enfants) */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Flottement continu des illustrations 3D (pattern du site live) */
export const float: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

/** Survol des cards — élévation légère, jamais de scale (pas de layout shift) */
export const cardHover = {
  y: -4,
  transition: { duration: 0.25, ease: "easeOut" },
};

/** Panel qui s'ouvre (méthode, accordéons riches) */
export const expandPanel: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeOut" },
  },
};
