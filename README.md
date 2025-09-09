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


### Exercice 
Sur base du JSON `/src/data/product-data.json`, implementer le fonctionnement des routes « /product » avec les contraintes suivantes :
 
- La page avec la liste :
  - Le nom
  - Le prix
  - Un icone pour le type de produit (Nourriture ou non)

- La page detail : 
  - Le nom
  - La description
  - Le prix (avec et sans la tva)
  - Le type de produit

_Remarque : pour la route « /product/add » faire uniquement le visuel du formulaire 😉_