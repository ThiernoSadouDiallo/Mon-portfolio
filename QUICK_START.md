# 🚀 Démarrage Rapide

## Installation en 3 étapes

### 1️⃣ Installer Node.js
Téléchargez depuis : https://nodejs.org/ (version 18+)

### 2️⃣ Installer Angular CLI
```bash
npm install -g @angular/cli
```

### 3️⃣ Lancer le portfolio

**Option A - Script automatique (Windows)**
```bash
start.bat
```

**Option B - Commandes manuelles**
```bash
npm install
ng serve
```

Puis ouvrez : **http://localhost:4200**

## 📸 Ajouter votre photo

1. Placez votre photo dans : `src/assets/profile-photo.jpg`
2. Format recommandé : 400x400px, JPG ou PNG
3. C'est tout ! Le portfolio l'utilisera automatiquement

## ✏️ Personnaliser

### Informations personnelles
- **Header** : `src/app/components/header/header.component.html`
- **À propos** : `src/app/components/about/about.component.ts`
- **Compétences** : `src/app/components/skills/skills.component.ts`
- **Projets** : `src/app/components/projects/projects.component.ts`
- **Contact** : `src/app/components/contact/contact.component.ts`

### Couleurs
Modifiez `src/styles.css` (lignes 8-14)

## 📦 Build pour production

```bash
ng build --configuration production
```

## 🆘 Problèmes courants

**Erreur "ng: command not found"**
→ Installez Angular CLI : `npm install -g @angular/cli`

**Erreur de port déjà utilisé**
→ Changez le port : `ng serve --port 4201`

**Erreur de dépendances**
→ Supprimez `node_modules` et `package-lock.json`, puis `npm install`

---

**Besoin d'aide ?** Consultez `README.md` ou `INSTRUCTIONS.md`
