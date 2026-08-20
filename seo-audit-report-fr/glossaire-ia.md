# Glossaire IA (/glossaire-ia)

**Source audité :** `[FR] website-content/glossaire-ia/glossaire-ia.md`
**Comparé à :** `src/app/glossaire-ia/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR (fr, France) 2026-07
**Voir aussi :** `_cross-page-findings.md`

## Score : 88 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Corriger avant promotion, mais quasi-prêt. Excellent actif GEO : 30 définitions answer-first, uniformes, factuellement justes, avec schema `DefinedTermSet` complet et implémenté. Deux corrections cosmétiques (title qui déborde, meta hors budget) sont déjà correctement scopées par le master. Aucune fabrication. La seule vraie opportunité manquée est le maillage interne par terme, aujourd'hui absent en live.

## Findings

### 🟡 Medium

**1. Title live dépasse 60 car. une fois le suffixe ajouté.**
`page.tsx:9` : `title: "Glossaire IA : les termes qui comptent en entreprise"` = **50 car.** Pas de suffixe écrit à la main (bien), mais le template `layout.tsx:15` ajoute `| AI Makers` → rendu **≈63 car.**, au-delà du budget SERP (~60). Le master propose `Glossaire IA : 30 termes clés en entreprise` (43 car. → ~56 avec suffixe) et conserve la version longue comme H1 — solution correcte. Fix : appliquer la version courte au champ `title` uniquement.

**2. Meta description live hors budget (trop longue).**
`page.tsx:10` : la meta live fait ≈195 car. (master §3), au-delà des 160 → tronquée en SERP. Le master propose une version à ~148 car. qui garde la liste de termes + l'attribution AI Makers. Fix : appliquer la version proposée.

**3. Maillage interne par terme absent en live — opportunité GEO/SEO manquée.**
Master §6 : seuls les liens vers `/contact` existent aujourd'hui. Les liens contextuels proposés (GEO → `/seo-geo`, AI Act/RGPD → `/gouvernance-ia`, Audit IA → `/audit-ia-entreprise`) ne sont pas implémentés. Routes cibles vérifiées existantes dans `sitemap.ts` (`/seo-geo`, `/gouvernance-ia`, `/audit-ia-entreprise`). Pourquoi ça compte : ces termes portent l'intention commerciale et devraient irriguer les pages service. Fix : ajouter les 3 liens contextuels aux définitions concernées (ticket contenu, nécessite champ lien dans le composant terme — à vérifier côté template).

**4. Ancre de page `glossaire ia` : volume FR faible (à cadrer les attentes).**
Ahrefs FR : `glossaire ia` = **100/mois** (global 150), `vocabulaire ia` = 70, `termes ia` = **0**. Le master a raison de traiter la page comme un **portefeuille de longue traîne** plutôt qu'une tête de requête : le vrai gisement est `agent ia` = **7 700 FR** (KD 35, pas 6 600 comme annoncé — l'écart est en faveur de la page, claim conservateur), `ia générative définition` = **700** (KD 46), `generative engine optimization` = **1 100** (KD 21, très accessible). Pas un finding de cannibalisation ; simplement : ne pas juger cette page sur `glossaire ia`. Confirmé : décision mot-clé du master = correcte.

### 🟢 Low

**5. Valeurs `TBD (Ahrefs FR)` à renseigner avant publication.**
Master §2 : plusieurs volumes marqués `TBD`. Données FR désormais disponibles pour renseigner : `agent ia` 7 700 / KD 35 ; `ia générative définition` 700 / KD 46 ; `c'est quoi le rag` 30 ; `generative engine optimization` 1 100 / KD 21 ; `glossaire ia` 100 ; `vocabulaire ia` 70 ; `termes ia` 0. Bonne posture (ne pas transposer les volumes EN) — juste compléter.

## Ce que la page fait de bien (vérifié)
- **Schema complet et implémenté** : `DefinedTermSet` + 30 `DefinedTerm` (`page.tsx:214-230`) + `BreadcrumbList` (`page.tsx:233+`), `inLanguage: "fr-FR"` correct pour le build FR. Exactement le bon type pour un glossaire — actif GEO de premier ordre.
- **Décompte exact** : 30 termes (8+9+7+6) confirmé, 4 catégories cohérentes avec les titres.
- **Définitions answer-first authentiques** : chaque première phrase est autonome et citable (ex. « Un agent IA est un système qui utilise un modèle de langage pour accomplir une tâche de bout en bout, de façon autonome »). Vrai payload featured-snippet / citation IA.
- **Exactitude technique élevée** : contrastes justes et non-génériques (générative vs prédictive, agent vs chatbot, RAG vs fine-tuning). AI Act « entré en vigueur en 2024, application progressive, 4 niveaux de risque » — correct et resserré. RGPD/IA correct.
- **Pas de double suffixe de marque** : le title n'écrit pas `| AI Makers` à la main (contrairement à /pourquoi-maintenant). Seul le dépassement de longueur reste.
- **Route dans le sitemap** (`sitemap.ts:38`), canonical propre.
- **Cohérence llms.txt** : l'entrée proposée s'aligne sur `llms.txt` (« 30 définitions… LLM, agent IA, RAG, GEO, AI Act, audit IA »).

## Priorité de correction
1. **🟡 Raccourcir le title** au champ `title` (garder H1 long) — corrige le débordement SERP.
2. **🟡 Trimer la meta** à ~148 car. (version master).
3. **🟡 Implémenter les 3 liens internes par terme** vers `/seo-geo`, `/gouvernance-ia`, `/audit-ia-entreprise`.
4. **🟢 Renseigner les volumes Ahrefs FR** (données ci-dessus) dans le master.

## Questions ouvertes (décision client)
- Le composant terme (`page.tsx`) dispose-t-il d'un champ pour un lien contextuel, ou faut-il un petit ticket dev pour l'ajouter ?

## Candidats cross-page
- **Title qui déborde à cause du suffixe template** : vérifier tous les titles de 48+ car. sans suffixe manuel (ici 50 → 63 rendu). Pattern distinct du double-suffixe de /pourquoi-maintenant.
- **`agent ia` 7 700 FR** : terme à fort volume défini ici — vérifier qu'`agence-ia`/`automatisation` ne le disputent pas de façon cannibale ; le glossaire en est le propriétaire définitionnel légitime (intention informationnelle vs commerciale).
