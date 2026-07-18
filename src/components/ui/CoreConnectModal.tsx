'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Project } from "@/content/projects";

interface CoreConnectModalProps {
  item: Project | null;
  onClose: () => void;
}

export default function CoreConnectModal({ item, onClose }: CoreConnectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!item) return null;

  const images = Array.isArray(item.imageUrl) ? item.imageUrl : item.imageUrl ? [item.imageUrl] : [];

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-md" />

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-6xl bg-[#12141C] border border-[#1F222F] rounded-2xl shadow-2xl z-10 flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-[#8E929F] hover:text-white font-mono text-sm z-30 bg-[#12141C]/80 px-2 py-1 rounded">// fechar</button>

          {/* Lateral Esquerda: Imagem ajustada para exibir bordas completas */}
          <div className="w-full md:w-[60%] bg-black relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]} 
                alt={`${item.title} - ${currentImageIndex}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                // MUDANÇA: object-contain garante que a imagem toda apareça sem cortes
                className="w-full h-full object-contain p-2"
              />
            </AnimatePresence>

            {/* Controles */}
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 z-20">&lt;</button>
                <button onClick={nextImage} className="absolute right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 z-20">&gt;</button>
                <div className="absolute bottom-6 flex gap-2 z-20">
                  {images.map((_, idx) => (
                    <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? "bg-[#00C853] w-6" : "bg-[#1F222F] w-1.5"}`} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Lateral Direita */}
          <div className="w-full md:w-[40%] p-8 overflow-y-auto space-y-6">
            <h3 className="text-3xl font-bold text-white">{item.title}</h3>
            <p className="text-[#8E929F] text-sm leading-relaxed">{item.longDescription || item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech) => (
                <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-[#0B0C10] border border-[#1F222F] text-[#8E929F]">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}