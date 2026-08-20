import { constructMetadata } from "@/lib/metadata";
import { TransformationPage } from "@/components/pages/transformation-page";
import { TRANSFORMATION } from "@/lib/offer-pages/transformation-locale";

/**
 * /en/ai-transformation — même gabarit que la page française, appelé avec
 * `locale="en"`. Rien n'est dupliqué : le contenu vit dans
 * `transformation.en.ts`.
 */
export const metadata = constructMetadata({
  title: TRANSFORMATION.en.meta.title,
  description: TRANSFORMATION.en.meta.description,
  path: "/en/ai-transformation",
});

export default function Page() {
  return <TransformationPage locale="en" />;
}
