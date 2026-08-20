# Challenge 30 jours (/challenge-30-jours) — Master de contenu FR

> Localisation FR du master EN scellé. Le FR est la langue primaire live : le copy provient de `src/app/challenge-30-jours/page.tsx` (394 lignes), repris mot pour mot. On conserve chaque affirmation à l'identique et on n'applique que les corrections d'audit (le master EN n'exigeait aucune édition de copy ; le seul point ouvert est le Title, trop long avec le suffixe de marque, ici trimé pour tenir le budget FR).

## 1. En-tête de page
- **Route (FR, live) :** /challenge-30-jours
- **Objet :** Parcours email gratuit de 30 jours pour déployer un premier agent Claude. Aimant de nurturing lead.
- **Rôle SEO :** conversion (lead magnet) / longue traîne autour de Claude — pression mot-clé minimale.
- **Étape funnel :** TOFU capture

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | défi ia 30 jours | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs FR, 2026-07 |
| Secondaire | 30 jours ia | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs FR, 2026-07 |

> **Décision mot-clé — pression minimale.** « défi ia 30 jours » / « 30 jours ia » sont des requêtes à très faible volume en France (magnet/BOFU, pas des piliers de trafic). C'est une page d'inscription lead-gen alimentée par le maillage interne, l'email et le social — pas par le classement d'une tête de requête. Le copy est optimisé pour la conversion à l'inscription et un cadrage honnête des attentes, avec l'angle Claude comme accroche longue traîne. Volumes/difficultés FR marqués `TBD (Ahrefs FR)` : pas de chiffre FR réel à ce stade (ne pas réutiliser les volumes US du master EN), à renseigner avant publication. Signalé à l'Agent 3 comme page de conversion volontairement faible en mots-clés.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Challenge 30 jours : intégrez Claude dans votre entreprise *(58 car. écrits main ; rend ~70 avec le suffixe `\| AI Makers` du template — au-dessus du cap 60)* | Challenge 30 jours : déployez un agent Claude *(45 ; rend ~57 avec le suffixe `\| AI Makers` — marque non écrite à la main)* |
| Meta description (140–160 car.) | Un parcours gratuit de 30 jours par email pour passer de zéro à un premier agent Claude en production. Une étape par semaine, sur vos vrais documents et vos vrais process. Par AI Makers, Partenaire Anthropic. *(207 — au-dessus du budget)* | Un parcours gratuit de 30 jours par email pour passer de zéro à un premier agent Claude en production. Une étape par semaine, sur vos documents. Par AI Makers. *(159)* |
| H1 | 30 jours pour intégrer Claude dans votre entreprise. | 30 jours pour intégrer Claude dans votre entreprise. |
| URL slug | /challenge-30-jours | /challenge-30-jours |

## 4. Sections & contenu
Copy : inline `src/app/challenge-30-jours/page.tsx` (394 lignes). Badge : « Par AI Makers, Partenaire Anthropic ». Séquence email opérée via n8n — la page ne promet jamais d'accompagnement humain. Copy repris verbatim du live.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge partenaire, H1, intro
- **Live (FR) :** promesse challenge gratuit.
- **Proposé (FR) :**
  - **badge 1 :** `Challenge gratuit`
  - **badge 2 :** `Par AI Makers, Partenaire Anthropic` *(voir §9 — [to validate])*
  - **H1 :** `30 jours pour intégrer Claude dans votre entreprise.`
  - **intro :** `Un parcours guidé par email, une étape par semaine. Au bout : vos premiers usages en production, pas une liste de prompts.`
- **Rationale :** Copy live conservé mot pour mot. L'intro promet exactement ce que la séquence délivre (usages en production) et désamorce l'objection « juste des prompts ».

### 4.2 — « Inscrivez votre entreprise » (formulaire)
- **Composant :** `page.tsx` (formulaire, `ChallengeForm`)
- **Champs :** titre, sous-texte, champs email/entreprise
- **Live (FR) :** bloc d'inscription.
- **Proposé (FR) :**
  - **titre :** `Inscrivez votre entreprise`
  - **sous-texte :** `Le premier email arrive tout de suite. Semaine 1 : Claude configuré pour votre contexte.`
  - **libellés de champs :** `Email professionnel` · `Entreprise` — **bouton :** `Rejoindre le challenge`
  - **Mention RGPD/consentement (à ajouter) :** `Nous utilisons vos coordonnées uniquement pour vous envoyer le parcours de 30 jours et des ressources associées. Désinscription en un clic dans chaque email.`
