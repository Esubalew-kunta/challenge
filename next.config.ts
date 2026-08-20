import type { NextConfig } from "next";

/**
 * Redirections 301 des anciennes URLs (site Framer aimakers.fr) vers les
 * pages équivalentes du nouveau site, pour préserver l'indexation et le jus
 * SEO à la bascule DNS. Chaque ancien article de blog pointe vers la page la
 * plus pertinente (money page, ville, secteur, gouvernance, ou nouvel article).
 */
const legacyBlogRedirects: Record<string, string> = {
  // Formations (généraliste) → money page
  "formation-ia": "/formation-ia-entreprise",
  "formation-ia-entreprise": "/formation-ia-entreprise",
  "formation-ia-entreprise-1": "/formation-ia-entreprise",
  "formation-intelligence-artificielle-entreprise": "/formation-ia-entreprise",
  "formation-ia-marketing": "/formation-ia-entreprise",
  "formation-ia-generative": "/formation-ia-entreprise",
  "formation-ia-certifiante": "/formation-ia-entreprise",
  "formation-cpf-ia": "/formation-ia-entreprise",
  "formation-ia-qualiopi": "/formation-ia-entreprise",
  "formation-ia-finance": "/formation-ia-entreprise",
  "chat-gpt-formation": "/formation-ia-entreprise",
  "ia-et-formation": "/formation-ia-entreprise",
  "coaching-et-accompagnement": "/formation-ia-entreprise",
  "coaching-de-dirigeants": "/formation-ia-entreprise",
  "formation-claude-entreprise": "/blog/meilleures-formations-claude-entreprise",
  // Formations par ville → money pages locales (pas de cannibalisation blog)
  "formation-ia-lyon": "/formation-ia/lyon",
  "formation-ia-nice": "/formation-ia/nice",
  "formation-ia-strasbourg": "/formation-ia/strasbourg",
  "intelligence-artificielle-bordeaux": "/formation-ia/bordeaux",
  // Audit / conseil / cabinet → money pages ou article
  "audit-intelligence-artificielle": "/ai-transformation",
  "audit-ia-entreprise": "/ai-transformation",
  "conseil-strategie-ia": "/ai-transformation",
  "feuille-de-route-ia": "/ai-transformation",
  "conseil-en-intelligence-artificielle": "/agence-ia",
  "conseil-aux-entreprises": "/agence-ia",
  "consultant-en-ia": "/blog/consultant-intelligence-artificielle",
  "cabinet-transformation-ia-france": "/blog/meilleures-agences-ia-france",
  // SEO / GEO
  "ai-seo": "/seo-geo",
  // Automatisation / process → money page
  "optimisation-des-processus": "/automatisation-ia-workflow",
  "automatisation-des-processus-metier": "/automatisation-ia-workflow",
  "chat-gpt-extensions": "/automatisation-ia-workflow",
  // Comptes-rendus : doublons → article canonique recréé
  "compte-rendu-automatique-gratuit": "/blog/chat-gpt-compte-rendu-de-reunion",
  "faire-des-comptes-rendus": "/blog/chat-gpt-compte-rendu-de-reunion",
  // Service client : doublon → article canonique recréé
  "chatbot-service-client": "/blog/ia-service-client",
  // Secteurs / métiers → pages ou articles
  "intelligence-artificielle-logistique": "/secteurs",
  "intelligence-artificielle-expertise-comptable": "/secteurs",
  "ia-expert-comptable": "/secteurs",
  "intelligence-artificielle-ressources-humaines": "/blog/intelligence-artificielle-rh",
  // Gouvernance / RGPD / risques → page ou article
  "ia-et-rgpd": "/gouvernance-ia",
  "les-dangers-de-lia": "/blog/risque-intelligence-artificielle",
  "intelligence-artificielle-travail": "/blog/impact-de-lia-sur-lemploi",
  // Thought leadership sans équivalent → hub blog
  "consommation-data-center-dans-le-monde": "/blog",
  "intelligence-artificielle-consommation-energie": "/blog",
  "ia-post-linkedin": "/blog",
};

