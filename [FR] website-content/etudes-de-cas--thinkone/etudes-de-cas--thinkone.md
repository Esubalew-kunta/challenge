# Étude de cas : ThinkONE — Master de contenu FR

> Statut live : **published** (publié)
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `thinkone`) — métriques reprises mot pour mot. Fin d'arc variée conservée (voir §7).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/thinkone
- **Objet :** Preuve — avant/après mesuré pour ThinkONE (études et recherche marketing · Maroc).
- **Rôle SEO :** confiance/preuve + longue traîne
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | thinkone étude de cas (marque) | — | — | marque/navigationnel |
| Secondaire | ia pour études de marché | faible | n/a | Ahrefs France (léger), 2026-07 — niche |
| Secondaire | formation ia équipe étude de cas | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |

> **Décision mots-clés :** page de preuve. Les cas formation/skills sont quasi nuls en volume. La valeur est l'E-E-A-T alimentant la money page /formation-ia-entreprise. Intention marque primaire ; aucun head term forcé.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | L'IA au cœur d'un cabinet d'études marketing | idem *(44 ; rendu ~56 après suffixe — dans le budget. Title = H1)* |
| Meta description (140–160) | Formation IA et skills métier pour un cabinet d'études marketing : générateur de questionnaires quantitatifs sans biais et production accélérée. *(~142)* | idem — dans la fourchette, inchangée |
| H1 | L'IA au cœur d'un cabinet d'études marketing | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/thinkone | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `thinkone`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Octobre 2025 à mars 2026), tags [Formation, Skills IA, Études], title (H1), tldr, metrics[] × 2
- **Contenu (FR, source) :**
  - **secteur :** `Études et recherche marketing · Maroc` — **période :** `Octobre 2025 à mars 2026`
  - **tags :** `Formation` · `Skills IA` · `Études`
  - **TL;DR :** `ThinkONE, cabinet d'études et de recherche marketing au Maroc, voulait accélérer la production de ses livrables (questionnaires, analyses, rapports) et donner à son équipe le réflexe IA. AI Makers a formé l'équipe sur plusieurs mois et construit des skills IA métier, dont un générateur de questionnaires quantitatifs aligné sur les standards internationaux de la recherche marketing.`
  - **métriques :** `4+` — `sessions de formation sur mesure` · `6 mois` — `d'accompagnement continu de l'équipe`
- **Justification :** deux métriques seulement (comme en source). Chiffres mot pour mot de `case-studies.ts`.

### 4.2 — « La situation de départ »
- **Champs :** before[] — 3 puces
- **Contenu (FR, source) :**
  - `Production des livrables (questionnaires, analyses, slides) lente et entièrement manuelle.`
  - `L'équipe n'avait pas le réflexe d'intégrer l'IA dans son quotidien.`
  - `Acquisition commerciale artisanale, avec un plafond de verre assumé.`
- **Justification :** traduction directe ; « plafond de verre assumé » garde le ton candide de la source.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 3 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **Générateur de questionnaires quantitatifs** — `Un agent expert configuré comme un directeur d'études senior : questionnaires sans biais, méthodologiquement corrects, alignés sur les standards internationaux et les bonnes pratiques internes du cabinet. Il challenge même les briefs.` · visuel : `Un questionnaire généré à partir d'un brief`
  - **Skills IA métier** — `Des skills Claude personnalisés (contexte et instructions métier) pour la production de livrables, plutôt que des prompts génériques copiés-collés.`
  - **Production de contenu** — `Assistant de création de carrousels LinkedIn et appui au lancement du podcast du cabinet.` · visuel : `Un carrousel généré pour le cabinet`
- **Justification :** « Il challenge même les briefs » conservé — capacité réelle et distinctive, pas du slop. Claude nommé comme outil réel.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 3 étapes ; learned ; stack [Claude, ChatGPT]
- **Contenu (FR, source) :**
  - **étapes :** `Formation de l'équipe par sessions successives, sur les cas réels du cabinet.` · `Construction de skills métier au fil des besoins identifiés en session.` · `Accompagnement continu sur l'adoption et les outils.`
  - **learned :** `L'appropriation de l'IA passe par des skills liés aux tâches réelles de chacun, pas par des formations génériques. Chaque session partait d'un livrable concret du cabinet.`
