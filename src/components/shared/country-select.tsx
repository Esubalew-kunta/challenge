"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  PHONE_COUNTRIES,
  searchCountries,
  type PhoneCountry,
} from "@/lib/phone-countries";

/**
 * Sélecteur d'indicatif, avec recherche.
 *
 * Il remplace un `<select>` natif, qui échouait sur un point précis : sa
 * recherche au clavier ne porte que sur le LIBELLÉ de l'option — ici
 * « FR +33 » — donc il fallait taper le code ISO, jamais le nom du pays. Et
 * comme le tampon de frappe se réinitialise après une seconde, une touche
 * erronée laissait l'utilisateur bloqué : tapez « G » puis « FR », vous
 * cherchez « GFR ».
 *
 * Ce composant cherche dans le nom, le code ISO ET l'indicatif, accents
 * ignorés. Le champ de recherche est effacé à chaque ouverture, donc une faute
 * de frappe se corrige en effaçant, comme partout ailleurs.
 *
 * Ce qu'il fallait conserver du natif, et qui est réimplémenté ici plutôt que
 * perdu : navigation au clavier complète, annonce correcte aux lecteurs
 * d'écran (motif ARIA combobox + listbox), fermeture à l'échappement et au clic
 * extérieur, et une cible tactile qui reste utilisable au pouce.
 */
export function CountrySelect({
  id,
  value,
  onChange,
  tone,
  buttonClass,
}: {
  id: string;
  value: string;
  onChange: (iso: string) => void;
  tone: "light" | "dark";
  buttonClass: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const results = useMemo(() => searchCountries(query), [query]);
  const selected: PhoneCountry | undefined =
    PHONE_COUNTRIES.find((c) => c.iso === value) ?? PHONE_COUNTRIES[0];

  // À l'ouverture : champ vide et focus dedans. Repartir de zéro est ce qui
  // rend une faute de frappe sans conséquence.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  // Clic à l'extérieur et touche Échap : deux façons de sortir sans choisir.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // L'option active doit rester visible quand on descend au clavier.
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  function choose(iso: string) {
    onChange(iso);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = results[active];
      if (hit) choose(hit.iso);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Indicatif pays : ${selected?.name ?? ""}`}
        className={buttonClass}
      >
        <span className="tabular-nums">
          {selected?.iso} +{selected?.code}
        </span>
        <ChevronDown className="h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
      </button>

      {open && (
        <div className={PANEL_CLASS[tone]}>
          <div className="relative border-b border-border/60 p-2">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Pays, code ou indicatif"
              aria-controls={listId}
              aria-autocomplete="list"
              role="combobox"
              aria-expanded={open}
              className={SEARCH_CLASS[tone]}
            />
          </div>

          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label="Pays"
            className="max-h-64 overflow-y-auto py-1"
          >
            {results.length === 0 && (
              <li className="px-3 py-3 text-sm opacity-60">Aucun pays trouvé</li>
            )}
            {results.map((c, i) => (
              <li
                key={c.iso}
                role="option"
                aria-selected={c.iso === value}
                // `onMouseDown` plutôt que `onClick` : le clic arriverait après
                // le `mousedown` qui referme le panneau, et la sélection serait
                // perdue.
                onMouseDown={(e) => {
                  e.preventDefault();
                  choose(c.iso);
                }}
                onMouseEnter={() => setActive(i)}
                className={[
                  "flex cursor-pointer items-center justify-between gap-3 px-3 py-2 text-sm",
                  i === active ? ACTIVE_CLASS[tone] : "",
                  c.iso === value ? "font-semibold" : "",
                ].join(" ")}
              >
                <span className="truncate">{c.name}</span>
                <span className="shrink-0 tabular-nums opacity-60">
                  +{c.code}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const PANEL_CLASS = {
  light:
    "absolute left-0 top-full z-50 mt-2 w-72 max-w-[80vw] overflow-hidden rounded-xl border-2 border-border bg-white text-foreground shadow-2xl",
  dark: "absolute left-0 top-full z-50 mt-2 w-72 max-w-[80vw] overflow-hidden rounded-xl border-2 border-background/20 bg-slate-900 text-background shadow-2xl",
} as const;

const SEARCH_CLASS = {
  light:
    "w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none",
  dark: "w-full rounded-lg border border-background/20 bg-background/10 py-2 pl-9 pr-3 text-sm text-background placeholder:text-background/40 focus:border-primary focus:outline-none",
} as const;

const ACTIVE_CLASS = {
  light: "bg-primary/10",
  dark: "bg-background/10",
} as const;
