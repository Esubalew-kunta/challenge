import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Aucun composant ne doit être défini PENDANT le rendu d'un autre.
 *
 * React compare les types de composants par identité. Une fonction créée à
 * chaque rendu est un type différent à chaque rendu : React ne re-rend pas le
 * sous-arbre, il le DÉMONTE et le remonte. Tout état interne est perdu, et un
 * champ de saisie perd le focus.
 *
 * C'est exactement ce qui est arrivé au formulaire de capture : `Shell` était
 * déclaré dans le corps de `LeadGate` et enveloppait le formulaire entier, donc
 * chaque lettre tapée détruisait les champs. De l'extérieur, le formulaire
 * paraissait se désactiver tout seul.
 *
 * Le motif se relit très bien et se réintroduit tout aussi facilement : d'où ce
 * test, qui coûte quelques millisecondes.
 */
function tsxFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...tsxFiles(full));
    else if (entry.endsWith(".tsx")) out.push(full);
  }
  return out;
}

test("aucun composant n'est défini à l'intérieur d'un autre", () => {
  const offenders: string[] = [];
  for (const file of tsxFiles("src")) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      // Indenté (donc imbriqué) + nom capitalisé + fonction fléchée.
      if (/^\s+const [A-Z][A-Za-z0-9]*\s*=\s*\(/.test(line)) {
        offenders.push(`${file}:${i + 1}  ${line.trim().slice(0, 70)}`);
      }
    });
  }
  assert.deepEqual(
    offenders,
    [],
    `Composant(s) définis pendant un rendu — les remonter au niveau du module :\n${offenders.join("\n")}`,
  );
});
