/**
 * The badge picture, drawn on demand from the address.
 *
 * **This artwork is a placeholder and is meant to be replaced.** An advisor is
 * producing the real thing. What is deliberate here, and what should survive
 * the redesign, is the shape of the problem:
 *
 * • The reader's name is drawn by code, so the design can never be 3 flat
 *   pictures. Whatever the advisor delivers has to leave a box for the name.
 * • Two sizes. 1200 by 630 is the card LinkedIn shows in a feed. 1080 by 1080
 *   is what a reader saves and posts to anything that is not LinkedIn.
 * • French runs about 20 percent longer than English, so every string is
 *   measured against the French one, not the English one.
 * • The name shrinks rather than wraps or overflows. Long names are real and a
 *   badge that clips somebody's surname is worse than no badge.
 * • It is read small. In a phone feed the wide card is about 550 pixels across,
 *   so the name and the word "completed" carry it and nothing else.
 *
 * A route rather than Next's `opengraph-image` file, and that is forced: the
 * file convention receives the path segments only, never the query string, so
 * it cannot see the name.
 *
 * Nothing is stored and nothing is looked up. Anyone can put any name in the
 * address, which was considered and accepted. `cleanName` is what stops that
 * being a way to print a slur or a web address next to our own mark.
 */

import { ImageResponse } from "next/og";
import { BADGE_DAYS, cleanName, isComplete, parseTier } from "@/lib/challenge/badge";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";

/** Long enough for LinkedIn to cache, short enough that a fix reaches people. */
export const revalidate = 86400;

const WIDE = { width: 1200, height: 630 } as const;
const SQUARE = { width: 1080, height: 1080 } as const;

/** Straight from the course palette, so this does not become a second brand. */
const INK = "#0f172a";
const BLUE = "#2563eb";
const DEEP = "#1e40af";
const GOLD = "#f59e0b";
const PAPER = "#ffffff";

/**
 * The name shrinks to fit rather than wrapping or spilling.
 *
 * Three steps, not a formula, because a formula reads as clever and behaves
 * badly at the edges. These numbers were picked against the longest realistic
 * name rather than the average one.
 */
function nameSize(name: string, square: boolean): number {
  const base = square ? 92 : 78;
  if (name.length > 26) return Math.round(base * 0.62);
  if (name.length > 17) return Math.round(base * 0.78);
  return base;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = cleanName(url.searchParams.get("n"));
  const tier = parseTier(url.searchParams.get("p"));
  const lang = url.searchParams.get("lang");
  const locale: ChallengeLocale = lang === "fr" ? "fr" : "en";
  const square = url.searchParams.get("shape") === "square";
  const download = url.searchParams.get("download") === "1";

  // A missing name or tier is a broken link, not a nameless badge. 404 rather
  // than a picture, so a crawler never caches a half drawn one.
  if (!name || !tier) {
    return new Response("Badge link is incomplete", { status: 404 });
  }

  const UI = uiFor(locale);
  const size = square ? SQUARE : WIDE;
  const complete = isComplete(tier);
  const accent = complete ? GOLD : BLUE;
  const pad = square ? 88 : 72;

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: pad,
          background: PAPER,
          // The band down the left is the whole placeholder identity: one
          // shape, one colour, and it is the only thing that changes between a
          // progress badge and a finished one.
          borderLeft: `${square ? 28 : 22}px solid ${accent}`,
          fontFamily: "sans-serif",
          color: INK,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              display: "flex",
              fontSize: square ? 26 : 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              fontWeight: 700,
              color: complete ? GOLD : DEEP,
            }}
          >
            {UI.badgeName(tier)}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: square ? 30 : 26,
              color: "#475569",
            }}
          >
            {UI.badgeSub(BADGE_DAYS[tier])}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              display: "flex",
              fontSize: nameSize(name, square),
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              width: square ? 180 : 150,
              height: 6,
              background: accent,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            fontSize: square ? 30 : 26,
          }}
        >
          <div style={{ display: "flex", fontWeight: 700 }}>
            {UI.challengeName}
          </div>
          <div style={{ display: "flex", color: "#64748b" }}>AI Makers</div>
        </div>
      </div>
    ),
    size,
  );

  if (!download) return image;

  // Content-Disposition rather than a `download` attribute on the link: the
  // attribute is ignored in enough places (in-app browsers especially) that a
  // reader on a phone would just get the picture opened in a new tab with no
  // way back. The header works everywhere.
  const headers = new Headers(image.headers);
  headers.set(
    "Content-Disposition",
    `attachment; filename="claude-code-30-days-badge-${tier}.png"`,
  );
  return new Response(image.body, { status: image.status, headers });
}
