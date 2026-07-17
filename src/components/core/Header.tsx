'use client';

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[#1F222F]/40 bg-[#0B0C10]/60 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo Monograma Minimalista */}
        <a href="#" className="font-mono text-sm font-bold tracking-widest text-white hover:text-[#00C853] transition-colors duration-200">
          N<span className="text-[#00C853]">.</span>DEV
        </a>

        {/* Navegação Atualizada */}
        <nav className="flex items-center gap-5 md:gap-6">
          <a
            href="#about"
            className="text-[11px] md:text-xs font-mono text-[#8E929F] hover:text-white transition-colors duration-200"
          >
            // sobre
          </a>
          <a
            href="#education"
            className="text-[11px] md:text-xs font-mono text-[#8E929F] hover:text-white transition-colors duration-200"
          >
            // formação
          </a>
          <a
            href="#projects"
            className="text-[11px] md:text-xs font-mono text-[#8E929F] hover:text-white transition-colors duration-200"
          >
            // projetos
          </a>
          <a
            href="#contact"
            className="text-[11px] md:text-xs font-mono text-[#8E929F] hover:text-[#00C853] transition-colors duration-200"
          >
            // contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}