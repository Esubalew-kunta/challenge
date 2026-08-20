import Link from "next/link";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { RelatedContent } from "@/components/shared/related-content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { JOBS } from "@/lib/careers/locale";
import { CAREERS } from "@/lib/careers/page-content";
import type { JobRole } from "@/lib/careers/postes";
import type { Locale } from "@/lib/i18n";
import { resolveEnHref } from "@/lib/en-links";

/** Gabarit d'une fiche de poste, partagé par /carrieres/[slug] et /en/careers/[slug]. */
const BASE: Record<Locale, string> = { fr: "/carrieres", en: "/en/careers" };
const APPLY: Record<Locale, string> = {
  fr: "/carrieres/postuler",
  en: "/en/careers/apply",
};
const FDE: Record<Locale, string> = {
  fr: "/forward-deployed-engineer",
  en: "/en/forward-deployed-engineer",
};
const WHY: Record<Locale, string> = {
  fr: "/pourquoi-ai-makers",
  en: "/pourquoi-ai-makers",
};

export function CareersRolePage({
  job,
  locale = "fr",
}: {
  job: JobRole;
  locale?: Locale;
}) {
  const c = CAREERS[locale];
  const base = BASE[locale];
  const fdeHref = FDE[locale];
  const whyHref = WHY[locale];
  // `resolveEnHref` rabat sur le formulaire FR tant que /en/careers/apply n'est
  // pas publiée : sans lui, les cinq fiches de poste anglaises pointaient vers
  // un 404. Le lien se corrigera seul dès l'entrée de la route dans
  // EN_PUBLISHED. Le rabattement s'applique au CHEMIN, avant la query.
  const applyHref = `${resolveEnHref(APPLY[locale])}?role=${job.slug}`;
  const otherRoles = JOBS[locale].filter((j) => j.slug !== job.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.breadcrumbHome,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.breadcrumbCurrent,
        item: `${siteConfig.url}${base}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: job.title,
        item: `${siteConfig.url}${base}/${job.slug}`,
      },
    ],
  };

  const dayToDayText = job.dayToDay
    .map((item) => `${item.title}. ${item.body}`)
    .join(" ");
  const profileText = job.profileTable
    .map((row) => `${row.category} : ${row.detail}`)
    .join(" ");

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: [job.intro, dayToDayText].join(" "),
    identifier: {
      "@type": "PropertyValue",
      name: "AI Makers",
      value: job.slug,
    },
    datePosted: job.postedAt,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "Morocco" },
    ],
    jobLocation: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.addresses.paris.street,
          addressLocality: "Paris",
          postalCode: "75008",
          addressCountry: "FR",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
      },
    ],
    skills: job.linkedinSkills.join(", "),
    qualifications: profileText,
    responsibilities: dayToDayText,
    directApply: true,
    url: `${siteConfig.url}${base}/${job.slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={jobPostingSchema} />

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              {c.breadcrumbHome}
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/carrieres" className="hover:text-foreground">
              {c.breadcrumbCurrent}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{job.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {job.team}
            </span>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {job.location}
            </span>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {job.type}
            </span>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {c.detail.reportsTo} {job.reportsTo}
            </span>
            <span className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {c.detail.compensation}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {job.title} : {job.tagline}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {job.intro}
          </p>

          {job.slug === "forward-deployed-engineer" && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.detail.fdeNote.question}{" "}
              <Link
                href={fdeHref}
                className="font-medium text-primary hover:underline"
              >
                {c.detail.fdeNote.link}
              </Link>
              .
            </p>
          )}

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="btn-gradient h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
            >
              <Link href={applyHref}>
                Postuler
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ce que vous prenez en main : le quotidien, pas des puces plates */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">/ Le poste</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            {c.detail.dayToDayTitle}
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {job.dayToDay.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 90 premiers jours */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {c.detail.first90Title}
            </span>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              {job.first90Days}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Profil recherché : table labellisée, pas des puces */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">/ Le profil</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Ce qu&apos;on cherche
          </h2>
        </ScrollReveal>
        <dl className="mt-8 divide-y divide-border rounded-2xl border border-border">
          {job.profileTable.map((row) => (
            <div
              key={row.category}
              className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[10rem_1fr] sm:gap-4"
            >
              <dt className="text-sm font-semibold text-foreground">
                {row.category}
              </dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">
                {row.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/30 p-6">
          <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Ce qu&apos;on ne cherche pas
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {job.notLookingFor}
            </p>
          </div>
        </div>
      </section>

      {/* Où il se distingue des rôles voisins */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              / Le contexte
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {c.detail.adjacentTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-semibold text-foreground">
                      {c.detail.adjacentHeaders[0]}
                    </th>
                  <th className="p-4 font-semibold text-foreground">
                    {c.detail.adjacentHeaders[1]}
                  </th>
                  <th className="p-4 font-semibold text-foreground">
                    {c.detail.adjacentHeaders[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {job.adjacentRoles.map((row, i) => {
                  const isAiMakers = i === job.adjacentRoles.length - 1;
                  return (
                    <tr
                      key={row.role}
                      className={
                        isAiMakers
                          ? "bg-primary/5"
                          : i % 2 === 1
                            ? "bg-muted/30"
                            : undefined
                      }
                    >
                      <td
                        className={`p-4 align-top ${isAiMakers ? "font-semibold text-primary" : "font-medium text-foreground"}`}
                      >
                        {row.role}
                      </td>
                      <td className="p-4 align-top text-muted-foreground">
                        {row.whatTheyDo}
                      </td>
                      <td className="p-4 align-top text-muted-foreground">
                        {row.whoOwnsOutcome}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lieu */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
                {c.detail.whereKicker}
              </span>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              {job.remotePolicy}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA candidature */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {c.detail.fitTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {c.detail.fitBody}
          </p>
          <Button
            asChild
            size="lg"
            className="btn-gradient mt-7 h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
          >
            <Link href={applyHref}>
              {c.detail.applyPrefix} {job.title}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </ScrollReveal>
      </section>

      <RelatedContent
        locale={locale}
        links={[
          {
            title: c.detail.allRolesTitle,
            href: base,
            description: c.detail.allRolesDescription,
          },
          {
            title: c.detail.whyTitle,
            href: whyHref,
            description: c.detail.whyDescription,
          },
        ]}
      />

      {otherRoles.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm font-medium text-muted-foreground">
                {c.detail.otherRoles}
              </span>
              {otherRoles.map((j) => (
                <Link
                  key={j.slug}
                  href={`${base}/${j.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {j.title}
                  <ArrowRight className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
