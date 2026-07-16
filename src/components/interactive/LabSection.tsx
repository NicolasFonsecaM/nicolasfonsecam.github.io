'use client';

import { motion } from "framer-motion";

export default function LabSection() {
  return (
    <section id="lab" className="py-20 border-t border-[#1F222F]">
      <div className="space-y-2 mb-12">
        <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// EXPERIMENTOS VISUAIS</span>
        <h2 className="text-3xl font-bold tracking-tight text-white">The Playground</h2>
        <p className="text-[#8E929F] text-sm max-w-xl font-light">
          Pequenos testes de UI e conceitos de animação vetorial que utilizo para explorar limites do front-end.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Experimento 1: SVG Magnético / Botão Animado */}
        <div className="group relative p-6 rounded-xl bg-[#12141C] border border-[#1F222F] flex flex-col justify-between space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#8E929F]">#01 MICRO-INTERAÇÃO</span>
            <h4 className="text-lg font-semibold text-white">Spring Button</h4>
          </div>

          {/* Área de demonstração interativa */}
          <div className="h-32 flex items-center justify-center bg-[#0B0C10] rounded-lg border border-[#1F222F]/40 overflow-hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-5 py-2.5 rounded-lg bg-[#00C853]/10 border border-[#00C853]/30 text-[#00C853] font-mono text-xs tracking-wider uppercase hover:bg-[#00C853] hover:text-[#0B0C10] transition-colors duration-200"
            >
              Física de Mola
            </motion.button>
          </div>
        </div>

        {/* Experimento 2: Linha Dinâmica em SVG */}
        <div className="group relative p-6 rounded-xl bg-[#12141C] border border-[#1F222F] flex flex-col justify-between space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#8E929F]">#02 VETORIAL</span>
            <h4 className="text-lg font-semibold text-white">Interactive Path</h4>
          </div>

          {/* Área de demonstração com um SVG animado sutil */}
          <div className="h-32 flex items-center justify-center bg-[#0B0C10] rounded-lg border border-[#1F222F]/40 overflow-hidden relative">
            <svg width="100" height="40" viewBox="0 0 100 40" className="stroke-current text-[#8E929F] group-hover:text-[#00C853] transition-colors duration-500">
              <motion.path
                d="M 10,20 Q 50,0 90,20"
                fill="transparent"
                strokeWidth="2"
                initial={{ pathLength: 0.2, pathOffset: 0 }}
                animate={{ pathLength: 0.6, pathOffset: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </svg>
          </div>
        </div>

        {/* Experimento 3: Toggle de Foco (Contraste Técnico) */}
        <div className="group relative p-6 rounded-xl bg-[#12141C] border border-[#1F222F] flex flex-col justify-between space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#8E929F]">#03 DARK MODE</span>
            <h4 className="text-lg font-semibold text-white">Contrast Card</h4>
          </div>

          <div className="h-32 flex items-center justify-center bg-[#0B0C10] rounded-lg border border-[#1F222F]/40 p-4">
            <div className="w-full space-y-2 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-2 w-1/2 bg-white rounded-full" />
              <div className="h-2 w-full bg-[#1F222F] rounded-full" />
              <div className="h-2 w-3/4 bg-[#1F222F] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}