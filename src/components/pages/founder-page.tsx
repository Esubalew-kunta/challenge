import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { FOUNDER } from "@/lib/founder-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page fondateur, pour les deux langues.
 *
 * Récit à la première personne : le copy vit dans `founder.ts` / `founder.en.ts`
 * et n'est pas réécrit. Voir l'en-tête de la version anglaise — le master s'y
 * trompe sur les effectifs, sur le nombre de personnes formées, et y ajoute une
 * garantie contractuelle que le français ne promet pas.
 */
export function FounderPage({ locale }: { locale: Locale }) {
  const c = FOUNDER[locale];
  const pageUrl = `${siteConfig.url}${locale === "en" ? "/en/founder" : "/fondateur"}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.schema.breadcrumbHome,
        item: locale === "en" ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.schema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Othmane Halim",
    jobTitle: c.schema.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    sameAs: ["https://www.linkedin.com/in/othmanehalim/"],
    url: pageUrl,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />

      {/* Hero manifeste */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link
              href={locale === "en" ? "/en" : "/"}
              className="hover:text-foreground"
            >
              {c.hero.breadcrumbHome}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{c.hero.breadcrumbCurrent}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {c.hero.badge}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                {c.hero.titleLead}{" "}
                <span className="text-primary">{c.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {c.hero.intro}
              </p>
            </div>
            <ScrollReveal className="hidden lg:block">
              <div className="rotate-1 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/formations/conference-othmane.jpg"
                  alt={c.hero.photoAlt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Les c.chapters */}
      <section className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        {c.chapters.map((chapitre, i) => (
          <ScrollReveal key={chapitre.kicker}>
            <div className={i > 0 ? "mt-16 border-t border-border pt-16" : ""}>
              <span className="text-sm font-medium text-primary">
                / {chapitre.kicker}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                {chapitre.titre}
              </h2>
              <div className="mt-6 space-y-5">
                {chapitre.paragraphes.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-base leading-relaxed text-foreground md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* La preuve */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {c.proof.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div>
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suite du parcours */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center">
        <ScrollReveal>
          <p className="text-lg leading-relaxed text-foreground">
            {c.outro.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={c.outro.linkFirm.href}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {c.outro.linkFirm.label}
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={c.outro.linkLinkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {c.outro.linkLinkedin.label}
            </a>
          </div>
        </ScrollReveal>
      </section>

      <CTASection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        primaryCta={c.cta.primary}
        secondaryCta={c.cta.secondary}
      />
    </>
  );}
