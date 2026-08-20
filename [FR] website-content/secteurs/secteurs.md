# Secteurs — hub (/secteurs) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/secteurs/page.tsx` + `src/lib/secteurs.ts` (8 secteurs). On reprend le copy live verbatim et on n'applique que les corrections d'audit (suffixe de marque, meta trop longue, grille de cartes dé-templatisée).

## 1. En-tête de page
- **Route (FR, live) :** /secteurs
- **Objet :** Hub des 8 pages sectorielles ; explique pourquoi les cas d'usage IA diffèrent d'un métier à l'autre et route vers chacun.
- **Rôle SEO :** hub
- **Étape funnel :** TOFU/MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ia par secteur | TBD (Ahrefs FR) | TBD (Ahrefs FR) | tête de requête catégorie |
| Secondaire | cas d'usage ia [secteur] | TBD (Ahrefs FR) | TBD (Ahrefs FR) | longue traîne, routée vers les pages enfant |
| Secondaire | transformation ia secteur / ia pour [secteur] | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs FR à confirmer |

> **Décision mot-clé.** « ia par secteur » est la tête de requête catégorie la plus proche — sans doute faible en volume et générique. L'intention gagnable est **par secteur** et vit sur les pages enfant (« ia pour les agences », « ia pour la santé », etc.). Le hub cible donc la requête catégorie légèrement et gagne sa place par un vrai point de vue sur l'importance du secteur, pas en sur-optimisant une tête de requête faible. Volumes/difficultés à confirmer côté Ahrefs FR.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Transformation IA par secteur : agences, TPE/PME, santé | IA par secteur : les cas d'usage qui diffèrent *(47 ; rend ~59 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | L'IA appliquée à votre secteur : agences de communication, TPE et PME françaises, santé, biotech et medtech. Cas d'usage concrets, références clients et formations dédiées par métier. | L'IA appliquée à votre secteur, pas en général : agences, TPE/PME, santé, ESN, conseil, hôtellerie, banque. Cas d'usage réels et références clients par métier. *(158)* |
| H1 | L'IA appliquée à votre métier | L'IA appliquée à votre métier |
| URL slug | /secteurs | /secteurs |

## 4. Sections & contenu
Copy : inline `src/app/secteurs/page.tsx` + `src/lib/secteurs.ts` (8 entrées). Copy live repris verbatim ; teasers de cartes dé-templatisés (voir §4.2).

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge, H1, intro
- **Live (FR) :** « Les cas d'usage qui comptent ne sont pas les mêmes… » — promesse par secteur.
- **Proposé (FR) :**
  - **badge :** `Par secteur`
  - **H1 :** `L'IA appliquée à votre métier`
  - **intro (answer-first) :** `Les cas d'usage qui comptent ne sont pas les mêmes dans une agence de création, une PME industrielle ou un laboratoire. Chaque page ci-dessous part de votre réalité : vos douleurs, vos cas d'usage, nos références dans votre secteur.`
- **Rationale :** Repris verbatim du live. Le point de vue du hub — « le premier système à construire diffère parce que le goulot d'étranglement diffère » — donne trois exemples concrets et contrastés sans répondre à aucune page enfant en entier.

### 4.2 — Cartes secteurs (8)
- **Composant :** `page.tsx` + `secteurs.ts`
- **Champs :** carte par secteur {nom, teaser, lien}
- **Live (FR) :** 8 secteurs. *(La carte live rend la 2ᵉ phrase de `intro` ; le master dé-templatise avec des teasers hub distincts, à ne PAS re-templatiser.)*
- **Proposé (FR) :** *(noms = `nom` live ; teasers hub distincts, formes variées — déclaratif / fragment / paire)*
  - `Agences de communication` → /secteurs/agences-communication — `Produire plus de créa et plus de réponses aux appels d'offres, sans recruter.`
  - `TPE & PME` → /secteurs/tpe-pme — `Le back-office répétitif, le commercial et le reporting passent en automatique.`
  - `Santé, biotech & medtech` → /secteurs/sante-biotech-medtech — `Veille scientifique, dossiers réglementaires et support de première ligne, tenus à la rigueur du secteur.`
  - `ESN & services IT` → /secteurs/esn-services-it — `Produire plus sur le delivery, et gagner autrement en avant-vente.`
  - `Conseil & études de marché` → /secteurs/conseil-etudes-marche — `Entretiens, revues de littérature et livrables, analysés plus vite et plus en profondeur.`
  - `Médecins & cabinets médicaux` → /secteurs/medecins-cabinets — `Comptes rendus, courriers et synthèses de dossiers pris en charge : du temps médical rendu.`
  - `Hôtellerie, tourisme & loisirs` → /secteurs/hotellerie-tourisme-loisirs — `La relation client multilingue 24/7, à l'échelle.`
  - `Banque, assurance & courtage` → /secteurs/banque-assurance-courtage — `Dossiers et relances pris en charge, conformité documentaire intégrée.`
- **Lien de carte (live) :** `Voir les cas d'usage` → /secteurs/[slug]
- **Rationale :** Teasers d'une ligne tirés du focus réel de chaque secteur (`titre`/`casUsage`), gardés courts pour que le hub route sans cloner les pages enfant qui portent les listes complètes de cas d'usage. Formes délibérément variées (déclaratives, fragments, paires) plutôt que le gabarit uniforme « punch : trois noms » ; sur la carte banque, la répétition « conformité… conformité » est ramenée à une seule occurrence — restructuré, pas remplacé par synonyme. **8 secteurs confirmés dans `secteurs.ts` ; cartes dé-templatisées conservées, non re-templatisées.**
- **Note bas de grille (live, conservée) :** `Votre secteur n'est pas dans la liste ? Nous intervenons aussi dans l'industrie, la finance, le retail et le secteur public. Parlons de votre contexte.` → /contact

