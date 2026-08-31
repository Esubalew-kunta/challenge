/**
 * Le badge du Benchmark : ce qui entre, ce qui sort, et le mot interdit.
 *
 * Trois choses sont protégées ici, et chacune a déjà une façon connue de mal
 * tourner :
 *
 * 1. **La lecture des paramètres.** Le badge se dessine depuis l'adresse. Un
 *    champ mal validé, et notre logo se retrouve à côté d'une insulte, d'une
 *    adresse web, ou d'un score que le jeu ne peut pas produire.
 * 2. **Le mot « certification ».** La règle du pack : on dit « niveau » ou
 *    « résultat ». Une relecture humaine ne tient pas cette règle sur la durée,
 *    un test si.
 * 3. **Les adresses.** LinkedIn ne prend qu'un lien, et ce lien doit être
 *    absolu et pointer sur la page, jamais sur l'image.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import {
  addToProfileUrl,
  badgeImagePath,
  badgePath,
  cleanName,
  linkedInShareUrl,
  parseBadgeInput,
  parseScore,
  parseTier,
  parseTrackId,
} from "../src/lib/benchmark/badge.ts";
import { STRINGS_FR } from "../src/lib/benchmark/strings.fr.ts";
import { STRINGS_EN } from "../src/lib/benchmark/strings.en.ts";

/* ------------------------------------------------------------------- nom */

test("le nom garde ses accents et ses initiales", () => {
  assert.equal(cleanName("Sara M."), "Sara M.");
  assert.equal(cleanName("Jean-Christophe Éloi"), "Jean-Christophe Éloi");
  assert.equal(cleanName("Amélie O’Brien"), "Amélie O’Brien");
});

test("le nom ne peut pas faire passer une adresse web à côté du logo", () => {
  assert.equal(cleanName("voir https://exemple.fr"), "voir httpsexemple.fr");
  assert.equal(cleanName("a@b.com"), "ab.com");
  assert.equal(cleanName("<script>"), "script");
});

test("le nom est borné et les blancs sont normalisés", () => {
  assert.equal(cleanName("   Sara    M.   "), "Sara M.");
  assert.equal(cleanName("é".repeat(80)).length, 32);
  assert.equal(cleanName(null), "");
  assert.equal(cleanName("###"), "");
});

/* ---------------------------------------------------------------- champs */

test("seuls les quatre tracks du pack sont acceptés", () => {
  for (const id of ["growth", "eng", "ops", "fin"]) {
    assert.equal(parseTrackId(id), id);
  }
  assert.equal(parseTrackId("legal"), null);
  assert.equal(parseTrackId(""), null);
  assert.equal(parseTrackId(null), null);
});

test("seuls les trois paliers du pack sont acceptés", () => {
  for (const key of ["beginner", "intermediate", "expert"]) {
    assert.equal(parseTier(key), key);
  }
  assert.equal(parseTier("master"), null);
});

test("un score impossible est refusé plutôt que dessiné", () => {
  assert.equal(parseScore("220"), 220);
  assert.equal(parseScore("0"), 0);
  assert.equal(parseScore("240"), 240);

  // Les points valent 10, 20 ou 30 : tout score réel est un multiple de 10.
  assert.equal(parseScore("237"), null);
  assert.equal(parseScore("250"), null);
  assert.equal(parseScore("-10"), null);
  assert.equal(parseScore("20.5"), null);
  assert.equal(parseScore("abc"), null);
  assert.equal(parseScore(""), null);
  assert.equal(parseScore(null), null);
});

test("un seul champ invalide invalide tout le badge", () => {
  const good: Record<string, string> = {
    n: "Sara M.",
    t: "growth",
    p: "expert",
    s: "220",
  };
  assert.deepEqual(parseBadgeInput((k) => good[k] ?? null), {
    name: "Sara M.",
    trackId: "growth",
    tier: "expert",
    score: 220,
  });

  for (const field of ["n", "t", "p", "s"]) {
    const broken = { ...good, [field]: "" };
    assert.equal(
      parseBadgeInput((k) => broken[k] ?? null),
      null,
      `un « ${field} » vide devrait casser le badge entier`,
    );
  }
});

/* -------------------------------------------------------------- adresses */

