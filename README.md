Mini projet réalisé pour appréhender NextJS. Permet de rechercher les des films via l'api OMDB (https://www.omdbapi.com/)

# Build le projet

Un dockerfile est mis à disposition

```
docker build -t <IMAGE_NAME> .
```

# Lancer le projet

```
docker run -e "NEXT_PUBLIC_OMDB_API_KEY=<API_KEY>" -p <PORT>:3000 -d <IMAGE_NAME>
```

# Commentaires

- Dans le dockerfile, le build est fait au moment du CMD afin de pouvoir récupérer la variable d'environnement NEXT_PUBLIC_OMDB_API_KEY du dockerfile. Ces dernières sont en effet définies au moment du build de l'application.