- **Justification :** learned = leçon transférable (skills sur tâches réelles > formation générique) — fidèle, sans clôture de réassurance.

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation.
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier /formation-ia-entreprise + l'étude de cas Gepromed (adoption des skills). CTA dessous.
- **Justification :** preuve formation/skills — pointe vers la money page formation.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | L'IA peut-elle produire un questionnaire d'étude sans biais ? | Oui, si l'agent est configuré avec la méthodologie : types d'échelles, ordre des questions, formulations neutres. C'est la configuration métier qui fait la qualité, pas le modèle seul. |
| 2 | Combien de temps pour former une équipe d'études à l'IA ? | Quelques sessions suffisent pour les premiers gains, mais l'adoption durable demande un accompagnement sur plusieurs mois, ancré dans les livrables réels. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| Formation IA pour vos équipes, sur vos cas réels | /formation-ia-entreprise | money page (pilier) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact
- **Variation d'arc (§3.1 — 1 des 2 cas terminés variés) :** conserver le *composant* CTA « Obtenez les mêmes résultats », mais faire atterrir la dernière phrase narrative sur un **fait dur** plutôt que sur un écho du CTA. Phrase de clôture avant le CTA : `Le générateur de questionnaires tourne aujourd'hui en production, et l'équipe a gardé le réflexe IA six mois plus tard — les deux systèmes que la mission visait à laisser derrière elle.` (faits seulement : statut production + fenêtre d'accompagnement de 6 mois déjà en source ; aucune métrique nouvelle.)

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `ThinkONE, cabinet marocain d'études et de recherche marketing, a travaillé six mois avec AI Makers pour accélérer ses livrables et donner à l'équipe le réflexe IA. Le dispositif a combiné 4+ sessions de formation sur mesure et des skills Claude personnalisés, dont un générateur de questionnaires quantitatifs configuré comme un directeur d'études senior — sans biais, méthodologiquement correct et aligné sur les standards internationaux. La leçon : l'adoption vient de skills liés aux tâches réelles, pas de formations génériques.`
- **Entrée llms.txt (FR) :** `[Étude de cas ThinkONE](https://aimakers.fr/etudes-de-cas/thinkone) : formation IA et skills métier pour un cabinet d'études marketing, dont un générateur de questionnaires quantitatifs sans biais aligné sur les standards internationaux.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 4+ — sessions de formation sur mesure | src/lib/case-studies.ts (déclaré client) |
| 6 mois — d'accompagnement continu | src/lib/case-studies.ts (déclaré client) |
| Nom client, secteur, période | src/lib/case-studies.ts |

## Réconciliation appliquée
- **Double suffixe de marque :** aucun suffixe manuel ; Title = H1 (44 → ~56 rendu), dans le budget.
- **Arc uniforme — VARIÉ (cas 1 sur 2) :** cas terminé/publié — fin variée. Composant CTA conservé ; phrase de clôture atterrissant sur des **faits durs** (générateur en production + fenêtre de 6 mois, déjà en source) au lieu d'un écho CTA. Structure d'arc inchangée.
- **Meta :** ~142 car., dans la fourchette ; inchangée.
- **Négations :** « la config métier qui fait la qualité, pas le modèle seul » et « pas des formations génériques » conservées — porteuses de sens (KEEP).
- **Protégé :** les deux métriques (4+ / 6 mois) mot pour mot ; « Il challenge même les briefs », cadrage directeur d'études senior, Claude nommé — conservés. AUCUN témoignage fabriqué. Grille 2 vs 3 métriques laissée telle quelle (aucune 3e métrique inventée). Rien d'ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags:** none present — nothing to normalize.
- **Title/Meta:** both within budget (title ~56 rendered, meta ~142) — unchanged. "au cœur de" is a minor FR lexical tell but Title=H1 in source, gated (owner decision) — left.
- **Case ending — KEPT VARIED (1 of 2 hard-fact endings this batch):** closing narrative lands on facts (generator in production + 6 months later), not a CTA echo. NOT re-uniformed. The proposed closing sentence needs a template `outcome` field to land — logged as a field-map dev ticket, sentence left as ready-but-pending.
- **PROTECTED — no case metric touched:** 4+ / 6 mois verbatim; 2-metric grid left as-is (no invented 3rd metric); "Il challenge même les briefs", senior-études framing, Claude named — kept. NO testimonial fabricated. Nothing added, rounded, or invented.
