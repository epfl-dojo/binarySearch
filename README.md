# Binary Search

## Intrudction

"Binary Search" est un algorithm the recherche de valeur dans un tableau en informatique.

![](./BinaryTree.jpg)

Propriété d'un arbare binaire :
- contient 1, 2, ou 0 noeud.
- Depuis chaque noeud les noeuds se trouvont à gauche son plus petit et à droite plus grand.
- Le temps de recherche dépend de la hauteur de l'arbre autrement dit : `O(h)` si celle-ci est bien organiser. Voir [Time complexity](https://en.wikipedia.org/wiki/Time_complexity)

## But

Le but est donc sur la base des infomations ci-dessus et de la structure ci-dessous rédiger un programme qui fait des binarySearch

```javascript
const head: BNode = {
    value: 10,
    left: {
        value: 8,
        left: {
            value: 3,
            right: null,
            left: {
                value: 1,
                right: null,
                left: null
            }
        },
        right: {
            value: 9,
            right: null,
            left: null,
        }
    },
    right: {
        value: 12,
        left: {
            value: 11,
            left: null,
            right: null,
        },
        right: {
            value: 15,
            left: {
                value: 14,
                left: {
                    value: 13,
                    left: null,
                    right: null,
                },
                right: null
            },
            right: null,
        }
    }
};

```

## Crédits

Toutes ces informations viennent principalement de la [vidéo](https://www.youtube.com/watch?v=1CRkRdDT4cA) de [ThePrimagen](https://github.com/ThePrimeagen)
