'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Project } from "@/content/projects";

interface DetailModalProps {
  item: Project | null;
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  // Carrega o JSON do Lottie dentro do modal se for o projeto da logo animada
  useEffect(() => {
    if (item?.id === "splash-logo-lottie") {
      fetch("/splash-logo.json")
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Erro ao ler JSON no modal:", err));
    }
  }, [item?.id]);

  if (!item) return null;

  // Verifica se o item possui algum elemento visual para a lateral esquerda
  const hasSidebar = item.imageUrl || item.id === "splash-logo-lottie";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop escuro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0B0C10]/80 backdrop-blur-md"
        />

        {/* Janela do Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#12141C] border border-[#1F222F] rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden max-h-[85vh]"
        >
          {/* Botão Fechar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#8E929F] hover:text-white font-mono text-sm z-30 bg-[#12141C]/80 px-2 py-1 rounded"
          >
            // fechar
          </button>

          {/* Lateral Esquerda: Imagem ou Animação Lottie */}
          {hasSidebar && (
            <div className="w-full md:w-1/2 h-48 md:h-auto bg-[#0B0C10] relative flex-shrink-0 border-b md:border-b-0 md:border-r border-[#1F222F] flex items-center justify-center p-8 overflow-hidden">
              
              {/* Condicional 1: Se for o Lottie da Splash Logo */}
              {item.id === "splash-logo-lottie" ? (
                <div className="w-48 h-48 flex items-center justify-center z-10">
                  {animationData ? (
                    <Lottie 
                      animationData={animationData} 
                      loop={true} 
                      autoplay={true} // Roda direto no modal para dar o destaque premium
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-[#1F222F] border-t-[#00C853] animate-spin" />
                  )}
                </div>
              ) : (
                /* Condicional 2: Se for uma imagem estática comum */
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#12141C]/40 pointer-events-none" />
            </div>
          )}

          {/* Lateral Direita: Informações Técnicas */}
          <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <span className="text-[#00C853] font-mono text-[10px] uppercase tracking-widest">{item.category}</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
            </div>

            <p className="text-[#8E929F] text-sm md:text-base leading-relaxed font-light">
              {item.longDescription || item.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#C2C5D1] uppercase tracking-wider">// Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B0C10] border border-[#1F222F] text-[#8E929F]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(item.githubUrl || item.liveUrl) && (
              <div className="flex gap-4 pt-2 border-t border-[#1F222F]/40">
                {item.githubUrl && item.githubUrl !== "#" && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">
                    [ Ver Código ]
                  </a>
                )}
                {item.liveUrl && item.liveUrl !== "#" && (
                  <a href={item.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">
                    [ Visitar ➔ ]
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}