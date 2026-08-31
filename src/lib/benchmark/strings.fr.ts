/**
 * Le Benchmark des Makers, couche de chaînes françaises.
 *
 * **Rien n'est écrit ici.** Chaque valeur vient du pack de contenu, recopiée
 * telle quelle. Le texte français est la référence, il est validé, et une
 * chaîne inventée ressemble à une chaîne finie, donc personne ne l'attrape en
 * relecture.
 *
 * Trois catégories, et il faut savoir laquelle on lit :
 *
 * 1. **Fournies par le pack.** La majorité. Recopiées au caractère près.
 * 2. **Reprises de l'artefact**, marquées ARTEFACT : ce sont des éléments
 *    d'interface et non de la prose, les lettres A à D des options et le format
 *    du compteur d'étape. L'artefact fait autorité sur le rendu.
 * 3. **Provisoires**, listées dans DRAFT_KEYS : elles s'affichent, elles ne
 *    sont validées par personne, elles se signalent en développement et une
 *    construction de production les refuse.
 *
 * `scorecard.benchTop` et `leaderboard.retakeBadge` sont écrites par le
 * propriétaire du produit et non par le pack : provisoires comme les autres,
 * en attente de la même validation.
 *
 * Le français est la langue de référence. `strings.en.ts` se pose à côté, avec
 * exactement les mêmes clés, et `strings.ts` sert l'une ou l'autre selon la
 * locale demandée. Ce fichier-ci ne contient donc que des données : la lecture,
 * les gardes-fous et le rapport de complétude vivent dans `strings.ts`, une
 * seule fois pour les deux langues.
 */

