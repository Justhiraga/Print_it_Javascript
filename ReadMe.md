# 🖨️ Print-It WebSite v.1

Une application web pour une imprimerie d'entreprise, construite avec **HTML**, **CSS** et **JavaScript vanilla**. Ce projet présente un carrousel interactif, une mise en page responsive et une expérience utilisateur optimisée.

![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?logo=github&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success)

## ✨ Fonctionnalités

- 🎠 **Carrousel dynamique** - Diaporama interactif avec navigation par flèches et points
- 📱 **Design responsive** - Interface adaptée à tous les appareils (mobile, tablette, desktop)
- ♿ **Accessibilité** - Balises sémantiques et textes alternatifs pour les images
- 📞 **Formulaires de contact** - Appels à l'action pour devis et demandes de contact
- 🎨 **Design professionnel** - Palette de couleurs cohérente et typographie soignée
- 🚀 **Performance** - Chargement rapide et optimisation des images
- 📍 **Informations pratiques** - Coordonnées, horaires, localisation de la boutique

## 📋 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du projet](#-structure-du-projet)
- [Technologies utilisées](#-technologies-utilisées)
- [Fonctionnalités détaillées](#-fonctionnalités-détaillées)
- [Guide de développement](#-guide-de-développement)
- [Déploiement](#-déploiement)
- [Amélioration futures](#-améliorations-futures)
- [Contribution](#-contribution)
- [Ressources utiles](#-ressources-utiles)

## 📖 À propos du projet

**Print-It** est le site web d'une imprimerie familiale spécialisée dans les besoins d'entreprises. Depuis près de 60 ans, cette imprimerie propose des services de :

- 📋 Impressions tous formats
- 🎯 Supports de communication
- 🎪 Produits événementiels
- 🏷️ Autocollants avec découpe laser
- 📚 Brochures et cartes de visite

Ce projet démonstratif met en avant :
- Une présentation claire des services
- Un carrousel de produits dynamique
- Un formulaire de contact efficace
- Une localisation précise de la boutique

## 🔧 Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur web local (optionnel, recommandé pour le développement)
- Un éditeur de code (VS Code, Sublime Text, etc.)

## 📥 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Justhiraga/Print_it_Javascript.git
cd Print_it_Javascript
```

### 2. Démarrer un serveur local (optionnel mais recommandé)

**Avec Python 3** :
```bash
python -m http.server 8000
```

**Avec Node.js (http-server)** :
```bash
npx http-server
```

**Avec VS Code** :
Utilisez l'extension "Live Server"

### 3. Accéder à l'application

Ouvrez votre navigateur et allez à :
- `http://localhost:8000` (Python)
- `http://localhost:8080` (http-server)
- Selon votre serveur choisi

## 🚀 Utilisation

### Navigation du carrousel

Le carrousel principal offre plusieurs façons de naviguer :

1. **Flèches de navigation**
   - Cliquez sur la flèche droite (→) pour l'image suivante
   - Cliquez sur la flèche gauche (←) pour l'image précédente
   - La navigation boucle automatiquement (après la dernière, on revient à la première)

2. **Points de navigation (dots)**
   - Les petits points sous l'image indiquent votre position
   - Le point blanc indique l'image affichée
   - Cliquez sur un point pour accéder rapidement à cette image

3. **Images disponibles**
   - Slide 1: Impressions tous formats en boutique et en ligne
   - Slide 2: Tirages haute définition grand format
   - Slide 3: Grand choix de couleurs CMJN et pantones
   - Slide 4: Autocollants avec découpe laser sur mesure

### Appels à l'action

- 📬 **Devis** - Demandez un devis par email
- 📧 **Nous écrire** - Contactez directement l'imprimerie
- 📞 **Appel téléphonique** - Numéro de contact fourni

## 📁 Structure du projet

```
Print_it_Javascript/
├── index.html              # Fichier principal HTML
├── ReadMe.md              # Documentation (ce fichier)
├── assets/
│   ├── script.js          # JavaScript du carrousel
│   ├── style.css          # Styles CSS
│   ├── images/
│   │   ├── logo.png                    # Logo Print-It
│   │   ├── arrow_left.png             # Flèche gauche
│   │   ├── arrow_right.png            # Flèche droite
│   │   ├── colors.jpg                 # Image section couleurs
│   │   ├── yellow-book.jpg            # Image section produits
│   │   ├── proximity-icon.png         # Icône Proximité
│   │   ├── quality-icon.png           # Icône Qualité
│   │   ├── speedy-icon.png            # Icône Rapidité
│   │   ├── magnifying-glass.jpg       # Image contact
│   │   ├── metro.png                  # Icône métro
│   │   └── slideshow/                 # Images du carrousel
│   │       ├── slide1.jpg
│   │       ├── slide2.jpg
│   │       ├── slide3.jpg
│   │       └── slide4.png
│   └── [autres fichiers]
└── [configuration]
```

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** - Structure sémantique moderne
- **CSS3** - Styles modernes avec Grid et Flexbox
- **JavaScript (Vanilla)** - Manipulation du DOM pour interactivité
- **Google Fonts** - Typographie (Roboto, Roboto Slab)

### Images et Assets
- **PNG** - Logos et icônes
- **JPG** - Photographies et images du carrousel
- **SVG compatible** - Support navigateur optimal

## 🎯 Fonctionnalités détaillées

### 1. Carrousel (Slideshow)

Le carrousel est géré entièrement en JavaScript vanilla :

```javascript
const slides = [
  {
    "image":"slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  // ... autres slides
];
```

**Mécanisme** :
- Les flèches changent le `currentSlide`
- Les images et taglines se mettent à jour dynamiquement
- Les points de navigation reflètent l'état actuel
- Navigation circulaire (après le dernier, revient au premier)

### 2. Navigation par flèches

- **Flèche droite** : avance d'une slide ou boucle au début
- **Flèche gauche** : recule d'une slide ou boucle à la fin
- Gestion dynamique des points actifs

### 3. Points de navigation

Les points sont générés dynamiquement :
```javascript
slides.forEach((_ ,index) => {
    let dot = document.createElement("div"); 
    dot.classList.add("dot");
    dot.id = index;
    if (index === 0) dot.classList.add("dot_selected");
    dotsContainer.appendChild(dot); 
});
```

### 4. Responsive Design

L'application s'adapte à tous les écrans :
- **Mobile** : Mise en page en colonne, touches larges
- **Tablette** : Disposition adaptée
- **Desktop** : Expérience optimale

### 5. Accessibilité

- Textes alternatifs descriptifs pour toutes les images
- Contrastes de couleur conformes aux standards WCAG
- Navigation au clavier supportée
- Structure HTML sémantique

## 💻 Guide de développement

### Modifier le contenu

#### Ajouter une nouvelle slide

1. Ajoutez l'objet dans le tableau `slides` de `script.js` :

```javascript
{
  "image":"slide5.jpg",
  "tagLine":"Votre message ici <span>avec texte en gras</span>"
}
```

2. Placez votre image dans `assets/images/slideshow/`

3. Sauvegardez et testez dans le navigateur

#### Modifier les textes

Tous les textes du site se trouvent dans `index.html`. Cherchez les sections :
- En-tête et navigation : `<header>`
- Carrousel : `#banner`
- À propos : `#about-us`
- Produits : `#products`
- Contact : `#contact`
- Pied de page : `<footer>`

#### Personnaliser les styles

Les styles se trouvent dans `assets/style.css`. Sections principales :
- Variables CSS pour les couleurs et espacements
- Styles du carrousel : `.banner`, `.arrow`, `.dot`
- Layout responsive avec media queries
- Animations et transitions

### Bonnes pratiques

1. **Code lisible** - Utilisez des noms explicites pour les variables
2. **Commentaires** - Documentez les sections importantes
3. **Performance** - Optimisez les images avant de les ajouter
4. **Tests navigateurs** - Testez sur plusieurs navigateurs
5. **Accessibilité** - Toujours fournir des textes alternatifs aux images

### Débogage

Pour déboguer le JavaScript :

1. Ouvrez les DevTools (F12 ou Cmd+Option+I)
2. Allez à l'onglet **Console**
3. Des `console.log()` affichent l'index du slide actuel et l'élément DOM
4. Vérifiez les erreurs en cas de dysfonctionnement

## 🚀 Déploiement

### Sur GitHub Pages

1. Assurez-vous que le repository est public
2. Allez dans **Settings** > **Pages**
3. Sélectionnez la branche `main` et le dossier `/root`
4. Votre site sera disponible à : `https://Justhiraga.github.io/Print_it_Javascript`

### Déploiement manuel

1. Générez un build (si nécessaire)
2. Uploadez les fichiers sur votre serveur
3. L'application est prête à l'emploi (aucune compilation nécessaire)

## 🎨 Amélioration futures

Voici les améliorations possibles :

- [ ] **Autoplay** - Faire défiler automatiquement le carrousel
- [ ] **Galerie d'images** - Ajouter une galerie complète des produits
- [ ] **Formulaire de contact** - Intégrer un formulaire fonctionnel
- [ ] **Modal** - Afficher les détails des produits en modal
- [ ] **Animations** - Ajouter des transitions fluides
- [ ] **Blog** - Section actualités et articles
- [ ] **E-commerce** - Ajouter un panier de commande
- [ ] **Multi-langue** - Support du français et anglais
- [ ] **SEO** - Optimisation pour les moteurs de recherche
- [ ] **Service Worker** - Support offline

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. **Fork** le repository
2. Créez une branche (`git checkout -b feature/AméliorationSuper`)
3. Committez vos changements (`git commit -m 'Ajouter une super amélioration'`)
4. Poussez vers la branche (`git push origin feature/AméliorationSuper`)
5. Ouvrez une **Pull Request**

### Directives de contribution

- Respectez la structure existante du code
- Commentez vos modifications
- Testez votre code sur plusieurs navigateurs
- Mettez à jour la documentation si nécessaire
- Gardez les messages de commit clairs et descriptifs

## 📚 Ressources utiles

### Documentation officielle
- [HTML5 - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Outils et librairies recommandés
- [VS Code](https://code.visualstudio.com/) - Éditeur de code
- [Google Fonts](https://fonts.google.com/) - Typographies
- [Tinypng](https://tinypng.com/) - Compression d'images
- [Canva](https://www.canva.com/) - Design graphique

### Apprentissage
- [W3Schools](https://www.w3schools.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)
- [Codecademy](https://www.codecademy.com/)

## 👤 Auteur

**Justhiraga**
- GitHub: [@Justhiraga](https://github.com/Justhiraga)
- Repository: [Print_it_Javascript](https://github.com/Justhiraga/Print_it_Javascript)

## 📄 License

Ce projet est sous license MIT. Consultez le fichier LICENSE pour plus de détails.

---

**Créé le**: 14 mars 2025  
**Dernière mise à jour**: 10 juin 2026

**Status du déploiement**: ✅ Actif sur GitHub Pages

**Informations de contact Print-It** :
- 📞 Téléphone: 02 12 34 56 78
- 📍 Adresse: 5, rue Yves Noël, 35200 Rennes
- 🚇 Station: Clémenceau
- 🕒 Horaires: Lun-Ven 9h30-18h30 | Sam 10h-13h et 14h-18h30

Fait avec ❤️ par Justhiraga
