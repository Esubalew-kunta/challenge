# IA au Maroc (/ia-maroc) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/ia-maroc/page.tsx` (inline). On conserve l'ancrage entité (SARL, 46 Avenue Okba Agdal), la loi 09-08/CNDP + RGPD et la garantie à l'identique et on n'applique que les corrections d'audit (meta > 160, dé-empilage des négations à une seule, périmètre marchés canonique).

## 1. En-tête de page
- **Route (FR, live) :** /ia-maroc
- **Objet :** Page marché Maroc : entité locale, bureau à Rabat, conformité loi 09-08.
- **Rôle SEO :** géo-pilier (marché MA) — actif d'entité/positionnement + citation GEO pour le marché marocain (recherche FR/arabe ou navigation directe).
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ia maroc | 100 | n/a | Ahrefs Maroc (KE), 2026-07 |
| Secondaire | intelligence artificielle maroc | 200 | n/a | Ahrefs (KE), 2026-07 |
| Secondaire | cabinet ia maroc / transformation ia maroc | minimal | — | terme d'entité locale |
| Référence (tête cluster) | agence ia | 600 | n/a | Ahrefs France — servi via le cluster conseil |

> **Décision mots-clés — page géo à faible pression.** L'audience marocaine cherche en français/arabe ou navigue en direct. `ia maroc` et `intelligence artificielle maroc` portent la page ; elle est avant tout une **page entité + légitimité locale** (société de droit marocain, bureau à Rabat) et un **actif de citation GEO** : quand on demande à un moteur IA « existe-t-il un cabinet IA basé au Maroc / à Rabat ? », le bloc answer-first et l'entrée llms.txt sont ce qui est cité. La valeur de ranking vient de la marque + du cluster conseil, pas d'un terme MA-spécifique.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | IA Maroc : cabinet de transformation IA à Rabat | Inchangé *(47 ; rend ~59 avec le suffixe `\| AI Makers` — dans le budget)* |
| Meta description (140–160 car.) | AI Makers est un cabinet de transformation IA avec une société de droit marocain et un bureau à Rabat Agdal. Audit IA, systèmes en production, formation des équipes, partout au Maroc, en conformité loi 09-08 (CNDP) et RGPD. | `AI Makers, cabinet de transformation IA de droit marocain, bureau à Rabat Agdal. Audit IA, systèmes en production et formation — loi 09-08 (CNDP) et RGPD.` *(~153 ; le « 159 » précédent était sous-compté — le live rendait ~172)* |
| H1 | Votre partenaire IA au Maroc. Pas un cabinet français qui parle du Maroc. | Inchangé |
| URL slug | /ia-maroc | /ia-maroc |

