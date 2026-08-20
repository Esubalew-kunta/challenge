import Link from "next/link";
import {
  Mail,
  MapPin,
  Linkedin,
  ArrowRight,
  BookOpen,
  Rocket,
  Gauge,
  BadgeCheck,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { getFooterNav, homeHref } from "@/lib/nav";
import { alternateFor, type Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import { FooterNewsletter } from "./footer-newsletter";
import { BookingCtaButton } from "@/components/shared/booking-modal";

// Dépend de la langue : les libellés viennent du dictionnaire, les cibles de
// la table de routes (rabattues sur le FR tant que la page EN n'existe pas).
const featuredResourcesFor = (s: ReturnType<typeof t>, resolve: (h: string) => string) => [
  {
    href: resolve("/playbook-ia"),
    icon: BookOpen,
    title: s.resPlaybookTitle,
    detail: s.resPlaybookDetail,
  },
  {
    href: resolve("/challenge-30-jours"),
    icon: Rocket,
    title: s.resChallengeTitle,
    detail: s.resChallengeDetail,
  },
  {
    href: resolve("/diagnostic-ia"),
    icon: Gauge,
    title: s.resDiagTitle,
    detail: s.resDiagDetail,
  },
];

// Le rôle du CEO passe par le dictionnaire : « Fondateur » s'affichait tel quel
// dans le pied de page ANGLAIS, sous « Your contacts ». Les deux autres rôles
// (COO, CTO) sont identiques dans les deux langues.
const contactsFor = (s: ReturnType<typeof t>) => [
  {
    name: "Othmane Halim",
    role: s.footerRoleCeo,
    photo: "/images/formateurs/othmane-halim.jpg",
    linkedin: "https://www.linkedin.com/in/othmanehalim/",
  },
  {
    name: "Maneesh Behera",
    role: "COO",
    photo: "/images/formateurs/maneesh-behera.jpg",
    linkedin: "https://www.linkedin.com/in/maneesh-behera/",
  },
  {
    name: "Walid Boulanouar",
    role: "CTO",
    photo: "/images/team/walid.jpg",
    linkedin: "https://www.linkedin.com/in/walid-boulanouar/",
  },
];

export function Footer({ locale = "fr" }: { locale?: Locale }) {
  const footerNav = getFooterNav(locale);
  const s = t(locale);
  const resolve = (fr: string) =>
    locale === "en" ? (alternateFor(fr, "en") ?? fr) : fr;
  const featuredResources = featuredResourcesFor(s, resolve);
  const contacts = contactsFor(s);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Pied de page"
      className="relative border-t border-[#E2E8F0] bg-[#F1F5F9]"
    >
      {/* Gradient top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Bande haute : newsletter + ressources à découvrir */}
        <div className="mb-14 grid gap-10 border-b border-[#E2E8F0] pb-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              {s.newsletterTitle}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[#475569]">
              {s.newsletterBlurb}
            </p>
            <div className="mt-5 max-w-md">
              <FooterNewsletter locale={locale} />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
              {s.footerDiscover}
            </p>
            <div className="mt-4 space-y-3">
              {featuredResources.map((res) => (
                <Link
                  key={res.href}
                  href={res.href}
                  className="group flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-3.5 transition-colors hover:border-primary/30"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/[0.06]">
                    <res.icon className="size-4 text-primary" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                      {res.title}
                    </span>
                    <span className="block text-xs text-[#94A3B8]">
                      {res.detail}
                    </span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-[#94A3B8] transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href={homeHref(locale)}
              aria-label={s.homeAriaLabel}
              className="flex cursor-pointer items-center gap-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-aimakers.png"
                alt=""
                className="size-7 shrink-0"
              />
              <span className="notranslate text-xl font-bold tracking-tight text-foreground">
                AI
              </span>
              <span className="notranslate text-xl font-bold tracking-tight text-primary">
                Makers
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#475569]">
              {s.footerTagline}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-2 text-sm text-[#475569]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <span>
                  {siteConfig.addresses.paris.street},{" "}
                  {siteConfig.addresses.paris.city}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#475569]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <span>
                  {siteConfig.addresses.casablanca.city}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <Mail className="size-4 shrink-0 text-primary/60" />
                <a
                  href={siteConfig.emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.footerEmailAria}
                  className="cursor-pointer transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn AI Makers"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] px-3 py-1 text-xs font-medium text-[#475569] transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Linkedin className="size-3.5" />
                LinkedIn
              </Link>
            </div>

            {/* Calendly CTA */}
            <div className="mt-6">
              <BookingCtaButton className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
                {s.footerBookSlot}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </BookingCtaButton>
            </div>

            {/* Vos interlocuteurs */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
                {s.footerContacts}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {contacts.map((c) => (
                  <Link
                    key={c.name}
                    href={c.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.footerLinkedinAria} ${c.name}`}
                    className="group flex cursor-pointer items-center gap-3 rounded-lg p-1 -m-1 transition-colors hover:bg-[#F1F5F9]"
                  >
                    <span className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.photo}
                        alt={c.name}
                        className="size-11 rounded-full object-cover"
                      />
                      <BadgeCheck className="absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-white text-primary" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        {c.name}
                        <Linkedin className="size-3 text-[#94A3B8] transition-colors group-hover:text-primary" />
                      </span>
                      <span className="block text-xs text-[#475569]">
                        {c.role}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">{s.colServices}</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-[#475569] transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {s.colTraining}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.formations.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-[#475569] transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {s.colResources}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-[#475569] transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {s.colCompany}
            </h3>
            <ul className="mt-4 space-y-2">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-[#475569] transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Portée internationale — villes en badges, lisible en une seconde */}
        <div className="mt-12 rounded-3xl border border-[#E2E8F0] bg-white px-8 py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-md text-center lg:text-left">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Globe className="size-3.5" />
                {s.footerReachKicker}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {s.footerReachTitle}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                {s.footerReachText}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-end">
              {[
                { city: "Paris", tag: "Bureau" },
                { city: "Casablanca", tag: "Bureau" },
                { city: locale === "en" ? "Dubai" : "Dubaï" },
                { city: "Riyad" },
              ].map((place) => (
                <span
                  key={place.city}
                  className={
                    place.tag
                      ? "inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.05] px-4 py-2 text-sm font-semibold text-foreground"
                      : "inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#475569]"
                  }
                >
                  <span aria-hidden="true" className="relative flex size-1.5">
                    <span
                      className={
                        place.tag
                          ? "absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 [animation-duration:2.4s] motion-reduce:hidden"
                          : "hidden"
                      }
                    />
                    <span
                      className={
                        place.tag
                          ? "relative inline-flex size-1.5 rounded-full bg-primary"
                          : "relative inline-flex size-1.5 rounded-full bg-[#94A3B8]"
                      }
                    />
                  </span>
                  {place.city}
                  {place.tag && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      {place.tag}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[#E2E8F0] pt-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/badges/osez-lia.png"
                alt="Osez l'IA"
                className="h-4 w-auto max-w-16 object-contain"
              />
              <span className="text-[11px] font-medium text-[#475569]">
                Ambassadeur Osez l&apos;IA
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/badges/anthropic.svg"
                alt="Anthropic"
                className="h-3.5 w-auto max-w-20 object-contain"
              />
              <span className="text-[11px] font-medium text-[#475569]">
                Partenaire Anthropic
              </span>
            </span>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-[#475569]">
              &copy; {currentYear} AI Makers. {s.footerRights}
            </p>
            <div className="flex gap-4">
              {footerNav.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cursor-pointer text-xs text-[#475569] transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
