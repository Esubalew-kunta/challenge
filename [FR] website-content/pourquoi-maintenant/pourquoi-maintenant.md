# Pourquoi maintenant (/pourquoi-maintenant) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/lib/offer-pages/manifeste.ts` (validé mot pour mot). On conserve chaque affirmation, source et chiffre à l'identique et on n'applique que les corrections d'audit (suffixe de marque, tag `[to validate]` Bpifrance).

## 1. En-tête de page
- **Route (FR, live) :** /pourquoi-maintenant
- **Objet :** Manifeste sourcé sur l'effondrement du coût de l'IA et la fenêtre d'action. Actif éditorial de confiance.
- **Rôle SEO :** confiance / actif de citation GEO (chiffres sourcés). Pas une page mot-clé — une prise de position destinée à être citée.
- **Étape funnel :** TOFU/MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| — | (aucune cible mot-clé — page argumentaire/manifeste) | minimal | — | Ahrefs, 2026-07 |

> **Décision mot-clé — pression minimale par design.** Page d'opinion, pas d'intention commerciale. Son rôle : poser une thèse (« le coût de l'intelligence s'effondre ; la fenêtre, c'est maintenant ») et l'étayer de chiffres réels et cités pour que les moteurs de réponse IA et les journalistes la citent. Aucune tête de requête commerciale à cibler ; en forcer une diluerait le point de vue. Sa valeur SEO est la citation GEO des stats sourcées (÷280 coût d'inférence, LLMflation, 88 %→39 % adoption vs impact) plus l'équité de maillage vers /contact. Signalé à l'Agent 3 : noter sur la citabilité, pas sur la couverture mots-clés.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Pourquoi maintenant \| AI Makers | Pourquoi maintenant *(20 ; rend ~35 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | Le coût de l'intelligence s'effondre : divisé par 280 en deux ans. Ce que ça change pour votre entreprise, chiffres sourcés à l'appui. | Inchangée — *(135 car., dans le budget)* |
| H1 | Pourquoi maintenant. | Pourquoi maintenant. |
| URL slug | /pourquoi-maintenant | /pourquoi-maintenant |

## 4. Sections & contenu
Source du copy : `src/lib/offer-pages/manifeste.ts` (blocs 1-5, respirations, sources). Page : `src/app/pourquoi-maintenant/page.tsx`. Copy validé mot pour mot ; on conserve chaque claim, source et chiffre à l'identique.

### 4.1 — Hero
- **Composant :** `manifeste.ts:manifesteHero`
- **Champs :** title, subtitle
- **Proposé (FR) :**
  - **title :** `Pourquoi maintenant.`
  - **subtitle :** `Le coût de l'intelligence s'effondre. Ce document explique ce que ça change pour votre entreprise, chiffres sourcés à l'appui.`
- **Rationale :** Ouverture plate et déclarative. Pas d'adjectif, pas de hype — le chiffre fait le travail.

### 4.2 — Bloc 1 — le coût de l'intelligence
- **Composant :** `manifesteBloc1`
- **Champs :** index, title, paragraph, stats[3]
- **Proposé (FR) :**
  - **index :** `01`
  - **title :** `L'intelligence coûte 280 fois moins cher qu'il y a deux ans.`
  - **paragraph :** `En mars 2023, GPT-4 coûtait 30 $ par million de tokens. Seize mois plus tard, un modèle équivalent en coûtait 0,15. Le Stanford AI Index mesure une division par 280 du coût d'inférence en deux ans. a16z l'a nommée LLMflation : à performance égale, le prix est divisé par dix chaque année.`
  - **stats :** `÷280 — coût d'inférence en 2 ans (Stanford AI Index)` · `÷10 par an — à performance égale (a16z)` · `4 % → 72 % — réussite sur des tâches réelles d'ingénierie en un an (SWE-bench)`
- **Rationale :** La stat d'ancrage et la ligne la plus citable de la page. Les trois chiffres gardent leur source nommée en ligne — c'est le payload GEO.

### 4.3 — Bloc 2 — les process deviennent la variable
- **Composant :** `manifesteBloc2`
- **Champs :** index, title, paragraphs
- **Proposé (FR) :**
  - **index :** `02`
  - **title :** `Quand l'intelligence ne coûte plus rien, vos process deviennent la variable.`
  - **para 1 :** `Chaque process qui repose sur un humain qui lit, décide et recopie peut être redessiné. Aux tarifs actuels, analyser un document de dix pages coûte environ trois centimes d'API. Une facture traitée à la main coûte 12,88 $ ; automatisée, 2,78 $ (Ardent Partners).`
  - **para 2 :** `La question n'est plus combien coûte l'IA. C'est combien coûte chaque mois où vos process restent manuels.`
- **Rationale :** Le recadrage est le pivot de l'argument ; chiffres facture d'Ardent Partners conservés verbatim avec citation.

### 4.4 — Respiration 1
- **Composant :** `manifesteRespiration1`
- **Champs :** value, label
- **Proposé (FR) :**
  - **value :** `12,88 $ → 2,78 $`
  - **label :** `une facture traitée à la main, puis automatisée (Ardent Partners)`
- **Rationale :** Stat de respiration — un chiffre, une source.

### 4.5 — Bloc 3 — adoption vs impact
- **Composant :** `manifesteBloc3`
- **Champs :** index, title, paragraphs
- **Proposé (FR) :**
  - **index :** `03`
  - **title :** `Neuf entreprises sur dix utilisent l'IA. Moins de quatre sur dix en voient l'effet.`
  - **para 1 :** `88 % des organisations utilisent l'IA. 39 % seulement mesurent un impact sur leur résultat (McKinsey, 2025). En France, 55 % des TPE-PME utilisent l'IA générative, 17 % régulièrement (Bpifrance) [to validate — le slug de la source Bpifrance citée indique 31 % ; réconcilier le chiffre/source avant publication]. Et Gartner prédit que plus de 40 % des projets d'agents IA seront annulés d'ici fin 2027 : coûts, valeur floue.`
  - **para 2 :** `La ligne de partage n'est pas la technologie, tout le monde a les mêmes modèles. C'est l'exécution. Les gagnants redessinent leurs process et mesurent. Les perdants achètent des licences et attendent.`
- **Rationale :** Point de vue affirmé (« achètent des licences et attendent » est un jugement, conservé). Chaque chiffre porte sa source. La stat TPE-PME française est attribuée à Bpifrance comme dans le copy live — voir §9 pour le contrôle croisé label/source à valider.

### 4.6 — Respiration 2
- **Composant :** `manifesteRespiration2`
- **Champs :** value, label
- **Proposé (FR) :**
  - **value :** `88 % → 39 %`
  - **label :** `des organisations utilisent l'IA ; 39 % seulement mesurent un impact sur leur résultat (McKinsey, 2025)`
- **Rationale :** Reformule l'écart central du bloc en unité citable autonome.

### 4.7 — Bloc 4 — l'effet cumulatif
- **Composant :** `manifesteBloc4`
- **Champs :** index, title, paragraph, punchline
- **Proposé (FR) :**
  - **index :** `04`
  - **title :** `L'avance se compose. Le retard aussi.`
  - **paragraph :** `Un système en production s'améliore avec chaque donnée traitée : vos playbooks s'affinent, vos équipes montent en compétence, vos données s'accumulent là où vos concurrents n'ont rien. Douze mois d'avance ne se rattrapent pas en achetant le même outil : il faudrait aussi racheter les douze mois d'apprentissage.`
  - **punchline :** `L'année prochaine est la ligne la plus chère de votre plan stratégique.`
- **Rationale :** L'argument cumulatif est le claim le plus distinctif de la page ; punchline conservée en affirmation dure.

### 4.8 — Bloc 5 — CTA
- **Composant :** `manifesteBloc5`
- **Champs :** title, body, ctaPrimary (/contact), ctaSecondary (/#methode)
- **Proposé (FR) :**
  - **title :** `Ce trimestre. Pas dans trois ans.`
  - **body :** `Vous n'avez pas besoin d'un plan à 18 mois pour commencer. Deux semaines d'audit. Minimum trois cas d'usage chiffrés. Premiers systèmes en production sous 30 jours. Garanti par contrat.`
  - **ctaPrimary :** `Réserver mon diagnostic gratuit` → /contact
  - **ctaSecondary :** `Voir notre méthode` → /#methode
- **Rationale :** Clôture sur l'engagement, pas la réassurance — pas de « quelle que soit votre situation ». Les chiffres collent au modèle de garantie.

### 4.9 — Sources
- **Composant :** `manifesteSources`
- **Champs :** 7 références sourcées
- **Proposé (FR) :**
  - **title :** `Sources`
  - **items (labels FR, hrefs inchangés) :**
    - `a16z, LLMflation (novembre 2024)` → https://a16z.com/llmflation-llm-inference-cost/
    - `Stanford AI Index 2025` → https://hai.stanford.edu/ai-index/2025-ai-index-report
    - `McKinsey, The State of AI (novembre 2025)` → https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
    - `Bpifrance Le Lab (décembre 2025)` → https://lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative
    - `INSEE, enquête TIC (2025)` → https://www.insee.fr/fr/statistiques/8616837
    - `Gartner (juin 2025)` → https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
    - `Ardent Partners / Medius` → https://www.medius.com/resources/guides-reports/ardent-partners-accounts-payable-metrics-that-matter/
- **Rationale :** La liste de sources est le moteur de crédibilité et l'actif GEO de la page — hrefs conservés à l'identique. Tous les liens à revérifier en live avant publication (voir §9).

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Réserver mon diagnostic gratuit | /contact | CTA (existant) |
| Voir notre méthode | /#methode | CTA secondaire (existant) |

## 7. CTA
- **CTA principal :** « Réserver mon diagnostic gratuit » → /contact
- **CTA secondaire :** « Voir notre méthode » → /#methode

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le coût de l'inférence IA a été divisé par environ 280 en deux ans (Stanford AI Index), une tendance qu'a16z appelle LLMflation : à performance égale, le prix baisse d'un facteur dix par an. Pourtant, si 88 % des organisations utilisent l'IA, 39 % seulement mesurent un impact sur leur résultat (McKinsey, 2025). AI Makers soutient que l'écart tient à l'exécution, pas à la technologie : les entreprises qui redessinent leurs process et mesurent prennent l'avance, et cette avance se compose — d'où l'urgence de commencer ce trimestre, pas dans trois ans.`
- **Entrée llms.txt (FR) :** `[Pourquoi maintenant](https://aimakers.fr/pourquoi-maintenant) : le manifeste sourcé d'AI Makers sur l'effondrement du coût de l'IA (÷280 en deux ans) et pourquoi la fenêtre pour agir sur les process, c'est maintenant.`

## 9. Faits utilisés
| Fait / chiffre | Source | Statut |
|---|---|---|
| ÷280 coût d'inférence en 2 ans | Stanford AI Index 2025 (cité en page) | cité ; vérifier le lien en live |
| ÷10 / an à performance égale (« LLMflation ») | a16z, nov. 2024 (cité en page) | cité ; vérifier le lien en live |
| GPT-4 30 $ → 0,15 $ par M tokens, 16 mois | copy manifeste.ts | `[to validate]` — chiffre précis, à vérifier contre la source a16z/Stanford |
| 4 % → 72 % sur SWE-bench en un an | SWE-bench (cité en page) | cité ; vérifier le lien en live |
| Facture 12,88 $ → 2,78 $ | Ardent Partners / Medius (cité en page) | cité ; vérifier le lien en live |
| 88 % utilisent l'IA / 39 % mesurent l'impact | McKinsey State of AI, 2025 (cité en page) | cité ; vérifier le lien en live |
| 55 % des TPE-PME FR utilisent l'IA gén., 17 % régulièrement | Bpifrance Le Lab (cité en page) | `[to validate]` — le slug Bpifrance indique « 31 % des TPE-PME » ; réconcilier 55 %/17 % vs 31 % + quelle source (Bpifrance vs INSEE) |
| >40 % des projets d'agents IA annulés d'ici fin 2027 | Gartner, juin 2025 (cité en page) | cité ; vérifier le lien en live |
| 3 centimes d'API pour analyser un document de 10 pages | copy manifeste.ts | `[to validate]` — estimation illustrative, aucune source citée |
| 2 semaines d'audit / ≥3 cas d'usage / production sous 30 jours / garanti | modèle de garantie + site-config | canonique |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `manifeste.ts` ; corrections d'audit conservées telles quelles :

- **Double suffixe de marque :** retiré le `| AI Makers` écrit à la main du champ Title (le template `layout.tsx` l'ajoute une fois). Title = `Pourquoi maintenant`.
- **Conflit Bpifrance 55 %/31 % :** marqueur `[to validate]` visible ajouté en ligne sur le chiffre 55 %/17 % du Bloc 3 pour ne pas le présenter comme un fait acquis. La réconciliation chiffre/source reste une décision propriétaire (Bpifrance 31 % vs 55 %/17 % de l'INSEE).
- **CONSERVÉ (protégé) :** tout le point de vue assumé — « Les gagnants redessinent leurs process et mesurent. Les perdants achètent des licences et attendent. », « L'année prochaine est la ligne la plus chère de votre plan stratégique. », les deux pivots d'argument en parallélisme négatif, le bloc à 7 sources et tous les tags `[to validate]`.
- **Décisions propriétaires (hors copy) :** sourcing du point de prix GPT-4 30 $→0,15 $ + estimation « 3 centimes d'API » ; cible d'ancre `#methode`. Laissés en l'état avec leurs tags existants.

## Reconciliation applied
Réconciliation des deux audits FR (SEO + anti-slop). Page **Clean (net -4)** et actif GEO protégé — aucune réécriture de fond.
- **Titre :** suffixe de marque manuel déjà retiré (Title = `Pourquoi maintenant`, rend ~34 car. avec le suffixe template). Conforme B1. Aucune action supplémentaire.
- **Meta :** 135 car., dans le budget (<160). Inchangée.
- **Tags :** `[to validate]` déjà littéraux (Bpifrance 55 %/17 % vs 31 %, GPT-4 30 $→0,15 $, 3 centimes/doc). Aucune normalisation `[à valider]` nécessaire.
- **Mots-clés :** page manifeste sans cible commerciale — décision « pression minimale » confirmée correcte, aucune correction de volume applicable.
- **PROTÉGÉ (conservé) :** POV assumé (« Les gagnants redessinent… Les perdants achètent des licences et attendent »), les 7 sources nommées, les deux parallélismes négatifs load-bearing, tous les tags `[to validate]`.
- **Décision propriétaire en attente :** réconciliation chiffre/source Bpifrance (31 % vs 55 %/17 % INSEE) ; sourcing GPT-4 30 $→0,15 $ et « 3 centimes/doc » ; QA des 7 liens.
