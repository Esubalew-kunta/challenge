"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Animation signature de la page FDE : « Recruter ou déployer ».
 * Deux chronologies parallèles. Celle du haut (recruter) avance lentement,
 * jalon après jalon, sur 9 mois. Celle du bas (FDE) s'allume presque
 * entièrement dès les premières semaines. Le contraste de vitesse EST
 * l'argument — aucun texte ne le dit mieux.
 *
 * Tout le texte est rendu côté serveur ; seuls les tracés et l'apparition
 * des jalons sont animés (désactivés en reduced motion).
 */

type Milestone = {
  /** Position sur la piste, en % de la largeur. */
  at: number;
  label: string;
};

// Les jalons portent du texte : ils dépendent donc de la langue de la page.
const hireTrack = (locale: Locale): readonly Milestone[] => {
  const ui = t(locale);
  return [
    { at: 2, label: ui.hireAdPublished },
    { at: 34, label: ui.hireFirstInterviews },
    { at: 64, label: ui.hireCandidatePicked },
    { at: 94, label: ui.hireStarts },
  ];
};

const deployTrack = (locale: Locale): readonly Milestone[] => {
  const ui = t(locale);
  return [
    { at: 2, label: ui.hireConnected },
    { at: 34, label: ui.hireFirstWorkstream },
    { at: 64, label: ui.hireFirstSystem },
    { at: 94, label: ui.hireCadence },
  ];
};

/** Durées de tracé : le contraste fait l'argument. */
const HIRE_DURATION = 4.2;
const DEPLOY_DURATION = 1.1;

function Track({
  title,
  costTag,
  milestones,
  duration,
  color,
  inView,
}: {
  title: string;
  costTag: string;
  milestones: readonly Milestone[];
  duration: number;
  color: "muted" | "primary";
  inView: boolean;
}) {
  const reduced = useReducedMotion();
  const isPrimary = color === "primary";

  return (
    <div
      className={
        "rounded-2xl border p-6 sm:p-8 " +
        (isPrimary
          ? "border-primary/25 bg-primary/[0.04]"
          : "border-border bg-background")
      }
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p
          className={
            "text-sm font-semibold " +
            (isPrimary ? "text-primary" : "text-muted-foreground")
          }
        >
          {title}
        </p>
        <p
          className={
            "text-xs font-medium " +
            (isPrimary ? "text-primary/80" : "text-muted-foreground/70")
          }
        >
          {costTag}
        </p>
      </div>

      {/* La piste */}
      <div className="relative mt-10 h-1 rounded-full bg-slate-200/70">
        <motion.div
          className={
            "h-full origin-left rounded-full " +
            (isPrimary
              ? "bg-gradient-to-r from-primary to-[#3B82F6]"
              : "bg-slate-400/60")
          }
          initial={reduced ? false : { scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: reduced ? 0 : duration,
            ease: "linear",
            delay: reduced ? 0 : 0.3,
          }}
        />
        {/* Jalons : chacun s'allume au passage de la ligne. */}
        {milestones.map((m) => (
          <motion.span
            key={m.at}
            className={
              "absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 " +
              (isPrimary
                ? "border-primary bg-white"
                : "border-slate-400 bg-white")
            }
            style={{ left: `${m.at}%` }}
            initial={reduced ? false : { scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              delay: reduced ? 0 : 0.3 + (m.at / 100) * duration,
              duration: 0.25,
            }}
          />
        ))}
      </div>

      {/* Libellés des jalons */}
      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
        {milestones.map((m) => (
          <motion.p
            key={m.label}
            className={
              "text-xs leading-snug " +
              (isPrimary ? "text-foreground" : "text-muted-foreground")
            }
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: reduced ? 0 : 0.3 + (m.at / 100) * duration,
              duration: 0.3,
            }}
          >
            {m.label}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

export function HireOrDeploy({ locale = "fr" }: { locale?: Locale } = {}) {
  const ui = t(locale);
  const HIRE_TRACK = hireTrack(locale);
  const DEPLOY_TRACK = deployTrack(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mx-auto max-w-4xl space-y-5">
      <Track
        title="Recruter le poste"
        costTag={ui.hireCostTag}
        milestones={HIRE_TRACK}
        duration={HIRE_DURATION}
        color="muted"
        inView={inView}
      />
      <Track
        title={ui.hireDeployTitle}
        costTag={ui.hireDeployCostTag}
        milestones={DEPLOY_TRACK}
        duration={DEPLOY_DURATION}
        color="primary"
        inView={inView}
      />
    </div>
  );
}
