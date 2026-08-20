"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
};

const directionOffset = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

/** Filet de sécurité : au-delà de ce délai, le contenu est forcé visible. */
const FORCE_VISIBLE_AFTER_MS = 2000;

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // Dès que 10% de l'élément entre dans le viewport, l'animation se joue
  // une seule fois et le contenu RESTE visible (once: true).
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [forceVisible, setForceVisible] = useState(false);

  // Filet de sécurité : si l'intersection ne se déclenche jamais
  // (viewport atypique, resize, bug d'observer), on force l'affichage.
  useEffect(() => {
    const timer = setTimeout(
      () => setForceVisible(true),
      FORCE_VISIBLE_AFTER_MS,
    );
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div data-reveal className={cn(className)}>
        {children}
      </div>
    );
  }

  const visible = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      // Marqueur pour la règle CSS de globals.css qui rend le contenu visible
      // en mouvement réduit. Le serveur ignore la préférence et sérialise
      // toujours `initial`, donc le HTML part avec opacity:0. React ne corrige
      // pas un style inline divergent pendant l'hydratation en production :
      // aucun correctif JS ne peut donc rattraper ça, seul le CSS le peut.
      data-reveal
      // Fondu + dé-floutage : le contenu arrive légèrement flou et se met au
      // point en entrant dans le viewport — perçu comme bien plus organique
      // qu'un simple slide. Le flou est retiré du DOM une fois l'animation
      // finie (filter: none) pour ne pas coûter en compositing au scroll.
      initial={{ opacity: 0, filter: "blur(7px)", ...directionOffset[direction] }}
      animate={
        visible ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : undefined
      }
      transition={{ duration, delay, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (ref.current) ref.current.style.filter = "";
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
