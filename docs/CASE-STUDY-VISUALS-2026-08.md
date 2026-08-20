# Visuels des études de cas — sage-geo, gepromed, cardio-check-up

Statut au 2026-08-05. Les images sont dans le dépôt ; **les blocs `image` ci-dessous
doivent être saisis dans l'OS**, pas ici.

## Pourquoi ce document existe

`src/content/case-studies.generated.json` est produit par l'OS et scellé par une
empreinte (`scripts/check-generated.mjs`). Une retouche directe serait perdue au
prochain envoi. Les assets, eux, vivent normalement dans le dépôt : ils sont donc
commités, et seul le contenu JSON reste à reporter dans l'OS.

Le rendu attend `{ src, alt, width, height, note? }` par système
(`src/app/(fr)/etudes-de-cas/[slug]/page.tsx`). Le cadre de navigateur (les trois
pastilles) est déjà dessiné par la page — les captures ne doivent pas en contenir.
Convention reprise d'Addictest : largeur 1600, PNG. Toutes les captures ci-dessous
font 1600 × 1000.

---

## sage-geo — 4/4 systèmes couverts

> ⚠️ **Non publiable en l'état.** Les six captures Sage sont hors de `public/`,
> dans `assets-pending-approval/case-studies/sage-geo/`, et ne sont donc servies
> à aucune URL. Elles contiennent des chiffres réels et des concurrents nommés.
> Après accord écrit de Sage :
> `git mv assets-pending-approval/case-studies/sage-geo public/images/case-studies/sage-geo`


| # | Système | Image | Source |
|---|---------|-------|--------|
| 0 | Audit croisé et reverse engineering | `sage-geo/audit-concurrence.png` | Audit Sage, onglet « Audit détaillé » |
| 1 | Optimisation des pages et du maillage | `sage-geo/plan-maillage.png` | Audit Sage, onglet « Plan », mouvement 01 |
| 2 | Contenus citables et canaux communautaires | `sage-geo/content-plan.png` | GEO Command Center → Content plan |
| 3 | Monitoring avant / après | `sage-geo/monitoring-concurrents.png` | GEO Command Center → Competitor watch |

Deux visuels de rechange sont commités si le #3 doit changer d'angle :
`sage-geo/monitoring-gsc.png` (courbes Search Console) et
`sage-geo/visibilite-profound.png` (visibilité par prompt, 8 moteurs).

```json
[
  {
    "src": "/images/case-studies/sage-geo/audit-concurrence.png",
    "alt": "Audit croisé Sage : part de voix IA sur la requête auto-entrepreneur, Sage face à six concurrents, et comparaison autorité / trafic / mots-clés en France",
    "width": 1600,
    "height": 1000
  },
  {
    "src": "/images/case-studies/sage-geo/plan-maillage.png",
    "alt": "Plan d'action 90 jours : rediriger l'autorité du domaine vers les pages money — maillage interne vers le hub, 898 liens cassés corrigés, 168 pages orphelines reliées",
    "width": 1600,
    "height": 1000
  },
  {
    "src": "/images/case-studies/sage-geo/content-plan.png",
    "alt": "Plan de contenus citables : 4 têtes de pont, 8 thèmes, 40 sujets, avec les standards YMYL et le contrôle anti-slop appliqués à chaque article",
    "width": 1600,
    "height": 1000
  },
  {
    "src": "/images/case-studies/sage-geo/monitoring-concurrents.png",
    "alt": "Veille concurrentielle nocturne : 30 pages money suivies chez 4 concurrents, crawl chaque nuit, mouvements datés et logués depuis la ligne de base",
    "width": 1600,
    "height": 1000
  }
]
```

**À valider avant publication.** Ces quatre captures montrent des chiffres réels
de Sage et de ses concurrents nommés : part de voix IA, CTR non brandé, positions,
cibles internes à 90 jours. Addictest a tranché autrement — visuels d'illustration
plus une `note` de confidentialité. Trois options : publier tel quel après accord
écrit de Sage, publier une version aux chiffres masqués, ou refaire des visuels
d'illustration. Tant que l'accord n'est pas là, ne pas publier ces quatre images.

---

## gepromed — 1/4 système couvert

| # | Système | Image | Statut |
|---|---------|-------|--------|
| 0 | Acquisition (GTM Engineering) | `gepromed/site-refonte.png` | ✅ capturé |
| 1 | Finance et administratif | — | ⛔ capture interne requise |
| 2 | Gestion de projet et développement | — | ⛔ capture interne requise |
| 3 | Conformité : le différenciant MedTech | — | ⛔ capture interne requise |

