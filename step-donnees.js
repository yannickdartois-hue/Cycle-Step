/* Données du cycle de step CA5 Seconde (Lycée G. Pompidou) : pas, blocs, filières, séances, schémas.
   Partagées par l'écran de cours (index.html) et l'outil complet (cycle-step-old.html). */
/* ================== DONNÉES DU CYCLE STEP CA5 — SECONDE ================== */
const DUREE = 70;

/* ---------- Répertoire des 16 pas ---------- */
/* pos : [temps, pied, x, y, marque] — marque : "" appui, "e" élévation (pied en l’air), "t" touche sans poids */
const FAMILLES = {
  F1:{nom:"Face au step · gardent le pied directeur", c:"#2563eb"},
  F2:{nom:"Élévations · changent de pied directeur", c:"#7c3aed"},
  F3:{nom:"Traverser le step", c:"#0d9488"},
  F4:{nom:"Tourner", c:"#c2410c"}
};
const PAS = [
 {id:1, nom:"Basique", fam:"F1", tps:4, pied:"Garde le même pied directeur",
  desc:["Monte pied droit au centre du step","Monte pied gauche à côté","Descends pied droit derrière, à 20 cm du step","Assemble pied gauche"],
  reperes:"Face au step, au milieu, dans l’axe.",
  crit:"Pied entier posé à plat, sans bruit. Jambe d’appui qui pousse jusqu’en haut. On amortit en descendant.",
  bras:"Flexion des coudes (biceps) → développé au-dessus de la tête sur 1-2.",
  saut:"Run : montée en course, propulsion sur chaque appui.",
  amp:"Réhausse ; extension complète de la jambe d’appui en haut.",
  basse:"Marche sur place au sol, ou step sans réhausse.",
  pos:[[1,"D",108,60],[2,"G",92,60],[3,"D",108,96],[4,"G",92,96]]},
 {id:2, nom:"V step", fam:"F1", tps:4, pied:"Garde le même pied directeur",
  desc:["Monte pied droit sur le bord droit","Monte pied gauche sur le bord gauche (les jambes forment un V)","Descends pied droit au centre","Assemble pied gauche"],
  reperes:"En montant j’écarte, en descendant je resserre.",
  crit:"Pieds entiers en diagonale sur les bords, talons vers l’intérieur. Genoux dans l’axe des pieds.",
  bras:"Bras qui s’ouvrent en V vers le haut en montant, se referment en descendant.",
  saut:"Propulsion sur le temps 1 : arriver sur le step avec un temps de suspension.",
  amp:"Écart maximal aux deux bords, descente plus fléchie.",
  basse:"V au sol (pas en avant écarté, retour serré).",
  pos:[[1,"D",138,60],[2,"G",62,60],[3,"D",108,96],[4,"G",92,96]]},
 {id:3, nom:"Pendule", fam:"F1", tps:4, pied:"Garde le même pied directeur",
  desc:["Monte pied droit au centre","Écarte la jambe gauche sur le côté","et : chassé — le pied gauche vient se poser sur le step et chasse le pied droit, qui se soulève","Descends pied droit","Descends pied gauche"],
  reperes:"Le chassé se fait sur le « et » entre 2 et 3 : on compte « 1, 2 et 3, 4 ». Il remplace le basique au début du bloc 2.",
  crit:"Réception pied entier sur le chassé, buste droit, pas de bruit. On ne saute pas en descendant.",
  bras:"Bras qui s’ouvrent sur le côté avec la jambe écartée.",
  saut:"Le chassé est déjà une impulsion : le faire plus haut.",
  amp:"Jambe écartée plus haut (45°).",
  basse:"Basique avec une élévation latérale, sans chassé.",
  pos:[[1,"D",108,60],[2,"G",66,60,"e"],["et","G",92,60],["et","D",134,60,"e"],[3,"D",108,96],[4,"G",92,96]],
  note:"Temps comptés : 1, 2, et, 3, 4."},
 {id:4, nom:"Jazz square", fam:"F1", tps:4, pied:"Garde le même pied directeur",
  desc:["Au sol : pied droit croise devant le pied gauche","Pied gauche recule","Pied droit se pose à droite","Pied gauche revient à côté"],
  reperes:"Les pieds dessinent un carré au sol, derrière le step. Pas de liaison et de récupération active.",
  crit:"Poids bien transféré à chaque pas, hanches souples, regard devant.",
  bras:"Bras qui accompagnent le croisé, ou claquement de doigts à hauteur d’épaules.",
  saut:"— (pas de saut sur ce pas)",
  amp:"Pas plus grands, flexion des genoux.",
  basse:"C’est déjà un pas bas : à garder pour récupérer.",
  pos:[[1,"D",90,84],[2,"G",82,100],[3,"D",118,100],[4,"G",104,88]]},
 {id:5, nom:"Lunge", fam:"F1", tps:8, pied:"Garde le même pied directeur",
  desc:["Monte pied droit au centre","Monte pied gauche","En appui sur la jambe gauche, touche le sol derrière avec le pied droit","Remonte pied droit","En appui sur la jambe droite, touche le sol derrière avec le pied gauche","Remonte pied gauche","Descends pied droit","Descends pied gauche"],
  reperes:"Je reste de face, la jambe tendue part loin derrière.",
  crit:"Genou d’appui fléchi dans l’axe du pied (jamais vers l’intérieur), buste incliné et gainé.",
  bras:"Bras tendus devant à chaque lunge, ou développé vers le haut.",
  saut:"Lunges sautés (changement d’appui sauté sur le step) : réservé aux élèves à l’aise.",
  amp:"Pied plus loin derrière, flexion plus marquée.",
  basse:"Fente arrière au sol, sans step.",
  pos:[[1,"D",108,60],[4,"D",108,60],[2,"G",92,60],[6,"G",92,60],[3,"D",108,108,"t"],[5,"G",92,108,"t"],[7,"D",108,91],[8,"G",92,91]],
  note:"Le pied qui a touché remonte aux temps 4 et 6 à sa place sur le step."},
 {id:6, nom:"Jumping jack sur le step", fam:"F1", tps:8, pied:"Garde le même pied directeur",
  desc:["Monte pied droit au centre","Monte pied gauche","Saut pieds écartés, dans la longueur du step","Saut pieds serrés au centre","Saut pieds écartés","Saut pieds serrés","Descends pied droit","Descends pied gauche"],
  reperes:"Les sauts se font sur la plateforme. On descend en marchant, jamais en sautant. Remplace le T step dans le bloc 3.",
  crit:"Réception pieds entiers, genoux fléchis et dans l’axe, pas de bruit ; pieds écartés toujours sur le step.",
  bras:"Bras qui montent au-dessus de la tête sur l’écart (jumping jack complet).",
  saut:"C’est déjà le pas le plus intense du répertoire.",
  amp:"Écart plus large (sans dépasser les bords), flexion plus marquée.",
  basse:"Sur le step sans saut : pas écarté, pas serré (temps 3 à 6).",
  pos:[[1,"D",108,60],[4,"D",108,60],[6,"D",108,60],[2,"G",92,60],[4,"G",92,60],[6,"G",92,60],[3,"D",144,60],[5,"D",144,60],[3,"G",56,60],[5,"G",56,60],[7,"D",108,96],[8,"G",92,96]],
  note:"Pieds écartés aux temps 3 et 5, serrés aux temps 4 et 6."},
 {id:7, nom:"Tap up", fam:"F2", tps:4, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Touche le step avec la pointe du pied gauche, sans poids","Descends pied gauche","Assemble pied droit"],
  reperes:"Le pied qui touche repart en premier au temps suivant.",
  crit:"Pied d’appui entier, la pointe touche sans poids, buste gainé.",
  bras:"Bras tendus devant à la touche, puis ramenés.",
  saut:"Petite impulsion sur la jambe d’appui au moment de la touche.",
  amp:"Monter plus haut sur l’appui (extension complète).",
  basse:"Touche alternée sur le step, sans monter.",
  pos:[[1,"D",108,60],[2,"G",92,60,"t"],[3,"G",92,96],[4,"D",108,96]]},
 {id:8, nom:"Genou", fam:"F2", tps:4, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Pousse sur la jambe droite et monte le genou gauche","Descends pied gauche","Assemble pied droit"],
  reperes:"« Genou G » = genou gauche levé (on monte pied droit). Genou à hauteur de hanche.",
  crit:"Pied entier, jambe d’appui tendue en haut, buste droit, pas de dos rond.",
  bras:"Bras qui vont chercher haut et redescendent vers la cuisse opposée.",
  saut:"Genou sauté : la jambe d’appui quitte le step sur le temps 2.",
  amp:"Genou au-dessus de la hanche.",
  basse:"Genou au sol, sans monter.",
  pos:[[1,"D",108,60],[2,"G",92,60,"e"],[3,"G",92,96],[4,"D",108,96]]},
 {id:9, nom:"Talons", fam:"F2", tps:4, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Pousse sur la jambe droite et monte le talon gauche à la fesse","Descends pied gauche","Assemble pied droit"],
  reperes:"« Talons G » = talon gauche à la fesse, puis « Talons D » repart pied gauche.",
  crit:"Buste droit, genou de la jambe levée orienté vers le sol, pied entier sur le step.",
  bras:"Rowing : on tire les coudes en arrière à chaque talon.",
  saut:"Talon sauté sur l’appui.",
  amp:"Talon jusqu’à la fesse, extension complète de l’appui.",
  basse:"Talon-fesse au sol.",
  pos:[[1,"D",108,60],[2,"G",92,72,"e"],[3,"G",92,96],[4,"D",108,96]]},
 {id:10, nom:"3 genoux", fam:"F2", tps:8, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Genou gauche","Pointe gauche touche le sol derrière","Genou gauche","Pointe gauche touche le sol","Genou gauche","Descends pied gauche","Assemble pied droit"],
  reperes:"3 genoux du même côté (repeater), la jambe d’appui ne bouge pas.",
  crit:"Gainage, appui stable, genou à la hanche à chaque fois.",
  bras:"Tirage des coudes vers le genou à chaque montée.",
  saut:"Genoux sautés sur l’appui (version très intense).",
  amp:"Genou au-dessus de la hanche, touche loin derrière.",
  basse:"1 genou seulement.",
  pos:[[1,"D",108,60],[2,"G",92,60,"e"],[4,"G",92,60,"e"],[6,"G",92,60,"e"],[3,"G",92,108,"t"],[5,"G",92,108,"t"],[7,"G",92,91],[8,"D",108,91]]},
 {id:11, nom:"Traverse", fam:"F3", tps:4, pied:"Monte toujours avec le pied le plus proche du step",
  desc:["De profil, monte le pied le plus proche au centre","Monte l’autre pied à côté","Descends le premier pied de l’autre côté du step","Assemble"],
  reperes:"Je commence et je finis parallèle au step.",
  crit:"Pieds entiers au milieu, dans l’axe ; regard devant ; je reste près du step à la descente.",
  bras:"Bras qui passent en arc au-dessus de la tête pendant la traversée.",
  saut:"Propulsion sur la montée (temps 1).",
  amp:"Grands pas, flexion à l’arrivée.",
  basse:"Pas chassé latéral au sol.",
  profil:true,
  pos:[[1,"G",100,51],[2,"D",100,69],[3,"G",100,14],[4,"D",100,31]]},
 {id:12, nom:"Cheval", fam:"F3", tps:8, pied:"Monte avec le pied le plus proche",
  desc:["Monte le pied proche","Monte l’autre pied (tu es sur le step, de profil)","Descends un pied d’un côté du step","Descends l’autre pied de l’autre côté : tu es à cheval","Remonte un pied","Remonte l’autre","Descends de l’autre côté","Assemble"],
  reperes:"Parallèle au step, je commence d’un côté et je finis de l’autre.",
  crit:"Pieds dans l’axe, descente contrôlée, jamais de saut en descendant.",
  bras:"Bras qui s’ouvrent à cheval, se referment en haut.",
  saut:"Remontée avec impulsion (temps 5).",
  amp:"Demi-squat à cheval.",
  basse:"Traverse simple.",
  profil:true,
  pos:[[1,"G",100,51],[2,"D",100,69],[3,"D",84,92],[4,"G",84,28],[5,"D",100,69],[6,"G",100,51],[7,"G",118,14],[8,"D",118,31]]},
 {id:13, nom:"V ¼ de tour", fam:"F4", tps:4, pied:"Garde le même pied directeur",
  desc:["Monte pied droit sur le bord droit","Monte pied gauche sur le bord gauche","Descends pied droit de profil, au bout du step","Assemble pied gauche (tu es de profil)"],
  reperes:"Un V qui finit de profil, à droite du step.",
  crit:"Rotation sur le haut du step, appui allégé, le regard part d’abord.",
  bras:"Bras en V vers le haut, puis bras qui accompagnent la rotation.",
  saut:"Propulsion sur la montée.",
  amp:"Écart maximal aux bords.",
  basse:"V step simple.",
  pos:[[1,"D",138,60],[2,"G",62,60],[3,"D",168,54],[4,"G",168,70]]},
 {id:14, nom:"Reverse", fam:"F4", tps:4, pied:"Garde le même pied directeur",
  desc:["Monte pied droit au centre","Demi-tour sur le step : pivote sur le pied droit et pose le pied gauche à sa droite (tu as le dos à la sono)","Descends pied droit en arrière, côté sono","Assemble pied gauche : tu es de l’autre côté, face au step"],
  reperes:"Demi-tour sur le step, descente en arrière. Repère verbal : « reverse = je tourne en haut, je descends derrière moi ».",
  crit:"Pivot sur l’appui allégé, pied entier, jamais de descente en avant.",
  bras:"Bras serrés pendant la rotation, puis ouverts à la descente.",
  saut:"— (pas de saut pendant la rotation)",
  amp:"Descente plus fléchie.",
  basse:"Basique (sans rotation).",
  pos:[[1,"D",108,60],[2,"G",124,60],[3,"D",94,24],[4,"G",110,24]],
  note:"Après le demi-tour, l’élève regarde vers son côté de départ ; il descend à reculons, côté sono."},
 {id:15, nom:"Back", fam:"F4", tps:4, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Petit saut sur le pied droit en pivotant d’un demi-tour vers la gauche (vers l’intérieur), réception sur le même pied","Descends pied gauche en arrière, côté sono","Assemble pied droit : tu es de l’autre côté, face au step"],
  reperes:"Saut-pivot sur un pied posé au centre, réception sur le même pied.",
  crit:"Réception pied entier, genou fléchi et dans l’axe, gainage. Pas plus d’un demi-tour.",
  bras:"Bras serrés contre le corps pendant le pivot.",
  saut:"Le saut-pivot est déjà une propulsion.",
  amp:"Plus de hauteur sur le saut.",
  basse:"Pivot sans saut, en posant le pied gauche sur le step (comme un reverse).",
  pos:[[1,"D",108,60],[2,"D",108,60],[3,"G",116,24],[4,"D",100,24]],
  note:"Pas le plus technique du répertoire : version basse obligatoire tant que la réception n’est pas stable."},
 {id:16, nom:"Hélicoptère", fam:"F4", tps:4, pied:"Change de pied directeur",
  desc:["Monte pied droit au centre","Jambe gauche tendue en arrière (fly), en pivotant d’un quart de tour vers l’extérieur (la droite) sur le pied droit","Reviens face au step et descends pied gauche","Assemble pied droit"],
  reperes:"Une extension de jambe arrière avec un quart de tour vers l’extérieur. Définition à confirmer.",
  crit:"Bassin gainé et horizontal pendant l’extension, appui stable.",
  bras:"Bras tendus en avant pour équilibrer l’extension.",
  saut:"Impulsion sur l’appui pendant le pivot.",
  amp:"Jambe tendue plus haut derrière.",
  basse:"Extension arrière sans pivot.",
  pos:[[1,"D",108,60],[2,"G",86,82,"e"],[3,"G",92,100],[4,"D",108,100]]}
];

