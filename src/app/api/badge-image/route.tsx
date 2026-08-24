/**
 * The badge, drawn on demand from the address.
 *
 * **This artwork is a placeholder and is meant to be replaced.** An advisor is
 * producing the real thing. What should survive the redesign is the shape of
 * the problem, not these colours:
 *
 * • It has to read as a **badge**, not a certificate. The first attempt was a
 *   wide document with a name typeset on it, and the owner called it correctly:
 *   that is a certificate. A badge is an emblem, one round mark you can
 *   recognise at thumbnail size before you read a single word of it.
 * • The reader's name is drawn by code, so the design can never be six flat
 *   pictures. Whatever the advisor delivers has to leave a box for the name.
 * • Two sizes. 1200 by 630 is the card LinkedIn shows in a feed. 1080 by 1080
 *   is what a reader saves and posts to anything that is not LinkedIn.
 * • French runs about 20 percent longer than English, so every string is
 *   measured against the French one.
 * • The name shrinks rather than clipping. Long names are real, and a badge
 *   that cuts somebody's surname off is worse than no badge.
 * • It is read small. In a phone feed the wide card is about 550 pixels across,
 *   so the emblem and the name carry it and nothing else does.
 *
 * A route rather than Next's `opengraph-image` file, and that is forced: the
 * file convention receives the path segments only, never the query string, so
 * it cannot see the name.
 *
 * Nothing is stored and nothing is looked up. Anyone can put any name in the
 * address, which was considered and accepted. `cleanName` is what stops that
 * being a way to print a slur or a web address next to our own mark.
 *
 * Note on the markup: this is Satori, not a browser. Every element with more
 * than one child needs an explicit `display: flex`, there is no `gap`
 * shorthand behaviour to rely on for text, and shadows and conic gradients are
 * not available. The design stays inside what it can actually draw.
 */

import { ImageResponse } from "next/og";
import { BADGE_DAYS, cleanName, parseTier } from "@/lib/challenge/badge";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";

/** Long enough for LinkedIn to cache, short enough that a fix reaches people. */
export const revalidate = 86400;

const WIDE = { width: 1200, height: 630 } as const;
const SQUARE = { width: 1080, height: 1080 } as const;

const INK = "#0f172a";
const MUTED = "#64748b";
const PAPER = "#f8fafc";

/**
 * One colour per tier, and the three are told apart by colour alone.
 *
 * That matters at thumbnail size: somebody scrolling a feed sees the ring
 * before they read the number inside it. Straight from the course palette, so
 * this does not become a second brand.
 */
const RING: Record<1 | 2 | 3, { deep: string; bright: string }> = {
  1: { deep: "#1d4ed8", bright: "#60a5fa" },
  2: { deep: "#4338ca", bright: "#818cf8" },
  3: { deep: "#b45309", bright: "#fbbf24" },
};

/** The name shrinks in three steps, set against the longest realistic name. */
function nameSize(name: string, base: number): number {
  if (name.length > 26) return Math.round(base * 0.58);
  if (name.length > 17) return Math.round(base * 0.74);
  return base;
}

/**
 * The emblem: a ring, a disc, the number of days, and a banner across the foot.
 *
 * Three concentric circles rather than a border, because a border in Satori
 * cannot carry a gradient and the gradient is what stops the mark looking like
 * a flat sticker.
 */
function Emblem({
  diameter,
  tier,
  days,
  unit,
  ribbon,
}: {
  diameter: number;
  tier: 1 | 2 | 3;
  days: number;
  unit: string;
  ribbon: string;
}) {
  const colours = RING[tier];
  const ringWidth = Math.round(diameter * 0.055);
  const gapWidth = Math.round(diameter * 0.022);
  const inner = diameter - (ringWidth + gapWidth) * 2;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: diameter,
      }}
    >
      {/* outer ring */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: diameter,
          height: diameter,
          borderRadius: diameter,
          background: `linear-gradient(140deg, ${colours.bright} 0%, ${colours.deep} 100%)`,
        }}
      >
        {/* the pale gap that makes the ring read as a ring */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: diameter - ringWidth * 2,
            height: diameter - ringWidth * 2,
            borderRadius: diameter,
            background: PAPER,
          }}
        >
          {/* the disc that carries the number */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: inner,
              height: inner,
              borderRadius: diameter,
              /*
                The disc stays the same dark on all three tiers, and the RING
                carries the colour.

                It was tinted with the tier colour at first. Gold blended into
                ink comes out brown, which is the one colour a badge must not
                be. A neutral medallion under a coloured ring reads correctly
                at every tier and at thumbnail size, which is where this is
                actually looked at.
              */
              background: `linear-gradient(160deg, #1e293b 0%, ${INK} 100%)`,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: Math.round(inner * 0.44),
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {days}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: Math.round(inner * 0.04),
                fontSize: Math.round(inner * 0.1),
                letterSpacing: Math.round(inner * 0.03),
                fontWeight: 700,
                color: colours.bright,
              }}
            >
              {unit}
            </div>
          </div>
        </div>
      </div>

      {/*
        The banner sits ON the circle, not under it.

        A pill floating below reads as a caption. Overlapping the foot of the
        ring is what makes the whole thing read as one mark, which is the
        difference between a badge and a diagram of a badge.
      */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: -Math.round(diameter * 0.085),
          paddingLeft: Math.round(diameter * 0.075),
          paddingRight: Math.round(diameter * 0.075),
          paddingTop: Math.round(diameter * 0.028),
          paddingBottom: Math.round(diameter * 0.028),
          borderRadius: diameter,
          background: INK,
          color: "#ffffff",
          fontSize: Math.round(diameter * 0.062),
          fontWeight: 700,
          letterSpacing: Math.round(diameter * 0.006),
          textTransform: "uppercase",
        }}
      >
        {ribbon}
      </div>
    </div>
  );
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
  const days = BADGE_DAYS[tier];
  const ribbon = UI.badgeName(tier);
  const brand = UI.challengeName;

  const shell = {
    width: "100%",
    height: "100%",
    background: PAPER,
    fontFamily: "sans-serif",
    color: INK,
  } as const;

  const content = square ? (
    <div
      style={{
        ...shell,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 76,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 6,
          fontWeight: 700,
          color: MUTED,
          textTransform: "uppercase",
        }}
      >
        {brand}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Emblem
          diameter={520}
          tier={tier}
          days={days}
          unit={UI.badgeMarkUnit}
          ribbon={ribbon}
        />
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: nameSize(name, 76),
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 28, color: MUTED }}>
        AI Makers
      </div>
    </div>
  ) : (
    <div
      style={{
        ...shell,
        display: "flex",
        alignItems: "center",
        padding: 72,
      }}
    >
      <Emblem
        diameter={366}
        tier={tier}
        days={days}
        unit={UI.badgeMarkUnit}
        ribbon={ribbon}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 64,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: nameSize(name, 68),
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          {name}
        </div>
        <div
          style={{
            display: "flex",
            width: 132,
            height: 6,
            marginTop: 24,
            marginBottom: 24,
            background: RING[tier].deep,
          }}
        />
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
          {brand}
        </div>
        <div style={{ display: "flex", marginTop: 8, fontSize: 26, color: MUTED }}>
          AI Makers
        </div>
      </div>
    </div>
  );

  const image = new ImageResponse(content, size);

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
