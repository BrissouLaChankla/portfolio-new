// app/[locale]/articles/page.js
import BlogPage, { revalidate as reval } from "./page/[page]/page";
import { getTranslations } from "next-intl/server";

export const revalidate = reval;

export default function ArticlesIndex({ params }) {
  // params contient { locale }
  return BlogPage({ params: { ...params, page: "1" } });
}

export async function generateMetadata({ params }) {
  // ✅ locale explicite => pas de headers()
  const t = await getTranslations({
    locale: params.locale,
    namespace: "BlogMeta",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://brice-eliasse.com/${params.locale}/articles`,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: params.locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}
