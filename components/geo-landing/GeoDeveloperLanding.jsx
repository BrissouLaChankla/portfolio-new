import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { setRequestLocale } from "next-intl/server";
import Contact from "@/components/sections/Contact";
import GeoLandingStatsDl from "@/components/geo-landing/GeoLandingStatsDl";
import GeoLocalProjectsSection from "@/components/geo-landing/GeoLocalProjectsSection";
import { getGeoLandingStatRows } from "@/data/geoDeveloperLandings";
import { getGeoPageContent } from "@/data/geoDeveloperContent";
import { buildGeoJsonLd } from "@/data/geoDeveloperSEO";

function ParagraphWithOptionalBold({ text, boldPhrase }) {
  if (!boldPhrase || !text.includes(boldPhrase)) {
    return <p>{text}</p>;
  }
  const parts = text.split(boldPhrase);
  return (
    <p>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? <strong>{boldPhrase}</strong> : null}
        </span>
      ))}
    </p>
  );
}

export default function GeoDeveloperLanding({ geoKey, locale }) {
  const c = getGeoPageContent(geoKey, locale);
  if (!c) notFound();

  setRequestLocale(locale);

  const jsonLd = buildGeoJsonLd(geoKey, locale);
  const statsRows = getGeoLandingStatRows(geoKey, locale);
  const contactHref = "#contact";
  const projectsHref = `/${locale}/projects/`;
  const faqName = `faq-geo-${geoKey}-${locale}`;
  const homeLabel = locale === "en" ? "Home" : "Accueil";

  const localParas = c.localParagraphs || [];
  const lastIdx = localParas.length - 1;
  const hasBold = c.localKeywordBold && lastIdx >= 0;

  return (
    <>
      <Script
        id={`json-ld-geo-${geoKey}-${locale}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="geo-landing relative">
        <nav
          className="mx-auto flex max-w-screen-xl flex-wrap items-center gap-2 px-4 pt-6 text-sm text-base-content/70 md:px-6"
          aria-label={locale === "en" ? "Breadcrumb" : "Fil d’Ariane"}
        >
          <Link href={`/${locale}/`} className="link link-hover link-primary">
            {homeLabel}
          </Link>
          <span className="opacity-40" aria-hidden>
            /
          </span>
          <span className="text-base-content/90">{c.breadcrumbLabel}</span>
        </nav>

        <div className="fixed inset-0 -z-10" aria-hidden>
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((left) => (
            <span
              key={left}
              className="absolute h-full w-px bg-white/5"
              style={{ left: `${left}%` }}
            />
          ))}
        </div>

        <section className="section mx-auto max-w-screen-xl px-4 pb-12 pt-8 md:px-6 md:pt-12 lg:pt-16">
          <div className="flex w-full flex-col gap-14 border-b border-base-content/10 pb-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="badge badge-primary badge-outline badge-sm p-3">
                  {c.badgeLocation}
                </span>
                <span className="badge badge-ghost badge-sm border border-base-content/15 p-3">
                  {c.badgeSecondary}
                </span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-base-content md:text-5xl md:leading-[1.08]">
                {c.h1Line1}
                <br />
                <span className="text-primary">{c.h1Highlight}</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-base-content/70">
                {c.heroLead}
              </p>

              <p className="mt-3 max-w-2xl text-base leading-7 text-base-content/70">
                {c.heroSecondary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={contactHref}
                  className="btn btn-primary btn-lg px-8"
                >
                  {locale === "en"
                    ? "Discuss your project"
                    : "Parler de votre projet"}
                </Link>
                <Link href={projectsHref} className="btn btn-ghost btn-lg px-8">
                  {locale === "en" ? "See my projects" : "Voir mes projets"}
                </Link>
              </div>
            </div>

            <div className="w-full max-w-md shrink-0 lg:max-w-lg">
              <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-base-content/15">
                <Image
                  src={c.heroImageSrc}
                  alt={c.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 28rem"
                  priority
                />
                <figcaption className="sr-only">{c.heroFigcaption}</figcaption>
              </figure>
              <GeoLandingStatsDl rows={statsRows} />
            </div>
          </div>
        </section>

        <GeoLocalProjectsSection locale={locale} geoKey={geoKey} />

        <section className="section mx-auto max-w-screen-xl px-4 py-12 md:px-6 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                {c.aboutKicker}
              </p>
              <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                {c.aboutTitle}
              </h2>
              <div className="prose prose-invert mt-6 max-w-none text-base-content/75">
                {(c.aboutParagraphs || []).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end lg:border-l lg:border-base-content/10 lg:pl-10">
              <figure className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <Image
                  src={c.aboutAsideImageSrc}
                  alt={c.aboutAsideImageAlt}
                  fill
                  className="object-contain object-center border-b-2 border-primary"
                  sizes="(max-width: 1024px) 100vw, 20rem"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="section mx-auto max-w-screen-xl px-4 py-10 md:px-6 md:py-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-primary/80">
              {locale === "en" ? "Services" : "Services"}
            </p>
            <h2 className="mt-3 text-3xl font-medium md:text-5xl">
              {locale === "en"
                ? "What I can build with you"
                : "Ce que je peux construire avec vous"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {(c.services || []).map((service) => (
              <article
                key={service.title}
                className="group rounded-xl border border-base-content/15 p-6 transition duration-300 hover:border-primary/40"
              >
                <p className="mb-4 text-primary" aria-hidden>
                  ✦
                </p>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-base-content/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section mx-auto max-w-screen-xl px-4 py-12 md:px-6 md:py-20">
          <div className="rounded-2xl border border-base-content/10 bg-base-300/25 px-6 py-10 md:px-10 md:py-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
              {c.whyKicker}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-medium md:text-4xl">
              {c.whyTitle}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-base-content/75">
              <p>{c.whyP1}</p>
              <p>{c.whyP2}</p>
            </div>
            {(c.points || []).length > 0 ? (
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {(c.points || []).map((point) => (
                  <li
                    key={point}
                    className="border-l-2 border-primary/60 bg-base-200/40 px-4 py-3 text-sm leading-7 text-base-content/85"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        <section className="section mx-auto max-w-screen-xl px-4 py-12 md:px-6 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                {c.localKicker}
              </p>
              <h2 className="mt-3 text-3xl font-medium md:text-5xl">
                {c.localTitle}
              </h2>
              <div className="prose prose-invert mt-6 max-w-none text-base-content/75">
                {localParas.map((para, i) => {
                  if (hasBold && i === lastIdx) {
                    return (
                      <ParagraphWithOptionalBold
                        key={i}
                        text={para}
                        boldPhrase={c.localKeywordBold}
                      />
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </div>

            <div>
              <h3 className="border-b border-base-content/10 pb-3 text-xl font-medium">
                {locale === "en"
                  ? "A few situations where I help"
                  : "Quelques cas où je peux être utile"}
              </h3>
              <ul className="mt-4 divide-y divide-base-content/10">
                {(c.useCases || []).map((item) => (
                  <li key={item} className="flex gap-3 py-4">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                      ✦
                    </span>
                    <span className="text-sm leading-7 text-base-content/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="section mx-auto max-w-screen-xl px-4 py-10 md:px-6 md:py-16"
          aria-labelledby={`faq-heading-${geoKey}`}
        >
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-primary/80">
              FAQ
            </p>
            <h2
              id={`faq-heading-${geoKey}`}
              className="mt-3 text-3xl font-medium md:text-5xl"
            >
              {locale === "en"
                ? "Frequently asked questions"
                : "Questions fréquentes"}
            </h2>
          </div>

          <div className="space-y-4">
            {(c.faqs || []).map((faq, index) => (
              <div
                key={faq.question}
                className="collapse-plus collapse rounded-xl border border-base-content/15 bg-transparent"
              >
                <input
                  type="radio"
                  name={faqName}
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-xl font-medium">
                  {faq.question}
                </div>
                <div className="collapse-content leading-8 text-base-content/70">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section mx-auto max-w-screen-xl px-4 pb-24 pt-6 md:px-6 md:pb-32 md:pt-10">
          <Contact />
        </section>
      </main>
    </>
  );
}
