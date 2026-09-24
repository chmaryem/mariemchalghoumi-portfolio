import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/profile";
import ProjectVisual from "@/components/ProjectVisual";

interface Props {
  project: Project;
  onOpen: () => void;
  index: number;
}

export default function ProjectCard({ project, onOpen, index }: Props) {
  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="group text-left rounded-2xl border border-line bg-surface/40 overflow-hidden hover:border-azure/40 transition-colors focus-ring"
    >
      <div className="relative h-52 overflow-hidden border-b border-line bg-ink flex items-center justify-center">
        {project.images?.[0] ? (
          <img
            src={project.images[0]}
            alt={project.name}
            className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <ProjectVisual category={project.category} />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-semibold text-fg text-base leading-snug">{project.name}</h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted group-hover:text-azure group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>
        <p className="text-muted text-sm leading-relaxed line-clamp-3 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-line text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}