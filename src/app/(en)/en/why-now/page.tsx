import { constructMetadata } from "@/lib/metadata";
import { ManifestePage } from "@/components/pages/manifeste-page";
import { MANIFESTE } from "@/lib/offer-pages/manifeste-locale";

/**
 * /en/why-now — équivalent anglais du manifeste.
 *
 * `/en/ai-transformation` liait déjà « Read why now » vers cette URL :
 * `resolveEnHref` le rabattait sur la page française. Le lien se corrige de
 * lui-même maintenant que la route entre dans EN_PUBLISHED.
 *
 * Lire l'en-tête de `manifeste.en.ts` avant d'y toucher : le master ajoute une
 * garantie contractuelle que le FR ne promet pas, et un chiffre Bpifrance est
 * en écart avec la source citée — écart qui existe aussi côté français.
 */

export const metadata = constructMetadata({
  title: MANIFESTE.en.meta.title,
  description: MANIFESTE.en.meta.description,
  path: "/en/why-now",
});

export default function Page() {
  return <ManifestePage locale="en" />;
}
