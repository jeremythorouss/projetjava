# Réservation de salles de réunion :star2: :
Travail realisé par :
-  Meini Xue
-  Ren Ying
-  Thorouss Jérémy

Ci dessous un récapitulatif du projet puis plus bas une description un peu plus pratique

Une application de réservation de salles.
Une section `publique` et une section `administration`.

N'importe quel utilisateur doit pouvoir réserver une salle pour une durée spécifique à la date et l'heure qu'il veut, ou bien dès que la salle est disponible.
Chaque salle de réunion a un dashboard où tout le monde peut voir les disponibilités et réserver la salle (on peut imaginer placer une tablette devant chaque salle avec ce dashboard).

Les fonctionnalités suivantes seront requises :

\*\*Panneau d'administration :memo: :

- Créer et éditer un membre: nom, e-mail, date de naissance, id
- Créer et éditer une salle : nom, photo, capacité (X personnes), équipement (écran, tableau, ...), id
- Réserver une salle à une date et heure spécifique avec des contraintes
- Voir quelles salles sont libres (filtre dans le page "list-reservesalle")
- Inviter des membres à la salle de réunion
- Envoyer des e-mails aux membres invités (avec une carte ICS pouvant être lier à un calendrier)

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/1.png)<br>
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/2.png)

\*\*Partie publique :flags: :

- Voir le calendrier d'une salle de réunion (filtre dans le page "list-reservesalle")
- Voir les membres d'une réunion
- Réserver une salle

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/3.png)

## For running the projet: ⬇️⬇️⬇️<br>

## Backend :spades:

1. Importe le projet dans IntelliJ IDEA en important le fichier "pom.xml" à la racine de ce répertoire<br>

2. Lance et init la bdd avant de run le projet<br>
   (besoin du coup de pouce ? [III. SetUp de la BDD via Docker](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#iii-setup-de-la-bdd-via-docker))<br>
   `docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 mariadb`

3. Connecte la bdd à IntelliJ via l'onglet Database épinglé à droite.<br>
   (besoin du coup de pouce ? [III.2. Afficher la BDD dans Intellij](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#2-afficher-la-bdd-dans-intellij))<br>

4. Lance les scripts sql contenus dans le dossier `/initdb` : Sélectionne les fichiers .sql, clique droit puis 'Run'.<br>
   (besoin du coup de pouce ? [III.3. Initialisation de la BDD](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#3-initialisation-de-la-bdd))

5. Lance l'application via IntelliJ, et vérifie qu'elle fonctionne ! (sur http://localhost:8080 par défaut).<br>
   (besoin du coup de pouce ? [IV. Run du projet (c'est bientôt fini promis !)](https://github.com/resourcepool/training-spring-boot/tree/readme-setup#iv-run-du-projet-cest-bientôt-fini-promis-))

onglet utilisateur, ajout, suppression, edition d'un utilisateur

onglet utilisateur, ajout, suppression, edition d'un utilisateur

## Frontend :diamonds:

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

[!] Attention: Better to use Chrome to see the application, Firefox block some function to show.

# Dans la pratique Installation :star2: :

[!] Attention:Toujours utiliser google Chrome 

[!] Attention: Toujours utiliser la branche master pour les clonages dans le cadre d'une évaluation, les lignes suivantes ont été uniquement realisées sur la branche master

## Frontend :diamonds:

utilisez la commande `ng serve`

## Backend :diamonds:
Lancez dockerhub en arrière plan 

rentrez dans la console cette ligne

docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 mariadb

Puis executez les deux fichiers de paramétrages de la base de données: TABLES et DEFAULT_ENTRIES

Puis executez le fichier APP

Puis allez sur le lien http://localhost:4200


# Deroule operationnel :star2: :

Nous allons maintenant passer à la présentation de l'application:

## exigence Créer et éditer un membre

Nous souhaitons tout d'abord ajouter un utilisateur 
Jean , né le 10/05/1995 d'addresse email jean@paul.com

Nous allons pour cela dans le menu admin puis gestion des membres

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/4.png)

Nous arrivons ensuite a une liste d'utilisateur qui a été générée précédemment

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/5.png)

Nous remplissons les informations en cliquant sur le boutons ajouter membre
Et nous arrivons à ceci

Sauf que finalement, on se dit que en fait ce n'est pas jean mais jeanne que nous voulions écrire 

Nous appuyons sur le boutons edit 

Nous pouvons ainsi modifier les informations  et appuyer sur ajouter à nouveau

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/6.png)

malheureusement, il se trouve que Jeanne doit quitter l'entreprise

Nous appuyons ensuite sur le bouton delete.

Nous arrivons à nouveau ici
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/2.png)

Mais il y a trop d'utilisateur en vue, nous souhaitons juste avoir le collaborateur "Harry Covert"
Pour cela, dans l'onglet recherche en bas, on tape "Harry"

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/7.png)

## exigence Créer et éditer un membre

Nous souhaitons ajouter une salle
Nous allons pour cela dans le menu admin puis gestions des salles

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/4.png)

Nous arrivons ici

On veut ajouter la salle: Harrold, de type salle1 , pouvant contenir 84 personnes et possédant une caméra

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/7.png)

Nous appuyons sur ajouter une salle

Nous remplissons les informations , puis appuyons sur ajouter
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/9.png)
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/10.png)

Il se trouve qu'il y a eu une erreur, et qu'en fait la salle avait un projecteur et non une caméra

On va dans edit puis on appuie sur ajouter
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/11.png)
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/12.png)

En fait, il y a un probleme, la salle est toujours en construction, on peut donc l'enelever avec le bouton delete

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/8.png)

## exigence reserver une salle

Nous souhaitons reserver la salle Harrold a 10h le  28/10/2022 jusqu'au  29/10/2022 pour Jeanne 

Nous cliquons sur reserver une salle et remplissons les informations
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/4.png)
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/13.png)

Il se trouve que nous souhaitons editer cette reservation et la faire commencer au  27/10/2022
Nous modifions donc les parametre avec le boutons edit

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/14.png)

Si la réunion est annulée , un simple pression de delete suffit

## exigence Voir quelles salles sont libres

Nous allons ici dans l'onglet "Voir quelle salle est libre"

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/4.png)

pour voir une salle particuliere dans le filtre en haut, on note le nom de la salle cherchée

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/15.png)

## exigence Inviter des membres à la salle de réunion
Nous allons ici dans l'onglet "inviter des membres"

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/4.png)

Nous allons ajouter un membre(Pierre) à la réunion dans la salle Harrold, nous allons sur le boutons edit, ecrivons les informations pui sur ajouter

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/16.png)

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/17.png)


## exigence Voir le calendrier d'une salle de réunion 
Aller dans la partie publique
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/3.png)

On veut voir par exemple l'emploi du temps de la salletest

On rentre dans le filtre 'salletest'

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/18.png)

On part du principe ici que la salle est toujours libre si elle n'est pas réservée

## exigence Voir membres d'une réunion

Aller dans la partie publique
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/3.png)

et sur la colonne "Name", nous avons les membres de chaque réservation

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/18.png)



## exigence Réserver une salle

Nous souhaitons reserver la salle Harrold a 10h le  28/10/2022 jusqu'au  29/10/2022 pour Jeanne

Nous cliquons sur reserver une salle et remplissons les informations
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/3.png)
![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/13.png)

Il se trouve que nous souhaitons editer cette reservation et la faire commencer au  27/10/2022
Nous modifions donc les parametre avec le boutons edit

![image](https://github.com/jeremythorouss/projetjava/blob/main/IMG/14.png)

Si la réunion est annulée , un simple pression de delete suffit