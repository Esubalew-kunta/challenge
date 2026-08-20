import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { InlineCta } from "@/components/shared/inline-cta";
import { CatalogueForm } from "@/components/formation/catalogue-form";
import { FormationPhoto } from "@/components/formation/formation-photo";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FormateursGrid } from "@/app/(fr)/formation-ia-entreprise/formateurs-grid";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { getFormateurs } from "@/lib/formateurs-locale";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";
import { resolveEnHref } from "@/lib/en-links";
import {
  getFormations,
  getFormationBySlug,
  getOtherFormationsFor,
  formationSlugHref,
  getFormationPhotos,
  FORMATION_HUB,
} from "@/lib/formations-locale";

/**
 * Gabarit partagé des pages formation, pour les deux langues.
 *
 * Extrait de `(fr)/formation-ia-entreprise/[slug]/page.tsx` : le rendu français
 * est inchangé, seuls les libellés passent par `ui-strings.ts`.
 *
 * Les onze blocs OPTIONNELS (comparison, usages, securite, ecosysteme, versus,
 * limites, preparation, erreurs, pratiques, passerelle, apres) restent en
 * français dans ce fichier : aucune formation anglaise ne porte ces données —
 * les masters EN ne les couvrent pas — donc ces sections ne s'affichent jamais
 * sur une page anglaise. Les traduire reviendrait à écrire du contenu que
 * personne n'a validé. Si une formation EN en reçoit un jour, il faudra
 * traduire le chrome correspondant EN MÊME TEMPS.
 */
