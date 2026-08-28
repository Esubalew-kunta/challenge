import { test } from "node:test";
import assert from "node:assert/strict";

import { formatTime, rankCounter } from "../src/lib/benchmark/format.ts";

test("la durée suit le format de l'artefact", () => {
  assert.equal(formatTime(0), "0m 00s");
  assert.equal(formatTime(9), "0m 09s");
  assert.equal(formatTime(66), "1m 06s");
  assert.equal(formatTime(3599), "59m 59s");
});

test("le premier du classement est 1er, pas 1e", () => {
  assert.match(rankCounter(16, 1), /vous êtes 1er$/);
  assert.equal(rankCounter(16, 1).includes("1e "), false);
  assert.equal(rankCounter(16, 1).endsWith("1ere"), false);
});

test("tous les autres rangs gardent le e du gabarit", () => {
  assert.match(rankCounter(16, 2), /vous êtes 2e$/);
  assert.match(rankCounter(16, 15), /vous êtes 15e$/);
  assert.match(rankCounter(120, 21), /vous êtes 21e$/);
});

test("le compteur porte bien le total, et la marque ne fuit jamais", () => {
  for (const [total, rank] of [
    [1, 1],
    [16, 16],
    [120, 21],
    [999, 999],
  ] as const) {
    const line = rankCounter(total, rank);
    assert.equal(line.includes("@@RANG@@"), false, line);
    assert.equal(line.startsWith(`${total} parcours`), true, line);
  }
});
