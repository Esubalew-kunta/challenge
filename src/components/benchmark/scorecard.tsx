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

import { useState } from "react";
import { MAX_SCORE, type RunSummary } from "@/lib/benchmark/engine";
import { BookingCtaButton } from "@/components/shared/booking-modal";
import type { Board } from "@/lib/benchmark/board";
import { contentFor } from "@/lib/benchmark/content";
import type { TierKey, Track } from "@/lib/benchmark/types";
import { s, sf } from "@/lib/benchmark/strings";
import {
  addToProfileUrl,
  badgeImagePath,
  badgePath,
  linkedInShareUrl,
  type BadgeInput,
} from "@/lib/benchmark/badge";
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
  /** `null` quand le nom saisi ne survit pas au nettoyage : les boutons de
   *  badge disparaissent alors, plutôt que de mener à une image refusée. */
  badgeInput: BadgeInput | null;
  /** L'origine publique, la même que celle du lien de défi. */
  shareBase: string;
  onSeeCorrige: () => void;
  onOtherTrack: () => void;
  onToast: (key: string) => void;
};

/**
 * L'identifiant de la page entreprise LinkedIn, s'il est configuré.
 *
 * Sans lui, LinkedIn accepte l'entrée « ajouter à mon profil » et affiche le
 * nom de l'organisation en texte libre, sans logo ni lien vers la page. Le
 * bouton marche donc dès aujourd'hui et s'améliore le jour où quelqu'un pose la
 * variable ; attendre l'identifiant pour le livrer aurait été le mauvais
 * arbitrage.
 */
const LINKEDIN_ORG_ID = process.env.NEXT_PUBLIC_LINKEDIN_ORGANIZATION_ID?.trim();

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
  badgeInput,
  shareBase,
  onSeeCorrige,
  onOtherTrack,
  onToast,
}: Props) {
  const locale = useBenchmarkLocale();
  const { POST_LINKEDIN, DEFI_COLLEGUE, HASHTAGS } = contentFor(locale);

  /* La date d'obtention envoyée à LinkedIn, figée au premier rendu. Un
     `new Date()` recalculé à chaque rendu changerait le lien sous le curseur
     au passage de minuit, ce qui ne casse rien mais ne se justifie pas. Cet
     écran n'existe qu'après une partie jouée, donc jamais rendu sur le
     serveur : aucun risque de décalage d'hydratation. */
  const [issued] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() + 1 };
  });
  const tier = summary.finalTier;
  const time = formatTime(summary.durationSeconds);
  const label = tierLabel(tier);

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

  /* Les adresses du badge. Toutes construites depuis `shareBase`, jamais depuis
     `window.location` : un parcours joué en local produirait sinon un lien de
     partage que LinkedIn ne peut pas atteindre, donc une image qui n'apparaît
     jamais dans le fil. */
  const badgePageUrl = badgeInput ? `${shareBase}${badgePath(badgeInput, locale)}` : "";

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

        {/*
          L'écran de partage du pack, replié dans la carte de score plutôt que
          posé sur un quatrième écran : le lecteur vient de finir, l'obliger à
          cliquer « suivant » pour voir son badge coûterait des partages sans
          rien apporter.

          Tout disparaît si le nom ne survit pas au nettoyage. Un bouton qui
          mène à une image refusée est pire qu'un bouton absent.
        */}
        {badgeInput && (
          <div className="badge-block">
            {/* Un `img` nu, pas `next/image` : la source est une route qui
                dessine l'image depuis l'adresse, il n'y a rien à optimiser. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="badge-preview"
              src={badgeImagePath(badgeInput, locale, { svg: true })}
              alt={sf(
                "badge.previewAlt",
                { niveau: label, track: track.name },
                locale,
              )}
              width={1200}
              height={630}
            />

            <div className="share-row">
              {/*
                Un lien, pas un bouton, et c'est la seule version qui marche.

                LinkedIn ne pré-remplit plus le texte d'un post : `title`,
                `summary` et `source` ont existé et sont ignorés en silence
                depuis des années. Le texte passe donc par le presse-papiers, et
                l'image arrive toute seule parce que LinkedIn va chercher la page
                de badge et lit son `og:image`.

                La copie est lancée dans le gestionnaire de clic et la navigation
                reste native. Ouvrir la fenêtre après un `await` la ferait
                bloquer comme fenêtre surgissante : l'activation par
                l'utilisateur ne survit pas à l'attente.
              */}
              <a
                className="btn btn-primary"
                href={linkedInShareUrl(badgePageUrl)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  void copy(linkedInPost).then((ok) =>
                    onToast(ok ? "toast.linkedInCopied" : "toast.linkedInFailed"),
                  );
                }}
              >
                <Slot k="badge.shareLinkedIn" />
              </a>

              <a
                className="btn btn-ghost"
                href={addToProfileUrl({
                  entryName: sf(
                    "badge.profileEntry",
                    { niveau: label, track: track.name },
                    locale,
                  ),
                  issueYear: issued.year,
                  issueMonth: issued.month,
                  certUrl: badgePageUrl,
                  organizationId: LINKEDIN_ORG_ID,
                  organizationName: "AI Makers",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Slot k="badge.addToProfile" />
              </a>

              <a
                className="btn btn-ghost"
                href={badgeImagePath(badgeInput, locale, {
                  shape: "square",
                  download: true,
                })}
              >
                <Slot k="badge.download" />
              </a>
            </div>
          </div>
        )}

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
          {/* Le bouton de téléchargement du pack a été retiré le 31 août :
              l'idée des packs de ressources est abandonnée, code, fichiers et
              chaînes compris. Voir la note en tête de `board.ts` pour la même
              règle appliquée à l'entreprise : ce qu'on ne sert plus, on
              l'enlève, on ne le masque pas. */}
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
                <Slot k="leaderboard.colTier" className="lb-tier" />
                <Slot k="leaderboard.colScore" className="lb-score" />
              </div>
              {board.rows.map((row) => (
                <div
                  className={`lb-row${row.isYou ? " you" : ""}`}
                  key={`${row.rank}-${row.name}-${row.score}`}
                >
                  <span className="lb-rank">{row.rank}</span>
                  <span className="lb-name">
                    {row.name}
                    {row.isRetake && (
                      <Slot k="leaderboard.retakeBadge" className="lb-retake" />
                    )}
                  </span>
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
