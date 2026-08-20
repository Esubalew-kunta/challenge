import { constructMetadata } from "@/lib/metadata";
import { TeamPage } from "@/components/pages/team-page";
import { TEAM } from "@/lib/team-locale";

/**
 * /equipe — le gabarit vit dans `components/pages/team-page.tsx` et sert les
 * deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: TEAM.fr.meta.title,
  description: TEAM.fr.meta.description,
  path: "/equipe",
});

export default function Page() {
  return <TeamPage locale="fr" />;
}
