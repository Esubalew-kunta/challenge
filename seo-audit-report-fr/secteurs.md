# Secteurs — hub (/secteurs)

**Source audité :** `[FR] website-content/secteurs/secteurs.md`
**Comparé à :** `src/app/secteurs/page.tsx`, `src/lib/secteurs.ts`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 86 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Ship après corrections mineures. Hub sectoriel parmi les plus réussis du lot : il porte une vraie thèse citable (« le goulot d'étranglement diffère, donc le premier système à construire diffère »), route vers ses 8 pages enfant sans cloner leurs listes de cas d'usage, et dé-templatise ses cartes. Corrections : title/meta hors budget, et une incohérence de comptage dans `llms.txt` (6 secteurs nommés au lieu de 8).

## Findings

### 🟡 Medium

**1. Title live hors budget une fois le suffixe ajouté.**
`page.tsx:11` : `title: "Transformation IA par secteur : agences, TPE/PME, santé"` = **55 car.** (pas de suffixe manuel) → rendu **≈68 car.** avec `| AI Makers`. Master propose `IA par secteur : les cas d'usage qui diffèrent` (47 → ~59). Fix : appliquer la version courte.

**2. Meta description live hors budget.**
`page.tsx:12` : ≈180 car., au-delà de 160 → tronquée. Master trime à 158 car. en élargissant la liste de secteurs de façon compacte. Fix : appliquer la version proposée.

**3. `llms.txt` sous-compte les secteurs : 6 nommés au lieu de 8.**
`llms.txt:40` : « agences de communication, TPE-PME, santé-biotech, ESN, hôtellerie, banque-assurance » = **6 secteurs**. Il en manque deux présents dans `secteurs.ts` : **conseil-etudes-marche** et **medecins-cabinets**. Ce hub est la source de vérité (8). Master le note comme édition config/dev. Pourquoi ça compte : `llms.txt` alimente les moteurs IA — un sous-comptage propage une info fausse en GEO. Fix : mettre `llms.txt:40` à jour avec les 8 secteurs. **Cross-page (`_cross-page-findings.md §5`, cohérence comptage secteurs).**

### 🟢 Low

**4. Primaire `ia par secteur` ≈ 0 volume — décision assumée et correcte.**
Ahrefs FR : `ia par secteur` = pas de volume exploitable ; `cas d'usage ia` = 150 ; `transformation ia` = 100. Le master cible la requête catégorie légèrement et mise sur l'intention **par secteur** (pages enfant). Confirmé : le hub gagne sa place par sa thèse, pas par une tête de requête faible sur-optimisée. Pas un défaut.

## Ce que la page fait de bien (vérifié)
- **Thèse citable propre au hub** : « les cas d'usage qui comptent ne sont pas les mêmes dans une agence, une PME industrielle ou un laboratoire » + contrastes agence/medtech/courtier. Vraie valeur GEO, pas une simple liste de liens.
- **8 secteurs vérifiés** (`secteurs.ts` : agences-communication, tpe-pme, sante-biotech-medtech, esn-services-it, conseil-etudes-marche, medecins-cabinets, hotellerie-tourisme-loisirs, banque-assurance-courtage). Aucun secteur inventé.
- **Anti-cannibalisation propre** : teasers d'une ligne, les pages enfant portent les listes complètes de cas d'usage. Ne re-répond aucune page enfant en entier.
- **Cartes dé-templatisées** : formes variées (déclaratif / fragment / paire), pas de gabarit uniforme « punch : trois noms » — signal anti-slop.
- **Answer-first GEO excellent** (master §8) : liste les 8 secteurs + le postulat de différenciation, entièrement citable.
- **Pas de double suffixe de marque** ; **BreadcrumbList schema** (`page.tsx:19`) ; **route dans le sitemap** (`sitemap.ts:20`) + 8 pages enfant générées (`sitemap.ts:77-82`).

## Priorité de correction
1. **🟡 Mettre `llms.txt:40` à 8 secteurs** (ajouter conseil & médecins) — corrige une info GEO fausse.
2. **🟡 Raccourcir title (55→47) et meta (~180→158).**
3. **🟢 (Option) `ItemList`/`CollectionPage` schema** pour la collection de secteurs.

## Questions ouvertes (décision client)
- Aucune bloquante.

## Candidats cross-page
- **Comptage secteurs incohérent** : 8 (`secteurs.ts`, source de vérité) vs 6 (`llms.txt:40`) vs 6 (playbook `playbook-config.ts:169`). Consolider partout sur 8.
- **Title/meta hors budget** : pattern partagé (glossaire, challenge, formation-ia, secteurs).
