"use client";

/**
 * Le choix du rôle, posé après le round 1.
 *
 * ── Pourquoi il n'est plus dans l'onboarding ────────────────────────────────
 *
 * Il en était la cinquième et dernière étape : cinq écrans à remplir avant la
 * moindre question, donc cinq occasions d'abandonner avant d'avoir vu ce qu'on
 * est venu voir. Demande du propriétaire, faite deux fois. La question se pose
 * maintenant à quelqu'un qui a répondu à trois questions et lu son verdict :
 * quelqu'un qui a une raison de répondre.
 *
 * ── Ce que ça change, et ce que ça ne change pas ────────────────────────────
 *
 * Le rôle ne sert ni au tirage des questions ni au score : il est écrit dans la
 * ligne du parcours et affiché sur la carte de score. Le poser plus tard ne
 * déplace donc rien dans le moteur.
 *
 * Il ne déplace pas non plus la capture du lead, qui reste à la fin du parcours,
 * en une seule écriture. Quelqu'un qui part au round 2 ne laisse toujours aucune
 * trace, exactement comme avant. C'est un autre chantier, si on le veut.
 *
 * ── Pas d'échappatoire ──────────────────────────────────────────────────────
 *
 * Aucun bouton « passer ». La liste couvre le track choisi et se termine par une
 * entrée de direction : quelqu'un qui joue le track Marketing a un rôle dans
 * cette liste. Un bouton « passer » ferait perdre la donnée pour tout le monde
 * afin de servir un cas qui n'existe pas.
 */

import { contentFor } from "@/lib/benchmark/content";
import type { Track } from "@/lib/benchmark/types";
import { useBenchmarkLocale } from "./locale-context";
import { Slot } from "./string-slot";

export function RoleScreen({
  track,
  onChoose,
}: {
  track: Track;
  onChoose: (role: string) => void;
}) {
  const locale = useBenchmarkLocale();
  const { ROLES } = contentFor(locale);

  return (
    <section className="screen">
      <div className="shell form-wrap">
        <div className="form-step">
          {/* Ni compteur d'étape ni bouton retour : cet écran n'est plus une
              étape d'un formulaire, il s'intercale dans un parcours en cours.
              Un « 05 / 05 » ici mentirait, un retour renverrait sur une question
              déjà répondue. */}
          <Slot
            k="onboarding.step5.label"
            as="h2"
            values={{ track: track.name }}
          />
          {/* `role.hint` et non `onboarding.step5.hint` : l'ancienne disait
              « Dernière étape » et « votre parcours démarre au clic », deux
              phrases devenues fausses en changeant de place. */}
          <Slot k="role.hint" as="p" className="hint" />

          <div className="roles" role="group">
            {ROLES[track.id].map((role) => (
              <button
                key={role}
                type="button"
                className="role"
                onClick={() => onChoose(role)}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