Visuel de rechange pour le #0 : `gepromed/site-plateformes.png` (section
« Sécurité chirurgicale : nos 3 plateformes »).

```json
{
  "src": "/images/case-studies/gepromed/site-refonte.png",
  "alt": "Site Gepromed refondu : positionnement d'institut de recherche, parcours vers les formations et l'inscription aux sessions",
  "width": 1600,
  "height": 1000
}
```

Les systèmes 1 à 3 sont des agents déployés sur des postes de travail internes.
Rien n'en est public : il faut des captures fournies par l'équipe, et la même
question de confidentialité se posera (documents RGPD, écarts ISO, revue de
direction).

---

## cardio-check-up — 2/4 systèmes couverts

Étude encore en `draft`, donc pas en ligne sur aimakers.fr.

| # | Système | Image | Statut |
|---|---------|-------|--------|
| 0 | Le cockpit du cabinet | — | ⛔ accès requis (voir ci-dessous) |
| 1 | Le chatbot médical bilingue | `cardio-check-up/chatbot.png` | ⚠️ capturé, mais le backend est en erreur |
| 2 | Deux sites web | `cardio-check-up/site-centre.png` | ✅ capturé (1 site sur 2) |
| 3 | Formation et visibilité IA | — | ⛔ capture interne requise |

```json
[
  {
    "src": "/images/case-studies/cardio-check-up/chatbot.png",
    "alt": "Assistante virtuelle Cardio Check-up ouverte sur le site du centre, avec le renvoi vers le 15 (SAMU) affiché en permanence sous la zone de saisie",
    "width": 1600,
    "height": 1000
  },
  {
    "src": "/images/case-studies/cardio-check-up/site-centre.png",
    "alt": "Site du centre Cardio Check-up : positionnement cardiologie et rythmologie à Paris, prise de rendez-vous en premier appel à l'action",
    "width": 1600,
    "height": 1000
  }
]
```

### Deux problèmes constatés sur les systèmes en production

**Le chatbot répond en erreur.** Trois essais espacés le 2026-08-05 (symptômes à
l'effort, douleur thoracique irradiante, demande de bilan de prévention) : à chaque
fois `Une erreur est survenue. Veuillez réessayer ou contacter le secrétariat au
07 55 50 52 58.` Le backend `cardio-rag-backend.onrender.com/chat` renvoie HTTP 200
et streame cet événement d'erreur — le service répond donc, mais l'appel modèle
échoue derrière (clé ou quota, plus probable qu'un démarrage à froid vu le délai de
réponse). Conséquence directe : le triage des symptômes et la redirection des
urgences vers le 15, tous deux décrits dans l'étude comme étant « en production »,
ne fonctionnent pour aucun visiteur en ce moment. La capture montre le panneau
ouvert sur le message d'accueil — honnête, mais elle ne prouve pas le triage. À
reprendre une fois le backend réparé.

**Les comptes de démonstration du cockpit ne fonctionnent pas.**
`cabinet.cardio-check-up.com/connexion` affiche trois comptes (Administration,
Médecin, Secrétariat) sous « Cliquez pour remplir les identifiants ». Les
identifiants se remplissent, puis l'authentification renvoie HTTP 400 et
`Aucun compte n'existe avec cette adresse email.` La page invite donc à se
connecter avec des comptes qui n'existent pas.

---

## Ce qu'il reste à fournir

1. **Captures du cockpit** — écran médecin, écran secrétariat, écran admin, et le
   suivi des examens. Soit un compte de démonstration qui fonctionne, soit les PNG
   directement (fichiers joints, pas collés en conversation).
2. **URL du site de la praticienne** — le système « Deux sites web » en annonce deux,
   seul celui du centre est capturé.
3. **Captures internes Gepromed** — agents compta / RH / qualité sur le poste,
   delivery tracker, générateur de documents RGPD ou analyse d'écart ISO.
4. **Capture formation / visibilité GEO Cardio** — bibliothèque de prompts métier ou
   suivi des 36 mots-clés sur 4 IA.
5. **Accord Sage** sur la publication des chiffres réels (voir plus haut).

Sur les points 1, 3 et 4 : indiquer aussi ce qui doit être masqué. Le rendu accepte
un champ `note`, utilisé par Addictest pour signaler un visuel d'illustration.
