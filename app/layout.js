import { Metadata } from "next";

export const metadata = {
  title:
    "Développeur Web Freelance – Sites rapides & sur-mesure | Brice Eliasse",
  description:
    "Besoin d’un site internet efficace et professionnel ? Brice Eliasse, développeur web freelance, je crée des sites rapides, beaux et simples à utiliser.",
  keywords:
    "développeur web freelance, développeur freelance, développeur full stack, création site web, freelance react, freelance next.js, développeur node.js, expert javascript, développeur web indépendant, mission freelance, SEO, optimisation référencement, application web, développeur web France, développeur web international",
  authors: [{ name: "Brice Eliasse" }],
  creator: "Brice Eliasse",
  publisher: "Brice Eliasse",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  openGraph: {
    title:
      "Développeur Web Freelance – Sites rapides & sur-mesure | Brice Eliasse",
    description:
      "Besoin d’un site internet efficace et professionnel ? Brice Eliasse, développeur web freelance, je crée des sites rapides, beaux et simples à utiliser.",
    type: "website",
    locale: "fr_FR",
    siteName: "Brice Eliasse",
    url: "https://brice-eliasse.com",
    images: [
      {
        url: "https://brice-eliasse.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Développeur Web Freelance – Sites rapides & sur-mesure | Brice Eliasse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Développeur Web Freelance – Sites rapides & sur-mesure | Brice Eliasse",
    description:
      "Besoin d’un site internet efficace et professionnel ? Brice Eliasse, développeur web freelance, je crée des sites rapides, beaux et simples à utiliser.",
    images: ["https://brice-eliasse.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://brice-eliasse.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://brice-eliasse.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
