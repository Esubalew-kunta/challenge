import { constructMetadata } from "@/lib/metadata";
import { AiConsultingPage } from "@/components/pages/ai-consulting-page";
import { AI_CONSULTING } from "@/lib/offer-pages/ai-consulting-locale";

/**
 * /en/ai-consulting — équivalent anglais de /agence-ia.
 *
 * Lire l'en-tête de `ai-consulting.en.ts` : le master de cette page annonce
 * quatre garanties contractuelles (jusque dans la méta-description) qui
 * n'existent plus, et place le second bureau à Rabat au lieu de Casablanca.
 */

export const metadata = constructMetadata({
  title: AI_CONSULTING.en.meta.title,
  description: AI_CONSULTING.en.meta.description,
  path: "/en/ai-consulting",
});

export default function Page() {
  return <AiConsultingPage locale="en" />;
}