- **Rationale :** Copy live conservé. Point de capture de données → finalité explicite + ligne de désinscription. « Le premier email arrive tout de suite » pose le bénéfice immédiat.

### 4.3 — « 4 semaines, 4 paliers, 4 livrables »
- **Composant :** `page.tsx`
- **Champs :** intro + cartes semaine[4] {number, title, description, deliverable}
- **Live (FR) :** structure du parcours.
- **Proposé (FR) :**
  - **label de section :** `/ Le parcours`
  - **title :** `4 semaines, 4 paliers, 4 livrables`
  - **intro :** `Chaque semaine, un email avec les étapes à dérouler et un livrable concret à la fin. Pas de théorie : à la fin du mois, quelque chose tourne chez vous.`
  - **Semaine 1 — Claude configuré pour votre contexte :** `Votre entreprise, votre vocabulaire, vos documents de référence. Claude arrête de répondre comme à tout le monde et commence à répondre comme chez vous.` — **Livrable :** `Votre espace Claude opérationnel, adopté par 2 à 3 personnes clés.`
  - **Semaine 2 — Vos 3 premiers cas d'usage quotidiens :** `Rédaction, synthèse, analyse : sur vos vrais documents, pas sur des exemples génériques. Vous identifiez ce qui fait gagner du temps dès cette semaine.` — **Livrable :** `3 workflows répétables, documentés.`
  - **Semaine 3 — Votre premier agent :** `Un process répétitif confié de bout en bout à Claude, avec les Projets et les intégrations. Ce n'est plus un assistant qu'on sollicite : c'est une tâche qui se fait.` — **Livrable :** `Un agent qui tourne sur un vrai process.`
  - **Semaine 4 — Mesure et suite :** `Combien de temps gagné, par qui, sur quoi. Vous chiffrez ce que les 3 premières semaines ont produit, et vous savez quoi construire ensuite.` — **Livrable :** `Votre bilan chiffré et les 3 prochains cas d'usage priorisés.`
- **Rationale :** Copy live conservé. Semaines gardées au 1:1 avec leurs livrables — la promesse, ce sont les livrables, et ils sont concrets. « Claude configuré pour votre contexte » colle au bénéfice immédiat du premier email.

### 4.4 — « On vous doit une réponse honnête. »
- **Composant :** `page.tsx` (section dark)
- **Champs :** copy pourquoi-c'est-gratuit / honnêteté
- **Live (FR) :** cadrage des attentes.
- **Proposé (FR) :**
  - **label de section :** `/ Pourquoi c'est gratuit`
  - **title :** `On vous doit une réponse honnête.`
  - **para 1 :** `Une partie des participants voudra aller plus vite ou plus loin : c'est là qu'on intervient. Les autres auront intégré Claude par eux-mêmes, et c'est très bien aussi.`
  - **para 2 :** `Pas de call obligatoire, pas de relance agressive. Le parcours est complet en lui-même : si vous le suivez, vous arrivez au bout avec un agent en production, avec ou sans nous.`
  - **pull-quote :** `C'est notre meilleure démonstration : vous voyez notre méthode avant de payer quoi que ce soit.`
- **Rationale :** Copy live conservé. La section honnêteté est l'ancre de confiance de la page et son meilleur actif anti-slop — l'aveu que la moitié de l'audience n'achètera pas est gardé tel quel. Pas de clôture réassurante ajoutée.

### 4.5 — « Ce challenge est fait pour vous. Ou pas. »
- **Composant :** `page.tsx`
- **Champs :** listes fit / anti-fit
- **Live (FR) :** qualification.
- **Proposé (FR) :**
  - **label de section :** `/ Pour qui`
  - **title :** `Ce challenge est fait pour vous. Ou pas.`
  - **Pour vous si :**
    - `Dirigeants de PME et ETI qui veulent des usages concrets, pas un projet informatique`
    - `Équipes qui ont testé ChatGPT ou Claude sans que rien ne change dans leurs process`
    - `Entreprises qui veulent avancer par elles-mêmes, à leur rythme, avec un cadre`
  - **Pas pour vous si :**
    - `Ceux qui cherchent une démo de plus, sans intention d'appliquer`
    - `Ceux qui attendent un accompagnement humain : ce parcours est guidé par email, pas par un consultant`
