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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carrega o JSON do Lottie se for o projeto da logo animada
  useEffect(() => {
    if (item?.id === "splash-logo-lottie") {
      fetch("/splash-logo.json")
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Erro ao ler JSON no modal:", err));
    }
    // Reseta o índice ao abrir um novo item
    setCurrentImageIndex(0);
  }, [item?.id]);

  if (!item) return null;

  // Normaliza imagens para array de strings
  const images = Array.isArray(item.imageUrl) ? item.imageUrl : item.imageUrl ? [item.imageUrl] : [];
  const hasSidebar = images.length > 0 || item.id === "splash-logo-lottie";

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0B0C10]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#12141C] border border-[#1F222F] rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden max-h-[85vh]"
        >
          {/* Botão Fechar */}
          <button onClick={onClose} className="absolute top-4 right-4 text-[#8E929F] hover:text-white font-mono text-sm z-30 bg-[#12141C]/80 px-2 py-1 rounded">
            // fechar
          </button>

          {/* Lateral Esquerda: Mídia */}
          {hasSidebar && (
            <div className="w-full md:w-1/2 flex-1 bg-[#0B0C10] relative flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#1F222F]">
              {item.id === "splash-logo-lottie" ? (
                <div className="w-full h-full flex items-center justify-center p-8">
                  {animationData ? (
                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-[#1F222F] border-t-[#00C853] animate-spin" />
                  )}
                </div>
              ) : (
                <div className="w-full h-full relative flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex}
                      src={images[currentImageIndex]} 
                      alt={`${item.title} - ${currentImageIndex}`} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-contain p-2"
                    />
                  </AnimatePresence>

                  {images.length > 1 && (
                    <>
                      <button onClick={prevImage} className="absolute left-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all z-20">
                        &lt;
                      </button>
                      <button onClick={nextImage} className="absolute right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all z-20">
                        &gt;
                      </button>
                      <div className="absolute bottom-6 flex gap-2 z-20">
                        {images.map((_, idx) => (
                          <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-[#00C853] w-6" : "bg-[#1F222F] w-1.5"}`} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Lateral Direita: Informações */}
          <div className="flex-1 p-6 md:p-8 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              <span className="text-[#00C853] font-mono text-[10px] uppercase tracking-widest">// {item.category}</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
            </div>

            <p className="text-[#8E929F] text-sm md:text-base leading-relaxed font-light">{item.longDescription || item.description}</p>

            {item.id === "finance-lab" && (
              <p className="text-[11px] font-mono text-[#8E929F] border-l border-[#1F222F] pl-3 italic">
                * Nota: O carrossel exibe as principais interfaces desenvolvidas; o ecossistema engloba fluxos adicionais e regras internas complexas.
              </p>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-[#C2C5D1] uppercase tracking-wider">// Tecnologias</h4>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B0C10] border border-[#1F222F] text-[#8E929F]">{tech}</span>
                ))}
              </div>
            </div>

            {(item.githubUrl || item.liveUrl) && (
              <div className="flex gap-4 pt-2 border-t border-[#1F222F]/40">
                {item.githubUrl && item.githubUrl !== "#" && (
                  <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">[ Ver Código ]</a>
                )}
                {item.liveUrl && item.liveUrl !== "#" && (
                  <a href={item.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">[ Visitar ➔ ]</a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}