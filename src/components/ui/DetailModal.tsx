import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.imageUrl.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.imageUrl.length) % project.imageUrl.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* Background overlay click handler */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row min-h-[500px]"
          >
            {/* ==================================================== */}
            {/* LADO ESQUERDO: CONTAINER DE MÍDIA (RESPONSIVO & GRANDE) */}
            {/* ==================================================== */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-zinc-950/50 p-6 relative group border-b border-zinc-800 md:border-b-0 md:border-r">
              
              {/* Wrapper com proporção 16:9 forçada para esticar as imagens */}
              <div className="relative w-full aspect-video flex items-center justify-center overflow-hidden rounded-xl bg-zinc-900/30">
                
                {/* Botão de navegação anterior */}
                {project.imageUrl.length > 1 && (
                  <button
                    onClick={prevImage}
                    className="absolute left-3 z-20 p-2 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                )}

                {/* Imagem / GIF principal ocupando 100% da área útil disponível */}
                <img
                  src={project.imageUrl[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-300 select-none"
                />

                {/* Botão de próxima navegação */}
                {project.imageUrl.length > 1 && (
                  <button
                    onClick={nextImage}
                    className="absolute right-3 z-20 p-2 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Indicadores de paginação de imagem (Dots) */}
              {project.imageUrl.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {project.imageUrl.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-[#00C853] w-4' : 'bg-zinc-700'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ==================================================== */}
            {/* LADO DIREITO: INFORMAÇÕES TÉCNICAS DO PROJETO */}
            {/* ==================================================== */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                {/* Cabeçalho superior */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#00C853]">
                    {project.category}
                  </span>
                  <button
                    onClick={onClose}
                    className="text-zinc-500 hover:text-white font-mono text-sm transition-colors"
                  >
                    // fechar
                  </button>
                </div>

                {/* Título do Projeto */}
                <h2 className="text-3xl font-bold text-white mb-6 select-none">
                  {project.title}
                </h2>

                {/* Descrição Longa/Técnica */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 whitespace-pre-line text-justify">
                  {project.longDescription}
                </p>
              </div>

              {/* Seção das Badges de Tags Tecnológicas */}
              <div>
                <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">// Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-950 text-zinc-300 border border-zinc-800 rounded-md text-xs font-mono"
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