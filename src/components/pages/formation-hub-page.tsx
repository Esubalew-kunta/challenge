import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { CatalogueForm } from "@/components/formation/catalogue-form";
import { FormationPhoto } from "@/components/formation/formation-photo";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PremiumCard } from "@/components/motion/premium-card";
import { FormateursGrid } from "@/app/(fr)/formation-ia-entreprise/formateurs-grid";
import { FormationVisual } from "@/app/(fr)/formation-ia-entreprise/formation-visuals";
import { siteConfig, bookingProof } from "@/lib/site-config";
import { bookingProofEn } from "@/lib/site-config.en";
import {
  getFormations,
  getFormationPhotos,
  formationSlugHref,
  FORMATION_HUB,
} from "@/lib/formations-locale";
import { getFormateurs } from "@/lib/formateurs-locale";
import { FORMATION_HUB_CONTENT } from "@/lib/offer-pages/formation-hub-locale";
import { resolveEnHref } from "@/lib/en-links";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé du hub de formation, pour les deux langues.
 *
 * Extrait de `(fr)/formation-ia-entreprise/page.tsx`, qui portait ses 662
 * lignes de copy en JSX inline. Le rendu français est inchangé : tout le texte
 * est passé dans `offer-pages/formation-hub.ts` en conservant les apostrophes
 * exactes de l'ancienne page (`&apos;` = U+0027, `&rsquo;` = U+2019).
 *
 * Deux sections ne se rendent QUE côté français, parce que leur contenu vaut
 * `null` en anglais : les articles de blog liés (aucune version anglaise) et la
 * bande de villes (les pages `formation-ia/[ville]` sont un artefact du marché
 * français). Voir les commentaires des modules de contenu.
 */