export const STRINGS_FR: Record<string, string> = {
  // ---------------------------------------------------------------- métadonnées
  // PROVISOIRE, voir DRAFT_KEYS.
  "meta.title":
    "Le Benchmark des Makers — testez votre niveau IA en 6 minutes",
  "meta.description":
    "Neuf situations réelles tirées de nos audits, trois rounds, 45 secondes par question. Le Benchmark évalue votre niveau IA et ajuste sa difficulté à chaque round. Quatre métiers, un seul classement.",

  // ------------------------------------------------------------- barre de statut
  "status.session": "Session",
  "status.track": "Track",
  "status.round": "Round",
  // Sert aussi de libellé accessible à l'échelle en trois points : c'est le
  // même objet, il n'a pas besoin de deux noms.
  "status.niveau": "Niveau",
  // Seule entrée de la barre dont la valeur est dans la chaîne.
  "status.palier": "Palier {n}/3",
  "status.score": "Score",

  // --------------------------------------------------------------------- niveaux
  // TIER_LABEL, une seule source pour la barre, les verdicts, la carte de score
  // et le classement.
  "tier.beginner": "Débutant",
  "tier.intermediate": "Intermédiaire",
  "tier.expert": "Expert",

  // -------------------------------------------------------------------- landing
  "landing.headline1":
    "Le diagnostic mesure ce que votre entreprise dit de l'IA.",
  "landing.headline2": "Le Benchmark mesure ce que vos équipes en savent.",
  "landing.lede":
    "Neuf situations réelles tirées de nos audits et de nos chantiers, dans votre métier. Chaque round vous note et déplace votre difficulté. Personne ne fait deux fois le même parcours, et personne n'arrive au niveau expert par hasard.",

  // L'artefact coupe chaque statistique en trois : un libellé, un chiffre, une
  // précision. Le pack les écrit « 9 · 3 rounds de 3 », c'est la même coupure.
  "landing.stat1.label": "Questions",
  "landing.stat1.value": "9",
  "landing.stat1.sub": "3 rounds de 3",
  "landing.stat2.label": "Temps",
  "landing.stat2.value": "45 s",
  "landing.stat2.sub": "par question",
  "landing.stat3.label": "Tracks",
  "landing.stat3.value": "4",
  "landing.stat3.sub": "choisissez votre métier",
  "landing.stat4.label": "Score max",
  "landing.stat4.value": "240",
  "landing.stat4.sub": "parcours expert sans faute",

  "landing.rule1":
    "Tout le monde démarre au niveau intermédiaire. Pas d'échauffement : on vous suppose déjà dans le sujet.",
  "landing.rule2":
    "3 bonnes réponses dans un round vous font monter. 2 vous maintiennent. 1 ou 0 vous font descendre.",
  // La règle 3 est la nouvelle : chaque round tape plus fort, donc se maintenir
  // fait quand même avancer d'un palier.
  "landing.rule3":
    "Chaque round tape plus dur que le précédent. Même en restant au même niveau, vous passez au palier suivant : les questions du round 3 sont celles qui séparent un utilisateur d'IA d'un AI Champion.",
  "landing.rule4":
    "Plus le niveau est dur, plus il rapporte. Débutant 10 points, intermédiaire 20, expert 30. Enchaîner des questions faciles ne battra jamais une montée.",
  "landing.rule5":
    "45 secondes par question. Assez pour réfléchir, trop peu pour aller demander à un modèle.",

  "landing.cta": "Lancer le Benchmark",
  "landing.ctaNote": "Environ 6 minutes",

  // Lien de défi reçu : la landing affiche qui il faut battre.
  // PROVISOIRE, voir DRAFT_KEYS.
  "landing.challengedBy": "{nom} a obtenu {score}/240, niveau {niveau}. À vous.",

  // --------------------------------------------------------------- onboarding
  // ARTEFACT : le compteur d'étape, rendu « 01 / 05 ».
  "onboarding.counter": "{n} / {total}",
  "onboarding.continue": "Continuer",
  "onboarding.enterHint": "ou appuyez sur Entrée",
  "onboarding.back": "Retour",

  "onboarding.step1.label": "Sous quel nom voulez-vous apparaître au classement ?",
  "onboarding.step1.placeholder": "Camille Bernard",
  "onboarding.step1.hint":
    "Seuls votre prénom et l'initiale de votre nom sont affichés publiquement.",
  "onboarding.step1.error": "Il nous faut un nom à afficher au classement.",

  "onboarding.step2.label": "Où envoyons-nous votre carte de score ?",
  "onboarding.step2.placeholder": "camille@votre-entreprise.fr",
  "onboarding.step2.hint":
    "Votre détail round par round, votre place au classement, et le corrigé : chaque question renvoie au cas d'usage ou à la règle de gouvernance qui la justifie.",
  "onboarding.step2.error": "Cette adresse semble incomplète. Vérifiez la saisie.",

  "onboarding.step3.label": "Dans quelle entreprise ?",
  "onboarding.step3.placeholder": "Nom de votre entreprise",
  // RÉÉCRITE LE 31 AOÛT, PROVISOIRE, en attente de Youssef.
  //
  // L'ancienne version disait « Votre entreprise s'affiche au classement à côté
  // de votre score ». Ce n'est plus vrai depuis que la colonne est retirée, et
  // une phrase qui promet un affichage inexistant est pire qu'une phrase
  // absente : elle justifie une collecte par une contrepartie qu'on ne donne
  // pas. La raison de demander le champ a donc été réécrite autour de ce qu'il
  // sert réellement à faire.
  "onboarding.step3.hint":
    "Elle ne s'affiche nulle part. Elle nous sert à regrouper les parcours d'une même équipe quand plusieurs collègues passent le Benchmark, et à situer nos réponses dans votre contexte.",
  "onboarding.step3.error":
    "Indépendant ou entre deux postes ? Écrivez-le, ça compte aussi.",

  "onboarding.step4.label": "Dans quel département travaillez-vous ?",
  "onboarding.step4.hint":
    "Ce choix charge la banque de questions de votre métier. Les quatre tracks sont notés de la même façon et se retrouvent dans un classement unique.",
  "onboarding.step4.error":
    "Choisissez un département : c'est lui qui détermine vos questions.",

  "onboarding.step5.label": "Sur quoi travaillez-vous en {track} ?",
  "onboarding.step5.hint":
    "Dernière étape. Prenez le plus proche : votre parcours démarre au clic.",
  "onboarding.step5.error": "Choisissez le plus proche. Un clic suffit.",
  // Section 11 du PRD. Le pack fournit la mention de démonstration, qui dit que
  // rien n'est transmis : faux depuis que Supabase est branché.
  //
  // Version courte, option B de `docs/BENCHMARK-MENTIONS-A-VALIDER.md`. Elle
  // garde les trois choses qui doivent y être : ce qui est public, que l'e-mail
  // est stocké sans être affiché, et à quoi il sert. Les autres options et la
  // version longue sont dans ce document.
  //
  // PROVISOIRE, en attente d'Othmane.
  // Devenue le seul libellé d'un lien, le 31 août. La mention détaillait ce qui
  // est enregistré et ce qui s'affiche : une liste à tenir à jour à chaque
  // changement, qui a déjà menti une fois le jour où l'entreprise a quitté le
  // classement. Le texte est celui du pied de page du site, pas un libellé
  // inventé ici.
  "onboarding.step5.privacy": "Politique de confidentialité",

  // ----------------------------------------------------------------- question
  "question.timerLabel": "Temps",
  "question.points": "{pts} pts",
  "question.position": "Round {n} · Q{i} · palier {p}",
  // ARTEFACT : les quatre lettres des options.
  "question.optionA": "A",
  "question.optionB": "B",
  "question.optionC": "C",
  "question.optionD": "D",

  "question.resultCorrect": "Bonne réponse · +{pts} pts",
  "question.resultWrong": "Mauvaise réponse · 0 pt",
  "question.resultTimeout": "Temps écoulé · 0 pt",

  "question.nextMidRound": "Question suivante",
  "question.nextEndOfRound": "Fin du round — voir le verdict",
  "question.nextEndOfRun": "Voir ma carte de score",

  "question.liveRegion": "Round {n}, question {i}, niveau {niveau}, palier {p}.",

  // ------------------------------------------------------- verdict de fin de round
  "verdict.montee.pill": "Niveau supérieur",
  "verdict.montee.title": "3 / 3 — vous montez",
  "verdict.montee.body":
    "Sans faute. Round suivant : banque {niveau}, palier {p}, {pts} points la question. Vous changez de niveau et de palier en même temps.",

  "verdict.plafond.pill": "Plafond tenu",
  "verdict.plafond.title": "3 / 3 en expert",
  "verdict.plafond.body":
    "Il n'y a rien au-dessus. Vous restez en expert, à 30 points la question, et vous passez au palier {p} : les trois situations que nous réservons à nos AI Champions.",

  "verdict.descente.pill": "Niveau inférieur",
  "verdict.descente.title": "{n} / 3 — vous descendez",
  "verdict.descente.body":
    "Ce round n'a pas tenu. Le suivant redescend en {niveau}, à {pts} points la question. La difficulté ne repart pas de zéro pour autant : vous attaquez au palier {p}.",

  "verdict.plancher.pill": "Plancher tenu",
  "verdict.plancher.title": "{n} / 3 en débutant",
  "verdict.plancher.body":
    "Débutant est le plancher, vous y restez. Le palier, lui, avance : les questions du round suivant sont les plus dures de cette banque.",

  "verdict.maintien.pill": "Niveau maintenu",
  "verdict.maintien.title": "2 / 3 — vous vous maintenez",
  "verdict.maintien.body":
    "Deux sur trois vous gardent en {niveau}. Trois vous auraient fait monter. Le round suivant reste sur ce niveau et passe au palier {p} : mêmes points, situations plus dures.",

  "verdict.cta": "Lancer le round {n}",

  // -------------------------------------------------------------- carte de score
  "scorecard.eyebrow": "Parcours terminé",
  // PROVISOIRE, voir DRAFT_KEYS. Le bandeau bleu en haut de la carte
  // partageable. Le pack ne l'a pas fourni.
  "scorecard.benchTop": "AI MAKERS · LE BENCHMARK DES MAKERS",
  "scorecard.subline":
    "{hits} bonnes réponses sur {total}, en 3 rounds, en {temps}.",
  // L'artefact affiche le score en très gros puis « / 240 » en petit. Le pack
  // écrit la ligne entière, « {score} / 240 » : c'est la même coupure.
  "scorecard.scoreOutOf": "/ {max}",
  // La ligne complète du pack. Le composant la coupe au tiret cadratin pour
  // remplir les deux colonnes du tableau, exactement là où l'artefact la coupe.
  "scorecard.roundLine": "Round {n} · {niveau} · palier {p} — {c}/3 · {pts} pts",
  "scorecard.finalTier": "Niveau final",
  "scorecard.time": "Temps",

  // VERDICT_COPY, une paire par niveau de sortie.
  "scorecard.verdict.beginner.title": "Vous terminez au niveau débutant.",
  "scorecard.verdict.beginner.body":
    "Ici tout le monde démarre en intermédiaire, donc ce parcours a pris le chemin difficile. Le corrigé ci-dessous est la route la plus rapide pour remonter : chaque explication nomme le principe en jeu, celui qu'on enseigne en formation AI Champions.",
  "scorecard.verdict.intermediate.title":
    "Vous terminez au niveau intermédiaire.",
  "scorecard.verdict.intermediate.body":
    "Une bonne maîtrise de terrain. L'écart avec le niveau expert tient rarement au nombre d'outils connus. Il tient à la gouvernance : savoir où l'humain reste indispensable, et quel mode de panne chaque choix vous achète.",
  "scorecard.verdict.expert.title": "Vous terminez au niveau expert.",
  "scorecard.verdict.expert.body":
    "Vous avez tenu la banque la plus dure du jeu, palier 3 compris. Ce niveau-là, dans une équipe, s'appelle un AI Champion : la personne vers qui les autres se tournent avant de brancher un agent sur un vrai process.",

  "scorecard.copyLinkedIn": "Copier mon post LinkedIn",
  "scorecard.seeCorrige": "Voir le corrigé",
  "scorecard.otherTrack": "Essayer un autre track",

  // --------------------------------------------------------------------- badge
  // Le pack livre la maquette du badge et le gabarit du post, pas les libellés
  // des trois boutons ni le texte de la page de badge. Ils sont écrits ici pour
  // que l'écran fonctionne, et ils sont tous PROVISOIRE : voir DRAFT_KEYS.
  //
  // Le mot « certification » est banni de tout ce bloc. On dit « niveau » ou
  // « résultat », c'est la règle du pack, et le test `badge-wording` la tient.
  // La section où LinkedIn range l'entrée porte son propre nom, que nous ne
  // choisissons pas et que nous ne recopions nulle part.
  "badge.shareLinkedIn": "Publier sur LinkedIn",
  "badge.download": "Télécharger le badge",
  "badge.addToProfile": "Ajouter à mon profil",
  "badge.previewAlt": "Badge du Benchmark des Makers, niveau {niveau}, track {track}",
  // L'intitulé pré-rempli dans le profil LinkedIn. Il nomme un niveau atteint
  // sur un track, et rien de plus.
  "badge.profileEntry": "Le Benchmark des Makers, niveau {niveau} ({track})",
  "badge.pageTitle": "{nom}, niveau {niveau}",
  "badge.pageLead": "{score} sur {max} au Benchmark des Makers, track {track}.",
  "badge.backToBenchmark": "Passer le Benchmark",
  // La ligne honnête. Le badge porte notre marque : il doit dire ce qu'il est.
  "badge.honest":
    "Ce badge rend compte d'un parcours joué sur aimakers.fr. Ce n'est pas un examen surveillé, et le score qui y figure a été obtenu en neuf questions.",
  "badge.brokenTitle": "Ce lien de badge est incomplet",
  "badge.brokenBody":
    "Il manque un élément au lien, ou l'un d'eux a été modifié. Rejouez le Benchmark pour obtenir un badge à votre nom.",

  // ------------------------------------------------------------------- corrigé
  "corrige.title": "Corrigé",
  "corrige.pillCorrect": "Juste",
  "corrige.pillWrong": "Raté",
  "corrige.pillTimeout": "Sans réponse, temps écoulé",
  // ARTEFACT : les deux glyphes qui portent la réponse.
  "corrige.correctAnswer": "✓ {reponse}",
  "corrige.yourAnswer": "✗ {reponse}",
  "corrige.close": "Fermer",

  // ---------------------------------------------------------------- classement
  "leaderboard.title": "Classement",
  "leaderboard.colRank": "#",
  "leaderboard.colName": "Nom",
  // Plus rendue depuis le 31 août : la colonne entreprise est retirée du
  // classement. La clé reste, parce que la retirer casserait la parité entre
  // les deux langues pour une chaîne qui coûte quinze octets, et parce que
  // remettre la colonne un jour ne doit pas demander de réécrire l'en-tête.
  "leaderboard.colCompany": "Entreprise",
  "leaderboard.colTier": "Niveau",
  "leaderboard.colScore": "Score",
  "leaderboard.counter": "{n} parcours · vous êtes {rang}e",
  // PROVISOIRE, voir DRAFT_KEYS. La pastille posée sur une ligne dont ce n'est
  // pas la première tentative. Le pack ne l'a pas fournie, et l'artefact n'a
  // pas de badge de reprise du tout.
  "leaderboard.retakeBadge": "2e passage",
  // Ne devrait jamais s'afficher, les 14 parcours d'exemple étant livrés avec.
  // Existe pour que le composant ne puisse pas rendre un tableau vide.
  // PROVISOIRE, voir DRAFT_KEYS.
  "leaderboard.empty":
    "Aucun parcours enregistré pour l'instant. Le vôtre ouvrira le classement.",
  // Section 11. Le pack fournit la note de démonstration, qui dit que le tableau
  // mélange des parcours d'exemple et des parcours locaux au navigateur : faux
  // depuis Supabase. Version courte, option B du même document.
  // PROVISOIRE, en attente d'Othmane.
  "leaderboard.note":
    "Un seul classement, quatre départements. Nom d'affichage, niveau, score : ni entreprise, ni adresse e-mail. Tous les parcours affichés sont réels.",

  // ---------------------------------------------------------------- conversion
  "closer.eyebrow": "Et maintenant",
  "closer.expert.title": "Vous savez. Vos systèmes en production le savent-ils ?",
  "closer.expert.body":
    "Finir en expert veut dire que vous repérez les modes de panne sur le papier. Les équipes que nous auditons les repèrent aussi, et livrent quand même des agents sans trace rejouable, sans seuil d'escalade et sans jeu d'évaluation. Un AI Scan commence exactement là : process d'abord, solution ensuite.",
  "closer.other.title":
    "L'écart que ce parcours vient de révéler se comble en une journée.",
  "closer.other.body":
    "Vos rounds faibles pointent des choses précises : où poser un garde-fou, quoi journaliser, quelle décision laisser à un humain. 70 % d'une transformation IA, c'est l'humain. La formation AI Champions sert à ça : un référent IA par équipe, formé sur vos cas d'usage.",
  "closer.cta": "Réserver un appel gratuit",
  "closer.challenge": "Défier un collègue",

  // ------------------------------------------------------------------- partage
  // Le gabarit du post LinkedIn et le message de défi vivent dans
  // `content/labels.ts`, avec le reste de ce que le pack exporte, et leur
  // version anglaise dans `content/labels.en.ts`. Deux clés vides les
  // attendaient ici, du temps où la seconde locale n'avait pas de fichier de
  // contenu à elle : retirées le 28 août, parce qu'une clé vide n'est pas une
  // place réservée mais un trou, et que ces deux-là empêchaient une locale
  // d'être jamais déclarée complète.

  // ------------------------------------------------------------------- langue
  // Le garde-fou de la bascule FR / EN pendant un parcours. Voir
  // `language-guard.tsx` : le changement de langue est une navigation complète,
  // donc il efface le parcours en cours. Prévenir supprime la perte
  // silencieuse ; conserver le parcours d'une langue à l'autre demanderait de
  // rejouer la même sélection dans l'autre banque, ce qui attend la remise à
  // jour de l'anglais.
  //
  // PROVISOIRE, voir DRAFT_KEYS.
  "guard.title": "Changer de langue ?",
  "guard.body":
    "Le Benchmark repart de l'accueil dans l'autre langue : les réponses déjà données ne suivent pas. Un parcours déjà terminé reste au classement.",
  "guard.confirm": "Changer quand même",
  "guard.cancel": "Rester ici",

  // -------------------------------------------------------------------- toasts
  "toast.linkedInCopied": "Post copié. Collez-le directement dans LinkedIn",
  "toast.linkedInFailed":
    "Presse-papiers inaccessible. Sélectionnez le texte à la main",
  "toast.challengeCopied": "Défi copié. Envoyez-le-lui",
  "toast.demoNotice":
    "Version de démonstration. En ligne, ce bouton ouvre la prise de rendez-vous",

  // -------------------------------------------------------------------- footer
  "footer.brand": "aimakers.fr · Le Benchmark des Makers",
  // Section 11. Le pack fournit la mention de démonstration, qui dit qu'aucune
  // donnée ne quitte le navigateur : faux depuis Supabase.
  // PROVISOIRE, en attente d'Othmane.
  "footer.privacy": "Quatre départements · e-mail jamais affiché",
};

