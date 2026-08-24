"use client";

/**
 * The moment something is earned, said out loud.
 *
 * Until now the score simply changed. A reader answered the last question of
 * Day 10, the word next to the trophy quietly became Operator, and nothing
 * told them. A number that moves with no acknowledgement is the same as no
 * reward at all, and this is a free course whose only currency is the feeling
 * of getting somewhere.
 *
 * Three moments, and only these three:
 *
 *   1. **A new level.** Builder, Operator, AI Champion. The name is the reward.
 *   2. **A phase finished.** All of its days done, questions and all.
 *   3. **All thirty.** Once, at the end.
 *
 * Deliberately not celebrated: finishing a single day. Thirty popups is a
 * nuisance dressed up as encouragement, and the day page already turns green
 * on its own.
 *
 * **Each milestone fires once, ever**, and is written to the browser in its own
 * key. Without that, every reload of a day page would replay the confetti for a
 * level earned last week, which turns a reward into a bug report.
 *
 * **Nothing earned before this feature existed is announced.** The first time a
 * reader loads a page with this on it, whatever they have already earned is
 * recorded silently. Otherwise everybody who is halfway through the course
 * would be met by three cards in a row for things they did last week.
 *
 * The confetti is forty absolutely positioned spans and one keyframe. No
 * dependency: a confetti library is tens of kilobytes shipped to every reader
 * for five seconds they will see three times in a month. Reduced motion is
 * handled in the same stylesheet rather than in JavaScript, so the card still
 * appears and only the paper is dropped.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { PartyPopper, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { phasesFor, uiFor } from "@/lib/challenge/locale";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import { dayProgress, levelFor, summarise } from "@/lib/challenge/progress";
import type { ProgressState } from "@/lib/challenge/progress";
import type { ChallengeLocale } from "@/lib/challenge/types";
import type { BadgeTier } from "@/lib/challenge/badge";
import { BadgeCard } from "./badge-card";
import { useHydrated, useStored, writeStored } from "./use-stored";
import { useProgress } from "./use-progress";

/** Built once per language at module load: the content does not change. */
const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

/**
 * Namespaced and separate from the progress blob.
 *
 * Same reasoning as the profile key: this is written three or four times in a
 * reader's whole life, progress is written on every answered question, and a
 * bad write to one must not be able to cost somebody the other.
 */
export const CELEBRATED_KEY = "aim.challenge.celebrated.v1";

/** How long the card stays before it takes itself away. */
const VISIBLE_MS = 5200;

interface Milestone {
  id: string;
  tag: string;
  title: string;
  body: string;
  /**
   * The shareable badge this milestone earns, if any.
   *
   * Only three milestones carry one: phase 1, phase 2, and all thirty. The
   * badge is attached to `finished` rather than to phase 3 because those two
   * always land together, and two badge cards for one click would be absurd.
   */
  badge?: BadgeTier;
}

function parseSeen(raw: string): Set<string> {
  if (!raw) return new Set();
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? new Set(parsed.filter((x): x is string => typeof x === "string"))
      : new Set();
  } catch {
    // A corrupt list means nothing has been celebrated. Never an error on a
    // page whose whole job is to look finished.
    return new Set();
  }
}

/**
 * Everything this reader has earned, in the order it should be announced.
 *
 * Order matters when two land on the same click, which happens: the last
 * question of a phase's last day can finish the phase and cross into the next
 * level at once. The phase goes first because it is the smaller, more local
 * thing, and the level is what the reader is left looking at.
 */
function earned(state: ProgressState, locale: ChallengeLocale): Milestone[] {
  const UI = uiFor(locale);
  const key = KEYS[locale];
  const s = summarise(state, key, totalDaysFor());
  const out: Milestone[] = [];

  phasesFor(locale).forEach((phase) => {
    const [from, to] = phase.range;
    let done = true;
    for (let n = from; n <= to; n += 1) {
      if (!dayProgress(state, n, key).done) {
        done = false;
        break;
      }
    }
    if (done) {
      out.push({
        id: `phase:${phase.id}`,
        tag: UI.celebratePhaseTag,
        title: UI.celebratePhaseTitle(phase.label),
        body: phase.title,
        // Phase 3 gets none: finishing it and finishing all thirty are the
        // same click, and the badge belongs on the second.
        badge: phase.id === 1 ? 1 : phase.id === 2 ? 2 : undefined,
      });
    }
  });

  // The starting band is not an achievement, it is where everybody begins.
  const level = levelFor(s.points);
  if (level !== "starter") {
    out.push({
      id: `level:${level}`,
      tag: UI.celebrateLevelTag,
      title: UI.celebrateLevelTitle(UI.levels[level].name),
      body: UI.levels[level].blurb,
    });
  }

  if (s.finished) {
    out.push({
      id: "finished",
      tag: UI.celebrateFinishedTag,
      title: UI.celebrateFinishedTitle,
      body: UI.celebrateFinishedBody,
      badge: 3,
    });
  }

  return out;
}

/* ------------------------------------------------------------- confetti */

const CONFETTI_COLOURS = ["#2563eb", "#1e40af", "#f59e0b", "#22c55e", "#e0e8ff"];
const CONFETTI_COUNT = 40;

/**
 * Deterministic, not random.
 *
 * Nothing here needs real randomness, and a fixed spread means the effect looks
 * the same every time somebody describes it in a bug report. It also means the
 * paper does not jump when React renders the component twice in development.
 */