/* ---------- Curseurs d’intensité ---------- */
const CURSEURS = [
 {k:"H", nom:"Hauteur du step", n:["Sans réhausse","1 réhausse","2 réhausses"], type:"énergétique"},
 {k:"B", nom:"Bras", n:["Bras bas ou mains aux hanches","Bras à hauteur des épaules","Bras au-dessus des épaules"], type:"énergétique"},
 {k:"P", nom:"Propulsion", n:["Aucun saut","Impulsion sur les montées","Pas sautés (run, genoux sautés…)"], type:"énergétique"},
 {k:"A", nom:"Amplitude", n:["Petite","Moyenne","Grande (genou > hanche, lunge profond)"], type:"énergétique"}
];

/* ---------- Blocs imposés (32 temps) ---------- */
const BLOCS = [
 {id:1, nom:"Bloc 1", seance:"S2", depart:"Face au step, pied droit",
  fin:"Côté gauche : refaire le bloc en miroir, départ pied gauche.",
  pas:[{t:4, nom:"Genou G", id:8},{t:4, nom:"Genou D", id:8},{t:4, nom:"V step", id:2},{t:4, nom:"V ¼ de tour à droite", id:13},{t:4, nom:"Traverse", id:11},{t:8, nom:"Cheval", id:12},{t:4, nom:"Tap up", id:7}]},
 {id:2, nom:"Bloc 2", seance:"S3", depart:"Face au step, pied droit",
  fin:"Côté gauche : refaire le bloc en miroir, départ pied gauche.",
  pas:[{t:4, nom:"Pendule", id:3},{t:4, nom:"Reverse", id:14},{t:4, nom:"Talons G", id:9},{t:4, nom:"Talons D", id:9},{t:8, nom:"Lunge", id:5},{t:4, nom:"Jazz square", id:4},{t:4, nom:"Basique", id:1}]},
 {id:3, nom:"Bloc 3", seance:"S4", depart:"Face au step, pied droit",
  fin:"Côté gauche : refaire le bloc en miroir, départ pied gauche.",
  pas:[{t:4, nom:"Tap up", id:7},{t:4, nom:"Back (tourne à G, intérieur)", id:15},{t:4, nom:"V step", id:2},{t:4, nom:"Hélicoptère (tourne extérieur)", id:16},{t:8, nom:"3 genoux", id:10},{t:8, nom:"Jumping jack sur le step", id:6}]}
];

/* ---------- Filières ---------- */
const FILIERES = {
 A:{nom:"A · Effort bref et intense", but:"Développer sa puissance aérobie : se dépasser", zone:[80,95], cible:85, format:"4 × 4 min, récupération active 3 min", effort:[4,4,4,4], recup:3, rpe:"7 à 9 sur 10", parole:"Je ne peux dire que quelques mots", curseurs:"Total 5 à 8 (propulsion et bras d’abord)", c:"#dc2626"},
 B:{nom:"B · Effort long et modéré", but:"S’entretenir, améliorer son endurance : durer", zone:[55,70], cible:62, format:"2 × 10 min, récupération active 5 min", effort:[10,10], recup:5, rpe:"3 à 5 sur 10", parole:"Je peux parler par phrases", curseurs:"Total 1 à 4 (amplitude et bras, pas de saut)", c:"#0891b2"}
};
const FORMATS = {
 eval:{nom:"Évaluation (S7, S8)", A:{e:[4,4,4,4],r:3}, B:{e:[10,10],r:5}},
 s5:{nom:"Format réduit (S5)", A:{e:[4,4,4],r:3}, B:{e:[8,8],r:2}},
 s6:{nom:"Passage coaché (S6)", A:{e:[3,3,3],r:2}, B:{e:[13],r:0}},
 s4:{nom:"Essai de filière (S4)", A:{e:[2,2,2],r:2}, B:{e:[10],r:0}}
};

