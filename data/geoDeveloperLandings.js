/**
 * Config des pages « développeur web » par zone (stats hero + maillage projets).
 * Clés : nice | alpes-maritimes | antibes | monaco | sophia-antipolis
 */

/**
 * Images hero (colonne de droite). Place les .webp dans public/geo/ avec exactement ces noms.
 */
export const GEO_HERO_WEBP = {
  nice: "/geo/nice.webp",
  "alpes-maritimes": "/geo/alpes-maritimes.webp",
  antibes: "/geo/antibes.webp",
  monaco: "/geo/monaco.webp",
  "sophia-antipolis": "/geo/sophia-antipolis.webp",
};

/**
 * Colonne visuelle à côté du bloc « à propos » (avatar convivial, ex. pouce levé).
 * Fichier : public/geo/about-aside.webp — remplace-le par ton illustration.
 */
export const GEO_ABOUT_ASIDE_WEBP = "/geo/brice-eliasse-avatar.webp";

const LABELS = {
  fr: {
    stack: "Technos",
    specialties: "Spécialités",
    approach: "Approche",
    goal: "Objectif",
    zone: "Zone",
  },
  en: {
    stack: "Stack",
    specialties: "Focus",
    approach: "Approach",
    goal: "Goal",
    zone: "Coverage",
  },
};

/** Valeurs par défaut (hors zone, souvent communes) */
const DEFAULT_ROW = {
  fr: {
    stack: "WordPress · Next.js · Webflow",
    specialties: "E-commerce · Site vitrine · Application mobile · Web app",
    approach: "Clair côté client, carré côté technique",
    goal: "Présence locale + trafic et acquisition",
  },
  en: {
    stack: "WordPress · Next.js · Webflow",
    specialties: "E‑commerce · Brochure sites · Mobile apps · Web apps",
    approach: "Clear for you, solid under the hood",
    goal: "Local presence + traffic & acquisition",
  },
};

/**
 * Par zone : `zone` obligatoire par locale ; autres champs optionnels pour surcharger.
 */
const GEO_ROWS = {
  nice: {
    fr: { zone: "Nice · Avignon · remote" },
    en: { zone: "Nice · Avignon · remote" },
  },
  "alpes-maritimes": {
    fr: { zone: "06 · Alpes-Maritimes · remote" },
    en: { zone: "Alpes-Maritimes (06) · remote" },
  },
  antibes: {
    fr: { zone: "Antibes · Juan-les-Pins · remote" },
    en: { zone: "Antibes · Juan-les-Pins · remote" },
  },
  monaco: {
    fr: { zone: "Monaco · Riviera · remote" },
    en: { zone: "Monaco · Riviera · remote" },
  },
  "sophia-antipolis": {
    fr: { zone: "Sophia Antipolis · plateau · remote" },
    en: { zone: "Sophia Antipolis · tech hub · remote" },
  },
};

/**
 * Slugs portfolio par page geo (ordre = ordre des cartes).
 * Référence (data/projects.js) :
 * beatrice, option-zero, lol-tracker, captimed, nekjeu, bananegames, g2, borders,
 * wabi-sabi-suites, cours, fuchs, krai, legends-fusion, mvp, pokedex, ronronnerie,
 * supdecours, quizbrain, trouve-mot, monacotraduction
 *
 * Règles :
 * - Seul `wabi-sabi-suites` est sur Nice + Antibes + Alpes-Maritimes à la fois.
 * - Entre Nice, Antibes, Monaco et Sophia : chaque autre slug apparaît au plus une fois
 *   (tu le déplaces d’un tableau à l’autre si tu veux changer la zone).
 * - Tu peux republier des slugs **uniquement** sur la page Alpes-Maritimes (aperçu 06).
 */
