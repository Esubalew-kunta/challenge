# Audit GEO gratuit (/outils/audit-geo-gratuit) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/outils/audit-geo-gratuit/page.tsx` et `src/components/shared/geo-audit-form.tsx` (repris mot pour mot). On réutilise le copy FR live et on n'applique que les corrections d'audit pertinentes pour le FR (budgets Title/Meta, RGPD laissé dev).

## 1. En-tête de page
- **Route (FR, live) :** /outils/audit-geo-gratuit
- **Objet :** Aimant à leads — un mini-audit préparé par un humain, sous 48h, de la façon dont les moteurs de réponse IA décrivent l'entreprise face à ses concurrents. Alimente l'offre payante /seo-geo.
- **Rôle SEO :** aimant-outil alimentant /seo-geo
- **Étape funnel :** capture TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | audit geo | 250 (commercial) | — | Ahrefs FR, 2026-07 |
| Secondaire | visibilité ia | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs, 2026-07 |
| Secondaire | audit visibilité ia / generative engine optimization | 1 100 (« GEO ») | KD 21 | Ahrefs FR, 2026-07 |

> **Décision mot-clé :** en FR l'intention gagnable est **« audit geo »** (le slug live est déjà `audit-geo-gratuit`) et **« visibilité ia »**, « GEO » / « generative engine optimization » restant le terme de méthode descriptif, pas la tête de requête. Contrairement à l'anglais où « ai visibility **checker** » laisse croire à un scanner automatique instantané, le terme FR « **audit** » implique déjà un livrable préparé — aucune sur-promesse à corriger : le copy assume que l'audit est **préparé par un humain, sous 48h**. Volumes/difficultés FR à confirmer côté Ahrefs FR (`TBD`) — ne pas fabriquer de chiffres.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Audit GEO gratuit : que disent les IA de votre entreprise ? *(~59 car. hors suffixe — **dépasse le budget**, rend ~71 avec `\| AI Makers`)* | Audit GEO gratuit : que disent les IA de vous ? *(47 ; rend 59 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | ChatGPT, Gemini et Perplexity répondent déjà aux questions de vos clients. Cet audit gratuit vous montre ce qu'ils disent de vous et de vos concurrents. Sous 48h, préparé par un humain. *(~185 car. — **dépasse le budget**)* | ChatGPT, Gemini et Perplexity répondent déjà à vos clients. Cet audit gratuit montre ce qu'ils disent de vous et de vos concurrents. Sous 48h, par un humain. *(~157 car., dans le budget)* |
| H1 | Que disent les IA de votre entreprise ? | Que disent les IA de votre entreprise ? |
| URL slug | /outils/audit-geo-gratuit | /outils/audit-geo-gratuit |

## 4. Sections & contenu
Copy : inline `src/app/outils/audit-geo-gratuit/page.tsx` ; formulaire `src/components/shared/geo-audit-form.tsx` (email + entreprise → /api/lead, source « geo-audit »). JSON-LD FAQPage via `faq-schema.ts`. FR live repris verbatim.

### 4.1 — Hero + formulaire
- **Composant :** `page.tsx` + `geo-audit-form.tsx`
- **Champs :** badge, H1, intro, carte formulaire (titre + sous-titre), champs (email pro + entreprise), submit + microcopy, état de succès
- **Live (FR) :** Accroche curiosité — ce que les IA disent de vous.
- **Proposé (FR) :**
  - **badge :** `Audit gratuit`
  - **H1 :** `Que disent les IA de votre entreprise ?`
  - **intro (answer-first) :** `Vos futurs clients posent leurs questions à ChatGPT, Gemini et Perplexity. Cet audit gratuit vous montre ce qu'ils entendent en retour : sur vous, et sur vos concurrents.`
  - **titre carte formulaire :** `Recevez votre audit personnalisé` — **sous-titre :** `Sous 48h, dans votre boîte mail.`
  - **champs formulaire :** `Votre email professionnel` · `Nom de votre entreprise` — **submit :** `Recevoir mon audit IA gratuit` — **microcopy :** `Gratuit. Sous 48h. Préparé par un humain, pas par un robot.`
  - **état de succès :** `C'est noté.` / `Votre audit arrive sous 48h dans votre boîte mail.`
