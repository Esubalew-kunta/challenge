import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getPublishedCaseStudies } from "@/lib/case-studies";
import { formations } from "@/lib/formations";
import { secteurs } from "@/lib/secteurs";
import { villesFormation } from "@/lib/villes-formation";
import { jobOpenings } from "@/lib/careers/postes";
import { EN_PUBLISHED } from "@/lib/i18n";
import { BASE_FR as CHALLENGE_BASE_FR, DAYS_FR } from "@/lib/challenge/index.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aimakers.fr";

  const staticRoutes = [
    "",
    // Page « Offre AI PARTNER ». Elle était redirigée en 308 vers
    // /ai-transformation alors que llms.txt l'annonce comme une page distincte
    // (le programme de marque, quand /ai-transformation en détaille les
    // phases). La redirection était donc l'erreur, pas la page : elle a été
    // retirée de next.config.ts et l'URL est de nouveau indexable.
    "/offre",
    "/ai-transformation",
    "/forward-deployed-engineer",
    "/ai-operating-system",
    "/seo-geo",
    "/plateforme-data-ia",
    "/formation-ia-entreprise",
    "/formation-ia",
    "/secteurs",
    "/automatisation-ia-workflow",
    "/agence-ia",
    "/etudes-de-cas",
    "/gouvernance-ia",
    "/capacite",
    "/diagnostic-ia",
    "/outils",
    "/outils/calculateur-roi-ia",
    "/outils/audit-geo-gratuit",
    "/outils/scanner-opportunites-ia",
    "/playbook-ia",
    "/challenge-30-jours",
    "/challenge-claude-code",
    "/pourquoi-maintenant",
    "/ia-maroc",
    "/glossaire-ia",
    "/metiers/ingenieur-ia",
    "/a-propos",
    "/equipe",
    "/fondateur",
    "/carrieres",
    "/pourquoi-ai-makers",
    "/contact",
  ];

  // Les pages anglaises en ligne, DÉRIVÉES de `EN_PUBLISHED` et non recopiées.
  //
  // Cette liste était tenue à la main, et elle avait déjà divergé : ajouter une
  // page EN mettait à jour la porte de publication, les liens hreflang et la
  // bascule de langue, mais laissait le sitemap derrière — donc une page en
  // ligne, liée, canonique, et absente du seul fichier que Google lit en
  // premier. La dériver supprime la classe entière de l'oubli.
  const enRoutes = [...EN_PUBLISHED].sort();

  const legalRoutes = ["/mentions-legales", "/confidentialite", "/cgv"];

  const mainEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const enEntries: MetadataRoute.Sitemap = enRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  const secteurEntries: MetadataRoute.Sitemap = secteurs.map((sec) => ({
    url: `${baseUrl}/secteurs/${sec.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const villeEntries: MetadataRoute.Sitemap = villesFormation.map((v) => ({
    url: `${baseUrl}/formation-ia/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // /carrieres/postuler est volontairement ABSENTE : elle est en `robots:
  // {index: false}` (page de conversion, pas de contenu éditorial), et une
  // page noindex ne doit pas apparaître dans le sitemap — signal contradictoire
  // pour les moteurs.
  const jobRoleEntries: MetadataRoute.Sitemap = jobOpenings.map((job) => ({
    url: `${baseUrl}/carrieres/${job.slug}`,
    lastModified: new Date(job.postedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const formationEntries: MetadataRoute.Sitemap = formations.map((f) => ({
    url: `${baseUrl}/formation-ia-entreprise/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Seules les études de cas validées par le client sont exposées ;
  // les drafts restent accessibles mais noindex et hors sitemap.
  const caseStudyEntries: MetadataRoute.Sitemap = getPublishedCaseStudies().map(
    (c) => ({
      url: `${baseUrl}/etudes-de-cas/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  // Les trente jours français du challenge Claude Code, dérivés des données.
  //
  // Les jours ANGLAIS ne sont pas repris ici : depuis que la version française
  // existe, ils sont entrés dans `EN_PUBLISHED` pour que le hreflang puisse les
  // annoncer, et `enEntries` les sort donc déjà. Les dériver une seconde fois
  // mettait chaque URL anglaise deux fois dans le sitemap.
  const challengeDayEntries: MetadataRoute.Sitemap = DAYS_FR.map((day) => ({
    url: `${baseUrl}${CHALLENGE_BASE_FR}/${day.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...mainEntries,
    ...secteurEntries,
    ...villeEntries,
    ...jobRoleEntries,
    ...caseStudyEntries,
    ...formationEntries,
    ...blogEntries,
    ...enEntries,
    ...challengeDayEntries,
    ...legalEntries,
  ];
}


