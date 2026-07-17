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
  longDescription?: string; // Para o modal detalhado
  category: string;
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
    category: "Mobile App",
    description: "Aplicativo móvel de gestão financeira desenvolvido com React Native e integrado com a Pluggy API.",
    longDescription: "O Finance Lab foi arquitetado com foco em alta fidelidade visual, controle rígido de estados e tratamento seguro de dados financeiros. Integra de forma transparente credenciais via Pluggy API e gerencia fluxos internos complexos de navegação e performance no ecossistema mobile.",
    techStack: ["React Native", "TypeScript", "Pluggy API", "Tailwind CSS"],
    githubUrl: "#"
  },
  {
    id: "nexusdev",
    title: "NexusDev Agente",
    category: "Web Application",
    description: "Assistente inteligente desenvolvido para atuar na triagem e no processamento analítico de dados de saúde pública.",
    longDescription: "Um agente inteligente estruturado para manipulação automatizada e segura de bases de dados de imunização pública. Conta com uma interface limpa, focada em painéis analíticos e barramento de requisições de alto desempenho.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
    githubUrl: "#"
  }
];

export const experiments: Project[] = [
  {
    id: "splash-logo-lottie",
    title: "Logo Splash Animada",
    category: "Animação & Vetores",
    description: "Estudo de movimento transformando uma logo vetorial em um ícone dinâmico e fluido via Lottie (JSON).",
    longDescription: "Desenvolvido sob medida para a tela de inicialização (splash screen) do Finance Lab. O objetivo foi criar uma transição visual extremamente leve e responsiva, manipulando propriedades físicas vetoriais diretamente via código gerado por Lottie.",
    techStack: ["Lottie (JSON)", "Adobe After Effects", "Vector Design"],
  },
  {
    id: "girlfriend-project",
    title: "Website Especial",
    category: "Web Frontend",
    description: "Um projeto web interativo, responsivo e altamente personalizado desenvolvido sob medida para minha namorada.",
    longDescription: "Interface web autoral focada em micro-interações estéticas, transições físicas suaves em CSS e uma curadoria visual dedicada. Um ambiente interativo criado para explorar design responsivo refinado.",
    techStack: ["React", "CSS Transitions", "HTML5"],
    githubUrl: "#",
    liveUrl: "#"
  }
];