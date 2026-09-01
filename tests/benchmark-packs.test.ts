/**
 * Les quatre packs de skills : le fichier existe, et le poids affiché est vrai.
 *
 * ── Pourquoi ce test existe ──────────────────────────────────────────────────
 *
 * La maquette annonçait « 80 Ko » sous le bouton de téléchargement. C'est le
 * poids du seul pack Marketing & Growth ; les trois autres pèsent 16, 103 et
 * 42 Ko. Un poids écrit à la main est faux le jour de la livraison, puis à
 * chaque remplacement d'archive.
 *
 * `content/packs.ts` est donc généré par `scripts/build-benchmark-packs.mjs`,
 * qui mesure les fichiers. Ce test refait la mesure : remplacer une archive sans
 * relancer le script fait échouer la suite, plutôt que d'afficher un poids
 * périmé sous un bouton qui sert autre chose.
 *
 * Il vérifie aussi que le fichier est là. Un pack manquant donne un bouton qui
 * mène à un 404, sur l'écran où le lecteur vient de gagner quelque chose.
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { PACKS, packDownloadPath, packSizeLabel } from "../src/lib/benchmark/packs.ts";
import { TRACKS } from "../src/lib/benchmark/content/tracks.ts";
import type { TrackId } from "../src/lib/benchmark/types.ts";

const fileFor = (trackId: TrackId) =>
  fileURLToPath(
    new URL(`../public/benchmark-packs/${PACKS[trackId].file}`, import.meta.url),
  );

test("chaque track a un pack, et un seul", () => {
  const ids = TRACKS.map((track) => track.id);
  assert.deepEqual(
    [...ids].sort(),
    Object.keys(PACKS).sort(),
    "un track sans pack laisse un bouton mort sur la carte de score",
  );
});

test("l'archive de chaque pack existe et pèse ce qui est annoncé", () => {
  for (const [trackId, pack] of Object.entries(PACKS)) {
    const path = fileFor(trackId as TrackId);
    assert.ok(existsSync(path), `archive absente : ${pack.file}`);
    assert.equal(
      statSync(path).size,
      pack.bytes,
      `${pack.file} a changé de poids : relancez « node scripts/build-benchmark-packs.mjs »`,
    );
  }
});

test("chaque pack annonce trois skills, sans doublon", () => {
  for (const [trackId, pack] of Object.entries(PACKS)) {
    assert.equal(pack.skills.length, 3, `${trackId} : la maquette en promet trois`);
    assert.equal(
      new Set(pack.skills).size,
      3,
      `${trackId} : deux fois la même skill dans la liste`,
    );
  }
});

/* Le poids affiché est en kilo-octets binaires, comme l'explorateur de fichiers
   de qui télécharge. On vérifie le calcul plutôt que la valeur, pour que
   remplacer une archive ne demande pas de réécrire le test. */
test("le poids affiché est mesuré, pas écrit", () => {
  for (const trackId of Object.keys(PACKS) as TrackId[]) {
    const expected = Math.round(PACKS[trackId].bytes / 1024);
    assert.equal(packSizeLabel(trackId, "fr"), `${expected} Ko`);
    assert.equal(packSizeLabel(trackId, "en"), `${expected} KB`);
  }
});

test("l'adresse de téléchargement pointe le bon fichier", () => {
  assert.equal(
    packDownloadPath("growth"),
    "/benchmark-packs/aimakers-skills-growth.zip",
  );
  for (const trackId of Object.keys(PACKS) as TrackId[]) {
    assert.ok(packDownloadPath(trackId).endsWith(".zip"));
  }
});
