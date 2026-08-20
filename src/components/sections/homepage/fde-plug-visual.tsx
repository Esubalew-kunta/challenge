"use client";

import { createRef, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { AnimatedBeam } from "@/components/motion/animated-beam";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

const ENGINEER_AVATAR = "/images/team/walid.jpg";

const CLIENT_TOOLS = [
  { src: "/images/stack/slack-color.svg", label: "Slack" },
  { src: "/images/stack/notion-color.svg", label: "Notion" },
  { src: "/images/stack/salesforce-color.svg", label: "Salesforce" },
];

/** Courbures en éventail : un faisceau par tuile (haut / droit / bas). */
const BEAM_CURVATURES = [22, 0, -22];

/**
 * Visuel animé de la carte "Forward Deployed Engineer" — la tuile
 * ingénieur (avatar) est reliée aux tuiles outils du client par de
 * vrais faisceaux lumineux (AnimatedBeam) : un faisceau par outil,
 * courbures en éventail et pulses décalés, qui circulent en continu de
 * l'ingénieur vers les outils ("il se branche dans votre équipe").
 * Micro-ligne de statut "connecté · à vos outils" avec pastille verte.
 * Reduced-motion : fil statique, sans faisceau ni ping.
 */
export function FdePlugVisual({ locale = "fr" }: { locale?: Locale } = {}) {
  const ui = t(locale);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const engineerRef = useRef<HTMLSpanElement>(null);
  const toolRefs = useMemo(
    () => CLIENT_TOOLS.map(() => createRef<HTMLSpanElement>()),
    [],
  );

  return (
    <div className="flex w-full max-w-[300px] flex-col items-center gap-5 transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
      <div ref={containerRef} className="relative flex w-full items-start">
        {/* Faisceaux avatar → outils (décoratifs, sous les tuiles z-10) */}
        {!prefersReducedMotion &&
          CLIENT_TOOLS.map((tool, i) => (
            <AnimatedBeam
              key={tool.src}
              containerRef={containerRef}
              fromRef={engineerRef}
              toRef={toolRefs[i]}
              curvature={BEAM_CURVATURES[i] ?? 0}
              duration={2.8}
              delay={i * 0.45}
              pathColor="#2563EB"
              pathOpacity={0.12}
              pathWidth={1.5}
            />
          ))}

        {/* Tuile ingénieur */}
        <span className="relative z-10 flex shrink-0 flex-col items-center gap-1.5">
          <span
            ref={engineerRef}
            className="flex size-12 items-center justify-center rounded-xl border border-border bg-white shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ENGINEER_AVATAR}
              alt={ui.hpFdeEngineerAlt}
              loading="lazy"
              className="size-8 rounded-full object-cover"
            />
          </span>
          <span className="text-[11px] text-muted-foreground">
            {ui.hpFdeEngineer}
          </span>
        </span>

        {/* Couloir de câblage : fil statique en reduced-motion,
            sinon les faisceaux circulent dans cet espace */}
        <span
          aria-hidden="true"
          className={
            prefersReducedMotion
              ? "relative mt-6 h-px min-w-8 flex-1 bg-border"
              : "relative mt-6 h-px min-w-8 flex-1"
          }
        />

        {/* Tuiles outils du client — centres alignés sur le fil (mt-1.5) */}
        <span className="relative z-10 mt-1.5 flex shrink-0 flex-col items-center gap-1.5">
          <span className="flex items-center gap-1.5">
            {CLIENT_TOOLS.map((tool, i) => (
              <span
                key={tool.src}
                ref={toolRefs[i]}
                className="flex size-9 items-center justify-center rounded-lg border border-border bg-white shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.src}
                  alt={`Logo ${tool.label}`}
                  loading="lazy"
                  className="size-5"
                />
              </span>
            ))}
          </span>
          <span className="text-[11px] text-muted-foreground">{ui.hpFdeYourTools}</span>
        </span>
      </div>

      {/* Statut — même pattern que "En production" de la fleet */}
      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span aria-hidden="true" className="relative flex size-1.5">
          {!prefersReducedMotion && (
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 [animation-duration:2.4s]" />
          )}
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        {ui.hpFdeConnected}
      </span>
    </div>
  );
}
