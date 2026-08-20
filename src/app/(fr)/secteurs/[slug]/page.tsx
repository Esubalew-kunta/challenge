import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { SectorPage } from "@/components/pages/sector-page";
import { secteurs, getSecteur } from "@/lib/secteurs";

/**
 * /secteurs/[slug] — le gabarit vit dans `components/pages/sector-page.tsx` et
 * sert les deux langues. Cette route ne fait plus que le routage et les
 * métadonnées ; le rendu français est inchangé.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const secteur = getSecteur(slug);
  if (!secteur) {
    return constructMetadata({
      title: "Secteurs",
      description: "Transformation IA par secteur.",
      path: "/secteurs",
    });
  }
  return constructMetadata({
    title: secteur.metaTitle,
    description: secteur.metaDescription,
    path: `/secteurs/${secteur.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!getSecteur(slug)) notFound();
  return <SectorPage locale="fr" slug={slug} />;
}