/* ---------- Séances ---------- */
const SEANCES = [
/* ============ S1 ============ */
{id:"S1", titre:"Sécurité, FC de repos et bloc 1",
 obj:"Faire le bloc 1 en suivant l’enseignant en miroir, en sécurité, et relever ses premières fréquences cardiaques d’effort.",
 bpm:"125-128", pas:"Bloc 1 : genou, V step, V ¼ de tour, traverse, cheval, tap up",
 tl:[["Accueil, FC de repos",5,"acc"],["Installation, sécurité",6,"inst"],["Échauffement",10,"ech",0],["Exercice 1",14,"ex",1],["Exercice 2",15,"ex",2],["Situation finale",12,"sf",3],["Bilan, rangement",8,"bil",4]],
 prepare:["AFL1 : sécurité (pied entier, descente arrière) notée dès le premier jour.","AFL1 : le bloc 1 est le premier des 3 supports de l’épreuve.","AFL2 : première ligne du carnet (FC de repos, FC d’effort, ressenti)."],
 accueil:"Assis par binôme, 3 min de calme absolu, puis FC de repos à l’oxymètre (valeur provisoire). Consigne : la vraie FC de repos se prend à la maison, 3 matins au réveil, avant de se lever.",
 install:"35 steps en quinconce, 5 rangées de 7, face à la sono (voir schéma), tous sans réhausse. 1 m de vide autour de chaque step. Règles : chaussures obligatoires, jamais pieds nus ; pied entier sur le step ; on ne descend jamais en avant ; on ne saute jamais en descendant ; douleur au genou ou au dos → on le dit et on passe à une version simplifiée.",
 fiches:[
  {titre:"Échauffement guidé « du sol au step »", duree:10, cat:"Échauffement", dispo:"Quinconce, l’enseignant en miroir sur l’estrade (il fait le côté opposé).",
   roles:"Tous pratiquent. Le binôme vérifie que l’autre est à 1 m des steps voisins.",
   deroul:["Marche 8 temps au sol, départ pied droit ; marche 8 temps sur le step ; puis 4 au sol / 4 sur le step ; puis 2 / 2 = c’est le basique.","Taper 8 fois les talons sur le step en alternant D/G, puis 8 fois les pointes ; puis 4, puis 2.","Au sol : 8 genoux alternés, 8 talons-fesses, 8 step touch avec les bras.","Étirements dynamiques courts : mollets, quadriceps, ischio-jambiers (15 s chacun)."],
   crit:"Je compte les temps à voix haute au début. Repères d’espace : « côté sono », « côté tribune », pas « à droite ».",
   reussite:"Toute la classe passe de 8/8 à 2/2 sans se décaler de la musique.",
   moins:"Rester au sol, marquer les temps sur place.", plus:"Ajouter les bras (balancier).", schema:"salle"},
  {titre:"Les pas du bloc 1, un par un", duree:14, cat:"Apprentissage des pas", dispo:"Quinconce, l’enseignant face à la classe. Musique 125 BPM.",
   roles:"Tous pratiquent. Toutes les 3 min, le binôme regarde l’autre 16 temps et dit : pied entier oui/non, bruit oui/non.",
   deroul:["Genou G, genou D : « je monte pied droit, je lève le genou gauche ». 8 fois de chaque côté.","V step : « en montant j’écarte, en descendant je resserre ». 8 fois.","V ¼ de tour à droite : un V qui finit de profil, au bout du step. 4 fois au ralenti, puis sur la musique.","Traverse puis cheval (de profil) : « je monte toujours avec le pied le plus proche du step ». 4 fois chacun.","Tap up : « le pied qui touche repart en premier ». 8 fois."],
   crit:"Pied entier posé au centre, descente en arrière à 20 cm du step, jamais de descente en avant.",
   reussite:"Chaque pas réalisé 4 fois de suite sur le temps, sans bruit.",
   moins:"Faire le pas au sol 8 temps avant de le faire sur le step.", plus:"Enchaîner 2 pas sans arrêt.",
   schema:"pas:8,2,13,11,12,7"},
  {titre:"Assembler le bloc 1", duree:15, cat:"Blocs", dispo:"Quinconce. Musique 125 BPM, morceau phrasé en 32 temps.",
   roles:"Tous pratiquent. L’enseignant mène en miroir et annonce le pas suivant pendant les 4 derniers temps.",
   deroul:["Méthode additive : genou G + genou D (8 temps) ×4 ; puis V step + V ¼ de tour (8 temps) ×4 ; puis 1 + 2.","Traverse (4) + cheval (8) + tap up (4) ×4 ; puis le bloc entier.","Bloc entier 4 fois de suite en suivant l’enseignant (2 départ pied D, 2 en miroir départ pied G).","L’enseignant remplace peu à peu la parole par les gestes (cueing)."],
   crit:"Changements de pas au temps 1 ; regard devant ; on reste près de son step.",
   reussite:"Bloc 1 réalisé 2 fois de chaque côté en suivant l’enseignant, sans arrêt.",
   moins:"V ¼ de tour remplacé par un V step ; cheval remplacé par 2 traverses.", plus:"Faire le bloc sans regarder l’enseignant.",
   schema:"bloc:1"},
  {titre:"Premier effort, première mesure", duree:12, cat:"Situation finale", dispo:"Quinconce. Tous les steps sans réhausse. 1 oxymètre par binôme. Musique 128 BPM.",
   roles:"Tous pratiquent. À chaque arrêt, l’élève 1 met l’oxymètre et l’élève 2 lit et note, puis on inverse (celui qui mesure en premier change à la 2e mesure).",
   deroul:["Protocole oxymètre (1 min) : à l’arrêt, doigt dans l’oxymètre dans les 5 s, lire la FC quand elle est stable (vers 10 s), noter. Le 2e mesuré écrit « mesure tardive ».","Effort 1 · 6 min sans arrêt : le bloc 1 en boucle, en suivant l’enseignant, mains aux hanches, aucun saut, genou pas plus haut que la hanche.","Mesure 1 (30 s) : FC, ressenti de 0 à 10, et test de la parole (je peux dire une phrase ? quelques mots ?). Puis 1 min de marche sur place.","Effort 2 · 3 min : le même bloc 1, même musique, avec 2 changements seulement : les bras montent au-dessus des épaules à chaque pas, le genou monte plus haut que la hanche. Toujours aucun saut.","Mesure 2 (30 s), puis question : « qu’est-ce qui a changé entre les deux efforts, et de combien a monté ta FC ? »"],
   crit:"On ne mesure pas en bougeant. On note la valeur lue, pas une estimation. Entre les 2 efforts, seuls les bras et la hauteur du genou changent.",
   reussite:"Chaque élève a noté 2 FC et 2 ressentis ; la 2e FC est plus haute que la 1re pour au moins 3 élèves sur 4.",
   moins:"Effort 2 : les bras seulement, genou normal.", plus:"Effort 2 : ajouter aussi une impulsion sur chaque montée.",
   schema:"series:6,3"},
  {titre:"Bilan et carnet", duree:8, cat:"Bilan", dispo:"Assis près de son step, puis rangement (3 min).",
   roles:"Chacun remplit sa ligne de carnet ; le binôme vérifie que les 2 FC sont notées.",
   deroul:["Carnet, ligne S1 : FC de repos provisoire, FC après l’effort 1, FC après l’effort 2, ressentis.","Question : qu’est-ce qui a fait monter ta FC entre les deux efforts ?","Consigne maison : FC de repos 3 matins de suite (pouls 15 s × 4 ou oxymètre si tu en as un)."],
   crit:"Réponses courtes, chiffrées.", reussite:"100 % des carnets ont 2 FC d’effort.",
   moins:"Questions à choix.", plus:"Calculer déjà sa FC max théorique.", schema:""}
 ]},
/* ============ S2 ============ */
{id:"S2", titre:"Bloc 2, rappel du bloc 1, test des leviers",
 obj:"Mémoriser le bloc 2, retrouver le bloc 1, et comprendre quels réglages font le plus monter la fréquence cardiaque.",
 bpm:"128-130", pas:"Bloc 2 : pendule, reverse, talons, lunge, jazz square, basique",
 tl:[["Installation",4,"inst"],["Échauffement",10,"ech",0],["Exercice 1",10,"ex",1],["Exercice 2",18,"ex",2],["Situation finale",20,"sf",3],["Bilan, rangement",8,"bil",4]],
 prepare:["AFL1 : le bloc 2 est le 2e support de l’épreuve.","AFL2 : premier lien entre un réglage et un effet (FC, ressenti).","Calcul de la FC max et de la FC de réserve dans le carnet."],
 install:"Même placement qu’en S1. Vérifier 1 m de vide côté sono : le reverse fait descendre de l’autre côté.",
 fiches:[
  {titre:"Échauffement + rappel du bloc 1", duree:10, cat:"Échauffement", dispo:"Quinconce, enseignant en miroir.",
   roles:"Tous pratiquent.",
   deroul:["Au sol : marche 16, genoux 8, talons-fesses 8, step touch 8, step touch avec bras 8 (4 min).","Bloc 1 sans bras ni saut, d’abord en suivant l’enseignant (2 fois), puis seul (2 fois) : l’enseignant se tait (6 min)."],
   crit:"Progressivité : pas de bras ni de saut pendant l’échauffement.",
   reussite:"Bloc 1 réalisé seul, sans l’enseignant, 1 fois de chaque côté.",
   moins:"Suivre l’enseignant tout le temps.", plus:"Ajouter les bras sur le dernier passage.", schema:"bloc:1"},
  {titre:"Les pas du bloc 2", duree:10, cat:"Apprentissage des pas", dispo:"Quinconce, face au step.",
   roles:"Tous pratiquent. Le binôme compte « 1, 2 et 3, 4 » sur le pendule.",
   deroul:["Pendule : 1 monte, 2 écarte, et chassé, 3-4 descente. 8 fois pied D, 8 fois pied G.","Reverse au ralenti : 1 monte D, 2 demi-tour en posant G, 3-4 descente à reculons côté sono. 4 fois.","Talons G, talons D ; lunge (8 temps) ; jazz square au sol, derrière le step."],
   crit:"Chassé réceptionné pied entier ; jamais de descente en avant après le demi-tour ; genou d’appui dans l’axe sur le lunge.",
   reussite:"Pendule 8 fois de suite sur le temps, sans bruit ; reverse 4 fois sans descente en avant.",
   moins:"Pendule sans chassé (basique + jambe écartée) ; reverse remplacé par un basique.", plus:"Lunge avec bras tendus devant.",
   schema:"pas:3,14,9,5,4"},
  {titre:"Assembler le bloc 2", duree:18, cat:"Blocs", dispo:"Quinconce. Musique 128 BPM.",
   roles:"Tous pratiquent. Toutes les 5 min, un binôme sur deux fait le bloc pendant que l’autre souffle le pas suivant, puis on échange.",
   deroul:["Pendule + reverse (8 temps) ; talons G + talons D (8 temps).","Lunge (8 temps) ; jazz square + basique (8 temps).","Bloc entier en méthode additive, puis 4 fois (2 départ pied D, 2 en miroir).","Fin : bloc 1 + bloc 2 enchaînés une fois, en suivant l’enseignant."],
   crit:"Jamais de descente en avant après le demi-tour ; pied entier ; genou d’appui dans l’axe sur le lunge.",
   reussite:"Bloc 2 enchaîné 2 fois de chaque côté avec au plus 2 erreurs, aucune descente en avant.",
   moins:"Reverse remplacé par un basique.", plus:"Bras sur le pendule et le lunge.",
   schema:"bloc:2"},
  {titre:"Test des leviers : 3 × 3 min", duree:20, cat:"Situation finale", dispo:"Quinconce. Chrono mural. 1 oxymètre par binôme. Musique 130 BPM.",
   roles:"Tous pratiquent. À chaque arrêt : mesure en binôme (celui qui mesure en premier change à chaque série).",
   deroul:["Série 1 (3 min) : bloc 1 en boucle, version basse = step sans réhausse, mains aux hanches, aucun saut. Mesure + ressenti. Récupération 2 min en mambo.","Série 2 (3 min) : même chose + propulsion (genoux sautés, tap up sautés, cheval avec impulsion). Mesure. Récupération 2 min.","Série 3 (3 min) : propulsion + 1 réhausse + bras au-dessus des épaules. Mesure.","Mise en commun : quel levier a fait gagner le plus de pulsations ?"],
   crit:"Même bloc, même musique : on ne change qu’un réglage à la fois.",
   reussite:"3 FC et 3 ressentis notés ; chacun peut dire quel levier lui a fait gagner le plus de pulsations.",
   moins:"Série 3 sans réhausse.", plus:"Série 3 avec 2 réhausses (si l’élève est à l’aise).",
   schema:"series:3,3,3"},
  {titre:"Bilan : calculer sa zone", duree:8, cat:"Bilan", dispo:"Assis, carnet. Rangement 3 min.",
   roles:"Les binômes vérifient mutuellement leurs calculs.",
   deroul:["FC max = 220 − âge (garçons) ou 226 − âge (filles).","FC de réserve = FC max − FC de repos (valeur prise à la maison).","Zones A (80-95 %) et B (55-70 %) : calcul puis « Vérifier mes calculs » dans le carnet."],
   crit:"Calcul posé, unités notées.", reussite:"Calcul juste pour 9 élèves sur 10.",
   moins:"Utiliser la table imprimée des FC cibles.", plus:"Expliquer pourquoi la zone A est plus haute.", schema:""}
 ]},
/* ============ S3 ============ */
{id:"S3", titre:"Bloc 3, rappel des blocs 1 et 2, premiers défis",
 obj:"Apprendre le bloc 3, tenir un effort long sans rupture et commencer à prévoir sa propre fréquence cardiaque.",
 bpm:"130", pas:"Bloc 3 : tap up, back (sans saut), V step, hélicoptère, 3 genoux, jumping jack",
 tl:[["Installation",4,"inst"],["Échauffement",10,"ech",0],["Exercice 1",18,"ex",1],["Exercice 2",6,"ex",2],["Situation finale",24,"sf",3],["Bilan, rangement",8,"bil",4]],
 prepare:["AFL1 : le bloc 3 complète les 3 supports de l’épreuve.","AFL1 : premier effort au format de la filière B (continuité, FC à mi-série).","AFL2 : prévoir sa FC (Juste Pouls) = connaissance de soi."],
 install:"Même placement. Le back se fait sans saut pendant toute la séance.",
 fiches:[
  {titre:"Échauffement + rappel des blocs 1 et 2", duree:10, cat:"Échauffement", dispo:"Quinconce.",
   roles:"Tous pratiquent.",
   deroul:["Au sol (3 min).","Bloc 1 puis bloc 2 sans bras ni saut, seuls : l’enseignant n’annonce que le changement de bloc (7 min)."],
   crit:"Pas de propulsion pendant l’échauffement.", reussite:"Blocs 1 et 2 enchaînés seuls.",
   moins:"L’enseignant mène le bloc 2.", plus:"Bras sur le bloc 1.", schema:""},
  {titre:"Apprendre le bloc 3", duree:18, cat:"Blocs", dispo:"Quinconce. Musique 128 BPM.",
   roles:"Tous pratiquent. Toutes les 5 min, binômes : l’un fait, l’autre vérifie la réception du back et les sauts du jumping jack (toujours sur la plateforme).",
   deroul:["Back <b>sans saut</b> (pivot en posant le pied gauche) ; hélicoptère au ralenti (jambe tendue derrière, quart de tour).","Tap up + back (8 temps) ; V step + hélicoptère (8 temps).","3 genoux (8 temps) ; jumping jack sur le step (8 temps) : on descend en marchant.","Bloc entier en méthode additive, puis 2 fois de chaque côté."],
   crit:"Back sans saut aujourd’hui ; sauts du jumping jack uniquement sur la plateforme ; jamais de saut en descendant.",
   reussite:"Bloc 3 enchaîné 2 fois de chaque côté avec au plus 2 erreurs.",
   moins:"Jumping jack sans saut (pas écarté, pas serré).", plus:"Bras au-dessus de la tête sur le jumping jack.",
   schema:"bloc:3"},
  {titre:"Défi Juste Pouls : je présente le jeu", duree:6, cat:"Défi", dispo:"Assis près du step, puis 1 min d’essai.",
   defi:"Juste Pouls",
   roles:"Binômes. Le pratiquant annonce, le coach note l’annonce avant l’effort.",
   deroul:["Avant chaque mesure, j’annonce la FC que je vais atteindre. Le coach l’écrit.","Points : annonce à ± 5 = 3 pts · à ± 10 = 1 pt · au-delà = 0.","Essai : 1 min de bloc 1, annonce, mesure, points.","Les points du binôme s’additionnent dans le carnet, de S3 à S7."],
   crit:"On annonce avant de bouger, jamais après avoir vu l’oxymètre.", reussite:"Chaque binôme a fait une annonce et calculé ses points.",
   moins:"Annoncer une fourchette de 20 au lieu d’un chiffre.", plus:"Annoncer aussi le ressenti (0-10).", schema:""},
  {titre:"Effort long : 12 min continues + Juste Pouls", duree:24, cat:"Situation finale", dispo:"Quinconce. Musique 130 BPM. Chrono mural.",
   defi:"Juste Pouls",
   roles:"Tous pratiquent. Le coach écrit l’annonce de son partenaire, compte ses arrêts et note les FC.",
   deroul:["Blocs 1 + 2 en boucle, version basse (step sans réhausse, aucun saut, bras libres). Annonce Juste Pouls avant de partir.","12 min sans arrêt : une erreur rattrapée sans s’arrêter ne compte pas comme un arrêt.","À 6 min : arrêt de 15 s pour la mesure (autorisé), annonce pour la mesure suivante, on repart. Mesure finale à 12 min.","Comparer ses FC à sa zone B (calculée en S2) et compter ses points Juste Pouls."],
   crit:"Effort régulier : je ne dois pas finir épuisé.",
   reussite:"12 min sans arrêt (badge Endurant) ; les 2 FC sont comparées à la zone B.",
   moins:"Bloc 1 seulement.", plus:"Bras à hauteur des épaules.",
   schema:"series:12"},
  {titre:"Bilan : bref contre long, premiers badges", duree:8, cat:"Bilan", dispo:"Assis, carnet. Rangement 3 min.",
   roles:"Échange en binôme puis écrit individuel.",
   deroul:["Ligne S3 : FC à 6 et 12 min, arrêts, points Juste Pouls.","Comparer avec S2 : « qu’ai-je ressenti dans l’effort court et intense ? dans l’effort long ? lequel me ressemble ? »","Présenter les badges du cycle (voir l’onglet Défis)."],
   crit:"Au moins un argument chiffré.", reussite:"Chaque carnet contient les zones A et B.",
   moins:"Table des FC cibles.", plus:"Prévoir le réglage qui me mettrait au milieu de la zone B.", schema:""}
 ]},
/* ============ S4 ============ */
{id:"S4", titre:"Les 3 blocs, curseurs, choix de la filière",
 obj:"Enchaîner les 3 blocs, régler sa charge avec les curseurs et choisir sa filière à partir de ses données.",
 bpm:"130-132", pas:"Les 3 blocs",
 tl:[["Installation",4,"inst"],["Échauffement",10,"ech",0],["Exercice 1",12,"ex",1],["Exercice 2",12,"ex",2],["Situation finale",20,"sf",3],["Bilan, choix",12,"bil",4]],
 prepare:["AFL1 : les 3 blocs supports de l’épreuve sont enchaînés.","AFL2 : choix argumenté de la filière (données S2, S3, S4).","AFL3 : constitution des binômes pratiquant / coach."],
 install:"Même placement.",
 fiches:[
  {titre:"Échauffement mené par un élève de chaque rangée + défi Mémoire", duree:10, cat:"Échauffement", dispo:"Quinconce. 5 élèves volontaires face à leur rangée.",
   defi:"Badge Mémoire",
   roles:"5 meneurs (un par rangée), les autres suivent ; l’enseignant circule.",
   deroul:["Au sol mené par les élèves (3 min).","Blocs 1, 2, 3 enchaînés sans bras ni saut, sans l’enseignant (7 min). Le coach coche : 3 blocs enchaînés sans arrêt = badge Mémoire."],
   crit:"Le meneur annonce le pas suivant pendant les 4 derniers temps.", reussite:"Aucune rangée ne s’arrête.",
   moins:"L’enseignant mène, les meneurs doublent.", plus:"Le meneur ajoute les bras.", schema:""},
  {titre:"Les curseurs : version basse / version haute", duree:12, cat:"Entraînement", dispo:"Quinconce. Oxymètres. Fiche curseurs.",
   defi:"Juste Pouls",
   roles:"Binômes : chacun fait les 2 versions, l’autre mesure et note les curseurs utilisés.",
   deroul:["Présenter les 4 curseurs (H hauteur, B bras, P propulsion, A amplitude), chacun de 0 à 2 : total de 0 à 8.","2 min de bloc 1 en version basse (total 0-2) → annonce Juste Pouls → mesure.","Récupération 2 min (mambo).","2 min en version haute (total 6-8) → annonce → mesure. Écart en pulsations ?"],
   crit:"Je sais dire mon réglage sous la forme « H1 B2 P2 A1 = 6 ».",
   reussite:"Écart d’au moins 20 pulsations entre les deux versions pour 3 élèves sur 4.",
   moins:"Ne faire varier que bras et amplitude.", plus:"Trouver le réglage qui place pile au milieu de sa zone A.",
   schema:"curseurs"},
  {titre:"Viser le milieu de sa zone : 2 × 3 min", duree:12, cat:"Entraînement", dispo:"Quinconce. Oxymètres.",
   defi:"Juste Pouls",
   roles:"Binômes : le pratiquant règle ses curseurs et annonce, le coach mesure.",
   deroul:["Chacun vise le milieu de la zone A ou B (celle qu’il pense choisir) : il choisit son réglage et annonce sa FC.","3 min de blocs → mesure → points Juste Pouls.","Sous la zone : +1 curseur ; au-dessus : −1 curseur.","3 min avec le nouveau réglage → annonce → mesure."],
   crit:"Un seul curseur modifié à la fois.",
   reussite:"2e mesure dans la zone visée.",
   moins:"Viser une zone élargie de 5 pulsations.", plus:"Arriver dans la zone dès le premier essai.",
   schema:"series:3,3"},
  {titre:"Essai de filière : 10 min", duree:20, cat:"Situation finale", dispo:"Quinconce. Chrono filières (format « Essai »). Même musique pour tous.",
   defi:"Juste Pouls",
   roles:"Chacun choisit la filière qui l’attire et l’essaie ; annonces et mesures en binôme.",
   deroul:["Filière A : 3 × 2 min version haute, récupération 2 min (mambo).","Filière B : 10 min continues, version basse, mesure à 5 et 10 min.","Annonce Juste Pouls avant chaque mesure.","Comparer ses FC à sa zone : suis-je dedans ? En dessous ? Au-dessus ?"],
   crit:"Je règle un curseur à la fois si je sors de la zone.",
   reussite:"Au moins 2 mesures sur 3 dans la zone visée.",
   moins:"Filière B avec bloc 1 seulement.", plus:"Filière A : 3 séries sans arrêt dans le bloc.",
   schema:"filieres:s4"},
  {titre:"Choisir et argumenter sa filière", duree:12, cat:"Bilan", dispo:"Assis, carnet. Rangement 3 min.",
   roles:"Binômes formés pour la fin du cycle (affinitaires, filières mélangées possibles).",
   deroul:["Choix A ou B + 3 arguments : un ressenti, une donnée chiffrée (FC, écart à la zone), un projet personnel.","Noter le nom de son binôme coach et la répartition AFL2 / AFL3.","Élèves à aptitude partielle : filière B ou A adaptée, avec l’enseignant."],
   crit:"Un choix sans donnée chiffrée n’est pas validé.", reussite:"35 choix argumentés.",
   moins:"Phrases à compléter.", plus:"Prévoir son réglage de départ (curseurs).", schema:""}
 ]},

/* ============ S5 ============ */
{id:"S5", titre:"S’entraîner 1 : régler sa charge",
 obj:"Construire sa version personnelle des blocs et faire une première séance de sa filière en restant dans sa zone.",
 bpm:"132", pas:"Tout le répertoire",
 tl:[["Installation",3,"inst"],["Échauffement autonome",10,"ech",0],["Exercice 1",12,"ex",1],["Exercice 2",10,"ex",2],["Situation finale",25,"sf",3],["Bilan, rangement",10,"bil",4]],
 prepare:["AFL1 : séance au format réduit de la filière, avec mesures.","AFL2 : échauffement autonome, régulation d’après les FC (décision notée).","AFL2 : version personnelle des blocs = paramètres choisis et justifiés."],
 install:"Chacun installe son step à la hauteur de départ choisie.",
 fiches:[
  {titre:"Échauffement autonome en binôme", duree:10, cat:"Échauffement", dispo:"Quinconce. Fiche « échauffement en binôme ».",
   roles:"Les binômes se mènent l’un l’autre ; l’enseignant passe et coche.",
   deroul:["Phase 1 au sol (3 min), phase 2 sur le step (3 min), phase 3 blocs en version basse (3 min), phase 4 : 1 bloc au réglage de sa filière (1 min).","Le coach coche les 8 critères de la fiche."],
   crit:"Progressif, complet, terminé par le réglage de la filière.", reussite:"7 critères sur 8 cochés.",
   moins:"Suivre la routine de l’enseignant.", plus:"Ajouter 1 min de mobilisation articulaire.", schema:""},
  {titre:"Ma version personnelle des blocs", duree:12, cat:"Entraînement", dispo:"Quinconce. Fiche « version personnelle » + répertoire des 16 pas.",
   roles:"Chacun construit ; le binôme vérifie que chaque phrase garde 8 temps et le bon pied directeur.",
   deroul:["Pour chacun des 3 blocs : choisir les curseurs (H, B, P, A) selon sa filière.","Remplacer au plus 2 pas par des pas du répertoire de même durée et qui laissent le même pied libre (ex. talons à la place d’un genou, basique à la place d’un V step, kick ou side de l’échauffement à la place d’un tap up).","Tester son bloc 2 fois."],
   crit:"Filière A : propulsion et bras d’abord. Filière B : amplitude et bras, pas de saut.",
   reussite:"Fiche remplie pour les 3 blocs, blocs réalisés sans arrêt.",
   moins:"Ne changer que les curseurs, garder les pas.", plus:"Remplacer 2 pas et ajouter des bras dissociés.",
   schema:"curseurs"},
  {titre:"Régler son curseur : 2 × 2 min", duree:10, cat:"Entraînement", dispo:"Quinconce. Oxymètres.",
   roles:"Binômes : mesure croisée à chaque arrêt.",
   deroul:["2 min avec sa version personnelle → mesure.","En dessous de la zone : +1 curseur. Au-dessus : −1 curseur. Dedans : on garde.","Récupération 2 min, puis 2 min avec le nouveau réglage → mesure."],
   crit:"Un seul curseur modifié à la fois.", reussite:"2e mesure dans la zone.",
   moins:"L’enseignant propose le curseur à modifier.", plus:"Prédire la FC avant de la mesurer.",
   schema:"series:2,2"},
  {titre:"Première séance de filière : Pile dans la cible", duree:25, cat:"Situation finale", defi:"Pile dans la cible + Juste Pouls", dispo:"Quinconce, toute la classe pratique. Chrono filières (format S5). Musique commune 132 BPM.",
   roles:"Tous pratiquent. Pendant les récupérations, le binôme mesure, note et donne un conseil.",
   deroul:["Consignes et réglage du chrono (3 min).","Filière A : 3 × 4 min, récupération active 3 min (mambo au sol). Filière B : 2 × 8 min, récupération 2 min. Les deux durent 18 min.","Mesure à la fin de chaque série (A) ; à mi-série et en fin de série (B). Annonce Juste Pouls avant chaque mesure.","Pile dans la cible : centre de la zone (± 3) = 3 pts · dans la zone = 2 pts · à 5 pulsations près = 1 pt. Le binôme additionne ses points.","Retour rapide (4 min) : points du binôme, combien de mesures dans ma zone ?"],
   crit:"Continuité : on ne s’arrête que pour les mesures prévues.",
   reussite:"Au moins 2 mesures sur 3 (A) ou 3 sur 4 (B) dans la zone.",
   moins:"A : séries de 3 min. B : version très basse au sol pour les aptitudes partielles.", plus:"A : 1 série supplémentaire si FC de reprise sous 120.",
   schema:"filieres:s5"},
  {titre:"Bilan : décider pour la prochaine fois", duree:10, cat:"Bilan", dispo:"Assis, carnet. Rangement 3 min.",
   roles:"Écrit individuel, puis le binôme relit la décision.",
   deroul:["Ligne S5 : réglage (ex. H1 B2 P2 A1 = 6), FC de chaque mesure, ressenti, nombre de mesures dans la zone.","Décision pour S6 : quel curseur je change, pourquoi."],
   crit:"Décision appuyée sur un chiffre.", reussite:"Chaque carnet a une décision chiffrée.",
   moins:"Phrase à compléter : « J’étais … ma zone, donc je … ».", plus:"Prévoir aussi la durée de récupération.", schema:""}
 ]},
/* ============ S6 ============ */
{id:"S6", titre:"S’entraîner 2 : le coach lit l’effort",
 obj:"Apprendre à observer et conseiller un partenaire, et s’entraîner sous son regard.",
 bpm:"132", pas:"Version personnelle des blocs",
 tl:[["Installation",3,"inst"],["Échauffement autonome",10,"ech",0],["Exercice 1",10,"ex",1],["Exercice 2",7,"ex",2],["Situation finale",32,"sf",3],["Bilan, rangement",8,"bil",4]],
 prepare:["AFL3 : rôle de coach évalué (relevés fiables, conseils liés à la zone).","AFL1 : passage observé en conditions proches de l’épreuve.","AFL2 : régulation de S5 appliquée."],
 install:"Moitié des steps utilisés à chaque passage : un step sur deux reste libre pour laisser la place au coach.",
 fiches:[
  {titre:"Échauffement autonome en binôme", duree:10, cat:"Échauffement", dispo:"Quinconce. Fiche échauffement.",
   roles:"Binômes ; l’enseignant coche pour 6 élèves (évaluation de l’AFL2).",
   deroul:["4 phases de la fiche, la dernière au réglage décidé en S5."],
   crit:"Progressif, complet.", reussite:"8 critères sur 8.",
   moins:"Routine de l’enseignant.", plus:"Le binôme propose une variante de bras.", schema:""},
  {titre:"Former le coach", duree:10, cat:"Coopération", dispo:"L’enseignant et un élève démontrent, la classe observe avec la fiche coach.",
   roles:"Tous observateurs, puis essais en binôme (1 min chacun).",
   deroul:["Ce que le coach regarde : appuis (pied entier, silence), posture (gainage, regard), continuité (arrêts), réglage annoncé.","Ce qu’il fait à chaque arrêt : oxymètre dans les 5 s, lecture, ressenti demandé, conseil sous la forme « tu es … ta zone → change … ».","Essai : 1 min de bloc chacun, le coach remplit une ligne."],
   crit:"Un conseil = un constat + une action (jamais « c’est bien »).", reussite:"Une ligne de fiche coach remplie correctement par chacun.",
   moins:"Fiche avec cases à cocher seulement.", plus:"Le coach prévoit la FC avant de la mesurer.", schema:"binome"},
  {titre:"Révision des versions personnelles", duree:7, cat:"Mémorisation", dispo:"Quinconce.",
   roles:"Chacun révise ; le binôme souffle.",
   deroul:["Blocs 1, 2, 3 version personnelle, 1 fois chacun."],
   crit:"Les pas remplacés sont connus.", reussite:"3 blocs sans souffleur.",
   moins:"Reprendre les blocs imposés.", plus:"Enchaîner les 3 blocs sans transition marchée.", schema:""},
  {titre:"Passages coachés : 2 × 13 min, Pile dans la cible", duree:32, cat:"Situation finale", defi:"Pile dans la cible + pronostic du coach", dispo:"Moitié de la classe pratique, l’autre coache (schéma binôme). Chrono filières (format S6).",
   roles:"Pratiquant : sa séance. Coach : oxymètre, fiche coach, conseils pendant les récupérations. On échange au 2e passage.",
   deroul:["Passage 1 (13 min) : A = 3 × 3 min, récupération 2 min ; B = 13 min continues, mesures à 6 min 30 et 13 min.","Échange de rôles (3 min), dont 2 min de réactivation pour le nouveau pratiquant.","Passage 2 (13 min), même format.","Le coach marque les points Pile dans la cible de son pratiquant. Son pronostic à ± 5 % sur 2 séances = badge Coach.","Les coachs rendent la fiche à leur partenaire."],
   crit:"Le coach note la valeur lue, pas une estimation.",
   reussite:"Fiche coach complète (toutes les mesures, au moins 2 conseils).",
   moins:"B : 2 × 6 min avec 1 min de récupération.", plus:"A : 4 séries si la FC de reprise descend sous 120.",
   schema:"filieres:s6"},
  {titre:"Bilan croisé", duree:8, cat:"Bilan", dispo:"En binôme, carnet + fiche coach. Rangement 3 min.",
   roles:"Chacun recopie ses mesures depuis la fiche du coach.",
   deroul:["Ligne S6 du carnet : réglage, FC, mesures dans la zone, conseil reçu.","Décision pour S7."],
   crit:"Comparer avec S5 : progrès ou pas ?", reussite:"Décision chiffrée.",
   moins:"Phrase à compléter.", plus:"Expliquer l’écart entre le ressenti et la FC.", schema:""}
 ]},
/* ============ S7 ============ */
{id:"S7", titre:"Répétition générale au format de l’évaluation",
 obj:"Réaliser sa séance complète de 25 minutes, puis analyser l’écart entre ce qui était prévu et ce qui a été fait.",
 bpm:"132", pas:"Version personnelle",
 tl:[["Installation",3,"inst"],["Échauffement autonome",8,"ech",0],["Exercice 1",10,"ex",1],["Exercice 2",6,"ex",2],["Situation finale",27,"sf",3],["Analyse, bilan",16,"bil",4]],
 prepare:["AFL1 : format exact de l’épreuve (25 min).","AFL1 (analyser) : entraînement à l’analyse écrite.","AFL2 : plan de séance pour S8 rédigé à partir du carnet."],
 install:"Toute la classe pratique, placement habituel.",
 fiches:[
  {titre:"Échauffement autonome", duree:8, cat:"Échauffement", dispo:"Quinconce.",
   roles:"Chacun seul ; le binôme coche la fiche.",
   deroul:["4 phases, version courte (2 min chacune)."],
   crit:"Fin de l’échauffement au réglage de la filière.", reussite:"7 critères sur 8.",
   moins:"Routine de l’enseignant.", plus:"—", schema:""},
  {titre:"Écrire son plan de séance", duree:10, cat:"Conception", dispo:"Assis près du step, carnet.",
   roles:"Écrit individuel, relu par le binôme.",
   deroul:["Filière, format, réglage de départ pour chaque série, FC visée, ce que je fais si je sors de ma zone.","Le binôme vérifie que le plan est cohérent avec les décisions des séances 5 et 6."],
   crit:"Chaque réglage est justifié par une donnée du carnet.", reussite:"Plan complet.",
   moins:"Plan pré-rempli à compléter.", plus:"Prévoir un réglage différent pour la dernière série.", schema:""},
  {titre:"Dernier réglage : 2 × 2 min", duree:6, cat:"Entraînement", dispo:"Quinconce. Oxymètres.",
   roles:"Binômes : mesure croisée.",
   deroul:["2 min au réglage de départ → mesure → ajustement → 2 min → mesure."],
   crit:"Un seul curseur modifié.", reussite:"Dernière mesure dans la zone.",
   moins:"—", plus:"—", schema:"series:2,2"},
  {titre:"Séance complète : 25 min, Pile dans la cible", duree:27, cat:"Situation finale", dispo:"Toute la classe pratique. Chrono filières (format Évaluation). Musique commune 132 BPM.", defi:"Pile dans la cible + Juste Pouls",
   roles:"Tous pratiquent ; annonces, mesures et points en binôme pendant les récupérations.",
   deroul:["Consignes (2 min).","Points Pile dans la cible et Juste Pouls comme en S5 et S6 : c’est le dernier score du binôme avant l’évaluation.","A : 4 × 4 min, récupération active 3 min. B : 2 × 10 min, récupération active 5 min, mesure à 5 min (arrêt 15 s) et à 10 min.","Les deux filières finissent ensemble à 25 min."],
   crit:"Continuité, sécurité, zone.", reussite:"3 mesures sur 4 dans la zone.",
   moins:"A : séries de 3 min. B : récupération libre.", plus:"Bras dissociés sur un bloc.",
   schema:"filieres:eval"},
  {titre:"Analyser : prévu / réalisé", duree:16, cat:"Bilan", dispo:"Assis, carnet. Rangement 3 min.",
   roles:"Écrit individuel ; 5 élèves lisent leur analyse, la classe dit si elle est complète.",
   deroul:["Comparer plan et réalisation : mesures dans la zone, arrêts, réglages modifiés.","Expliquer les écarts : une cause, une preuve (FC, ressenti).","Dire ce que je change pour S8."],
   crit:"Analyse = constat chiffré + cause + régulation.", reussite:"Les 3 éléments sont présents.",
   moins:"Questions guidées.", plus:"Relier aux effets attendus de sa filière.", schema:""}
 ]},
/* ============ S8 ============ */
{id:"S8", titre:"Évaluation",
 obj:"Réaliser sa séance de filière (25 min) sous le regard de son coach, puis l’analyser.",
 bpm:"132", pas:"Version personnelle",
 tl:[["Installation",3,"inst"],["Échauffement autonome (évalué)",7,"ech",0],["Passage 1",25,"sf",1],["Échange + réactivation",5,"ex",2],["Passage 2",25,"sf",3],["Analyse écrite",5,"bil",4]],
 prepare:["AFL1 : produire (zone, continuité, sécurité, respect du plan) et analyser.","AFL2 : échauffement autonome et carnet.","AFL3 : fiabilité des relevés du coach et qualité des conseils."],
 install:"Un step sur deux utilisé à chaque passage. Groupe 1 = les élèves en première position dans leur binôme.",
 fiches:[
  {titre:"Échauffement autonome (évalué)", duree:7, cat:"Échauffement", dispo:"Toute la classe.",
   roles:"Chacun seul ; l’enseignant évalue l’AFL2 sur la fiche.",
   deroul:["Les 4 phases de la fiche, version courte."],
   crit:"Progressif, complet, fini au réglage de la filière.", reussite:"8 critères sur 8.",
   moins:"—", plus:"—", schema:""},
  {titre:"Passage 1", duree:25, cat:"Évaluation", dispo:"Moitié de la classe pratique, l’autre coache. Chrono filières (format Évaluation).",
   roles:"Pratiquant évalué (AFL1). Coach évalué (AFL3) : il remplit la fiche coach (FC, arrêts, réglages). L’enseignant observe sécurité, continuité et contrôle 1 mesure par élève.",
   deroul:["A : 4 × 4 min, récupération 3 min. B : 2 × 10 min, récupération 5 min, mesure à 5 et 10 min.","Le coach mesure dans les 5 s après chaque arrêt."],
   crit:"Voir la grille d’évaluation.", reussite:"—",
   moins:"Aménagements prévus pour les aptitudes partielles.", plus:"—",
   schema:"filieres:eval"},
  {titre:"Échange des rôles et réactivation", duree:5, cat:"Transition", dispo:"Les coachs passent sur les steps.",
   roles:"Nouveaux pratiquants : 3 min de réactivation (blocs version basse) ; nouveaux coachs : préparation de la fiche.",
   deroul:["Fiches coach rendues aux pratiquants du groupe 1.","Réactivation : blocs 1 et 2 version basse, puis 1 min au réglage de la filière."],
   crit:"On ne démarre pas froid.", reussite:"Groupe 2 prêt à 5 min.",
   moins:"—", plus:"—", schema:""},
  {titre:"Passage 2", duree:25, cat:"Évaluation", dispo:"Inverse du passage 1.",
   roles:"Inverse du passage 1.",
   deroul:["Même format."], crit:"Voir la grille d’évaluation.", reussite:"—",
   moins:"—", plus:"—", schema:"filieres:eval"},
  {titre:"Analyse écrite", duree:5, cat:"Évaluation", dispo:"Assis, carnet et fiche coach. Rangement après la sonnerie si nécessaire.",
   roles:"Écrit individuel (AFL1 analyser).",
   deroul:["Mesures dans la zone, écarts, causes, régulations faites pendant la séance, ce que je changerais."],
   crit:"Constat chiffré + cause + régulation.", reussite:"—",
   moins:"Questions guidées.", plus:"—", schema:""}
 ]}
];

