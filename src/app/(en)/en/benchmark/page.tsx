/**
 * The Makers Benchmark, English.
 *
 * Same single route, same client component, same engine: the only difference
 * is the locale handed to `<BenchmarkApp>`. Everything the reader sees comes
 * from `strings.en.ts` and `content/*.en.ts`.
 *
 * **The page is not built while the English content is missing.** Not out of
 * caution: an empty string throws in a production build by design, so a page
 * wired to a half-filled table would fail `npm run build` and take the whole
 * site down with it, not just this URL. `localeIsComplete` and
 * `bankIsDelivered` are the two conditions, checked at module load, and the
 * route 404s in production until both hold.
 *
 * In development the page renders whatever exists, with `⟦key⟧` in the gaps.
 * That is the point of stage one: the seam is walkable before the translation
 * lands.
 *
 * When the content is in, three lines go with it: this gate, the `robots`
 * entry below, and the route's move from `EN_GATED` to `EN_PUBLISHED` in
 * `lib/i18n.ts`.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { localeIsComplete, s } from "@/lib/benchmark/strings";
import { bankIsDelivered } from "@/lib/benchmark/content";
import {
  BenchmarkApp,
  type ChallengeBanner,
} from "@/components/benchmark/benchmark-app";
import "../../../(fr)/benchmark/benchmark.css";

/* Declared above the metadata: metadata is evaluated when the module loads, so
   a constant declared below it would be read before it exists. */
const LOCALE = "en" as const;

/** Is there enough English to serve? Strings and bank are separate deliveries
 *  and either one missing is enough to keep the page out of production. */
const READY = localeIsComplete(LOCALE) && bankIsDelivered(LOCALE);

const inDevelopment = process.env.NODE_ENV !== "production";

/* The title and description are draft strings, like their French pair, so the
   page stays out of the index until the copy is approved. Same line to delete
   as on the French side, at the same time. */
export const metadata: Metadata = READY
  ? {
      ...constructMetadata({
        title: s("meta.title", LOCALE),
        description: s("meta.description", LOCALE),
        path: "/en/benchmark",
      }),
      robots: { index: false, follow: false },
    }
  : { title: "Benchmark", robots: { index: false, follow: false } };

type Search = Record<string, string | string[] | undefined>;

const one = (value: string | string[] | undefined): string | null =>
  typeof value === "string" && value.trim() !== "" ? value : null;

/* The challenge link keeps its French parameter names. They are keys, not
   copy: a link shared from the French page has to open the English one and
   still say who to beat. Translating `defi` to `challenge` would split the
   two pages into two link formats and quietly break every link already out
   there. */
function readChallenge(params: Search): ChallengeBanner | null {
  const code = one(params.defi);
  const nom = one(params.nom);
  const score = one(params.score);
  const niveau = one(params.niveau);

  if (!code || !/^[A-Z0-9]{4}$/.test(code)) return null;
  if (!nom || !score || !niveau) return null;
  if (!/^\d{1,3}$/.test(score)) return null;

  return { nom: nom.slice(0, 80), score, niveau: niveau.slice(0, 40) };
}

export default async function BenchmarkPageEn({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  if (!READY && !inDevelopment) notFound();

  const params = await searchParams;
  return <BenchmarkApp challenge={readChallenge(params)} locale={LOCALE} />;
}
