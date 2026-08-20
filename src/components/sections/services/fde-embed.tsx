"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Bot } from "lucide-react";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Animation signature de la page Forward Deployed Engineer : l'ingénieur qui
 * se branche dans votre équipe. Un nœud « ingénieur dédié » au centre, des
 * fils qui partent vers vos outils réels (logos couleur), des points lumineux
 * qui circulent. Même ADN que l'animation Automatisation, en fan-out.
 */

type Tool = { logo: string; name: string };

const tools: Tool[] = [
  { logo: "/images/stack/slack-color.svg", name: "Slack" },
  { logo: "/images/stack/notion-color.svg", name: "Notion" },
  { logo: "/images/stack/salesforce-color.svg", name: "Salesforce" },
  { logo: "/images/stack/jira-color.svg", name: "Jira" },
  { logo: "/images/stack/microsoftteams-color.svg", name: "Teams" },
  { logo: "/images/stack/googledrive-color.svg", name: "Google Drive" },
];

/** Fil horizontal + point lumineux qui circule (masqué en reduced-motion). */
function Wire({ reduced, delay }: { reduced: boolean | null; delay: number }) {
  return (
    <div className="relative hidden h-px flex-1 self-center lg:block">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
      {!reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute top-1/2 size-2 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/50"
          style={{ marginTop: -4, left: 0 }}
          animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.5,
            delay,
            repeat: Infinity,
            repeatDelay: 0.7,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

function ToolTile({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3.5 shadow-sm">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface">
        <img
          src={tool.logo}
          alt={tool.name}
          loading="lazy"
          className="max-h-5 max-w-5 object-contain"
        />
      </span>
      <span className="text-sm font-medium text-foreground">{tool.name}</span>
    </div>
  );
}

export function FdeEmbed({ locale = "fr" }: { locale?: Locale } = {}) {
  const ui = t(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-4xl">
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1fr)]">
        {/* L'ingénieur dédié */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-3xl border border-primary/40 bg-white p-6 shadow-sm ring-1 ring-primary/15">
            <div className="flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Bot className="size-6 text-primary" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {ui.fdeEmbedEngineer}
                </p>
                <p className="text-xs text-muted-foreground">
                  {ui.fdeEmbedInTeam}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-500/[0.08] px-3 py-2">
              {!reduced && (
                <motion.span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-emerald-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
              )}
              <span className="text-xs font-semibold text-emerald-600">
                {ui.fdeEmbedLive}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Faisceau de fils (desktop) */}
        <div className="flex w-16 flex-col justify-center gap-6">
          {[0, 0.25, 0.5].map((d) => (
            <Wire key={d} reduced={reduced} delay={d} />
          ))}
        </div>

        {/* Vos outils, votre équipe */}
        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {ui.fdeEmbedPlugs}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {tools.map((t) => (
              <motion.div
                key={t.name}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <ToolTile tool={t} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Résultat */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: reduced ? 0 : 0.9 }}
        className="mt-10 rounded-2xl border border-primary/15 bg-primary/[0.03] px-6 py-6 text-center"
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {ui.fdeEmbedResult}
        </p>
      </motion.div>
    </div>
  );
}
