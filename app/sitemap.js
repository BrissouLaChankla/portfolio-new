export default async function sitemap() {
  const baseUrl = "https://brice-eliasse.com";
  const currentDate = new Date();

  const staticPages = [
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

  let articles = [];

  // Récupérer les articles au moment du build
  try {
    const response = await fetch(
      "https://beatrice.app/api/slugs?token=203377ab-1537-4b08-a5ec-93d090abc95e",
      {
        // Forcer la récupération au build time
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const slugs = await response.json();
    articles = slugs.map((slug) => ({
      url: `${baseUrl}/articles/${slug}`,
      lastModified: new Date(slug.updatedAt || slug.createdAt || currentDate),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des articles pour le sitemap:",
      error
    );
    // En cas d'erreur, on retourne juste les pages statiques
  }

  return [...staticPages, ...articles];
}

// Fonction requise pour output: export
export async function generateStaticParams() {
  return [];
}