/* ---------- Défis (à partir de S3) ---------- */
const DEFIS = [
 {nom:"Juste Pouls", seances:"S3 à S7", regle:"Avant chaque mesure, le pratiquant annonce la FC qu’il va atteindre ; le coach l’écrit avant l’effort.", points:"± 5 = 3 pts · ± 10 = 1 pt · au-delà = 0", pourquoi:"Se connaître : relier un réglage et une sensation à un chiffre (AFL2).", source:"Défi des 4 allures du carnet de demi-fond"},
 {nom:"Pile dans la cible", seances:"S5 à S7", regle:"Chaque mesure de la séance de filière est une flèche dans une cible : la zone.", points:"Centre de la zone (± 3) = 3 pts · dans la zone = 2 pts · à 5 pulsations près = 1 pt", pourquoi:"Récompenser la précision, jamais l’intensité.", source:"Défi par équipes, académie de Bordeaux (Liza Martin)"},
 {nom:"Badges", seances:"S3 à S8", regle:"Mémoire (3 blocs enchaînés seul, S4) · Endurant (12 min sans arrêt, S3) · Devin (3 annonces Juste Pouls à ± 5) · Régleur (2 séances de filière à 3 mesures sur 4 dans la zone) · Coach (pronostic à ± 5 % deux fois).", points:"Calculés et affichés dans le carnet numérique", pourquoi:"Rendre visibles les progrès de l’AFL2 et de l’AFL3.", source:"Escape game step, académie de Versailles"}
];

