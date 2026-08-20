#!/usr/bin/env node
/**
 * Vérifie que les artefacts générés par l'OS n'ont pas été modifiés à la main.
 *
 * Le contenu des études de cas est écrit par l'OS et repoussé ici par le
 * publieur. Une retouche directe dans le dépôt serait écrasée au prochain envoi,
 * sans prévenir — et la personne qui l'a écrite ne le saurait jamais.
 *
 * L'empreinte porte UNIQUEMENT sur `items` : le bloc `_generated` contient
 * l'empreinte elle-même, l'inclure serait circulaire.
 *
 * Ce script ne protège rien — il constate. La vraie réconciliation est faite par
 * l'OS, qui compare cette même empreinte avant chaque écriture et refuse de
 * pousser sur une divergence. Ceci est le même contrôle, mais tout de suite,
 * dans la barrière du poste de travail.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const ARTIFACTS = ["src/content/case-studies.generated.json"];

let failed = false;

for (const path of ARTIFACTS) {
  let doc;
  try {
    doc = JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    console.error(`  ${path} : illisible (${err.message})`);
    failed = true;
    continue;
  }

  const expected = doc?._generated?.hash;
  if (!expected) {
    console.error(`  ${path} : bloc _generated.hash absent`);
    failed = true;
    continue;
  }

  const actual = createHash("sha256")
    .update(JSON.stringify(doc.items, null, 2))
    .digest("hex")
    .slice(0, 16);

  if (actual === expected) {
    console.log(`  ${path} : OK (${actual}, ${doc.items.length} entrées)`);
  } else {
    console.error(
      `  ${path} : MODIFIÉ À LA MAIN — empreinte ${actual}, attendue ${expected}.`,
    );
    console.error(
      `    Cette modification sera perdue au prochain envoi de l'OS. Reportez-la dans l'OS.`,
    );
    failed = true;
  }
}

process.exit(failed ? 1 : 0);
