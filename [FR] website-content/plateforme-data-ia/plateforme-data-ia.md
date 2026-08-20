# Plateforme Data & IA (/plateforme-data-ia) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/plateforme-data-ia/page.tsx` (inline) via le template `ServicePage`. On conserve les chiffres et le stack à l'identique et on n'applique que les corrections d'audit (budget title, dé-empilage des négations, mots-clés FR).

## 1. En-tête de page
- **Route (FR, live) :** /plateforme-data-ia
- **Objet :** Page offre : unifier les systèmes en silo (Bronze/Silver/Gold) + agents IA de reporting.
- **Rôle SEO :** support (FR : plateforme data d'entreprise / architecture médaillon)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | plateforme data | 200 | 0 | Ahrefs France (KE), 2026-07 |
| Secondaire | data engineering | 300 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | architecture médaillon | minimal | — | ancre GEO citable (Bronze/Silver/Gold) |
| Support | plateforme data d'entreprise / agents ia reporting | minimal | — | termes support de corps |

> **Décision mots-clés :** en France les têtes assumées du brief sont trop fines pour une page service (`data foundation for ai`, `rag`). Le primaire honnête est **`plateforme data`** (exact match avec ce que la page vend) ; **`data engineering`** porte le volume et l'intention prestataire ; **`architecture médaillon`** (le Bronze/Silver/Gold décrit par la page) est une ancre GEO/citable rare à très faible concurrence. `rag` (informationnel/dev) est mentionné en corps, pas ciblé.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Plateforme data & IA : vos données enfin exploitables | `Plateforme data & IA : vos données exploitables` *(46 ; rend ~58 avec le suffixe `\| AI Makers` — dans le budget)* |
| Meta description (140–160 car.) | Une plateforme data d'entreprise unifie vos systèmes en silo (ERP, production, commercial) puis y branche des agents IA de reporting et de pilotage. Architecture Bronze, Silver, Gold… | `Une plateforme data d'entreprise unifie vos systèmes en silo (ERP, production, CRM) sur un socle Bronze/Silver/Gold, puis y branche des agents IA de reporting. Diagnostic gratuit.` *(157 ; « Tout vous appartient » → next-step « Diagnostic gratuit » pour une marge sous 160 + une action, cf. audit)* |
| H1 | Vos données valent de l'or. Encore faut-il les brancher. | Inchangé — `Vos données valent de l'or. Encore faut-il les brancher.` |
| URL slug | /plateforme-data-ia | /plateforme-data-ia |

## 4. Sections & contenu
Template : `service-page.tsx`. Copy inline dans `src/app/plateforme-data-ia/page.tsx` ; visuel `data-silos.tsx`.

### 4.1 — Hero + stats + bande de preuve
- **Composant :** `service-page.tsx`
- **Champs :** badge, h1, intro answer-first, heroStats[3], proof
- **Proposé (FR) — verbatim live :**
  - **badge :** `Plateforme Data & IA`
  - **h1 :** `Vos données valent de l'or. Encore faut-il les brancher.`
  - **intro (answer-first) :** `Une plateforme data d'entreprise unifie vos systèmes en silo (ERP, production, commercial) dans un socle unique en couches Bronze, Silver et Gold, puis y branche des agents IA de reporting et de pilotage. Résultat : une seule version du chiffre, des reportings qui se produisent seuls, et des décisions anticipées plutôt que subies. Sans DSI requise, et tout vous appartient.`
  - **heroStats[3] :** `+50 entreprises accompagnées` · `+200 systèmes en production` · `9,6/10 de satisfaction`
  - **proof caption :** `Mise en place du pilotage data avec les équipes métier.`
- **Rationale :** l'intro définit « plateforme data d'entreprise » + « architecture médaillon » (Bronze/Silver/Gold) dans les 60 premiers mots — bloc citable LLM. « Sans DSI requise » et « tout vous appartient » lèvent les deux objections que ce buyer soulève en premier.

### 4.2 — « Vos silos, branchés dans un seul socle »
- **Composant :** sections[0] + `data-silos.tsx`
- **Proposé (FR) — verbatim live :**
  - **badge :** `En un coup d'œil` — **title :** `Vos silos, branchés dans un seul socle` — **description :** `Vos systèmes séparés déversent leurs données dans un socle unique en trois couches, Bronze, Silver, Gold. Vos agents lisent le Gold et pilotent en temps réel.`
- **Rationale :** nomme les couches médaillon pour le mot-clé secondaire et le visuel. Court — le schéma porte le poids.

### 4.3 — « De vos silos à la donnée qui décide » (déroulé)
- **Composant :** sections[1] + `etapes`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le déroulé` — **title :** `De vos silos à la donnée qui décide` — **description :** `Quatre étapes, chacune avec un livrable exploitable. La plateforme produit de la valeur avant d'être finie.`
  - **01 — Cartographie des sources :** `On inventorie vos systèmes : ERP, production, commercial, fichiers Excel. Qui produit quelle donnée, où elle dort, qui en a besoin.`
  - **02 — Ingestion et couche Bronze :** `Les données brutes de tous les systèmes convergent automatiquement vers un socle unique, avec tests de qualité. Fini les exports manuels.`
  - **03 — Couches Silver et Gold :** `Nettoyage, référentiels unifiés, modèles métier : la donnée devient fiable, croisable et prête pour la décision.`
  - **04 — Agents IA et dashboards :** `Des agents de reporting priorisés en atelier avec vos équipes : suivi quotidien, consolidations, alertes. La donnée vient à vous.`
- **Rationale :** l'explicatif architecture médaillon — la section qui capte le mot-clé et donne aux LLM une liste d'étapes propre à citer. « La valeur avant d'être finie » est la promesse de process honnête.

### 4.4 — « Ce que ça donne en vrai »
- **Composant :** sections[2] + `CasSection`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Sur le terrain` — **title :** `Ce que ça donne en vrai`
  - **kicker :** `Mission en cours`
  - **titre cas :** `Un leader marocain de l'export agricole : 4 500 employés, 20 ans de données, 3 systèmes qui ne se parlaient pas.`
  - **corps :** `ERP financier, logiciel de production agricole, système de station de conditionnement : aucune vue consolidée, un suivi commercial sur Google Sheets, des décisions subies plutôt qu'anticipées. Nous construisons sa plateforme data d'entreprise et ses agents de reporting : la couche Bronze et l'ingestion automatisée ont été livrées en avance sur le planning, et 15 agents métier ont été priorisés en atelier avec les équipes des fermes elles-mêmes.`
  - **note :** `Étude de cas complète en cours de validation client.`
- **Rationale :** mission réelle en cours (page.tsx), gardée factuelle, sans résultat inventé. [to validate] : 4 500 employés / 20 ans / 3 systèmes / 15 agents sont du copy live — client non encore nommé/publié (gate de validation).

### 4.5 — « Ce que vous avez en main » (livrables)
- **Composant :** sections[3] + `livrables`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Les livrables` — **title :** `Ce que vous avez en main`
  - **liste[6] :**
    - `Une plateforme data souveraine, hébergée où vous le décidez.`
    - `L'ingestion automatisée de vos systèmes sources, avec tests de qualité.`
    - `Des référentiels métier unifiés : fini les trois versions du même chiffre.`
    - `Des agents IA de reporting priorisés par vos équipes, livrés par vagues.`
    - `Des dashboards de pilotage branchés sur la donnée fiabilisée.`
    - `La propriété intégrale : infrastructure, pipelines, agents, documentation.`
- **Rationale :** propriété + souveraineté sont les ancres de confiance pour ce buyer.

### 4.6 — « Le socle de tous vos agents IA » (et après)
- **Composant :** sections[4] + `ApresSection`
- **Proposé (FR) :**
  - **badge :** `Et après` — **title :** `Le socle de tous vos agents IA`
  - **p1 :** `Une plateforme data est le socle qui rend les agents IA fiables. Une fois la donnée unifiée, chaque nouveau cas d'usage (reporting, prévision, alerting, copilotes métier) se construit en quelques semaines.` *(fix d'audit : dé-empilage — live « n'est pas une fin : c'est le socle… » et « en semaines, pas en mois » aplatis en positif)*
  - **p2 :** `C'est pour ça que la plateforme s'inscrit dans notre accompagnement complet : audit pour prioriser, ingénieur dédié pour construire, formation hebdomadaire pour rendre vos équipes autonomes.`
  - **lien inline :** `Voir l'accompagnement complet` → /ai-transformation
- **Rationale :** positionne la plateforme comme socle des offres agents/AI-OS (équité de maillage) sans cloner leur copy.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. **Copy live conservé verbatim** (fix d'audit sur FAQ1 uniquement).

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Faut-il une DSI pour construire une plateforme data ? | Non. Un référent IT côté client et des ateliers avec les équipes métiers suffisent : nous portons l'architecture, le build et l'exploitation. Nous travaillons aujourd'hui avec un groupe de 4 500 personnes qui n'a pas de DSI, et n'en veut pas. La plateforme est pensée pour être pilotée par le métier lui-même. *(fix d'audit : « pas par un service informatique » aplati)* |
| 2 | Nos données sont éparpillées et de mauvaise qualité, est-ce bloquant ? | C'est le point de départ de la quasi-totalité des missions : des systèmes qui ne se parlent pas, des exports Excel manuels, des référentiels incohérents. La couche Bronze ingère les données telles qu'elles sont, puis les couches Silver et Gold les nettoient et les fiabilisent progressivement, avec des tests de qualité automatisés. On ne vous demande pas des données propres : on vous les rend propres. |
| 3 | Quels outils utilisez-vous ? | Des briques éprouvées et sans coût de licence caché : PostgreSQL pour le stockage, Docker pour l'infrastructure, Airflow pour l'orchestration des flux, Power BI ou équivalent pour les dashboards, et des agents IA (Claude, n8n) pour le reporting automatisé. Le tout se branche sur vos systèmes existants : ERP, outils de production, CRM. Rien n'est migré, rien n'est remplacé. |
| 4 | Combien de temps avant une première couche exploitable ? | Sur notre dernière mission de ce type, la couche d'ingestion et la couche Bronze ont été livrées en quelques semaines, en avance sur le planning. Les agents de reporting arrivent ensuite par vagues, chacun validé par les équipes métiers à son jalon. Vous ne payez pas 18 mois de projet data avant de voir un premier résultat. |
| 5 | À qui appartient la plateforme ? | À vous, intégralement : l'infrastructure, le code des pipelines, les agents, la documentation. C'est la même garantie de propriété totale que sur toutes nos missions. Le jour où la collaboration s'arrête, tout continue de tourner chez vous. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| L'AI Operating System sur vos données | /ai-operating-system | connexe |
| L'accompagnement complet en 3 phases | /ai-transformation | connexe |
| Les résultats mesurés chez nos clients | /etudes-de-cas | connexe |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA title :** `Vos systèmes ne se parlent pas ?`
- **CTA subtitle :** `30 minutes pour cartographier vos sources de données et identifier le premier agent de reporting à fort ROI.`
- **label :** `Réserver mon diagnostic gratuit` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Une plateforme data d'entreprise unifie les systèmes en silo d'une entreprise (ERP, production, CRM) sur un socle unique structuré en architecture médaillon (couches Bronze, Silver, Gold), puis y branche des agents IA de reporting et de pilotage. AI Makers construit ces plateformes de bout en bout — cartographie des sources, ingestion automatisée, nettoyage, agents de reporting et dashboards — sans DSI requise et avec propriété client totale (infrastructure, pipelines, agents, documentation). C'est le socle data qui rend les agents IA fiables.`
- **Entrée llms.txt (FR) :** `[Plateforme Data & IA](https://aimakers.fr/plateforme-data-ia) : AI Makers unifie les systèmes en silo (ERP, production, CRM) sur un socle médaillon Bronze/Silver/Gold, puis y branche des agents IA de reporting — sans DSI requise, propriété client totale.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| heroStats : +50 entreprises, +200 systèmes, 9,6/10 satisfaction | public/llms.txt (canonique) + bookingProof |
| Architecture médaillon Bronze/Silver/Gold | copy page.tsx |
| Stack : PostgreSQL, Docker, Airflow, Power BI, Claude, n8n | copy FAQ page.tsx |
| Groupe marocain export agricole 4 500 personnes, 20 ans de données, 3 systèmes, 15 agents, Bronze en avance | copy page.tsx — [to validate] (en cours, client non nommé) |
| Garantie de propriété totale | pattern site (/garanties) — référence, non ré-écrit |

## Corrections d'audit appliquées
- **Title** — resserré à 46 car. (rend ~58 avec le suffixe auto).
- **Dé-empilage des négations** — §4.6 « n'est pas une fin » et « en semaines, pas en mois » aplatis en positif ; FAQ1 « pas par un service informatique » aplati. Gardées : FAQ3 « Rien n'est migré, rien n'est remplacé » (signature non-disruption) et FAQ2 « On ne vous demande pas des données propres : on vous les rend propres » (négation page-spécifique la plus forte).
- **Mot-clé `plateforme data`** — corrigé 150 → 200/KD0 (Ahrefs FR ; voir §Reconciliation applied).
- **Meta** — ramenée de 159 (plafond, zéro marge) à 157 en terminant sur un next-step « Diagnostic gratuit ».

## À valider
- Cas agri-export en cours (4 500 / 20 ans / 3 systèmes / 15 agents, Bronze en avance) : preuve first-hand `[to validate]`, client non nommé (gate de validation).
- Ingénierie laissée au dev : slug EN `/enterprise-data-platform` + sitemap, i18n du chrome ServicePage. Pas des éditions de contenu.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 88/100 + anti-slop Clean −11).

**Changé :**
1. **Mot-clé FR (rule 5) :** `plateforme data` 150 → **200 / KD0** (Ahrefs FR). `data engineering` 300 et `architecture médaillon` (ancre GEO) inchangés.
2. **Meta (rule 2, marge) :** 159 (au plafond, zéro marge — le FR gonfle à la moindre édition) → 157 en remplaçant « Tout vous appartient » par le next-step « Diagnostic gratuit » (garde le primaire + une action).

**Vérifié conforme (rien changé) :**
- **Title (rule 1) :** `Plateforme data & IA : vos données exploitables` (46, rendu ≈58 ≤60). OK.
- **Négations (rule 4) :** déjà dé-empilées (§4.6 + FAQ1 aplaties) ; deux instances signature conservées (« On ne vous demande pas des données propres : on vous les rend propres » ; « Rien n'est migré, rien n'est remplacé »). Non saturé.
- **Tags (rule 7) :** `[to validate]` déjà au bon littéral (aucun `[à valider]`).
- **Composants partagés / garantie propriété** : référencés, non clonés.

**Délibérément gardé (PROTECT) :**
- **Cas agri-export en cours** (4 500 pers. / 20 ans / 3 systèmes / 15 agents / Bronze en avance) : preuve first-hand `[to validate]`, client non nommé, aucun résultat/ROI inventé, note « en cours de validation client » — intact jusqu'au gate.
- **Stack réelle nommée** (PostgreSQL, Docker, Airflow, Power BI, Claude, n8n) + « sans coût de licence caché » — signal opérateur, gardé.
- **H1 métaphore** « Vos données valent de l'or » : conservé (le primaire est bien distribué dans l'intro/titres ; l'audit note le trade-off voix de marque comme non bloquant).

**Pour décision owner (hors périmètre édition) :** confirmer les chiffres du cas agri-export + le consentement du client (même non nommé) avant de lever le gate `[to validate]` ; H1 porteur de mot-clé = optionnel (voix de marque conservée).
