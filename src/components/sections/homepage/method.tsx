"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ScanSearch,
  Compass,
  Blocks,
  PlugZap,
  GraduationCap,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";


/** Icônes fortes et distinctes par étape (clé = champ `icon` de la donnée). */
const stepIcons: Record<string, LucideIcon> = {
  search: ScanSearch,
  map: Compass,
  settings: Blocks,
  rocket: PlugZap,
  graduation: GraduationCap,
  trending: RefreshCw,
};

/**
 * Série IA cohérente (DA unique : bureau parisien lumineux, équipe jeune,
 * tons bleu/ardoise). Point de cadrage réglé image par image pour la bande.
 */
const STEP_PHOTOS: { src: string; position: string }[] = [
  // Audit — le consultant au mur de process (main levée dans le tiers haut)
  { src: "/images/method-ai/01-audit.jpg", position: "50% 30%" },
  // Stratégie — arbitrage de roadmap (têtes hautes : cadrer vers le haut)
  { src: "/images/method-ai/02-strategie.jpg", position: "50% 20%" },
  // Développement — l'ingénieur et son assistant IA
  { src: "/images/method-ai/03-developpement.jpg", position: "50% 32%" },
  // Implémentation — le workflow de nœuds en revue
  { src: "/images/method-ai/04-implementation.jpg", position: "50% 35%" },
  // Formation — session hands-on (formateur debout : crâne à préserver)
  { src: "/images/method-ai/05-formation.jpg", position: "50% 28%" },
  // Itération — la revue des métriques
  { src: "/images/method-ai/06-iteration.jpg", position: "50% 35%" },
];

/**
 * Méthode — accordéon horizontal : les 6 étapes sont TOUTES visibles sur une
 * seule ligne. Le panneau survolé s'élargit et révèle son gain + livrable ;
 * les autres restent en fines colonnes (nom à la verticale). Aucune attente,
 * aucune hauteur en trop. Repli mobile en cartes swipables.
 */
