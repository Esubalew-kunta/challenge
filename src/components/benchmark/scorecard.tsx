"use client";

/**
 * La carte de score, le classement et la conclusion.
 *
 * Le classement arrive du serveur déjà fusionné et déjà classé : la durée sert
 * au départage et ne quitte jamais la machine. Si l'écriture a échoué, le
 * tableau s'affiche quand même, sans le rang du lecteur, ce qui vaut mieux
 * qu'une erreur en travers d'un résultat qu'il vient de gagner.
 *
 * Deux boutons de partage écrivent dans le presse-papiers. Quand le
 * presse-papiers est refusé, et il l'est parfois sans permission ni contexte
 * sécurisé, on le dit plutôt que de laisser croire que c'est copié.
 */

import { MAX_SCORE, type RunSummary } from "@/lib/benchmark/engine";
import { PACKS_ENABLED, packFor, packHref } from "@/lib/benchmark/packs";
import { BookingCtaButton } from "@/components/shared/booking-modal";
import type { Board } from "@/lib/benchmark/board";
import { contentFor } from "@/lib/benchmark/content";
import type { TierKey, Track } from "@/lib/benchmark/types";
import { s, sf } from "@/lib/benchmark/strings";
import { useBenchmarkLocale } from "./locale-context";
import { formatTime, rankCounter, splitRoundLine } from "@/lib/benchmark/format";
import { Slot } from "./string-slot";

type Props = {
  summary: RunSummary;
  track: Track;
  role: string;
  tierLabel: (tier: TierKey) => string;
  board: Board | null;
  challengeUrl: string;
  onSeeCorrige: () => void;
  onOtherTrack: () => void;
  onToast: (key: string) => void;
};

