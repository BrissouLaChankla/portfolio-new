import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Brice Eliasse - Formateur & Développeur web Freelance sur Nice",
//   description: "Développeur web / formateur sur Nice et dans les Alpes-Maritimes. J'enseigne et utilise principalement Wordpress, React et Next.js pour la création de sites.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="night">
      <body className={`${inter.className} min-h-screen`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
