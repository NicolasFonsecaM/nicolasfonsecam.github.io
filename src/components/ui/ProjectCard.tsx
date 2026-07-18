'use client';

import { motion } from "framer-motion";
import { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover="hover"
      onClick={onClick}
      className="relative p-6 rounded-xl bg-[#12141C]/60 border border-[#1F222F] h-64 flex flex-col justify-between cursor-pointer overflow-hidden group transition-colors duration-200"
    >
      {/* Imagem de Fundo Invisível que aparece suavemente no Hover */}
      {project.imageUrl && (
        <motion.div
          variants={{
            hover: { opacity: 0.08, scale: 1.05 }
          }}
          initial={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none filter grayscale"
          style={{ 
            backgroundImage: `url(${Array.isArray(project.imageUrl) ? project.imageUrl[0] : project.imageUrl})` 
          }}
        />
      )}

      {/* Conteúdo (Z-10 garante que o texto fica perfeitamente legível acima da imagem) */}
      <div className="relative z-10 space-y-2">
        <span className="text-[10px] font-mono text-[#00C853] tracking-widest uppercase">// {project.category}</span>
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00C853] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-xs md:text-sm text-[#8E929F] font-light leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
        {project.techStack.slice(0, 3).map((tech, idx) => (
          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0C10] border border-[#1F222F] text-[#8E929F]">
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-[10px] font-mono px-2 py-0.5 text-[#00C853]">+ {project.techStack.length - 3}</span>
        )}
      </div>
    </motion.div>
  );
}