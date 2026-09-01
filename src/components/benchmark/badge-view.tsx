/**
 * La page de badge : ce que voit quelqu'un qui clique le lien dans un fil.
 *
 * Un composant serveur, volontairement. Tout ici est un lien : le partage
 * LinkedIn est un lien, l'enregistrement de l'image est un lien vers une route
 * qui répond avec un en-tête `Content-Disposition`, et le retour au Benchmark
 * est un lien. Rien n'a besoin de JavaScript, donc rien n'en envoie.
 *
 * **La ligne honnête en bas n'est pas de la décoration.** Le badge porte notre
 * marque, et le score qu'il affiche voyage dans l'adresse, où n'importe qui
 * peut le réécrire. Dire clairement qu'il rend compte d'un parcours joué, et
 * non d'un examen surveillé, est ce qui rend défendable le fait d'y poser le
 * logo AI Makers. La retirer transforme le badge en affirmation que nous ne
 * pouvons pas soutenir.
 */

import Link from "next/link";
import { Download, ExternalLink, Linkedin } from "lucide-react";
import {
  badgeImagePath,
  badgePath,
  linkedInShareUrl,
  type BadgeInput,
} from "@/lib/benchmark/badge";
import { BENCHMARK_PATH } from "@/lib/benchmark/share";
import { MAX_SCORE } from "@/lib/benchmark/engine";
import { s, sf } from "@/lib/benchmark/strings";
import { trackById } from "@/lib/benchmark/content";
import type { Locale } from "@/lib/i18n";

export function BadgeBroken({ locale }: { locale: Locale }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 px-6 pb-24 pt-36">
      <h1 className="text-2xl font-bold tracking-tight">
        {s("badge.brokenTitle", locale)}
      </h1>
      <p className="text-muted-foreground">{s("badge.brokenBody", locale)}</p>
      <Link
        href={BENCHMARK_PATH[locale]}
        className="inline-flex items-center gap-2 rounded-sm border border-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
      >
        {s("badge.backToBenchmark", locale)}
      </Link>
    </div>
  );
}

export function BadgeView({
  locale,
  input,
  base,
}: {
  locale: Locale;
  input: BadgeInput;
  /** L'origine publique, calculée sur le serveur. Jamais l'hôte de la requête. */
  base: string;
}) {
  const track = trackById(input.trackId, locale);
  if (!track) return <BadgeBroken locale={locale} />;

  const tierLabel = s(`tier.${input.tier}`, locale);
  const values = { niveau: tierLabel, track: track.name };

  const pageUrl = `${base}${badgePath(input, locale)}`;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 pb-16 pt-28">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {sf("badge.pageTitle", { nom: input.name, niveau: tierLabel }, locale)}
        </h1>
        <p className="text-muted-foreground">
          {sf(
            "badge.pageLead",
            { score: input.score, max: MAX_SCORE, track: track.name },
            locale,
          )}
        </p>
      </div>

      {/*
        Un `img` nu, pas `next/image`. La source est une route qui dessine
        l'image depuis l'adresse : il n'y a rien à optimiser, et le chargeur ne
        ferait que poser un second cache devant un cache qui existe déjà.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badgeImagePath(input, locale, { svg: true })}
        alt={sf("badge.previewAlt", values, locale)}
        width={1200}
        height={630}
        className="w-full rounded-lg shadow-sm"
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={linkedInShareUrl(pageUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
        >
          <Linkedin className="size-4" aria-hidden />
          {s("badge.shareLinkedIn", locale)}
        </a>

        {/* « Ajouter à mon profil » était ici. Retiré le 1er septembre : voir
            la note en tête de `badge.ts`. */}

        <a
          href={badgeImagePath(input, locale, { shape: "square", download: true })}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:border-foreground"
        >
          <Download className="size-4" aria-hidden />
          {s("badge.download", locale)}
        </a>

        <Link
          href={BENCHMARK_PATH[locale]}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:border-foreground"
        >
          <ExternalLink className="size-4" aria-hidden />
          {s("badge.backToBenchmark", locale)}
        </Link>
      </div>

      <p className="border-t border-border pt-6 text-[0.8125rem] text-muted-foreground">
        {s("badge.honest", locale)}
      </p>
    </div>
  );
}
