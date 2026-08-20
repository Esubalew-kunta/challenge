# Étude de cas : Delassus Group — Master de contenu FR

> **noindex — draft, hors indexation.** Page noindex & hors sitemap ; résultats encore en cours de mesure (inProgress) en attente de validation client. Ne pas publier ni indexer avant que la validation FR soit levée.
> Statut live : **draft** · inProgress — nom client (source `client` = « Delassus Group ») gardé non remonté dans la prose tant que la signature n'est pas levée ; la prose reste anonymisée comme la source live (« un leader marocain… »).
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `delassus`).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/delassus
- **Objet :** Preuve (DRAFT) — avant/après mesuré pour un leader agro-industriel et export marocain. Preuve d'ancrage de la plateforme Data & IA.
- **Rôle SEO :** confiance/preuve + longue traîne (noindex tant que draft)
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | delassus étude de cas (marque) | — | — | marque/navigationnel (draft) |
| Secondaire | plateforme data bronze silver gold | faible | n/a | Ahrefs France (léger), 2026-07 — technique, niche |
| Secondaire | plateforme data ia étude de cas | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |

> **Décision mots-clés :** DRAFT + noindex — aucune cible SEO tant que non ouverte à l'indexation. Une fois publiée, valeur = preuve alimentant la money page plateforme Data & IA. Intention marque primaire ; aucun head term forcé.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | 20 ans de données agricoles, une plateforme data et des agents métier | 20 ans de données agricoles, une plateforme et des agents IA *(56 ; rendu ~68 après suffixe — trim recommandé : « 20 ans de données agricoles, une plateforme data » ~49. Distinct du H1 plus complet — divergence gated sur TICKET-CS-META-TITLE ; noindex draft, peu urgent)* |
| Meta description (140–160) | Plateforme data Bronze, Silver, Gold et agents IA métier pour un leader de l'export agricole marocain de 4 500 employés. Étude de cas complète. *(~142)* | idem — dans la fourchette, inchangée |
| H1 | 20 ans de données agricoles, une plateforme data et des agents métier | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/delassus | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `delassus`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Avril 2026 · en cours), tags [Plateforme data, Agents IA, Reporting], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `Agro-industrie et export · Maroc` — **période :** `Avril 2026 · en cours`
  - **tags :** `Plateforme data` · `Agents IA` · `Reporting`
  - **TL;DR :** `Un leader marocain de la production et de l'export de fruits et légumes (4 500 employés, 80 000 tonnes exportées par an) accumulait plus de 20 ans de données dans trois systèmes qui ne communiquent pas : ERP, production agricole, station de conditionnement. AI Makers construit sa plateforme data d'entreprise et ses agents IA métier pour le reporting et le pilotage. Particularité : le groupe n'a pas de DSI, et n'en veut pas.`
  - **métriques :** `4 500` — `employés, 80 000 tonnes exportées par an` · `3` — `systèmes en silo désormais connectés` · `15` — `agents métier priorisés avec les équipes terrain`
- **Justification :** **DRAFT + inProgress : les métriques décrivent le périmètre et la baseline, pas un résultat revendiqué. Chiffres mot pour mot de `case-studies.ts` ; [to validate] jusqu'à fin de mesure et signature client. Prose anonymisée comme la source live.**

### 4.2 — « La situation de départ »
- **Champs :** before[] — 4 puces
- **Contenu (FR, source) :**
  - `Trois systèmes en silo : ERP finance, production agricole (parcelles, tonnages), station de conditionnement. Aucune vue consolidée.`
  - `Suivi commercial et commandes sur Google Sheets, sujets aux erreurs.`
  - `Décisions subies plutôt qu'anticipées : météo, prix et demande non modélisés, décalages production-station détectés trop tard.`
  - `Une dizaine d'utilisateurs informels de ChatGPT, sans cadre.`
- **Justification :** la structure en trois silos est toute la raison d'être de la plateforme — exacte. « Décisions subies plutôt qu'anticipées » garde le cadrage source.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 3 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **La plateforme data** — `Serveur dédié, ingestion automatisée des trois systèmes sources, architecture en couches Bronze, Silver et Gold, tests de qualité des données. La couche Bronze a été livrée en avance sur le planning.` · visuel : `Le pipeline data (schéma d'architecture)`
  - **L'atelier terrain : 15 agents priorisés** — `Un atelier avec les équipes fermes a produit le plan des agents métier : chacun scoré sur le besoin, les utilisateurs, les données nécessaires et le gain attendu. Ce sont les utilisateurs finaux qui ont priorisé.` · visuel : `Photo de l'atelier terrain avec les équipes`
  - **Les agents de reporting** — `Déploiement par vagues : suivi des tonnages, KPI quotidien d'avancement, référentiel unifié des parcelles, reporting budgétaire. Chaque agent est validé par le métier à son jalon.` · visuel : `Un premier dashboard de reporting (données anonymisées)`
- **Justification :** « couche Bronze livrée en avance » et « ce sont les utilisateurs finaux qui ont priorisé » = deux points de preuve réels vérifiables — mot pour mot. 3 blocs seulement (comme en source).

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned ; stack [PostgreSQL, Docker, Airflow, Power BI, Claude]
- **Contenu (FR, source) :**
  - **étapes :** `Audit et cadrage sur site avec la direction : pas de DSI, la méthode s'adapte avec des ateliers directement métiers.` · `Atelier processus budgétaire avec les équipes fermes : 15 agents identifiés et priorisés.` · `Build de la plateforme : ingestion, architecture en couches, orchestration.` · `Déploiement progressif des agents par vague, avec validation métier à chaque jalon.`
  - **learned :** `Dans un groupe sans DSI, la co-construction terrain remplace la maîtrise d'ouvrage : ce sont les équipes fermes qui ont priorisé les agents, pas un comité. Résultat : une fondation livrée en avance, et des utilisateurs qui attendent leurs agents au lieu de les subir.`
