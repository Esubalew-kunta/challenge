import { z } from "zod";
import generated from "@/content/case-studies.generated.json";

/**
 * Études de cas — données produites par l'OS, validées ici.
 *
 * Le contenu vivait auparavant dans ce fichier, en dur. Il vit désormais dans
 * l'OS, qui l'écrit dans `src/content/case-studies.generated.json` ; ce module
 * n'en est plus que le CHARGEUR. Les exports n'ont pas changé d'un caractère :
 * les trois pages qui les consomment ignorent tout de ce déplacement.
 *
 * Pourquoi des données générées plutôt que du TypeScript généré : l'OS ne doit
 * jamais écrire de code exécutable sur le site public. Un JSON est inerte, se
 * relit en une ligne de diff, et ne peut rien faire d'autre qu'être invalide.
 *
 * Pourquoi une validation au CHARGEMENT et pas une simple assertion de type :
 * `schema.parse` s'exécute à la construction du module, donc pendant
 * `next build`. Un artefact malformé fait donc ÉCHOUER LE BUILD — et comme le
 * déploiement reconstruit l'image, un build en échec laisse le conteneur
 * précédent en place. Du mauvais contenu ne peut pas atteindre aimakers.fr : il
 * peut seulement ne pas être déployé. C'est précisément ce qui rend acceptable
 * de publier directement sur `main` sans relecture humaine du diff.
 *
 * Les clés inconnues sont ignorées plutôt que rejetées : le jour où l'OS
 * ajoutera un champ, le site continuera de construire au lieu de tomber, et
 * l'utilisera quand il sera prêt.
 */

const metricSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const systemSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Libellé du visuel attendu : rendu comme bloc placeholder tant que
  // l'asset réel (screenshot, photo) n'est pas livré.
  visual: z.string().optional(),
  // Visuel réel (screenshot anonymisé ou illustration), rendu dans un cadre
  // navigateur. Prend le pas sur `visual` quand il est présent.
  //
  // `width`/`height` sont obligatoires et non devinables depuis l'OS : ce sont
  // les dimensions intrinsèques que `next/image` exige pour réserver la place
  // et éviter le décalage de mise en page. Un mauvais ratio ici se voit.
  //
  // `note` : mention affichée sous le visuel — sert aujourd'hui à dire qu'une
  // image est une illustration et non une capture d'un vrai dossier client.
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
      note: z.string().optional(),
    })
    .optional(),
});

const caseStudySchema = z.object({
  slug: z.string().min(1),
  // "draft" = page accessible mais noindex + hors sitemap, en attente des
  // validations client (noms, chiffres, témoignages).
  //
  // Attention, contre-intuitif : le hub /etudes-de-cas liste AUSSI les
  // brouillons. « draft » ne veut donc pas dire caché, seulement non indexé.
  status: z.enum(["draft", "published"]),
  client: z.string(),
  sector: z.string(),
  period: z.string(),
  tags: z.array(z.string()),
  // Mission dont les résultats chiffrés sont encore en cours de mesure.
  inProgress: z.boolean().optional(),
  title: z.string(),
  cardTitle: z.string(),
  // Logo client affiché sur les cartes (slider homepage, hub études de cas).
  logo: z.string().optional(),
  // Meta description dédiée (~150 caractères) : le tldr est trop long
  // pour l'affichage dans les résultats de recherche.
  seoDescription: z.string(),
  tldr: z.string(),
  metrics: z.array(metricSchema),
  before: z.array(z.string()),
  systems: z.array(systemSchema),
  how: z.array(z.string()),
  learned: z.string(),
  testimonial: z
    .object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
      pending: z.boolean().optional(),
    })
    .optional(),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })),
  stack: z.array(z.string()),
});

const documentSchema = z.object({
  _generated: z.object({
    by: z.string(),
    hash: z.string(),
  }),
  items: z.array(caseStudySchema),
});

export type CaseStudyMetric = z.infer<typeof metricSchema>;
export type CaseStudySystem = z.infer<typeof systemSchema>;
export type CaseStudyDetail = z.infer<typeof caseStudySchema>;

// Au chargement du module, donc au build. Voir l'en-tête : c'est le garde-fou.
const parsed = documentSchema.parse(generated);

export const caseStudies: CaseStudyDetail[] = parsed.items;

/** Empreinte de l'artefact, pour détecter une divergence avec l'OS. */
export const caseStudiesHash: string = parsed._generated.hash;

export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getPublishedCaseStudies(): CaseStudyDetail[] {
  return caseStudies.filter((c) => c.status === "published");
}
