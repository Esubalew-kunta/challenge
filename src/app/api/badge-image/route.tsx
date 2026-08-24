/**
 * The badge picture, drawn on demand from the address.
 *
 * Two jobs, and they need two different answers:
 *
 * • **SVG** for the badge page itself and for anybody who wants the artwork
 *   sharp at any size. It is a few kilobytes and it is exact.
 * • **PNG** for `og:image` and for the save button. **LinkedIn does not render
 *   SVG**, and neither does most of the rest of the web when it comes to a
 *   social card, so a badge that only exists as SVG is a badge nobody ever
 *   sees in a feed.
 *
 * The PNG comes from the same SVG, rasterised by resvg with Inter handed to it
 * explicitly, so the two can never drift apart. One design, two encodings.
 *
 * **`ImageResponse` was tried first and does not work for this.** It rasterises
 * JSX, and its `fonts` option feeds the JSX layout engine, not a nested SVG
 * image. Embedding the badge as a data URI produced a picture with every shape
 * correct and every word missing, because the rasteriser had no font for the
 * text inside it. Using it would have meant maintaining the design twice, once
 * as SVG for the page and once as JSX for the card, and two copies of a design
 * drift within a month.
 *
 * Nothing is stored and nothing is looked up. Anyone can put any name in the
 * address, which was considered and accepted. `cleanName` is what stops that
 * being a way to print a slur or a web address next to our own mark.
 */

import { Resvg } from "@resvg/resvg-js";
import { cleanName, parseTier } from "@/lib/challenge/badge";
import { renderBadgeSvg } from "@/lib/challenge/badge-art";
import { interFontFiles } from "@/lib/challenge/badge-fonts";
import type { ChallengeLocale } from "@/lib/challenge/types";

/** Long enough for LinkedIn to cache, short enough that a fix reaches people. */
export const revalidate = 86400;

const SIZE = {
  square: { width: 1080, height: 1080 },
  wide: { width: 1200, height: 630 },
} as const;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = cleanName(url.searchParams.get("n"));
  const tier = parseTier(url.searchParams.get("p"));
  const locale: ChallengeLocale = url.searchParams.get("lang") === "fr" ? "fr" : "en";
  const shape = url.searchParams.get("shape") === "square" ? "square" : "wide";
  const download = url.searchParams.get("download") === "1";
  const wantsSvg = url.searchParams.get("format") === "svg";

  // A missing name or tier is a broken link, not a nameless badge. 404 rather
  // than a picture, so a crawler never caches a half drawn one.
  if (!name || !tier) {
    return new Response("Badge link is incomplete", { status: 404 });
  }

  const svg = renderBadgeSvg({ tier, shape, locale, name });

  if (wantsSvg) {
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=86400",
      },
    });
  }

  const png = new Resvg(svg, {
    // Render at the badge's own size. The SVG carries width and height, but
    // saying it here means a change to the artwork cannot quietly change the
    // dimensions of a social card that platforms have already cached.
    fitTo: { mode: "width", value: SIZE[shape].width },
    font: {
      fontFiles: interFontFiles(),
      loadSystemFonts: false,
      defaultFontFamily: "Inter",
    },
  })
    .render()
    .asPng();

  const headers = new Headers({
    "Content-Type": "image/png",
    "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
  });

  // Content-Disposition rather than a `download` attribute on the link: the
  // attribute is ignored in enough places, in-app browsers especially, that a
  // reader on a phone would just get the picture opened in a new tab with no
  // way back. The header works everywhere.
  if (download) {
    headers.set(
      "Content-Disposition",
      `attachment; filename="claude-code-30-days-badge-${tier}.png"`,
    );
  }

  return new Response(new Uint8Array(png), { headers });
}