const LOCAL_PROJECT_SLUGS = {
  /** Référence Nice (ne pas dupliquer ces slugs sur Antibes / Monaco / Sophia) */
  nice: [
    "captimed",
    "bananegames",
    "wabi-sabi-suites",
    "beatrice",
    "option-zero",
    "g2",
    "ronronnerie",
  ],

  /** Aperçu 06 : un sous-ensemble + répétitions autorisées (Wabi + extraits des autres zones) */
  "alpes-maritimes": [
    "wabi-sabi-suites",
    "captimed",
    "beatrice",
    "option-zero",
    "g2",
    "monacotraduction",
    "mvp",
    "lol-tracker",
  ],

  /** Antibes : Wabi commun + missions propres au bassin (sans reprendre le bloc Nice) */
  antibes: [
    "wabi-sabi-suites",
    "cours",
    "supdecours",
    "trouve-mot",
  ],

  /** Monaco : uniquement des slugs non listés ailleurs (sauf alpes) */
  monaco: ["monacotraduction", "borders", "legends-fusion"],

  /** Sophia : produit / tooling (sans chevaucher Nice) */
  "sophia-antipolis": [
    "mvp",
    "lol-tracker",
    "fuchs",
    "nekjeu",
    "quizbrain",
    "pokedex",
    "krai",
  ],
};

const LOCAL_PROJECTS_COPY = {
  nice: {
    fr: {
      kicker: "Réalisations",
      title: "Projets autour de Nice & sur la Côte d’Azur",
      intro:
        "Voici quelques clients et missions sur ou près de Nice. Chaque fiche raconte le contexte, les technos et mon rôle.",
    },
    en: {
      kicker: "Work",
      title: "Work around Nice & the French Riviera",
      intro:
        "A few clients and projects on or near Nice. Each case study covers context, stack, and what I shipped.",
    },
  },
  "alpes-maritimes": {
    fr: {
      kicker: "Réalisations",
      title: "Projets dans les Alpes-Maritimes & au-delà",
      intro:
        "Exemples pour des acteurs du 06 et de France, avec des clients que j’ai accompagnés sur le territoire ou en remote.",
    },
    en: {
      kicker: "Work",
      title: "Projects across the Alpes-Maritimes & beyond",
      intro:
        "Sample work for teams in the 06 and France, including regional clients and remote collaboration.",
    },
  },
  antibes: {
    fr: {
      kicker: "Réalisations",
      title: "Projets autour d’Antibes & sur la Riviera",
      intro:
        "Quelques clients et livrables du bassin antibois et de la côte : vitrines, outils, apps quand le projet le demande.",
    },
    en: {
      kicker: "Work",
      title: "Projects around Antibes & the Riviera",
      intro:
        "Selected work for clients from Antibes, Juan-les-Pins, and the coast: sites, tools, apps when the project calls for it.",
    },
  },
  monaco: {
    fr: {
      kicker: "Réalisations",
      title: "Projets Monaco & Riviera",
      intro:
        "Missions pour la zone Monaco / Riviera : exigence de rendu, clarté et confiance, avec le même cadrage qu’ailleurs.",
    },
    en: {
      kicker: "Work",
      title: "Monaco & Riviera projects",
      intro:
        "Engagements around Monaco and the Riviera: high polish, clarity, and trust, with the same clear scoping as elsewhere.",
    },
  },
  "sophia-antipolis": {
    fr: {
      kicker: "Réalisations",
      title: "Projets Sophia Antipolis & plateau",
      intro:
        "Exemples pour des équipes près du plateau : produit, APIs et sites qu’on peut itérer sans surcomplication.",
    },
    en: {
      kicker: "Work",
      title: "Sophia Antipolis & tech hub",
      intro:
        "Examples for teams near the cluster: product work, APIs, and sites you can iterate without overkill.",
    },
  },
};

export const GEO_DEVELOPER_KEYS = Object.keys(GEO_ROWS);

export function getGeoLandingStatRows(geoKey, locale) {
  const loc = locale === "en" ? "en" : "fr";
  const labels = LABELS[loc];
  const defaults = DEFAULT_ROW[loc];
  const geo = GEO_ROWS[geoKey];
  if (!geo) return null;
  const row = { ...defaults, ...geo[loc] };
  return [
    { key: "stack", label: labels.stack, value: row.stack },
    { key: "specialties", label: labels.specialties, value: row.specialties },
    { key: "approach", label: labels.approach, value: row.approach },
    { key: "goal", label: labels.goal, value: row.goal },
    { key: "zone", label: labels.zone, value: row.zone },
  ];
}

export function getLocalProjectSlugsForGeo(geoKey) {
  return LOCAL_PROJECT_SLUGS[geoKey] || [];
}

export function getLocalProjectsSectionCopy(geoKey, locale) {
  const loc = locale === "en" ? "en" : "fr";
  return LOCAL_PROJECTS_COPY[geoKey]?.[loc] ?? null;
}