/* ---------- Banque de formes de travail ---------- */
const BANQUE = [
 {nom:"Continu", fil:"B", niv:"N1", format:"10 à 15 min sans arrêt, version basse", effet:"Endurance, régularité", remplace:"Séance B réduite"},
 {nom:"Intermittent court", fil:"A", niv:"N2", format:"6 × (1 min haute / 1 min mambo)", effet:"Monter vite dans la zone A", remplace:"Test des leviers (S2)"},
 {nom:"Intermittent long", fil:"A", niv:"N3", format:"4 × 4 min, récupération 3 min", effet:"Puissance aérobie : format de l’épreuve A", remplace:"—"},
 {nom:"Pyramide", fil:"A", niv:"N3", format:"2 - 3 - 4 - 3 - 2 min, récupération égale à la moitié de l’effort", effet:"Gérer des durées variables", remplace:"Intermittent long"},
 {nom:"Alternance de versions", fil:"B", niv:"N2", format:"12 min : 1 bloc version basse / 1 bloc version moyenne", effet:"Rester dans la zone B sans s’arrêter", remplace:"Continu"},
 {nom:"Défi continuité", fil:"B", niv:"N2", format:"Tenir 6, 8 puis 10 min sans erreur ni arrêt", effet:"Mémorisation et durée", remplace:"Enchaîner les blocs (S3)"},
 {nom:"Échelle de curseurs", fil:"A/B", niv:"N2", format:"5 × 2 min, +1 curseur à chaque série, mesure à chaque arrêt", effet:"Construire sa courbe réglage → FC", remplace:"Les curseurs (S4)"},
 {nom:"Séance coachée", fil:"A/B", niv:"N3", format:"Format filière, le coach impose un changement de curseur à chaque sortie de zone", effet:"Réguler en direct", remplace:"Passages coachés (S6)"}
];

