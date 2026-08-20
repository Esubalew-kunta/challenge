import { constructMetadata } from "@/lib/metadata";
import { PlaybookPage } from "@/components/pages/playbook-page";
import { PLAYBOOK_CHROME } from "@/lib/playbook-locale";

/**
 * /playbook-ia — le gabarit vit dans `components/pages/playbook-page.tsx` et
 * sert les deux langues. Le rendu FR est inchangé : la page française reste
 * indexable et au sitemap, seule l'anglaise est gatée.
 */

export const metadata = constructMetadata({
  title: PLAYBOOK_CHROME.fr.metaTitle,
  description: PLAYBOOK_CHROME.fr.metaDescription,
  path: "/playbook-ia",
});

export default function Page() {
  return <PlaybookPage locale="fr" />;
}
