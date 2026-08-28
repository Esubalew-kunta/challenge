"use client";

/**
 * Le verdict de fin de round. Cinq cas, dont deux plafonds.
 *
 * Il n'apparaît qu'après les rounds 1 et 2. Après le round 3 il n'y a pas de
 * round suivant, donc pas de verdict : le moteur le signale en renvoyant
 * `nextPalier: null`, et cet écran ne se monte pas dans ce cas.
 *
 * Chaque verdict annonce le palier suivant. C'est le point du changement de
 * mécanique : un maintien n'est pas du surplace, la difficulté avance quand
 * même.
 */

import type { Verdict } from "@/lib/benchmark/engine";
import type { VerdictCase } from "@/lib/benchmark/types";
import { Slot } from "./string-slot";

/** La couleur de la pastille. Un plafond tenu se lit comme une réussite, un
 *  plancher tenu comme un échec, et un maintien reste neutre. */
const TAG_CLASS: Record<VerdictCase, string> = {
  montee: "up",
  plafond: "up",
  descente: "down",
  plancher: "down",
  maintien: "hold",
};

type Props = {
  verdict: Verdict;
  fromLabel: string;
  toLabel: string;
  toIsExpert: boolean;
  /** Ce que rapporte une bonne réponse au round suivant. */
  nextPoints: number;
  nextRound: number;
  onContinue: () => void;
};

export function VerdictModal({
  verdict,
  fromLabel,
  toLabel,
  toIsExpert,
  nextPoints,
  nextRound,
  onContinue,
}: Props) {
  const c = verdict.case;

  return (
    <div className="verdict-band" role="dialog" aria-modal="true">
      <div className="verdict-card">
        <Slot k={`verdict.${c}.pill`} className={`verdict-tag ${TAG_CLASS[c]}`} />
        <Slot
          k={`verdict.${c}.title`}
          as="h3"
          values={{ n: verdict.correct }}
        />

        <div className="verdict-move">
          <span className="from">{fromLabel}</span>
          <span className="arrow" aria-hidden="true">
            →
          </span>
          <span className={toIsExpert ? "to exp" : "to"}>{toLabel}</span>
        </div>

        {/* Chaque verdict annonce le palier suivant, le niveau suivant et ce
            qu'il rapporte : c'est ce qui empêche un maintien de se lire comme
            du surplace. Le pack met tout dans le paragraphe, donc il n'y a rien
            à afficher à côté. */}
        <Slot
          k={`verdict.${c}.body`}
          as="p"
          values={{
            n: verdict.correct,
            p: verdict.nextPalier ?? "",
            niveau: toLabel,
            pts: nextPoints,
          }}
        />

        <div className="form-actions" style={{ justifyContent: "center" }}>
          <button type="button" className="btn btn-primary" onClick={onContinue}>
            <Slot k="verdict.cta" values={{ n: nextRound }} />
          </button>
        </div>
      </div>
    </div>
  );
}
