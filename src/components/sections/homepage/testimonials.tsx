"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import { alternateFor, type Locale } from "@/lib/i18n";
import { t as ui } from "@/lib/ui-strings";
import {
  getPublishedCaseStudies,
  type CaseStudyDetail,
} from "@/lib/case-studies";
import { cn } from "@/lib/utils";


/** Type structurel — voir connections.tsx pour la raison. */
type TestimonialItem = {
  readonly quote: string;
  readonly name: string;
  readonly title: string;
  readonly company: string;
  readonly photo: string;
};

/** Sélection homepage : 6 témoignages curés, secteurs variés. Le reste vit sur /etudes-de-cas. */
const FEATURED_NAMES = [
  "Éric Solal",
  "Hicham Boustit",
  "Lamia Ajana",
  "Nicole Neumann",
  "Marie-Pierre Picon",
  "Ziyad El Mouniri",
];

/**
 * La sélection se fait par NOM, et les noms sont identiques dans les deux
 * langues (ce sont des personnes réelles) : la même liste curée fonctionne
 * donc telle quelle en anglais. Calculée par langue, plus en portée module,
 * sinon la home anglaise afficherait les citations françaises.
 */
function featuredFor(locale: Locale): TestimonialItem[] {
  const items = HOMEPAGE[locale].testimonials.items as readonly TestimonialItem[];
  return FEATURED_NAMES.flatMap((name) => {
    const t = items.find((item) => item.name === name);
    return t ? [t] : [];
  });
}

/**
 * Métrique headline par étude de cas : index dans `metrics`.
 * Par défaut la première métrique ; override quand une autre est plus parlante.
 */
const HEADLINE_METRIC_INDEX: Record<string, number> = {
  addictest: 1, // "3 systèmes IA en production"
  gepromed: 1, // "16 skills livrés le premier mois"
};

const publishedCases = getPublishedCaseStudies();

type Slide =
  | { kind: "testimonial"; testimonial: TestimonialItem }
  | { kind: "case"; caseStudy: CaseStudyDetail; tone: "light" | "dark" };

/** Alternance témoignage / étude de cas pour le rythme, façon Clay. */
function buildSlides(locale: Locale): Slide[] {
  const slides: Slide[] = [];
  const featuredTestimonials = featuredFor(locale);
  // Les études de cas n'existent qu'en français (`case-studies.ts`). Les
  // intercaler dans l'arbre EN afficherait des titres et des citations
  // françaises : on ne montre que ce qui est publié dans la langue.
  const cases = locale === "fr" ? publishedCases : [];
  const max = Math.max(featuredTestimonials.length, cases.length);
  for (let i = 0; i < max; i++) {
    const t = featuredTestimonials[i];
    if (t) slides.push({ kind: "testimonial", testimonial: t });
    const c = cases[i];
    if (c) {
      slides.push({
        kind: "case",
        caseStudy: c,
        // 2 cartes sombres sur 5 pour casser la monotonie (indexes 1 et 3).
        tone: i % 2 === 1 ? "dark" : "light",
      });
    }
  }
  return slides;
}

/**
 * Les diapos sont calculées PAR LANGUE et mémoïsées, plus une constante de
 * module : une constante figeait la version française pour les deux arbres.
 */
const SLIDES_BY_LOCALE: Partial<Record<Locale, Slide[]>> = {};
function slidesFor(locale: Locale): Slide[] {
  return (SLIDES_BY_LOCALE[locale] ??= buildSlides(locale));
}

/* Gouttière alignée sur le conteneur max-w-7xl (80rem) avec px-8 (76rem utiles). */
const GUTTER = "max(1rem,calc((100vw-76rem)/2))";
const CARD_BASE =
  "flex h-[380px] w-[85vw] max-w-[400px] flex-none snap-start flex-col";

