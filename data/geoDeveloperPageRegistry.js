/**
 * Registre des pages « développeur web » géolocalisées (FR/EN slugs, SEO structuré).
 */

export const GEO_PAGE_ORDER = [
  "nice",
  "alpes-maritimes",
  "antibes",
  "monaco",
  "sophia-antipolis",
];

export const GEO_REGISTRY = {
  nice: {
    frSlug: "developpeur-web-nice",
    enSlug: "web-developer-nice",
    jsonLdLocality: "Nice",
    jsonLdAreaServed: ["Nice", "Alpes-Maritimes", "France"],
  },
  "alpes-maritimes": {
    frSlug: "developpeur-web-alpes-maritimes",
    enSlug: "web-developer-alpes-maritimes",
    jsonLdLocality: "Nice",
    jsonLdAreaServed: ["Alpes-Maritimes", "Nice", "France"],
  },
  antibes: {
    frSlug: "developpeur-web-antibes",
    enSlug: "web-developer-antibes",
    jsonLdLocality: "Antibes",
    jsonLdAreaServed: ["Antibes", "Alpes-Maritimes", "France"],
  },
  monaco: {
    frSlug: "developpeur-web-monaco",
    enSlug: "web-developer-monaco",
    jsonLdLocality: "Monaco",
    jsonLdAreaServed: ["Monaco", "France"],
  },
  "sophia-antipolis": {
    frSlug: "developpeur-web-sophia-antipolis",
    enSlug: "web-developer-sophia-antipolis",
    jsonLdLocality: "Valbonne",
    jsonLdAreaServed: ["Sophia Antipolis", "Alpes-Maritimes", "France"],
  },
};

/** Pour SelectLanguage : slug → { fr, en } */
export function getGeoSlugAlternatesMap() {
  const map = {};
  for (const def of Object.values(GEO_REGISTRY)) {
    map[def.frSlug] = { fr: def.frSlug, en: def.enSlug };
    map[def.enSlug] = { fr: def.frSlug, en: def.enSlug };
  }
  return map;
}

export function getGeoKeyFromFrSlug(frSlug) {
  const e = Object.entries(GEO_REGISTRY).find(([, v]) => v.frSlug === frSlug);
  return e ? e[0] : null;
}

export function getGeoKeyFromEnSlug(enSlug) {
  const e = Object.entries(GEO_REGISTRY).find(([, v]) => v.enSlug === enSlug);
  return e ? e[0] : null;
}

export function getRegistryForGeoKey(geoKey) {
  return GEO_REGISTRY[geoKey] || null;
}
