# Secteur : ESN & services IT — Master de contenu FR

> Localisation française du master EN scellé (`[EN] website-content/secteurs--esn-services-it`). Français = langue primaire live. Copie traduite en français naturel ; SEO localisé FR ; correctifs d'audit préservés.

## 1. En-tête de page
- **Route (FR, live) :** /secteurs/esn-services-it
- **Objectif :** Page sectorielle — comprendre les douleurs de l'ICP, cartographier les cas d'usage IA, orienter vers l'appel diagnostic.
- **Rôle SEO :** secondaire (longue traîne sectorielle) + assist conversion
- **Étape funnel :** MOFU

## 2. Mots-clés cibles (France)
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ia esn / ia services numériques | ~0 (longue traîne) | n/a | Ahrefs keywords-explorer, 2026-07 |
| Secondaire | ia développement logiciel | faible | n/a | Ahrefs, 2026-07 |
| Secondaire | ia assistant de code | faible | n/a | Ahrefs, 2026-07 |

> **Note volume :** « ESN » n'a pas d'équivalent de recherche à fort volume ; cluster de très faible volume assumé. Cette page est un landing d'assist conversion pour un ICP marché français, pas un pari trafic.

## 3. Méta de page
| Champ | Live (FR) | Proposé (FR, corrigé) |
|---|---|---|
| Title (≤60 incl. suffixe auto) | IA pour ESN et sociétés de services IT : delivery, staffing, avant-vente | **IA pour ESN et services IT** *(suffixe `\| AI Makers` auto — rendu ~38 chars)* |
| Méta description (≤160) | Transformation IA pour ESN et sociétés de services numériques : avant-vente accélérée, delivery outillé, consultants formés aux assistants de code. Références réelles dans le secteur. | IA pour ESN et sociétés de services numériques : avant-vente accélérée, delivery outillé, consultants formés aux assistants de code. Références réelles. *(150)* |
| H1 | L'IA pour les ESN : livrer plus, staffer mieux, vendre autrement | *(inchangé)* |
| URL slug | /secteurs/esn-services-it | /secteurs/esn-services-it |

## 4. Sections & contenu
Template partagé : `src/app/secteurs/[slug]/page.tsx` · copie dans `src/lib/secteurs.ts` (entrée `esn-services-it`).

### 4.1 — Hero
- **Proposé (FR) :**
  - **badge :** `ESN / Services numériques`
  - **h1 :** `L'IA pour les ESN : livrer plus, staffer mieux, vendre autrement`
  - **intro (answer-first) :** `Les ESN vivent un paradoxe : elles vendent de la transformation numérique et restent artisanales sur leurs propres process. Avant-vente, staffing, comptes rendus, delivery : l'IA change l'économie du modèle jour-homme, et vos clients commencent à exiger des consultants augmentés. Nous installons les systèmes internes et formons vos équipes, sans mobiliser votre delivery facturable.`
  - **alt illustration :** `IA pour les ESN et sociétés de services IT`
- **Rationale :** Nomme la tension propre à une société de services (économie du jour-homme, rareté du consultant facturable) et l'objection-handler « on ne touche pas à votre delivery facturable ». Distincte de la page conseil/études (analyse, pas delivery/staffing).

### 4.2 — Douleurs
- **Proposé (FR) :**
  1. `Vos réponses aux appels d'offres mobilisent vos meilleurs profils pendant des jours, sans garantie de gain.`
  2. `Vos clients demandent des consultants formés à l'IA et votre vivier ne suit pas.`
  3. `Le modèle jour-homme s'érode : ce que vous facturez 5 jours, l'IA le fait en 1.`
  4. `Comptes rendus, staffing, intercontrats : vos fonctions internes tournent comme en 2015.`
- **Rationale :** Douleurs propres à une activité de services/staffing : coût des AO, écart de compétences du vivier, érosion du jour-homme, retard des opérations internes. Aucun recouvrement avec les douleurs PME ou agence.

### 4.3 — Cas d'usage
- **Proposé (FR) :**
  - **Avant-vente et appels d'offres** — `Mémoires techniques, réponses structurées et chiffrages préparés en heures plutôt qu'en jours, à partir de vos références réelles.`
  - **Consultants augmentés** — `Vos équipes formées aux assistants de code (Claude Code, Cursor, Codex) : un différenciateur commercial concret face aux clients qui l'exigent.`
  - **Delivery et comptes rendus** — `Comptes rendus, documentation projet et reporting client rédigés au fil de l'eau — vos consultants corrigent un premier jet au lieu de repartir d'une page blanche après chaque réunion.`
  - **Staffing et intercontrats** — `Matching profils-missions accéléré, et temps d'intercontrat passé à monter en compétence sur l'IA plutôt que perdu.`
- **Rationale :** Chaque cas est propre à une société de services (AO, assistants de code, staffing, intercontrats). Nomme les vrais outils — spécificité de première main récompensée par l'audit slop.

### 4.4 — Témoignages
- **Champs :** temoinClients[] — ESN Engit, Sage
- **Proposé (FR) :** RÉUTILISER — verbatims publiés (ESN Engit, Sage) affichés par leur nom depuis `site-config.ts:clientLogos`. Pas de nouvelle citation.

