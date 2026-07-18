/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // <-- Adicione esta linha exatamente aqui
  images: {
    unoptimized: true,
  },
};

export default nextConfig;