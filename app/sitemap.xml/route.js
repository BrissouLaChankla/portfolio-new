// app/sitemap.xml/route.js
import { getProjects } from "../../data/projects.js";

const BASE_URL = "https://brice-eliasse.com";

// Tokens par langue (ton CMS headless)
const TOKENS = {
  fr: "203377ab-1537-4b08-a5ec-93d090abc95e",
  en: "f71a551a-499b-4934-96ca-df4b4d8c3dab",
};

// selon ta pagination (9 par page dans ton code)
const PAGE_SIZE = 9;

// petit fetch helper avec ISR
async function getJSON(url, revalidate = 3600) {
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Fetch failed: ${url} (${res.status})`);
  return res.json();
}

async function getLocalesMaps() {
  // pages d'index (pour calculer le nombre total de pages par locale)
  const [frPage1, enPage1] = await Promise.all([
    getJSON(
      `https://beatrice.app/api/articles?token=${TOKENS.fr}&page=1&limit=${PAGE_SIZE}`
    ),
    getJSON(
      `https://beatrice.app/api/articles?token=${TOKENS.en}&page=1&limit=${PAGE_SIZE}`
    ),
  ]);

  const frPages = frPage1?.pagination?.pages || 1;
  const enPages = enPage1?.pagination?.pages || 1;

  // slugs d’articles par locale
  const [frSlugs, enSlugs] = await Promise.all([
    getJSON(`https://beatrice.app/api/slugs?token=${TOKENS.fr}`),
    getJSON(`https://beatrice.app/api/slugs?token=${TOKENS.en}`),
  ]);

  return { frPages, enPages, frSlugs, enSlugs };
}

// Helpers d'URL (pas de trailing slash)
const U = {
  home: (loc) => `${BASE_URL}/${loc}`,
  articlesIndex: (loc) => `${BASE_URL}/${loc}/articles`,
  articlesPage: (loc, i) => `${BASE_URL}/${loc}/articles/page/${i}`,
  article: (loc, slug) => `${BASE_URL}/${loc}/articles/${slug}`,
  projectsIndex: (loc) => `${BASE_URL}/${loc}/projects`,
  project: (loc, slug) => `${BASE_URL}/${loc}/projects/${slug}`,
};

// Fabrique les alternates; x-default => FR si dispo, sinon EN
function makeAlternates(frHref, enHref) {
  const list = [];
  if (frHref) list.push({ hreflang: "fr", href: frHref });
  if (enHref) list.push({ hreflang: "en", href: enHref });
  list.push({ hreflang: "x-default", href: frHref || enHref });
  return list;
}

function buildUrlEntry(
  url,
  lastmod = new Date(),
  changefreq = "weekly",
  priority = 0.8,
  alternates = []
) {
  const altXml =
    alternates
      .map(
        (a) =>
          `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`
      )
      .join("") || "";
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${altXml}
  </url>`;
}

async function buildSitemap() {
  const map = [];

  // homes (x-default => /fr)
  {
    const fr = U.home("fr");
    const en = U.home("en");
    const alternates = makeAlternates(fr, en);
    map.push(buildUrlEntry(fr, new Date(), "weekly", 1.0, alternates));
    map.push(buildUrlEntry(en, new Date(), "weekly", 0.9, alternates));
  }

  // index d’articles
  {
    const fr = U.articlesIndex("fr");
    const en = U.articlesIndex("en");
    const alternates = makeAlternates(fr, en);
    map.push(buildUrlEntry(fr, new Date(), "daily", 0.9, alternates));
    map.push(buildUrlEntry(en, new Date(), "daily", 0.8, alternates));
  }

  // index de projets
  {
    const fr = U.projectsIndex("fr");
    const en = U.projectsIndex("en");
    const alternates = makeAlternates(fr, en);
    map.push(buildUrlEntry(fr, new Date(), "weekly", 0.9, alternates));
    map.push(buildUrlEntry(en, new Date(), "weekly", 0.8, alternates));
  }

  try {
    const { frPages, enPages, frSlugs, enSlugs } = await getLocalesMaps();

    // pagination FR (self + EN équivalente)
    for (let i = 2; i <= frPages; i++) {
      const fr = U.articlesPage("fr", i);
      const en = i <= enPages ? U.articlesPage("en", i) : null;
      const alternates = makeAlternates(fr, en);
      map.push(buildUrlEntry(fr, new Date(), "daily", 0.6, alternates));
    }

    // pagination EN (self + FR équivalente)
    for (let i = 2; i <= enPages; i++) {
      const en = U.articlesPage("en", i);
      const fr = i <= frPages ? U.articlesPage("fr", i) : null;
      const alternates = makeAlternates(fr, en);
      map.push(buildUrlEntry(en, new Date(), "daily", 0.5, alternates));
    }

    // appariement simple des articles par slug identique
    const enBySlug = new Map((enSlugs || []).map((s) => [s.slug, s]));
    const seenEn = new Set();

    // articles FR (ajoute alternate EN si slug identique existe)
    for (const s of frSlugs || []) {
      const frUrl = U.article("fr", s.slug);
      const enMatch = enBySlug.get(s.slug);
      const enUrl = enMatch ? U.article("en", enMatch.slug) : null;
      if (enMatch) seenEn.add(enMatch.slug);

      const alternates = makeAlternates(frUrl, enUrl);
      map.push(
        buildUrlEntry(
          frUrl,
          s.updatedAt || new Date(),
          "weekly",
          0.8,
          alternates
        )
      );

      if (enMatch) {
        map.push(
          buildUrlEntry(
            enUrl,
            enMatch.updatedAt || new Date(),
            "weekly",
            0.7,
            alternates
          )
        );
      }
    }

    // articles EN restants (sans équivalent FR)
    for (const s of enSlugs || []) {
      if (seenEn.has(s.slug)) continue;
      const enUrl = U.article("en", s.slug);
      const alternates = makeAlternates(null, enUrl); // x-default => EN faute de FR
      map.push(
        buildUrlEntry(
          enUrl,
          s.updatedAt || new Date(),
          "weekly",
          0.7,
          alternates
        )
      );
    }

    // projets FR et EN (même slug des deux côtés)
    const projects = getProjects();
    for (const project of projects) {
      const fr = U.project("fr", project.slug);
      const en = U.project("en", project.slug);
      const alternates = makeAlternates(fr, en);

      map.push(
        buildUrlEntry(fr, project.updatedAt || new Date(), "monthly", 0.8, alternates)
      );
      map.push(
        buildUrlEntry(en, project.updatedAt || new Date(), "monthly", 0.7, alternates)
      );
    }
  } catch (e) {
    // en cas de pépin API, on sort quand même le minimum vital
    console.error("Sitemap build error:", e);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${map.join("\n")}
</urlset>`;
}

export async function GET() {
  const xml = await buildSitemap();
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
