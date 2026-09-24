import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/profile";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const CATEGORIES = ["All", "Generative AI", "AI", "Computer Vision", "Full-Stack", "Mobile"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

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
          <span className="text-azure text-sm font-medium">Projects</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">Selected work</h2>
        </motion.div>

        <div className="flex gap-2 overflow-x-auto scrollbar-thin pb-2 mb-10 -mx-1 px-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm border transition-colors focus-ring ${
                filter === cat
                  ? "bg-azure text-white border-azure"
                  : "border-line text-muted hover:text-fg hover:border-azure/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
