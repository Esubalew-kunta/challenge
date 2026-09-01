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

import { useCallback, useEffect, useRef, useState } from "react";
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
import { contentFor, trackById } from "@/lib/benchmark/content";
import type { Board } from "@/lib/benchmark/board";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";
import { challengeLink } from "@/lib/benchmark/share";
import { cleanName, type BadgeInput } from "@/lib/benchmark/badge";
import type { DrawnQuestion, TierKey, Track } from "@/lib/benchmark/types";
import { Landing } from "./landing";
import { Onboarding, EMPTY_LEAD, type Lead } from "./onboarding";
import { QuestionScreen } from "./question-screen";
import { StatusBar } from "./status-bar";
import { VerdictModal } from "./verdict-modal";
import { RoleScreen } from "./role-screen";
import { Scorecard } from "./scorecard";
import { CorrigeModal } from "./corrige-modal";
import { Slot } from "./string-slot";
import { BenchmarkLocaleProvider } from "./locale-context";
import { LanguageGuard } from "./language-guard";

type Screen = "landing" | "onboarding" | "quiz" | "result";

/** Ce que porte un lien de défi : qui il faut battre. Lu et validé sur le
 *  serveur, dans `page.tsx`, et passé en prop. Un lien incomplet ou mal formé y
 *  devient `null` et la page d'accueil est celle de tout le monde. */
export type ChallengeBanner = { nom: string; score: string; niveau: string };

/**
 * L'origine des liens partagés.
 *
 * Jamais `window.location.origin` : un parcours joué sur localhost produisait
 * un lien vers localhost, envoyé à quelqu'un pour qui cette adresse ne mène
 * nulle part. La variable d'environnement existe pour le cas où le Benchmark
 * vit ailleurs que sur le domaine canonique — c'est vrai aujourd'hui, la page
 * étant servie depuis un déploiement Vercel avant sa mise en ligne sur
 * aimakers.fr.
 */
const SHARE_BASE =
  process.env.NEXT_PUBLIC_BENCHMARK_BASE_URL?.trim() || siteConfig.url;

export function BenchmarkApp({
  challenge,
  locale,
}: {
  challenge: ChallengeBanner | null;
  locale: Locale;
}) {
  const { TIER_LABEL } = contentFor(locale);
  const tierLabel = (tier: TierKey) => TIER_LABEL[tier];

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

  /**
   * L'écran de rôle, intercalé entre le verdict du round 1 et le round 2.
   *
   * Le rôle était la cinquième étape de l'onboarding, avant la première
   * question. Déplacé le 1er septembre, sur demande du propriétaire faite deux
   * fois : cinq écrans avant de voir une question, c'est cinq occasions de
   * partir avant d'avoir vu ce qu'on est venu voir.
   *
   * Un drapeau, et non un cinquième `screen` : la question suivante est déjà
   * tirée derrière cet écran, elle attend simplement d'être montée. C'est aussi
   * ce qui protège le chronomètre, remonté avec `QuestionScreen` : tant que cet
   * écran est là, le compte à rebours n'a pas commencé.
   */
  const [askRole, setAskRole] = useState(false);

  /**
   * Remonter en haut à chaque changement d'écran.
   *
   * Une seule route, aucun rechargement : le navigateur ne remet donc jamais le
   * défilement à zéro tout seul, comme il le ferait d'une page à l'autre. Le
   * lecteur qui descendait pour lire les quatre options restait à la même
   * hauteur sur la question suivante, et arrivait sur la carte de score à 800 px
   * du haut, sans voir son score.
   *
   * Se déclenche sur l'écran et sur la question tirée, pas sur la réponse :
   * cliquer une option révèle le résultat sous les yeux du lecteur, il ne faut
   * surtout pas bouger à ce moment-là.
   *
   * `instant` et non `smooth` : une animation de 800 px entre deux questions
   * fait perdre le fil, et c'est aussi le comportement attendu par qui a demandé
   * moins d'animations dans son système.
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [screen, drawn]);

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
    filled: Lead & { trackId: NonNullable<Lead["trackId"]> },
  ): boolean => {
    const chosen = trackById(filled.trackId, locale);
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
    setAskRole(false);
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
            locale,
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
    [locale],
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

    /* La question du round 2 est tirée juste au-dessus, mais elle reste cachée
       tant que le rôle n'est pas donné. Le test porte sur le rôle et non sur le
       numéro de round : quelqu'un qui reprend un track après un premier
       parcours a déjà répondu, on ne lui repose pas la question. */
    if (!lead.role) setAskRole(true);
  };

  const chooseRole = (role: string) => {
    setLead((current) => ({ ...current, role }));
    setAskRole(false);
  };

  /* Rejouer garde le nom, l'e-mail et l'entreprise, et remet à zéro ce qui est
     propre au parcours. Le rôle repart avec le track : changer de département
     change la liste des rôles, et garder « Growth engineering » sur un parcours
     Finance écrirait une ligne fausse en base. */
  const restart = () => {
    setScreen("onboarding");
    setLead({ ...lead, trackId: null, role: null });
    setRun(null);
    setDrawn(null);
    setRevealed(null);
    setSummary(null);
    setBoard(null);
    setAskRole(false);
  };

  const nextLabelKey = (() => {
    if (!run) return "question.nextMidRound";
    if (isRunOver(run)) return "question.nextEndOfRun";
    if (isRoundOver(run)) return "question.nextEndOfRound";
    return "question.nextMidRound";
  })();

  /* Construit sans toucher à `window` : le lien est le même rendu sur le
     serveur et dans le navigateur, et il ne dépend plus de l'hôte depuis lequel
     le parcours a été joué. */
  const challengeUrl = summary
    ? challengeLink({
        base: SHARE_BASE,
        locale,
        runCode: summary.runCode,
        name: lead.name,
        score: summary.score,
        tierLabel: tierLabel(summary.finalTier),
      })
    : "";

  /* Ce que le badge a besoin de savoir, et rien de plus. Le nom passe par le
     même nettoyage que côté serveur : ce qui n'y survit pas ne doit pas non
     plus apparaître dans l'aperçu, sinon le bouton promet une image que la
     route refusera de dessiner. Un nom qui tombe entièrement rend `null`, et
     les boutons de badge disparaissent plutôt que de mener à un 404. */
  const badgeInput: BadgeInput | null = (() => {
    if (!summary) return null;
    const name = cleanName(lead.name);
    if (!name) return null;
    return {
      name,
      trackId: summary.trackId,
      tier: summary.finalTier,
      score: summary.score,
    };
  })();

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
    <BenchmarkLocaleProvider locale={locale}>
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

      {screen === "quiz" && askRole && track && (
        <RoleScreen track={track} onChoose={chooseRole} />
      )}

      {screen === "quiz" && !askRole && run && drawn && (
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
          badgeInput={badgeInput}
          shareBase={SHARE_BASE}
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

      {/* Actif dès qu'on a quitté l'accueil : à partir de là, changer de langue
          efface quelque chose. Sur l'accueil il n'y a rien à perdre et la
          bascule reste une bascule ordinaire. */}
      <LanguageGuard locale={locale} active={screen !== "landing"} />

      <div className={`toast${toastKey ? " show" : ""}`} role="status" aria-live="polite">
        {toastKey ? <Slot k={toastKey} /> : null}
      </div>
    </div>
    </BenchmarkLocaleProvider>
  );
}
