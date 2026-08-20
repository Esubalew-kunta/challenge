# Audit anti-slop FR — Secteur : Médecins & cabinets médicaux

Fichier audité : `[FR] website-content/secteurs--medecins-cabinets/secteurs--medecins-cabinets.md`
Périmètre : copie FR live/proposée uniquement. Secteur régulé.

## Net score: SDS − HPC = 4

- SDS ≈ 11 / 1 000 mots
- HPC ≈ 7 / 1 000 mots (garde-fous secret médical honnêtes)
- **Verdict : Clean (0–8).** Action : ship. Point de vigilance : sameness avec la page santé (paire régulée santé — plus haut risque de la collection).

## Top tells (verbatim + layer)
- **Layer 2.2 + 3.4/3.7 :** `« Vous repartez avec un plan, que vous travailliez avec nous ou non. »` — verbatim ×8.
- **Sameness health-pair (3.4) :** CTA `« Où l'IA vous rendrait-elle du temps médical ? »` + hero `« L'IA rend ce temps au soin »` — jumeau du CTA santé `« Où l'IA rendrait-elle du temps à vos équipes ? »` et de `« l'IA rend du temps aux scientifiques et aux cliniciens »`. Les deux pages santé partagent le verbe pivot « rend du temps » et le moule de question CTA. C'est la paire de sameness la plus rapprochée du corpus.
- **Layer 2.1 (négation-parallélisme, ×2) :** `« Une aide pour vous, pas une décision clinique »` et `« le secrétariat augmenté, pas remplacé »`. Deux « X, pas Y » sur la page. Ici load-bearing (scope assistif régulé) — honnêteté, pas slop — mais densité à surveiller.

## Credits (présence sectorielle réelle)
- **16.2 / Layer 13.4 (honnêteté domaine régulé) :** garde-fous répétés et porteurs — `« relu avant envoi »`, `« une aide pour vous, pas une décision clinique »`, `« relue par vous »`, `« rien ne se déploie sans ce cadre »` (secret médical). Négations = honnêteté attendue en secteur régulé.
- **16.4 (nombre à texture) :** `« jusqu'à deux heures par jour »` d'administratif — chiffre sectoriel, correctement balisé `[à valider]` (honnêteté épistémique, 16.2). Non supprimé, non survendu.
- **16.4 (savoir situé clinicien) :** `« courriers confraternels dans votre style »`, `« synthèses de dossiers avant la consultation »`, `« outils métier fermés qui ne parlent pas entre eux »` — réalités de cabinet, distinctes de la R&D sciences de la vie.
- **16.9 :** Addictest (e-santé) en référence nommée.

## Remédiation
- **Sameness santé/médecins (3.4) :** varier le verbe pivot sur l'une des deux pages. Médecins peut garder « temps médical/temps au soin » (spécifique clinicien) ; santé devrait quitter « rend du temps ». Différencier aussi la forme du CTA (`« Où l'IA (vous) rendrait-elle du temps… »`).
- **Closer CTA (2.2) :** supprimer/ancrer sur secret médical + comptes rendus.
- Négations « X, pas Y » : CONSERVER (scope régulé) mais ne pas en ajouter.

## Repeated devices seen on this page
1. Closer CTA `« … que vous travailliez avec nous ou non »` (×8 verbatim).
2. `« rend du temps »` + CTA `« Où l'IA (vous) rendrait-elle du temps… »` (paire santé/médecins — sameness la plus forte).
3. Négation-parallélisme `« X, pas Y »` (×2, régulé, load-bearing).
4. Closer GEO + label formations (×8).
