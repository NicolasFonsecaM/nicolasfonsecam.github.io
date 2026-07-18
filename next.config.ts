/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Adicione esta linha exatamente aqui
  images: {
    unoptimized: true, // Necessário para o GitHub Pages aceitar imagens tag <img /> sem o servidor Next.js otimizando
  },
};

export default nextConfig;