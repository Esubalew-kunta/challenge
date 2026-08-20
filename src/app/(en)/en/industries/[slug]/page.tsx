import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { SectorPage } from "@/components/pages/sector-page";
import { secteursEn, getSecteurEn } from "@/lib/secteurs.en";

/**
 * /en/industries/[slug] — équivalent anglais de /secteurs/[slug].
 *
 * Le hub anglais est `/en/ai-by-industry` alors que ses pages vivent sous
 * `/en/industries/*` : les deux préfixes diffèrent volontairement, c'est ce que
 * disent les masters et ce que ROUTE_MAP enregistre. Ne pas « harmoniser ».
 *
 * Le contenu vient de `secteurs.en.ts`, le gabarit est partagé avec le FR.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return secteursEn.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const secteur = getSecteurEn(slug);
  if (!secteur) {
    return constructMetadata({
      title: "AI by Industry",
      description: "AI transformation, sector by sector.",
      path: "/en/ai-by-industry",
    });
  }
  return constructMetadata({
    title: secteur.metaTitle,
    description: secteur.metaDescription,
    path: `/en/industries/${secteur.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!getSecteurEn(slug)) notFound();
  return <SectorPage locale="en" slug={slug} />;
}
