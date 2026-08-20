"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";

/**
 * Animation signature de la page AI Operating System : un cerveau IA central
 * qui distribue vers les agents par département. Bus de distribution + fils
 * verticaux avec points lumineux, départements qui s'allument en séquence,
 * chaque département portant un vrai logo outil (la couleur vient des logos).
 */

type Department = {
  name: string;
  logo: string;
  tool: string;
};

/**
 * Les logos et les noms d'outil sont identiques dans les deux langues (ce sont
 * des noms de produit) ; seuls les noms de DÉPARTEMENT sont traduits. Les deux
 * listes doivent rester dans le même ordre : l'animation les allume en séquence.
 */
const DEPARTMENTS_BY_LOCALE: Record<Locale, Department[]> = {
  fr: [
    { name: "Ventes", logo: "/images/stack/salesforce-color.svg", tool: "Salesforce" },
    { name: "Finance", logo: "/images/stack/powerbi-color.svg", tool: "Power BI" },
    { name: "Marketing", logo: "/images/stack/meta-color.svg", tool: "Meta" },
    { name: "Opérations", logo: "/images/stack/notion-color.svg", tool: "Notion" },
    { name: "Direction", logo: "/images/stack/claude-color.svg", tool: "Claude" },
    { name: "RH", logo: "/images/stack/linkedin-color.svg", tool: "LinkedIn" },
  ],
  en: [
    { name: "Sales", logo: "/images/stack/salesforce-color.svg", tool: "Salesforce" },
    { name: "Finance", logo: "/images/stack/powerbi-color.svg", tool: "Power BI" },
    { name: "Marketing", logo: "/images/stack/meta-color.svg", tool: "Meta" },
    { name: "Operations", logo: "/images/stack/notion-color.svg", tool: "Notion" },
    { name: "Leadership", logo: "/images/stack/claude-color.svg", tool: "Claude" },
    { name: "HR", logo: "/images/stack/linkedin-color.svg", tool: "LinkedIn" },
  ],
};

export function AgentFleet({ locale = "fr" }: { locale?: Locale } = {}) {
  const s = t(locale);
  const departments = DEPARTMENTS_BY_LOCALE[locale];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="mx-auto max-w-4xl">
      {/* Cerveau IA central */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: -12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="mx-auto flex max-w-sm items-center gap-3 rounded-3xl border border-primary/30 bg-white p-5 shadow-sm ring-1 ring-primary/15"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
          <BrainCircuit className="size-6 text-primary" />
        </span>
        <div>
          <p className="text-sm font-bold text-foreground">
            {s.fleetBrainTitle}
          </p>
          <p className="text-xs text-muted-foreground">
            {s.fleetBrainSubtitle}
          </p>
        </div>
        {!reduced && (
          <motion.span
            aria-hidden="true"
            className="ml-auto size-2 rounded-full bg-emerald-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Bus de distribution */}
      <div className="relative mx-auto mt-4 h-8 w-px">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/15" />
      </div>
      <div className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      {/* Agents par département */}
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {departments.map((dept, i) => (
          <div key={dept.name} className="flex flex-col items-center">
            {/* Fil vertical + point lumineux qui descend du bus */}
            <div className="relative h-6 w-px">
              <div className="absolute inset-0 bg-primary/20" />
              {!reduced && (
                <motion.span
                  aria-hidden="true"
                  className="absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_8px_1px] shadow-primary/50"
                  initial={{ top: "0%", opacity: 0 }}
                  animate={inView ? { top: ["0%", "100%"], opacity: [0, 1, 1, 0] } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.4 + i * 0.18,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                />
              )}
            </div>
            <motion.div
              initial={reduced ? false : { opacity: 0.4, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: reduced ? 0 : 0.5 + i * 0.18, duration: 0.35 }}
              className="flex w-full flex-col items-center gap-2 rounded-2xl border border-border bg-white p-4 shadow-sm"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-surface">
                <img
                  src={dept.logo}
                  alt={dept.tool}
                  loading="lazy"
                  className="max-h-5 max-w-5 object-contain"
                />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {dept.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {s.fleetAgentLive}
              </span>
            </motion.div>
          </div>
        ))}
      </div>

      <motion.p
        initial={reduced ? false : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: reduced ? 0 : 1.8 }}
        className="mt-10 text-center text-sm font-medium text-muted-foreground"
      >
        {s.fleetCaption}
      </motion.p>
    </div>
  );
}
