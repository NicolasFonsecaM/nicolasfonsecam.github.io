import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <-- Força o Next.js a gerar HTML/CSS/JS estáticos na pasta /out
  images: {
    unoptimized: true, // <-- Necessário para renderizar imagens estáticas no GitHub Pages
  },
};

export default nextConfig;