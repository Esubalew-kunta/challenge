/**
 * Tests du score de présélection (`src/lib/careers-scoring.ts`).
 *
 *   npm test
 *
 * Le score ne pèse plus que l'EXPÉRIENCE depuis le 2026-08-12 : la question
 * éliminatoire du poste et le français sont passés au niveau 2 de la
 * présélection. Ces tests fixent ce qui reste, bords compris — seuil exact,
 * plafond, crédit proportionnel en dessous, poste sans seuil déclaré, et les
 * valeurs aberrantes. C'est là que se joue le score d'un vrai candidat.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import { scoreApplication } from "../src/lib/careers-scoring.ts";

test("score plein au seuil exact", () => {
  assert.deepEqual(scoreApplication({ yearsExperience: 2, experienceMinValue: 2 }), {
    autoScreenScore: 100,
    flags: [],
  });
});

test("plafonne à 100 très au-dessus du seuil", () => {
  assert.deepEqual(scoreApplication({ yearsExperience: 20, experienceMinValue: 2 }), {
    autoScreenScore: 100,
    flags: [],
  });
});

test("crédit proportionnel sous le seuil, avec le flag", () => {
  // 1,5 an sur un seuil de 2 n'est pas nul : 75, pas 0.
  assert.deepEqual(scoreApplication({ yearsExperience: 1.5, experienceMinValue: 2 }), {
    autoScreenScore: 75,
    flags: ["below_min_experience"],
  });
});

test("expérience nulle : score 0 et flag", () => {
  assert.deepEqual(scoreApplication({ yearsExperience: 0, experienceMinValue: 3 }), {
    autoScreenScore: 0,
    flags: ["below_min_experience"],
  });
});

test("poste sans seuil déclaré : score plein, pas de division par zéro", () => {
  assert.deepEqual(scoreApplication({ yearsExperience: 0, experienceMinValue: 0 }), {
    autoScreenScore: 100,
    flags: [],
  });
});

test("une valeur négative ne descend jamais sous 0", () => {
  const { autoScreenScore } = scoreApplication({
    yearsExperience: -5,
    experienceMinValue: 2,
  });
  assert.equal(autoScreenScore, 0);
});

test("arrondit à l'entier le plus proche", () => {
  // 1/3 = 33,33 % -> 33
  const { autoScreenScore } = scoreApplication({
    yearsExperience: 1,
    experienceMinValue: 3,
  });
  assert.equal(autoScreenScore, 33);
});

test("rend toujours un entier de 0 à 100", () => {
  for (const years of [0, 0.5, 1, 2.7, 9, 40]) {
    for (const min of [0, 1, 2, 5]) {
      const { autoScreenScore } = scoreApplication({
        yearsExperience: years,
        experienceMinValue: min,
      });
      assert.ok(Number.isInteger(autoScreenScore), `entier attendu pour ${years}/${min}`);
      assert.ok(autoScreenScore >= 0 && autoScreenScore <= 100);
    }
  }
});
