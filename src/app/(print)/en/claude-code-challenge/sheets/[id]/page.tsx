/**
 * One cheat sheet, laid out for A4 and for the screen.
 *
 * Static at build time like every other page here. The reader can print it or
 * save it as PDF from the browser, and the same URL is what the emailed copy
 * links to, so there is one file and one truth rather than a PDF in an inbox
 * quietly going out of date.
 *
 * `noindex`: the sheets repeat what the day pages already say, and two of our
 * own pages competing for the same search is a self-inflicted problem. The day
 * pages are the ones that should rank.
 */

import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { SheetDocView } from "@/components/challenge/sheet-doc";
import { BASE } from "@/lib/challenge";
import { SHEET_DOCS, getSheetDoc } from "@/lib/challenge/sheets";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return SHEET_DOCS.map((s) => ({ id: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const doc = getSheetDoc(id);
  if (!doc)
    return constructMetadata({
      title: "Not found",
      description: "This sheet does not exist.",
      path: BASE,
    });

  return {
    ...constructMetadata({
      title: `${doc.title}, Claude Code in 30 Days`,
      description: doc.strapline,
      path: `${BASE}/sheets/${doc.id}`,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function SheetPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const doc = getSheetDoc(id);
  if (!doc) notFound();

  // No wrapper. This route sits under the (print) root layout, which has no
  // site header, so there is nothing to clear and nothing to hide when the
  // page goes to paper.
  return <SheetDocView doc={doc} />;
}
