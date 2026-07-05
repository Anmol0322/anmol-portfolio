import { useEffect, useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Marquee from "@/components/sections/Marquee";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import EducationContact from "@/components/sections/EducationContact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollY = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-testid="portfolio-root" className="relative min-h-screen overflow-x-hidden">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationContact />
      </main>
      <Footer />
    </div>
  );
}
