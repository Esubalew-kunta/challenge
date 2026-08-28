/**
 * La forme des banques de questions, langue par langue.
 *
 * Ces contrôles étaient dans le test du moteur, pointés sur le français. Ils
 * sont ici parce qu'ils ne parlent pas du moteur : ils décrivent ce qu'une
 * banque doit être, quelle que soit la langue, et l'anglais devra y répondre
 * exactement comme le français.
 *
 * Une langue non livrée ne fait pas échouer la suite, elle se signale. Un test
 * rouge pour du travail qui n'a pas commencé finit par être ignoré, et c'est
 * précisément le test qu'on ne veut pas voir devenir du bruit.
 *
 * Ce que ces contrôles n'attrapent PAS, et personne d'autre non plus : une
 * traduction qui déplace la bonne réponse. La bonne réponse est à l'index 0 par
 * convention, sans marqueur dans les données, donc une banque dont les options
 * ont été réordonnées reste parfaitement valide et note faux. La seule défense
 * est la règle de traduction : on ne réordonne jamais les options.
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import { TIERS, assertBankIsWellFormed } from "../src/lib/benchmark/engine.ts";
import { bankIsDelivered, contentFor } from "../src/lib/benchmark/content/index.ts";
import { LOCALES } from "../src/lib/i18n.ts";
import type { Locale } from "../src/lib/i18n.ts";

const TRACK_IDS = ["growth", "eng", "ops", "fin"];
const PER_TIER = 9;
const PALIER_ORDER = [1, 1, 1, 2, 2, 2, 3, 3, 3];

const delivered = LOCALES.filter((locale) => bankIsDelivered(locale));
const pending = LOCALES.filter((locale) => !bankIsDelivered(locale));

test("au moins une langue a sa banque", () => {
  // Si celui-ci tombe, ce n'est plus une traduction en attente : c'est le
  // contenu français qui a disparu.
  assert.ok(delivered.length > 0, "aucune banque livrée");
  if (pending.length > 0) {
    console.log(`[banque] non livrée, non testée : ${pending.join(", ")}`);
  }
});

for (const locale of delivered as Locale[]) {
  const { TRACKS, ROLES, TIER_LABEL, HASHTAGS } = contentFor(locale);

  test(`[${locale}] quatre tracks, 108 questions, dans l'ordre du PRD`, () => {
    assert.deepEqual(
      TRACKS.map((t) => t.id),
      TRACK_IDS,
    );
    assert.equal(
      TRACKS.reduce(
        (n, t) => n + TIERS.reduce((m, tier) => m + t.bank[tier].length, 0),
        0,
      ),
      // TOTAL_QUESTIONS vaut 9 : c'est le compte d'un niveau, pas d'un track.
      PER_TIER * TIERS.length * TRACKS.length,
    );
  });

  test(`[${locale}] chaque niveau a ses neuf questions, rangées 1-1-1 / 2-2-2 / 3-3-3`, () => {
    for (const track of TRACKS) {
      // Le moteur a son propre contrôle, plus strict sur ce qu'il consomme :
      // on l'appelle plutôt que de le réécrire ici.
      assertBankIsWellFormed(track);

      for (const tier of TIERS) {
        const questions = track.bank[tier];
        assert.equal(questions.length, PER_TIER, `${track.code} ${tier}`);
        assert.deepEqual(
          questions.map((q) => q.p),
          PALIER_ORDER,
          `${track.code} ${tier}`,
        );
      }
    }
  });

  test(`[${locale}] quatre options distinctes et non vides partout`, () => {
    for (const track of TRACKS) {
      for (const tier of TIERS) {
        for (const q of track.bank[tier]) {
          const where = `${track.code} ${tier} « ${q.q.slice(0, 40)} »`;
          assert.equal(q.o.length, 4, where);
          for (const option of q.o) {
            assert.equal(typeof option, "string", where);
            assert.notEqual(option.trim(), "", `option vide : ${where}`);
          }
          assert.equal(
            new Set(q.o.map((o) => o.trim())).size,
            4,
            `options en double : ${where}`,
          );
        }
      }
    }
  });

  test(`[${locale}] chaque question a un énoncé et une explication`, () => {
    for (const track of TRACKS) {
      for (const tier of TIERS) {
        for (const q of track.bank[tier]) {
          assert.notEqual(q.q.trim(), "", `${track.code} ${tier} : énoncé vide`);
          assert.notEqual(
            q.why.trim(),
            "",
            `${track.code} ${tier} « ${q.q.slice(0, 40)} » : pas d'explication`,
          );
        }
      }
    }
  });

  test(`[${locale}] aucun énoncé en double dans un track`, () => {
    // Deux fois la même question, c'est deux fois la même à un lecteur qui
    // rejoue, et c'est le premier symptôme d'un copier-coller de traduction.
    for (const track of TRACKS) {
      const seen = new Map<string, string>();
      for (const tier of TIERS) {
        for (const q of track.bank[tier]) {
          const key = q.q.trim().toLowerCase();
          const first = seen.get(key);
          assert.equal(
            first,
            undefined,
            `${track.code} : « ${q.q.slice(0, 60)} » apparaît en ${first} et en ${tier}`,
          );
          seen.set(key, tier);
        }
      }
    }
  });

  test(`[${locale}] un lien contextuel a toujours un libellé et une URL`, () => {
    for (const track of TRACKS) {
      for (const tier of TIERS) {
        for (const q of track.bank[tier]) {
          if (!q.link) continue;
          const where = `${track.code} ${tier} « ${q.q.slice(0, 40)} »`;
          assert.notEqual(q.link.label.trim(), "", where);
          assert.match(q.link.url, /^https?:\/\/|^\//, where);
        }
      }
    }
  });

  test(`[${locale}] le track porte son nom, sa description et ses tags`, () => {
    for (const track of TRACKS) {
      for (const field of ["name", "desc", "tags"] as const) {
        assert.notEqual(track[field].trim(), "", `${track.code}.${field}`);
      }
    }
  });

  test(`[${locale}] huit rôles par track, aucun vide, aucun doublon`, () => {
    for (const id of TRACK_IDS) {
      const roles = ROLES[id as keyof typeof ROLES];
      assert.equal(roles.length, 8, id);
      assert.equal(new Set(roles).size, 8, `rôles en double : ${id}`);
      for (const role of roles) assert.notEqual(role.trim(), "", id);
    }
  });

  test(`[${locale}] les trois libellés de niveau et les quatre hashtags sont écrits`, () => {
    for (const tier of TIERS) {
      assert.notEqual(TIER_LABEL[tier].trim(), "", tier);
    }
    for (const id of TRACK_IDS) {
      assert.notEqual(HASHTAGS[id as keyof typeof HASHTAGS].trim(), "", id);
    }
  });
}
