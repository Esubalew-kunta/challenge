"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Living icons AI Makers : micro-scènes SVG animées (24x24, stroke primary,
 * strokeWidth 1.8). Chaque icône joue sa scène une fois à l'entrée en
 * viewport, puis peut la rejouer au survol (replayOnHover, actif par défaut).
 *
 * Portée du survol : si un ancêtre porte l'attribut `data-icon-hover-scope`
 * (ex. une PremiumCard), c'est lui qui déclenche le replay — sinon l'icône
 * elle-même. Purement décoratif (aria-hidden), le texte reste SSR.
 *
 * Reduced-motion : rendu statique, scène complète (état final).
 */

export interface LivingIconProps {
  /** Taille en px (largeur = hauteur). */
  size?: number;
  className?: string;
  /** Rejoue la scène au survol (de l'icône ou du data-icon-hover-scope). */
  replayOnHover?: boolean;
  strokeWidth?: number;
}

/** Filet de sécurité : au-delà de ce délai, l'état final est forcé. */
const FORCE_PLAY_AFTER_MS = 2500;

/**
 * Orchestration commune : useInView (once) + filet de sécurité + replay au
 * survol via remontage (runId incrémenté = les `initial` se rejouent).
 */
function useLivingIcon(replayOnHover: boolean) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [forcePlay, setForcePlay] = useState(false);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setForcePlay(true), FORCE_PLAY_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!replayOnHover || prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const scope =
      (el.closest("[data-icon-hover-scope]") as HTMLElement | null) ?? el;
    const handler = () => setRunId((n) => n + 1);
    scope.addEventListener("pointerenter", handler);
    return () => scope.removeEventListener("pointerenter", handler);
  }, [replayOnHover, prefersReducedMotion]);

  const animated = !prefersReducedMotion;
  return {
    ref,
    animated,
    play: animated && (isInView || forcePlay),
    runId,
  };
}

/** Enveloppe commune : span mesuré par useInView + svg. */
function IconShell({
  size,
  className,
  iconRef,
  children,
}: {
  size: number;
  className?: string;
  iconRef: React.RefObject<HTMLSpanElement | null>;
  children: React.ReactNode;
}) {
  return (
    <span
      ref={iconRef}
      aria-hidden="true"
      className={cn("inline-flex shrink-0 text-primary", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full overflow-visible"
      >
        {children}
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* 1. ShieldLock : le bouclier se dessine, le cadenas se verrouille.   */
/* ------------------------------------------------------------------ */

export function ShieldLockIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* Bouclier tracé */}
        <motion.path
          d="M12 3l7 2.6v4.9c0 4.4-2.9 7.4-7 8.9-4.1-1.5-7-4.5-7-8.9V5.6L12 3z"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Corps du cadenas */}
        <motion.rect
          x="9.6"
          y="11"
          width="4.8"
          height="4"
          rx="1"
          initial={animated ? { opacity: 0, scale: 0.6 } : false}
          animate={play ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
          style={{ transformOrigin: "12px 13px" }}
        />
        {/* Anse : arrive levée puis se clenche vers le bas */}
        <motion.path
          d="M10.4 11V9.6a1.6 1.6 0 013.2 0V11"
          initial={animated ? { opacity: 0, y: -1.6 } : false}
          animate={play ? { opacity: 1, y: 0 } : undefined}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 22,
            delay: 0.8,
          }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Scale : la balance oscille puis s'équilibre.                     */
/* ------------------------------------------------------------------ */

export function ScaleIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* Colonne + socle, fixes */}
        <path d="M12 5.2v14" />
        <path d="M9 19.2h6" />
        <circle cx="12" cy="4" r="1" />
        {/* Fléau + plateaux : oscillation amortie autour du pivot (12,7) */}
        <motion.g
          initial={animated ? { rotate: -10 } : false}
          animate={play ? { rotate: [-10, 7, -4, 2, 0] } : undefined}
          transition={{
            duration: 1.1,
            delay: 0.15,
            times: [0, 0.3, 0.55, 0.8, 1],
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "12px 7px" }}
        >
          <path d="M5 7h14" />
          <path d="M5 7l-1.7 3.6M5 7l1.7 3.6" />
          <path d="M2.6 10.6a2.4 2.4 0 004.8 0" />
          <path d="M19 7l-1.7 3.6M19 7l1.7 3.6" />
          <path d="M16.6 10.6a2.4 2.4 0 004.8 0" />
        </motion.g>
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 3. FileCheck : le document apparaît, la coche se trace.             */
/* ------------------------------------------------------------------ */

export function FileCheckIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* Feuille + coin plié, tracés */}
        <motion.path
          d="M13.5 3H7a1 1 0 00-1 1v16a1 1 0 001 1h10a1 1 0 001-1V7.5L13.5 3z"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
        <motion.path
          d="M13.5 3v4.5H18"
          initial={animated ? { opacity: 0 } : false}
          animate={play ? { opacity: 1 } : undefined}
          transition={{ duration: 0.25, delay: 0.45 }}
        />
        {/* La coche se trace */}
        <motion.path
          d="M9 14.2l2.1 2.1 3.9-4.6"
          strokeWidth={strokeWidth + 0.2}
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 4. BookOpen : le livre s'ouvre, les lignes apparaissent.            */
/* ------------------------------------------------------------------ */

