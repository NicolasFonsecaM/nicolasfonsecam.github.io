'use client';

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function InteractiveSvgCard() {
  const [animationData, setAnimationData] = useState<any>(null);

  // Carrega o arquivo JSON de animação de forma segura no lado do cliente
  useEffect(() => {
    fetch("/splash-logo.json")
      .then((res) => {
        if (!res.ok) throw new Error("Arquivo splash-logo.json não encontrado na pasta public/");
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-12 border-t border-[#1F222F]/60">
      <div className="p-8 rounded-2xl bg-[#12141C] border border-[#1F222F] flex flex-col md:flex-row items-center gap-8">
        
        {/* Container do Player da Animação JSON */}
        <div className="w-full md:w-1/3 h-48 bg-[#0B0C10] rounded-xl border border-[#1F222F]/50 flex items-center justify-center p-4 overflow-hidden">
          {animationData ? (
            <div className="w-32 h-32">
              <Lottie 
                animationData={animationData} 
                loop={true} 
                autoplay={true}
              />
            </div>
          ) : (
            // Placeholder de carregamento sutil enquanto o JSON é processado
            <div className="w-8 h-8 rounded-full border-2 border-[#1F222F] border-t-[#00C853] animate-spin" />
          )}
        </div>

        {/* Informações Autorais da Animação */}
        <div className="flex-1 space-y-4">
          <span className="text-[10px] font-mono text-[#00C853] uppercase tracking-wider bg-[#00C853]/10 px-2 py-0.5 rounded border border-[#00C853]/20">
            Estudo de Animação Lottie (JSON)
          </span>
          <h3 className="text-2xl font-bold text-white">Logo Splash Animada</h3>
          <p className="text-[#8E929F] text-sm leading-relaxed font-light">
            Animação e estudo de design desenvolvidos sob medida para o projeto <strong>Finance Lab</strong>. O desafio consistiu em transformar a nossa logo vetorial em um ícone dinâmico e fluido, otimizado para preencher a tela de splash durante a inicialização do aplicativo móvel.
          </p>
        </div>
      </div>
    </section>
  );
}