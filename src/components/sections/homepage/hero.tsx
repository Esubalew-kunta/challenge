"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import { Button } from "@/components/ui/button";
import { TrustRibbon } from "@/components/shared/trust-ribbon";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { AnimatedGridPattern } from "@/components/shared/animated-grid-pattern";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { clientLogos } from "@/lib/site-config";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import { clientLogosFor } from "@/lib/client-logos-locale";


/**
 * Badges de partenariat en tête de hero, à la place de l'ancien banner texte.
 * Mêmes assets et même pattern « pilule logo + libellé » que le CTA partagé,
 * pour une signature de confiance identique sur tout le site.
 */
const heroPartnerBadges = [
  { img: "/images/badges/anthropic.svg", label: "Partenaire Anthropic" },
  { img: "/images/badges/osez-lia.png", label: "Ambassadeur Osez l'IA" },
];

export function HeroSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { hero } = HOMEPAGE[locale];
  const ui = t(locale);
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Fond — halo profond + grille de points masquée */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% -10%, rgba(37, 99, 235, 0.16) 0%, rgba(37, 99, 235, 0.05) 45%, transparent 70%)",
        }}
      />
      {/* Grille animée discrète : des cellules s'illuminent et s'éteignent,
          comme des systèmes qui s'activent — masquée en fondu vers le bas. */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 72%)",
        }}
      >
        <AnimatedGridPattern
          width={44}
          height={44}
          numSquares={26}
          maxOpacity={0.11}
          duration={3.4}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline — le hero ouvre sur la thèse, la preuve vient après */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              {hero.headline}{" "}
              <span className="text-gradient-blue">{hero.headlineAccent}</span>
            </h1>
          </ScrollReveal>

          {/* Sous-titre */}
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
              {hero.subtitle}
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.25}>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground/80">
              {hero.description}
            </p>
          </ScrollReveal>

          {/* Un seul CTA dominant, le quiz en lien texte */}
          <ScrollReveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <Link
                  href={hero.ctaPrimary.href}
                  onClick={() => track("cta_hero_primary")}
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Link
                href={hero.ctaSecondary.href}
                onClick={() => track("cta_hero_quiz")}
                className="cursor-pointer text-sm font-medium text-primary hover:underline"
              >
                {hero.ctaSecondary.label} →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <TrustRibbon className="mt-7" locale={locale} />
          </ScrollReveal>

          {/* Newsletter fallback */}
          <ScrollReveal delay={0.35}>
            <p className="mt-4 text-sm text-muted-foreground">
              {hero.newsletterFallback.prefix}{" "}
              <Link
                href={hero.newsletterFallback.href}
                className="cursor-pointer font-medium text-primary hover:underline"
              >
                {hero.newsletterFallback.label} →
              </Link>
            </p>
          </ScrollReveal>

          {/* Stats — les chiffres qui comptent.
              Mobile : gap-x-4 + chiffres réduits (override descendant,
              animated-counter.tsx étant modifié par ailleurs) pour éviter
              que "+10 000" et "9,6/10" ne se touchent en 390px. */}
          <ScrollReveal delay={0.4}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-x-4 divide-x divide-border max-sm:[&_p[aria-live]]:text-3xl">
              {hero.stats.map((stat) => (
                <AnimatedCounter locale={locale}
                  key={stat.label}
                  target={stat.target}
                  prefix={"prefix" in stat ? stat.prefix : ""}
                  suffix={"suffix" in stat ? stat.suffix : ""}
                  label={stat.label}
                  {...("decimals" in stat ? { decimals: stat.decimals } : {})}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Logo wall */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16">
            <p className="mb-4 text-center text-sm text-muted-foreground">
              {ui.hpTrustLine}
            </p>
            <LogoCarousel logos={clientLogosFor(locale)} className="" locale={locale} />

            {/* Badges de partenariat — regroupés avec les logos clients :
                une seule zone de preuve, au lieu de deux dispersées. */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroPartnerBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1.5 backdrop-blur-sm"
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
        </ScrollReveal>
      </div>
    </section>
  );
}
