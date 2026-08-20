import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Gauge,
  Home,
  Mail,
  Search,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Page 404 branchée sur le layout racine : le Header et le Footer sont donc
 * déjà là. Sans ce fichier, Next.js sert sa page par défaut, en anglais et
 * sans style, sur un site intégralement francophone.
 *
 * Pas de `constructMetadata` ici : ce helper pose un canonical et laisse
 * l'indexation ouverte, alors qu'une 404 ne doit jamais être indexée ni se
 * déclarer canonique de quoi que ce soit.
 */
export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez nos offres, nos outils gratuits et nos ressources IA.",
  robots: {
    index: false,
    follow: true,
  },
};

/** Une 404 est un point de reprise, pas un cul-de-sac : on propose la suite. */
const destinations = [
  {
    href: "/outils",
    icon: Wrench,
    title: "Outils gratuits",
    detail: "ROI, visibilité IA, opportunités",
  },
  {
    href: "/playbook-ia",
    icon: BookOpen,
    title: "Le Playbook AI-First",
    detail: "54 pages · guide gratuit",
  },
  {
    href: "/diagnostic-ia",
    icon: Gauge,
    title: "Diagnostic IA en 2 min",
    detail: "Votre score sur 24",
  },
  {
    href: "/contact",
    icon: Mail,
    title: "Nous contacter",
    detail: "30 min de diagnostic gratuit",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
          Erreur 404
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Cette page n&apos;existe{" "}
          <span className="text-primary">pas (ou plus)</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Le lien est peut-être erroné, ou la page a été déplacée. Rien n&apos;est
          perdu : voici par où continuer.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="btn-gradient h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 size-4" aria-hidden="true" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <Link href="/blog">
              <Search className="mr-2 size-4" aria-hidden="true" />
              Parcourir le blog
            </Link>
          </Button>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {destinations.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {item.detail}
                  </span>
                </span>
                <ArrowRight
                  className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
