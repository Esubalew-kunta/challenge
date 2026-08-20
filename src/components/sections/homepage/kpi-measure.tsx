"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

/**
 * Section "La mesure" — les 4 KPIs du Playbook AI-First.
 * Animation signature : les quatre jauges montent EN MÊME TEMPS (c'est le
 * message : « quand les 4 bougent ensemble, la transformation se produit »),
 * puis une ligne de liaison s'allume entre elles. Survol : définition +
 * exemple client, affichés immédiatement (pas de clic, pas d'attente).
 *
 * SEO/GEO : tout le texte (définitions comprises) est rendu côté serveur ;
 * seuls les remplissages de jauges et l'apparition sont animés.
 */

type Kpi = {
  /** Numéro affiché (01…04). */
  index: string;
  name: string;
  /** Valeur du compteur. */
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Libellé sous le chiffre. */
  metricLabel: string;
  /** Définition (livre blanc) — visible au survol. */
  definition: string;
  /** Fait d'étude sourcé qui approfondit l'indicateur — visible au survol. */
  proof: string;
  /** Hauteur de remplissage de la jauge (décoratif), en %. */
  fill: number;
};

// Jauges : chiffres de marché sourcés (Fed de St. Louis, Gallup, BCG — sources
// dans la doc interne, non citées à l'écran). Survol : la preuve AI Makers.
const KPIS: Kpi[] = [
  {
    index: "01",
    name: "Temps libéré",
    target: 9,
    suffix: " h/sem",
    metricLabel: "récupérées par les utilisateurs intensifs de l'IA",
    definition: "Les heures récupérées chaque semaine sur les tâches répétitives.",
    proof: "Un utilisateur quotidien a 3 fois plus de chances de gagner 4 h et plus par semaine qu'un utilisateur occasionnel. La régularité fait le gain.",
    fill: 62,
  },
  {
    index: "02",
    name: "Marge augmentée",
    target: 1.6,
    prefix: "×",
    decimals: 1,
    metricLabel: "de marge EBIT quand l'IA passe à l'échelle",
    definition: "L'impact direct sur votre rentabilité, mesuré en euros.",
    proof: "Les entreprises en tête sur l'IA réduisent leurs coûts 40 % de plus que les autres, à investissement comparable.",
    fill: 78,
  },
  {
    index: "03",
    name: "Adoption",
    target: 15,
    suffix: " %",
    metricLabel: "des salariés seulement utilisent l'IA chaque jour",
    definition: "Le % de vos collaborateurs qui utilisent l'IA au quotidien. C'est là que tout se joue.",
    proof: "52 % des salariés utilisent déjà l'IA au travail, et l'usage quotidien a plus que doublé en trois ans. L'écart se creuse avec ceux qui attendent.",
    fill: 55,
  },
  {
    index: "04",
    name: "Scalabilité",
    target: 2,
    prefix: "×",
    metricLabel: "de croissance pour les entreprises en tête sur l'IA",
    definition: "Faire plus, sans recruter proportionnellement.",
    proof: "Les entreprises les plus avancées : ×1,7 sur la croissance et ×3,6 sur le rendement actionnaire à trois ans.",
    fill: 88,
  },
];

/** Durée de montée des jauges — synchronisée avec les compteurs. */
const RISE_DURATION = 0.9;
/** Délai avant la montée (le temps que la section se pose). */
const RISE_DELAY = 0.25;

export function KpiMeasureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              La mesure
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              60&nbsp;% des entreprises n&apos;en tirent rien. Voici pourquoi.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              6 entreprises sur 10 qui investissent dans l&apos;IA n&apos;en
              retirent aucune valeur mesurable. Presque toujours pour la même
              raison : personne n&apos;a défini ce qu&apos;on mesure. Nous
              installons quatre indicateurs dès le premier jour, et chaque
              initiative se décide sur eux : quoi construire en premier, et
              quel gain en attendre.
            </p>
          </div>
        </ScrollReveal>

        {/* Les 4 jauges — elles montent ensemble, c'est le point. */}
        <div ref={ref} className="relative mx-auto mt-14 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {KPIS.map((kpi) => (
              <div
                key={kpi.index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30 sm:p-6"
              >
                {/* Jauge verticale */}
                <div className="flex items-end gap-4">
                  <div className="flex h-24 w-2.5 shrink-0 flex-col justify-end overflow-hidden rounded-full bg-slate-100 sm:h-28">
                    <motion.div
                      className="w-full origin-bottom rounded-full bg-gradient-to-t from-primary to-[#3B82F6]"
                      style={{ height: `${kpi.fill}%` }}
                      initial={reduced ? false : { scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{
                        delay: reduced ? 0 : RISE_DELAY,
                        duration: RISE_DURATION,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                  <div className="flex h-24 min-w-0 flex-col justify-end sm:h-28">
                    <p className="font-mono text-xs font-semibold text-primary/60">
                      {kpi.index}
                    </p>
                    <div className="mt-1 [&_p:first-child]:!text-2xl sm:[&_p:first-child]:!text-3xl [&_p:last-child]:hidden [&>div]:!text-left">
                      <AnimatedCounter
                        target={kpi.target}
                        prefix={kpi.prefix}
                        suffix={kpi.suffix}
                        decimals={kpi.decimals}
                        duration={RISE_DURATION + RISE_DELAY}
                        label=""
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {kpi.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {kpi.metricLabel}
                </p>

                {/* Survol : définition + preuve, immédiat. Le contenu reste
                    dans le DOM (SEO) — seule l'opacité change. */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end rounded-2xl bg-[#0F172A] p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <p className="text-sm font-semibold text-white">{kpi.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/80">
                    {kpi.definition}
                  </p>
                  <p className="mt-2.5 border-t border-white/15 pt-2.5 text-xs leading-relaxed text-[#93C5FD]">
                    {kpi.proof}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* La ligne de liaison : elle s'allume quand les 4 ont atteint
              leur niveau — « quand les 4 bougent en même temps ». */}
          <motion.div
            aria-hidden="true"
            className="mx-auto mt-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            initial={reduced ? false : { scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{
              delay: reduced ? 0 : RISE_DELAY + RISE_DURATION,
              duration: 0.7,
              ease: "easeOut",
            }}
          />
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base font-medium text-foreground">
            Quand les quatre bougent en même temps, la transformation se
            produit.{" "}
            <span className="text-muted-foreground">
              Un système qui n&apos;en fait bouger aucun reste à l&apos;atelier.
            </span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