/* ---------- Évaluation (seconde, /20) ---------- */
const EVAL = {
 afl1:[
  {el:"Produire · Zone de FC", pts:3, rep:["0 ou 1 mesure sur 4 dans la zone : 0","2 sur 4 : 1","3 sur 4 : 2","4 sur 4 : 3"]},
  {el:"Produire · Continuité", pts:2, rep:["Plus de 3 arrêts hors mesures : 0","2 ou 3 arrêts : 1","1 arrêt : 1,5","Aucun arrêt : 2"]},
  {el:"Produire · Sécurité et qualité d’exécution", pts:2, rep:["Mise en danger (descente avant, saut en descente) : 0","Pied souvent mal posé, bruit : 0,5","Quelques fautes en fin de série : 1,5","Pied entier, silence, gainage tout au long : 2"]},
  {el:"Produire · Respect du plan annoncé", pts:1, rep:["Plan absent ou non suivi : 0","Plan suivi en partie : 0,5","Plan suivi ou modifié de façon justifiée : 1"]},
  {el:"Analyser", pts:4, rep:["Aucun bilan : 0","Constat sans chiffres : 1","Constat chiffré et cause : 2,5","Constat chiffré, cause, régulations justifiées : 4"]}
 ],
 afl2:["Copieur-colleur : carnet incomplet, échauffement imité","Zappeur : carnet partiel, décisions sans lien avec les données","Sensitif : carnet complet, décisions appuyées sur la FC ou le ressenti","Concepteur : chaque séance influence la suivante, réglages justifiés"],
 afl3:["Coach absent : relevés non fiables, pas de conseil","Coach intermittent : relevés parfois fiables, encouragements","Coach disponible : relevés fiables, conseils sur l’exécution","Coach incitatif : conseils reliant FC, zone et réglage"],
 lien:[
  ["Zone de FC","S2, S3, S4, S5, S6, S7"],["Continuité","S1, S3, S5, S7"],["Sécurité","S1 (règles), toutes les séances"],["Respect du plan","S7"],["Analyser","S3, S5, S7"],["AFL2 · Échauffement autonome","S4, S5, S6, S7, S8"],["AFL2 · Carnet et régulation","S1 à S8"],["AFL3 · Coach","S4 (binômes), S6, S8"]
 ]
};

