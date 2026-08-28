/**
 * La couche de chaînes, dans les deux langues.
 *
 * Ce que ces tests protègent : la parité des clés. Une locale qui perd une clé
 * ne casse rien au build ni au typage — elle lève chez le lecteur, sur l'écran
 * qui demande la clé manquante, et seulement sur celui-là. C'est exactement le
 * genre de trou qu'une traduction de 136 chaînes produit.
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import { STRINGS_FR, DRAFT_KEYS_FR } from "../src/lib/benchmark/strings.fr.ts";
import { STRINGS_EN, DRAFT_KEYS_EN } from "../src/lib/benchmark/strings.en.ts";
import { contentFor } from "../src/lib/benchmark/content/index.ts";
import { LOCALES } from "../src/lib/i18n.ts";
import {
  draftStringKeys,
  keyDriftAgainstReference,
  localeIsComplete,
  missingStringKeys,
  s,
  sf,
} from "../src/lib/benchmark/strings.ts";

test("les deux langues portent exactement les mêmes clés", () => {
  const drift = keyDriftAgainstReference("en");
  assert.deepEqual(drift.missing, [], "clés absentes de l'anglais");
  assert.deepEqual(drift.extra, [], "clés en trop côté anglais");
});

test("les clés sont dans le même ordre des deux côtés", () => {
  // L'ordre n'a aucun effet à l'exécution. Il a un effet en relecture : les
  // deux fichiers se lisent en vis-à-vis, et une clé déplacée fait diverger
  // deux colonnes qu'on compare à l'œil.
  assert.deepEqual(Object.keys(STRINGS_EN), Object.keys(STRINGS_FR));
});

test("le français est complet et le reste", () => {
  assert.deepEqual(missingStringKeys("fr"), []);
  assert.equal(localeIsComplete("fr"), true);
});

test("ce qui est provisoire en français l'est aussi en anglais", () => {
  // Une traduction ne valide pas ce qu'elle traduit : si le français attend
  // Othmane, l'anglais l'attend aussi. L'inverse n'est pas vrai, et c'est
  // voulu : tout l'anglais est une traduction que personne n'a relue, donc
  // l'ensemble anglais est un sur-ensemble, pas une copie.
  for (const key of DRAFT_KEYS_FR) {
    assert.ok(DRAFT_KEYS_EN.has(key), `validée en anglais, provisoire en français : ${key}`);
  }
});

test("aucune clé anglaise ne se déclare validée par accident", () => {
  // Le jour où cet ensemble rétrécit, ce sera une décision, pas un oubli. Le
  // test dit alors combien de clés Youssef a validées, ce qui se relit.
  const approved = Object.keys(STRINGS_EN).filter((key) => !DRAFT_KEYS_EN.has(key));
  assert.deepEqual(approved, [], `clés anglaises hors du régime provisoire : ${approved.join(", ")}`);
});

test("toute clé provisoire existe bien dans la table", () => {
  for (const key of DRAFT_KEYS_FR) {
    assert.ok(key in STRINGS_FR, `clé provisoire fantôme : ${key}`);
  }
});

test("draftStringKeys ne compte que les provisoires réellement écrites", () => {
  const written = draftStringKeys("fr");
  assert.equal(written.length, DRAFT_KEYS_FR.size);
  // Côté anglais, tout est écrit et tout est provisoire.
  assert.equal(draftStringKeys("en").length, DRAFT_KEYS_EN.size);
});

test("une clé inconnue lève au lieu de rendre du vide", () => {
  assert.throws(() => s("clé.qui.nexiste.pas", "fr"), /clé de chaîne inconnue/);
});

test("hors production, une chaîne vide se voit au lieu de passer", () => {
  // Aucune clé n'est vide aujourd'hui : on en vide une pour le temps du test,
  // parce que c'est ce comportement-là qui protège la mise en ligne.
  const key = "landing.cta";
  const kept = STRINGS_EN[key];
  try {
    STRINGS_EN[key] = "";
    assert.equal(s(key, "en"), `⟦${key}⟧`);
  } finally {
    STRINGS_EN[key] = kept;
  }
});

test("aucune chaîne anglaise n'est restée en français", () => {
  // Une clé recopiée du français au lieu d'être traduite passe tous les autres
  // contrôles : même clé, même jetons, valeur non vide. Seules les valeurs
  // vraiment identiques des deux côtés sont légitimes, et elles se listent.
  const SAME_IN_BOTH = new Set([
    "status.session",
    "status.track",
    "status.round",
    "status.score",
    "onboarding.counter",
    "onboarding.step1.placeholder",
    "question.points",
    "question.optionA",
    "question.optionB",
    "question.optionC",
    "question.optionD",
    "scorecard.scoreOutOf",
    "corrige.correctAnswer",
    "corrige.yourAnswer",
    "leaderboard.colRank",
    "leaderboard.colScore",
    "landing.stat1.value",
    "landing.stat2.value",
    "landing.stat3.value",
    "landing.stat4.value",
    // Les trois mots qui s'écrivent pareil dans les deux langues. Vérifiés un
    // par un le 28 août : « Expert », « Questions », « Tracks ».
    "tier.expert",
    "landing.stat1.label",
    "landing.stat3.label",
  ]);

  const untranslated = Object.keys(STRINGS_FR).filter(
    (key) => STRINGS_EN[key] === STRINGS_FR[key] && !SAME_IN_BOTH.has(key),
  );
  assert.deepEqual(untranslated, [], `restées en français : ${untranslated.join(", ")}`);
});

test("sf remplace les jetons connus et laisse les autres visibles", () => {
  const line = sf("status.palier", { n: 2 }, "fr");
  assert.equal(line.includes("{n}"), false);
  assert.equal(line.includes("2"), true);

  const missing = sf("status.palier", {}, "fr");
  assert.equal(missing.includes("{n}"), true, "un jeton sans valeur reste visible");
});

test("aucun jeton du français ne disparaît de la traduction", () => {
  // Contrôle qui ne mord qu'une fois l'anglais rempli, et qui mordra : les
  // {jetons} sont des clés, pas du texte. Traduire {niveau} en {level} ne casse
  // ni le typage ni le rendu — la valeur n'arrive simplement jamais, et la
  // phrase part en ligne avec un {level} en toutes lettres au milieu.
  const tokens = (value: string) =>
    [...value.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

  for (const [key, fr] of Object.entries(STRINGS_FR)) {
    const en = STRINGS_EN[key];
    if (!en) continue; // pas encore traduite
    assert.deepEqual(tokens(en), tokens(fr), `jetons divergents sur ${key}`);
  }
});

/* ------------------------------------------------------- copie de partage --
   Le post LinkedIn et le message de défi ne passent pas par `sf` : la carte de
   score y fait des `replaceAll` sur les jetons. Aucun garde-fou ne les couvrait
   donc, alors que ce sont les deux chaînes les plus exposées du produit, celles
   qu'un lecteur colle telles quelles sur un réseau public. */

