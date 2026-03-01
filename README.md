# Portfolio Professionnel Angular

Un portfolio professionnel moderne, dynamique et attractif créé avec Angular.

##  Fonctionnalités

-  **Design moderne** avec animations fluides
-  **Responsive** - Adapté à tous les écrans
-  **Section photo/icône** dans le header et la hero section
-  **Sections complètes** :
  - Header avec navigation
  - Hero section avec photo de profil
  - À propos (parcours, expériences, formation)
  - Compétences (technologies maîtrisées)
  - Projets (portfolio de réalisations)
  - Contact (formulaire et informations)
-  **Animations** et transitions CSS
-  **Thème sombre** avec dégradés colorés
-  **Performance optimisée**

##  Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Angular CLI

### Installation des dépendances

```bash
npm install
```

ou

```bash
yarn install
```

### Installation d'Angular CLI (si nécessaire)

```bash
npm install -g @angular/cli
```

##  Démarrage

### Serveur de développement

```bash
ng serve
```

ou

```bash
npm start
```

Le portfolio sera accessible sur `http://localhost:4200`

### Build de production

```bash
ng build
```

Les fichiers compilés seront dans le dossier `dist/portfolio`

##  Structure du projet

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Header avec navigation et photo
│   │   │   ├── about/           # Section À propos
│   │   │   ├── skills/          # Section Compétences
│   │   │   ├── projects/        # Section Projets
│   │   │   └── contact/         # Section Contact
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/                  # Images et ressources
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

##  Ajouter de ma photo

1. Placez votre photo dans `src/assets/profile-photo.jpg`
2. Ou modifiez les chemins dans :
   - `header.component.html` (ligne avec `src="assets/profile-photo.jpg"`)
   - Le composant utilisera automatiquement une image par défaut si la photo n'est pas trouvée

### Format recommandé
- Format : JPG, PNG ou WebP
- Taille : 400x400px minimum (carré recommandé)
- Nom : `profile-photo.jpg` ou `profile-photo.png`

##  Personnalisation

### Couleurs

Modifiez les variables CSS dans `src/styles.css` :

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... */
}
```

### Contenu

Modifiez les données dans chaque composant :
- `about.component.ts` - Expériences et formation
- `skills.component.ts` - Compétences
- `projects.component.ts` - Projets
- `contact.component.ts` - Informations de contact

### Images de projets

Placez vos images de projets dans `src/assets/` et mettez à jour les chemins dans `projects.component.ts`

##  Responsive

Le portfolio est entièrement responsive et s'adapte à :
-  Mobile (< 768px)
-  Tablette (768px - 1024px)
-  Desktop (> 1024px)

##  Technologies utilisées

- Angular 17
- TypeScript
- CSS3 (Animations, Grid, Flexbox)
- HTML5

##  Notes

- Le formulaire de contact est actuellement en mode démo (affiche une alerte)
- Pour une intégration réelle, vous devrez configurer un service backend
- Les liens sociaux dans le header doivent être mis à jour avec vos vraies URLs

##  Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

##  Contribution

N'hésitez pas à personnaliser ce portfolio selon vos besoins !

---

**Créé en utilisant Angular**