const SOURCES = [
 ["Académie de Grenoble · Fiche certificative CA5 Step (BGT)","https://eps-pedagogie.web.ac-grenoble.fr/sites/default/files/media-d7/media-fichiers/2022-07/bgt_fca_ca5_step_1.pdf"],
 ["Académie de Grenoble · CA5 Step, autre fiche","https://eps-pedagogie.web.ac-grenoble.fr/sites/default/files/media-d7/media-fichiers/2022-10/bgt_fca_ca5_step_autre_fiche.pdf"],
 ["Académie de Grenoble · Step, épreuve adaptée","https://eps-pedagogie.web.ac-grenoble.fr/sites/default/files/media-d7/media-fichiers/2022-11/2022_bgt_fca_ca5_step_adapte.pdf"],
 ["Académie de Strasbourg · CP5 Step, classe de 2de","https://pedagogie.ac-strasbourg.fr/fileadmin/pedagogie/eps/ressources/PEPS/CP5_Step.pdf"],
 ["Académie de Strasbourg · Référentiel Step, épreuves ponctuelles BAC GT 2025","https://pedagogie.ac-strasbourg.fr/fileadmin/pedagogie/eps/examens/EPT/EPT_depuis_2025/Referentiel_STEP_Epreuves_Ponctuelles_EPS_BAC_GT_2025.pdf"],
 ["Académie d’Orléans-Tours · Premier cycle de step vers un niveau 3","https://pedagogie.ac-orleans-tours.fr/documents/pdf/02_-_premier_cycle_de_step_vers_un_niveau_3.pdf"],
 ["Lycée É. Herriot (Lyon) · Carnet d’entraînement step","https://lycee-eherriot.etab.ac-lyon.fr/spip/IMG/pdf/carnet_entrainement_stept_terminale.pdf"],
 ["Académie de la Martinique · Step GT","https://site.ac-martinique.fr/eps/wp-content/uploads/sites/13/2020/09/STEP-GT-Seminaire.pdf"],
 ["Eduscol · Champ d’apprentissage 5","https://eduscol.education.fr/6300/realiser-une-activite-physique-pour-developper-ses-ressources-physiques-et-s-entretenir"]
];

/* ================== OUTIL ================== */

const pasById = id => PAS.find(p => p.id === id);

