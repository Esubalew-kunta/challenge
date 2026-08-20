import { formateurs, type Formateur } from "./formations";

/**
 * Rôles et bios des formateurs en anglais.
 *
 * Les pages formation anglaises affichaient le bloc formateurs en FRANÇAIS
 * (« Fondateur d'AI Makers », « Expert Claude, agents IA et automatisations »)
 * — c'est ce que la passe de détection de fuites a trouvé sur
 * /en/ai-training-for-teams/*.
 *
 * Traduction FIDÈLE des bios publiées, pas une réécriture : ce sont des
 * descriptions factuelles de rôle, et §7 interdit d'inventer un titre ou une
 * référence pour une personne réelle. Aucun chiffre n'est ajouté, aucune
 * expertise n'est promue. Les entrées sont appariées par NOM sur la liste
 * française, qui reste la source unique pour les photos et les LinkedIn : une
 * seconde liste complète divergerait au premier ajout de formateur.
 */
const EN_BY_NAME: Record<string, { role: string; bio: string }> = {
  "Othmane Halim": {
    role: "Founder of AI Makers",
    bio: "200+ AI engagements. Expert in AI strategy and transformation.",
  },
  "Maneesh Behera": {
    role: "COO of AI Makers",
    bio: "Runs delivery and operations across our AI engagements.",
  },
  "Walid Boulanouar": {
    role: "CTO, AI Makers",
    bio: "Expert in Claude, AI agents and automation.",
  },
  "Othmane Khadri": {
    role: "Go-to-Market & Growth",
    bio: "Specialist in customer acquisition and AI-augmented prospecting.",
  },
  "Adel Dahani": {
    role: "AI & Microsoft expert",
    bio: "Specialist in enterprise Copilot rollouts.",
  },
  "Edouard Willemsen": {
    role: "AI trainer",
    bio: "Consultant in AI transformation and change management.",
  },
  Jim: {
    role: "AI art director",
    bio: "Art director specialising in generative AI and visual creation.",
  },
  "Colin Blain": {
    role: "AI trainer",
    bio: "Specialist in AI clones and the second-brain method. More than 2 years implementing AI in companies.",
  },
};

export const formateursEn: readonly Formateur[] = formateurs.map((f) => {
  const en = EN_BY_NAME[f.nom];
  // Un formateur ajouté côté FR sans entrée ici garde son texte français
  // plutôt que de disparaître de la grille anglaise : une absence se voit
  // moins qu'une fuite, mais une grille amputée se voit encore moins.
  return en ? { ...f, role: en.role, bio: en.bio } : f;
});
