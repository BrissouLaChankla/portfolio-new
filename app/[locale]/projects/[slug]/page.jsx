import CTABanner from "@/components/CTABanner";
import { getTranslations } from "next-intl/server";
import { getProjects } from "@/data/projects";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  return getProjects();
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const tProjects = await getTranslations("Projects");
  const projects = getProjects(tProjects);
  const project = projects.find((p) => p.slug === slug);
  const locale = await getLocale();

  if (!project) {
    return {
      title: `${locale === "fr" ? "Projet" : "Project"} non trouvé`,
      description: "Ce projet n'existe pas ou n'est pas disponible.",
    };
  }

  const baseUrl = "https://brice-eliasse.com";
  const frUrl = `${baseUrl}/fr/projects/${slug}`;
  const enUrl = `${baseUrl}/en/projects/${slug}`;

  return {
    title: `${locale === "fr" ? "Projet" : "Project"} ${
      project.name
    } - Brice Eliasse`,
    description: project.description,
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

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const tProjects = await getTranslations("Projects");
  const projects = getProjects(tProjects);
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const locale = await getLocale();

  const relatedProjects = projects
    .filter(
      (p) =>
        p.categories.some((c) => project.categories.includes(c)) &&
        p.slug !== slug
    )
    .slice(-3);

  if (!project) {
    notFound();
  }

  return (
    <div>
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
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-between section mt-0">
          {/* Design stylé pour navigation projet précédent / suivant avec noms et image du projet suivant */}
          <div className="flex flex-col items-center justify-center">
            <a
              href={
                projects[projectIndex - 1]
                  ? `/${locale}/projects/${projects[projectIndex - 1].slug}`
                  : `/${locale}/projects/${projects[projects.length - 1].slug}`
              }
              className={` flex items-center gap-5 ps-3 pe-6 py-2 rounded-lg bg-base-300 border-base-content/80 border hover:scale-[1.02]  `}
              aria-label={`${tProjects("previousProject")} : ${
                projects[projectIndex - 1]?.name ||
                projects[projects.length - 1]?.name
              }`}
              tabIndex={projects[projectIndex - 1] ? 0 : -1}
            >
              <span className="block w-10">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="flex flex-col items-start">
                <span className="text-xs text-base-content/60 whitespace-nowrap">
                  {tProjects("previousProject")}
                </span>
                <span className="font-medium whitespace-nowrap">
                  {projects[projectIndex - 1]?.name ||
                    projects[projects.length - 1]?.name}
                </span>
              </div>
              <img
                src={
                  projects[projectIndex - 1]
                    ? `/projects/${projects[projectIndex - 1].slug}.svg`
                    : `/projects/${projects[projects.length - 1].slug}.svg`
                }
                alt={
                  projects[projectIndex - 1]
                    ? `Logo du projet ${projects[projectIndex - 1].name}`
                    : `Logo du projet ${projects[projects.length - 1].name}`
                }
                className="w-7 h-7 rounded"
              />
            </a>
          </div>
          <section className="section mt-20 text-center">
            <h1 className="text-5xl font-medium sm:leading-none text-base-content ">
              {project.name}
            </h1>

            <div className="flex items-center justify-center gap-5 mt-7">
              {project.categories.map((category, i) => (
                <>
                  {i > 0 && (
                    <span className="w-1.5 h-1.5 bg-base-content rounded-full"></span>
                  )}
                  <span>{category}</span>
                </>
              ))}
            </div>
          </section>
          <div className="flex flex-col items-center justify-center">
            {/* Projet suivant */}
            <a
              href={`/${locale}/projects/${
                projects[projectIndex + 1]?.slug || projects[0]?.slug
              }`}
              className="group flex items-center  gap-5 px-4 py-2 rounded-lg bg-base-300 border px-10  border-base-content/80 border hover:scale-[1.02] "
              aria-label={`${tProjects("nextProject")} : ${
                projects[projectIndex + 1]?.name || projects[0]?.name
              }`}
              disabled={!projects[projectIndex + 1] || !projects[0]}
            >
              <img
                src={`/projects/${
                  projects[projectIndex + 1]?.slug || projects[0]?.slug
                }.svg`}
                alt={`Logo du projet ${projects[projectIndex + 1]?.name}`}
                className="w-7 h-7 rounded"
              />
              <div className="flex flex-col items-start">
                <span className="text-xs text-base-content/60 whitespace-nowrap">
                  {tProjects("nextProject")}
                </span>
                <span className="font-medium whitespace-nowrap">
                  {projects[projectIndex + 1]?.name || projects[0]?.name}
                </span>
              </div>

              <span className="block w-10">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <img
          className="w-full h-[500px] object-cover section mt-20"
          src={`/projects/featured/${project.slug}.webp`}
          alt={project.name}
          width={1280}
          height={500}
        />

        <div className="section mt-20 grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <h2 className="text-4xl font-medium sm:leading-none text-base-content ">
              {tProjects("introWorkDone")} {project.name} ?
            </h2>
            <div className="text-base-content/80 mt-6 mb-10 prose max-w-none">
              {project.workDone}
            </div>
            <div className="carousel rounded-box md:hidden">
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                  alt="Burger"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                  alt="Burger"
                />
              </div>
            </div>
            <div className="flex items-center gap-5 mt-6 pe-10 grid grid-cols-2 hidden md:grid">
              {project.mockups.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Mockup"
                  loading="lazy"
                  className="rounded object-cover h-64 w-full"
                />
              ))}
            </div>
          </div>
          <div className="bg-base-300 backdrop-blur-sm p-10 rounded-xl w-full h-fit col-span-4 sticky top-20 flex flex-col gap-10">
            <div>
              <h3 className="uppercase text-primary text-xs tracking-wide">
                {tProjects("goal")}
              </h3>
              <p className="text-xl mt-2">{project.mission}</p>
            </div>
            <div>
              <h3 className="uppercase text-primary text-xs tracking-wide">
                {tProjects("stack")}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                {project.tools.map((tool, i) => (
                  <div
                    className={`tooltip ${i > 0 ? "" : "tooltip-left"}`}
                    data-tip={tool}
                  >
                    <img
                      className=" hover:scale-110 transition-all duration-300 rounded "
                      src={`/technos/${tool
                        .toLowerCase()
                        .replace(" ", "")}.svg`}
                      alt={tool}
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="uppercase text-primary text-xs tracking-wide">
                Type
              </h3>
              <p className="text-xl mt-2">
                {project.isSideProject
                  ? tProjects("sideProject")
                  : tProjects("clientProject")}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm btn-outline flex items-center gap-2"
            >
              {tProjects("seeWork")}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / External_Link">
                  <path
                    id="Vector"
                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <CTABanner />

        <div className="section mt-0">
          <div className="divider mb-14">
            <h2 className="text-4xl font-medium sm:leading-none text-base-content  ">
              {tProjects("relatedProjects")}
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-10 mb-32">
            {relatedProjects.map((project) => (
              <a
                href={`/${locale}/projects/${project.slug}`}
                className="col-span-4 mt-10 flex flex-col gap-4 bg-base-200 rounded-2xl shadow-lg overflow-hidden group border border-primary/10 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={`/projects/featured/${project.slug}.webp`}
                    loading="lazy"
                    alt={project.name}
                    height={256}
                    width={390}
                    className="object-cover h-64 w-full transition-all duration-300 group-hover:scale-102"
                  />
                  {project.isFavorite && (
                    <span className="absolute top-4 right-4 bg-base-100/80 text-primary px-2 py-1 rounded-full text-xs font-bold shadow">
                      ★ {tProjects("favorite")}
                    </span>
                  )}
                </div>
                <div className="p-6 pt-3 flex flex-col flex-1">
                  <h4 className="text-2xl font-bold text-base-content mb-2  transition-colors duration-200">
                    {project.name}
                  </h4>
                  <p className="text-base text-base-content/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 text-primary   ">
                    {tProjects("seeProject")} <span className="ms-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
