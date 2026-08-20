"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { HOMEPAGE } from "@/lib/homepage-locale";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { t } from "@/lib/ui-strings";


/* ------------------------------------------------------------------ */
/* Données des vignettes (illustratives : la couleur vient des vrais   */
/* logos d'outils, comme dans Connexions et la Fleet)                  */
/* ------------------------------------------------------------------ */

type Notif = { label: string; logo: string; minutes: number };

/**
 * Libellés des vignettes, par langue. Les logos et les minutes sont des faits
 * communs aux deux arbres : seule la copie change. La liste FR est copiée telle
 * quelle de la version précédente — le rendu français ne bouge pas.
 */
const NOTIFICATIONS_BY_LOCALE: Record<Locale, Notif[]> = {
  fr: [
    { label: "Reporting hebdo à consolider", logo: "powerbi-color.svg", minutes: 45 },
    { label: "Relance client à rédiger", logo: "gmail-color.svg", minutes: 12 },
    { label: "Saisie CRM après le call", logo: "salesforce-color.svg", minutes: 18 },
    { label: "Synthèse de réunion à envoyer", logo: "microsoftteams-color.svg", minutes: 25 },
    { label: "Tableau à ressaisir à la main", logo: "googlesheets-color.svg", minutes: 15 },
    { label: "Fil client à trier", logo: "whatsapp-color.svg", minutes: 10 },
    { label: "Demande interne à re-router", logo: "slack-color.svg", minutes: 8 },
    { label: "Devis à remettre en forme", logo: "outlook-color.svg", minutes: 20 },
  ],
  en: [
    { label: "Weekly report to pull together", logo: "powerbi-color.svg", minutes: 45 },
    { label: "Client follow-up to write", logo: "gmail-color.svg", minutes: 12 },
    { label: "CRM entry after the call", logo: "salesforce-color.svg", minutes: 18 },
    { label: "Meeting summary to send", logo: "microsoftteams-color.svg", minutes: 25 },
    { label: "Spreadsheet to retype by hand", logo: "googlesheets-color.svg", minutes: 15 },
    { label: "Client thread to sort", logo: "whatsapp-color.svg", minutes: 10 },
    { label: "Internal request to re-route", logo: "slack-color.svg", minutes: 8 },
    { label: "Quote to reformat", logo: "outlook-color.svg", minutes: 20 },
  ],
};

type ProcessCard = { label: string; logo: string; priority: string };

const PROCESS_CARDS_BY_LOCALE: Record<Locale, ProcessCard[]> = {
  fr: [
    { label: "Reporting hebdo", logo: "powerbi-color.svg", priority: "P1" },
    { label: "Relances clients", logo: "gmail-color.svg", priority: "P2" },
    { label: "Saisie CRM", logo: "salesforce-color.svg", priority: "P3" },
    { label: "Synthèses de réunion", logo: "microsoftteams-color.svg", priority: "P4" },
    { label: "Tri des factures", logo: "googlesheets-color.svg", priority: "P5" },
  ],
  en: [
    { label: "Weekly reporting", logo: "powerbi-color.svg", priority: "P1" },
    { label: "Client follow-ups", logo: "gmail-color.svg", priority: "P2" },
    { label: "CRM entry", logo: "salesforce-color.svg", priority: "P3" },
    { label: "Meeting summaries", logo: "microsoftteams-color.svg", priority: "P4" },
    { label: "Invoice triage", logo: "googlesheets-color.svg", priority: "P5" },
  ],
};

/* ------------------------------------------------------------------ */
/* Compteur : démarre sur une valeur stable (pas d'hydration mismatch) */
/* puis se cale sur l'heure réelle au montage                          */
/* ------------------------------------------------------------------ */

const COUNTER_FALLBACK_MINUTES = 127;

function baselineMinutes(): number {
  const now = new Date();
  const start = new Date(now);
  start.setHours(8, 30, 0, 0);
  const elapsed = Math.max(30, (now.getTime() - start.getTime()) / 60000);
  return Math.round(Math.min(elapsed, 570) * 0.35);
}

function formatMinutes(total: number): string {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return h > 0 ? `${h}h${String(m).padStart(2, "0")}` : `${m} min`;
}

