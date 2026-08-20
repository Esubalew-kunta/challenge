import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Plus, CheckCircle2, Mail } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { BookingGate } from "@/components/shared/booking-gate";
import { TeamOverview } from "@/components/sections/equipe/team-overview";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { getFormateurs } from "@/lib/formateurs-locale";
import { type Formateur } from "@/lib/formations";
import { FDE } from "@/lib/offer-pages/fde-locale";
import { TEAM } from "@/lib/team-locale";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de /equipe, pour les deux langues.
 *
 * Les PERSONNES viennent des sources uniques déjà traduites : `formateurs.en.ts`
 * via `getFormateurs(locale)` et `FDE[locale].team`. Cette page ne possède que
 * son habillage.
 *
 * Lire l'en-tête de `team.en.ts` : le master annonce une équipe de 6 pour 40 et
 * un bureau à Rabat — il date d'avant le passage à 10 personnes.
 */
const CAL_LINK = bookingUrl.replace(/^https:\/\/cal\.com\//, "");

/** Lien LinkedIn conditionnel : affiché uniquement si l'URL existe. */
function LinkedinLink({
  url,
  nom,
  aria,
}: {
  url?: string;
  nom: string;
  aria: string;
}) {
  const href = url?.trim() ?? "";
  if (href === "") return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${aria} ${nom}`}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
    >
      <Linkedin className="size-4" />
      LinkedIn
    </a>
  );
}

export function TeamPage({ locale }: { locale: Locale }) {
  const c = TEAM[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/team" : "/equipe"}`;
  const calLink = CAL_LINK;
  /** L'hôte de la réservation : même bloc que la home, dans la langue de la page. */
  const bookingHost = HOMEPAGE[locale].booking.host;

  /** Profils sélectionnés par NOM dans la source unique, dans la langue de la page. */
  const roster = getFormateurs(locale);
  const pick = (noms: readonly string[]): readonly Formateur[] =>
    noms
      .map((nom) => roster.find((f) => f.nom === nom))
      .filter((f): f is Formateur => f !== undefined);

  const direction = pick(["Othmane Halim", "Maneesh Behera", "Walid Boulanouar"]);
  const experts = pick(["Edouard Willemsen"]);
  const fdeTeam = FDE[locale].team;
  const ingenieurs = fdeTeam.members.filter((m) =>
    ["Esubalew Kunta", "Yosef", "Meek"].includes(m.firstName),
  );

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
        <TeamOverview locale={locale} />
      </section>

      {/* Direction */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.leadership.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.leadership.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {direction.map((membre, i) => (
              <ScrollReveal key={membre.nom} delay={i * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={membre.photo}
                      alt={membre.nom}
                      width={480}
                      height={600}
                      sizes="(min-width: 768px) 320px, 90vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {membre.nom}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {membre.role}
                    </p>
                    {membre.bio && (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {membre.bio}
                      </p>
                    )}
                    <div className="mt-auto pt-5">
                      <LinkedinLink aria={c.booking.linkedinAria} url={membre.linkedin} nom={membre.nom} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ingénierie */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.engineering.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.engineering.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {fdeTeam.intro}
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                {c.engineering.linkLead}
                <Link
                  href={c.engineering.linkHref}
                  className="font-medium text-primary hover:underline"
                >
                  {c.engineering.linkLabel}
                </Link>
                {c.engineering.linkTail}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {ingenieurs.map((membre, i) => (
              <ScrollReveal key={membre.firstName} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-white p-8 text-center">
                  <Image
                    src={membre.photo}
                    alt={membre.firstName}
                    width={96}
                    height={96}
                    className="size-24 rounded-full object-cover"
                  />
                  <p className="mt-5 text-xl font-semibold text-foreground">
                    {membre.firstName}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {membre.role}
                  </p>
                  <div className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                    {membre.stack.map((tool) => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        key={tool.name}
                        src={tool.img}
                        alt={tool.name}
                        title={tool.name}
                        loading="lazy"
                        className="size-6"
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={ingenieurs.length * 0.1}>
              <Link
                href={c.experts.outroLink.href}
                className="group flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/[0.03] p-8 text-center transition-colors hover:border-primary hover:bg-primary/[0.06]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <Plus className="size-8" />
                </span>
                <p className="mt-5 text-xl font-semibold text-foreground">
                  {c.engineering.hiringTitle}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.engineering.hiringText}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {c.engineering.hiringCta.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experts et formateurs associés */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {c.experts.badge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {c.experts.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {c.experts.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert, i) => (
              <ScrollReveal key={expert.nom} delay={i * 0.05}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-6">
                  <Image
                    src={expert.photo}
                    alt={expert.nom}
                    width={56}
                    height={56}
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {expert.nom}
                    </p>
                    <p className="text-xs font-medium text-primary">
                      {expert.role}
                    </p>
                    {expert.bio && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {expert.bio}
                      </p>
                    )}
                    <div className="mt-2">
                      <LinkedinLink aria={c.booking.linkedinAria} url={expert.linkedin} nom={expert.nom} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="section-padding bg-background">
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

          <ScrollReveal>
            <div className="mx-auto mt-14 max-w-3xl text-center">
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.experts.outroLead}
                <Link
                  href={c.engineering.hiringCta.href}
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {c.experts.outroLink.label}
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final — réservation Cal.com embarquée, taillée pour la conversion */}
      <section id="reserver" className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Colonne promesse */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {c.booking.badge}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {c.booking.title}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {c.booking.intro}
                </p>

                <ul className="mt-8 space-y-3">
                  {c.booking.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hôte */}
                <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bookingHost.photo}
                    alt={bookingHost.name}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {bookingHost.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {bookingHost.role}
                    </p>
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-medium text-success">
                      <span className="size-1.5 rounded-full bg-success" />
                      {bookingHost.responseTime}
                    </p>
                  </div>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4 text-primary/60" />
                  {c.booking.notReady}
                  <a
                    href={siteConfig.emailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-medium text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </ScrollReveal>

            {/* Colonne Cal.com */}
            <ScrollReveal delay={0.15}>
              <BookingGate
                calLink={calLink}
                title={c.booking.gateTitle}
                locale={locale}
                calClassName="h-[620px] overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/[0.04]"
                context="inline"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );}
