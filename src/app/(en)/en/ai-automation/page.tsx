import { constructMetadata } from "@/lib/metadata";
import { AiAutomationPage } from "@/components/pages/ai-automation-page";
import { AI_AUTOMATION } from "@/lib/offer-pages/ai-automation-locale";

/**
 * /en/ai-automation — équivalent anglais de /automatisation-ia-workflow.
 *
 * Propriétaire côté anglais de deux questions que d'autres pages lui
 * délèguent : « comment automatiser un processus » (/en/ai-consulting) et la
 * mesure du ROI.
 */

export const metadata = constructMetadata({
  title: AI_AUTOMATION.en.meta.title,
  description: AI_AUTOMATION.en.meta.description,
  path: "/en/ai-automation",
});

export default function Page() {
  return <AiAutomationPage locale="en" />;
}
