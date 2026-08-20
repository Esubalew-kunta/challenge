# Visuels en attente d'accord client

Ces fichiers sont **volontairement hors de `public/`**. Tout ce qui vit dans
`public/` est servi par Next.js à une URL publique dès le déploiement, même
si aucune page n'y renvoie : il suffit de connaître le chemin.

## `case-studies/sage-geo/`

Six captures du GEO Command Center et de l'audit Sage. Elles contiennent des
données confidentielles du client : performance organique réelle (clics,
impressions, CTR non brandé, position moyenne), concurrents nommés avec leurs
métriques, et cibles internes à 90 jours.

La PR #54 le dit explicitement : « Tant que l'accord n'est pas là, ne pas
publier ces quatre images. » Les deux visuels de rechange (Search Console,
Profound) portent les mêmes chiffres réels et relèvent donc de la même règle.

**Pour publier, une fois l'accord écrit de Sage obtenu :**

```
git mv assets-pending-approval/case-studies/sage-geo public/images/case-studies/sage-geo
```

Les blocs JSON prêts à coller dans l'OS sont dans
`docs/CASE-STUDY-VISUALS-2026-08.md` ; leurs chemins `/images/case-studies/
sage-geo/...` redeviennent valides dès que le dossier est remis dans `public/`.
