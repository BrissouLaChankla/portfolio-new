import { notFound } from "next/navigation";
import Link from "next/link";
// import { getAllArticles } from "@/actions/blog";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
// import parseWithShortcodes from "@/lib/parseWithShortcodes";
import { getReadingTime, getPublishedAt } from "@/utils/blog";
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await fetch(
    `https://beatrice.app/api/articles?token=203377ab-1537-4b08-a5ec-93d090abc95e`
  );
  const { data } = await articles.json();
  return data.map((article) => ({ slug: article.slug }));
}

export default async function Article({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://beatrice.app/api/articles/${slug}?token=203377ab-1537-4b08-a5ec-93d090abc95e`
  );
  const { article, ok } = await response.json();

  if (!ok || !article?.publishedAt) {
    return notFound();
  }

  // featured articles
  const featuredArticlesResponse = await fetch(
    `https://beatrice.app/api/articles?limit=3&onlyPublished=true${
      article.tags && article.tags.length > 0 ? `&tag=${article.tags[0]}` : ""
    }&excludeSlug=${slug}&token=203377ab-1537-4b08-a5ec-93d090abc95e`
  );
  const { data: featuredArticles } = await featuredArticlesResponse.json();

  const faqJsonLd = createFaqJsonLd(article.faq);
  const breadcrumbJsonLd = createBreadcrumbJsonLd(article.title, article.slug);

  return (
    <div className="grid grid-cols-12 max-w-6xl mx-auto gap-6 max-w-screen-xl">
      <div className=" p-8 md:p-14 markdown col-span-12 lg:col-span-9 bg-base-100">
        <nav
          aria-label="Fil d'Ariane"
          className="mb-4 text-gray-500 flex text-xs -translate-y-4"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/"
              className="!no-underline !text-primary"
              itemProp="item"
            >
              <span itemProp="name">Accueil</span>
            </Link>
            <meta itemProp="position" content="1" />
          </div>
          <span className="mx-2">{">"}</span>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/articles"
              className="!no-underline !text-primary"
              itemProp="item"
            >
              <span itemProp="name">Articles</span>
            </Link>
            <meta itemProp="position" content="2" />
          </div>
          <span className="mx-2">{">"}</span>
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span aria-current="page" itemProp="name" className="line-clamp-1">
              {article.title}
            </span>
            <meta itemProp="position" content="3" />
          </div>
        </nav>

        <article
          className="max-w-4xl mx-auto"
          itemScope
          itemType="https://schema.org/Article"
        >
          <header className="mb-6">
            <h1
              itemProp="headline "
              className="text-4xl font-semibold leading-tight mt-3"
            >
              {article.title}
            </h1>
            <div className="text-xs flex items-center justify-between my-6 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                {/* <Link
                  href={`/auteurs/${author.slug}`}
                  className="flex items-center gap-2 !text-gray-800 hover:!text-primary-500 !no-underline group"
                >
                  <UserIcon className="size-4" />
                  <span
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span
                      itemProp="name"
                      className="!text-black group-hover:!text-primary-500"
                    >
                      {author.name}
                    </span>
                  </span>
                </Link> */}
                <Image
                  src="/avatar/full.webp"
                  height={25}
                  width={25}
                  className=" rounded-full h-10 w-10 border-primary object-cover"
                  alt="Avatar de Brice Eliasse"
                />
                <span className="text-sm font-semibold ">Brice Eliasse</span>

                <span aria-hidden="true">·</span>
                <time
                  dateTime={article.publishedAt}
                  itemProp="datePublished"
                  className="!text-gray-500"
                >
                  {getPublishedAt(article.publishedAt)}
                </time>
                <span aria-hidden="true">·</span>
                <span itemProp="timeRequired" className="!text-gray-500">
                  {getReadingTime(article.content)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {article.tags &&
                  article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="border border-base-content/20  rounded-full px-3 py-1 text-xs text-base-content/80 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </header>

          <figure className="mb-12">
            <Image
              src={article.image}
              height={256}
              width={784}
              quality={80}
              priority
              alt={`Image de l'article ${article.title}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          </figure>

          <div className="prose prose-lg max-w-none" itemProp="articleBody">
            {/* {parsedContent} */}
            <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>

          {/* FAQ */}
          {article.faq?.length > 0 && (
            <section className="mt-12 space-y-4" aria-labelledby="faq-title">
              <h2
                id="faq-title"
                className="text-3xl font-bold text-center  py-6 border-t border-gray-200 "
              >
                FAQ
              </h2>
              <div className="space-y-4">
                {article.faq.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="group [&_summary::-webkit-details-marker]:hidden  bg-base-200 rounded-lg"
                    open={index === 0}
                  >
                    <summary
                      aria-expanded={index === 0 ? "true" : "false"}
                      className="flex cursor-pointer no-calistoga items-center justify-between gap-1.5 rounded-lg py-1.5 px-4 text-base-content"
                    >
                      <h3 className="text-xl font-semibold !my-3 text-base-content">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon className="size-6 shrink-0 transition duration-300 group-open:-rotate-180" />
                    </summary>

                    <p className="!mt-0 px-4  text-base-content/80 pb-4 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
      <div className="hidden lg:block lg:col-span-3">
        <aside className="sticky top-24">
          <div className=" rounded-lg p-5 mb-5  font-semibold border border-base-neutral bg-neutral">
            <Image
              src="/avatar/chill.webp"
              alt="Avatar Brice Eliasse allongé sur le dos"
              width={200}
              height={200}
              className=" object-contain rounded-lg"
            />
            <p className="leading-relaxed mt-3">
              Je suis disponible pour développer votre projet web
            </p>
            <div className="flex gap-3 justify-center mt-3">
              <Link
                href="/#contact"
                className="btn btn-primary btn-outline btn-sm w-full"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>

          {featuredArticles?.length > 0 && (
            <div className=" pt-3">
              <h3 className="text-lg  mb-4">Autres articles</h3>
              <div className="space-y-2">
                {featuredArticles.map((article) => (
                  <FeaturedArticle key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.meta_description,
            image: article.image,
            // author: {
            //   "@type": "Person",
            //   name: author.name,
            //   url: `https://option-zero.fr/auteurs/${author.slug}`,
            //   image: `https://option-zero.fr${
            //     author.image ||
            //     "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            //   }`,
            // },
            publisher: {
              "@type": "Organization",
              name: "Brice Eliasse",
              logo: {
                "@type": "ImageObject",
                url: "https://brice-eliasse.com/logo.webp",
              },
            },
            datePublished: article.publishedAt,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://brice-eliasse.com/articles/${article.slug}`,
            },
            keywords: article.tags ? article.tags.join(", ") : "",
          }),
        }}
      />
      {/* FAQ JSON-LD */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      )}
      {/* Breadcrumb JSON-LD */}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      )}
    </div>
  );
}