### 4.5 — Formations liées
- **Champs :** vibe-coding, acculturation-ia, go-to-market-sales
- **Proposé (FR) :** Label `Les formations les plus demandées dans votre secteur`. Cartes : `Vibe Coding`, `Acculturation à l'IA`, `Go-to-market & vente avec l'IA`.

### 4.6 — Related + CTA final
- **Proposé (FR) :**
  - **Titre CTA :** `Où le modèle jour-homme fuit-il dans votre ESN ?`
  - **Sous-titre CTA :** `30 minutes sur l'avant-vente, le delivery et le staffing — là où l'IA bouge l'équation du jour-homme, et quels consultants former d'abord. Vous repartez avec la carte des points où le jour-homme fuit et la liste des consultants à former d'abord — à dérouler avec nous ou en interne.`
- **Rationale :** Question CTA native (remplace le noun-swap « l'IA change quoi dans votre société ? » qui entrait en collision verbatim avec banque) — ancrée sur l'économie du jour-homme.

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Pourquoi une ESN ferait-elle appel à un cabinet IA externe ? | Pour la même raison que vos clients font appel à vous : la vitesse. Vos équipes savent faire, mais elles sont staffées chez les clients. Nous installons les systèmes internes et formons vos consultants sans mobiliser votre delivery facturable. *(Propriétaire de la Q « pourquoi un cabinet externe ».)* |
| 2 | Formez-vous les consultants aux assistants de code ? | Oui, c'est notre programme Vibe Coding : Claude Code, Cursor et Codex appliqués à de vrais projets. Des consultants formés à l'IA se vendent mieux et livrent plus vite — le calcul est rapide sur un TJM. *(Propriétaire de la Q assistants de code.)* |
| 3 | Avez-vous des références dans les services IT ? | Oui, dont l'ESN Engit — le témoignage de son président est sur cette page. Nous travaillons aussi avec des éditeurs de logiciels comme Sage. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir notre approche complète de transformation IA | /ai-transformation | related |
| Commencer par un audit IA | /audit-ia-entreprise | related |
| Vibe Coding (formation assistants de code) | /formation-ia-entreprise/vibe-coding | formations liées |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** **`Où le modèle jour-homme fuit-il dans votre ESN ?`** → /contact (bouton : `Réserver un diagnostic gratuit de 30 min`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR) :** `AI Makers aide les ESN et éditeurs de logiciels à intégrer l'IA dans l'avant-vente, le delivery et le staffing — et forme les consultants aux assistants de code comme Claude Code, Cursor et Codex — sans mobiliser le delivery facturable. Le cabinet installe les systèmes internes et fait monter en compétence les équipes que les clients attendent désormais augmentées à l'IA. Références secteur (Engit, Sage) parmi 50+ entreprises et 200+ systèmes déployés.`
- **Entrée llms.txt (FR) :** `[IA pour ESN et services IT](https://aimakers.fr/secteurs/esn-services-it) : comment les ESN et éditeurs utilisent l'IA pour l'avant-vente, le delivery et le staffing, et forment les consultants aux assistants de code — sans toucher au delivery facturable.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Douleurs & cas d'usage listés | src/lib/secteurs.ts (page FR publiée) |
| +50 entreprises / +200 systèmes déployés | public/llms.txt (canonique) |
| Vibe Coding = Claude Code / Cursor / Codex | src/lib/secteurs.ts + formations (publié) |
| Témoignages (ESN Engit, Sage) | src/lib/site-config.ts clientLogos (verbatims publiés) |

## Réconciliation appliquée
- **Clause verbatim « relu par les consultants au lieu d'être rédigé de zéro » (esn=conseil) :** conseil la CONSERVE ; esn réécrit sur sa réalité comptes rendus — « vos consultants corrigent un premier jet au lieu de repartir d'une page blanche après chaque réunion ».
- **CTA-title noun-swap (« votre société » entrait en collision avec banque) :** remplacé par « Où le modèle jour-homme fuit-il dans votre ESN ? ».
- **Conservé (PROTÉGER) :** spécificité des outils nommés (Claude Code, Cursor, Codex) ; économie jour-homme/intercontrats ; objection-handler « sans mobiliser le delivery facturable » ; propriété FAQ Q1/Q2 ; chiffres canoniques +50/+200 ; témoignages vérifiés.
- **SEO localisé FR :** primaire « ia esn » / « ia services numériques » (longue traîne), secondaires « ia développement logiciel », « ia assistant de code ».

## Reconciliation applied
> Passe de réconciliation FR (Agent 2) — audits `seo-audit-report-fr/` + `ai-slop-audit-report-fr/`.
- **Closer CTA verbatim ×8 (slop synth §2.1) — VARIÉ :** réancré sur le fait propre à la page — l'**économie du jour-homme** — : « … vous repartez avec la carte des points où le jour-homme fuit et la liste des consultants à former d'abord — à dérouler avec nous ou en interne. » Aucune page ne garde le closer verbatim.
- **Titre & méta :** titre court « IA pour ESN et services IT » (~38 c) et méta 150 c — déjà conformes.
- **PROTÉGÉ :** outils nommés (Claude Code, Cursor, Codex) ; objection-handler « sans mobiliser le delivery facturable » ; clause comptes rendus réécrite (conseil garde le verbatim) ; chiffres canoniques ; témoignages vérifiés.
