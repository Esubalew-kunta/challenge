import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { PremiumCard } from "@/components/motion/premium-card";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { caseStudies } from "@/lib/case-studies";
import { homepageContent, siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Études de cas IA : résultats mesurés",
  description: "Operating systems IA, agents métier, visibilité GEO sur ChatGPT et Gemini, plateformes data : nos missions IA en détail — avant, après, comment.",
  path: "/etudes-de-cas",
});

const { proof } = homepageContent;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Études de cas",
      item: `${siteConfig.url}/etudes-de-cas`,
    },
  ],
};

type CaseStudy = (typeof proof.cases)[number] & {
  secondMetric?: string;
  secondMetricLabel?: string;
};

export default function EtudesDeCasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero-padding relative overflow-hidden bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Résultats
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Des résultats mesurés.
                <br />
                Pas des promesses.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Chaque mission a un KPI de référence, mesuré avant et après.
                Voici ce que ça donne.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cas clients */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {(proof.cases as readonly CaseStudy[]).map((caseStudy, i) => (
            <ScrollReveal key={caseStudy.title}>
              <div
                className={`py-16 md:py-24 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Cover */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Image
                      src={caseStudy.cover}
                      alt={`${caseStudy.title} : ${caseStudy.subtitle}`}
                      width={960}
                      height={640}
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="h-auto w-full rounded-2xl border border-border shadow-lg shadow-slate-900/[0.06]"
                    />
                  </div>

                  {/* Métrique + titre */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      {caseStudy.subtitle}
                    </p>
                    <div className="mt-5 flex flex-wrap items-end gap-x-10 gap-y-4">
                      <div>
                        <p className="text-5xl font-bold leading-none tracking-tight text-primary md:text-6xl">
                          {caseStudy.metric}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {caseStudy.metricLabel}
                        </p>
                      </div>
                      {caseStudy.secondMetric && (
                        <div>
                          <p className="text-3xl font-bold leading-none tracking-tight text-foreground md:text-4xl">
                            {caseStudy.secondMetric}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {caseStudy.secondMetricLabel}
                          </p>
                        </div>
                      )}
                    </div>
                    <h2 className="mt-7 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {caseStudy.title}
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
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

                {/* Avant / Après / Comment */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-12">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Avant
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {caseStudy.before}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Après
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground">
                      {caseStudy.after}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Comment
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {caseStudy.how}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Toutes les études de cas */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Explorer les missions en détail
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Chaque étude de cas détaille la situation de départ, les systèmes
              construits et la méthode, secteur par secteur.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <ScrollReveal key={caseStudy.slug} className="h-full">
                <PremiumCard className="h-full bg-white [&>div:last-child]:h-full">
                  <Link
                    href={`/etudes-de-cas/${caseStudy.slug}`}
                    className="group flex h-full flex-col rounded-2xl p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                  >
                  {caseStudy.logo && (
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.cardTitle}
                      loading="lazy"
                      className="mb-5 h-8 w-auto max-w-[130px] object-contain"
                    />
                  )}
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {caseStudy.sector}
                  </p>
                  <p className="mt-4 text-3xl font-bold leading-none tracking-tight text-foreground">
                    {caseStudy.metrics[0].value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {caseStudy.metrics[0].label}
                  </p>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {caseStudy.title}
                  </h3>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-medium text-primary">
                    Lire l&apos;étude de cas →
                  </p>
                  </Link>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Obtenez les mêmes résultats"
        subtitle="30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}
