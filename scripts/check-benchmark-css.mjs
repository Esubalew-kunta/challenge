/**
 * Compare la feuille de style du Benchmark à celle de l'artefact de référence.
 *
 * L'artefact fait autorité sur le rendu et la couleur. Cette page est censée le
 * reproduire, pas le réinterpréter, et une feuille de style se met à dériver
 * sans que personne le voie : une ombre arrondie ici, un bleu approché là, et
 * six mois plus tard les deux ne se ressemblent plus.
 *
 * Le script lit les deux fichiers, en extrait chaque déclaration par sélecteur,
 * enlève le préfixe de portée `.bm-root`, et signale ce qui manque ou ce qui
 * diffère. Il sort en échec si quelque chose a bougé.
 *
 *   node scripts/check-benchmark-css.mjs [chemin/vers/makers-benchmark]
 *
 * Par défaut il cherche l'artefact dans le dossier parent du dépôt, là où il a
 * été déposé. Absent, le script ne fait rien et le dit : il ne bloque personne
 * qui n'a pas la copie de référence sous la main.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const ARTIFACT =
  process.argv[2] ?? resolve(process.cwd(), "..", "makers-benchmark");
const MINE = resolve(process.cwd(), "src/app/(fr)/benchmark/benchmark.css");

/* Ce que je sais avoir changé volontairement, avec la raison.
   Toute autre différence est une dérive. */
const DELIBERATE = new Set([
  // La portée : l'artefact vit seul dans sa page, cette page vit dans le site.
  ":root",
  "body",
  "*, *::before, *::after",
  "@media (prefers-reduced-motion: reduce)",
  // React monte et démonte les écrans, l'artefact les bascule avec une classe.
  ".screen",
  ".screen.is-active",
  ".form-step",
  ".form-step.is-active",
  ".verdict-band",
  ".verdict-band.is-open",
  ".statusbar",
  ".statusbar.is-visible",
  // Les cinq règles sont une liste numérotée ici, `ol` et `li`, quand
  // l'artefact empile cinq paragraphes. Décision du 28 août : le bloc est le
  // plus gros pavé de la page d'accueil, l'artefact a été dessiné autour d'un
  // texte anglais plus court, et cinq paragraphes gris de même poids ne se
  // lisent pas. Le sélecteur `.rules p` n'existe donc plus de ce côté.
  ".rules p",
  // Renommées `bm-rise` et `bm-flash` : `rise` et `flash` sont des noms trop
  // courants pour être posés dans une feuille partagée par tout le site.
  "@keyframes rise",
  "@keyframes flash",
  "from",
  "to",
]);

/* Définies dans la feuille de l'artefact et utilisées dans aucun de ses écrans.
   Recopier du code mort n'aide personne. */
const DEAD_IN_ARTIFACT = new Set([".btn-quiet", ".btn-quiet:hover", ".optional-tag"]);

/* Deux valeurs délibérément différentes, validées par le propriétaire le
   28 août, parce que le français est plus long que l'anglais autour duquel
   l'artefact a été dessiné. Toute autre valeur qui bouge reste une dérive. */
const APPROVED_OVERRIDES = [
  /* Échelle typographique resserrée, 29 août. La page paraissait « un peu
     zoomée » : mesure faite, aucun zoom réel, base 16 px et colonne de 720 px
     comme l'artefact. Ce qui grossit est le gros texte, dans une colonne qui
     n'occupe que la moitié d'un écran large. Six tailles d'affichage baissent
     d'environ 15 %, avec leur interlignage ; le texte courant ne bouge pas. */
  ...[
    [".intro h1", ["font-size", "line-height"]],
    [".intro .lede", ["font-size", "margin"]],
    [".form-step h2", ["font-size", "line-height"]],
    [".qtext", ["font-size", "line-height"]],
    [".result-head h2", ["font-size", "line-height"]],
    [".score-huge", ["font-size", "line-height"]],
  ].flatMap(([selector, properties]) =>
    properties.map((property) => ({
      selector,
      property,
      reason:
        "échelle d'affichage resserrée d'environ 15 % à la demande du propriétaire : l'artefact vivait seul dans sa page, ici la colonne partage un écran large avec le reste du site",
    })),
  ),
  {
    selector: ".bench-body",
    property: "grid-template-columns",
    reason:
      "« ROUND 1 · INTERMÉDIAIRE · PALIER 1 » ne tient pas dans les 250 px où « Round 1 · Intermediate » tenait",
  },
  ...["padding", "gap"].map((property) => ({
    selector: ".rules",
    property,
    reason:
      "bloc des cinq règles resserré et numéroté : c'est le plus gros pavé de la page d'accueil, et le français y tient plus de place que l'anglais de la référence",
  })),
  ...["padding", "background", "font-size", "color"].map((property) => ({
    selector: ".privacy",
    property,
    reason:
      "mention de confidentialité allégée à la demande du propriétaire : plus petite et plus calme, jamais floutée puisqu'elle précède la collecte de l'adresse",
  })),
];

