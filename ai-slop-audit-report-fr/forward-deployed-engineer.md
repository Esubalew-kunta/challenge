# Audit anti-slop FR — Forward Deployed Engineer (/forward-deployed-engineer)

## Net score: SDS − HPC = 6 − 17 = **−11**

Copie auditée : hero, barre preuve, définition FDE (answer-first + 3 stats), problème recrutement, mécanisme dogfooding, équipe + bios fondateurs, 3 profils, stack, timeline semaine par semaine, comparaison FDE/freelance/ESN, origine, témoignages (réutilisés), certifications, FAQ (7), garanties (réutilisées), CTA final, bloc GEO. Le fichier de données le plus riche du site. ~3 400 mots de copie réelle.

## Layer 14 verdict : **Clean** (0–8) sur la densité slop. Action : ship — MAIS **gate de vérification factuelle obligatoire avant publication** (voir ci-dessous). Ce n'est pas un auto-fail Layer 5.5 : aucune fabrication *confirmée*, et la marque a déjà flaggé chaque stat en interne.

## Surface de risque n°1 — statistiques externes (Layer 9.2 / 5.5)

C'est la seule vraie exposition de la page. Sur la page *rendue*, ces chiffres sont présentés en assertions sourcées et confiantes (le tag `[à valider]` est du scaffolding, invisible au lecteur) :
- « 95 % des pilotes IA en entreprise ne produisent aucun retour mesurable (étude MIT, 2025) »
- « +729 % d'offres d'emploi FDE en un an […] Offres Indeed multipliées par 8 »
- « 385 K$ à 1 M$ la rémunération d'un FDE dans les labs IA »
- « OpenAI […] une coentreprise de déploiement de 4 milliards de dollars en 2026 »

**Action (pas anti-slop, mais bloquante) :** chaque chiffre doit résoudre à une source vérifiable avant publication (Layer 9.2 : la fausse précision sourcée est pire qu'une vague, car elle *simule* la rigueur). La marque les a taggés `[à valider — source externe]` — signal d'honnêteté à créditer (16.11), mais le tag ne dispense pas de la vérification. Non audité ici (pas de recherche). Si un seul chiffre ne résout pas → auto-fail 5.5 à ce moment-là.

## Top tells (verbatim + layer) — mineurs

- **L2.1 négation (signature)** — « Il n'arrive pas seul. Il arrive avec nos systèmes. » (mécanisme title) ; « Pas un vivier, pas de profils anonymes. » (équipe intro). Staked, concrets → 2 pts.
- **L1** — verbes d'action dominants (« s'assoit », « ouvre son premier chantier », « écrit du code de production »). Pas de Tier-A empilé.
- **L2.4 triades** — « long, cher, risqué » (problème title) ; « il lit, apprend, prend en main » : concrètes, sous seuil → 1 pt.
- **L2.5 colon-headline** — labels de profils (« Le chef d'orchestre », « Le bâtisseur », « Le moteur ») : device de cadence staked → 1 pt.
- Aucun opener/closer slop. Timeline et CTA final en FR natif direct.

## Credits (Layer 16) — parmi les plus riches du corpus

- **16.9 Anchoring incarné (4 cr)** — bios fondateurs vérifiables : Walid Boulanouar (INPT, 250+ produits, systèmes pour gov Maroc/Arabie Saoudite), Adel Dahani (ENSIAS, ex-AI Engineer IBM, projets L'Oréal/GSK/Nestlé, Azure Data Scientist). JSON-LD Person LinkedIn-vérifié. Lignée AY Automate canonique (llms.txt).
- **16.4 Embodied/procedural (3 cr)** — mécanisme : « l'intelligence d'appels qui analyse nos propres calls, le cockpit qui briefe notre CEO chaque matin » ; footnote : « On les construit pour nous d'abord. Un système qui ne tient pas chez nous n'arrive jamais chez vous. » ; pré-onboarding « Semaines -2 à 0 […] Le jour 1, il ne vous demande pas comment vous travaillez. Il le sait. »
- **L5.10 comparaison déclare des perdants (3 cr)** — tableau FDE vs freelance vs ESN, 6 lignes, chaque alternative perd explicitement (« Le savoir repart avec lui », « Une obligation de moyens »).
- **16.2 Stakes (4 cr)** — 4 garanties ; « L'objectif n'est pas de rester : c'est de vous rendre autonomes. » (renonce à la récurrence) ; PI totale.
- **16.11 Honest incompleteness (3 cr)** — tous les stats externes + badges taggés `[à valider]`, non blanchis. Signal d'intégrité fort. À PROTÉGER.

HPC ≈ 17 (plafond 20).

## Layer 17 — pas de contrefaçon

Pas de trigger 18.1 sur la densité slop. Le dogfooding cite des systèmes internes réels nommés (pas une anecdote synthétique). Les bios sont incarnées et vérifiables (contraire du first-person retrofit 17.7). 18.2 : Continuité oui (Palantir 20 ans → AY Automate → aujourd'hui), Coût oui (garanties + « pas de rester »), Adresse oui (acheteur ops pesant recruter-vs-déployer).

## Remédiation

- **Priorité : vérifier les 4 stats externes + badges** avant publication (résoudre chaque source ou couper le chiffre — jamais le repeindre en vague). C'est un travail de sourcing, pas d'édition anti-slop.
- Ne PAS retirer les tags `[à valider]` ni les bios (voix FR native, load-bearing).

## Repeated devices seen on this page (pour la synthèse FR)

1. **« X, pas Y » négation** — « Il n'arrive pas seul. Il arrive avec nos systèmes. » (device de marque).
2. **Dogfooding « on les construit pour nous d'abord »** — refrain (aussi ai-transformation, ai-os, home objection #3).
3. **Tableau comparatif propriétaire** (FDE/freelance/ESN) — distinct du tableau home, déclare des perdants.
4. **Rareté « Maximum 3 nouveaux clients par mois » + onboardé 2 semaines avant kick-off** — refrain.
5. **Closer CTA « que vous travailliez avec nous ou non »**.
6. **Garanties + témoignages** — blocs réutilisés (mono-sourcés home).
7. **Stat canonique « 200+ systèmes / 7h/semaine »**.
8. **Tag `[à valider]`** — ici le plus dense du corpus (marqueur d'honnêteté + surface de risque).
9. **« pas de slides / pas un chatbot générique de plus »** — écho du motif anti-hype.