- **Rationale :** Le paragraphe answer-first nomme les trois moteurs pour la citation GEO. Il colle aux champs réels du formulaire (email pro + entreprise) et à la vraie promesse de livraison (humain, 48h) vérifiée dans `geo-audit-form.tsx`. « Préparé par un humain, pas par un robot » n'induit pas un scanner instantané.

### 4.2 — « Ce que vous recevez »
- **Composant :** `page.tsx` (deliverables[3])
- **Champs :** 3 cartes de livrables (eyebrow `/ Le contenu de l'audit`)
- **Live (FR) :** Détail des livrables.
- **Proposé (FR) :**
  - **Carte 1 — Ce que chaque moteur répond sur votre entreprise :** `On pose aux moteurs les questions que vos clients posent, et on vous restitue leurs réponses, mot pour mot.` *(affiche les logos ChatGPT · Gemini · Perplexity)*
  - **Carte 2 — Où vous apparaissez (et où vos concurrents vous remplacent) :** `Les requêtes où vous êtes cité, celles où vous êtes absent, et qui prend votre place dans les réponses.`
  - **Carte 3 — Les 3 actions prioritaires pour être cité davantage :** `Des recommandations concrètes et actionnables, adaptées à votre site et à votre secteur. Pas de théorie.`
- **Rationale :** Livrables concrets ; chaque carte nomme une sortie précise (réponses mot pour mot, écart concurrentiel, actions priorisées). Test « ligne creuse supprimable » réussi.

### 4.3 — « Comment ça marche »
- **Composant :** `page.tsx` (steps[3])
- **Champs :** 3 étapes (eyebrow `/ Le process`)
- **Live (FR) :** Transparence du process (préparé par un humain).
- **Proposé (FR) :**
  - **Étape 01 — Vous laissez votre email et votre entreprise :** `30 secondes. Pas de questionnaire à rallonge, pas de call obligatoire.`
  - **Étape 02 — On interroge les moteurs sur les requêtes de votre métier :** `ChatGPT, Gemini et Perplexity, testés sur les questions que vos clients leur posent vraiment.`
  - **Étape 03 — Vous recevez l'audit sous 48h, préparé par notre équipe :** `Un document lisible, avec les réponses des moteurs et vos 3 actions prioritaires. Par un humain, pas par un robot.`
- **Rationale :** La transparence sur la méthode est le levier de confiance, et c'est littéralement ce qui se passe. Renforce « humain, 48h » pour ne jamais sur-promettre un outil instantané.

### 4.4 — FAQ
- **Composant :** `shared/faq-accordion.tsx` — voir §5

### 4.5 — Pour aller plus loin
- **Composant :** `shared/related-content.tsx`
- **Proposé (FR) :**
  - `Notre offre SEO et GEO` → /seo-geo — `Être cité par ChatGPT, Perplexity et les AI Overviews : la méthode complète.`
  - `Diagnostic IA en 2 minutes` → /diagnostic-ia — `Votre score de maturité IA et un plan d'action personnalisé.`
  - `Meilleures agences IA en France` → /blog/meilleures-agences-ia-france — `Le comparatif honnête des cabinets et agences IA.`

## 5. FAQ
Bloc FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR, live) | Réponse (FR, live) |
|---|---|---|
| 1 | C'est vraiment gratuit ? | Oui, sans condition. Pas de carte bancaire, pas d'engagement, pas de call imposé pour recevoir l'audit. |
| 2 | Pourquoi gratuit ? | C'est notre meilleur moyen de vous montrer notre niveau en GEO. Si l'audit vous est utile, vous saurez à qui parler le jour où vous voudrez aller plus loin. Sinon, vous aurez quand même une photo claire de votre visibilité IA. |
| 3 | Et ensuite ? | Libre à vous. L'audit est à vous : vous pouvez appliquer les recommandations en interne, les confier à votre agence, ou en discuter avec nous. Aucune relance agressive. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Découvrir notre offre SEO et GEO | /seo-geo | offre payante |
| Diagnostic IA en 2 minutes | /diagnostic-ia | outil connexe |
| Meilleures agences IA en France | /blog/meilleures-agences-ia-france | connexe |

