/**
 * Le badge du Benchmark, dessiné en SVG.
 *
 * ── Ce que la maquette impose ─────────────────────────────────────────────
 *
 * La maquette du pack montre une carte claire : le logo AI Makers en rond en
 * haut à gauche, « LE BENCHMARK DES MAKERS » en petites capitales à droite,
 * « Niveau » suivi du palier en bleu, la ligne de track sous elle, un filet,
 * puis le nom et l'adresse à gauche, le score à droite. Rien d'autre. Les
 * positions ci-dessous sont cette maquette, pas une interprétation.
 *
 * ── Trois règles qui ne se négocient pas ──────────────────────────────────
 *
 * • **Le logo est le fichier original**, posé en `<image>`, jamais redessiné ni
 *   recoloré. C'est la règle écrite du pack, et c'est pour la tenir
 *   mécaniquement que `badge-logo.ts` embarque le PNG.
 * • **Clair, toujours.** Les visuels LinkedIn restent en mode clair, quel que
 *   soit le thème du lecteur. Un badge n'a pas de thème : c'est une image.
 * • **Jamais le mot « certification ».** On dit « Niveau ». Le test
 *   `badge-wording` refuse le mot dans tout ce fichier et dans les chaînes.
 *
 * ── Pourquoi du SVG et pas du JSX ─────────────────────────────────────────
 *
 * Même raison que pour le badge du parcours Claude Code : `ImageResponse`
 * rastérise du JSX et son option `fonts` alimente le moteur de mise en page,
 * pas une image SVG imbriquée. Le SVG sert la page et sert de source au PNG,
 * donc un seul dessin existe et les deux ne peuvent pas diverger.
 */

import type { Locale } from "../i18n.ts";
import { MAX_SCORE } from "./engine.ts";
import { AI_MAKERS_LOGO_DATA_URI } from "./badge-logo.ts";
import type { BadgeShape } from "./badge.ts";

/* ------------------------------------------------------------- palette */

/* Reprise à l'identique de `benchmark.css`. Aucune couleur inventée : le badge
   et l'écran doivent se ressembler quand on les met côte à côte. */
const PAPER = "#F3F6FE";
const SURFACE = "#FFFFFF";
const LINE = "#E3E9F9";
const TEXT = "#16203A";
const TEXT_2 = "#5A6785";
const TEXT_3 = "#8E9AB8";
const SIGNAL = "#2B5CE6";

/**
 * La pile de polices, et pourquoi elle n'est pas « Inter » tout court.
 *
 * Le même SVG sert deux rendus. resvg reçoit les fichiers Inter explicitement
 * et prend donc toujours Inter. Le navigateur, lui, affiche l'aperçu dans une
 * balise `img` : un SVG chargé ainsi est isolé, il ne voit ni les polices de la
 * page ni aucune police web. « Inter » seul y retombait sur la police à
 * empattements par défaut, et l'aperçu ne ressemblait plus au PNG publié.
 *
 * Une pile règle les deux cas d'un coup : resvg s'arrête sur Inter, le
 * navigateur descend jusqu'à la sans-serif du système.
 */
const FONT_STACK =
  "Inter, 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif";

/* ---------------------------------------------------------------- texte */

export type BadgeArtInput = {
  name: string;
  trackName: string;
  tierLabel: string;
  score: number;
  shape: BadgeShape;
  locale: Locale;
  /** Sert seulement à choisir la ligne de format. Les libellés arrivent déjà
   *  traduits, parce que la couche de chaînes est la seule source de texte. */
  rounds: number;
  questions: number;
};

/**
 * Les quelques mots que le badge écrit lui-même.
 *
 * Ils sont ici et pas dans `strings.fr.ts` pour une raison précise : la route
 * d'image tourne sans le contexte de langue de l'application, et cinq mots
 * dupliqués coûtent moins cher qu'un chargement de table de chaînes dans un
 * rastériseur. Tout ce qui est plus long qu'un mot, lui, arrive en argument.
 *
 * « Niveau », « rounds », « questions » et l'exergue sont recopiés de la
 * maquette du pack, au caractère près.
 */
