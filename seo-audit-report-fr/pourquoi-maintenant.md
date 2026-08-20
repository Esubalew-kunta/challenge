# Pourquoi maintenant (/pourquoi-maintenant)

**Source audité :** `[FR] website-content/pourquoi-maintenant/pourquoi-maintenant.md`
**Comparé à :** `src/lib/offer-pages/manifeste.ts`, `src/app/pourquoi-maintenant/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR (fr, France)
**Voir aussi :** `_cross-page-findings.md` (double-suffixe de marque, conflit source Bpifrance)

## Score : 82 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 18 / 25 |
| On-Page SEO | 17 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Corriger avant promotion. Page manifeste solide, assumée, richement sourcée — un vrai actif GEO. Deux problèmes bloquent une publication propre : (1) le title live génère un **double suffixe de marque** (`| AI Makers | AI Makers`), un bug d'indexation cosmétique mais réel ; (2) le **conflit chiffre/source Bpifrance** (55 %/17 % cités vs slug source « 31 % ») doit être réconcilié — le master l'a déjà tagué `[to validate]`, ce qui est la bonne posture, mais le copy LIVE ne porte pas encore ce tag. Pas de fabrication. Publier une fois ces deux points tranchés.

## Findings

### 🟠 High

**1. Double suffixe de marque dans le title (live).**
`src/lib/offer-pages/manifeste.ts:11` : `title: "Pourquoi maintenant | AI Makers"`. Ce title est passé en chaîne simple à `constructMetadata` (`src/lib/metadata.ts:19`, `title` sans `absolute`), et `src/app/layout.tsx:15` applique le template `"%s | AI Makers"`. Rendu réel : **`Pourquoi maintenant | AI Makers | AI Makers`** (43 car., suffixe dupliqué). Pourquoi ça compte : title dédoublé = perte de clarté SERP + dilution de marque, et casse le budget de caractères. Fix : retirer le `| AI Makers` écrit à la main → `title: "Pourquoi maintenant"` (rend `Pourquoi maintenant | AI Makers`, 34 car.). C'est exactement ce que propose le master §Localisation ; le master est correct, mais le code LIVE ne l'a pas encore appliqué. **Pattern site-wide — voir cross-page.**

**2. Conflit chiffre/source Bpifrance non résolu dans le copy live.**
`manifeste.ts:68` (LIVE) : « En France, 55 % des TPE-PME utilisent l'IA générative, 17 % régulièrement (Bpifrance). » Or la source citée en pied de page (`manifeste.ts:113-114`) pointe vers `lelab.bpifrance.fr/Etudes/31-des-tpe-et-pme-utilisent-l-ia-generative` — dont le slug annonce **31 %**, pas 55 %. Le master a raison de le taguer `[to validate]` (§4.5, §9) — posture correcte, **à confirmer/résoudre** avant publication, pas re-signalé comme découverte. Deux problèmes distincts à trancher : (a) le chiffre affiché (55 %/17 %) ne correspond pas au titre de l'étude Bpifrance liée (31 %) ; (b) le master suggère que 55 %/17 % pourrait venir de l'INSEE (source séparée listée `manifeste.ts:117`). Fix : soit corriger le chiffre à 31 % + garder Bpifrance, soit ré-attribuer 55 %/17 % à l'INSEE avec le bon lien. **Money/compliance-adjacent (claim public sourcé) → traiter en priorité.** Note : le tag `[to validate]` existe dans le MASTER mais PAS dans le copy `manifeste.ts` LIVE — le copy live présente 55 % comme un fait acquis.

### 🟡 Medium

**3. Chiffres illustratifs sans source, présentés au même niveau que les stats sourcées.**
- `manifeste.ts:26` : « GPT-4 coûtait 30 $ par million de tokens. Seize mois plus tard, un modèle équivalent en coûtait 0,15. » Chiffre précis, aucune source directe attachée (le master le tague `[to validate]`, §9). Le ÷280 est attribué à Stanford, mais le point de départ 30 $→0,15 $ n'a pas de citation propre.
- `manifeste.ts:52` : « analyser un document de dix pages coûte environ trois centimes d'API » — estimation illustrative, aucune source (master §9 : `[to validate]`). Le « environ » atténue correctement. Pourquoi ça compte : sur une page dont TOUTE la valeur est la citabilité sourcée, deux chiffres non sourcés au milieu de six chiffres sourcés affaiblissent la crédibilité GEO. Fix : soit sourcer, soit reformuler en fourchette explicitement illustrative (« de l'ordre de quelques centimes »). Déjà tracké — confirmer résolu.

**4. Liens sources à revérifier en live.**
`manifeste.ts:97-128` : 7 liens externes (a16z, Stanford, McKinsey, Bpifrance, INSEE, Gartner, Medius). Le master (§9) note « vérifier le lien en live » pour chacun. Je n'ai pas résolu les URLs (hors périmètre code) ; le lien Bpifrance est le seul dont le slug contredit le texte (voir finding 2). Fix : QA manuelle des 7 hrefs avant publication.

### 🟢 Low

**5. Anchor `/#methode` (CTA secondaire).** `manifeste.ts:94`. Cible une ancre `#methode` sur la home. Décision propriétaire (master §9) ; vérifier que l'ancre existe sur `/` en live.

