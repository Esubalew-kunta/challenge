# Contact (/contact) — FR Content Master

> Localisation FR du master EN scellé. Voix live reprise de `src/app/contact/page.tsx` + `shared/cal-embed.tsx` + `shared/booking-proof.tsx` (`site-config.ts:bookingProof`). Endpoint de conversion — pression mots-clés minimale, attendu.

## 1. En-tête de page
- **Route (FR, live) :** /contact
- **Objectif :** Endpoint de conversion : intégration de réservation Cal.com + preuve. Cible de presque tous les CTA du site.
- **Rôle SEO :** conversion — pression mots-clés minimale.
- **Étape funnel :** BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| — | (pas de cible mot-clé — endpoint de conversion) | minimal | — | Ahrefs, 2026-07 |

> **Décision mots-clés — pression minimale par conception.** Une page contact/réservation est la destination des CTA internes, pas une page d'acquisition organique. Elle ne porte pas de head term ; sa seule « requête » est navigationnelle de marque (« ai makers contact »). Copie optimisée pour la conversion de réservation et pour dire exactement ce que délivrent les 30 minutes. Signalé à l'Agent 3 : scorer sur la clarté de conversion + confiance, pas les mots-clés.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. avec suffixe auto) | Contact : réservez votre diagnostic IA gratuit | Contact : réservez votre diagnostic IA gratuit |
| Meta description (140–160 car.) | Contactez AI Makers pour un diagnostic IA gratuit. Prenons 30 minutes pour analyser vos workflows et identifier vos quick-wins IA. | Contactez AI Makers pour un diagnostic IA gratuit. 30 minutes pour analyser vos workflows et cerner vos quick-wins IA à plus fort ROI. Sans pitch commercial. |
| H1 | 30 minutes pour savoir exactement ce que l'IA peut faire pour vous. | 30 minutes pour savoir exactement ce que l'IA peut faire pour vous. |
| Slug URL | /contact | /contact |

## 4. Sections & contenu
Copie : inline `src/app/contact/page.tsx` + `shared/cal-embed.tsx` (bookingUrl cal.com Othmane Halim) + `shared/booking-proof.tsx` (`site-config.ts:bookingProof`).

### 4.1 — Hero + promesse
- **Composant :** `page.tsx`
- **Champs :** badge, H1, sous-titre, 3 étapes, coordonnées (email, adresse)
- **Proposé (FR) :**
  - **badge :** `Diagnostic IA gratuit · Sans engagement`
  - **H1 :** `30 minutes pour savoir exactement ce que l'IA peut faire pour vous.`
  - **sous-titre :** `Pas de pitch commercial. On analyse vos workflows, on identifie vos 3 quick-wins IA à plus fort ROI, et on vous donne une première roadmap, que vous travailliez avec nous ou non.`
  - **étapes :** `1 — Vous réservez un créneau de 30 min` · `2 — On analyse vos workflows en direct` · `3 — Vous repartez avec une roadmap IA concrète`
  - **coordonnées :** `60 rue François 1er, 75008 Paris` · `othmane@aimakers.fr`
- **Justification :** « Pas de pitch commercial » + « que vous travailliez avec nous ou non » est le différenciateur FR, fidèle au format ; conservé. Adresse et email verbatim des sources canoniques. Note : la page FR n'affiche que l'adresse Paris — le bureau de Rabat vit sur /ia-maroc ; non ajouté ici pour coller à la mise en page live.

### 4.2 — Intégration Cal.com
- **Composant :** `shared/cal-embed.tsx`
- **Champs :** titre de l'iframe de réservation, repli « pas envie d'un call ? »
- **Proposé (FR) :**
  - **titre iframe :** `Réserver un diagnostic gratuit avec Othmane Halim`
  - **ligne de repli :** `Pas envie d'un call ? othmane@aimakers.fr`
- **Justification :** Nomme le fondateur (Othmane Halim, canonique) — une vraie personne en face augmente l'intention de réservation. Repli email conservé pour les réfractaires au call.

### 4.3 — Preuve de réservation
- **Composant :** `shared/booking-proof.tsx` + `bookingProof`
- **Champs :** stats, témoignages, badges
- **Proposé (FR) :**
  - **stats :** `9,6/10 satisfaction moyenne` · `100% de recommandations` `[to validate]` *(voir §9)*
  - **badges :** `Partenaire Anthropic` · `Ambassadeur Osez l'IA` *(déjà en français dans la source live)*
  - **témoignages :** les 6 témoignages `bookingProof` sont déjà en français dans `site-config.ts` (source unique) — ne pas les réécrire.
