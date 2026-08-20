import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import { playbookContent } from "./playbook-config";
import { playbookChrome } from "./playbook-chrome";
import { playbookContentEn, playbookChromeEn } from "./playbook-config.en";

/**
 * Sélection par langue de /playbook-ia.
 *
 * Type dérivé du bloc FRANÇAIS ici, contrairement aux autres pages : les deux
 * blocs sont structurellement identiques et n'ont aucun champ optionnel
 * divergent, et `Widen` retire les types littéraux qui feraient échouer
 * l'anglais. Même approche que `fde-locale.ts`.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { readonly [K in keyof T]: Widen<T[K]> };

export type PlaybookContent = Widen<typeof playbookContent>;
export type PlaybookChrome = Widen<typeof playbookChrome>;

export const PLAYBOOK: Record<Locale, PlaybookContent> = {
  fr: playbookContent,
  en: withResolvedEnLinks(playbookContentEn) as PlaybookContent,
};

export const PLAYBOOK_CHROME: Record<Locale, PlaybookChrome> = {
  fr: playbookChrome,
  en: playbookChromeEn,
};
