# Outils gratuits — hub (/outils) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/outils/page.tsx` (repris mot pour mot). Le rôle du master EN était de traduire/auditer cette page ; ici on réutilise le copy FR live et on n'applique que les corrections d'audit pertinentes pour le FR (budget Title, budget Meta).

## 1. En-tête de page
- **Route (FR, live) :** /outils
- **Objet :** Hub des outils gratuits : calculateur ROI, audit GEO, scanner d'opportunités. Aiguilleur + cadre de confiance pour les trois aimants à leads.
- **Rôle SEO :** hub / aimant-outils
- **Étape funnel :** TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | outils ia / outil ia | 700 (France) | KD 53 | Ahrefs FR, 2026-07 |
| Secondaire | outils ia gratuits | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs, 2026-07 (intention annuaire — voir note) |
| Secondaire | calculateur roi ia / visibilité ia / opportunités ia | — | — | portés par les pages-outils enfants |

> **Décision mot-clé :** « outils ia » / « outil ia » (700 en France / KD 53 — le 1 300 souvent cité est le volume **global**, pas France) est en partie une requête **annuaire** — l'internaute veut une liste de 50 applis, pas trois outils de génération de leads. Ce hub ne peut pas et ne doit pas gagner cette tête de requête ; la viser en force le rendrait mince et hors-intention. Le vrai rôle du hub : l'aiguillage interne + un point de vue citable sur la raison d'être de ces trois outils. L'intention commerciale précise vit sur les pages enfants (calculateur roi ia, visibilité/audit geo, scanner d'opportunités ia). Cibler « outils ia » en douceur dans le copy ; ne pas sur-optimiser le hub pour une tête de requête d'annuaire. Volumes FR précis à confirmer côté Ahrefs FR (`TBD`).

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Outils gratuits : ROI, visibilité IA, opportunités d'automatisation *(~67 car. hors suffixe — **dépasse le budget**, rend ~80 avec `\| AI Makers`)* | Outils IA gratuits : ROI, visibilité IA, scanner *(48 ; rend 60 avec le suffixe `\| AI Makers` du template — marque non écrite à la main ; ramené dans le budget)* |
| Meta description (140–160 car.) | 3 outils gratuits, sans inscription forcée : calculez le ROI de l'IA dans votre entreprise, découvrez ce que ChatGPT dit de vous, identifiez vos systèmes IA les plus rentables. *(~176 car. — **dépasse le budget**)* | 3 outils gratuits, sans inscription forcée : calculez le ROI de l'IA, voyez ce que ChatGPT dit de vous, trouvez vos systèmes IA les plus rentables. *(~147 car., dans le budget)* |
| H1 | Des outils gratuits, sans inscription forcée | Des outils gratuits, sans inscription forcée |
| URL slug | /outils | /outils |

## 4. Sections & contenu
Copy : inline `src/app/outils/page.tsx`. FR live repris verbatim.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge, H1, intro
- **Live (FR) :** Promesse « sans inscription forcée ».
- **Proposé (FR) :**
  - **badge :** `Gratuit`
  - **H1 :** `Des outils gratuits, sans inscription forcée`
  - **intro (point de vue, answer-first) :** `Trois outils pour mesurer votre potentiel IA avant de parler à qui que ce soit : votre ROI, votre visibilité dans les réponses des IA, et vos opportunités d'automatisation les plus rentables.`
- **Rationale :** Le hub porte sa propre valeur citable via la négation de cadrage « sans inscription forcée » (deux outils sur trois donnent une réponse à l'écran sans email). Copy live conservé — l'honnêteté de méthode est déjà présente.

### 4.2 — 3 cartes d'outils
- **Composant :** `page.tsx`
- **Champs :** cartes {name, promise, outcome, cta, href}
- **Live (FR) :** Grille des trois outils.
- **Proposé (FR) :**
  - **Carte 1 — Calculateur ROI IA** → /outils/calculateur-roi-ia :
    - **promise :** `Estimez en 30 secondes les heures et les euros que l'IA peut libérer dans votre entreprise.`
    - **outcome :** `4 curseurs (effectif, salaires, heures gagnées, adoption), un calcul transparent aux hypothèses prudentes, et votre gain annuel estimé en heures, en euros et en équivalents temps plein.`
    - **cta :** `Calculer mon ROI`
  - **Carte 2 — Audit GEO gratuit** → /outils/audit-geo-gratuit :
    - **promise :** `Découvrez ce que ChatGPT, Gemini et Perplexity répondent quand vos clients posent des questions sur votre métier.`
    - **outcome :** `Sous 48h, préparé par un humain : les réponses des moteurs mot pour mot, les requêtes où vos concurrents vous remplacent, et vos 3 actions prioritaires pour être cité davantage.`
    - **cta :** `Recevoir mon audit`
  - **Carte 3 — Scanner d'opportunités IA** → /outils/scanner-opportunites-ia :
    - **promise :** `3 questions, 60 secondes : identifiez les systèmes IA les plus rentables pour votre secteur, votre taille et vos irritants.`
    - **outcome :** `Un classement immédiat à l'écran, sans email obligatoire, avec des chiffres sourcés (études publiques et systèmes en production chez nos clients) sur chaque opportunité.`
    - **cta :** `Lancer le scanner`
- **Rationale :** Blurbs qui aiguillent, sans cloner. Chaque carte pointe vers la page enfant qui porte la réponse complète. Les livrables collent à la logique réelle de chaque outil (curseurs vérifiés, 48h humain, top 3 à l'écran + chiffres sourcés).

### 4.3 — « Vous voulez la version sur mesure ? »
- **Composant :** `page.tsx`
- **Champs :** passerelle vers l'offre payante + ligne de méthode
- **Live (FR) :** Passerelle upsell.
- **Proposé (FR) :**
  - **title :** `Vous voulez la version sur mesure ?`
  - **body :** `30 minutes de diagnostic gratuit : on analyse vos workflows réels et vous repartez avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
  - **ligne de méthode (bas de grille) :** `Ces outils utilisent la même méthode que nos missions : c'est notre façon de vous montrer le niveau avant de travailler ensemble.`
  - **CTA :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** Fait le pont des outils TOFU vers l'offre sans répéter le contenu des pages payantes. La ligne de méthode est la présence d'honnêteté protégée du hub.

### 4.4 — Pour aller plus loin
- **Composant :** `shared/related-content.tsx`
- **Champs :** Audit IA, Diagnostic IA, Playbook
- **Proposé (FR) :**
  - `Audit IA de votre entreprise` → /audit-ia-entreprise — `L'audit complet : cartographie des process, scoring de maturité et roadmap chiffrée.`
  - `Diagnostic IA en 2 minutes` → /diagnostic-ia — `Testez votre maturité IA en ligne et repartez avec un score et un plan d'action.`
  - `Le Playbook AI-First (48 pages)` → /playbook-ia — `Le guide de transformation IA à télécharger gratuitement.`

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Calculateur ROI IA | /outils/calculateur-roi-ia | outil |
| Audit GEO gratuit | /outils/audit-geo-gratuit | outil |
| Scanner d'opportunités IA | /outils/scanner-opportunites-ia | outil |
| Audit IA de votre entreprise | /audit-ia-entreprise | connexe |

## 7. CTA
- **CTA principal :** Cartes d'outils → outils individuels. CTA passerelle : **`Réserver mon diagnostic gratuit`** → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers propose trois outils IA gratuits, sans inscription forcée : un calculateur de ROI IA (les heures et la valeur que l'IA peut libérer), un audit GEO gratuit (ce que ChatGPT, Gemini et Perplexity disent de vous face à vos concurrents, préparé par un humain sous 48h) et un scanner d'opportunités IA (vos systèmes IA les plus rentables à partir de 3 questions). Chaque outil s'appuie sur des chiffres sourcés et un calcul prudent ; deux d'entre eux affichent le résultat à l'écran, sans email.`
- **Entrée llms.txt (FR) :** `[Outils IA gratuits](https://aimakers.fr/outils) : les outils gratuits d'AI Makers — calculateur de ROI, audit GEO et scanner d'opportunités. Chiffres sourcés, sans inscription forcée.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 3 outils gratuits, sans inscription forcée ; 2 rendent un résultat sans email | copy page + composants outils (vérifié) |
| Livrables par outil | pages-outils enfants (vérifiées contre les composants) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `src/app/outils/page.tsx` ; corrections d'audit appliquées au FR :

- **Title hors budget (corrigé) :** le Title live (~67 car. hors suffixe, ~80 rendu) dépasse largement le budget ≤60 incl. suffixe de marque. Proposé une version courte `Outils IA gratuits : ROI, visibilité IA, scanner` (48 car. ; rend 60 avec le suffixe `| AI Makers` ajouté par le template — marque non écrite à la main). Les trois outils restent nommés par un terme réel (ROI, visibilité IA, scanner).
- **Meta hors budget (corrigée) :** la Meta live (~176 car.) dépasse le budget ≤160 ; trimée à ~147 car. en conservant le phrasé live (« sans inscription forcée », ChatGPT, systèmes IA les plus rentables).
- **CONSERVÉ (protégé — présence d'honnêteté/méthode) :** la négation de cadrage du H1 « sans inscription forcée » et la ligne de méthode « Ces outils utilisent la même méthode que nos missions… ». Le point de vue enrichi du master EN (« no invented numbers », « a tool that oversells is worse than no tool ») n'existe pas dans le copy FR live ; le FR étant canonique, on ne l'invente pas — l'équivalent honnête vit en live sur la page enfant ROI (« Un calculateur qui gonfle les chiffres dessert tout le monde »).
- **Laissé pour la dev / le propriétaire (hors copy) :** ligne de consentement RGPD sur les deux outils enfants capturant des données (TICKET-GDPR-CONSENT) ; pas de route EN pour le hub FR live (le slug /outils reste).

## Reconciliation applied
Réconciliation des deux audits FR (SEO 85/100 + anti-slop **Clean, net -4** — hub-aiguilleur, présence méthodologique réelle).
- **Titre :** déjà raccourci (`Outils IA gratuits : ROI, visibilité IA, scanner`, 48 car. → 60 pile rendus), aucun suffixe manuel.
- **Meta :** déjà trimée à ~147 car. (live ~176 hors budget).
- **Mot-clé FR corrigé :** `outil ia` / `outils ia` = **700 en France / KD 53** (le 1 300 était le volume global). Décision de ne pas sur-optimiser cette tête de requête d'annuaire confirmée correcte.
- **PROTÉGÉ (transparence de méthode) :** « sans inscription forcée », la ligne de méthode « Ces outils utilisent la même méthode que nos missions… », les hypothèses prudentes et chiffres sourcés. Cadrage déflationniste « avec nous ou non » (KEEP-list) conservé.
- **Décision propriétaire en attente :** microcopy RGPD sur les 2 outils enfants qui capturent des données (TICKET-GDPR-CONSENT) ; option `ItemList`/`CollectionPage` schema.
