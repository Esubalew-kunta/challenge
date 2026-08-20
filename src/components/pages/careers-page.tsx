import Link from "next/link";
import {
  ArrowRight,
  Bot,
  ChevronRight,
  Globe,
  Mail,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { PartnerStrip } from "@/components/shared/partner-strip";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { JOBS } from "@/lib/careers/locale";
import { CAREERS } from "@/lib/careers/page-content";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit du hub carrières, partagé par /carrieres et /en/careers.
 *
 * Les icônes sont nommées dans le contenu ("bot", "rocket"…) plutôt que
 * stockées comme composants : le contenu reste une donnée sérialisable, et les
 * deux langues pointent la même icône sans la dupliquer.
 */
const ICONS = {
  bot: Bot,
  rocket: Rocket,
  globe: Globe,
  trending: TrendingUp,
} as const;

const BASE: Record<Locale, string> = { fr: "/carrieres", en: "/en/careers" };

export function CareersPage({ locale = "fr" }: { locale?: Locale } = {}) {
  const c = CAREERS[locale];
  const jobs = JOBS[locale];
  const base = BASE[locale];

  const spontaneousMailto = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
    c.spontaneousSubject,
  )}`;

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
    ],
  };


  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              {c.breadcrumbHome}
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">{c.breadcrumbCurrent}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {c.badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {c.h1.lead}{" "}
              <span className="text-primary">
                {c.h1.highlight}
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {c.intro}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.remoteNote}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {c.roleNote.prefix}{" "}
              <Link
                href={c.roleNote.fdeLink.href}
                className="font-medium text-primary hover:underline"
              >
                {c.roleNote.fdeLink.label}
              </Link>
              {c.roleNote.middle}{" "}
              <Link
                href={c.roleNote.jobLink.href}
                className="font-medium text-primary hover:underline"
              >
                {c.roleNote.jobLink.label}
              </Link>{" "}
              {c.roleNote.middle2}{" "}
              <Link
                href={c.roleNote.clientsLink.href}
                className="font-medium text-primary hover:underline"
              >
                {c.roleNote.clientsLink.label}
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-gradient h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
              >
                <a href={spontaneousMailto} target="_blank" rel="noopener noreferrer">
                  {c.ctaSpontaneous}
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 cursor-pointer rounded-lg border-border px-8 text-base hover:border-primary/30 hover:bg-primary/5"
              >
                <Link href="#postes">{c.ctaSeeRoles}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment on travaille */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            {c.how.kicker}
          </span>
          <h2 className="mt-2 max-w-2xl text-2xl font-bold text-foreground md:text-3xl">
            {c.how.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {c.how.intro}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {c.how.principles.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-background p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  {(() => {
                    const Icon = ICONS[principle.icon];
                    return (
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    );
                  })()}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Postes ouverts */}
      <section id="postes" className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              {c.openings.kicker}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              {c.openings.title}
            </h2>
          </ScrollReveal>

          {jobs.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-background p-8"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {job.team}
                    </span>
                    <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {job.location}
                    </span>
                    <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <Link
                    href={`${base}/${job.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {c.openings.seeRole}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-10 text-center">
                <p className="text-base font-medium text-foreground">
                  {c.openings.emptyTitle}
                </p>
                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {c.openings.emptyBody}
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-10 text-center shadow-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground md:text-3xl">
              {c.spontaneous.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {c.spontaneous.body}
            </p>
            <Button
              asChild
              size="lg"
              className="btn-gradient mt-7 h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
            >
              <a href={spontaneousMailto} target="_blank" rel="noopener noreferrer">
                {c.spontaneous.ctaPrefix} {siteConfig.email}
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-muted-foreground">
              {c.spontaneous.subjectNote}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <PartnerStrip locale={locale} />
    </>
  );
}
