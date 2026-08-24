/**
 * A reader earned a badge. Write it down.
 *
 * One job and nothing else: insert a row into `claude_code_badges`. The lead
 * itself has already gone through `/api/lead` by the time this is called, so
 * this is not the capture, it is the challenge's own record of who earned
 * which badge. That record lives in the challenge's own tables because that is
 * where the team looks for challenge data.
 *
 * **This route is not on the reader's critical path and must never behave as
 * though it is.** The badge exists in the address, drawn from a name and a
 * tier, so it works whether or not this row was written. The caller fires this
 * and ignores the answer on purpose. A failure here costs a row. Blocking the
 * reader would cost the moment they just earned.
 *
 * It creates and never updates. There is no upsert and no delete: somebody who
 * earns phase 1 twice on two devices produces two rows, and two rows are a
 * smaller problem than a route that can overwrite history.
 *
 * The service role key is read here, on the server, and nowhere else. It
 * bypasses every row level security rule, so it must never be imported into a
 * client component and must never be prefixed NEXT_PUBLIC_.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { BADGE_DAYS, MAX_BADGE_NAME, cleanName } from "@/lib/challenge/badge";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const requestSchema = z.object({
  /** Cleaned again here. Never trust a browser to have done it. */
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional(),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  points: z.number().int().min(0).max(1000).optional(),
  daysDone: z.number().int().min(0).max(30).optional(),
  levelId: z.string().trim().max(40).optional(),
  role: z.string().trim().max(80).optional(),
  claudeLevel: z.string().trim().max(40).optional(),
  locale: z.enum(["en", "fr"]).optional(),
});

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Nothing to write to. Say so plainly in the log and answer without
    // pretending: a silent 200 here would hide a broken deployment for weeks.
    console.error("[BADGE] Supabase is not configured, row not written");
    return NextResponse.json({ stored: false }, { status: 200 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const d = parsed.data;

  // The same cleaning the image and the page apply, run again on the server.
  // This is the one that counts: the two on the way in are conveniences, this
  // is the one an attacker cannot skip.
  const name = cleanName(d.name).slice(0, MAX_BADGE_NAME);
  if (!name) {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }

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
      // A hung socket must never hold a visitor, even one who is not waiting.
      signal: AbortSignal.timeout(6000),
    });

    if (!res.ok) {
      console.error(`[BADGE] Insert failed: ${res.status} ${await res.text()}`);
      return NextResponse.json({ stored: false }, { status: 200 });
    }
  } catch (error) {
    console.error("[BADGE] Insert threw:", error);
    return NextResponse.json({ stored: false }, { status: 200 });
  }

  return NextResponse.json({ stored: true });
}
