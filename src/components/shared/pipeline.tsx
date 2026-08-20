"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface PipelineRailProps {
  children: React.ReactNode;
}

/**
 * Le fil bleu de la page — une fine ligne verticale AI Blue qui se dessine
 * au fil du scroll sur toute la hauteur des sections qu'elle enveloppe.
 * Façon TracingBeam : le fil est un dégradé (trail léger → AI Blue → tête
 * claire #60A5FA) dont la tête lumineuse — un point qui rayonne — suit
 * précisément la position de lecture (useScroll + useSpring).
 * Purement décoratif : aria-hidden, visible uniquement en lg+.
 * Reduced-motion : ligne primary statique, sans dégradé ni tête.
 */
export function PipelineRail({ children }: PipelineRailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.75"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });
  // Position de la tête lumineuse le long du rail + fondu aux extrémités.
  const headTop = useTransform(progress, (value) => `${value * 100}%`);
  const headOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Rail : fond slate + dégradé primary qui se dessine, tête lumineuse */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-6 z-10 hidden w-0.5 lg:block"
      >
        <div className="absolute inset-0 bg-slate-200" />
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-primary" />
        ) : (
          <>
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                scaleY: progress,
                background:
                  "linear-gradient(to bottom, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.55) 55%, #2563EB 85%, #60A5FA 100%)",
              }}
            />
            <motion.div
              className="absolute left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#60A5FA] shadow-[0_0_10px_2px_rgba(37,99,235,0.55)]"
              style={{ top: headTop, opacity: headOpacity }}
            />
          </>
        )}
      </div>
      {children}
    </div>
  );
}

interface PipelineNodeProps {
  label: string;
}

/**
 * Pastille posée sur le rail, à placer juste avant une section clé
 * (enfant direct de <PipelineRail>). S'allume en primary quand elle
 * franchit le milieu du viewport. Décoratif, aucun impact mobile.
 */
export function PipelineNode({ label }: PipelineNodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const isActive = useInView(nodeRef, { margin: "-50% 0px -50% 0px" });

  return (
    <div
      ref={nodeRef}
      aria-hidden
      className="pointer-events-none relative z-10 hidden h-0 lg:block"
    >
      {/* left-6 (rail) + 1px (demi-épaisseur) - 6px (demi-pastille) */}
      <div className="absolute left-[calc(1.5rem-5px)] top-0 flex -translate-y-1/2 items-center gap-3">
        <span
          className={cn(
            "block size-3 rounded-full border-2 border-primary transition-colors duration-300",
            isActive ? "bg-primary" : "bg-white",
          )}
        />
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300",
            isActive ? "text-primary" : "text-slate-400",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
