async function getSitemap() {
  const baseUrl = "https://brice-eliasse.com";
  const currentDate = new Date();

  const map = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    const response = await fetch(
      "https://beatrice.app/api/slugs?token=203377ab-1537-4b08-a5ec-93d090abc95e",
      { next: { revalidate: 3600 } }
    );
    const slugs = await response.json();
    slugs.forEach((slug) => {
      map.push({
        url: `${baseUrl}/articles/${slug.slug}`,
        lastModified: new Date(slug.updatedAt),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  } catch (e) {
    console.error("Erreur lors de la récupération des slugs:", e);
    // En cas d'erreur, on ne fait rien, juste les pages statiques
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${map
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export async function GET() {
  return new Response(await getSitemap(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
