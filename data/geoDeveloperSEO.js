import { getGeoPageContent } from "@/data/geoDeveloperContent";
import {
  GEO_REGISTRY,
  GEO_PAGE_ORDER,
  getRegistryForGeoKey,
} from "@/data/geoDeveloperPageRegistry";

const BASE_URL = "https://brice-eliasse.com";

export function getCanonicalAndAlternates(geoKey, locale) {
  const reg = getRegistryForGeoKey(geoKey);
  if (!reg) return null;
  const frUrl = `${BASE_URL}/fr/${reg.frSlug}/`;
  const enUrl = `${BASE_URL}/en/${reg.enSlug}/`;
  const canonical = locale === "en" ? enUrl : frUrl;
  return {
    canonical,
    languages: {
      fr: frUrl,
      en: enUrl,
      "x-default": frUrl,
    },
  };
}

export function buildGeoJsonLd(geoKey, locale) {
  const reg = getRegistryForGeoKey(geoKey);
  const c = getGeoPageContent(geoKey, locale);
  if (!reg || !c) return null;

  const { canonical } = getCanonicalAndAlternates(geoKey, locale);
  const faqs = c.faqs || [];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${canonical}#business`,
        name: "Brice Eliasse",
        url: canonical,
        image: `${BASE_URL}/og-image.jpg`,
        description: c.jsonLdDescription,
        areaServed: reg.jsonLdAreaServed,
        address: {
          "@type": "PostalAddress",
          addressLocality: reg.jsonLdLocality,
          addressRegion: "Provence-Alpes-Côte d'Azur",
          addressCountry: "FR",
        },
        sameAs: [
          "https://www.linkedin.com/in/brice-eliasse/",
          "https://github.com/BrissouLaChankla",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "en" ? "Home" : "Accueil",
            item: `${BASE_URL}/${locale}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: c.breadcrumbLabel,
            item: canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export async function generateGeoDeveloperMetadata(geoKey, expectedLocale, paramsLocale) {
  if (paramsLocale !== expectedLocale) {
    return { robots: { index: false, follow: false } };
  }

  const c = getGeoPageContent(geoKey, expectedLocale);
  const urls = getCanonicalAndAlternates(geoKey, expectedLocale);
  if (!c || !urls) {
    return { title: "Not found" };
  }

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical: urls.canonical,
      languages: urls.languages,
    },
    openGraph: {
      type: "website",
      locale: expectedLocale === "en" ? "en_US" : "fr_FR",
      url: urls.canonical,
      title: c.ogTitle,
      description: c.ogDescription,
      siteName: "Brice Eliasse",
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: c.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: c.ogTitle,
      description: c.twitterDescription,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

/** Pour sitemap : paires fr/en */
export function getAllGeoLandingUrls() {
  const list = [];
  for (const key of GEO_PAGE_ORDER) {
    const reg = GEO_REGISTRY[key];
    if (!reg) continue;
    list.push({
      fr: `${BASE_URL}/fr/${reg.frSlug}/`,
      en: `${BASE_URL}/en/${reg.enSlug}/`,
    });
  }
  return list;
}
