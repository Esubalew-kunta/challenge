"use client";

/**
 * L'écran d'accueil.
 *
 * Quatre statistiques, **cinq** règles et non quatre, et le bandeau de défi
 * quand on arrive par le lien d'un collègue. La troisième règle est la nouvelle :
 * chaque round tape plus fort, donc se maintenir fait quand même avancer d'un
 * palier.
 */

import { Slot } from "./string-slot";

const STATS = [1, 2, 3, 4] as const;
const RULES = [1, 2, 3, 4, 5] as const;

type Props = {
  onStart: () => void;
  /** Renseigné quand la page est ouverte depuis un lien de défi valide. */
  challenge: { nom: string; score: string; niveau: string } | null;
};

export function Landing({ onStart, challenge }: Props) {
  return (
    <section className="screen">
      <div className="shell intro">
        <span className="brandmark">
          <span className="dot" />
          AI Makers
        </span>

        <h1>
          <Slot k="landing.headline1" as="span" />
          <br />
          <Slot k="landing.headline2" as="span" className="accent" />
        </h1>

        <Slot k="landing.lede" as="p" className="lede" />

        {challenge && (
          <Slot k="landing.challengedBy" as="p" className="challenged" values={challenge} />
        )}

        <dl className="spec-grid">
          {STATS.map((n) => (
            <div className="spec" key={n}>
              <Slot k={`landing.stat${n}.label`} as="dt" />
              <dd>
                <Slot k={`landing.stat${n}.value`} as="span" />
                <Slot k={`landing.stat${n}.sub`} as="small" />
              </dd>
            </div>
          ))}
        </dl>

        {/* Une liste numérotée, là où l'artefact empile cinq paragraphes.
            Cinq blocs gris de même poids ne se lisent pas : rien ne dit où une
            règle finit et où la suivante commence, et le français les rend plus
            longues que l'anglais autour duquel l'artefact a été dessiné. Les
            numéros sont posés par CSS, donc aucune chaîne n'est inventée ici. */}
        <ol className="rules">
          {RULES.map((n) => (
            <Slot key={n} k={`landing.rule${n}`} as="li" />
          ))}
        </ol>

        <div className="intro-cta">
          <button type="button" className="btn btn-primary" onClick={onStart}>
            <Slot k="landing.cta" />
          </button>
          <Slot k="landing.ctaNote" as="span" className="intro-note" />
        </div>
      </div>
    </section>
  );
}
