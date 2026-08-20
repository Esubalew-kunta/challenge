import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PartnerStrip } from "@/components/shared/partner-strip";
import { RelatedContent } from "@/components/shared/related-content";
import { GeoAnswerDemo } from "@/components/sections/services/geo-answer-demo";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { siteConfig, bookingProof } from "@/lib/site-config";
import { bookingProofEn } from "@/lib/site-config.en";
import { SEO_GEO } from "@/lib/offer-pages/seo-geo-locale";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page SEO & GEO, pour les deux langues.
 *
 * ⚠️ La version ANGLAISE est gatée (`EN_GATED`) : livrée, non indexée, hors
 * sitemap. Lire l'en-tête de `seo-geo.en.ts` — le master de cette page
 * réintroduit dans sa méta le « +70% Sage » que la page française a retiré, et
 * qui est précisément le motif du gate.
 */
export function SeoGeoPage({ locale }: { locale: Locale }) {
  const c = SEO_GEO[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/generative-engine-optimization" : "/seo-geo"}`;

  /** Le cas Sage et son témoignage, dans la langue de la page. */
  const hp = HOMEPAGE[locale];
  const sageCase = hp.proof.cases.find((item) => item.title === "Sage");
  const sageTestimonial = (
    isEn ? bookingProofEn : bookingProof
  ).testimonials.find((item) => item.author === c.whyUs.testimonialAuthor);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.chrome.breadcrumbHome,
        item: isEn ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.chrome.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.chrome.serviceName,
    serviceType: c.chrome.serviceType,
    description: c.chrome.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...c.chrome.areaServed],
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

      {/* 1. Hero : le basculement des usages */}
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
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                <Link
                  href={c.hero.secondaryCta.href}
                  className="cursor-pointer text-sm font-medium text-primary hover:underline"
                >
                  {c.hero.secondaryCta.label} →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 1bis. La démonstration : la réponse IA Avant / Après (pièce maîtresse) */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.chrome.demoBadge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.chrome.demoTitle}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.chrome.demoIntro}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-14">
              <GeoAnswerDemo locale={locale} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 1ter. Section "On suit votre visibilité IA sur les mêmes outils que vous"
          retirée : mêmes placeholders "Capture à venir" que sur /ai-operating-system.
          À remettre via l'historique git dès que les captures GSC / Profound / Ahrefs
          sont dans public/images/geo-screenshots/ (voir le README du dossier). */}

      {/* 2. Preuve immédiate : le cas Sage + les moteurs couverts */}
      {sageCase && (
        <section id={c.proof.id} className="section-padding bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {c.proof.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {c.proof.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {c.proof.subtitle}
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
                      src={sageCase.cover}
                      alt={`${sageCase.title} : ${sageCase.subtitle}`}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col p-8 md:p-10">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {sageCase.subtitle}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold text-foreground">
                        {sageCase.title}
                      </h3>
                    </div>

                    <div className="mt-6 rounded-xl bg-primary/5 p-5">
                      <p className="text-4xl font-bold text-primary">
                        {sageCase.metric}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sageCase.metricLabel}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {c.chrome.stepBefore}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {sageCase.before}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary/70">
                          {c.chrome.stepAfter}
                        </p>
                        <p className="text-sm text-foreground">
                          {sageCase.after}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                          {c.chrome.stepHow}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {sageCase.how}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {sageCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Les moteurs couverts */}
            <ScrollReveal delay={0.2}>
              <div className="mx-auto mt-14 max-w-3xl text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                  {c.proof.enginesCaption}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  {c.proof.engines.map((engine) => (
                    <span
                      key={engine.name}
                      className="flex items-center gap-2.5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={engine.logo}
                        alt={engine.name}
                        loading="lazy"
                        className="size-7 object-contain"
                      />
                      <span className="text-base font-medium text-foreground">
                        {engine.name}
                      </span>
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {c.proof.enginesNote}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 3. Le basculement : rupture dark */}
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
                  {c.shift.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                  {c.shift.title}
                </h2>
                {c.shift.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-relaxed text-slate-400 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-4">
                {c.shift.facts.map((fact) => (
                  <div
                    key={fact.value}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-blue-400/30"
                  >
                    <p className="text-3xl font-bold text-white">
                      {fact.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-blue-300">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {fact.detail}
                    </p>
                  </div>
                ))}
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {c.shift.closing}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. La méthode en 4 temps */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.method.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.method.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.method.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {c.method.steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="flex h-full flex-col border-t border-border pt-6">
                  <span className="text-5xl font-bold leading-none text-primary/15 sm:text-6xl">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-6 rounded-xl bg-primary/5 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                      {c.chrome.deliverableLabel}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEO + GEO ensemble */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.together.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.together.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.together.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {c.together.points.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pourquoi nous : on pratique ce qu'on vend + témoignage Sage */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {c.whyUs.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {c.whyUs.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.whyUs.intro}
                </p>
                <div className="mt-8 space-y-6">
                  {c.whyUs.proofPoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3 text-primary" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {sageTestimonial && (
              <ScrollReveal delay={0.15}>
                <div className="lg:pt-16">
                  <TestimonialCard
                    locale={locale}
                    quote={sageTestimonial.quote}
                    name={sageTestimonial.author}
                    title={sageTestimonial.role}
                    company={sageTestimonial.company}
                    photo={sageTestimonial.photo}
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* 7. Notre engagement : mesurable, honnête */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.commitment.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.commitment.title}
              </h2>
              {c.commitment.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-primary/10 bg-primary/5 p-8">
              <ul className="space-y-3.5">
                {c.commitment.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3 text-primary" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground sm:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7bis. Bande de conversion Hormozi — le coût de l'invisibilité */}
      <section className="section-padding relative overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {c.chrome.closingTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {c.chrome.closingIntro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
                  {c.chrome.withoutTitle}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                  {c.chrome.withoutItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-primary/40 bg-primary/[0.08] p-6 ring-1 ring-primary/20">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {c.chrome.withTitle}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-white">
                  {c.chrome.withItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <Link href={c.hero.cta.href}>
                  {c.chrome.closingCta}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="text-xs text-white/40">
                {c.chrome.closingNote}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. FAQ */}
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

      {c.chrome.related.length > 0 && (
        <RelatedContent locale={locale} links={[...c.chrome.related]} />
      )}

      {/* 9. CTA final */}
      <CTASection
        locale={locale}
        title={c.finalCta.title}
        subtitle={c.finalCta.subtitle}
        primaryCta={c.finalCta.cta}
      />

      <PartnerStrip locale={locale} />
    </>
  );}
