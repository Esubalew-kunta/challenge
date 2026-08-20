/**
 * 30 Days of Claude Code — a reader asks for one of the ten sheets.
 *
 * Two jobs, in this order, and nothing else:
 *
 *   1. Save the lead into `claude_code_leads` in Supabase.
 *   2. Get the sheet to them: return the file link so the page can open it, and
 *      ask n8n to email a copy.
 *
 * Order matters. The row is written FIRST. If we emailed first and the write
 * then failed, somebody would have the sheet and we would have no record of who
 * they are, which is the one thing this whole page exists to capture.
 *
 * The email is deliberately NOT allowed to fail the request. A reader who gave
 * an address and got the file has been served; a mail relay having a bad minute
 * is our problem, not theirs, and showing them an error would make them think
 * the download failed too.
 *
 * The service role key is read here, on the server, and nowhere else. It
 * bypasses every row level security rule, so it must never be imported into a
 * client component and must never be prefixed NEXT_PUBLIC_.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { LEAD_SOURCE } from "@/lib/challenge/registry";
import { companyEmail } from "@/lib/schemas/identity";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const N8N_SHEET_WEBHOOK_URL = process.env.N8N_SHEET_WEBHOOK_URL;

/**
 * The company email rule comes from `schemas/identity`, the one place in the
 * repo where it lives. Re-inlining a domain list here is exactly how the
 * diagnostic form ended up with its own copy, one entry shorter.
 */
const requestSchema = z.object({
  email: companyEmail,
  sheetId: z.string().trim().min(1).max(60),
  /** 0 is not a day. It is the earned sheet saying it belongs to none of them. */
  sheetDay: z.number().int().min(0).max(30),
  /** Optional, and only ever what the reader typed into a visible field. */
  role: z.string().trim().max(80).optional(),
  claudeLevel: z.string().trim().max(40).optional(),
  /** Their score at the moment they asked. Says how engaged the lead is. */
  points: z.number().int().min(0).max(1000).optional(),
  daysDone: z.number().int().min(0).max(30).optional(),
  levelId: z.string().trim().max(40).optional(),
});

interface SheetRow {
  id: string;
  day: number;
  title: string;
  file_url: string | null;
}

const supabaseHeaders = {
  apikey: SERVICE_KEY ?? "",
  Authorization: `Bearer ${SERVICE_KEY ?? ""}`,
  "Content-Type": "application/json",
};

/** Timeout on every outbound call: a hung socket must not hold the visitor. */
function withTimeout(ms: number) {
  return AbortSignal.timeout(ms);
}

/**
 * The address the reader is actually on.
 *
 * Read from the forwarded headers rather than `request.url`, because behind a
 * proxy `request.url` can carry the internal hostname the platform routed to,
 * not the one in the visitor's address bar. The email links are built from
 * this, so getting it wrong sends people to a URL that only exists inside a
 * data centre.
 */
function originOf(request: Request): string {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  return host ? `${proto}://${host}` : new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Loud on our side, vague on theirs. A visitor cannot fix our configuration
    // and does not need to know what is missing.
    console.error("[challenge-sheet] SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return NextResponse.json({ error: "Indisponible pour le moment." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corps illisible" }, { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const data = parsed.data;
  const siteUrl = originOf(request);

  // The sheet is looked up rather than trusted from the request. Otherwise
  // anyone could post any title and any file URL, and we would email a link of
  // their choosing from our address.
  let sheet: SheetRow | undefined;
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/claude_code_sheets` +
        `?id=eq.${encodeURIComponent(data.sheetId)}&select=id,day,title,file_url&limit=1`,
      { headers: supabaseHeaders, signal: withTimeout(5000) },
    );
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    sheet = ((await res.json()) as SheetRow[])[0];
  } catch (error) {
    console.error("[challenge-sheet] sheet lookup failed:", error);
    return NextResponse.json({ error: "Indisponible pour le moment." }, { status: 502 });
  }

  if (!sheet) {
    return NextResponse.json({ error: "Fiche inconnue" }, { status: 404 });
  }

  // 1. Save the lead. This is the part that must not be skipped, so a failure
  //    here fails the whole request.
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/claude_code_leads`, {
      method: "POST",
      headers: { ...supabaseHeaders, Prefer: "return=minimal" },
      body: JSON.stringify({
        email: data.email,
        sheet_id: sheet.id,
        sheet_day: data.sheetDay,
        role: data.role ?? null,
        claude_level: data.claudeLevel ?? null,
        points: data.points ?? null,
        days_done: data.daysDone ?? null,
        level_id: data.levelId ?? null,
        page_path: new URL(request.url).searchParams.get("from") ?? null,
      }),
      signal: withTimeout(5000),
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  } catch (error) {
    console.error("[challenge-sheet] lead insert failed:", error);
    return NextResponse.json({ error: "Indisponible pour le moment." }, { status: 502 });
  }

  // 2. Ask n8n to email a copy. Never blocks the answer: the reader already has
  //    the file link below, and a mail relay stuttering is not their problem.
  let emailed = false;
  if (N8N_SHEET_WEBHOOK_URL && sheet.file_url) {
    try {
      const res = await fetch(N8N_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          sheetTitle: sheet.title,
          sheetDay: sheet.day,
          fileUrl: sheet.file_url,
          // Where this request came from, so the links inside the email point
          // back at the site the reader is actually on.
          //
          // Sent rather than configured in n8n on purpose. A hardcoded address
          // over there has to be remembered and changed on the day the domain
          // moves, and that is exactly the kind of thing nobody remembers on a
          // launch day. This follows the domain by itself.
          siteUrl,
        }),
        signal: withTimeout(8000),
      });
      emailed = res.ok;
      if (!res.ok) {
        console.warn(`[challenge-sheet] n8n refused the send: ${res.status}`);
      }
    } catch (error) {
      console.warn("[challenge-sheet] n8n unreachable:", error);
    }
  }

  console.log(
    `[challenge-sheet] ${sheet.id} | day ${data.sheetDay} | emailed: ${emailed} | source: ${LEAD_SOURCE}`,
  );

  // `fileUrl` is what makes the button on the page work. Null means the sheet
  // has not been published yet, and the page says so rather than offering a
  // link to nothing.
  return NextResponse.json({ success: true, fileUrl: sheet.file_url, emailed });
}
