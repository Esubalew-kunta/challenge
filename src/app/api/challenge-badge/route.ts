/**
 * A reader earned a badge. Write it down, and hand the badge over.
 *
 * **This route is what the badge form posts to, and that is the fix for a bug
 * the owner hit on day 10.**
 *
 * It used to post to `/api/lead`, the site-wide capture route. That route
 * needs the AI Makers OS, or n8n as a fallback, and answers 502 when it can
 * reach neither. So a reader who had finished ten days filled in the form and
 * was told "your request could not be sent", in French, on an English page,
 * and got no badge.
 *
 * That is the wrong dependency. **The badge is already earned by the time this
 * form appears.** Handing it over must not depend on a CRM being up, and a
 * reader must never be punished for our infrastructure having a bad minute.
 *
 * So the order is now:
 *
 *   1. Write the row here, straight to Supabase. This is the one that decides
 *      what the reader sees, and it has no dependency beyond the database.
 *   2. Relay the same person to `/api/lead` afterwards, in the background,
 *      **allowed to fail**. That is how the lead still reaches the OS and the
 *      Slack notice on a normal day.
 *
 * If even step 1 fails, the reader still gets their badge: the badge is drawn
 * from the address, so it needs no row to exist. A failure costs a row and
 * nothing else. That is deliberate and is why this answers 200 with
 * `stored: false` rather than an error.
 *
 * It creates and never updates. No upsert, no delete: somebody who earns phase
 * 1 on two devices produces two rows, and two rows are a smaller problem than
 * a route that can overwrite history.
 *
 * The service role key is read here, on the server, and nowhere else. It
 * bypasses every row level security rule, so it must never be imported into a
 * client component and must never be prefixed NEXT_PUBLIC_.
 */

import { NextResponse } from "next/server";
import { after } from "next/server";
import { BADGE_DAYS, MAX_BADGE_NAME, cleanName } from "@/lib/challenge/badge";
import { badgeSubmissionSchema } from "@/lib/schemas/challenge-badge";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const parsed = badgeSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    // A per-field message, because the form shows them next to the field. A
    // single generic string would make the reader guess which of the three is
    // wrong, on the one form they filled in to collect something they earned.
    const byField: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "_");
      if (!byField[key]) byField[key] = issue.message;
    }
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request", fields: byField },
      { status: 400 },
    );
  }

  const d = parsed.data;

  // The same cleaning the image and the page apply, run again here. This is
  // the one that counts: the two on the way in are conveniences, this is the
  // one nobody can skip.
  const name = cleanName(d.name).slice(0, MAX_BADGE_NAME);
  if (!name) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }

  let stored = false;

  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Say so loudly in the log and carry on. A silent 200 here would hide a
    // broken deployment for weeks, and refusing the reader would punish them
    // for it.
    console.error("[BADGE] Supabase is not configured, row not written");
  } else {
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/claude_code_badges`, {
        method: "POST",
        headers: {
          apikey: SERVICE_KEY,
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name,
          email: d.email.toLowerCase(),
          phone: d.phone ?? null,
          tier: d.tier,
          days_at_badge: BADGE_DAYS[d.tier],
          points: d.points ?? null,
          days_done: d.daysDone ?? null,
          level_id: d.levelId ?? null,
          role: d.role ?? null,
          claude_level: d.claudeLevel ?? null,
          locale: d.locale ?? "en",
        }),
        // A hung socket must never hold somebody staring at a spinner.
        signal: AbortSignal.timeout(6000),
      });

      if (res.ok) {
        stored = true;
      } else {
        console.error(`[BADGE] Insert failed: ${res.status} ${await res.text()}`);
      }
    } catch (error) {
      console.error("[BADGE] Insert threw:", error);
    }
  }

  /*
    The lead, sent on afterwards and allowed to fail.

    `after` runs this once the response is already on its way, so the reader
    never waits for it and a slow or dead OS cannot delay a badge. Everything
    inside is wrapped, because an unhandled rejection here would be an error in
    the log for a request the reader saw succeed, which is the sort of thing
    that sends somebody hunting for a bug that does not exist.
  */
  after(async () => {
    try {
      const origin = new URL(request.url).origin;
      const res = await fetch(`${origin}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: d.name,
          phone: d.phone,
          phoneCountry: d.phoneCountry,
          email: d.email,
          source: "claude-code-badge",
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.warn(
          `[BADGE] Lead relay returned ${res.status}. The badge was still given.`,
        );
      }
    } catch (error) {
      console.warn("[BADGE] Lead relay failed. The badge was still given.", error);
    }
  });

  return NextResponse.json({ success: true, stored });
}