function TestimonialSlide({ item }: { item: TestimonialItem }) {
  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <article
      data-slide
      tabIndex={0}
      className={cn(
        CARD_BASE,
        "glass-card p-7 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
      )}
    >
      <blockquote className="min-h-0 flex-1 overflow-hidden text-[0.95rem] leading-relaxed text-foreground/90">
        <span className="line-clamp-[9]">
          &laquo;&nbsp;{item.quote}&nbsp;&raquo;
        </span>
      </blockquote>

      <div className="mt-5 flex items-center gap-3 border-t border-[#E2E8F0] pt-5">
        {"photo" in item && item.photo ? (
          <img
            src={item.photo}
            alt={item.name}
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{item.name}</p>
          <p className="text-xs text-muted-foreground">
            {item.title} · <span className="font-medium">{item.company}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function CaseStudySlide({
  item,
  tone,
  locale = "fr",
}: {
  item: CaseStudyDetail;
  tone: "light" | "dark";
  locale?: Locale;
}) {
  const metric =
    item.metrics[HEADLINE_METRIC_INDEX[item.slug] ?? 0] ?? item.metrics[0];
  const dark = tone === "dark";

  return (
    <Link
      data-slide
      href={`/etudes-de-cas/${item.slug}`}
      className={cn(
        CARD_BASE,
        "group rounded-3xl border p-7 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        dark
          ? "border-[#1E293B] bg-[#0F172A] hover:border-primary/50"
          : "border-primary/15 bg-primary/[0.03] hover:border-primary/35",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide",
            dark ? "bg-white/10 text-white" : "bg-primary/10 text-primary",
          )}
        >
          {ui(locale).hpCaseKicker}
        </span>
        {item.logo ? (
          <span
            className={cn(
              "inline-flex h-9 max-w-[140px] items-center justify-center rounded-lg px-2.5",
              dark && "bg-white",
            )}
          >
            <img
              src={item.logo}
              alt={item.cardTitle}
              loading="lazy"
              className="max-h-6 w-auto max-w-full object-contain"
            />
          </span>
        ) : (
          <span
            className={cn(
              "text-xs font-medium",
              dark ? "text-white/60" : "text-muted-foreground",
            )}
          >
            {item.cardTitle}
          </span>
        )}
      </div>

      {metric && (
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <p
            className={cn(
              "text-5xl font-bold tracking-tight",
              dark ? "text-white" : "text-primary",
            )}
          >
            {metric.value}
          </p>
          <p
            className={cn(
              "mt-2 text-sm leading-snug",
              dark ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {metric.label}
          </p>
        </div>
      )}

      <div
        className={cn(
          "border-t pt-5",
          dark ? "border-white/10" : "border-primary/10",
        )}
      >
        <p
          className={cn(
            "line-clamp-2 text-sm font-semibold leading-snug",
            dark ? "text-white" : "text-foreground",
          )}
        >
          {item.title}
        </p>
        <span
          className={cn(
            "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold",
            dark ? "text-white" : "text-primary",
          )}
        >
          {ui(locale).hpCaseRead}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function TestimonialsSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { testimonials } = HOMEPAGE[locale];
  const s = ui(locale);
  // Null tant que l'index des études de cas n'existe pas dans la langue.
  const casesHref =
    locale === "fr" ? "/etudes-de-cas" : alternateFor("/etudes-de-cas", "en");
  const SLIDES = slidesFor(locale);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      observer.disconnect();
    };
  }, [updateArrows]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-slide]");
    const gap = 20; // gap-5
    const step = card
      ? card.getBoundingClientRect().width + gap
      : el.clientWidth * 0.8;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * step,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  const arrowClass =
    "flex size-11 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-default disabled:opacity-35 disabled:hover:border-[#E2E8F0] disabled:hover:text-foreground";

  return (
    <section className="section-padding overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionHeader
                badge={testimonials.badge}
                title={testimonials.title}
                align="left"
              />
              {casesHref ? (
                <Link
                  href={casesHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {s.hpTestimonialsAll}
                  <ArrowRight className="size-4" />
                </Link>
              ) : null}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={s.hpCarouselPrev}
                className={arrowClass}
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={s.hpCarouselNext}
                className={arrowClass}
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative mt-10">
        <div
          ref={trackRef}
          role="region"
          aria-label={s.hpTestimonialsAria}
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-safe:scroll-smooth focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          style={{
            paddingInline: GUTTER,
            scrollPaddingInline: GUTTER,
          }}
        >
          {SLIDES.map((slide) =>
            slide.kind === "testimonial" ? (
              <TestimonialSlide
                key={`t-${slide.testimonial.name}`}
                item={slide.testimonial}
              />
            ) : (
              <CaseStudySlide
                key={`c-${slide.caseStudy.slug}`}
                item={slide.caseStudy}
                tone={slide.tone}
                locale={locale}
              />
            ),
          )}
        </div>

        {/* Fondu sur les bords, visible seulement quand il reste du contenu à scroller. */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-300",
            canPrev ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent transition-opacity duration-300",
            canNext ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
    </section>
  );
}
