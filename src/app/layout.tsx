import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Configuração da fonte Inter (focada em legibilidade e excelente para UI de tecnologia)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolas | Portfolio",
  description: "Desenvolvedor focado em UI/UX de alta fidelidade e performance técnica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0B0C10] text-[#F5F5F7] min-h-screen relative">
        {/* Efeito sutil de textura/ruído que se estende por toda a aplicação */}
        <div className="noise-overlay" />
        
        {children}
      </body>
    </html>
  );
}