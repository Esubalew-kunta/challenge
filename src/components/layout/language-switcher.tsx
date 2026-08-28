"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { navigationAlternateFor, type Locale } from "@/lib/i18n";

/**
 * Bascule FR / EN.
 *
 * Une seule source de vérité : `navigationAlternateFor()`, qui ne rend une
 * cible que si la page équivalente EXISTE (`EN_EXISTS`). Une bascule qui mène à
 * un 404 reste pire que pas de bascule, c'est la raison d'être du contrôle.
 *
 * Ce n'est PAS `alternateFor()`, qui lit `EN_PUBLISHED` et sert au hreflang.
 * Les deux questions se ressemblent et n'ont pas la même réponse : « faut-il
 * l'annoncer aux moteurs ? » et « le lecteur peut-il y aller ? ». En prenant la
 * première pour la seconde, la bascule était grisée sur les pages livrées mais
 * volontairement non indexées — /en/benchmark, /en/ai-playbook,
 * /en/generative-engine-optimization — alors qu'elles répondaient 200.
 *
 * Quand la traduction n'existe pas encore, la langue absente est affichée
 * DÉSACTIVÉE plutôt que masquée : un bouton qui apparaît et disparaît d'une
 * page à l'autre donne l'impression d'un site cassé, alors qu'une langue
 * grisée dit ce qui est vrai — cette page-ci n'existe pas encore dans
 * l'autre langue. Le `title` le formule pour qui survole, et lecteurs d'écran
 * compris.
 *
 * Passer d'un arbre à l'autre est une navigation complète, pas une transition
 * client : les deux groupes de routes ont chacun leur layout racine, parce que
 * `<html lang>` ne peut être posé que là. C'est acceptable pour un changement
 * de langue, et c'est aussi ce qui garantit que le nouvel arbre monte avec le
 * bon `lang`.
 */
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === "fr" ? "en" : "fr";
  const target = navigationAlternateFor(pathname, other);

  const labels: Record<Locale, string> = { fr: "FR", en: "EN" };
  const unavailable =
    other === "en"
      ? "Cette page n'existe pas encore en anglais"
      : "This page is not available in French";

  return (
    <div
      className="hidden items-center rounded-lg border border-border bg-background/60 p-0.5 text-xs font-semibold md:inline-flex"
      role="group"
      aria-label={locale === "fr" ? "Choix de la langue" : "Language"}
    >
      <Globe
        className="mx-1.5 size-3.5 shrink-0 text-muted-foreground"
        aria-hidden="true"
      />
      <span
        aria-current="true"
        className="rounded-md bg-primary/10 px-2 py-1 text-primary"
      >
        {labels[locale]}
      </span>
      {target ? (
        <Link
          href={target}
          hrefLang={other}
          className="rounded-md px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          {labels[other]}
        </Link>
      ) : (
        <span
          aria-disabled="true"
          title={unavailable}
          className="cursor-not-allowed rounded-md px-2 py-1 text-muted-foreground/40"
        >
          {labels[other]}
        </span>
      )}
    </div>
  );
}
