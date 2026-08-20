import { constructMetadata } from "@/lib/metadata";
import { FormationHubPage } from "@/components/pages/formation-hub-page";
import { FORMATION_HUB_CONTENT } from "@/lib/offer-pages/formation-hub-locale";

/**
 * /formation-ia-entreprise — le gabarit vit dans
 * `components/pages/formation-hub-page.tsx` et sert les deux langues. Cette
 * route ne fait plus que les métadonnées ; le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: FORMATION_HUB_CONTENT.fr.meta.title,
  description: FORMATION_HUB_CONTENT.fr.meta.description,
  path: "/formation-ia-entreprise",
});

export default function Page() {
  return <FormationHubPage locale="fr" />;
}
