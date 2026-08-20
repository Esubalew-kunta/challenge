"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * "Mission Control" — le visuel propriétaire du hero.
 * Un dashboard AI Makers stylisé, construit en pur code : le pilotage
 * de la transformation (systèmes en production, impact mesuré).
 * Chiffres : uniquement les agrégats réels du cabinet.
 */

const systems = [
  {
    name: "Reporting client automatisé",
    type: "Prêt chaque lundi matin, sans intervention",
    status: "En production",
  },
  {
    name: "Agent de qualification des leads",
    type: "Chaque lead scoré et routé à l'arrivée",
    status: "En production",
  },
  {
    name: "Synthèses de réunions",
    type: "Le compte-rendu tombe dans Notion, décisions extraites",
    status: "En production",
  },
  {
    name: "Relances clients intelligentes",
    type: "Plus aucun impayé oublié",
    status: "En build",
  },
];

/** Paires avant/après (hauteurs décoratives, sans échelle) */
const bars = [
  { avant: 82, apres: 30 },
  { avant: 68, apres: 22 },
  { avant: 90, apres: 38 },
  { avant: 74, apres: 26 },
  { avant: 60, apres: 18 },
];

export function MissionControl() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Carte dashboard, légère perspective façon Linear */}
      <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-2xl shadow-blue-900/10 [transform:perspective(1400px)_rotateX(4deg)]">
        {/* Barre de titre */}
        <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-tight text-foreground">
              AI<span className="text-primary">Makers</span>
            </span>
            <span className="text-xs text-muted-foreground">
              · Pilotage de la transformation
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
            <motion.span
              className="size-1.5 rounded-full bg-success"
              animate={
                prefersReducedMotion ? undefined : { opacity: [1, 0.3, 1] }
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
            Systèmes en production
          </span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-[1.2fr_1fr]">
          {/* Colonne gauche : KPIs + graphe avant/après */}
          <div className="bg-white p-5">
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "200+", label: "systèmes en production" },
                { value: "7h/sem", label: "rendues à chaque collaborateur" },
                { value: "J+30", label: "premier impact mesuré" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg bg-surface/70 px-3 py-2.5"
                >
                  <p className="font-mono text-lg font-semibold leading-none text-foreground">
                    {kpi.value}
                  </p>
                  <p className="mt-1.5 text-[10px] leading-tight text-muted-foreground">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Graphe avant / après */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-muted-foreground">
                  Temps passé par tâche : avant / après système
                </p>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2 rounded-sm bg-slate-300" /> Avant
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="size-2 rounded-sm bg-primary" /> Après
                  </span>
                </div>
              </div>
              <div className="mt-3 flex h-28 items-end gap-3">
                {bars.map((bar, i) => (
                  <div key={i} className="flex h-full flex-1 items-end gap-1">
                    <motion.div
                      className="flex-1 rounded-t-sm bg-slate-200"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.avant}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                    />
                    <motion.div
                      className="flex-1 rounded-t-sm bg-primary"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.apres}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.35 + i * 0.08 }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] font-medium text-primary">
                Chaque système est mesuré avant / après. Pas de KPI, pas de mise
                en production.
              </p>
            </div>
          </div>

          {/* Colonne droite : systèmes en production */}
          <div className="bg-white p-5">
            <p className="text-[11px] font-medium text-muted-foreground">
              Systèmes livrés ce trimestre
            </p>
            <ul className="mt-3 space-y-2.5">
              {systems.map((system, i) => (
                <motion.li
                  key={system.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="flex items-center justify-between rounded-lg border border-border/70 px-3 py-2.5"
                >
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      {system.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {system.type}
                    </p>
                  </div>
                  <span
                    className={
                      system.status === "En production"
                        ? "inline-flex items-center gap-1 text-[10px] font-medium text-success"
                        : "inline-flex items-center gap-1 text-[10px] font-medium text-amber-500"
                    }
                  >
                    <span
                      className={
                        system.status === "En production"
                          ? "size-1.5 rounded-full bg-success"
                          : "size-1.5 rounded-full bg-amber-400"
                      }
                    />
                    {system.status}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fondu bas — la carte plonge dans la page */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
