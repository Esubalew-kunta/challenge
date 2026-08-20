import { constructMetadata } from "@/lib/metadata";
import { FdePage } from "@/components/pages/fde-page";

/**
 * /en/forward-deployed-engineer — même gabarit, appelé avec `locale="en"`.
 * Le contenu bilingue vit dans `FdePage` afin de garder l'intention alignée.
 */
export const metadata = constructMetadata({
  title: "Forward Deployed Engineer: role and model",
  description: "What a Forward Deployed Engineer does, how the role differs from consultants and AI engineers, and how embedded delivery works inside enterprise teams.",
  path: "/en/forward-deployed-engineer",
});

export default function Page() {
  return <FdePage locale="en" />;
}
