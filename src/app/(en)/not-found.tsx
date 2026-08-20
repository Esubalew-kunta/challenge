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
import { resolveEnHref } from "@/lib/en-links";

/**
 * 404 de l'arbre ANGLAIS.
 *
 * Sans ce fichier, toute URL inconnue sous /en remontait à
 * `src/app/not-found.tsx`, entièrement en français : « Page introuvable »,
 * « Retour à l'accueil », cartes de ressources françaises. Un visiteur anglais
 * qui se trompe d'URL tombait donc sur une page française, et c'est aussi ce
 * que voyait un crawler.
 *
 * Next.js résout `not-found.tsx` par segment : posé à la racine du groupe de
 * routes `(en)`, celui-ci intercepte tout /en/* avant le fichier racine, et
 * hérite du layout anglais (donc du bon `<html lang>`).
 *
 * Pas de `constructMetadata` : ce helper pose un canonical et laisse
 * l'indexation ouverte, alors qu'une 404 ne doit ni être indexée ni se déclarer
 * canonique de quoi que ce soit.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description:
    "This page does not exist or has moved. Find our services, free tools and AI resources.",
  robots: { index: false, follow: true },
};

/** Une 404 est un point de reprise, pas un cul-de-sac. Les cibles passent par
 *  `resolveEnHref` : tant que la page EN n'existe pas, on renvoie vers le FR
 *  plutôt que vers une seconde 404. */
const destinations = [
  {
    href: resolveEnHref("/en/ai-tools"),
    icon: Wrench,
    title: "Free tools",
    detail: "ROI, AI visibility, opportunities",
  },
  {
    href: resolveEnHref("/en/ai-playbook"),
    icon: BookOpen,
    title: "The AI-First Playbook",
    detail: "54 pages · free guide",
  },
  {
    href: resolveEnHref("/en/ai-maturity-assessment"),
    icon: Gauge,
    title: "AI diagnostic in 2 min",
    detail: "Your score out of 24",
  },
  {
    href: resolveEnHref("/en/contact"),
    icon: Mail,
    title: "Contact us",
    detail: "A free 30-minute diagnostic",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">
          Error 404
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
          This page doesn&apos;t{" "}
          <span className="text-primary">exist (any more)</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The link may be wrong, or the page has moved. Nothing is lost — here is
          where to pick up.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="btn-gradient h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <Link href="/en">
              <Home className="mr-2 size-4" aria-hidden="true" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <Link href={resolveEnHref("/en/ai-by-industry")}>
              <Search className="mr-2 size-4" aria-hidden="true" />
              Browse by industry
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
                  <item.icon className="size-5 text-primary" aria-hidden="true" />
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
