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
  title: "Nicolas Fonseca | Portfólio",
  description: "Desenvolvedor focado em construir aplicações completas e estudar segurança digital.",
  openGraph: {
    title: "Nicolas Fonseca | Portfólio",
    description: "Desenvolvedor em constante evolução e estudante de segurança digital.",
    url: "https://nicolasfonsecam.github.io",
    siteName: "Nicolas Fonseca | Portfólio",
    locale: "pt_BR",
    type: "website",
  },
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
