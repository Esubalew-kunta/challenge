/**
 * Réécrit `content/tracks.ts` ou `content/tracks.en.ts` depuis la banque livrée.
 *
 *   node scripts/build-benchmark-tracks.mjs            # français
 *   node scripts/build-benchmark-tracks.mjs --en       # anglais
 *
 * La banque arrive en JSON indenté, dans `questions.md` à la racine du dossier
 * de travail. Le fichier du dépôt, lui, est écrit compact et relu à la main.
 * Passer par un formateur plutôt que par un copier-coller donne deux garanties
 * qu'un collage n'offre pas : le texte ne peut pas être abîmé en transit, et le
 * diff ne montre que ce qui a réellement changé dans les questions.
 *
 * Par défaut le script cherche `questions.md`, ou `questions.en.md` avec `--en`,
 * dans le dossier parent du dépôt, là où les livraisons sont déposées. Un
 * chemin peut aussi être passé en argument. Le fichier doit commencer par
 * `const TRACKS = [` et n'être rien d'autre qu'un littéral JavaScript.
 *
 * **L'anglais est traduit du français, jamais l'inverse.** Le script ne le
 * vérifie pas : il formate ce qu'on lui donne.
 *
 * Ce script ne valide pas le contenu. C'est le travail des tests, qui comptent
 * les questions, vérifient les paliers et mesurent l'indice de longueur.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const isEnglish = process.argv.includes("--en");
const positional = process.argv.slice(2).find((a) => !a.startsWith("--"));

const SOURCE =
  positional ?? path.resolve(root, "..", isEnglish ? "questions.en.md" : "questions.md");
const TARGET = path.join(
  root,
  "src",
  "lib",
  "benchmark",
  "content",
  isEnglish ? "tracks.en.ts" : "tracks.ts",
);

if (!fs.existsSync(SOURCE)) {
  console.error(`Introuvable : ${SOURCE}`);
  process.exit(1);
}

/* La livraison est du JavaScript, pas du JSON : elle porte `const TRACKS = [`.
   On la charge comme un module plutôt que de la parser à la main, ce qui évite
   d'écrire un analyseur pour un format qui n'en a pas besoin. */
const scratch = path.join(root, "node_modules", ".cache", "benchmark-bank.mjs");
fs.mkdirSync(path.dirname(scratch), { recursive: true });
fs.writeFileSync(
  scratch,
  fs.readFileSync(SOURCE, "utf8").replace("const TRACKS = [", "export const TRACKS = ["),
);
const { TRACKS } = await import(`${pathToFileURL(scratch).href}?t=${Date.now()}`);

const TIERS = ["beginner", "intermediate", "expert"];

/** Le texte tel qu'il ira dans un littéral JavaScript à guillemets doubles. */
const q = (text) =>
  '"' +
  String(text)
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll("\n", "\\n") +
  '"';

const question = (item) =>
  `    { p: ${item.p}, q: ${q(item.q)},\n` +
  `      o: [${item.o.map(q).join(", ")}],\n` +
  `      why: ${q(item.why)} }`;

const tier = (name, items) => `  ${name}: [\n${items.map(question).join(",\n")}\n  ]`;

const track = (t) =>
  `{\n` +
  `  id: ${q(t.id)}, code: ${q(t.code)}, name: ${q(t.name)},\n` +
  `  desc: ${q(t.desc)},\n` +
  `  tags: ${q(t.tags)},\n` +
  `  bank: {\n` +
  TIERS.map((name) => tier(name, t.bank[name])).join(",\n") +
  `}\n` +
  `}`;

const HEADER_FR = `/* French question bank — Le Benchmark des Makers. French is the reference text.
   Correct answer always at index 0: the engine shuffles options at render time.
   \`p\` is the difficulty step (1, 2, 3) inside the tier. The 9 questions of each tier
   are ordered 1-1-1 / 2-2-2 / 3-3-3, in that order. */

/* DELIVERED BANK, 31 August 2026. All four tracks rewritten.

   What the rewrite fixes is measured, not a matter of taste. In the 28 August
   bank the correct answer was the longest of the four in 103 of 108 questions,
   95 % against a 25 % baseline: clicking the longest option without reading
   scored about 95 %. The wrong answers have been filled out, the correct one
   left as it was, and the same strategy now scores 43 of 108, against 27 for
   pure chance. The tell is not gone, it is no longer the answer.

   NOT WRITTEN BY HAND. Generated from \`questions.md\` by
   \`scripts/build-benchmark-tracks.mjs\`. Edit the delivery and regenerate; a
   hand edit here is lost at the next delivery and cannot be diffed against the
   pack.

   One thing no length measurement catches: every option now carries its own
   explanation, so on a negation question ("lequel ne produit PAS...") the
   correct answer can repeat the question's own words. Those questions are worth
   reading one by one.

   The English bank is translated from this file, question by question, keeping
   the same answer order. It is never the source. */

export const TRACKS = [
`;

const HEADER_EN = `/* English question bank — The Makers Benchmark.

   TRANSLATED FROM THE FRENCH, 31 August 2026, question by question, same answer
   order. **The French is the source.** When the two disagree, the French is
   right and this file is the one to fix.

   NOT REVIEWED BY ANYONE YET. Same status as the English string table: it is
   served, it is honest work, and Youssef has not read it.

   Correct answer always at index 0: the engine shuffles options at render time.
   \`p\` is the difficulty step (1, 2, 3) inside the tier. The 9 questions of each
   tier are ordered 1-1-1 / 2-2-2 / 3-3-3, in that order.

   **Option lengths are deliberately matched.** The old bank leaked its answer
   through length: the correct option was the longest of the four in 95 % of
   questions, so clicking the longest one without reading scored about 95 %. The
   four options of every question here sit within about 20 characters of one
   another, mean spread 10, and clicking the longest scores 47 of 108 against 27
   for pure chance. Keep that property when editing: lengthen a wrong answer
   rather than trimming the correct one, which is how it goes vague.

   NOT WRITTEN BY HAND. Generated from \`questions.en.md\` by
   \`scripts/build-benchmark-tracks.mjs --en\`. */

export const TRACKS = [
`;

const HEADER = isEnglish ? HEADER_EN : HEADER_FR;

const out = (HEADER + TRACKS.map(track).join(",\n") + "\n];\n").replace(/\n/g, "\r\n");
fs.writeFileSync(TARGET, out);
fs.rmSync(scratch, { force: true });

const count = TRACKS.reduce(
  (n, t) => n + TIERS.reduce((m, k) => m + t.bank[k].length, 0),
  0,
);
console.log(
  `${path.basename(TARGET)} régénéré : ${TRACKS.length} tracks, ${count} questions, ${(out.length / 1024).toFixed(0)} ko`,
);
