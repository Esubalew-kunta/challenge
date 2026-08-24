/**
 * Socle i18n du site — FR canonique à la racine, EN sous /en.
 *
 * Décision produit (2026-07-29) : `/en/<slug-anglais>`. Le FR garde ses URLs
 * actuelles telles quelles — le site vient d'être mis en ligne et ses ~57
 * redirections d'anciennes URLs Framer pointent dessus ; les préfixer de /fr
 * les invaliderait toutes.
 *
 * Conséquence d'architecture : deux layouts racines (groupes de routes `(fr)`
 * et `(en)`), parce que `<html lang>` ne peut être posé que par un layout
 * racine et qu'il doit différer entre les deux arbres. Les groupes de routes
 * n'apparaissent pas dans l'URL.
 */

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** Valeur de l'attribut html lang + de l'`og:locale`. */
export const HTML_LANG: Record<Locale, string> = { fr: "fr", en: "en" };
export const OG_LOCALE: Record<Locale, string> = { fr: "fr_FR", en: "en_US" };

/**
 * Correspondance FR → EN des routes.
 *
 * Sert à trois choses, et c'est pour ça qu'elle est unique et centralisée :
 * les liens hreflang (chaque page doit désigner son équivalent), le sélecteur
 * de langue, et les entrées EN du sitemap. Une table par usage divergerait.
 *
 * Les slugs anglais viennent des masters de contenu
 * (`[EN] website-content/`), qui s'y lient déjà en interne.
 */
/**
 * Les trente jours du challenge Claude Code, dans les deux langues.
 *
 * Dérivés au lieu d'être recopiés : les slugs sont `day-N` côté anglais et
 * `jour-N` côté français, donc trente paires écrites à la main seraient trente
 * occasions de se tromper d'un chiffre.
 *
 * Le nombre est écrit ici plutôt qu'importé de `lib/challenge` volontairement.
 * Ce module est chargé par la génération des métadonnées de chaque page du
 * site, et y tirer les 200 Ko de contenu des leçons pour compter jusqu'à trente
 * serait un mauvais échange. Le contrôle de parité de `index.fr.ts` garantit
 * déjà que les deux langues ont bien le même nombre de jours.
 */
const CHALLENGE_TOTAL_DAYS = 30;

const CHALLENGE_DAY_ROUTES: Record<string, string> = Object.fromEntries(
  Array.from({ length: CHALLENGE_TOTAL_DAYS }, (_, i) => i + 1).map((n) => [
    `/challenge-claude-code/jour-${n}`,
    `/en/claude-code-challenge/day-${n}`,
  ]),
);

