import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { clientLogosFor } from "@/lib/client-logos-locale";
import { getClientTestimonials } from "@/lib/client-testimonials-locale";
import { WHY_WORK, WHY_WORK_CLIENTS } from "@/lib/why-work-with-us-locale";
import { resolveEnHref } from "@/lib/en-links";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de /pourquoi-ai-makers, pour les deux langues.
 *
 * Aucun master anglais ne couvre cette page : la version EN est une traduction
 * fidèle du français en ligne (cf. `why-work-with-us.en.ts`).
 *
 * Les deux liens du paragraphe de fin visent des pages dont l'une n'existe pas
 * encore en anglais (les études de cas). Ils passent par `resolveEnHref`, qui
 * les rabat sur le français : c'est le cas d'usage documenté du résolveur pour
 * un lien EN PLEIN TEXTE — retirer le lien casserait la phrase. Les CARTES
 * « pour aller plus loin » des autres pages, elles, sont supprimées quand leur
 * destination n'existe pas, parce qu'une carte titrée en anglais promet une
 * page anglaise.
 */
export function WhyAiMakersPage({ locale }: { locale: Locale }) {
  const c = WHY_WORK[locale];
  const pageUrl = `${siteConfig.url}${locale === "en" ? "/en/why-ai-makers" : "/pourquoi-ai-makers"}`;
  const caseStudiesHref =
    locale === "en" ? resolveEnHref("/en/ai-case-studies") : "/etudes-de-cas";
  const careersHref =
    locale === "en" ? resolveEnHref("/en/careers") : "/carrieres";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.chrome.breadcrumbHome,
        item: locale === "en" ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.chrome.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  // Logos référencés par nom dans c.temoinClients — "AS Monaco"
  // n'y figure pas et ne doit pas être ajouté sans accord confirmé.
  const logos = clientLogosFor(locale).filter((logo) =>
    WHY_WORK_CLIENTS.includes(logo.name),
  );
  const temoignages = getClientTestimonials(locale, WHY_WORK_CLIENTS);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link
              href={locale === "en" ? "/en" : "/"}
              className="hover:text-foreground"
            >
              {c.chrome.breadcrumbHome}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{c.chrome.breadcrumbCurrent}</span>
          </nav>
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {c.badge}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {c.titre}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {c.intro}
          </p>
        </div>
      </section>

      {/* Chiffres */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {c.faits.map((fait, i) => (
            <ScrollReveal key={fait.label} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-2xl font-bold text-primary md:text-3xl">
                  {fait.chiffre}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {fait.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Méthode */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">{c.chrome.methodKicker}</span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {c.chrome.methodTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {c.methode.map((phase, i) => (
              <ScrollReveal key={phase.titre} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <span className="text-4xl font-bold leading-none text-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {phase.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logos clients */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">{c.chrome.clientsKicker}</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.chrome.clientsTitle}
          </h2>
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((client) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={client.name}
              src={client.img}
              alt={client.name}
              loading="lazy"
              className="h-8 w-auto object-contain grayscale transition-all hover:grayscale-0 md:h-10"
            />
          ))}
        </div>
      </section>

      {/* Témoignages */}
      {temoignages.length > 0 && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <ScrollReveal>
              <span className="text-sm font-medium text-primary">{c.chrome.wordsKicker}</span>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                {c.chrome.wordsTitle}
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {temoignages.map((client, i) => (
                <ScrollReveal key={client.author} delay={i * 0.08}>
                  <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                    <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                      {locale === "en"
                        ? `\u201C${client.quote}\u201D`
                        : `\u00AB\u00A0${client.quote}\u00A0\u00BB`}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={client.photo}
                        alt={client.author}
                        loading="lazy"
                        className="size-11 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {client.author}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {client.role} · {client.company}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Aller plus loin */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <ScrollReveal>
          <p className="text-base leading-relaxed text-muted-foreground">
            {c.chrome.outroLead}
            <Link
              href={caseStudiesHref}
              className="font-medium text-primary hover:underline"
            >
              {c.chrome.outroCaseStudies}
            </Link>
            {c.chrome.outroMiddle}
            <Link
              href={careersHref}
              className="font-medium text-primary hover:underline"
            >
              {c.chrome.outroCareers}
            </Link>
            {c.chrome.outroEnd}
          </p>
        </ScrollReveal>
      </section>

      <CTASection
        locale={locale}
        title={c.chrome.ctaTitle}
        subtitle={c.chrome.ctaSubtitle}
        primaryCta={{ label: c.chrome.ctaPrimary, href: bookingUrl }}
        secondaryCta={{ label: c.chrome.ctaSecondary, href: caseStudiesHref }}
      />
    </>
  );}
