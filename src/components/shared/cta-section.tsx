import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  bookingProof,
  bookingUrl,
  clientLogos,
  homepageContent,
} from "@/lib/site-config";
import { bookingProofEn } from "@/lib/site-config.en";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import { BookingCtaButton } from "@/components/shared/booking-modal";

/** Logos du marquee défilant — toutes les marques exploitables. */
const marqueeLogos = clientLogos.filter((c) =>
  [
    "Schneider Electric",
    "Gepromed",
    "Sage",
    "Amgen",
    "Délifrance",
    "AS Monaco",
    "Emirates NBD",
    "Groupe Partouche",
    "Empruntis",
    "IFA",
    "ThinkONE",
    "ESN Engit",
    "AstraNICE",
  ].includes(c.name)
);

/** Témoignage du CTA — différent de la grille homepage et du carrousel booking. */
const trustTestimonial =
  homepageContent.testimonials.items.find((t) => t.name === "Mickaël Mina") ??
  bookingProof.testimonials[0];

/**
 * Traductions EN validées par le propriétaire, indexées par AUTEUR.
 *
 * Indexé par nom, et pas une simple constante : la citation du CTA a déjà
 * changé de personne une fois (John Volke retiré des données). Une chaîne EN
 * unique aurait alors continué de s'afficher sous le nom du suivant, c'est-à-dire
 * qu'on aurait attribué à quelqu'un des propos qu'il n'a jamais tenus.
 *
 * Pas d'entrée pour un auteur = pas de citation en EN (voir plus bas). On
 * n'invente pas les mots d'une personne nommée, et on ne laisse pas non plus
 * une citation française sur une page anglaise.
 */
const TRUST_QUOTE_EN: Record<string, string> = {
  "John Volke":
    "The pragmatic approach, discovering what's possible by mixing AIs, and the lessons from US startups. Result: real gains in time and skills for our teams.",
  // Traduction de la citation telle qu'elle est stockée dans
  // homepageContent.testimonials (variante home, celle que rend ce CTA), et non
  // de la variante plus courte du carrousel booking : deux formulations
  // différentes du même client, il fallait traduire la bonne.
  // Approuvée par le propriétaire le 2026-07-31.
  "Mickaël Mina":
    "AI Makers made GEO understandable and usable for our business teams. Their ability to quickly grasp the business stakes and turn technical subjects into actionable recommendations clearly made the difference. A serious partner, and a genuine teacher.",
};

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  urgency?: string;
  /** Bloc de confiance sous les boutons : témoignage + stats + logos (activé par défaut). */
  trust?: boolean;
  /** Langue. En "en", les citations clients (FR uniquement) ne sont pas rendues. */
  locale?: Locale;
  className?: string;
};

export function CTASection({
  locale = "fr",
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  urgency,
  trust = true,
  className,
}: CTASectionProps) {
  const s = t(locale);
  const partnerBadges = [
    { img: "/images/badges/osez-lia.png", label: s.badgeOsez },
    { img: "/images/badges/anthropic.svg", label: s.badgeAnthropic },
  ];
  // Les chiffres de preuve portent leur propre libellé : lus en dur sur
  // `bookingProof`, ils restaient français sous une page anglaise.
  const proofStats = (locale === "en" ? bookingProofEn : bookingProof).stats;
  const trustAuthor =
    "name" in trustTestimonial ? trustTestimonial.name : trustTestimonial.author;
  // En EN, on ne rend la citation que si sa traduction a été validée pour CET
  // auteur. Sinon le bloc témoignage est omis plutôt que traduit à la volée.
  const quote =
    locale === "en" ? TRUST_QUOTE_EN[trustAuthor] : trustTestimonial.quote;

  return (
    <section
      className={cn(
        "section-padding relative overflow-hidden bg-gradient-to-b from-[#F1F5F9] to-background",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {primaryCta.href === bookingUrl ? (
            <BookingCtaButton
              locale={locale}
              label={primaryCta.label}
              className="btn-gradient inline-flex h-12 cursor-pointer items-center justify-center rounded-lg px-8 text-base font-semibold text-white"
            />
          ) : (
            <Button
              asChild
              size="lg"
              className="btn-gradient h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 cursor-pointer rounded-lg border-border px-8 text-base hover:border-primary/30 hover:bg-primary/5"
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
        {urgency && (
          <p className="mt-6 text-sm italic text-[#475569]">
            {urgency}
          </p>
        )}

        {trust && (
          <div className="mt-14 border-t border-border pt-10">
            {/* Pas de traduction validée pour cet auteur : on omet le témoignage
                entier (citation ET attribution) plutôt que d'afficher un nom
                sans propos, ou des propos français sur une page anglaise. */}
            {quote && (
              <figure className="mx-auto max-w-xl">
                <blockquote className="text-sm italic leading-relaxed text-muted-foreground">
                  {locale === "en" ? `\u201C${quote}\u201D` : `\u00AB\u00A0${quote}\u00A0\u00BB`}
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-center gap-3">
                  {"photo" in trustTestimonial && trustTestimonial.photo && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={trustTestimonial.photo}
                      alt={"name" in trustTestimonial ? trustTestimonial.name : ""}
                      loading="lazy"
                      className="size-9 rounded-full object-cover"
                    />
                  )}
                  <span className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {"name" in trustTestimonial
                        ? trustTestimonial.name
                        : trustTestimonial.author}
                    </span>{" "}
                    ·{" "}
                    {"title" in trustTestimonial
                      ? trustTestimonial.title
                      : trustTestimonial.role}{" "}
                    · {trustTestimonial.company}
                  </span>
                </figcaption>
              </figure>
            )}

            <p className="mt-8 text-sm text-muted-foreground">
              <span className="font-bold text-foreground">
                {proofStats.rating}
              </span>{" "}
              {proofStats.ratingLabel} ·{" "}
              <span className="font-bold text-foreground">
                {proofStats.reco}
              </span>{" "}
              {proofStats.recoLabel}
            </p>

            {/* Logos défilants */}
            <div
              className="relative mx-auto mt-8 max-w-3xl overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              }}
            >
              <div
                className="flex w-max items-center gap-14 motion-reduce:animate-none"
                style={{ animation: "marquee 36s linear infinite" }}
              >
                {[...marqueeLogos, ...marqueeLogos].map((logo, i) => {
                  const isDuplicate = i >= marqueeLogos.length;
                  return (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={`${logo.name}-${i}`}
                      src={logo.img}
                      alt={isDuplicate ? "" : logo.name}
                      aria-hidden={isDuplicate || undefined}
                      title={logo.name}
                      loading="lazy"
                      className="h-7 w-auto shrink-0 object-contain"
                    />
                  );
                })}
              </div>
            </div>

            {/* Badges partenaires */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {partnerBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={badge.img}
                    alt=""
                    loading="lazy"
                    className="h-4 w-auto object-contain"
                  />
                  <span className="text-xs font-medium text-foreground">
                    {badge.label}
                  </span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
