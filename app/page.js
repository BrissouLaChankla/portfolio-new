import Trusted from "@/components/sections/Trusted";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Tools from "@/components/sections/Tools";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/Footer";
import Contact from "@/components/sections/Contact";
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
      <Footer />
    </main>
  );
}
