/**
 * Les packs de ressources.
 *
 * Ce que ces tests protègent : le bouton de téléchargement est la seule chose
 * de la carte de score qui promette un fichier. Un lien mal formé, un track sans
 * pack ou deux tracks qui pointent le même objet ne se voient pas à l'écran,
 * seulement au moment où quelqu'un clique.
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import {
  PACKS,
  PACKS_BUCKET,
  PACKS_ENABLED,
  PACK_LINK_TTL_SECONDS,
  packFor,
  packHref,
  placeholderPacks,
} from "../src/lib/benchmark/packs.ts";
import { contentFor } from "../src/lib/benchmark/content/index.ts";
import type { TrackId } from "../src/lib/benchmark/types.ts";

const TRACK_IDS: TrackId[] = ["growth", "eng", "ops", "fin"];

test("chaque track livré a son pack", () => {
  // Le lien se construit à partir du track choisi à l'onboarding : un track
  // servi sans pack donnerait un bouton qui mène à un 404.
  for (const track of contentFor("fr").TRACKS) {
    assert.notEqual(packFor(track.id), null, `pack absent pour ${track.code}`);
  }
  assert.deepEqual(Object.keys(PACKS).sort(), [...TRACK_IDS].sort());
});

test("un track inconnu ne rend pas de pack", () => {
  assert.equal(packFor("inconnu" as TrackId), null);
});

test("les quatre packs sont livrés, plus aucun fichier de remplacement", () => {
  assert.deepEqual(placeholderPacks(), []);
  assert.equal(PACKS_ENABLED, true);
});

test("aucun objet ni nom de fichier n'est partagé entre deux packs", () => {
  // Deux tracks qui pointent le même objet, c'est le pack Finance envoyé au
  // lecteur Marketing, et rien ne le signale.
  const objects = TRACK_IDS.map((t) => PACKS[t].object);
  const filenames = TRACK_IDS.map((t) => PACKS[t].filename);
  assert.equal(new Set(objects).size, objects.length, objects.join(", "));
  assert.equal(new Set(filenames).size, filenames.length, filenames.join(", "));
});

test("les archives sont des .zip, des deux côtés du lien", () => {
  // Le pack est un dossier de skills : un `.pdf` ici voudrait dire que le
  // contenu a changé de nature sans que la route le sache.
  for (const track of TRACK_IDS) {
    assert.match(PACKS[track].object, /^pack-[a-z]+\.zip$/, track);
    assert.match(PACKS[track].filename, /^benchmark-pack-[a-z-]+\.zip$/, track);
  }
});

test("le lien du bouton porte le track et le code de session", () => {
  const href = packHref("eng", "7DSW");
  assert.equal(href, "/api/benchmark-pack?track=eng&run=7DSW");
  // Une adresse relative : le lien doit rester sur notre domaine, c'est là que
  // la mesure est écrite avant la redirection.
  assert.equal(href.startsWith("/api/"), true);
});

test("un code de session ne peut pas s'échapper de l'URL", () => {
  // Le code vient du moteur et vaut quatre caractères, mais la fonction est
  // exportée : elle doit rester sûre si un jour elle reçoit autre chose.
  const href = packHref("fin", "A&B=C");
  assert.equal(href.includes("&B=C"), false, href);
  assert.equal(new URL(href, "https://x.test").searchParams.get("run"), "A&B=C");
});

test("le bucket et la durée de validité restent des valeurs explicites", () => {
  assert.equal(PACKS_BUCKET, "benchmark-packs");
  // Assez pour cliquer et télécharger, trop peu pour circuler comme une adresse
  // permanente. Si quelqu'un pousse ça à une journée, le test le dira.
  assert.ok(PACK_LINK_TTL_SECONDS >= 60, "trop court pour un gros fichier");
  assert.ok(PACK_LINK_TTL_SECONDS <= 900, "trop long pour un lien signé");
});
