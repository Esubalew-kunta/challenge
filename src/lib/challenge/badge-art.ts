/**
 * The badge artwork, drawn as SVG from a name, a tier and a language.
 *
 * ── Why this is code and not the six files in `/badges` ────────────────────
 *
 * The advisor delivered six SVGs on 24 August 2026 and they are kept in the
 * repository root under `badges/` as the reference. They are not served.
 *
 * The owner's instruction straight after seeing them: professional, simple,
 * clear, AI Makers colours only, and take out anything that looks like AI
 * decoration. The delivered files carry three things that fail that brief: a
 * faint technical grid across the background, loose orange dots scattered
 * around the completed badge, and a panel of rounded squares on the wide
 * layouts that reads as a piece of app interface rather than part of a badge.
 * They also leave large dead gaps between the name and the course line.
 *
 * Editing paths by hand inside six delivered files, to move type and delete
 * ornament, produces something nobody can hand back to the advisor and nobody
 * can maintain. So the design language is kept, the layout is rebuilt here,
 * and the advisor's contract is honoured exactly:
 *
 *   • a real box the name is fitted into, shrink first, then wrap to two lines
 *   • every visible string swapped by language, positions never moved
 *   • completion language only, no qualification claim
 *
 * ── The one idea the design rests on ───────────────────────────────────────
 *
 * A ring that fills as the course is completed. One third, two thirds, all of
 * it. Somebody scrolling a feed sees how far the person got before reading a
 * single word, which is the only job a badge has at thumbnail size. It also
 * solves the problem the first attempt had, where phases 1 and 2 were two
 * blues nobody could tell apart.
 *
 * ── Palette ───────────────────────────────────────────────────────────────
 *
 * AI Makers only, no exceptions and nothing invented. Gold appears on the
 * finished badge and nowhere else, so it means something when it does.
 */

import type { ChallengeLocale } from "./types";
import type { BadgeTier } from "./badge";

export type BadgeShape = "square" | "wide";

const INK = "#0F172A";
const DEEP = "#1E40AF";
const ELECTRIC = "#3B82F6";
const ICE = "#DBEAFE";
const WHITE = "#F9FAFB";
const GOLD = "#F59E0B";

/** The accent for a tier. Gold is the finished badge and nothing else. */
function accentFor(tier: BadgeTier): string {
  return tier === 3 ? GOLD : ELECTRIC;
}

/** Days earned at each tier, and the fraction of the ring that is filled. */
const DAYS: Record<BadgeTier, number> = { 1: 10, 2: 20, 3: 30 };

/* ------------------------------------------------------------------ text */

const TEXT = {
  title: {
    en: { 1: "FIRST THIRD DONE", 2: "TWO THIRDS DONE", 3: "COURSE COMPLETE" },
    fr: {
      1: "PREMIER TIERS FAIT",
      2: "DEUX TIERS FAITS",
      3: "PARCOURS TERMINÉ",
    },
  },
  unit: { en: "DAYS", fr: "JOURS" },
  course: { en: "Claude Code in 30 Days", fr: "Claude Code en 30 jours" },
  note: { en: "Free course by AI Makers", fr: "Cours gratuit par AI Makers" },
} as const;

/* --------------------------------------------------------------- fitting */

/**
 * Roughly how wide a string is, in multiples of the font size.
 *
 * Real font metrics are not available here and are not worth the weight: this
 * only has to decide whether a name fits a box, and it is checked against the
 * longest realistic name in a browser rather than trusted blind. The buckets
 * come from Inter at weight 800, where an "i" is about a third of an "m".
 */
function widthOf(text: string, fontSize: number): number {
  let em = 0;
  for (const ch of text) {
    if (" ".includes(ch)) em += 0.26;
    else if ("ilj|!.,'`".includes(ch)) em += 0.3;
    else if ("ftrI()[]-".includes(ch)) em += 0.38;
    else if ("mwMW".includes(ch)) em += 0.92;
    else if (ch >= "A" && ch <= "Z") em += 0.68;
    else em += 0.56;
  }
  return em * fontSize;
}

interface NameBox {
  x: number;
  width: number;
  /** Baseline when the name fits on one line. */
  single: number;
  /** The two baselines when it has to wrap. */
  double: [number, number];
  singleMax: number;
  singleMin: number;
  doubleMax: number;
  doubleMin: number;
}

/**
 * Splits a name across two lines at the break closest to the middle.
 *
 * Whitespace only. A hyphenated given name like "Jean-Baptiste" stays whole,
 * because breaking it changes how the name reads, which is not ours to do.
 */
