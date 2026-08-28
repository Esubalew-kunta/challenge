"use client";

/**
 * La langue du Benchmark, portée par le contexte.
 *
 * Elle pourrait descendre en prop d'écran en écran. Elle traverserait alors
 * sept composants dont cinq n'en font rien, et il suffirait qu'un seul oublie
 * de la repasser pour qu'un bloc anglais rende du français — visible en
 * relecture seulement si le relecteur lit les deux langues.
 *
 * Il n'y a **pas de valeur par défaut**. Un composant monté hors du fournisseur
 * lève immédiatement, au lieu de rendre discrètement la langue de référence :
 * c'est la même règle que dans `strings.ts`, où la locale est un argument
 * obligatoire.
 */

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n";

const BenchmarkLocaleContext = createContext<Locale | null>(null);

export function BenchmarkLocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <BenchmarkLocaleContext.Provider value={locale}>
      {children}
    </BenchmarkLocaleContext.Provider>
  );
}

export function useBenchmarkLocale(): Locale {
  const locale = useContext(BenchmarkLocaleContext);
  if (!locale) {
    throw new Error(
      "Benchmark : composant rendu hors de <BenchmarkLocaleProvider>, aucune langue à servir",
    );
  }
  return locale;
}
