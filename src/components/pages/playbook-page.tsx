import Link from "next/link";
import {
  ArrowRight,
  Download,
  BookOpen,
  Clock,
  Zap,
  BarChart3,
  Brain,
  Target,
  Shield,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { LeadCapture } from "@/components/shared/lead-capture";
import { PLAYBOOK, PLAYBOOK_CHROME } from "@/lib/playbook-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page playbook, pour les deux langues.
 *
 * ⚠️ La version ANGLAISE est gatée : livrée, mais hors sitemap et en
 * `robots: index:false`, parce que ses chiffres d'accroche n'ont pas de source.
 * Voir `EN_GATED` dans `i18n.ts` et l'en-tête de `playbook-config.en.ts`.
 */
/** Icônes des six chapitres : choix de gabarit, pas du contenu. */
const previewIcons = [Zap, BarChart3, Brain, Shield, FileText, Target];

export function PlaybookPage({ locale }: { locale: Locale }) {
  const chrome = PLAYBOOK_CHROME[locale];
  const {
    hero,
    stats,
    problem,
    preview,
    exercises,
    socialProof,
    capture,
    finalCta,
  } = PLAYBOOK[locale];

  return (
    <main>
      {/* ============================================ */}
      {/* HERO — fond clair, gradient-hero + dot-grid  */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust badge — un seul badge au-dessus du H1 */}
            <ScrollReveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5">
                <BookOpen className="size-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">
                  {chrome.heroPills}
                </span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {hero.title}
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {hero.subtitle}
              </p>
            </ScrollReveal>

            {/* Double CTA */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <a href={hero.ctaPrimary.href}>
                    <Download className="mr-2 size-4" />
                    {hero.ctaPrimary.label}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-13 cursor-pointer rounded-lg border-border px-8 text-base font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <Link href={hero.ctaSecondary.href}>
                    {hero.ctaSecondary.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Social proof */}
            <ScrollReveal delay={0.4}>
              <p className="mt-6 text-sm text-muted-foreground/70">
                {hero.socialProof}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS BAR — fond blanc, border-y             */}
      {/* ============================================ */}
      <section className="border-y border-border bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:gap-16 sm:px-6 lg:px-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.sublabel}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* PROBLEM — fond clair                         */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge={problem.badge} title={problem.title} />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {problem.points.map((point, i) => {
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="glass-card glass-card-hover rounded-xl p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 font-mono text-sm font-bold text-destructive">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PREVIEW — fond SOMBRE (bg-foreground)        */}
      {/* ============================================ */}
      <section className="section-padding bg-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              badge={preview.badge}
              title={preview.title}
              className="text-white [&_h2]:text-white [&_p]:text-white/60 [&_span]:border-primary/30 [&_span]:bg-primary/10 [&_span]:text-primary"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preview.items.map((item, i) => {
              const Icon = previewIcons[i];
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-primary/30 hover:bg-white/[0.08]">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <span className="font-mono text-xs font-bold text-primary">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EXERCISES — fond clair, grid 4 colonnes      */}
      {/* ============================================ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              badge={exercises.badge}
              title={exercises.title}
              subtitle={exercises.subtitle}
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exercises.items.map((ex, i) => {
              const isFeatured = "featured" in ex && ex.featured;
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div
                    className={`group rounded-xl border p-5 transition-all ${
                      isFeatured
                        ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/5"
                        : "glass-card glass-card-hover"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          isFeatured
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {ex.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {ex.time}
                      </span>
                    </div>
                    <h3 className="mb-1 text-sm font-bold text-foreground">
                      {ex.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {ex.description}
                    </p>
                    {isFeatured && (
                      <Link
                        href="/diagnostic-ia"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark"
                      >
                        {chrome.exerciseCta}
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL PROOF — fond muted                    */}
      {/* ============================================ */}
      <section className="border-y border-border bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="mb-10 text-xl font-bold text-foreground">
              {socialProof.title}
            </p>
          </ScrollReveal>
          <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
            {socialProof.stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <AnimatedCounter locale={locale}
                  target={parseInt(s.value.replace(/[^0-9]/g, ""), 10)}
                  prefix={s.value.startsWith("+") ? "+" : ""}
                  label={s.label}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CAPTURE EMAIL — recevoir le playbook         */}
      {/* ============================================ */}
      <section
        id={capture.anchor}
        className="section-padding scroll-mt-24 bg-background"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <LeadCapture
        locale={locale}
              source="playbook"
              title={capture.title}
              subtitle={capture.subtitle}
              ctaLabel={capture.ctaLabel}
              successTitle={capture.successTitle}
              successMessage={capture.successMessage}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA — fond SOMBRE (bg-foreground)      */}
      {/* ============================================ */}
      <section className="section-padding bg-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base text-white/50">{finalCta.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <a href={finalCta.ctaPrimary.href}>
                  <Download className="mr-2 size-4" />
                  {finalCta.ctaPrimary.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 cursor-pointer rounded-lg border-white/20 bg-transparent px-8 text-base font-medium text-white/80 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
              >
                <Link href={finalCta.ctaSecondary.href}>
                  {finalCta.ctaSecondary.label}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-6 text-xs text-white/30">{finalCta.urgency}</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );}