export function BookOpenIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  const lineTransition = (delay: number) => ({
    duration: 0.3,
    delay,
    ease: "easeOut" as const,
  });
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* Reliure */}
        <motion.path
          d="M12 6.4v13.8"
          initial={animated ? { opacity: 0 } : false}
          animate={play ? { opacity: 1 } : undefined}
          transition={{ duration: 0.25 }}
        />
        {/* Page gauche : s'ouvre depuis la reliure */}
        <motion.path
          d="M12 6.4C10.3 5 8 4.3 4.6 4.3a.6.6 0 00-.6.6v13.2c0 .3.3.6.6.6 3.4 0 5.7.7 7.4 2.1"
          initial={animated ? { scaleX: 0.12, opacity: 0.4 } : false}
          animate={play ? { scaleX: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          style={{ transformOrigin: "12px 12px" }}
        />
        {/* Page droite : s'ouvre depuis la reliure */}
        <motion.path
          d="M12 6.4C13.7 5 16 4.3 19.4 4.3c.3 0 .6.3.6.6v13.2a.6.6 0 01-.6.6c-3.4 0-5.7.7-7.4 2.1"
          initial={animated ? { scaleX: 0.12, opacity: 0.4 } : false}
          animate={play ? { scaleX: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          style={{ transformOrigin: "12px 12px" }}
        />
        {/* Lignes de texte, en cascade */}
        {(
          [
            ["M6.4 8.6c1.3.05 2.4.25 3.3.6", 0.6],
            ["M6.4 11.6c1.3.05 2.4.25 3.3.6", 0.72],
            ["M17.6 8.6c-1.3.05-2.4.25-3.3.6", 0.66],
            ["M17.6 11.6c-1.3.05-2.4.25-3.3.6", 0.78],
          ] as const
        ).map(([d, delay]) => (
          <motion.path
            key={d}
            d={d}
            strokeWidth={strokeWidth - 0.4}
            initial={animated ? { opacity: 0, pathLength: 0 } : false}
            animate={play ? { opacity: 0.7, pathLength: 1 } : undefined}
            transition={lineTransition(delay)}
          />
        ))}
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 5. FileSignature : la signature se trace sur la ligne.              */
/* ------------------------------------------------------------------ */

export function FileSignatureIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* Ligne de signature, discrète */}
        <motion.path
          d="M3.5 19.5h17"
          strokeWidth={strokeWidth - 0.4}
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 0.45 } : undefined}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        {/* Le paraphe se trace, comme à la main */}
        <motion.path
          d="M4.5 16.2c1.4-3.4 2.9-5.6 3.7-5.2.8.4-.9 3.6-.1 4 1 .5 2.2-3 3.4-2.9 1 .1.2 2.7 1.3 2.9 1.2.2 2-2.3 3.3-2.3 1 0 .6 1.9 1.6 2.1.9.2 1.6-.6 2.7-.8"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
        />
        {/* Le point final, posé après le trait */}
        <motion.circle
          cx="20.5"
          cy="14"
          r="0.5"
          fill="currentColor"
          stroke="none"
          initial={animated ? { opacity: 0, scale: 0 } : false}
          animate={play ? { opacity: 1, scale: [0, 1.6, 1] } : undefined}
          transition={{ duration: 0.3, delay: 1.2 }}
          style={{ transformOrigin: "20.5px 14px" }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Target : cercles concentriques, le point se pose au centre.      */
/* ------------------------------------------------------------------ */

export function TargetIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        <motion.circle
          cx="12"
          cy="12"
          r="9"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="5.2"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
        />
        {/* Le point atterrit au centre */}
        <motion.circle
          cx="12"
          cy="12"
          r="1.7"
          fill="currentColor"
          stroke="none"
          initial={animated ? { opacity: 0, scale: 2.2 } : false}
          animate={play ? { opacity: 1, scale: 1 } : undefined}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 18,
            delay: 0.62,
          }}
          style={{ transformOrigin: "12px 12px" }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Key : la clé tourne d'un quart de tour.                          */
/* ------------------------------------------------------------------ */

export function KeyIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        <motion.g
          initial={animated ? { rotate: -90, opacity: 0 } : false}
          animate={play ? { rotate: 0, opacity: 1 } : undefined}
          transition={{
            type: "spring",
            stiffness: 190,
            damping: 16,
            delay: 0.2,
          }}
          style={{ transformOrigin: "8px 12px" }}
        >
          {/* Tête */}
          <circle cx="8" cy="12" r="3.2" />
          <circle cx="8" cy="12" r="0.4" fill="currentColor" stroke="none" />
          {/* Tige + dents */}
          <path d="M11.2 12h9.3" />
          <path d="M17.3 12v2.6" />
          <path d="M20 12v3.2" />
        </motion.g>
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Puzzle : la pièce glisse et s'emboîte sur son empreinte.         */
/* ------------------------------------------------------------------ */

const PUZZLE_PIECE_D =
  "M10.1 5.4c0-1.05.85-1.9 1.9-1.9s1.9.85 1.9 1.9c0 .35-.1.68-.27.96-.3.5.03 1.04.61 1.04h2.55A1.5 1.5 0 0118.3 8.9v2.55c0 .58.54.91 1.04.61.28-.17.61-.27.96-.27 1.05 0 1.9.85 1.9 1.9s-.85 1.9-1.9 1.9c-.35 0-.68-.1-.96-.27-.5-.3-1.04.03-1.04.61v3.07a1.5 1.5 0 01-1.5 1.5H7.2a1.5 1.5 0 01-1.5-1.5v-3.07c0-.58-.54-.91-1.04-.61-.28.17-.61.27-.96.27-1.05 0-1.9-.85-1.9-1.9s.85-1.9 1.9-1.9c.35 0 .68.1.96.27.5.3 1.04-.03 1.04-.61V8.9a1.5 1.5 0 011.5-1.5h2.55c.58 0 .91-.54.61-1.04a1.87 1.87 0 01-.27-.96z";

export function PuzzleIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* L'empreinte, en filigrane à la position finale */}
        <motion.path
          d={PUZZLE_PIECE_D}
          strokeWidth={strokeWidth - 0.6}
          strokeDasharray="1.6 2.2"
          initial={animated ? { opacity: 0 } : { opacity: 0 }}
          animate={
            play
              ? { opacity: animated ? [0, 0.35, 0.35, 0] : 0 }
              : undefined
          }
          transition={{ duration: 1, times: [0, 0.25, 0.75, 1] }}
        />
        {/* La pièce arrive en biais et s'emboîte */}
        <motion.path
          d={PUZZLE_PIECE_D}
          initial={
            animated ? { x: 5, y: -5, rotate: 10, opacity: 0 } : false
          }
          animate={
            play ? { x: 0, y: 0, rotate: 0, opacity: 1 } : undefined
          }
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 21,
            delay: 0.25,
          }}
          style={{ transformOrigin: "12px 13px" }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 9. GraduationCap : le chapeau se pose avec un petit lancer.         */
/* ------------------------------------------------------------------ */

export function GraduationCapIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        <motion.g
          initial={animated ? { y: -5, rotate: -9, opacity: 0 } : false}
          animate={
            play
              ? {
                  y: [-5, 0.8, 0],
                  rotate: [-9, 2, 0],
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            duration: 0.65,
            delay: 0.15,
            times: [0, 0.7, 1],
            ease: "easeOut",
          }}
          style={{ transformOrigin: "12px 10px" }}
        >
          {/* Planche */}
          <path d="M2.5 9.6L12 5.2l9.5 4.4L12 14 2.5 9.6z" />
          {/* Coiffe */}
          <path d="M6.8 11.8v4.1c0 1.4 2.3 2.6 5.2 2.6s5.2-1.2 5.2-2.6v-4.1" />
        </motion.g>
        {/* Pompon : tombe après le chapeau */}
        <motion.path
          d="M21.5 9.6v5.2"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.35, delay: 0.75, ease: "easeOut" }}
        />
        <motion.circle
          cx="21.5"
          cy="15.4"
          r="0.55"
          fill="currentColor"
          stroke="none"
          initial={animated ? { opacity: 0, scale: 0 } : false}
          animate={play ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.25, delay: 1.05 }}
          style={{ transformOrigin: "21.5px 15.4px" }}
        />
      </g>
    </IconShell>
  );
}