## Ce que la page fait de bien (vérifié)
- **Answer-first GEO impeccable** (master §8) : paragraphe autonome et citable, chiffres + sources en ligne. Vraie valeur pour AI Overviews / Perplexity.
- **Point de vue assumé, non-générique** — « Les gagnants redessinent leurs process et mesurent. Les perdants achètent des licences et attendent. » Signal E-E-A-T fort pour un cabinet IA (anti-copy-IA-fade).
- **Schema Article implémenté et valide** (`page.tsx:31-51`), `inLanguage: fr-FR`, publisher/author = Organization. Correspond au type de page.
- **Route dans le sitemap** (`sitemap.ts:36`). Canonical propre via `constructMetadata`.
- **Meta description** : 135 car. (mesuré), dans le budget 140-160 (légèrement court mais valide), mot-clé « coût de l'intelligence » + next step implicite.
- **Décision mot-clé correcte** : page manifeste sans cible commerciale — ne pas forcer de tête de requête est le bon choix. Notée sur la citabilité, pas la couverture.
- **Cohérence figures canoniques** : « 2 semaines d'audit / ≥3 cas d'usage / production sous 30 jours / garanti » aligné avec `llms.txt` et le modèle de garantie.

## Priorité de correction
1. **🟠 Retirer le suffixe de marque manuel** dans `manifeste.ts:11` → `"Pourquoi maintenant"` (effort trivial, corrige un bug live). Traiter comme ticket ingénierie global (voir cross-page).
2. **🟠 Réconcilier Bpifrance 55 %/17 % vs 31 %** — décision propriétaire sur le chiffre ET la source ; puis porter le tag `[to validate]` dans le copy live tant que non résolu.
3. **🟡 Sourcer ou requalifier** les deux chiffres illustratifs (GPT-4 30 $→0,15 $ ; 3 centimes/doc).
4. **🟡 QA des 7 liens sources** en live.

## Questions ouvertes (décision client)
- Le chiffre France est-il **31 % (Bpifrance)** ou **55 %/17 % (INSEE)** ? Fournir la source exacte et corriger l'attribution.
- La ligne de prix GPT-4 « 30 $ → 0,15 $ / M tokens sur 16 mois » a-t-elle une source publique citable, ou reste-t-elle illustrative ?

## Candidats cross-page
- **Double suffixe de marque** : pattern probable sur toute page dont le champ `title` (dans `*.ts`/`page.tsx`) contient déjà `| AI Makers` alors que le template `layout.tsx` l'ajoute. À grep sur l'ensemble du batch.
- **Tags `[to validate]` présents dans les masters mais absents du copy live** : vérifier que chaque tag d'audit est bien porté jusqu'au code avant publication.
