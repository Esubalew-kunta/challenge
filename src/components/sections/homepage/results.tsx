"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { BenefitIconBadge, type BenefitIconKind } from "./benefit-icon";
import { t } from "@/lib/ui-strings";


/** Icônes animées associées aux cartes de bénéfices (ordre du site-config). */
const benefitIconKinds: BenefitIconKind[] = [
  "clock",
  "gauge",
  "graduation-cap",
  "trending-up",
];

/**
 * Section "Résultats prouvés" : fusion de l'ancien bandeau KPI (Results)
 * et des études de cas (Proof). Bandeau dark en ouverture (header + compteurs),
 * puis cas concrets sur fond clair, CTA, et rangées de bénéfices mesurés.
 */
export function ResultsSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { results, proof } = HOMEPAGE[locale];
  const ui = t(locale);
  return (
    <section className="bg-background">
      {/* En-tête léger : le message, la preuve juste en dessous */}
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {proof.badge}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {proof.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {proof.subtitle}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cas concrets (ex-Proof) sur fond clair */}
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {proof.cases.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass-card group flex h-full flex-col overflow-hidden">
                {/* Cover : visuel dashboard réel */}
                <div className="aspect-[16/10] overflow-hidden rounded-t-[inherit]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.cover}
                    alt={`${item.title} : ${item.subtitle}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Client + category */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-end gap-5 rounded-xl bg-primary/5 p-3.5">
                    <div>
                      <p className="text-[26px] font-bold leading-tight text-primary">
                        {item.metric}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.metricLabel}
                      </p>
                    </div>
                    {"secondMetric" in item && item.secondMetric && (
                      <div>
                        <p className="text-xl font-bold leading-tight text-foreground">
                          {item.secondMetric}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.secondMetricLabel}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Before / After / How */}
                  <div className="mt-5 flex flex-1 flex-col gap-3">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                        {ui.hpResultsBefore}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.before}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary/70">
                        {ui.hpResultsAfter}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.after}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Intermediate CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="btn-gradient group h-12 rounded-lg px-8 text-base font-semibold"
            >
              <Link href={proof.ctaIntermediate.href}>
                {proof.ctaIntermediate.label}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 px-8 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              <Link href={proof.cta.href}>{proof.cta.label}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
