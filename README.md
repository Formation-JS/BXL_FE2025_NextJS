## Routing
- Pour créer des routes en Next.js, vous devez ajouter des fichiers nommé "page".
- Pour définir la route de la page, vous devez faire une structure de dossier
- Les fichiers "page" doivent contenir un composant exporté par defaut !

### Exemple
```
/         -> Page d'accueil
/demo     -> Page démo du routing
/demo/:id -> Page avec un segement dynamique
```

### Exercice
```
/product            -> Page avec la liste des produits
/product/detail/:id -> Page avec le detail d'un produit
/product/add        -> Page avec un formulaire  
/blog               -> Page avec les derniers actu du site
/blog/:slug         -> Page d'une actu
```