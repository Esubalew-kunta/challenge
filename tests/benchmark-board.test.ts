import { test } from "node:test";
import assert from "node:assert/strict";

import { BOARD_SIZE, buildBoard, type StoredRow } from "../src/lib/benchmark/board.ts";
import { SEED_BOARD } from "../src/lib/benchmark/content/index.ts";
import { frenchOrdinal, rankCounter } from "../src/lib/benchmark/format.ts";

function row(over: Partial<StoredRow> = {}): StoredRow {
  return {
    id: "id-1",
    publicName: "Esubalew K.",
    company: "AI Makers",
    trackId: "eng",
    finalTier: "expert",
    score: 240,
    attempt: 1,
    durationSeconds: 300,
    createdAt: "2026-08-28T10:00:00Z",
    ...over,
  };
}

test("sans aucun vrai parcours, le tableau est celui d'amorçage", () => {
  const board = buildBoard([]);

  assert.equal(board.total, SEED_BOARD.length);
  assert.equal(board.rows.length, BOARD_SIZE);
  assert.equal(board.yourRank, null);
  assert.equal(board.rows.every((r) => r.isSeed), true);
  assert.equal(board.rows[0].score, 240);
});

test("à score égal, un vrai parcours passe devant un exemple", () => {
  // Amélie R. est l'exemple à 240. Le vrai parcours doit lui passer devant.
  const board = buildBoard([row({ id: "moi" })], "moi");

  assert.equal(board.rows[0].isYou, true);
  assert.equal(board.rows[0].isSeed, false);
  assert.equal(board.rows[0].rank, 1);
  assert.equal(board.rows[1].isSeed, true);
  assert.equal(board.rows[1].score, 240);
  assert.equal(board.yourRank, 1);
  assert.equal(board.total, SEED_BOARD.length + 1);
});

test("entre deux vrais parcours à égalité, le plus rapide gagne", () => {
  const board = buildBoard(
    [
      row({ id: "lent", publicName: "Lent L.", durationSeconds: 400 }),
      row({ id: "vite", publicName: "Vite V.", durationSeconds: 200 }),
    ],
    "lent",
  );

  assert.deepEqual(
    board.rows.slice(0, 2).map((r) => r.name),
    ["Vite V.", "Lent L."],
  );
  assert.equal(board.yourRank, 2);
});

test("à durée égale, la soumission la plus ancienne gagne", () => {
  const board = buildBoard([
    row({ id: "tard", publicName: "Tard T.", createdAt: "2026-08-28T12:00:00Z" }),
    row({ id: "tot", publicName: "Tot T.", createdAt: "2026-08-28T09:00:00Z" }),
  ]);

  assert.deepEqual(
    board.rows.slice(0, 2).map((r) => r.name),
    ["Tot T.", "Tard T."],
  );
});

test("une reprise porte son badge, une première tentative non", () => {
  const board = buildBoard([
    row({ id: "a", publicName: "Un U.", attempt: 3 }),
    row({ id: "b", publicName: "Deux D.", attempt: 1, durationSeconds: 301 }),
  ]);

  assert.equal(board.rows.find((r) => r.name === "Un U.")?.isRetake, true);
  assert.equal(board.rows.find((r) => r.name === "Deux D.")?.isRetake, false);
});

