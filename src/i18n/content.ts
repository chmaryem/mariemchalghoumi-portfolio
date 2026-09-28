import { useMemo } from "react";
import { useLang, type Lang } from "./LanguageContext";
import {
  profile,
  aboutStory as aboutBase,
  experiences as experiencesBase,
  projects as projectsBase,
  skillGroups as skillBase,
  education as educationBase,
  interests as interestsBase,
} from "@/data/profile";
import { pipeline as pipelineBase } from "@/data/pipeline";

// Translations of the CV content. Facts are unchanged: only the wording differs.
// Technologies, dates, company names and links are shared across languages.

const summary: Record<Lang, string> = {
  en: profile.summary,
  fr: "Ingénieure logiciel full-stack diplômée de l'ESPRIT (Tunisie), je conçois des applications web de bout en bout — d'Angular et Spring Boot à React et Node.js, jusqu'au déploiement avec Docker et CI/CD — et j'y intègre de plus en plus des briques d'IA générative comme le RAG, les agents et les LLM.",
};

const roles: Record<Lang, string[]> = {
  en: profile.rotatingRoles,
  fr: [
    "IA & IA générative",
    "Développement full-stack",
    "RAG & systèmes multi-agents",
    "Vision par ordinateur",
  ],
};

const aboutFr = [
  { label: "Informatique", detail: "Licence en Informatique, Faculté des Sciences de Bizerte (2020–2023)." },
  { label: "Science des données", detail: "Master 1 en Science des Données, Faculté des Sciences de Bizerte (2023–2024)." },
  { label: "Génie logiciel", detail: "Diplôme d'Ingénieur en Génie Logiciel, ESPRIT, Tunisie (2024–2026)." },
  { label: "IA / Deep Learning", detail: "Mise en pratique de PyTorch, des CNN, de ViT et de Swin Transformer au fil des stages et des projets." },
  { label: "IA générative / RAG", detail: "Conception de systèmes RAG multi-agents avec LangGraph, ChromaDB et reranking cross-encoder." },
  { label: "Génie logiciel augmenté par l'IA", detail: "Aujourd'hui, j'associe ingénierie full-stack et IA générative dans un assistant d'optimisation de code." },
];

type ExpText = { role: string; description?: string[] };

const expText: Record<Lang, Record<string, ExpText>> = {
  en: {
    "tritux-pfe": { role: "Final Engineering Project — AI Assistant for Code Optimization" },
    "tritux-stage": { role: "Engineering Internship — AI Outfit Recommendation Platform" },
    "neuro-smart": { role: "Immersion Internship — E-commerce Platform & KPI Analysis" },
    afroser: { role: "End-of-Studies Internship — HR & Accounting Management Platform" },
  },
  fr: {
    "tritux-pfe": {
      role: "PFE Ingénieur — Assistant IA pour l'optimisation de code",
      description: [
        "Développement d'une extension VS Code et d'un dashboard React pour intégrer et suivre les fonctionnalités d'un assistant de développement.",
        "Intégration backend via MCP, Redis et Docker, avec automatisation du CI/CD grâce à GitHub Actions.",
        "L'assistant repose sur un moteur RAG multi-agents (LangGraph) avec recherche multi-query (ChromaDB), reranking cross-encoder et Knowledge Graph pour la détection de vulnérabilités.",
      ],
    },
    "tritux-stage": {
      role: "Stage Ingénieur — Plateforme de recommandation de tenues par IA",
      description: [
        "Développement d'une application de recommandation de tenues avec Spring Boot et Angular, intégrant des modèles IA via FastAPI.",
        "Conception d'un moteur de recommandation basé sur l'historique des interactions utilisateur, alimenté par un CNN PyTorch entraîné pour la détection des émotions.",
      ],
    },
    "neuro-smart": {
      role: "Stage d'Immersion — Plateforme e-commerce, analyse de KPI",
      description: [
        "Développement d'une plateforme e-commerce avec Angular et Spring Boot.",
        "Mise en place de tableaux de bord pour le suivi des KPI.",
      ],
    },
    afroser: {
      role: "Stage de fin d'études — Plateforme de gestion RH & comptabilité",
      description: [
        "Conception d'une plateforme de gestion RH avec MERN.",
        "Développement d'une application mobile multiplateforme avec Flutter et Firebase.",
      ],
    },
  },
};

type ProjText = { name: string; description: string; features: string[] };

