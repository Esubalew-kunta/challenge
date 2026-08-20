# Formation : Vibe Coding — Master de contenu FR

> Le français est la langue primaire live des formations (marché FR fort). Copie ancrée sur `src/lib/formations.ts` (entrée `vibe-coding`) et `formateurs`. Corrections d'audit conservées (budget title, stack outillé protégé).

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia-entreprise/vibe-coding
- **Objet :** Page détail formation (catalogue) — convertit vers téléchargement catalogue + appel diagnostic.
- **Rôle SEO :** support (pilier formation ; FR fort)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | formation vibe coding | 150 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire (parent thématique) | vibe coding | 4 900 | 30 | Ahrefs France (KE) — intention informationnelle/MOOC, pas notre ICP |
| Secondaire | créer une application sans coder | minimal | — | variante longue traîne |

> **Décision mots-clés :** cette page enfant possède le head spécifique **`formation vibe coding`** (150) ; le parent `vibe coding` (4 900 / KD30) est informationnel/MOOC — mentionné en corps, pas ciblé (pas notre buyer entreprise). Le générique `formation ia entreprise` est cédé au pilier /formation-ia-entreprise.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Vibe Coding \| Formation IA en entreprise | `Vibe Coding : vos outils sans être développeur` *(46 ; rendu ~58 après ajout auto de « \| AI Makers ». TICKET-FORM-TITLE-TPL doit d'abord retirer le mid-suffixe FR codé en dur « \| Formation IA en entreprise ». Ne pas écrire la marque à la main)* |
| Meta description (140–160) | *(actuel = résumé)* Le programme le plus avancé du catalogue : piloter les assistants de code (Claude Code, Cursor, Codex) pour construire vos propres outils métier, sans savoir coder. | `Le programme le plus avancé du catalogue : pilotez Claude Code, Cursor et Codex pour construire vos propres outils métier, sans savoir coder. Un vrai atelier hands-on.` *(~160 ; nécessite un champ `seoDescription` — TICKET-FORM-SEO-DESC)* |
| H1 | Vibe Coding : construire ses propres outils avec l'IA, sans être développeur | inchangé (= source `titre`) |
| Slug URL | /formation-ia-entreprise/vibe-coding | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/formation-ia-entreprise/[slug]/page.tsx` · copie dans `src/lib/formations.ts` (entrée `vibe-coding`).

### 4.1 — Hero + fiche
- **Champs :** categorie (Avancé), name, titre (H1), tagline, resume, niveau, public, format, duree, prerequis, tools[] logos
- **Contenu (FR, source) :**
  - Catégorie : `Avancé`
  - Nom (cartes) : `Vibe Coding`
  - Tagline : `Construire ses propres outils en pilotant l'IA par le langage naturel.`
  - Résumé : `Le programme le plus avancé du catalogue : piloter les assistants de code (Claude Code, Cursor, Codex) pour construire vos propres outils métier, sans savoir coder.`
  - Niveau : `Intermédiaire → Avancé` · Public : `Profils métiers et opérationnels, product managers, ops qui veulent créer leurs propres outils` · Format : `Présentiel, distanciel ou hybride` · Durée : `Format sur-mesure, parcours en plusieurs sessions` · Prérequis : `Aisance avec les outils bureautiques, aucun prérequis en programmation`
- **Justification :** seul programme « construire son propre logiciel » du catalogue. Les outils nommés (Claude Code, Cursor, Codex) sont l'ancre et le différenciateur.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Champs :** objectifs[] — 4 puces
- **Contenu (FR, source) :**
  1. `Piloter les assistants de code (Claude Code, Cursor, Codex) en langage naturel`
  2. `Construire des outils internes, prototypes et petites applications`
  3. `Concevoir des agents et automatisations qui prennent en charge les tâches répétitives`
  4. `Industrialiser ses créations en visant la productivité et le ROI`
- **Justification :** résultats = artefacts concrets (outils, prototypes, agents), ce qui sépare ce programme des cursus prompting-only.

### 4.3 — « Les modules de la formation »
- **Champs :** programme[] — 4 modules {titre, items[]}
- **Contenu (FR, source) :**
  - **Les fondamentaux du Vibe Coding** : `Comment fonctionne un assistant de code et comment lui parler` · `Découverte de Claude Code, Cursor et Codex : quand utiliser lequel` · `Passer d'une idée à un premier outil fonctionnel en direct`
  - **Construire ses outils métier** : `Prototyper une petite application utile à son équipe` · `Itérer, corriger et améliorer sans blocage technique` · `Bonnes pratiques pour des résultats fiables et maintenables`
  - **Agents et automatisations** : `Comprendre l'architecture d'un agent IA` · `Automatiser des tâches complexes et répétitives` · `Connecter l'IA à vos outils métier existants`
  - **Industrialiser et mesurer** : `Déployer ses créations auprès de l'équipe` · `Cadrer sécurité, qualité et coûts` · `Mesurer le gain de productivité et le ROI`
- **Justification :** cursus réel fidèle. Les modules 3-4 (agents, industrialisation, coûts) rendent le programme enterprise-grade, pas un tuto « vibe coding » de week-end.

### 4.4 — « Ce que vos équipes en retirent »
- **Champs :** resultats[] — 3 stats
- **Contenu (FR, source) :**
  - `1er outil` — `construit pendant la formation`
  - `0 ligne` — `de code écrite à la main`
  - `ROI` — `mesuré sur les automatisations déployées`
- **Justification :** affirmations structurelles (formations.ts), pas des métriques inventées.

### 4.5 — Formulaire catalogue + formateurs + autres formations
- **Contenu (FR) :** réutiliser les blocs partagés possédés par le pilier /formation-ia-entreprise — ne pas ré-écrire. Titre formateurs : `Formés par ceux qui déploient l'IA en production`. Formulaire : `Recevez le catalogue de formations complet` + email + bouton `Recevoir le catalogue`.
- **Justification :** discipline de réutilisation — le pilier possède le cadrage catalogue et la preuve formateurs.

### 4.6 — CTA final
- **Contenu (FR) :** Titre : `Vos équipes métier pourraient-elles livrer leurs propres outils sans développeur ?` · Sous-titre : `Réservez un diagnostic de 30 minutes — on cadre les outils que votre équipe doit posséder et le parcours multi-sessions.`
- **Justification :** parle au buyer L&D / ops qui cadre un parcours. Éligibilité financement (Qualiopi / OPCO) possible ici — **[to validate placement]** (voir §9).

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Faut-il savoir coder pour suivre Vibe Coding ? | Non. C'est justement le principe : construire des outils en pilotant l'IA par le langage naturel. Le programme s'adresse à des profils métier qui n'ont jamais codé mais veulent créer leurs propres solutions. |
| 2 | Quels outils sont utilisés ? | Les assistants de code de référence : Claude Code, Cursor et Codex. Vous apprenez quand et comment utiliser chacun selon votre besoin. |
| 3 | Que repart-on avec ? | Au minimum un outil ou prototype fonctionnel construit pendant la session, directement utilisable dans votre travail, et la méthode pour en créer d'autres en autonomie. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation IA pour les équipes (catalogue) | /formation-ia-entreprise | hub / pilier |
| Automatisation des workflows IA | /automatisation-ia-workflow | money page connexe (le « déploiement » à l'échelle) |
| Réserver un diagnostic | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Vos équipes métier pourraient-elles livrer leurs propres outils sans développeur ? » → /contact
- **Secondaire :** formulaire catalogue PDF (CatalogueForm) — `Recevez le catalogue de formations complet`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Vibe Coding est le programme de formation le plus avancé d'AI Makers : un parcours multi-sessions hands-on où des non-développeurs apprennent à piloter les assistants de code — Claude Code, Cursor et Codex — pour construire des outils internes, prototypes et agents, sans écrire de code à la main. Chaque participant livre au moins un outil fonctionnel pendant la formation et repart avec la méthode pour en créer d'autres. Il s'adresse aux profils métiers, product managers et équipes ops, pas aux ingénieurs logiciels.`
- **Entrée llms.txt (FR) :** `[Vibe Coding](https://aimakers.fr/formation-ia-entreprise/vibe-coding) : atelier vibe coding hands-on pour les équipes — construire des outils internes et des agents avec Claude Code, Cursor et Codex, sans savoir coder.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 1er outil — construit pendant la formation | src/lib/formations.ts — [to validate] |
| 0 ligne — de code écrite à la main | src/lib/formations.ts |
| ROI — mesuré sur les automatisations déployées | src/lib/formations.ts — [to validate] |
| Outils : Claude Code, Cursor, Codex | src/lib/formations.ts |
| Format / durée / niveau (multi-sessions, présentiel/distanciel/hybride, intermédiaire→avancé) | src/lib/formations.ts |
| Éligibilité financement (Qualiopi / OPCO) | **[to validate placement]** — absent de public/llms.txt et formations.ts ; aucun % de financement ni certification affirmé. |

## Corrections d'audit appliquées
- **Double suffixe de marque :** meta title proposé sans « | AI Makers » manuel ; rendu dépend de TICKET-FORM-TITLE-TPL (retrait du mid-suffixe FR codé en dur). Prêt, non livré.
- **Meta :** proposée à ~160 (≤ plafond) ; nécessite le champ `seoDescription` (TICKET-FORM-SEO-DESC).
- **FAQ :** pas de swap forcé — la FAQ 1 (« Faut-il savoir coder ? ») est déjà la question spécifique programme. Set varié conservé.
- **Conservé (force) :** le stack outillé (Claude Code, Cursor, Codex) — différenciateur, intact.
- **Négations :** aucune à dé-empiler.
- **Protégé :** stats résultats `[to validate]` ; Qualiopi/OPCO `[to validate placement]`. Rien ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags:** already normalized (`[to validate]` / `[to validate placement]`) — no change.
- **Title:** already suffix-free ("Vibe Coding : vos outils sans être développeur", ~58 rendered); TICKET-FORM-TITLE-TPL and TICKET-FORM-SEO-DESC stay logged dev tickets. Meta ~160 kept ≤ cap.
- **Formation CTA varied:** shared verbatim "Cette formation est-elle faite pour vos équipes ?" → "Vos équipes métier pourraient-elles livrer leurs propres outils sans développeur ?" — anchored on this program's distinct fact (non-devs shipping their own tools). Program-varied subtitle kept.
- **KEPT distinct:** named tool stack (Claude Code / Cursor / Codex) — the differentiator. Program-specific FAQ arc kept. Audience exclusion ("pas aux ingénieurs logiciels") kept.
- **PROTECTED:** result stats `[to validate]`; Qualiopi/OPCO `[to validate placement]`. This page deliberately does NOT use the 7h/+2 500 stat block. Nothing added, rounded, or invented.
