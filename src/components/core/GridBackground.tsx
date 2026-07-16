'use client';

import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState } from "react";

export default function GridBackground() {
  const { x, y } = useMousePosition();
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratação (reconciliação entre servidor e cliente)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-[#0B0C10]" />;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0B0C10]">
      {/* 1. Spotlight de alta fidelidade (Usando variáveis CSS diretas e cor hexadecimal sólida com opacidade inline) */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 200, 83, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* 2. Grelha de Linhas de Grade */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1F222F_1px,transparent_1px),linear-gradient(to_bottom,#1F222F_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.12]" 
      />

      {/* 3. Máscara de Escurecimento das Bordas */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0B0C10_85%)]" 
      />
    </div>
  );
}