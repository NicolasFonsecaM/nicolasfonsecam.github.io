import GridBackground from "@/components/core/GridBackground";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import EducationSection from "@/components/core/EducationSection";
import ProjectCard from "@/components/ui/ProjectCard";
import InteractiveSvgCard from "@/components/ui/InteractiveSvgCard";
import MagneticButton from "@/components/interactive/MagneticButton";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#F5F5F7] overflow-x-hidden font-sans selection:bg-[#00C853] selection:text-[#0B0C10]">
      {/* O Header Fixo */}
      <Header />

      {/* O Grid de Fundo Interativo */}
      <GridBackground />

      {/* Efeito de Ruído Global */}
      <div className="noise-overlay" />

      {/* Conteúdo Principal */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 min-h-screen space-y-8 pt-16">
        
        {/* Seção de Entrada */}
        <Hero />
        
        {/* Seção de Educação (FATEC & Anhanguera) */}
        <EducationSection />
        
        {/* Seção de Projetos */}
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

        {/* Espaço para o seu SVG Animado */}
        <InteractiveSvgCard />

        {/* Seção de Contato Exposta e Direta */}
        <section id="contact" className="py-32 border-t border-[#1F222F]/60 flex flex-col items-center text-center space-y-8">
          <div className="space-y-3">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// CONTATO DIRETO</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Bora conversar?</h2>
            <p className="text-[#8E929F] max-w-lg font-light text-sm md:text-base">
              Fique à vontade para copiar meu e-mail abaixo ou me acompanhar pelas redes profissionais e repositórios de código.
            </p>
          </div>

          {/* Exibição Direta do E-mail (Perfeito para cópia rápida e limpa) */}
          <div className="py-4">
            <span className="font-mono text-xl md:text-3xl font-light text-white tracking-tight hover:text-[#00C853] transition-colors duration-300 select-all selection:bg-[#00C853] selection:text-[#0B0C10]">
              Nicolasfm2@gmail.com
            </span>
          
          </div>

          {/* Links Profissionais Secundários Magnéticos */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <a
                href="https://linkedin.com/in/nicolas-fonseca-60386130b" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#12141C]/80 border border-[#1F222F] px-6 text-xs font-mono text-[#C2C5D1] hover:text-[#00C853] hover:border-[#00C853]/40 transition-all duration-200"
              >
                // linkedin
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="https://github.com/NicolasFonsecaM" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#12141C]/80 border border-[#1F222F] px-6 text-xs font-mono text-[#C2C5D1] hover:text-[#00C853] hover:border-[#00C853]/40 transition-all duration-200"
              >
                // github
              </a>
            </MagneticButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-[#1F222F]/30 bg-[#0B0C10]">
        <p className="text-xs font-mono text-[#8E929F]">
          &copy; {new Date().getFullYear()} Nicolas. Construído de forma autoral com Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}