- **Justification :** la méthode « sans DSI » est le différenciateur — colonne vertébrale. Learned = leçon transférable (co-construction terrain), sans clôture de réassurance.

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation. (DRAFT + inProgress : tout futur témoignage nécessite la signature client.)
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier plateforme Data & IA (/plateforme-data-ia) + l'étude de cas agents Gepromed. CTA dessous.
- **Justification :** preuve plateforme data — pointe vers la money page plateforme.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | Faut-il une DSI pour construire une plateforme data ? | Non. Ici, un référent IT côté client et des ateliers métiers suffisent : AI Makers porte l'architecture et le build. |
| 2 | Combien de temps pour une première couche exploitable ? | La couche d'ingestion et la couche Bronze ont été livrées en quelques semaines, en avance sur le planning. |
| 3 | Que deviennent nos systèmes existants ? | Ils restent en place. La plateforme se branche dessus et les fait parler entre eux, sans migration. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| Plateforme Data & IA : unifier vos systèmes en silo | /plateforme-data-ia | money page (pilier) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact

## 8. Bloc GEO
> DRAFT — ne pas ajouter au llms.txt live tant que la page n'est pas ouverte à l'indexation.
- **Paragraphe réponse d'abord (FR, citable) :** `Un leader marocain de la production et de l'export de fruits et légumes (4 500 employés, 80 000 tonnes/an) avait plus de 20 ans de données en silo entre un ERP, la production agricole et une station de conditionnement. Sans DSI, AI Makers a construit une plateforme data d'entreprise sur une architecture Bronze/Silver/Gold (couche Bronze livrée en avance) et 15 agents IA métier pour le reporting — priorisés lors d'un atelier terrain par les utilisateurs finaux eux-mêmes, et validés par le métier à chaque jalon. Résultats encore en cours de mesure (mission en cours).`
- **Entrée llms.txt (FR) :** _[DRAFT — en attente]_ `[Étude de cas Delassus](https://aimakers.fr/etudes-de-cas/delassus) : une plateforme data Bronze/Silver/Gold et 15 agents IA métier pour un leader de l'export agricole marocain sans DSI.` — à ajouter seulement après ouverture à l'indexation.

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 4 500 — employés, 80 000 tonnes exportées/an | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 3 — systèmes en silo désormais connectés | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 15 — agents métier priorisés avec les équipes terrain | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| Couche Bronze livrée en avance ; ~20 ans de données | src/lib/case-studies.ts (déclaré client — [to validate]) |
| Nom client (Delassus Group) | src/lib/case-studies.ts — [to validate] accord client en attente (draft) — non remonté dans la prose |
| Secteur, période | src/lib/case-studies.ts — [to validate] (draft) |

## Réconciliation appliquée
- **Longueur title / suffixe :** meta title proposé sans marque manuelle ; trim ≤60 recommandé, distinct du H1 plus complet. Title ≠ H1 gated sur TICKET-CS-META-TITLE. Peu urgent — noindex.
- **Meta :** ~142 car., dans la fourchette ; inchangée (la source FR live était déjà bien dimensionnée ; accroche « sans DSI » disponible si retrim nécessaire, déjà en source).
- **Arc uniforme :** NON varié — `inProgress` + draft noindex ; clôture « Résultats encore en cours de mesure » = drapeau de statut protégé.
- **Négations :** « des utilisateurs qui attendent leurs agents au lieu de les subir » et « priorisé … pas un comité » conservées — porteuses de sens (KEEP).
- **PROTÉGÉ (critique) :** statut `noindex` / `DRAFT` / `inProgress`, entrée llms.txt en attente (« [DRAFT — en attente] »), et tous les tags `[to validate]` conservés. Nom client gardé non remonté dans la prose (anonymisée comme la source live). Tous les chiffres (4 500 / 80 000 t / 3 / 15 / ~20 ans / « Bronze en avance ») mot pour mot ; AUCUN témoignage fabriqué. Rien d'ajouté, arrondi ou inventé. Ne pas publier ni indexer avant levée de la validation FR.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (8×). Draft honesty tags preserved.
- **Title/Meta:** left as-is — low urgency (noindex draft). Trim "20 ans de données agricoles, une plateforme data" (~49) stays recommended for opening; TICKET-CS-META-TITLE remains a logged dev ticket (Title≠H1).
- **Case ending:** NOT varied — `inProgress` + draft; "résultats en cours de mesure" is a protected status flag. The two hard-fact endings go to gepromed/thinkone.
- **Anonymity mix (name in cardTitle/schema + slug vs anonymized prose):** engineering-level gate — NOT edited here. Prose kept anonymized ("un leader marocain…"); the real name is NOT surfaced into any rendered prose field.
- **PROTECTED (critical) — kept intact:** `noindex` / DRAFT / `inProgress`, held llms.txt entry ("[DRAFT — en attente]"), all honesty tags. All figures (4 500 / 80 000 t / 3 / 15 / ~20 ans / "Bronze en avance") verbatim; NO testimonial fabricated. Nothing added, rounded, or invented. Do not publish or index before FR validation is lifted.
