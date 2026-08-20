"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { bookingProof, clientLogos } from "@/lib/site-config";
import { bookingProofEn } from "@/lib/site-config.en";
import type { Locale } from "@/lib/i18n";

/**
 * Les données de preuve par langue. Le composant lisait `bookingProof` en dur,
 * donc une page anglaise affichait des témoignages français sous une promesse
 * anglaise — le défaut « corps anglais, gabarit français » que le dictionnaire
 * de chrome corrige partout ailleurs.
 */
const PROOF = { fr: bookingProof, en: bookingProofEn } as const;

/** Libellés du bloc, hors données. */
const PROOF_STRINGS = {
  fr: { ratingJoin: "de", clientsKicker: "Parmi nos clients" },
  en: { ratingJoin: "", clientsKicker: "Among our clients" },
} as const;
import { cn } from "@/lib/utils";

/**
 * Types STRUCTURELS, pas dérivés de `typeof bookingProof`.
 *
 * `as const` fige chaque champ sur sa valeur littérale française, si bien que
 * la version anglaise — même forme, autres mots — était refusée comme un type
 * sans rapport. Décrire la forme attendue laisse les deux langues coexister.
 */
type Testimonial = {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly company: string;
  readonly photo: string;
};
type Badge = { readonly img: string; readonly label: string };

const AUTO_ADVANCE_MS = 6000;

/**
 * Photo ronde avec fallback initiales : si l'image manque ou ne charge pas,
 * on affiche un cercle avec les initiales de l'auteur.
 */
function TestimonialAvatar({ photo, name }: { photo?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!photo || failed) {
    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();

    return (
      <div
        aria-hidden
        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
      >
        {initials}
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={photo}
      alt={name}
      className="size-12 shrink-0 rounded-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

/** Badge partenaire : masqué proprement si l'image ne charge pas. */
function PartnerBadge({ badge }: { badge: Badge }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badge.img}
        alt={badge.label}
        className="h-5 w-auto max-w-24 object-contain"
        onError={() => setFailed(true)}
      />
      <span className="text-xs font-medium text-muted-foreground">
        {badge.label}
      </span>
    </div>
  );
}

function TestimonialCarousel({ locale }: { locale: Locale }) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const testimonials = PROOF[locale].testimonials;
  const total = testimonials.length;

  useEffect(() => {
    if (prefersReducedMotion || paused) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, paused, total]);

  const active: Testimonial = testimonials[index];

  return (
    <div
      className="glass-card p-6 md:p-7"
      role="group"
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* min-h pour garder une hauteur stable entre citations de longueurs différentes */}
      <div className="min-h-[11rem] sm:min-h-[9rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.15,
              ease: "easeOut",
            }}
          >
            <blockquote className="text-[15px] italic leading-relaxed text-foreground">
              «&nbsp;{active.quote}&nbsp;»
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <TestimonialAvatar photo={active.photo} name={active.author} />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {active.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {active.role} · {active.company}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Dots de navigation */}
      <div className="mt-5 flex items-center gap-2">
        {testimonials.map((testimonial, i) => (
          <button
            key={testimonial.author}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Témoignage ${i + 1} sur ${total}`}
            aria-current={i === index}
            className="group/dot -my-2 flex cursor-pointer items-center justify-center rounded-full px-1 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-foreground/15 group-hover/dot:bg-foreground/30",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function LogoMarquee() {
  const prefersReducedMotion = useReducedMotion();

  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {clientLogos.map((logo) => (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          key={`${logo.name}${ariaHidden ? "-dup" : ""}`}
          src={logo.img}
          alt={ariaHidden ? "" : logo.name}
          className="h-8 w-auto max-w-24 shrink-0 object-contain"
        />
      ))}
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <div className="overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {row(false)}
      </div>
    );
  }

  return (
    <div className="bp-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <style>{`
        @keyframes bp-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .bp-marquee-track {
          animation: bp-marquee-scroll 30s linear infinite;
        }
        .bp-marquee:hover .bp-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
      <div className="bp-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/**
 * Bloc de preuve sociale de la section réservation :
 * carrousel de témoignages, ligne de stats, marquee de logos clients
 * et badges partenaires. Pensé pour la colonne gauche, au-dessus
 * de l'embed Cal.com sur mobile.
 */
export function BookingProof({
  className,
  locale = "fr",
}: {
  className?: string;
  locale?: Locale;
}) {
  const { stats, badges } = PROOF[locale];
  const s = PROOF_STRINGS[locale];

  return (
    <div className={cn(className)}>
      <TestimonialCarousel locale={locale} />

      {/* Ligne de stats discrète */}
      <p className="mt-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{stats.rating}</span>{" "}
        {s.ratingJoin ? `${s.ratingJoin} ` : ""}
        {stats.ratingLabel}
        <span className="mx-2" aria-hidden>
          ·
        </span>
        <span className="font-semibold text-foreground">{stats.reco}</span>{" "}
        {stats.recoLabel}
      </p>

      {/* Marquee logos */}
      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {s.clientsKicker}
        </p>
        <div className="mt-4">
          <LogoMarquee />
        </div>
      </div>

      {/* Badges partenaires */}
      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
        {badges.map((badge) => (
          <PartnerBadge key={badge.label} badge={badge} />
        ))}
      </div>
    </div>
  );
}