## 7. CTA
- **CTA principal :** Formulaire d'audit GEO (email pro + entreprise) → audit sous 48h. Bouton : **`Recevoir mon audit IA gratuit`**
- **Note RGPD :** le formulaire capture un email pro + un nom d'entreprise et poste vers `/api/lead` (source « geo-audit »). Donnée personnelle — nécessite une ligne de consentement/lien vers la politique de confidentialité près du submit (« On ne s'en sert que pour vous envoyer votre audit — voir notre politique de confidentialité ») + gestion rétention/DPA standard. `[to validate placement]` de la ligne exacte de consentement.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `L'audit GEO gratuit d'AI Makers montre comment les moteurs de réponse IA — ChatGPT, Gemini et Perplexity — décrivent une entreprise et ses concurrents, et liste trois actions prioritaires pour être cité davantage. Contrairement à un scanner automatique instantané, il est préparé par un humain de l'équipe et livré sous 48h, à partir d'un simple email professionnel et du nom de l'entreprise. C'est la porte d'entrée de l'offre SEO & GEO payante d'AI Makers.`
- **Entrée llms.txt (FR) :** `[Audit GEO gratuit](https://aimakers.fr/outils/audit-geo-gratuit) : ce que ChatGPT, Gemini et Perplexity disent de votre entreprise face à vos concurrents — préparé par un humain sous 48h.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Livraison sous 48h, préparé par un humain | copy page + microcopy/succès de geo-audit-form.tsx (vérifié) |
| Le formulaire capture email pro + entreprise ; adresses grand public bloquées | geo-audit-form.tsx + schemas/lead.ts source « geo-audit » (vérifié) — capture de donnée RGPD |
| Moteurs nommés (ChatGPT, Gemini, Perplexity) | copy page FR (live) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` + `geo-audit-form.tsx` ; corrections d'audit appliquées au FR :

- **Title hors budget (corrigé) :** le Title live (~59 car. hors suffixe, ~71 rendu) dépasse le budget ≤60 incl. suffixe. Trimé à `Audit GEO gratuit : que disent les IA de vous ?` (47 car. ; rend 59 avec le suffixe `| AI Makers` — marque non écrite à la main). Conserve « Audit GEO gratuit » (aligné slug + terme de marque GEO) et l'accroche « que disent les IA ».
- **Meta hors budget (corrigée) :** la Meta live (~185 car.) dépasse ≤160 ; trimée à ~157 car. en conservant ChatGPT/Gemini/Perplexity, « vous et vos concurrents » et « Sous 48h, par un humain ».
- **CONSERVÉ (protégé — présence de méthode/honnêteté) :** les négations déflationnistes « préparé par un humain, pas par un robot », « mot pour mot », « pas de théorie », « Contrairement à un scanner automatique instantané » (chaque clause retire une sur-promesse réelle) ; les aveux « Aucune relance agressive » / « vous aurez quand même une photo claire ». Le cadrage « humain, 48h » est préservé partout pour que le mot-clé ne sur-promette jamais.
- **Laissé pour la dev / le propriétaire (hors copy) :** ligne de consentement + lien `/confidentialite` sur `geo-audit-form.tsx` (TICKET-GDPR-CONSENT, lacune FR live) — tag `[to validate placement]` conservé ; pas de route EN (le slug FR live /outils/audit-geo-gratuit reste).

## Reconciliation applied
Réconciliation des deux audits FR (SEO 86/100 + anti-slop **Clean, net -4** — aimant à leads honnête, méthode = ce qui se passe réellement).
- **Titre :** déjà trimé (`Audit GEO gratuit : que disent les IA de vous ?`, 47 car. → 59 rendus), aucun suffixe manuel.
- **Meta :** déjà trimée à ~157 car. (live ~185).
- **Mots-clés FR :** `audit geo` = **250 (commercial, intention exacte)** renseigné — primaire confirmé, slug déjà aligné ; `generative engine optimization` = **1 100 / KD 21** (terme de méthode descriptif, pas la tête de requête).
- **Tags :** `[à valider placement]` → **`[to validate placement]`** (normalisation point 8, grep fiable). Tag conservé, non retiré.
- **PROTÉGÉ (méthode/transparence) :** « préparé par un humain, pas par un robot », « Contrairement à un scanner automatique instantané », « mot pour mot », « Aucune relance agressive », « Sinon, vous aurez quand même une photo claire ». Cadrage « humain / 48h » préservé partout pour ne jamais sur-promettre.
- **Décision propriétaire en attente :** microcopy RGPD + lien `/confidentialite` sur `geo-audit-form.tsx` (TICKET-GDPR-CONSENT) — bloquant compliance côté dev.
