---
title: "Inside AI Makers : chaque appel commercial analysé, sans prendre une note"
seoTitle: "Chaque appel commercial analysé, sans notes"
description: Comment fonctionne notre système d'intelligence d'appels. Transcription automatique, analyse par Claude, mise à jour du CRM. Ce que l'IA fait mieux qu'un commercial, et ce qui reste humain.
date: 2026-07-14
author: Othmane Halim
---

Chez AI Makers, personne ne prend de notes pendant un appel commercial. Personne ne recopie non plus le compte rendu dans le CRM après coup. Chaque appel est transcrit, analysé et versé au pipeline automatiquement. Voici l'architecture de ce système, et surtout les choix qu'on a faits en le construisant.

## Le vrai coût des notes d'appel

Le problème n'est pas le temps passé à prendre des notes. C'est ce que les notes ratent.

Un commercial en call fait deux choses en même temps : il conduit la conversation et il essaie de la documenter. Résultat prévisible : soit la conversation en pâtit, soit la documentation. En général, la documentation. Les engagements pris à l'oral ("je vous envoie ça vendredi", "rappelez-moi après notre comité de direction") s'évaporent. Les objections entendues au call 1 ne sont plus là au call 3. Et le CRM raconte une version appauvrie de la réalité, remplie de champs "à compléter".

Le pipeline devient alors un objet de croyance plutôt qu'un outil de pilotage.

## Comment le système fonctionne

Trois étapes, trois responsabilités distinctes.

**Fireflies transcrit.** L'outil assiste à chaque call et produit une transcription complète. C'est la couche capture : exhaustive, passive, sans effort pour personne.

**Claude analyse.** La transcription brute ne sert à rien telle quelle : personne ne relit quarante-cinq minutes de verbatim. Un agent Claude en extrait ce qui compte pour la suite : les objections entendues (et leur formulation exacte), les signaux d'achat, les engagements pris de part et d'autre, la prochaine étape convenue. L'analyse est structurée, pas résumée : chaque élément a sa place et son usage.

**Le CRM est mis à jour automatiquement.** Les éléments extraits alimentent la fiche du prospect ou du client : l'étape du deal avance si le call le justifie, les engagements deviennent des tâches datées, l'historique des objections s'enrichit. Le commercial relit et corrige si besoin, mais il ne saisit plus rien.

## Ce que ça change concrètement

Trois effets, observables au quotidien.

Les commerciaux ne recopient plus rien. Le temps entre deux calls sert à préparer le suivant, pas à documenter le précédent.

Aucun engagement ne se perd. Si quelqu'un a promis un document pour vendredi, c'est écrit, daté, assigné. La relance ne dépend plus de la mémoire de celui qui a promis.

Le pipeline reflète la réalité des conversations. Quand on prépare un call de closing, on relit les objections exactes du prospect depuis le premier échange, dans ses mots à lui. C'est une différence majeure avec un CRM rempli de résumés télégraphiques écrits trois jours après.

## Ce qui reste humain, et pourquoi

Soyons précis sur la frontière, parce que c'est là que la plupart des discours dérapent.

L'IA ne vend pas. La relation, la lecture des non-dits, la négociation, la décision de pousser ou de laisser respirer : tout ça reste humain, et on ne cherche pas à le changer. Un système qui prétendrait automatiser la relation commerciale automatiserait surtout sa dégradation.

Ce que l'IA fait objectivement mieux, c'est la mémoire et la constance. Elle n'oublie aucun call, elle applique la même grille d'analyse au premier appel de janvier et au dernier de juin, elle ne fatigue pas un vendredi à 18h. L'humain excelle dans la conversation, l'IA excelle dans la trace. Le système assemble les deux au lieu de demander à l'un de faire le travail de l'autre.

## Le même système, chez nos clients

Ce système n'est pas une vitrine interne. On le déploie tel quel chez des clients, branché sur leur environnement : leur outil de visio, leur CRM, que ce soit Salesforce, HubSpot ou autre chose. L'architecture ne change pas, seuls les connecteurs et la grille d'analyse s'adaptent à leur cycle de vente.

C'est notre façon de travailler : les systèmes qu'on propose en mission sont d'abord ceux qui tournent chez nous. Si le sujet vous concerne, notre page [transformation IA](/ai-transformation) décrit comment on identifie ce type de cas d'usage dans une organisation, et par où on commence.
