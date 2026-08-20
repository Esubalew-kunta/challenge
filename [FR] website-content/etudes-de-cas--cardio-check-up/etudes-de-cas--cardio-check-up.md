# Étude de cas : Cabinet de cardiologie — Master de contenu FR

> **noindex — draft, hors indexation.** Page noindex & hors sitemap en attente de validation client (noms, chiffres, témoignage). Ne pas publier ni indexer avant que la validation FR soit levée.
> Statut live : **draft** — page noindex & hors sitemap. Praticienne gardée anonyme : le vrai nom (présent en source `client`) N'EST PAS remonté avant signature client.
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `cardio-check-up`).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/cardio-check-up
- **Objet :** Preuve (DRAFT) — avant/après mesuré pour un cabinet de cardiologie parisien (Santé · Cardiologie, Paris).
- **Rôle SEO :** confiance/preuve + longue traîne (noindex tant que draft)
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | cabinet cardiologie ia étude de cas (marque) | — | — | marque/navigationnel (draft) |
| Secondaire | ia cabinet médical rgpd | faible | n/a | Ahrefs France (léger), 2026-07 — niche |
| Secondaire | chatbot médical étude de cas | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul |

> **Décision mots-clés :** DRAFT + noindex — aucune cible SEO tant que la page n'est pas ouverte à l'indexation. Une fois publiée, valeur = preuve alimentant /automatisation-ia-workflow et la page secteur santé. Intention marque primaire.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Sortir un cabinet de cardiologie d'Excel et de WhatsApp | Un cabinet de cardiologie sorti d'Excel et de WhatsApp *(53 ; rendu ~65 après suffixe — trim recommandé : « Un cabinet de cardiologie hors Excel et WhatsApp » ~48. Title = H1 tant que TICKET-CS-META-TITLE non livré ; noindex draft, peu urgent)* |
| Meta description (140–160) | Cockpit de cabinet, chatbot médical bilingue et visibilité IA pour une cardiologue parisienne, dans le respect du RGPD santé. Étude de cas. *(~138)* | idem — conservée (draft, peu urgent) |
| H1 | Sortir un cabinet de cardiologie d'Excel et de WhatsApp | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/cardio-check-up | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `cardio-check-up`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Mai 2026 · en cours), tags [OS médical, Chatbot, GEO], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `Santé · Cardiologie, Paris` — **période :** `Mai 2026 · en cours`
  - **tags :** `OS médical` · `Chatbot` · `GEO`
  - **TL;DR :** `Une cardiologue rythmologue de renom (cheffe d'unité dans un grand hôpital parisien, fondatrice d'un centre de check-up cardiovasculaire) gérait son cabinet avec 3 tableaux Excel, 3 boîtes mail saturées et des to-do lists envoyées à elle-même sur WhatsApp. AI Makers a construit son cabinet augmenté : cockpit de pilotage, chatbot médical bilingue en production, deux sites web et un programme de formation IA, dans le respect strict du RGPD santé et des règles de l'Ordre des médecins.`
  - **métriques :** `8` — `bases connectées dans le cockpit du cabinet` · `~120` — `Holter suivis, hier sur 3 Excel manuels` · `2` — `langues pour le chatbot médical en production`
- **Justification :** **DRAFT : cliente décrite génériquement comme en source (aucune donnée patient ; nom de la praticienne en attente de signature → [to validate]). Chiffres mot pour mot de `case-studies.ts`.**

### 4.2 — « La situation de départ »
- **Champs :** before[] — 4 puces
- **Contenu (FR, source) :**
  - `Suivi d'environ 120 Holter implantables sur 3 tableaux Excel manuels : 2 heures d'analyse à la main certains matins.`
  - `To-do lists sur papier et messages WhatsApp à soi-même, travail jusqu'à 1h du matin.`
  - `3 boîtes mail saturées et une ligne téléphonique sursaturée pour 3 secrétaires.`
  - `Contrainte forte : l'Ordre des médecins interdit la publicité payante, la seule visibilité possible est organique.`
- **Justification :** « 2 heures certains matins / jusqu'à 1h du matin » = état de départ réel — concret. La contrainte anti-publicité est porteuse pour l'angle GEO.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 4 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **Le cockpit du cabinet** — `8 bases connectées, un écran par rôle (médecin, secrétaires, admin), suivi des examens reconstruit depuis 4 fichiers Excel avec statuts automatiques. Le médecin ne voit que les cas vérifiés par la secrétaire.` · visuel : `Le cockpit du cabinet (données fictives)`
  - **Le chatbot médical bilingue** — `En production sur le site du centre : triage des symptômes, orientation vers le bon médecin, redirection des urgences vers le 15. Français et anglais.` · visuel : `Une conversation type du chatbot`
  - **Deux sites web** — `La plateforme multi-pages du centre de check-up et le site de la praticienne, pensés pour la prise de rendez-vous et la visibilité organique.` · visuel : `La page d'accueil du centre`
  - **Formation et visibilité IA** — `12 séances de formation (la praticienne puis ses 3 secrétaires), bibliothèque de prompts métier, et suivi de visibilité GEO sur 36 mots-clés dans 4 IA.`
- **Justification :** « Le médecin ne voit que les cas vérifiés par la secrétaire » conservé — règle de workflow réelle et signal de conformité. Visuels = miroir des champs source.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned ; stack [Claude, Notion, Whisper, Render]
- **Contenu (FR, source) :**
  - **étapes :** `Cadrage en une consultation d'une heure : 16 problématiques recensées.` · `Démarrage la semaine suivante, avec 1h30 par semaine demandée à la cliente, pas plus.` · `Formation hebdomadaire et build continu : cockpit, chatbot, sites.` · `Conformité dès la conception : zéro donnée patient identifiable dans les outils.`
  - **learned :** `Dans la santé, le facteur limitant n'est pas la technologie mais la conformité : hébergement, anonymisation, règles de l'Ordre. Concevoir le système dans ces contraintes dès le premier jour évite de tout refaire.`
