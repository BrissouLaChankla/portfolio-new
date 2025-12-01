import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server"; // ✅ stable dans ta version

import fr from "@/messages/fr.json";
import en from "@/messages/en.json";

const inter = Inter({ subsets: ["latin"] });
const MESSAGES = { fr, en };

const baseUrl = "https://brice-eliasse.com";

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({ params: { locale } }) {
  const isFr = locale === "fr";
  
  const defaultMetadata = {
    metadataBase: new URL(baseUrl),
    authors: [{ name: "Brice Eliasse" }],
    creator: "Brice Eliasse",
    publisher: "Brice Eliasse",
    keywords: isFr
      ? "développeur web freelance, développeur freelance, développeur full stack, création site web, freelance react, freelance next.js, développeur node.js, expert javascript, développeur web indépendant, mission freelance, SEO, optimisation référencement, application web, développeur web France, développeur web international"
      : "freelance web developer, freelance developer, full stack developer, website creation, freelance react, freelance next.js, node.js developer, javascript expert, independent web developer, freelance mission, SEO, search engine optimization, web application, web developer France, international web developer",
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: isFr ? "fr_FR" : "en_US",
      siteName: "Brice Eliasse",
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isFr
            ? "Brice Eliasse - Développeur web Freelance 📍 Nice (06)"
            : "Brice Eliasse - Freelance Web Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}/og-image.jpg`],
    },
  };

  return defaultMetadata;
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!MESSAGES[locale]) notFound();

  setRequestLocale(locale); // ✅ ok

  return (
    <html lang={locale} data-theme="night">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={locale} messages={MESSAGES[locale]}>
          <Navbar />
          <div className="grow flex flex-col">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
