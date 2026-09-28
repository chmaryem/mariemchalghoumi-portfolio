import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCase from "@/components/ProjectCase";
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
    <section id="projects" className="relative py-28 md:py-36 bg-panel/40">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-xl"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("projects.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("projects.title")}</h2>
        </motion.div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 border-b border-line pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs tracking-wider uppercase pb-1 border-b transition-colors focus-ring ${
                filter === cat ? "text-fg border-azure" : "text-muted border-transparent hover:text-fg"
              }`}
            >
              {t("cat." + cat)}
            </button>
          ))}
        </div>

        <div>
          {filtered.map((project, i) => (
            <ProjectCase key={project.id} project={project} index={i} onOpen={() => setActiveId(project.id)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActiveId(null)} />
    </section>
  );
}