const createFaqJsonLd = (faq) =>
  faq?.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

const createBreadcrumbJsonLd = (articleTitle, articleSlug) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://brice-eliasse.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://brice-eliasse.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: articleTitle,
      item: `https://brice-eliasse.com/articles/${articleSlug}`,
    },
  ],
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://beatrice.app/api/articles/${slug}?token=203377ab-1537-4b08-a5ec-93d090abc95e`
  );
  const { article, ok } = await response.json();

  if (!ok) {
    return notFound();
  }

  return {
    title: `${article.title} | Brice Eliasse`,
    description: article.meta_description,
    alternates: {
      canonical: `https://brice-eliasse.com/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Brice Eliasse`,
      description: article.meta_description,
      type: "article",
      locale: "fr_FR",
      images: [
        {
          url: article.image,
          width: 816,
          height: 256,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Brice Eliasse`,
      description: article.meta_description,
      images: article.image ? [article.image] : [],
    },
  };
}

async function FeaturedArticle({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex gap-4 bg-base-300 rounded-lg group"
      key={article._id}
    >
      <Image
        src={article.image}
        alt={article.title}
        className="object-cover rounded-l-lg w-16 h-16"
        width={256}
        height={256}
      />
      <div className="p-1 flex justify-center flex-col">
        <h3 className="text-sm  line-clamp-2 group-hover:text-primary transition-all duration-300">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}
