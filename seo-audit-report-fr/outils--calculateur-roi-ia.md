# Calculateur ROI IA (/outils/calculateur-roi-ia)

**Source audité :** `[FR] website-content/outils--calculateur-roi-ia/outils--calculateur-roi-ia.md`
**Comparé à :** `src/components/outils/roi-calculator.tsx`, `src/app/outils/calculateur-roi-ia/page.tsx`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 92 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 25 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 13 / 15 |

## Verdict
Ship après un simple trim title/meta. Page-outil exemplaire : chaque hypothèse affichée mappe une constante réelle du composant, aucun benchmark inventé, et **l'outil ne capture aucune donnée** (100 % côté navigateur → pas de sujet RGPD). Le seul écart avec la publication propre est le title/meta qui dépasse le budget — corrections cosmétiques déjà scopées par le master.

## L'outil correspond-il à son code ? **OUI, au chiffre près.**
- `HEURES_PAR_AN = 47` ✓ (« 47 semaines travaillées »).
- `CHARGES_PATRONALES = 1.45` ✓ (« coût employeur ≈ 1,45 × brut »).
- `coutHoraire = (salaireBrut × 1.45) / (35 × 47)` ✓ (« base 35 heures »).
- `etp = heuresAnnuelles / (35 × 47)` ✓.
- `heuresSemaine` défaut = **4** ✓ (« valeur par défaut 4 h, prudente » face aux 7 h client).
- `collaborateursActifs = round(effectif × adoption / 100)` ✓ (« le taux d'adoption pondère l'effectif »).
- **Aucun fetch/capture** dans `roi-calculator.tsx` (uniquement `useState`/`useMemo`) ✓ — « ne stocke rien » est vrai.
- **Cohérence canonique** : le repère « 7 h/semaine » est présenté comme moyenne client (llms.txt), pas comme défaut du calculateur.

## Findings

### 🟡 Medium

**1. Title live hors budget.**
`page.tsx:13` : `title: "Calculateur ROI IA : combien votre entreprise peut-elle gagner ?"` = **63 car.** → rendu **≈76 car.** avec `| AI Makers`. Master propose `Calculateur ROI IA : heures et euros libérés` (44 → 56), mot-clé exact en tête + sortie réelle. Fix : appliquer la version courte.

**2. Meta description live hors budget.**
`page.tsx:14` : ≈178 car. → tronquée. Master trime à ~151 (retrait de « dans votre entreprise », redondant après le H1). Fix : appliquer la version proposée.

### 🟢 Low

**3. Primaire `calculateur roi ia` : intention exacte, volume faible — assumé.**
Ahrefs FR : `calculateur roi` (générique finance) = **70** (KD 2) ; `calculateur roi ia` (intention exacte) = volume négligeable. Le master a raison : posséder l'intention exacte (H1 + slug) et ne pas viser `calculateur roi` (intention finance générique, hors sujet). Aimant, pas pilier de trafic. Décision correcte.

## Ce que la page fait de bien (vérifié)
- **Méthode en toutes lettres, fidèle au code** : les 4 hypothèses affichées = les constantes réelles. « Un calculateur qui gonfle les chiffres dessert tout le monde » est tenu par le code (défaut prudent 4 h, hypothèses conservatrices).
- **Aucune capture de données** : rien à consentir, rien à stocker — argument de confiance et absence totale de risque RGPD (contrairement aux autres outils).
- **Honnêteté assumée** : « un ordre de grandeur, pas un engagement », « pas d'email forcé, pas de relance », « pas en pause café ». FAQ answer-first et non-complaisante.
- **Spécificité France correcte** : sortie en euros, charges patronales ×1,45 — cohérent avec le marché FR live.
- **FAQPage + BreadcrumbList schema** (`page.tsx:67` via `faqPageSchema(faq)`, `page.tsx:21`).
- **Answer-first GEO** (master §8) autonome, décrit les 4 entrées / 3 sorties et les hypothèses prudentes.
- **Route dans le sitemap** (`sitemap.ts:31`). Pas de double suffixe de marque.

## Priorité de correction
1. **🟡 Corriger title (63→44) et meta (178→151).** (Seule action avant publication.)

## Questions ouvertes (décision client)
- Aucune. Page prête une fois le title/meta trimé.

## Candidats cross-page
- **Title/meta hors budget** — pattern partagé.
- **Standard « aucune capture / méthode à découvert »** : référence de confiance, à opposer au playbook (stats non sourcées) et aux formulaires sans RGPD.
