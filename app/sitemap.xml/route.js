// app/sitemap.xml/route.js
const BASE_URL = "https://brice-eliasse.com";
export const revalidate = 3600;

// Tokens CMS
const TOKENS = {
  fr: "203377ab-1537-4b08-a5ec-93d090abc95e",
  en: "35e6fafc-82b3-421a-9e74-57d21a92450c",
};

// helpers
const locBase = (locale) => (locale === "en" ? `${BASE_URL}/en` : BASE_URL);
const apiList = (locale, qs = "") =>
  `https://beatrice.app/api/articles?token=${TOKENS[locale]}${qs}`;

async function getPaginationPages(locale) {
  try {
    const res = await fetch(apiList(locale, "&page=1&limit=9"), {
      next: { revalidate },
    });
    if (!res.ok) return 0;
    const { pagination } = await res.json();
    return pagination?.pages || 0;
  } catch {
    return 0;
  }
}

async function getSlugs(locale) {
  try {
    const res = await fetch(apiList(locale, "&onlyPublished=true&limit=9999"), {
      next: { revalidate },
    });
    if (!res.ok) return [];
    const { data = [] } = await res.json();
    return data.map((a) => ({
      slug: a.slug,
      updatedAt: a.updatedAt || a.publishedAt,
    }));
  } catch {
    return [];
  }
}

const urlNode = ({
  url,
  lastModified,
  changefreq = "weekly",
  priority = 0.8,
}) => {
  const iso = new Date(lastModified).toISOString();
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${iso}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

async function buildXml() {
  const now = new Date();
  const nodes = [];

  for (const locale of ["fr", "en"]) {
    const base = locBase(locale);

    // Accueil + index articles (FR sans /fr, EN avec /en)
    nodes.push(
      urlNode({
        url: `${base}/`,
        lastModified: now,
        changefreq: "monthly",
        priority: 0.8,
      })
    );
    nodes.push(
      urlNode({
        url: `${base}/articles`,
        lastModified: now,
        changefreq: "weekly",
        priority: 0.8,
      })
    );

    // Pagination
    const totalPages = await getPaginationPages(locale);
    for (let p = 2; p <= totalPages; p++) {
      nodes.push(
        urlNode({
          url: `${base}/articles/page/${p}`,
          lastModified: now,
          changefreq: "weekly",
          priority: 0.6,
        })
      );
    }

    // Articles
    const slugs = await getSlugs(locale);
    for (const { slug, updatedAt } of slugs) {
      nodes.push(
        urlNode({
          url: `${base}/articles/${slug}`,
          lastModified: updatedAt || now,
          changefreq: "weekly",
          priority: 0.8,
        })
      );
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${nodes.join("\n")}
</urlset>`;
}

export async function GET() {
  const xml = await buildXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
