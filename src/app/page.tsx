import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="lg:ml-[280px] flex-1 min-h-screen pt-14 lg:pt-0">
        <About />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
