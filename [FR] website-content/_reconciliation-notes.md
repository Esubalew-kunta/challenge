# Notes de réconciliation — cycle FR

Consolidé depuis les deux audits FR indépendants (`seo-audit-report-fr/` et
`ai-slop-audit-report-fr/`, incl. leurs `_cross-page-findings.md`). Ce fichier
recense ce qui n'est **PAS** une correction de contenu — tickets d'ingénierie
et décisions à trancher avant que le contenu FR puisse être mis en production.
Agent 2 (réconciliation) applique les correctifs de *contenu* dans les masters
FR et laisse les points ci-dessous au propriétaire / à la dev.

Légende : ⛔ bloque la mise en prod · ⚠️ décision requise · 🐞 bug live (à
corriger, indépendant du FR) · 🔎 gate de validation (spécifique à une page).

> Contexte : le site AI Makers est DÉJÀ en français en production. Les masters
> FR sont donc des masters d'**optimisation** de la copie live (dérivés des
> masters EN scellés puis re-localisés). Beaucoup de correctifs de contenu
> peuvent être portés directement dans le code live (`src/lib/*.ts`), à la
> différence de l'anglais qui exige de nouvelles routes.

---

## A. Bugs live à corriger (🐞 / 🔴 — présents en prod aujourd'hui)

1. **🔴 `secteurs.ts` — faux témoignage Groupe Partouche.** La FAQ hôtellerie
   live affirme « le Groupe Partouche… (son témoignage est sur cette page) »
   alors que Partouche est **logo seul** dans `clientLogos` (aucun objet
   `testimonial`). Le master FR corrige (logo seul, clause FAQ retirée) — à
   porter en prod.
2. **🔴 `gouvernance-ia` — échéance AI Act présentée comme acquise.** La page
   live affirme sans réserve que les obligations « à haut risque » sont
   « reportées à décembre 2027 par l'omnibus de juin 2026 ». Date post-cutoff
   et juridiquement mobile ; l'AI Act adopté fixe l'Annexe III au 2 août 2026.
   Le master ajoute `[to validate]` partout → **validation juridique requise**
   avant de porter en prod.
3. **🐞 `/offre` absent de `sitemap.ts`** (staticRoutes) — bug d'indexabilité
   live, 1 ligne.
4. **🐞 Lien interne cassé** — `ai-transformation` pointe vers `/ai-partner`
   (route inexistante) au lieu de `/offre`.
5. **🐞 Double suffixe de marque dans les titres** — le template racine
   applique `%s | AI Makers`, et plusieurs fichiers ré-écrivent le suffixe à
   la main : `ai-os.ts`, `seo-geo.ts`, `manifeste.ts:11`, `playbook-ia/page.tsx:24`,
   `offer-pages/formation.ts:17` + pages légales → rendu « … | AI Makers | AI Makers ».
   Les titres formation ajoutent en plus `| Formation IA en entreprise`
   (triple). La plupart des titres live dépassent 60 caractères une fois le
   suffixe rendu. Les masters proposent des titres corrigés/raccourcis.
6. **🐞 RGPD absent des formulaires de capture** — `geo-audit-form`,
   `ChallengeForm`, la capture email du scanner, et la réservation Cal.com du
   contact postent des données sans mention de consentement / lien vers
   `/confidentialite`.

## B. Tickets d'ingénierie (champs template manquants — ⛔ pour livrer le contenu proposé)

- **⛔ TICKET-FORM-TITLE-TPL** — `generateMetadata` formation code en dur
  `| Formation IA en entreprise` : les titres FR rendent en langue mixte et
  >60. Besoin d'un champ titre propre.
- **⛔ TICKET-FORM-SEO-DESC** — `formation.resume` fait triple emploi (hero +
  meta description + schema Course) : les meta descriptions FR proposées n'ont
  pas de champ où atterrir. Ajouter `seoDescription`.
- **⛔ TICKET-CS-META-TITLE** — le template étude de cas alimente un seul
  `caseStudy.title` vers `<title>` ET `<h1>` : besoin d'un `metaTitle` optionnel.
- **⛔ TICKET-SECTEUR-CTA / -LLMS** — les CTA par secteur et les entrées
  `llms.txt` par secteur sont codés en dur dans `page.tsx` : besoin de champs
  `ctaTitle`/`ctaSubtitle` sur `Secteur` (sinon les 8 secteurs affichent le
  même CTA). L'entrée `llms.txt:40` générique omet médecins + conseil.