/* ---------- SVG ---------- */
function svgPas(p, w){
  const W = w || 200;
  const prof = !!p.profil;
  let s = `<svg viewBox="0 0 200 120" width="${W}" role="img" aria-label="Placement des pieds : ${esc(p.nom)}" class="svgpas">`;
  s += `<text x="4" y="9" class="sv-l">↑ côté sono</text>`;
  s += `<rect x="50" y="45" width="100" height="30" rx="4" class="sv-step"/>`;
  if(prof){ s += `<path d="M150 108 l18 0 m-6 -5 l6 5 l-6 5" class="sv-ar"/><text x="148" y="111" class="sv-l" text-anchor="end">regard</text>`; }
  else { s += `<path d="M176 112 l0 -16 m-5 6 l5 -6 l5 6" class="sv-ar"/><text x="171" y="118" class="sv-l" text-anchor="end">regard</text>`; }
  const map = {};
  p.pos.forEach(q => { const k = q[1]+q[2]+"_"+q[3]+"_"+(q[4]||""); (map[k] = map[k] || {f:q[1],x:q[2],y:q[3],m:q[4]||"",t:[]}).t.push(q[0]); });
  Object.values(map).forEach(o => {
    const col = o.f === "D" ? "var(--pD)" : "var(--pG)";
    if(o.m === "e") s += `<ellipse cx="${o.x}" cy="${o.y}" rx="5.5" ry="7.5" fill="none" stroke="${col}" stroke-width="1.6" stroke-dasharray="3 2"/>`;
    else if(o.m === "t") s += `<ellipse cx="${o.x}" cy="${o.y}" rx="5.5" ry="7.5" fill="var(--surface)" stroke="${col}" stroke-width="1.6"/>`;
    else s += `<ellipse cx="${o.x}" cy="${o.y}" rx="5.5" ry="7.5" fill="${col}"/>`;
    const lab = o.t.join("·");
    const fill = o.m ? col : "#fff";
    if(lab.length > 2){
      const right = o.f === "D";
      s += `<text x="${o.x + (right ? 8 : -8)}" y="${o.y+3}" text-anchor="${right ? "start" : "end"}" font-size="8" font-weight="700" fill="${col}">${lab}</text>`;
    } else s += `<text x="${o.x}" y="${o.y+3}" text-anchor="middle" font-size="${lab.length > 1 ? 6.5 : 8}" font-weight="700" fill="${fill}">${lab}</text>`;
  });
  s += `<g class="sv-l"><circle cx="12" cy="104" r="4" fill="var(--pD)"/><text x="19" y="107">D</text><circle cx="33" cy="104" r="4" fill="var(--pG)"/><text x="40" y="107">G</text>`;
  s += `<ellipse cx="12" cy="115" rx="3" ry="4" fill="none" stroke="currentColor" stroke-dasharray="2 1.5"/><text x="19" y="118">en l’air</text></g><g class="sv-l"><ellipse cx="104" cy="6" rx="3" ry="4" fill="none" stroke="currentColor"/><text x="110" y="9">touche sans poids</text></g>`;
  return s + `</svg>`;
}
function svgSalle(){
  let s = `<svg viewBox="0 0 320 210" class="svgw" role="img" aria-label="Disposition des 35 steps en quinconce">`;
  s += `<rect x="4" y="4" width="312" height="202" rx="6" class="sv-zone"/>`;
  s += `<rect x="130" y="10" width="60" height="16" rx="3" class="sv-prof"/><text x="160" y="21" text-anchor="middle" class="sv-lw">Prof + sono</text>`;
  for(let r=0;r<5;r++){ for(let c=0;c<7;c++){
    const x = 22 + c*40 + (r%2 ? 20 : 0), y = 46 + r*32;
    s += `<rect x="${x}" y="${y}" width="26" height="9" rx="2" class="sv-step"/>`;
    s += `<circle cx="${x+13}" cy="${y+17}" r="3.2" fill="var(--accent)"/>`;
  }}
  s += `<text x="160" y="200" text-anchor="middle" class="sv-l">5 rangées de 7 en quinconce = 35 steps · ≈ 15 m × 11 m · 1 m de vide autour de chaque step</text>`;
  s += `<path d="M300 46 l0 140" class="sv-dim"/><text x="306" y="120" class="sv-l" transform="rotate(90 306 120)">≈ 11 m</text>`;
  return s + `</svg>`;
}
function svgBinome(){
  let s = `<svg viewBox="0 0 320 150" class="svgw" role="img" aria-label="Organisation pratiquant et coach">`;
  s += `<rect x="130" y="6" width="60" height="14" rx="3" class="sv-prof"/><text x="160" y="16" text-anchor="middle" class="sv-lw">Chrono + sono</text>`;
  for(let r=0;r<3;r++){ for(let c=0;c<7;c++){
    const x = 18 + c*42, y = 36 + r*38, used = (c + r) % 2 === 0;
    s += `<rect x="${x}" y="${y}" width="28" height="9" rx="2" class="${used ? "sv-step" : "sv-step off"}"/>`;
    if(used){ s += `<circle cx="${x+14}" cy="${y+18}" r="4" fill="var(--pD)"/><circle cx="${x+34}" cy="${y+18}" r="4" fill="var(--pG)"/>`; }
  }}
  s += `<g class="sv-l"><circle cx="20" cy="146" r="4" fill="var(--pD)"/><text x="27" y="149">pratiquant</text><circle cx="90" cy="146" r="4" fill="var(--pG)"/><text x="97" y="149">coach (oxymètre + fiche)</text><rect x="210" y="142" width="16" height="6" class="sv-step off"/><text x="230" y="149">step libre</text></g>`;
  return s + `</svg>`;
}
function svgSeries(arr, rec){
  const r = rec === undefined ? 2 : rec;
  const total = arr.reduce((a,b)=>a+b,0) + r*(arr.length-1);
  const W = 300, sc = W/total;
  let x = 10, s = `<svg viewBox="0 0 320 60" class="svgw" role="img" aria-label="Séries d’effort">`;
  arr.forEach((d,i) => {
    s += `<rect x="${x}" y="16" width="${d*sc}" height="18" rx="3" fill="var(--accent)"/><text x="${x + d*sc/2}" y="28" text-anchor="middle" class="sv-lw">${d} min</text>`;
    s += `<path d="M${x+d*sc} 12 l0 26" stroke="var(--warn)" stroke-width="2"/><text x="${x+d*sc}" y="48" text-anchor="middle" class="sv-l">FC</text>`;
    x += d*sc;
    if(i < arr.length-1 && r){ s += `<rect x="${x}" y="22" width="${r*sc}" height="6" fill="var(--line)"/><text x="${x + r*sc/2}" y="12" text-anchor="middle" class="sv-l">récup ${r}</text>`; x += r*sc; }
  });
  return s + `</svg>`;
}
function svgFiliere(key){
  const F = FORMATS[key];
  const tot = k => F[k].e.reduce((a,b)=>a+b,0) + F[k].r*(F[k].e.length-1);
  const T = Math.max(tot("A"), tot("B")), sc = 260/T;
  let s = `<svg viewBox="0 0 320 96" class="svgw" role="img" aria-label="Formats des filières A et B">`;
  ["A","B"].forEach((k,j) => {
    const y = 18 + j*40; let x = 44;
    s += `<text x="6" y="${y+13}" class="sv-b" fill="${FILIERES[k].c}">${k}</text>`;
    F[k].e.forEach((d,i) => {
      s += `<rect x="${x}" y="${y}" width="${d*sc}" height="18" rx="3" fill="${FILIERES[k].c}"/><text x="${x+d*sc/2}" y="${y+13}" text-anchor="middle" class="sv-lw">${d}′</text>`;
      if(k === "B") s += `<path d="M${x+d*sc/2} ${y-3} l0 4" stroke="var(--warn)" stroke-width="2"/>`;
      s += `<path d="M${x+d*sc} ${y-3} l0 24" stroke="var(--warn)" stroke-width="2"/>`;
      x += d*sc;
      if(i < F[k].e.length-1 && F[k].r){ s += `<rect x="${x}" y="${y+6}" width="${F[k].r*sc}" height="6" fill="var(--line)"/>`; x += F[k].r*sc; }
    });
  });
  s += `<text x="44" y="94" class="sv-l">0</text><text x="304" y="94" text-anchor="end" class="sv-l">${T} min · trait orange = mesure FC</text>`;
  return s + `</svg>`;
}
function svgCurseurs(){
  let s = `<svg viewBox="0 0 320 120" class="svgw" role="img" aria-label="Curseurs d’intensité">`;
  const exA = {H:1,B:2,P:2,A:1}, exB = {H:0,B:1,P:0,A:2};
  CURSEURS.forEach((c,i) => {
    const y = 10 + i*24;
    s += `<text x="4" y="${y+12}" class="sv-l">${c.k} · ${c.nom}</text>`;
    for(let n=0;n<3;n++){
      const x = 130 + n*30;
      s += `<rect x="${x}" y="${y}" width="26" height="16" rx="3" class="sv-cell"/><text x="${x+13}" y="${y+12}" text-anchor="middle" class="sv-l">${n}</text>`;
    }
    s += `<circle cx="${130 + exA[c.k]*30 + 13}" cy="${y+8}" r="9" fill="none" stroke="${FILIERES.A.c}" stroke-width="2"/>`;
    s += `<circle cx="${130 + exB[c.k]*30 + 13}" cy="${y+8}" r="6" fill="none" stroke="${FILIERES.B.c}" stroke-width="2" stroke-dasharray="3 2"/>`;
  });
  s += `<text x="232" y="30" class="sv-l" fill="${FILIERES.A.c}">● A : H1 B2 P2 A1 = 6</text><text x="232" y="48" class="sv-l" fill="${FILIERES.B.c}">◌ B : H0 B1 P0 A2 = 3</text>`;
  return s + `</svg>`;
}
function htmlBloc(id){
  const b = BLOCS.find(x => x.id === id); let c = 0;
  return `<div class="bloc"><div class="bloc-h">${esc(b.nom)} <span class="muted">· départ : ${esc(b.depart)} · 32 temps</span></div><div class="phr">` +
    b.pas.map(p => { const a = c+1; c += p.t; return `<div class="ph" style="--fc:${FAMILLES[pasById(p.id).fam].c};flex:${p.t}"><b>${a}-${c}</b><span>${esc(p.nom)}</span><small>${p.t} temps</small></div>`; }).join("") +
    `</div><p class="small muted">${esc(b.fin)}</p></div>`;
}
function schema(spec){
  if(!spec) return "";
  const [t, a] = spec.split(":");
  if(t === "salle") return svgSalle();
  if(t === "binome") return svgBinome();
  if(t === "curseurs") return svgCurseurs();
  if(t === "series") return svgSeries(a.split(",").map(Number), a === "12" || a === "6,3" ? 1 : 2);
  if(t === "filieres") return svgFiliere(a);
  if(t === "pas") return `<div class="minipas">` + a.split(",").map(n => { const p = pasById(+n); return `<figure>${svgPas(p,140)}<figcaption>${p.id}. ${esc(p.nom)}</figcaption></figure>`; }).join("") + `</div>`;
  if(t === "bloc") return a.split(",").map(n => htmlBloc(+n)).join("");
  return "";
}

