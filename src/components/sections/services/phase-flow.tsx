"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Animation signature de la page Transformation IA : les 3 phases qui
 * s'enchaînent. Un rail se dessine et un point lumineux traverse
 * Audit → Build → Scale ; chaque phase s'allume en séquence avec sa durée,
 * sa marque et son gain. Même ADN que les autres animations câblées.
 */

type Phase = {
  number: string;
  brand: string;
  duration: string;
  gain: string;
  illustration: string;
};

export function PhaseFlow({
  phases,
  locale = "fr",
}: {
  phases: readonly Phase[];
  locale?: Locale;
}) {
  const ui = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-5xl">
      <div className="relative">
        {/* Rail horizontal qui se dessine (desktop) */}
        <div className="pointer-events-none absolute inset-x-[16%] top-[76px] hidden h-0.5 lg:block">
          <div className="absolute inset-0 rounded-full bg-border" />
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-primary/60"
            initial={reduced ? false : { width: "0%" }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
          />
          {!reduced && (
            <motion.span
              aria-hidden="true"
              className="absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_2px] shadow-primary/50"
              initial={{ left: "0%" }}
              animate={inView ? { left: ["0%", "100%"] } : {}}
              transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
            />
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reduced ? 0 : 0.3 + i * 0.7, duration: 0.4 }}
              className="relative flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              {/* Pastille numéro sur le rail */}
              <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-surface">
                <img
                  src={phase.illustration}
                  alt=""
                  loading="lazy"
                  className="max-h-10 max-w-10 object-contain"
                />
              </div>

              <div className="mt-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {phase.number}
                </p>
                <p className="mt-1 text-xl font-bold text-primary">
                  {phase.brand}
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  {phase.duration}
                </p>
              </div>

              {/* Le gain qui pop */}
              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: reduced ? 0 : 0.6 + i * 0.7 }}
                className="mt-5 rounded-2xl bg-primary/[0.04] p-4"
              >
                <p className="text-sm leading-relaxed text-foreground">
                  {phase.gain}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: reduced ? 0 : 2.4 }}
        className="mt-10 text-center text-sm font-medium text-muted-foreground"
      >
        {ui.svcPhaseFlowFooter}
      </motion.p>
    </div>
  );
}
