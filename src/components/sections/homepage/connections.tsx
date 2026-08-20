"use client";

import { createRef, useMemo, useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { AnimatedBeam } from "@/components/motion/animated-beam";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";


/**
 * Type STRUCTUREL, pas dérivé de `typeof connections`. `as const` fige chaque
 * champ sur sa valeur française : la version anglaise, même forme, était
 * refusée comme un type sans rapport.
 */
type ConnectionGroup = {
  readonly number: string;
  readonly title: string;
  readonly detail: string;
  readonly tools: readonly { readonly name: string; readonly logo: string }[];
};

const TILE_STAGGER = 0.12;
const LINE_DELAY = 0.18;

const tileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 20,
      delay: i * TILE_STAGGER,
    },
  }),
};

/**
 * La barre entre en fondu (pas de scaleX : AnimatedBeam lit le
 * getBoundingClientRect de sa cible, un transform fausserait le point
 * d'arrivée des faisceaux).
 */
const barVariants: Variants = {
  hidden: { opacity: 0 },
  show: (count: number) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: count * TILE_STAGGER + LINE_DELAY + 0.1,
    },
  }),
};

const statusVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  show: (count: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: count * TILE_STAGGER + LINE_DELAY + 0.45,
    },
  }),
};

/**
 * Carte de câblage : les tuiles logos se posent une à une, puis de vrais
 * faisceaux lumineux (AnimatedBeam) circulent en continu de chaque tuile
 * vers la barre-bus commune, avec des pulses décalés.
 * Reduced-motion : fils verticaux statiques, aucun faisceau.
 */
function ConnectionCard({
  group,
  locale = "fr",
}: {
  group: ConnectionGroup;
  locale?: Locale;
}) {
  const ui = t(locale);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const busRef = useRef<HTMLSpanElement>(null);
  const tileRefs = useMemo(
    () => group.tools.map(() => createRef<HTMLDivElement>()),
    [group],
  );
  const count = group.tools.length;

  return (
    <motion.div
      initial={prefersReducedMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <span className="font-mono text-xs font-medium tracking-widest text-primary">
        {group.number}
      </span>
      <h3 className="mt-3 text-lg font-bold text-foreground">{group.title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{group.detail}</p>

      {/* Tuiles + câblage — le conteneur relative porte les faisceaux */}
      <div
        ref={containerRef}
        className="relative mt-6 flex-1 border-t border-slate-100 pt-6"
      >
        {/* Faisceaux tuile → bus (décoratifs, sous les tuiles z-10) */}
        {!prefersReducedMotion &&
          tileRefs.map((tileRef, i) => (
            <AnimatedBeam
              key={group.tools[i].name}
              containerRef={containerRef}
              fromRef={tileRef}
              toRef={busRef}
              curvature={-10 - i * 4}
              startYOffset={16}
              duration={3.2}
              delay={i * 0.55}
              pathColor="#2563EB"
              pathOpacity={0.12}
              pathWidth={1.5}
            />
          ))}

        <div className="flex items-start gap-4">
          {group.tools.map((tool, i) => (
            <div key={tool.name} className="flex flex-col items-center">
              <motion.div
                ref={tileRefs[i]}
                custom={i}
                variants={tileVariants}
                title={tool.name}
                className="relative z-10 flex size-12 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.logo}
                  alt={tool.name}
                  loading="lazy"
                  className="size-6 object-contain"
                />
              </motion.div>
              {/* Espace de câblage : fil statique en reduced-motion,
                  sinon les faisceaux circulent dans ce couloir */}
              <div
                aria-hidden="true"
                className={
                  prefersReducedMotion
                    ? "h-6 w-px bg-primary/40"
                    : "h-6 w-px"
                }
              />
            </div>
          ))}
        </div>

        {/* Barre de connexion commune — le bus où convergent les faisceaux */}
        <motion.span
          ref={busRef}
          custom={count}
          variants={barVariants}
          className="relative z-10 block h-0.5 rounded-full bg-primary"
        />
      </div>

      {/* Statut */}
      <motion.p
        custom={count}
        variants={statusVariants}
        className="mt-4 text-xs font-medium text-success"
      >
        &#9679; {ui.hpConnectedWeek1}
      </motion.p>
    </motion.div>
  );
}

/**
 * Section "On ne remplace rien. On se branche." — 3 cartes façon YALC.
 * Animation signature : câblage tuile → faisceau lumineux → bus commun.
 */
export function ConnectionsSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { connections } = HOMEPAGE[locale];
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {connections.badge}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px] md:leading-[1.15]">
            {connections.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {connections.subtitle}
          </p>
        </div>

        {/* Cartes */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {connections.groups.map((group) => (
            <ConnectionCard locale={locale} key={group.number} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
