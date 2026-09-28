import { useLang, type Lang } from "./LanguageContext";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.education": "Education",
  "nav.contact": "Contact",
  "nav.goHome": "Go to home",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "lang.label": "Language",

  "intro.portfolio": "Portfolio",
  "intro.title": "Software Engineer",
  "intro.tagline": "AI · Generative AI · Full-Stack · Computer Vision",
  "intro.enter": "Enter portfolio",

  "hero.kicker": "Software Engineer",
  "hero.viewWork": "View my work",
  "hero.downloadCv": "Download CV",
  "hero.scrollAbout": "Scroll to about section",

  "about.kicker": "01 — About",
  "about.h1": "Building software.",
  "about.h2": "Exploring intelligence.",
  "about.text":
    "A full-stack path that grew, year over year, into an interest in making software systems genuinely intelligent — not by chasing trends, but by shipping projects that use AI where it earns its place.",

  "exp.kicker": "02 — Experience",
  "exp.title": "Professional journey",
  "exp.featured": "Featured",

  "tritux.kicker": "Graduation Project · Tritux Group",
  "tritux.title": "AI Assistant for Code Optimization",
  "tritux.whatItDoes": "What it does",
  "tritux.tech": "Technologies",
  "tritux.demo": "Demo",
  "tritux.demoTitle": "Tritux Group — AI Assistant demo",

  "projects.kicker": "Projects",
  "projects.title": "Selected work",
  "cat.All": "All",
  "cat.Generative AI": "Generative AI",
  "cat.AI": "AI",
  "cat.Computer Vision": "Computer Vision",
  "cat.Full-Stack": "Full-Stack",
  "cat.Mobile": "Mobile",
  "case.viewDetails": "View details",
  "case.open": "Open {name} details",
  "modal.keyFeatures": "Key features",
  "modal.tech": "Technologies",
  "modal.close": "Close",
  "modal.showShot": "Show screenshot {n}",
  "modal.shotAlt": "{name} — screenshot {n}",

  "skills.kicker": "03 — Skills",
  "skills.title": "Technical toolkit",

  "interests.kicker": "What I'm exploring",
  "interests.title": "Where software meets intelligence",
  "interests.text":
    "The thread connecting my recent projects: using generative AI and multi-agent architectures as real components of a system, not just an add-on.",
  "graph.llm": "LLM",
  "graph.genai": "Generative AI",
  "graph.rag": "RAG",
  "graph.agents": "Multi-Agent Systems",
  "graph.kg": "Knowledge Graph",
  "graph.cv": "Computer Vision",
  "graph.swe": "AI Software Engineering",

  "edu.kicker": "04 — Education",
  "edu.title": "Academic path",

  "brand.kicker": "Software Engineer with an AI mindset",
  "brand.quote":
    "Building software is not only about writing code. It's about designing systems that solve real problems.",

  "contact.kicker": "Contact",
  "contact.title": "Let's build something intelligent.",
  "contact.text":
    "I'm open to opportunities in software engineering, artificial intelligence, generative AI and innovative technology projects.",

  "footer.tagline": "Software Engineer • AI • Full-Stack",
};

const fr: Dict = {
  "nav.home": "Accueil",
  "nav.about": "À propos",
  "nav.experience": "Expérience",
  "nav.projects": "Projets",
  "nav.skills": "Compétences",
  "nav.education": "Formation",
  "nav.contact": "Contact",
  "nav.goHome": "Aller à l'accueil",
  "nav.openMenu": "Ouvrir le menu",
  "nav.closeMenu": "Fermer le menu",
  "lang.label": "Langue",

  "intro.portfolio": "Portfolio",
  "intro.title": "Ingénieure logiciel",
  "intro.tagline": "IA · IA générative · Full-Stack · Vision par ordinateur",
  "intro.enter": "Entrer dans le portfolio",

  "hero.kicker": "Ingénieure logiciel — Portfolio",
  "hero.viewWork": "Voir mes projets",
  "hero.downloadCv": "Télécharger mon CV",
  "hero.scrollAbout": "Aller à la section À propos",

  "about.kicker": "01 — À propos",
  "about.h1": "Concevoir des logiciels.",
  "about.h2": "Explorer l'intelligence.",
  "about.text":
    "Un parcours full-stack devenu, d'année en année, un intérêt pour rendre les systèmes logiciels réellement intelligents — pas en suivant les modes, mais en livrant des projets qui utilisent l'IA là où elle apporte quelque chose.",

  "exp.kicker": "02 — Expérience",
  "exp.title": "Parcours professionnel",
  "exp.featured": "À la une",

  "tritux.kicker": "Projet de fin d'études · Tritux Group",
  "tritux.title": "Assistant IA pour l'optimisation de code",
  "tritux.whatItDoes": "Ce qu'il fait",
  "tritux.tech": "Technologies",
  "tritux.demo": "Démo",
  "tritux.demoTitle": "Tritux Group — démo de l'assistant IA",

  "projects.kicker": "Projets",
  "projects.title": "Réalisations choisies",
  "cat.All": "Tous",
  "cat.Generative AI": "IA générative",
  "cat.AI": "IA",
  "cat.Computer Vision": "Vision par ordinateur",
  "cat.Full-Stack": "Full-Stack",
  "cat.Mobile": "Mobile",
  "case.viewDetails": "Voir les détails",
  "case.open": "Ouvrir les détails de {name}",
  "modal.keyFeatures": "Fonctionnalités clés",
  "modal.tech": "Technologies",
  "modal.close": "Fermer",
  "modal.showShot": "Afficher la capture {n}",
  "modal.shotAlt": "{name} — capture {n}",

  "skills.kicker": "03 — Compétences",
  "skills.title": "Boîte à outils technique",

  "interests.kicker": "Ce que j'explore",
  "interests.title": "Là où le logiciel rencontre l'intelligence",
  "interests.text":
    "Le fil conducteur de mes projets récents : utiliser l'IA générative et les architectures multi-agents comme de vrais composants d'un système, et non comme un simple ajout.",
  "graph.llm": "LLM",
  "graph.genai": "IA générative",
  "graph.rag": "RAG",
  "graph.agents": "Systèmes multi-agents",
  "graph.kg": "Graphe de connaissances",
  "graph.cv": "Vision par ordinateur",
  "graph.swe": "Ingénierie logicielle IA",

  "edu.kicker": "04 — Formation",
  "edu.title": "Parcours académique",

  "brand.kicker": "Ingénieure logiciel avec un état d'esprit IA",
  "brand.quote":
    "Concevoir un logiciel, ce n'est pas seulement écrire du code. C'est concevoir des systèmes qui résolvent de vrais problèmes.",

  "contact.kicker": "Contact",
  "contact.title": "Construisons quelque chose d'intelligent.",
  "contact.text":
    "Je suis ouverte aux opportunités en ingénierie logicielle, intelligence artificielle, IA générative et projets technologiques innovants.",

  "footer.tagline": "Ingénieure logiciel • IA • Full-Stack",
};

const dictionaries: Record<Lang, Dict> = { en, fr };

export function useT() {
  const { lang } = useLang();
  return (key: string, vars?: Record<string, string | number>) => {
    let text = dictionaries[lang][key] ?? dictionaries.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  };
}