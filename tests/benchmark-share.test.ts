/**
 * Le lien de défi.
 *
 * Ce test existe pour une seule raison : le lien était construit sur
 * `window.location.origin`, donc un parcours joué sur localhost produisait un
 * lien vers localhost, envoyé à quelqu'un pour qui cette adresse ne mène nulle
 * part. Rien ne le signalait, la phrase juste au-dessus disant « aimakers.fr ».
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import { BENCHMARK_PATH, challengeLink } from "../src/lib/benchmark/share.ts";

const BASE = "https://aimakers.fr";

const RUN = {
  base: BASE,
  locale: "fr" as const,
  runCode: "7DSW",
  name: "Bernand",
  score: 50,
  tierLabel: "Débutant",
};

test("le lien porte l'origine publique, jamais celle du navigateur", () => {
  const link = challengeLink(RUN);
  assert.equal(link.startsWith(`${BASE}/benchmark?`), true, link);
  assert.equal(/localhost|127\.0\.0\.1|vercel\.app/.test(link), false, link);
});

test("une barre finale dans l'origine ne produit pas de double barre", () => {
  const link = challengeLink({ ...RUN, base: `${BASE}/` });
  assert.equal(link.includes("//benchmark"), false, link);
  assert.equal(link.startsWith(`${BASE}/benchmark?`), true, link);
});

test("le lien ramène sur la page dans la langue du parcours", () => {
  assert.equal(challengeLink(RUN).includes("/benchmark?"), true);
  assert.equal(
    challengeLink({ ...RUN, locale: "en" }).includes("/en/benchmark?"),
    true,
  );
  assert.deepEqual(Object.keys(BENCHMARK_PATH).sort(), ["en", "fr"]);
});

test("les quatre paramètres sont présents et échappés", () => {
  const url = new URL(challengeLink(RUN));
  assert.equal(url.searchParams.get("defi"), "7DSW");
  assert.equal(url.searchParams.get("nom"), "Bernand");
  assert.equal(url.searchParams.get("score"), "50");
  // L'accent doit survivre l'aller-retour : c'est le libellé de niveau affiché
  // au destinataire, et la page le relit tel quel.
  assert.equal(url.searchParams.get("niveau"), "Débutant");
  assert.equal(url.toString().includes("D%C3%A9butant"), true);
});

test("un nom à espaces ou à caractères spéciaux ne casse pas le lien", () => {
  const url = new URL(
    challengeLink({ ...RUN, name: "  Anne-Sophie D'Arc & Cie  " }),
  );
  assert.equal(url.searchParams.get("nom"), "Anne-Sophie D'Arc & Cie");
  assert.equal(url.searchParams.get("score"), "50", "le & n'a pas coupé la query");
});

test("les noms de paramètres restent français dans les deux langues", () => {
  // Ce sont des clés, pas du texte. Les traduire couperait en deux le format
  // des liens déjà partagés, et `page.tsx` lit ces noms-là des deux côtés.
  const url = new URL(challengeLink({ ...RUN, locale: "en" }));
  for (const key of ["defi", "nom", "score", "niveau"]) {
    assert.equal(url.searchParams.has(key), true, `paramètre absent : ${key}`);
  }
});

/* ------------------------------------------- bascule de langue ------------
   La bascule FR/EN posait la question de l'indexation à la place de celle de
   la navigation. Sur /benchmark, dont la version anglaise est livrée mais
   volontairement non indexée, elle affichait donc EN grisé alors que la page
   répondait 200. */

test("la bascule de langue mène au Benchmark anglais, qui existe", async () => {
  const { navigationAlternateFor, alternateFor, EN_EXISTS, EN_PUBLISHED } =
    await import("../src/lib/i18n.ts");

  assert.equal(navigationAlternateFor("/benchmark", "en"), "/en/benchmark");
  assert.equal(navigationAlternateFor("/en/benchmark", "fr"), "/benchmark");

  // La page existe, elle n'est pas offerte aux moteurs : les deux à la fois.
  assert.equal(EN_EXISTS.has("/en/benchmark"), true);
  assert.equal(EN_PUBLISHED.has("/en/benchmark"), false);
  assert.equal(alternateFor("/benchmark", "en"), null, "pas de hreflang");
});

test("les autres pages livrées mais non indexées gagnent la même bascule", async () => {
  const { navigationAlternateFor } = await import("../src/lib/i18n.ts");
  assert.equal(
    navigationAlternateFor("/playbook-ia", "en"),
    "/en/ai-playbook",
  );
  assert.equal(
    navigationAlternateFor("/seo-geo", "en"),
    "/en/generative-engine-optimization",
  );
});

test("une page qui n'existe pas en anglais ne gagne pas de bascule", async () => {
  const { navigationAlternateFor } = await import("../src/lib/i18n.ts");
  // Les villes de formation n'ont pas d'équivalent anglais : la bascule doit
  // rester grisée plutôt que de mener à un 404.
  assert.equal(navigationAlternateFor("/formation-ia/paris", "en"), null);
  assert.equal(navigationAlternateFor("/page-qui-nexiste-pas", "en"), null);
});
