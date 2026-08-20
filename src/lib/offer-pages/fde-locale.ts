import type { Locale } from "../i18n";
import { withResolvedEnLinks } from "../en-links";
import { fdeContent, fdePage } from "./fde";
import { fdeContentEn, fdePageEn } from "./fde.en";

/**
 * Élargit les types littéraux d'un bloc figé en `as const`.
 *
 * Les modules de contenu sont `as const` : `typeof fdeContent` porte les
 * chaînes FRANÇAISES comme types littéraux et rejette l'anglais. La page
 * transformation résout ça avec une interface écrite à la main ; ici le bloc
 * fait 817 lignes sur 18 sections, donc on dérive la forme au lieu de la
 * recopier — et TypeScript vérifie quand même que les deux langues ont
 * exactement la même structure, champ par champ.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : T extends object
          ? { readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type FdeContent = Widen<typeof fdeContent>;
export type FdePageContent = Widen<typeof fdePage>;

export const FDE: Record<Locale, FdeContent> = {
  fr: fdeContent,
  en: withResolvedEnLinks(fdeContentEn satisfies FdeContent),
};

export const FDE_PAGE: Record<Locale, FdePageContent> = {
  fr: fdePage,
  en: withResolvedEnLinks(fdePageEn satisfies FdePageContent),
};
