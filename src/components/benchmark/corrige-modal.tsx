"use client";

/**
 * Le corrigé. Une entrée par question, dans l'ordre où elles ont été servies.
 *
 * Trois pastilles de résultat et non deux : juste, raté, et sans réponse parce
 * que le temps est écoulé. Confondre les deux dernières dirait à quelqu'un
 * qu'il s'est trompé alors qu'il n'a simplement pas répondu.
 *
 * Le lien contextuel n'apparaît que si la question en porte un. C'est le
 * mécanisme de trafic vers les articles, et une entrée sans lien ne doit rien
 * afficher plutôt qu'un lien mort.
 */

import { useEffect } from "react";
import type { AnswerRecord } from "@/lib/benchmark/engine";
import type { TierKey } from "@/lib/benchmark/types";
import { Slot } from "./string-slot";
import { SafeMarkup } from "./safe-markup";

type Props = {
  answers: AnswerRecord[];
  tierLabel: (tier: TierKey) => string;
  onClose: () => void;
};

export function CorrigeModal({ answers, tierLabel, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="verdict-band" role="dialog" aria-modal="true">
      <div className="verdict-card key-card">
        <Slot k="corrige.title" as="h3" />

        <div className="key-body">
          {answers.map((a, i) => (
            <div className="key-item" key={`${i}-${a.q}`}>
              <div className="key-pills">
                <span className={`pill ${a.tier}`}>{tierLabel(a.tier)}</span>
                <Slot
                  className={`pill ${a.outcome === "correct" ? "ok" : "no"}`}
                  k={
                    a.outcome === "correct"
                      ? "corrige.pillCorrect"
                      : a.outcome === "timeout"
                        ? "corrige.pillTimeout"
                        : "corrige.pillWrong"
                  }
                />
              </div>

              <SafeMarkup as="p" className="key-q" text={a.q} />

              <p className="key-line good">
                <Slot
                  k="corrige.correctAnswer"
                  values={{ reponse: a.options[a.answer].text }}
                />
              </p>

              {a.outcome === "wrong" && a.picked !== null && (
                <p className="key-line bad">
                  <Slot
                    k="corrige.yourAnswer"
                    values={{ reponse: a.options[a.picked].text }}
                  />
                </p>
              )}

              {a.outcome === "timeout" && (
                <p className="key-line bad">
                  <Slot k="corrige.pillTimeout" />
                </p>
              )}

              <SafeMarkup as="p" className="key-why" text={a.why} />

              {a.link && (
                <a className="key-link" href={a.link.url}>
                  {a.link.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="form-actions" style={{ justifyContent: "flex-start" }}>
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            <Slot k="corrige.close" />
          </button>
        </div>
      </div>
    </div>
  );
}
