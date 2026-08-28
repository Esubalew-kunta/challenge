import { test } from "node:test";
import assert from "node:assert/strict";

import {
  MAX_SCORE,
  PER_ROUND,
  POINTS,
  ROUNDS,
  TIERS,
  TOTAL_QUESTIONS,
  advanceRound,
  assertBankIsWellFormed,
  buildPools,
  drawQuestion,
  isRunOver,
  makeRunCode,
  recordAnswer,
  roundVerdict,
  startRun,
  summarise,
  type RunState,
} from "../src/lib/benchmark/engine.ts";
import { TRACKS, trackById } from "../src/lib/benchmark/content/index.ts";
import type { Track } from "../src/lib/benchmark/types.ts";

/* Un générateur déterministe : les mêmes tests doivent donner le même
   résultat à chaque exécution, sinon un échec sur mille passages ne se
   reproduit jamais. */
function seeded(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

const ANY_TRACK = TRACKS[0];

/** Joue un parcours complet en visant un nombre exact de bonnes réponses par
 *  round. Renvoie l'état final et la trace des questions servies. */
function play(
  track: Track,
  perRound: [number, number, number],
  seed = 1,
): { run: RunState; served: { round: number; palier: number; tier: string; q: string }[] } {
  const rng = seeded(seed);
  let run = startRun(track, { rng, now: 0 });
  const served: { round: number; palier: number; tier: string; q: string }[] = [];

  for (let round = 0; round < ROUNDS; round++) {
    const target = perRound[round];
    for (let i = 0; i < PER_ROUND; i++) {
      const drawn = drawQuestion(run, rng);
      served.push({
        round: run.round,
        palier: drawn.palier,
        tier: drawn.tier,
        q: drawn.q,
      });
      // Les `target` premières sont justes, les suivantes fausses.
      const picked = i < target ? drawn.answer : (drawn.answer + 1) % 4;
      run = recordAnswer(run, drawn, picked);
    }
    if (!isRunOver(run)) run = advanceRound(run);
  }

  return { run, served };
}

test("un parcours parfait vaut exactement 240 et se termine en expert", () => {
  const { run } = play(ANY_TRACK, [3, 3, 3]);
  const card = summarise(run, 240_000);

  assert.equal(card.score, 240);
  assert.equal(card.score, MAX_SCORE);
  assert.equal(card.correctCount, TOTAL_QUESTIONS);
  assert.equal(card.finalTier, "expert");

  // 3 sur 3 en intermédiaire, promotion, puis 3 sur 3 deux fois en expert.
  assert.deepEqual(
    card.roundResults.map((r) => [r.round, r.tier, r.palier, r.correct, r.points]),
    [
      [1, "intermediate", 1, 3, 60],
      [2, "expert", 2, 3, 90],
      [3, "expert", 3, 3, 90],
    ],
  );
});

test("le round 3 sert du palier 3 même après deux rétrogradations", () => {
  const { run, served } = play(ANY_TRACK, [0, 0, 3]);

  // Descendu à débutant, et pourtant les trois dernières questions sont les
  // trois plus difficiles de la banque débutant.
  const round3 = served.filter((s) => s.round === 2);
  assert.equal(round3.length, 3);
  for (const s of round3) {
    assert.equal(s.tier, "beginner");
    assert.equal(s.palier, 3);
  }

  assert.equal(run.roundResults[2].tier, "beginner");
  assert.equal(run.roundResults[2].palier, 3);
});

test("le palier suit le round sur les 64 chemins possibles, quel que soit le niveau", () => {
  for (let a = 0; a <= 3; a++) {
    for (let b = 0; b <= 3; b++) {
      for (let c = 0; c <= 3; c++) {
        const { served } = play(ANY_TRACK, [a, b, c], a * 16 + b * 4 + c + 1);
        for (const s of served) {
          assert.equal(
            s.palier,
            s.round + 1,
            `chemin ${a}/${b}/${c} : round ${s.round + 1} a servi du palier ${s.palier}`,
          );
        }
      }
    }
  }
});

test("aucune question n'est servie deux fois dans un parcours, même en restant au même niveau", () => {
  // 2, 2, 2 maintient le niveau intermédiaire du début à la fin : les trois
  // rounds tirent dans la même file, et pourtant à des index disjoints.
  const { served } = play(ANY_TRACK, [2, 2, 2]);
  const texts = served.map((s) => s.q);
  assert.equal(new Set(texts).size, TOTAL_QUESTIONS);
  assert.deepEqual(new Set(served.map((s) => s.tier)), new Set(["intermediate"]));
});

test("l'ensemble des scores atteignables, et rien d'autre", () => {
  const scores = new Set<number>();
  for (let a = 0; a <= 3; a++) {
    for (let b = 0; b <= 3; b++) {
      for (let c = 0; c <= 3; c++) {
        const { run } = play(ANY_TRACK, [a, b, c], a * 16 + b * 4 + c + 1);
        scores.add(summarise(run, 1000).score);
      }
    }
  }

  assert.deepEqual(
    [...scores].sort((x, y) => x - y),
    [
      0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
      180, 190, 210, 240,
    ],
  );

  // Les trous comptent autant que le reste : trois lignes du classement
  // d'amorçage se sont posées dessus.
  for (const impossible of [170, 200, 220, 230]) {
    assert.equal(scores.has(impossible), false, `${impossible} ne doit pas être atteignable`);
  }
});

test("un 3 sur 3 au round 3 ne fait monter personne : le niveau final est celui joué", () => {
  // 2, 2, 3 : intermédiaire tout du long, puis un sans-faute au dernier round.
  const { run } = play(ANY_TRACK, [2, 2, 3]);
  const card = summarise(run, 1000);

  assert.equal(card.score, 140);
  assert.equal(card.finalTier, "intermediate");
  assert.equal(card.roundResults[2].tier, "intermediate");
});

test("les cinq verdicts tombent au bon endroit et ne bougent pas les plafonds", () => {
  const cases: [number[], string, string, string][] = [
    [[3], "montee", "intermediate", "expert"],
    [[3, 3], "plafond", "expert", "expert"],
    [[0], "descente", "intermediate", "beginner"],
    [[0, 0], "plancher", "beginner", "beginner"],
    [[2], "maintien", "intermediate", "intermediate"],
  ];

  for (const [path, expected, tierBefore, tierAfter] of cases) {
    const rng = seeded(7);
    let run = startRun(ANY_TRACK, { rng, now: 0 });
    let verdict = null as ReturnType<typeof roundVerdict> | null;

    for (const target of path) {
      for (let i = 0; i < PER_ROUND; i++) {
        const drawn = drawQuestion(run, rng);
        run = recordAnswer(run, drawn, i < target ? drawn.answer : (drawn.answer + 1) % 4);
      }
      verdict = roundVerdict(run);
      if (!isRunOver(run)) run = advanceRound(run);
    }

    assert.equal(verdict?.case, expected);
    assert.equal(verdict?.tierBefore, tierBefore);
    assert.equal(verdict?.tierAfter, tierAfter);
    // Chaque verdict annonce le palier suivant : un maintien n'est pas du
    // surplace, la difficulté avance quand même.
    assert.equal(verdict?.nextPalier, path.length + 1);
  }
});

test("le temps écoulé est un cas distinct d'une mauvaise réponse, et vaut zéro", () => {
  const rng = seeded(3);
  let run = startRun(ANY_TRACK, { rng, now: 0 });

  const first = drawQuestion(run, rng);
  run = recordAnswer(run, first, null);

  assert.equal(run.answers[0].outcome, "timeout");
  assert.equal(run.answers[0].picked, null);
  assert.equal(run.answers[0].points, 0);
  assert.equal(run.score, 0);

  const second = drawQuestion(run, rng);
  run = recordAnswer(run, second, (second.answer + 1) % 4);

  assert.equal(run.answers[1].outcome, "wrong");
  assert.notEqual(run.answers[1].picked, null);
  assert.equal(run.score, 0);
});

test("les files sont mélangées à l'intérieur d'un palier et jamais entre paliers", () => {
  const pools = buildPools(ANY_TRACK, seeded(11));

  for (const tier of TIERS) {
    assert.deepEqual(
      pools[tier].map((q) => q.p),
      [1, 1, 1, 2, 2, 2, 3, 3, 3],
      `file ${tier} mal rangée`,
    );
    assert.equal(new Set(pools[tier].map((q) => q.q)).size, TOTAL_QUESTIONS);
  }

  // Deux graines différentes donnent deux ordres différents, sinon le mélange
  // ne mélange rien.
  const other = buildPools(ANY_TRACK, seeded(999));
  const sameOrder = TIERS.every((tier) =>
    pools[tier].every((q, i) => q.q === other[tier][i].q),
  );
  assert.equal(sameOrder, false);
});

test("le mélange des options garde la bonne réponse, quelle que soit sa lettre", () => {
  const rng = seeded(5);
  const run = startRun(ANY_TRACK, { rng, now: 0 });
  const positions = new Set<number>();

  for (let i = 0; i < 200; i++) {
    const drawn = drawQuestion(run, rng);
    assert.equal(drawn.options.length, 4);
    assert.equal(drawn.options.filter((o) => o.correct).length, 1);
    assert.equal(drawn.options[drawn.answer].correct, true);

    // La bonne réponse est écrite à l'index 0 dans le contenu : après mélange,
    // c'est toujours le même texte.
    const source = ANY_TRACK.bank[run.tier].find((q) => q.q === drawn.q);
    assert.equal(drawn.options[drawn.answer].text, source?.o[0]);

    positions.add(drawn.answer);
  }

  // Les quatre lettres sortent, sinon le mélange est biaisé.
  assert.deepEqual([...positions].sort(), [0, 1, 2, 3]);
});

test("chaque track livré est rangé comme le moteur l'attend", () => {
  for (const track of TRACKS) {
    assertBankIsWellFormed(track);
    for (const tier of TIERS) {
      assert.equal(track.bank[tier].length, TOTAL_QUESTIONS, `${track.code}/${tier}`);
    }
  }
  // TRK-04 « fin » n'est pas encore livré. Ce chiffre monte à 4 quand il arrive.
  assert.equal(TRACKS.length, 3);
});

test("une banque mal rangée est refusée plutôt que servie de travers", () => {
  const broken = JSON.parse(JSON.stringify(ANY_TRACK)) as Track;
  broken.bank.beginner[0].p = 3;
  assert.throws(() => assertBankIsWellFormed(broken), /palier 3, il faut 1/);

  const short = JSON.parse(JSON.stringify(ANY_TRACK)) as Track;
  short.bank.expert.pop();
  assert.throws(() => assertBankIsWellFormed(short), /8 questions/);

  const threeOptions = JSON.parse(JSON.stringify(ANY_TRACK)) as Track;
  threeOptions.bank.intermediate[4].o.pop();
  assert.throws(() => assertBankIsWellFormed(threeOptions), /3 options/);
});

test("le code de session fait quatre caractères, majuscules et chiffres", () => {
  const rng = seeded(42);
  for (let i = 0; i < 500; i++) {
    assert.match(makeRunCode(rng), /^[A-Z0-9]{4}$/);
  }
});

test("les points par niveau sont ceux du PRD", () => {
  assert.deepEqual(POINTS, { beginner: 10, intermediate: 20, expert: 30 });
  assert.equal(PER_ROUND * ROUNDS, 9);
});

test("un track sans banque ne se propose pas et ne se démarre pas", () => {
  // TRK-04 « fin » a ses rôles mais pas ses 27 questions. Il ne doit apparaître
  // nulle part tant que la banque n'est pas livrée : une carte cliquable qui ne
  // lance rien est pire qu'une carte absente.
  assert.equal(
    TRACKS.some((t) => t.id === "fin"),
    false,
  );
  assert.equal(trackById("fin"), undefined);

  // Et le jour où la banque arrive mal rangée, le moteur refuse au lieu de
  // servir la mauvaise difficulté en silence.
  const broken = JSON.parse(JSON.stringify(TRACKS[0])) as Track;
  broken.bank.beginner.pop();
  assert.throws(() => startRun(broken), /8 questions/);
});
