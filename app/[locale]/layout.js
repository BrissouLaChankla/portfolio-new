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

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
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
