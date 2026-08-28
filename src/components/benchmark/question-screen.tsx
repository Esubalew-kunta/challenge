"use client";

/**
 * L'écran de question : le chronomètre, la question, les quatre options, puis
 * l'explication.
 *
 * **Le chronomètre compte sur l'horloge, pas sur des battements.** Un onglet en
 * arrière-plan voit ses minuteries ralenties par le navigateur ; compter les
 * tics donnerait plus de 45 secondes à qui change d'onglet. Le PRD demande
 * explicitement que le temps continue de courir, donc on lit la date à chaque
 * image et on compare.
 *
 * L'entrée se verrouille au premier clic. Le temps écoulé est un cas distinct
 * d'une mauvaise réponse : les deux valent zéro, mais on ne dit pas la même
 * chose à quelqu'un qui s'est trompé et à quelqu'un qui n'a pas répondu.
 */

import { useEffect, useRef, useState } from "react";
import { POINTS, SECONDS_PER_QUESTION } from "@/lib/benchmark/engine";
import type { AnswerRecord } from "@/lib/benchmark/engine";
import type { DrawnQuestion, Palier, TierKey } from "@/lib/benchmark/types";
import { sf } from "@/lib/benchmark/strings.fr";
import { Slot } from "./string-slot";
import { SafeMarkup } from "./safe-markup";

const LETTERS = ["question.optionA", "question.optionB", "question.optionC", "question.optionD"];

type Props = {
  drawn: DrawnQuestion;
  round: number;
  palier: Palier;
  qInRound: number;
  tierLabel: string;
  /** Les réponses du round courant, pour la pagination en points. */
  roundAnswers: AnswerRecord[];
  /** Renseigné une fois la réponse donnée ou le temps écoulé. */
  revealed: { picked: number | null; outcome: AnswerRecord["outcome"] } | null;
  onAnswer: (picked: number | null) => void;
  onNext: () => void;
  nextLabelKey: string;
};

/**
 * Le chronomètre. Il est **remonté à chaque question** par sa clé plutôt que
 * remis à zéro depuis un effet : l'état initial d'un composant qui vient de
 * naître est déjà la remise à zéro, et ça évite un rendu en cascade.
 */
function Timer({ active, onExpire }: { active: boolean; onExpire: () => void }) {
  const [left, setLeft] = useState(SECONDS_PER_QUESTION);
  const expired = useRef(false);

  // Le rappel le plus récent, rangé dans un ref par un effet et jamais pendant
  // le rendu : la minuterie ne doit pas redémarrer parce qu'une fonction a
  // changé d'identité entre deux rendus.
  const latest = useRef(onExpire);
  useEffect(() => {
    latest.current = onExpire;
  });

  useEffect(() => {
    if (!active) return;

    const startedAt = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - startedAt) / 1000;
      const remaining = Math.max(0, SECONDS_PER_QUESTION - elapsed);
      setLeft(remaining);
      if (remaining <= 0 && !expired.current) {
        expired.current = true;
        latest.current();
      }
    };

    const id = window.setInterval(tick, 200);
    return () => window.clearInterval(id);
  }, [active]);

  const seconds = Math.ceil(left);
  const fill =
    seconds <= 5 ? "timer-fill crit" : seconds <= 15 ? "timer-fill warn" : "timer-fill";

  return (
    <div className="timer">
      <Slot k="question.timerLabel" />
      <span className="timer-track">
        <span
          className={fill}
          style={{ transform: `scaleX(${active ? left / SECONDS_PER_QUESTION : 0})` }}
        />
      </span>
      <span className="timer-num">{active ? seconds : 0}</span>
    </div>
  );
}

export function QuestionScreen({
  drawn,
  round,
  palier,
  qInRound,
  tierLabel,
  roundAnswers,
  revealed,
  onAnswer,
  onNext,
  nextLabelKey,
}: Props) {
  return (
    <section className="screen">
      <div className="shell quiz-wrap">
        <Timer
          key={`${round}-${qInRound}`}
          active={revealed === null}
          onExpire={() => onAnswer(null)}
        />

        <div className="qcard">
          <div className="qmeta">
            <span className={`pill ${drawn.tier as TierKey}`}>{tierLabel}</span>
            <Slot
              k="question.points"
              className="pill pts"
              values={{ pts: POINTS[drawn.tier] }}
            />
            <Slot
              k="question.position"
              className="pill"
              values={{ n: round, i: qInRound + 1, p: palier }}
            />
          </div>

          <SafeMarkup as="p" className="qtext" text={drawn.q} />

          <div className="opts">
            {drawn.options.map((option, i) => {
              let state = "";
              if (revealed) {
                if (i === drawn.answer) state = " correct";
                else if (i === revealed.picked) state = " wrong";
                else state = " muted";
              }
              return (
                <button
                  key={option.text}
                  type="button"
                  className={`opt${state}`}
                  disabled={revealed !== null}
                  onClick={() => onAnswer(i)}
                >
                  <Slot k={LETTERS[i]} className="key" />
                  <span className="label">{option.text}</span>
                </button>
              );
            })}
          </div>

          {revealed && (
            <div className={`why ${revealed.outcome === "correct" ? "ok" : "no"}`}>
              <Slot
                className="verdict"
                k={
                  revealed.outcome === "correct"
                    ? "question.resultCorrect"
                    : revealed.outcome === "timeout"
                      ? "question.resultTimeout"
                      : "question.resultWrong"
                }
                values={{ pts: POINTS[drawn.tier] }}
              />
              <SafeMarkup text={drawn.why} />
              {drawn.link && (
                <a className="key-link" href={drawn.link.url}>
                  {drawn.link.label}
                </a>
              )}
            </div>
          )}

          <div className="qfoot">
            <div className="qdots" aria-hidden="true">
              {[0, 1, 2].map((i) => {
                const answer = roundAnswers[i];
                const cls = answer
                  ? answer.outcome === "correct"
                    ? "ok"
                    : "no"
                  : i === qInRound
                    ? "now"
                    : undefined;
                return <i key={i} className={cls} />;
              })}
            </div>
            {revealed && (
              <button type="button" className="btn btn-primary" onClick={onNext}>
                <Slot k={nextLabelKey} />
              </button>
            )}
          </div>
        </div>

        <p className="sr" role="status" aria-live="polite">
          {sf("question.liveRegion", {
            n: round,
            i: qInRound + 1,
            niveau: tierLabel,
            p: palier,
          })}
        </p>
      </div>
    </section>
  );
}
