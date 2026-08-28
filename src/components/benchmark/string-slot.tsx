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

type SlotProps = {
  /** Clé dans STRINGS_FR. */
  k: string;
  /** Valeurs injectées pour les {jetons} du gabarit. */
  values?: Record<string, string | number>;
  className?: string;
  /** Balise de rendu. Par défaut un <span>. */
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div" | "li" | "strong" | "dt" | "dd" | "small" | "b";
};

export function Slot({ k, values, className, as: Tag = "span" }: SlotProps) {
  const text = values ? sf(k, values) : s(k);
  const missing = text.startsWith("⟦") && text.endsWith("⟧");

  // Une chaîne provisoire se lit exactement comme une chaîne validée. C'est
  // tout le risque, donc elle se signale, en développement uniquement.
  const marker = missing
    ? "bm-slot-missing"
    : inDevelopment && isDraft(k)
      ? "bm-slot-draft"
      : "";

  return (
    <Tag
      className={[marker, className].filter(Boolean).join(" ") || undefined}
      title={inDevelopment && isDraft(k) ? `provisoire : ${k}` : undefined}
    >
      {text}
    </Tag>
  );
}