## 4. Sections & contenu
Copy : inline `src/app/ia-maroc/page.tsx`.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Maroc`
  - **H1 :** `Votre partenaire IA au Maroc. Pas un cabinet français qui parle du Maroc.`
  - **intro :** `AI Makers est un cabinet de transformation IA avec une société de droit marocain et un bureau à Rabat. Nous auditons vos process, mettons des systèmes IA en production et formons vos équipes, en français, dans tout le Royaume.`
  - **CTA :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** les deux premières phrases établissent le fait entité (société de droit marocain + bureau à Rabat) — toute la différenciation vs les cabinets « à couverture distante », et la réponse dont un moteur IA a besoin. « Pas un cabinet français qui parle du Maroc » est une affirmation, pas une ligne creuse — la seule négation conservée.

### 4.2 — « Le Maroc n'attend pas. Vos concurrents non plus. »
- **Composant :** `page.tsx` (pressures[3])
- **Proposé (FR) :**
  - **H2 :** `Le Maroc n'attend pas. Vos concurrents non plus.` (badge : `Pourquoi maintenant`)
  - **Carte 1 — Une dynamique nationale :** `La stratégie nationale de digitalisation pousse l'ensemble de l'économie marocaine à moderniser ses process. L'IA est désormais un chantier attendu par les directions générales.` *(fix d'audit : « n'est plus un sujet de veille : c'est un chantier » aplati en positif)*
  - **Carte 2 — Une pression concurrentielle réelle :** `Banques, télécoms, industrie : les secteurs les plus compétitifs du Royaume investissent déjà dans l'IA. Dans ces marchés, l'écart se creuse entre les organisations qui structurent leur transformation et celles qui attendent.`
  - **Carte 3 — Le coût d'attendre :** `Chaque mois sans process automatisés, c'est du temps d'équipe perdu sur des tâches répétitives, pendant que les concurrents le réinvestissent. La seule question qui reste : dans quel ordre, et avec qui.`
- **Rationale :** stratégie nationale et affirmations sectorielles gardées au niveau que la page assume (aucun chiffre inventé). Secteurs concrets nommés (banques, télécoms, industrie).

### 4.3 — « Une société marocaine, un bureau à Agdal. »
- **Composant :** `page.tsx`
- **Proposé (FR) :**
  - **badge :** `Une présence réelle`
  - **H2 :** `Une société marocaine et un bureau installé à Rabat Agdal.` *(fix d'audit : « Pas une boîte aux lettres. » aplati)*
  - **para 1 :** `Beaucoup de cabinets européens « couvrent » le Maroc depuis Paris. Nous avons fait l'inverse : une SARL de droit marocain, un bureau au 46 Avenue Okba à Rabat Agdal, et une équipe locale qui travaille au quotidien avec nos équipes opérant depuis Paris.`
  - **para 2 :** `Concrètement, ça change tout : contractualisation et facturation locales, interventions sur site sans logistique internationale, et une compréhension du terrain marocain qui ne s'improvise pas depuis l'étranger. Nos marchés (France et Maroc) partagent la même méthode, mais chaque client est servi depuis la bonne entité.` *([to validate] : la page live liste aussi Belgique et Luxembourg — ramené aux deux marchés canoniques (France + Maroc) de llms.txt pour éviter d'affirmer des marchés hors source canonique.)*
- **Rationale :** garde l'adresse concrète (46 Av Okba, Agdal) de llms.txt. « Nous avons fait l'inverse » = posture assumée conservée.

### 4.4 — « Loi 09-08 côté Maroc. RGPD côté Europe. »
- **Composant :** `page.tsx`
- **Proposé (FR) :**
  - **badge :** `Conformité des données`
  - **H2 :** `Loi 09-08 côté Maroc. RGPD côté Europe.`
  - **intro :** `Un système IA qui ignore le cadre légal devient un passif. La conformité est intégrée dès le cadrage.` *(fix d'audit : « un passif, pas un actif » aplati)*
  - **Carte 1 — Clients marocains :** `Traitement des données personnelles dans le cadre de la loi 09-08 et des exigences de la CNDP.`
  - **Carte 2 — Clients européens :** `Conformité RGPD pour toute mission impliquant des données de résidents européens.`
  - **Carte 3 — Hébergement :** `Adapté au choix du client et à ses contraintes, défini dès le cadrage de la mission.`
- **Rationale :** la loi 09-08 (2009) est la loi marocaine de protection des données personnelles, appliquée par la CNDP — énoncée au niveau que la page assume. Les obligations plus profondes (déclaration, transferts transfrontaliers) ne sont pas détaillées pour éviter le sur-engagement juridique ; voir `[to validate]` en §9.

### 4.5 — « Trois phases. La même méthode qu'en Europe. »
- **Composant :** `page.tsx` (phases[3]) + lien inline
- **Proposé (FR) — verbatim live :**
  - **badge :** `La méthode`
  - **H2 :** `Trois phases. La même méthode qu'en Europe.`
  - **intro :** `Audit, build, scale, avec quatre garanties écrites au contrat.`
  - **01 — Audit :** `Cartographie de vos process, scoring de maturité IA, interviews de vos équipes. Vous repartez avec une roadmap chiffrée et au minimum 3 cas d'usage à fort ROI, sinon l'audit est remboursé.`
  - **02 — Build :** `Un ingénieur IA dédié, onboardé sur votre secteur 2 semaines avant le kick-off, met vos premiers systèmes en production et forme vos équipes chaque semaine.`
  - **03 — Scale :** `Vos collaborateurs deviennent des champions IA autonomes. Les systèmes, playbooks et documentation vous appartiennent intégralement : zéro dépendance.`
  - **lien inline :** `Voir le détail complet de l'offre →` → /ai-transformation
- **Rationale :** la méthode est owned par /offre et /ai-transformation ; ici la version référence courte. « Audit remboursé si moins de 3 cas d'usage » correspond à la page et au modèle de garantie.

### 4.6 — FAQ / 4.7 — CTA final
Voir §5 et §7.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. **Copy live conservé verbatim.**

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Intervenez-vous partout au Maroc ? | Oui. Notre bureau est à Rabat (Agdal), et nous intervenons dans tout le Royaume (Casablanca, Tanger, Marrakech et au-delà), sur site ou à distance selon le format de la mission. Toutes nos interventions se font en français. |
| 2 | Facturez-vous depuis le Maroc ? | Oui. AI Makers dispose d'une société de droit marocain (SARL). Les clients marocains contractent avec notre entité locale et sont facturés au Maroc, dans le cadre juridique et fiscal marocain. |
| 3 | Vos formations sont-elles disponibles au Maroc ? | Oui. Les programmes de formation que nous délivrons à nos clients européens sont disponibles au Maroc, animés en français, sur site ou à distance. La phase Scale de notre méthode (le programme de champions IA internes) s'applique de la même façon. |
| 4 | Travaillez-vous avec le secteur public ? | Nous accompagnons des organisations privées et publiques. Chaque mission commence par le même diagnostic : cartographie des process, identification des cas d'usage à fort ROI, puis roadmap adaptée aux contraintes de l'organisation. |
| 5 | Comment gérez-vous la conformité des données ? | Pour les clients marocains, nous travaillons dans le cadre de la loi 09-08 et des exigences de la CNDP. Pour les clients européens, dans le cadre du RGPD. L'hébergement des données est adapté au choix du client et défini dès le cadrage de la mission. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Un cas marocain : ThinkOne | /etudes-de-cas/thinkone | cas MA (existant) |
| Un cas marocain : Addictest | /etudes-de-cas/addictest | cas MA (existant) |
| Voir l'offre AI PARTNER complète | /ai-transformation | owner méthode |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA final :** title `Diagnostic IA gratuit avec l'équipe de Rabat` — subtitle `30 minutes pour analyser vos workflows et identifier vos premiers cas d'usage IA. En français, sur site ou à distance.` — CTA `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** garde la spécificité « équipe de Rabat » — l'accroche locale qui distingue ce CTA du CTA générique du site.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers est un cabinet de transformation IA opérant au Maroc via une société de droit marocain (SARL) avec un bureau au 46 Avenue Okba, Agdal, Rabat. Il audite les process des entreprises, déploie des agents IA et des automatisations en production, et forme les équipes jusqu'à l'autonomie — en français, dans tout le Royaume — dans le cadre de la loi 09-08 (CNDP) pour les clients marocains et du RGPD pour les clients européens. Fondé par Othmane Halim, avec un second bureau à Paris (75008).`
- **Entrée llms.txt (FR) :** `[IA au Maroc](https://aimakers.fr/ia-maroc) : l'accompagnement des entreprises marocaines par AI Makers depuis son bureau de Rabat — audit, systèmes en production et formation, dans le cadre de la loi 09-08 et du RGPD.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Société de droit marocain (SARL), bureau 46 Av Okba, Agdal, Rabat | public/llms.txt + copy page |
| Fondateur Othmane Halim ; bureau Paris 75008 | public/llms.txt (canonique) |
| Loi 09-08 + CNDP pour MA ; RGPD pour EU | copy page — cadrage général sûr ; obligations plus profondes `[to validate legal accuracy]` |
| Audit remboursé si < 3 cas d'usage à fort ROI ; ingénieur onboardé 2 semaines avant kick-off | copy page + modèle de garantie |
| Marchés = France + Maroc | public/llms.txt. La page FR liste aussi Belgique/Luxembourg — `[to validate]`, ramené aux deux canoniques pour éviter le sur-engagement |
| « Stratégie nationale de digitalisation », dynamique sectorielle (banques/télécoms/industrie) | copy page — qualitatif, aucun chiffre inventé |

## Corrections d'audit appliquées
- **Meta > 160** — le « 159 » précédent était un sous-comptage ; le live rendait ~172. Resserrée à ~153 car. (« est un cabinet » → « , cabinet » ; « formation des équipes » → « formation »), payload entité + loi 09-08 + RGPD conservé.
- **Title** — inchangé (dans le budget avec suffixe auto).
- **Dé-empilage des négations (4 → 1)** — conservée : H1 « Pas un cabinet français qui parle du Maroc » (positionnement cœur). Aplaties : §4.2 carte 1 (« n'est plus un sujet de veille »), §4.3 H2 (« Pas une boîte aux lettres. »), §4.4 intro (« un passif, pas un actif »).
- **Périmètre marchés** — Belgique/Luxembourg retirés au profit des deux canoniques (France + Maroc), `[to validate]`.

## À valider
- Obligations plus profondes de la loi 09-08 (déclaration CNDP, transferts transfrontaliers) : dans le périmètre ou volontairement haut niveau — décision juridique/owner (`[to validate legal accuracy]`).
- Confirmer un service effectif en Belgique/Luxembourg avant de l'ajouter aux sources canoniques.
- Slug EN `/ai-morocco` : hors périmètre FR.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Meta :** mesurée à ~172 car. (le « 159 » du master était sous-compté) → ramenée à ~153 car. (≤160). Conforme.
- **Title :** « IA Maroc : cabinet de transformation IA à Rabat » (47 car., via `constructMetadata` = suffixe unique) → rendu ~59 ≤ 60. Aucun suffixe écrit à la main. Conforme.
- **Périmètre marchés :** Belgique/Luxembourg déjà retirés au profit des deux canoniques **France + Maroc** (llms.txt), tag **`[to validate]`** conservé (§4.3 para 2, §9). Confirmer un service effectif en Belgique/Luxembourg avant réajout (décision propriétaire).
- **loi 09-08 :** maintenue au niveau haut (cadre général loi 09-08 / CNDP + RGPD) ; obligations profondes (déclaration CNDP, transferts transfrontaliers) volontairement non détaillées, tag **`[to validate legal accuracy]`** conservé (§4.4, §9). Ne pas asserter les obligations profondes.
- **Correction mot-clé (findings D/E) :** « ia maroc » 150 → **100** (Ahrefs Maroc) ; « intelligence artificielle maroc » 200 (exact) conservé. Stratégie géo-entité à faible pression inchangée.
- **Tags :** déjà en `[to validate]` / `[to validate legal accuracy]` — aucun `[à valider]` résiduel. Conforme.
- **« X, pas Y » :** déjà dé-empilé (4→1) ; H1 « Pas un cabinet français qui parle du Maroc » reste l'unique négation porteuse. Conforme.
- **Non tranché — décisions propriétaire/juridique (log) :** enregistrement effectif de la SARL de droit marocain (revendication facturation locale, C/§9 registre) ; service Belgique/Luxembourg ; profondeur loi 09-08.