test("LinkedIn reçoit la page, jamais l'image", () => {
  const input = { name: "Sara M.", trackId: "growth", tier: "expert", score: 220 } as const;
  const page = `https://aimakers.fr${badgePath(input, "fr")}`;
  const share = linkedInShareUrl(page);

  assert.ok(share.startsWith("https://www.linkedin.com/sharing/share-offsite/?url="));
  assert.ok(share.includes(encodeURIComponent("https://aimakers.fr/benchmark/badge")));
  assert.ok(
    !share.includes("api%2Fbenchmark-badge"),
    "l'image ne doit jamais être partagée directement : LinkedIn n'en lirait pas les métadonnées",
  );
});

test("les deux langues ne pointent pas sur la même page de badge", () => {
  const input = { name: "Sara M.", trackId: "growth", tier: "expert", score: 220 } as const;
  assert.ok(badgePath(input, "fr").startsWith("/benchmark/badge?"));
  assert.ok(badgePath(input, "en").startsWith("/en/benchmark/badge?"));
});

test("l'image sert du SVG sur la page et du PNG quand elle sort du site", () => {
  const input = { name: "Sara M.", trackId: "growth", tier: "expert", score: 220 } as const;

  assert.ok(badgeImagePath(input, "fr", { svg: true }).includes("format=svg"));

  const social = badgeImagePath(input, "fr");
  assert.ok(!social.includes("format=svg"), "LinkedIn ne lit pas le SVG");

  const saved = badgeImagePath(input, "fr", { shape: "square", download: true });
  assert.ok(saved.includes("shape=square"));
  assert.ok(saved.includes("download=1"));
});

test("« ajouter à mon profil » retombe sur le nom quand l'identifiant manque", () => {
  const base = {
    entryName: "Le Benchmark des Makers, niveau Expert (Marketing & Growth)",
    issueYear: 2026,
    issueMonth: 8,
    certUrl: "https://aimakers.fr/benchmark/badge?n=Sara",
    organizationName: "AI Makers",
  };

  const withoutId = new URL(addToProfileUrl(base));
  assert.equal(withoutId.searchParams.get("organizationName"), "AI Makers");
  assert.equal(withoutId.searchParams.get("organizationId"), null);

  const withId = new URL(addToProfileUrl({ ...base, organizationId: "1234567" }));
  assert.equal(withId.searchParams.get("organizationId"), "1234567");
  assert.equal(
    withId.searchParams.get("organizationName"),
    null,
    "LinkedIn ignore le nom libre dès qu'un identifiant est fourni : envoyer les deux embrouille la lecture du lien",
  );
});

/* ------------------------------------------------------- le mot interdit */

/**
 * La règle du pack, tenue mécaniquement.
 *
 * On dit « niveau » ou « résultat », jamais « certification ». Un score de quiz
 * n'est pas une certification, et l'affirmer engage AI Makers sur quelque chose
 * qu'aucun tiers ne garantit.
 *
 * La section où LinkedIn range l'entrée porte son propre nom, que nous ne
 * choisissons pas. Ce test dit seulement que **notre** texte ne l'emploie
 * jamais : ni les chaînes affichées, ni les mots dessinés sur le badge.
 */
const FORBIDDEN = /certifi/i;

test("aucune chaîne affichée ne dit « certification »", () => {
  for (const [table, name] of [
    [STRINGS_FR, "fr"],
    [STRINGS_EN, "en"],
  ] as const) {
    for (const [key, value] of Object.entries(table)) {
      assert.ok(
        !FORBIDDEN.test(value),
        `« ${key} » (${name}) emploie un mot de la famille « certification » : ${value}`,
      );
    }
  }
});

test("le badge ne dessine jamais le mot « certification »", () => {
  const art = readFileSync(
    fileURLToPath(new URL("../src/lib/benchmark/badge-art.ts", import.meta.url)),
    "utf8",
  );

  /* Le fichier parle de la règle dans son en-tête, donc on ne peut pas
     simplement chercher le mot dans tout le fichier : on ne regarde que les
     libellés que le badge écrit vraiment, c'est-à-dire le bloc WORDS. */
  const words = art.slice(art.indexOf("const WORDS"), art.indexOf("PRINTED_URL"));
  assert.ok(words.length > 0, "le bloc WORDS a été renommé : ce test ne protège plus rien");
  assert.ok(!FORBIDDEN.test(words), "un libellé du badge emploie « certification »");
});
