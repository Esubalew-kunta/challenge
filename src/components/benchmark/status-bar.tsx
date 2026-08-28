"use client";

/**
 * La barre de statut, visible pendant tout le parcours.
 *
 * Session, track, round, niveau, palier, score. Le niveau est dessiné en trois
 * points reliés par des pointillés, allumés jusqu'à la position courante, en
 * ambre à l'expert.
 *
 * Le palier est le seul ajout du PRD par rapport à l'artefact, et il est là
 * pour la même raison que partout ailleurs : sans lui, deux rounds au même
 * niveau se ressemblent, alors qu'ils ne servent pas les mêmes questions.
 */

import { TIERS } from "@/lib/benchmark/engine";
import type { Palier, TierKey } from "@/lib/benchmark/types";
import { s } from "@/lib/benchmark/strings.fr";
import { Slot } from "./string-slot";

type Props = {
  runCode: string;
  trackCode: string;
  round: number;
  palier: Palier;
  tier: TierKey;
  tierLabel: string;
  score: number;
};

export function StatusBar({
  runCode,
  trackCode,
  round,
  palier,
  tier,
  tierLabel,
  score,
}: Props) {
  const reached = TIERS.indexOf(tier);

  return (
    <div className="statusbar">
      <div className="shell status-row">
        <div className="status-item">
          <Slot k="status.session" className="k" />
          <span className="v">{runCode}</span>
        </div>
        <div className="status-item">
          <Slot k="status.track" className="k" />
          <span className="v">{trackCode}</span>
        </div>
        <div className="status-item">
          <Slot k="status.round" className="k" />
          <span className="v">{round}/3</span>
        </div>
        <div className="status-item">
          <Slot k="status.niveau" className="k" />
          {/* L'échelle est l'indicateur de niveau : elle porte le même nom que
              lui, pas un second inventé pour l'occasion. */}
          <span className="ladder" aria-label={s("status.niveau")}>
            {TIERS.map((step, i) => (
              <span key={step} style={{ display: "contents" }}>
                {i > 0 && <b className="seg" />}
                <i
                  className={
                    i <= reached
                      ? `lit${step === "expert" && tier === "expert" ? " exp" : ""}`
                      : undefined
                  }
                />
              </span>
            ))}
            <span className="lbl">{tierLabel}</span>
          </span>
        </div>
        {/* Seule entrée de la barre dont le pack écrit la valeur dans la
            chaîne : « Palier {n}/3 » d'un bloc, pas un libellé et un chiffre. */}
        <div className="status-item">
          <Slot k="status.palier" className="v v-palier" values={{ n: palier }} />
        </div>
        <div className="status-spacer" />
        <div className="status-item">
          <Slot k="status.score" className="k" />
          <span className="v">{score}</span>
        </div>
      </div>
    </div>
  );
}
