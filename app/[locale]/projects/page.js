import { getProjects } from "@/data/projects";

export async function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const baseUrl = "https://brice-eliasse.com";
  const frUrl = `${baseUrl}/fr/projects`;
  const enUrl = `${baseUrl}/en/projects`;
  return {
    title:
      locale === "fr"
        ? "Mes Projets en Freelance - Brice Eliasse"
        : "My Freelance Projects - Brice Eliasse",
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

export default async function ProjectsPage({ params }) {
  const locale = params.locale;

  const projects = getProjects();

  return (
    <div className="section mx-auto mt-20">
      <div className="fixed left-0 top-0 w-full h-full -z-10">
        <span className="absolute w-px h-full bg-white/5 lg:left-[10%] md:left-[16.6666666667%] sm:left-[20%]"></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[20%] md:left-[33.3333333333%] sm:left-[40%]"></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[30%] md:left-[50%] sm:left-[60%]"></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[40%] md:left-[66.6666666667%] sm:left-[80%]"></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[50%] md:left-[83.3333333333%]"></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[60%] "></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[70%] "></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[80%] "></span>
        <span className="absolute w-px h-full bg-white/5 lg:left-[90%] "></span>
      </div>
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold sm:leading-none text-base-content mb-6 max-w-4xl mx-auto">
          {locale === "fr"
            ? "Découvrez mes projets, applications et réalisations en développement web"
            : "Discover my web projects, applications and full-stack development achievements."}
        </h1>
        <div className="flex justify-center items-center gap-3">
          <div className="flex bg-primary px-3 py-1 items-center text-base-100 font-bold rounded-full gap-2 text-sm">
            <div
              className="mask mask-star-2 bg-black w-3.5 h-3.5  "
              aria-label="1 star"
            ></div>
            5.0
          </div>
          <span className="text-primary">
            {locale === "fr"
              ? "Déjà plus de 40 clients satisfaits"
              : "Already more than 40 satisfied clients"}
          </span>
        </div>
        {/* <div className="flex justify-between items-center mt-10 mb-6 gap-4 flex-col sm:flex-row">
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="metaframeworks"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="metaframeworks"
              aria-label="Sveltekit"
            />
            <input
              className="btn"
              type="radio"
              name="metaframeworks"
              aria-label="Nuxt"
            />
            <input
              className="btn"
              type="radio"
              name="metaframeworks"
              aria-label="Next.js"
            />
          </div>
          <label className="input w-72 input-bordered flex items-center gap-3">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              className="text-sm w-full"
              placeholder={locale === "fr" ? "Rechercher" : "Search"}
            />
          </label>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="bg-base-200 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200"
            >
              <div className="relative w-full h-48 bg-base-300">
                {project.featured_image && (
                  <img
                    src={`/projects/featured/${project.slug}.webp`}
                    alt={project.name}
                    height={400}
                    width={192}
                    loading={i > 4 ? "lazy" : "eager"}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1 text-left">
                <h2 className="text-xl font-bold mb-2 text-base-content tracking-wide">
                  {project.name}
                </h2>
                <p className="text-base-content/80 mb-4 flex-1">
                  {project.mission}
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories?.map((cat) => (
                    <span
                      key={cat}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold"
                    >
                      {cat}
                    </span>
                  ))}
                </div> */}
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool) => (
                    <span
                      key={tool}
                      className="bg-base-300 px-2 py-1 rounded text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={`/${locale}/projects/${project.slug}`}
                    rel="noopener noreferrer"
                    className="mt-4 btn btn-primary btn-outline btn-sm w-full"
                  >
                    {locale === "fr" ? "Voir le projet" : "See the project"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
