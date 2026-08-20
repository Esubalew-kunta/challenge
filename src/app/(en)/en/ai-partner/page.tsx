import { constructMetadata } from "@/lib/metadata";
import { AiPartnerPage } from "@/components/pages/ai-partner-page";
import { AI_PARTNER } from "@/lib/offer-pages/ai-partner-locale";

/**
 * /en/ai-partner — équivalent anglais de /offre.
 *
 * Lire l'en-tête de `ai-partner.en.ts` avant d'y toucher : la plus grosse
 * section du master (les quatre garanties contractuelles) décrit du contenu qui
 * a été retiré du site français, et sa méta-description l'annonce.
 */

export const metadata = constructMetadata({
  title: AI_PARTNER.en.meta.title,
  description: AI_PARTNER.en.meta.description,
  path: "/en/ai-partner",
});

export default function Page() {
  return <AiPartnerPage locale="en" />;
}
