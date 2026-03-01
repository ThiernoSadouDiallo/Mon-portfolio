# Instructions d'installation et d'utilisation

## Installation rapide

### 1. Installer Node.js
Téléchargez et installez Node.js depuis https://nodejs.org/ (version 18 ou supérieure)

### 2. Installer Angular CLI
```bash
npm install -g @angular/cli
```

### 3. Installer les dépendances
```bash
cd portfolio-angular
npm install
```

### 4. Lancer le serveur de développement
```bash
ng serve
```

Ouvrez votre navigateur sur `http://localhost:4200`

## Ajouter votre photo

1. **Préparez votre photo** :
   - Format : JPG ou PNG
   - Taille recommandée : 400x400px (carré)
   - Nommez-la : `profile-photo.jpg`

2. **Placez-la dans le dossier** :
   ```
   src/assets/profile-photo.jpg
   ```

3. **Le portfolio l'utilisera automatiquement** dans :
   - Le header (petite icône circulaire)
   - La section hero (grande photo avec effet de glow)

## Personnaliser le contenu

### Modifier vos informations personnelles

1. **Header** (`src/app/components/header/header.component.html`) :
   - Ligne 25 : Changez "Votre Nom"
   - Ligne 26 : Changez "Développeur Full Stack"
   - Ligne 27-29 : Modifiez la description

2. **À propos** (`src/app/components/about/about.component.ts`) :
   - Modifiez les expériences professionnelles
   - Modifiez la formation

3. **Compétences** (`src/app/components/skills/skills.component.ts`) :
   - Ajoutez/modifiez vos compétences
   - Ajustez les niveaux (0-100%)

4. **Projets** (`src/app/components/projects/projects.component.ts`) :
   - Ajoutez vos vrais projets
   - Modifiez les liens et descriptions

5. **Contact** (`src/app/components/contact/contact.component.ts`) :
   - Mettez à jour votre email
   - Mettez à jour votre téléphone
   - Modifiez la localisation

### Modifier les couleurs

Ouvrez `src/styles.css` et modifiez les variables :
```css
:root {
  --primary-color: #6366f1;    /* Couleur principale */
  --secondary-color: #8b5cf6;  /* Couleur secondaire */
  --accent-color: #ec4899;      /* Couleur d'accent */
}
```

## Build pour la production

```bash
ng build --configuration production
```

Les fichiers seront dans `dist/portfolio/`

## Déploiement

Vous pouvez déployer sur :
- **Netlify** : Glissez-déposez le dossier `dist/portfolio`
- **Vercel** : Connectez votre repo GitHub
- **GitHub Pages** : Utilisez `ng deploy --base-href=/repository-name/`
- **Firebase Hosting** : `firebase deploy`

## Support

Pour toute question, consultez la documentation Angular : https://angular.io/docs