export const ROUTE_MAP: Record<string, string> = {
  "/": "/en",

  // 30 jours de Claude Code. L'index, puis les trente jours dérivés au-dessus.
  // La version française existe depuis le 21 août 2026, donc le hreflang peut
  // enfin être annoncé dans les deux sens.
  "/challenge-claude-code": "/en/claude-code-challenge",
  ...CHALLENGE_DAY_ROUTES,

  // Offres
  "/offre": "/en/ai-partner",
  "/ai-transformation": "/en/ai-transformation",
  "/ai-operating-system": "/en/ai-operating-system",
  "/forward-deployed-engineer": "/en/forward-deployed-engineer",
  "/plateforme-data-ia": "/en/enterprise-data-platform",
  "/agence-ia": "/en/ai-consulting",
  "/automatisation-ia-workflow": "/en/ai-automation",
  "/seo-geo": "/en/generative-engine-optimization",

  // Formations. Note : le master EN dit encore "acculturation-ia", renommée
  // depuis en "formation-ai-champions" (next.config redirige l'ancienne). On
  // mappe le slug FR VIVANT, pas celui du master.
  "/formation-ia-entreprise": "/en/ai-training-for-teams",
  "/formation-ia-entreprise/formation-ai-champions":
    "/en/ai-training-for-teams/ai-literacy",
  "/formation-ia-entreprise/vibe-coding":
    "/en/ai-training-for-teams/vibe-coding",
  "/formation-ia-entreprise/creation-publicite-ia":
    "/en/ai-training-for-teams/ai-for-advertising",
  "/formation-ia-entreprise/go-to-market-sales":
    "/en/ai-training-for-teams/ai-sales-training",
  "/formation-ia-entreprise/microsoft-copilot":
    "/en/ai-training-for-teams/microsoft-copilot",
  "/formation-ia-entreprise/maitriser-claude":
    "/en/ai-training-for-teams/claude-training",
  "/formation-ia": "/en/ai-training-locations",

  // Secteurs — le hub et ses pages ne partagent pas le même préfixe côté EN
  // (/ai-by-industry vs /industries/*). C'est ce que disent les masters ; à
  // signaler mais pas à "corriger" ici.
  "/secteurs": "/en/ai-by-industry",
  "/secteurs/agences-communication": "/en/industries/ai-for-marketing-agencies",
  "/secteurs/tpe-pme": "/en/industries/ai-for-small-business",
  "/secteurs/sante-biotech-medtech": "/en/industries/ai-for-life-sciences",
  "/secteurs/medecins-cabinets": "/en/industries/ai-for-medical-practices",
  "/secteurs/esn-services-it": "/en/industries/ai-for-it-services",
  "/secteurs/conseil-etudes-marche": "/en/industries/ai-for-market-research",
  "/secteurs/hotellerie-tourisme-loisirs": "/en/industries/ai-for-hospitality",
  "/secteurs/banque-assurance-courtage":
    "/en/industries/ai-for-financial-services",

  // Études de cas — même dissociation hub / pages que les secteurs.
  "/etudes-de-cas": "/en/ai-case-studies",
  "/etudes-de-cas/addictest": "/en/case-studies/addictest",
  "/etudes-de-cas/cardio-check-up": "/en/case-studies/cardio-check-up",
  "/etudes-de-cas/delassus": "/en/case-studies/delassus",
  "/etudes-de-cas/fondation-force": "/en/case-studies/fondation-force",
  "/etudes-de-cas/gepromed": "/en/case-studies/gepromed",
  "/etudes-de-cas/sage-geo": "/en/case-studies/sage-geo",
  "/etudes-de-cas/thinkone": "/en/case-studies/thinkone",

  // Outils — à plat côté EN, pas imbriqués sous /ai-tools.
  "/outils": "/en/ai-tools",
  "/outils/audit-geo-gratuit": "/en/ai-visibility-checker",
  "/outils/calculateur-roi-ia": "/en/ai-roi-calculator",
  "/outils/scanner-opportunites-ia": "/en/ai-opportunity-assessment",
  "/diagnostic-ia": "/en/ai-maturity-assessment",

  // Cabinet & ressources
  "/blog": "/en/blog",
  "/capacite": "/en/capacity",
  // Fusion du 02/08/2026 : /securite a été absorbée par /gouvernance-ia, qui
  // hérite donc de la page anglaise déjà publiée. On ne garde pas de cible
  // /en/ai-governance en parallèle : deux entrées EN pour une seule page FR
  // produiraient deux hreflang concurrents pour la même URL.
  "/gouvernance-ia": "/en/security",
  "/a-propos": "/en/about",
  "/equipe": "/en/team",
  "/fondateur": "/en/founder",
  "/carrieres": "/en/careers",
  "/carrieres/ai-engineer": "/en/careers/ai-engineer",
  "/carrieres/gtm-growth-manager": "/en/careers/gtm-growth-manager",
  "/carrieres/data-engineer": "/en/careers/data-engineer",
  "/carrieres/qa-engineer": "/en/careers/qa-engineer",
  "/carrieres/forward-deployed-engineer": "/en/careers/forward-deployed-engineer",
  "/carrieres/postuler": "/en/careers/apply",
  "/pourquoi-ai-makers": "/en/why-ai-makers",
  "/contact": "/en/contact",
  "/ia-maroc": "/en/ai-morocco",
  "/pourquoi-maintenant": "/en/why-now",
  "/glossaire-ia": "/en/ai-glossary",
  "/playbook-ia": "/en/ai-playbook",
  "/challenge-30-jours": "/en/30-day-ai-challenge",

  // Pages légales : aucun master EN ne les couvre, slugs choisis ici.
  "/mentions-legales": "/en/legal-notice",
  "/confidentialite": "/en/privacy",
  "/cgv": "/en/terms",
};

/**
 * Routes EN réellement publiées.
 *
 * ROUTE_MAP décrit la cible *prévue* pour chaque page ; cet ensemble dit ce qui
 * est en ligne. Les deux sont distincts volontairement : un hreflang qui pointe
 * vers une URL inexistante est une erreur d'indexation, pas un lien ignoré.
 * Tant qu'une page EN n'est pas livrée, le FR ne doit donc pas l'annoncer.
 *
 * Ajouter la route ici **au moment où** la page EN est mise en ligne, jamais
 * avant. Ce même ensemble sert de garde-fou à la navigation : un lien EN absent
 * d'ici est rabattu sur son équivalent FR plutôt que de renvoyer un 404
 * (cf. src/lib/nav.ts).
 */
