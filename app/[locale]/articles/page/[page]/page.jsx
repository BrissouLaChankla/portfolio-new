import { Suspense } from "react";

import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export const revalidate = 3600;

// 🗝️ Token par locale
const TOKENS = {
  fr: "203377ab-1537-4b08-a5ec-93d090abc95e",
  en: "2f8dd773-4ba0-4b3c-99ab-bb0a92a130b2",
};

function apiUrl(locale, page) {
  const token = TOKENS[locale];
  return `https://beatrice.app/api/articles?page=${page}&limit=9&token=${token}`;
}

export async function generateStaticParams() {
  const locales = Object.keys(TOKENS); // ["fr","en"]
  const params = [];

  // On calcule le nombre de pages pour CHAQUE locale avec son token
  for (const locale of locales) {
    try {
      const res = await fetch(apiUrl(locale, 1), { next: { revalidate } });
      if (!res.ok) continue;
      const { pagination } = await res.json();
      const pages = pagination?.pages || 0;
      for (let i = 1; i <= pages; i++) {
        params.push({ locale, page: String(i) });
      }
    } catch {
      // ignore et passe à la locale suivante
    }
  }
  return params;
}

export default async function BlogPage({ params }) {
  const { locale, page } = params;
  const currentPage = parseInt(page || "1", 10) || 1;

  // ✅ locale explicite
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  if (currentPage <= 0) {
    redirect(`/${locale}/articles`);
  }

  const response = await fetch(apiUrl(locale, currentPage), {
    next: { revalidate },
  });

  if (!response.ok) {
    console.error("Erreur API:", response.status);
    redirect(`/${locale}/articles`);
  }

  const { data, pagination, error } = await response.json();

  if (error || !pagination) {
    console.error("Erreur dans la réponse API:", error);
    redirect(`/${locale}/articles`);
  }

  const publishedArticles = (data || []).filter((a) => a.publishedAt);

  if (pagination.pages === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="section py-24">
          <h1 className="text-4xl">{t("noArticles")}</h1>
        </div>
      </div>
    );
  }

  if (currentPage > pagination.pages) {
    redirect(`/${locale}/articles/page/${pagination.pages}`);
  }

  return (
    <div className="container mx-auto p-6 max-w-screen-xl">
      <div className="lg:mt-20">
        <div className="flex items-center justify-between mb-8 relative">
          <span className="text-gray-600 text-sm absolute -top-5 left-0">
            ({currentPage}/{pagination.pages})
          </span>
          <h1 className="text-4xl font-bold">{t("allArticles")}</h1>
          <Pagination pagination={pagination} locale={locale} />
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
                href={`/${locale}/articles/${post.slug}`}
                key={post._id}
                className="bg-base-100 shadow-md rounded-lg overflow-hidden group border border-base-neutral bg-neutral shadow-sm"
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
                          locale === "fr" ? "fr-FR" : "en-US",
                          { year: "numeric", month: "long", day: "numeric" }
                        )}
                      </time>
                      <span className="opacity-85 text-primary font-medium group-hover:opacity-100 transition-opacity duration-200">
                        {t("readMore")}{" "}
                        <span className="-rotate-45 inline-block group-hover:rotate-0 transition-transform duration-200 font-bold">
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
          <Pagination pagination={pagination} locale={locale} />
        </div>
      </div>
    </div>
  );
}

const Pagination = ({ pagination, locale }) => {
  return (
    <div className="join mt-6">
      {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
        (pageNum) => (
          <Link
            key={pageNum}
            href={
              pageNum === 1
                ? `/${locale}/articles`
                : `/${locale}/articles/page/${pageNum}`
            }
            className={`join-item btn btn-sm btn-outline ${
              pagination.page === pageNum ? "btn-active" : ""
            }`}
          >
            {pageNum}
          </Link>
        )
      )}
    </div>
  );
};

export async function generateMetadata({ params }) {
  const { locale, page } = params;
  const pageNumber = parseInt(page || "1", 10);

  return {
    title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
    description: `Parcourez la page ${pageNumber} des articles de Brice Eliasse, développeur web freelance à Nice.`,
    alternates: {
      canonical: `https://brice-eliasse.com/${locale}/articles/page/${pageNumber}`,
    },
    openGraph: {
      title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
      description: `Découvrez les articles de Brice Eliasse. Page ${pageNumber}.`,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `Tous les articles - Page ${pageNumber} | Brice Eliasse`,
      description: `Articles de Brice Eliasse. Page ${pageNumber}.`,
    },
  };
}
