import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { getProjects } from "@/data/projects";
import GridLogos from "@/components/ui/GridLogos";

export async function generateMetadata() {
  const locale = await getLocale();
  const baseUrl = "https://brice-eliasse.com";
  const frUrl = `${baseUrl}/fr/projects`;
  const enUrl = `${baseUrl}/en/projects`;

  return {
    title:
      locale === "fr"
        ? "Mes Projets - Brice Eliasse"
        : "My Projects - Brice Eliasse",
    description:
      locale === "fr"
        ? "Découvrez mes projets web, applications et réalisations en développement full-stack."
        : "Discover my web projects, applications and full-stack development achievements.",
    alternates: {
      canonical: locale === "fr" ? frUrl : enUrl,
      languages: {
        fr: frUrl,
        en: enUrl,
        "x-default": frUrl,
      },
    },
  };
}

export default async function ProjectsPage() {
  const tProjects = await getTranslations("Projects");
  const projects = getProjects(tProjects);

  return (
    <div className="section">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-medium sm:leading-none text-base-content mb-6">
          {tProjects("heading1")} <br />
          <span className="text-primary">{tProjects("heading2")}</span>
        </h1>
        <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
          {tProjects("intro")}
        </p>
      </div>

      <GridLogos data={projects} src="projects" />
    </div>
  );
}