const WORDS = {
  fr: { eyebrow: "LE BENCHMARK DES MAKERS", level: "Niveau", rounds: "rounds", questions: "questions" },
  en: { eyebrow: "THE MAKERS BENCHMARK", level: "Level", rounds: "rounds", questions: "questions" },
} as const;

/** L'adresse imprimée sous le nom. Elle est écrite, pas cliquable : c'est une
 *  image. Elle doit donc être courte et exacte. */
const PRINTED_URL: Record<Locale, string> = {
  fr: "aimakers.fr/benchmark",
  en: "aimakers.fr/en/benchmark",
};

/* --------------------------------------------------------------- mesure */

/**
 * La largeur d'une chaîne, en multiples de la taille de police.
 *
 * Une approximation, et elle suffit : elle ne sert qu'à décider si un nom doit
 * rétrécir. Les capitales et les chiffres sont larges, les lettres étroites le
 * sont moins, l'espace et la ponctuation comptent peu. Se tromper de quelques
 * pour cent laisse le nom légèrement plus petit que nécessaire, ce qui est le
 * bon sens de l'erreur.
 */
function widthIn(text: string, size: number): number {
  let units = 0;
  for (const ch of text) {
    if (/[ilj'’.,:|!]/.test(ch)) units += 0.28;
    else if (/[A-ZÀ-ÖØ-Þ0-9@#%&]/.test(ch)) units += 0.66;
    else if (/[mwMW]/.test(ch)) units += 0.92;
    else if (ch === " ") units += 0.28;
    else units += 0.55;
  }
  return units * size;
}

/** Rétrécit jusqu'à tenir, sans jamais descendre sous le plancher lisible. */
function fit(text: string, ideal: number, box: number, floor: number): number {
  let size = ideal;
  while (size > floor && widthIn(text, size) > box) size -= 1;
  return size;
}

/** Le SVG interdit `&`, `<` et `>` dans du texte, et un nom peut porter le
 *  premier. Sans cet échappement, un « Marketing & Growth » casse le document
 *  entier et l'image revient vide. */
function esc(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* --------------------------------------------------------------- dessin */

type Geometry = {
  w: number;
  h: number;
  pad: number;
  left: number;
  right: number;
  logo: number;
  yLogo: number;
  yHead: number;
  yTrack: number;
  yRule: number;
  yName: number;
  yUrl: number;
  yScore: number;
  headSize: number;
  trackSize: number;
  nameSize: number;
  scoreSize: number;
};

/**
 * Deux formats, une seule composition.
 *
 * Le large part dans les fils, où il est vu à la taille d'une vignette : le
 * palier et le score doivent s'y lire avant les mots. Le carré se télécharge et
 * se republie à la main, donc il a de la place et respire davantage. Rien
 * d'autre ne change entre les deux, ce qui évite d'entretenir deux dessins.
 */
function geometryFor(shape: BadgeShape): Geometry {
  if (shape === "square") {
    return {
      w: 1080, h: 1080, pad: 56, left: 56 + 72, right: 1080 - 56 - 72,
      logo: 96, yLogo: 228,
      yHead: 600, yTrack: 666, yRule: 772, yName: 878, yUrl: 928, yScore: 900,
      headSize: 92, trackSize: 30, nameSize: 40, scoreSize: 100,
    };
  }
  return {
    w: 1200, h: 630, pad: 40, left: 40 + 64, right: 1200 - 40 - 64,
    logo: 72, yLogo: 152,
    yHead: 322, yTrack: 380, yRule: 452, yName: 524, yUrl: 566, yScore: 542,
    headSize: 78, trackSize: 27, nameSize: 36, scoreSize: 84,
  };
}

export function renderBenchmarkBadgeSvg(input: BadgeArtInput): string {
  const g = geometryFor(input.shape);
  const words = WORDS[input.locale];
  const url = PRINTED_URL[input.locale];

  /* Le nom partage sa ligne avec le score. La boîte s'arrête donc là où le
     score commence, moins une gouttière, plutôt qu'au bord de la carte : c'est
     la seule mesure qui empêche les deux de se chevaucher sur un nom long. */
  const scoreWidth = widthIn(`${input.score}`, g.scoreSize) + widthIn(` / ${MAX_SCORE}`, g.scoreSize * 0.42);
  const nameBox = g.right - g.left - scoreWidth - 48;
  const nameSize = fit(input.name, g.nameSize, nameBox, 22);

  /* Le palier suit « Niveau » sur la même ligne. Les deux vivent dans un seul
     `<text>` avec deux `<tspan>` : le placement du second est alors calculé par
     le rendu, pas par nous, donc il reste juste quel que soit le mot. */
  const headBox = g.right - g.left;
  const headText = `${words.level} ${input.tierLabel}`;
  const headSize = fit(headText, g.headSize, headBox, 44);

  const trackLine = `${input.trackName} · ${input.rounds} ${words.rounds} · ${input.questions} ${words.questions}`;
  const trackSize = fit(trackLine, g.trackSize, headBox, 18);

  const card = { x: g.pad, y: g.pad, w: g.w - g.pad * 2, h: g.h - g.pad * 2 };

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${g.w}" height="${g.h}" viewBox="0 0 ${g.w} ${g.h}" role="img">
  <rect width="${g.w}" height="${g.h}" fill="${PAPER}"/>
  <rect x="${card.x}" y="${card.y}" width="${card.w}" height="${card.h}" rx="26" fill="${SURFACE}" stroke="${LINE}" stroke-width="2"/>

  <image href="${AI_MAKERS_LOGO_DATA_URI}" xlink:href="${AI_MAKERS_LOGO_DATA_URI}" x="${g.left}" y="${g.yLogo - g.logo}" width="${g.logo}" height="${g.logo}"/>

  <text x="${g.right}" y="${g.yLogo - g.logo / 2 + 6}" text-anchor="end" font-family="${FONT_STACK}" font-size="18" font-weight="700" letter-spacing="2.4" fill="${TEXT_3}">${esc(words.eyebrow)}</text>

  <text x="${g.left}" y="${g.yHead}" font-family="${FONT_STACK}" font-size="${headSize}" font-weight="800" fill="${TEXT}">${esc(words.level)} <tspan fill="${SIGNAL}">${esc(input.tierLabel)}</tspan></text>

  <text x="${g.left}" y="${g.yTrack}" font-family="${FONT_STACK}" font-size="${trackSize}" font-weight="500" fill="${TEXT_2}">${esc(trackLine)}</text>

  <line x1="${g.left}" y1="${g.yRule}" x2="${g.right}" y2="${g.yRule}" stroke="${LINE}" stroke-width="2"/>

  <text x="${g.left}" y="${g.yName}" font-family="${FONT_STACK}" font-size="${nameSize}" font-weight="700" fill="${TEXT}">${esc(input.name)}</text>
  <text x="${g.left}" y="${g.yUrl}" font-family="${FONT_STACK}" font-size="${Math.round(g.nameSize * 0.6)}" font-weight="500" fill="${TEXT_3}">${esc(url)}</text>

  <text x="${g.right}" y="${g.yScore}" text-anchor="end" font-family="${FONT_STACK}" font-size="${g.scoreSize}" font-weight="800" fill="${SIGNAL}">${input.score}<tspan font-size="${Math.round(g.scoreSize * 0.42)}" font-weight="600" fill="${TEXT_3}">&#160;/ ${MAX_SCORE}</tspan></text>
</svg>`;
}