/* ------------------------------------------------------------------ */
/* 10. ChefHat : la toque se dessine, une fumée subtile s'élève.       */
/* ------------------------------------------------------------------ */

export function ChefHatIcon({
  size = 24,
  className,
  replayOnHover = true,
  strokeWidth = 1.8,
}: LivingIconProps) {
  const { ref, animated, play, runId } = useLivingIcon(replayOnHover);
  return (
    <IconShell size={size} className={className} iconRef={ref}>
      <g key={runId} strokeWidth={strokeWidth}>
        {/* La toque, tracée d'un geste */}
        <motion.path
          d="M6.6 17.2v-3.9a3.4 3.4 0 01-.9-6.6 4.4 4.4 0 013.2-3.1 4.7 4.7 0 016.2 0 4.4 4.4 0 013.2 3.1 3.4 3.4 0 01-.9 6.6v3.9z"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Le bandeau */}
        <motion.path
          d="M6.6 20.2h10.8"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={play ? { pathLength: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.35, delay: 0.6, ease: "easeOut" }}
        />
        {/* Fumée subtile : deux volutes qui montent en boucle lente */}
        {animated &&
          play &&
          (
            [
              ["M9.4 1.6c-.5-.9.5-1.4 0-2.3", 0],
              ["M14.6 1.9c.5-.9-.5-1.4 0-2.3", 1.4],
            ] as const
          ).map(([d, delay]) => (
            <motion.path
              key={d}
              d={d}
              strokeWidth={strokeWidth - 0.6}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: [0, 0.45, 0], y: [2, -1.5, -4] }}
              transition={{
                duration: 2.8,
                delay: 1 + delay,
                repeat: Infinity,
                repeatDelay: 1.6,
                ease: "easeOut",
              }}
            />
          ))}
      </g>
    </IconShell>
  );
}
