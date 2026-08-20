import { constructMetadata } from "@/lib/metadata";
import { AiPartnerPage } from "@/components/pages/ai-partner-page";
import { AI_PARTNER } from "@/lib/offer-pages/ai-partner-locale";

/**
 * /offre — le gabarit vit dans `components/pages/ai-partner-page.tsx` et sert
 * les deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: AI_PARTNER.fr.meta.title,
  description: AI_PARTNER.fr.meta.description,
  path: "/offre",
});

export default function Page() {
  return <AiPartnerPage locale="fr" />;
}
