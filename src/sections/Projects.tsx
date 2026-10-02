import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectGridCard from "@/components/ProjectGridCard";
import ProjectModal from "@/components/ProjectModal";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

const CATEGORIES = ["All", "Generative AI", "AI", "Computer Vision", "Full-Stack", "Mobile"] as const;

export default function Projects() {
  const t = useT();
  const { projects } = useContent();
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects]
  );
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-panel/40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse 50% 40% at 85% 0%, rgba(124,108,242,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-xl text-center mx-auto"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("projects.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">
            {t("projects.title").split(" ")[0]} <span className="text-gradient">{t("projects.title").split(" ").slice(1).join(" ")}</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-colors focus-ring ${
                filter === cat
                  ? "bg-gradient-to-r from-azure to-violet text-white border-transparent"
                  : "text-muted border-line hover:text-fg hover:border-azure/40"
              }`}
            >
              {t("cat." + cat)}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectGridCard key={project.id} project={project} index={i} onOpen={() => setActiveId(project.id)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActiveId(null)} />
    </section>
  );
}