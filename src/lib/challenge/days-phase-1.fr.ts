/**
 * Phase 1, le faire fonctionner. Jours 1 à 10.
 *
 * Traduction française de `days-phase-1.ts`, jour pour jour.
 *
 * Deux règles à ne pas casser :
 *
 * 1. **Les numéros de jour et l'ordre des options de quiz sont identiques à
 *    l'anglais.** La progression du lecteur est stockée par numéro de jour et
 *    par index d'option. Réordonner une réponse ici transformerait une bonne
 *    réponse en mauvaise pour quelqu'un qui change de langue en cours de route.
 *    Un contrôle automatique le vérifie dans `index.fr.ts`.
 *
 * 2. **Les commandes ne se traduisent pas.** `claude --version` reste
 *    `claude --version`. Ce qui se traduit : les libellés, les explications, et
 *    ce que le lecteur tape en français à Claude.
 */

import type { Day } from "./types";
import { INSTALL, SETTINGS_PATHS } from "./registry";
import {
  EXIT_CODES_FR,
  PLAN_REQUIREMENT_FR,
  SYSTEM_REQUIREMENTS_FR,
} from "./registry.fr";

export const PHASE_1_DAYS_FR: Day[] = [
  /* ---------------------------------------------------------------- Jour 1 */
  {
    day: 1,
    slug: "jour-1",
    title: "Faites connaissance avec Claude Code",
    phase: 1,
    minutes: 18,
    app: "anywhere",
    promise:
      "À la fin de cette page, il est installé, connecté, et il vous a dit quelque chose de vrai sur vos propres fichiers.",
    outcome: "Une installation qui marche",
    why: [
      "Une fenêtre de chat peut vous dire quoi faire. Elle ne peut pas ouvrir vos fichiers, les modifier, ni rien exécuter. Vous passez la journée à recopier des réponses dans un sens puis dans l'autre.",
      "Claude Code est posé sur votre ordinateur et fait le travail. Même conversation, mais il lit les vrais fichiers et fait les vraies modifications. Tout le reste de ces trente jours repose sur cette page.",
    ],
    sections: [
      {
        heading: "Il travaille sur vos fichiers, pas sur des copies",
        body: [
          "Vous ne collez rien. Vous le pointez sur un dossier et vous posez votre question en français normal. Il va regarder.",
          "Vous n'avez pas non plus à lui dire quel fichier ouvrir. Il le trouve tout seul. C'est ça qui surprend les gens le premier jour.",
        ],
      },
      {
        heading: "Il y a plusieurs façons de le lancer",
        body: [
          "Le même outil, plusieurs portes d'entrée. Prenez celle où vous êtes le plus à l'aise. Vous pourrez changer plus tard.",
        ],
        table: {
          head: ["Où", "Bien pour"],
          rows: [
            [
              "Application de bureau",
              "Jamais touché un terminal. Des boutons et des fenêtres. Commencez ici si le mot terminal vous rebute.",
            ],
            [
              "Le terminal",
              "La façon principale dont la plupart des gens l'utilisent. Tout marche ici.",
            ],
            [
              "Votre éditeur de code",
              "VS Code et JetBrains, si vous y vivez déjà.",
            ],
            ["Le web", "Pour essayer sans rien installer."],
          ],
        },
        callout: {
          tag: "Bon à savoir dès maintenant",
          body: [
            "Les jours 1 à 6 marchent n'importe où. À partir du jour 7, vous le voudrez sur votre propre ordinateur, parce que ces jours-là créent des fichiers et lancent des scripts chez vous. Si vous n'avez qu'un navigateur aujourd'hui, continuez à lire, puis revenez à ces jours-là depuis votre bureau.",
          ],
        },
      },
      {
        heading: "Ce n'est pas inclus dans l'offre gratuite",
        body: [
          `Il vous faudra aussi un ordinateur des dernières années. ${SYSTEM_REQUIREMENTS_FR}`,
        ],
        callout: {
          tag: "Avant d'installer",
          body: [`${PLAN_REQUIREMENT_FR.short} ${PLAN_REQUIREMENT_FR.long}`],
        },
      },
    ],
    steps: [
      {
        title: "Vérifiez votre compte Claude",
        body: [
          "Ouvrez claude.ai et regardez votre offre. Si elle indique Free, il faudra monter avant que l'étape suivante fonctionne. Si vous êtes sur Pro, Max, Team ou Enterprise, vous êtes prêt.",
        ],
      },
      {
        title: "Installez-le",
        panels: [
          {
            id: "mac",
            label: "macOS ou Linux",
            body: [
              "Ouvrez le Terminal et collez cette seule ligne.",
              "Elle télécharge et installe tout. Il se met aussi à jour tout seul ensuite, donc c'est la seule fois où vous faites ça.",
            ],
            code: { label: "Terminal", code: INSTALL.mac },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Ouvrez PowerShell et collez cette seule ligne.",
              "Comment savoir que vous êtes bien dans PowerShell : la ligne où vous tapez commence par `PS C:\\`. S'il n'y a pas de `PS`, vous êtes dans l'invite de commandes et cette ligne ne marchera pas. Ouvrez PowerShell à la place.",
              "Facultatif mais recommandé : installez Git pour Windows. Ça donne à Claude Code une meilleure façon d'exécuter des commandes. Sans lui, il utilise PowerShell, ce qui marche mais reste plus limité.",
            ],
            code: { label: "PowerShell", code: INSTALL.windows },
          },
          {
            id: "app",
            label: "Application de bureau",
            body: [
              "Si vous préférez ne pas toucher au terminal du tout, téléchargez l'application de bureau pour macOS, Windows ou Linux depuis claude.com et installez-la comme n'importe quel autre programme.",
              "Tout ce qui est aux jours 1 à 6 fonctionne comme ça. Certains jours plus tard vous demandent de créer de petits fichiers, ce qui est plus simple au terminal, mais l'application sait le faire aussi.",
            ],
          },
        ],
      },
      {
        title: "Vérifiez que ça a marché",
        body: [
          "Vous devriez obtenir un numéro suivi de `(Claude Code)`. Si vous obtenez autre chose, ouvrez l'encadré qui correspond à votre problème ci-dessous.",
        ],
        code: { label: "Terminal ou PowerShell", code: INSTALL.verify },
        troubleshoot: [
          {
            summary: "Il dit commande introuvable",
            body: [
              "C'est presque toujours ça. Votre terminal était déjà ouvert pendant l'installation, donc il ne sait pas encore que la nouvelle commande existe.",
              "Fermez complètement le terminal et ouvrez-en un nouveau. Puis réessayez. Ça règle le problème la plupart du temps.",
            ],
          },
          {
            summary: "Windows : la ligne d'installation a donné une erreur sur &&",
            body: [
              "Vous êtes dans l'invite de commandes, pas dans PowerShell. Fermez-la, ouvrez PowerShell, et relancez la ligne.",
            ],
          },
          {
            summary: "C'est installé mais quelque chose cloche encore",
            body: [
              "Lancez ceci. Ça inspecte votre installation et vous dit ce qui est trouvé, sans rien démarrer.",
            ],
            code: { label: "Terminal ou PowerShell", code: INSTALL.diagnose },
          },
        ],
      },
      {
        title: "Connectez-vous et ouvrez votre première session",
        body: [
          "Allez dans un dossier sans importance, puis lancez-le.",
          "La première fois, il ouvre votre navigateur pour la connexion. Ensuite il se souvient de vous. Si vous devez changer de compte un jour, tapez `/login` pendant qu'il tourne.",
        ],
        code: { label: "Terminal ou PowerShell", code: INSTALL.start },
      },
      {
        title: "Demandez-lui quelque chose de vrai",
        body: [
          "Pas une question de test. Quelque chose que vous voudriez réellement savoir.",
          "Regardez ce qu'il fait. Vous ne lui avez pas dit quels fichiers ouvrir. Il est allé voir. Toute la différence avec une fenêtre de chat, en une réponse.",
          "Une autre chose à essayer : tapez `/help` pour voir tout ce qu'il sait faire.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "qu'est-ce qu'il y a dans ce dossier, et à quoi ça sert ?",
        },
      },
    ],
    win: {
      beforeLabel: "Il y a vingt minutes",
      before: [
        "Vous : collez un fichier dans un chat",
        "Lui : vous donne une réponse",
        "Vous : recollez la réponse dans le fichier",
      ],
      afterLabel: "Maintenant",
      after: [
        'Vous : « qu\'est-ce qu\'il y a dans ce dossier ? »',
        "Lui : ouvre les fichiers lui-même",
        "Vous : n'avez jamais touché au presse-papiers",
      ],
    },
    quiz: [
      {
        question:
          "Vous avez un compte Claude.ai gratuit. Pouvez-vous utiliser Claude Code ?",
        options: [
          "Oui, le compte gratuit le couvre.",
          "Non. Il faut Pro, Max, Team, Enterprise, ou un compte Console.",
        ],
        answer: 1,
        explanation:
          "C'est la raison numéro un pour laquelle une première installation semble rater. Elle se passe très bien, puis refuse de vous laisser entrer. Le jour 6 explique comment choisir la bonne offre.",
      },
      {
        question: "Faut-il lui dire quels fichiers regarder ?",
        options: [
          "Non. Il trouve tout seul ce qu'il doit lire.",
          "Oui. Vous listez chaque fichier d'abord.",
        ],
        answer: 0,
        explanation:
          "Vous le pointez sur un dossier et vous demandez. Il décide quoi ouvrir. C'est la principale chose qui le sépare d'une fenêtre de chat.",
      },
      {
        question:
          "Vous l'avez installé, mais `claude --version` dit commande introuvable. Quelle est la cause la plus probable ?",
        options: [
          "L'installation a raté, il faut tout recommencer.",
          "Votre terminal était ouvert pendant l'installation et n'a pas suivi.",
        ],
        answer: 1,
        explanation:
          "Fermez complètement le terminal, ouvrez-en un nouveau, et réessayez. Réinstaller n'est presque jamais la réponse, et ça coûte dix minutes.",
      },
    ],
    gate: {
      question: "Est-ce que ça a marché ?",
      yesLabel: "Oui, j'ai lancé ma première session",
      noLabel: "Non, quelque chose a raté",
      failTag: "On vous débloque",
      failBody: [
        "Ne sautez pas au jour 2. Presque toutes les installations ratées se ramènent à trois choses. Remontez à l'étape 3 et ouvrez l'encadré qui correspond à ce que vous avez vu. Si aucun ne colle, lancez `claude doctor` et lisez ce qu'il vous dit.",
        "Vérifiez votre offre d'abord. Claude Code n'est pas dans l'offre gratuite.",
      ],
    },
    sheet: {
      slot: 1,
      id: "sheet-setup",
      title: "La fiche Installation",
      pitch:
        "Une page, pour arrêter de faire l'aller-retour entre ce site et votre terminal.",
      contents: [
        "Toutes les commandes d'installation et de vérification, pour les trois systèmes",
        "Les cinq erreurs derrière presque toutes les installations ratées, et la solution de chacune",
        "La poignée de commandes que vous utiliserez vraiment la première semaine",
      ],
    },
    nextTeaser: "Arrêtez de vous expliquer au début de chaque session",
  },

  /* ---------------------------------------------------------------- Jour 2 */
  {
    day: 2,
    resource: { id: "second-brain" },
    slug: "jour-2",
    title: "Dites-lui qui vous êtes",
    term: "CLAUDE.md",
    phase: 1,
    minutes: 15,
    app: "anywhere",
    promise:
      "Un petit fichier qu'il lit au début de chaque session, pour ne jamais vous expliquer deux fois.",
    outcome: "Un fichier d'instructions qu'il lit à chaque fois",
    why: [
      "Chaque session démarre vierge. Il ne se souvient pas d'hier. Alors vous retapez les mêmes trois phrases : ce qu'est ce projet, ce à quoi vous tenez, comment vous voulez qu'il réponde.",
      "Écrivez ces phrases une fois, dans un fichier qu'il lit automatiquement, et vous ne les retaperez plus jamais.",
    ],
    sections: [
      {
        heading: "C'est un simple fichier appelé CLAUDE.md",
        body: [
          "Aucun format particulier. Du texte avec quelques titres. Il se place dans le dossier où vous travaillez, et il est lu au début de chaque session dans ce dossier.",
          "Si vous le versionnez dans votre projet, toute votre équipe a les mêmes instructions. C'est généralement ce que vous voulez.",
        ],
        table: {
          head: ["Où vous le mettez", "À qui il s'applique"],
          rows: [
            [
              "`./CLAUDE.md` dans votre projet",
              "Tout le monde sur le projet. Versionné et partagé.",
            ],
            [
              "`~/.claude/CLAUDE.md`",
              "Vous, dans tous les projets de cette machine.",
            ],
            [
              "`./CLAUDE.local.md`",
              "Vous, sur ce projet seulement. À ajouter au `.gitignore`.",
            ],
          ],
        },
      },
      {
        heading: "Ce qui y a sa place, et ce qui n'y a pas la sienne",
        body: [
          "Mettez-y ce que vous auriez à réexpliquer. Laissez dehors tout ce qui est long.",
        ],
        table: {
          head: ["À mettre", "À laisser dehors"],
          rows: [
            [
              "Comment construire et tester ce projet",
              "De la documentation et du matériel de référence",
            ],
            [
              "Les conventions que vous voulez toujours voir suivies",
              "Tout ce qu'il peut lire dans le code lui-même",
            ],
            [
              "Où se trouvent les choses dans le projet",
              "Les longues listes qui vont devenir fausses",
            ],
            ["Comment vous voulez qu'il vous parle", "Des mots de passe ou des clés, jamais"],
          ],
        },
        callout: {
          tag: "La seule règle qui compte",
          body: [
            "Gardez-le sous 200 lignes. Ce fichier est lu au début de chaque session, donc un fichier long vous coûte à chaque message et se fait moins bien suivre, pas mieux. Court et précis bat long et exhaustif.",
          ],
        },
      },
      {
        heading: "Soyez assez précis pour pouvoir vérifier",
        body: [
          "Les instructions vagues sont ignorées. Les concrètes sont suivies. Le test : est-ce que vous pourriez dire, en regardant le résultat, s'il a fait ce que vous demandiez.",
        ],
        table: {
          head: ["Faible", "Fort"],
          rows: [
            ['« Formater le code correctement »', '« Indentation de 2 espaces »'],
            ['« Tester vos changements »', '« Lancer `npm test` avant de commiter »'],
            [
              '« Garder les fichiers rangés »',
              '« Les gestionnaires d\'API vivent dans `src/api/handlers/` »',
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Laissez-le écrire le premier brouillon",
        body: [
          "Ouvrez une session dans un vrai projet et lancez ceci. Il lit votre code et vous écrit un CLAUDE.md de départ, avec les commandes de build et les conventions qu'il arrive à déduire seul.",
          "Si un CLAUDE.md existe déjà, il propose des améliorations au lieu de l'écraser.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/init" },
      },
      {
        title: "Ajoutez ce qu'il ne pouvait pas deviner",
        body: [
          "Le brouillon couvre ce qui est visible dans le code. Il ne peut pas connaître vos préférences ni votre historique. Ajoutez-les vous-même.",
          "Copiez ce message et répondez honnêtement. Des réponses courtes suffisent.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Interroge-moi pour améliorer mon CLAUDE.md. Pose une question à la
fois, et attends ma réponse avant la suivante. Couvre :

1. Ce qu'est ce projet, en une phrase
2. Qui l'utilise
3. Ce que tu ne dois jamais faire sans me demander d'abord
4. Les conventions qui ne sautent pas aux yeux dans le code
5. Comment je veux que tu me répondes

Ensuite réécris CLAUDE.md. Garde-le sous 200 lignes.`,
        },
      },
      {
        title: "Vérifiez qu'il a bien été chargé",
        body: [
          "Démarrez une session neuve et lancez ceci. Regardez sous le titre Memory files. Votre CLAUDE.md doit y figurer.",
          "S'il n'y est pas, il est dans le mauvais dossier et il ne sert strictement à rien.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
      {
        title: "Prouvez que ça marche",
        body: [
          "Fermez la session, ouvrez-en une nouvelle, et posez ceci sans aucun autre contexte.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "C'est quoi ce projet, et quelles sont mes règles pour y travailler ?",
        },
      },
    ],
    win: {
      beforeLabel: "Chaque session avant",
      before: [
        "Vous : réexpliquez le projet",
        "Vous : réexpliquez vos conventions",
        "Vous : posez enfin votre vraie question",
      ],
      afterLabel: "Chaque session maintenant",
      after: ["Vous : posez votre vraie question", "Lui : connaît déjà le reste"],
    },
    quiz: [
      {
        question: "Quelle longueur doit faire votre CLAUDE.md ?",
        options: [
          "Aussi long qu'il le faut. Plus de détail vaut mieux.",
          "Sous 200 lignes. Il est lu à chaque session.",
        ],
        answer: 1,
        explanation:
          "Il se charge au début de chaque session, donc la longueur vous coûte à chaque fois. Les fichiers longs sont aussi moins bien suivis, pas mieux. S'il grossit, ce contenu a probablement sa place ailleurs.",
      },
      {
        question:
          "Vous voulez une règle qui s'applique à vous, dans tous vos projets sur cette machine. Où va-t-elle ?",
        options: [
          "`./CLAUDE.md` dans chaque projet",
          "`~/.claude/CLAUDE.md`, une seule fois",
        ],
        answer: 1,
        explanation:
          "Celui de votre dossier personnel s'applique partout. Les fichiers de projet servent à ce que toute l'équipe doit partager.",
      },
      {
        question: "Lequel a sa place dans CLAUDE.md ?",
        options: [
          '« Lancer `npm test` avant de commiter »',
          "Votre clé d'API, pour qu'il n'ait pas à la demander",
        ],
        answer: 0,
        explanation:
          "Ne mettez jamais un mot de passe ni une clé dans ces fichiers. Le jour 7 traite de garder les secrets dehors correctement. La commande de test, elle, est exactement ce pour quoi ce fichier existe.",
      },
    ],
    nextTeaser: "Donnez-lui une forme de dossiers où il sait se repérer",
  },

  /* ---------------------------------------------------------------- Jour 3 */
  {
    day: 3,
    slug: "jour-3",
    title: "Organisez vos fichiers",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "Une organisation de dossiers qui répond à la plupart de ses questions avant qu'il ait à vous les poser.",
    outcome: "Une organisation où il se repère seul",
    why: [
      "Hier vous lui avez donné les règles. Aujourd'hui vous lui montrez où sont les choses. La structure fait un travail que les instructions ne peuvent pas faire : elle est toujours vraie, et elle ne coûte rien à lire.",
      "Un dossier appelé `01_Actif` lui dit plus long qu'un paragraphe expliquant quels travaux sont en cours.",
    ],
    sections: [
      {
        heading: "La structure bat les instructions",
        body: [
          "Vous pouvez écrire « les travaux client en cours vivent dans le dossier clients, mais seulement ceux sur lesquels on travaille encore ». Ou vous pouvez avoir un dossier appelé `Actif`. Le second ne devient jamais faux et ne peut pas être mal lu.",
          "Chaque minute passée sur la forme est une minute que vous ne passerez pas à l'expliquer.",
        ],
      },
      {
        heading: "Une forme simple qui va à la plupart des gens",
        body: [
          "Quatre bacs. Tout ce que vous avez tient dans exactement un des quatre, et lequel est évident.",
        ],
        table: {
          head: ["Dossier", "Ce qui y va"],
          rows: [
            ["`00_Boite`", "Tout ce qui n'est pas encore trié. À vider chaque semaine."],
            ["`01_Actif`", "Le travail en cours, maintenant. Doit rester court."],
            ["`02_Reference`", "Ce que vous consultez sans y travailler."],
            ["`03_Archive`", "Terminé. Conservé, plus touché."],
          ],
        },
        callout: {
          tag: "Ne copiez pas ça aveuglément",
          body: [
            "Cette forme est un point de départ, pas une règle. Si votre travail a trois bacs évidents, prenez-en trois. Le but est que les noms décrivent votre vrai travail, pas le système de quelqu'un d'autre.",
          ],
        },
      },
      {
        heading: "Une ligne par dossier fait le reste",
        body: [
          "Mettez un court `README.md` dans chaque dossier, qui dit ce qui y a sa place. Ça vous coûte quatre phrases et ça supprime presque tout ce qui reste à deviner.",
          "Ça aide aussi les humains. Ce n'est pas un effet de bord, c'est le but.",
        ],
      },
    ],
    steps: [
      {
        title: "Laissez-le regarder avant de rien déplacer",
        body: [
          "Ne commencez pas par créer des dossiers. Commencez par demander quelle forme votre travail a déjà.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Regarde ce dossier et dis-moi :
1. Quels types de choses il y a dedans
2. Ce qui est en cours par rapport à ce qui est terminé
3. Trois organisations de dossiers qui iraient, avec le compromis de chacune

Ne crée et ne déplace rien pour l'instant.`,
        },
      },
      {
        title: "Choisissez-en une et laissez-le construire la forme",
        body: [
          "Prenez l'option qui correspond à votre façon de travailler, pas celle qui a l'air la plus rangée.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Crée l'option 2. Pour chaque dossier, ajoute un README.md avec une
ligne qui dit ce qui y a sa place. Ne déplace aucun fichier existant
pour l'instant, crée seulement la structure.`,
        },
      },
      {
        title: "Déplacez par petits lots",
        body: [
          "Ne le laissez jamais tout réorganiser d'un coup. Vous ne pourrez pas dire ce qui s'est passé.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Déplace seulement les fichiers qui ont clairement leur place dans
03_Archive. Liste ce que tu déplaces et pourquoi, et attends que je
te dise d'y aller.`,
        },
      },
      {
        title: "Testez que la forme fonctionne",
        body: [
          "Le vrai test, c'est de savoir s'il retrouve quelque chose sans que vous le pointiez dessus. Demandez-lui un truc que vous savez enterré.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "Trouve tout ce qui concerne [un truc sur lequel vous avez travaillé il y a des mois] et résume où ça en est resté.",
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        'Vous : « le fichier est dans le deuxième dossier »',
        'Vous : « non, l\'autre deuxième dossier »',
      ],
      afterLabel: "Après",
      after: [
        'Vous : « il s\'est passé quoi sur ce projet ? »',
        "Lui : le trouve, le lit, vous répond",
      ],
    },
    quiz: [
      {
        question:
          "Pourquoi un dossier appelé `01_Actif` bat-il une règle écrite sur le travail en cours ?",
        options: [
          "Il est plus court à taper.",
          "Il est toujours vrai, et il ne peut être ni mal lu ni périmé.",
        ],
        answer: 1,
        explanation:
          "Les règles écrites deviennent fausses dès que le travail change. Un nom de dossier change quand vous déplacez le fichier, ce que vous faisiez de toute façon.",
      },
      {
        question:
          "Il propose de réorganiser tout votre dossier d'un coup. Devez-vous le laisser faire ?",
        options: [
          "Non. Déplacez par petits lots que vous pouvez vérifier.",
          "Oui. C'est plus rapide et il connaît la structure.",
        ],
        answer: 0,
        explanation:
          "Cent déplacements d'un coup sont impossibles à relire, et difficiles à annuler. Les petits lots vous gardent aux commandes et ne coûtent presque rien de plus.",
      },
      {
        question: "Que met-on dans le README de chaque dossier ?",
        options: [
          "Une description complète de chaque fichier qu'il contient",
          "Une ligne qui dit ce qui y a sa place",
        ],
        answer: 1,
        explanation:
          "Une liste de fichiers devient fausse immédiatement. Une ligne sur ce qui y a sa place reste vraie, et c'est la partie qui aide vraiment.",
      },
    ],
    nextTeaser: "Faites-lui retenir ce que vous lui avez dit la semaine dernière",
  },

  /* ---------------------------------------------------------------- Jour 4 */
  {
    day: 4,
    slug: "jour-4",
    title: "Faites-lui de la mémoire",
    term: "mémoire",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "Il commence à écrire ses propres notes, pour que la même correction n'ait jamais à être faite deux fois.",
    outcome: "Des faits qui survivent d'une session à l'autre",
    why: [
      "CLAUDE.md, c'est ce que vous lui dites. La mémoire, c'est ce qu'il déduit tout seul. Quand vous le corrigez, ou qu'il découvre comment votre build fonctionne, il le note et le relit demain.",
      "C'est activé par défaut, donc aujourd'hui il s'agit surtout de voir ce qu'il a enregistré et d'en reprendre le contrôle.",
    ],
    sections: [
      {
        heading: "Deux systèmes, et ils font deux métiers différents",
        body: [
          "On les confond facilement. La différence tient simplement à qui écrit.",
        ],
        table: {
          head: ["", "CLAUDE.md", "Mémoire"],
          rows: [
            ["Qui l'écrit", "Vous", "Lui"],
            ["Ce qu'il y a dedans", "Des règles et des instructions", "Ce qu'il a appris"],
            [
              "Bien pour",
              "Comment vous voulez qu'il se comporte",
              "Corrections, commandes de build, habitudes",
            ],
          ],
        },
      },
      {
        heading: "Où vivent les notes",
        body: [
          "Chaque projet a son propre dossier de notes sur votre machine. Il y a un fichier d'index, `MEMORY.md`, lu au début de chaque session, plus des fichiers par sujet qu'il ne lit que quand il en a besoin.",
          "Cette séparation compte : l'index reste court, et le détail ne vous coûte rien tant qu'il ne sert pas.",
        ],
        callout: {
          tag: "Ce n'est que du texte",
          body: [
            "Ce sont de simples fichiers markdown. Vous pouvez les ouvrir, les modifier, ou supprimer tout ce qui est faux. Rien n'est caché et rien n'est verrouillé.",
          ],
        },
      },
      {
        heading: "Ce qui ne doit jamais y aller",
        body: [
          "La mémoire est un fichier sur votre disque, et les fichiers se copient, se sauvegardent et se partagent. Traitez-la comme si quelqu'un d'autre allait la lire un jour.",
          "Pas de mots de passe. Pas de clés. Aucune donnée client que vous n'enverriez pas par email. Le jour 7 est entièrement consacré à cette frontière.",
        ],
      },
    ],
    steps: [
      {
        title: "Voyez ce qu'il sait déjà",
        body: [
          "Ceci ouvre la liste de tous les fichiers de mémoire, et vous laisse en ouvrir un. Allez voir ce qu'il a écrit sur vous.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/memory" },
      },
      {
        title: "Apprenez-lui quelque chose exprès",
        body: [
          "Dites-le avec des mots normaux. Il décide que ça vaut la peine d'être gardé et l'écrit.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "Retiens qu'on utilise pnpm sur ce projet, jamais npm.",
        },
      },
      {
        title: "Vérifiez que ça a tenu",
        body: [
          "Fermez complètement la session. Ouvrez-en une nouvelle dans le même dossier. Puis demandez.",
          "S'il sait, la mémoire fait son travail. Sinon, lancez `/memory` et vérifiez que le fichier a bien été écrit.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "On utilise quel gestionnaire de paquets ici ?",
        },
      },
      {
        title: "Nettoyez tout ce qui est faux",
        body: [
          "Une mémoire fausse est pire que pas de mémoire. Elle est répétée avec assurance, pendant des mois.",
          "Ouvrez `/memory`, lisez ce qui est là, et supprimez tout ce qui est périmé.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Vous : corrigez la même chose lundi",
        "Vous : la recorrigez jeudi",
      ],
      afterLabel: "Après",
      after: ["Vous : corrigez une fois", "Lui : le note et arrête"],
    },
    quiz: [
      {
        question: "Qui écrit les fichiers de mémoire ?",
        options: [
          "Vous, à la main",
          "Lui, à partir de ce qu'il apprend de vous",
        ],
        answer: 1,
        explanation:
          "C'est toute la différence avec CLAUDE.md. Vous écrivez les règles, il écrit les apprentissages.",
      },
      {
        question: "Il a retenu quelque chose de faux. Que faire ?",
        options: [
          "Ouvrir `/memory` et supprimer ou corriger ce fichier",
          "Rien. Il se corrigera avec le temps.",
        ],
        answer: 0,
        explanation:
          "Une mémoire fausse est pire que pas de mémoire, parce qu'elle est répétée avec assurance. Ce sont de simples fichiers texte, donc en corriger un prend quelques secondes.",
      },
      {
        question: "La mémoire est-elle un bon endroit pour une clé d'API ?",
        options: [
          "Non. Jamais. C'est un simple fichier sur votre disque.",
          "Oui, c'est stocké en local donc c'est privé.",
        ],
        answer: 0,
        explanation:
          "Local ne veut pas dire sûr. Les fichiers sont sauvegardés, synchronisés et copiés. Le jour 7 explique où les secrets ont vraiment leur place.",
      },
    ],
    nextTeaser:
      "Sachez quel outil prendre, et arrêtez d'utiliser le plus lourd pour tout",
  },

  /* ---------------------------------------------------------------- Jour 5 */
  {
    day: 5,
    slug: "jour-5",
    title: "Quel outil pour quel travail",
    phase: 1,
    minutes: 10,
    app: "anywhere",
    promise:
      "Une règle applicable en deux secondes, pour arrêter de prendre le mauvais outil.",
    outcome: "Une règle de décision applicable",
    why: [
      "Après quatre jours, la tentation est d'utiliser Claude Code pour tout. C'est une erreur dans les deux sens : il est surdimensionné pour une question rapide, et une fenêtre de chat est inutile pour un travail sur douze fichiers.",
      "Dix minutes maintenant vous épargnent l'agacement lent du mauvais outil, tous les jours, pendant un an.",
    ],
    sections: [
      {
        heading: "Trois sortes de travail",
        body: [
          "Presque tout ce que vous faites tombe dans l'une des trois. Dès que vous savez nommer celle où vous êtes, l'outil se choisit tout seul.",
        ],
        table: {
          head: ["Sorte", "À quoi ça ressemble", "Prenez"],
          rows: [
            [
              "Demander",
              "Une question. Vous voulez une réponse, pas un changement.",
              "Une fenêtre de chat",
            ],
            [
              "Construire",
              "De vrais fichiers doivent changer. Plus d'un.",
              "Claude Code",
            ],
            [
              "Répéter",
              "La même chose, régulièrement, sans vous.",
              "Claude Code avec un travail enregistré",
            ],
          ],
        },
      },
      {
        heading: "Les deux erreurs",
        body: [
          "Les deux sont fréquentes et les deux sont silencieuses. Rien ne casse, vous êtes juste plus lent que nécessaire.",
        ],
        table: {
          head: ["Erreur", "Ce que ça donne"],
          rows: [
            [
              "Outil lourd, travail léger",
              "Ouvrir un terminal et attendre, pour demander une chose que vous auriez tapée dans un chat.",
            ],
            [
              "Outil léger, travail lourd",
              "Coller fichier après fichier dans une fenêtre de chat et recoller les réponses à la main.",
            ],
          ],
        },
      },
      {
        heading: "Trois questions qui tranchent",
        body: [
          "Posez-les dans l'ordre et arrêtez-vous au premier oui.",
          "1. Est-ce que quelque chose sur mon disque doit changer ? Si non, une fenêtre de chat.",
          "2. Est-ce que je voudrai ça encore la semaine prochaine ? Si oui, ça doit devenir un travail enregistré. C'est le jour 9.",
          "3. Est-ce que ça doit se passer sans moi ? Si oui, c'est la phase 3.",
        ],
      },
    ],
    steps: [
      {
        title: "Listez ce que vous répétez vraiment",
        body: [
          "Pas ce que vous pensez devoir faire. Ce que vous avez fait la semaine dernière.",
          "Écrivez cinq tâches. Des vraies, avec des noms.",
        ],
      },
      {
        title: "Triez-les",
        body: ["Rangez chacune dans demander, construire, ou répéter."],
        code: {
          label: "Tapez ceci à Claude",
          code: `Voici cinq choses que je fais régulièrement :
1. ...
2. ...
3. ...
4. ...
5. ...

Pour chacune dis-moi : est-ce demander, construire, ou répéter ?
Ensuite dis-moi laquelle, une seule, me ferait gagner le plus de
temps si je l'automatisais, et pourquoi. Sois franc si certaines
n'en valent pas la peine.`,
        },
      },
      {
        title: "Gardez la réponse",
        body: [
          "Celle qui arrive en tête est ce que vous construirez au jour 9. Notez-la quelque part où vous la retrouverez.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Chaque tâche : ouvrir le même outil",
        "Certaines : bien plus lentes que nécessaire",
      ],
      afterLabel: "Après",
      after: ["Trois questions", "Le bon outil, du premier coup"],
    },
    quiz: [
      {
        question:
          "Vous voulez savoir ce que veut dire un terme technique. Rien sur votre disque ne doit changer. Quel outil ?",
        options: ["Une fenêtre de chat", "Claude Code"],
        answer: 0,
        explanation:
          "Rien ne doit changer, donc l'outil lourd ne vous apporte rien. Ouvrir un terminal pour ça est la perte de temps silencieuse la plus courante.",
      },
      {
        question:
          "Vous devez renommer la même chose dans douze fichiers. Quel outil ?",
        options: [
          "Une fenêtre de chat, un fichier à la fois",
          "Claude Code, qui ouvre les fichiers lui-même",
        ],
        answer: 1,
        explanation:
          "C'est exactement à ça qu'il sert. Douze copier-coller ne sont pas seulement plus lents, c'est de là que viennent les erreurs.",
      },
      {
        question:
          "Vous faites le même rapport tous les lundis. Qu'est-ce que ça vous dit ?",
        options: [
          "Ça devrait devenir un travail enregistré",
          "Rien. Faites-le chaque semaine, c'est tout.",
        ],
        answer: 0,
        explanation:
          "Tout ce que vous voudrez encore la semaine prochaine vaut la peine d'être enregistré. C'est le jour 9, et c'est l'heure la plus rentable de la phase 1.",
      },
    ],
    sheet: {
      slot: 2,
      id: "sheet-which-tool",
      title: "La fiche Quel outil",
      pitch: "Une page. Arrêtez d'ouvrir le mauvais outil.",
      contents: [
        "Les trois questions, dans l'ordre, avec ce que chaque réponse veut dire",
        "Un face à face de chaque outil et de ce à quoi il est vraiment le meilleur",
        "Les deux erreurs, et comment remarquer que vous êtes en train de les faire",
      ],
    },
    nextTeaser:
      "Choisissez la bonne offre, et connaissez le seul signal qui veut dire changer",
  },

  /* ---------------------------------------------------------------- Jour 6 */
  {
    day: 6,
    slug: "jour-6",
    // L'outil de calcul du jour 6. Voir `cost-tool.tsx` : il n'imprime aucun
    // prix, seulement les chiffres que le lecteur saisit lui-même.
    tool: "cost",
    title: "Les offres et ce que ça coûte",
    phase: 1,
    minutes: 8,
    app: "anywhere",
    promise:
      "La bonne offre, choisie pour une raison que vous pourriez expliquer à votre service financier.",
    outcome: "La bonne offre, choisie avec une raison",
    why: [
      "Le jour 1 vous a dit que l'offre gratuite n'inclut pas Claude Code. Aujourd'hui il s'agit de savoir laquelle des payantes il vous faut vraiment, et comment repérer que vous l'avez dépassée.",
      "Commencez trop haut et vous payez trop. Commencez trop bas et vous êtes arrêté en plein travail.",
    ],
    sections: [
      {
        heading: "Commencez bas, exprès",
        body: [
          "Commencez par l'offre payante la moins chère qui inclut Claude Code. Utilisez-la vraiment pendant deux semaines. Puis décidez.",
          "Vous ne pouvez pas deviner votre usage avant d'en avoir un. Personne ne le peut. Deux semaines de vrai travail vous en disent plus que n'importe quel calculateur.",
        ],
        callout: {
          tag: "Pourquoi les prix ne sont pas écrits ici",
          body: [
            "Les offres et les prix changent. Tout chiffre imprimé sur cette page deviendrait faux en silence et vous induirait en erreur. Les offres et les limites actuelles sont sur notre page tarifs, et chaque fiche de ce site renvoie là plutôt que de recopier les chiffres.",
          ],
        },
      },
      {
        heading: "Le seul signal qui veut dire monter",
        body: [
          "Il n'y en a qu'un qui compte : vous êtes arrêté, plusieurs fois, au milieu d'un vrai travail.",
          "Pas que vous pourriez être arrêté. Pas qu'une offre plus grosse a l'air mieux. Que vous avez été réellement interrompu, plus d'une fois, sur quelque chose qui comptait.",
        ],
        table: {
          head: ["Vrai signal", "Signal trompeur"],
          rows: [
            [
              "Vous avez touché une limite deux fois cette semaine, en plein travail",
              '« L\'offre au-dessus inclut plus, donc c\'est forcément un meilleur rapport »',
            ],
            [
              "Vous contournez en découpant vos travaux en morceaux",
              "Quelqu'un d'autre sur une offre plus grosse dit que ça vaut le coup",
            ],
            [
              "L'interruption vous a coûté plus que la différence de prix",
              "Vous voulez essayer une fonctionnalité une fois",
            ],
          ],
        },
      },
      {
        heading: "Le coût est surtout un problème d'installation, pas d'offre",
        body: [
          "Avant de payer plus, sachez qu'une grande part de la consommation part dans des choses que vous n'avez pas besoin de charger. Le jour 13 mesure où va la vôtre et le jour 14 la réduit.",
          "Beaucoup de gens qui pensaient avoir besoin d'une offre plus grosse n'en avaient pas besoin, une fois qu'ils ont arrêté de tout charger dans chaque session.",
        ],
      },
    ],
    steps: [
      {
        title: "Estimez grossièrement votre usage",
        body: [
          "Pas exactement. Grossièrement. Deux chiffres : combien de jours par semaine vous allez l'utiliser, et si votre travail type porte sur un fichier ou sur beaucoup.",
        ],
      },
      {
        title: "Prenez la plus basse qui convient",
        body: [
          "Ouvrez notre page tarifs, prenez l'offre payante la moins chère qui inclut Claude Code, et commencez là.",
        ],
      },
      {
        title: "Écrivez pourquoi, avec une date",
        body: [
          "C'est l'étape qui évite la discussion dans trois mois. Une phrase dans votre CLAUDE.md ou dans vos notes.",
        ],
        code: {
          label: "Ajoutez une ligne comme celle-ci à vos notes",
          code: `Offre : pris l'offre d'entrée le [date du jour].
Raison : surtout du travail sur un fichier, trois jours par semaine.
À revoir si : je suis interrompu par des limites deux fois dans la même semaine.`,
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: ["Une supposition", "Aucune idée de quand en changer"],
      afterLabel: "Après",
      after: ["Une offre, choisie pour une raison", "Un déclencheur écrit pour la revoir"],
    },
    quiz: [
      {
        question: "Vous débutez. Sur quelle offre commencer ?",
        options: [
          "La moins chère des payantes qui inclut Claude Code",
          "La plus grosse, pour ne jamais toucher de limite",
        ],
        answer: 0,
        explanation:
          "Vous ne pouvez pas estimer un usage que vous n'avez pas encore. Deux semaines de vrai travail vous en disent plus que n'importe quelle estimation, et monter plus tard est facile.",
      },
      {
        question: "Lequel veut vraiment dire qu'il faut monter ?",
        options: [
          "Une offre plus grosse inclut plus de choses",
          "Vous avez été interrompu en plein travail, deux fois, cette semaine",
        ],
        answer: 1,
        explanation:
          "Être réellement arrêté pendant un vrai travail est le seul signal qui compte. Tout le reste est une impression, et les impressions coûtent cher ici.",
      },
      {
        question: "Pourquoi cette page ne liste-t-elle pas les prix ?",
        options: [
          "Ils changent, donc un chiffre imprimé ici deviendrait faux et vous induirait en erreur",
          "Parce qu'ils sont secrets",
        ],
        answer: 0,
        explanation:
          "Même raison qu'aucune fiche de ce site ne les imprime. Un chiffre dans un PDF au fond de votre boîte mail ne peut pas être corrigé. Un lien, oui.",
      },
    ],
    nextTeaser: "Assurez-vous qu'il ne puisse jamais toucher à vos mots de passe",
  },

  /* ---------------------------------------------------------------- Jour 7 */
  {
    day: 7,
    slug: "jour-7",
    title: "Protégez vos mots de passe",
    phase: 1,
    minutes: 12,
    app: "needs-app",
    promise:
      "Rien de sensible exposé, et un contrôle que vous pouvez relancer en trente secondes à tout moment.",
    outcome: "Plus rien de sensible à découvert",
    why: [
      "Vous venez de donner à quelque chose la capacité de lire chaque fichier de votre projet. C'est le but, et c'est aussi le risque. La plupart des fuites n'ont rien de spectaculaire. Une clé se retrouve dans un fichier, le fichier se retrouve dans un commit, et le commit se retrouve public.",
      "Douze minutes aujourd'hui et toute cette catégorie d'accident devient impossible.",
    ],
    sections: [
      {
        heading: "Les trois façons dont une clé s'échappe",
        body: [
          "Presque toutes les vraies fuites sont l'une des trois. Aucune ne demande à qui que ce soit de faire une bêtise.",
        ],
        table: {
          head: ["Comment", "À quoi ça ressemble"],
          rows: [
            [
              "Commitée par accident",
              "Un fichier `.env` qui n'a jamais été dans `.gitignore`, poussé avec le reste.",
            ],
            [
              "Écrite dans une note",
              "Une clé collée dans un README, un fichier d'instructions ou une note de mémoire, pour éviter d'aller la chercher.",
            ],
            [
              "Déjà dehors, toujours valide",
              "Une clé qui a fuité il y a des mois, supprimée de la version actuelle, et qui marche encore.",
            ],
          ],
        },
      },
      {
        heading: "Supprimer n'est pas réparer",
        body: [
          "Retirer une clé de la version actuelle d'un fichier ne sert à rien. L'ancienne version est toujours dans l'historique, et quiconque avait cloné l'a déjà.",
          "Il n'y a qu'une seule réparation une fois qu'une clé a été exposée : faire en sorte que l'ancienne ne marche plus. La révoquer. Tout le reste est du rangement.",
        ],
        callout: {
          tag: "La règle qui couvre presque tout",
          body: [
            "Les secrets vivent dans un fichier `.env`, et `.env` est dans `.gitignore`. Rien d'autre sur votre machine ne contient la vraie valeur. Ni votre fichier d'instructions, ni une note, ni un commentaire.",
          ],
        },
      },
      {
        heading: "Où elle ne doit jamais aller",
        body: [
          "Vous avez créé deux fichiers cette semaine qui donnent une impression de confidentialité qu'ils n'ont pas. Les deux sont du texte simple sur votre disque, et les deux sont sauvegardés, synchronisés et parfois commités.",
        ],
        table: {
          head: ["Sûr d'y écrire", "Ne jamais y écrire"],
          rows: [
            [
              "`CLAUDE.md` : dans quelle variable d'environnement une clé se lit",
              "`CLAUDE.md` : la clé elle-même",
            ],
            ["Mémoire : que ce projet utilise Stripe", "Mémoire : la clé Stripe"],
            [
              "Un README : comment obtenir votre propre clé",
              "Un README : votre clé, pour aller plus vite",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Couvrez les fichiers évidents",
        body: [
          "Si vous avez déjà un `.gitignore`, vérifiez que ces lignes y sont. Sinon, créez-en un.",
        ],
        code: {
          label: ".gitignore",
          code: `.env
.env.local
.env.*.local
*.pem
*.key`,
        },
      },
      {
        title: "Vérifiez que rien n'est déjà suivi",
        body: [
          "Ceci liste tout fichier que git surveille actuellement et qui ressemble à un secret. Vous voulez zéro résultat.",
          "Si quelque chose remonte, git le suit déjà. Arrêtez tout et réglez ça avant le reste.",
        ],
        code: {
          label: "Terminal",
          code: `git ls-files | grep -E "\\.env|\\.pem$|\\.key$"`,
        },
      },
      {
        title: "Faites-lui relire votre historique",
        body: [
          "Laissez-le faire la lecture. C'est exactement le genre de travail où il est bon, et il va plus vite que vous.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Cherche dans ce projet tout ce qui ressemble à un identifiant :
clés d'API, jetons, mots de passe, clés privées, chaînes de connexion.

Regarde les fichiers suivis et aussi l'historique git, pas seulement
la version actuelle. Liste ce que tu trouves avec le fichier et la
ligne. N'affiche pas la valeur complète, juste de quoi l'identifier.`,
        },
      },
      {
        title: "Révoquez tout ce qui a été exposé",
        body: [
          "Pour chaque chose trouvée : allez là d'où elle vient, créez-en une nouvelle, mettez la nouvelle dans `.env`, et supprimez l'ancienne à la source.",
          "Supprimer l'ancienne à la source est l'étape qui compte. Tant que ce n'est pas fait, elle marche encore.",
        ],
      },
      {
        title: "Relisez vos propres notes",
        body: [
          "Ouvrez vos fichiers de mémoire et votre CLAUDE.md et lisez-les. Vous cherchez tout ce que vous auriez collé pour gagner du temps.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/memory" },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Les secrets : à plusieurs endroits",
        "Si l'un fuitait : vous ne le sauriez pas",
      ],
      afterLabel: "Après",
      after: [
        "Les secrets : un fichier, ignoré par git",
        "Un contrôle de trente secondes à relancer quand vous voulez",
      ],
    },
    quiz: [
      {
        question:
          "Vous trouvez une clé d'API dans un vieux commit. Vous la supprimez du fichier actuel. Est-ce réglé ?",
        options: [
          "Oui. Elle n'est plus dans le fichier.",
          "Non. Elle est toujours dans l'historique et elle marche encore. Révoquez-la.",
        ],
        answer: 1,
        explanation:
          "L'ancienne version reste dans l'historique, et quiconque avait cloné le projet l'a déjà. Faire cesser de fonctionner l'ancienne clé est la seule vraie réparation.",
      },
      {
        question: "Où doit vivre la vraie valeur d'une clé ?",
        options: [
          "Dans un fichier `.env` listé dans `.gitignore`",
          "Dans votre CLAUDE.md, pour qu'il n'ait pas à vous la demander",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md est du texte simple, généralement commité et partagé avec toute votre équipe. Il peut dire quelle variable lire. Il ne doit jamais contenir la valeur.",
      },
      {
        question:
          "Une clé dans un fichier de mémoire, est-ce sûr, puisque c'est local ?",
        options: [
          "Non. Les fichiers locaux sont sauvegardés, synchronisés et copiés.",
          "Oui, les fichiers de mémoire ne quittent jamais votre machine.",
        ],
        answer: 0,
        explanation:
          "Local n'est pas la même chose que privé. Traitez chaque fichier de votre disque comme quelque chose que quelqu'un d'autre lira peut-être un jour.",
      },
    ],
    nextTeaser:
      "Empêchez-le de toucher aux fichiers que vous ne pouvez pas vous permettre de perdre",
  },

  /* ---------------------------------------------------------------- Jour 8 */
  {
    day: 8,
    slug: "jour-8",
    title: "Les garde-fous",
    term: "hooks",
    phase: 1,
    minutes: 12,
    app: "needs-app",
    promise:
      "Empêchez-le de toucher aux fichiers que vous ne pouvez pas perdre, et faites-lui expliquer pourquoi quand il essaie.",
    outcome: "Un garde-fou, qui marche, testé exprès",
    why: [
      "Hier vous avez mis vos secrets à l'abri. Aujourd'hui vous empêchez quoi que ce soit d'y toucher, même par accident.",
      "Un garde-fou est un petit script qui tourne avant une action et peut l'arrêter. Dix minutes maintenant, et l'accident qui vous inquiète le plus devient impossible.",
    ],
    sections: [
      {
        heading: "Un garde-fou est un simple script, et vous choisissez quand il tourne",
        body: [
          "Vous lui dites une chose : avant de modifier un fichier, lance mon script d'abord. Votre script reçoit ce qui est sur le point d'arriver. Il répond de deux façons possibles. D'accord, ou non.",
          "Le moment que vous choisissez s'appelle un événement. Celui qu'il vous faut aujourd'hui est `PreToolUse`, c'est-à-dire avant qu'un outil ne s'exécute.",
        ],
      },
      {
        heading: "Le script répond avec un numéro",
        body: [
          "Les scripts ne répondent pas en phrases. Ils répondent avec un numéro, appelé code de sortie. Seuls deux comptent ici.",
          "Cette dernière partie est l'astuce utile. Vous ne faites pas que bloquer. Vous dites pourquoi, pour qu'il puisse essayer autrement au lieu de simplement s'arrêter.",
        ],
        table: {
          head: [...EXIT_CODES_FR.head],
          rows: EXIT_CODES_FR.rows.map((r) => [...r]),
        },
      },
      {
        heading: "Des garde-fous qui valent le coup",
        body: [
          "Commencez par un. Le protecteur ci-dessous est celui qui vaut la peine d'être gardé.",
        ],
        table: {
          head: ["Garde-fou", "Tourne", "Fait"],
          rows: [
            [
              "Protéger des fichiers",
              "Avant une modification",
              "Refuse de toucher `.env`, les fichiers de verrouillage, et tout ce qui est dans `.git/`",
            ],
            [
              "Journaliser",
              "Après une modification",
              "Écrit chaque fichier modifié dans un journal que vous pourrez relire",
            ],
            [
              "Ranger",
              "Après une modification",
              "Lance votre formateur pour que rien n'atterrisse mal mis en forme",
            ],
            [
              "Me prévenir",
              "Quand il attend",
              "Vous fait signe, pour ne pas rester à fixer l'écran",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Créez le script",
        body: [
          `Enregistrez ceci sous \`${SETTINGS_PATHS.hooksDir}/protect-files.sh\` dans votre projet.`,
          "Lisez les quatre dernières lignes et vous avez compris les garde-fous. Si le fichier est sur la liste, on écrit pourquoi et on fait `exit 2`. Sinon, `exit 0` et on s'écarte.",
        ],
        code: {
          label: `${SETTINGS_PATHS.hooksDir}/protect-files.sh`,
          code: `#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

# Les chemins Windows utilisent \\ donc on les remplace, sinon les motifs
# ci-dessous ne correspondront jamais
FILE_PATH="\${FILE_PATH//\\\\//}"

PROTECTED_PATTERNS=(".env" "package-lock.json" ".git/")

for pattern in "\${PROTECTED_PATTERNS[@]}"; do
  if [[ "$FILE_PATH" == *"$pattern"* ]]; then
    echo "Bloqué : $FILE_PATH correspond au motif protégé '$pattern'" >&2
    exit 2
  fi
done

exit 0`,
        },
      },
      {
        title: "Autorisez votre ordinateur à l'exécuter",
        panels: [
          {
            id: "mac",
            label: "macOS ou Linux",
            body: [
              "Un nouveau script n'a pas le droit de s'exécuter tant que vous ne l'avez pas dit. Une commande suffit :",
            ],
            code: {
              label: "Terminal",
              code: "chmod +x .claude/hooks/protect-files.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Windows n'a pas cette permission, il n'y a donc rien à lancer ici. Passez à l'étape suivante.",
              "Une chose à vérifier d'abord. Le script est écrit en Bash, et Windows ne sait pas lire le Bash tout seul. Il vous faut Git pour Windows, qui inclut Git Bash. Si `git --version` fonctionne dans votre terminal, vous l'avez déjà.",
            ],
          },
        ],
      },
      {
        title: "Activez-le",
        body: [
          `Ouvrez \`${SETTINGS_PATHS.project}\` dans votre projet. Créez-le s'il n'existe pas, puis ajoutez ceci.`,
          "`matcher` est le filtre. `\"Edit|Write\"` veut dire que le garde-fou ne tourne que quand il modifie ou écrit un fichier. Pas quand il en lit un. Pas quand il lance une commande.",
        ],
        code: {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh"
          }
        ]
      }
    ]
  }
}`,
        },
      },
      {
        title: "Vérifiez qu'il est enregistré",
        body: [
          "Dans une session, tapez ceci. Vous verrez une liste d'événements avec un compte à côté de chacun. `PreToolUse` doit maintenant afficher 1.",
          "Cet écran ne fait que vous montrer ce qui est enregistré. Vous ne pouvez pas modifier depuis là. Les changements passent toujours par le fichier de réglages.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/hooks" },
      },
      {
        title: "Cassez-le exprès",
        body: [
          "C'est le seul test qui compte.",
          "Il doit refuser, et vous dire quelle règle l'a arrêté. S'il modifie le fichier à la place, le garde-fou n'est pas branché. Vérifiez que le chemin dans votre fichier de réglages correspond à l'endroit où vous avez vraiment enregistré le script.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "Ajoute un commentaire en haut de mon fichier .env",
        },
      },
    ],
    win: {
      beforeLabel: "Il y a dix minutes",
      before: [
        'Vous : « range les fichiers de configuration »',
        "Lui : modifie `.env`",
        "Vous : le découvrez jeudi",
      ],
      afterLabel: "Maintenant",
      after: [
        'Vous : « range les fichiers de configuration »',
        "Lui : Bloqué, .env est protégé",
        "Lui : vous demande d'abord",
      ],
    },
    quiz: [
      {
        question:
          "Votre script de garde-fou se termine par exit 0. A-t-il approuvé la modification ?",
        options: [
          "Oui. La modification est approuvée et se fait.",
          "Non. Ça veut seulement dire que le garde-fou n'a rien à dire.",
        ],
        answer: 1,
        explanation:
          "0 veut dire pas d'objection, pas oui. Les règles de permission habituelles s'appliquent quand même après votre garde-fou. Seul 2 arrête réellement quelque chose.",
      },
      {
        question:
          'Votre script affiche « Bloqué : .env est protégé ». Qui lit ce message ?',
        options: [
          "Seulement vous, plus tard, dans un journal.",
          "Claude le reçoit, et peut tenter autre chose.",
          "Personne. Il est jeté.",
        ],
        answer: 1,
        explanation:
          "C'est pour ça que votre message doit dire pourquoi vous avez bloqué. Un bon message lui permet de corriger son approche au lieu de simplement s'arrêter.",
      },
      {
        question:
          "Votre garde-fou utilise le filtre Edit et Write. Une commande shell modifie un fichier. Le garde-fou se déclenche-t-il ?",
        options: [
          "Oui. Tout changement sur tout fichier le déclenche.",
          "Non. Ce filtre ne couvre que les outils Edit et Write.",
        ],
        answer: 1,
        explanation:
          "Un fichier modifié par une commande shell passe tranquillement à côté de votre garde-fou. Le jour 11 montre comment attraper ceux-là aussi.",
      },
    ],
    sheet: {
      slot: 3,
      id: "sheet-hooks",
      title: "La fiche Garde-fous",
      pitch:
        "Six garde-fous à coller aujourd'hui, plus la liste complète des événements.",
      contents: [
        "Tous les événements en français simple d'un côté",
        "Six garde-fous prêts à l'emploi de l'autre",
        "Les trois erreurs qui empêchent un garde-fou de se déclencher",
      ],
    },
    nextTeaser: "Arrêtez de réexpliquer la même tâche à chaque fois",
  },

  /* ---------------------------------------------------------------- Jour 9 */
  {
    day: 9,
    slug: "jour-9",
    title: "Votre premier travail enregistré",
    term: "skills",
    phase: 1,
    minutes: 15,
    app: "needs-app",
    promise:
      "Une chose que vous faites souvent, transformée en un seul mot à taper.",
    outcome: "Une tâche que vous déclenchez par son nom",
    why: [
      "Au jour 5 vous avez trouvé la tâche qui méritait d'être automatisée en premier. Aujourd'hui vous la construisez.",
      "Pour l'instant, chaque fois que vous voulez ce travail, vous retapez le même paragraphe d'instructions. Un travail enregistré garde ces instructions dans un fichier. Vous tapez un mot à la place.",
    ],
    sections: [
      {
        heading: "C'est un dossier avec un fichier dedans",
        body: [
          "Un travail enregistré, appelé une skill, est un dossier avec un `SKILL.md` dedans. Le nom du dossier devient le mot que vous tapez.",
          "Un dossier appelé `rapport-hebdo` vous donne `/rapport-hebdo`. Toute la règle de nommage tient là.",
        ],
        table: {
          head: ["Où vous le mettez", "Où ça marche"],
          rows: [
            [
              "`.claude/skills/nom/SKILL.md`",
              "Ce projet. Versionné et partagé avec votre équipe.",
            ],
            [
              "`~/.claude/skills/nom/SKILL.md`",
              "Vous, dans tous les projets de cette machine.",
            ],
          ],
        },
      },
      {
        heading: "Ça ne se charge que quand c'est utilisé",
        body: [
          "C'est ce qui rend les skills meilleures qu'un long fichier d'instructions. Votre CLAUDE.md est lu au début de chaque session, donc tout ce qu'il contient vous coûte à chaque fois.",
          "Une skill ne coûte rien tant que vous ne l'utilisez pas. Ça veut dire qu'une procédure longue et détaillée est très bien dans une skill et déplacée dans CLAUDE.md.",
        ],
        callout: {
          tag: "La règle pour savoir où mettre les choses",
          body: [
            "Un fait toujours vrai va dans CLAUDE.md. Une procédure avec des étapes va dans une skill. Si une section de votre CLAUDE.md est devenue une liste d'étapes, c'est le signal qu'il faut la déplacer.",
          ],
        },
      },
      {
        heading: "Prenez la plus ennuyeuse d'abord",
        body: [
          "La tentation est de construire celle qui impressionne. Construisez plutôt celle qui vous ennuie toutes les semaines.",
          "La valeur, c'est la fréquence multipliée par l'agacement. Un truc terne que vous faites tous les lundis bat un truc malin que vous faites deux fois par an.",
        ],
      },
    ],
    steps: [
      {
        title: "Créez le dossier",
        body: [
          "Nommez-le d'après ce qu'il fait, avec des mots que vous taperiez vraiment. C'est une skill de projet, donc votre équipe l'aura aussi.",
        ],
        code: {
          label: "Terminal",
          code: "mkdir -p .claude/skills/rapport-hebdo",
        },
      },
      {
        title: "Écrivez le fichier",
        body: [
          "La ligne `description` est importante. C'est comme ça qu'il décide de proposer la skill quand vous ne l'avez pas demandée par son nom. Dites quand elle doit servir, pas seulement ce qu'elle est.",
        ],
        code: {
          label: ".claude/skills/rapport-hebdo/SKILL.md",
          code: `---
description: Construit le point client de la semaine à partir des notes de 01_Actif. À utiliser quand je demande le rapport hebdo ou le point client.
---

## Instructions

1. Lis chaque fichier modifié dans 01_Actif au cours des sept derniers jours.
2. Regroupe ce que tu trouves par client.
3. Pour chaque client écris, dans cet ordre :
   - Ce qui a avancé cette semaine, en une phrase
   - Ce qui est bloqué, et qui on attend
   - Ce qui se passe la semaine prochaine
4. Garde l'ensemble sous une page.
5. Signale tout ce qui n'a pas bougé depuis deux semaines.

N'invente pas d'avancement. Si un client n'a rien, dis-le franchement.`,
        },
      },
      {
        title: "Lancez-la sur du vrai travail",
        body: [
          "Pas sur un dossier de test. Sur la vraie chose, cette semaine.",
          "Ce sera faux sur de petits détails la première fois. C'est attendu, et c'est tout l'intérêt de l'étape suivante.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/rapport-hebdo" },
      },
      {
        title: "Corrigez le fichier, pas le résultat",
        body: [
          "C'est l'habitude qui compte. Quand le résultat n'est pas bon, ne le corrigez pas dans la conversation. Retournez changer les instructions.",
          "Corriger la conversation répare une fois. Corriger le fichier répare pour toujours.",
        ],
      },
    ],
    win: {
      beforeLabel: "Chaque semaine avant",
      before: [
        "Vous : retapez le même paragraphe d'instructions",
        "Vous : recorrigez les deux mêmes choses",
      ],
      afterLabel: "Chaque semaine maintenant",
      after: ["Vous : `/rapport-hebdo`", "Lui : connaît déjà les deux choses"],
    },
    quiz: [
      {
        question: "Où vit une skill destinée à toute votre équipe ?",
        options: [
          "`.claude/skills/nom/SKILL.md` dans le projet",
          "`~/.claude/skills/nom/SKILL.md` dans votre dossier personnel",
        ],
        answer: 0,
        explanation:
          "Le dossier du projet est commité, donc tout le monde l'a. Celui du dossier personnel n'est qu'à vous, dans tous vos projets.",
      },
      {
        question:
          "Une procédure longue et détaillée. Sa place est dans CLAUDE.md ou dans une skill ?",
        options: [
          "CLAUDE.md, pour qu'elle soit toujours disponible",
          "Une skill, parce qu'elle ne se charge que quand on l'utilise",
        ],
        answer: 1,
        explanation:
          "CLAUDE.md est lu au début de chaque session, donc la longueur vous coûte à chaque fois. Une skill ne coûte rien tant que vous ne l'appelez pas.",
      },
      {
        question: "Le résultat n'était pas tout à fait juste. Que faites-vous ?",
        options: [
          "Modifier le SKILL.md pour que ce soit juste la prochaine fois aussi",
          "Lui dire dans la conversation ce qu'il faut changer",
        ],
        answer: 0,
        explanation:
          "Corriger la conversation répare une fois. Corriger le fichier répare à chaque fois à partir de maintenant. C'est tout l'intérêt d'enregistrer le travail.",
      },
    ],
    nextTeaser: "Voyez tout ce que vous avez construit, et choisissez la suite",
  },

  /* --------------------------------------------------------------- Jour 10 */
  {
    day: 10,
    resource: { id: "starter-kit" },
    slug: "jour-10",
    title: "Votre installation jusqu'ici",
    phase: 1,
    minutes: 12,
    app: "anywhere",
    promise:
      "Un système qui marche et que vous comprenez, et une idée claire de quels vingt jours suivants valent votre temps.",
    outcome: "Un système qui marche, et une suite à choisir",
    why: [
      "Il y a neuf jours vous n'aviez rien d'installé. Vous avez maintenant une installation qui connaît votre projet, retient vos corrections, protège vos fichiers et fait un travail sur commande.",
      "Aujourd'hui n'est pas une nouvelle leçon. C'est vérifier que les pièces marchent encore, et décider de la suite.",
    ],
    sections: [
      {
        heading: "Ce que vous avez vraiment construit",
        body: [
          "Six pièces. Chacune fait un métier différent, et ça aide de savoir dire laquelle est laquelle.",
        ],
        table: {
          head: ["Pièce", "Son métier", "Jour"],
          rows: [
            ["`CLAUDE.md`", "Les règles que vous avez écrites", "2"],
            ["La structure de dossiers", "Où sont les choses, sans l'expliquer", "3"],
            ["La mémoire", "Ce qu'il a appris tout seul", "4"],
            ["Votre offre", "Ce que ça coûte, et quand en changer", "6"],
            ["`.env` et `.gitignore`", "Les secrets tenus dehors", "7"],
            ["Un garde-fou", "Ce à quoi il ne doit jamais toucher", "8"],
            ["Un travail enregistré", "Une tâche, un mot", "9"],
          ],
        },
      },
      {
        heading: "S'arrêter ici est une vraie option",
        body: [
          "C'est une installation complète. Si vous ne lisez plus jamais une page de ce site, ce que vous avez continuera de se rembourser tout seul.",
          "Les vingt jours suivants ne sont pas plus de la même chose. Ils sont pour ceux qui veulent maintenant le façonner autour de leur travail, puis le faire tourner sans les surveiller.",
        ],
      },
      {
        heading: "À quoi servent les vingt jours suivants",
        body: [
          "Deux phases, avec deux promesses différentes. Choisissez selon la phrase qui ressemble le plus à votre problème.",
        ],
        table: {
          head: ["Phase", "Jours", "La promesse"],
          rows: [
            [
              "Le rendre vôtre",
              "11 à 20",
              "Il colle à votre travail, coûte moins cher, et se branche aux autres outils que vous utilisez.",
            ],
            [
              "Le faire travailler sans vous",
              "21 à 30",
              "Des travaux qui tournent pendant que vous faites autre chose, y compris à heure fixe.",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Vérifiez que chaque pièce marche encore",
        body: [
          "Neuf jours suffisent pour que quelque chose se casse en silence. Quatre vérifications rapides.",
        ],
        code: {
          label: "Tapez-les à Claude, une par une",
          code: `/context       -> mon CLAUDE.md est-il listé sous Memory files ?
/memory        -> y a-t-il quelque chose de faux ou de périmé ?
/hooks         -> PreToolUse affiche-t-il toujours 1 ?
/rapport-hebdo -> mon travail enregistré tourne-t-il encore ?`,
        },
      },
      {
        title: "Demandez-lui ce qui est faible",
        body: [
          "Il voit votre installation. Laissez-le vous dire ce qui manque plutôt que de deviner.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Regarde mon installation : CLAUDE.md, ma structure de dossiers, mon
dossier .claude/, mes hooks et mes skills.

Dis-moi :
1. Les trois choses les plus faibles là-dedans
2. Le seul changement qui aiderait le plus, et pourquoi
3. Tout ce qui va poser un problème plus tard

Sois franc. Ne sois pas encourageant.`,
        },
      },
      {
        title: "Choisissez vos trois prochains jours",
        body: [
          "Pas les vingt. Trois. Prenez-les dans la phase qui correspond à votre problème, faites-les, et revenez.",
          "Ceux qui en choisissent trois les finissent. Ceux qui s'engagent sur vingt n'en finissent aucun.",
        ],
      },
    ],
    win: {
      beforeLabel: "Il y a dix jours",
      before: ["Rien d'installé", "À vous expliquer à chaque session"],
      afterLabel: "Maintenant",
      after: [
        "Une installation qui connaît votre projet",
        "Qui retient vos corrections",
        "Qui protège vos fichiers",
        "Qui fait un travail sur commande",
      ],
    },
    quiz: [
      {
        question: "Quelle pièce contient les règles que vous avez écrites ?",
        options: ["La mémoire", "CLAUDE.md"],
        answer: 1,
        explanation:
          "Vous écrivez CLAUDE.md. Lui écrit la mémoire. Cette séparation vaut la peine de savoir la dire à voix haute, parce qu'elle décide où vont les nouvelles choses.",
      },
      {
        question:
          "Quelle pièce empêche quelque chose d'arriver, au lieu de suggérer que ça ne devrait pas ?",
        options: [
          "Un garde-fou, parce qu'il peut bloquer l'action net",
          "CLAUDE.md, parce que les règles sont écrites",
        ],
        answer: 0,
        explanation:
          "CLAUDE.md est une consigne et elle est généralement suivie. Un garde-fou est une contrainte et il s'exécute toujours. C'est pour ça que tout ce qui ne doit vraiment jamais arriver a sa place dans un garde-fou.",
      },
      {
        question:
          "Sur combien des vingt jours suivants faut-il s'engager aujourd'hui ?",
        options: ["Trois", "Les vingt"],
        answer: 0,
        explanation:
          "Ceux qui en choisissent trois les finissent. Ceux qui s'engagent sur vingt n'en finissent aucun. Prenez-en trois, faites-les, puis revenez en choisir.",
      },
    ],
    sheet: {
      slot: 4,
      id: "sheet-manager",
      title: "La fiche Manager",
      pitch:
        "Pour celui qui doit approuver. La réponse sur le papier, avant qu'il ne demande.",
      contents: [
        "Ce qu'implique vraiment un déploiement, étape par étape, avec le temps honnête",
        "Les questions que posera un approbateur, et des réponses directes",
        "Ce qu'il faut surveiller le premier mois, et à quoi ressemble le succès",
        "Les trois façons dont les déploiements en équipe échouent, et comment les éviter",
      ],
    },
    nextTeaser: "Construisez un garde-fou qui vérifie le travail et vous rend compte",
  },
];

