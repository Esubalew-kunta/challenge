import { constructMetadata } from "@/lib/metadata";
import { AiAutomationProcessPage } from "@/components/pages/ai-automation-process-page";
import { automationProcessMeta } from "@/lib/offer-pages/ai-automation-process";

/**
 * /automatisation-ia-workflow — propriétaire commercial canonique de
 * « automatisation des processus métier ».
 *
 * Le gabarit est propre à cette page (`ai-automation-process-page.tsx`).
 * L'anglais `/en/ai-automation` reste sur l'ancien gabarit partagé tant
 * qu'aucune copie anglaise n'a été validée.
 *
 * Le titre n'inclut PAS « | AI Makers » : le suffixe vient du template du
 * layout (fr).
 */

export const metadata = constructMetadata({
  title: automationProcessMeta.title,
  description: automationProcessMeta.description,
  path: "/automatisation-ia-workflow",
});

export default function Page() {
  return <AiAutomationProcessPage />;
}