const isApproved = (selector, property) =>
  APPROVED_OVERRIDES.some((o) => o.selector === selector && o.property === property);

/* Regroupées avec d'autres sélecteurs de mon côté, donc introuvables telles
   quelles, mais bien présentes. */
const MERGED = new Set([".qtext code"]);

/* Les deux animations de l'artefact portent le préfixe `bm-` ici, pour la même
   raison que le reste : `rise` et `flash` sont trop courants pour être posés
   dans une feuille que tout le site charge. */
function renamedKeyframes(value) {
  // NB : cette expression a déjà contenu un caractère de contrôle invisible,
  // glissé par un heredoc. Elle ne matchait jamais, et le script signalait donc
  // deux dérives qui n'existaient pas. Un contrôle qui échoue toujours ne vaut
  // pas mieux qu'un contrôle absent.
  return value.replace(/^(rise|flash)/, "bm-$1");
}

function parse(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules = new Map();
  for (const match of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    const selector = match[1].trim().split(/\s+/).join(" ");
    if (!selector) continue;
    const declarations = rules.get(selector) ?? new Map();
    for (const part of match[2].split(";")) {
      const at = part.indexOf(":");
      if (at === -1) continue;
      declarations.set(
        part.slice(0, at).trim(),
        part.slice(at + 1).trim().split(/\s+/).join(" "),
      );
    }
    rules.set(selector, declarations);
  }
  return rules;
}

const artifactFile = join(ARTIFACT, "index.html");
if (!existsSync(artifactFile)) {
  console.log(`Artefact introuvable en ${ARTIFACT}, rien à comparer.`);
  process.exit(0);
}

const html = readFileSync(artifactFile, "utf8");
const artifactCss = html.split("<style>")[1]?.split("</style>")[0] ?? "";
const theirs = parse(artifactCss);

const mine = new Map();
for (const [selector, declarations] of parse(readFileSync(MINE, "utf8"))) {
  const stripped =
    selector.replaceAll(".bm-root ", "").replace(".bm-root", "").trim() || ":root";
  const merged = mine.get(stripped) ?? new Map();
  for (const [k, v] of declarations) merged.set(k, v);
  mine.set(stripped, merged);
}

const problems = [];

for (const [selector, declarations] of theirs) {
  if (DELIBERATE.has(selector) || DEAD_IN_ARTIFACT.has(selector)) continue;
  if (MERGED.has(selector)) continue;
  if (selector.startsWith("@")) continue;

  const ours = mine.get(selector);
  if (!ours) {
    problems.push(`sélecteur absent : ${selector}`);
    continue;
  }
  for (const [property, value] of declarations) {
    const got = ours.get(property);
    if (got === undefined) {
      problems.push(`${selector} : déclaration absente ${property}: ${value}`);
    } else if (got !== renamedKeyframes(value) && !isApproved(selector, property)) {
      problems.push(`${selector} : ${property} — artefact « ${value} », ici « ${got} »`);
    }
  }
}

console.log(
  `Artefact : ${theirs.size} sélecteurs. Ici : ${mine.size}. ` +
    `Écarts délibérés ignorés : ${DELIBERATE.size + DEAD_IN_ARTIFACT.size + MERGED.size}.`,
);

for (const o of APPROVED_OVERRIDES) {
  console.log(`Écart validé : ${o.selector} ${o.property} — ${o.reason}.`);
}

if (problems.length === 0) {
  console.log("Aucune dérive.");
  process.exit(0);
}

console.log(`\n${problems.length} dérive(s) :`);
for (const problem of problems) console.log("  " + problem);
process.exit(1);
