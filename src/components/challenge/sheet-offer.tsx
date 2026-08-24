"use client";

/**
 * The whole lead model, in one component.
 *
 * Three decisions are deliberate and worth not undoing:
 *
 * 1. The sheet appears on the page immediately, and the email is a copy.
 *    Email-only delivery stalls a reader mid setup, and corporate spam filters
 *    hit the most engaged readers hardest.
 * 2. Each of the ten sheets exists on exactly one day, so a request tells you
 *    what that reader cares about without any tracking at all.
 * 3. On Day 1 this is rendered only after the reader says the install worked.
 *    Asking for an address right after somebody failed is the worst moment on
 *    the site.
 *
 * Where the lead goes: `/api/challenge-sheet` only, which writes to
 * `claude_code_leads`. It deliberately does NOT post to `/api/lead` as well.
 * Owner's decision, 20 August 2026: the challenge keeps its own tables and
 * touches nothing else. The cost, stated once and not re-argued, is that these
 * leads do not reach the OS and do not fire the Slack notice that every other
 * form on the site fires. Read `claude_code_leads` to see them.
 */

import { useMemo, useState } from "react";
import { ArrowRight, Check, Download, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { uiFor } from "@/lib/challenge/locale";
import { LEAD_SOURCE } from "@/lib/challenge/registry";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { summarise } from "@/lib/challenge/progress";
import { leadSubmissionSchema } from "@/lib/schemas/lead";
import type { Sheet } from "@/lib/challenge/types";
import { RichText } from "./rich-text";
import { knownEmail, rememberEmail } from "./known-contact";
import { useHydrated } from "./use-stored";
import { useProfile } from "./use-profile";
import { useProgress } from "./use-progress";

/** Built once per language at module load: the content does not change. */
const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

export function SheetOffer({
  sheet,
  day,
  locale = "en",
}: {
  sheet: Sheet;
  day: number;
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  /*
    The address we already know, filled in for them.

    Three things had to be true at once, and this is the shape that gets all
    three:

    • The static HTML has no address in it. These pages are prerendered and
      shared by every reader, so a value baked into the file would be somebody
      else's. `useHydrated` is false on the server and on the first client
      pass, so the box starts empty exactly as the HTML says.
    • It is not read in an effect. An effect runs after the paint and would
      overwrite an address the reader had already started typing.
    • Typing always wins. `typed` stays null until they touch the box, and from
      then on it is the only thing that matters.
  */
  const hydrated = useHydrated();
  const known = useMemo(() => (hydrated ? knownEmail() : ""), [hydrated]);
  const [typed, setTyped] = useState<string | null>(null);
  const email = typed ?? known;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  /** Where the file actually is. Null until the server answers with it. */
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const { state } = useProgress();
  const { profile } = useProfile();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parsed = leadSubmissionSchema.safeParse({
      email: email.trim(),
      source: LEAD_SOURCE,
      sheetId: sheet.id,
      sheetDay: day,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? UI.sheetBadEmail);
      return;
    }

    setLoading(true);
    try {
      // Their score at the moment they asked, read from their own browser.
      //
      // This is the difference between a lead and a good lead: somebody who
      // has done twenty days and then hands over an address is worth far more
      // than somebody who downloaded a sheet on day one and left. It costs
      // nothing to send, because the number is already sitting in the page.
      const score = summarise(state, KEYS[locale], totalDaysFor());

      // The sheet route is the one that must succeed: it writes the lead row
      // and hands back the file link. Its answer decides what the reader sees.
      const response = await fetch("/api/challenge-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: parsed.data.email,
          sheetId: sheet.id,
          sheetDay: day,
          points: score.points,
          daysDone: score.daysDone,
          levelId: score.levelId,
          // The two answers from the index page, if they gave them. This is
          // what finally fills `role` and `claude_level`, which had been null
          // on every row since the table was created because nothing asked.
          role: profile.role ?? undefined,
          claudeLevel: profile.level ?? undefined,
          locale,
        }),
      });
      if (!response.ok) throw new Error("failed");
      const result = (await response.json()) as { fileUrl?: string | null };

      setFileUrl(result.fileUrl ?? null);
      // Remembered only now, after the server accepted it, so a typo the
      // reader went on to correct is never the address we fill in next time.
      rememberEmail(parsed.data.email as string);
      track("challenge_sheet", { sheet: sheet.id, day });
      setSent(true);
    } catch {
      setError(UI.sheetFailed);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col gap-4 overflow-hidden rounded-lg border border-primary bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,.05),0_12px_28px_-16px_rgba(15,23,42,.28)]">
      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
        {UI.sheetTag}
      </span>

      <h3 className="text-xl font-bold tracking-tight">{sheet.title}</h3>

      <p className="text-muted-foreground">
        <RichText text={sheet.pitch} />
      </p>

      <ul className="flex list-disc flex-col gap-1 pl-5 text-[0.9375rem] text-muted-foreground">
        {sheet.contents.map((line, i) => (
          <li key={i}>
            <RichText text={line} />
          </li>
        ))}
      </ul>

      {sent ? (
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-success">
            <Check className="size-4" aria-hidden />
            {UI.sheetDone}
          </p>
          {/*
            No link when there is no file.

            This button used to be href="#", so a reader gave an address and got
            a button that went nowhere. If a sheet has not been published yet,
            say so plainly instead: the email still arrives when it exists, and
            an honest wait beats a dead link.
          */}
          {fileUrl ? (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-sm border border-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="size-4" aria-hidden />
              {UI.sheetOpenNow}
            </a>
          ) : (
            <p className="text-[0.8125rem] text-muted-foreground">{UI.sheetNotReady}</p>
          )}
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <label className="sr-only" htmlFor={`sheet-email-${sheet.id}`}>
              {UI.sheetEmailLabel}
            </label>
            <input
              id={`sheet-email-${sheet.id}`}
              type="email"
              required
              value={email}
              onChange={(e) => setTyped(e.target.value)}
              placeholder={UI.sheetEmailPlaceholder}
              className="min-w-0 flex-1 basis-60 rounded-sm border border-input bg-background px-3.5 py-2.5 text-[0.9375rem] outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  {UI.sheetSending}
                </>
              ) : (
                <>
                  {UI.sheetButton}
                  <ArrowRight className="size-4" aria-hidden />
                </>
              )}
            </button>
          </div>
          {error ? (
            <p className="text-[0.8125rem] text-destructive">{error}</p>
          ) : null}
        </form>
      )}
    </div>
  );
}



