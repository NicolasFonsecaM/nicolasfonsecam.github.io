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
  longDescription?: string;
  category: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string[]; // Padronizado estritamente como array de strings
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
    category: "Mobile App / Full Stack Backend",
    description: "Aplicativo móvel multiplataforma focado em gestão financeira e análise de ativos com Expo/React Native, integrado a múltiplos microsserviços em Python e automação de e-mails.",
    longDescription: "Atuei ativamente no design e na arquitetura do ecossistema. Desenvolvi todo o protótipo de alta fidelidade das interfaces no Figma e liderei a implementação do Front-End utilizando TypeScript e Expo, refinando componentes estáticos e micro-interações de tela. No gerenciamento de negócio e monetização, integrei o ecossistema do RevenueCat para controle estrito das assinaturas e travas dos planos Silver (gratuito) e Gold. No Back-End (Python/FastAPI), implementei o microsserviço de comunicação transacional integrado à API do Resend, estruturando os gatilhos automatizados em HTML para fluxos de boas-vindas, recuperação de credenciais, exclusão de contas e suporte interno. Além disso, desenvolvi a lógica de segurança (blindagem no back-end) para controle de consumo de dados da IA (Gemini), mitigando requisições duplicadas e protegendo o barramento contra desperdício acidental de tokens dos usuários.",
    techStack: ["React Native", "TypeScript / Expo", "FastAPI (Python)", "RevenueCat", "Resend API", "Figma"],
    imageUrl: [
      "/images/finance-lab/tela1.jpg",
      "/images/finance-lab/tela2.jpg",
      "/images/finance-lab/tela3.jpg",
      "/images/finance-lab/tela4.jpg"
    ]
  },
  {
    id: "vacinabrasil-bot",
    title: "Vacina Brasil Bot",
    category: "Telegram Bot / AI",
    description: "Assistente virtual inteligente no Telegram voltado à saúde pública, capaz de mapear coberturas vacinais, calendários oficiais e localizar UBSs em tempo real sem persistência de dados.",
    longDescription: "Desenvolvido em equipe (NexusDev) como Projeto Integrado (API) na FATEC São José dos Campos. O assistente consome dados processados do DATASUS e converte calendários oficiais do Ministério da Saúde de PDF para estruturas otimizadas in JSON. O bot responde em linguagem natural através da integração com LLMs locais via Ollama, processa dados geográficos (CEP e GPS) para sugerir Unidades Básicas de Saúde (UBSs) próximas e segue uma arquitetura estrita de segurança e privacidade: nenhuma informação do cidadão sofre persistência em bancos de dados. Como Scrum Master do projeto, liderei as cerimônias ágeis, mapeamento de tarefas no Jira e a consolidação das entregas do time.",
    techStack: ["Python", "Telegram API", "Ollama (AI)", "JSON Data", "Jira / Scrum"],
    githubUrl: "https://github.com/nexusdevapi/VacinaBrasil-Bot",
    imageUrl: ["/vacina_logo.jpg"] // Corrigido para array com barra inicial para evitar quebra
  },
];

export const experiments: Project[] = [
  {
    id: "splash-logo-lottie",
    title: "Logo Splash Animada",
    category: "Animação & Vetores",
    description: "Estudo de movimento transformando uma logo vetorial em um ícone dinâmico e fluido via Lottie (JSON).",
    longDescription: "Desenvolvido sob medida para a tela de inicialização (splash screen) do Finance Lab. O objetivo foi criar uma transição visual extremamente leve e responsiva, manipulando propriedades físicas vetoriais diretamente via código gerado por Lottie.",
    techStack: ["Lottie (JSON)", "Adobe After Effects", "Vector Design"],
    imageUrl: [] // Declarado como array vazio para ativar o modo de renderização de código customizado
  },
  {
    id: "core-connect-web",
    title: "CoreConnect",
    category: "Full-Stack Web Application",
    description: "Plataforma web interativa e privada desenvolvida com React, TypeScript e Vite, integrada ao Supabase para gerenciamento dinâmico de memórias, dados e consumo de APIs externas.",
    longDescription: "Desenvolvido como um estudo de caso focado no conceito de UX Emocional (interfaces personalizadas para nichos estritos de usuários) utilizando React, TypeScript e Vite. A aplicação consolida uma arquitetura Full-Stack real através da integração com o Supabase para operações de CRUD (persistência, leitura e exclusão de dados) em módulos de murais dinâmicos e centrais de registro automatizadas. O projeto explora intensamente o ecossistema multimídia e gerenciamento de estados complexos ao integrar o EmailJS para notificações assíncronas, consumo de streams externos (Spotify e players customizados do YouTube) e animações fluidas via Framer Motion. O maior destaque técnico está no módulo 'Memory Universe', um laboratório interativo de mapas de coordenadas clicáveis, modais dinâmicos e renderização condicional avançada baseada em estados do usuário.",
    techStack: ["React", "TypeScript / Vite", "Supabase", "Tailwind CSS", "Framer Motion", "EmailJS API"],
    imageUrl: [
      "/images/core-connect/tela1.png",
      "/images/core-connect/tela2.png",
      "/images/core-connect/tela3.gif",
    ]
  },
];