export function FormationHubPage({ locale }: { locale: Locale }) {
  const c = FORMATION_HUB_CONTENT[locale];
  const isEn = locale === "en";
  const formations = getFormations(locale);
  const formationPhotos = getFormationPhotos(locale);
  const proof = isEn ? bookingProofEn : bookingProof;
  const homeUrl = isEn ? `${siteConfig.url}/en` : siteConfig.url;
  const hubUrl = `${siteConfig.url}${FORMATION_HUB[locale]}`;
  const contactHref = isEn ? resolveEnHref("/en/contact") : "/contact";
  // Extraits en locales : les deux blocs sont `| null` et TypeScript perd le
  // rétrécissement à l'intérieur des callbacks de `.map()`.
  const { related, cities } = c;

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
        item: hubUrl,
      },
    ],
  };

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.schema.courseListName,
    itemListElement: formations.map((course, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: `${c.schema.coursePrefix} ${course.name}`,
        description: course.resume,
        url: `${siteConfig.url}${formationSlugHref(locale, course.slug)}`,
        provider: {
          "@type": "Organization",
          name: "AI Makers",
          sameAs: siteConfig.url,
        },
      },
    })),
  };

  // Preuve chiffrée — reprend les stats réelles du site.
  // Hiérarchie validée : 100% de recommandations d'abord, puis 9,6/10, puis
  // le premier chiffre de la bande (professionnels formés).
  const preuveStats = [
    { value: proof.stats.reco, label: proof.stats.recoLabel, dominant: true },
    {
      value: proof.stats.rating,
      label: proof.stats.ratingLabel,
      dominant: false,
    },
    { value: c.stats[0].value, label: c.stats[0].label, dominant: false },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseListSchema} />
      <JsonLd data={faqPageSchema(c.faq.items)} />

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {c.hero.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {c.hero.titleLead}{" "}
              <span className="text-primary">{c.hero.titleHighlight}</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {c.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {c.hero.ctaCatalogue}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={contactHref}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                {c.hero.ctaCall}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/formation-hero.png"
                alt={c.hero.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Médaillon conférence */}
            <div className="absolute -bottom-6 -left-6 hidden w-40 rotate-[-4deg] overflow-hidden rounded-xl border-4 border-background shadow-xl md:block lg:w-48">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/formations/conference-othmane.jpg"
                alt={c.hero.medallionAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {/* Badge stat flottant — satisfaction (le nombre de professionnels
                formés est déjà dans la bande stats juste dessous). */}
            <div className="absolute -right-3 top-6 hidden rotate-[2deg] rounded-xl border border-border bg-background px-4 py-3 shadow-lg md:block">
              <div className="text-xl font-bold text-primary">
                {proof.stats.rating}
              </div>
              <div className="text-xs text-muted-foreground">
                {c.hero.ratingLabel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3">
          {c.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalogue */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            {c.catalogue.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.catalogue.title}
          </h2>
        </ScrollReveal>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {c.catalogue.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formations.map((course, i) => (
            <ScrollReveal key={course.slug} delay={i * 0.08} className="flex">
              <PremiumCard className="flex-1 bg-background [&>div:last-child]:h-full">
                <Link
                  href={resolveEnHref(formationSlugHref(locale, course.slug))}
                  className="group flex h-full flex-col rounded-2xl p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                <FormationVisual
                  slug={course.slug}
                  illustration={course.illustration}
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-primary">
                    {course.categorie}
                  </span>
                  {course.badge && (
                    <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                      {course.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {course.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {course.tagline}
                </p>
                <p className="mt-4 text-sm text-foreground">
                  <span className="font-medium text-primary">{c.catalogue.audienceLabel}</span>
                  {course.public}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {course.tools.map((tool) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={tool.alt}
                      src={tool.src}
                      alt={tool.alt}
                      title={tool.alt}
                      loading="lazy"
                      className="size-7 object-contain"
                    />
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  {c.catalogue.cardCta} <ArrowRight className="size-4" />
                </span>
                </Link>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pourquoi */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            {c.approach.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.approach.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col gap-4">
              {c.approach.points.map((point, i) => (
                <ScrollReveal key={point} delay={i * 0.1} className="flex-1">
                  <div className="flex h-full items-start gap-5 rounded-2xl border border-border bg-background p-6">
                    <span className="text-4xl font-bold leading-none text-primary/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">
                      {point}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.15} className="hidden lg:block">
              <FormationPhoto
                src="/images/formations/conference-othmane.jpg"
                alt={c.approach.photoAlt}
                className="h-full min-h-[380px] w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pédagogie */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-sm font-medium text-primary">
          {c.pedagogy.kicker}
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {c.pedagogy.title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-3">
          {c.pedagogy.items.map((item, i) => (
            <div key={item.title} className="border-t border-border pt-6">
              <span className="text-5xl font-bold leading-none text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
            <FormationPhoto
              src="/images/formations/atelier-hands-on.png"
              alt={c.pedagogy.photoAlt}
              className="aspect-[16/9] w-full"
            />
            <div className="flex flex-col justify-center rounded-2xl border border-primary/20 bg-primary/[0.04] p-8">
              <p className="text-base leading-relaxed text-foreground">
                {c.pedagogy.pullQuote}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Formateurs */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">
            {c.trainers.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.trainers.title}
          </h2>
          <div className="mt-8">
            <FormateursGrid formateurs={getFormateurs(locale)} locale={locale} />
          </div>
        </div>
      </section>

      {/* Témoignages formation */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            {c.testimonials.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.testimonials.title}
          </h2>
        </ScrollReveal>
        {/* Bandeau de preuve chiffrée */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 grid max-w-3xl grid-cols-3 items-end divide-x divide-border border-y border-border py-6">
            {preuveStats.map((stat) => (
              <div key={stat.label} className="px-2 text-center">
                <div
                  className={`font-bold text-primary ${
                    stat.dominant
                      ? "text-3xl md:text-5xl"
                      : "text-2xl md:text-4xl"
                  }`}
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {c.testimonialItems.map((item, i) => (
            <ScrollReveal key={item.author} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  {isEn
                    ? `\u201C${item.quote}\u201D`
                    : `\u00AB\u00A0${item.quote}\u00A0\u00BB`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.photo}
                    alt={item.author}
                    loading="lazy"
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.role} · {item.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Capture catalogue */}
      <section
        id="catalogue"
        className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-medium text-primary">
              {c.catalogueForm.kicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {c.catalogueForm.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.catalogueForm.text}
            </p>
            <ul className="mt-6 space-y-3">
              {c.catalogueForm.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <CatalogueForm source="catalogue-page" locale={locale} />
        </div>
      </section>

      {/* AI Champions */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <span className="text-sm font-medium text-primary">
            {c.champions.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.champions.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {c.champions.text}
          </p>
          <a
            href={c.champions.cta.href}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/60"
          >
            {c.champions.cta.label}
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            {c.gallery.kicker}
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.gallery.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {c.gallery.intro}
          </p>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {formationPhotos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.06}>
              <FormationPhoto
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/3] h-full w-full"
              />
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.3}>
            <FormationPhoto
              placeholderLabel={c.gallery.placeholder}
              className="aspect-[4/3] h-full w-full"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {c.faq.title}
        </h2>
        <div className="mt-8">
          <FAQAccordion items={[...c.faq.items]} />
        </div>
      </section>

      {/* Articles liés — maillage interne + GEO. FR uniquement. */}
      {related && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {related.title}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.items.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30"
                >
                  <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {related.readMore}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Villes — SEO local. FR uniquement. */}
      {cities && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                {cities.label}
              </span>
              {cities.items.map((v) => (
                <Link
                  key={v.slug}
                  href={`/formation-ia/${v.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {v.ville}
                </Link>
              ))}
              <span className="text-sm text-muted-foreground">
                {cities.suffix}
              </span>
            </div>
          </div>
        </section>
      )}

      <CTASection
        locale={locale}
        title={c.finalCta.title}
        subtitle={c.finalCta.subtitle}
        primaryCta={c.finalCta.primaryCta}
        secondaryCta={c.finalCta.secondaryCta}
      />
    </>
  );
}
