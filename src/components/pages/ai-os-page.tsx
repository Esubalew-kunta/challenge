import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PartnerStrip } from "@/components/shared/partner-strip";
import { RelatedContent } from "@/components/shared/related-content";
import { AgentFleet } from "@/components/sections/services/agent-fleet";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { HOMEPAGE } from "@/lib/homepage-locale";
import { AI_OS } from "@/lib/offer-pages/ai-os-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page AI Operating System, pour les deux langues.
 *
 * Extrait de `(fr)/ai-operating-system/page.tsx`. La page ne portait AUCUN
 * texte en JSX inline — tout venait déjà de `ai-os.ts` — donc l'extraction n'a
 * eu qu'à descendre le JSON-LD et les liens « Pour aller plus loin », qui eux
 * étaient écrits en dur.
 *
 * Il n'y a pas de section « garanties » : le master anglais en demande une
 * (§4.8), elle n'existe nulle part dans le dépôt. Voir `ai-os.en.ts`.
 */
export function AiOsPage({ locale }: { locale: Locale }) {
  const c = AI_OS[locale];
  const hp = HOMEPAGE[locale];
  const hpFleet = hp.fleet;
  const hpFinalCta = hp.finalCta;
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/ai-operating-system" : "/ai-operating-system"}`;

  /** La fleet de la home regroupée par département, dans l'ordre d'apparition. */
  const fleetDepartments = Array.from(
    new Set(hpFleet.systems.map((system) => system.tag)),
  ).map((tag) => ({
    tag,
    systems: hpFleet.systems.filter((system) => system.tag === tag),
  }));

  /**
   * Le témoignage Gepromed, cité mot pour mot. Même source qu'avant
   * l'extraction (les témoignages de la home), simplement prise dans la langue
   * de la page : `homepage-content.en.ts` porte déjà sa traduction.
   */
  const gepromedTestimonial = hp.testimonials.items.find(
    (item) => item.company === c.caseStudy.company,
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.schema.breadcrumbHome,
        item: isEn ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.schema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.schema.serviceName,
    serviceType: c.schema.serviceType,
    description: c.schema.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...c.schema.areaServed],
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.items.map((item) => ({
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

      {/* 1. Hero : la promesse */}
      <section className="hero-padding relative overflow-hidden bg-background">
        <PageHeroBackground intensity="normal" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {c.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {c.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {c.hero.subtitle}
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={c.hero.cta.href}>
                    {c.hero.cta.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Le problème : trois douleurs */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.problem.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.problem.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.problem.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {c.problem.pains.map((pain, i) => (
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. La thèse : un OS en 4 couches, bloc dark signature */}
      <section className="section-padding relative overflow-hidden bg-[#0F172A]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
                  {c.thesis.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {c.thesis.title}
                </h2>
                {c.thesis.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Schéma : les 4 couches empilées, pilotage au sommet */}
            <ScrollReveal delay={0.15}>
              <div>
                <div className="flex flex-col gap-2.5">
                  {c.thesis.layers.map((layer) => (
                    <div
                      key={layer.number}
                      className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/30 sm:items-center"
                    >
                      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
                        {layer.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {layer.name}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {layer.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-slate-500">
                  {c.thesis.layersCaption}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. La démo : la fleet en grille, département par département */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.fleet.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.fleet.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.fleet.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-16">
              <AgentFleet locale={locale} />
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-20 max-w-6xl space-y-12">
            {fleetDepartments.map((department, i) => (
              <ScrollReveal
                key={department.tag}
                delay={Math.min(i * 0.05, 0.2)}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                      {department.tag}
                    </h3>
                    <div className="h-px flex-1 bg-border" aria-hidden="true" />
                  </div>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {department.systems.map((system) => (
                      <div
                        key={system.name}
                        className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-colors duration-300 hover:border-primary/30"
                      >
                        <h4 className="text-sm font-semibold text-foreground">
                          {system.name}
                        </h4>
                        <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                          {system.detail}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          {system.bricks.map((brick) => (
                            <span
                              key={brick}
                              className="flex size-7 items-center justify-center rounded-full border border-border bg-white p-1.5"
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
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-14 text-center">
              <p className="text-base text-muted-foreground">
                {hpFleet.buildYours.subtitle}
              </p>
              <Link
                href={c.hero.cta.href}
                className="mt-3 inline-block cursor-pointer text-sm font-medium text-primary hover:underline"
              >
                {hpFleet.buildYours.title} →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4bis. Section "À quoi ressemble un Operating System en vrai" retirée : elle
          n'affichait que des placeholders "Capture à venir" sur une page qui présente
          des systèmes en production, ce qui donnait une section inachevée. À remettre
          via l'historique git dès que les captures sont dans
          public/images/os-screenshots/ (voir le README du dossier). */}

      {/* 5. Le cas Gepromed : témoignage exact + contexte */}
      {gepromedTestimonial && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {c.caseStudy.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {c.caseStudy.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {c.caseStudy.context}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mx-auto mt-12 max-w-2xl">
                <TestimonialCard
                  quote={gepromedTestimonial.quote}
                  name={gepromedTestimonial.name}
                  title={gepromedTestimonial.title}
                  company={gepromedTestimonial.company}
                  photo={gepromedTestimonial.photo}
                  locale={locale}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 6. L'installation : trois temps, trois phases */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.install.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.install.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.install.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {c.install.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-5xl font-bold leading-none text-primary/15">
                      {step.number}
                    </span>
                    <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-muted-foreground/70">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                  <p className="mt-6 border-t border-border pt-4 text-xs font-semibold uppercase tracking-widest text-primary">
                    → {step.phase}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Dogfooding : c'est notre propre OS */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.dogfooding.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.dogfooding.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.dogfooding.text}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            {c.dogfooding.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl bg-primary/5 p-8 text-center">
                  <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.faq.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {c.faq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={[...c.faq.items]} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent locale={locale} links={[...c.related]} />

      {/* 10. CTA final avec scarcité réelle */}
      <CTASection
        locale={locale}
        title={c.finalCta.title}
        subtitle={c.finalCta.subtitle}
        primaryCta={c.finalCta.cta}
        urgency={hpFinalCta.urgency}
      />

      <PartnerStrip locale={locale} />
    </>
  );
}
