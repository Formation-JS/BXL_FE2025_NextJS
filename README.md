# Next.js - FE2025@DigitalCity

## Initialisation du projet
Pour générer un projet, utiliser la commande `npm create next-app@latest` le terminal.
```
√ What is your project named? ... <Projet Name>
√ Would you like to use TypeScript? ... No / [Yes]
√ Which linter would you like to use? » ESLint
√ Would you like to use Tailwind CSS? ... No / [Yes]
√ Would you like your code inside a `src/` directory? ... No / [Yes]
√ Would you like to use App Router? (recommended) ... No / [Yes]
√ Would you like to use Turbopack? (recommended) ... No / [Yes]
√ Would you like to customize the import alias (`@/*` by default)? ... [No] / Yes
Creating a new Next.js app in C:\...
```

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

### Exercice 01
```
/product            -> Page avec la liste des produits
/product/detail/:id -> Page avec le detail d'un produit
/product/add        -> Page avec un formulaire  
/blog               -> Page avec les derniers actu du site
/blog/:slug         -> Page d'une actu
```

## Intéraction avec des données

### Donnée static depuis un ou plusieur fichier (JSON, md, ...)
Dans les composants (server), importer les données et utiliser les données dans les composants

### Exercice 02
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