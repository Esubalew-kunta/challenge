# Scanner d'opportunités IA (/outils/scanner-opportunites-ia) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/outils/scanner-opportunites-ia/page.tsx` + `src/lib/scanner-opportunites.ts` (12 opportunités, chacune avec un chiffre sourcé) + `scanner-wizard.tsx`. On reprend le copy live verbatim et on n'applique que les corrections d'audit (suffixe de marque du Title, correction de grammaire du CTA final). La transparence de méthode est protégée.

## 1. En-tête de page
- **Route (FR, live) :** /outils/scanner-opportunites-ia
- **Objet :** Outil à 3 questions qui fait ressortir les 3 systèmes IA au meilleur ROI pour le profil du visiteur, depuis une bibliothèque d'opportunités sourcées ; capture l'intention « quelles opportunités » et route vers un diagnostic.
- **Rôle SEO :** aimant-outil
- **Étape funnel :** capture TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | opportunités ia / scanner opportunités ia | TBD (Ahrefs FR) | faible concurrence | Ahrefs FR, 2026-07 |
| Secondaire | cas d'usage ia par secteur | TBD (Ahrefs FR) | TBD | Ahrefs FR, 2026-07 (porté par /secteurs) |
| Secondaire | systèmes ia rentables / automatisation ia | TBD (Ahrefs FR) | TBD | Ahrefs FR, 2026-07 |

