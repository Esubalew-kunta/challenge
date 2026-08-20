"use client";

import { Fragment, useEffect, useId, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";


const CYCLE_INTERVAL_MS = 2800;

/** Libellés propres pour les logos briques (déduits du nom de fichier). */
const BRICK_LABELS: Record<string, string> = {
  claude: "Claude",
  hubspot: "HubSpot",
  n8n: "n8n",
  notion: "Notion",
  slack: "Slack",
  gmail: "Gmail",
  stripe: "Stripe",
  make: "Make",
  openai: "OpenAI",
  gemini: "Gemini",
  salesforce: "Salesforce",
  fireflies: "Fireflies",
  sap: "SAP",
  onedrive: "OneDrive",
  googledrive: "Google Drive",
  meta: "Meta",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
  copilot: "Copilot",
  microsoft: "Microsoft",
  googlecalendar: "Google Calendar",
  teams: "Teams",
  microsoftteams: "Teams",
  outlook: "Outlook",
  powerbi: "Power BI",
  powerautomate: "Power Automate",
  langchain: "LangChain",
  obsidian: "Obsidian",
  linkedin: "LinkedIn",
};

function brickLabel(src: string): string {
  const base =
    src
      .split("/")
      .pop()
      ?.replace(/(-color)?\.(svg|png)$/, "") ?? "";
  return BRICK_LABELS[base] ?? base.charAt(0).toUpperCase() + base.slice(1);
}

/** Largeur logique du viewBox du connecteur (étiré à la largeur réelle). */
const CONNECTOR_VIEW_WIDTH = 120;

/**
 * Pulse lumineux qui parcourt le connecteur entre deux briques — même
 * mécanisme que motion/gradient-tracing.tsx (motion.linearGradient + useId,
 * SSR-safe), mais l'SVG est étiré (preserveAspectRatio="none") pour suivre
 * la largeur flexible du connecteur. Se pose dans un parent relative.
 */
function ConnectorPulse({ delay = 0 }: { delay?: number }) {
  const gradientId = useId();
  const midY = 1.5;

  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2"
      viewBox={`0 0 ${CONNECTOR_VIEW_WIDTH} 3`}
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d={`M0,${midY} L${CONNECTOR_VIEW_WIDTH},${midY}`}
        stroke={`url(#${gradientId})`}
        strokeWidth={3}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: 0, x2: 0 }}
          animate={{
            x1: [0, CONNECTOR_VIEW_WIDTH * 2],
            x2: [0, CONNECTOR_VIEW_WIDTH],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
        >
          <stop stopColor="#60A5FA" stopOpacity="0" />
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Section "Notre propre cuisine" — liste auto-cyclante des systèmes
 * qu'AI Makers utilise en interne et déploie chez ses clients.
 * Panneau détail sticky à gauche (carte de système vivant : statut
 * "En production", mini-pipeline animé où la donnée circule entre les
 * briques), liste verticale des systèmes à droite (un seul cadre
 * englobant, rangées séparées par un divider, hairline de progression
 * sur la rangée active qui donne le tempo du cycle).
 * Le système actif tourne toutes les 2,8s quand la section est visible ;
 * le hover prend la main et met le cycle en pause. La dernière rangée
 * "Construisez le vôtre" est un lien vers #reserver, hors du cycle.
 */
export function FleetSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { fleet } = HOMEPAGE[locale];
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!inView || isPaused || prefersReducedMotion) return;
    if (fleet.systems.length < 2) return;

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % fleet.systems.length);
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [inView, isPaused, prefersReducedMotion]);

  const activeSystem = fleet.systems[activeIndex] ?? fleet.systems[0];

  const panelContent = (
    <>
      {/* En-tête : statut de production + département */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600">
          <span aria-hidden="true" className="relative flex size-1.5">
            {!prefersReducedMotion && (
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 [animation-duration:2.4s]" />
            )}
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          En production
        </span>
        <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
          {activeSystem.tag}
        </span>
      </div>

      <h3 className="mt-5 text-3xl font-bold text-foreground lg:text-4xl">
        {activeSystem.name}
      </h3>
      <p className="mt-4 text-lg text-muted-foreground">
        {activeSystem.detail}
      </p>

      {/* Mini-pipeline : la donnée circule entre les briques du système */}
      <div className="mt-10 flex items-start">
        {activeSystem.bricks.map((brick, i) => (
          <Fragment key={brick}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="relative mt-6 h-px min-w-8 flex-1 bg-border"
              >
                {!prefersReducedMotion && (
                  <ConnectorPulse delay={(i - 1) * 0.4} />
                )}
              </span>
            )}
            <span className="flex flex-col items-center gap-1.5">
              <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brick}
                  alt={`Logo ${brickLabel(brick)}`}
                  loading="lazy"
                  className="size-6"
                />
              </span>
              <span className="text-[11px] text-muted-foreground">
                {brickLabel(brick)}
              </span>
            </span>
          </Fragment>
        ))}
      </div>

      {activeSystem.internal && (
        <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
          <span aria-hidden="true" className="text-[10px] leading-none">
            &#9679;
          </span>
          Utilisé en interne chez AI Makers
        </p>
      )}
    </>
  );

  return (
    <section id="cuisine" ref={sectionRef} className="section-padding bg-background">
      {/* Keyframes de la hairline de progression (rangée active) */}
      <style>{`@keyframes fleet-progress{from{width:0%}to{width:100%}}`}</style>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {fleet.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px] md:leading-[1.15]">
              {fleet.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {fleet.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Panneau détail — carte de système vivant, sticky sur desktop */}
          <ScrollReveal>
            <div className="min-h-[26rem] rounded-2xl bg-gradient-to-b from-[#F1F5F9] to-white p-10 lg:sticky lg:top-32 lg:min-h-[28rem] lg:p-12">
              {prefersReducedMotion ? (
                <div>{panelContent}</div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSystem.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {panelContent}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </ScrollReveal>

          {/* Liste des systèmes — colonne unique, bordure portée par le conteneur */}
          <ScrollReveal delay={0.1}>
            <ul
              className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white/60"
              onMouseLeave={() => setIsPaused(false)}
            >
              {fleet.systems.map((system, i) => {
                const isActive = prefersReducedMotion || i === activeIndex;
                return (
                  <li key={system.name}>
                    <button
                      type="button"
                      onMouseEnter={() => {
                        setActiveIndex(i);
                        setIsPaused(true);
                      }}
                      onFocus={() => {
                        setActiveIndex(i);
                        setIsPaused(true);
                      }}
                      onBlur={() => setIsPaused(false)}
                      className={cn(
                        "relative flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40",
                        isActive && "bg-primary/[0.04]",
                      )}
                      aria-current={
                        !prefersReducedMotion && i === activeIndex
                          ? "true"
                          : undefined
                      }
                    >
                      {/* Indicateur vertical de la rangée active */}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-y-0 left-0 w-0.5 bg-primary transition-opacity duration-200",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      />
                      {/* Hairline de progression — donne le tempo du cycle */}
                      {!prefersReducedMotion && i === activeIndex && (
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 h-px w-0 bg-primary/40"
                          style={{
                            animation: `fleet-progress ${CYCLE_INTERVAL_MS}ms linear`,
                            animationPlayState:
                              isPaused || !inView ? "paused" : "running",
                          }}
                        />
                      )}
                      <span className="flex min-w-0 items-center gap-2.5">
                        {/* Mobile : 2 lignes autorisées (line-clamp-2), md+ : une seule ligne avec ellipse */}
                        <span
                          className={cn(
                            "line-clamp-2 text-[15px] font-medium transition-colors duration-200 md:line-clamp-1",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {system.name}
                        </span>
                        <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                          {system.tag}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2">
                        {system.bricks.map((brick) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={brick}
                            src={brick}
                            alt={`Logo ${brickLabel(brick)}`}
                            loading="lazy"
                            className={cn(
                              "size-5 transition-all duration-200",
                              isActive
                                ? "grayscale-0 opacity-100"
                                : "opacity-50 grayscale",
                            )}
                          />
                        ))}
                      </span>
                    </button>
                  </li>
                );
              })}

            </ul>
          </ScrollReveal>
        </div>

        {/* CTA "Construisez le vôtre" — centré sous la section */}
        <ScrollReveal delay={0.15}>
          <div className="mt-14 text-center">
            <a
              href={fleet.buildYours.href}
              className="btn-gradient group inline-flex h-12 items-center rounded-lg px-8 text-base font-semibold text-white shadow-sm"
            >
              {fleet.buildYours.title}
              <span
                aria-hidden="true"
                className="ml-2 transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              {fleet.buildYours.subtitle}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
