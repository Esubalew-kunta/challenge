"use client";

/**
 * Le Benchmark des Makers : l'orchestrateur.
 *
 * Une seule route, aucun rechargement. Accueil, onboarding, question, verdict,
 * carte de score, corrigé et classement sont des états de ce composant. C'est
 * aussi pourquoi un rafraîchissement en cours de session perd la session, ce
 * que la section 15 du PRD accepte pour la v1.
 *
 * Aucun texte n'est écrit ici. Tout passe par <Slot>, qui lit la couche de
 * chaînes, et une chaîne que le pack de contenu n'a pas fournie se voit
 * immédiatement en développement.
 */

import { useCallback, useRef, useState } from "react";
import {
  POINTS,
  ROUNDS,
  advanceRound,
  drawQuestion,
  isRoundOver,
  isRunOver,
  recordAnswer,
  roundVerdict,
  startRun,
  summarise,
  type AnswerRecord,
  type RunState,
  type RunSummary,
  type Verdict,
} from "@/lib/benchmark/engine";
import { TIER_LABEL, trackById } from "@/lib/benchmark/content";
import type { Board } from "@/lib/benchmark/board";
import type { DrawnQuestion, TierKey, Track } from "@/lib/benchmark/types";
import { Landing } from "./landing";
import { Onboarding, EMPTY_LEAD, type Lead } from "./onboarding";
import { QuestionScreen } from "./question-screen";
import { StatusBar } from "./status-bar";
import { VerdictModal } from "./verdict-modal";
import { Scorecard } from "./scorecard";
import { CorrigeModal } from "./corrige-modal";
import { Slot } from "./string-slot";

type Screen = "landing" | "onboarding" | "quiz" | "result";

const tierLabel = (tier: TierKey) => TIER_LABEL[tier];

/** Ce que porte un lien de défi : qui il faut battre. Lu et validé sur le
 *  serveur, dans `page.tsx`, et passé en prop. Un lien incomplet ou mal formé y
 *  devient `null` et la page d'accueil est celle de tout le monde. */
export type ChallengeBanner = { nom: string; score: string; niveau: string };

