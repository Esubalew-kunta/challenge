import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";

/**
 * La liste des indicatifs du sélecteur.
 *
 * Construite depuis les métadonnées de libphonenumber plutôt que saisie à la
 * main : une liste écrite en dur se périme (indicatifs qui changent, pays qui
 * apparaissent) et diverge silencieusement de ce que la validation accepte.
 * Ici les deux viennent de la même source, donc le sélecteur ne peut pas
 * proposer un pays que le contrôle refusera ensuite.
 */
export type PhoneCountry = {
  /** ISO 3166-1 alpha-2, ce qu'attend libphonenumber. */
  iso: string;
  /** Nom affiché, en français. */
  name: string;
  /** Indicatif sans le « + ». */
  code: string;
};

/**
 * Les pays remontés en tête de liste.
 *
 * Ce n'est pas arbitraire : le cabinet a deux bureaux, Paris et Casablanca, donc la
 * France et le Maroc sont les deux cas courants — et un visiteur marocain qui
 * doit faire défiler 245 pays pour trouver le sien renonce plus souvent qu'on
 * ne le croit. Les autres sont les pays francophones limitrophes.
 */
const PRIORITY = ["FR", "MA", "BE", "CH", "LU", "CA", "TN", "DZ"] as const;

/** Nom français des pays. `Intl.DisplayNames` évite d'embarquer une table. */
const displayName = new Intl.DisplayNames(["fr"], { type: "region" });

function build(): PhoneCountry[] {
  const all: PhoneCountry[] = [];
  for (const iso of getCountries()) {
    let name: string;
    try {
      name = displayName.of(iso) ?? iso;
    } catch {
      name = iso;
    }
    all.push({ iso, name, code: getCountryCallingCode(iso) });
  }

  const priority: PhoneCountry[] = [];
  for (const iso of PRIORITY) {
    const hit = all.find((c) => c.iso === iso);
    if (hit) priority.push(hit);
  }
  const rest = all
    .filter((c) => !PRIORITY.includes(c.iso as (typeof PRIORITY)[number]))
    .sort((a, b) => a.name.localeCompare(b.name, "fr"));

  return [...priority, ...rest];
}

export const PHONE_COUNTRIES: PhoneCountry[] = build();

/** Le pays proposé par défaut : le site est francophone et hébergé en France. */
export const DEFAULT_PHONE_COUNTRY = "FR";

export const PHONE_COUNTRY_ISOS: string[] = PHONE_COUNTRIES.map((c) => c.iso);

/**
 * Recherche d'un pays par nom, code ISO ou indicatif.
 *
 * Trois entrées pour la même intention : on tape « France », « FR » ou « 33 »
 * selon ce qui vient à l'esprit, et les trois doivent fonctionner. Le `<select>`
 * natif ne cherchait que dans le libellé de l'option — qui commence par le code
 * ISO — donc il fallait deviner « FR » et une seule frappe erronée bloquait.
 *
 * Accents ignorés : personne ne tape « Émirats » avec l'accent dans un champ de
 * recherche, et « Emirats » ne doit pas renvoyer zéro résultat.
 */
function fold(v: string): string {
  return v
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export function searchCountries(query: string): PhoneCountry[] {
  const q = fold(query).replace(/^\+/, "");
  if (!q) return PHONE_COUNTRIES;

  const starts: PhoneCountry[] = [];
  const contains: PhoneCountry[] = [];

  for (const c of PHONE_COUNTRIES) {
    const name = fold(c.name);
    const iso = fold(c.iso);
    // Un préfixe l'emporte sur une occurrence au milieu : taper « ma » doit
    // proposer le Maroc avant le Danemark (« Danemark » contient « ma »).
    if (name.startsWith(q) || iso.startsWith(q) || c.code.startsWith(q)) {
      starts.push(c);
    } else if (name.includes(q) || c.code.includes(q)) {
      contains.push(c);
    }
  }
  return [...starts, ...contains];
}
