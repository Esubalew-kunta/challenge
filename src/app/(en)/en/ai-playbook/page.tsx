import { constructMetadata } from "@/lib/metadata";
import { PlaybookPage } from "@/components/pages/playbook-page";
import { PLAYBOOK_CHROME } from "@/lib/playbook-locale";

/**
 * /en/ai-playbook — équivalent anglais, VOLONTAIREMENT NON INDEXÉ.
 *
 * Les chiffres d'accroche de cette page (88%, 5%, 700 Mds $, 30%, 95%, 50/63%)
 * n'ont aucune source dans le dépôt, et le master les marque tous
 * `[to validate]`. Décision du propriétaire : livrer la page, la garder hors
 * sitemap et hors index tant que les chiffres ne sont pas validés
 * (`docs/EN-LAUNCH.md` §4).
 *
 * Le `robots` ci-dessous et l'appartenance à `EN_GATED` (i18n.ts) vont
 * ENSEMBLE : une page noindex listée au sitemap enverrait deux signaux
 * contradictoires. Pour publier : retirer le `robots` ici ET déplacer la route
 * de `EN_GATED` vers `EN_PUBLISHED`.
 */

export const metadata = {
  ...constructMetadata({
    title: PLAYBOOK_CHROME.en.metaTitle,
    description: PLAYBOOK_CHROME.en.metaDescription,
    path: "/en/ai-playbook",
  }),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <PlaybookPage locale="en" />;
}
