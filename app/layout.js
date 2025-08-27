import { Metadata } from "next";

export const metadata = {
  title: "Brice Eliasse - Développeur Full Stack",
  description:
    "Développeur Full Stack passionné par la création d'applications web modernes et performantes. Spécialisé en React, Next.js, Node.js et plus encore.",
  keywords:
    "développeur, full stack, react, next.js, node.js, javascript, typescript",
  authors: [{ name: "Brice Eliasse" }],
  creator: "Brice Eliasse",
  publisher: "Brice Eliasse",
  robots: "index, follow",
  openGraph: {
    title: "Brice Eliasse - Développeur Full Stack",
    description:
      "Développeur Full Stack passionné par la création d'applications web modernes et performantes.",
    type: "website",
    locale: "fr_FR",
    siteName: "Brice Eliasse",
    url: "https://brice-eliasse.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brice Eliasse - Développeur Full Stack",
    description:
      "Développeur Full Stack passionné par la création d'applications web modernes et performantes.",
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
