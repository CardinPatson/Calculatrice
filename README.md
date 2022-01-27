# Calculatrice en react

Vous devez utiliser un framework frontend (comme React par exemple) car cette
section concerne l'apprentissage des frameworks frontend.

## User Story 1:

Ma calculatrice doit contenir un élément cliquable contenant un =(signe égal)
avec un correspondant id="equals".

## User Story 2 :

Ma calculatrice doit contenir 10 éléments cliquables contenant chacun un nombre
de 0 à 9, avec les identifiants correspondants suivants : id="zero", id="one",
id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", et
id="nine".

## User Story 3 :

Ma calculatrice doit contenir 4 éléments cliquables contenant chacun l'un des 4
principaux opérateurs mathématiques avec les identifiants correspondants
suivants : id="add", id="subtract", id="multiply", id="divide".

## User Story 4:

Ma calculatrice doit contenir un élément cliquable contenant un .symbole (point
décimal) avec un correspondant id="decimal".

## User Story 5:

Ma calculatrice doit contenir un élément cliquable avec un id="clear".

## User Story 6:

Ma calculatrice doit contenir un élément pour afficher des valeurs avec un
id="display".

## User Story 7 :

A tout moment, appuyer sur le clearbouton efface les valeurs d'entrée et de
sortie, et ramène la calculatrice à son état initialisé ; 0 doit être affiché
dans l'élément avec l'ID de display.

## User Story 8:

Lorsque je saisis des nombres, je devrais pouvoir voir ma saisie dans l'élément
avec l'id de display.

## User Story 9:

Dans n'importe quel ordre, je devrais pouvoir additionner, soustraire,
multiplier et diviser une chaîne de nombres de n'importe quelle longueur, et
lorsque j'appuie sur **=**, le résultat correct doit être affiché dans l'élément
avec l'id de display.

## User Story 10 :

Lors de la saisie de nombres, ma calculatrice ne doit pas autoriser un nombre à
commencer par plusieurs zéros.

## User Story 11 :

lorsque l'on clique sur l'élément décimal, un **.** doit être ajouté à la valeur
actuellement affichée ; deux **.** en un ne devraient pas être acceptés.

## User Story 12 :

Je devrais être capable d'effectuer n'importe quelle opération ( +, -, \*, /)
sur des nombres contenant des points décimaux.

## User Story 13 :

Si 2 opérateurs ou plus sont entrés consécutivement, l'opération effectuée doit
être le dernier opérateur entré (à l'exception du -signe négatif ( )). Par
exemple, si **5 + \* 7 =** est entré, le résultat doit être **35**(c'est-à-dire
5 _ 7); si \*\*5 _ - 5 =** est entré, le résultat devrait être
**-25\*_(c'est-à-dire 5 _ (-5)).

## User Story 14 :

Appuyer sur un opérateur immédiatement après = devrait lancer un nouveau calcul
qui opère sur le résultat de l'évaluation précédente.

## User Story 15 :

Ma calculatrice devrait avoir plusieurs décimales de précision en ce qui
concerne l'arrondi (notez qu'il n'y a pas de norme exacte, mais vous devriez
être capable de gérer des calculs **2 / 7** avec une précision raisonnable
jusqu'à au moins 4 décimales).

**Remarque** sur la logique de la calculatrice : Il convient de noter qu'il
existe deux écoles de pensée principales sur la logique d'entrée de la
calculatrice : la logique d'exécution immédiate et la logique de formule . Notre
exemple utilise une logique de formule et observe l'ordre de priorité des
opérations, contrairement à l'exécution immédiate. L'un ou l'autre est
acceptable, mais veuillez noter que selon votre choix, votre calculatrice peut
donner des résultats différents pour certaines équations (voir l'exemple
ci-dessous). Tant que vos calculs peuvent être vérifiés par une autre
calculatrice de production, veuillez ne pas considérer cela comme un bogue.

EXEMPLE: 3 + 5 x 6 - 2 / 4 =

Logique d'exécution immédiate : 11.5 Logique de formule/expression : 32.5
