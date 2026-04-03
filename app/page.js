import "./globals.css";
import fr from "@/messages/fr.json";
import Script from "next/script";

const baseUrl = "https://brice-eliasse.com";

/** Page d'accueil sans locale : export statique — éviter redirect() qui produit une coquille vide (pas de meta). */
export const metadata = {
  metadataBase: new URL(baseUrl),
  title: fr.HomeMeta.title,
  description: fr.HomeMeta.description,
  authors: [{ name: "Brice Eliasse" }],
  creator: "Brice Eliasse",
  publisher: "Brice Eliasse",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  icons: { icon: "/favicon.ico" },
  alternates: {
    canonical: `${baseUrl}/fr/`,
    languages: {
      fr: `${baseUrl}/fr/`,
      en: `${baseUrl}/en/`,
      "x-default": `${baseUrl}/fr/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Brice Eliasse",
    title: fr.HomeMeta.title,
    description: fr.HomeMeta.description,
    url: `${baseUrl}/fr/`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: fr.HomeMeta.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fr.HomeMeta.title,
    description: fr.HomeMeta.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#1A2238] text-white p-6">
      <p className="text-lg text-center opacity-90">Chargement…</p>
      <p className="text-center text-sm">
        <a href="/fr/" className="link link-primary">
          Français
        </a>
        <span className="mx-2 opacity-40">·</span>
        <a href="/en/" className="link link-primary">
          English
        </a>
      </p>
      <Script id="root-locale-redirect" strategy="afterInteractive">
        {`window.location.replace("/fr/");`}
      </Script>
    </main>
  );
}
