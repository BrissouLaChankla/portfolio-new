import { notFound } from "next/navigation";
import GeoDeveloperLanding from "@/components/geo-landing/GeoDeveloperLanding";
import { generateGeoDeveloperMetadata } from "@/data/geoDeveloperSEO";

const GEO_KEY = "nice";

export function generateMetadata({ params: { locale } }) {
  return generateGeoDeveloperMetadata(GEO_KEY, "fr", locale);
}

export default function Page({ params: { locale } }) {
  if (locale !== "fr") notFound();
  return <GeoDeveloperLanding geoKey={GEO_KEY} locale="fr" />;
}