- **Rationale :** Copy live conservé. Qualification gardée honnête, y compris l'anti-fit qui écarte les chercheurs d'accompagnement — colle à la réalité opérée via n8n pour que la promesse ne déborde pas.

### 4.6 — FAQ
- **Composant :** `shared/faq-accordion.tsx`
- **Champs :** 4 Q/R — voir §5
- **Live (FR) :** temps, plan payant, arrêt, après.
- **Proposé (FR) :** _voir §5._
- **Rationale :** Les quatre objections pratiques d'un inscrit ; réponse d'abord, un fait chacune.

### 4.7 — Final
- **Composant :** `page.tsx`
- **Champs :** titre de clôture + sous-texte + liens secondaires + rappel formulaire
- **Live (FR) :** « Dans 30 jours, votre premier agent Claude tourne. Ou pas. »
- **Proposé (FR) :**
  - **titre :** `Dans 30 jours, votre premier agent Claude tourne. Ou pas.`
  - **sous-texte :** `La différence, c'est de commencer. Le parcours est gratuit, une étape par semaine, et tout ce que vous construisez reste chez vous.`
  - **lien secondaire 1 :** `Vous préférez former vos équipes avec nous ? Formation Maîtriser Claude en entreprise` → /formation-ia-entreprise/maitriser-claude
  - **lien secondaire 2 :** `Vous voulez déléguer le déploiement de bout en bout ? Découvrir la Transformation IA` → /ai-transformation
  - **titre rappel formulaire :** `Rejoindre le challenge` — **sous-texte :** `Gratuit. Un email par semaine, pendant 4 semaines.`
- **Rationale :** Copy live conservé. « Ou pas » gardé — l'honnêteté court jusqu'à la dernière ligne. Durée annoncée à 4 semaines / un email par semaine, cohérente avec le cadrage « 30 jours ».

## 5. FAQ
Bloc FAQ : OUI — `src/components/shared/faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR, live) | Réponse (FR, live) |
|---|---|---|
| 1 | Combien de temps ça demande chaque semaine ? | Comptez 1 à 2 heures par semaine. Chaque email arrive avec des étapes précises à dérouler : vous les appliquez sur vos propres documents et process, au moment qui vous arrange dans la semaine. |
| 2 | Il faut un abonnement Claude payant ? | Un compte Claude suffit pour commencer. Certaines étapes du parcours, comme les Projets ou les intégrations, tirent parti d'un plan payant : les emails vous indiquent précisément à quel moment ça devient utile, et vous décidez. |
| 3 | On peut s'arrêter en cours de route ? | Oui, à tout moment. Chaque email contient un lien de désinscription en un clic. Ce que vous avez mis en place les semaines précédentes reste chez vous et continue de fonctionner. |
| 4 | Et après les 30 jours ? | Vous êtes libre. Vous pouvez continuer seuls avec ce que vous avez construit, ou passer à l'accompagnement AI Makers si vous voulez aller plus vite ou plus loin. Le challenge est utile dans les deux cas. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation Maîtriser Claude en entreprise | /formation-ia-entreprise/maitriser-claude | formation liée (existant) |
| Découvrir la Transformation IA | /ai-transformation | escalade déploiement (existant) |
| Nous contacter | /contact | escalade |

## 7. CTA
- **CTA principal :** formulaire d'inscription au challenge (email). Libellé : **`Rejoindre le challenge`** (titre : `Inscrivez votre entreprise`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le Challenge 30 jours est un parcours email gratuit d'AI Makers qui mène une entreprise de zéro à son premier agent Claude en production en quatre semaines, une étape par semaine : la Semaine 1 configure Claude pour votre contexte, la Semaine 2 construit trois cas d'usage quotidiens, la Semaine 3 déploie un premier agent, et la Semaine 4 mesure les résultats. Le parcours est 100 % autonome — guidé par email, pas par un consultant — et tout ce que vous construisez reste chez vous. Environ 1 à 2 heures par semaine ; désinscription en un clic à tout moment.`
- **Entrée llms.txt (FR) :** `[Challenge 30 jours](https://aimakers.fr/challenge-30-jours) : le parcours email gratuit de 30 jours d'AI Makers pour déployer votre premier agent Claude en production, une étape par semaine, sur vos propres documents.`

