```markdown
# TP Individuel Docker - Docker Compose

## Description

Ce projet présente une application web complète composée de deux parties :

- **Backend** : Une API Node.js qui expose la route **`/quotes`** pour renvoyer aléatoirement l'une des trois citations prédéfinies.
- **Frontend** : Une interface utilisateur développée avec React.

L’ensemble de l’application est conteneurisé et orchestré avec Docker Compose.

## Structure du Projet

```plaintext
mon-projet/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css         // (style minimal)
│   │   ├── index.js
│   │   └── index.css       // (style minimal)
│   ├── package.json
│   └── Dockerfile
└── docker-compose.yml
```

## Installation et Exécution

1. **Prérequis**  
   - Installe [Docker Desktop](https://www.docker.com/products/docker-desktop) (Docker Compose est inclus).

2. **Démarrage du Projet**  
   Dans le répertoire racine, exécute la commande suivante :

   ```bash
   docker-compose up --build
   ```

   - **Backend** : Accessible sur [http://localhost:5000](http://localhost:5000)
   - **Frontend** : Accessible sur [http://localhost:3000](http://localhost:3000)

3. **Utilisation**  
   - La page d'accueil affiche une citation.
   - Cliquez sur **"Nouvelle citation"** pour rafraîchir l'affichage et obtenir une citation aléatoire via l'API.

## Questions de Réflexion

1. **Dockerfile vs docker-compose.yml**  
   *Réponse* : Le `Dockerfile` permet de construire une image, tandis que `docker-compose.yml` orchestre plusieurs conteneurs.

2. **Avantages de Séparer les Services**  
   *Réponse* : Une séparation qui facilite l’isolation, la scalabilité et la maintenance indépendante de chaque service.

3. **Docker Compose et Travail en Équipe**  
   *Réponse* : Il uniformise l’environnement de développement et simplifie le déploiement collaboratif.

4. **Utilité de Publier sur Docker Hub**  
   *Réponse* : Cela offre une solution de partage, de sauvegarde et de portabilité des images.

## Bonus

- **Extension** : Ajout possible d’une route `POST /quotes` pour créer de nouvelles citations.
- **Interface Améliorée** : Bouton **"Nouvelle citation"** dans le frontend pour rafraîchir dynamiquement l’affichage.

```
