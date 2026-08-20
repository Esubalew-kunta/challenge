"use client";

import {
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  motion,
} from "framer-motion";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./border-beam";

type PremiumCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Rayon du halo spotlight qui suit la souris (px). */
  spotlightRadius?: number;
  /** Désactive le rayon de bordure au survol. */
  beam?: boolean;
  /** Désactive la micro-élévation au survol. */
  lift?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

/**
 * Carte premium AI Makers — trois mécanismes combinés, adaptés de 21st.dev
 * pour un thème clair :
 * 1. Spotlight : halo bleu doux qui suit la souris (CardSpotlight, sans
 *    dépendance canvas/three.js — pur gradient radial).
 * 2. BorderBeam : rayon lumineux qui parcourt la bordure, activé au survol.
 * 3. Lift : micro-élévation + ombre bleutée.
 *
 * Le contenu est rendu tel quel (SSR intact) : les couches décoratives sont
 * absolues et aria-hidden.
 */
export function PremiumCard({
  children,
  className,
  spotlightRadius = 260,
  beam = true,
  lift = true,
  ...props
}: PremiumCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightMask = useMotionTemplate`radial-gradient(${spotlightRadius}px circle at ${mouseX}px ${mouseY}px, white, transparent 80%)`;

  return (
    <div
      className={cn(
        "group/card relative rounded-2xl border border-border bg-card transition-all duration-300",
        lift &&
          !prefersReducedMotion &&
          "hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_12px_32px_rgba(37,99,235,0.10)]",
        className,
      )}
      onMouseMove={prefersReducedMotion ? undefined : handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px z-0 rounded-[inherit] opacity-0 transition duration-300 group-hover/card:opacity-100"
          style={{
            backgroundColor: "rgba(37, 99, 235, 0.06)",
            maskImage: spotlightMask,
            WebkitMaskImage: spotlightMask,
          }}
        />
      )}
      {beam && isHovering && !prefersReducedMotion && (
        <BorderBeam size={140} duration={5} borderWidth={1.5} />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
