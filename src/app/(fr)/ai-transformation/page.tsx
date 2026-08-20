import { constructMetadata } from "@/lib/metadata";
import { AiTransformationFrPage } from "@/components/pages/ai-transformation-fr-page";
import { aiTransformationMeta } from "@/lib/offer-pages/ai-transformation-fr";

/**
 * /ai-transformation — propriétaire FR de l'intention « transformation IA en entreprise ».
 *
 * Le gabarit français est volontairement séparé du miroir anglais afin de
 * préserver la règle FR-first : l'anglais reste inchangé jusqu'à traduction
 * de la version française approuvée.
 *
 * Le titre n'inclut PAS « | AI Makers » : le suffixe vient du layout FR.
 */
export const metadata = constructMetadata({
  title: aiTransformationMeta.title,
  description: aiTransformationMeta.description,
  path: "/ai-transformation",
});

export default function Page() {
  return <AiTransformationFrPage />;
}
