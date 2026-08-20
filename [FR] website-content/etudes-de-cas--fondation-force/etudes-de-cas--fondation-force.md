# Étude de cas : Fondation Force — Master de contenu FR

> Statut live : **published** · résultats encore en cours de mesure (inProgress)
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `fondation-force`) — chiffres repris mot pour mot, Prix Nobel gardé générique (aucune personne nommée).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/fondation-force
- **Objet :** Preuve — avant/après mesuré pour la Fondation Force (fondation santé reconnue d'utilité publique · Strasbourg).
- **Rôle SEO :** confiance/preuve + longue traîne
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | fondation force étude de cas (marque) | — | — | marque/navigationnel |
| Secondaire | robots.txt bloque les robots ia | faible | n/a | Ahrefs France (léger), 2026-07 — longue traîne, niche |
| Secondaire | geo pour associations / fondations | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |

> **Décision mots-clés :** page de preuve, pas de cible mot-clé. L'accroche distinctive et citable — un robots.txt qui bloquait tous les robots IA — est longue traîne et quasi nulle en volume, mais un fort appât answer-engine. Intention marque primaire ; la page alimente /seo-geo comme seconde preuve GEO aux côtés de Sage.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | La fondation au Prix Nobel que les IA ne pouvaient pas lire | idem *(58 ; rendu ~70 après suffixe — trim recommandé : « La fondation Nobel que les IA ne lisaient pas » ~46. Title = H1 en source ; divergence gated sur TICKET-CS-META-TITLE)* |
| Meta description (140–160) | Le site d'une fondation santé bloquait tous les robots IA. Déblocage, moteur de contenu et visibilité GEO : étude de cas complète. *(~128, sous le plancher)* | Le site d'une fondation santé au Prix Nobel bloquait tous les robots IA. Déblocage, moteur de contenu et visibilité GEO : étude de cas complète. *(~142 — accroche « Prix Nobel » ajoutée depuis la source, aucun fait nouveau)* |
| H1 | La fondation au Prix Nobel que les IA ne pouvaient pas lire | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/fondation-force | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `fondation-force`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Mai 2026 · en cours), tags [GEO, Contenu, Mécénat], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `Fondation santé reconnue d'utilité publique · Strasbourg` — **période :** `Mai 2026 · en cours`
  - **tags :** `GEO` · `Contenu` · `Mécénat`
  - **TL;DR :** `La Fondation Force, fondation reconnue d'utilité publique dédiée à la recherche en santé (35 ans, conseil scientifique présidé par un Prix Nobel de médecine), était invisible dans les réponses de ChatGPT, Perplexity et Gemini. Cause découverte à l'audit : son site bloquait tous les robots des IA. AI Makers a débloqué la couche IA puis construit sa machine de visibilité et de mécénat.`
  - **métriques :** `100%` — `des robots IA bloqués par le site au départ` · `96%` — `du trafic dépendait de recherches contenant déjà la marque` · `35 ans` — `d'autorité scientifique à rendre visible`
- **Justification :** **inProgress : les métriques décrivent le diagnostic baseline, pas un gain revendiqué. Chiffres mot pour mot de `case-studies.ts` ; [to validate] jusqu'à fin de mesure. « Prix Nobel de médecine » gardé générique comme en source (aucune personne inventée).**

### 4.2 — « La situation de départ »
- **Champs :** before[] — 4 puces
- **Contenu (FR, source) :**
  - `Le fichier robots.txt bloquait GPTBot, ClaudeBot, PerplexityBot et tous les robots IA : un actif d'autorité exceptionnel invisible dans la couche IA.`
  - `448 clics par mois depuis Google, dont 96 % sur des recherches contenant déjà le nom de la fondation : quasi zéro acquisition de nouvelles audiences.`
  - `Pas de newsletter, pas de CRM donateurs, validation des contenus lourde pour une équipe réduite.`
  - `La branche recherche clinique absente des réponses IA sur ses requêtes métier.`
- **Justification :** la puce robots.txt est le pivot de l'histoire — noms de robots exacts conservés comme détail vérifiable de première main. « 448 clics/mois » préservé.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 4 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **Déblocage de la couche IA** — `Robots.txt corrigé, llms.txt, données structurées (organisation médicale, Prix Nobel) : le site redevient lisible et citable par les moteurs IA.` · visuel : `Avant / après du robots.txt et test de citation IA`
  - **Moteur de contenu automatisé** — `Environ un article optimisé par jour ouvré, relu et validé par la Déléguée Générale avant publication. La régularité que l'équipe ne pouvait pas tenir à la main.` · visuel : `Le calendrier de contenu en production`
  - **Workflow de validation sans friction** — `Pipeline de validation dans Notion avec notifications automatiques : la dirigeante valide en glissant une carte, sans changer d'outil. Le moteur d'autorité (backlinks) tourne en parallèle.` · visuel : `Le pipeline de validation des contenus`
  - **LinkedIn des dirigeants et prospection mécénat** — `Calendrier éditorial et rédaction dans la voix des deux dirigeants, workshop ICP, sourcing de prospects qualifiés et séquences personnalisées pour le mécénat.` · visuel : `Extrait du calendrier LinkedIn validé`