const nextConfig: NextConfig = {
  // Serveur Node autonome : le build produit .next/standalone, que l'image
  // Docker recopie telle quelle. Sans ça, l'étape runner devrait embarquer
  // tout node_modules — plusieurs centaines de Mo sur une machine à 80% de
  // disque. Sans effet sur Vercel, qui ignore ce champ.
  output: "standalone",
  // En local : dossier de build hors synchro iCloud (le suffixe .nosync est ignoré
  // par iCloud Drive, ce qui évite les gels de build). Sur Vercel : ".next" attendu
  // par la plateforme, sinon le déploiement échoue (Output Directory mismatch).
  // En conteneur : ".next" aussi, car le Dockerfile copie des chemins figés —
  // CONTAINER_BUILD est posé par le Dockerfile, jamais en local.
  distDir: process.env.VERCEL || process.env.CONTAINER_BUILD ? ".next" : ".next.nosync",
  async headers() {
    // La préprod vercel.app ne doit jamais s'indexer : noindex conditionnel
    // par host, retiré automatiquement à la bascule sur aimakers.fr.
    //
    // onrender.com suit la même règle, et pour la même raison. Une URL Render
    // sert le site entier : sans cet en-tête, Google indexe une seconde copie
    // complète d'aimakers.fr qui concurrence l'originale sur ses propres mots
    // clés. Ajouté le 20 août 2026, avant le premier déploiement Render.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.*vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<renderHost>.*onrender\\.com)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/ai-training",
        destination: "/formation-ia-entreprise",
        permanent: true,
      },
      // Acculturation IA renommée Formation AI Champions (juillet 2026)
      {
        source: "/formation-ia-entreprise/acculturation-ia",
        destination: "/formation-ia-entreprise/formation-ai-champions",
        permanent: true,
      },
      {
        source: "/methode-ai-first",
        destination: "/#methode",
        permanent: true,
      },
      // Page Garanties supprimée (août 2026)
      {
        source: "/garanties",
        destination: "/ai-transformation",
        permanent: true,
      },
      // Fusions du 02/08/2026 : /securite absorbée par /gouvernance-ia,
      // /audit-ia-entreprise absorbée par /ai-transformation. Les deux pages
      // sources sont supprimées, leur contenu vit désormais dans la cible.
      {
        source: "/securite",
        destination: "/gouvernance-ia",
        permanent: true,
      },
      {
        source: "/audit-ia-entreprise",
        destination: "/ai-transformation",
        permanent: true,
      },
      // Ancien site : hub formations + toutes les pages formation détaillées
      {
        source: "/formations-ia",
        destination: "/formation-ia-entreprise",
        permanent: true,
      },
      // Chaque ancienne page formation pointe vers SA page, pas vers le
      // catalogue. Le wildcard ci-dessous les envoyait toutes sur l'index :
      // Google tenait encore /formations-ia/maitriser-claude-entreprise en
      // position 21 pendant que la vraie page était en 40, parce qu'aucun
      // signal ne lui parvenait. Les slugs viennent des URLs qui reçoivent
      // encore des impressions dans la Search Console (export du 2 août 2026).
      // Les variantes encodées sont déclarées en plus des littérales : les
      // moteurs envoient les caractères accentués et l'apostrophe typographique
      // en pourcent-encodé.
      ...[
        ["maitriser-claude-entreprise", "maitriser-claude"],
        ["go-to-market-ia-trouver-des-clients-avec-l’ia", "go-to-market-sales"],
        ["go-to-market-ia-trouver-des-clients-avec-l%E2%80%99ia", "go-to-market-sales"],
        ["vibe-coding-développer-avec-l’ia", "vibe-coding"],
        ["vibe-coding-d%C3%A9velopper-avec-l%E2%80%99ia", "vibe-coding"],
        ["création-publicité-–-ia-pour-la-créa", "creation-publicite-ia"],
        [
          "cr%C3%A9ation-publicit%C3%A9-%E2%80%93-ia-pour-la-cr%C3%A9a",
          "creation-publicite-ia",
        ],
      ].map(([from, to]) => ({
        source: `/formations-ia/${from}`,
        destination: `/formation-ia-entreprise/${to}`,
        permanent: true,
      })),
      // Filet : tout ancien slug formation non listé ci-dessus retombe sur le
      // catalogue. À garder en dernier, il capture ce qui reste.
      {
        source: "/formations-ia/:path*",
        destination: "/formation-ia-entreprise",
        permanent: true,
      },
      // Ancien site : les ~57 articles de blog indexés
      ...Object.entries(legacyBlogRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