const PIECES = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
  left: `${(i * 97) % 100}%`,
  background: CONFETTI_COLOURS[i % CONFETTI_COLOURS.length],
  animationDelay: `${((i * 37) % 100) / 100}s`,
  animationDuration: `${2.4 + (((i * 53) % 60) / 100) * 2}s`,
  width: i % 3 === 0 ? "6px" : "8px",
  height: i % 3 === 0 ? "10px" : "6px",
}));

/* ------------------------------------------------------------------ card */

export function Celebrate({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const { state } = useProgress();

  /**
   * Nothing here may run on the hydration pass.
   *
   * Storage is empty on the server, so the first client render sees a reader
   * with no progress at all. Without this guard the silent first run baselined
   * that empty reader, wrote an empty list, and then announced every milestone
   * they had ever earned one after another on the next render. Caught by
   * seeding a half finished reader in a browser, not by reading the code.
   */
  const hydrated = useHydrated();

  /**
   * The stored list, read through the same subscribable wrapper as everything
   * else here, so a second tab crossing the same milestone updates this one.
   *
   * The empty string means the key has never been written, which is different
   * from an empty list. That difference is what makes the silent first run
   * possible below.
   */
  const raw = useStored(CELEBRATED_KEY, "");
  const baselined = raw !== "";

  /** Closed this visit, by hand or by the timer. Keyed so the next one shows. */
  const [dismissed, setDismissed] = useState<string | null>(null);

  const pending = useMemo(() => {
    if (!hydrated || !baselined) return [];
    const seen = parseSeen(raw);
    return earned(state, locale).filter((m) => !seen.has(m.id));
  }, [hydrated, baselined, raw, state, locale]);

  const showing =
    pending.length && pending[0].id !== dismissed ? pending[0] : null;

  /**
   * The silent first run.
   *
   * A write to storage, not a setState, so this is the effect doing what an
   * effect is for: pushing React's view of the world into an external system.
   * It runs once, because the moment the key exists it returns immediately.
   */
  useEffect(() => {
    if (!hydrated || baselined) return;
    writeStored(
      CELEBRATED_KEY,
      JSON.stringify(earned(state, locale).map((m) => m.id)),
    );
  }, [hydrated, baselined, state, locale]);

  /**
   * Records the one on screen and moves on.
   *
   * Marking happens when the card goes away rather than when it appears, so a
   * reader who closes the tab mid animation is shown it again next time
   * instead of losing it.
   */
  const finish = useCallback(() => {
    if (!showing) return;
    const seen = parseSeen(raw);
    seen.add(showing.id);
    writeStored(CELEBRATED_KEY, JSON.stringify([...seen]));
    setDismissed(showing.id);
  }, [showing, raw]);

  /*
    Takes itself away. A reward that has to be closed by hand is a chore.

    Except when it carries a badge. That card holds a form, and a form that
    disappears after five seconds while somebody is typing their phone number
    into it is not a reward, it is a bug report.
  */
  useEffect(() => {
    if (!showing || showing.badge) return;
    const timer = window.setTimeout(finish, VISIBLE_MS);
    return () => window.clearTimeout(timer);
  }, [showing, finish]);

  useEffect(() => {
    if (!showing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showing, finish]);

  useEffect(() => {
    if (showing) track("challenge_milestone", { milestone: showing.id });
  }, [showing]);

  if (!showing) return null;

  /*
    A badge replaces the toast rather than sitting next to it.

    One card, one form. Day 10 already fires a celebration and already carries
    a cheat sheet offer with its own email box; a third thing on top would ask
    the same person for the same address twice in a minute.
  */
  if (showing.badge) {
    return (
      <BadgeCard
        tier={showing.badge}
        locale={locale}
        state={state}
        onClose={finish}
      />
    );
  }

  return (
    /*
      `pointer-events-none` on the wrapper, restored on the card itself. The
      confetti falls across the whole page and must not eat a click on the
      lesson behind it, which would be the most annoying possible bug for a five
      second animation.
    */
    <div
      className="pointer-events-none fixed inset-0 z-[110] flex items-start justify-center overflow-hidden p-4 pt-24"
      aria-live="polite"
    >
      <style>{`
        @keyframes aim-confetti-fall {
          0%   { opacity: 0; transform: translate3d(0,-12vh,0) rotate(0deg); }
          10%  { opacity: 1; }
          100% { opacity: 0; transform: translate3d(0,105vh,0) rotate(540deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aim-confetti { display: none; }
        }
      `}</style>

      <div className="absolute inset-0" aria-hidden>
        {PIECES.map((p, i) => (
          <span
            key={i}
            className="aim-confetti absolute top-0 rounded-[1px]"
            style={{
              left: p.left,
              width: p.width,
              height: p.height,
              background: p.background,
              animationName: "aim-confetti-fall",
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
              animationTimingFunction: "ease-in",
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      <div
        role="status"
        className="pointer-events-auto relative flex w-full max-w-sm flex-col gap-2 rounded-lg border border-primary bg-card p-5 shadow-[0_20px_60px_-20px_rgba(15,23,42,.45)]"
      >
        <button
          type="button"
          onClick={finish}
          aria-label={UI.celebrateClose}
          className="absolute right-2.5 top-2.5 rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="size-4" aria-hidden />
        </button>

        <span className="flex items-center gap-2 pr-8 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary-dark">
          <PartyPopper className="size-3.5" aria-hidden />
          {showing.tag}
        </span>
        <h2 className="pr-8 text-lg font-bold tracking-tight">{showing.title}</h2>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          {showing.body}
        </p>
      </div>
    </div>
  );
}
