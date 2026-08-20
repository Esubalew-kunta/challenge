import { constructMetadata } from "@/lib/metadata";
import { TeamPage } from "@/components/pages/team-page";
import { TEAM } from "@/lib/team-locale";

/**
 * /en/team — équivalent anglais de /equipe.
 *
 * Les profils viennent de `formateurs.en.ts` et de `FDE.en.team`, déjà
 * traduits. Voir l'en-tête de `team.en.ts` : le master date d'une époque où
 * l'équipe comptait 6 personnes.
 */

export const metadata = constructMetadata({
  title: TEAM.en.meta.title,
  description: TEAM.en.meta.description,
  path: "/en/team",
});

export default function Page() {
  return <TeamPage locale="en" />;
}
