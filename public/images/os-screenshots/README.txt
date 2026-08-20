Déposez ici les vraies captures d'écran des Operating Systems (interne + clients).
Format recommandé : 1600x1000 px, PNG ou WebP.

ATTENTION : la section qui les affichait (section 4bis de
src/app/ai-operating-system/page.tsx, "À quoi ressemble un Operating System en vrai")
a été RETIRÉE avant la mise en ligne. Elle ne montrait que des cadres "Capture à venir"
sur une page qui présente des systèmes en production.

Pour la remettre une fois les captures déposées ici :
  git log --oneline -- src/app/ai-operating-system/page.tsx
  git show <commit_avant_retrait>:src/app/ai-operating-system/page.tsx
Recoller la section, puis remplacer le bloc "placeholder" par
<img src="/images/os-screenshots/xxx.png" ... />.
