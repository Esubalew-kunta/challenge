"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingChip = {
  label: string;
  /** Position du chip autour de l'illustration */
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay?: number;
};

type IllustrationCardProps = {
  /** Chemin vers l'illustration 3D (ex: /images/3d/cible-audit-chips.png) */
  src: string;
  alt: string;
  chips?: readonly FloatingChip[];
  className?: string;
};

const chipPositions = {
  "top-left": "left-2 top-6 md:left-4 md:top-8",
  "top-right": "right-2 top-6 md:right-4 md:top-8",
  "bottom-left": "bottom-6 left-2 md:bottom-8 md:left-4",
  "bottom-right": "bottom-6 right-2 md:bottom-8 md:right-4",
};

/**
 * Carte d'illustration 3D avec chips flottants — reproduit le pattern
 * de la section méthode du site Framer live (illustration + badges
 * bleus qui flottent doucement autour).
 */
export function IllustrationCard({
  src,
  alt,
  chips = [],
  className,
}: IllustrationCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#F1F5F9] to-white p-6",
        className
      )}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
        animate={
          prefersReducedMotion ? undefined : { y: [0, -8, 0] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          className={cn(
            "absolute rounded-lg bg-[#DBEAFE] px-2.5 py-1.5 text-[11px] font-medium leading-tight text-[#1E40AF] shadow-sm",
            chipPositions[chip.position]
          )}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={
            prefersReducedMotion ? undefined : { y: [0, -5, 0] }
          }
          transition={{
            y: {
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay ?? 0,
            },
            opacity: { duration: 0.4, delay: chip.delay ?? 0 },
            scale: { duration: 0.4, delay: chip.delay ?? 0 },
          }}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
