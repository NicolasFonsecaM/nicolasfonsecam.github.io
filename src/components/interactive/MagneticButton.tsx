'use client';

import { motion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MagneticButton({ children, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calcula o centro do elemento
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calcula a distância do mouse até o centro (com um fator de atração de 35%)
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({ x: distanceX * 0.35, y: distanceY * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        onClick={onClick}
        className="cursor-pointer"
      >
        {children}
      </motion.div>
    </div>
  );
}