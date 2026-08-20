import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { FormationPage } from "@/components/pages/formation-page";
import { formationsEn, getFormationEn } from "@/lib/formations.en";

/**
 * /en/ai-training-for-teams/[slug] — équivalent anglais des pages programme.
 *
 * Le contenu vient de `formations.en.ts` (socle uniquement : les blocs
 * optionnels d'expansion SEO ne sont pas couverts par les masters, donc ces
 * sections ne s'affichent pas ici). Gabarit partagé avec le FR.
 */

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return formationsEn.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormationEn(slug);
  if (!formation) {
    return constructMetadata({
      title: "AI Training for Teams",
      description: "AI training programs for companies.",
      path: "/en/ai-training-for-teams",
    });
  }
  return constructMetadata({
    title: formation.seoTitle ?? formation.name,
    description: formation.seoDescription ?? formation.resume,
    path: `/en/ai-training-for-teams/${formation.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!getFormationEn(slug)) notFound();
  return <FormationPage locale="en" slug={slug} />;
}
