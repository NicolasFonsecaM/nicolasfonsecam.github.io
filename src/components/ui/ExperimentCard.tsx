'use client';

import { useState, useEffect, useRef } from "react"; // Adicionado useRef aqui
import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react"; // Importação do tipo correto
import { Project } from "@/content/projects";

interface ExperimentCardProps {
  item: Project;
  onClick: () => void;
}

export default function ExperimentCard({ item, onClick }: ExperimentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationData, setAnimationData] = useState<any>(null);
  
  // 1. Criamos a referência correta para o player do Lottie
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  // Carrega o JSON da animação
  useEffect(() => {
    if (item.id === "splash-logo-lottie") {
      fetch("/splash-logo.json")
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Erro ao ler JSON:", err));
    }
  }, [item.id]);

  // 2. Controlamos o Play/Pause de forma segura quando o mouse entra ou sai
  useEffect(() => {
    if (lottieRef.current) {
      if (isHovered) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(0, 200, 83, 0.3)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="p-6 rounded-xl bg-[#12141C]/60 border border-[#1F222F] flex flex-col md:flex-row gap-6 cursor-pointer h-full items-center text-left"
    >
      {/* Container do Lottie */}
      {item.id === "splash-logo-lottie" && (
        <div className="w-24 h-24 flex-shrink-0 bg-[#0B0C10] rounded-lg border border-[#1F222F]/60 flex items-center justify-center p-2 overflow-hidden">
          {animationData ? (
            <Lottie 
              lottieRef={lottieRef} // <-- Agora passando a referência limpa aqui
              animationData={animationData} 
              loop={true} 
              autoplay={false} 
            />
          ) : (
            <div className="w-4 h-4 rounded-full border-2 border-[#1F222F] border-t-[#00C853] animate-spin" />
          )}
        </div>
      )}

      {/* Conteúdo de Texto do Card */}
      <div className="flex-1 space-y-2">
        <span className="text-[10px] font-mono text-[#00C853] tracking-widest uppercase">// {item.category}</span>
        <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
        <p className="text-xs text-[#8E929F] font-light leading-relaxed">{item.description}</p>
        
        <div className="flex flex-wrap gap-1.5 pt-1">
          {item.techStack.map((tech, i) => (
            <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#0B0C10] border border-[#1F222F] text-[#8E929F]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}