import { constructMetadata } from "@/lib/metadata";
import { AiOsPage } from "@/components/pages/ai-os-page";
import { AI_OS } from "@/lib/offer-pages/ai-os-locale";

/**
 * /en/ai-operating-system — équivalent anglais. Même slug des deux côtés :
 * « AI Operating System » est le nom du concept, pas une expression à traduire.
 */

export const metadata = constructMetadata({
  title: AI_OS.en.meta.title,
  description: AI_OS.en.meta.description,
  path: "/en/ai-operating-system",
});

export default function Page() {
  return <AiOsPage locale="en" />;
}
