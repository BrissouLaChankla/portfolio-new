import { Suspense } from "react";
import Link from "next/link";

import Image from "next/image";

import { redirect } from "next/navigation";
export const revalidate = 3600;

export default async function BlogPage({ params }) {
  const searchParams = await params;
  const currentPage = parseInt(searchParams.page, 10) || 1;

  // Validation de la page courante
  if (currentPage <= 0) {
    redirect("/articles");
  }

  const response = await fetch(
    `https://beatrice.app/api/articles?page=${currentPage}&limit=9&token=203377ab-1537-4b08-a5ec-93d090abc95e`
  );

  if (!response.ok) {
    console.error("Erreur API:", response.status);
    redirect("/articles");
  }

  const { data, pagination, error } = await response.json();

  if (error || !pagination) {
    console.error("Erreur dans la réponse API:", error);
    redirect("/articles");
  }

  const publishedArticles = data.filter((article) => article.publishedAt);

  if (pagination.pages === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="section py-24">
          <h1 className="text-4xl">Aucun article trouvé</h1>
        </div>
      </div>
    );
  }

  if (currentPage > pagination.pages) {
    redirect(`/articles/page/${pagination.pages}`);
  }

  return (
    <div className="container mx-auto p-6 max-w-screen-xl">
      <div className=" lg:mt-20">
        <div className="flex items-center justify-between mb-8 relative">
          <span className="text-gray-600 text-sm absolute -top-5 left-0">
            ({currentPage}/{pagination.pages})
          </span>
          <h1 className="text-4xl font-bold">Tous mes articles </h1>
          <Pagination pagination={pagination} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense
            fallback={[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-full animate-pulse h-[468px] bg-base-100 rounded-lg"
              />
            ))}
          >
            {publishedArticles.map((post, i) => (
              <Link
                href={`/articles/${post.slug}`}
                key={post._id}
                className="bg-base-100 shadow-md rounded-lg   overflow-hidden group overflow-hidden rounded-lg border border-base-neutral bg-neutral shadow-sm"
              >
                <article className="flex flex-col h-full">
                  <figure className="h-48 bg-base-100">
                    <Image
                      src={post.image}
                      loading={i < 3 ? "eager" : "lazy"}
                      priority={i < 3}
                      width={390}
                      height={130}
                      alt={`Image de l'article ${post.title}`}
                      className="w-full h-full object-cover origin-bottom group-hover:scale-105 transition-all duration-300"
                    />
                  </figure>
                  <div className="p-6 grow flex flex-col justify-between">
                    <h2 className="font-semibold text-xl mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-400">
                      {post.meta_description}
                    </p>
                    <footer className="flex justify-between items-center mt-6 ">
                      <time
                        className="text-sm text-gray-500"
                        dateTime={post.publishedAt}
                      >
                        {new Date(post.publishedAt).toLocaleDateString(
                          "fr-FR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </time>
                      <span
                        href={`/articles/${post.slug}`}
                        className="opacity-85 text-primary font-medium group-hover:opacity-100 transition-opacity duration-200"
                      >
                        Lire la suite{" "}
                        <span className=" -rotate-45 inline-block group-hover:rotate-0 transition-transform duration-200 font-bold">
                          →
                        </span>
                      </span>
                    </footer>
                  </div>
                </article>
              </Link>
            ))}
          </Suspense>
        </div>
        <div className="flex justify-end mt-8">
          <Pagination pagination={pagination} />
        </div>
      </div>
    </div>
  );
}
const Pagination = ({ pagination }) => {
  return (
    <div className="join mt-6">
      {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
        (pageNum) => (
          <Link
            key={pageNum}
            href={pageNum === 1 ? "/articles" : `/articles/page/${pageNum}`}
            className={`join-item btn btn-sm btn-outline ${
              pagination.page === pageNum ? " btn-active" : ""
            }`}
          >
            {pageNum}
          </Link>
        )
      )}
    </div>
  );
};

export async function generateStaticParams() {
  try {
    // Récupérer le nombre total de pages depuis l'API
    const response = await fetch(
      `https://beatrice.app/api/articles?page=1&limit=9&token=203377ab-1537-4b08-a5ec-93d090abc95e`
    );

    if (!response.ok) {
      console.error(
        "Erreur API lors de la génération des paramètres statiques:",
        response.status
      );
      return [];
    }

    const { pagination } = await response.json();

    if (!pagination || pagination.pages === 0) {
      return [];
    }

    // Générer les paramètres pour toutes les pages
    const params = [];
    for (let i = 1; i <= pagination.pages; i++) {
      params.push({ page: i.toString() });
    }

    return params;
  } catch (error) {
    console.error(
      "Erreur lors de la génération des paramètres statiques:",
      error
    );
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { page } = await params;

  const pageNumber = parseInt(page, 10);
  return {
    title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
    description: `Parcourez la page ${pageNumber} des articles de Brice Eliasse, développeur web freelance à Nice. Conseils, actualités et astuces sur le développement web.`,
    alternates: {
      canonical: `https://brice-eliasse.com/articles/page/${pageNumber}`,
    },
    openGraph: {
      title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
      description: `Découvrez les articles de Brice Eliasse, développeur web freelance à Nice. Page ${pageNumber} : conseils, actualités et astuces sur le développement web.`,
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
      description: `Articles de Brice Eliasse, développeur web freelance à Nice. Page ${pageNumber}.`,
    },
  };
}