### 4.3 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Et dans votre secteur, l'IA change quoi ?`
  - **subtitle :** `30 minutes pour cartographier vos cas d'usage prioritaires, que vous travailliez avec nous ou non.`
  - **CTA principal :** `Réserver un diagnostic gratuit` → /contact
  - **CTA secondaire :** `Voir les formations` → /formation-ia-entreprise
- **Rationale :** Repris verbatim du live ; accroche de curiosité sectorielle vers le diagnostic.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| (8 noms de secteurs ci-dessus) | /secteurs/[slug] ×8 | pages sectorielles |
| Parlons de votre contexte | /contact | lien inline sous la grille |
| Réserver un diagnostic gratuit | /contact | CTA |
| Voir les formations | /formation-ia-entreprise | CTA secondaire |

## 7. CTA
- **CTA principal :** « Et dans votre secteur, l'IA change quoi ? » → /contact (bouton : `Réserver un diagnostic gratuit`)
- **CTA secondaire :** `Voir les formations` → /formation-ia-entreprise

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers construit des systèmes IA sectoriels pour huit secteurs : agences de communication, TPE et PME, santé/biotech/medtech, ESN et services IT, conseil et études de marché, cabinets médicaux, hôtellerie/tourisme/loisirs, et banque/assurance/courtage. Le postulat : le cas d'usage au plus fort ROI diffère selon le secteur parce que le goulot d'étranglement diffère — volume créatif pour les agences, temps administratif pour les cabinets médicaux, conformité intégrée pour les courtiers — d'où une page par secteur portant ses propres cas d'usage, outils et références clients.`
- **Entrée llms.txt (FR) :** `[L'IA par secteur](https://aimakers.fr/secteurs) : cas d'usage, outils et références clients par secteur — agences, TPE/PME, santé, ESN, conseil, hôtellerie, banque, et plus.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 8 secteurs + noms + focus | src/lib/secteurs.ts (vérifié — 8 entrées) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy hero/CTA est repris verbatim de `page.tsx` ; corrections d'audit conservées telles quelles :

- **Gabarit de carte uniforme (slop §2.5 / §3.4 — le tell principal) :** les 8 teasers secteur sont dé-templatisés pour casser la forme répétée « punch : nom, nom, nom » — aucune carte n'utilise le gabarit liste-à-deux-points ; les formes varient (déclaratif / fragment / paire). Restructuré, pas remplacé par synonymes. Contenu toujours tiré du `casUsage` réel de chaque secteur. **Dé-templatisation portée en français, non re-templatisée.**
- **Écho redondant (slop) :** la carte banque « conformité documentaire — conformité comprise » devient « conformité documentaire intégrée » (concept énoncé une seule fois).
- **Double suffixe de marque (SEO §2a) :** Title raccourci (47 car. ; rend ~59 avec le suffixe du template).
- **Meta au plafond (SEO §2b) :** meta live (~180 car.) ramenée à 158 (liste de secteurs élargie mais compacte), en gardant le cadre « pas en général » et les références clients.
- **CONSERVÉ (protégé) :** la thèse du hub intacte (« le goulot d'étranglement diffère, donc le premier système à construire diffère » + les contrastes agence/medtech/courtier — le point de vue citable salué par les deux audits) ; le H1 live « L'IA appliquée à votre métier » conservé verbatim.
- **Canonique :** ce hub est la source de vérité pour le nombre de secteurs = **8** (`secteurs.ts`) ; le « 6 secteurs » du playbook a été réconcilié à 8 dans la passe de cette page.
- **Décisions dev (hors copy) :** arbitrage de slug/canonique `/secteurs` (TICKET-EN-ROUTES) ; mise à jour llms.txt « 6 noms de secteurs » → 8 (édition config/dev) — sans objet pour le FR live, laissés en l'état.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 86/100 + anti-slop **Clean, net -3** — un des meilleurs hubs du corpus).
- **Cartes secteurs (tell principal §2.5) :** les 8 teasers sont déjà dé-templatisés (formes variées déclaratif/fragment/paire), la redondance banque « conformité… conformité » ramenée à une occurrence par restructuration. **NON re-templatisés** — avertissement du master respecté.
- **Titre :** déjà raccourci (`IA par secteur : les cas d'usage qui diffèrent`, ~59 car. rendus), aucun suffixe manuel.
- **Meta :** déjà trimée à 158 car.
- **Canonique :** ce hub est la source de vérité pour le nombre de secteurs = **8** (`secteurs.ts`) ; réconcilié dans playbook (« 6 » → 8). llms.txt sous-compte (6 nommés) → édition config/dev.
- **Mot-clé FR :** `ia par secteur` ≈ 0 (requête catégorie faible) ; `cas d'usage ia` 150, `transformation ia` 100 — le hub gagne par sa thèse, pas par une tête faible. Décision correcte, TBD conservé.
- **PROTÉGÉ :** thèse du hub (« le goulot d'étranglement diffère, donc le premier système à construire diffère » + contrastes agence/medtech/courtier) ; H1 « L'IA appliquée à votre métier » ; cadrage « pas en général » / « avec nous ou non » (KEEP-list).
- **Décision propriétaire en attente :** mise à jour llms.txt:40 à 8 secteurs (ajouter conseil + médecins).
