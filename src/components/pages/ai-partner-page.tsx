import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { AI_PARTNER } from "@/lib/offer-pages/ai-partner-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page d'offre, pour les deux langues.
 *
 * Extrait de `(fr)/offre/page.tsx`, qui portait son copy en JSX inline. Le
 * rendu français est inchangé.
 *
 * Il n'y a PAS de section « garanties » : elle a été retirée du site français
 * et le master anglais est le seul endroit où elle survit. La rétablir ici
 * publierait en anglais quatre engagements contractuels que l'entreprise ne
 * prend plus — voir l'en-tête de `ai-partner.en.ts`.
 */

/** Illustrations des 3 phases : des chemins d'assets, identiques dans les deux langues. */
const PHASE_ILLUSTRATIONS = [
  "/images/3d/cible-flechette.png",
  "/images/3d/outils-implementation.png",
  "/images/3d/chapeau-formation.png",
];

export function AiPartnerPage({ locale }: { locale: Locale }) {
  const c = AI_PARTNER[locale];
  const isEn = locale === "en";
  const homeUrl = isEn ? `${siteConfig.url}/en` : siteConfig.url;
  const pageUrl = `${siteConfig.url}${isEn ? "/en/ai-partner" : "/offre"}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.schema.breadcrumbHome,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.schema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const phases = [c.offer.phase1, c.offer.phase2, c.offer.phase3].map(
    (phase, i) => ({ ...phase, illustration: PHASE_ILLUSTRATIONS[i] }),
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {c.hero.titleLine1}
                <br />
                {c.hero.titleLine2}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {c.hero.intro}
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

      {/* Les 3 phases en détail */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.phasesIntro.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.phasesIntro.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.phasesIntro.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-20 max-w-6xl space-y-24 md:space-y-32">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.title}>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Texte */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                      {phase.subtitle}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                      {phase.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {phase.summary}
                    </p>
                    <ul className="mt-8 space-y-3.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Check className="size-3 text-primary" />
                          </span>
                          <span className="text-sm leading-relaxed text-foreground sm:text-base">
                            {item}
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
                        alt={phase.title}
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
        </div>
      </section>

      {/* Le modèle — 4 principes */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.offer.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.offer.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.offer.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {c.offer.model.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <span className="text-5xl font-bold leading-none text-primary/15 sm:text-6xl">
                    {item.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scarcité */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-foreground md:text-lg">
              {c.urgency}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        locale={locale}
        title={c.finalCta.title}
        subtitle={c.finalCta.subtitle}
        primaryCta={c.finalCta.primaryCta}
      />
    </>
  );
}
