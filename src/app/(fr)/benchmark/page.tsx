/**
 * Le Benchmark des Makers.
 *
 * Une seule route. Accueil, onboarding, test, carte de score et classement sont
 * des états du composant client, pas des pages : personne ne recharge en plein
 * milieu d'une session de six minutes.
 *
 * Le lien de défi est lu ici, sur le serveur, plutôt que dans le navigateur.
 * La page rend alors la même chose des deux côtés, et un lien trafiqué ne
 * traverse jamais : un code mal formé ou un paramètre manquant redonne
 * l'accueil ordinaire.
 *
 * La page reste hors index tant que son texte est provisoire. Le titre et la
 * description sont marqués PROVISOIRE, en attente de Youssef, et une page à
 * moitié validée qui se fait indexer est plus difficile à rattraper qu'une page
 * absente. La ligne `robots` saute à la mise en ligne, pas avant.
 */

import type { Metadata } from "next";
import { constructMetadata } from "@/lib/metadata";
import { s } from "@/lib/benchmark/strings.fr";
import {
  BenchmarkApp,
  type ChallengeBanner,
} from "@/components/benchmark/benchmark-app";
import "./benchmark.css";

export const metadata: Metadata = {
  ...constructMetadata({
    title: s("meta.title"),
    description: s("meta.description"),
    path: "/benchmark",
  }),
  robots: { index: false, follow: false },
};

type Search = Record<string, string | string[] | undefined>;

const one = (value: string | string[] | undefined): string | null =>
  typeof value === "string" && value.trim() !== "" ? value : null;

function readChallenge(params: Search): ChallengeBanner | null {
  const code = one(params.defi);
  const nom = one(params.nom);
  const score = one(params.score);
  const niveau = one(params.niveau);

  if (!code || !/^[A-Z0-9]{4}$/.test(code)) return null;
  if (!nom || !score || !niveau) return null;
  if (!/^\d{1,3}$/.test(score)) return null;

  return { nom: nom.slice(0, 80), score, niveau: niveau.slice(0, 40) };
}

export default async function BenchmarkPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const params = await searchParams;
  return <BenchmarkApp challenge={readChallenge(params)} />;
}
