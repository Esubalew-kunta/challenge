/**
 * La carte de score du Benchmark : ce qui entre, ce qui sort, et les deux mots
 * interdits.
 *
 * Trois choses sont protégées ici, et chacune a déjà une façon connue de mal
 * tourner :
 *
 * 1. **La lecture des paramètres.** La carte se dessine depuis l'adresse. Un
 *    champ mal validé, et notre logo se retrouve à côté d'une insulte, d'une
 *    adresse web, ou d'un score que le jeu ne peut pas produire.
 * 2. **Les mots « certification » et « badge ».** On dit « niveau », « résultat »
 *    ou « carte de score ». Une relecture humaine ne tient pas cette règle sur
 *    la durée, un test si.
 * 3. **Les adresses.** LinkedIn ne prend qu'un lien, et ce lien doit être
 *    absolu et pointer sur la page, jamais sur l'image.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import {
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

/**
 * « Ajouter à mon profil » ne doit pas revenir.
 *
 * Le lien `linkedin.com/profile/add` rangeait le résultat dans la rubrique des
 * licences et certifications d'un profil. Retiré le 1er septembre sur décision
 * de Maneesh. Un test qui vérifie une absence a mauvaise réputation, et il se
 * justifie ici : la fonction a existé, elle marchait, et la remettre est une
 * ligne. C'est exactement le genre de chose qui repasse par distraction.
 */
test("le lien « ajouter à mon profil » de LinkedIn n'existe plus", () => {
  const source = readFileSync(
    fileURLToPath(new URL("../src/lib/benchmark/badge.ts", import.meta.url)),
    "utf8",
  );
  const code = source.replace(/\/\*[\s\S]*?\*\//g, "");

  for (const forbidden of ["profile/add", "CERTIFICATION_NAME", "organizationId"]) {
    assert.ok(
      !code.includes(forbidden),
      `« ${forbidden} » est revenu dans badge.ts : le lien de certification LinkedIn est retiré`,
    );
  }
});

/* ------------------------------------------------- les balises Open Graph */

/**
 * Les quatre balises que LinkedIn exige, vérifiées dans la source de la page.
 *
 * Un test de rendu serait meilleur et coûterait un environnement Next entier
 * pour une page qui n'a que des métadonnées. Une lecture de source attrape le
 * seul défaut qu'on a réellement eu : `og:url` avait été oubliée, parce que
 * cette page compose ses métadonnées à la main au lieu de passer par
 * `constructMetadata`. Tout le reste était en place, la page répondait 200,
 * l'image aussi, et LinkedIn refusait quand même l'aperçu.
 */
/* Les deux langues. La page anglaise manquait purement et simplement jusqu'au
   1er septembre : `BADGE_PATH.en` l'annonçait, le bouton de partage anglais y
   menait, et l'adresse répondait 404. Personne ne l'avait vu, la page anglaise
   du Benchmark n'ayant pas encore de vrai joueur. Ce test aurait suffi. */
const BADGE_PAGES = [
  "../src/app/(fr)/benchmark/badge/page.tsx",
  "../src/app/(en)/en/benchmark/badge/page.tsx",
];

test("les deux pages de carte de score déclarent les balises Open Graph de LinkedIn", () => {
  for (const relative of BADGE_PAGES) {
    const path = fileURLToPath(new URL(relative, import.meta.url));
    const page = readFileSync(path, "utf8");

    const start = page.indexOf("openGraph: {");
    assert.ok(start > 0, `${relative} : le bloc openGraph a disparu`);
    const block = page.slice(start, page.indexOf("twitter:", start));

    for (const field of ["title,", "description,", "url:", "images:"]) {
      assert.ok(
        block.includes(field),
        `${relative} : openGraph n'expose plus « ${field} », LinkedIn refusera l'aperçu`,
      );
    }

    /* L'adresse vient de `challengePublicUrl()` et non de `siteConfig.url` : le
       Benchmark ne vit pas encore sur aimakers.fr, où elle répondrait 404. */
    assert.ok(
      page.includes("challengePublicUrl()"),
      `${relative} : l'adresse publique doit venir du déploiement, pas du domaine canonique`,
    );
  }
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

/**
 * Le second mot interdit, depuis le 1er septembre.
 *
 * Décision de Maneesh : les règles de marque de LinkedIn réservent les badges à
 * LinkedIn. Ce que nous produisons s'appelle une carte de score, en français
 * comme en anglais.
 *
 * Le contrôle porte sur les valeurs affichées, jamais sur les clés : les clés
 * gardent leur préfixe `badge.`, que personne ne voit, et les renommer dans deux
 * langues aurait rempli le diff sans rien changer à l'écran.
 */
const FORBIDDEN_BADGE = /\bbadges?\b/i;

test("aucune chaîne affichée ne dit « badge »", () => {
  for (const [table, name] of [
    [STRINGS_FR, "fr"],
    [STRINGS_EN, "en"],
  ] as const) {
    for (const [key, value] of Object.entries(table)) {
      assert.ok(
        !FORBIDDEN_BADGE.test(value),
        `« ${key} » (${name}) dit « badge » : on dit « carte de score » / « score card » — ${value}`,
      );
    }
  }
});

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
