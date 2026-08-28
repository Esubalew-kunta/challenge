/**
 * Un emplacement de chaîne.
 *
 * Le composant ne sait pas écrire de texte : il lit une clé dans la couche de
 * chaînes et rend ce qu'il y trouve. Tant que le pack de contenu n'a pas
 * fourni la valeur, l'emplacement s'affiche en évidence en développement, et
 * la construction du site échoue en production. Aucun écran ne peut donc
 * partir en ligne avec un texte approximatif qui ressemblerait à du texte
 * validé.
 */

import { isDraft, s, sf } from "@/lib/benchmark/strings.fr";

const inDevelopment = process.env.NODE_ENV !== "production";

/**
 * Le soulignement pointillé des chaînes provisoires est un outil de relecture,
 * pas un élément d'interface : il faisait passer une démo finie pour un écran
 * cassé. Il est donc éteint par défaut et se rallume à la demande, avec
 * BENCHMARK_SHOW_DRAFTS=1.
 *
 * Le garde-fou qui compte, lui, ne bouge pas : une construction de production
 * refuse toujours de compiler tant qu'une chaîne provisoire n'est pas validée.
 */
const showDraftMarks =
  inDevelopment && process.env.NEXT_PUBLIC_BENCHMARK_SHOW_DRAFTS === "1";

type SlotProps = {
  /** Clé dans STRINGS_FR. */
  k: string;
  /** Valeurs injectées pour les {jetons} du gabarit. */
  values?: Record<string, string | number>;
  className?: string;
  /** Rend la mention atteignable au clavier. Une note estompée qui ne se
   *  révèle qu'au survol est invisible pour qui n'a pas de souris. */
  tabIndex?: number;
  /** Balise de rendu. Par défaut un <span>. */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div" | "li" | "strong" | "dt" | "dd" | "small" | "b";
};

export function Slot({ k, values, className, tabIndex, as: Tag = "span" }: SlotProps) {
  const text = values ? sf(k, values) : s(k);
  const missing = text.startsWith("⟦") && text.endsWith("⟧");

  // Une chaîne provisoire se lit exactement comme une chaîne validée. C'est
  // tout le risque, donc elle se signale, en développement uniquement.
  const marker = missing
    ? "bm-slot-missing"
    : showDraftMarks && isDraft(k)
      ? "bm-slot-draft"
      : "";

  return (
    <Tag
      tabIndex={tabIndex}
      className={[marker, className].filter(Boolean).join(" ") || undefined}
      title={showDraftMarks && isDraft(k) ? `provisoire : ${k}` : undefined}
    >
      {text}
    </Tag>
  );
}