export const EN_PUBLISHED = new Set<string>([
  "/en",
  "/en/capacity",
  "/en/security",
  "/en/contact",
  "/en/ai-transformation",
  "/en/ai-partner",
  "/en/ai-operating-system",
  "/en/enterprise-data-platform",
  "/en/ai-consulting",
  "/en/ai-automation",
  "/en/why-now",
  "/en/founder",
  "/en/why-ai-makers",
  "/en/about",
  "/en/team",
  "/en/ai-glossary",
  "/en/forward-deployed-engineer",
  "/en/careers",
  "/en/careers/ai-engineer",
  "/en/careers/gtm-growth-manager",
  "/en/careers/data-engineer",
  "/en/careers/qa-engineer",
  "/en/careers/forward-deployed-engineer",

  // Secteurs — le hub et ses pages n'ont pas le même préfixe côté EN.
  "/en/ai-by-industry",
  "/en/industries/ai-for-marketing-agencies",
  "/en/industries/ai-for-small-business",
  "/en/industries/ai-for-life-sciences",
  "/en/industries/ai-for-it-services",
  "/en/industries/ai-for-market-research",
  "/en/industries/ai-for-medical-practices",
  "/en/industries/ai-for-hospitality",
  "/en/industries/ai-for-financial-services",

  // Formations — le hub et ses six programmes (socle uniquement, cf.
  // formations.en.ts).
  "/en/ai-training-for-teams",
  "/en/ai-training-for-teams/ai-literacy",
  "/en/ai-training-for-teams/claude-training",
  "/en/ai-training-for-teams/ai-for-advertising",
  "/en/ai-training-for-teams/ai-sales-training",
  "/en/ai-training-for-teams/microsoft-copilot",
  "/en/ai-training-for-teams/vibe-coding",

  // Claude Code in 30 Days. L'index, plus les trente pages de jour.
  //
  // Les jours étaient volontairement absents tant que la version française
  // n'existait pas : un hreflang vers une page absente est une erreur
  // d'indexation. Elle existe depuis le 21 août 2026, donc les deux sens
  // peuvent être annoncés.
  "/en/claude-code-challenge",
  ...Object.values(CHALLENGE_DAY_ROUTES),
]);

/**
 * Routes EN livrées mais VOLONTAIREMENT NON INDEXÉES.
 *
 * Deux pages sont construites et accessibles, mais ne doivent ni entrer dans le
 * sitemap, ni être annoncées en hreflang, ni être indexées : leurs chiffres ne
 * sont pas validés (`/seo-geo` s'appuie sur un « +70% Sage » non validé et sur
 * un cas client non publié ; `/playbook-ia` sur six chiffres sans source). La
 * décision est celle du propriétaire, cf. `docs/EN-LAUNCH.md` §4.
 *
 * Elles sont donc HORS de `EN_PUBLISHED` — qui alimente sitemap, hreflang et
 * sélecteur de langue — mais présentes dans `EN_EXISTS`, pour que les liens
 * internes qui les visent ne soient pas rabattus sur le français par
 * `resolveEnHref` : la page anglaise existe, elle n'est simplement pas offerte
 * aux moteurs.
 *
 * Les routes portent `robots: { index: false }` dans leur `metadata`. Un
 * sitemap qui listerait une page noindex enverrait deux signaux contradictoires
 * — c'est la même règle que pour `/carrieres/postuler` et les études de cas en
 * brouillon.
 *
 * Pour publier l'une d'elles : retirer d'ici, ajouter à `EN_PUBLISHED`, et
 * retirer le `robots` de la route.
 */
export const EN_GATED = new Set<string>([
  "/en/generative-engine-optimization",
  "/en/ai-playbook",
]);

/**
 * Toutes les routes EN qui EXISTENT, indexées ou non. C'est cet ensemble que
 * consulte `resolveEnHref` : il répond « la page est-elle livrée ? », pas
 * « faut-il l'indexer ? ».
 */
export const EN_EXISTS: ReadonlySet<string> = new Set<string>([
  ...EN_PUBLISHED,
  ...EN_GATED,
]);

/** Inverse de ROUTE_MAP, dérivé plutôt que saisi deux fois. */
export const ROUTE_MAP_EN_TO_FR: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP).map(([fr, en]) => [en, fr]),
);

/**
 * Équivalent d'une route dans l'autre langue, ou null s'il n'y en a pas.
 * Renvoyer null est un cas normal : une page peut n'exister que d'un côté
 * (villes de formation FR, articles de blog non traduits). L'appelant doit
 * alors omettre le lien alterné plutôt que d'en fabriquer un qui 404.
 */
export function alternateFor(path: string, target: Locale): string | null {
  const clean = path.length > 1 ? path.replace(/\/$/, "") : path;
  if (target === "en") {
    const en = ROUTE_MAP[clean] ?? null;
    // Ne pas annoncer une page EN qui n'est pas encore en ligne.
    return en && EN_PUBLISHED.has(en) ? en : null;
  }
  return ROUTE_MAP_EN_TO_FR[clean] ?? null;
}

export function localeFromPath(path: string): Locale {
  return path === "/en" || path.startsWith("/en/") ? "en" : "fr";
}
