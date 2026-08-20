import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ApplicationForm } from "@/components/careers/application-form";
import { siteConfig } from "@/lib/site-config";
import { jobOpenings, getJobRole } from "@/lib/careers/postes";

// Page de conversion, pas de contenu à indexer : noindex plutôt qu'une
// entrée de plus dans le sitemap pour une URL sans substance éditoriale.
export const metadata = {
  ...constructMetadata({
    title: "Postuler — Carrières AI Makers",
    description: "Formulaire de candidature pour les postes ouverts chez AI Makers.",
    path: "/carrieres/postuler",
  }),
  robots: { index: false, follow: false },
};

type PageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function PostulerPage({ searchParams }: PageProps) {
  const { role } = await searchParams;
  const initialRole = role && getJobRole(role) ? role : undefined;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Carrières",
        item: `${siteConfig.url}/carrieres`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Postuler",
        item: `${siteConfig.url}/carrieres/postuler`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/carrieres" className="hover:text-foreground">
              Carrières
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Postuler</span>
          </nav>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Postuler
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Dix minutes : votre parcours, vos liens, votre CV et une lettre de
            motivation en français ou en anglais. Première étape d&apos;une
            présélection en quelques niveaux — on vous dit où vous en êtes à
            chaque fois.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <ApplicationForm roles={jobOpenings} initialRole={initialRole} />
      </section>
    </>
  );
}
