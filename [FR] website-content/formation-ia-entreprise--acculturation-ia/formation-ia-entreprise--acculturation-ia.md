# Formation : Acculturation IA : Masterclass — Master de contenu FR

> Le français est la langue primaire live des formations (marché FR fort). Copie ancrée sur `src/lib/formations.ts` (entrée `acculturation-ia`) et `formateurs`. Corrections d'audit conservées (fix résumé, FAQ variée).

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia-entreprise/acculturation-ia
- **Objet :** Page détail formation (catalogue) — convertit vers téléchargement catalogue + appel diagnostic.
- **Rôle SEO :** support (pilier formation ; FR fort)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | acculturation ia | 200 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | formation ia entreprise | 700 | 13 | Ahrefs France (KE) — cédé au pilier /formation-ia-entreprise |
| Secondaire | formation intelligence artificielle | 1 700 | 55 | Ahrefs France (KE) — tête générique, difficile |

> **Décision mots-clés :** cette page enfant possède le head spécifique **`acculturation ia`** ; le générique `formation ia entreprise` (700 / KD13) est cédé au pilier /formation-ia-entreprise pour éviter la cannibalisation enfant-vs-pilier. `formation intelligence artificielle` (1 700 / KD55) porté en variante de corps, non forcé.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Acculturation IA : Masterclass \| Formation IA en entreprise | Acculturation IA : masterclass pour vos équipes *(43 ; rendu ~55 après ajout auto de « \| AI Makers ». TICKET-FORM-TITLE-TPL doit d'abord retirer le mid-suffixe FR codé en dur « \| Formation IA en entreprise ». Ne pas écrire la marque à la main)* |
| Meta description (140–160) | *(actuel = résumé)* La formation de base : lever les craintes et installer les bons réflexes IA sur les tâches du quotidien. Sans jargon technique. | Une masterclass d'une demi-journée à une journée : donner aux équipes non techniques le réflexe d'utiliser ChatGPT, Claude, Gemini et Copilot sur leurs vraies tâches. *(~158 ; nécessite un champ `seoDescription` — TICKET-FORM-SEO-DESC)* |
| H1 | Acculturation IA : la masterclass qui donne le réflexe IA à toutes vos équipes | inchangé (= source `titre`) |
| Slug URL | /formation-ia-entreprise/acculturation-ia | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/formation-ia-entreprise/[slug]/page.tsx` · copie dans `src/lib/formations.ts` (entrée `acculturation-ia`).

### 4.1 — Hero + fiche
- **Champs :** categorie (Initiation), name, titre (H1), tagline, resume, niveau (Débutant), public, format, duree, prerequis, tools[] logos
- **Contenu (FR, source + fix) :**
  - Catégorie : `Initiation`
  - Nom (cartes) : `Acculturation IA : Masterclass`
  - Tagline : `Comprendre ce que l'IA sait vraiment faire, et gagner du temps dès le premier jour.`
  - Résumé *(fix audit — voir réconciliation)* : `La formation de base : à la fin, des équipes non techniques utilisent ChatGPT, Claude, Gemini et Copilot sur leurs tâches quotidiennes — rédaction, synthèse, analyse de documents. Sans jargon, sans code.`
  - Niveau : `Débutant` · Public : `Toutes les équipes, du support à la direction` · Format : `Présentiel, distanciel ou hybride` · Durée : `Format sur-mesure, de la demi-journée à la journée` · Prérequis : `Aucun prérequis technique`
- **Justification :** on mène par la promesse distinctive (acculturation de toute l'organisation, zéro prérequis) et le cadrage multi-assistants (Claude/ChatGPT/Gemini/Copilot) qui sépare cette page des programmes mono-outil.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Champs :** objectifs[] — 4 puces
- **Contenu (FR, source) :**
  1. `Comprendre ce que l'IA générative sait faire, et ce qu'elle ne sait pas faire`
  2. `Maîtriser les bases d'un prompt fiable et reproductible`
  3. `Appliquer l'IA à ses tâches réelles : rédaction, synthèse, analyse de documents`
  4. `Identifier ses propres cas d'usage à fort gain de temps`
- **Justification :** résultats cadrés pour un responsable d'équipe. La puce 4 amorce le passage au diagnostic.

### 4.3 — « Les modules de la formation »
- **Champs :** programme[] — 4 modules {titre, items[]}
- **Contenu (FR, source) :**
  - **Comprendre l'IA générative** : `De l'automatisation au deep learning : ce que l'IA change vraiment au travail` · `Panorama des assistants (Claude, ChatGPT, Gemini, Copilot) et de leurs différences` · `Démonstrations en direct sur des cas concrets`
  - **Les bases du prompting** : `Structurer un prompt : rôle, contexte, tâche, format attendu` · `Fiabiliser et reproduire des résultats de qualité` · `Atelier pratique : chaque participant construit et améliore ses prompts`
  - **L'IA sur vos tâches du quotidien** : `Rédiger, résumer, reformuler et traduire plus vite` · `Analyser des documents, extraire l'essentiel, préparer une réunion` · `Produire des visuels et des tableaux à partir de vos données`
  - **Repérer vos cas d'usage** : `Cartographier les tâches chronophages de votre métier` · `Prioriser les usages à fort impact et faible risque` · `Repartir avec un plan d'action immédiatement applicable`
- **Justification :** cursus réel fidèle. Le module de comparaison multi-outils est le différenciateur vs les programmes Copilot / Claude.

### 4.4 — « Ce que vos équipes en retirent »
- **Champs :** resultats[] — 3 stats {value, label}
- **Contenu (FR, source) :**
  - `7 h` — `gagnées par semaine et par collaborateur`
  - `10+` — `cas d'usage identifiés pour votre métier`
  - `0` — `prérequis technique nécessaire`
- **Justification :** 7 h/semaine est le chiffre canonique (llms.txt). Les deux autres sont structurels (formations.ts), pas des résultats inventés.

### 4.5 — Formulaire catalogue + formateurs + autres formations
- **Champs :** formulaire catalogue (lead magnet), bloc formateurs « Formés par ceux qui déploient l'IA en production », grille des autres formations
- **Contenu (FR) :** réutiliser les blocs partagés possédés par le pilier /formation-ia-entreprise — ne pas ré-écrire. Titre formateurs : `Formés par ceux qui déploient l'IA en production`. Formulaire : `Recevez le catalogue de formations complet` + champ email + bouton `Recevoir le catalogue`.
- **Justification :** discipline de réutilisation — le pilier possède le cadrage catalogue et la preuve formateurs.

### 4.6 — CTA final
- **Champs :** title, subtitle
- **Contenu (FR) :** Titre : `Vos équipes non techniques ont-elles déjà le réflexe IA ?` · Sous-titre : `Réservez un diagnostic de 30 minutes — nous cadrons le format, le public et les cas d'usage avant tout engagement.`
- **Justification :** réponse d'abord, sans remplissage. Éligibilité financement (Qualiopi / OPCO) possible ici — **[to validate placement]** (voir §9).

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | À qui s'adresse la masterclass d'acculturation ? | À toutes les équipes, quel que soit le niveau. La majorité des personnes que nous formons ne sont pas techniques : commerciaux, juristes, RH, support, dirigeants. La formation part de leurs tâches quotidiennes, pas de concepts techniques. |
| 2 | Faut-il des connaissances techniques ? | Aucune. C'est le point de départ de toute transformation IA : faire comprendre à l'ensemble des équipes ce que l'IA sait faire, et comment l'utiliser dans leur métier. |
| 3 | Quel assistant IA nos équipes vont-elles apprendre — ChatGPT, Claude, Gemini ou Copilot ? *(slot FR varié — spécifique programme)* | Les quatre. La session les compare et montre quand utiliser lequel ; si vous avez déjà standardisé sur l'un d'eux (par exemple Microsoft Copilot), les exercices pratiques s'y concentrent tout en gardant la vue d'ensemble. Dans tous les cas, le contenu est co-construit en amont à partir de vos processus et documents réels. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation IA pour les équipes (catalogue) | /formation-ia-entreprise | hub / pilier |
| Réserver un diagnostic | /contact | CTA |
| Maîtriser Claude en entreprise | /formation-ia-entreprise/maitriser-claude | programme sœur (suite naturelle) |

## 7. CTA
- **CTA primaire :** « Vos équipes non techniques ont-elles déjà le réflexe IA ? » → /contact
- **Secondaire :** formulaire catalogue PDF (CatalogueForm) — `Recevez le catalogue de formations complet`

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `La Masterclass Acculturation IA d'AI Makers est une session d'une demi-journée à une journée (présentiel, distanciel ou hybride) qui apprend aux équipes non techniques à utiliser l'IA générative — Claude, ChatGPT, Gemini et Microsoft Copilot — sur leurs tâches quotidiennes. Elle ne demande aucun prérequis technique et se construit autour des processus et documents réels de chaque équipe. AI Makers a formé plus de 2 500 professionnels en France et au Maroc.`
- **Entrée llms.txt (FR) :** `[Masterclass Acculturation IA](https://aimakers.fr/formation-ia-entreprise/acculturation-ia) : formation d'acculturation IA d'une demi-journée à une journée pour équipes non techniques, sur leurs vraies tâches quotidiennes — sans prérequis technique.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 7 h — gagnées par semaine et par collaborateur | public/llms.txt |
| +2 500 professionnels formés | public/llms.txt (formationStats) |
| 10+ — cas d'usage identifiés | src/lib/formations.ts — [to validate] |
| 0 — prérequis technique | src/lib/formations.ts |
| Format / durée / niveau (demi-journée–journée, présentiel/distanciel/hybride, débutant) | src/lib/formations.ts |
| Éligibilité financement (Qualiopi / OPCO) | **[to validate placement]** — absent de public/llms.txt et formations.ts ; aucun % de financement ni certification affirmé. |

## Réconciliation appliquée
- **Double suffixe de marque :** meta title proposé sans « \| AI Makers » manuel ; rendu dépend de TICKET-FORM-TITLE-TPL (retrait du mid-suffixe FR codé en dur). Prêt, non livré.
- **Meta :** proposée à ~158 (< 160) ; nécessite le champ `seoDescription` (TICKET-FORM-SEO-DESC).
- **Fix spécial acculturation (résumé) :** remplacé la ligne la plus réversible du résumé (« lever les craintes et installer les bons réflexes ») par un résultat concret (« à la fin, des équipes non techniques utilisent ChatGPT, Claude, Gemini et Copilot sur leurs tâches quotidiennes — rédaction, synthèse, analyse de documents »). « Sans jargon, sans code » conservé.
- **FAQ uniforme — VARIÉE :** remplacé le slot générique « adaptée à notre secteur ? » par une question spécifique programme (« Quel assistant IA — ChatGPT, Claude, Gemini ou Copilot ? »), en repliant la réassurance sectorielle dans la réponse (aucune info perdue). Deux autres FAQ conservées.
- **Conservé (force) :** le stack multi-assistants (Claude/ChatGPT/Gemini/Copilot) — différenciateur vs les programmes mono-outil.
- **Protégé :** 7 h/semaine et +2 500 (llms.txt) mot pour mot ; « 10+ cas d'usage » et Qualiopi/OPCO gardés `[to validate]` / `[to validate placement]` — aucun % de financement ni certification affirmé. Boilerplate formateurs/catalogue laissé en réutilisation pilier. Rien d'ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (2×); `[à valider placement]` → `[to validate placement]` (3×). Qualiopi/OPCO placement stays `[to validate placement]`.
- **Title:** already suffix-free ("Acculturation IA : masterclass pour vos équipes", ~55 rendered). TICKET-FORM-TITLE-TPL (strip hardcoded `| Formation IA en entreprise` mid-suffix) and TICKET-FORM-SEO-DESC stay logged dev tickets; proposed title/meta made correct & ≤60.
- **Formation CTA varied:** shared verbatim "Cette formation est-elle faite pour vos équipes ?" → "Vos équipes non techniques ont-elles déjà le réflexe IA ?" — anchored on this program's distinct fact (non-technical teams, zero-prereq IA reflex). Program-varied subtitle kept. No synonym-swap.
- **KEPT distinct:** multi-assistant stack (Claude/ChatGPT/Gemini/Copilot) — the differentiator vs single-tool programs. Varied FAQ arc kept (not re-templatised).
- **PROTECTED:** 7h/semaine and +2 500 (llms.txt) verbatim; "10+ cas d'usage" and Qualiopi/OPCO kept `[to validate]` / `[to validate placement]` (no financing % or certification asserted). Nothing added, rounded, or invented.