export function FormationPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const s = t(locale);
  const formations = getFormations(locale);
  const formation = getFormationBySlug(locale, slug);
  if (!formation) return null;
  const others = getOtherFormationsFor(locale, slug);
  const hubHref = locale === "en" ? resolveEnHref(FORMATION_HUB.en) : FORMATION_HUB.fr;
  const contactHref = locale === "en" ? resolveEnHref("/en/contact") : "/contact";

  
  
  // Photo de la bande mi-page : choix explicite si défini, sinon rotation
  // dans la galerie en évitant celle de la carte specs.
  const formationPhotos = getFormationPhotos(locale);
  const formationIndex = formations.findIndex((f) => f.slug === slug);
  const bandPhoto =
    formation.bandPhoto ??
    formationPhotos.find(
      (photo, i) =>
        photo.src !== formation.photo?.src &&
        i >= (formationIndex + 2) % formationPhotos.length,
    ) ??
    formationPhotos[0];

  const specs = [
    { label: s.formSpecLevel, value: formation.niveau },
    { label: s.formSpecAudience, value: formation.public },
    { label: s.formSpecFormat, value: formation.format },
    { label: s.formSpecDuration, value: formation.duree },
    { label: s.formSpecPrereq, value: formation.prerequis },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: s.secHome,
        item: locale === "en" ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: s.formBreadcrumb,
        item: `${siteConfig.url}${hubHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: formation.name,
        item: `${siteConfig.url}${formationSlugHref(locale, formation.slug)}`,
      },
    ],
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${s.formCoursePrefix} ${formation.name}`,
    description: formation.resume,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseWorkload: formation.duree,
      location: {
        "@type": "Place",
        name: s.formCourseLocation,
        address: { "@type": "PostalAddress", addressCountry: "FR" },
      },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/contact`,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseSchema} />
      {formation.faq.length > 0 && (
        <JsonLd data={faqPageSchema(formation.faq)} />
      )}

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
            <Link
              href={hubHref}
              className="hover:text-foreground"
            >
              {s.formBreadcrumb}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{formation.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {formation.categorie}
                </span>
                {formation.badge && (
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                    {formation.badge}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                {formation.titre}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {formation.resume}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {formation.tools.map((tool) => (
                  <span
                    key={tool.alt}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      loading="lazy"
                      className="size-4 object-contain"
                    />
                    {tool.alt}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {/* Le prix n'est jamais affiché (cadrage en diagnostic), donc
                    le premier bouton promet ce qu'on peut tenir : un devis
                    construit sur le format et l'effectif réels. */}
                <a
                  href={contactHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {s.formQuoteTeamCta}
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#catalogue"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {s.formHeroCatalogue}
                </a>
              </div>
            </div>

            {/* Carte specs */}
            <aside className="overflow-hidden rounded-2xl border border-border bg-background">
              <FormationPhoto
                src={formation.photo?.src}
                alt={formation.photo?.alt}
                placeholderLabel="Photo de session à venir"
                className="aspect-[16/10] w-full rounded-none"
              />
              <div className="p-6 pt-4">
                <dl className="divide-y divide-border">
                  {specs.map((spec) => (
                    <div key={spec.label} className="py-3">
                      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Sommaire ancré */}
      <nav
        aria-label={s.formTocAria}
        className="sticky top-16 z-20 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6 py-2 text-sm">
          {[
            { label: "Objectifs", href: "#objectifs" },
            { label: "Programme", href: "#programme" },
            { label: "Résultats", href: "#resultats" },
            { label: s.formNavTrainers, href: "#formateurs" },
            { label: "FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-4 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Paragraphe answer-first : la réponse citable, juste sous le hero.
          C'est le passage que les moteurs de réponse reprennent quand on leur
          demande où former une équipe. Rendu seulement si la formation vise
          une requête de recherche. */}
      {formation.answerFirst && (
        <section className="mx-auto max-w-3xl px-6 pt-16">
          <p className="text-lg leading-relaxed text-foreground">
            {formation.answerFirst}
          </p>
        </section>
      )}

      {/* Objectifs pédagogiques */}
      <section
        id="objectifs"
        className="mx-auto max-w-6xl px-6 py-16 scroll-mt-28"
      >
        <span className="text-sm font-medium text-primary">
          / Objectifs pédagogiques
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {s.formObjectivesTitle}
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {formation.objectifs.map((obj) => (
            <li
              key={obj}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background p-6"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-3.5 text-primary" />
              </span>
              <span className="text-base leading-relaxed text-foreground">
                {obj}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Programme */}
      <section
        id="programme"
        className="border-y border-border bg-muted/30 scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">/ Programme</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {s.formModulesTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {formation.programme.map((mod, i) => (
              <ScrollReveal key={mod.titre} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-bold leading-none text-primary/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {mod.horaire && (
                      <span className="rounded-full bg-primary/[0.07] px-3 py-1 font-mono text-[11px] font-semibold text-primary">
                        {mod.horaire}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {mod.titre}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {mod.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {mod.livrable && (
                    <p className="mt-5 border-t border-border pt-4 text-sm leading-snug">
                      <span className="font-semibold uppercase tracking-wider text-primary text-[11px]">
                        {s.formDeliverable}
                      </span>
                      <span className="mt-1 block font-medium text-foreground">
                        {mod.livrable}
                      </span>
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo de session */}
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <ScrollReveal>
          <FormationPhoto
            src={bandPhoto?.src}
            alt={bandPhoto?.alt}
            placeholderLabel="Photo de session à venir"
            className="aspect-[21/9] w-full"
          />
        </ScrollReveal>
      </section>

      {/* Résultats */}
      <section
        id="resultats"
        className="mx-auto max-w-6xl px-6 py-16 scroll-mt-28"
      >
        <span className="text-sm font-medium text-primary">/ Résultats</span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {s.formResultsTitle}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {formation.resultats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Les principes, en colonne étroite et texte long. C'est le passage
          que le lecteur peut emporter sans rien acheter, donc il se lit comme
          un article et pas comme une grille. */}
      {formation.pratiques && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <span className="text-sm font-medium text-primary">
              / La méthode
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {formation.pratiques.titre}
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              {formation.pratiques.intro}
            </p>
            <ol className="mt-10 space-y-8">
              {formation.pratiques.principes.map((pr, i) => (
                <li key={pr.titre}>
                  <p className="text-sm font-semibold tabular-nums text-primary/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 text-lg font-semibold leading-snug text-foreground">
                    {pr.titre}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {pr.texte}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-border pt-6 text-base leading-relaxed text-foreground">
              {formation.pratiques.cloture}
            </p>
          </div>
        </section>
      )}

      {/* Le cadrage amont, en frise horizontale numérotée. C'est une
          chronologie, donc la numérotation porte une information réelle. */}
      {formation.preparation && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            / Avant la session
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.preparation.titre}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {formation.preparation.intro}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formation.preparation.etapes.map((et, i) => (
              <div key={et.titre} className="border-t-2 border-primary/30 pt-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")} &middot; {et.quand}
                </p>
                <p className="mt-3 text-base font-semibold text-foreground">
                  {et.titre}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {et.texte}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* L'écosystème, en liste définitionnelle. Grammaire volontairement
          différente des cartes qui suivent : c'est du vocabulaire, pas des
          arguments, et l'alternance évite l'effet catalogue de blocs. */}
      {formation.ecosysteme && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <span className="text-sm font-medium text-primary">
              / L&rsquo;écosystème
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {formation.ecosysteme.titre}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {formation.ecosysteme.intro}
            </p>
            <dl className="mt-8 grid grid-cols-1 gap-x-12 gap-y-7 md:grid-cols-2">
              {formation.ecosysteme.items.map((it) => (
                <div key={it.nom} className="border-t border-border pt-5">
                  <dt className="text-base font-semibold text-foreground">
                    {it.nom}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {it.texte}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Relance après le programme : le lecteur vient de voir le détail des
          modules, c'est le moment où il se demande combien ça coûte. */}
      <div className="pb-4">
        <InlineCta
          titre={`${s.formQuoteTitlePrefix}${formation.name}${s.formQuoteTitleSuffix}`}
          texte={s.formQuoteText}
          label={s.formQuoteCta}
          href={contactHref}
          secondaire={{ label: s.formQuoteSecondary, href: "#catalogue" }}
        />
      </div>

      {/* Usages par métier : le programme dit ce qu'on apprend, ce tableau dit
          à quoi ça sert. Colonne avant / après, parce que l'acheteur se
          reconnaît dans la première avant de vouloir la seconde. */}
      {formation.usages && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">/ Usages</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.usages.titre}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {formation.usages.intro}
          </p>

          {/* Desktop : tableau trois colonnes */}
          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-[16%] py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Métier
                  </th>
                  <th className="w-[42%] py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Aujourd&rsquo;hui
                  </th>
                  <th className="w-[42%] py-3 text-xs font-semibold uppercase tracking-widest text-primary">
                    Après la formation
                  </th>
                </tr>
              </thead>
              <tbody>
                {formation.usages.rows.map((row) => (
                  <tr key={row.metier} className="border-b border-border last:border-0">
                    <td className="py-5 pr-6 align-top text-sm font-semibold text-foreground">
                      {row.metier}
                    </td>
                    <td className="py-5 pr-6 align-top text-sm leading-relaxed text-muted-foreground">
                      {row.avant}
                    </td>
                    <td className="py-5 align-top text-sm font-medium leading-relaxed text-foreground">
                      {row.apres}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile : une carte par métier */}
          <div className="mt-8 space-y-4 md:hidden">
            {formation.usages.rows.map((row) => (
              <div
                key={row.metier}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {row.metier}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {row.avant}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-sm font-medium leading-relaxed text-foreground">
                  {row.apres}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Positionnement face aux alternatives. Volontairement court et sans
          tableau : la comparaison longue vit dans l'article de blog, qui se
          classe déjà dessus. Ici il s'agit de répondre à « pourquoi vous »
          sans lui prendre sa requête. */}
      {formation.comparison && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <span className="text-sm font-medium text-primary">
              / Le marché
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {formation.comparison.titre}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {formation.comparison.intro}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {formation.comparison.options.map((opt, i) => (
                <ScrollReveal key={opt.nom} delay={i * 0.08}>
                  <div
                    className={
                      "h-full rounded-2xl border p-7 " +
                      (opt.nous
                        ? "border-primary bg-primary/[0.04]"
                        : "border-border bg-background")
                    }
                  >
                    <p
                      className={
                        "text-base font-semibold " +
                        (opt.nous ? "text-primary" : "text-foreground")
                      }
                    >
                      {opt.nom}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {opt.texte}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Passerelle vers la formation sœur. Fond blanc et colonne étroite :
          c'est un aparté honnête au milieu de la page, pas une section de
          vente de plus. */}
      {formation.passerelle && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            / Aller plus loin
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.passerelle.titre}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {formation.passerelle.intro}
          </p>
          <div className="mt-8 space-y-5">
            {formation.passerelle.pourQui.map((q) => (
              <div key={q.profil} className="flex gap-5">
                <div
                  aria-hidden
                  className="mt-2 h-px w-8 shrink-0 bg-primary/40"
                />
                <p className="text-base leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {q.profil}.
                  </span>{" "}
                  {q.texte}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            {formation.passerelle.cloture}
          </p>
          <Link
            href={formation.passerelle.lienHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            {formation.passerelle.lienLabel}
            <ArrowRight className="size-4" />
          </Link>
        </section>
      )}

      {/* Comparaison des assistants. Tableau plutôt que cartes : trois lignes
          avec force et limite se lisent en balayage. */}
      {formation.versus && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <span className="text-sm font-medium text-primary">
              / Les assistants
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {formation.versus.titre}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {formation.versus.intro}
            </p>
            <div className="mt-8 hidden overflow-x-auto md:block">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="w-[16%] py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Outil
                    </th>
                    <th className="w-[46%] py-3 pr-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Ce qu&rsquo;il fait le mieux
                    </th>
                    <th className="w-[38%] py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Sa limite
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formation.versus.rows.map((row) => (
                    <tr
                      key={row.outil}
                      className="border-b border-border last:border-0"
                    >
                      <td className="py-5 pr-6 align-top text-sm font-semibold text-foreground">
                        {row.outil}
                      </td>
                      <td className="py-5 pr-6 align-top text-sm leading-relaxed text-muted-foreground">
                        {row.force}
                      </td>
                      <td className="py-5 align-top text-sm leading-relaxed text-muted-foreground">
                        {row.limite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 space-y-4 md:hidden">
              {formation.versus.rows.map((row) => (
                <div
                  key={row.outil}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {row.outil}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {row.force}
                  </p>
                  <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Sa limite :
                    </span>{" "}
                    {row.limite}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Relance après le positionnement : le lecteur vient de comparer les
          trois options, c'est le moment de décision le plus chaud de la page. */}
      <div className="py-14">
        <InlineCta
          titre={s.formFitTitle}
          texte={s.formFitText}
          label={s.formBookSlot}
          href={bookingUrl}
        />
      </div>

      {/* Données et sécurité : les exercices portent sur de vrais documents,
          donc la question arrive avant le devis. Y répondre ici évite qu'elle
          bloque plus tard. */}
      {formation.securite && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            / Données et sécurité
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.securite.titre}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {formation.securite.intro}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {formation.securite.points.map((pt, i) => (
              <ScrollReveal key={pt.titre} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-background p-7">
                  <p className="text-base font-semibold text-foreground">
                    {pt.titre}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pt.texte}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link
              href="/gouvernance-ia"
              className="font-medium text-primary hover:underline"
            >
              Gouvernance et sécurité IA
            </Link>{" "}
            détaille le cadre RGPD et AI Act appliqué à toutes nos missions.
          </p>
        </section>
      )}

      {/* Les erreurs fréquentes. Deux colonnes de texte courant, sans cartes :
          c'est la section la plus utile de la page pour un lecteur qui ne
          nous achètera rien, et elle doit se lire comme un article. */}
      {formation.erreurs && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            / Les pièges
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.erreurs.titre}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            {formation.erreurs.intro}
          </p>
          <ol className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {formation.erreurs.items.map((it, i) => (
              <li key={it.erreur} className="flex gap-4">
                <span className="mt-0.5 text-sm font-semibold tabular-nums text-primary/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {it.erreur}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {it.texte}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Les limites, juste après la sécurité : les deux sections qui
          désamorcent. Colonne étroite et pas de cartes, pour que ça se lise
          comme un aveu et non comme un argumentaire. */}
      {formation.limites && (
        <section className="mx-auto max-w-3xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            / En toute honnêteté
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {formation.limites.titre}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {formation.limites.intro}
          </p>
          <div className="mt-8 space-y-6">
            {formation.limites.points.map((pt) => (
              <div key={pt.titre} className="border-l-2 border-border pl-5">
                <p className="text-base font-semibold text-foreground">
                  {pt.titre}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pt.texte}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Après la session : ce qui fait qu'une formation sert encore un mois
          plus tard. C'est l'objection silencieuse de tout acheteur de
          formation, et personne ne la traite sur une page produit. */}
      {formation.apres && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <span className="text-sm font-medium text-primary">
              / Après la formation
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {formation.apres.titre}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {formation.apres.intro}
            </p>
            <ol className="mt-8">
              {formation.apres.points.map((pt, i) => (
                <ScrollReveal key={pt.titre} delay={i * 0.08}>
                  <li className="flex gap-6 border-t border-border py-6">
                    <span className="pt-0.5 text-sm font-semibold tracking-widest text-primary/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {pt.titre}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pt.texte}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
              <li className="border-t border-border" />
            </ol>
          </div>
        </section>
      )}

      {/* Capture catalogue */}
      <section
        id="catalogue"
        className="border-y border-border bg-muted/30 scroll-mt-24"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {s.formCatalogueTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {s.formCatalogueText}
            </p>
          </div>
          <CatalogueForm
            locale={locale}
            formation={formation.slug}
            source={`detail-${formation.slug}`}
          />
        </div>
      </section>

      {/* Formateurs */}
      <section
        id="formateurs"
        className="mx-auto max-w-6xl px-6 py-16 scroll-mt-28"
      >
        <span className="text-sm font-medium text-primary">
          {s.formTrainersKicker}
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {s.formTrainersTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {s.formTrainersText}
        </p>
        <div className="mt-8">
          <FormateursGrid formateurs={getFormateurs(locale)} locale={locale} />
        </div>
      </section>

      {/* Autres formations */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            {s.formOthersKicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {s.formOthersTitle}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/formation-ia-entreprise/${other.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-16 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={other.illustration.src}
                    alt={other.illustration.alt}
                    loading="lazy"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-primary">
                  {other.categorie}
                </span>
                <h3 className="mt-1 text-base font-semibold text-foreground">
                  {other.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {other.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {s.discover} <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-6 py-16 scroll-mt-28">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {s.faqTitle}
        </h2>
        <div className="mt-8">
          <FAQAccordion items={[...formation.faq]} />
        </div>
      </section>

      {/* Relance après la FAQ : celui qui a lu jusqu'ici a épuisé ses
          objections. Dernier point de conversion avant le CTA de pied de page. */}
      <div className="pb-16">
        <InlineCta
          titre={s.formFaqCtaTitle}
          texte={s.formFaqCtaText}
          label="Poser ma question"
          href={contactHref}
          secondaire={{ label: s.formFaqCtaSecondary, href: bookingUrl }}
        />
      </div>

      <CTASection
        locale={locale}
        title={s.formFinalTitle}
        subtitle={s.formFinalSubtitle}
        primaryCta={{
          label: s.formBookSlot,
          href: bookingUrl,
        }}
        secondaryCta={{
          label: s.formFinalSecondary,
          href: hubHref,
        }}
      />
    </>
  );
}
