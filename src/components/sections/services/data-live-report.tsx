"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Database, Factory, ShoppingCart, Bot } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Animation de la bande de preuve Plateforme Data : « le reporting qui se
 * produit tout seul ». Les systèmes sources envoient leurs pulses de données
 * vers un dashboard vivant dont les barres se remplissent en boucle, sous
 * l'œil d'un agent actif. Aucun chiffre inventé : des barres, pas de valeurs.
 */

const sources = [
  { icon: Database, label: "ERP" },
  { icon: Factory, label: "Production" },
  { icon: ShoppingCart, label: "Commercial" },
];

function rowsFor(s: ReturnType<typeof t>) {
  return [
    { label: s.dataRowSales, width: "82%" },
    { label: s.dataRowOutput, width: "64%" },
    { label: s.dataRowCash, width: "48%" },
  ];
}

export function DataLiveReport({
  locale = "fr",
}: { locale?: Locale } = {}) {
  const s = t(locale);
  const rows = rowsFor(s);
  const reduced = useReducedMotion();

  return (
    <div className="flex size-full items-center justify-center bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7] p-6 sm:p-8">
      <div className="flex w-full max-w-lg items-center gap-4 sm:gap-6">
        {/* Sources : chaque système émet ses données */}
        <div className="flex shrink-0 flex-col gap-5">
          {sources.map((source) => (
            <div key={source.label} className="flex items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                <source.icon className="size-4.5 text-slate-500" />
              </span>
              <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
                {source.label}
              </span>
            </div>
          ))}
        </div>

        {/* Fils : les pulses convergent vers le dashboard */}
        <div className="flex flex-1 flex-col gap-5">
          {sources.map((source, i) => (
            <Fragment key={source.label}>
              <span aria-hidden="true" className="relative h-px bg-border">
                {!reduced && (
                  <motion.span
                    className="absolute top-1/2 size-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(37,99,235,0.45)]"
                    style={{ x: "-50%", y: "-50%" }}
                    initial={{ left: "0%" }}
                    animate={{ left: ["0%", "100%"] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.6,
                    }}
                  />
                )}
              </span>
            </Fragment>
          ))}
        </div>

        {/* Le dashboard vivant */}
        <div className="w-[55%] shrink-0 rounded-2xl border border-border bg-white p-4 shadow-lg shadow-slate-900/[0.06] sm:p-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
              <span aria-hidden="true" className="relative flex size-1.5">
                {!reduced && (
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 [animation-duration:2.4s]" />
                )}
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {s.dataUpToDate}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              <Bot className="size-3" />
              {s.dataAgentLive}
            </span>
          </div>

          <p className="mt-3 text-[12px] font-bold text-foreground">
            {s.dataDailySteering}
          </p>

          <div className="mt-3 space-y-3">
            {rows.map((row, i) => (
              <div key={row.label}>
                <p className="text-[10px] font-medium text-muted-foreground">
                  {row.label}
                </p>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                    initial={reduced ? { width: row.width } : { width: "0%" }}
                    whileInView={{ width: row.width }}
                    viewport={{ once: true, margin: "-15% 0px" }}
                    transition={{
                      duration: 1.1,
                      delay: reduced ? 0 : 0.3 + i * 0.25,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[10px] text-muted-foreground">
            {s.dataAutoGenerated}
          </p>
        </div>
      </div>
    </div>
  );
}