- **Justification :** 9,6/10 provient de `site-config.ts:bookingProof` (source live) — **pas** dans llms.txt (grep vérifié) : source de vérité à réconcilier (C4, décision propriétaire — ajouter à llms.txt ou assumer site-config). Le chiffre lui-même est réel (correspond au composant live). Les témoignages et badges sont des données partagées site-config, déjà en français — référencées ici, non clonées.

## 5. FAQ
Pas d'emplacement FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Préférez auto-évaluer d'abord ? Faites le diagnostic IA | /diagnostic-ia | alternative en self-service (existant) |
| othmane@aimakers.fr | mailto:othmane@aimakers.fr | repli email (existant) |

## 7. CTA
- **CTA principal :** Réserver le diagnostic de 30 min (intégration Cal.com). FR : **`Réserver un diagnostic gratuit de 30 min`**

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Vous pouvez contacter AI Makers en réservant un diagnostic IA gratuit de 30 minutes avec le fondateur Othmane Halim, ou par email à othmane@aimakers.fr. Le diagnostic est une session de travail, pas un pitch commercial : l'équipe analyse vos workflows, identifie vos trois quick-wins IA à plus fort ROI et vous remet une première roadmap — que vous travailliez ensuite avec elle ou non. Bureaux à Paris (60 rue François 1er, 75008) et Rabat (Agdal).`
- **Entrée llms.txt (FR) :** `[Contact](https://aimakers.fr/contact) : réservez un diagnostic IA gratuit de 30 minutes avec AI Makers, ou joignez l'équipe à othmane@aimakers.fr.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Diagnostic gratuit de 30 min, sans pitch, 3 quick-wins, première roadmap | copie de page (format) |
| Fondateur Othmane Halim ; email othmane@aimakers.fr ; Paris 75008 (+ Rabat) | public/llms.txt (canonique) |
| 9,6/10 satisfaction moyenne | site-config bookingProof (pas dans llms.txt — source à réconcilier, C4) |
| 100% de recommandations | site-config bookingProof — [to validate], pas dans llms.txt |
| Badges « Partenaire Anthropic » / « Ambassadeur Osez l'IA » | site-config bookingProof (déjà en français) |
| 6 témoignages | site-config bookingProof — données partagées, déjà en français, non clonées ici |

## Localisation appliquée
**Modifié vs. live FR :**
- Title : conservé (46 car. + suffixe = 58 ≤ 60, marque unique).
- Meta description : enrichie de ~130 à ~155 car. — ajout de « à plus fort ROI » + « Sans pitch commercial » (différenciateur), toujours dans le budget.

**Délibérément conservé (voix live authentique) :**
- Aucune négation à dé-empiler (microcopie propre).
- Tags `[to validate]` : « 100% de recommandations » (pas dans llms.txt). 9,6/10 conservé (canonique). Badges déjà en français dans la source — pas de décision de traduction requise côté FR.
- Témoignages laissés à la couche partagée site-config (pas de clonage ici).

**Décisions propriétaire (signalées) :** sourcer-ou-retirer « 100% de recommandations » ; décider si le bureau de Rabat doit aussi apparaître sur la page contact.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Title :** « Contact : réservez votre diagnostic IA gratuit » = 46 car. + suffixe auto = 58 ≤ 60 ; marque unique. Conforme, inchangé.
- **Meta :** enrichie à ~155–157 car. (≤160). Conforme.
- **Tags normalisés :** `[à valider]` → **`[to validate]`** (« 100% de recommandations » non sourcé — sourcer-ou-retirer avant publication).
- **Source de vérité « 9,6/10 » corrigée (C4) :** le master citait à tort llms.txt ; le chiffre vient de `site-config.ts:bookingProof` (pas dans llms.txt). Attribution corrigée dans la copie interne (§4.3 + §9) — décision propriétaire : ajouter à llms.txt ou assumer site-config. La copie rendue « 9,6/10 » reste (chiffre réel du composant live).
- **« que vous travailliez avec nous ou non » :** scoping honnête déflationniste — **conservé** (distinct du closer secteur verbatim ; sur la KEEP-list).
- **Non touché (ingénierie / log only) :** lien `/confidentialite` sur l'embed Cal.com (RGPD, ticket B4) ; badge « Partenaire Anthropic » (A6, vérification site-wide) ; schéma Organization/LocalBusiness. Aucune édition de copie ici.