## 9. Faits utilisés
| Fait / chiffre | Source | Statut |
|---|---|---|
| 4 semaines / un email par semaine / 4 livrables | copy de page | canonique |
| 1 à 2 heures par semaine ; désinscription en un clic ; compte vs plan payant | copy de page (FAQ) | canonique |
| Séquence email via n8n, aucun accompagnement humain promis | commentaire d'en-tête page.tsx | canonique |
| Badge « Par AI Makers, Partenaire Anthropic » | copy de page | **[to validate for EN use → FR]** ; confirmer le libellé exact du statut partenaire avant publication |
| Références Projets / intégrations Claude | copy de page (fonctionnalités produit Anthropic) | canonique |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` ; corrections d'audit conservées telles quelles :

- **Aucune édition de copy requise.** Le master EN ne signalait aucune correction sur le corps du texte ; tout le copy live est conservé mot pour mot.
- **Title au-dessus du cap 60 (correction FR) :** le Title live « Challenge 30 jours : intégrez Claude dans votre entreprise » fait 58 caractères écrits main et rend ~70 avec le suffixe `| AI Makers` du template — au-dessus du cap 60. Le master EN l'avait laissé « à surveiller si un cap dur est appliqué » ; le FR étant plus long, le budget est ici dépassé, donc Title trimé à `Challenge 30 jours : déployez un agent Claude` (45 car., rend ~57). Meta description live (207 car.) également trimée à 159 pour tenir le budget ≤160. H1 et corps inchangés.
- **CONSERVÉ (protégé) :** les négations de cadrage honnête — « pas une liste de prompts », « guidé par email, pas par un consultant », « pas un projet informatique », les tags honnêtes « Ou pas » (×2), et l'aveu contre son propre intérêt « Les autres auront intégré Claude par eux-mêmes, et c'est très bien aussi. » Ce sont les variantes déflationnistes/de cadrage de la liste KEEP du corpus (`ai-slop-audit-report/_cross-page-findings.md §1`), pas le tell inflationniste — les supprimer perdrait l'actif de confiance de la page. Le badge « Partenaire Anthropic » garde son tag `[to validate]` existant.
- **Décisions dev / propriétaire (hors copy) :** confirmer le libellé exact « Partenaire Anthropic » à l'échelle du site (ou l'adoucir) ; champ de consentement RGPD dans `ChallengeForm` (TICKET-GDPR-CONSENT) ; `inLanguage` du JSON-LD FAQPage → fr (déjà FR en live ; vérifier le tag).

## Reconciliation applied
Réconciliation des deux audits FR (SEO 83/100 + anti-slop **Clean, net -7** — une des pages les plus humaines du corpus).
- **Titre :** déjà trimé (`Challenge 30 jours : déployez un agent Claude`, 45 car. → ~57 rendus), sous le cap 60. Aucun suffixe manuel. H1 long conservé.
- **Meta :** déjà trimée à 159 car. (live 207 hors budget).
- **Tags :** badge « Partenaire Anthropic » sous `[to validate]` (décision site-wide A6). Aucun `[à valider]` à normaliser.
- **« X, pas Y » — DÉFLATIONNISTE, CONSERVÉ :** « pas une liste de prompts », « guidé par email, pas par un consultant », « pas un projet informatique », les deux « Ou pas », l'aveu contre intérêt « Les autres auront intégré Claude par eux-mêmes, et c'est très bien aussi. » Ce sont des négations de cadrage honnête (KEEP-list), pas le tell inflationniste — conservées intégralement.
- **Mots-clés :** page de conversion à pression minimale (défi ia 30 jours / 30 jours ia ≈ 0) — décision correcte, TBD conservé, rien à corriger.
- **Décision propriétaire en attente :** statut « Partenaire Anthropic » (A6) ; microcopy RGPD sur ChallengeForm (TICKET-GDPR-CONSENT, hors périmètre édition).
