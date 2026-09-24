import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import TrituxProject from "@/sections/TrituxProject";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Interests from "@/sections/Interests";
import Education from "@/sections/Education";
import PersonalBrand from "@/sections/PersonalBrand";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TrituxProject />
        <Projects />
        <Skills />
        <Interests />
        <Education />
        <PersonalBrand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
