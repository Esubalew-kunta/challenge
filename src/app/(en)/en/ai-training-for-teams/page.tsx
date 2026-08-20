import { constructMetadata } from "@/lib/metadata";
import { FormationHubPage } from "@/components/pages/formation-hub-page";
import { FORMATION_HUB_CONTENT } from "@/lib/offer-pages/formation-hub-locale";

/**
 * /en/ai-training-for-teams — hub anglais des pages programme.
 *
 * Il manquait alors que ses six pages filles étaient en ligne : les liens vers
 * le parent étaient rabattus sur le catalogue FRANÇAIS par `resolveEnHref`.
 *
 * Le contenu vient de `offer-pages/formation-hub.en.ts` — lire son en-tête
 * avant d'y toucher : le master de cette page décrit un module orphelin, pas la
 * page en ligne, et se trompe sur deux chiffres.
 */

export const metadata = constructMetadata({
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: FORMATION_HUB_CONTENT.en.meta.title,
  description: FORMATION_HUB_CONTENT.en.meta.description,
  path: "/en/ai-training-for-teams",
});

export default function Page() {
  return <FormationHubPage locale="en" />;
}
