"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Animation signature de la page Audit IA : « Le scanner ».
 * Une grille des process du client (vrais logos couleur) qu'une ligne de scan
 * balaie ; à son passage chaque process s'allume et affiche son potentiel ROI,
 * puis une jauge de maturité se remplit jusqu'à un score /24.
 */

type Process = {
  logo: string;
  name: string;
  roi: string;
};

const processes: Process[] = [
  { logo: "/images/stack/gmail-color.svg", name: "Relances clients", roi: "Fort ROI" },
  { logo: "/images/stack/hubspot-color.svg", name: "Qualification leads", roi: "Fort ROI" },
  { logo: "/images/stack/googlesheets-color.svg", name: "Reporting", roi: "ROI moyen" },
  { logo: "/images/stack/notion-color.svg", name: "Documentation", roi: "ROI moyen" },
  { logo: "/images/stack/outlook-color.svg", name: "Prise de RDV", roi: "Fort ROI" },
  { logo: "/images/stack/powerbi-color.svg", name: "Pilotage", roi: "Fort ROI" },
];

export function ProcessScanner({ locale = "fr" }: { locale?: Locale } = {}) {
  const ui = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 sm:p-8">
        {/* La ligne de scan qui balaie la grille */}
        {!reduced && inView && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 z-10 h-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
            initial={{ top: "-10%" }}
            animate={{ top: ["-10%", "100%"] }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-x-0 bottom-0 h-px bg-primary/60 shadow-[0_0_12px_1px] shadow-primary/40" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processes.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduced ? false : { opacity: 0.35 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: reduced ? 0 : 0.3 + i * 0.22, duration: 0.35 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 p-3.5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <img
                  src={p.logo}
                  alt=""
                  loading="lazy"
                  className="max-h-5 max-w-5 object-contain"
                />
              </span>
              <span className="min-w-0 flex-1 text-sm font-medium text-foreground">
                {p.name}
              </span>
              <motion.span
                initial={reduced ? false : { opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: reduced ? 0 : 0.55 + i * 0.22 }}
                className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary"
              >
                {p.roi}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Jauge de maturité */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: reduced ? 0 : 1.6 }}
        className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-primary/15 bg-primary/[0.03] px-6 py-7 sm:flex-row sm:gap-8"
      >
        <div className="text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {ui.svcScannerScore}
          </p>
          <div className="mt-1 flex items-end justify-center gap-1 sm:justify-start">
            <AnimatedCounter locale={locale} target={16} label="" />
            <span className="pb-1 text-lg font-semibold text-muted-foreground">
              / 24
            </span>
          </div>
        </div>
        <div className="h-2.5 w-full flex-1 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={reduced ? false : { width: 0 }}
            animate={inView ? { width: `${(16 / 24) * 100}%` } : {}}
            transition={{ delay: reduced ? 0 : 1.7, duration: 0.9, ease: "easeOut" }}
          />
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          {ui.svcScannerCaption}
        </p>
      </motion.div>
    </div>
  );
}
