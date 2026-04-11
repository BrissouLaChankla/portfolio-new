import { notFound } from "next/navigation";
import GeoDeveloperLanding from "@/components/geo-landing/GeoDeveloperLanding";
import { generateGeoDeveloperMetadata } from "@/data/geoDeveloperSEO";

const GEO_KEY = "monaco";

export function generateMetadata({ params: { locale } }) {
  return generateGeoDeveloperMetadata(GEO_KEY, "en", locale);
}

export default function Page({ params: { locale } }) {
  if (locale !== "en") notFound();
  return <GeoDeveloperLanding geoKey={GEO_KEY} locale="en" />;
}
