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
      whileHover={{ y: -4, borderColor: "rgba(0, 200, 83, 0.3)" }}
      onClick={onClick}
      className="p-6 rounded-xl bg-[#12141C]/60 border border-[#1F222F] space-y-4 flex flex-col justify-between cursor-pointer transition-colors duration-200"
    >
      <div className="space-y-2">
        <span className="text-[10px] font-mono text-[#00C853] tracking-widest uppercase">// {project.category}</span>
        <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
        <p className="text-xs md:text-sm text-[#8E929F] font-light leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
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