const projText: Record<string, ProjText> = {
  "coding-factory": {
    name: "Coding Factory — E-learning adaptatif",
    description:
      "Une plateforme e-learning développée avec Angular et Spring Boot, intégrant un système NLP d'analyse des sentiments pour traiter les réclamations et retours des étudiants, ainsi qu'un système de recommandation de contenus et de cours adapté au profil et au test de niveau de chaque étudiant.",
    features: [
      "Analyse des sentiments sur les retours et réclamations des étudiants",
      "Recommandation de contenus adaptée au profil et au niveau de l'étudiant",
    ],
  },
  "health-tracker": {
    name: "Application mobile de suivi de santé",
    description:
      "Une application mobile Flutter pour le suivi des habitudes de santé (alimentation, sommeil, activité physique, objectifs), avec un système LLM basé sur LLaMA et FastAPI qui adapte automatiquement les recommandations au profil de l'utilisateur.",
    features: [
      "Suivi de l'alimentation, du sommeil, de l'activité et des objectifs",
      "Recommandations personnalisées par LLM",
    ],
  },
  "outfit-recommender": {
    name: "Plateforme de recommandation de tenues par IA",
    description:
      "Une application Spring Boot et Angular qui recommande des tenues grâce à un moteur de recommandation servi via FastAPI, basé sur l'historique des interactions utilisateur et sur un CNN PyTorch entraîné pour la détection des émotions.",
    features: [
      "Détection des émotions par un CNN entraîné",
      "Recommandations basées sur l'historique des interactions",
    ],
  },
  "ecommerce-kpi": {
    name: "Plateforme e-commerce & tableaux de bord KPI",
    description:
      "Une plateforme e-commerce développée avec Angular et Spring Boot, avec des tableaux de bord de suivi des indicateurs clés de performance.",
    features: ["Tableaux de bord KPI", "Parcours e-commerce full-stack"],
  },
  "hr-platform": {
    name: "Plateforme de gestion RH & comptabilité",
    description:
      "Une plateforme de gestion RH développée avec la stack MERN, accompagnée d'une application mobile multiplateforme en Flutter et Firebase.",
    features: ["Plateforme web de gestion RH", "Application mobile Flutter associée"],
  },
};

const skillCategoriesFr = [
  "Programmation",
  "Frontend",
  "Backend",
  "Bases de données",
  "IA & Machine Learning",
  "IA générative",
  "DevOps & Outils",
];

const skillNamesFr: Record<string, string> = {
  "Multi-Agent Orchestration": "Orchestration multi-agents",
};

const educationText: Record<Lang, { degree: string; school: string }[]> = {
  en: [
    { degree: "Engineering Degree in Software Engineering", school: "ESPRIT, Tunisia" },
    { degree: "Master 1 in Data Science", school: "Faculty of Sciences of Bizerte" },
    { degree: "Bachelor's Degree in Computer Science", school: "Faculty of Sciences of Bizerte" },
  ],
  fr: [
    { degree: "Diplôme d'Ingénieur en Génie Logiciel", school: "ESPRIT, Tunisie" },
    { degree: "Master 1 en Science des Données", school: "Faculté des Sciences de Bizerte" },
    { degree: "Licence en Informatique", school: "Faculté des Sciences de Bizerte" },
  ],
};

const interestsFr = [
  "IA générative",
  "RAG",
  "Systèmes multi-agents",
  "Ingénierie logicielle assistée par l'IA",
  "Vision par ordinateur",
  "MLOps",
];

const pipelineFr = [
  { label: "Développeur", detail: "Travaille dans l'éditeur et sollicite l'assistant." },
  { label: "Extension VS Code", detail: "Capture la demande et le contexte du code depuis l'éditeur." },
  { label: "Orchestration IA (MCP)", detail: "Achemine la demande vers les bons agents via MCP." },
  { label: "Système multi-agents", detail: "Des agents LangGraph coordonnent les étapes d'analyse." },
  { label: "Pipeline RAG", detail: "Récupère le code et le contexte pertinents avant de générer une réponse." },
  { label: "Recherche multi-query", detail: "Recherche ChromaDB sur plusieurs reformulations de la requête." },
  { label: "Reranking cross-encoder", detail: "Réordonne les résultats selon leur pertinence réelle." },
  { label: "Knowledge Graph", detail: "Cartographie les dépendances pour aider à détecter les vulnérabilités." },
  { label: "Analyse par LLM", detail: "Synthétise les résultats en une recommandation concrète." },
  { label: "Recommandations", detail: "Présentées au développeur dans le dashboard." },
  { label: "Retour du développeur", detail: "Le développeur accepte, modifie ou rejette la suggestion." },
  { label: "Amélioration de la base de connaissances", detail: "Le retour alimente la récupération future." },
];

export function useContent() {
  const { lang } = useLang();

  return useMemo(() => {
    const experiences = experiencesBase.map((e) => {
      const o = expText[lang][e.id];
      return o ? { ...e, role: o.role, description: o.description ?? e.description } : e;
    });

    const projects = projectsBase.map((p) => {
      if (lang === "en") return p;
      const o = projText[p.id];
      return o ? { ...p, ...o } : p;
    });

    const skillGroups = skillBase.map((g, i) => ({
      category: lang === "fr" ? skillCategoriesFr[i] ?? g.category : g.category,
      skills: lang === "fr" ? g.skills.map((s) => skillNamesFr[s] ?? s) : g.skills,
    }));

    const education = educationBase.map((e, i) => ({ ...e, ...educationText[lang][i] }));

    const aboutStory = lang === "fr" ? aboutFr : aboutBase;
    const interests = lang === "fr" ? interestsFr : interestsBase;
    const pipeline = lang === "fr" ? pipelineFr : pipelineBase;

    return {
      summary: summary[lang],
      roles: roles[lang],
      aboutStory,
      experiences,
      projects,
      skillGroups,
      education,
      interests,
      pipeline,
    };
  }, [lang]);
}