# _tracker.md — Master coverage tracker (single source of truth for the EN content pipeline)

Legend: ✅ done · ⬜ pending. Status columns: **Structure** (Agent 1) / **EN Content** (Agent 2) / **SEO Audit** (Agent 3) / **Slop Audit** (Agent 3/4) / **Reconciled** (Agent 4).

Copy source note: much of the site's copy does NOT live in the page components. Key data files: `src/lib/site-config.ts` (homepage + nav/footer + testimonials + booking), `src/lib/offer-pages/{transformation,ai-os,fde,seo-geo,formation,manifeste}.ts`, `src/lib/secteurs.ts`, `src/lib/case-studies.ts`, `src/lib/formations.ts`, `src/lib/villes-formation.ts`, `src/lib/playbook-config.ts`, `src/lib/diagnostic-config.ts`, `src/lib/scanner-opportunites.ts`, `src/content/blog/*.md`.

## Master table — static pages (in scope: 34)

| # | Route | Folder | # Sections | FAQ | Structure | EN Content | SEO Audit | Slop Audit | Reconciled |
|---|---|---|---|---|---|---|---|---|---|
| 1 | / | homepage/ | 14 | 9 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 2 | /offre | offre/ | 4 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 3 | /ai-transformation | ai-transformation/ | 12 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 4 | /ai-operating-system | ai-operating-system/ | 11 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 5 | /forward-deployed-engineer | forward-deployed-engineer/ | 16 | 8 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 6 | /plateforme-data-ia | plateforme-data-ia/ | 9 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 7 | /agence-ia | agence-ia/ | 8 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 8 | /automatisation-ia-workflow | automatisation-ia-workflow/ | 10 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 9 | /audit-ia-entreprise | audit-ia-entreprise/ | 9 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 10 | /seo-geo | seo-geo/ | 11 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 11 | /formation-ia-entreprise | formation-ia-entreprise/ | 12 | 6 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 12 | /formation-ia | formation-ia/ | 4 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 13 | /secteurs | secteurs/ | 3 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 14 | /etudes-de-cas | etudes-de-cas/ | 4 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 15 | /blog | blog/ | 3 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 16 | /garanties | garanties/ | 6 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 17 | /capacite | capacite/ | 5 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 18 | /gouvernance-ia | gouvernance-ia/ | 7 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 19 | /securite | securite/ | 7 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 20 | /a-propos | a-propos/ | 6 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 21 | /equipe | equipe/ | 5 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 22 | /fondateur | fondateur/ | 3 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 23 | /carrieres | carrieres/ | 5 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 24 | /contact | contact/ | 3 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 25 | /ia-maroc | ia-maroc/ | 7 | 5 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 26 | /pourquoi-maintenant | pourquoi-maintenant/ | 9 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 27 | /glossaire-ia | glossaire-ia/ | 6 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 28 | /playbook-ia | playbook-ia/ | 8 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 29 | /challenge-30-jours | challenge-30-jours/ | 7 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 30 | /diagnostic-ia | diagnostic-ia/ | 1 (app wizard) | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 31 | /outils | outils/ | 4 | no | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 32 | /outils/audit-geo-gratuit | outils--audit-geo-gratuit/ | 5 | 3 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 33 | /outils/calculateur-roi-ia | outils--calculateur-roi-ia/ | 5 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| 34 | /outils/scanner-opportunites-ia | outils--scanner-opportunites-ia/ | 5 | 4 items | ✅ | ✅ | ⬜ | ⬜ | ✅ |

## Collections

### /secteurs/[slug] — data: `src/lib/secteurs.ts` (8 entries, shared template `src/app/secteurs/[slug]/page.tsx`)
| Entry | Folder | Structure | EN Content | SEO Audit | Slop Audit | Reconciled |
|---|---|---|---|---|---|---|
| agences-communication | secteurs--agences-communication/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| tpe-pme | secteurs--tpe-pme/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| sante-biotech-medtech | secteurs--sante-biotech-medtech/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| esn-services-it | secteurs--esn-services-it/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| conseil-etudes-marche | secteurs--conseil-etudes-marche/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| medecins-cabinets | secteurs--medecins-cabinets/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| hotellerie-tourisme-loisirs | secteurs--hotellerie-tourisme-loisirs/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| banque-assurance-courtage | secteurs--banque-assurance-courtage/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |

### /etudes-de-cas/[slug] — data: `src/lib/case-studies.ts` (7 entries, shared template `src/app/etudes-de-cas/[slug]/page.tsx`)
| Entry | Folder | Live status | Structure | EN Content | SEO Audit | Slop Audit | Reconciled |
|---|---|---|---|---|---|---|---|
| addictest | etudes-de-cas--addictest/ | published | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| sage-geo | etudes-de-cas--sage-geo/ | published (inProgress) | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| fondation-force | etudes-de-cas--fondation-force/ | published (inProgress) | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| thinkone | etudes-de-cas--thinkone/ | published | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| gepromed | etudes-de-cas--gepromed/ | published | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| cardio-check-up | etudes-de-cas--cardio-check-up/ | **draft (noindex)** | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| delassus | etudes-de-cas--delassus/ | **draft (noindex, inProgress)** | ✅ | ✅ | ⬜ | ⬜ | ✅ |

### /formation-ia-entreprise/[slug] — data: `src/lib/formations.ts` (6 entries, shared template `src/app/formation-ia-entreprise/[slug]/page.tsx`)
| Entry | Folder | Structure | EN Content | SEO Audit | Slop Audit | Reconciled |
|---|---|---|---|---|---|---|
| acculturation-ia | formation-ia-entreprise--acculturation-ia/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| vibe-coding | formation-ia-entreprise--vibe-coding/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| creation-publicite-ia | formation-ia-entreprise--creation-publicite-ia/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| go-to-market-sales | formation-ia-entreprise--go-to-market-sales/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| microsoft-copilot | formation-ia-entreprise--microsoft-copilot/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |
| maitriser-claude | formation-ia-entreprise--maitriser-claude/ | ✅ | ✅ | ⬜ | ⬜ | ✅ |

## Out of scope (no folders)

