import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from "@/content/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [project, isOpen]);

  if (!project) return null;

  // 1. Normalização inteligente e segura do array de mídias para evitar crashes ("This page couldn't load")
  let images: string[] = [];
  if (project.imageUrl && Array.isArray(project.imageUrl) && project.imageUrl.length > 0) {
    images = project.imageUrl;
  } else if ((project as any).image) {
    images = [(project as any).image];
  } else if ((project as any).imageUrl && typeof (project as any).imageUrl === 'string') {
    images = [(project as any).imageUrl];
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // 2. Definição do comportamento visual baseado na categoria do projeto
  const isMobile = project.category?.toLowerCase().includes('mobile') || project.category?.toLowerCase().includes('app');
  const isWebApplication = project.category?.toLowerCase().includes('web') || project.category?.toLowerCase().includes('full-stack');
  const isAnimationOrVector = project.category?.toLowerCase().includes('animação') || project.category?.toLowerCase().includes('vetor');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          {/* Background overlay click handler */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[92vh] md:max-h-[85vh]"
          >
            {/* ==================================================== */}
            {/* LADO ESQUERDO: RECIPIENTE DE MÍDIA CUSTOMIZADO      */}
            {/* ==================================================== */}
            <div className={`w-full md:w-1/2 flex flex-col justify-center items-center bg-zinc-950/50 p-4 relative group border-b border-zinc-800 md:border-b-0 md:border-r min-h-[320px] ${isWebApplication ? 'md:p-2' : 'p-6'}`}>
              
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                
                {/* Botão de navegação anterior */}
                {images.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-3 z-20 p-2 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full transition-colors border border-zinc-800 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                )}

                {/* RENDERIZAÇÃO ISOLADA POR CATEGORIA */}
                {images.length > 0 && images[currentImageIndex] ? (
                  <>
                    {isMobile && (
                      /* Layout Finance Lab & NexusDev Mobile: Otimizado para telas verticais estreitas e altas */
                      <img
                        src={images[currentImageIndex]}
                        alt="Mobile Preview"
                        className="max-h-[50vh] md:max-h-[70vh] w-auto h-full object-contain rounded-xl shadow-2xl"
                      />
                    )}

                    {isWebApplication && (
                      /* Layout CoreConnect: Otimizado para Desktop deitado, maximizando largura para melhor leitura do print */
                      <img
                        src={images[currentImageIndex]}
                        alt="Web Preview"
                        className="w-full h-auto max-h-[45vh] md:max-h-[65vh] object-contain rounded-lg shadow-lg border border-zinc-800"
                      />
                    )}

                    {isAnimationOrVector && (
                      /* Layout Logo Splash & Vetores: Enquadramento centralizado simétrico e limpo */
                      <div className="p-8 bg-zinc-900/40 rounded-xl border border-zinc-800/50 flex items-center justify-center w-48 h-48 md:w-64 md:h-64">
                        <img
                          src={images[currentImageIndex]}
                          alt="Vector Preview"
                          className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,200,83,0.2)]"
                        />
                      </div>
                    )}

                    {!isMobile && !isWebApplication && !isAnimationOrVector && (
                      /* Fallback padrão seguro */
                      <img
                        src={images[currentImageIndex]}
                        alt="Project Preview"
                        className="max-w-full max-h-full object-contain rounded-lg"
                      />
                    )}
                  </>
                ) : (
                  <div className="text-zinc-600 font-mono text-xs select-none">// Nenhuma pré-visualização disponível</div>
                )}

                {/* Botão de próxima navegação */}
                {images.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-3 z-20 p-2 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-full transition-colors border border-zinc-800 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Indicadores de paginação (Dots) */}
              {images.length > 1 && (
                <div className="flex gap-1.5 mt-3 absolute bottom-3">
                  {images.map((imagePath, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#00C853] w-3' : 'bg-zinc-700'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ==================================================== */}
            {/* LADO DIREITO: INFORMAÇÕES TÉCNICAS DO PROJETO        */}
            {/* ==================================================== */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-zinc-900">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[#00C853]">
                    {project.category}
                  </span>
                  <button
                    onClick={onClose}
                    className="text-zinc-500 hover:text-white font-mono text-xs transition-colors"
                  >
                    // fechar
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 select-none">
                  {project.title}
                </h2>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 whitespace-pre-line text-justify font-normal">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">// Tecnologias</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack && project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-zinc-950 text-zinc-300 border border-zinc-800 rounded md:text-xs text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};