async function copy(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function Scorecard({
  summary,
  track,
  role,
  tierLabel,
  board,
  challengeUrl,
  onSeeCorrige,
  onOtherTrack,
  onToast,
}: Props) {
  const locale = useBenchmarkLocale();
  const { POST_LINKEDIN, DEFI_COLLEGUE, HASHTAGS } = contentFor(locale);
  const tier = summary.finalTier;
  const time = formatTime(summary.durationSeconds);
  const label = tierLabel(tier);
  const pack = packFor(track.id);

  /* Le lien pointe sur notre route, qui note le téléchargement puis redirige
     vers le fichier. L'ancienne version envoyait la mesure en parallèle sans
     attendre la réponse : un bloqueur ou un onglet fermé trop vite, et la ligne
     était perdue. La mesure est maintenant sur le chemin du fichier. */

  const linkedInPost = POST_LINKEDIN.replaceAll("{score}", String(summary.score))
    .replaceAll("{NIVEAU}", label.toUpperCase())
    .replaceAll("{track}", track.name)
    .replaceAll("{hits}", String(summary.correctCount))
    .replaceAll("{total}", String(summary.total))
    .replaceAll("{temps}", time)
    .replaceAll("{hashtags}", HASHTAGS[track.id]);

  // Le message de défi se termine sur « aimakers.fr » et ne porte aucun jeton
  // de lien, donc le lien profond est ajouté dessous plutôt qu'inséré dedans :
  // la phrase validée reste intacte. Si le pack préfère l'inverse, la chaîne a
  // besoin d'un {lien}.
  const challengeMessage =
    DEFI_COLLEGUE.replaceAll("{score}", String(summary.score))
      .replaceAll("{niveau}", label)
      .replaceAll("{track}", track.name) +
    "\n" +
    challengeUrl;

  return (
    <section className="screen">
      <div className="shell-wide result-wrap">
        <div className="result-head">
          <Slot k="scorecard.eyebrow" className="eyebrow" />
          <Slot k={`scorecard.verdict.${tier}.title`} as="h2" />
          <Slot
            k="scorecard.subline"
            as="p"
            values={{
              hits: summary.correctCount,
              total: summary.total,
              temps: time,
            }}
          />
        </div>

        <div className="bench">
          <div className="bench-top">
            <Slot k="scorecard.benchTop" />
            {/* Le libellé puis le code, comme dans la barre de statut :
                « Session » ne porte pas de jeton, c'est un libellé. */}
            <span>
              <Slot k="status.session" /> {summary.runCode}
            </span>
          </div>
          <div className="bench-body">
            <div>
              <div className="score-huge">
                {summary.score}
                <span className="of">
                  <Slot k="scorecard.scoreOutOf" values={{ max: MAX_SCORE }} />
                </span>
              </div>
              <div className="tier-line">
                <span className={`tier-badge ${tier}`}>{label}</span>
                <span className="eyebrow">
                  {track.name} · {role}
                </span>
              </div>
              <Slot k={`scorecard.verdict.${tier}.body`} as="p" className="bench-blurb" />
            </div>

            <div className="breakdown">
              {summary.roundResults.map((r) => {
                /* Le pack écrit la ligne entière. L'artefact la présente en
                   deux colonnes, et la coupe tombe sur le tiret. Le découpage
                   est dans `format.ts`, avec son test : un tiret traduit de
                   travers viderait la colonne de droite en silence. */
                const [left, right] = splitRoundLine(
                  sf(
                    "scorecard.roundLine",
                    {
                      n: r.round,
                      niveau: tierLabel(r.tier),
                      p: r.palier,
                      c: r.correct,
                      pts: r.points,
                    },
                    locale,
                  ),
                );

                return (
                  <div className="brow" key={r.round}>
                    <span className="rk">{left}</span>
                    <span className={`rv ${r.correct >= 2 ? "g" : "r"}`}>
                      {right}
                    </span>
                  </div>
                );
              })}
              <div className="brow">
                <Slot k="scorecard.finalTier" className="rk" />
                <span className="rv">{label}</span>
              </div>
              <div className="brow">
                <Slot k="scorecard.time" className="rk" />
                <span className="rv">{time}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="share-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={async () =>
              onToast(
                (await copy(linkedInPost))
                  ? "toast.linkedInCopied"
                  : "toast.linkedInFailed",
              )
            }
          >
            <Slot k="scorecard.copyLinkedIn" />
          </button>
          <button type="button" className="btn btn-ghost" onClick={onSeeCorrige}>
            <Slot k="scorecard.seeCorrige" />
          </button>
          <button type="button" className="btn btn-ghost" onClick={onOtherTrack}>
            <Slot k="scorecard.otherTrack" />
          </button>
          {/* Le pack n'est pas conditionné au score : finir suffit. Le bouton
              n'apparaît que si le track a un pack, parce qu'un téléchargement
              qui échoue coûte plus qu'un bouton absent. */}
          {pack &&
            (PACKS_ENABLED ? (
              <a
                className="btn btn-ghost"
                href={packHref(track.id, summary.runCode)}
                /* Pas d'attribut `download` : la réponse est une redirection
                   vers un autre domaine, où il n'a aucun effet. Le nom du
                   fichier est posé par le stockage, en Content-Disposition. */
                rel="nofollow"
              >
                <Slot k="scorecard.download" values={{ track: track.name }} />
              </a>
            ) : (
              /* Inerte tant que les vrais packs ne sont pas là. Un bouton
                 visiblement désactivé dit la vérité ; un bouton qui rend un
                 fichier de remplacement fait croire à une ressource. */
              <button type="button" className="btn btn-ghost" disabled>
                <Slot k="scorecard.download" values={{ track: track.name }} />
              </button>
            ))}
        </div>

        <div className="lb-head">
          <Slot k="leaderboard.title" as="h3" />
          {board && board.yourRank !== null && (
            <span className="eyebrow">
              {rankCounter(board.total, board.yourRank, locale)}
            </span>
          )}
        </div>

        <div className="lb">
          {board && board.rows.length > 0 ? (
            <>
              <div className="lb-row head">
                <Slot k="leaderboard.colRank" />
                <Slot k="leaderboard.colName" />
                <Slot k="leaderboard.colCompany" className="lb-co" />
                <Slot k="leaderboard.colTier" className="lb-tier" />
                <Slot k="leaderboard.colScore" className="lb-score" />
              </div>
              {board.rows.map((row) => (
                <div
                  className={`lb-row${row.isYou ? " you" : ""}`}
                  key={`${row.rank}-${row.name}-${row.company}`}
                >
                  <span className="lb-rank">{row.rank}</span>
                  <span className="lb-name">
                    {row.name}
                    {row.isRetake && (
                      <Slot k="leaderboard.retakeBadge" className="lb-retake" />
                    )}
                  </span>
                  <span className="lb-co">{row.company}</span>
                  <span className="lb-tier">
                    <span className={`t-${row.tier}`}>{tierLabel(row.tier)}</span>
                  </span>
                  <span className="lb-score">{row.score}</span>
                </div>
              ))}
            </>
          ) : (
            <Slot k="leaderboard.empty" as="p" className="lb-empty" />
          )}
        </div>

        {/* La note sous le classement est retirée à la demande du propriétaire,
            le 28 août. `leaderboard.note` reste dans la couche de chaînes, avec
            ses variantes dans docs/BENCHMARK-MENTIONS-A-VALIDER.md : la remettre
            est une ligne. Le tableau n'explique donc plus ce qu'il affiche, et
            c'est la mention de l'étape 05 qui porte seule cette information. */}

        <div className="closer">
          <Slot k="closer.eyebrow" className="eyebrow" />
          <Slot k={tier === "expert" ? "closer.expert.title" : "closer.other.title"} as="h3" />
          <Slot k={tier === "expert" ? "closer.expert.body" : "closer.other.body"} as="p" />
          <div className="actions">
            {/* Le parcours de réservation du site, pas un toast de
                démonstration : il mène au calendrier, en passant par la
                capture de lead quand le visiteur n'est pas déjà connu. Nous
                avons son nom, son e-mail et son entreprise, pas son téléphone,
                donc le formulaire du site a encore quelque chose à demander. */}
            <BookingCtaButton className="btn btn-primary" label={s("closer.cta", locale)} />
            <button
              type="button"
              className="btn btn-ghost"
              onClick={async () =>
                onToast(
                  (await copy(challengeMessage))
                    ? "toast.challengeCopied"
                    : "toast.linkedInFailed",
                )
              }
            >
              <Slot k="closer.challenge" />
            </button>
          </div>
        </div>

        <footer className="foot">
          <Slot k="footer.brand" />
          {/* Mention de pied retirée le 28 août, même raison. */}
        </footer>
      </div>
    </section>
  );
}
