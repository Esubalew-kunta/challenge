/**
 * L'image du badge du Benchmark, dessinée à la demande depuis l'adresse.
 *
 * Deux encodages pour deux usages, et ils ne sont pas interchangeables :
 *
 * • **SVG** pour l'aperçu affiché dans l'écran de partage. Quelques kilooctets,
 *   net à toute taille, et il ne coûte aucun rendu.
 * • **PNG** pour `og:image` et pour le bouton d'enregistrement. **LinkedIn ne
 *   lit pas le SVG.** Un badge qui n'existerait qu'en SVG serait un badge que
 *   personne ne voit jamais dans un fil, ce qui est la seule chose que ce badge
 *   a à faire.
 *
 * Le PNG sort du même SVG, rastérisé par resvg avec Inter fourni explicitement,
 * donc les deux ne peuvent pas diverger.
 *
 * Les polices viennent de `challenge/badge-fonts.ts` et ne sont pas
 * redupliquées ici : c'est la même Inter, embarquée en base64 pour la raison
 * expliquée dans ce fichier, et une deuxième copie coûterait 180 ko pour rien.
 */

import { Resvg } from "@resvg/resvg-js";
import { interFontFiles } from "@/lib/challenge/badge-fonts";
import { BADGE_SIZE, parseBadgeInput, type BadgeShape } from "@/lib/benchmark/badge";
import { renderBenchmarkBadgeSvg } from "@/lib/benchmark/badge-art";
import { ROUNDS, TOTAL_QUESTIONS } from "@/lib/benchmark/engine";
import { trackById } from "@/lib/benchmark/content";
import { s } from "@/lib/benchmark/strings";
import type { Locale } from "@/lib/i18n";

/** Assez long pour que LinkedIn le garde en cache, assez court pour qu'une
 *  correction atteigne les gens. Même réglage que le badge du parcours. */
export const revalidate = 86400;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const read = (k: string) => url.searchParams.get(k);

  const input = parseBadgeInput(read);
  const locale: Locale = read("lang") === "en" ? "en" : "fr";
  const shape: BadgeShape = read("shape") === "square" ? "square" : "wide";
  const download = read("download") === "1";
  const wantsSvg = read("format") === "svg";

  /* Un paramètre manquant est un lien cassé, pas un badge anonyme. On répond
     404 plutôt qu'une image, pour qu'aucun robot ne mette en cache un badge
     dessiné à moitié. */
  if (!input) {
    return new Response("Lien de badge incomplet", { status: 404 });
  }

  const track = trackById(input.trackId, locale);
  if (!track) {
    return new Response("Track inconnu", { status: 404 });
  }

  /* Le libellé de palier vient de la couche de chaînes, jamais d'une table
     locale : la barre de statut, la carte de score et le badge doivent dire le
     même mot, et une deuxième table finit toujours par dériver. */
  const svg = renderBenchmarkBadgeSvg({
    name: input.name,
    trackName: track.name,
    tierLabel: s(`tier.${input.tier}`, locale),
    score: input.score,
    shape,
    locale,
    rounds: ROUNDS,
    questions: TOTAL_QUESTIONS,
  });

  if (wantsSvg) {
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=86400",
      },
    });
  }

  const png = new Resvg(svg, {
    /* Rendu à sa propre taille. Le SVG porte déjà ses dimensions, mais les
       redire ici garantit qu'une retouche du dessin ne change pas en silence
       le format d'une carte sociale que les plateformes ont déjà mise en
       cache. */
    fitTo: { mode: "width", value: BADGE_SIZE[shape].width },
    font: {
      fontFiles: interFontFiles(),
      loadSystemFonts: false,
      defaultFontFamily: "Inter",
    },
  })
    .render()
    .asPng();

  const headers = new Headers({
    "Content-Type": "image/png",
    "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
  });

  /* Un en-tête `Content-Disposition` plutôt qu'un attribut `download` sur le
     lien : l'attribut est ignoré dans assez d'endroits, les navigateurs
     intégrés aux applications en tête, pour qu'un lecteur sur téléphone se
     retrouve avec l'image ouverte dans un onglet sans retour possible. */
  if (download) {
    headers.set(
      "Content-Disposition",
      `attachment; filename="benchmark-des-makers-${input.trackId}-${input.tier}.png"`,
    );
  }

  return new Response(new Uint8Array(png), { headers });
}