| Route | Reason |
|---|---|
| /blog/[slug] (8 articles in `src/content/blog/*.md`) | Owned by the 90-day content calendar |
| /formation-ia/[ville] (11 cities in `src/lib/villes-formation.ts`: paris, nice, strasbourg, montpellier, casablanca, lyon, toulouse, bordeaux, lille, nantes, marseille) | P3 local pages, later cycle |
| /mentions-legales, /confidentialite, /cgv | Legal, non-strategic |
| /diagnostic-ia/resultat | App screen (diagnostic result), not a content page; copy in `src/lib/diagnostic-config.ts` + `diagnostic-scoring.ts` |
| /api/* | API routes |

---

## Section-level checklists (Agent 2 ticks per section as EN copy lands)

### homepage (/)
- [x] Hero (`hero.tsx`) · [x] Problem (`problem.tsx`) · [x] ValueProp incl. conversation + objections (`value-prop.tsx`, `conversation.tsx`) · [x] Offers (`offers.tsx`) · [x] Method 6 steps (`method.tsx`) · [x] Results incl. counters+benefits (`results.tsx`) · [x] Testimonials (`testimonials.tsx`) · [x] Fleet 12 agents (`fleet.tsx`) · [x] Connections (`connections.tsx`) · [x] StackTable (`stack-table.tsx`) · [x] Compliance (`compliance.tsx`) · [x] Booking (`booking.tsx`) · [x] FAQ 9 items (`faq.tsx`) · [x] FinalCTA (`final-cta.tsx`)

### offre
- [x] Hero · [x] 3 phases (AUDIT/BUILD/SCALE) · [x] Guarantees · [x] Final CTA

### ai-transformation
- [x] Hero · [x] Logo proof bar · [x] Problem (3 raisons) · [x] Mechanism (dogfooding) · [x] Horizons (3) · [x] Phases (PhaseFlow) · [x] Rules (4) · [x] Case study · [x] Testimonials · [x] Guarantees · [x] FAQ (5) · [x] Related + FinalCTA

### ai-operating-system
- [x] Hero · [x] Problem (3) · [x] Thesis 4 couches · [x] Fleet · [x] Case study Gepromed · [x] Install (3 étapes) · [x] Dogfooding stats · [x] Guarantees · [x] FAQ (4) · [x] Related · [x] FinalCTA

### forward-deployed-engineer
- [x] Hero · [x] Proof bar · [x] Model (qu'est-ce qu'un FDE) · [x] Problem (recruter) · [x] Mechanism · [x] Team · [x] Profiles (3) · [x] Stack (6) · [x] Timeline semaine par semaine (5) · [x] Comparison (6 rows) · [x] Origin AY Automate · [x] Client proof · [x] Cert badges · [x] FAQ (8) · [x] Guarantees (referenced) · [x] Related + FinalCTA

### plateforme-data-ia
- [x] Hero + stats + proof · [x] Silos/socle · [x] Déroulé (4 étapes) · [x] Sur le terrain · [x] Livrables · [x] Et après · [x] FAQ (5) · [x] Related · [x] CTA

### agence-ia
- [x] Hero + stats + proof · [x] Comparatif · [x] Ce qu'on construit (3) · [x] Méthode (3 phases) · [x] Pour qui (3) · [x] FAQ (5) · [x] Related · [x] CTA

### automatisation-ia-workflow
- [x] Hero + stats + proof · [x] Workflow visuel · [x] Processus (6) · [x] Méthode (4) · [x] Outil vs système · [x] Avec/sans table · [x] Stack · [x] FAQ (5) · [x] Related · [x] CTA

### audit-ia-entreprise
- [x] Hero + stats + proof · [x] Ce que fait un AI Scan (4) · [x] Déroulé (4 étapes) · [x] Livrables · [x] Garantie · [x] Et après · [x] FAQ (5) · [x] Related · [x] CTA

### seo-geo
- [x] Hero · [x] Preuve Sage · [x] Basculement (3 stats) · [x] Méthode (4 temps) · [x] SEO+GEO (3) · [x] Pourquoi nous (3) · [x] Engagement · [x] Testimonial Sage · [x] FAQ (4) · [x] Related · [x] FinalCTA

### formation-ia-entreprise
- [x] Hero · [x] Proof stats · [x] Problem (3) · [x] Catalogue (6 programmes) · [x] Mechanics (4) · [x] AI Champions · [x] Garantie · [x] Formateurs · [x] Photos · [x] Catalogue form · [x] FAQ (6) · [x] Related + CTA

### formation-ia · secteurs · etudes-de-cas · blog · outils (hubs)
- [x] Hero · [x] Cards/listing · [x] CTA (each hub) — all 5 hubs done (Batch D2)

### garanties
- [x] Hero · [x] Bande modèle · [x] 4 garanties détaillées · [x] Couverture/limites · [x] FAQ (5) · [x] CTA

### capacite
- [x] Hero · [x] Bande contrainte · [x] 3 avantages · [x] Diagnostic · [x] CTA

### gouvernance-ia
- [x] Hero · [x] Refus (4) · [x] Échéances AI Act (4) · [x] Mise en place (6) · [x] Niveau de risque · [x] FAQ (5) · [x] CTA

### securite
- [x] Hero · [x] Où vivent les données (3) · [x] 6 engagements · [x] Refus · [x] FAQ (4) · [x] PartnerStrip · [x] CTA

### a-propos
- [x] Hero · [x] Fondateur · [x] 3 principes · [x] Équipe · [x] Dogfooding · [x] CTA

### equipe
- [x] Hero · [x] Pilotent · [x] Construisent · [x] Interviennent · [x] CTA

### fondateur
- [x] Hero (lettre) · [x] 4 chapitres · [x] CTA

### carrieres
- [x] Hero · [x] Équipe de 6 + 4 valeurs · [x] On recrute · [x] Candidature spontanée · [x] CTA

### contact
- [x] Hero · [x] Cal embed · [x] BookingProof

### ia-maroc
- [x] Hero · [x] Dynamique (3) · [x] Société marocaine · [x] Loi 09-08/RGPD · [x] 3 phases · [x] FAQ (5) · [x] CTA

### pourquoi-maintenant
- [x] Hero · [x] Blocs 1–5 · [x] Respirations (2) · [x] Sources · [x] CTA

### glossaire-ia
- [x] Hero · [x] Fondamentaux · [x] Technique · [x] Entreprise · [x] Réglementation & visibilité · [x] CTA

### playbook-ia
- [x] Hero · [x] Stats (3) · [x] Problem (3) · [x] Contenu (6 chapitres) · [x] Exercices · [x] Crédibilité · [x] Lead capture · [x] FinalCTA

### challenge-30-jours
- [x] Hero · [x] Inscription · [x] 4 paliers · [x] Réponse honnête · [x] Pour vous ou pas · [x] FAQ (4) · [x] Final

### diagnostic-ia
- [x] Meta + wizard microcopy (`src/lib/diagnostic-config.ts`)

### outils/* (3 tool pages)
- [x] Hero · [x] Tool/form · [x] Method/hypothèses · [x] FAQ · [x] Related/CTA (each) — GEO audit, ROI calc, scanner done (Batch D2)

### Collections
- [x] secteurs--* (8): H1/meta/intro/douleurs/casUsage/FAQ per entry
- [x] etudes-de-cas--* (7): title/seoDescription/tldr/metrics/before/systems/how/learned/FAQ per entry
- [x] formation-ia-entreprise--* (6): titre/resume/objectifs/programme/résultats/FAQ per entry
