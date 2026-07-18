'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center py-24 z-10">
      <div className="space-y-6 max-w-3xl">
        
        {/* Etiqueta Superior Ultra-Fina e Minimalista */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs font-extralight tracking-[0.25em] text-[#8E929F] uppercase"
        >
          PORTFÓLIO
        </motion.div>

        {/* Nome em Destaque Absoluto */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-none"
        >
          Nicolas <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C2C5D1] to-[#00C853]">
            Fonseca
          </span>
        </motion.h1>

        {/* Apresentação Realista e Sem Filtro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[#8E929F] text-base md:text-lg font-light leading-relaxed max-w-2xl"
        >
          Desenvolvedor em constante evolução e estudante de segurança digital. Busco atuar tanto na criação de aplicações completas (front-end e back-end) quanto no entendimento de brechas e sistemas defensivos. Tenho forte interesse em segurança ofensiva (Red Team) e acredito em construir uma base técnica ampla e sólida como o primeiro grande passo de carreira.
        </motion.p>

        {/* Botões de Conversão Técnica */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="/Nicolas_FonsecaMeira_Currículo.pdf" 
            download="Curriculo_Nicolas_Fonseca.pdf"
            className="group relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0B0C10] font-semibold text-sm transition-all duration-300 hover:bg-[#00C853] hover:shadow-[0_0_25px_rgba(0,200,83,0.3)]"
          >
            Baixar Currículo
            <span className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#12141C] border border-[#1F222F] text-sm font-medium text-white hover:text-[#00C853] hover:border-[#00C853]/40 transition-all duration-200"
          >
            Ver Projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
}