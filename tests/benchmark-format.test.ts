import { test } from "node:test";
import assert from "node:assert/strict";

import { sf } from "../src/lib/benchmark/strings.ts";

import {
  englishOrdinal,
  formatTime,
  rankCounter,
  splitRoundLine,
} from "../src/lib/benchmark/format.ts";

test("la durée suit le format de l'artefact", () => {
  assert.equal(formatTime(0), "0m 00s");
  assert.equal(formatTime(9), "0m 09s");
  assert.equal(formatTime(66), "1m 06s");
  assert.equal(formatTime(3599), "59m 59s");
});

test("le premier du classement est 1er, pas 1e", () => {
  assert.match(rankCounter(16, 1, "fr"), /vous êtes 1er$/);
  assert.equal(rankCounter(16, 1, "fr").includes("1e "), false);
  assert.equal(rankCounter(16, 1, "fr").endsWith("1ere"), false);
});

test("tous les autres rangs gardent le e du gabarit", () => {
  assert.match(rankCounter(16, 2, "fr"), /vous êtes 2e$/);
  assert.match(rankCounter(16, 15, "fr"), /vous êtes 15e$/);
  assert.match(rankCounter(120, 21, "fr"), /vous êtes 21e$/);
});

test("le compteur porte bien le total, et la marque ne fuit jamais", () => {
  for (const [total, rank] of [
    [1, 1],
    [16, 16],
    [120, 21],
    [999, 999],
  ] as const) {
    const line = rankCounter(total, rank, "fr");
    assert.equal(line.includes("@@RANG@@"), false, line);
    assert.equal(line.startsWith(`${total} parcours`), true, line);
  }
});

/* ---------------------------------------------------------------- anglais --
   L'ordinal anglais est testable avant que la moindre chaîne soit traduite :
   il ne dépend d'aucun gabarit. Le compteur anglais, lui, attend sa chaîne. */

test("l'ordinal anglais suit les suffixes, y compris les irréguliers", () => {
  assert.equal(englishOrdinal(1), "1st");
  assert.equal(englishOrdinal(2), "2nd");
  assert.equal(englishOrdinal(3), "3rd");
  assert.equal(englishOrdinal(4), "4th");
  assert.equal(englishOrdinal(21), "21st");
  assert.equal(englishOrdinal(22), "22nd");
  assert.equal(englishOrdinal(23), "23rd");
  assert.equal(englishOrdinal(101), "101st");
});

test("onze, douze et treize prennent th, pas st, nd et rd", () => {
  assert.equal(englishOrdinal(11), "11th");
  assert.equal(englishOrdinal(12), "12th");
  assert.equal(englishOrdinal(13), "13th");
  assert.equal(englishOrdinal(111), "111th");
  assert.equal(englishOrdinal(112), "112th");
  assert.equal(englishOrdinal(113), "113th");
});

/* ------------------------------------------------------- ligne de round --
   La coupe en deux colonnes tombe sur le tiret. C'est le détail que la
   traduction perd en premier : un tiret demi-cadratin ou un trait d'union à la
   place du cadratin, et toute la ligne passe à gauche sans que rien n'échoue. */

test("la ligne de round se coupe sur le tiret, quel qu'il soit", () => {
  const expected = ["Round 1", "intermédiaire, palier 1 : 3/3, 60 pts"];
  assert.deepEqual(splitRoundLine("Round 1 — intermédiaire, palier 1 : 3/3, 60 pts"), expected);
  assert.deepEqual(splitRoundLine("Round 1 – intermédiaire, palier 1 : 3/3, 60 pts"), expected);
  assert.deepEqual(splitRoundLine("Round 1 - intermédiaire, palier 1 : 3/3, 60 pts"), expected);
});

test("un second tiret ne fait pas disparaître la fin de la ligne", () => {
  const [left, right] = splitRoundLine("Round 1 — expert, step 3 — 3/3, 90 pts");
  assert.equal(left, "Round 1");
  assert.equal(right, "expert, step 3 — 3/3, 90 pts");
});

test("une ligne sans tiret garde tout à gauche plutôt que de se perdre", () => {
  assert.deepEqual(splitRoundLine("Round 1 : 3/3"), ["Round 1 : 3/3", ""]);
});

test("le gabarit français est bien coupable en deux colonnes non vides", () => {
  const line = sf(
    "scorecard.roundLine",
    { n: 1, niveau: "intermédiaire", p: 1, c: 3, pts: 60 },
    "fr",
  );
  const [left, right] = splitRoundLine(line);
  assert.notEqual(left.trim(), "", line);
  assert.notEqual(right.trim(), "", `la colonne de droite est vide : ${line}`);
});

test("le compteur anglais rend un ordinal entier, sans e résiduel", () => {
  // Le gabarit anglais ne porte pas le « e » du français : l'ordinal arrive
  // entier à la place du jeton. C'est l'autre branche de rankCounter, et sans
  // ce test elle ne serait vérifiée par personne.
  assert.match(rankCounter(16, 1, "en"), /you are 1st$/);
  assert.match(rankCounter(16, 2, "en"), /you are 2nd$/);
  assert.match(rankCounter(16, 3, "en"), /you are 3rd$/);
  assert.match(rankCounter(120, 11, "en"), /you are 11th$/);
  assert.match(rankCounter(120, 21, "en"), /you are 21st$/);

  for (const [total, rank] of [
    [1, 1],
    [16, 16],
    [120, 21],
    [999, 999],
  ] as const) {
    const line = rankCounter(total, rank, "en");
    assert.equal(line.includes("@@RANG@@"), false, line);
    assert.equal(line.startsWith(`Runs: ${total}`), true, line);
  }
});

test("le gabarit anglais se coupe aussi en deux colonnes non vides", () => {
  // Le piège annoncé : le français coupe sur un tiret cadratin, et une
  // traduction qui change de tiret vide la colonne de droite sans rien casser.
  const line = sf(
    "scorecard.roundLine",
    { n: 1, niveau: "intermediate", p: 1, c: 3, pts: 60 },
    "en",
  );
  const [left, right] = splitRoundLine(line);
  assert.notEqual(left.trim(), "", line);
  assert.notEqual(right.trim(), "", `la colonne de droite est vide : ${line}`);
  assert.equal(left.includes("Round 1"), true, line);
});

test("le compteur anglais ne dit jamais « 1 runs »", () => {
  // Le tout premier parcours enregistré donne total = 1, et c'est la ligne que
  // lit la première personne à passer le test. Le français ne pose pas le
  // problème, « parcours » étant invariable.
  const first = rankCounter(1, 1, "en");
  assert.equal(/1 runs/.test(first), false, first);
  assert.match(first, /^Runs: 1 /);
});