export function MethodSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { method } = HOMEPAGE[locale];
  const ui = t(locale);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <section id="methode" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              {method.badge}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {method.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {ui.hpMethodIntro}
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop : accordéon horizontal */}
        <div className="mt-14 hidden h-[560px] gap-3 md:flex">
            {method.steps.map((s, i) => {
              const Icon = stepIcons[s.icon] ?? ScanSearch;
              const isActive = i === active;
              return (
                <motion.div
                  key={s.number}
                  initial={reduced ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: reduced ? 0 : i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  role="button"
                  tabIndex={0}
                  aria-current={isActive ? "step" : undefined}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i);
                  }}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-3xl border transition-[flex-grow,box-shadow,border-color] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                    isActive
                      ? "border-primary/25 bg-white shadow-xl shadow-primary/[0.06]"
                      : "border-border bg-white/70 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.04]",
                  )}
                  style={{ flexGrow: isActive ? 7 : 1, flexBasis: 0 }}
                >
                  {/* Filigrane : remplit l'espace, rappelle le sens de l'étape */}
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 -right-6 text-primary"
                    initial={false}
                    animate={
                      reduced
                        ? {}
                        : isActive
                          ? { y: [0, -10, 0], opacity: 0.08 }
                          : { y: 0, opacity: 0.05 }
                    }
                    transition={
                      isActive
                        ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.4 }
                    }
                  >
                    <Icon className="size-44" />
                  </motion.span>
                  {/* Voile dégradé bas pour asseoir le contenu */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/70 to-transparent"
                  />
                  <div className="relative flex h-full flex-col p-5 sm:p-6">
                    {/* Haut : icône + numéro */}
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "flex size-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300",
                          isActive
                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                            : "bg-primary/[0.07] text-primary",
                        )}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span
                        className={cn(
                          "font-mono text-xs font-semibold tracking-widest transition-opacity",
                          isActive ? "text-primary" : "text-muted-foreground/40",
                        )}
                      >
                        {s.number}
                      </span>
                    </div>

                    {/* Contenu : nom vertical (replié) OU détail (déplié) */}
                    <div className="relative mt-4 min-h-0 flex-1">
                      {/* Nom vertical quand replié */}
                      {!isActive && (
                        <div className="absolute inset-0 flex items-end">
                          <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-base font-bold text-foreground">
                            {s.name}
                          </span>
                        </div>
                      )}

                      {/* Détail quand déplié */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={reduced ? false : { opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, delay: reduced ? 0 : 0.12 }}
                            className="flex h-full min-w-[22rem] flex-col"
                          >
                            {/* Photo de session : remplit le haut du panneau,
                                point de cadrage ajusté image par image */}
                            <div className="group/photo relative h-64 overflow-hidden rounded-2xl">
                              {/* Zoom cinématique à l'ouverture : l'image se pose */}
                              <motion.div
                                initial={reduced ? false : { scale: 1.14 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  duration: 0.8,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="absolute inset-0"
                              >
                                <Image
                                  src={STEP_PHOTOS[i].src}
                                  alt={`Étape ${s.name} — AI Makers en mission`}
                                  fill
                                  sizes="460px"
                                  className="object-cover transition-transform duration-700 ease-out group-hover/photo:scale-[1.05]"
                                  style={{ objectPosition: STEP_PHOTOS[i].position }}
                                />
                              </motion.div>
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
                            </div>

                            <div className="mt-4 flex flex-1 flex-col justify-end">
                            <div className="mb-3 flex flex-wrap items-center gap-2">
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                                {s.phase}
                              </span>
                              <span className="font-mono text-[11px] font-medium text-muted-foreground">
                                {s.duration}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                              {s.name}
                            </h3>

                            <div className="mt-4 grid gap-5 sm:grid-cols-2">
                              {/* Ce qu'on fait : l'action concrète */}
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                  Ce qu&rsquo;on fait
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                  {s.whatWeDo.slice(0, 3).map((w) => (
                                    <li
                                      key={w}
                                      className="flex items-start gap-2 text-[13px] leading-snug text-muted-foreground"
                                    >
                                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/50" />
                                      {w}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Ce que vous y gagnez : le résultat + le livrable */}
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                                  {ui.hpMethodGain}
                                </p>
                                <p className="mt-2 text-[14px] font-semibold leading-snug text-foreground">
                                  {s.gain}
                                </p>
                                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.04] px-3 py-2">
                                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                    <Check className="size-3" />
                                  </span>
                                  <span className="text-[12.5px] text-muted-foreground">
                                    {ui.hpMethodDeliverable}&nbsp;:{" "}
                                    <span className="font-medium text-foreground">
                                      {s.deliverableShort}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        {/* Mobile : cartes swipables (tout visible en glissant) */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
          {method.steps.map((s) => {
            const Icon = stepIcons[s.icon] ?? ScanSearch;
            return (
              <div
                key={s.number}
                className="w-[78vw] max-w-[300px] shrink-0 snap-start rounded-3xl border border-border bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/[0.07] text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground/50">
                    {s.number}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {s.phase}
                  </span>
                  <span className="font-mono text-[11px] font-medium text-muted-foreground">
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {s.name}
                </h3>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Ce qu&rsquo;on fait
                </p>
                <ul className="mt-1.5 space-y-1">
                  {s.whatWeDo.slice(0, 3).map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 text-[12.5px] leading-snug text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/50" />
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {ui.hpMethodGain}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-foreground">
                  {s.gain}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.04] px-3 py-2">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3" />
                  </span>
                  <span className="text-[12.5px] text-muted-foreground">
                    {ui.hpMethodDeliverable}&nbsp;:{" "}
                    <span className="font-medium text-foreground">
                      {s.deliverableShort}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chute + CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-12 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
            >
              <Link href={method.cta.href}>
                {method.cta.label}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Link
              href="/ai-transformation"
              className="cursor-pointer text-sm font-medium text-primary hover:underline"
            >
              {ui.hpOfferDetailCta}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
