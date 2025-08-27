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

function buildUrlEntry(
  url,
  lastmod = new Date(),
  changefreq = "weekly",
  priority = 0.8
) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function buildSitemap() {
  const map = [];

  // homes
  map.push(buildUrlEntry(`${BASE_URL}/fr`, new Date(), "weekly", 1.0));
  map.push(buildUrlEntry(`${BASE_URL}/en`, new Date(), "weekly", 0.9));

  // index d’articles
  map.push(buildUrlEntry(`${BASE_URL}/fr/articles`, new Date(), "daily", 0.9));
  map.push(buildUrlEntry(`${BASE_URL}/en/articles`, new Date(), "daily", 0.8));

  // index de projets
  map.push(buildUrlEntry(`${BASE_URL}/fr/projects`, new Date(), "weekly", 0.9));
  map.push(buildUrlEntry(`${BASE_URL}/en/projects`, new Date(), "weekly", 0.8));

  try {
    const { frPages, enPages, frSlugs, enSlugs } = await getLocalesMaps();

    // pagination FR
    for (let i = 2; i <= frPages; i++) {
      map.push(
        buildUrlEntry(
          `${BASE_URL}/fr/articles/page/${i}`,
          new Date(),
          "daily",
          0.6
        )
      );
    }

    // pagination EN
    for (let i = 2; i <= enPages; i++) {
      map.push(
        buildUrlEntry(
          `${BASE_URL}/en/articles/page/${i}`,
          new Date(),
          "daily",
          0.5
        )
      );
    }

    // articles FR
    for (const slug of frSlugs || []) {
      map.push(
        buildUrlEntry(
          `${BASE_URL}/fr/articles/${slug.slug}`,
          slug.updatedAt || new Date(),
          "weekly",
          0.8
        )
      );
    }

    // articles EN
    for (const slug of enSlugs || []) {
      map.push(
        buildUrlEntry(
          `${BASE_URL}/en/articles/${slug.slug}`,
          slug.updatedAt || new Date(),
          "weekly",
          0.7
        )
      );
    }

    // projets FR et EN
    const projects = getProjects();
    for (const project of projects) {
      // projet FR
      map.push(
        buildUrlEntry(
          `${BASE_URL}/fr/projects/${project.slug}`,
          new Date(),
          "monthly",
          0.8
        )
      );
      // projet EN
      map.push(
        buildUrlEntry(
          `${BASE_URL}/en/projects/${project.slug}`,
          new Date(),
          "monthly",
          0.7
        )
      );
    }
  } catch (e) {
    // en cas de pépin API, on sort quand même le minimum vital
    console.error("Sitemap build error:", e);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${map.join("\n")}
</urlset>`;
}

export async function GET() {
  const xml = await buildSitemap();
  return new Response(xml, {
    headers: { "Content-Type": "text/xml; charset=utf-8" },
  });
}
