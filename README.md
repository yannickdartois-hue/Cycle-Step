# Cycle Step · CA5 · Seconde · Lycée Georges Pompidou

Outil de cycle (enseignant) et carnet numérique (élèves) pour un cycle de step en champ d'apprentissage 5 : 8 séances de 70 min, 35 élèves, gymnase de type C.

**Carnet élève :** https://yannickdartois-hue.github.io/Carnet-Step-/ (bouton « Carnet élève » sur toutes les pages).

## Contenu du dépôt
| Fichier | Rôle |
|---|---|
| `index.html` | l'outil de cycle : page d'accueil avec les 8 séances expliquées et leur PDF, bouton **Carnet élève** (lien vers https://yannickdartois-hue.github.io/Carnet-Step-/), séances détaillées (frise, fiches, schémas), répertoire des 16 pas, blocs et curseurs, filières et calculateur de FC, chrono des filières, échauffements, carnet papier, défis, évaluation, banque, différenciation, sources |
| `pdf/` | une fiche par séance (`2de-step-S1.pdf` … `S8`), le cycle complet, le répertoire des 16 pas, le carnet papier, la fiche coach, l'échauffement en binôme, la version personnelle des blocs, la table des zones de FC, les défis, la grille d'évaluation, la banque |
| `sw.js`, `manifest.webmanifest`, `icon-*.png` | fonctionnement hors ligne et installation de l'outil de cycle |

## Installation
1. Déposer **tout le contenu du zip à la racine** du dépôt (garder le dossier `pdf/`), puis *Settings → Pages → Deploy from a branch → main / (root)*.
2. iPad du professeur : ouvrir l'adresse du cycle en Wi-Fi, puis **Ajouter à l'écran d'accueil** (l'outil et les PDF restent disponibles hors ligne).
3. Tablettes des élèves : ouvrir https://yannickdartois-hue.github.io/Carnet-Step-/ en Wi-Fi, puis **Ajouter à l'écran d'accueil**.


## Mise à jour
Remplacer les fichiers, puis changer le numéro de version dans `sw.js` (`cycle-step-v1` → `v2`).
