"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { X, Check, Sparkles } from "lucide-react";

/**
 * Animation-pont des pages secteur : chaque douleur du métier est transformée
 * en système déployé. Data-driven (douleurs + cas d'usage du secteur), donc
 * fonctionne pour tous les secteurs. Douleur rouge → pulse IA → système vert.
 */

type SectorTransformProps = {
  douleurs: readonly string[];
  systemes: readonly { titre: string }[];
};

export function SectorTransform({ douleurs, systemes }: SectorTransformProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const rows = Math.min(douleurs.length, systemes.length);
  const pairs = Array.from({ length: rows }, (_, i) => ({
    douleur: douleurs[i],
    systeme: systemes[i].titre,
  }));

  return (
    <div ref={ref} className="mx-auto max-w-4xl space-y-4">
      {pairs.map((pair, i) => (
        <div
          key={pair.douleur}
          className="grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr]"
        >
          {/* Douleur */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: reduced ? 0 : i * 0.25, duration: 0.35 }}
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-4"
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <X className="size-3.5 text-destructive" />
            </span>
            <p className="text-sm leading-snug text-muted-foreground">
              {pair.douleur}
            </p>
          </motion.div>

          {/* Transformateur IA + fil */}
          <div className="relative flex items-center justify-center">
            {/* Fil horizontal desktop */}
            <div className="absolute inset-x-0 top-1/2 hidden h-px md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 via-primary/40 to-emerald-500/30" />
              {!reduced && (
                <motion.span
                  aria-hidden="true"
                  className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_1px] shadow-primary/50"
                  initial={{ left: "0%", opacity: 0 }}
                  animate={inView ? { left: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.25,
                    repeat: Infinity,
                    repeatDelay: 1.4,
                  }}
                />
              )}
            </div>
            <motion.span
              initial={reduced ? false : { scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: reduced ? 0 : 0.2 + i * 0.25 }}
              className="relative z-10 flex size-8 items-center justify-center rounded-full border border-primary/20 bg-white"
            >
              <Sparkles className="size-4 text-primary" />
            </motion.span>
          </div>

          {/* Système déployé */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: reduced ? 0 : 0.4 + i * 0.25, duration: 0.35 }}
            className="flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/[0.04] p-4"
          >
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <Check className="size-3.5 text-emerald-600" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-snug text-foreground">
                {pair.systeme}
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-emerald-600">
                Système déployé
              </p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
