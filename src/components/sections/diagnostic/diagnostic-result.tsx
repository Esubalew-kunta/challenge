"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Calendar,
  ArrowRight,
  RotateCcw,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { ScoreGauge } from "./score-gauge";
import { RadarChart } from "./radar-chart";
import { QuickWinsCards } from "./quick-wins-cards";
import { CostCalculator } from "./cost-calculator";
import { ActionPlan } from "./action-plan";
import type { DiagnosticResult as ResultType } from "@/lib/diagnostic-scoring";

export function DiagnosticResult() {
  const [result, setResult] = useState<
    (ResultType & { firstName?: string }) | null
  >(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("diagnostic-result");
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      window.location.href = "/diagnostic-ia";
    }
  }, []);

  if (!result) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main>
      {/* ============================================ */}
      {/* HERO — Score principal                       */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32">
          {result.firstName && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-sm text-muted-foreground"
            >
              {result.firstName}, voici votre diagnostic personnalis&eacute;.
            </motion.p>
          )}

          <ScoreGauge
            score={result.totalScore}
            maxScore={result.maxScore}
            color={result.threshold.color}
            label={result.threshold.label}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mx-auto mt-8 max-w-xl"
          >
            <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
              {result.threshold.headline}
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {result.threshold.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-6 flex justify-center"
          >
            <Link
              href="/diagnostic-ia"
              className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Refaire le diagnostic
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RADAR — Profil par dimension                 */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeader badge="Analyse" title="Votre profil par dimension" />
          </ScrollReveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <RadarChart
                scores={result.radarScores}
                color={result.threshold.color}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-3">
                <div className="glass-card rounded-xl p-5">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-destructive">
                    Points &agrave; renforcer
                  </div>
                  <p className="text-sm text-foreground">
                    {result.weakestDimensions.join(" et ")}
                  </p>
                </div>
                <div className="glass-card rounded-xl p-5">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Point fort
                  </div>
                  <p className="text-sm text-foreground">
                    {result.strongestDimension}
                  </p>
                </div>
                {result.threshold.recommendations.map((rec, i) => (
                  <div key={i} className="glass-card rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-primary">&rarr;</span>{" "}
                      {rec}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* QUICK WINS — Fond muted                      */}
      {/* ============================================ */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeader
              badge="Actions imm&eacute;diates"
              title="Vos 3 quick wins prioritaires"
              subtitle="Actions r&eacute;alisables cette semaine, adapt&eacute;es &agrave; votre secteur."
            />
          </ScrollReveal>
          <div className="mt-8">
            <QuickWinsCards quickWins={result.quickWins} />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COST — Co&ucirc;t de l'inaction              */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <CostCalculator
            costPerMonth={result.costPerMonth}
            costPerYear={result.costPerYear}
            teamSize={result.teamSize}
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* PLAN — 30-60-90 jours                        */}
      {/* ============================================ */}
      <section className="section-padding bg-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ScrollReveal>
            <SectionHeader
              badge="Plan d'action"
              title="Vos 90 prochains jours"
              subtitle={`Adapt\u00e9 \u00e0 votre niveau (${result.threshold.label}).`}
            />
          </ScrollReveal>
          <div className="mt-8">
            <ActionPlan level={result.threshold.level} />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA FINAL — Fond sombre                      */}
      {/* ============================================ */}
      <section className="section-padding bg-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Envie d&apos;aller plus vite ?
            </h2>
            <p className="mt-4 text-base text-white/50">
              Ce diagnostic est un instantan&eacute;. Pour un audit complet et
              un plan d&apos;action sur mesure, r&eacute;servez 30 minutes avec
              notre &eacute;quipe.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 size-4" />
                  R&eacute;server un audit strat&eacute;gique gratuit
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 cursor-pointer rounded-lg border-white/20 bg-transparent px-8 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <a href="/playbook-ia#recevoir-playbook">
                  <Download className="mr-2 size-4" />
                  Recevoir le Playbook (54 pages)
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-6 text-xs text-white/30">
              Gratuit et sans engagement. Vos donn&eacute;es restent
              confidentielles.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
