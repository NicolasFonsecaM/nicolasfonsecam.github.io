'use client';

import { useState } from "react";
import GridBackground from "@/components/core/GridBackground";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import AboutSection from "@/components/core/AboutSection";
import EducationSection from "@/components/core/EducationSection";
import ProjectCard from "@/components/ui/ProjectCard";
import ExperimentCard from "@/components/ui/ExperimentCard";
import { ProjectModal } from "@/components/ui/DetailModal";
import MagneticButton from "@/components/interactive/MagneticButton";
import { projects, experiments, Project } from "@/content/projects";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen text-[#F5F5F7] overflow-x-hidden font-sans selection:bg-[#00C853] selection:text-[#0B0C10]">
      <Header />
      <GridBackground />
      <div className="noise-overlay" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 min-h-screen space-y-8 pt-16">
        <Hero />
        <AboutSection />
        <EducationSection />
        
        {/* Seção Principal de Projetos */}
        <section id="projects" className="py-20 border-t border-[#1F222F]/60">
          <div className="space-y-2 mb-12">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// CASOS DE ESTUDO & APPS</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Projetos em Destaque</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedItem(project)}
              />
            ))}
          </div>
        </section>

        {/* Nova Seção: Laboratório & Criações Menores */}
        <section id="lab" className="py-20 border-t border-[#1F222F]/60">
          <div className="space-y-2 mb-12">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// EXPERIMENTOS & SUB-PROJETOS</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Laboratório Técnico</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiments.map((exp) => (
              <ExperimentCard 
                key={exp.id} 
                item={exp} 
                onClick={() => setSelectedItem(exp as unknown as Project)}
              />
            ))}
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contact" className="py-32 border-t border-[#1F222F]/60 flex flex-col items-center text-center space-y-8">
          <div className="space-y-3">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// CONTATO DIRETO</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Bora conversar?</h2>
            <p className="text-[#8E929F] max-w-lg font-light text-sm md:text-base">
              Fique à vontade para copiar meu e-mail abaixo ou me acompanhar pelas redes profissionais.
            </p>
          </div>

          <div className="py-4">
            <span className="font-mono text-xl md:text-3xl font-light text-white tracking-tight hover:text-[#00C853] transition-colors duration-300 select-all">
              Nicolasfm2@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a href="https://www.linkedin.com/in/nicolas-fonseca-60386130b/" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#12141C]/80 border border-[#1F222F] px-6 text-xs font-mono text-[#C2C5D1] hover:text-[#00C853]">
                // linkedin
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://github.com/NicolasFonsecaM" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-[#12141C]/80 border border-[#1F222F] px-6 text-xs font-mono text-[#C2C5D1] hover:text-[#00C853]">
                // github
              </a>
            </MagneticButton>
          </div>
        </section>
      </main>

      {/* Renderizador do Modal Global com Typecast ajustado para aceitar Project ou Experiment */}
      <ProjectModal project={selectedItem as any} isOpen={selectedItem !== null} onClose={() => setSelectedItem(null)} />

      <footer className="relative z-10 py-12 text-center border-t border-[#1F222F]/30 bg-[#0B0C10]">
        <p className="text-xs font-mono text-[#8E929F]">
          &copy; {new Date().getFullYear()} Nicolas. Construído com Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}