test("hors du top 10, la ligne du lecteur est épinglée avec son vrai rang", () => {
  // Un score de 10 : dernier derrière les quatorze exemples.
  const board = buildBoard([row({ id: "moi", score: 10, finalTier: "beginner" })], "moi");

  assert.equal(board.rows.length, BOARD_SIZE + 1);
  const pinned = board.rows[board.rows.length - 1];
  assert.equal(pinned.isYou, true);
  assert.equal(pinned.rank, SEED_BOARD.length + 1);
  assert.equal(board.yourRank, SEED_BOARD.length + 1);
  // Les dix premières lignes restent le vrai top 10.
  assert.deepEqual(
    board.rows.slice(0, BOARD_SIZE).map((r) => r.rank),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
});

test("le classement ne transporte ni e-mail, ni durée, ni date", () => {
  const board = buildBoard([row({ id: "moi" })], "moi");
  const keys = Object.keys(board.rows[0]).sort();

  assert.deepEqual(keys, [
    "company",
    "isRetake",
    "isSeed",
    "isYou",
    "name",
    "rank",
    "score",
    "tier",
    "trackId",
  ]);
});

test("les rangs se suivent sans trou", () => {
  const many = Array.from({ length: 5 }, (_, i) =>
    row({ id: `r${i}`, publicName: `P${i} X.`, score: 200 - i * 10, durationSeconds: 100 + i }),
  );
  const board = buildBoard(many, "r0");

  assert.deepEqual(
    board.rows.slice(0, BOARD_SIZE).map((r) => r.rank),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
  assert.equal(board.total, SEED_BOARD.length + many.length);
});

/* --------------------------------------------------------------------------
   Le classement d'amorçage doit rester jouable.

   Trois de ses lignes portaient des scores qu'aucun parcours ne peut produire.
   Ce test verrouille la correction : il rejoue les 64 chemins du moteur et
   refuse tout score d'exemple hors de l'ensemble atteignable, ou atteignable
   mais jamais avec ce niveau de sortie.
   -------------------------------------------------------------------------- */

const PTS = { beginner: 10, intermediate: 20, expert: 30 } as const;
type Tier = keyof typeof PTS;

const up = (t: Tier): Tier => (t === "beginner" ? "intermediate" : "expert");
const down = (t: Tier): Tier => (t === "expert" ? "intermediate" : "beginner");
const after = (t: Tier, correct: number): Tier =>
  correct === 3 ? up(t) : correct === 2 ? t : down(t);

/** Lecture B : le niveau final est celui joué au round 3. */
function reachable(): Map<number, Set<Tier>> {
  const out = new Map<number, Set<Tier>>();
  for (let a = 0; a <= 3; a++) {
    const t1: Tier = "intermediate";
    const t2 = after(t1, a);
    for (let b = 0; b <= 3; b++) {
      const t3 = after(t2, b);
      for (let c = 0; c <= 3; c++) {
        const score = a * PTS[t1] + b * PTS[t2] + c * PTS[t3];
        if (!out.has(score)) out.set(score, new Set());
        out.get(score)!.add(t3);
      }
    }
  }
  return out;
}

test("chaque parcours d'exemple est un parcours qu'on peut réellement faire", () => {
  const valid = reachable();

  for (const row of SEED_BOARD) {
    const tiers = valid.get(row.score);
    assert.ok(tiers, `${row.name} : le score ${row.score} n'est pas atteignable`);
    assert.ok(
      tiers.has(row.tier as Tier),
      `${row.name} : ${row.score} est atteignable mais jamais en finissant ${row.tier}`,
    );
  }
});

test("les quatre scores impossibles ne peuvent pas revenir", () => {
  const valid = reachable();
  for (const impossible of [170, 200, 220, 230]) {
    assert.equal(valid.has(impossible), false);
    assert.equal(
      SEED_BOARD.some((r) => r.score === impossible),
      false,
      `${impossible} est réapparu dans le classement d'amorçage`,
    );
  }
});

test("les scores d'exemple restent uniques et rangés du plus haut au plus bas", () => {
  const scores = SEED_BOARD.map((r) => r.score);
  assert.equal(new Set(scores).size, scores.length);
  assert.deepEqual(scores, [...scores].sort((a, b) => b - a));
});

test("le premier du classement est 1er, pas 1e", () => {
  assert.equal(frenchOrdinal(1), "1er");
  assert.equal(frenchOrdinal(2), "2e");
  assert.equal(frenchOrdinal(17), "17e");

  // Le gabarit validé se termine par « vous êtes {rang}e » : le « e » de la
  // chaîne doit disparaître pour le premier et rester pour tous les autres.
  assert.match(rankCounter(15, 1, "fr"), /vous êtes 1er$/);
  assert.match(rankCounter(15, 2, "fr"), /vous êtes 2e$/);
  assert.match(rankCounter(120, 21, "fr"), /vous êtes 21e$/);

  // Et le nombre de parcours ne doit pas être abîmé au passage.
  assert.match(rankCounter(21, 1, "fr"), /^21 parcours/);
});