> **Décision mot-clé :** « opportunités ia » (intention exacte de l'outil) est modeste en volume — c'est un aimant, pas un pilier de trafic. « cas d'usage ia par secteur » recoupe la coupe sectorielle de l'outil mais est mieux porté par le hub /secteurs ; on le garde comme phrase de soutien seulement. Volumes FR à confirmer côté Ahrefs FR (`TBD`).

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Scanner d'opportunités IA : vos 3 premiers systèmes à déployer *(~62 car. — **dépasse le budget** avec le suffixe)* | Scanner d'opportunités IA : votre top 3 *(39 ; rend ~51 avec le suffixe `\| AI Makers` du template — marque non écrite à la main, **≤60 rendu respecté**)* |
| Meta description (140–160 car.) | 3 questions, 60 secondes : identifiez les opportunités IA les plus rentables pour votre secteur, votre taille et vos irritants. Chiffres sourcés, gratuit, résultats immédiats. *(~178 car. — **dépasse le budget**)* | 3 questions, 60 secondes : les systèmes IA les plus rentables pour votre secteur, votre taille et vos irritants. Chaque chiffre est sourcé. Gratuit, résultats à l'écran. *(~160)* |
| H1 | Quelles opportunités IA sont les plus rentables dans votre entreprise ? | (inchangé — copy live) |
| URL slug | /outils/scanner-opportunites-ia | /outils/scanner-opportunites-ia |

## 4. Sections & contenu
Copy : inline `src/app/outils/scanner-opportunites-ia/page.tsx` ; données & scoring `src/lib/scanner-opportunites.ts` (12 opportunités, chacune avec un chiffre sourcé) ; wizard `scanner-wizard.tsx` ; capture email optionnelle via `leadSubmissionSchema` source `"scanner"`. Copy live repris verbatim.

### 4.1 — Hero + scanner
- **Composant :** `page.tsx` + `scanner-wizard.tsx`
- **Champs :** badge, H1, intro, 3 questions (secteur, taille, irritants — choisir 2 à 4), cartes de résultat (chiffre, description d'une ligne, source, 3 outils)
- **Live (FR) :** promesse « 3 questions, 60 secondes ».
- **Proposé (FR) :**
  - **badge :** `Outil gratuit`
  - **H1 :** `Quelles opportunités IA sont les plus rentables dans votre entreprise ?`
  - **intro (answer-first) :** `3 questions, 60 secondes. Vous voyez immédiatement les 3 systèmes IA les plus pertinents pour votre secteur, votre taille et vos irritants. Chaque chiffre est sourcé.`
  - **libellés des questions (FR live) :** `Votre secteur` (Agence et communication · Santé, biotech, medtech · Industrie et production · Services B2B · Commerce et distribution · Autre secteur) · `Votre taille` (Moins de 20 personnes · 20 à 50 personnes · 50 à 250 personnes · Plus de 250 personnes) · `Qu'est-ce qui prend le temps de vos équipes ?` (choisir 2 à 4 : Factures et administratif · Prospection et suivi commercial · Réunions et comptes rendus · Support et demandes clients · Production de contenu · Reporting et pilotage · Recrutement · Appels d'offres et propositions)
- **Rationale :** Colle exactement au wizard — 3 questions, 2 à 4 irritants, top 3 à l'écran, chiffres sourcés. Les options secteur/taille/irritants sont les labels live de `SECTORS`/`TEAM_SIZES`/`PAINS`. « Sans email pour voir votre top 3 » est littéralement vrai (les résultats s'affichent avant toute capture).

### 4.2 — « La méthode, à découvert »
- **Composant :** `page.tsx` (methodPoints[3])
- **Champs :** 3 cartes
- **Live (FR) :** transparence de méthode.
- **Proposé (FR) :**
  - **eyebrow :** `/ Comment le scanner classe vos opportunités` — **title :** `La méthode, à découvert`
  - **Carte 1 — Des chiffres sourcés, pas des promesses :** `Chaque opportunité s'appuie sur une étude publique (Forrester, Ardent Partners, Loopio, Deloitte) ou sur un système AI Makers en production chez nos clients. La source est affichée sur chaque carte.`
  - **Carte 2 — Un classement selon votre profil :** `Vos irritants pèsent le plus lourd dans le score. Votre secteur ajoute un bonus quand un système y est particulièrement rentable, et certains systèmes ne sont proposés qu'au-delà d'une certaine taille.`
  - **Carte 3 — Un point de départ, pas un audit :** `Le scanner donne un ordre de priorité honnête en 60 secondes. La vraie réponse dépend de vos processus réels : c'est le rôle du diagnostic gratuit de 30 minutes.`
- **Rationale :** Repris verbatim des `methodPoints` live, qui décrivent fidèlement le scoring de `scanner-opportunites.ts` (+2 par irritant correspondant, +1 bonus secteur, seuil `minTeamSizeIndex`). Aucune sur-promesse.

### 4.3 — FAQ
- **Composant :** `shared/faq-accordion.tsx` — voir §5

### 4.4 — Pour aller plus loin
- **Composant :** `shared/related-content.tsx`
- **Proposé (FR) :**
  - `Calculateur de ROI IA` → /outils/calculateur-roi-ia — `Estimez les heures et la valeur récupérables avec l'IA.`
  - `Diagnostic IA en 2 minutes` → /diagnostic-ia — `Votre score de maturité IA et un plan d'action personnalisé.`
  - `L'audit IA en entreprise` → /audit-ia-entreprise — `L'audit complet AI Scan : cartographie, scoring et roadmap chiffrée.`

### 4.5 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Une opportunité vous parle ?`
  - **subtitle :** `30 minutes pour valider le potentiel sur vos processus réels, avec les personnes qui déploient ces systèmes en production.`
  - **CTA principal :** `Réserver un diagnostic gratuit` → /contact · **secondaire :** `Calculateur ROI IA` → /outils/calculateur-roi-ia
- **Rationale :** Repris verbatim du CTA live ; relie la liste classée à une étape de validation concrète.

## 5. FAQ
Bloc FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR live) | Réponse (FR live) |
|---|---|---|
| 1 | C'est vraiment gratuit ? | Oui, sans condition. Les résultats s'affichent à l'écran immédiatement, sans email. L'email ne sert qu'à recevoir le rapport complet, si vous le souhaitez. |
| 2 | D'où viennent les chiffres affichés ? | D'études publiques (Forrester Total Economic Impact, Ardent Partners, Loopio, Deloitte), de cas publics documentés (Klarna, Unilever) et de systèmes AI Makers en production chez nos clients. Aucun chiffre n'est inventé et la source est affichée sous chaque résultat. |
| 3 | Que contient le rapport complet ? | Toutes les opportunités identifiées pour votre profil (pas seulement les 3 premières), les chiffres sourcés pour chacune, et notre recommandation sur par où commencer selon votre taille et votre secteur. |
| 4 | Et après le rapport ? | Libre à vous. Vous pouvez lancer ces systèmes en interne, avec votre prestataire, ou en discuter avec nous lors d'un diagnostic gratuit de 30 minutes. Aucune relance agressive. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Calculateur de ROI IA | /outils/calculateur-roi-ia | outil connexe |
| Diagnostic IA en 2 minutes | /diagnostic-ia | outil connexe |
| L'audit IA en entreprise | /audit-ia-entreprise | offre |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** « Une opportunité vous parle ? » → /contact (bouton : `Réserver un diagnostic gratuit`)
- **CTA secondaire :** `Calculateur ROI IA` → /outils/calculateur-roi-ia

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le scanner d'opportunités IA d'AI Makers est un outil gratuit à trois questions qui classe les systèmes IA au meilleur ROI d'une entreprise selon son secteur, sa taille et ses irritants. Il s'appuie sur une bibliothèque de 12 opportunités, chacune adossée à un chiffre sourcé — une étude publique (Forrester, Ardent Partners, Loopio, Deloitte) ou un système AI Makers en production. Les 3 premières s'affichent à l'écran en une minute environ, sans email ; un email professionnel débloque le rapport complet.`
- **Entrée llms.txt (FR) :** `[Scanner d'opportunités IA](https://aimakers.fr/outils/scanner-opportunites-ia) : trois questions font ressortir vos systèmes IA les plus rentables, chacun avec un chiffre sourcé. Gratuit, résultats à l'écran.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 3 questions, 2 à 4 irritants, top 3 à l'écran, sans email pour voir les résultats | scanner page.tsx + scanner-wizard + FAQ (vérifié) |
| Scoring : +2 par irritant correspondant, +1 bonus secteur, seuil minTeamSizeIndex | src/lib/scanner-opportunites.ts (vérifié) |
| 12 opportunités, chacune avec un chiffre sourcé | src/lib/scanner-opportunites.ts (vérifié) |
| Sources citées (Forrester, Ardent Partners, Loopio, Deloitte, Klarna, Unilever, cas clients Shem's/Sage, production AI Makers) | scanner-opportunites.ts, champ `source` par entrée (vérifié) |
| Rapport complet = email professionnel requis (fournisseurs gratuits bloqués) | src/lib/schemas/lead.ts — source « scanner » (vérifié) ; RGPD : email + secteur/taille/irritants stockés via /api/lead |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy hero/méthode/FAQ/CTA est repris verbatim de `page.tsx` ; corrections d'audit appliquées au FR (issues de `seo-audit-report/outils--scanner-opportunites-ia.md` et `ai-slop-audit-report/outils--scanner-opportunites-ia.md`) :

- **Erreur de grammaire (les deux audits — vrai défaut, pas un tell de slop) :** l'anglais avait « One of these opportunities speak to you? » corrigé en « Do any of these opportunities speak to you? ». Le FR live « Une opportunité vous parle ? » est déjà correct — conservé verbatim.
- **Double suffixe de marque (SEO §2a) + cap dur ≤60 rendu :** le Title live (~62 car. rendu avec suffixe) dépasse le budget ≤60. La variante `vos 3 systèmes prioritaires` (50 écrit / ~62 rendu) restait 2 car. au-dessus du plafond strict signalé par les deux audits ; on retient donc l'option courte **`Scanner d'opportunités IA : votre top 3`** (39 car. ; rend ~51 avec le suffixe du template — marque non écrite à la main), qui respecte le ≤60 rendu tout en gardant le mot-clé exact en tête.
- **Meta hors budget (corrigée) :** meta live (~178 car.) ramenée à ~160 en gardant le cadre « 3 questions, 60 secondes », les trois axes (secteur/taille/irritants) et « chaque chiffre est sourcé ».
- **CONSERVÉ (protégé — transparence de méthode de l'outil) :** les titres-négations « Des chiffres sourcés, pas des promesses » et « Un point de départ, pas un audit » (déflationnistes/honnêtes, sur la liste KEEP du brief), la transparence des sources nommées (Forrester, Ardent Partners, Loopio, Deloitte, Klarna, Unilever), le scoring divulgué, « sans email pour voir votre top 3 » et « aucune relance agressive ».
- **Laissé pour la dev / le propriétaire (hors copy) :** ligne de consentement + lien `/confidentialite` sur l'étape de capture email du wizard (TICKET-GDPR-CONSENT, aussi une lacune FR live) ; garder le copy de méthode fondé sur le comportement plutôt que de coder en dur les poids +2/+1 ; arbitrage de slug/canonique `/outils/scanner-opportunites-ia` vs `/ai-opportunity-assessment` (TICKET-EN-ROUTES) — sans objet pour le FR live.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 90/100 + anti-slop **Clean, net -6** — page-outil la plus transparente sur la méthode/sources).
- **Titre :** ramené à l'option courte **`Scanner d'opportunités IA : votre top 3`** (~51 car. rendus) pour respecter le cap dur ≤60 rendu que les deux audits signalaient (la variante « vos 3 systèmes prioritaires » restait ~62). Mot-clé exact conservé en tête, aucun suffixe manuel.
- **Meta :** déjà trimée à ~160 car. (live ~178).
- **CTA (grammaire) :** « Une opportunité vous parle ? » déjà correct en FR (le défaut grammatical était côté EN) — conservé verbatim.
- **Mots-clés FR :** `opportunités ia` / `scanner opportunités ia` = intention exacte, volume modeste (aimant, pas pilier) ; `cas d'usage ia` 150 mieux porté par `/secteurs`. TBD conservé faute de volume exploitable, décision correcte.
- **PROTÉGÉ (méthode/sources — cœur de présence) :** titres-négations « Des chiffres sourcés, pas des promesses » et « Un point de départ, pas un audit » (déflationnistes, KEEP-list) ; scoring divulgué (+2 irritant / +1 secteur / seuil taille) ; sources nommées et affichées par carte (Forrester, Ardent Partners, Loopio, Deloitte, Klarna, Unilever) ; « sans email pour voir votre top 3 » ; « Aucune relance agressive ».
- **Décision propriétaire en attente :** microcopy RGPD + lien `/confidentialite` à l'étape email du wizard (TICKET-GDPR-CONSENT) ; validation publique des chiffres clients nommés (Shem's 10x, Sage +70 %).