- **Justification :** noms d'outils réels (Notion, llms.txt) et le détail « valider en glissant une carte » gardent le premier main.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned ; stack [Claude, n8n, Notion, WordPress, Google Search Console]
- **Contenu (FR, source) :**
  - **étapes :** `Audit GEO complet : diagnostic technique, tests de citation sur les requêtes cibles, plan d'action priorisé.` · `Déblocage de la couche IA et instrumentation de la mesure (Search Console, Analytics).` · `Mise en route des moteurs de contenu et d'autorité, avec circuit de validation humain.` · `Extension au LinkedIn des dirigeants, à la newsletter et à la prospection mécénat.`
  - **learned :** `Pour une petite équipe à fort enjeu de validation, le système de validation compte autant que le système de production. Sans le workflow et les notifications, les contenus restaient bloqués en attente de relecture.`
- **Justification :** learned = enseignement concret et transférable (la validation comme goulot), tiré directement de la source — sans remplissage.

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation. (Mission inProgress.)
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier /seo-geo + l'étude de cas GEO Sage. CTA dessous.
- **Justification :** seconde preuve GEO — pointe vers la même money page et sa preuve sœur.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | Comment savoir si mon site est lisible par les IA ? | Vérifiez votre robots.txt : de nombreux sites bloquent GPTBot ou ClaudeBot sans le savoir, souvent à cause d'un réglage de plugin par défaut. |
| 2 | L'IA peut-elle produire du contenu crédible pour un acteur santé ? | Oui, à condition d'un circuit de validation humain. Ici, chaque contenu est validé par la direction avant publication. |
| 3 | Une fondation a-t-elle vraiment besoin de GEO ? | Les mécènes et partenaires vérifient désormais une organisation en interrogeant les IA. Ne pas y apparaître, c'est laisser d'autres raconter votre histoire. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| SEO & GEO : être cité par ChatGPT et Perplexity | /seo-geo | money page (pilier GEO) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `La Fondation Force, fondation reconnue d'utilité publique dédiée à la recherche en santé depuis 35 ans, dont le conseil scientifique est présidé par un Prix Nobel de médecine, était invisible dans ChatGPT, Perplexity et Gemini. L'audit en a trouvé la cause : son robots.txt bloquait tous les robots IA (GPTBot, ClaudeBot, PerplexityBot). AI Makers a débloqué la couche IA (robots.txt, llms.txt, données structurées), puis construit un moteur de contenu automatisé avec circuit de validation humain dans Notion, un moteur d'autorité, et le LinkedIn des dirigeants plus la prospection mécénat. Résultats encore en cours de mesure (mission en cours).`
- **Entrée llms.txt (FR) :** `[Étude de cas Fondation Force](https://aimakers.fr/etudes-de-cas/fondation-force) : une fondation santé dont le site bloquait tous les robots IA — comment AI Makers a débloqué la couche IA et construit sa visibilité GEO et son moteur de contenu.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 100% — des robots IA bloqués au départ | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 96% — du trafic dépendait de recherches contenant déjà la marque | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 35 ans — d'autorité scientifique | src/lib/case-studies.ts (déclaré client — [to validate]) |
| 448 clics/mois depuis Google | src/lib/case-studies.ts (déclaré client — [to validate]) |
| Prix Nobel au conseil scientifique (non nommé) | src/lib/case-studies.ts (gardé générique — aucune personne nommée) |
| Nom client, secteur, période | src/lib/case-studies.ts |

## Réconciliation appliquée
- **Double suffixe de marque :** aucun suffixe manuel ; Title = H1 en source. Trim ≤60 recommandé, divergence gated sur TICKET-CS-META-TITLE.
- **Meta (plancher) :** était ~128 (sous 140) ; accroche « au Prix Nobel » ajoutée (déjà en source) → ~142, dans la fourchette. Aucun fait nouveau.
- **Arc uniforme :** NON varié — cas `inProgress` ; clôture « Résultats encore en cours de mesure » = drapeau de statut protégé.
- **Protégé :** tous les chiffres (100% / 96% / 35 ans / 448 clics/mois) mot pour mot + `[to validate]` + `inProgress` ; noms de robots exacts conservés ; Prix Nobel gardé générique/non nommé (aucune personne inventée) ; AUCUN témoignage fabriqué. Rien d'ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (6×).
- **Title:** already suffix-free; trim "La fondation Nobel que les IA ne lisaient pas" (~46 rendered) stays recommended; TICKET-CS-META-TITLE remains a logged dev ticket.
- **Meta:** raised to ~142 (within 140–160) using the "Prix Nobel" hook already in source — no new fact. `seoDescription` update stays a data ticket.
- **Case ending:** NOT re-uniformed — `inProgress` "résultats en cours de mesure" is a protected status flag.
- **PROTECTED — no case metric touched:** 100% / 96% / 35 ans / 448 clics/mois verbatim + `inProgress`; exact bot names (GPTBot, ClaudeBot, PerplexityBot) kept; Nobel laureate kept generic/unnamed (no person invented); NO testimonial fabricated. Nothing added, rounded, or invented.