export function BenchmarkApp({ challenge }: { challenge: ChallengeBanner | null }) {
  const [screen, setScreen] = useState<Screen>("landing");
  const [lead, setLead] = useState<Lead>(EMPTY_LEAD);
  const [track, setTrack] = useState<Track | null>(null);
  const [run, setRun] = useState<RunState | null>(null);
  const [drawn, setDrawn] = useState<DrawnQuestion | null>(null);
  const [revealed, setRevealed] = useState<{
    picked: number | null;
    outcome: AnswerRecord["outcome"];
  } | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [summary, setSummary] = useState<RunSummary | null>(null);
  const [board, setBoard] = useState<Board | null>(null);
  const [corrigeOpen, setCorrigeOpen] = useState(false);
  const [toastKey, setToastKey] = useState<string | null>(null);

  const toastTimer = useRef<number | null>(null);
  const showToast = useCallback((key: string) => {
    setToastKey(key);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastKey(null), 3200);
  }, []);

  /**
   * Démarre un parcours, ou renvoie faux sans rien casser.
   *
   * Deux façons d'échouer, et aucune ne doit produire un écran blanc : le track
   * n'a pas encore de banque, TRK-04 « fin » étant dans ce cas, ou sa banque
   * existe mais n'est pas rangée comme le moteur l'attend. Le second cas lève
   * volontairement dans `startRun`, parce qu'une banque mal rangée sert la
   * mauvaise difficulté sans que rien ne se voie. Ici on l'attrape, on le
   * journalise, et l'onboarding reprend la main.
   */
  const beginRun = (
    filled: Lead & { trackId: NonNullable<Lead["trackId"]>; role: string },
  ): boolean => {
    const chosen = trackById(filled.trackId);
    if (!chosen) {
      console.error(`[BENCHMARK] Track « ${filled.trackId} » sans banque de questions`);
      return false;
    }

    let fresh: RunState;
    try {
      fresh = startRun(chosen);
    } catch (error) {
      console.error(`[BENCHMARK] Banque inutilisable pour ${chosen.code}:`, error);
      return false;
    }

    setLead(filled);
    setTrack(chosen);
    setRun(fresh);
    setDrawn(drawQuestion(fresh));
    setRevealed(null);
    setScreen("quiz");
    return true;
  };

  const answer = (picked: number | null) => {
    if (!run || !drawn || revealed) return;
    const outcome: AnswerRecord["outcome"] =
      picked === null ? "timeout" : picked === drawn.answer ? "correct" : "wrong";
    setRevealed({ picked, outcome });
    setRun(recordAnswer(run, drawn, picked));
  };

  /* La fin d'un parcours écrit une ligne et rend le classement. L'échec ne
     coûte que la ligne : la carte de score est calculée chez le lecteur, donc
     elle s'affiche quoi qu'il arrive. */
  const finish = useCallback(
    async (finished: RunState, chosen: Track, filled: Lead) => {
      const card = summarise(finished);
      setSummary(card);
      setScreen("result");

      try {
        const res = await fetch("/api/benchmark-run", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            runCode: card.runCode,
            displayName: filled.name.trim(),
            email: filled.email.trim(),
            company: filled.company.trim(),
            trackId: chosen.id,
            role: filled.role ?? "",
            finalTier: card.finalTier,
            score: card.score,
            correctCount: card.correctCount,
            durationSeconds: card.durationSeconds,
            roundResults: card.roundResults,
            locale: "fr",
          }),
        });
        if (res.ok) {
          const data = (await res.json()) as { board: Board };
          setBoard(data.board);
        }
      } catch {
        // Le classement reste absent, la carte de score reste entière.
      }
    },
    [],
  );

  const next = () => {
    if (!run || !track) return;

    if (isRunOver(run)) {
      void finish(run, track, lead);
      return;
    }

    if (isRoundOver(run)) {
      setVerdict(roundVerdict(run));
      return;
    }

    setRevealed(null);
    setDrawn(drawQuestion(run));
  };

  const continueAfterVerdict = () => {
    if (!run) return;
    const advanced = advanceRound(run);
    setRun(advanced);
    setVerdict(null);
    setRevealed(null);
    setDrawn(drawQuestion(advanced));
  };

  const restart = () => {
    setScreen("onboarding");
    setLead({ ...lead, trackId: null, role: null });
    setRun(null);
    setDrawn(null);
    setRevealed(null);
    setSummary(null);
    setBoard(null);
  };

  const nextLabelKey = (() => {
    if (!run) return "question.nextMidRound";
    if (isRunOver(run)) return "question.nextEndOfRun";
    if (isRoundOver(run)) return "question.nextEndOfRound";
    return "question.nextMidRound";
  })();

  const challengeUrl =
    summary && typeof window !== "undefined"
      ? `${window.location.origin}/benchmark?defi=${summary.runCode}` +
        `&nom=${encodeURIComponent(lead.name.trim())}` +
        `&score=${summary.score}&niveau=${encodeURIComponent(tierLabel(summary.finalTier))}`
      : "";

  const roundAnswers = run
    ? run.answers.filter((a) => a.round === run.round)
    : [];

  /* `run.qInRound` a déjà avancé au moment où la réponse est révélée : la
     question affichée est alors la précédente. Sans ce décalage, la puce dirait
     Q2 alors que Q1 est encore à l'écran. */
  const displayIndex = run
    ? Math.max(0, Math.min(2, revealed ? run.qInRound - 1 : run.qInRound))
    : 0;

  return (
    <div className="bm-root">
      {screen === "quiz" && run && track && (
        <StatusBar
          runCode={run.runCode}
          trackCode={track.code}
          round={run.round + 1}
          palier={(run.round + 1) as 1 | 2 | 3}
          tier={run.tier}
          tierLabel={tierLabel(run.tier)}
          score={run.score}
        />
      )}

      {screen === "landing" && (
        <Landing onStart={() => setScreen("onboarding")} challenge={challenge} />
      )}

      {screen === "onboarding" && (
        <Onboarding
          lead={lead}
          onChange={setLead}
          onLeave={() => setScreen("landing")}
          onStartRun={beginRun}
        />
      )}

      {screen === "quiz" && run && drawn && (
        <QuestionScreen
          drawn={drawn}
          round={run.round + 1}
          palier={(run.round + 1) as 1 | 2 | 3}
          qInRound={displayIndex}
          tierLabel={tierLabel(drawn.tier)}
          roundAnswers={roundAnswers}
          revealed={revealed}
          onAnswer={answer}
          onNext={next}
          nextLabelKey={nextLabelKey}
        />
      )}

      {verdict && run && (
        <VerdictModal
          verdict={verdict}
          fromLabel={tierLabel(verdict.tierBefore)}
          toLabel={tierLabel(verdict.tierAfter)}
          toIsExpert={verdict.tierAfter === "expert"}
          nextPoints={POINTS[verdict.tierAfter]}
          nextRound={Math.min(run.round + 2, ROUNDS)}
          onContinue={continueAfterVerdict}
        />
      )}

      {screen === "result" && summary && track && (
        <Scorecard
          summary={summary}
          track={track}
          role={lead.role ?? ""}
          tierLabel={tierLabel}
          board={board}
          challengeUrl={challengeUrl}
          onSeeCorrige={() => setCorrigeOpen(true)}
          onOtherTrack={restart}
          onToast={showToast}
        />
      )}

      {corrigeOpen && run && (
        <CorrigeModal
          answers={run.answers}
          tierLabel={tierLabel}
          onClose={() => setCorrigeOpen(false)}
        />
      )}

      <div className={`toast${toastKey ? " show" : ""}`} role="status" aria-live="polite">
        {toastKey ? <Slot k={toastKey} /> : null}
      </div>
    </div>
  );
}