function wrap(name: string): [string, string] | null {
  const words = name.split(" ");
  if (words.length < 2) return null;

  let best = 1;
  let bestGap = Infinity;
  for (let i = 1; i < words.length; i += 1) {
    const left = words.slice(0, i).join(" ").length;
    const right = words.slice(i).join(" ").length;
    const gap = Math.abs(left - right);
    if (gap < bestGap) {
      bestGap = gap;
      best = i;
    }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

/**
 * The name, as SVG, fitted to its box.
 *
 * Shrink first, wrap second, in 2px steps. A name is a person, so it is never
 * clipped and never squashed: if it will not fit at the smallest size on two
 * lines, it goes out at that size and slightly wide rather than cut in half.
 */
function nameMarkup(name: string, box: NameBox, anchor: string): string {
  for (let size = box.singleMax; size >= box.singleMin; size -= 2) {
    if (widthOf(name, size) <= box.width) {
      return `<text x="${box.x}" y="${box.single}" font-size="${size}" font-weight="800" fill="${WHITE}" text-anchor="${anchor}">${esc(name)}</text>`;
    }
  }

  const lines = wrap(name);
  if (!lines) {
    return `<text x="${box.x}" y="${box.single}" font-size="${box.singleMin}" font-weight="800" fill="${WHITE}" text-anchor="${anchor}">${esc(name)}</text>`;
  }

  let size = box.doubleMin;
  for (let s = box.doubleMax; s >= box.doubleMin; s -= 2) {
    if (Math.max(widthOf(lines[0], s), widthOf(lines[1], s)) <= box.width) {
      size = s;
      break;
    }
  }
  return `<text x="${box.x}" y="${box.double[0]}" font-size="${size}" font-weight="800" fill="${WHITE}" text-anchor="${anchor}">${esc(lines[0])}</text><text x="${box.x}" y="${box.double[1]}" font-size="${size}" font-weight="800" fill="${WHITE}" text-anchor="${anchor}">${esc(lines[1])}</text>`;
}

/** XML escaping. The name reaches here from a web address. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------------------------------------------------------------- pieces */

/**
 * The ring, and the number of days inside it.
 *
 * Drawn as one circle with a dash pattern rather than an arc path: the filled
 * fraction is then a single number, which is the whole point of the mark and
 * the thing most likely to be adjusted later.
 */
function ring(cx: number, cy: number, r: number, tier: BadgeTier, locale: ChallengeLocale): string {
  const accent = accentFor(tier);
  const circumference = 2 * Math.PI * r;
  const filled = (circumference * tier) / 3;
  const stroke = Math.round(r * 0.13);

  return [
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${DEEP}" stroke-width="${stroke}" opacity="0.45"/>`,
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${accent}" stroke-width="${stroke}" stroke-linecap="round"`,
    ` stroke-dasharray="${filled.toFixed(1)} ${(circumference - filled).toFixed(1)}"`,
    ` transform="rotate(-90 ${cx} ${cy})"/>`,
    `<text x="${cx}" y="${cy + r * 0.13}" font-size="${Math.round(r * 0.78)}" font-weight="800" fill="${WHITE}" text-anchor="middle">${DAYS[tier]}</text>`,
    `<text x="${cx}" y="${cy + r * 0.46}" font-size="${Math.round(r * 0.15)}" font-weight="700" fill="${accent}" text-anchor="middle" letter-spacing="${(r * 0.03).toFixed(1)}">${TEXT.unit[locale]}</text>`,
  ].join("");
}

/** The AI Makers wordmark: "AI" in brand blue, "Makers" in white. */
function wordmark(x: number, y: number, size: number, anchor: string): string {
  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="800" text-anchor="${anchor}" letter-spacing="-0.2"><tspan fill="${ELECTRIC}">AI</tspan><tspan fill="${WHITE}"> Makers</tspan></text>`;
}

/* ----------------------------------------------------------------- build */

export function renderBadgeSvg({
  tier,
  shape,
  locale,
  name,
}: {
  tier: BadgeTier;
  shape: BadgeShape;
  locale: ChallengeLocale;
  name: string;
}): string {
  const accent = accentFor(tier);
  const title = TEXT.title[locale][tier];
  const font = `font-family="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"`;

  if (shape === "square") {
    const box: NameBox = {
      x: 540,
      width: 888,
      single: 758,
      double: [722, 806],
      singleMax: 78,
      singleMin: 46,
      doubleMax: 64,
      doubleMin: 46,
    };
    return [
      `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" ${font}>`,
      `<title>${esc(name)}, ${esc(title)}, ${esc(TEXT.course[locale])}</title>`,
      `<rect width="1080" height="1080" fill="${INK}"/>`,
      // One accent rule across the top. The only ornament on the whole badge.
      `<rect width="1080" height="10" fill="${accent}"/>`,
      wordmark(540, 118, 34, "middle"),
      ring(540, 400, 172, tier, locale),
      `<text x="540" y="662" font-size="40" font-weight="800" fill="${accent}" text-anchor="middle" letter-spacing="3.4">${esc(title)}</text>`,
      nameMarkup(name, box, "middle"),
      `<rect x="480" y="842" width="120" height="4" fill="${accent}"/>`,
      `<text x="540" y="912" font-size="34" font-weight="600" fill="${WHITE}" text-anchor="middle">${esc(TEXT.course[locale])}</text>`,
      `<text x="540" y="954" font-size="22" font-weight="500" fill="${ICE}" text-anchor="middle">${esc(TEXT.note[locale])}</text>`,
      `</svg>`,
    ].join("");
  }

  const box: NameBox = {
    x: 470,
    width: 646,
    single: 306,
    double: [270, 342],
    singleMax: 66,
    singleMin: 42,
    doubleMax: 54,
    doubleMin: 42,
  };
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" ${font}>`,
    `<title>${esc(name)}, ${esc(title)}, ${esc(TEXT.course[locale])}</title>`,
    `<rect width="1200" height="630" fill="${INK}"/>`,
    `<rect width="1200" height="8" fill="${accent}"/>`,
    ring(268, 315, 150, tier, locale),
    `<text x="470" y="222" font-size="30" font-weight="800" fill="${accent}" letter-spacing="2.6">${esc(title)}</text>`,
    nameMarkup(name, box, "start"),
    `<rect x="470" y="370" width="104" height="4" fill="${accent}"/>`,
    `<text x="470" y="432" font-size="30" font-weight="600" fill="${WHITE}">${esc(TEXT.course[locale])}</text>`,
    `<text x="470" y="470" font-size="20" font-weight="500" fill="${ICE}">${esc(TEXT.note[locale])}</text>`,
    wordmark(1112, 78, 28, "end"),
    `</svg>`,
  ].join("");
}
