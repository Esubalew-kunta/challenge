# Les trois mentions du Benchmark, à valider par Othmane

Ces trois phrases ne viennent pas du pack de contenu. Le pack fournit la version
de démonstration, qui dit que **rien n'est transmis** et qu'**aucune donnée ne
quitte le navigateur**. Les deux affirmations sont fausses depuis que Supabase
est branché : un parcours terminé écrit une ligne, avec une adresse e-mail.

Une mention de confidentialité fausse est pire qu'une mention absente. Les
réécritures ci-dessous sont **provisoires**, marquées comme telles dans le code,
et une construction de production les refuse tant que personne ne les a
validées.

**Ce qu'une version courte n'a pas le droit de perdre :**

1. ce qui est affiché publiquement,
2. que l'adresse e-mail est enregistrée et jamais affichée,
3. à quoi elle sert.

Une option qui laisse tomber l'un des trois n'est pas plus courte, elle est
incomplète.

---

## 1. Étape 05 de l'onboarding, avant de donner son adresse

C'est la phrase la plus importante des trois : elle se lit juste avant que
quelqu'un remette son e-mail.

**Version de démonstration, fausse aujourd'hui**

> Version de démonstration. Ce prototype garde vos informations dans votre
> navigateur : rien n'est transmis. Le classement retient un nom d'affichage,
> une entreprise et un score, jamais une adresse e-mail. Vos données, vos
> règles.

**Option A, longue** — 312 caractères

> Le classement affiche votre nom d'affichage, votre entreprise, votre niveau et
> votre score. Votre adresse e-mail est enregistrée, jamais affichée
> publiquement, et ne sert qu'à vous envoyer votre carte de score. Vos données,
> vos règles.

**Option B, courte — celle qui est en place** — 186 caractères

> Au classement : nom d'affichage, entreprise, niveau, score. Votre e-mail est
> enregistré, jamais affiché, et sert seulement à vous envoyer votre carte de
> score. Vos données, vos règles.

**Option C, très courte** — 145 caractères

> Public : nom d'affichage, entreprise, niveau, score. Privé : votre e-mail,
> pour votre carte de score uniquement. Vos données, vos règles.

**Option D, deux temps** — 168 caractères

> Ce qui s'affiche : nom d'affichage, entreprise, niveau, score. Ce qui ne
> s'affiche jamais : votre e-mail, gardé pour votre seule carte de score. Vos
> données, vos règles.

---

## 2. Sous le classement

**Version de démonstration, fausse aujourd'hui**

> Version de démonstration : ce classement mélange des parcours d'exemple et
> ceux enregistrés dans votre navigateur. En ligne, il devient un classement
> unique et glissant sur les quatre départements.

**Option A, longue**

> Classement unique et glissant sur les quatre départements. Il affiche un nom
> d'affichage, une entreprise, un niveau et un score : jamais une adresse
> e-mail. Les premiers parcours sont des exemples, remplacés au fil des sessions
> réelles.

**Option B, courte — celle qui est en place**

> Un seul classement, quatre départements. Nom d'affichage, entreprise, niveau,
> score : jamais d'adresse e-mail. Les premiers parcours sont des exemples.

**Option C, très courte**

> Un seul classement sur quatre départements. Aucune adresse e-mail n'y figure.

---

## 3. Mention de pied

**Version de démonstration, fausse aujourd'hui**

> Version de démonstration · classement pré-rempli · aucune donnée ne quitte
> votre navigateur

**Option A**

> Classement sur les quatre départements · adresse e-mail jamais affichée

**Option B, celle qui est en place**

> Quatre départements · e-mail jamais affiché

---

## Le traitement visuel

Demandé le 28 août : que ces mentions pèsent moins à l'écran.

- **La note du classement et la mention de pied** sont floutées au repos et
  redeviennent nettes au survol et au clavier. Elles sont atteignables par
  tabulation, sinon une note qui ne se révèle qu'à la souris n'existe pas pour
  qui n'en a pas. Le flou disparaît aussi pour qui a demandé moins d'animation.
- **La mention de l'étape 05 n'est pas floutée**, et c'est un choix que je
  défends : c'est la phrase qu'on lit avant de donner son adresse. Elle est
  allégée, plus petite et plus discrète, jamais masquée. Flouter par défaut la
  divulgation qui précède une collecte se plaide mal, devant un utilisateur
  comme devant un auditeur.

Si vous préférez la flouter aussi, c'est une classe à ajouter et je le fais.
Mais je ne l'ai pas fait de moi-même.
