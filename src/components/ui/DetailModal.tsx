'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/content/projects";

interface DetailModalProps {
  item: Project | null;
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  if (!item) return null;

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
          className="relative w-full max-w-xl bg-[#12141C] border border-[#1F222F] rounded-2xl p-8 shadow-2xl z-10 space-y-6 overflow-y-auto max-h-[85vh]"
        >
          {/* Botão Fechar */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-[#8E929F] hover:text-white font-mono text-sm"
          >
            // fechar
          </button>

          <div className="space-y-2">
            <span className="text-[#00C853] font-mono text-[10px] uppercase tracking-widest">{item.category}</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
          </div>

          <p className="text-[#8E929F] text-sm md:text-base leading-relaxed font-light">
            {item.longDescription || item.description}
          </p>

          {/* Tech Stack */}
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

          {/* Links de Ação */}
          {(item.githubUrl || item.liveUrl) && (
            <div className="flex gap-4 pt-2">
              {item.githubUrl && item.githubUrl !== "#" && (
                <a href={item.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">
                  [ Ver Código no GitHub ]
                </a>
              )}
              {item.liveUrl && item.liveUrl !== "#" && (
                <a href={item.liveUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-[#00C853] hover:underline">
                  [ Visitar Site ➔ ]
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}