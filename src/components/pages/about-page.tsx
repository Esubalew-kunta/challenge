import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { siteConfig } from "@/lib/site-config";
import { ABOUT } from "@/lib/about-locale";
import { resolveEnHref } from "@/lib/en-links";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de /a-propos, pour les deux langues.
 *
 * Lire l'en-tête de `about.en.ts` : le master de cette page est le plus faux de
 * la série (équipe de 6 au lieu de 10, Rabat au lieu de Casablanca, 2 500
 * formés au lieu de 10 000, un lien /garanties inexistant, et une fonction de
 * direction supprimée). La version anglaise est construite sur la page FR.
 */
const OTHMANE_LINKEDIN = "https://www.linkedin.com/in/othmanehalim/";

export function AboutPage({ locale }: { locale: Locale }) {
  const c = ABOUT[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/about" : "/a-propos"}`;
  const contactHref = isEn ? resolveEnHref("/en/contact") : "/contact";

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-aimakers.png`,
    description: c.schema.orgDescription,
    founder: {
      "@type": "Person",
      name: "Othmane Halim",
      jobTitle: c.schema.founderJobTitle,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      image: `${siteConfig.url}/images/photo-othmane-halim.jpeg`,
      sameAs: [OTHMANE_LINKEDIN],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: c.schema.numberOfEmployees,
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: siteConfig.addresses.paris.street,
        addressLocality: "Paris",
        postalCode: "75008",
        addressCountry: "FR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
    ],
    sameAs: [siteConfig.socials.linkedin],
  };

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

  return (
    <>
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {c.hero.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                {c.hero.intro}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fondateur */}
      <section id="fondateur" className="section-padding scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <ScrollReveal className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/photo-othmane-halim.jpeg"
                  alt={c.founder.photoAlt}
                  width={520}
                  height={640}
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.founder.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {c.founder.name}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {c.founder.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <Link
                href={c.founder.storyLink.href}
                className="mr-4 mt-6 inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                {c.founder.storyLink.label}
              </Link>
              <a
                href={OTHMANE_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                <Linkedin className="size-4" />
                {c.founder.linkedinLabel}
                <ArrowRight className="size-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comment on travaille */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.principles.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.principles.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {c.principles.items.map((principle, i) => (
              <ScrollReveal key={principle.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-8">
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.team.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.team.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.team.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-3">
            {c.team.roles.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* La preuve vivante */}
      <section className="section-padding bg-background">
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
                {c.proof.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {c.proof.items.map((proof, i) => (
              <ScrollReveal key={proof.system} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-white p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {proof.system}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground">
                    {proof.fact}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.proof.closing}
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-6 h-12 cursor-pointer rounded-lg border-border px-8 text-base font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <Link href={contactHref}>
                  {c.proof.ctaLabel}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <p className="mt-10 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {c.proof.headline}
                </span>{" "}
                {c.proof.headlineTail}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chiffres */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {c.stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        locale={locale}
        title={c.cta.title}
        subtitle={c.cta.subtitle}
        primaryCta={{
          label: c.cta.label,
          href: "/contact",
        }}
      />
    </>
  );}
