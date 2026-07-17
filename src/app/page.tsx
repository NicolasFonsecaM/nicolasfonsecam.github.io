import GridBackground from "@/components/core/GridBackground";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import AboutSection from "@/components/core/AboutSection"; // Novo import
import EducationSection from "@/components/core/EducationSection";
import ProjectCard from "@/components/ui/ProjectCard";
import InteractiveSvgCard from "@/components/ui/InteractiveSvgCard";
import MagneticButton from "@/components/interactive/MagneticButton";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#F5F5F7] overflow-x-hidden font-sans selection:bg-[#00C853] selection:text-[#0B0C10]">
      <Header />
      <GridBackground />
      <div className="noise-overlay" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 min-h-screen space-y-8 pt-16">
        {/* 1. Introdução */}
        <Hero />
        
        {/* 2. Quem Sou Eu & Skills (Acima) */}
        <AboutSection />
        
        {/* 3. Academia & Formação (Embaixo) */}
        <EducationSection />
        
        {/* 4. Casos de Estudo */}
        <section id="projects" className="py-20 border-t border-[#1F222F]/60">
          <div className="space-y-2 mb-12">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// CASOS DE ESTUDO & APPS</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Projetos em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 5. Logo Splash Animada */}
        <InteractiveSvgCard />

        {/* 6. Área de Contato */}
        {/* ... Restante do código de contato igual ... */}
      </main>
    </div>
  );
}