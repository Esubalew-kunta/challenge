import Link from "next/link";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedContent } from "@/components/shared/related-content";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectorTransform } from "@/components/sections/services/sector-transform";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import {
  getFormationsByFrSlugs,
  formationSlugHref,
} from "@/lib/formations-locale";
import { getClientTestimonials } from "@/lib/client-testimonials-locale";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";
import {
  getSecteurs,
  getSecteurBySlug,
  sectorHref,
  formationHref,
} from "@/lib/secteurs-locale";
import { resolveEnHref } from "@/lib/en-links";

/**
 * Gabarit partagé des pages sectorielles, pour les deux langues.
 *
 * Extrait de `(fr)/secteurs/[slug]/page.tsx`, inchangé au rendu près des
 * libellés, qui viennent maintenant de `ui-strings.ts`. Un seul gabarit plutôt
 * qu'une copie anglaise : les huit pages EN et les huit FR partagent la
 * structure, et une copie aurait divergé au premier correctif appliqué d'un
 * seul côté.
 *
 * Les données (`secteurs.ts` / `secteurs.en.ts`) sont, elles, bien deux
 * tableaux distincts — c'est du contenu, pas du gabarit.
 */

/** Liens « Pour aller plus loin », par langue.
 *
 *  Les cibles EN passent par `resolveEnHref` : tant que la page anglaise n'est
 *  pas dans EN_PUBLISHED, le lien retombe sur le FR au lieu de renvoyer un 404.
 *  L'article de blog comparatif n'a pas d'équivalent anglais (les articles ne
 *  sont pas traduits) — il est donc simplement absent de la liste EN plutôt que
 *  de pointer vers du français depuis une page anglaise. */
function relatedLinks(locale: Locale) {
  if (locale === "en") {
    return [
      {
        title: "AI Transformation",
        href: resolveEnHref("/en/ai-transformation"),
        description:
          "The full offer in 3 phases: AI audit, build, and training through to autonomy.",
      },
      {
        title: "AI opportunity scanner",
        href: resolveEnHref("/en/ai-opportunity-assessment"),
        description:
          "Your first 3 AI opportunities from 3 questions, free.",
      },
      {
        title: "Forward Deployed Engineer",
        href: resolveEnHref("/en/forward-deployed-engineer"),
        description:
          "An AI engineer deployed with you, building in your tools, with your teams.",
      },
    ];
  }
  return [
    {
      title: "Transformation IA",
      href: "/ai-transformation",
      description:
        "L'offre complète en 3 phases : audit IA, build et formation jusqu'à l'autonomie.",
    },
    {
      title: "Scanner d'opportunités IA",
      href: "/outils/scanner-opportunites-ia",
      description:
        "Vos 3 premières opportunités IA à partir de 3 questions, gratuitement.",
    },
    {
      title: "Meilleures agences IA en France",
      href: "/blog/meilleures-agences-ia-france",
      description: "Le comparatif honnête, pour choisir selon votre taille.",
    },
    {
      title: "Forward Deployed Engineer",
      href: "/forward-deployed-engineer",
      description:
        "Un ingénieur IA déployé chez vous, qui construit dans vos outils, avec vos équipes.",
    },
  ];
}

export function SectorPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const secteur = getSecteurBySlug(locale, slug);
  if (!secteur) return null;

  const s = t(locale);

  const temoins = getClientTestimonials(locale, secteur.temoinClients);

  const formationsLiees = getFormationsByFrSlugs(
    locale,
    secteur.formationsLiees,
  );

  const autresSecteurs = getSecteurs(locale).filter((x) => x.slug !== slug);

  const pageUrl = `${siteConfig.url}${sectorHref(locale, secteur.slug)}`;
  const homeUrl = locale === "en" ? `${siteConfig.url}/en` : siteConfig.url;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: s.secHome, item: homeUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: secteur.nom,
        item: pageUrl,
      },
    ],
  };

  const contactHref = locale === "en" ? resolveEnHref("/en/contact") : "/contact";
  const formationsHubHref =
    locale === "en"
      ? resolveEnHref("/en/ai-training-for-teams")
      : "/formation-ia-entreprise";

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {secteur.faq.length > 0 && <JsonLd data={faqPageSchema(secteur.faq)} />}

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link
              href={locale === "en" ? "/en" : "/"}
              className="hover:text-foreground"
            >
              {s.secHome}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{s.secSection}</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{secteur.nom}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {secteur.badge}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                {secteur.titre}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {secteur.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={contactHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {s.secHeroPrimary}
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href={formationsHubHref}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {s.secHeroSecondary}
                </Link>
              </div>
            </div>
            <div className="hidden items-center justify-center lg:flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={secteur.illustration.src}
                alt={secteur.illustration.alt}
                className="h-52 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Douleurs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            {s.secPainsKicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {s.secPainsTitle}
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {secteur.douleurs.map((douleur, i) => (
            <ScrollReveal key={douleur} delay={i * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-6">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <X className="size-3.5 text-destructive" />
                </span>
                <p className="text-base leading-relaxed text-foreground">
                  {douleur}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Transformation animée */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {s.secTransformKicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {s.secTransformTitle}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="mt-10">
              <SectorTransform
                douleurs={secteur.douleurs}
                systemes={secteur.casUsage}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {s.secUseCasesKicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {s.secUseCasesTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {secteur.casUsage.map((cas, i) => (
              <ScrollReveal key={cas.titre} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8">
                  <span className="text-4xl font-bold leading-none text-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {cas.titre}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cas.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages secteur */}
      {temoins.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {s.secTestimonialsKicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {s.secTestimonialsTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {temoins.map((client, i) => (
              <ScrollReveal key={client.author} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                    {locale === "en" ? (
                      <>&ldquo;{client.quote}&rdquo;</>
                    ) : (
                      <>«&nbsp;{client.quote}&nbsp;»</>
                    )}
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
        </section>
      )}

      {/* Formations liées */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {s.secTrainingKicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {s.secTrainingTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {formationsLiees.map((f, i) => (
              <ScrollReveal key={f.slug} delay={i * 0.08} className="flex">
                <Link
                  href={resolveEnHref(formationSlugHref(locale, f.slug))}
                  className="group flex flex-1 flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-16 items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.illustration.src}
                      alt={f.illustration.alt}
                      loading="lazy"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-primary">
                    {f.categorie}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-foreground">
                    {f.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {f.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    {s.discover} <ArrowRight className="size-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {s.faqTitle}
        </h2>
        <div className="mt-8">
          <FAQAccordion items={[...secteur.faq]} />
        </div>
      </section>

      <RelatedContent links={relatedLinks(locale)} locale={locale} />

      {/* Autres secteurs */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">
              {s.secOthers}
            </span>
            {autresSecteurs.map((x) => (
              <Link
                key={x.slug}
                href={sectorHref(locale, x.slug)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {x.nom}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        locale={locale}
        title={secteur.ctaTitle ?? s.secCtaTitle}
        subtitle={secteur.ctaSubtitle ?? s.secCtaSubtitle}
        primaryCta={{ label: s.secCtaPrimary, href: bookingUrl }}
        secondaryCta={{
          label: s.secCtaSecondary,
          href: formationsHubHref,
        }}
      />
    </>
  );
}