## C. Conflits de source de vérité (le site porte deux valeurs — à réconcilier au source)

| Fait | Canonique (à retenir) | Valeur erronée encore en code | Où |
|---|---|---|---|
| Professionnels formés | **+2 500** | 1 250 (brief Notion périmé) | canonique `llms.txt` |
| Nombre de pages playbook | **48** | 43 | `site-config.ts:111` |
| Nombre de secteurs | **8** | 6 | `llms.txt:40`, `playbook-config.ts:169` |
| Titres dirigeants | à réconcilier | `/a-propos` « CEO / Chief of Staff » vs `/equipe` Fondateur/COO/CTO (Walid=CTO) + Person `jobTitle` | pré-existant FR |
| Stat Bpifrance | choisir + sourcer | 55 % vs 31 % (slug source dit 31 %) | `pourquoi-maintenant` |
| Échelle diagnostic | **les deux correctes** | /20 auto-test vs /24 AI Scan — instruments distincts | pas de fix |

## D. Gates de validation par page (🔎 — ne pas publier tant que non levé)

- **🔎 seo-geo + homepage + ai-transformation** — le « +70 % Sage » est un
  `[to validate]` d'un cas `inProgress`/noindex ; c'est **toute** la colonne
  vertébrale de preuve de seo-geo. De plus, le témoignage Sage proposé avait
  une phrase **ajoutée** vs la source `site-config` → **le master FR le
  ramène à la citation exacte** (correctif d'intégrité appliqué). Sign-off
  client requis avant publication.
- **🔎 forward-deployed-engineer** — mur de stats externes (MIT 95 %, Indeed
  +729 %, rémunération 385 K$–1 M$, JV OpenAI 4 Md$) tagué `[to validate —
  source externe]` : chaque source doit résoudre avant publication (sinon
  bascule en fabrication).
- **🔎 « Partenaire Anthropic »** (footer/CTA/transformation/challenge) —
  vérifier le statut de partenariat formel avant usage du badge.
- **🔎 playbook-ia** — mur de stats (88 %/5 %, 700 Md$, 30 %, 95 %, +300
  dirigeants) non sourcé (`[to validate]`) : sourcer ou requalifier avant
  publication ; ne jamais afficher en % brut.
- **🔎 cardio-check-up, delassus** — `status:"draft"`/noindex : conserver
  hors index + entrées llms.txt en attente. Vigilance anonymat : le vrai nom
  (Dr Sana Amraoui) est dans le champ `client` (non rendu) ; « Delassus »
  fuit dans le slug/breadcrumb JSON-LD de delassus — trancher avant ouverture.
- **🔎 contact** — « 100 % de recommandations » non sourcé ; « 9,6/10 » vient
  de `site-config.ts` (pas de `llms.txt`).

## E. Corrections mots-clés FR (Ahrefs France — à porter dans les masters)

- `outil ia` = **700 (France)** — la valeur 1 300 est le volume *global*.
- `formation ia` ≈ **6 900** (pas 8 100) ; `agent ia` ≈ **7 700** ;
  `generative engine optimization` ≈ **1 100** (KD 21, pas 200) ;
  `glossaire ia` ≈ 100 ; `playbook ia` ≈ 10.
- **`creation-publicite-ia`** : la primaire proposée `formation ia créative`
  ≈ **20** en France → pivoter vers `formation ia marketing` (250) /
  `formation midjourney` (300).
- `formation ia marketing` (250) revendiquée en *secondaire* par deux enfants
  → l'attribuer à `creation-publicite-ia`.
- `ia maroc` ≈ 100 au Maroc (pas 150) ; `intelligence artificielle maroc`
  200 (exact).

## F. Conformité (revue, non bloquant mais à signaler)

- Allégations comparatives/superlatives : « les seuls à garantir », « vos
  concurrents n'offrent pas de garanties », « stack de pointe » — à nettoyer
  au regard des règles françaises sur la publicité comparative.
- Facturation SARL marocaine (`ia-maroc`) : vérifier au registre.

---

*Les correctifs de contenu (double suffixe, coupes meta, citation Sage
ramenée à la source, dé-empilage « X, pas Y », variation du closer CTA
secteurs, normalisation `[à valider]`→`[to validate]`, corrections de
chiffres/mots-clés dans la copie) sont appliqués par Agent 2 directement dans
les masters FR et consignés dans la section « ## Reconciliation applied » de
chaque fichier.*
