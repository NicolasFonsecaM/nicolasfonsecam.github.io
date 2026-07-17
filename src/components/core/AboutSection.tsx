'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  const skills = [
    "HTML5 / CSS3", "JavaScript", "TypeScript", "React Native",
    "Python", "Node.js", "Git / GitHub", "Redes (Conceitos)", "Linux (Básico)", 
    "UI/UX Aesthetics", "Scrum Master", "Pensamento Analítico", "Trabalho em Equipe"
  ];

  return (
    <section id="about" className="py-20 border-t border-[#1F222F]/60">
      <div className="space-y-2 mb-16">
        <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// QUEM SOU EU</span>
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">About Me</h2>
        <div className="w-12 h-[2px] bg-[#00C853] mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Coluna da Esquerda: Texto Narrativo */}
        <div className="space-y-6 text-[#8E929F] font-light leading-relaxed text-sm md:text-base">
          <p>
            Meu interesse por tecnologia começou cedo, alimentado pela curiosidade genuína sobre o universo hacker e segurança digital. Embora tenha iniciado minha trajetória em um ambiente industrial, percebi que meu verdadeiro diferencial estava na resolução de problemas técnicos.
          </p>
          <p>
            Esse estalo me levou a iniciar a graduação em Cibersegurança. Buscando um ecossistema prático e presencial, ingressei também na FATEC-SJC, onde descobri uma forte aptidão pelo desenvolvimento de software.
          </p>
          <p>
            Hoje, atuo na intersecção entre a lógica de programação e a construção de interfaces. Gosto do desafio de projetar telas limpas usando <span className="text-[#00C853] font-mono text-xs">TypeScript</span> e <span className="text-[#00C853] font-mono text-xs">React Native</span>, além de estruturar regras de negócio e integrações.
          </p>
        </div>

        {/* Coluna da Direita: Badges de Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white tracking-tight mb-6 font-sans">
            My Skills
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.03, borderColor: "rgba(0, 200, 83, 0.4)" }}
                className="text-xs font-mono px-4 py-2.5 rounded-lg bg-[#12141C] text-[#C2C5D1] border border-[#1F222F] transition-colors duration-200 cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}