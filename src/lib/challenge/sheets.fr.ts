/**
 * Les onze fiches, côté français.
 *
 * Même principe que `days-phase-1.fr.ts` : un second fichier de données, pas
 * une seconde mise en page. `sheet-doc.tsx` rend les deux langues, donc une
 * correction de mise en page ne peut pas arriver dans une langue et être
 * oubliée dans l'autre.
 *
 * Trois choses à savoir avant de toucher à ce fichier.
 *
 * 1. **Les identifiants finissent par `-fr`.** `sheet-setup-fr` est le
 *    pendant français de `sheet-setup`. C'est ce qui donne un fichier PDF
 *    séparé, une ligne séparée dans `claude_code_sheets` et une adresse de
 *    stockage séparée. La route API choisit la ligne `-fr` quand le lecteur
 *    lit en français, et retombe sur l'anglaise si elle n'existe pas.
 *
 * 2. **Les commandes ne se traduisent pas.** `INSTALL` et `SETTINGS_PATHS`
 *    viennent de `registry.ts` et sont identiques dans les deux langues.
 *    Traduire `claude --version` serait une faute, pas une localisation. Ce
 *    qui se traduit, ce sont les libellés autour, les notes, et le texte des
 *    invites que le lecteur tape en français.
 *
 * 3. **Une page, toujours.** Le français est environ 15 pour cent plus long
 *    que l'anglais à contenu égal. Quand une fiche déborde, on coupe un bloc,
 *    jamais la taille du texte. Vérifiez le nombre de pages du PDF avant de
 *    l'envoyer : `scripts/build-challenge-sheets.mjs` compte les pages et
 *    refuse tout ce qui n'est pas exactement une page A4.
 */

import { INSTALL, SETTINGS_PATHS, sheetIdFor } from "./registry";
import {
  EXIT_CODES_FR,
  PLAN_REQUIREMENT_FR,
  SYSTEM_REQUIREMENTS_FR,
} from "./registry.fr";
import { SHEET_DOCS } from "./sheets";
import type { SheetDoc } from "./sheets";

/* ------------------------------------------------------------------ fiches */

