export const profile = {
  name: "Mariem Chalghoumi",
  title: "Full-Stack & AI Software Engineer",
  rotatingRoles: [
    "AI & Generative AI",
    "Full-Stack Development",
    "RAG & Multi-Agent Systems",
    "Computer Vision",
  ],
  summary:
    "Full-stack software engineer graduating from ESPRIT (Tunisia), building web applications end to end — from Angular and Spring Boot to React and Node.js, through to Docker and CI/CD deployment — and increasingly weaving in generative AI components like RAG, agents and LLMs.",
  location: "Tunisia",
  email: "mariem.chalghoumi@esprit.tn",
  phone: "+216 92 340 163",
  links: {
    github: "https://github.com/chmaryem",
    linkedin: "https://www.linkedin.com/in/chalghoumi-mariem-37a48b204",
  },
  cvFile: "/assets/Mariem-Chalghoumi-CV.pdf",
};

export const aboutStory = [
  {
    label: "Computer Science",
    detail: "Licence en Informatique, Faculté des Sciences de Bizerte (2020–2023).",
  },
  {
    label: "Data Science",
    detail: "Master 1 en Science des Données, Faculté des Sciences de Bizerte (2023–2024).",
  },
  {
    label: "Software Engineering",
    detail: "Diplôme d'Ingénieur en Génie Logiciel, ESPRIT, Tunisia (2024–2026).",
  },
  {
    label: "AI / Deep Learning",
    detail: "Applied PyTorch, CNNs, ViT and Swin Transformer across internships and course projects.",
  },
  {
    label: "Generative AI / RAG",
    detail: "Built multi-agent RAG systems with LangGraph, ChromaDB and cross-encoder reranking.",
  },
  {
    label: "AI-Powered Software Engineering",
    detail: "Currently combining full-stack engineering with generative AI in a code-optimization assistant.",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  location?: string;
  description: string[];
  technologies: string[];
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "tritux-pfe",
    role: "PFE Ingénieur — AI Assistant for Code Optimization",
    company: "Tritux Group",
    date: "01/2026 – 07/2026",
    description: [
      "Developing a VS Code extension and a React dashboard to integrate and track the features of a development assistant.",
      "Backend integration via MCP, Redis and Docker, with CI/CD automated through GitHub Actions.",
      "The assistant is powered by a multi-agent RAG engine (LangGraph) with multi-query retrieval (ChromaDB), cross-encoder reranking and a knowledge graph for vulnerability detection.",
    ],
    technologies: [
      "React",
      "VS Code Extension",
      "Python",
      "MCP",
      "Redis",
      "Docker",
      "GitHub Actions",
      "CI/CD",
       "LangChain",
      "LangGraph",
      "RAG",
      "PostgreSQL",
      "ChromaDB",
    ],
    featured: true,
  },
  {
    id: "tritux-stage",
    role: "Stage Ingénieur — AI Outfit Recommendation Platform",
    company: "Tritux Group",
    date: "06/2025 – 08/2025",
    description: [
      "Built an outfit-recommendation application with Spring Boot and Angular, integrating AI models via FastAPI.",
      "Designed a recommendation engine driven by user interaction history, powered by a PyTorch CNN trained for emotion detection.",
    ],
    technologies: ["Spring Boot", "Angular", "MySQL", "FastAPI", "PyTorch", "CNN"],
  },
  {
    id: "neuro-smart",
    role: "Stage d'Immersion — E-commerce Platform & KPI Analysis",
    company: "Neuro Smart Technologie",
    date: "07/2024 – 08/2024",
    description: [
      "Developed an e-commerce platform with Angular and Spring Boot.",
      "Built dashboards for KPI tracking.",
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Dashboards"],
  },
  {
    id: "afroser",
    role: "Stage de Fin d'Études — HR & Accounting Management Platform",
    company: "Afroser",
    date: "01/2023 – 05/2023",
    description: [
      "Designed an HR management platform with the MERN stack.",
      "Built a cross-platform mobile app with Flutter and Firebase.",
    ],
    technologies: ["MERN", "Flutter", "Firebase"],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  category: "AI" | "Generative AI" | "Computer Vision" | "Full-Stack" | "Mobile";
  features: string[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "coding-factory",
    name: "Coding Factory — Adaptive E-learning",
    description:
      "An e-learning platform built with Angular and Spring Boot, with an NLP sentiment-analysis system to process student complaints and feedback, plus a recommendation system that adapts content and courses to each student's profile and level test.",
    technologies: ["Angular", "Spring Boot", "NLP"],
    category: "Full-Stack",
    features: [
      "Sentiment analysis on student feedback and complaints",
      "Content recommendation adapted to student profile and level",
    ],
     images: ["/assets/s1.PNG", "/assets/s3.PNG","/assets/s4.PNG","/assets/s6.PNG"],
  },
    {
    id: "outfit-recommender",
    name: "AI Outfit Recommendation Platform",
    description:
      "A Spring Boot and Angular application recommending outfits through a FastAPI-served recommendation engine driven by user interaction history and a PyTorch CNN trained for emotion detection.",
    technologies: ["Spring Boot", "Angular", "FastAPI", "PyTorch", "CNN"],
    category: "Computer Vision",
    features: [
      "Emotion detection via a trained CNN",
      "Recommendations based on interaction history",
    ],
    images: ["/assets/m1.PNG", "/assets/m2.PNG","/assets/m3.PNG","/assets/m4.PNG","/assets/m5.PNG"],
  },
  {
    id: "health-tracker",
    name: "Health Tracking Mobile App",
    description:
      "A Flutter mobile app for tracking health habits — diet, sleep, physical activity and goals — with an LLM system based on LLaMA and FastAPI that automatically adapts recommendations to the user's profile.",
    technologies: ["Flutter", "LLaMA", "FastAPI", "LLM"],
    category: "Mobile",
    features: [
      "Tracks diet, sleep, activity and goals",
      "LLM-driven personalized recommendations",
    ],
    images: ["/assets/n1.png", "/assets/n2.png"],
  },

  {
    id: "ecommerce-kpi",
    name: "E-commerce Platform & KPI Dashboards",
    description:
      "An e-commerce platform built with Angular and Spring Boot, with dashboards for tracking key performance indicators.",
    technologies: ["Angular", "Spring Boot", "MySQL"],
    category: "Full-Stack",
    features: ["KPI dashboards", "Full-stack e-commerce flows"],
     images: ["/assets/aa.png"],
  },
  {
    id: "hr-platform",
    name: "HR & Accounting Management Platform",
    description:
      "An HR management platform built with the MERN stack, paired with a cross-platform mobile app built in Flutter with Firebase.",
    technologies: ["MERN", "Flutter", "Firebase"],
    category: "Full-Stack",
    features: ["Web HR management platform", "Companion Flutter mobile app"],
    images: ["/assets/d1.PNG", "/assets/d2.PNG","/assets/d3.PNG","/assets/d4.PNG"],
  },
  
];

export const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Frontend",
    skills: ["React", "Angular", "Flutter"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "FastAPI", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB", "FAISS", "Pinecone"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "CNN", "ViT", "Swin Transformer", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    category: "Generative AI",
    skills: ["LLM", "RAG", "LangChain", "LangGraph", "MCP", "Multi-Agent Orchestration", "Prompt Engineering"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "GitHub Actions", "CI/CD", "MLflow", "Git", "GitHub", "Linux"],
  },
];

export const education = [
  {
    degree: "Diplôme d'Ingénieur en Génie Logiciel",
    school: "ESPRIT, Tunisia",
    date: "09/2024 – 07/2026",
  },
  {
    degree: "Master 1 en Science des Données",
    school: "Faculté des Sciences de Bizerte",
    date: "09/2023 – 05/2024",
  },
  {
    degree: "Licence en Informatique",
    school: "Faculté des Sciences de Bizerte",
    date: "09/2020 – 05/2023",
  },
];

export const interests = [
  "Generative AI",
  "RAG",
  "Multi-Agent Systems",
  "AI-Assisted Software Engineering",
  "Computer Vision",
  "MLOps",
];
