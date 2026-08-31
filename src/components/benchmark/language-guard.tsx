"use client";

/**
 * Le garde-fou du changement de langue, pendant un parcours.
 *
 * ── Le défaut qu'il corrige ───────────────────────────────────────────────
 *
 * Le Benchmark tient tout son état en mémoire du navigateur : une seule route,
 * aucun rechargement, c'est ce qui permet six minutes sans interruption. La
 * bascule FR / EN, elle, est une navigation complète : les deux groupes de
 * routes ont chacun leur layout racine, parce que `<html lang>` ne peut être
 * posé que là.
 *
 * Les deux ensemble donnent le pire résultat possible : quelqu'un arrivé à sa
 * carte de score clique « EN », et se retrouve sur l'écran d'accueil anglais,
 * son parcours effacé, sans avoir été prévenu. C'est ce qui a été signalé le
 * 31 août.
 *
 * ── Ce que ce composant fait, et ce qu'il ne fait pas ─────────────────────
 *
 * Il prévient. Il ne conserve pas le parcours : le faire correctement demande
 * de rejouer la même sélection de questions dans l'autre banque, ce qui n'a de
 * sens qu'une fois la banque anglaise remise à jour. Prévenir coûte peu et
 * supprime la perte silencieuse, qui est la seule partie inacceptable.
 *
 * ── Pourquoi un écouteur sur le document ──────────────────────────────────
 *
 * La bascule vit dans l'en-tête du site, partagé par toutes les pages, et le
 * Benchmark n'a aucune raison de lui imposer sa logique : la même bascule
 * existe aussi dans le menu mobile. On intercepte donc au niveau du document,
 * sur l'adresse visée plutôt que sur le composant, et le garde-fou reste
 * entièrement contenu dans le Benchmark. Il se retire tout seul dès que
 * l'écran redevient l'accueil.
 *
 * En phase de capture, pour passer avant le routeur de Next.
 */

import { useEffect, useState } from "react";
import { BENCHMARK_PATH } from "@/lib/benchmark/share";
import type { Locale } from "@/lib/i18n";
import { Slot } from "./string-slot";

export function LanguageGuard({
  locale,
  /** Faux sur l'accueil : il n'y a alors rien à perdre, la bascule est normale. */
  active,
}: {
  locale: Locale;
  active: boolean;
}) {
  const [target, setTarget] = useState<string | null>(null);

  const otherPath = BENCHMARK_PATH[locale === "fr" ? "en" : "fr"];

  useEffect(() => {
    if (!active) return;

    const onClick = (event: MouseEvent) => {
      // Un clic modifié ouvre un onglet : la page actuelle survit, donc il n'y
      // a rien à protéger et intercepter serait une gêne.
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      /* Le lien de confirmation de la boîte vise la même adresse et se ferait
         donc intercepter par ce même écouteur : la boîte se rouvrirait sur
         elle-même et rien ne partirait jamais. Il porte une marque, on la lit. */
      if (anchor.dataset.benchmarkGuardConfirm === "1") return;

      /* On compare le chemin, pas la chaîne brute : un `href` peut être absolu,
         relatif, ou porter une barre finale. */
      let path: string;
      try {
        path = new URL(anchor.getAttribute("href") ?? "", window.location.href).pathname;
      } catch {
        return;
      }
      const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
      if (clean !== otherPath) return;

      event.preventDefault();
      setTarget(anchor.getAttribute("href"));
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [active, otherPath]);

  useEffect(() => {
    if (!target) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTarget(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [target]);

  if (!target) return null;

  return (
    <div className="verdict-band is-open" role="dialog" aria-modal="true">
      <div className="verdict-card">
        <Slot k="guard.title" as="h3" />
        <Slot k="guard.body" as="p" />
        <div className="share-row">
          {/* Une vraie navigation, pas le routeur : c'est un changement d'arbre
              racine, et c'est exactement ce que ferait le lien qu'on a
              intercepté. */}
          <a className="btn btn-primary" href={target} data-benchmark-guard-confirm="1">
            <Slot k="guard.confirm" />
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setTarget(null)}>
            <Slot k="guard.cancel" />
          </button>
        </div>
      </div>
    </div>
  );
}