const SETUP_FR: SheetDoc = {
  id: "sheet-setup-fr",
  slot: 1,
  day: 1,
  title: "La fiche Installation",
  strapline:
    "Installez-le, prouvez qu'il marche, et réparez quand ce n'est pas le cas.",
  left: [
    {
      kind: "commands",
      heading: "Installez-le",
      items: [
        {
          label: "macOS ou Linux, dans le Terminal",
          code: INSTALL.mac,
          note: "Il se met à jour tout seul ensuite. Vous ne le faites qu'une fois.",
        },
        {
          label: "Windows, dans PowerShell",
          code: INSTALL.windows,
          note: "Votre invite doit commencer par PS. Sinon vous êtes dans l'Invite de commandes et ça échouera.",
        },
      ],
    },
    {
      kind: "commands",
      heading: "Prouvez que ça a marché",
      items: [
        {
          label: "Doit afficher un numéro, puis (Claude Code)",
          code: INSTALL.verify,
        },
        {
          label: "Vérifie votre installation sans rien démarrer",
          code: INSTALL.diagnose,
        },
        {
          label: "Allez dans un dossier sans importance, puis démarrez",
          code: INSTALL.start,
        },
      ],
    },
    {
      kind: "table",
      heading: "Les commandes qui servent vraiment la première semaine",
      head: ["Tapez ceci", "Ce que ça fait"],
      rows: [
        ["/help", "Tout ce qu'il sait faire. Commencez par là."],
        ["/login", "Changer de compte, ou se reconnecter."],
        ["/init", "Écrit le fichier de règles pour ce dossier."],
        ["/memory", "Ouvre ce fichier et modifie ce dont il se souvient."],
        ["/context", "Montre ce qui est chargé et ce que ça coûte."],
        ["/hooks", "Montre les garde-fous enregistrés. Lecture seule."],
      ],
    },
    {
      kind: "table",
      heading: "Où vous pouvez le lancer",
      head: ["Où", "Bien pour"],
      rows: [
        ["Application bureau", "Jamais touché un terminal. Boutons et fenêtres."],
        ["Terminal", "Comme la plupart des gens. Tout marche ici."],
        ["Votre éditeur", "VS Code et JetBrains, si vous y vivez."],
        ["Le web", "Essayer sans rien installer."],
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "À lire avant d'installer",
      body: `${PLAN_REQUIREMENT_FR.short} Il vous faut Pro, Max, Team ou Enterprise, ou un compte Console avec du crédit dessus. C'est la première raison pour laquelle une première installation semble cassée : elle s'installe très bien, puis refuse de vous laisser entrer.`,
    },
    {
      kind: "fixes",
      heading: "Les cinq choses qui coincent",
      items: [
        {
          problem: "command not found",
          fix: "Votre terminal était déjà ouvert pendant l'installation, il ne connaît donc pas la nouvelle commande. Fermez-le complètement, rouvrez-en un, réessayez. Presque jamais une installation ratée.",
        },
        {
          problem: "Il s'installe, puis refuse la connexion",
          fix: "Vérifiez votre offre sur claude.ai. Un compte gratuit n'inclut pas Claude Code.",
        },
        {
          problem: "Windows : une erreur qui parle de &&",
          fix: "Vous êtes dans l'Invite de commandes, pas dans PowerShell. Fermez, ouvrez PowerShell, relancez la ligne.",
        },
        {
          problem: "Windows : ça marche, mais ça semble limité",
          fix: "Installez Git pour Windows. Sans lui, Claude Code retombe sur PowerShell pour lancer les commandes, ce qui marche mais fait moins.",
        },
        {
          problem: "Installé, mais quelque chose cloche encore",
          fix: `Lancez ${INSTALL.diagnose}. Il rapporte ce qu'il trouve et ne change rien. Lisez-le avant de réinstaller : réinstaller n'est presque jamais la réponse et vous coûte dix minutes.`,
        },
      ],
    },
    {
      kind: "list",
      heading: "Bon à savoir le premier jour",
      items: [
        `Machine minimum : ${SYSTEM_REQUIREMENTS_FR}`,
        "Les jours 1 à 6 marchent partout, y compris dans un navigateur. À partir du jour 7 vous le voulez sur votre propre ordinateur, parce que ces jours créent des fichiers et lancent des scripts.",
        `Les règles du projet vivent dans ${SETTINGS_PATHS.project}. Les vôtres dans ${SETTINGS_PATHS.user}.`,
        "Vous ne collez jamais un fichier. Vous le pointez sur un dossier et vous demandez en français normal. Il trouve quoi ouvrir.",
      ],
    },
    {
      kind: "commands",
      heading: "Vos cinq premières minutes",
      items: [
        {
          label: "1. Allez dans un dossier sans importance, et démarrez",
          code: INSTALL.start,
        },
        {
          label: "2. Demandez-lui une chose que vous voulez vraiment savoir",
          code: "qu'est-ce qu'il y a dans ce dossier, et à quoi ça sert ?",
          note: "Vous ne lui avez jamais dit quels fichiers ouvrir. Il est allé voir. Toute la différence avec une fenêtre de chat tient dans cette réponse.",
        },
        {
          label: "3. Voir le reste",
          code: "/help",
        },
      ],
    },
  ],
};

const TOOL_PICKER_FR: SheetDoc = {
  id: "sheet-which-tool-fr",
  slot: 2,
  day: 5,
  title: "La fiche Quel outil",
  strapline:
    "Trois questions, deux secondes, et vous arrêtez d'ouvrir le mauvais outil.",
  left: [
    {
      kind: "table",
      heading: "Trois sortes de travail",
      head: ["Sorte", "À quoi ça ressemble", "Prenez"],
      rows: [
        [
          "Demander",
          "Une question. Vous voulez une réponse, pas un changement.",
          "Une fenêtre de chat",
        ],
        [
          "Construire",
          "De vrais fichiers doivent changer. Plusieurs.",
          "Claude Code",
        ],
        [
          "Répéter",
          "La même chose, à heure fixe, sans vous.",
          "Un travail enregistré",
        ],
      ],
    },
    {
      kind: "list",
      heading: "Les trois questions, dans l'ordre",
      items: [
        "**Est-ce que quelque chose sur mon disque doit changer ?** Si non, une fenêtre de chat, et on s'arrête là.",
        "**Est-ce que je voudrai ça encore la semaine prochaine ?** Si oui, ça doit devenir un travail enregistré.",
        "**Est-ce que ça doit se faire sans moi ?** Si oui, c'est une exécution sans surveillance.",
      ],
    },
    {
      kind: "commands",
      heading: "Faites-lui trier votre propre liste",
      items: [
        {
          label: "Écrivez cinq choses vraiment faites la semaine dernière, puis demandez",
          code: `Pour chacune de ces cinq choses, dis-moi : est-ce
demander, construire ou répéter ? Puis dis-moi laquelle
me ferait gagner le plus de temps si je l'automatisais,
et pourquoi. Sois franc si certaines n'en valent pas
la peine.`,
        },
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "La règle, en une ligne",
      body: "Arrêtez-vous au premier oui. La plupart des gens ne dépassent jamais la question une, et c'est la bonne réponse plus souvent qu'on ne le croit.",
    },
    {
      kind: "fixes",
      heading: "Les deux erreurs",
      items: [
        {
          problem: "Outil lourd, petit travail",
          fix: "Ouvrir un terminal et attendre, pour demander ce que vous auriez pu taper dans une fenêtre de chat. Rien ne casse. Vous êtes juste plus lent chaque jour pendant un an.",
        },
        {
          problem: "Petit outil, gros travail",
          fix: "Copier fichier après fichier dans une fenêtre de chat et recoller les réponses à la main. Douze copier-coller, ce n'est pas seulement lent, c'est de là que viennent les erreurs.",
        },
      ],
    },
    {
      kind: "table",
      heading: "Ce que chacun fait vraiment le mieux",
      head: ["Outil", "Le meilleur pour"],
      rows: [
        ["Une fenêtre de chat", "Une question, aucun changement dans vos fichiers"],
        ["Claude Code", "Du travail sur plusieurs fichiers, sur votre vrai disque"],
        ["Un travail enregistré", "La même forme de travail, encore et encore"],
        ["Sans surveillance", "Du travail qui doit se faire sans personne devant"],
      ],
    },
  ],
};

const HOOKS_FR: SheetDoc = {
  id: "sheet-hooks-fr",
  slot: 3,
  day: 8,
  title: "La fiche Garde-fous",
  strapline:
    "Un garde-fou qui l'empêche de toucher ce que vous ne pouvez pas perdre.",
  left: [
    {
      kind: "commands",
      heading: "Le garde-fou lui-même",
      items: [
        {
          label: `${SETTINGS_PATHS.hooksDir}/protect-files.sh`,
          code: `#!/bin/bash
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')
FILE_PATH="\${FILE_PATH//\\\\//}"

PROTECTED=(".env" "package-lock.json" ".git/")

for p in "\${PROTECTED[@]}"; do
  if [[ "$FILE_PATH" == *"$p"* ]]; then
    echo "Bloqué : $FILE_PATH correspond à '$p'" >&2
    exit 2
  fi
done
exit 0`,
          note: "Les quatre dernières lignes sont toute l'idée. Sur la liste : on dit pourquoi, et `exit 2`. Pas sur la liste : `exit 0` et on s'écarte.",
        },
      ],
    },
    {
      kind: "commands",
      heading: "Activez-le",
      items: [
        {
          label: SETTINGS_PATHS.project,
          code: `{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/protect-files.sh" }
        ]
      }
    ]
  }
}`,
          note: "`matcher` est le filtre. `Edit|Write` veut dire qu'il ne se déclenche que sur les modifications et les écritures. Ni les lectures, ni les commandes shell.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "Les deux seuls numéros qui comptent",
      head: [...EXIT_CODES_FR.head],
      rows: EXIT_CODES_FR.rows.map((r) => [...r]),
    },
    {
      kind: "table",
      heading: "Des garde-fous qui valent le coup",
      head: ["Garde-fou", "Se déclenche", "Fait"],
      rows: [
        [
          "Protéger",
          "Avant une modification",
          "Refuse `.env`, les fichiers de verrouillage, `.git/`",
        ],
        ["Journaliser", "Après une modification", "Écrit chaque fichier modifié dans un journal"],
        ["Ranger", "Après une modification", "Lance votre formateur"],
        ["Me prévenir", "Quand il attend", "Vous fait signe, pour ne pas fixer l'écran"],
      ],
    },
    {
      kind: "fixes",
      heading: "Trois raisons pour qu'un garde-fou reste muet",
      items: [
        {
          problem: "Le script n'a pas le droit de s'exécuter",
          fix: "Sur macOS et Linux, faites `chmod +x`. Sur Windows cette permission n'existe pas, mais le script est du Bash : il vous faut Git pour Windows. Vérifiez avec `git --version`.",
        },
        {
          problem: "Le chemin dans les réglages n'est pas le bon",
          fix: "La plus fréquente. `/hooks` montre ce qui est enregistré, en lecture seule. Si `PreToolUse` affiche 0, le chemin est faux.",
        },
        {
          problem: "Le matcher est plus étroit que vous ne le pensez",
          fix: "`Edit|Write` ne couvre pas un fichier changé par une commande shell. Ce changement passe à côté de votre garde-fou.",
        },
      ],
    },
    {
      kind: "note",
      heading: "Le seul test qui compte",
      body: "Demandez-lui de modifier un fichier protégé exprès. S'il modifie au lieu de refuser, le garde-fou n'est pas branché. Tester le cas qui marche ne prouve rien.",
    },
  ],
};

const MANAGER_FR: SheetDoc = {
  id: "sheet-manager-fr",
  slot: 4,
  day: 10,
  title: "La fiche Manager",
  strapline:
    "Pour celui qui doit approuver. Les réponses sur papier, avant qu'il les demande.",
  left: [
    {
      kind: "list",
      heading: "Ce qu'un déploiement demande vraiment",
      items: [
        "**Une personne, pas une équipe.** Elle fait les jours 1 à 10, moins de trois heures étalées sur deux semaines.",
        "**Un vrai travail, pas une démo.** L'ennuyeux de chaque semaine, jamais le rare qui impressionne.",
        "**Un fichier de règles écrit, corrigé au fur et à mesure.** Écrit une fois et jamais retouché, c'est comme ne pas en avoir.",
        "**Un garde-fou, testé en le cassant exprès.** Tant que rien n'a été bloqué, rien n'est protégé.",
        "**Ensuite la deuxième personne copie la première.** Elle a un exemple qui marche sous les yeux, et c'est toute la raison d'y aller un par un.",
      ],
    },
    {
      kind: "table",
      heading: "À quoi ressemble un bon premier mois",
      head: ["Pour", "Vous devez voir"],
      rows: [
        ["Semaine 1", "Une personne installée, une vraie question répondue sur de vrais fichiers"],
        ["Semaine 2", "Un fichier de règles corrigé au moins deux fois"],
        ["Semaine 3", "Un garde-fou qui a vraiment bloqué quelque chose"],
        ["Semaine 4", "Un travail enregistré utilisé plus de deux fois, par choix"],
      ],
    },
    {
      kind: "note",
      heading: "La seule décision qui décide de tout",
      body: "Qui commence, et sur quel travail. Prenez la personne qui automatise déjà des choses pour elle-même, et le travail dont elle se plaint chaque semaine. Le reste est du détail.",
    },
  ],
  right: [
    {
      kind: "fixes",
      heading: "Ce qu'un approbateur va demander",
      items: [
        {
          problem: "Il faut quoi, pour tout le monde ?",
          fix: `Un compte Claude payant. ${PLAN_REQUIREMENT_FR.short} Quelle offre vous convient est sur notre site plutôt qu'imprimé ici, pour que ça ne puisse pas devenir faux dans ce fichier.`,
        },
        {
          problem: "On peut l'empêcher de toucher à des choses ?",
          fix: "Oui, et c'est la réponse qui compte. Une règle écrite est une consigne, en général suivie. Un garde-fou est une contrainte, et il se déclenche toujours. Tout ce qui ne doit vraiment pas arriver va dans un garde-fou.",
        },
        {
          problem: "Et si la personne qui a tout installé part ?",
          fix: "Toute l'installation tient dans des fichiers simples qui vivent avec le projet. Ça se transmet en copiant un dossier, pas une personne.",
        },
        {
          problem: "Comment on sait que ça marche ?",
          fix: "Un travail qui prenait une heure à quelqu'un tient maintenant dans une commande. Si personne ne peut désigner ce travail en semaine 4, ça ne marche pas, et aucun enthousiasme n'y changera rien.",
        },
      ],
    },
    {
      kind: "list",
      heading: "Les trois façons dont ça rate en équipe",
      items: [
        "**Tout le monde en même temps.** Personne n'a d'exemple qui marche à copier, donc dix personnes résolvent mal le même premier problème.",
        "**Le pilote qui impressionne.** Une tâche rare et spectaculaire au lieu de l'ennuyeuse hebdomadaire. Belle démo, aucun changement.",
        "**Des règles sans contrainte.** Un document que tout le monde a approuvé et rien qui bloque. C'est le premier accident qui fait la leçon.",
      ],
    },
    {
      kind: "table",
      heading: "Ce qu'il faut mesurer, et ce qu'il faut ignorer",
      head: ["Mesurez", "Ignorez"],
      rows: [
        ["Un travail nommé passé de plusieurs heures à une commande", "Combien de gens l'ont installé"],
        ["Combien de fois le fichier de règles a été corrigé", "Sa longueur"],
        ["Si un garde-fou a bloqué quelque chose de réel", "Combien il en existe"],
        ["Les travaux enregistrés utilisés plus de deux fois", "Ceux qui ont été construits"],
      ],
    },
  ],
};

const CONTEXT_FR: SheetDoc = {
  id: "sheet-context-fr",
  slot: 5,
  day: 13,
  title: "La fiche Contexte",
  strapline:
    "Tout ce qui se charge avant que vous tapiez, et comment récupérer de la place.",
  left: [
    {
      kind: "commands",
      heading: "Regardez une vraie session",
      items: [
        {
          label: "Pas une toute neuve. Travaillez quelques minutes, puis lancez",
          code: "/context",
          note: "La commande la plus utile ici, et presque personne ne la lance. Notez l'élément le plus gros. Ce chiffre est tout l'intérêt.",
        },
        {
          label: "Puis laissez-le lire son propre rapport",
          code: `Lance /context et regarde le résultat.
1. Qu'est-ce qui prend le plus de place ?
2. Là-dedans, qu'est-ce qui ne sert pas à ce que je fais
   aujourd'hui ?
3. Quel seul changement libérerait le plus, et qu'est-ce
   que j'y perdrais ?`,
        },
      ],
    },
    {
      kind: "table",
      heading: "Les quatre choses qui prennent de la place",
      head: ["Quoi", "Chargé quand", "Comment réduire"],
      rows: [
        ["Outils connectés", "Toujours, utilisés ou non", "Déconnectez ce qui ne sert pas"],
        ["Fichiers de règles", "À chaque session", "Découpez-les par chemin"],
        ["Index mémoire", "À chaque session", "Supprimez les vieilles notes avec `/memory`"],
        ["Fichiers lus", "Au fil de la session", "`/compact` ou `/clear`"],
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "Compact et clear ne sont pas pareils",
      head: ["", "`/compact`", "`/clear`"],
      rows: [
        ["Fait", "Résume la conversation", "Repart à zéro"],
        ["Vous gardez", "L'essentiel de ce qui s'est passé", "Rien"],
        ["À utiliser", "Même travail, qui traîne", "Nouveau travail, sans rapport"],
      ],
    },
    {
      kind: "note",
      heading: "Ce qu'il faut regarder",
      body: "Tout ce que vous n'attendiez pas. Tout ce qui est gros. Et surtout tout outil connecté dont vous ne vous êtes pas servi cette semaine, parce que ce qu'un outil sait faire est chargé que vous l'utilisiez ou non.",
    },
    {
      kind: "list",
      heading: "L'habitude qui vaut plus que n'importe quel réglage",
      items: [
        "Session longue, toujours le même travail, plus de place : `/compact`.",
        "Vous passez à autre chose sans rapport : `/clear`.",
        "**Enlevez exactement une chose aujourd'hui.** Celle qui arrivait en tête. Puis relancez `/context` et regardez le chiffre bouger. C'est de le voir bouger qui fait tenir l'habitude.",
      ],
    },
  ],
};

const SKILLS_FR: SheetDoc = {
  id: "sheet-skills-fr",
  slot: 6,
  day: 15,
  title: "La fiche Travaux enregistrés",
  strapline:
    "Lequel enregistrer en premier, et pourquoi ce n'est pas celui que vous croyez.",
  left: [
    {
      kind: "table",
      heading: "Notez les vôtres. Deux notes sur cinq, puis multipliez",
      head: ["Travail", "Souvent", "Pénible", "Note"],
      rows: [
        ["Le point client hebdomadaire", "5", "4", "20"],
        ["Expliquer un bug à un collègue", "4", "3", "12"],
        ["Mettre en place un nouveau projet", "1", "5", "5"],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ],
    },
    {
      kind: "note",
      heading: "Le piège",
      body: "Celui qui impressionne est presque toujours le rare. Mettre en place un nouveau projet est profondément pénible et ne fait quand même que 5, parce que vous le faites trois fois par an. Construisez d'abord l'ennuyeux à 20.",
    },
    {
      kind: "commands",
      heading: "Le squelette",
      items: [
        {
          label: ".claude/skills/point-hebdo/SKILL.md",
          code: `---
description: Quand s'en servir, en une ligne. C'est ce
  qui décide s'il sera repris ou pas.
---

Tu es un [qui]. Tu produis [exactement ce qui sort].

Ne fais jamais [ce que vous corrigez tout le temps].
Arrête-toi quand [la limite à ne pas franchir].`,
          note: "Appelé par son nom, ou repris automatiquement d'après la description. Le corps ne se charge que quand il sert.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "Ce qui fait un travail qu'on garde",
      head: ["Propriété", "Ce que ça veut dire"],
      rows: [
        ["Même forme à chaque fois", "Les étapes ne changent pas, seule l'entrée change"],
        ["Vous voyez si ça a marché", "Il y a un résultat que vous pouvez regarder et juger"],
        ["Il dit quoi ne pas faire", "L'erreur que vous corrigez sans arrêt est écrite"],
      ],
    },
    {
      kind: "list",
      heading: "Dites ce qu'il ne faut pas faire",
      items: [
        "Cette seule ligne sépare un travail enregistré que vous gardez de celui que vous abandonnez.",
        "**Faible :** sois précis, sois complet, sois professionnel.",
        "**Fort :** n'invente pas d'avancement. Si un client n'a rien, dis-le franchement.",
        "Tout ce qu'il rate deux fois, écrivez-le. Ça fait plus que n'importe quelle description de la bonne version.",
      ],
    },
    {
      kind: "commands",
      heading: "Classez-en dix",
      items: [
        {
          label: "Listez dix choses faites plus d'une fois le mois dernier, puis demandez",
          code: `Pour chacune, note sur 5 à quel point c'est fréquent, et
sur 5 à quel point c'est pénible. Multiplie. Trie par
total.

Puis dis-moi les trois qui valent la peine d'être
enregistrées, et celles que je devrais laisser tomber.
Sois franc sur celles qui n'en valent pas la peine.`,
        },
      ],
    },
    {
      kind: "note",
      heading: "Construisez-en un, pas trois",
      body: "Construisez celui du haut, servez-vous en une semaine, et corrigez le fichier chaque fois que ce n'est pas tout à fait ça. Un travail enregistré corrigé trois fois vaut mieux que trois que vous n'avez jamais lancés.",
    },
  ],
};

const CONNECTIONS_FR: SheetDoc = {
  id: "sheet-connections-fr",
  slot: 7,
  day: 16,
  title: "La fiche Connexions",
  strapline:
    "Choisissez la bonne, installez-la, et ne laissez pas fuir un jeton au passage.",
  left: [
    {
      kind: "list",
      heading: "La question qui choisit",
      items: [
        "**Finissez cette phrase honnêtement.** Je n'arrête pas de changer de fenêtre pour ___",
        "Quoi que ce soit, connectez ça. Pas celui qui a l'air le plus puissant.",
        "**Si vous ne pouvez pas finir la phrase, ne connectez rien aujourd'hui.** C'est une vraie réponse, pas un échec, et c'est la bonne plus souvent qu'on ne le croit.",
      ],
    },
    {
      kind: "table",
      heading: "Donc",
      head: ["Si vous changez de fenêtre pour", "Connectez"],
      rows: [
        ["Vos tickets, pour voir ce qui vous est assigné", "Cet outil de tickets"],
        ["Une base de données, pour la même requête", "Cette base de données"],
        ["Vos documents, pour une décision d'il y a des mois", "Cet outil de documents"],
        ["Rien. Vous êtes curieux.", "Rien. Revenez quand vous aurez un X."],
      ],
    },
    {
      kind: "commands",
      heading: "Laissez-le chercher comment l'installer",
      items: [
        {
          label: "L'installation change d'un service à l'autre, et il sait lire les instructions à jour",
          code: `Je veux connecter [service] pour pouvoir [la chose pour
laquelle vous changez de fenêtre].

Dis-moi : s'il existe un connecteur officiel, ce qu'il me
faut exactement y compris les identifiants, la commande
pour l'ajouter, et ce qu'il ne saura pas faire.

S'il n'y a pas de bonne option, dis-le moi au lieu
d'improviser.`,
        },
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "Chaque connexion a un coût permanent",
      body: "Ce qu'une connexion sait faire est chargé dans chaque session, que vous vous en serviez ou non. Connectez cinq choses inutiles et vous les payez toutes les cinq à chaque message. C'est la partie que tout le monde saute.",
    },
    {
      kind: "list",
      heading: "Garder les identifiants hors des fichiers",
      items: [
        "Une connexion demande en général un jeton. Un jeton se met dans une variable d'environnement, jamais tapé dans un fichier de réglages.",
        "**Si un guide vous dit de coller une clé directement dans un fichier, arrêtez et cherchez la version en variable d'environnement.** Les fichiers de réglages finissent commités et partagés, et c'est la façon la plus courante dont un jeton s'échappe.",
      ],
    },
    {
      kind: "list",
      heading: "La règle, et la vérification",
      items: [
        "**Une connexion à la fois.** Servez-vous en une semaine. Seulement ensuite, pensez à une deuxième.",
        "Servez-vous en tout de suite pour le vrai travail, pas pour un test. Si ça ne vous évite pas le changement de fenêtre, déconnectez-la le jour même.",
        "Puis lancez `/context` et retrouvez-la dans la liste. Vous connaissez son prix, et vous savez si le travail le valait.",
      ],
    },
  ],
};

const UNATTENDED_FR: SheetDoc = {
  id: "sheet-unattended-fr",
  slot: 8,
  day: 24,
  title: "La fiche Sans surveillance",
  strapline:
    "Une option transforme une conversation en une commande qui tourne sans vous.",
  left: [
    {
      kind: "commands",
      heading: "Commencez par quelque chose qui ne fait que lire",
      items: [
        {
          label: "Terminal",
          code: `claude -p "Résume ce qui a changé dans ce projet la
semaine dernière" --allowedTools "Read,Grep,Glob"`,
        },
        {
          label: "Puis laissez une trace",
          code: `claude -p "Résume ce qui a changé cette semaine" \\
  --allowedTools "Read,Grep,Glob" \\
  > reports/hebdo-$(date +%F).md`,
        },
        {
          label: "Il lit l'entrée standard, donc il s'insère dans ce que vous avez déjà",
          code: `git diff main | claude -p "Liste ce qui semble risqué
dans ce diff. Une ligne chacun. Si rien, ne dis rien."`,
        },
      ],
    },
    {
      kind: "commands",
      heading: "Un squelette qui échoue proprement",
      items: [
        {
          label: "scripts/resume-hebdo.sh",
          code: `#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p reports
OUT="reports/hebdo-$(date +%F).md"

claude -p "Résume ce qui a changé dans ce projet la
semaine dernière. Regroupe par domaine. Signale ce qui
est inachevé." \\
  --allowedTools "Read,Grep,Glob" \\
  > "$OUT"

echo "Écrit $OUT"`,
          note: "`set -euo pipefail` est la ligne qui compte. Sans elle, une étape peut échouer au milieu et le script se termine quand même l'air satisfait.",
        },
      ],
    },
  ],
  right: [
    {
      kind: "table",
      heading: "Les options qui comptent",
      head: ["Option", "Ce qu'elle autorise vraiment"],
      rows: [
        ["`-p \"...\"`", "Lance une fois et s'arrête. Pas de session, pas d'attente"],
        ["`--allowedTools \"Read,Edit\"`", "Exactement ceux-là, rien d'autre"],
        ["`--permission-mode acceptEdits`", "Écrit des fichiers sans demander"],
        ["`--output-format json`", "Une sortie structurée qu'un script peut lire"],
        ["`--bare`", "Ignore votre installation locale, donc ça tourne pareil partout"],
      ],
    },
    {
      kind: "note",
      heading: "La règle des exécutions sans surveillance",
      body: "Autorisez le plus petit ensemble d'outils qui permette au travail de se finir. Personne ne regarde, donc une exécution avec tout autorisé, c'est celle qui fait en silence quelque chose que vous ne vouliez pas à trois heures du matin.",
    },
    {
      kind: "fixes",
      heading: "Quatre façons d'échouer en silence",
      items: [
        {
          problem: "L'étape principale n'a jamais eu lieu",
          fix: "Quelque chose demandait une permission et personne n'était là pour la donner, donc ça a simplement été sauté. Le grand classique de la première exécution sans surveillance. Nommez les outils à l'avance.",
        },
        {
          problem: "Aucun fichier de sortie",
          fix: "Vous ne regardiez pas, donc le fichier est tout ce que vous avez. Une exécution qui ne laisse pas de trace ne peut pas être réparée, et vous aurez besoin de la réparer.",
        },
        {
          problem: "Trop d'outils autorisés",
          fix: "Tout autoriser pour qu'il ne reste pas bloqué, c'est comme ça qu'une chose non voulue arrive sans personne pour l'arrêter.",
        },
        {
          problem: "Le script a caché son propre échec",
          fix: "Sans `set -euo pipefail`, une étape cassée au milieu sort quand même en 0, donc ce qui l'appelle croit que tout va bien.",
        },
      ],
    },
  ],
};

const INSTRUCTIONS_FR: SheetDoc = {
  id: "sheet-instructions-fr",
  slot: 9,
  day: 26,
  title: "La fiche Instructions",
  strapline:
    "La différence entre une instruction qui marche presque et une qui marche.",
  left: [
    {
      kind: "table",
      heading: "Les quatre choses, par ordre d'impact",
      head: ["Chose", "Faible", "Fort"],
      rows: [
        [
          "Qui fait le travail",
          "Relis ça",
          "Tu es un relecteur minutieux qui ne peut rien modifier",
        ],
        [
          "Ce qui sort",
          "Résume la semaine",
          "Trois points par client : ce qui a avancé, ce qui bloque, ce qui vient",
        ],
        [
          "Ce qu'il ne faut pas faire",
          "Sois précis",
          "N'invente pas d'avancement. Si un client n'a rien, dis-le",
        ],
        [
          "Quand s'arrêter",
          "Corrige les problèmes",
          "Signale les problèmes. Ne modifie aucun fichier",
        ],
      ],
    },
    {
      kind: "list",
      heading: "Comment trouver votre propre ligne d'interdit",
      items: [
        "**Qu'avez-vous dû dire deux fois ?** Revenez sur vos dernières sessions et trouvez-la.",
        "Écrivez-la avec les mots que vous emploieriez si vous étiez agacé, et mettez-la telle quelle.",
        "Cette seule ligne fait plus que toute description de la bonne version. C'est aussi celle qu'on saute.",
      ],
    },
  ],
  right: [
    {
      kind: "commands",
      heading: "Faites-vous interviewer plutôt que d'écrire",
      items: [
        {
          label: "Cinq minutes de réponses valent mieux qu'une heure d'écriture",
          code: `Voici une instruction que j'utilise. Elle marche presque,
et ce que je corrige tout le temps, c'est : [ce que vous
corrigez].

[collez votre instruction]

Interviewe-moi pour la corriger. Une question à la fois,
attends ma réponse. Couvre : qui fait le travail, ce qui
doit sortir exactement, ce qu'il ne doit jamais faire, et
quand il doit s'arrêter.

Puis réécris-la. Reste court.`,
        },
      ],
    },
    {
      kind: "table",
      heading: "Six formes qui valent le coup",
      head: ["Travail", "La ligne qui le fait marcher"],
      rows: [
        ["Relire", "Signale les problèmes. Ne change rien."],
        ["Résumer", "Un nombre fixe de points. Dis quand il n'y a rien."],
        ["Chercher", "Dis ce que tu n'as pas trouvé, au lieu de combler le trou."],
        ["Vérifier", "Liste ce qui a échoué. Ne répare rien."],
        ["Convertir", "Garde tous les champs. Signale ce qui ne passe pas."],
        ["Rapporter", "Les mêmes sections à chaque fois, même quand une est vide."],
      ],
    },
    {
      kind: "note",
      heading: "Testez l'échec, pas la réussite",
      body: "N'importe qui sait tester le cas qui marche, et il marchait déjà. Lancez-la sur le cas qui ratait avant. C'est le seul test qui vous dit si la réécriture valait quelque chose.",
    },
  ],
};

const COMPLETE_FR: SheetDoc = {
  id: "sheet-complete-guide-fr",
  slot: 10,
  day: 30,
  title: "Le Guide complet",
  strapline: "Tout le système sur une page, et où va la prochaine chose.",
  left: [
    {
      kind: "table",
      heading: "Sept pièces, chacune avec un rôle unique",
      head: ["Pièce", "À quoi ça sert", "Jour"],
      rows: [
        ["`CLAUDE.md`", "Les faits toujours vrais", "2"],
        ["`.claude/rules/`", "Les faits vrais pour certains fichiers", "12"],
        ["Mémoire", "Ce qu'il a appris tout seul", "4"],
        ["`.claude/skills/`", "Les procédures que vous répétez", "9, 15, 19"],
        ["`.claude/agents/`", "Des travaux étroits, avec des outils retirés", "21"],
        ["`.claude/hooks/`", "Ce qui doit, ou ne doit jamais, arriver", "8, 11"],
        ["Connexions", "Des données à jour derrière un identifiant", "16"],
      ],
    },
    {
      kind: "list",
      heading: "Où va une nouvelle chose. Le premier oui gagne",
      items: [
        "**Ça doit arriver, ou ne jamais arriver ?** Un garde-fou.",
        "**C'est un fait toujours vrai ?** `CLAUDE.md`. Vrai pour certains fichiers seulement ? Une règle avec un filtre de chemin.",
        "**C'est une procédure avec des étapes ?** Un travail enregistré.",
        "**C'est un travail étroit qui ne devrait pas avoir tous les outils ?** Un assistant.",
      ],
    },
  ],
  right: [
    {
      kind: "note",
      heading: "Celle à ne pas rater",
      body: "Si quelque chose ne doit vraiment pas arriver, c'est un garde-fou, pas une instruction. Une règle écrite est une consigne, en général suivie. Un garde-fou est une contrainte, et il se déclenche toujours.",
    },
    {
      kind: "list",
      heading: "Les six questions pour se vérifier",
      items: [
        "Quelle pièce empêche quelque chose d'arriver, au lieu de le demander ?",
        "Où va un fait vrai seulement pour les fichiers de test ?",
        "Quelle est la différence entre ce que vous écrivez et ce qu'il écrit ?",
        "Pourquoi une connexion inutilisée n'est-elle pas gratuite ?",
        "Que fait le code de sortie 2 ?",
        "Qu'est-ce qui ne doit jamais se trouver dans aucun de ces fichiers ?",
      ],
    },
    {
      kind: "commands",
      heading: "Le grand ménage, le vrai travail du jour 30",
      items: [
        {
          label: "Préparez-vous à la réponse. Un tiers n'a sans doute jamais servi",
          code: `Regarde tout ce qu'il y a dans mon dossier .claude/ et
dans mon CLAUDE.md.

Pour chaque skill, assistant, garde-fou et règle, dis-moi
ce que ça fait en une ligne, s'il y a un signe que je m'en
suis servi, et si ça fait doublon avec autre chose.

Puis dis-moi quoi supprimer. Sois franc.`,
          note: "Supprimez tout ce qui n'a pas servi depuis un mois. C'est dans votre historique si vous le voulez, et une installation courte que vous comprenez vaut mieux qu'une longue à laquelle il faut réfléchir.",
        },
      ],
    },
  ],
};

/**
 * La onzième fiche, la seule qui n'est offerte sur aucune page de jour.
 *
 * `day: 0` veut dire qu'elle n'appartient à aucun jour. Tout ce qui lit `day`
 * teste ça : la mise en page écrit « fiche méritée » au lieu de « du jour N »,
 * et le pied de page renvoie vers le parcours plutôt que vers une leçon.
 */
const TEAM_FR: SheetDoc = {
  id: "sheet-team-fr",
  slot: 11,
  day: 0,
  title: "La fiche Équipe",
  strapline:
    "Vous avez fait les trente jours. Voici comment ça survit à quatre collègues qui s'y prennent mal.",
  left: [
    {
      kind: "list",
      heading: "Ce qui doit sortir de votre portable",
      items: [
        "**Le fichier de règles.** `CLAUDE.md` à la racine du projet, commité. S'il n'existe que sur votre machine, tout le monde travaille sans, et personne ne peut le voir.",
        `**Les garde-fous.** \`${SETTINGS_PATHS.project}\` et \`${SETTINGS_PATHS.hooksDir}\`, commités. Un garde-fou que personne d'autre n'a est une règle que vous seul suivez.`,
        "**Les travaux enregistrés.** `.claude/skills/<nom>/SKILL.md`, commités. C'est la partie qui se rembourse : une personne écrit le travail ennuyeux une fois et quatre personnes arrêtent de le faire à la main.",
        "**Les assistants.** `.claude/agents/<nom>.md`, commités. La ligne `tools` dedans est une contrainte, pas une suggestion, donc elle voyage comme une vraie limite.",
        "**Rien d'autre.** Pas de clés, pas de réglages personnels, pas de transcriptions. Si ça vous gênerait dans une pull request, ça n'a rien à faire dans le dépôt.",
      ],
    },
    {
      kind: "table",
      heading: "Partagé ou personnel",
      head: ["Va dans le dépôt", "Reste sur votre machine"],
      rows: [
        ["Le fichier de règles du projet", "Vos habitudes et vos raccourcis"],
        ["Les garde-fous qui doivent toujours tourner", "Ceux que vous essayez encore"],
        ["Les travaux que l'équipe répète", "Ceux que vous seul lancez"],
        ["Les assistants avec un métier fixe", "Tout ce qui contient une clé"],
      ],
    },
    {
      kind: "note",
      heading: "La règle qui le garde vivant",
      body: "Le fichier de règles se corrige dans le même commit que l'erreur qui l'a prouvé faux. Écrit une fois et jamais retouché, c'est comme ne pas en avoir, et tout le monde arrête discrètement de le lire en moins d'un mois.",
    },
  ],
  right: [
    {
      kind: "commands",
      heading: "Un nouvel arrivant, la première demi-heure",
      items: [
        {
          label: "Installer, sur sa propre machine",
          code: `${INSTALL.mac}\n${INSTALL.verify}`,
          note: `Windows utilise \`${INSTALL.windows}\`. Si ça s'installe et refuse la connexion, c'est le compte, pas l'installation.`,
        },
        {
          label: "Ouvrir le projet, pas un dossier de notes",
          code: INSTALL.start,
          note: "Démarré dans le dépôt, donc il lit le fichier de règles que l'équipe a déjà écrit.",
        },
        {
          label: "Lui montrer ce qui est contraint",
          code: "/hooks",
          note: "Lecture seule, et ça liste exactement ce qui va le bloquer. Bien mieux que de le découvrir en étant bloqué.",
        },
      ],
    },
    {
      kind: "fixes",
      heading: "Ce qui casse dès qu'une deuxième personne arrive",
      items: [
        {
          problem: "Chacun écrit son propre fichier de règles",
          fix: "Un seul fichier, dans le projet, dans le dépôt. Les préférences personnelles vont dans le fichier utilisateur, où elles ne peuvent pas contredire celui de l'équipe.",
        },
        {
          problem: "Un garde-fou bloque quelqu'un sans dire pourquoi",
          fix: "Faites parler le garde-fou. Il renvoie son message quand il refuse, donc écrivez cette ligne pour le collègue qui ne l'a jamais vue, pas pour vous.",
        },
        {
          problem: "Deux personnes construisent presque le même travail",
          fix: "Cherchez dans `.claude/skills` avant d'en écrire un. Trente secondes de recherche valent mieux que deux versions qui divergent pendant six mois.",
        },
        {
          problem: "La personne qui a tout installé s'en va",
          fix: "Il ne se passe rien, si tout ce qui est au-dessus est commité. L'installation tient dans des fichiers simples qui vivent avec le projet, transmis en copiant un dossier plutôt qu'une personne.",
        },
      ],
    },
    {
      kind: "list",
      heading: "Ce qu'il faut standardiser, et ce qu'il faut laisser",
      items: [
        "**Standardisez ce qui ne doit pas arriver.** Tout ce qui coûterait cher à défaire va dans un garde-fou, et tout le monde a le même.",
        "**Standardisez le travail ennuyeux répété.** C'est là que sont les heures, et une version partagée s'améliore chaque fois que quelqu'un la corrige.",
        "**Laissez tranquille la façon dont les gens travaillent.** La manière dont quelqu'un formule une demande n'est pas une décision d'équipe, et la contrôler ne rapporte rien tout en coûtant de la bonne volonté.",
      ],
    },
  ],
};

export const SHEET_DOCS_FR: SheetDoc[] = [
  SETUP_FR,
  TOOL_PICKER_FR,
  HOOKS_FR,
  MANAGER_FR,
  CONTEXT_FR,
  SKILLS_FR,
  CONNECTIONS_FR,
  UNATTENDED_FR,
  INSTRUCTIONS_FR,
  COMPLETE_FR,
  TEAM_FR,
];

export function getSheetDocFr(id: string): SheetDoc | undefined {
  return SHEET_DOCS_FR.find((s) => s.id === id);
}

/**
 * Garde-fou, vérifié au chargement du module en développement.
 *
 * Il n'y a rien à vérifier côté quiz ici, contrairement aux jours : une fiche
 * ne compte aucun point. Ce qui doit tenir, c'est que chaque fiche anglaise a
 * bien son équivalent français, sous le nom que `sheetIdFor` fabrique. Sinon
 * un lecteur français tombe silencieusement sur le PDF anglais.
 */
if (process.env.NODE_ENV !== "production") {
  const problems: string[] = [];

  SHEET_DOCS.forEach((en) => {
    const attendu = sheetIdFor(en.id, "fr");
    if (!SHEET_DOCS_FR.some((fr) => fr.id === attendu)) {
      problems.push(`La fiche ${en.id} n'a pas d'équivalent français (${attendu})`);
    }
  });

  SHEET_DOCS_FR.forEach((fr) => {
    if (!fr.id.endsWith("-fr")) {
      problems.push(`L'identifiant ${fr.id} ne finit pas par -fr`);
    }
    if (fr.left.length === 0 || fr.right.length === 0) {
      problems.push(`La fiche ${fr.id} a une colonne vide`);
    }
  });

  if (problems.length) {
    console.warn(`[challenge/fiches] Points à regarder :\n  ${problems.join("\n  ")}`);
  }
}
