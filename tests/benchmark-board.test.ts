import { test } from "node:test";
import assert from "node:assert/strict";

import { BOARD_SIZE, buildBoard, type StoredRow } from "../src/lib/benchmark/board.ts";
import { frenchOrdinal, rankCounter } from "../src/lib/benchmark/format.ts";

function row(over: Partial<StoredRow> = {}): StoredRow {
  return {
    id: "id-1",
    publicName: "Esubalew K.",
    trackId: "eng",
    finalTier: "expert",
    score: 240,
    attempt: 1,
    durationSeconds: 300,
    createdAt: "2026-08-28T10:00:00Z",
    ...over,
  };
}

/* Le classement d'amorçage a été retiré le 31 août : le tableau ne montre plus
   que des parcours réels. Ces deux tests portaient sur la fusion, ils portent
   maintenant sur son absence. */

test("sans aucun parcours, le tableau est vide et n'invente rien", () => {
  const board = buildBoard([]);

  assert.equal(board.total, 0);
  assert.equal(board.rows.length, 0);
  assert.equal(board.yourRank, null);
});

test("un seul parcours occupe la première place", () => {
  const board = buildBoard([row({ id: "moi" })], "moi");

  assert.equal(board.rows.length, 1);
  assert.equal(board.rows[0].isYou, true);
  assert.equal(board.rows[0].rank, 1);
  assert.equal(board.yourRank, 1);
  assert.equal(board.total, 1);
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
  /* Quatorze parcours devant, tous meilleurs, puis le lecteur bon dernier.
     Le nombre vient de ce qu'il faut pour dépasser BOARD_SIZE, pas du défunt
     classement d'amorçage. */
  const others = Array.from({ length: 14 }, (_, i) =>
    row({ id: `r${i}`, publicName: `P${i} X.`, score: 240 - i * 10, durationSeconds: 100 + i }),
  );
  const board = buildBoard([...others, row({ id: "moi", score: 10, finalTier: "beginner" })], "moi");

  assert.equal(board.rows.length, BOARD_SIZE + 1);
  const pinned = board.rows[board.rows.length - 1];
  assert.equal(pinned.isYou, true);
  assert.equal(pinned.rank, 15);
  assert.equal(board.yourRank, 15);
  // Les dix premières lignes restent le vrai top 10.
  assert.deepEqual(
    board.rows.slice(0, BOARD_SIZE).map((r) => r.rank),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
});

/**
 * Ce test est la garantie, pas le commentaire au-dessus du champ.
 *
 * L'entreprise a rejoint la liste des choses qui ne sortent pas du serveur le
 * 31 août, avant le partage du Benchmark à un groupe : « prénom + employeur +
 * niveau débutant » désigne une personne dans une petite structure, et le
 * classement est public à qui possède le lien. Masquer la colonne en CSS ne
 * suffisait pas, la valeur voyageait quand même dans la réponse réseau.
 */
test("le classement ne transporte ni e-mail, ni entreprise, ni durée, ni date", () => {
  const board = buildBoard([row({ id: "moi" })], "moi");
  const keys = Object.keys(board.rows[0]).sort();

  assert.deepEqual(keys, [
    "isRetake",
    "isYou",
    "name",
    "rank",
    "score",
    "tier",
    "trackId",
  ]);
});

test("les rangs se suivent sans trou", () => {
  /* Douze parcours, pour que le top 10 soit rempli par de vraies lignes. Le
     compte était de cinq du temps où les exemples complétaient le tableau. */
  const many = Array.from({ length: 12 }, (_, i) =>
    row({ id: `r${i}`, publicName: `P${i} X.`, score: 240 - i * 10, durationSeconds: 100 + i }),
  );
  const board = buildBoard(many, "r0");

  assert.deepEqual(
    board.rows.slice(0, BOARD_SIZE).map((r) => r.rank),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  );
  assert.equal(board.total, many.length);
});

/* Les trois tests qui vérifiaient le classement d'amorçage sont partis avec lui
   le 31 août : ils rejouaient les 64 chemins du moteur pour refuser tout score
   d'exemple inatteignable. Le tableau ne montre plus que des parcours réels,
   dont les scores sortent du moteur par construction, donc il n'y a plus rien
   à vérifier de ce côté. Les scores impossibles connus étaient 170, 200, 220
   et 230 ; `benchmark-badge` refuse déjà tout score qui n'est pas un multiple
   de 10 entre 0 et 240. */

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