/**
 * Chaînes provisoires. Elles s'affichent, donc l'écran fonctionne, mais elles
 * ne sont validées par personne : le français attend Youssef, les trois
 * mentions de confidentialité attendent Othmane.
 *
 * Le risque est qu'elles se lisent comme du texte fini. Elles sont donc
 * listées par `draftStringKeys()`, signalées dans le journal de construction,
 * et soulignées en développement quand on pose
 * NEXT_PUBLIC_BENCHMARK_SHOW_DRAFTS=1.
 *
 * Depuis le 28 août elles partent en ligne : la démonstration au comité passe
 * avant leur validation. `BENCHMARK_STRICT_STRINGS=1` fait de nouveau échouer
 * la construction, pour une vérification avant lancement public.
 */
export const DRAFT_KEYS_FR = new Set<string>([
  "meta.title",
  "meta.description",
  "landing.challengedBy",
  "leaderboard.empty",
  "scorecard.benchTop",
  "leaderboard.retakeBadge",
  "onboarding.step5.privacy",
  "leaderboard.note",
  "footer.privacy",
  "guard.title",
  "guard.body",
  "guard.confirm",
  "guard.cancel",
  // Réécrite le 31 août : l'ancienne promettait un affichage de l'entreprise au
  // classement, ce qui n'est plus vrai. En attente de Youssef.
  "onboarding.step3.hint",
  // Le bloc badge en entier : le pack a livré la maquette, pas les libellés.
  "badge.shareLinkedIn",
  "badge.download",
  "badge.addToProfile",
  "badge.previewAlt",
  "badge.profileEntry",
  "badge.pageTitle",
  "badge.pageLead",
  "badge.backToBenchmark",
  "badge.honest",
  "badge.brokenTitle",
  "badge.brokenBody",
]);
