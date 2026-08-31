/**
 * Regénère `src/lib/benchmark/badge-logo.ts` depuis le fichier logo du site.
 *
 * Le badge doit porter le logo AI Makers original, jamais redessiné ni
 * recoloré. Le seul moyen de tenir cette règle sans discipline humaine est
 * d'embarquer le PNG lui-même. Ce script existe pour que personne n'ait à
 * fabriquer la chaîne base64 à la main le jour où le logo change.
 *
 *   node scripts/build-benchmark-badge-logo.mjs
 *
 * Puis relire le diff : seule la constante doit bouger.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const SOURCE = path.join(root, "public", "images", "logo-aimakers.png");
const TARGET = path.join(root, "src", "lib", "benchmark", "badge-logo.ts");

const bytes = fs.readFileSync(SOURCE);

/* Les dimensions sont lues dans l'en-tête IHDR plutôt que recopiées : une
   constante recopiée survit au remplacement du fichier et déforme le logo en
   silence, ce qui est exactement le genre de défaut qu'on ne voit qu'une fois
   le badge publié. */
if (bytes.subarray(1, 4).toString("ascii") !== "PNG") {
  throw new Error(`${SOURCE} n'est pas un PNG.`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);

const base64 = bytes.toString("base64");
const literal = (base64.match(/.{1,100}/g) ?? []).map((c) => `  "${c}"`).join(" +\n");

const file = `/**
 * Le logo AI Makers, embarqué en base64.
 *
 * **Le logo original, jamais redessiné ni recoloré.** C'est la règle posée avec
 * le pack de badges, et la seule façon de la tenir mécaniquement est
 * d'embarquer le fichier lui-même plutôt que d'en refaire les formes à la main.
 * Le badge du parcours Claude Code redessine un mot-symbole en texte SVG ; ici
 * ce n'est pas permis, donc on rasterise l'original.
 *
 * **En base64 et pas lu depuis le disque**, pour la raison déjà écrite dans
 * \`challenge/badge-fonts.ts\` : un \`readFileSync\` marche en local puis dépend
 * du traçage de fichiers au déploiement, qui échoue en production et nulle part
 * ailleurs. Une chaîne ne peut pas être laissée derrière par un empaqueteur.
 *
 * Source : \`public/images/logo-aimakers.png\`, ${width} par ${height} pixels.
 * Regénérer avec \`node scripts/build-benchmark-badge-logo.mjs\`.
 *
 * NE PAS MODIFIER À LA MAIN.
 */

const LOGO_BASE64 =
${literal};

/** Prêt à poser dans un \`<image href>\` SVG, lisible par resvg comme par le
 *  navigateur. */
export const AI_MAKERS_LOGO_DATA_URI = "data:image/png;base64," + LOGO_BASE64;

/** Le carré source, pour que la mise à l'échelle ne soit jamais devinée. */
export const AI_MAKERS_LOGO_BOX = { width: ${width}, height: ${height} } as const;
`;

fs.writeFileSync(TARGET, file);
console.log(
  `badge-logo.ts régénéré : ${width}x${height}, ${(fs.statSync(TARGET).size / 1024).toFixed(0)} ko`,
);