function LiveCounter({
  frozen,
  running,
  locale,
}: {
  frozen: boolean;
  running: boolean;
  locale: Locale;
}) {
  const s = t(locale);
  const prefersReducedMotion = useReducedMotion();
  const [minutes, setMinutes] = useState(COUNTER_FALLBACK_MINUTES);

  useEffect(() => {
    setMinutes(baselineMinutes());
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || frozen || !running) return;
    const t = setInterval(() => setMinutes((m) => m + 1), 3500);
    return () => clearInterval(t);
  }, [prefersReducedMotion, frozen, running]);

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 transition-colors duration-500",
        frozen ? "border-primary/30 bg-primary/[0.05]" : "border-border bg-white"
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {frozen ? s.hpCounterRecoverable : s.hpCounterAbsorbed}
      </p>
      <div className="mt-2 flex items-baseline gap-2">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={frozen ? "frozen" : minutes}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "font-mono text-4xl font-bold tracking-tight",
              frozen ? "text-primary" : "text-foreground"
            )}
          >
            {formatMinutes(minutes)}
          </motion.span>
        </AnimatePresence>
        {!frozen && (
          <span
            aria-hidden
            className="h-2 w-2 animate-pulse rounded-full bg-red-400"
          />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vignette 1 : la pile des priorités qui se réordonne sans cesse      */
/* ------------------------------------------------------------------ */

function ShufflingPriorities({
  resolved,
  running,
  locale,
}: {
  resolved: boolean;
  running: boolean;
  locale: Locale;
}) {
  const ui = t(locale);
  const PROCESS_CARDS = PROCESS_CARDS_BY_LOCALE[locale];
  const prefersReducedMotion = useReducedMotion();
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    if (prefersReducedMotion || resolved || !running) return;
    const t = setInterval(() => {
      setOrder((current) => {
        const next = [...current];
        const a = Math.floor(Math.random() * next.length);
        let b = Math.floor(Math.random() * next.length);
        if (a === b) b = (b + 1) % next.length;
        [next[a], next[b]] = [next[b], next[a]];
        return next;
      });
    }, 1800);
    return () => clearInterval(t);
  }, [prefersReducedMotion, resolved, running]);

  const displayed = resolved ? [0, 1, 2, 3, 4] : order;

  return (
    <div>
      <ul className="space-y-2.5">
        {displayed.map((cardIndex, position) => {
          const card = PROCESS_CARDS[cardIndex];
          return (
            <motion.li
              key={card.label}
              layout={!prefersReducedMotion}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className={cn(
                "flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm",
                resolved ? "border-emerald-200" : "border-border"
              )}
            >
              <span className="w-4 font-mono text-[11px] font-semibold text-muted-foreground/50">
                {position + 1}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/stack/${card.logo}`}
                alt=""
                className="size-6 shrink-0 object-contain"
              />
              <span className="flex-1 truncate text-[13px] font-medium text-foreground">
                {card.label}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] font-semibold transition-colors duration-500",
                  resolved
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                {resolved ? card.priority : ui.hpProblemRoi}
              </span>
            </motion.li>
          );
        })}
      </ul>
      <p className="mt-4 text-center font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
        {resolved ? ui.hpProblemPrioritised : ui.hpProblemOrderChanges}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vignette 2 : le flux de notifications                               */
/* ------------------------------------------------------------------ */

const VISIBLE_NOTIFS = 4;

function NotifFeed({
  running,
  resolved,
  locale,
}: {
  running: boolean;
  resolved: boolean;
  locale: Locale;
}) {
  const NOTIFICATIONS = NOTIFICATIONS_BY_LOCALE[locale];
  const prefersReducedMotion = useReducedMotion();
  const [items, setItems] = useState<number[]>([0, 1, 2, 3]);
  const next = useRef(4);

  useEffect(() => {
    if (prefersReducedMotion || !running || resolved) return;
    const t = setInterval(() => {
      setItems((current) => {
        const added = [next.current % NOTIFICATIONS.length, ...current];
        next.current += 1;
        return added.slice(0, VISIBLE_NOTIFS);
      });
    }, 2400);
    return () => clearInterval(t);
    // `NOTIFICATIONS` est une constante de module indexée par langue : son
    // identité est stable, la dépendance ne relance donc pas l'intervalle.
  }, [prefersReducedMotion, running, resolved, NOTIFICATIONS]);

  return (
    <ul className="space-y-2.5">
      <AnimatePresence initial={false}>
        {items.map((notifIndex, position) => {
          const notif = NOTIFICATIONS[notifIndex];
          return (
            <motion.li
              key={`${notifIndex}-${Math.floor((next.current - position - 1) / NOTIFICATIONS.length)}`}
              layout={!prefersReducedMotion}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: -14, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div
                className={cn(
                  "flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-sm transition-all duration-500",
                  resolved ? "border-emerald-200" : "border-border"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/stack/${notif.logo}`}
                  alt=""
                  className="size-6 shrink-0 object-contain"
                />
                <span className="flex-1 truncate text-[13px] font-medium text-foreground">
                  {notif.label}
                </span>
                {resolved ? (
                  <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Absorbé
                  </span>
                ) : (
                  <span className="shrink-0 rounded-full bg-red-50 px-2 py-0.5 font-mono text-[11px] font-semibold text-red-500">
                    ~{notif.minutes} min
                  </span>
                )}
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Vignette 3 : l'outil seul, branché sur rien                         */
/* ------------------------------------------------------------------ */

function LonelyTools({
  resolved,
  running,
  locale,
}: {
  resolved: boolean;
  running: boolean;
  locale: Locale;
}) {
  const ui = t(locale);
  return (
    <div className="relative flex flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        {["openai-color.svg", "copilot-color.svg", "claude-color.svg"].map((logo) => (
          <div
            key={logo}
            className={cn(
              "relative flex size-16 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all duration-500",
              resolved ? "border-primary/40" : "border-border"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/stack/${logo}`}
              alt=""
              className="size-8 object-contain"
            />
            {resolved && (
              <span className="absolute -bottom-1.5 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-primary" />
            )}
          </div>
        ))}
      </div>
      <p
        className={cn(
          "text-sm font-medium transition-colors duration-500",
          resolved ? "text-primary" : "text-muted-foreground"
        )}
      >
        {resolved ? ui.hpProblemConnected : ui.hpProblemLonelyTool}
      </p>
      <div className="w-full max-w-[340px]">
        <NotifFeed running={running && !resolved} resolved={resolved} locale={locale} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fil pointillé entre les vignettes                                   */
/* ------------------------------------------------------------------ */

function ThreadDown({ tangled }: { tangled?: boolean }) {
  const d = tangled
    ? "M50,0 C20,25 85,40 45,60 S15,85 50,100"
    : "M50,0 C60,30 40,65 50,100";
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="mx-auto h-16 w-24 opacity-60 lg:h-24"
    >
      <path
        d={d}
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeDasharray="5 5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function ProblemSection({ locale = "fr" }: { locale?: Locale } = {}) {
  const { problem } = HOMEPAGE[locale];
  const ui = t(locale);
  const sectionRef = useRef<HTMLElement | null>(null);
  const sentinel = useRef<HTMLDivElement | null>(null);
  const [resolved, setResolved] = useState(false);
  // Les animations ne tournent que quand la section est à l'écran.
  const inView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setResolved(true)),
      { rootMargin: "0px 0px -15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const vignettes = [
    <ShufflingPriorities key="v1" resolved={resolved} running={inView} locale={locale} />,
    <div key="v2">
      <div className="space-y-4">
        <LiveCounter frozen={resolved} running={inView} locale={locale} />
        <NotifFeed running={inView} resolved={resolved} locale={locale} />
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground/60">
        {ui.hpProblemIllustration}
      </p>
    </div>,
    <LonelyTools key="v3" resolved={resolved} running={inView} locale={locale} />,
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header (source de vérité : site-config) */}
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              {problem.badge}
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[42px] md:leading-[1.15]">
              {problem.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {problem.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Les 3 pains, chacun avec sa preuve vivante */}
        <div className="mt-16">
          {problem.points.map((point, i) => (
            <div key={point.title}>
              <ScrollReveal>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex gap-5">
                      <span className="select-none text-6xl font-bold leading-none text-primary/15 md:text-7xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-foreground md:text-2xl">
                          {point.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className={cn(
                      "mx-auto w-full max-w-md",
                      i % 2 === 1 ? "lg:order-1" : ""
                    )}
                  >
                    {vignettes[i]}
                  </div>
                </div>
              </ScrollReveal>
              {i < problem.points.length - 1 && (
                <ThreadDown tangled={i === 1} />
              )}
            </div>
          ))}
          <div ref={sentinel} aria-hidden className="h-1" />
        </div>
      </div>
    </section>
  );
}
