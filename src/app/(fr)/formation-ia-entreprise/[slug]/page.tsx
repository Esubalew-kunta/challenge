import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { FormationPage } from "@/components/pages/formation-page";
import { formations, getFormation } from "@/lib/formations";

/**
 * /formation-ia-entreprise/[slug] — le gabarit vit dans
 * `components/pages/formation-page.tsx` et sert les deux langues. Cette route
 * ne fait plus que le routage et les métadonnées ; le rendu FR est inchangé.
 */

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const formation = getFormation(slug);
  if (!formation) {
    return constructMetadata({
      title: "Formation IA",
      description: "Formation IA pour entreprises.",
      path: "/formation-ia-entreprise",
    });
  }
  // Pas de suffixe écrit à la main : le template du layout ajoute déjà
  // « | AI Makers ».
  return constructMetadata({
    title: formation.seoTitle ?? formation.name,
    description: formation.seoDescription ?? formation.resume,
    path: `/formation-ia-entreprise/${formation.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!getFormation(slug)) notFound();
  return <FormationPage locale="fr" slug={slug} />;
}
