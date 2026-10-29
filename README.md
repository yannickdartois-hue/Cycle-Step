# Cycle Step · CA5 · Seconde · Lycée Georges Pompidou

Outil de cycle (enseignant) et carnet numérique (élèves) pour un cycle de step en champ d'apprentissage 5 : 8 séances de 70 min, 35 élèves, gymnase de type C.

**Carnet élève :** https://yannickdartois-hue.github.io/Carnet-Step-/ (bouton « Carnet élève » sur toutes les pages).

**Démo du carnet :** https://yannickdartois-hue.github.io/Carnet-Step-/?demo (classe fictive pour présenter l'appli ; bouton « Démo du carnet » en haut de l'écran de cours).

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

## Design commun (17/10/2026)
- `eps-design.css` et `eps-commun.js` : socle visuel partagé par tous les cycles (volley, badminton, demi-fond, tennis de table, step). Le fichier est identique dans chaque dépôt : en cas de modification, recopier la même version partout.
- Couleur de l'activité : ligne `<style>:root{--sport:…}</style>` dans `index.html`.
- **Mode gymnase** : bouton en haut à droite. Actif par défaut quand l'appli est ouverte depuis l'écran d'accueil de l'iPad.
- `index-old.html` : la version d'avant, gardée telle quelle (bandeau jaune « Ancienne version »).

## Organisation des pages (18/10/2026)
- `index.html` : **la version actuelle du cycle**, l'écran de cours (même famille que le cycle de volley-ball). Séances S1 à S8 dans le bandeau, déroulé ajustable (rallonger, zapper, remplacer), schémas des pas et des blocs, variables, défis, tempo.
- `cycle-step-old.html` : l'outil précédent, gardé par sécurité. Les 16 pas, blocs et curseurs, filières et FC, chrono, échauffements, carnet, défis, évaluation, banque et PDF y restent (bouton « Préparer »). C'est là qu'on marque la séance du jour.
- `step-donnees.js` : pas, blocs, filières, séances et schémas, partagés par les deux pages.
- `polices/` : polices embarquées pour le hors ligne (licence SIL OFL).

## Mise à jour du 29/10/2026
- Défis de coordination repris de l'ancienne appli STEP'A Pompidou : **Le canon** (S2, échauffement), **La ronde** et **L'annonce** (S3, échauffement, avec le schéma des 5 rondes), badge **Chef d'orchestre** (S4 à S7, meneurs de dos à leur rangée). Durées des séances inchangées (70 min).
- Liens vidéo de l'ancienne appli dans le répertoire des 16 pas de l'outil complet (écran seulement, pas dans les PDF).
- Bouton « Démo du carnet » ajouté par l'atelier (`mon-eps/atelier/ecran-de-cours/apps/activites.json`).
- PDF mis à jour : S2, S3, S4, défis, cycle complet.
