import { ArrowRight } from "lucide-react";

/**
 * Relance intercalée entre deux sections longues.
 *
 * Les pages longues du site (Forward Deployed Engineer à 5 800 mots, les
 * fiches formation à 2 800) n'offraient que trois points de conversion, tous
 * libellés de la même façon. Le lecteur qui se décide au milieu du texte
 * n'avait nulle part où cliquer avant le pied de page.
 *
 * Chaque relance reprend ce que la section qui précède vient de démontrer :
 * le libellé change avec l'endroit où on le lit, plutôt que de répéter la
 * même formule à trois reprises.
 */
export function InlineCta({
  titre,
  texte,
  label,
  href,
  secondaire,
}: {
  titre: string;
  texte: string;
  label: string;
  href: string;
  secondaire?: { label: string; href: string };
}) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] px-7 py-7 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <p className="text-base font-semibold text-foreground">{titre}</p>
          <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {texte}
          </p>
        </div>
        <div className="mt-5 flex shrink-0 flex-wrap gap-3 md:mt-0">
          <a
            href={href}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {label}
            <ArrowRight className="size-4" />
          </a>
          {secondaire && (
            <a
              href={secondaire.href}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {secondaire.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
