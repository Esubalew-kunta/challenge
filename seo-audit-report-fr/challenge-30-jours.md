# Challenge 30 jours (/challenge-30-jours)

**Source audité :** `[FR] website-content/challenge-30-jours/challenge-30-jours.md`
**Comparé à :** `src/app/challenge-30-jours/page.tsx`, `challenge-form.tsx`, `src/components/shared/faq-accordion.tsx`, `src/lib/site-config.ts`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 83 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 20 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Corriger avant promotion, mais base excellente. Landing de nurturing parmi les plus honnêtes du site : cadrage des attentes assumé (« guidé par email, pas par un consultant »), livrables concrets, FAQPage schématisée. Trois corrections avant promotion : (1) title + meta hors budget ; (2) **claim « Partenaire Anthropic » à confirmer formellement** — répété partout sur le site avec un badge officiel, il devient 🔴 s'il n'est pas exact ; (3) **capture de données sans aucune mention RGPD**. Aucune fabrication détectée dans le corps.

## Findings

### 🟠 High

**1. Claim « Partenaire Anthropic » non vérifié, répété avec badge officiel (site-wide).**
Présent sur `challenge-30-jours/page.tsx:32,162`, `footer.tsx:194`, `cta-section.tsx:33` + `site-config.ts:1823` (badge `/images/badges/anthropic.svg`), `transformation.ts:144`. Le master le tague `[to validate]` (§9) — posture correcte, **à confirmer avant promotion**, pas re-signalé comme nouvelle découverte. Pourquoi ça compte : un badge d'apparence officielle + le mot « Partenaire » affirment un statut de partenariat formel. S'il ne correspond pas à un programme partenaire réel d'Anthropic, c'est une **fausse allégation de partenariat → 🔴** (ruleset §1.1 / §4.2). Impossible à vérifier en interne : **could not verify — needs client sign-off.** Fix : soit fournir la preuve du statut partenaire, soit adoucir en formulation exacte (« formations sur Claude / expertise Anthropic ») et revoir le badge. **Cross-page.**

**2. Capture de données sans aucune mention RGPD.**
`challenge-form.tsx` (email professionnel + entreprise) : `grep` privacy/consent/RGPD/désinscription = **0 résultat**. Aucune information au moment de la collecte, aucun lien vers la politique de confidentialité, aucune mention de finalité. Le RGPD impose une information à la collecte. Master §4.2 propose une microcopy ; ticket `TICKET-GDPR-CONSENT`. Pire que /playbook-ia (qui a au moins un `privacyNote` par défaut). Fix : ajouter finalité + désinscription + lien politique au formulaire.

### 🟡 Medium

**3. Title live hors budget une fois le suffixe ajouté.**
`page.tsx:30` : `title: "Challenge 30 jours : intégrez Claude dans votre entreprise"` = **58 car.** (pas de suffixe manuel, bien) → rendu **≈71 car.** avec `| AI Makers`, au-delà du cap 60. Master propose `Challenge 30 jours : déployez un agent Claude` (45 → ~57). Fix : appliquer la version courte.

**4. Meta description live largement hors budget.**
`page.tsx:31-32` : **207 car.** (se termine sur « Par AI Makers, Partenaire Anthropic ») → tronquée en SERP. Master trime à 159. Fix : appliquer la version courte (et voir finding 1 sur « Partenaire Anthropic »).

### 🟢 Low

**5. Primaire `défi ia 30 jours` / `30 jours ia` ≈ 0 volume — assumé.**
Ahrefs FR : aucune donnée exploitable pour ces requêtes (volume négligeable). Le master traite justement la page comme actif de conversion à pression mot-clé minimale — confirmé, pas un défaut. L'angle Claude (longue traîne) est le bon.

## Ce que la page fait de bien (vérifié)
- **Cadrage honnête, meilleur actif E-E-A-T** : « Les autres auront intégré Claude par eux-mêmes, et c'est très bien aussi », « pas de call obligatoire, pas de relance agressive », anti-fit explicite (« pas pour vous si… vous attendez un accompagnement humain »). Rare et crédible.
- **Promesse alignée sur la mécanique réelle** : séquence n8n, aucun accompagnement humain promis, ce qui évite le sur-engagement.
- **Livrables concrets par semaine** (espace Claude opérationnel, 3 workflows, un agent, bilan chiffré) — vérifiable, non-générique.
- **FAQPage + BreadcrumbList implémentés** (`page.tsx:38,75`), FAQ réellement answer-first (« Comptez 1 à 2 heures par semaine »). Éligible rich result.
- **Paragraphe answer-first GEO** complet et autonome (master §8), décrit les 4 semaines de façon citable.
- **Route dans le sitemap** (`sitemap.ts:35`), pas de double suffixe de marque (title propre côté marque).
- **Liens internes pertinents** vers `/formation-ia-entreprise/maitriser-claude` et `/ai-transformation` (routes vérifiées existantes).

## Priorité de correction
1. **🟠 Confirmer formellement le statut « Partenaire Anthropic »** (ou adoucir partout + revoir le badge) — potentiel 🔴 si inexact.
2. **🟠 Ajouter la microcopy RGPD** au `ChallengeForm` (finalité, désinscription, lien politique).
3. **🟡 Corriger title (58→45) et meta (207→159).**

## Questions ouvertes (décision client)
- AI Makers dispose-t-il d'un statut de partenariat Anthropic formel justifiant le badge « Partenaire Anthropic » ? Si non, quelle formulation exacte est défendable ?

## Candidats cross-page
- **« Partenaire Anthropic »** : claim répété sur footer, CTA, transformation, challenge — à trancher une fois pour tout le site.
- **Microcopy RGPD absente/faible sur les formulaires de capture** (ChallengeForm = zéro ; LeadCapture = défaut générique) — traiter au niveau composant.
- **Title/meta hors budget une fois le suffixe template ajouté** — pattern partagé (glossaire, challenge…).
