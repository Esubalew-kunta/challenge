/* Labels, share copy and seeded leaderboard — Le Benchmark des Makers. */

/* TRANSCRIBED FROM THE CHAT PASTE, not exported from the content pack.
   Same verification path as tracks.js. */

export const TIER_LABEL = { beginner: "Débutant", intermediate: "Intermédiaire", expert: "Expert" };

export const HASHTAGS = {
  growth: "#GEO #SEO #AIFirst",
  eng: "#AgentsIA #ClaudeCode #AIFirst",
  ops: "#Automatisation #n8n #AIFirst",
  fin: "#RevOps #GouvernanceIA #AIFirst"
};

/* LinkedIn post text — values in braces are injected by the engine. */
export const POST_LINKEDIN = "J'ai obtenu {score}/240 au Benchmark des Makers, niveau {NIVEAU}, track {track}.\n\nCe n'est pas le diagnostic de maturité IA qu'on remplit pour son entreprise. Là, on répond soi-même, sur des situations réelles de son métier : où poser un garde-fou, quel process automatiser, quand laisser la main à un humain. Tout le monde démarre en intermédiaire, 3 sur 3 fait monter, 1 ou 0 fait descendre, et la difficulté avance à chaque round.\n\n{hits} bonnes réponses sur {total}, {temps} au chrono.\n\nVous pensez faire mieux ? aimakers.fr\n\n{hashtags}";

export const DEFI_COLLEGUE = "J'ai obtenu {score}/240 au niveau {niveau} sur le Benchmark des Makers (track {track}). À vous — aimakers.fr";

/* CLASSEMENT D'AMORÇAGE, TROIS SCORES CORRIGÉS LE 28 AOÛT.

   Trois lignes portaient des scores qu'aucun parcours ne peut produire. Le
   moteur donne 10, 20 ou 30 points par bonne réponse selon le niveau, le round
   1 se joue toujours en intermédiaire, et le niveau ne bouge que d'un cran par
   round : l'ensemble atteignable est 0 à 160 de dix en dix, puis 180, 190, 210
   et 240. Rien d'autre. 170, 200, 220 et 230 n'ont aucun chemin.

   Sur le classement public d'un test qui mesure la rigueur, c'est la première
   chose qu'un lecteur attentif recalcule.

     Tobias K.   230 expert        ->  180 expert
     Lucas F.    200 expert        ->  100 expert
     Hugo D.     170 intermédiaire ->  110 intermédiaire

   Chaque remplacement est la valeur atteignable la plus proche EN DESSOUS de
   l'originale, valide pour le niveau de sortie de la ligne et encore libre :
   on descend, pour ne promouvoir personne par accident. Le tableau est
   reclassé par score décroissant.

   Un test verrouille l'ensemble atteignable, donc une prochaine valeur
   impossible fera échouer la suite au lieu de partir en ligne. */
export const SEED_BOARD = [
  { name: "Amélie R.", co: "Voltaire Dynamics", track: "eng", tier: "expert", score: 240, seed: true },
  { name: "Priya N.", co: "Meridian Retail", track: "fin", tier: "expert", score: 210, seed: true },
  { name: "Sofia M.", co: "Northwind Labs", track: "eng", tier: "expert", score: 190, seed: true },
  { name: "Tobias K.", co: "Northwind Labs", track: "growth", tier: "expert", score: 180, seed: true },
  { name: "Yara B.", co: "Corvus Santé", track: "ops", tier: "expert", score: 160, seed: true },
  { name: "Mathis L.", co: "Voltaire Dynamics", track: "fin", tier: "intermediate", score: 150, seed: true },
  { name: "Elena V.", co: "Studio Kestrel", track: "growth", tier: "intermediate", score: 140, seed: true },
  { name: "Idris A.", co: "Meridian Retail", track: "eng", tier: "intermediate", score: 130, seed: true },
  { name: "Camille T.", co: "Bastion Fret", track: "ops", tier: "intermediate", score: 120, seed: true },
  { name: "Hugo D.", co: "Bastion Fret", track: "growth", tier: "intermediate", score: 110, seed: true },
  { name: "Lucas F.", co: "Atelier Neuf", track: "ops", tier: "expert", score: 100, seed: true },
  { name: "Nils H.", co: "Corvus Santé", track: "fin", tier: "beginner", score: 90, seed: true },
  { name: "Rania S.", co: "Studio Kestrel", track: "growth", tier: "beginner", score: 70, seed: true },
  { name: "Owen P.", co: "Atelier Neuf", track: "eng", tier: "beginner", score: 50, seed: true }
];
