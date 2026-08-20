# Études de cas — hub (/etudes-de-cas)

**Source audité :** `[FR] website-content/etudes-de-cas/etudes-de-cas.md`
**Comparé à :** `src/app/etudes-de-cas/page.tsx`, `src/lib/case-studies.ts`, `src/app/sitemap.ts`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 86 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship après corrections mineures. Hub de preuve exemplaire sur l'hygiène d'index : 5 cas publiés listés, 2 cas draft correctement en `noindex` et **hors sitemap** (`getPublishedCaseStudies`). Cadrage honnête (« des résultats mesurés, pas des promesses »), clients réels nommés, aucune métrique non sourcée au niveau du hub. Corrections : title/meta hors budget, et une attente de volume mot-clé à recadrer. Les métriques détaillées vivent sur les pages enfant (hors périmètre) et doivent y porter une attribution client ou un tag `[to validate]`.

## Findings

### 🟡 Medium

**1. Title live hors budget une fois le suffixe ajouté.**
`page.tsx:11` : `title: "Études de cas IA : des résultats mesurés, pas des promesses"` = **58 car.** (pas de suffixe manuel) → rendu **≈71 car.** avec `| AI Makers`. Master propose `Études de cas IA : des résultats mesurés` (40 → ~52), la négation « pas des promesses » restant portée par le H1. Fix : appliquer la version courte.

**2. Meta description live largement hors budget.**
`page.tsx:12` : ≈215 car. (se termine sur la liste sectorielle « santé, MedTech, éducation, agro-industrie et logiciel ») → tronquée. Master trime à 140 car. Fix : appliquer la version proposée.

**3. Attente de volume sur `étude de cas ia` non étayée.**
Master §2 : « volume modéré, difficulté moyenne, intention exacte ». Ahrefs FR ne renvoie **aucun volume exploitable** pour `étude de cas ia` (ni `ia par secteur`) — ces requêtes sont quasi nulles en France. La qualification « volume modéré » est un claim non vérifié (ruleset §5.1). Ce n'est pas grave — un hub de preuve MOFU/BOFU ne vit pas du trafic organique sur cette tête de requête — mais l'attente doit être corrigée : la valeur de la page est la **preuve** au service des pages commerciales, pas le trafic. Fix : requalifier le mot-clé comme « volume faible, intention exacte » dans le master.

### 🟢 Low

**4. Métriques clients : responsabilité déportée sur les pages enfant.**
Le hub ne cite aucune métrique chiffrée (teasers = titres uniquement), donc pas de risque de fabrication ici. Mais le paragraphe answer-first affirme des faits sur des clients nommés (« Gepromed, MedTech de 6 personnes », « Sage rendu citable par ChatGPT et Gemini »). Ces claims doivent être exacts et validés sur les pages enfant. Master §9 : chaque enfant doit porter des chiffres sourcés client ou tagués `[to validate]` — les 2 drafts sont justement en attente. À confirmer lors de l'audit des pages enfant (hors périmètre de ce cycle).

## Ce que la page fait de bien (vérifié)
- **Hygiène d'index exemplaire** : `case-studies.ts` — 5 `status: "published"` (addictest, sage-geo, fondation-force, thinkone, gepromed), 2 `status: "draft"` (cardio-check-up, delassus). Le sitemap n'expose que les publiés (`sitemap.ts:100`, `getPublishedCaseStudies`). Les drafts non validés ne fuitent pas. Modèle à suivre.
- **Cadrage anti-promesse honnête** : « Des résultats mesurés. Pas des promesses. » + « chaque mission a un KPI de référence, mesuré avant et après ». Posture E-E-A-T forte pour un hub de preuve.
- **Clients réels nommés** (Sage, Gepromed, Fondation Force, Addictest, ThinkONE) — pas de client composite ou inventé au niveau du hub.
- **Answer-first GEO** (master §8) autonome et citable, attribue les chiffres « comme rapportés par le client ».
- **Pas de double suffixe de marque** ; **BreadcrumbList schema** (`page.tsx:21`) ; **route dans le sitemap** (`sitemap.ts:24`).

## Priorité de correction
1. **🟡 Raccourcir title (58→40) et meta (~215→140).**
2. **🟡 Requalifier l'attente mot-clé** `étude de cas ia` (volume faible, pas modéré).
3. **🟢 (Suivi) Vérifier l'attribution des métriques** sur les 5 pages enfant publiées (audit dédié).

## Questions ouvertes (décision client)
- Les métriques des 5 études publiées sont-elles toutes validées par les clients concernés (droit de citation + chiffres) ? (À confirmer sur les pages enfant.)

## Candidats cross-page
- **Attente de volume mot-clé surévaluée** : `étude de cas ia` (~0) et `ia par secteur` (~0) présentés comme requêtes exploitables — pattern à surveiller sur les hubs (renseigner les vrais volumes Ahrefs FR).
- **Title/meta hors budget** : pattern partagé (glossaire, challenge, formation-ia, secteurs, etudes-de-cas).
- **Attribution des métriques clients** sur les pages enfant études de cas — à auditer.
