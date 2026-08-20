/**
 * Point d'entrée du contenu français du challenge.
 *
 * Même rôle que `index.ts` côté anglais, et volontairement séparé : la version
 * anglaise ne doit pas payer le poids du français dans son bundle, et
 * inversement.
 *
 * Le contrat entre les deux langues tient en deux lignes :
 *
 *   - même numéro de jour pour le même contenu
 *   - même ordre d'options de quiz, donc même index de bonne réponse
 *
 * La progression du lecteur est stockée par numéro de jour et par index
 * d'option, dans une seule clé partagée par les deux langues. C'est voulu : un
 * lecteur qui passe de l'anglais au français est la même personne et garde son
 * score. Le prix, c'est que réordonner une option française transformerait une
 * bonne réponse en mauvaise. Le contrôle en bas de ce fichier attrape ça
 * pendant l'écriture, pas trois semaines après la mise en ligne.
 */

import { PHASE_1_DAYS_FR } from "./days-phase-1.fr";
import { PHASE_2_DAYS_FR } from "./days-phase-2.fr";
import { PHASE_3_DAYS_FR } from "./days-phase-3.fr";
import { PHASES_FR, UI_FR } from "./config.fr";
import { CHALLENGE_ROUTES } from "./registry";
import { DAYS } from "./index";
import type { Day, Phase } from "./types";
import type { AnswerKey } from "./progress";

/** Tous les jours français écrits à ce jour, dans l'ordre. */
export const DAYS_FR: Day[] = [
  ...PHASE_1_DAYS_FR,
  ...PHASE_2_DAYS_FR,
  ...PHASE_3_DAYS_FR,
].sort((a, b) => a.day - b.day);

export const TOTAL_DAYS_FR = DAYS_FR.length;

/** Racine des URLs françaises. */
export const BASE_FR = CHALLENGE_ROUTES.fr;

export function dayHrefFr(day: Pick<Day, "slug">): string {
  return `${BASE_FR}/${day.slug}`;
}

export function getDayBySlugFr(slug: string): Day | undefined {
  return DAYS_FR.find((d) => d.slug === slug);
}

export function getDayByNumberFr(n: number): Day | undefined {
  return DAYS_FR.find((d) => d.day === n);
}

export function daysInPhaseFr(phase: Phase): Day[] {
  return DAYS_FR.filter((d) => d.phase === phase);
}

export function getPhaseFr(phase: Phase) {
  return PHASES_FR.find((p) => p.id === phase)!;
}

export function neighboursFr(day: Day): { prev?: Day; next?: Day } {
  return {
    prev: getDayByNumberFr(day.day - 1),
    next: getDayByNumberFr(day.day + 1),
  };
}

/**
 * Le lien vers un jour par son numéro. Retombe sur l'index plutôt que de
 * fabriquer une URL morte quand le jour n'est pas encore traduit.
 */
export function dayHrefForFr(n: number): string {
  const day = getDayByNumberFr(n);
  return day ? dayHrefFr(day) : BASE_FR;
}

/**
 * La clé de réponses française.
 *
 * Construite depuis le contenu français, mais elle doit être identique à
 * l'anglaise. Le contrôle plus bas le vérifie.
 */
export function answerKeyFr(): AnswerKey {
  const key: AnswerKey = {};
  DAYS_FR.forEach((d) => {
    key[d.day] = d.quiz.map((q) => q.answer);
  });
  return key;
}

/**
 * Est-ce que ce jour existe en français ?
 *
 * L'index français en a besoin : tant que les trente ne sont pas écrits, un
 * jour manquant doit renvoyer vers la page anglaise plutôt que vers une URL
 * qui n'existe pas.
 */
export function hasFrench(n: number): boolean {
  return DAYS_FR.some((d) => d.day === n);
}

/** Le lien anglais de secours, pour un jour pas encore traduit. */
export function englishFallbackHref(n: number): string {
  const day = DAYS.find((d) => d.day === n);
  return day ? `${CHALLENGE_ROUTES.en}/${day.slug}` : CHALLENGE_ROUTES.en;
}

export const CHALLENGE_META_FR = {
  name: UI_FR.challengeName,
  tagline: UI_FR.tagline,
  totalDays: TOTAL_DAYS_FR,
} as const;

/**
 * Garde-fous, vérifiés au chargement du module en développement.
 *
 * Le contrôle de parité est le seul qui compte vraiment : il protège le score
 * du lecteur, qui est partagé entre les deux langues.
 */
if (process.env.NODE_ENV !== "production") {
  const problems: string[] = [];

  const slugs = new Set<string>();
  DAYS_FR.forEach((d) => {
    if (slugs.has(d.slug)) problems.push(`Slug français en double : ${d.slug}`);
    slugs.add(d.slug);
    if (d.sections.length !== 3) {
      problems.push(`Jour ${d.day} : ${d.sections.length} sections, 3 attendues`);
    }
    if (d.quiz.length !== 3) {
      problems.push(`Jour ${d.day} : ${d.quiz.length} questions, 3 attendues`);
    }
  });

  // Parité avec l'anglais. Un décalage ici casse le score d'un lecteur qui
  // change de langue, en silence, sans que rien ne plante.
  DAYS_FR.forEach((fr) => {
    const en = DAYS.find((d) => d.day === fr.day);
    if (!en) {
      problems.push(`Jour ${fr.day} existe en français mais pas en anglais`);
      return;
    }
    if (en.quiz.length !== fr.quiz.length) {
      problems.push(
        `Jour ${fr.day} : ${fr.quiz.length} questions en français contre ${en.quiz.length} en anglais`,
      );
      return;
    }
    en.quiz.forEach((q, i) => {
      if (q.answer !== fr.quiz[i].answer) {
        problems.push(
          `Jour ${fr.day}, question ${i + 1} : bonne réponse ${fr.quiz[i].answer} en français contre ${q.answer} en anglais. L'ordre des options doit être identique.`,
        );
      }
      if (q.options.length !== fr.quiz[i].options.length) {
        problems.push(
          `Jour ${fr.day}, question ${i + 1} : nombre d'options différent entre les deux langues`,
        );
      }
    });
    if (en.phase !== fr.phase) {
      problems.push(`Jour ${fr.day} : phase différente entre les deux langues`);
    }
  });

  if (DAYS_FR.length !== DAYS.length) {
    // Un avertissement, pas une erreur : la traduction avance par phases et
    // l'index français sait renvoyer vers l'anglais pour ce qui manque.
    problems.push(
      `Traduction en cours : ${DAYS_FR.length} jours sur ${DAYS.length} écrits en français`,
    );
  }

  if (problems.length) {
    console.warn(`[challenge/fr] Points à regarder :\n  ${problems.join("\n  ")}`);
  }
}
