import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PartnerStrip } from "@/components/shared/partner-strip";
import { RelatedContent } from "@/components/shared/related-content";
import { PhaseFlow } from "@/components/sections/services/phase-flow";
import { ProcessScanner } from "@/components/sections/services/process-scanner";
import { OptionsComparison } from "@/components/sections/homepage/comparison-section";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";
import { bookingProof, clientLogos, siteConfig } from "@/lib/site-config";
import { bookingProofEn } from "@/lib/site-config.en";
import { HOMEPAGE } from "@/lib/homepage-locale";
import {
  featuredLogoNames,
  featuredTestimonialAuthors,
} from "@/lib/offer-pages/transformation";
import { TRANSFORMATION } from "@/lib/offer-pages/transformation-locale";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit de la page « Transformation IA », partagé par /ai-transformation et
 * /en/ai-transformation.
 *
 * Le corps vivait dans la route française. Le dupliquer pour l'anglais aurait
 * figé deux copies du même balisage : c'est le composant qui prend une langue,
 * pas le contenu qui prend une page.
 */

/** Les logos de la rangée de preuve — des marques, pas de la copie. */
const featuredLogos = featuredLogoNames.flatMap((name) => {
  const logo = clientLogos.find((l) => l.name === name);
  return logo ? [logo] : [];
});

const PROOF = { fr: bookingProof, en: bookingProofEn } as const;

const PATH: Record<Locale, string> = {
  fr: "/ai-transformation",
  en: "/en/ai-transformation",
};

const CAPACITY: Record<Locale, string> = {
  fr: "/capacite",
  en: "/en/capacity",
};

