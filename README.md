# Les Petits Plats - Terminé le 11 juil 2022
## Scénario du projet 
Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.
L'entreprise a conscience que les sites offrant des recettes de cuisine sont nombreux, c'est pourquoi elle a pensé que l’un des éléments qui peuvent faire la différence sur leur site est la fluidité du moteur de recherche.
Ce qu'elle veut avant tout, c’est quelque chose de performant car leurs utilisateur-ices veulent une recherche rapide, presque instantanée !
Le backend n'étant pas encore en place, les données sont pour l'instant sous forme de fichier JSON

## Contraintes
### Technologies

- HTML, CSS, Bootstrap, JS
- priorisation sur l'algorythme, pas d'exigence concernant l'accessibilité et le responsive
- deux branches Git différentes pour deux versions d'implémentation différente de l'algorythme de recherche
  
### Règles de gestion
Ces points doivent absolument être respectés durant le développement :

1. La recherche doit pouvoir se faire via le champ principal ou via les tags
(ingrédients, ustensiles ou appareil)
2. La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur
dans la barre de recherche
3. La recherche s’actualise pour chaque nouveau caractère entré
4. La recherche principale affiche les premiers résultats le plus rapidement possible
5. Les champs ingrédients, ustensiles et appareil de la recherche avancée
proposent seulement les éléments restant dans les recettes présentes sur la
page
6. Les retours de recherche doivent être une intersection des résultats. Si l’on
ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les
recettes qui ont à la fois de la coco et du chocolat.
7. Comme pour le reste du site, le code HTML et CSS pour l’interface devra
passer avec succès le validateur W3C .
8. Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche

### Performance

- création d'un document de comparaison “fiche d’investigation de fonctionnalité”
- une version utilisant les boucles natives (while, for...)
- une version en programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map, reduce)
- faire un schéma, ou "algorigramme"
- utiliser un outil de comparaison de performance (Jsben.ch...)
