/**
 * Le badge du Benchmark, côté données : ce qui entre, ce qui sort, et les
 * adresses qu'on fabrique autour.
 *
 * ── Rien n'est stocké et rien n'est relu ──────────────────────────────────
 *
 * Le badge se dessine à partir de l'adresse, exactement comme celui du
 * parcours Claude Code. N'importe qui peut donc écrire n'importe quel nom et
 * n'importe quel score dans l'URL : c'est vrai, ç'a été pesé, et c'est accepté.
 * Un badge est une carte de visite, pas une preuve. Ce que les fonctions
 * ci-dessous empêchent, c'est autre chose et c'est plus grave : qu'on se serve
 * du champ « nom » pour faire apparaître une insulte ou une adresse web à côté
 * de notre propre marque.
 *
 * La contrepartie de ce choix : la page de badge est `noindex`, et l'appui du
 * badge reste la ligne écrite en base, pas l'image.
 *
 * ── Pourquoi une page, et pas seulement une image ─────────────────────────
 *
 * LinkedIn ne prend qu'un lien. Aucun site ne peut lui remettre une image :
 * il va chercher l'adresse qu'on lui donne et affiche ce que cette page
 * déclare en `og:image`. Un badge qui n'existerait que comme fichier à
 * télécharger serait donc un badge que personne ne voit jamais dans un fil.
 * D'où la paire : une page qui déclare l'image, une route qui la dessine.
 */

import type { Locale } from "../i18n.ts";
import type { TierKey, TrackId } from "./types.ts";
import { MAX_SCORE } from "./engine.ts";
import { trackById } from "./content/index.ts";

/** Où vit la page de badge, par langue. Même découpage que `BENCHMARK_PATH`. */
export const BADGE_PATH: Record<Locale, string> = {
  fr: "/benchmark/badge",
  en: "/en/benchmark/badge",
};

/** Les deux formats. Le large part dans les fils, le carré se télécharge. */
export const BADGE_SIZE = {
  wide: { width: 1200, height: 630 },
  square: { width: 1080, height: 1080 },
} as const;

export type BadgeShape = keyof typeof BADGE_SIZE;

export type BadgeInput = {
  name: string;
  trackId: TrackId;
  tier: TierKey;
  score: number;
};

/* --------------------------------------------------------------- lecture */

const TIER_KEYS: readonly TierKey[] = ["beginner", "intermediate", "expert"];

/**
 * Le nom, ramené à ce qu'on accepte d'imprimer à côté du logo.
 *
 * La liste blanche est volontairement étroite : lettres, chiffres, espace,
 * apostrophe, trait d'union et point. Le point sert aux initiales, « Sara M. »,
 * qui est la forme montrée dans la maquette. Tout le reste tombe, ce qui
 * élimine d'un coup les deux-points et les barres obliques d'une adresse web,
 * les arobases, et les caractères de mise en forme.
 *
 * `\p{L}` plutôt que `A-Za-z` : un nom français porte des accents, et un nom
 * qui perd ses accents est un nom mal écrit sur une image qu'on publie.
 */
