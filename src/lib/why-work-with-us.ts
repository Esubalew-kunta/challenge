/**
 * Contenu de /pourquoi-ai-makers.
 *
 * Page de preuve commerciale (logos clients, chiffres, méthode) volontairement
 * SÉPARÉE des pages /carrieres/[slug] : le conseil issu du roast (voir le
 * contexte de docs/hiring/README.md) était de ne jamais mélanger un contenu
 * candidat honnête avec un argumentaire commercial destiné à d'autres
 * entreprises. Cette page porte tout ce qui a été retiré des annonces —
 * logos, témoignages, mots-clés BOFU — et les pages carrières y renvoient au
 * lieu de le republier elles-mêmes.
 *
 * `temoinClients` référence `clientLogos` (site-config) par nom, comme
 * `secteurs.ts` le fait déjà. "AS Monaco" est volontairement ABSENT : aucun
 * accord confirmé pour l'utiliser comme référence sur une page commerciale
 * nouvelle. Ne pas l'ajouter sans validation explicite.
 */

export type WhyWorkFait = {
  chiffre: string;
  label: string;
};

export const whyWorkWithUs = {
  metaTitle: "Pourquoi AI Makers : clients, méthode, résultats",
  metaDescription:
    "AI Makers en clair : qui nous accompagnons, comment on travaille, et ce que nos clients en disent. Gepromed, Sage, Fondation Force, Cardio Check-up et d'autres racontent leur transformation IA.",
  badge: "Pourquoi AI Makers",
  titre: "Ce qu'on construit, et pour qui",
  intro:
    "AI Makers est un cabinet de transformation IA en France et au Maroc. On audite les process, on déploie des systèmes IA en production, et on forme les équipes jusqu'à leur autonomie. Voici ce que ça donne, chez de vrais clients.",
  faits: [
    { chiffre: "+50", label: "entreprises accompagnées" },
    { chiffre: "+200", label: "systèmes IA en production" },
    { chiffre: "+10 000", label: "professionnels formés" },
    { chiffre: "7h", label: "récupérées par semaine et par collaborateur, en moyenne" },
  ] as readonly WhyWorkFait[],
  methode: [
    {
      titre: "Audit — AI Scan",
      description:
        "Cartographie de vos process, interviews de vos équipes, scoring de maturité. Vous repartez avec une roadmap chiffrée et au moins 3 cas d'usage rentables.",
    },
    {
      titre: "Build — AI Engine",
      description:
        "Un ingénieur référent construit 1 à 2 systèmes par mois, directement dans vos outils. Chaque système a un KPI mesuré avant et après.",
    },
    {
      titre: "Scale — AI Champions",
      description:
        "Vos équipes deviennent autonomes. Formation continue, optimisation des systèmes en production, revue stratégique trimestrielle.",
    },
  ],
  /** Noms référencés dans clientLogos (site-config.ts). Pas de AS Monaco. */
  temoinClients: [
    "Gepromed",
    "Sage",
    "Fondation Force",
    "Cardio Check-up",
    "Bonzai",
    "Addictest",
    "ThinkONE",
  ] as readonly string[],
};