const shareTokens = (value: string) =>
  [...value.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

test("le post LinkedIn et le message de défi gardent leurs jetons dans chaque langue", () => {
  const reference = contentFor("fr");
  for (const locale of LOCALES) {
    const { POST_LINKEDIN, DEFI_COLLEGUE } = contentFor(locale);
    if (!POST_LINKEDIN) continue; // langue pas encore livrée
    assert.deepEqual(
      shareTokens(POST_LINKEDIN),
      shareTokens(reference.POST_LINKEDIN),
      `jetons du post LinkedIn divergents en ${locale}`,
    );
    assert.deepEqual(
      shareTokens(DEFI_COLLEGUE),
      shareTokens(reference.DEFI_COLLEGUE),
      `jetons du message de défi divergents en ${locale}`,
    );
  }
});

test("le message de défi se termine bien sur aimakers.fr", () => {
  // La carte de score ajoute le lien profond à la ligne suivante, sans jeton de
  // lien : la phrase validée reste intacte, mais elle doit se terminer là où le
  // lien vient se coller.
  for (const locale of LOCALES) {
    const { DEFI_COLLEGUE } = contentFor(locale);
    if (!DEFI_COLLEGUE) continue;
    assert.ok(
      DEFI_COLLEGUE.trimEnd().endsWith("aimakers.fr"),
      `${locale} : le message de défi ne finit pas sur aimakers.fr`,
    );
  }
});
