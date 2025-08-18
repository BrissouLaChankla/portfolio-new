import Trusted from "@/components/sections/Trusted";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Brice Eliasse - Formateur & Développeur web Freelance sur Nice",
  description:
    "Développeur web / formateur sur Nice et dans les Alpes-Maritimes. J'enseigne et utilise principalement Wordpress, React et Next.js pour la création de sites.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Trusted />
      <About />
      <Career />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <Reviews />
    </main>
  );
}
