/**
 * Une fiche française, mise en page pour l'A4 et pour l'écran.
 *
 * Le pendant exact de `(print)/en/claude-code-challenge/sheets/[id]`, avec la
 * même mise en page et le même `noindex`. Les fiches répètent ce que les pages
 * de jour disent déjà, et deux de nos pages qui se disputent la même recherche
 * est un problème que l'on se crée soi-même. Ce sont les pages de jour qui
 * doivent ressortir.
 *
 * Les identifiants ici finissent par `-fr`, donc l'adresse d'une fiche
 * française ne peut pas se confondre avec celle de son équivalent anglais, ni
 * dans le stockage, ni dans la base.
 */

import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { SheetDocView } from "@/components/challenge/sheet-doc";
import { BASE_FR } from "@/lib/challenge/index.fr";
import { SHEET_DOCS_FR, getSheetDocFr } from "@/lib/challenge/sheets.fr";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return SHEET_DOCS_FR.map((s) => ({ id: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const doc = getSheetDocFr(id);
  if (!doc)
    return constructMetadata({
      title: "Introuvable",
      description: "Cette fiche n'existe pas.",
      path: BASE_FR,
    });

  return {
    ...constructMetadata({
      title: `${doc.title} | Claude Code en 30 jours`,
      description: doc.strapline,
      path: `${BASE_FR}/fiches/${doc.id}`,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function SheetPageFr({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  const doc = getSheetDocFr(id);
  if (!doc) notFound();

  // Pas d'habillage. Cette route vit sous le layout racine (print-fr), qui n'a
  // pas d'en-tête de site : il n'y a donc rien à masquer au moment d'imprimer.
  return <SheetDocView doc={doc} locale="fr" />;
}