export function cleanName(raw: string | null | undefined): string {
  if (!raw) return "";
  return raw
    .normalize("NFC")
    .replace(/[^\p{L}\p{N} '’.-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 32);
}

/**
 * L'identifiant de track est validé contre le contenu lui-même plutôt que
 * contre une liste recopiée ici. Une liste recopiée survit à l'ajout d'un
 * cinquième track et le rejette en silence, un jour où personne ne pense au
 * badge. La lecture se fait en français : les identifiants sont les mêmes dans
 * les deux langues, c'est la règle du pack.
 */
export function parseTrackId(raw: string | null | undefined): TrackId | null {
  if (!raw) return null;
  return trackById(raw, "fr") ? (raw as TrackId) : null;
}

export function parseTier(raw: string | null | undefined): TierKey | null {
  return TIER_KEYS.includes(raw as TierKey) ? (raw as TierKey) : null;
}

/**
 * Le score, refusé s'il ne peut pas sortir d'un parcours.
 *
 * Les points valent 10, 20 ou 30 par bonne réponse, donc tout score réel est un
 * multiple de 10 entre 0 et 240. Un « 237 » sur un badge se remarque et abîme
 * la crédibilité de tous les autres, pour le prix d'une ligne de contrôle.
 */
export function parseScore(raw: string | null | undefined): number | null {
  if (raw === null || raw === undefined || raw.trim() === "") return null;
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 0 || n > MAX_SCORE || n % 10 !== 0) return null;
  return n;
}

/** Les quatre champs relus d'un coup. `null` dès qu'un seul est invalide :
 *  un badge à moitié juste est pire qu'une page qui dit que le lien est cassé. */
export function parseBadgeInput(read: (k: string) => string | null): BadgeInput | null {
  const name = cleanName(read("n"));
  const trackId = parseTrackId(read("t"));
  const tier = parseTier(read("p"));
  const score = parseScore(read("s"));
  if (!name || !trackId || !tier || score === null) return null;
  return { name, trackId, tier, score };
}

/* --------------------------------------------------------------- adresses */

function badgeParams(input: BadgeInput, locale: Locale): URLSearchParams {
  return new URLSearchParams({
    n: input.name,
    t: input.trackId,
    p: input.tier,
    s: String(input.score),
    lang: locale,
  });
}

/** La page. C'est elle qu'on donne à LinkedIn, jamais l'image. */
export function badgePath(input: BadgeInput, locale: Locale): string {
  return `${BADGE_PATH[locale]}?${badgeParams(input, locale).toString()}`;
}

/**
 * L'image, dessinée à la demande.
 *
 * SVG sur la page, PNG partout où elle quitte le site. Le SVG pèse quelques
 * kilooctets et reste net à toute taille ; LinkedIn ne sait pas le lire, ce qui
 * est précisément pourquoi la carte sociale et le bouton d'enregistrement
 * demandent du PNG.
 */
export function badgeImagePath(
  input: BadgeInput,
  locale: Locale,
  opts: { shape?: BadgeShape; download?: boolean; svg?: boolean } = {},
): string {
  const params = badgeParams(input, locale);
  if (opts.shape === "square") params.set("shape", "square");
  if (opts.download) params.set("download", "1");
  if (opts.svg) params.set("format", "svg");
  return `/api/benchmark-badge?${params.toString()}`;
}

/**
 * Le partage LinkedIn : un lien et rien d'autre.
 *
 * Les paramètres `title`, `summary` et `source` ont existé et ne fonctionnent
 * plus : LinkedIn les ignore en silence depuis des années. Le texte du post ne
 * peut donc pas voyager dans l'URL, il passe par le presse-papiers, et c'est
 * exactement ce que fait déjà le bouton de la carte de score.
 */
export function linkedInShareUrl(absolutePageUrl: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    absolutePageUrl,
  )}`;
}

/**
 * ── « Ajouter à mon profil » n'existe plus ────────────────────────────────
 *
 * Le lien `linkedin.com/profile/add` rangeait le résultat dans la section que
 * LinkedIn nomme « Licences et certifications ». Il fonctionnait, il était
 * livré, et il est retiré le 1er septembre après la relecture de Maneesh : les
 * règles de marque de LinkedIn réservent les badges à LinkedIn, et un score
 * obtenu en neuf questions n'a rien à faire dans la rubrique des
 * certifications d'un profil.
 *
 * Retiré et non masqué, comme les parcours d'exemple du classement et comme les
 * anciens packs de ressources : la fonction, ses chaînes, son test et la
 * variable d'environnement `NEXT_PUBLIC_LINKEDIN_ORGANIZATION_ID` partent
 * ensemble. Ce qu'on ne sert plus, on l'enlève.
 *
 * Ce qui reste : `linkedInShareUrl`, le partage ordinaire d'un lien dans un
 * fil, qui n'affirme rien.
 */
