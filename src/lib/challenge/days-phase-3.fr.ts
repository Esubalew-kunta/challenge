/**
 * Phase 3, le faire travailler sans vous. Jours 21 à 30.
 *
 * Traduction française de `days-phase-3.ts`, jour pour jour.
 *
 * Mêmes règles que les phases 1 et 2 : numéros de jour et ordre des options de
 * quiz identiques à l'anglais, commandes et noms de fichiers non traduits.
 */

import type { Day } from "./types";

export const PHASE_3_DAYS_FR: Day[] = [
  /* --------------------------------------------------------------- Jour 21 */
  {
    day: 21,
    slug: "jour-21",
    title: "Des assistants qui ne font qu'une chose",
    term: "subagents",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Deux assistants écrits, chacun avec un seul métier et seulement les outils qu'il lui faut, et un des deux lancé sur du vrai travail.",
    outcome: "Deux assistants écrits, un des deux lancé",
    why: [
      "Un assistant général qui sait tout faire est moins bon sur une chose précise qu'un assistant étroit qui ne sait faire que ça.",
      "Un assistant a son propre départ à zéro, ses propres instructions, et seulement les outils que vous autorisez. Il part, fait le travail, et rend un résumé au lieu de remplir votre session avec tout ce qu'il a lu.",
    ],
    sections: [
      {
        heading: "C'est un fichier avec une fiche de poste",
        body: [
          "Un assistant, plus exactement un subagent, est un fichier markdown dans `.claude/agents/`. Quelques lignes en haut disent qui il est et quand l'utiliser. Tout ce qui suit, ce sont ses instructions.",
        ],
        table: {
          head: ["Ligne", "Ce qu'elle fait"],
          rows: [
            ["`name`", "Son identifiant. En minuscules avec des tirets."],
            [
              "`description`",
              "Quand lui confier du travail. C'est ce qui décide de la délégation.",
            ],
            [
              "`tools`",
              "Ce qu'il a le droit d'utiliser. Omettez-la et il a tout.",
            ],
            [
              "`model`",
              "Quelle taille de modèle. Omettez-la et il prend celui de votre session.",
            ],
          ],
        },
      },
      {
        heading: "Deux choses que vous gagnez vraiment",
        body: ["Les deux comptent, et la seconde est la raison de s'y mettre."],
        table: {
          head: ["Gain", "Pourquoi"],
          rows: [
            [
              "Votre session reste propre",
              "Il lit vingt fichiers et vous rend un paragraphe, au lieu de mettre les vingt dans votre conversation.",
            ],
            [
              "Vous pouvez lui retirer des outils",
              "Un relecteur avec des outils en lecture seule ne peut rien changer, quoi qu'il décide. C'est une contrainte, pas une consigne.",
            ],
          ],
        },
        callout: {
          tag: "La ligne `tools` est le cœur du sujet",
          body: [
            "Dire à quelque chose de ne pas modifier de fichiers est une consigne. Ne pas lui donner la capacité de modifier des fichiers est une garantie. Pour tout ce qui n'a qu'à regarder, retirez les outils d'écriture.",
          ],
        },
      },
      {
        heading: "Adaptez le modèle au travail",
        body: [
          "Le jour 14 disait d'adapter la taille de l'outil à la taille du travail, et laissait ça comme quelque chose dont il fallait se souvenir.",
          "C'est ici que ça devient automatique. Un assistant qui cherche et résume peut être réglé sur un modèle plus léger une fois, dans son fichier, et il a toujours raison ensuite.",
        ],
      },
    ],
    steps: [
      {
        title: "Créez le dossier",
        code: { label: "Terminal", code: "mkdir -p .claude/agents" },
      },
      {
        title: "Écrivez un assistant qui ne peut que regarder",
        body: [
          "Notez la ligne `tools`. Elle contient Read, Grep et Glob. Il n'a aucun moyen de changer quoi que ce soit, donc il ne peut pas, quelles que soient ses conclusions.",
        ],
        code: {
          label: ".claude/agents/reviewer.md",
          code: `---
name: reviewer
description: Relit du code pour trouver les problèmes et les risques. À utiliser après l'écriture d'une modification, ou quand je demande une relecture.
tools: Read, Grep, Glob
model: sonnet
---

Tu es un relecteur méticuleux. Tu ne peux rien changer, seulement rapporter.

Pour le code qu'on te donne, rapporte dans cet ordre :

1. Tout ce qui va casser, avec le fichier et la ligne
2. Tout ce qui est risqué : erreurs non gérées, valeurs en dur, tests manquants
3. Une chose qui pourrait être plus simple

Sois bref. Ne complimente pas le code. Si tu ne trouves rien, dis-le
en une ligne plutôt que d'inventer quelque chose.`,
        },
      },
      {
        title: "Écrivez-en un second qui ne fait que chercher",
        body: [
          "Celui-ci existe pour garder votre session principale propre. Il lit beaucoup et rend peu, ce qui est exactement ce à quoi un modèle plus léger est bon.",
        ],
        code: {
          label: ".claude/agents/finder.md",
          code: `---
name: finder
description: Trouve où vit une chose dans ce projet. À utiliser quand je demande où est quelque chose, ou comment ça marche, avant de modifier.
tools: Read, Grep, Glob
model: haiku
---

Tu trouves des choses. Tu ne changes rien et tu ne donnes pas d'avis.

Face à une question sur ce projet, renvoie :

1. Les fichiers qui comptent, avec leurs chemins
2. Une ligne chacun sur ce que fait ce fichier
3. Le meilleur endroit par où commencer à lire

Reste sous quinze lignes. Ne colle pas le contenu des fichiers.`,
        },
      },
      {
        title: "Utilisez-en un sur du vrai travail",
        body: [
          "Demandez-le par son nom. Regardez ce qui revient : un résumé, pas vingt fichiers.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "Utilise le reviewer pour regarder mes modifications non commitées.",
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Une session qui fait tout",
        "Vingt fichiers lus dans votre conversation",
      ],
      afterLabel: "Après",
      after: [
        "Un assistant qui lit vingt fichiers",
        "Un paragraphe qui revient",
        "Un relecteur qui ne peut physiquement pas modifier",
      ],
    },
    quiz: [
      {
        question:
          "Vous voulez un relecteur qui ne puisse jamais modifier votre code. Quelle est la méthode fiable ?",
        options: [
          "Lui donner une ligne `tools` avec seulement des outils de lecture",
          "Lui dire dans ses instructions de ne rien modifier",
        ],
        answer: 0,
        explanation:
          "Les instructions sont des consignes et sont généralement suivies. Retirer l'outil est une garantie. Pour tout ce qui ne doit pas arriver, retirez la capacité au lieu de demander.",
      },
      {
        question:
          "Qu'est-ce qui revient dans votre session principale quand un assistant a fini ?",
        options: [
          "Un résumé de ce qu'il a trouvé",
          "Tout ce qu'il a lu, ajouté à votre conversation",
        ],
        answer: 0,
        explanation:
          "C'est la principale raison pratique d'en utiliser un. La lecture se passe ailleurs et seule la conclusion revient.",
      },
      {
        question:
          "Un assistant dont tout le métier est de trouver des fichiers et de les résumer. Quel modèle ?",
        options: ["Un plus léger, réglé dans son fichier", "Le plus gros disponible"],
        answer: 0,
        explanation:
          "Chercher et résumer ne demandent pas de raisonnement lourd. Le régler une fois dans le fichier veut dire que vous n'avez jamais à y penser.",
      },
    ],
    nextTeaser: "Découpez un gros travail entre plusieurs assistants à la fois",
  },

  /* --------------------------------------------------------------- Jour 22 */
  {
    day: 22,
    slug: "jour-22",
    title: "Plusieurs assistants sur un gros travail",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Un gros travail répétitif découpé en morceaux, fait en même temps, et recomposé.",
    outcome: "Un gros travail découpé et terminé",
    why: [
      "Certains travaux sont cent petits travaux identiques déguisés en un seul. Renommer une chose dans quarante fichiers. Vérifier soixante pages pour le même problème.",
      "Fait un par un, c'est un après-midi. Découpé entre des assistants qui travaillent en même temps, c'est une pause café.",
    ],
    sections: [
      {
        heading: "Une seule forme de travail s'y prête",
        body: [
          "Découper n'aide que quand les morceaux n'ont pas besoin les uns des autres.",
        ],
        table: {
          head: ["Se découpe bien", "Ne se découpe pas"],
          rows: [
            [
              "La même vérification sur beaucoup de fichiers",
              "Une modification où l'étape 2 dépend de l'étape 1",
            ],
            [
              "Résumer quarante documents séparés",
              "Concevoir quelque chose, puis le construire",
            ],
            [
              "Convertir un dossier de fichiers, un par un",
              "Tout ce où les morceaux doivent s'accorder entre eux",
            ],
          ],
        },
      },
      {
        heading: "Trois façons de répartir le travail",
        body: ["Choisissez selon la vraie forme du travail."],
        table: {
          head: ["Forme", "Comment ça marche", "Bien pour"],
          rows: [
            [
              "Un chacun",
              "Chaque assistant prend un élément d'une liste",
              "Quarante fichiers, quarante assistants, même tâche",
            ],
            [
              "Angles différents",
              "Chaque assistant regarde la même chose autrement",
              "Un document relu pour la sécurité, le coût et la clarté",
            ],
            [
              "Deux hypothèses",
              "Deux assistants poursuivent des explications concurrentes",
              "Un bug où vous avez deux théories et aucune preuve",
            ],
          ],
        },
      },
      {
        heading: "Recomposer est le vrai travail",
        body: [
          "Douze résumés ne font pas une réponse. Quelqu'un doit tous les lire et produire une seule chose.",
          "Prévoyez cette étape avant de commencer. Dites d'entrée à quoi doit ressembler le résultat combiné, sinon vous vous retrouverez avec douze morceaux à faire la partie difficile à la main.",
        ],
        callout: {
          tag: "Commencez par trois",
          body: [
            "Pas quarante. Lancez votre découpage sur trois éléments d'abord et lisez les résultats correctement. Si la forme de la réponse est mauvaise, vous avez gâché trois assistants au lieu de quarante.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Trouvez un travail qui est en fait beaucoup de petits",
        body: [
          "Dans votre propre travail. Quelque chose où vous ouvririez sinon le même type de fichier encore et encore en faisant la même chose.",
        ],
      },
      {
        title: "Testez la forme sur trois",
        code: {
          label: "Tapez ceci à Claude",
          code: `Je veux [le travail] sur chaque fichier de [le dossier].

D'abord, fais-en exactement trois, en parallèle, un assistant
chacun. Montre-moi les trois résultats.

Ne fais pas le reste pour l'instant. Je veux vérifier la forme de
la réponse avant qu'on passe à l'échelle.`,
        },
      },
      {
        title: "Corrigez les instructions, puis lancez le reste",
        body: [
          "Ce qui était faux dans les trois sera faux dans les quarante. Corrigez la formulation, pas les trois résultats.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `La forme est bonne maintenant. Fais le reste de la même façon.

Quand tout est fini, combine en un seul résumé avec :
- Ce qui a été fait, en une ligne
- Ce qui a échoué, et pourquoi
- Ce qui demande que je regarde`,
        },
      },
      {
        title: "Vérifiez le milieu ennuyeux",
        body: [
          "Ne lisez pas juste le premier résultat et le dernier. Ouvrez-en deux du milieu, au hasard.",
          "Là où le découpage tourne mal, c'est en silence : un assistant a mal compris le travail et a produit quelque chose de plausible et faux, trente fois.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: ["Quarante fichiers, un par un", "Un après-midi"],
      afterLabel: "Après",
      after: ["Quarante fichiers à la fois", "Un résumé combiné", "Un café"],
    },
    quiz: [
      {
        question: "Quel travail se découpe bien entre plusieurs assistants ?",
        options: [
          "La même vérification appliquée à soixante fichiers séparés",
          "Une conception, puis une construction basée sur cette conception",
        ],
        answer: 0,
        explanation:
          "Les morceaux doivent être indépendants. Tout ce où l'étape 2 a besoin que l'étape 1 soit finie ne peut pas se faire en même temps.",
      },
      {
        question:
          "Avant de lancer votre découpage sur quarante éléments, que faire ?",
        options: [
          "Le lancer sur trois et vérifier la forme de la réponse",
          "Lancer les quarante. C'est tout l'intérêt du parallèle.",
        ],
        answer: 0,
        explanation:
          "Si les instructions sont légèrement fausses vous obtenez quarante résultats légèrement faux. Trois suffisent pour le voir, et coûtent peu à jeter.",
      },
      {
        question: "Comment vérifier quarante résultats ?",
        options: [
          "En ouvrir deux du milieu, au hasard",
          "Lire le premier et le dernier",
        ],
        answer: 0,
        explanation:
          "L'échec ici est silencieux et régulier : une incompréhension, répétée trente fois, le tout plausible. Des sondages au hasard trouvent ça. Les extrémités, non.",
      },
    ],
    nextTeaser:
      "Faites tourner deux travaux côte à côte sans qu'ils se marchent dessus",
  },

  /* --------------------------------------------------------------- Jour 23 */
  {
    day: 23,
    slug: "jour-23",
    title: "Travailler sur deux choses à la fois",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Deux travaux qui avancent côte à côte dans le même projet, sans aucun risque qu'ils s'écrasent l'un l'autre.",
    outcome: "Deux travaux côte à côte, rien qui se heurte",
    why: [
      "Hier vous avez découpé un travail entre des assistants. Ici c'est différent : deux travaux entièrement séparés, en même temps, dans le même projet.",
      "La façon évidente est d'ouvrir deux sessions dans le même dossier. Faites ça et elles modifieront les mêmes fichiers l'une sous l'autre, et vous ne le remarquerez qu'une fois quelque chose cassé.",
    ],
    sections: [
      {
        heading: "Pourquoi deux sessions dans un dossier tournent mal",
        body: [
          "Les deux voient les mêmes fichiers. Aucune ne sait que l'autre existe.",
          "L'une lit un fichier, réfléchit un instant, et le réécrit. Pendant cet instant l'autre l'a modifié. La première écriture annule la seconde en silence. Aucune erreur, aucun avertissement.",
        ],
      },
      {
        heading: "Donnez à chacune sa propre copie",
        body: [
          "La solution est un second dossier de travail qui partage le même historique mais a ses propres fichiers sur le disque.",
          "Dans git, ça s'appelle un worktree. Deux dossiers, un projet, des fichiers séparés. Chaque session en prend un et elles ne peuvent pas se toucher.",
        ],
        table: {
          head: ["Approche", "Ce qui se passe"],
          rows: [
            ["Deux sessions, un dossier", "Elles s'écrasent en silence"],
            [
              "Deux dossiers, deux copies du projet",
              "Sûr, mais l'historique est séparé et la fusion est pénible",
            ],
            [
              "Deux worktrees",
              "Sûr, un historique partagé, aucun problème de fusion",
            ],
          ],
        },
      },
      {
        heading: "Quand ça vaut l'installation",
        body: [
          "Pas pour tout. Il y a un vrai coût : deux dossiers à suivre, et il est facile d'oublier quelle fenêtre est laquelle.",
        ],
        table: {
          head: ["Ça vaut le coup", "Ça ne vaut pas le coup"],
          rows: [
            [
              "Un long travail, et une petite urgence qui arrive",
              "Deux petits travaux. Faites-les dans l'ordre.",
            ],
            [
              "Deux fonctionnalités qui touchent les mêmes fichiers",
              "Deux travaux dans des projets complètement différents",
            ],
            [
              "Quelque chose de long que vous voulez laisser tourner",
              "Tout ce que vous finirez en dix minutes",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Créez un second dossier de travail",
        body: [
          "Ceci crée un dossier à côté de votre projet, avec sa propre copie des fichiers et sa propre branche.",
        ],
        code: {
          label: "Terminal, depuis votre projet",
          code: "git worktree add ../monprojet-urgent -b urgent-fix",
        },
      },
      {
        title: "Ouvrez une session dans chacun",
        body: [
          "Un terminal dans votre dossier d'origine, un dans le nouveau. Deux sessions, deux jeux de fichiers, aucun recouvrement.",
        ],
        code: {
          label: "Dans le second terminal",
          code: `cd ../monprojet-urgent
claude`,
        },
      },
      {
        title: "Étiquetez vos fenêtres",
        body: [
          "Deux terminaux identiques et vous taperez dans le mauvais.",
          "Renommez les onglets, ou utilisez des couleurs différentes. Ce que votre terminal propose. Trente secondes maintenant.",
        ],
      },
      {
        title: "Nettoyez quand vous avez fini",
        body: [
          "Fusionnez la branche normalement, puis retirez le dossier en trop. Laisser traîner de vieux worktrees, c'est comme ça que ça devient confus.",
        ],
        code: {
          label: "Terminal",
          code: "git worktree remove ../monprojet-urgent",
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Une urgence arrive en plein travail",
        "Vous : arrêtez, mettez de côté, changez, perdez le fil",
      ],
      afterLabel: "Après",
      after: [
        "Long travail : continue dans une fenêtre",
        "Travail urgent : sa fenêtre, ses fichiers",
        "Aucun des deux ne sait que l'autre existe",
      ],
    },
    quiz: [
      {
        question: "Deux sessions dans le même dossier. Qu'est-ce qui tourne mal ?",
        options: [
          "Elles écrasent les modifications l'une de l'autre, en silence",
          "La seconde refuse de démarrer",
        ],
        answer: 0,
        explanation:
          "Il n'y a pas d'erreur. L'une écrit un fichier que l'autre avait déjà modifié, et la modification disparaît. Vous le découvrez plus tard, par le résultat.",
      },
      {
        question: "Qu'est-ce qu'un worktree vous donne ?",
        options: [
          "Un second dossier avec ses propres fichiers, partageant un historique",
          "Une seconde copie complète du projet, avec un historique séparé",
        ],
        answer: 0,
        explanation:
          "Des fichiers séparés veut dire aucun conflit. Un historique partagé veut dire aucune fusion pénible plus tard. C'est cette combinaison qui justifie de s'en servir.",
      },
      {
        question:
          "Deux petits travaux que vous finiriez en dix minutes chacun. Ça vaut la peine d'installer ça ?",
        options: [
          "Non. Faites-les l'un après l'autre.",
          "Oui. Le parallèle est toujours plus rapide.",
        ],
        answer: 0,
        explanation:
          "L'installation et le risque de taper dans la mauvaise fenêtre coûtent plus que dix minutes d'attente. C'est pour un long travail plus une interruption.",
      },
    ],
    nextTeaser: "Laissez un travail tourner de bout en bout sans personne pour regarder",
  },

  /* --------------------------------------------------------------- Jour 24 */
  {
    day: 24,
    slug: "jour-24",
    title: "Le faire tourner sans surveiller",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Un travail qui tourne de bout en bout tout seul, écrit son résultat dans un fichier, et vous dit si ça a marché.",
    outcome: "Un travail lancé de bout en bout, sans surveillance",
    why: [
      "Tout jusqu'ici vous a fait rester là à approuver des choses. C'est le jour où ça s'arrête.",
      "Une option transforme une conversation en commande. Vous donnez le travail à l'entrée, il fait le travail, il écrit la réponse, et il sort. Plus d'écran à surveiller.",
    ],
    sections: [
      {
        heading: "Une option change tout",
        body: [
          "Ajoutez `-p` et votre demande, et il tourne une fois puis s'arrête. Pas de session, pas d'attente de votre part.",
          "Il sort aussi avec un code de succès ou d'échec comme n'importe quelle autre commande, et c'est ce qui le rend utilisable dans un script.",
        ],
      },
      {
        heading: "Personne n'est là pour approuver",
        body: [
          "C'est la partie qui prend les gens de court. Sans personne pour regarder, tout ce qui aurait demandé une permission n'arrive tout simplement pas.",
          "Vous devez donc dire à l'avance ce qu'il a le droit de faire. Soyez précis. C'est le seul endroit où être généreux vous coûte.",
        ],
        table: {
          head: ["Option", "Ce qu'elle fait"],
          rows: [
            [
              "`--allowedTools \"Read,Edit\"`",
              "Autorise exactement ceux-là, rien d'autre",
            ],
            [
              "`--permission-mode acceptEdits`",
              "Le laisse écrire des fichiers sans demander",
            ],
            [
              "`--output-format json`",
              "Vous donne une sortie structurée qu'un script peut lire",
            ],
            [
              "`--bare`",
              "Ignore votre installation locale, pour qu'il tourne pareil sur n'importe quelle machine",
            ],
          ],
        },
        callout: {
          tag: "La règle des exécutions sans surveillance",
          body: [
            "Autorisez le plus petit ensemble d'outils qui permette au travail de se finir. Une exécution sans surveillance avec tout autorisé, c'est celle qui fait en silence quelque chose que vous ne vouliez pas à trois heures du matin.",
          ],
        },
      },
      {
        heading: "Laissez-vous quelque chose à lire après",
        body: [
          "Vous ne regardiez pas, donc la sortie est tout ce que vous avez. Envoyez-la dans un fichier, avec la date dans le nom.",
          "Une exécution qui ne laisse aucune trace est une exécution que vous ne pouvez pas déboguer, et vous aurez besoin de la déboguer.",
        ],
      },
    ],
    steps: [
      {
        title: "Lancez une chose sans session",
        body: [
          "Commencez par quelque chose qui ne fait que lire. Vous voulez voir la forme avant de le laisser changer quoi que ce soit.",
        ],
        code: {
          label: "Terminal",
          code: `claude -p "Résume ce qui a changé dans ce projet la semaine dernière" --allowedTools "Read,Grep,Glob"`,
        },
      },
      {
        title: "Envoyez le résultat quelque part",
        body: [
          "Maintenant il laisse une trace. Lancez-le deux fois et vous avez un historique à comparer.",
        ],
        code: {
          label: "Terminal",
          code: `claude -p "Résume ce qui a changé dans ce projet la semaine dernière" \\
  --allowedTools "Read,Grep,Glob" \\
  > reports/weekly-$(date +%F).md`,
        },
      },
      {
        title: "Envoyez-lui quelque chose par un tube",
        body: [
          "Il lit depuis l'entrée standard, donc il s'insère dans ce que vous avez déjà.",
        ],
        code: {
          label: "Terminal",
          code: `git diff main | claude -p "Liste tout ce qui a l'air risqué dans ce diff. Une ligne chacun. Si rien, ne dis rien."`,
        },
      },
      {
        title: "Emballez-le dans un script auquel vous pouvez vous fier",
        body: [
          "Enregistrez ceci, rendez-le exécutable, et lancez-le à la main plusieurs fois avant de laisser quoi que ce soit d'autre l'appeler.",
        ],
        code: {
          label: "scripts/weekly-summary.sh",
          code: `#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p reports

OUT="reports/weekly-$(date +%F).md"

claude -p "Résume ce qui a changé dans ce projet la semaine dernière.
Regroupe par domaine. Signale tout ce qui a l'air inachevé." \\
  --allowedTools "Read,Grep,Glob" \\
  > "$OUT"

echo "Écrit $OUT"`,
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Vous : ouvrez une session",
        "Vous : collez la même demande",
        "Vous : attendez et regardez",
      ],
      afterLabel: "Après",
      after: [
        "Un script le lance",
        "Un fichier apparaît",
        "Vous le lisez quand vous voulez",
      ],
    },
    quiz: [
      {
        question:
          "Dans une exécution sans surveillance, qu'arrive-t-il à ce qui a besoin d'une permission ?",
        options: [
          "Ça n'arrive pas. Personne n'est là pour approuver.",
          "Ça attend que quelqu'un approuve.",
        ],
        answer: 0,
        explanation:
          "C'est pour ça que vous dites à l'avance ce qui est autorisé. Un travail qui a sauté son étape principale en silence est l'échec classique de la première exécution sans surveillance.",
      },
      {
        question:
          "Combien d'outils faut-il autoriser dans une exécution sans surveillance ?",
        options: [
          "Le plus petit ensemble qui permette au travail de se finir",
          "Tous, pour qu'il ne se bloque pas",
        ],
        answer: 0,
        explanation:
          "Personne ne regarde. Tout autoriser, c'est comme ça qu'une chose non voulue arrive à trois heures du matin, sans personne pour l'arrêter.",
      },
      {
        question: "Pourquoi envoyer la sortie dans un fichier daté ?",
        options: [
          "Vous ne regardiez pas, donc c'est la seule trace que vous avez",
          "C'est plus rangé",
        ],
        answer: 0,
        explanation:
          "Quand ça tourne mal, et ça arrivera, le fichier est la seule chose que vous avez pour comprendre pourquoi. Une exécution sans trace ne peut pas être déboguée.",
      },
    ],
    sheet: {
      slot: 8,
      id: "sheet-unattended",
      title: "La fiche Sans surveillance",
      pitch:
        "Toutes les options qui comptent, plus un squelette de script qui échoue proprement.",
      contents: [
        "Les options, avec ce que chacune permet vraiment",
        "Un squelette de script qui marche, avec gestion d'erreur et journalisation",
        "Les quatre façons dont ces exécutions échouent en silence, et comment attraper chacune",
      ],
    },
    nextTeaser: "Faites tourner ce travail tout seul chaque matin",
  },

  /* --------------------------------------------------------------- Jour 25 */
  {
    day: 25,
    slug: "jour-25",
    title: "Le programmer pour qu'il tourne tout seul",
    phase: 3,
    minutes: 12,
    app: "needs-app",
    promise:
      "Un travail utile qui se lance tout seul à heure fixe et laisse la réponse à vous attendre.",
    outcome: "Un travail utile qui tourne chaque matin",
    why: [
      "Le script d'hier a encore besoin que vous tapiez son nom. Aujourd'hui il se lance tout seul.",
      "Le travail à choisir est celui que vous faites au même moment chaque semaine, et qui consiste surtout à rassembler des choses et à les lire.",
    ],
    sections: [
      {
        heading: "Votre ordinateur a déjà un planificateur",
        body: [
          "Vous n'avez besoin de rien de nouveau. Tous les systèmes en ont un intégré, et c'est le bon outil.",
        ],
        table: {
          head: ["Système", "Comment ça s'appelle"],
          rows: [
            ["macOS et Linux", "cron"],
            ["Windows", "Planificateur de tâches"],
            ["Un serveur que vous avez déjà", "Ce qu'il utilise déjà"],
          ],
        },
      },
      {
        heading: "Choisissez le bon travail",
        body: [
          "Un bon travail programmé rassemble et rapporte. Un mauvais change des choses.",
        ],
        table: {
          head: ["Bon travail programmé", "Mauvais travail programmé"],
          rows: [
            ["Résumer ce qui a changé cette semaine", "Réparer tout ce qu'il trouve"],
            ["Vérifier s'il y a des choses coincées", "Pousser des modifications automatiquement"],
            [
              "Rassembler vos notes dans un fichier",
              "Tout ce que vous ne pouvez pas facilement annuler",
            ],
          ],
        },
        callout: {
          tag: "Commencez en lecture seule",
          body: [
            "Votre premier travail programmé ne doit que lire et écrire un rapport. Une fois que vous l'avez vu être juste pendant deux semaines, alors envisagez de le laisser changer des choses.",
          ],
        },
      },
      {
        heading: "Trois choses qui le cassent",
        body: [
          "Un planificateur lance votre script dans un environnement bien plus vide que votre terminal.",
          "Il n'a aucune idée d'où est quoi, donc utilisez des chemins complets pour tout. Il n'a pas votre shell connecté, donc vérifiez qu'il trouve `claude` tout court. Et personne ne voit la sortie, donc écrivez-la dans un fichier et notez aussi les échecs.",
        ],
      },
    ],
    steps: [
      {
        title: "Rendez le script d'hier à toute épreuve",
        body: [
          "Des chemins complets, et un journal de ce qui s'est passé, que ça ait marché ou non.",
        ],
        code: {
          label: "scripts/weekly-summary.sh",
          code: `#!/bin/bash
set -euo pipefail

PROJECT="/chemin/complet/vers/votre/projet"
CLAUDE="/chemin/complet/vers/claude"

cd "$PROJECT"
mkdir -p reports logs

DATE=$(date +%F)
OUT="reports/weekly-$DATE.md"
LOG="logs/weekly-$DATE.log"

{
  echo "Démarré : $(date)"
  "$CLAUDE" -p "Résume ce qui a changé dans ce projet la semaine dernière.
Regroupe par domaine. Signale tout ce qui a l'air inachevé." \\
    --allowedTools "Read,Grep,Glob" \\
    > "$OUT"
  echo "Terminé : $(date). Écrit $OUT"
} >> "$LOG" 2>&1`,
        },
      },
      {
        title: "Trouvez où claude se trouve vraiment",
        body: [
          "Mettez la réponse dans le script ci-dessus. Le planificateur ne le trouvera pas tout seul.",
        ],
        panels: [
          {
            id: "mac",
            label: "macOS ou Linux",
            body: ["Lancez ceci et copiez le chemin affiché."],
            code: { label: "Terminal", code: "which claude" },
          },
          {
            id: "win",
            label: "Windows",
            body: ["Lancez ceci dans PowerShell et copiez le chemin affiché."],
            code: { label: "PowerShell", code: "(Get-Command claude).Source" },
          },
        ],
      },
      {
        title: "Lancez-le à la main d'abord",
        body: [
          "Deux fois. Lisez le rapport et lisez le journal. Si c'est faux maintenant, ce sera faux à sept heures du matin quand vous ne serez pas là.",
        ],
        code: { label: "Terminal", code: "bash scripts/weekly-summary.sh" },
      },
      {
        title: "Mettez-le à l'horaire",
        panels: [
          {
            id: "mac",
            label: "macOS ou Linux",
            body: [
              "Ouvrez votre horaire avec `crontab -e` et ajoutez cette ligne. Elle tourne à 7h chaque lundi.",
            ],
            code: {
              label: "crontab",
              code: "0 7 * * 1 /bin/bash /chemin/complet/vers/scripts/weekly-summary.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Ouvrez le Planificateur de tâches, créez une tâche de base, réglez-la sur chaque lundi à 7h, et pointez-la sur votre script.",
              "Cochez l'option pour l'exécuter que vous soyez connecté ou non, sinon elle ne fera tranquillement rien les matins où vous n'avez pas ouvert de session.",
            ],
          },
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: ["Lundi : penser à le lancer", "Lundi : souvent oublié"],
      afterLabel: "Après",
      after: ["Lundi 7h : ça tourne", "Lundi 9h : vous le lisez"],
    },
    quiz: [
      {
        question:
          "Que doit avoir le droit de faire votre premier travail programmé ?",
        options: [
          "Seulement lire, et écrire un rapport",
          "Ce dont il a besoin, pour finir le travail correctement",
        ],
        answer: 0,
        explanation:
          "Regardez-le être juste pendant deux semaines avant de le laisser changer quoi que ce soit. Personne n'est là pour l'arrêter, et personne ne le remarquera avant un moment.",
      },
      {
        question:
          "Pourquoi les chemins complets comptent-ils dans un script programmé ?",
        options: [
          "Le planificateur tourne dans un environnement plus vide et ne sait pas où est quoi",
          "Ils ne comptent pas. C'est juste plus rangé.",
        ],
        answer: 0,
        explanation:
          "C'est de loin la raison la plus fréquente pour laquelle un travail programmé ne fait rien en silence. Il ne trouve pas la commande, et personne ne regarde l'erreur.",
      },
      {
        question: "Avant de le programmer, que faut-il faire ?",
        options: [
          "Le lancer à la main deux fois et lire le journal",
          "Le programmer et regarder le rapport lundi",
        ],
        answer: 0,
        explanation:
          "Un travail faux maintenant sera faux à 7h quand vous dormez. Deux lancements manuels coûtent deux minutes et sauvent la semaine.",
      },
    ],
    nextTeaser:
      "Écrivez des instructions qui marchent vraiment au lieu de presque marcher",
  },

  /* --------------------------------------------------------------- Jour 26 */
  {
    day: 26,
    slug: "jour-26",
    title: "Des instructions qui méritent d'être gardées",
    phase: 3,
    minutes: 12,
    app: "anywhere",
    promise:
      "Une instruction dont vous étiez presque content, réécrite pour qu'elle marche à chaque fois.",
    outcome: "Une instruction faible réécrite correctement",
    why: [
      "Vous avez maintenant des skills, des assistants, des garde-fous et des travaux programmés, et chacun ne vaut que ce que valent les instructions à l'intérieur.",
      "Il y a une vraie différence entre une instruction qui marche la plupart du temps et une qui marche. C'est en général quatre choses précises, et aucune n'a à voir avec la politesse.",
    ],
    sections: [
      {
        heading: "Les quatre choses",
        body: ["Par ordre de différence qu'elles font."],
        table: {
          head: ["Chose", "Faible", "Fort"],
          rows: [
            [
              "Dire qui le fait",
              "Relis ça",
              "Tu es un relecteur méticuleux qui ne peut rien changer",
            ],
            [
              "Dire ce qui sort",
              "Résume la semaine",
              "Trois puces par client : ce qui a bougé, ce qui bloque, ce qui suit",
            ],
            [
              "Dire ce qu'il ne faut pas faire",
              "Sois précis",
              "N'invente pas d'avancement. Si un client n'a rien, dis-le",
            ],
            [
              "Dire quand s'arrêter",
              "Corrige les problèmes",
              "Rapporte les problèmes. Ne modifie aucun fichier.",
            ],
          ],
        },
      },
      {
        heading: "Dire ce qu'il ne faut pas faire",
        body: [
          "Décrire ce que vous voulez est facile. Écrire ce que vous corrigez sans arrêt est ce qui répare.",
          "Tout ce qu'il fait de travers deux fois, écrivez-le. Cette seule ligne fait plus que n'importe quelle description de la bonne version.",
        ],
        callout: {
          tag: "Comment trouver la vôtre",
          body: [
            "Regardez vos dernières sessions. Qu'avez-vous dû dire deux fois ? Cette phrase, écrite dans l'instruction, est la modification la plus rentable dont vous disposez aujourd'hui.",
          ],
        },
      },
      {
        heading: "Laissez-le vous interroger",
        body: [
          "Le chemin le plus rapide vers une bonne instruction n'est pas d'en écrire une. C'est qu'on vous pose les bonnes questions sur un travail que vous connaissez bien.",
          "Répondre à dix questions précises prend cinq minutes et produit mieux qu'une heure de rédaction.",
        ],
      },
    ],
    steps: [
      {
        title: "Prenez celle qui marche presque",
        body: [
          "Pas la meilleure. Celle que vous devez corriger toujours de la même façon. Une skill, un assistant, ou un bout de votre CLAUDE.md.",
        ],
      },
      {
        title: "Écrivez ce que vous corrigez sans arrêt",
        body: [
          "Une ligne. La chose exacte, avec les mots que vous emploieriez si vous étiez agacé. C'est votre ligne de ce qu'il ne faut pas faire et elle entre telle quelle.",
        ],
      },
      {
        title: "Faites-vous interroger",
        code: {
          label: "Tapez ceci à Claude",
          code: `Voici une instruction que j'utilise. Elle marche presque, et ce
que je corrige sans arrêt c'est : [ce que vous corrigez].

[collez votre instruction]

Interroge-moi pour la corriger. Une question à la fois, attends ma
réponse. Couvre : qui le fait, ce qui doit sortir exactement, ce
qu'il ne doit jamais faire, et quand il doit s'arrêter.

Ensuite réécris-la. Garde-la courte.`,
        },
      },
      {
        title: "Testez l'échec, pas le succès",
        body: [
          "N'importe qui peut tester le cas qui marche. Lancez-la sur le cas qui tournait mal.",
          "C'est le seul test qui vous dit si la journée valait le coup.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Une instruction qui marche presque",
        "La même correction, à chaque fois",
      ],
      afterLabel: "Après",
      after: [
        "La correction écrite dans l'instruction",
        "Ça arrête d'arriver",
      ],
    },
    quiz: [
      {
        question: "Laquelle de ces quatre est la plus sautée, et aide le plus ?",
        options: ["Dire ce qu'il ne doit jamais faire", "Dire qui le fait"],
        answer: 0,
        explanation:
          "Nommer l'échec que vous corrigez sans arrêt est la ligne qui répare. Décrire la bonne version, non.",
      },
      {
        question: "Quelle est la meilleure instruction ?",
        options: [
          '« N\'invente pas d\'avancement. Si un client n\'a rien, dis-le. »',
          '« Sois précis et complet. »',
        ],
        answer: 0,
        explanation:
          "La précise nomme l'échec réel. La générale est agréable et ne change rien.",
      },
      {
        question:
          "Après avoir réécrit une instruction, sur quoi la tester ?",
        options: [
          "Le cas qui tournait mal",
          "Un cas normal, pour vérifier que ça marche encore",
        ],
        answer: 0,
        explanation:
          "Le cas qui marchait marchait déjà. Le retester ne vous dit rien sur ce que vous avez réparé.",
      },
    ],
    sheet: {
      slot: 9,
      id: "sheet-instructions",
      title: "La fiche Instructions",
      pitch: "Les quatre choses, plus six modèles à adapter aujourd'hui.",
      contents: [
        "Les quatre choses, avec un exemple faible et un exemple fort de chacune",
        "La demande d'entretien, prête à coller",
        "Six modèles : relire, résumer, chercher, vérifier, convertir, rapporter",
      ],
    },
    nextTeaser: "Pointez-le sur vos propres notes et documents, pas seulement du code",
  },

  /* --------------------------------------------------------------- Jour 27 */
  {
    day: 27,
    slug: "jour-27",
    title: "Pointez-le sur vos notes et documents",
    phase: 3,
    minutes: 15,
    app: "needs-app",
    promise:
      "Vos propres notes, comptes rendus et documents, trouvables et utilisables en langage normal.",
    outcome: "Vos propres fichiers, trouvables et utilisables",
    why: [
      "Vous avez des années de notes, de comptes rendus et de documents à moitié finis. Vous savez que la réponse est là-dedans. Vous n'arrivez pas à la retrouver.",
      "La recherche ne marche que si vous vous rappelez les mots que vous aviez employés. La plupart du temps vous vous rappelez la situation, pas la formule.",
    ],
    sections: [
      {
        heading: "C'est un dossier, et ça n'a pas besoin d'être plus",
        body: [
          "Aucun outil spécial, aucun import, aucune base de données. Pointez-le sur un dossier de fichiers texte ou markdown et il sait les lire.",
          "Si vos notes vivent quelque part qui stocke des fichiers simples sur le disque, elles marchent déjà. Si elles sont enfermées dans une application, exportez-les d'abord.",
        ],
        table: {
          head: ["Où sont vos notes", "Quoi faire"],
          rows: [
            ["Des fichiers markdown ou texte dans un dossier", "Rien. Ça marche déjà."],
            [
              "Une application de notes qui synchronise vers des fichiers",
              "Pointez sur le dossier de synchronisation.",
            ],
            [
              "Un outil sans export de fichiers",
              "Exportez ce que vous pouvez. Commencez par la dernière année.",
            ],
            [
              "Éparpillées sur votre bureau",
              "Regroupez-les d'abord dans un dossier. C'est le vrai travail du jour.",
            ],
          ],
        },
      },
      {
        heading: "Trois choses qu'il fait et que la recherche ne fait pas",
        body: [
          "C'est la raison de s'y mettre, et rien de tout ça ne demande d'installation.",
        ],
        table: {
          head: ["Question", "Pourquoi la recherche échoue"],
          rows: [
            [
              "Qu'a-t-on décidé sur les tarifs, et pourquoi ?",
              "La décision est dans une note, le raisonnement dans une autre",
            ],
            [
              "Qu'ai-je promis à des gens sans l'avoir fait ?",
              "Personne n'écrit le mot promesse",
            ],
            [
              "Quel est le fil rouge de mes dix dernières notes ?",
              "Il n'y a aucune formule à chercher",
            ],
          ],
        },
      },
      {
        heading: "En lecture seule, jusqu'à ce que vous ayez confiance",
        body: [
          "Vos notes sont de la matière originale. Les perdre n'est pas comme perdre un fichier que vous pouvez regénérer.",
          "Les quinze premiers jours, laissez-le lire et écrire des résumés dans un nouveau dossier. Ne le laissez pas modifier ni réorganiser ce que vous ne pouvez pas remplacer.",
        ],
        callout: {
          tag: "Protégez-les correctement",
          body: [
            "Votre garde-fou du jour 8 fait déjà ça. Ajoutez votre dossier de notes à la liste protégée et la question de la confiance ne se pose plus.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Regroupez-les dans un dossier",
        body: [
          "Si elles y sont déjà, passez. Si elles sont éparpillées, c'est le vrai travail du jour et ça vaut la peine de le faire correctement.",
        ],
      },
      {
        title: "Protégez-les avant de commencer",
        body: [
          "Ajoutez le dossier aux motifs protégés de votre garde-fou du jour 8. Deux minutes, et ça supprime toute une catégorie d'inquiétude.",
        ],
        code: {
          label: "Dans .claude/hooks/protect-files.sh",
          code: `PROTECTED_PATTERNS=(".env" "package-lock.json" ".git/" "notes/")`,
        },
      },
      {
        title: "Posez-lui la question que la recherche ne sait pas traiter",
        body: [
          "Démarrez dans le dossier de notes et demandez quelque chose que vous avez vraiment échoué à retrouver.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Lis ces notes et dis-moi :

1. Qu'ai-je décidé à propos de [la chose], et quel était le raisonnement ?
2. De quelles notes ça vient ?

Si les notes se contredisent, dis-le au lieu d'en choisir une.
Si tu ne trouves pas, dis-le franchement.`,
        },
      },
      {
        title: "Faites-en un travail enregistré",
        body: [
          "La version utile de ça n'est pas une question ponctuelle, c'est la même question chaque semaine.",
        ],
        code: {
          label: ".claude/skills/loose-ends/SKILL.md",
          code: `---
description: Trouve les choses que j'ai dit que je ferais et que je n'ai pas closes. À utiliser quand je demande ce qui traîne ou ce que j'ai oublié.
---

## Instructions

Lis les notes modifiées ces trente derniers jours.

Trouve tout ce qui ressemble à un engagement : je vais, on devrait,
prochaine étape, à suivre, je reviens vers.

Pour chacun rapporte :
- Ce qui a été promis
- Quelle note, et à peu près quand
- Si quelque chose de plus tard suggère que c'est fait

Trie du plus ancien au plus récent. N'inclus pas ce qui est
clairement terminé. Si tu n'es pas sûr que ce soit un engagement,
inclus-le et dis que tu n'es pas sûr.`,
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Vous : cherchez un mot dont vous ne vous souvenez pas",
        "Vous : abandonnez et demandez à quelqu'un",
      ],
      afterLabel: "Après",
      after: [
        'Vous : « qu\'a-t-on décidé sur les tarifs, et pourquoi ? »',
        "Lui : lit tout et vous répond, avec les sources",
      ],
    },
    quiz: [
      {
        question: "Que faut-il pour rendre vos notes utilisables ?",
        options: [
          "Un dossier de fichiers texte. Rien d'autre.",
          "Un import, et un outil spécial",
        ],
        answer: 0,
        explanation:
          "Si vos notes sont des fichiers simples sur le disque, elles marchent déjà. Le seul vrai travail est de les regrouper dans un dossier.",
      },
      {
        question:
          "Les quinze premiers jours, que doit-il avoir le droit de faire avec vos notes ?",
        options: [
          "Les lire, et écrire des résumés ailleurs",
          "Les lire et les réorganiser, pour que ce soit plus rangé",
        ],
        answer: 0,
        explanation:
          "Les notes sont de la matière originale. Une note perdue n'est pas comme un fichier généré perdu. Ajoutez-les à votre garde-fou du jour 8 et la question disparaît.",
      },
      {
        question:
          "Quelle question vaut la peine d'être posée à vos notes, et que la recherche ordinaire ne sait pas traiter ?",
        options: [
          '« Qu\'ai-je promis à des gens sans l\'avoir fait ? »',
          '« Trouve la note qui contient le mot facture »',
        ],
        answer: 0,
        explanation:
          "Personne n'écrit le mot promesse. La recherche exige que vous vous rappeliez la formule, et en général vous ne vous rappelez que la situation.",
      },
    ],
    nextTeaser: "Servez-vous-en pour du travail qui n'a rien à voir avec du code",
  },

  /* --------------------------------------------------------------- Jour 28 */
  {
    day: 28,
    slug: "jour-28",
    title: "Utilisez-le pour du travail qui n'est pas du code",
    phase: 3,
    minutes: 15,
    app: "anywhere",
    promise:
      "Une vraie tâche de votre vrai métier, faite de bout en bout, sans une ligne de code nulle part.",
    outcome: "Une vraie tâche non technique faite de bout en bout",
    why: [
      "La plupart de ce qui s'écrit sur cet outil suppose que vous êtes développeur. La plupart des gens dans une entreprise ne le sont pas.",
      "Il ne sait pas ce que contient un fichier tant qu'il ne l'a pas ouvert. Un tableur de factures, un dossier de contrats et un dossier de code source sont pour lui le même genre de problème.",
    ],
    sections: [
      {
        heading: "Ce à quoi il est vraiment bon",
        body: [
          "Enlevez le code et ce qui reste c'est : lire beaucoup de choses, trouver le motif, et produire quelque chose de régulier à partir de là.",
          "Ça décrit l'essentiel de la partie fastidieuse de la plupart des métiers de bureau.",
        ],
        table: {
          head: ["Si vous travaillez en", "Il peut"],
          rows: [
            [
              "Finance",
              "Lire un dossier de factures et trouver chacune qui ne correspond pas au tarif convenu",
            ],
            [
              "Opérations",
              "Transformer douze comptes rendus en un document d'état, de la même forme à chaque fois",
            ],
            [
              "Ressources humaines",
              "Vérifier chaque fiche de poste face à vos propres standards de rédaction et lister ce qui diffère",
            ],
            [
              "Juridique ou achats",
              "Comparer quinze contrats fournisseurs et produire un tableau des clauses qui diffèrent",
            ],
            [
              "Service client",
              "Lire six mois de tickets et trouver les dix questions qui reviennent sans arrêt",
            ],
          ],
        },
      },
      {
        heading: "La seule règle qui le rend utile",
        body: [
          "Des fichiers, pas des captures d'écran. Il sait lire ce qui est dans un dossier. Il ne sait pas lire votre logiciel de comptabilité à travers l'écran.",
          "La première étape de tout travail non technique est donc presque toujours : exporter la chose dans un dossier. Une fois que c'est un dossier de fichiers, tout ce qui est dans ces trente jours s'y applique.",
        ],
        table: {
          head: ["Marche bien", "Ne marche pas"],
          rows: [
            [
              "Un dossier de PDF, tableurs, documents",
              "Une application web où il faut cliquer",
            ],
            ["Un export de votre système", "Une capture d'écran d'un rapport"],
            ["Texte simple, markdown, CSV", "Tout ce que seuls vos yeux atteignent"],
          ],
        },
      },
      {
        heading: "Dites à quoi ressemble le résultat",
        body: [
          "Le travail technique a en général une bonne réponse évidente. Le travail de bureau, non : il a une forme que quelqu'un attend.",
          "Décrivez donc la forme. Pas résume ces contrats, mais un tableau avec une ligne par fournisseur et ces cinq colonnes. Montrez-lui à quoi ressemble le bon et vous l'obtenez.",
        ],
        callout: {
          tag: "La vérification qui compte",
          body: [
            "Prenez trois des fichiers sources au hasard et vérifiez vous-même le résultat contre eux. Pas les trois premiers. Au hasard. C'est comme ça que vous découvrez s'il a compris le travail ou s'il a seulement produit quelque chose de plausible.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Prenez quelque chose de vrai et de fastidieux",
        body: [
          "Pas une démo. Quelque chose que vous avez vraiment fait le mois dernier, qui a pris deux heures et qui consistait à lire beaucoup de choses semblables.",
        ],
      },
      {
        title: "Mettez-le dans un dossier",
        body: [
          "Exportez depuis là où ça vit. Dix ou vingt fichiers suffisent pour un premier essai. Mettez-les dans un dossier et partez de là.",
        ],
      },
      {
        title: "Décrivez la forme de la réponse",
        body: [
          "Plus vous décrivez le résultat précisément, moins vous aurez à corriger.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Dans ce dossier il y a [ce que c'est].

Lis-les tous et produis un tableau avec une ligne par [chose]
et ces colonnes :

- [colonne 1]
- [colonne 2]
- [colonne 3]

Règles :
- S'il manque quelque chose dans un fichier, écris « non précisé ». Ne devine pas.
- Signale tout ce qui a l'air incohérent avec les autres.
- Ne résume pas. Je veux le tableau.

Enregistre ça dans summary.md.`,
        },
      },
      {
        title: "Vérifiez-en trois au hasard",
        body: [
          "Ouvrez trois fichiers sources au hasard et vérifiez la ligne qui vient de chacun. Pas les trois premiers.",
          "Si les trois sont justes, vous pouvez faire confiance au reste. Si un est faux, ce sont les instructions qu'il faut corriger, pas le résultat.",
        ],
      },
      {
        title: "Enregistrez-le, pour que le mois prochain prenne cinq minutes",
        body: [
          "C'est l'étape qui transforme deux heures en cinq minutes pour toujours. Comme au jour 9 : un dossier, un `SKILL.md`, l'instruction dont vous venez de prouver qu'elle marche.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Deux heures",
        "Ouvrir le même type de fichier quarante fois",
        "Tous les mois",
      ],
      afterLabel: "Après",
      after: [
        "Export dans un dossier",
        "Un travail enregistré",
        "Cinq minutes, et vous en vérifiez trois",
      ],
    },
    quiz: [
      {
        question: "Peut-il lire votre logiciel de comptabilité directement ?",
        options: [
          "Non. Exportez d'abord dans un dossier de fichiers.",
          "Oui, si vous lui montrez l'écran",
        ],
        answer: 0,
        explanation:
          "Des fichiers, pas des écrans. Exporter est la première étape de presque tout travail non technique, et une fois que c'est un dossier tout le reste s'applique.",
      },
      {
        question:
          "Quelle est la partie la plus importante de l'instruction pour du travail de bureau ?",
        options: [
          "Décrire exactement à quoi le résultat doit ressembler",
          "Expliquer le contexte en détail",
        ],
        answer: 0,
        explanation:
          "Il y a rarement une bonne réponse, seulement la forme que quelqu'un attend. Décrivez la forme et vous l'obtenez. Laissez ouvert et vous obtenez quelque chose de plausible.",
      },
      {
        question: "Vous obtenez un tableau de quarante lignes. Comment le vérifier ?",
        options: [
          "Ouvrir trois fichiers sources au hasard et vérifier leurs lignes",
          "Lire tout le tableau attentivement",
        ],
        answer: 0,
        explanation:
          "Lire le résultat vous dit seulement qu'il a l'air raisonnable. En vérifier trois au hasard contre la source vous dit s'il a compris le travail.",
      },
    ],
    nextTeaser:
      "Transmettez toute votre installation à un collègue pour qu'elle marche chez lui",
  },

  /* --------------------------------------------------------------- Jour 29 */
  {
    day: 29,
    slug: "jour-29",
    title: "Donnez votre installation à quelqu'un d'autre",
    phase: 3,
    minutes: 12,
    app: "needs-app",
    promise:
      "Tout ce que vous avez construit, emballé pour qu'un collègue le fasse marcher en dix minutes sans rien vous demander.",
    outcome: "Votre installation emballée pour un collègue",
    why: [
      "Vous avez passé un mois à construire quelque chose qui marche. Pour l'instant ça marche pour exactement une personne, sur une machine.",
      "C'est aussi le jour qui décide si ça reste votre habitude privée ou si ça devient la façon dont votre équipe travaille.",
    ],
    sections: [
      {
        heading: "Une partie voyage, une partie non",
        body: [
          "Sachez laquelle est laquelle avant de promettre quoi que ce soit à qui que ce soit.",
        ],
        table: {
          head: ["Quoi", "Ça voyage ?", "Pourquoi"],
          rows: [
            ["`CLAUDE.md`", "Oui", "Commité avec le projet"],
            ["`.claude/rules/`", "Oui", "Commité"],
            ["`.claude/skills/`", "Oui", "Commité"],
            ["`.claude/agents/`", "Oui", "Commité"],
            [
              "`.claude/hooks/`",
              "Oui, avec précaution",
              "Les scripts se commitent, mais peuvent demander un réglage par machine",
            ],
            [
              "`.claude/settings.json`",
              "Oui",
              "Commité, donc les garde-fous sont branchés pour tout le monde",
            ],
            ["La mémoire", "Non", "Locale à la machine, et propre à vous"],
            ["Tout ce qui est dans `.env`", "Jamais", "Chacun a besoin du sien"],
          ],
        },
      },
      {
        heading: "Les trois choses qui cassent sur la machine d'un autre",
        body: ["Chacune est évitable et chacune arrive."],
        table: {
          head: ["Ce qui casse", "La solution"],
          rows: [
            [
              "Un chemin complet vers votre dossier personnel",
              "Utilisez la variable de projet au lieu de `/Users/votrenom/`",
            ],
            [
              "Un outil que vous avez installé et pas eux",
              "Listez ce qu'il faut, ou vérifiez-le dans le script",
            ],
            [
              "Un script non exécutable sur leur machine",
              "Dites-le dans la note d'installation. Windows et Mac diffèrent ici.",
            ],
          ],
        },
      },
      {
        heading: "Écrivez la note pour quelqu'un qui n'a rien",
        body: [
          "Supposez qu'ils n'ont rien installé, n'ont jamais utilisé ça, et ne vous poseront aucune question. Ils abandonneront simplement en silence.",
          "Cinq étapes numérotées. Si ça prend plus de dix minutes, coupez quelque chose.",
        ],
        callout: {
          tag: "Le test qui marche vraiment",
          body: [
            "Regardez un collègue suivre votre note sans l'aider. Ne dites rien, même quand il bloque. Chaque endroit où il hésite est une ligne qu'il faut ajouter. Ça prend quinze minutes et ça trouve ce que vous ne pouvez pas voir vous-même.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Vérifiez qu'il n'y a rien de personnel là-dedans",
        body: [
          "C'est le point important. Tout ce qui vient du jour 7 s'applique, et c'est le moment où ça se fait commiter à la vue de tous.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Regarde mon CLAUDE.md, .claude/rules/, .claude/skills/,
.claude/agents/, .claude/hooks/ et .claude/settings.json.

Trouve tout ce qui ne marcherait pas sur la machine d'un collègue :

1. Tout identifiant ou clé
2. Tout chemin propre à moi, comme /Users/monnom/
3. Tout ce qui suppose un outil que j'ai installé
4. Tout ce qui est propre à ma machine ou à mon système

Liste chaque cas avec le fichier et la ligne, et comment le corriger.`,
        },
      },
      {
        title: "Corrigez les chemins",
        body: [
          "Utilisez la variable de projet au lieu d'un chemin complet. Elle marche sur toutes les machines, y compris la leur.",
        ],
        code: {
          label: "Dans .claude/settings.json",
          code: `"command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh"`,
        },
      },
      {
        title: "Écrivez la note d'installation",
        body: [
          "Courte. Numérotée. Honnête sur le temps que ça prend et sur ce qui peut mal tourner.",
        ],
        code: {
          label: "SETUP.md",
          code: `# Mise en route

Environ dix minutes.

## Ce qu'il vous faut d'abord
- Claude Code installé (un compte Claude gratuit ne l'inclut pas)
- Git

## Étapes
1. Clonez ce projet et ouvrez un terminal dedans
2. Copiez \`.env.example\` en \`.env\` et remplissez vos propres valeurs
3. Sur Mac ou Linux uniquement : \`chmod +x .claude/hooks/*.sh\`
4. Lancez \`claude\` dans le dossier du projet
5. Tapez \`/context\` et vérifiez que CLAUDE.md apparaît sous Memory files

## Si l'étape 5 n'affiche rien
Vous n'êtes probablement pas à la racine du projet. Vérifiez avec \`pwd\`.

## Ce que vous obtenez
- \`/review\` relit vos modifications non commitées
- \`/rapport-hebdo\` construit le point client
- Un garde-fou qui empêche toute modification de .env`,
        },
      },
      {
        title: "Regardez quelqu'un le faire",
        body: [
          "Un collègue, quinze minutes, et vous ne dites rien. Chaque hésitation est une ligne manquante.",
          "C'est inconfortable et c'est le seul test qui trouve ce que vous ne pouvez pas voir.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Une personne l'a",
        "Tous les autres : vous demandent",
        "Ou s'en passent",
      ],
      afterLabel: "Après",
      after: ["Cloner, cinq étapes, dix minutes", "Personne n'a besoin de vous demander"],
    },
    quiz: [
      {
        question: "Lequel de ceux-ci ne voyage pas jusqu'à un collègue ?",
        options: ["Vos fichiers de mémoire", "Votre dossier `.claude/skills/`"],
        answer: 0,
        explanation:
          "La mémoire est locale à la machine et propre à vous. Les skills, les règles, les agents et CLAUDE.md se commitent tous et voyagent avec le projet.",
      },
      {
        question:
          "Votre garde-fou utilise `/Users/votrenom/projet/.claude/hooks/check.sh`. Que se passe-t-il sur leur machine ?",
        options: [
          "Il ne fait rien, en silence, parce que ce chemin n'existe pas",
          "Ça marche. Les chemins sont résolus automatiquement.",
        ],
        answer: 0,
        explanation:
          "Utilisez la variable de projet à la place. Un garde-fou qui ne tourne pas en silence est pire que pas de garde-fou, parce que tout le monde se croit protégé.",
      },
      {
        question: "Quel est le vrai test de votre note d'installation ?",
        options: [
          "Regarder un collègue la suivre pendant que vous ne dites rien",
          "La relire attentivement vous-même",
        ],
        answer: 0,
        explanation:
          "Vous ne pouvez pas voir vos propres suppositions. Chaque endroit où il hésite est une ligne dont vous ne saviez pas qu'elle manquait.",
      },
    ],
    nextTeaser: "Voyez tout le système en un seul endroit, et ce qu'il reste à faire",
  },

  /* --------------------------------------------------------------- Jour 30 */
  {
    day: 30,
    resource: { id: "company-kit" },
    slug: "jour-30",
    title: "Tout au même endroit",
    phase: 3,
    minutes: 14,
    app: "anywhere",
    promise:
      "Tout le système sur une page, un regard honnête sur ce que vous utilisez vraiment, et une décision sur la suite.",
    outcome: "Une référence complète, et un bilan honnête",
    why: [
      "Il y a trente jours vous n'aviez rien d'installé. Ce que vous avez maintenant est un système, et ça vaut la peine de pouvoir le voir en entier d'un coup.",
      "Aujourd'hui c'est une référence, un tri, et une décision. Ce n'est pas une leçon.",
    ],
    sections: [
      {
        heading: "Tout, dans un tableau",
        body: [
          "Sept sortes de choses. Chacune fait un métier que les autres ne peuvent pas faire.",
        ],
        table: {
          head: ["Pièce", "À quoi ça sert", "Jour"],
          rows: [
            ["`CLAUDE.md`", "Des faits toujours vrais", "2"],
            ["`.claude/rules/`", "Des faits vrais seulement pour certains fichiers", "12"],
            ["La mémoire", "Ce qu'il a appris tout seul", "4"],
            ["`.claude/skills/`", "Des procédures que vous répétez", "9, 15, 19"],
            ["`.claude/agents/`", "Des travaux étroits, avec des outils retirés", "21"],
            ["`.claude/hooks/`", "Ce qui doit ou ne doit jamais arriver", "8, 11"],
            ["Les connexions", "Des données à jour derrière une connexion", "16"],
          ],
        },
      },
      {
        heading: "Où va une nouvelle chose",
        body: [
          "C'est la question que vous aurez sans arrêt. Quatre questions, dans l'ordre, le premier oui gagne.",
          "1. Est-ce que ça doit arriver, ou ne doit jamais arriver ? Un garde-fou.",
          "2. Est-ce un fait toujours vrai ? CLAUDE.md. Vrai seulement pour certains fichiers ? Une règle.",
          "3. Est-ce une procédure avec des étapes ? Une skill.",
          "4. Est-ce un travail étroit qui ne devrait pas avoir tous les outils ? Un agent.",
        ],
        callout: {
          tag: "Celui qu'il faut réussir",
          body: [
            "Si quelque chose ne doit vraiment jamais arriver, c'est un garde-fou, pas une instruction. CLAUDE.md est une consigne et elle est généralement suivie. Un garde-fou est une contrainte et il s'exécute toujours.",
          ],
        },
      },
      {
        heading: "Vous n'utiliserez pas la plupart de tout ça",
        body: [
          "C'est normal et ce n'est pas un échec. Une installation qui fait quatre choses tous les jours vaut plus qu'une qui en fait vingt que vous avez oubliées.",
          "Le vrai travail du jour est de supprimer ce que vous avez construit et jamais utilisé.",
        ],
      },
    ],
    steps: [
      {
        title: "Listez ce que vous avez vraiment",
        code: {
          label: "Terminal",
          code: `ls -R .claude/
cat CLAUDE.md | head -20`,
        },
      },
      {
        title: "Demandez-lui ce que vous n'utilisez jamais",
        body: [
          "Préparez-vous à la réponse. Un tiers de ce que vous avez construit n'a probablement jamais été lancé.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Regarde tout ce qui est dans mon dossier .claude/ et mon CLAUDE.md.

Pour chaque skill, agent, garde-fou et règle, dis-moi :
1. Ce que ça fait, en une ligne
2. S'il y a le moindre signe que je m'en sois servi
3. Si ça fait doublon avec autre chose

Ensuite dis-moi quoi supprimer. Sois franc. Ne sois pas encourageant.`,
        },
      },
      {
        title: "Supprimez",
        body: [
          "Tout ce dont vous ne vous êtes pas servi depuis un mois. C'est dans votre historique si vous le voulez un jour.",
          "Une installation courte que vous comprenez bat une longue à laquelle il faut réfléchir.",
        ],
      },
      {
        title: "Faites le bilan honnête",
        body: [
          "Pas une note. Six questions. Chacune à laquelle vous ne savez pas répondre pointe le jour qui vaut la peine d'être repris.",
        ],
        code: {
          label: "Répondez-y vous-même",
          code: `1. Quelle pièce empêche une chose d'arriver, au lieu de la demander ?
2. Où va un fait vrai seulement pour les fichiers de test ?
3. Quelle est la différence entre ce que vous écrivez et ce qu'il écrit ?
4. Pourquoi une connexion inutilisée n'est-elle pas gratuite ?
5. Que fait le code de sortie 2 ?
6. Qu'est-ce qui ne doit jamais se trouver dans aucun de ces fichiers ?`,
        },
      },
      {
        title: "Décidez une chose",
        body: [
          "Une. Soit : reprenez le jour auquel vous n'avez pas su répondre. Soit : prenez un travail que vous faites encore à la main et enregistrez-le.",
          "Pas un plan. Une chose.",
        ],
      },
    ],
    win: {
      beforeLabel: "Il y a trente jours",
      before: [
        "Rien d'installé",
        "À vous expliquer à chaque session",
        "À copier des fichiers dans une fenêtre de chat",
      ],
      afterLabel: "Maintenant",
      after: [
        "Un système qui connaît votre projet",
        "Qui apprend de vos corrections",
        "Qui refuse de toucher à ce qui compte",
        "Qui fait tourner des travaux pendant que vous dormez",
        "Et qu'un collègue peut installer en dix minutes",
      ],
    },
    quiz: [
      {
        question:
          "Quelque chose ne doit jamais arriver, quoi qu'il arrive. Où est sa place ?",
        options: [
          "Un garde-fou, parce qu'il s'exécute toujours",
          "CLAUDE.md, parce que la règle est écrite",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md est une consigne, généralement suivie. Un garde-fou est une contrainte et il s'exécute toujours. Tout ce qui ne doit vraiment jamais arriver a sa place dans un garde-fou.",
      },
      {
        question:
          "Un fait vrai seulement quand on travaille sur des fichiers de test. Où va-t-il ?",
        options: [
          "Une règle dans `.claude/rules/` avec un filtre de chemin",
          "CLAUDE.md, avec une note disant que ça ne vaut que pour les tests",
        ],
        answer: 0,
        explanation:
          "Dans CLAUDE.md il se charge à chaque session, que vous soyez près d'un test ou non. Un filtre de chemin fait qu'il n'apparaît que quand c'est pertinent.",
      },
      {
        question: "Vous avez construit neuf skills et vous en utilisez deux. Que faire ?",
        options: [
          "Supprimer les sept. Elles sont dans votre historique si vous les voulez.",
          "Toutes les garder. Elles pourraient servir un jour.",
        ],
        answer: 0,
        explanation:
          "Une installation courte que vous comprenez bat une longue à laquelle il faut réfléchir. Supprimer est le vrai travail du dernier jour.",
      },
    ],
    sheet: {
      slot: 10,
      id: "sheet-complete-guide",
      title: "Le Guide complet",
      pitch: "Les trente jours en un seul document. Plus rien à rechercher.",
      contents: [
        "Les trente jours, écrits, dans l'ordre",
        "Chaque commande et chaque chemin de fichier dans une section de référence",
        "Les règles de décision sur où va quoi, sur une page",
        "Une trace que vous avez terminé, si vous en voulez une",
      ],
    },
    nextTeaser: "Retour au début, ou où vous voulez aller ensuite",
  },
];