- **Justification :** « 1h30 par semaine, pas plus » et « zéro donnée patient identifiable » = contraintes réelles vérifiables — exactes. Learned = leçon santé transférable.

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation. (DRAFT : tout futur témoignage nécessite la signature client.)
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier /automatisation-ia-workflow + l'étude de cas operating system Addictest. CTA dessous.
- **Justification :** preuve OS médical/automatisation — pointe vers la money page automatisation.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | L'IA peut-elle gérer des données patient ? | Uniquement dans un cadre strict : hébergement certifié santé, anonymisation avant tout traitement IA, validation humaine. C'est le cadre appliqué ici. |
| 2 | Un médecin peut-il travailler sa visibilité malgré l'interdiction de publicité ? | Oui : le contenu médical informatif et la visibilité organique dans les réponses des IA respectent le cadre de l'Ordre, contrairement à la publicité payante. |
| 3 | Combien de temps un praticien doit-il y consacrer ? | 1h30 par semaine dans cette mission : 1 heure de formation, 30 minutes de validation. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| Agents IA et automatisation pour vos opérations | /automatisation-ia-workflow | money page (pilier) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact

## 8. Bloc GEO
> DRAFT — ne pas ajouter au llms.txt live tant que la page n'est pas ouverte à l'indexation.
- **Paragraphe réponse d'abord (FR, citable) :** `Une cardiologue rythmologue parisienne gérait son cabinet avec 3 tableaux Excel, des boîtes mail saturées et des to-do lists sur WhatsApp. AI Makers a construit un cabinet augmenté dans le respect strict du RGPD santé et des règles de l'Ordre des médecins : un cockpit de pilotage connectant 8 bases (écrans par rôle, cas vérifiés par la secrétaire remontés au médecin), un chatbot médical bilingue en production pour le triage des symptômes, deux sites web et un programme de formation IA. La conformité dès la conception signifie zéro donnée patient identifiable dans les outils.`
- **Entrée llms.txt (FR) :** _[DRAFT — en attente]_ `[Étude de cas cabinet de cardiologie](https://aimakers.fr/etudes-de-cas/cardio-check-up) : cockpit de cabinet, chatbot médical bilingue et visibilité IA organique pour une cardiologue parisienne, dans le respect du RGPD santé.` — à ajouter seulement après ouverture à l'indexation.

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 8 — bases connectées dans le cockpit | src/lib/case-studies.ts (déclaré client) |
| ~120 — Holter suivis, hier sur 3 Excel manuels | src/lib/case-studies.ts (déclaré client) |
| 2 — langues pour le chatbot en production | src/lib/case-studies.ts (déclaré client) |
| 12 séances de formation ; 36 mots-clés dans 4 IA ; 16 problématiques | src/lib/case-studies.ts (déclaré client) |
| Nom client / identité praticienne | src/lib/case-studies.ts — [to validate] accord client en attente (draft) — non remonté |
| Secteur, période | src/lib/case-studies.ts — [to validate] (draft) |

## Réconciliation appliquée
- **Longueur title / suffixe :** meta title proposé sans marque manuelle ; trim ≤60 recommandé. Title = H1 tant que TICKET-CS-META-TITLE non livré. Peu urgent — page noindex.
- **Meta :** ~138 conservée (draft) ; l'accroche « organique » pourrait la porter à ~145 si besoin (déjà en source), mais peu urgent car noindex.
- **Arc uniforme :** NON varié — draft noindex, en attente ; CTA = composant partagé. (Fins variées → gepromed + thinkone.)
- **Négations :** « le facteur limitant n'est pas la technologie mais la conformité » conservée — porteuse de sens (KEEP).
- **PROTÉGÉ (critique) :** statut `noindex` / `DRAFT`, entrée llms.txt en attente (« [DRAFT — en attente] »), et tous les tags `[to validate]` conservés. Praticienne gardée anonyme — le vrai nom (Dr Sana Amraoui) N'EST PAS remonté ; le publier avant signature serait une brèche proche de la fabrication. Tous les chiffres (8 / ~120 / 2 / 12 / 36 / 16) mot pour mot ; AUCUN témoignage fabriqué. Rien d'ajouté, arrondi ou inventé. Ne pas publier ni indexer avant levée de la validation FR.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (4×). Draft honesty tags preserved.
- **Title/Meta:** left as-is — low urgency (noindex draft). Trim "Un cabinet de cardiologie hors Excel et WhatsApp" (~48) stays recommended for when the page opens; TICKET-CS-META-TITLE remains a logged dev ticket.
- **Case ending:** NOT varied — draft on hold; CTA is the shared component. The two hard-fact endings go to gepromed/thinkone.
- **"Hébergement certifié santé" (FAQ #1):** compliance-wording gate, contained by noindex — left for client sign-off, source content not edited.
- **PROTECTED (critical) — kept intact:** `noindex` / DRAFT status, held llms.txt entry ("[DRAFT — en attente]"), all honesty tags. Practitioner kept anonymous — the real name (Dr Sana Amraoui) is NOT surfaced into any rendered field; publishing it before sign-off would be near-fabrication. All figures (8 / ~120 / 2 / 12 / 36 / 16) verbatim; NO testimonial fabricated. Nothing added, rounded, or invented. Do not publish or index before FR validation is lifted.
