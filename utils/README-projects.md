# Structure de données des projets

Ce fichier explique comment utiliser la structure de données centralisée pour les projets.

## Structure d'un projet

Chaque projet contient les propriétés suivantes :

```javascript
{
  slug: "nom-du-projet",           // Identifiant unique du projet
  name: "Nom du Projet",          // Nom affiché du projet
  categories: ["Cat1", "Cat2"],   // Tableau des catégories
  featured_img: "/path/to/img.svg", // Image principale du projet
  long_description: "...",        // Description détaillée
  mission: "...",                 // Mission du projet
  stacks: ["Tech1", "Tech2"],     // Technologies utilisées
  type: "Side Project",           // Type de projet
  link: "https://...",           // Lien vers le projet
  mockups: ["/path1.png", "/path2.png"] // Images des mockups
}
```

## Fonctions utilitaires disponibles

### Récupération de projets

```javascript
import {
  getProjectBySlug,
  getProjectsByCategory,
  getProjectsByType,
  getProjectsByStack,
} from "@/utils/projects.js";

// Récupérer un projet par son slug
const project = getProjectBySlug("beatrice");

// Récupérer tous les projets d'une catégorie
const gamingProjects = getProjectsByCategory("Gaming");

// Récupérer tous les projets d'un type
const freelanceProjects = getProjectsByType("Freelance");

// Récupérer tous les projets utilisant une technologie
const nextjsProjects = getProjectsByStack("NextJS");
```

### Récupération des listes

```javascript
import {
  getAllCategories,
  getAllStacks,
  getAllTypes,
} from "@/utils/projects.js";

// Récupérer toutes les catégories disponibles
const categories = getAllCategories();

// Récupérer toutes les technologies utilisées
const stacks = getAllStacks();

// Récupérer tous les types de projets
const types = getAllTypes();
```

### Filtrage avancé

```javascript
import { projectsData } from "@/utils/projects.js";

// Filtrer avec plusieurs critères
const filteredProjects = projectsData.filter(
  (project) =>
    project.type === "Side Project" &&
    project.stacks.includes("NextJS") &&
    project.categories.includes("Gaming")
);
```

## Utilisation dans les composants React

### Dans un composant simple

```javascript
import { projectsData } from "@/utils/projects.js";

export default function ProjectsList() {
  return (
    <div>
      {projectsData.map((project) => (
        <div key={project.slug}>
          <h3>{project.name}</h3>
          <p>{project.long_description}</p>
          <div>
            {project.stacks.map((stack) => (
              <span key={stack}>{stack}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Dans une page Next.js avec paramètres dynamiques

```javascript
import { getProjectBySlug, generateStaticParams } from "@/utils/projects.js";
import { notFound } from "next/navigation";

// Générer les paramètres statiques
export async function generateStaticParams() {
  return generateStaticParams();
}

// Page du projet
export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.long_description}</p>
      {/* ... reste du contenu */}
    </div>
  );
}
```

## Ajouter un nouveau projet

Pour ajouter un nouveau projet, modifiez le fichier `utils/projects.js` :

1. Ajoutez un nouvel objet dans le tableau `projectsData`
2. Assurez-vous que le `slug` est unique
3. Remplissez toutes les propriétés requises
4. Ajoutez les images correspondantes dans le dossier `public/projects/`

Exemple :

```javascript
{
  slug: "mon-nouveau-projet",
  name: "Mon Nouveau Projet",
  categories: ["Web Development", "React"],
  featured_img: "/projects/mon-nouveau-projet.svg",
  long_description: "Description détaillée du projet...",
  mission: "Mission du projet",
  stacks: ["React", "NextJS", "Tailwind"],
  type: "Side Project",
  link: "https://mon-projet.com",
  mockups: [
    "/projects/mockups/mon-projet-1.png",
    "/projects/mockups/mon-projet-2.png"
  ]
}
```

## Types de projets disponibles

- `Side Project` : Projets personnels
- `Freelance` : Projets clients
- `Educational` : Projets éducatifs
- `Learning` : Projets d'apprentissage

## Catégories disponibles

- `AI` : Intelligence artificielle
- `Gaming` : Jeux vidéo
- `Web Development` : Développement web
- `Mobile App` : Applications mobiles
- `Education` : Éducation
- `SEO` : Optimisation pour les moteurs de recherche
- `CMS` : Systèmes de gestion de contenu
- `API` : Interfaces de programmation
- `Analytics` : Analyse de données
- `E-commerce` : Commerce électronique
- `Healthcare` : Santé
- `Music` : Musique
- `Social Media` : Réseaux sociaux
- `Translation` : Traduction
- `WordPress` : WordPress
- `Laravel` : Laravel
- `NextJS` : Next.js
- `React Native` : React Native
- `VueJS` : Vue.js
- `VanillaJS` : JavaScript vanilla
- `Bootstrap` : Bootstrap
- `Tailwind` : Tailwind CSS
- `DaisyUI` : DaisyUI
- `Express` : Express.js
- `MongoDB` : MongoDB
- `MySQL` : MySQL
- `SocketIO` : Socket.IO
- `ChartJS` : Chart.js
- `Puppeteer` : Puppeteer
- `Stripe` : Stripe
- `Clerk` : Clerk
- `Zustand` : Zustand
- `PhotoRoom` : PhotoRoom
- `Aceternity UI` : Aceternity UI
- `TinyMCE` : TinyMCE
- `Elementor` : Elementor
- `jQuery` : jQuery
- `PolyLang` : Polylang

## Avantages de cette approche

1. **Centralisation** : Toutes les données des projets sont dans un seul fichier
2. **Cohérence** : Structure uniforme pour tous les projets
3. **Maintenabilité** : Facile à modifier et à étendre
4. **Réutilisabilité** : Fonctions utilitaires pour différents cas d'usage
5. **Performance** : Génération statique des pages avec Next.js
6. **Flexibilité** : Filtrage et recherche faciles
7. **Évolutivité** : Facile d'ajouter de nouveaux champs ou propriétés
