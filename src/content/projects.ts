export interface Education {
  institution: string;
  course: string;
  period: string;
  status: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Mobile" | "Web" | "Segurança / Scripting";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const educationList: Education[] = [
  {
    institution: "FATEC - São José dos Campos (SJC)",
    course: "Análise e Desenvolvimento de Sistemas (ADS)",
    period: "2025 - Atualmente",
    status: "Em andamento"
  },
  {
    institution: "Faculdade Anhanguera (EAD)",
    course: "Cibersegurança / Cyber Security",
    period: "2024 - Atualmente",
    status: "Em andamento"
  }
];

export const projects: Project[] = [
  {
    id: "finance-lab",
    title: "Finance Lab",
    description: "Aplicativo móvel de gestão financeira desenvolvido com React Native e integrado com a Pluggy API. Foco em alta fidelidade visual, controle rígido de estados e tratamento seguro de dados financeiros.",
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "Pluggy API", "Tailwind CSS"],
    githubUrl: "#" // Insira o link do seu GitHub
  },
  {
    id: "nexusdev",
    title: "NexusDev Agente",
    description: "Assistente inteligente desenvolvido para atuar na triagem e no processamento analítico de dados de saúde pública e imunização.",
    category: "Web",
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
    githubUrl: "#"
  },
  
];