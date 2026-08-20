/**
 * Phase 2, le rendre vôtre. Jours 11 à 20.
 *
 * Traduction française de `days-phase-2.ts`, jour pour jour.
 *
 * Mêmes deux règles que la phase 1, et elles ne se négocient pas :
 *
 * 1. Numéros de jour et ordre des options de quiz identiques à l'anglais. La
 *    progression est stockée par numéro et par index, dans une clé partagée par
 *    les deux langues.
 * 2. Les commandes ne se traduisent pas. `/context` reste `/context`.
 */

import type { Day } from "./types";
import { SETTINGS_PATHS } from "./registry";

export const PHASE_2_DAYS_FR: Day[] = [
  /* --------------------------------------------------------------- Jour 11 */
  {
    day: 11,
    slug: "jour-11",
    title: "Des garde-fous qui vous rendent compte",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "Un garde-fou qui vérifie le travail après coup et rend ce qu'il a trouvé, pour que les erreurs soient corrigées avant que vous les voyiez.",
    outcome: "Un garde-fou qui vérifie et rapporte ce qu'il trouve",
    why: [
      "Le garde-fou du jour 8 dit non. Celui-ci dit voilà ce qui ne va pas. La différence est plus grande qu'elle n'en a l'air.",
      "Quand votre script écrit un problème, le message repart dans la conversation. Il le lit et corrige son propre travail, sans que vous soyez impliqué du tout.",
    ],
    sections: [
      {
        heading: "Avant et après sont deux métiers différents",
        body: [
          "`PreToolUse` tourne avant que quelque chose arrive, donc il peut l'arrêter. `PostToolUse` tourne après, donc il ne peut rien arrêter, mais il voit le résultat.",
          "Vérifier un travail est un métier d'après. On ne peut pas analyser un fichier qui n'a pas encore été écrit.",
        ],
        table: {
          head: ["Événement", "Quand", "Bien pour"],
          rows: [
            ["`PreToolUse`", "Avant l'action", "Bloquer. Protéger des fichiers."],
            ["`PostToolUse`", "Après l'action", "Vérifier, formater, journaliser."],
            ["`Stop`", "Quand il finit de répondre", "Vous prévenir. Une passe finale."],
          ],
        },
      },
      {
        heading: "La boucle de retour, en quatre étapes",
        body: [
          "C'est toute l'idée, et elle vaut d'être lue deux fois.",
          "1. Il modifie un fichier. 2. Votre garde-fou lance votre analyseur sur ce fichier. 3. L'analyseur trouve un problème, et votre garde-fou l'écrit. 4. Il lit ce message et corrige le fichier.",
          "Vous n'y étiez pour rien. Vous n'avez rien relu. L'erreur ne vous a jamais atteint.",
        ],
        callout: {
          tag: "Pourquoi ça compte plus que bloquer",
          body: [
            "Un blocage arrête une mauvaise chose. Un rapport rend la tentative suivante meilleure. Sur une semaine, le second change bien plus la façon dont vos sessions se passent.",
          ],
        },
      },
      {
        heading: "Attraper ce qui échappe à Edit et Write",
        body: [
          "Le quiz du jour 8 contenait un piège : un fichier modifié par une commande shell passe tranquillement à côté d'un filtre `Edit|Write`.",
          "Si une vérification doit vraiment voir chaque changement, ajoutez un garde-fou `Stop` qui balaye tout le dossier de travail une fois, à la fin du tour. Plus lent, mais rien ne passe.",
        ],
      },
    ],
    steps: [
      {
        title: "Écrivez un garde-fou qui vérifie et rapporte",
        body: [
          "Celui-ci lance l'analyseur de votre projet sur le fichier qui vient de changer, et écrit tout ce qu'il trouve.",
          "Remplacez `npx eslint` par ce que votre projet utilise vraiment. Si vous n'avez pas d'analyseur, prenez un correcteur orthographique, ou un script qui cherche juste `TODO`. C'est le mécanisme qui compte.",
        ],
        code: {
          label: `${SETTINGS_PATHS.hooksDir}/check-after-edit.sh`,
          code: `#!/bin/bash

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

[ -z "$FILE_PATH" ] && exit 0
[ -f "$FILE_PATH" ] || exit 0

OUTPUT=$(npx eslint "$FILE_PATH" 2>&1)

if [ -n "$OUTPUT" ]; then
  echo "Problèmes détectés dans $FILE_PATH :" >&2
  echo "$OUTPUT" >&2
  exit 2
fi

exit 0`,
        },
      },
      {
        title: "Rendez-le exécutable",
        panels: [
          {
            id: "mac",
            label: "macOS ou Linux",
            body: ["Comme au jour 8. Un nouveau script doit être autorisé à tourner."],
            code: {
              label: "Terminal",
              code: "chmod +x .claude/hooks/check-after-edit.sh",
            },
          },
          {
            id: "win",
            label: "Windows",
            body: [
              "Rien à faire ici. Passez à l'étape suivante. Comme au jour 8, il vous faut Git pour Windows pour que le script Bash puisse tourner du tout.",
            ],
          },
        ],
      },
      {
        title: "Branchez-le sur l'événement d'après",
        body: [
          "Notez que c'est `PostToolUse`, pas `PreToolUse`. Votre garde-fou du jour 8 reste exactement où il est. Un fichier de réglages peut contenir les deux.",
        ],
        code: {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/check-after-edit.sh"
          }
        ]
      }
    ]
  }
}`,
        },
      },
      {
        title: "Regardez la boucle se produire",
        body: [
          "Demandez un changement dont vous savez que votre analyseur va se plaindre. Puis regardez, et ne faites rien.",
          "Vous devriez le voir faire la modification, se faire reprendre par votre propre garde-fou, et corriger. Sinon, lancez `/hooks` et vérifiez que `PostToolUse` affiche 1.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: "Ajoute une nouvelle fonction dans un de mes fichiers source. Ne lance pas l'analyseur toi-même.",
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Lui : écrit quelque chose",
        "Vous : repérez le problème en relecture",
        "Vous : demandez une correction",
      ],
      afterLabel: "Après",
      after: [
        "Lui : écrit quelque chose",
        "Votre garde-fou : lui dit ce qui ne va pas",
        "Lui : corrige avant que vous regardiez",
      ],
    },
    quiz: [
      {
        question:
          "Vous voulez lancer votre formateur sur les fichiers après leur modification. Quel événement ?",
        options: ["`PreToolUse`", "`PostToolUse`"],
        answer: 1,
        explanation:
          "On ne peut pas formater un fichier qui n'a pas encore été écrit. Avant sert à bloquer, après sert à vérifier.",
      },
      {
        question:
          "Votre garde-fou écrit une erreur d'analyse et sort en 2. Que se passe-t-il ensuite ?",
        options: [
          "Le message repart dans la conversation et il peut corriger le fichier",
          "La session s'arrête et vous devez tout recommencer",
        ],
        answer: 0,
        explanation:
          "C'est toute la boucle. Votre script devient le relecteur, et la correction se fait avant que le problème vous atteigne.",
      },
      {
        question:
          "Il vous faut une vérification qui voit chaque changement de fichier, y compris ceux faits par des commandes shell. Qu'ajoutez-vous ?",
        options: [
          "Un garde-fou `Stop` qui balaye le dossier une fois à la fin du tour",
          "Rien. `Edit|Write` couvre déjà tout.",
        ],
        answer: 0,
        explanation:
          "Un filtre `Edit|Write` ne voit que ces deux outils. Une passe à la fin est plus lente, mais rien ne lui échappe.",
      },
    ],
    nextTeaser:
      "Arrêtez de charger des règles qui ne valent que pour certains de vos fichiers",
  },

  /* --------------------------------------------------------------- Jour 12 */
  {
    day: 12,
    slug: "jour-12",
    title: "Des règles qui ne se chargent qu'au besoin",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "Vos instructions découpées, pour que chacune n'apparaisse que quand elle est vraiment pertinente.",
    outcome: "Des instructions limitées aux fichiers qu'elles concernent",
    why: [
      "Votre CLAUDE.md grossit. Des règles sur les tests, des règles sur la base de données, des règles sur le front, toutes chargées à chaque session, que vous soyez près de ces fichiers ou pas.",
      "Aujourd'hui vous les séparez, pour qu'une règle sur les fichiers de base de données n'apparaisse que quand un fichier de base de données est ouvert.",
    ],
    sections: [
      {
        heading: "Pourquoi un gros fichier empire en grossissant",
        body: [
          "Deux choses tournent mal en même temps, et elles tirent dans le même sens.",
          "Ça coûte plus cher à chaque message, parce que tout est lu à chaque fois. Et c'est moins bien suivi, parce qu'une règle sur les tests est posée à côté de vingt règles qui n'ont rien à voir avec ce que vous demandez.",
        ],
      },
      {
        heading: "Les règles vivent dans leur propre dossier",
        body: [
          "Mettez des fichiers markdown dans `.claude/rules/`. Un sujet par fichier, nommé d'après le sujet.",
          "Une règle sans filtre de chemin se charge à chaque session, comme CLAUDE.md. Une règle avec un filtre ne se charge que quand un fichier correspondant est touché.",
        ],
        table: {
          head: ["Fichier", "Se charge"],
          rows: [
            ["`.claude/rules/code-style.md`", "À chaque session. Pas de filtre."],
            [
              "`.claude/rules/testing.md` avec un filtre",
              "Seulement quand un fichier de test est ouvert.",
            ],
            ["`~/.claude/rules/preferences.md`", "Dans tous les projets de votre machine."],
          ],
        },
      },
      {
        heading: "Le filtre tient en quelques lignes en haut",
        body: [
          "Ajoutez un petit bloc tout en haut du fichier qui liste les fichiers concernés. Voilà tout le mécanisme.",
          "Les motifs sont les habituels : `**` veut dire n'importe quelle profondeur de dossier, `*` n'importe quel nom.",
        ],
        table: {
          head: ["Motif", "Correspond à"],
          rows: [
            ["`**/*.ts`", "Tous les fichiers TypeScript, n'importe où"],
            ["`src/api/**/*`", "Tout ce qui est sous `src/api/`"],
            ["`*.md`", "Les fichiers markdown à la racine du projet uniquement"],
            ["`tests/**/*.test.ts`", "Les fichiers de test sous `tests/`"],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Découvrez ce qu'il y a vraiment dedans",
        body: [
          "Ne devinez pas. Laissez-le lire votre fichier et vous dire ce qui devrait bouger.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Lis mon CLAUDE.md. Pour chaque règle qu'il contient, dis-moi :

1. S'applique-t-elle à tous les fichiers, ou seulement à certains ?
2. Si seulement certains, quel motif de fichier ?

Ensuite liste quelles règles devraient partir dans .claude/rules/
et comment nommer chaque fichier. Ne déplace rien pour l'instant.`,
        },
      },
      {
        title: "Sortez une seule règle",
        body: [
          "Une, pas toutes. Vous voulez voir le mécanisme marcher avant de tout réorganiser.",
          "Le bloc entre les tirets est le filtre. Tout ce qui est en dessous est la règle.",
        ],
        code: {
          label: ".claude/rules/testing.md",
          code: `---
paths:
  - "**/*.test.ts"
  - "tests/**/*"
---

# Règles de test

- Chaque nouvelle fonction a un test dans le même commit
- Les noms de test disent quel est le comportement, pas comment s'appelle la fonction
- Aucun appel réseau dans les tests unitaires. Simulez-les.
- Lancez \`npm test\` avant de dire que quelque chose est fini`,
        },
      },
      {
        title: "Retirez-la de CLAUDE.md",
        body: [
          "Si la règle est aux deux endroits, vous avez empiré les choses, pas amélioré.",
          "Supprimez ces lignes de CLAUDE.md maintenant.",
        ],
      },
      {
        title: "Prouvez que le filtre marche",
        body: [
          "Démarrez une session neuve. Lancez `/context` avant de toucher à quoi que ce soit : votre règle de test ne doit pas être chargée. Puis ouvrez un fichier de test et relancez `/context`. Maintenant elle doit y être.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Un fichier, qui grossit chaque semaine",
        "Chaque règle chargée à chaque session",
      ],
      afterLabel: "Après",
      after: [
        "Un CLAUDE.md court, avec les choses toujours vraies",
        "Des règles qui n'apparaissent que quand elles servent",
      ],
    },
    quiz: [
      {
        question: "Un fichier de règle sans filtre de chemin. Quand se charge-t-il ?",
        options: [
          "À chaque session, comme CLAUDE.md",
          "Jamais, tant que vous ne le demandez pas",
        ],
        answer: 0,
        explanation:
          "Pas de filtre veut dire qu'il s'applique toujours. Le filtre est ce qui le rend conditionnel. C'est la seule différence.",
      },
      {
        question:
          "Vous déplacez une règle dans `.claude/rules/` mais vous la laissez aussi dans CLAUDE.md. Qu'avez-vous gagné ?",
        options: [
          "Rien de bon. Elle se charge deux fois et coûte plus qu'avant.",
          "De la sécurité en plus. Deux copies, donc plus de chances qu'elle soit suivie.",
        ],
        answer: 0,
        explanation:
          "La duplication est le mode d'échec ici. Pire, si les deux copies divergent vous obtenez des instructions contradictoires et il en choisit une au hasard.",
      },
      {
        question:
          "Vous voulez une règle qui s'applique à tous les fichiers TypeScript du projet, à n'importe quelle profondeur. Quel motif ?",
        options: ["`**/*.ts`", "`*.ts`"],
        answer: 0,
        explanation:
          "`*.ts` ne correspond qu'à la racine du projet. `**` est la partie qui veut dire à n'importe quelle profondeur.",
      },
    ],
    nextTeaser: "Découvrez où votre session dépense vraiment son budget",
  },

  /* --------------------------------------------------------------- Jour 13 */
  {
    day: 13,
    slug: "jour-13",
    title: "Maîtrisez ce à quoi il fait attention",
    term: "contexte",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "Vous voyez exactement ce qui est chargé dans une session, et vous avez retiré la plus grosse chose qui ne devrait pas y être.",
    outcome: "Un audit fait, une chose retirée",
    why: [
      "Tout ce qu'il sait au début d'une session prend de la place : vos instructions, vos règles, votre mémoire, la description de chaque outil qu'il peut atteindre.",
      "Lancez ça une fois et vous trouverez généralement une chose qui occupe un tiers de la place.",
    ],
    sections: [
      {
        heading: "Il existe une commande qui vous montre tout",
        body: [
          "`/context` affiche ce qui est chargé et combien de place chaque partie prend. C'est la commande la plus utile de toute cette page et presque personne ne la lance.",
          "Lancez-la maintenant, avant de lire la suite. Ce que vous trouverez sera plus convaincant que tout ce qui est écrit ici.",
        ],
        callout: {
          tag: "Ce qu'il faut chercher",
          body: [
            "Tout ce à quoi vous ne vous attendiez pas. Tout ce qui est gros. Et surtout tout outil connecté dont vous ne vous servez pas cette semaine, parce que les descriptions d'outils sont chargées que vous les utilisiez ou non.",
          ],
        },
      },
      {
        heading: "Les quatre choses qui prennent de la place",
        body: ["À peu près dans l'ordre où elles surprennent les gens."],
        table: {
          head: ["Quoi", "Chargé quand", "Comment le réduire"],
          rows: [
            [
              "Les outils connectés",
              "Toujours, utilisés ou non",
              "Déconnectez ce qui ne sert pas. Jour 17.",
            ],
            ["`CLAUDE.md` et les règles", "À chaque session", "Découpez par chemin. Jour 12."],
            ["L'index de mémoire", "À chaque session", "Supprimez les notes périmées. `/memory`."],
            ["Les fichiers lus pendant la session", "Au fil de l'eau", "`/compact` ou `/clear`."],
          ],
        },
      },
      {
        heading: "Vider et compacter ne sont pas la même chose",
        body: [
          "Les deux vous rendent de la place. Ils perdent des choses différentes, et se tromper est agaçant.",
        ],
        table: {
          head: ["", "`/compact`", "`/clear`"],
          rows: [
            [
              "Ce que ça fait",
              "Résume la conversation jusqu'ici",
              "Repart de zéro",
            ],
            ["Vous gardez", "L'essentiel de ce qui s'est passé", "Rien de la conversation"],
            [
              "À utiliser quand",
              "Même travail, qui dure",
              "Nouveau travail, sans rapport avec le précédent",
            ],
          ],
        },
      },
    ],
    steps: [
      {
        title: "Regardez une vraie session",
        body: [
          "Pas une session neuve. Ouvrez un projet où vous travaillez, faites quelque chose de normal pendant quelques minutes, puis lancez ceci.",
          "Notez le plus gros élément. Ce chiffre est tout l'intérêt de la journée.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
      {
        title: "Demandez-lui de lire son propre rapport",
        body: [
          "Il voit la même liste que vous, et il est meilleur pour repérer l'intrus.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Lance /context et regarde le résultat.

1. Qu'est-ce qui prend le plus de place ?
2. Là-dedans, qu'est-ce qui ne sert pas à ce que je fais aujourd'hui ?
3. Quel seul changement libérerait le plus, et qu'est-ce que j'y perdrais ?`,
        },
      },
      {
        title: "Retirez exactement une chose",
        body: [
          "Une. Celle qui est arrivée en tête. Déconnectez l'outil, supprimez la mémoire périmée, découpez la règle.",
          "Puis relancez `/context` et voyez la différence. Voir le chiffre bouger est ce qui fait tenir l'habitude.",
        ],
      },
      {
        title: "Prenez le réflexe des deux touches",
        body: [
          "Quand une session est longue et toujours sur le même travail, `/compact`. Quand vous passez à autre chose sans rapport, `/clear`.",
          "Le faire par réflexe vaut plus que n'importe quel réglage de cette page.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Aucune idée de ce qui était chargé",
        "Vous payez tout, à chaque message",
      ],
      afterLabel: "Après",
      after: [
        "Une liste que vous avez lue",
        "Une grosse chose partie",
        "Une habitude pour le reste",
      ],
    },
    quiz: [
      {
        question: "Quelle commande vous montre ce qui est chargé dans une session ?",
        options: ["`/context`", "`/memory`"],
        answer: 0,
        explanation:
          "`/memory` montre vos fichiers de mémoire en particulier. `/context` montre tout, y compris ce que vous n'y avez pas mis vous-même.",
      },
      {
        question:
          "Vous avez connecté un outil il y a trois semaines et vous ne l'avez pas utilisé depuis. Est-ce que ça vous coûte quelque chose ?",
        options: [
          "Oui. Sa description est chargée à chaque session, utilisée ou non.",
          "Non. Ça ne coûte que quand vous l'utilisez.",
        ],
        answer: 0,
        explanation:
          "C'est la surprise la plus fréquente dans un rapport `/context`. Le jour 17 est entièrement consacré à ça.",
      },
      {
        question:
          "Vous êtes depuis deux heures sur un même long travail et vous manquez de place. Vous utilisez quoi ?",
        options: [
          "`/compact`, qui résume et garde l'essentiel",
          "`/clear`, qui repart de zéro",
        ],
        answer: 0,
        explanation:
          "Même travail veut dire que vous voulez garder l'historique, juste en plus petit. `/clear` est pour quand la suite n'a rien à voir avec ce qui précède.",
      },
    ],
    sheet: {
      slot: 5,
      id: "sheet-context",
      title: "La fiche Contexte",
      pitch: "Une page. Tout ce qui se charge, et comment récupérer la place.",
      contents: [
        "Tout ce qui est chargé, et à quel moment",
        "Les cinq plus gros gains, dans l'ordre, avec ce que chacun vous coûte",
        "Compacter contre vider, et comment choisir en une seconde",
      ],
    },
    nextTeaser: "Transformez cet audit en argent que vous ne dépensez plus",
  },

  /* --------------------------------------------------------------- Jour 14 */
  {
    day: 14,
    slug: "jour-14",
    title: "Dépensez moins pour le même travail",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "Une baisse mesurée de ce que coûtent vos sessions, avec un avant et un après que vous pouvez montrer à quelqu'un.",
    outcome: "Une baisse mesurée, avant et après",
    why: [
      "Hier vous avez vu où ça part. Aujourd'hui vous coupez, et vous mesurez la différence au lieu de supposer qu'il y en a une.",
      "C'est aussi la réponse honnête au jour 6. Beaucoup de gens qui pensaient avoir besoin d'une offre plus grosse n'en avaient pas besoin, une fois qu'ils ont arrêté de tout charger dans chaque session.",
    ],
    sections: [
      {
        heading: "Mesurez d'abord, toujours",
        body: [
          "Chaque changement de cette page a l'air de devoir aider. Certains ne bougeront presque rien chez vous, et l'un d'eux est peut-être tout le problème.",
          "Alors notez le chiffre de départ. Sinon vous ferez six choses et vous ne saurez jamais laquelle comptait.",
        ],
      },
      {
        heading: "Les trois changements, par ordre de taille",
        body: [
          "Faites-les dans cet ordre. Le premier est en général plus gros que les deux autres réunis.",
        ],
        table: {
          head: ["Changement", "Effet habituel", "Ce que ça vous coûte"],
          rows: [
            [
              "Déconnecter les outils qui ne servent pas",
              "Souvent le plus gros gain à lui seul",
              "Vous les reconnectez la semaine où vous en avez besoin",
            ],
            [
              "Alléger ce qui se charge à chaque session",
              "Une économie régulière sur chaque message",
              "Une heure de rangement, une fois",
            ],
            [
              "Compacter et vider par réflexe",
              "Empêche les longues sessions de coûter cher",
              "Rien. C'est une habitude.",
            ],
          ],
        },
      },
      {
        heading: "Gros travail, petit travail",
        body: [
          "L'autre levier n'est pas de charger moins, c'est de choisir la bonne taille d'outil pour le travail.",
          "Une recherche rapide, un résumé, un classement oui ou non : ça n'a pas besoin de votre modèle le plus lourd. Réservez-le au travail qui demande vraiment du raisonnement.",
          "Le jour 21 rend ça automatique en donnant aux travaux étroits leur propre assistant, avec leur propre modèle plus léger.",
        ],
      },
    ],
    steps: [
      {
        title: "Notez d'où vous partez",
        body: [
          "Ouvrez une session de travail normale et lancez ceci. Notez le total. C'est votre avant.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
      {
        title: "Coupez le plus gros",
        body: [
          "Hier vous en avez retiré un. Aujourd'hui retirez tout le reste dont vous ne vous servez vraiment pas.",
          "Le test pour un outil connecté est simple : vous en êtes-vous servi ces deux dernières semaines ? Sinon, déconnectez. Reconnecter prend une minute.",
        ],
      },
      {
        title: "Allégez ce qui se charge à chaque fois",
        body: [
          "Votre CLAUDE.md, vos règles sans filtre, et votre index de mémoire. Lisez les trois et supprimez tout ce qui n'est plus vrai.",
          "Des instructions périmées sont pires que pas d'instructions, parce qu'elles sont suivies.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/memory" },
      },
      {
        title: "Mesurez à nouveau, et notez-le",
        body: [
          "Session neuve, même commande. Comparez avec votre avant.",
          "Mettez les deux chiffres quelque part où vous les retrouverez. Quand quelqu'un demandera si ça valait le coup, cette ligne est votre réponse.",
        ],
        code: {
          label: "Ajoutez une ligne comme celle-ci à vos notes",
          code: `Audit de contexte, [date du jour]
Avant : ...
Après : ...
Plus gros gain : ...`,
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Tout chargé, à chaque session",
        "Aucune idée de ce que ça coûtait",
      ],
      afterLabel: "Après",
      after: ["Seulement ce que vous utilisez", "Deux chiffres que vous pouvez montrer"],
    },
    quiz: [
      {
        question: "Quelle est la première chose à faire avant de changer quoi que ce soit ?",
        options: [
          "Noter le chiffre de départ",
          "Déconnecter tous les outils que vous avez",
        ],
        answer: 0,
        explanation:
          "Sans un avant, vous ferez six changements et vous ne saurez jamais lequel a marché. Mesurer d'abord est ce qui transforme ça d'une impression en un fait.",
      },
      {
        question: "Quel changement est en général le plus gros ?",
        options: [
          "Déconnecter les outils qui ne servent pas",
          "Raccourcir votre CLAUDE.md",
        ],
        answer: 0,
        explanation:
          "Chaque outil connecté charge sa description à chaque session, que vous l'utilisiez ou non. C'est presque toujours le plus gros élément du rapport.",
      },
      {
        question:
          "Vous voulez un résumé en une ligne d'un fichier. Faut-il votre modèle le plus capable ?",
        options: [
          "Non. Adaptez la taille de l'outil à la taille du travail.",
          "Oui. Utilisez toujours le meilleur disponible.",
        ],
        answer: 0,
        explanation:
          "Résumer, chercher et classer ne demandent pas de raisonnement lourd. Le jour 21 rend ça automatique plutôt que quelque chose dont il faut se souvenir.",
      },
    ],
    nextTeaser:
      "Transformez vos trois meilleurs travaux répétés en trois travaux enregistrés",
  },

  /* --------------------------------------------------------------- Jour 15 */
  {
    day: 15,
    slug: "jour-15",
    title: "Construisez une bibliothèque de travaux enregistrés",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "Trois travaux enregistrés, choisis parce qu'ils rapportent le plus, pas parce qu'ils étaient les plus faciles à construire.",
    outcome: "Trois travaux enregistrés, classés par ce qu'ils font gagner",
    why: [
      "Au jour 9 vous en avez construit un. Il marche, et vous vous en êtes sans doute servi quelques fois depuis.",
      "Aujourd'hui il s'agit de le faire exprès plutôt qu'à l'instinct : déterminer quels travaux valent vraiment d'être enregistrés, dans quel ordre, puis construire les premiers.",
    ],
    sections: [
      {
        heading: "Classez par fréquence multipliée par agacement",
        body: [
          "Deux notes, sur cinq chacune. À quelle fréquence vous le faites, et à quel point ça vous ennuie. Multipliez.",
          "Ce classement est presque toujours différent de l'ordre que vous auriez deviné, et c'est dans cet écart qu'est la valeur.",
        ],
        table: {
          head: ["Travail", "Fréquence", "Agacement", "Note"],
          rows: [
            ["Point client hebdomadaire", "5", "4", "20"],
            ["Expliquer un bug à un collègue", "4", "3", "12"],
            ["Mettre en place un nouveau projet", "1", "5", "5"],
            ["Remettre en forme un tableur", "2", "2", "4"],
          ],
        },
        callout: {
          tag: "Le piège",
          body: [
            "Celui qui impressionne est presque toujours le rare. Mettre en place un nouveau projet est profondément agaçant et fait 5, parce que vous le faites trois fois par an. Construisez d'abord le 20 ennuyeux.",
          ],
        },
      },
      {
        heading: "Ce qui fait un bon travail enregistré",
        body: [
          "Trois propriétés. Il en manque une et vous arrêterez de l'utiliser en quinze jours.",
        ],
        table: {
          head: ["Propriété", "Ce que ça veut dire"],
          rows: [
            [
              "Même forme à chaque fois",
              "Les étapes ne changent pas, seule l'entrée change",
            ],
            [
              "Vous pouvez dire si ça a marché",
              "Il y a un résultat que vous pouvez regarder et juger",
            ],
            [
              "Il dit ce qu'il ne faut pas faire",
              "L'erreur que vous corrigez sans arrêt est écrite noir sur blanc",
            ],
          ],
        },
      },
      {
        heading: "Dites ce qu'il ne faut pas faire",
        body: [
          "C'est la ligne qui sépare une skill que vous gardez d'une skill que vous abandonnez. Tout ce qu'il rate deux fois, écrivez-le explicitement.",
          "Pas « sois précis ». Plutôt : n'invente pas d'avancement, si un client n'a rien dis-le franchement.",
        ],
      },
    ],
    steps: [
      {
        title: "Listez-en dix, honnêtement",
        body: [
          "Dix choses que vous avez faites plus d'une fois le mois dernier. Des vraies. Les ennuyeuses comptent double.",
        ],
      },
      {
        title: "Notez-les",
        code: {
          label: "Tapez ceci à Claude",
          code: `Voici dix choses que je fais de façon répétée :
1. ...
(jusqu'à 10)

Pour chacune : note sur 5 la fréquence, et sur 5 l'agacement.
Multiplie pour un total. Trie par total.

Ensuite dis-moi lesquelles trois valent la peine d'être
enregistrées en skills, et lesquelles ne valent pas le coup.
Sois franc sur celles qui n'en valent pas la peine.`,
        },
      },
      {
        title: "Construisez la première correctement",
        body: [
          "Même forme qu'au jour 9 : un dossier, un `SKILL.md`, une description qui dit quand l'utiliser.",
          "Écrivez la ligne de ce qu'il ne faut pas faire dès le départ. Vous savez déjà ce qu'il va rater, parce que c'est ce que vous devez toujours corriger.",
        ],
      },
      {
        title: "Utilisez-les une semaine avant d'en construire d'autres",
        body: [
          "Ne construisez pas les trois aujourd'hui. Construisez-en une, servez-vous-en une semaine, corrigez le fichier chaque fois que ce n'est pas tout à fait juste.",
          "Une skill que vous avez corrigée trois fois vaut plus que trois skills que vous n'avez jamais utilisées.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Un travail enregistré, construit à l'instinct",
        "Aucune idée de ce qui devrait suivre",
      ],
      afterLabel: "Après",
      after: ["Une liste classée", "La première construite", "Une raison pour l'ordre"],
    },
    quiz: [
      {
        question: "Comment classer quel travail enregistrer en premier ?",
        options: [
          "La fréquence, multipliée par l'agacement",
          "À quel point ce serait impressionnant de l'automatiser",
        ],
        answer: 0,
        explanation:
          "Celui qui impressionne est presque toujours le rare. Fréquence fois agacement remet le travail ennuyeux hebdomadaire là où il doit être, en haut.",
      },
      {
        question: "Quelle ligne rend une skill vraiment utilisable ?",
        options: [
          '« N\'invente pas d\'avancement. Si un client n\'a rien, dis-le. »',
          '« Sois précis et professionnel. »',
        ],
        answer: 0,
        explanation:
          "Nommer l'échec précis que vous corrigez sans arrêt vaut plus que n'importe quelle quantité d'encouragement général.",
      },
      {
        question:
          "Vous avez classé votre liste. Faut-il construire les trois aujourd'hui ?",
        options: [
          "Non. Construisez-en une, servez-vous-en une semaine, corrigez au fil de l'eau.",
          "Oui. Finissez-les toutes tant que vous avez l'élan.",
        ],
        answer: 0,
        explanation:
          "Une skill corrigée trois fois bat trois skills jamais lancées. C'est dans les corrections que la valeur s'ajoute.",
      },
    ],
    sheet: {
      slot: 6,
      id: "sheet-skills",
      title: "La fiche Travaux enregistrés",
      pitch:
        "Le tableau de notation, plus quatre fichiers de skill à copier aujourd'hui.",
      contents: [
        "Le tableau de classement, vierge, prêt à remplir",
        "Quatre fichiers de skill complets pour des travaux que presque tout le monde a",
        "Les quatre raisons pour lesquelles un travail enregistré est abandonné, et comment les éviter",
      ],
    },
    nextTeaser: "Laissez-le atteindre les autres outils que vous utilisez déjà",
  },

  /* --------------------------------------------------------------- Jour 16 */
  {
    day: 16,
    slug: "jour-16",
    title: "Connectez vos autres applications",
    term: "MCP",
    phase: 2,
    minutes: 15,
    app: "needs-app",
    promise:
      "Une vraie connexion, qui fait un vrai travail, choisie parce que vous en aviez besoin et non parce qu'elle existait.",
    outcome: "Une connexion, qui fait une vraie tâche",
    why: [
      "Jusqu'ici tout s'est passé dans vos propres dossiers. Une connexion lui permet d'aller dehors : votre suivi de tickets, votre base de données, vos documents.",
      "C'est le jour avec le meilleur rapport enthousiasme sur regret de tout le challenge, ce qui explique que demain soit entièrement consacré à la retenue.",
    ],
    sections: [
      {
        heading: "Ce qu'est vraiment une connexion",
        body: [
          "Un petit programme qui se place entre lui et un autre service, et qui propose une liste de ce que ce service sait faire.",
          "Une fois connecté, vous arrêtez de décrire les étapes. Vous dites ce que vous voulez, avec des mots normaux, et il trouve laquelle de ces actions utiliser.",
        ],
      },
      {
        heading: "Connectez celle dont vous vous serviriez aujourd'hui",
        body: [
          "Pas celle qui a l'air la plus puissante. Celle dont vous vous serviriez vraiment cet après-midi.",
          "La bonne façon de choisir est de finir cette phrase : j'arrête pas de changer de fenêtre pour X. Quel que soit X, connectez ça.",
        ],
        table: {
          head: ["Si vous changez de fenêtre pour", "Connectez"],
          rows: [
            [
              "Votre suivi de tickets, pour voir ce qui vous est assigné",
              "Ce suivi de tickets",
            ],
            [
              "Une base de données, pour lancer la même requête de lecture",
              "Cette base de données",
            ],
            [
              "Vos documents, pour retrouver une décision d'il y a des mois",
              "Cet outil de documents",
            ],
            [
              "Rien. Vous êtes juste curieux.",
              "Rien aujourd'hui. Revenez quand vous aurez un X.",
            ],
          ],
        },
      },
      {
        heading: "Chaque connexion a un coût permanent",
        body: [
          "C'est la partie qu'on saute, et c'est pour ça que le jour 13 venait avant.",
          "La description de tout ce qu'une connexion sait faire est chargée dans chaque session, que vous vous en serviez ou non. Connectez cinq choses inutiles et vous payez les cinq à chaque message que vous envoyez.",
        ],
        callout: {
          tag: "La règle",
          body: [
            "Une connexion à la fois. Servez-vous-en une semaine. Seulement ensuite, envisagez la deuxième. Demain parle de ce qui arrive à ceux qui ignorent ça.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Finissez la phrase",
        body: [
          "J'arrête pas de changer de fenêtre pour ___. Écrivez-le. Si vous ne pouvez pas la finir honnêtement, arrêtez-vous là et revenez un autre jour. C'est une vraie réponse.",
        ],
      },
      {
        title: "Trouvez-la et ajoutez-la",
        body: [
          "Laissez-le faire la recherche. L'installation d'une connexion diffère selon le service et il peut lire les instructions à jour plutôt que vous les fassiez chercher.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Je veux connecter [le service] pour pouvoir [la chose pour
laquelle vous changez de fenêtre].

Dis-moi :
1. S'il existe un connecteur officiel
2. Exactement ce qu'il me faut pour l'installer, identifiants compris
3. La commande pour l'ajouter
4. Ce qu'il pourra faire une fois connecté, et ce qu'il ne pourra pas

S'il n'y a pas de bonne option, dis-le-moi au lieu d'improviser.`,
        },
      },
      {
        title: "Gardez l'identifiant hors du fichier de réglages",
        body: [
          "Tout ce qui vient du jour 7 s'applique ici. Une connexion a souvent besoin d'un jeton, et un jeton a sa place dans une variable d'environnement, pas tapé dans un fichier de réglages qui finit commité.",
          "Si un guide d'installation vous dit de coller une clé directement dans un fichier, arrêtez-vous et trouvez la version avec variable d'environnement.",
        ],
      },
      {
        title: "Servez-vous-en pour le vrai travail, tout de suite",
        body: [
          "Pas un test. La vraie chose que vous avez écrite à l'étape un. Si ça ne vous épargne pas le changement de fenêtre, déconnectez aujourd'hui plutôt que de la laisser traîner.",
        ],
      },
      {
        title: "Regardez ce que ça a coûté",
        body: [
          "Lancez ceci et trouvez votre nouvelle connexion dans la liste. Vous connaissez maintenant son prix, et vous pouvez décider si le travail en valait la peine.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Vous : passez sur l'autre outil",
        "Vous : trouvez la chose",
        "Vous : la recopiez",
      ],
      afterLabel: "Après",
      after: [
        'Vous : « qu\'est-ce qui m\'est assigné cette semaine ? »',
        "Lui : va le chercher",
      ],
    },
    quiz: [
      {
        question: "Comment choisir votre première connexion ?",
        options: [
          "Finir la phrase : j'arrête pas de changer de fenêtre pour ___",
          "Prendre la plus puissante disponible",
        ],
        answer: 0,
        explanation:
          "Une connexion dont vous ne vous servez pas est un coût pur. Le changement de fenêtre que vous refaites sans arrêt est la seule preuve qui vaille qu'on agisse.",
      },
      {
        question:
          "Vous connectez un service et ne l'utilisez pas pendant un mois. Combien ça a coûté ?",
        options: [
          "De la place dans chacune de vos sessions ce mois-là",
          "Rien. Inutilisé veut dire gratuit.",
        ],
        answer: 0,
        explanation:
          "La liste de ce qu'il sait faire est chargée à chaque session, quoi qu'il arrive. C'est exactement le sujet de demain.",
      },
      {
        question:
          "Un guide d'installation vous dit de coller votre jeton d'API directement dans un fichier de réglages. Que faites-vous ?",
        options: [
          "Trouver la version avec variable d'environnement",
          "Le coller. Les fichiers de réglages sont locaux.",
        ],
        answer: 0,
        explanation:
          "Les fichiers de réglages sont commités et partagés. Tout ce qui vient du jour 7 s'applique encore, et c'est la façon la plus courante dont un jeton s'échappe.",
      },
    ],
    sheet: {
      slot: 7,
      id: "sheet-connections",
      title: "La fiche Connexions",
      pitch: "Choisir la bonne, et l'installer sans laisser fuir un jeton.",
      contents: [
        "La question qui tranche, et quand la réponse honnête est pas encore",
        "L'installation des connexions que la plupart des entreprises ont déjà",
        "Garder les identifiants hors des fichiers, avec le schéma qui marche",
      ],
    },
    nextTeaser:
      "Pourquoi celui qui a quinze connexions est plus lent que vous",
  },

  /* --------------------------------------------------------------- Jour 17 */
  {
    day: 17,
    slug: "jour-17",
    title: "Pourquoi il ne faut pas tout connecter",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "Vos connexions réduites à celles qui méritent leur place, et une règle pour dire non à la suivante.",
    outcome: "Des connexions réduites à ce qui mérite sa place",
    why: [
      "Hier vous avez connecté une chose et ça a fait du bien. Le réflexe suivant est d'en connecter huit autres. C'est le jour qui vous en dissuade.",
      "Chaque connexion rend chaque session un peu plus lourde et un peu plus floue. Celui qui a quinze connexions n'est pas plus capable. Il est plus lent, et ses résultats sont moins bons.",
    ],
    sections: [
      {
        heading: "Le coût est payé à chaque message",
        body: [
          "Une connexion n'est pas comme une application qu'on installe et qu'on oublie. Toute sa liste de capacités est chargée au début de chaque session, utilisée ou non.",
          "Quinze connexions, ça fait quinze listes, à chaque fois que vous dites bonjour.",
        ],
      },
      {
        heading: "Le deuxième coût est pire que le premier",
        body: [
          "La place est le coût évident. La confusion est le coût cher.",
          "Quand deux cents actions possibles sont disponibles et que trois seulement sont pertinentes, la mauvaise est choisie plus souvent. Vous le remarquez comme un comportement un peu étrange, et vous ne remontez jamais jusqu'à la connexion ajoutée il y a un mois.",
        ],
        table: {
          head: ["Connexions", "Ce que vous remarquez"],
          rows: [
            ["Une ou deux", "Il prend la bonne chose sans qu'on lui dise"],
            ["Cinq ou six", "De temps en temps vous devez dire quel outil utiliser"],
            [
              "Dix ou plus",
              "Vous nommez l'outil à chaque fois. C'est-à-dire là où vous aviez commencé.",
            ],
          ],
        },
      },
      {
        heading: "Étroit bat large",
        body: [
          "Certaines connexions proposent des centaines d'actions. Vous en avez besoin de quatre.",
          "Quand une connexion permet de limiter les actions disponibles, limitez-les. Une connexion réduite à la poignée que vous utilisez est nettement moins chère et sensiblement plus précise que la même grande ouverte.",
        ],
        callout: {
          tag: "La règle pour dire non",
          body: [
            "Une connexion mérite sa place si vous vous en êtes servi ces deux dernières semaines. Sinon, déconnectez-la aujourd'hui. Reconnecter prend une minute, et elle ne vous manquera pas.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Listez ce que vous avez connecté",
        body: [
          "Y compris ce que vous avez installé il y a des mois et oublié. C'est en général là qu'est la surprise.",
        ],
        code: { label: "Tapez ceci à Claude", code: "/context" },
      },
      {
        title: "Appliquez le test des deux semaines",
        body: [
          "Pour chacune : vous en êtes-vous vraiment servi ces quinze derniers jours ? Pas auriez pu. Vous êtes-vous servi.",
          "Tout ce qui échoue, déconnectez maintenant. Ne la gardez pas au cas où. Le cas où prend une minute.",
        ],
      },
      {
        title: "Rétrécissez celles que vous gardez",
        body: [
          "Pour chaque survivante, trouvez la poignée de capacités que vous utilisez vraiment, et limitez-la à celles-là quand c'est possible.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Pour chaque connexion qu'il me reste :

1. Lesquelles de ses actions ai-je vraiment utilisées ?
2. Cette connexion peut-elle être limitée à celles-là ?
3. Si oui, comment exactement ?

Montre-moi la plus petite configuration qui fait encore ce dont j'ai besoin.`,
        },
      },
      {
        title: "Mesurez",
        body: [
          "Relancez `/context` et comparez avec l'étape un. C'est la même habitude d'avant et après qu'au jour 14, et c'est la raison pour laquelle le changement tient.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Neuf connexions, trois utilisées",
        "Vous : nommez l'outil à chaque fois",
      ],
      afterLabel: "Après",
      after: [
        "Trois connexions, toutes utilisées",
        "Lui : prend la bonne sans qu'on lui dise",
      ],
    },
    quiz: [
      {
        question: "Que vous coûte une connexion inutilisée ?",
        options: [
          "De la place dans chaque session, plus un moins bon choix d'outil",
          "Rien tant que vous ne l'utilisez pas",
        ],
        answer: 0,
        explanation:
          "La place est le coût évident. Le coût cher est que plus d'options veut dire que la mauvaise est choisie plus souvent.",
      },
      {
        question: "C'est quoi le test des deux semaines ?",
        options: [
          "Utilisée ces quinze derniers jours, sinon on déconnecte",
          "On garde tout ce qu'on pourrait utiliser dans les quinze prochains jours",
        ],
        answer: 0,
        explanation:
          "Pourrait n'est pas une preuve. Reconnecter prend environ une minute, donc être strict ne coûte rien.",
      },
      {
        question:
          "Une connexion propose 200 actions et vous en utilisez quatre. Que faire ?",
        options: [
          "La limiter aux quatre, si elle le permet",
          "La laisser. Des options en plus ne font pas de mal.",
        ],
        answer: 0,
        explanation:
          "196 options hors sujet sont chargées à chaque session et rendent le choix plus dur à chaque fois. Étroit est à la fois moins cher et plus précis.",
      },
    ],
    nextTeaser:
      "Une règle pour distinguer travaux enregistrés, connexions et simples commandes",
  },

  /* --------------------------------------------------------------- Jour 18 */
  {
    day: 18,
    slug: "jour-18",
    title: "Travail enregistré, connexion, ou simple commande",
    phase: 2,
    minutes: 10,
    app: "anywhere",
    promise:
      "Une règle qui vous dit lequel des trois prendre, pour arrêter de construire la version chère d'une chose simple.",
    outcome: "Une règle pour choisir entre les trois",
    why: [
      "Vous avez maintenant les trois. Il est très facile de construire une connexion pour ce qu'une commande d'une ligne fait déjà, et de continuer à coller une commande qui aurait dû être un travail enregistré.",
      "Dix minutes ici vous épargnent l'erreur coûteuse la plus fréquente des trente jours.",
    ],
    sections: [
      {
        heading: "Trois outils, trois métiers différents",
        body: ["Ils se ressemblent de l'extérieur et ils ne le sont pas."],
        table: {
          head: ["", "Travail enregistré", "Connexion", "Simple commande"],
          rows: [
            [
              "Ce que c'est",
              "Vos instructions, écrites",
              "Un pont vers un autre service",
              "Un programme déjà sur votre machine",
            ],
            [
              "Ce que ça coûte",
              "Rien tant que ça ne sert pas",
              "Chargé à chaque session",
              "Rien tant que ça ne sert pas",
            ],
            [
              "Installation",
              "Écrire un fichier",
              "Installer et s'authentifier",
              "Déjà là",
            ],
            [
              "Le mieux pour",
              "Une procédure que vous répétez",
              "Des données à jour derrière une connexion",
              "Tout ce qui a un outil en ligne de commande",
            ],
          ],
        },
      },
      {
        heading: "L'erreur qui coûte cher",
        body: [
          "Si un service a déjà un outil en ligne de commande, et que vous y êtes connecté, vous n'avez presque jamais besoin d'une connexion pour lui.",
          "Il sait déjà lancer des commandes. Une commande ne coûte rien tant qu'elle ne sert pas. Une connexion coûte quelque chose à chaque message. Pour tout ce qui a un outil en ligne de commande correct, la commande gagne largement.",
        ],
        callout: {
          tag: "Avant d'installer la moindre connexion",
          body: [
            "Posez une question : est-ce que cette chose a un outil en ligne de commande auquel je suis déjà connecté ? Si oui, essayez ça d'abord. C'est gratuit, c'est plus rapide, et c'est une chose de moins chargée pour toujours.",
          ],
        },
      },
      {
        heading: "Trois questions, dans l'ordre",
        body: [
          "1. Est-ce une procédure que je répète, avec mes mots ? Travail enregistré.",
          "2. Faut-il des données à jour venant d'un service, derrière une connexion, sans outil en ligne de commande ? Connexion.",
          "3. Existe-t-il déjà une commande qui le fait ? Simple commande. Dites-le juste dans vos instructions.",
        ],
      },
    ],
    steps: [
      {
        title: "Listez cinq choses que vous voulez qu'il sache faire",
        body: ["Des vraies, que vous avez souhaitées le mois dernier."],
      },
      {
        title: "Classez-les",
        code: {
          label: "Tapez ceci à Claude",
          code: `Voici cinq choses que je veux pouvoir faire :
1. ...
(jusqu'à 5)

Pour chacune dis-moi : travail enregistré, connexion, ou simple
commande ? Donne la raison en une ligne.

S'il existe déjà un outil en ligne de commande pour l'une d'elles,
dis-le et dis-moi de ne pas installer de connexion pour ça.`,
        },
      },
      {
        title: "Écrivez la réponse dans vos instructions",
        body: [
          "Là où une simple commande gagne, dites-le une fois dans votre CLAUDE.md et vous n'aurez plus jamais à le répéter.",
        ],
        code: {
          label: "À ajouter à CLAUDE.md",
          code: `## Outils disponibles ici

- Utilise la commande \`gh\` pour tout ce qui touche à GitHub. Je suis déjà connecté.
- Utilise la commande \`aws\` pour tout ce qui touche à AWS.
- Préfère une commande à une connexion quand les deux existent.`,
        },
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: ["Chaque nouveau besoin : installer une connexion de plus"],
      afterLabel: "Après",
      after: ["Trois questions", "La plupart des besoins ne coûtent rien du tout"],
    },
    quiz: [
      {
        question:
          "Le service que vous voulez a un outil en ligne de commande et vous y êtes déjà connecté. Vous utilisez quoi ?",
        options: [
          "La commande. Elle ne coûte rien tant qu'elle ne sert pas.",
          "Une connexion, pour que ce soit bien intégré.",
        ],
        answer: 0,
        explanation:
          "C'est l'erreur coûteuse la plus fréquente de tout le challenge. Une connexion est chargée à chaque message. Une commande est gratuite jusqu'à ce que vous la lanciez.",
      },
      {
        question: "Lequel des trois vous coûte quelque chose à chaque session ?",
        options: ["Une connexion", "Un travail enregistré"],
        answer: 0,
        explanation:
          "Un travail enregistré ne se charge que quand vous l'appelez. Une connexion charge toute sa liste de capacités à chaque fois, utilisée ou non.",
      },
      {
        question:
          "Vous répétez la même procédure en cinq étapes chaque semaine, avec vos mots. C'est quoi ?",
        options: ["Un travail enregistré", "Une connexion"],
        answer: 0,
        explanation:
          "Vos propres instructions répétées sont exactement ce à quoi sert un travail enregistré. Aucune connexion là-dedans.",
      },
    ],
    nextTeaser: "Transformez votre phrase la plus répétée en un seul mot",
  },

  /* --------------------------------------------------------------- Jour 19 */
  {
    day: 19,
    slug: "jour-19",
    title: "Créez vos propres raccourcis",
    phase: 2,
    minutes: 12,
    app: "needs-app",
    promise:
      "La phrase que vous tapez le plus souvent, remplacée par un mot, avec la partie qui change passée en paramètre.",
    outcome: "Votre instruction la plus répétée, réduite à un mot",
    why: [
      "Il y a une phrase que vous tapez plusieurs fois par semaine. Légèrement différente à chaque fois, mais de la même forme.",
      "C'est un raccourci qui attend d'exister. Ça prend environ quatre minutes et vous vous en servirez pendant des années.",
    ],
    sections: [
      {
        heading: "Un raccourci est un petit travail enregistré",
        body: [
          "Même mécanisme qu'au jour 9, en plus petit. Un fichier dont le nom devient le mot que vous tapez.",
          "La différence est de taille, pas de nature. Un travail enregistré est une procédure. Un raccourci est une instruction que vous en avez assez de taper.",
        ],
        table: {
          head: ["Fichier", "Vous tapez"],
          rows: [
            ["`.claude/skills/explain/SKILL.md`", "`/explain`"],
            ["`.claude/commands/explain.md`", "`/explain` aussi. Les deux marchent."],
            ["`~/.claude/skills/explain/SKILL.md`", "`/explain`, dans tous les projets"],
          ],
        },
      },
      {
        heading: "Attirez de l'information à jour",
        body: [
          "Un raccourci peut lancer une commande et déposer le résultat dans les instructions avant qu'il ne les lise. C'est ce qui le rend utile plutôt que juste plus court.",
          "Une ligne qui commence par un point d'exclamation suivi d'une commande entre accents graves est remplacée par la sortie de cette commande.",
        ],
        callout: {
          tag: "Pourquoi ça compte",
          body: [
            "Ça veut dire que votre raccourci arrive avec l'état actuel déjà attaché. Un raccourci de relecture peut porter vos vraies modifications non commitées, donc la réponse parle de votre vrai travail et pas d'une supposition.",
          ],
        },
      },
      {
        heading: "Les bons sont petits et précis",
        body: [
          "Les raccourcis étroits sont utilisés. Les vagues sont oubliés.",
          "`/explique-comme-a-un-debutant` bat `/aide-moi`. Nommez la situation exacte.",
        ],
      },
    ],
    steps: [
      {
        title: "Trouvez votre phrase la plus répétée",
        body: [
          "Pensez à la semaine dernière. Qu'avez-vous tapé plus de deux fois, avec des mots légèrement différents à chaque fois ?",
        ],
      },
      {
        title: "Écrivez-la comme un raccourci",
        body: [
          "Celui-ci porte vos vraies modifications non commitées dans la demande, pour que la relecture porte sur votre vrai travail.",
        ],
        code: {
          label: ".claude/skills/review/SKILL.md",
          code: `---
description: Relit mes modifications non commitées et signale ce qui est risqué. À utiliser quand je demande ce que j'ai changé, ou une relecture avant de commiter.
---

## Mes modifications actuelles

!\`git diff HEAD\`

## Instructions

Relis les modifications ci-dessus. Dans cet ordre :

1. Tout ce qui va casser, avec le fichier et la ligne
2. Tout ce qui est risqué : pas de gestion d'erreur, une valeur en dur, un test manquant
3. Une chose qui pourrait être plus simple

Sois bref. Ne complimente pas le code. S'il n'y a aucune
modification, dis-le et arrête-toi.`,
        },
      },
      {
        title: "Lancez-le sur du vrai travail",
        body: ["Faites une petite modification quelque part, puis tapez-le."],
        code: { label: "Tapez ceci à Claude", code: "/review" },
      },
      {
        title: "Construisez-en deux de plus, puis arrêtez",
        body: [
          "Trois suffisent pour commencer. Un raccourci que vous utilisez tous les jours vaut plus que neuf que vous avez oublié avoir créés.",
          "Si vous ne vous rappelez pas ce que fait un raccourci, supprimez-le. Il ne coûte rien à garder, mais il encombre la liste que vous parcourez.",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Vous : tapez les mêmes trois phrases",
        "Vous : légèrement différemment à chaque fois",
      ],
      afterLabel: "Après",
      after: [
        "Vous : `/review`",
        "Lui : arrive avec vos vraies modifications attachées",
      ],
    },
    quiz: [
      {
        question: "Qu'est-ce qui décide du mot que vous tapez ?",
        options: ["Le nom du dossier ou du fichier", "Un réglage dans le fichier"],
        answer: 0,
        explanation:
          "Un dossier appelé `review` vous donne `/review`. Toute la règle de nommage tient là, et c'est pour ça que le nom vaut une seconde de réflexion.",
      },
      {
        question:
          "Que fait une ligne comme `!`git diff HEAD`` dans un raccourci ?",
        options: [
          "Lance la commande et dépose la sortie dans les instructions d'abord",
          "Lui dit de lancer cette commande plus tard, s'il veut",
        ],
        answer: 0,
        explanation:
          "Les instructions arrivent avec l'état actuel déjà inséré. C'est ce qui fait qu'un raccourci parle de votre vrai travail et pas d'une réponse générale.",
      },
      {
        question: "Quel raccourci a le plus de chances de survivre ?",
        options: ["`/explique-comme-a-un-debutant`", "`/aide-moi`"],
        answer: 0,
        explanation:
          "Étroit et précis est retenu et utilisé. Vague est oublié en quinze jours.",
      },
    ],
    nextTeaser: "Faites-lui montrer le plan avant qu'il ne touche à quoi que ce soit",
  },

  /* --------------------------------------------------------------- Jour 20 */
  {
    day: 20,
    slug: "jour-20",
    title: "Faites-le planifier avant d'agir",
    term: "mode plan",
    phase: 2,
    minutes: 12,
    app: "anywhere",
    promise:
      "Un vrai travail passé par un plan que vous avez lu et modifié avant que quoi que ce soit n'arrive.",
    outcome: "Un travail passé par un plan que vous avez approuvé d'abord",
    why: [
      "Sur un petit travail, le laisser démarrer tout de suite est très bien. Sur tout ce qui touche à plusieurs fichiers, c'est comme ça qu'on finit par défaire quarante minutes de travail confiant parti dans la mauvaise direction.",
      "Le mode plan lui fait montrer toute l'approche d'abord. Vous la lisez, vous la modifiez, puis vous dites d'y aller. Deux minutes de lecture, et la reprise disparaît.",
    ],
    sections: [
      {
        heading: "Le problème que ça règle",
        body: [
          "Sans plan, la première chose que vous voyez est le résultat. Si l'approche était mauvaise, tout ce qui suit l'est aussi, et vous le découvrez à la fin.",
          "Avec un plan, la première chose que vous voyez est l'approche. Une mauvaise approche saute aux yeux dans un paragraphe et reste invisible dans un diff.",
        ],
      },
      {
        heading: "Quand ça vaut le coup",
        body: [
          "Pas toujours. Le jugement porte sur la quantité de travail qu'il faudrait défaire.",
        ],
        table: {
          head: ["Vaut un plan", "Ne vaut pas un plan"],
          rows: [
            ["Ça touche plusieurs fichiers", "Une petite modification"],
            [
              "Vous n'êtes pas sûr de la bonne approche",
              "Vous savez déjà exactement ce que vous voulez",
            ],
            [
              "Se tromper veut dire beaucoup défaire",
              "Trivial à annuler",
            ],
            [
              "Vous travaillez dans du code que vous ne connaissez pas",
              "Vous l'avez écrit la semaine dernière",
            ],
          ],
        },
      },
      {
        heading: "Le plan est un brouillon, pas une proposition",
        body: [
          "Lire le plan et dire oui ne change rien. La valeur est dans le fait de le modifier.",
          "Supprimez une étape. Inversez-en deux. Ajoutez ce qu'il a oublié. Cette modification est tout l'intérêt, et c'est là que votre connaissance de votre projet sert.",
        ],
        callout: {
          tag: "La seule question à poser",
          body: [
            "Lisez le plan et demandez : qu'est-ce qui n'est pas dans cette liste et devrait y être ? Les étapes manquantes sont bien plus fréquentes, et bien plus chères, que les étapes fausses.",
          ],
        },
      },
    ],
    steps: [
      {
        title: "Prenez un travail qui mérite un plan",
        body: [
          "Quelque chose de vrai qui touche au moins trois fichiers. Si rien ne se qualifie, attendez que ça arrive. Cette journée ne marche pas sur un exemple jouet.",
        ],
      },
      {
        title: "Demandez le plan d'abord",
        body: [
          "Appuyez sur Maj et Tab pour passer en mode plan, ou demandez-le simplement avec des mots. Être explicite marche très bien et se retient plus facilement.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Avant de changer quoi que ce soit : planifie ça.

Je veux [ce que vous voulez].

Donne-moi :
1. Les fichiers que tu vas toucher, et ce qui change dans chacun
2. L'ordre dans lequel tu vas les faire
3. Ce dont tu n'es pas sûr
4. Ce qui pourrait casser

N'écris pas encore de code. Attends-moi.`,
        },
      },
      {
        title: "Modifiez le plan",
        body: [
          "Ne vous contentez pas d'approuver. Trouvez au moins une chose à changer. Il y en a presque toujours une.",
        ],
        code: {
          label: "Tapez ceci à Claude",
          code: `Deux changements au plan :

- Supprime l'étape 3, on n'en a pas besoin
- Ajoute une étape avant l'étape 1 : [la chose qu'il a oubliée]

Montre-moi le plan mis à jour. N'écris toujours rien.`,
        },
      },
      {
        title: "Puis laissez-le faire",
        body: [
          "Maintenant dites d'y aller. Regardez à quel point il va plus droit que d'habitude.",
          "Ensuite comparez : combien de temps a pris la lecture et la correction du plan, face au temps qu'il aurait fallu pour défaire une mauvaise approche à la fin ?",
        ],
      },
    ],
    win: {
      beforeLabel: "Avant",
      before: [
        "Lui : démarre tout de suite",
        "Vous : découvrez à la fin que c'est parti de travers",
        "Vous : défaites quarante minutes de travail",
      ],
      afterLabel: "Après",
      after: [
        "Lui : vous montre l'approche",
        "Vous : changez deux choses",
        "Lui : va droit au but",
      ],
    },
    quiz: [
      {
        question: "Quand planifier d'abord ne vaut-il pas le coup ?",
        options: [
          "Une seule petite modification que vous savez déjà faire",
          "Un travail sur plusieurs fichiers dans du code que vous ne connaissez pas",
        ],
        answer: 0,
        explanation:
          "Le test est la quantité qu'il faudrait défaire. Rien à défaire veut dire rien à planifier.",
      },
      {
        question: "Vous lisez le plan et il a l'air bien. Que faire ?",
        options: [
          "Chercher ce qui manque avant d'approuver",
          "L'approuver. C'était le but de le lire.",
        ],
        answer: 0,
        explanation:
          "Les étapes manquantes sont plus fréquentes et plus chères que les fausses, et ce sont exactement celles qu'un plan ne vous montrera pas sauf si vous allez les chercher.",
      },
      {
        question: "À quoi sert vraiment le plan ?",
        options: [
          "À ce que vous le modifiiez, avec ce que vous savez de votre projet",
          "À ce qu'il confirme qu'il vous a compris",
        ],
        answer: 0,
        explanation:
          "Si vous ne dites jamais que oui, vous avez ajouté une étape et rien gagné. C'est dans la modification que votre connaissance entre dans le travail.",
      },
    ],
    nextTeaser: "Confiez les travaux étroits à des assistants qui ne font qu'une chose",
  },
];

