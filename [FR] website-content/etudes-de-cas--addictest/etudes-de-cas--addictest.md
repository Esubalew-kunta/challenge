# Étude de cas : Addictest — Master de contenu FR

> Statut live : **published** (publié)
> Localisation FR du master EN scellé (corrections d'audit conservées). Le français est la langue primaire live ; copie ancrée sur `src/lib/case-studies.ts` (entrée `addictest`) — métriques et citation reprises mot pour mot.

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/addictest
- **Objet :** Preuve — avant/après mesuré pour Addictest (Éducation internationale · Maroc).
- **Rôle SEO :** confiance/preuve + longue traîne
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | addictest étude de cas (marque) | — | — | marque/navigationnel |
| Secondaire | operating system ia pme | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |
| Secondaire | étude de cas automatisation ia | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |

> **Décision mots-clés :** les études de cas sont des pages de preuve, pas des cibles de mots-clés. Les termes génériques « … étude de cas » sont quasi nuls en France (Ahrefs, 2026-07). La valeur est l'E-E-A-T + les liens internes vers la money page automatisation. Intention primaire = marque (« addictest » + étude de cas) ; aucun head term forcé.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Addictest industrialise ses candidatures universitaires avec l'IA | Addictest industrialise ses candidatures IA *(43 ; rendu ~55 après ajout auto de « \| AI Makers » — ne pas écrire le suffixe à la main. Title ≠ H1 reste gated sur TICKET-CS-META-TITLE, template mono-champ jusque-là)* |
| Meta description (140–160) | Bots de CV et lettres de motivation, matching universités et operating system IA : comment Addictest a industrialisé ses candidatures. Étude de cas. *(~148 — conservée)* | idem — dans la fourchette, inchangée |
| H1 | Addictest industrialise ses candidatures universitaires avec l'IA | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/addictest | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `addictest`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Novembre 2025 · en cours), tags [Operating System, Agents IA, Automatisation], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `Éducation internationale · Maroc` — **période :** `Novembre 2025 · en cours`
  - **tags :** `Operating System` · `Agents IA` · `Automatisation`
  - **TL;DR :** `Addictest, cabinet marocain qui a placé environ 750 étudiants dans des universités étrangères depuis 2015, gérait ses leads, son mentorat et ses candidatures sur des fichiers Excel dispersés. AI Makers a construit ses bots de rédaction (CV, lettres de motivation), son moteur de matching universités et son operating system complet.`
  - **métriques :** `~750` — `étudiants placés à l'étranger depuis 2015` · `3` — `systèmes IA en production` · `4` — `formats de CV générés automatiquement`
- **Justification :** TL;DR et 3 métriques repris mot pour mot de `case-studies.ts` (déclaré client) — ni arrondis ni inventés. Réponse d'abord : qui est Addictest, l'état de départ, ce qui a été construit.

### 4.2 — « La situation de départ »
- **Champs :** before[] — 4 puces
- **Contenu (FR, source) :**
  - `Leads dispersés entre Instagram, TikTok, Facebook et formulaires, avec doublons et sans CRM.`
  - `Production artisanale des dossiers de candidature : CV, lettres de motivation et listes d'universités rédigés à la main, impossibles à scaler.`
  - `Relances d'impayés manuelles, heures de cours individuels non tracées, supervision du mentorat sans outil.`
  - `Toute l'organisation reposait sur des fichiers Excel non standardisés.`
- **Justification :** quatre points de douleur réels, concrets (noms de canaux, artefacts réels).

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 4 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **AI Writing : CV et lettres de motivation** — `Des bots génèrent pour chaque élève un CV en 4 formats et des lettres de motivation alignées sur les standards des universités visées. L'équipe pédagogique se concentre sur le coaching, plus sur la mise en forme.` · visuel : `Un dossier de candidature généré (données anonymisées)`
  - **Addictest Match Index : le matching universités** — `Pour chaque profil d'élève, le moteur recommande une liste d'universités adaptées : ambition, budget, filière. Ce qui prenait des heures de recherche devient un point de départ instantané.` · visuel : `Une liste d'universités recommandées pour un profil`
  - **L'Operating System** — `Leads centralisés et dédupliqués, suivi du mentorat avec alerte quand un élève n'a pas été vu depuis 2 semaines, envoi automatique des enregistrements de mentorat aux parents, dashboard direction. La sortie d'Excel, organisée sprint par sprint.` · visuel : `Le dashboard direction de l'Operating System`
  - **Les automatisations autour** — `Cycle d'emails automatisé (bienvenue, relance, newsletter), bot WhatsApp de qualification des leads, formation des équipes en continu.`
- **Justification :** noms réels (« Addictest Match Index », « AI Writing ») conservés comme noms propres — artefacts vérifiables. Visuels = placeholders miroir des champs `visual`.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned (1 paragraphe) ; stack [Claude, n8n, Lovable, WhatsApp Business, Brevo]
- **Contenu (FR, source) :**
  - **étapes :** `Audit des opérations et recensement des douleurs avec les équipes (janvier 2026).` · `Build des bots étudiants : writing et matching en production dès les premières semaines (novembre 2025 à janvier 2026).` · `Spécifications complètes puis build de l'Operating System (mars à juin 2026).` · `Beta avec l'équipe au 1er juillet 2026, puis migration complète hors Excel.`
  - **learned :** `Le critère de succès défini avec le fondateur n'était pas le nombre de fonctionnalités mais l'adoption. D'où une V0 volontairement resserrée, testée par deux personnes de l'équipe avant la migration complète.`
- **Justification :** dates préservées exactement (preuve du timeline). Learned = un enseignement de première main, sans phrase de réassurance.

### 4.5 — Témoignage
- **Champs :** quote, author (Ziyad El Mouniri), role, pending
- **Contenu (FR, source) :**
  - **citation :** `On gérait 750 élèves avec des fichiers Excel et de la bonne volonté. AI Makers nous a construit un vrai operating system : les leads, le mentorat, les candidatures, tout est au même endroit. Et surtout, mes équipes l'utilisent vraiment.`
  - **auteur :** `Ziyad El Mouniri` — **rôle :** `Fondateur, Addictest`
- **Justification :** citation reprise mot pour mot. **`pending: true` en source → [to validate] : citation non encore signée par le client ; ne pas publier avant validation.**

### 4.6 — Contenus liés + CTA final
- **Liés :** deux autres études de cas (Gepromed, ThinkONE) + le pilier `Automatisation & operating systems IA` → /automatisation-ia-workflow. CTA dessous.
- **Justification :** relie la preuve OS/automatisation à sa money page ; le cluster de preuve reste maillé.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | Combien de temps pour déployer un operating system IA dans une PME ? | Chez Addictest, les premiers bots étaient en production en quelques semaines ; l'Operating System complet a été spécifié et déployé en 3 mois, sprint par sprint. |
| 2 | Nos données sont éparpillées dans des Excel, est-ce bloquant ? | Non, c'est le cas de départ le plus fréquent. La standardisation des données constitue le premier sprint du build : sans source de vérité unique, aucun module ne tient. |
| 3 | Qui possède les systèmes à la fin ? | Le client. Propriété intellectuelle totale, documentation et formation des équipes incluses. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| Comment on construit l'automatisation & les operating systems IA | /automatisation-ia-workflow | money page (pilier) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `Addictest, cabinet marocain d'éducation internationale qui a placé environ 750 étudiants à l'étranger depuis 2015, a travaillé avec AI Makers pour remplacer ses fichiers Excel dispersés par trois systèmes IA en production : des bots de rédaction générant des CV (en 4 formats) et des lettres de motivation, l'Addictest Match Index pour le matching universités, et un operating system complet qui centralise leads, mentorat et candidatures. Le build s'est déroulé sprint par sprint depuis novembre 2025, avec l'adoption — et non le nombre de fonctionnalités — comme critère de succès.`
- **Entrée llms.txt (FR) :** `[Étude de cas Addictest](https://aimakers.fr/etudes-de-cas/addictest) : comment un cabinet marocain d'éducation a remplacé des Excel dispersés par des bots CV/lettres de motivation, un moteur de matching universités et un operating system IA complet.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| ~750 — étudiants placés à l'étranger depuis 2015 | src/lib/case-studies.ts (déclaré client) |
| 3 — systèmes IA en production | src/lib/case-studies.ts (déclaré client) |
| 4 — formats de CV générés automatiquement | src/lib/case-studies.ts (déclaré client) |
| Témoignage (Ziyad El Mouniri) | src/lib/case-studies.ts — `pending: true` → [to validate] avant publication |
| Nom client, secteur, période | src/lib/case-studies.ts |

## Réconciliation appliquée
- **Double suffixe de marque :** meta title proposé sans « \| AI Makers » manuel (« Addictest industrialise ses candidatures IA », 43 → ~55 rendu). Title ≠ H1 gated sur TICKET-CS-META-TITLE (prêt, non re-loggé).
- **Arc uniforme :** clôture conservée sur le CTA « Obtenez les mêmes résultats » — build encore en cours (beta 1er juillet 2026), aucun chiffre-résultat dur sur lequel atterrir. Les deux fins d'arc variées de ce batch vont à gepromed et thinkone (cas mesurés/terminés).
- **Négations :** « coaching, plus sur la mise en forme » et « l'adoption, pas le nombre de fonctionnalités » conservées — porteuses de sens (KEEP).
- **Protégé :** les 3 métriques (~750 / 3 / 4), TL;DR, dates, noms réels de systèmes, stack et citation client repris mot pour mot. `pending: true` → `[to validate]` conservé. Aucun chiffre ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (3×). Meaning unchanged; enables reliable grep.
- **Title:** already stripped of hand-written `| AI Makers`; rendered ~55 ≤60. TICKET-CS-META-TITLE stays a logged dev ticket (Title≠H1 needs a dedicated `metaTitle` field). No change needed.
- **Meta:** ~148 chars, within range — unchanged.
- **Case ending:** kept on the generic CTA (build in-progress, beta 1 Jul 2026) — the two hard-fact endings of this batch go to gepromed/thinkone. Not re-uniformed.
- **PROTECTED — no case metric touched:** ~750 / 3 / 4, TL;DR, dates, real system names (Addictest Match Index, AI Writing), stack, and the Ziyad El Mouniri quote all verbatim from `case-studies.ts`. `pending: true` → `[to validate]` restraint kept. Nothing added, rounded, or invented.
