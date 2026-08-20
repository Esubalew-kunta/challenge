import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { ContentOffer } from "@/components/shared/content-offer";
import { siteConfig } from "@/lib/site-config";
import { GLOSSARY } from "@/lib/glossary-locale";
import { resolveEnHref } from "@/lib/en-links";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé du glossaire, pour les deux langues.
 *
 * Le JSON-LD DefinedTermSet déclarait `inLanguage: "fr-FR"` en dur : la version
 * anglaise se serait annoncée française auprès des moteurs de réponse.
 */
function termSlug(term: string): string {
  return term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function GlossaryPage({ locale }: { locale: Locale }) {
  const c = GLOSSARY[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/ai-glossary" : "/glossaire-ia"}`;
  const contactHref = isEn ? resolveEnHref("/en/contact") : "/contact";

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: c.chrome.schemaName,
    description: c.chrome.schemaDescription,
    inLanguage: c.chrome.htmlLang,
    url: pageUrl,
    hasDefinedTerm: c.categories.flatMap((category) =>
      category.terms.map((item) => ({
        "@type": "DefinedTerm",
        name: item.term,
        description: item.definition,
        inDefinedTermSet: pageUrl,
        url: `${pageUrl}#${termSlug(item.term)}`,
      })),
    ),
  };

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

  return (
    <>
      <JsonLd data={definedTermSetSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.chrome.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                {c.chrome.h1}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {c.chrome.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Sommaire ancré */}
          <ScrollReveal>
            <nav
              aria-label={c.chrome.tocAria}
              className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3"
            >
              {c.categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Catégories et définitions */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-20">
            {c.categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <ScrollReveal>
                  <h2 className="border-b border-border pb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {category.title}
                  </h2>
                </ScrollReveal>
                <div className="mt-8 space-y-10">
                  {category.terms.map((item) => (
                    <ScrollReveal key={item.term}>
                      <article id={termSlug(item.term)} className="scroll-mt-28">
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                          {item.term}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                          {item.definition}
                        </p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ScrollReveal>
            <p className="mx-auto mt-20 max-w-4xl text-sm text-muted-foreground">
              {c.chrome.missingLead}
              <Link
                href={c.chrome.missingLink.href}
                className="font-medium text-primary hover:underline"
              >
                {c.chrome.missingLink.label}
              </Link>
              {c.chrome.missingTail}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.chrome.dedicatedLead}
              <Link
                href={c.chrome.dedicatedFde.href}
                className="font-medium text-primary hover:underline"
              >
                {c.chrome.dedicatedFde.label}
              </Link>
              {c.chrome.dedicatedMiddle}
              <Link
                href={c.chrome.dedicatedRole.href}
                className="font-medium text-primary hover:underline"
              >
                {c.chrome.dedicatedRole.label}
              </Link>
              {c.chrome.dedicatedEnd}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContentOffer
        locale={locale}
        source="glossaire"
        context="hub"
        subtitle={c.chrome.offerSubtitle}
      />

      {/* CTA final */}
      <CTASection
        locale={locale}
        title={c.chrome.ctaTitle}
        subtitle={c.chrome.ctaSubtitle}
        primaryCta={{
          label: c.chrome.ctaLabel,
          href: "/contact",
        }}
      />
    </>
  );}
