import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/data/projects";
import {
  getLocalProjectSlugsForGeo,
  getLocalProjectsSectionCopy,
} from "@/data/geoDeveloperLandings";

function ArrowRight({ className }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function GeoLocalProjectsSection({ locale, geoKey }) {
  const copy = getLocalProjectsSectionCopy(geoKey, locale);
  const slugs = getLocalProjectSlugsForGeo(geoKey);
  if (!copy || !slugs.length) return null;

  const all = getProjects();
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  const projects = slugs.map((s) => bySlug.get(s)).filter(Boolean);

  if (!projects.length) return null;

  return (
    <section className="section geo-landing-projects mx-auto max-w-screen-xl px-4 py-10 md:px-6 md:py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
        {copy.kicker}
      </p>
      <h2 className="mt-3 text-3xl font-medium md:text-4xl">{copy.title}</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-base-content/70">
        {copy.intro}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/projects/${p.slug}/`}
            className="group relative aspect-[5/6] overflow-hidden rounded-xl border border-base-content/15 bg-base-300 transition hover:border-primary/40 hover:shadow-lg"
          >
            <Image
              src={`/projects/${p.slug}.svg`}
              alt={p.name}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-base-100/95 via-base-100/20 to-transparent"
              aria-hidden
            />
            <span className="absolute bottom-2 left-2 right-2 text-left text-xs font-medium leading-tight text-base-content sm:text-sm">
              {p.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={`/${locale}/projects/`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium link link-primary link-hover"
        >
          {locale === "fr" ? "Voir tous les projets" : "See all projects"}
          <ArrowRight className="opacity-80 transition group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
