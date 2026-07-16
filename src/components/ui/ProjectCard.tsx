'use client';

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Valores de movimento do Framer Motion para reatividade ultra-rápida (fora do estado do React)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-[#1F222F] bg-[#12141C] p-8 overflow-hidden transition-all duration-300 hover:border-[#00C853]/40"
    >
      {/* Spotlight de Fundo Localizado */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 200, 83, 0.07),
              transparent 80%
            )
          `,
        }}
      />

      {/* Conteúdo do Card */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono tracking-widest text-[#00C853] uppercase bg-[#00C853]/10 px-2.5 py-1 rounded-full border border-[#00C853]/20">
              {project.category}
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#8E929F] hover:text-[#00C853] transition-colors duration-200"
              >
                [GITHUB] ➔
              </a>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#00C853] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[#8E929F] text-sm leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Badges de Tecnologias */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1F222F]/60">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B0C10] text-[#C2C5D1] border border-[#1F222F]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}