import { constructMetadata } from "@/lib/metadata";
import { AiConsultingPage } from "@/components/pages/ai-consulting-page";
import { AI_CONSULTING } from "@/lib/offer-pages/ai-consulting-locale";

/**
 * /agence-ia — le gabarit vit dans `components/pages/ai-consulting-page.tsx`
 * et sert les deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: AI_CONSULTING.fr.meta.title,
  description: AI_CONSULTING.fr.meta.description,
  path: "/agence-ia",
});

export default function Page() {
  return <AiConsultingPage locale="fr" />;
}
