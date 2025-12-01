// app/[locale]/page.js
import Trusted from "@/components/sections/Trusted";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "HomeMeta" });
  const baseUrl = "https://brice-eliasse.com";
  const canonicalUrl = locale === "fr" ? baseUrl : `${baseUrl}/en`;
  
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages: { 
        fr: baseUrl, 
        en: `${baseUrl}/en`,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function Home({ params: { locale } }) {
  setRequestLocale(locale); // important pour le rendu statique
  // Si tu veux passer des props traduites au Hero :
  const t = await getTranslations("Home");
  const heroProps = {
    title: t("heroTitle"),
    subtitle: t("heroSubtitle"),
    first: t("heroFirst"),
    years: t("heroYears"),
    link: t("heroLink"),
    second: t("heroSecond"),
    badge: t("heroBadge"),
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <Hero {...heroProps} />
      <Trusted />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <Reviews />
    </main>
  );
}
