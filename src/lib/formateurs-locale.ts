import type { Locale } from "./i18n";
import { formateurs, type Formateur } from "./formations";
import { formateursEn } from "./formateurs.en";

/** Grille des formateurs dans la langue de la page. */
export function getFormateurs(locale: Locale): readonly Formateur[] {
  return locale === "en" ? formateursEn : formateurs;
}
