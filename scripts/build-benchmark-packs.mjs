/**
 * Réécrit `content/packs.ts` depuis les quatre archives livrées.
 *
 *   node scripts/build-benchmark-packs.mjs
 *
 * Les archives vivent dans `public/benchmark-packs/`. Le script les ouvre, y lit
 * les dossiers de skills, mesure le poids réel de chaque fichier, et écrit le
 * tout dans un module que la carte de score peut lire côté navigateur.
 *
 * ── Pourquoi mesurer plutôt qu'écrire ────────────────────────────────────────
 *
 * La maquette annonce « 80 Ko » sous le bouton de téléchargement. C'est le poids
 * du pack Marketing & Growth, et il est faux pour les trois autres : 16 Ko,
 * 103 Ko, 42 Ko. Un poids écrit à la main dans une chaîne se trompe le jour de
 * la livraison, puis à chaque fois qu'une archive est remplacée. Il est donc
 * mesuré ici, une fois, et le test `benchmark-packs` refait la mesure contre les
 * fichiers du dépôt : remplacer une archive sans relancer le script fait échouer
 * la suite plutôt que d'afficher un poids périmé.
 *
 * ── L'ordre d'affichage ──────────────────────────────────────────────────────
 *
 * `ORDER` vient du message de l'équipe, pas de l'archive : une archive ZIP ne
 * garde aucun ordre utile, ses entrées sortent comme elles ont été écrites. Le
 * script vérifie en revanche que l'ensemble correspond exactement à ce que
 * l'archive contient, donc un pack dont on aurait changé le contenu sans
 * prévenir échoue ici plutôt que d'afficher trois noms qui ne s'y trouvent plus.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const DIR = path.join(root, "public", "benchmark-packs");
const TARGET = path.join(root, "src", "lib", "benchmark", "content", "packs.ts");

/* L'ordre d'affichage, tel que l'équipe l'a listé. Le nom de fichier aussi :
   les deux sont des données de livraison, pas des noms devinés. */
const ORDER = {
  growth: {
    file: "aimakers-skills-growth.zip",
    skills: ["ai-seo", "seo-audit", "content-strategy"],
  },
  eng: {
    file: "aimakers-skills-eng.zip",
    skills: [
      "improve-codebase-architecture",
      "code-review",
      "git-guardrails-claude-code",
    ],
  },
  ops: {
    file: "aimakers-skills-ops.zip",
    skills: [
      "n8n-workflow-patterns",
      "n8n-error-handling-official",
      "n8n-workflow-lifecycle-official",
    ],
  },
  fin: {
    file: "aimakers-skills-fin.zip",
    skills: ["sales-enablement", "excel-automation", "kpi-dashboard-design"],
  },
};

/* Les dossiers de premier niveau d'une archive, sans le dossier racine et sans
   `LICENSES`, qui est de la paperasse et pas une skill.

   Node ne sait pas ouvrir un ZIP sans dépendance. Plutôt que d'en ajouter une
   pour quatre fichiers, on passe par le lecteur d'archives de PowerShell, déjà
   présent sur le poste comme sur les runners Windows. */
function skillsInside(file) {
  const script = `Add-Type -AssemblyName System.IO.Compression.FileSystem; ` +
    `$a=[IO.Compression.ZipFile]::OpenRead('${file.replaceAll("'", "''")}'); ` +
    `$a.Entries | ForEach-Object { $_.FullName }; $a.Dispose()`;
  const out = execFileSync(
    "powershell",
    ["-NoProfile", "-NonInteractive", "-Command", script],
    { encoding: "utf8" },
  );

  /* `parts.length >= 3` isole les dossiers : « racine/skill/ » se découpe en
     trois morceaux, « racine/README.md » en deux. Sans ce filtre, le README
     posé à la racine de chaque archive passait pour une skill. */
  const found = new Set();
  for (const line of out.split(/\r?\n/)) {
    const parts = line.trim().split("/");
    if (parts.length >= 3 && parts[1] && parts[1] !== "LICENSES") found.add(parts[1]);
  }
  return found;
}

const rows = [];

for (const [trackId, { file, skills }] of Object.entries(ORDER)) {
  const full = path.join(DIR, file);
  if (!fs.existsSync(full)) {
    console.error(`Archive introuvable : ${full}`);
    process.exit(1);
  }

  const inside = skillsInside(full);
  const missing = skills.filter((s) => !inside.has(s));
  const extra = [...inside].filter((s) => !skills.includes(s));

  if (missing.length || extra.length) {
    console.error(`${file} : le contenu ne correspond pas à la liste annoncée.`);
    if (missing.length) console.error(`  annoncées, absentes : ${missing.join(", ")}`);
    if (extra.length) console.error(`  présentes, non annoncées : ${extra.join(", ")}`);
    process.exit(1);
  }

  const bytes = fs.statSync(full).size;
  rows.push({ trackId, file, bytes, skills });
  console.log(`${trackId} : ${file}, ${bytes} octets, ${skills.length} skills`);
}

const body = rows
  .map(
    ({ trackId, file, bytes, skills }) =>
      `  ${trackId}: {\n` +
      `    file: ${JSON.stringify(file)},\n` +
      `    bytes: ${bytes},\n` +
      `    skills: [${skills.map((s) => JSON.stringify(s)).join(", ")}],\n` +
      `  },`,
  )
  .join("\n");

fs.writeFileSync(
  TARGET,
  `/* GÉNÉRÉ par scripts/build-benchmark-packs.mjs. Ne pas éditer à la main.
   Le poids est mesuré sur le fichier de \`public/benchmark-packs/\`, jamais
   écrit à la main : la maquette annonçait 80 Ko pour les quatre packs, ce qui
   est vrai d'un seul. Le test \`benchmark-packs\` refait la mesure. */

import type { TrackId } from "../types.ts";

export type SkillPack = {
  /** Le nom du fichier dans \`public/benchmark-packs/\`. */
  file: string;
  /** Le poids réel, en octets, au moment de la génération. */
  bytes: number;
  /** Les skills, dans l'ordre où l'équipe les a listées. */
  skills: string[];
};

export const PACKS: Record<TrackId, SkillPack> = {
${body}
};
`,
  "utf8",
);

console.log(`Écrit : ${path.relative(root, TARGET)}`);
