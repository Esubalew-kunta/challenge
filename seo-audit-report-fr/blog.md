# Blog — hub (/blog)

**Source audité :** `[FR] website-content/blog/blog.md`
**Comparé à :** `src/app/blog/page.tsx`, `src/lib/blog.ts`, `src/content/blog/*.md`, `src/app/sitemap.ts`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 86 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship après corrections mineures. Index de blog propre : posture éditoriale citable (« on publie quand on a quelque chose d'utile à dire »), thin par design mais légitime pour un hub qui route vers ses 8 articles. Seule correction on-page : le title porte un `|` écrit à la main redondant avec le séparateur du template et déborde le budget. Aucune fabrication.

## Findings

### 🟡 Medium

**1. Title live : pipe manuel redondant + hors budget.**
`page.tsx:11` : `title: "Blog | Transformation IA en entreprise, retours terrain"` = **55 car.** Le `|` initial est un séparateur écrit à la main ; le template `layout.tsx:15` ajoute déjà `| AI Makers`. Rendu réel : **`Blog | Transformation IA en entreprise, retours terrain | AI Makers`** ≈ **68 car.**, au-delà du cap 60, avec deux pipes. Master propose `Blog : transformation IA, retours terrain` (41 → ~53), sans pipe manuel. Fix : appliquer la version courte. **Apparenté au pattern suffixe/séparateur manuel — voir cross-page.**

**2. Meta description live légèrement hors budget.**
`page.tsx:12` : ≈165 car., juste au-dessus de 160. Master trime à 155 (retrait de « méthodes et »). Fix : appliquer la version proposée.

### 🟢 Low

**3. Pas de tête de requête ciblée — décision correcte.**
Master §2 : un index de blog ne court pas après un mot-clé ; le ranking vit sur les articles (`agence ia` 2 400, `formation ia` 6 900, etc. via les posts enfant). Confirmé : posture correcte, pas un défaut. Le hub gagne des liens et de la confiance, les articles gagnent le trafic.

**4. Schema d'index minimal.**
`page.tsx:19` : `BreadcrumbList` seul. Un index de blog gagnerait un `Blog`/`CollectionPage` schema listant les posts. Non bloquant.

## Ce que la page fait de bien (vérifié)
- **8 posts confirmés** (`src/content/blog/` : bienvenue, ce-site-est-un-produit-ia, inside-ai-makers-cockpit-ceo, inside-ai-makers-intelligence-appels, meilleure-formation-ia-nice, meilleures-agences-ia-france, meilleures-formations-claude-entreprise, meilleures-formations-ia-entreprise). Aligné llms.txt.
- **Posture éditoriale citable et honnête** : « Écrit depuis le travail de mission, pas pour le content marketing », « on publie quand on a quelque chose d'utile à dire ». Signal E-E-A-T authentique.
- **Thin par design mais légitime** : l'index rend les posts existants + un POV, ne duplique aucun corps d'article.
- **Answer-first GEO** (master §8) décrit la ligne éditoriale de façon autonome et citable.
- **Route dans le sitemap** (`sitemap.ts:63`) + les 8 posts générés (`sitemap.ts:69-74`), `priority` dégressive cohérente.
- **BreadcrumbList schema** présent.

## Priorité de correction
1. **🟡 Corriger le title** (retirer le pipe manuel + raccourcir, 55→41).
2. **🟡 Trimer la meta** à 155 car.
3. **🟢 (Option) Ajouter un `Blog`/`CollectionPage` schema.**

## Questions ouvertes (décision client)
- Aucune bloquante.

## Candidats cross-page
- **Cannibalisation potentielle article ↔ page service** : `meilleures-agences-ia-france` (cluster `agence ia`, 2 400) vs page service `/agence-ia` ; `meilleures-formations-ia-entreprise` vs `/formation-ia-entreprise`. Comparatif éditorial vs page commerciale = généralement complémentaire, mais à vérifier des deux côtés (intention distincte confirmée ou finding).
- **Séparateur/suffixe manuel dans le title** : partagé avec les autres pages (glossaire, challenge, formation-ia, secteurs, etudes-de-cas, blog).