export function TransformationPage({ locale = "fr" }: { locale?: Locale } = {}) {
  const content = TRANSFORMATION[locale];
  const ui = t(locale);
  const capacityHref = CAPACITY[locale];
  const pageUrl = `${siteConfig.url}${PATH[locale]}`;

  /** Les 3 témoignages mis en avant, dans la langue de la page. */
  const featuredTestimonials = featuredTestimonialAuthors.flatMap((author) => {
    const item = PROOF[locale].testimonials.find((x) => x.author === author);
    return item ? [item] : [];
  });

  /** Les systèmes que l'équipe AI Makers utilise elle-même en interne. */
  const internalSystems = HOMEPAGE[locale].fleet.systems.filter(
    (system) => system.internal,
  );
  const homeFinalCta = HOMEPAGE[locale].finalCta;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: content.schema.breadcrumbHome,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: content.schema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.schema.serviceName,
    serviceType: content.schema.serviceType,
    description: content.schema.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...content.schema.areaServed],
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };


  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero : la thèse */}
      <section className="hero-padding relative overflow-hidden bg-background">
        <PageHeroBackground intensity="normal" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href={capacityHref}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/[0.12]"
              >
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {content.hero.badge}
              </Link>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {content.hero.subtitle}
              </p>
              <Link
                href={content.hero.manifesteLink.href}
                className="mt-4 inline-block cursor-pointer text-sm font-medium text-primary hover:underline"
              >
                {content.hero.manifesteLink.label} →
              </Link>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={content.hero.cta.href}>
                    {content.hero.cta.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                {content.hero.statsLine}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Preuve immédiate : logos + une stat, isolée, en très grand */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
              {content.proofBar.kicker}
            </p>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4">
              {featuredLogos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.img}
                  alt={logo.name}
                  loading="lazy"
                  className="mx-auto h-9 w-auto max-w-32 object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-20 max-w-3xl text-center">
              <p className="text-6xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl">
                {content.proofBar.stat.value}
              </p>
              <p className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                {content.proofBar.stat.label}
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                {content.proofBar.stat.detail}
              </p>
              <Link
                href={content.proofBar.stat.link.href}
                className="mt-6 inline-block cursor-pointer text-sm font-medium text-primary hover:underline"
              >
                {content.proofBar.stat.link.label} →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Le problème : trois douleurs, chacune ancrée sur un chiffre */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.problem.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.problem.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.problem.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {content.problem.pains.map((pain, i) => (
              <ScrollReveal key={pain.number} delay={i * 0.1}>
                <div className="flex h-full flex-col border-t border-border pt-6">
                  <span className="text-5xl font-bold leading-none text-primary/15">
                    {pain.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {pain.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pain.description}
                  </p>
                  <div className="mt-6 rounded-xl bg-primary/5 p-4">
                    <p className="text-2xl font-bold text-primary">
                      {pain.figure}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {pain.figureLabel}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Le mécanisme unique : bloc signature, fond dark */}
      <section className="section-padding relative overflow-hidden bg-[#0F172A]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
                  {content.mechanism.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {content.mechanism.title}
                </h2>
                {content.mechanism.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8 inline-flex flex-col rounded-2xl border border-blue-400/20 bg-blue-500/10 px-6 py-5">
                  <p className="text-3xl font-bold text-white">
                    {content.mechanism.stat.value}
                  </p>
                  <p className="mt-1 text-sm text-blue-300">
                    {content.mechanism.stat.label}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <p className="text-sm text-slate-400">
                  {content.mechanism.systemsCaption}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {internalSystems.map((system) => (
                    <div
                      key={system.name}
                      className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/30"
                    >
                      <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-blue-400">
                        {system.tag}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-white">
                        {system.name}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">
                        {system.detail}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        {system.bricks.map((brick) => (
                          <span
                            key={brick}
                            className="flex size-7 items-center justify-center rounded-full bg-white p-1.5"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={brick}
                              alt=""
                              loading="lazy"
                              className="size-full object-contain"
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. La trajectoire : 3 horizons reliés aux phases du programme */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.horizons.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.horizons.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.horizons.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mx-auto mt-16 max-w-6xl">
            {/* Ligne de temps horizontale, desktop uniquement */}
            <div
              className="absolute left-0 right-0 top-[3px] hidden h-px bg-border md:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {content.horizons.items.map((horizon, i) => (
                <ScrollReveal key={horizon.period} delay={i * 0.1}>
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span
                        className="relative z-10 size-[7px] shrink-0 rounded-full bg-primary ring-4 ring-background"
                        aria-hidden="true"
                      />
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        {horizon.period}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-1 flex-col rounded-2xl border border-border bg-white p-6 sm:p-7">
                      <h3 className="text-xl font-semibold text-foreground">
                        {horizon.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {horizon.description}
                      </p>
                      <div className="mt-6 rounded-xl bg-primary/5 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                          {content.horizons.buildLabel}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground">
                          {horizon.build}
                        </p>
                        <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
                          → {horizon.phaseLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
              {content.horizons.note}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Les 3 phases, orientées gains */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.phases.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.phases.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.phases.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-16">
              <PhaseFlow phases={content.phases.items} locale={locale} />
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-24 max-w-6xl space-y-24 md:space-y-32">
            {content.phases.items.map((phase, i) => (
              <ScrollReveal key={phase.number}>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Texte */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      {phase.brand} · {phase.duration}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                      {phase.number}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {phase.summary}
                    </p>
                    <ul className="mt-8 space-y-3.5">
                      {phase.actions.map((action) => (
                        <li key={action} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="size-3 text-primary" />
                          </span>
                          <span className="text-sm leading-relaxed text-foreground sm:text-base">
                            {action}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Illustration */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#F1F5F9] to-white p-10 sm:p-14">
                      <Image
                        src={phase.illustration}
                        alt={phase.number}
                        width={420}
                        height={420}
                        sizes="(min-width: 1024px) 340px, 80vw"
                        className="h-auto w-full max-w-[340px]"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA intermédiaire */}
          <ScrollReveal>
            <div className="mx-auto mt-20 max-w-2xl text-center">
              <p className="text-base text-muted-foreground">
                {content.midCta.question}
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={content.hero.cta.href}>
                    {content.hero.cta.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6 bis. Phase 1 en détail : l'AI Scan — repris de l'ex-page
          /audit-ia-entreprise (fusion 30/07/2026). */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.audit.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.audit.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                {content.audit.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Animation signature : le scanner de process */}
          <ScrollReveal delay={0.1}>
            <div className="mt-14">
              <ProcessScanner locale={locale} />
            </div>
          </ScrollReveal>

          {/* Le déroulé en 4 étapes */}
          <ScrollReveal delay={0.15}>
            <h3 className="mt-20 text-center text-2xl font-bold tracking-tight text-foreground">
              {content.audit.stepsTitle}
            </h3>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {content.audit.steps.map((etape, i) => (
              <ScrollReveal key={etape.number} delay={i * 0.05}>
                <div className="border-t border-border pt-6">
                  <span className="text-5xl font-bold leading-none text-primary/15">
                    {etape.number}
                  </span>
                  <h4 className="mt-4 text-xl font-semibold text-foreground">
                    {etape.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {etape.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Les livrables */}
          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-20 max-w-3xl">
              <h3 className="text-center text-2xl font-bold tracking-tight text-foreground">
                {content.audit.deliverablesTitle}
              </h3>
              <ul className="mt-10 space-y-4">
                {content.audit.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </span>
                    <span className="text-base leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Cas client Gepromed : la preuve centrale */}
      {content.gepromed && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {content.caseStudy.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {content.caseStudy.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {content.caseStudy.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="glass-card mx-auto mt-14 max-w-5xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Visuel */}
                  <div className="min-h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={content.gepromed.cover}
                      alt={`${content.gepromed.title} : ${content.gepromed.subtitle}`}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col p-8 md:p-10">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {content.gepromed.subtitle}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-foreground">
                        {content.gepromed.title}
                      </h3>
                    </div>

                    <div className="mt-6 rounded-xl bg-primary/5 p-5">
                      <p className="text-4xl font-bold text-primary">
                        {content.gepromed.metric}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {content.gepromed.metricLabel}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {ui.hpResultsBefore}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {content.gepromed.before}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary/70">
                          {ui.hpResultsAfter}
                        </p>
                        <p className="text-sm text-foreground">
                          {content.gepromed.after}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {ui.hpResultsHow}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {content.gepromed.how}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {content.gepromed.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={content.gepromed.readMore.href}
                      className="mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      {content.gepromed.readMore.label}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 9. Témoignages : trois voix */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.testimonials.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.testimonials.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredTestimonials.map((item, i) => (
              <ScrollReveal key={item.author} delay={i * 0.1}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.author}
                  title={item.role}
                  company={item.company}
                  photo={item.photo}
                  className="h-full"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Comparatif des options — repris de l'ex-page agence-ia */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.comparison.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {content.comparison.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {content.comparison.subtitle}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-14">
              <OptionsComparison locale={locale} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {content.faq.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {content.faq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={[...content.faq.items]} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent links={[...content.related]} locale={locale} />

      {/* 12. CTA final avec scarcité réelle */}
      <CTASection
        locale={locale}
        title={content.finalCta.title}
        subtitle={content.finalCta.subtitle}
        primaryCta={content.finalCta.cta}
        urgency={homeFinalCta.urgency}
      />

      <PartnerStrip locale={locale} />
    </>
  );
}
