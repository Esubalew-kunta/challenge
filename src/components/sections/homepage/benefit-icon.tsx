"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/** Icônes animées des rangées de bénéfices ("Du concret, mesuré"). */
export type BenefitIconKind =
  "clock" | "gauge" | "graduation-cap" | "trending-up";

interface AnimatedIconProps {
  /** false = prefers-reduced-motion : rendu statique (état final). */
  animated: boolean;
  /** true = entrée en viewport, on joue le geste (une seule fois). */
  play: boolean;
}

/** Filet de sécurité : au-delà de ce délai, l'état final est forcé. */
const FORCE_PLAY_AFTER_MS = 2500;

/** Mêmes attributs que les icônes lucide (viewBox 24, stroke 2, caps ronds). */
const iconSvgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "size-5 text-primary",
  "aria-hidden": true,
} as const;

/** Horloge : l'aiguille des minutes balaie jusqu'à sa position (spring doux). */
function ClockIcon({ animated, play }: AnimatedIconProps) {
  return (
    <svg {...iconSvgProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6" />
      {/* Aiguille pivotant autour du centre (12,12) = coin haut-gauche de sa bbox */}
      <motion.path
        d="M12 12l4 2"
        style={{ originX: 0, originY: 0 }}
        initial={animated ? { rotate: -100 } : false}
        animate={play ? { rotate: 0 } : undefined}
        transition={{
          type: "spring",
          duration: 0.7,
          bounce: 0.35,
          delay: 0.15,
        }}
      />
    </svg>
  );
}

/** Jauge : l'aiguille part de la gauche et vient se poser (léger overshoot). */
function GaugeIcon({ animated, play }: AnimatedIconProps) {
  return (
    <svg {...iconSvgProps}>
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      {/* Aiguille pivotant autour de (12,14) = coin bas-gauche de sa bbox */}
      <motion.path
        d="m12 14 4-4"
        style={{ originX: 0, originY: 1 }}
        initial={animated ? { rotate: -110 } : false}
        animate={play ? { rotate: 0 } : undefined}
        transition={{
          type: "spring",
          duration: 0.75,
          bounce: 0.4,
          delay: 0.15,
        }}
      />
    </svg>
  );
}

/** Chapeau : léger "lancer" (translateY + rebond) + anneau ping unique. */
function GraduationCapIcon({ animated, play }: AnimatedIconProps) {
  return (
    <>
      {animated && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-primary/25"
          initial={{ opacity: 0, scale: 1 }}
          animate={
            play ? { opacity: [0, 0.7, 0], scale: [1, 1.3, 1.45] } : undefined
          }
          transition={{
            duration: 0.7,
            delay: 0.2,
            times: [0, 0.35, 1],
            ease: "easeOut",
          }}
        />
      )}
      <motion.span
        className="flex"
        initial={false}
        animate={
          play ? { y: [0, -3, 0.5, 0], rotate: [0, -6, 2, 0] } : undefined
        }
        transition={{
          duration: 0.6,
          delay: 0.15,
          times: [0, 0.4, 0.75, 1],
          ease: ["easeOut", "easeIn", "easeOut"],
        }}
      >
        <GraduationCap className="size-5 text-primary" />
      </motion.span>
    </>
  );
}

/** Courbe : le tracé se dessine (~800ms easeOut), la flèche atterrit au sommet. */
function TrendingUpIcon({ animated, play }: AnimatedIconProps) {
  return (
    <svg {...iconSvgProps}>
      <motion.polyline
        points="2 17 8.5 10.5 13.5 15.5 22 7"
        initial={animated ? { pathLength: 0 } : false}
        animate={play ? { pathLength: 1 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      />
      {/* Pointe de flèche, origine sur le sommet (22,7) */}
      <motion.path
        d="M16 7h6v6"
        style={{ originX: 1, originY: 0 }}
        initial={animated ? { opacity: 0, scale: 0.4 } : false}
        animate={play ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.65 }}
      />
    </svg>
  );
}

const iconComponents: Record<
  BenefitIconKind,
  (props: AnimatedIconProps) => React.ReactNode
> = {
  clock: ClockIcon,
  gauge: GaugeIcon,
  "graduation-cap": GraduationCapIcon,
  "trending-up": TrendingUpIcon,
};

/**
 * Pastille bleue + icône animée à l'entrée en viewport (une seule fois).
 * Mêmes dimensions que la pastille statique d'origine : aucun layout shift.
 * prefers-reduced-motion : rendu statique (état final), pas d'anneau.
 */
export function BenefitIconBadge({ kind }: { kind: BenefitIconKind }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [forcePlay, setForcePlay] = useState(false);

  // Si l'observer ne se déclenche jamais (viewport atypique), on force
  // l'état final pour ne jamais laisser une icône à moitié dessinée.
  useEffect(() => {
    const timer = setTimeout(() => setForcePlay(true), FORCE_PLAY_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  const animated = !prefersReducedMotion;
  const play = animated && (isInView || forcePlay);
  const Icon = iconComponents[kind];

  return (
    <div
      ref={ref}
      className="relative flex size-12 items-center justify-center rounded-full bg-primary/[0.07]"
    >
      <Icon animated={animated} play={play} />
    </div>
  );
}
