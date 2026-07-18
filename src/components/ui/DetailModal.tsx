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

  // Garante de forma segura que sempre teremos um array válido para varrer
  const images = project.imageUrl || (project as any).image ? [(project as any).image] : [];

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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          {/* Background overlay click handler */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          >
            {/* ==================================================== */}
            {/* LADO ESQUERDO: CONTAINER DE MÍDIA (RESPONSIVO DINÂMICO) */}
            {/* ==================================================== */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-zinc-950/40 p-4 relative group border-b border-zinc-800 md:border-b-0 md:border-r h-[35vh] md:h-auto min-h-[300px]">
              
              {/* Container flexível que se molda à proporção nativa da imagem */}
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

                {/* Imagem / GIF com comportamento responsivo puro */}
                {images.length > 0 && images[currentImageIndex] ? (
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.title} preview`}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-inner transition-transform duration-200"
                  />
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
                  {images.map((_, idx) => (
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
            {/* LADO DIREITO: INFORMAÇÕES TÉCNICAS DO PROJETO */}
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