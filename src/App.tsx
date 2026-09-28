import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
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
  const [revealed, setRevealed] = useState(false);
  const [introOver, setIntroOver] = useState(false);

  return (
    <div className="bg-ink min-h-screen">
      {!introOver && <Intro onReveal={() => setRevealed(true)} onDone={() => setIntroOver(true)} />}
      {revealed && (
        <>
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
        </>
      )}
    </div>
  );
}