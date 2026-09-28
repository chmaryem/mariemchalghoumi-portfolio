import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/profile";
import ProjectVisual from "@/components/ProjectVisual";
import { useT } from "@/i18n/ui";

interface Props {
  project: Project;
  index: number;
  onOpen: () => void;
}

export default function ProjectCase({ project, index, onOpen }: Props) {
  const t = useT();
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 border-b border-line last:border-b-0"
    >
      <div className={reversed ? "md:order-2" : ""}>
        <span className="font-mono text-azure text-xs tracking-[0.2em]">{num}</span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-fg mt-3 mb-4 leading-snug">
          {project.name}
        </h3>
        <p className="text-muted leading-relaxed mb-5 max-w-md">{project.description}</p>

        <ul className="space-y-1.5 mb-6">
          {project.features.map((f) => (
            <li key={f} className="text-muted text-sm flex gap-2">
              <span className="text-azure/60 mt-2 h-1 w-1 rounded-full bg-current shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted/80 tracking-wide mb-6">
          {project.technologies.join(" · ")}
        </p>

        <button
          onClick={onOpen}
          className="group inline-flex items-center gap-1.5 text-fg text-sm font-medium border-b border-fg/40 pb-0.5 hover:border-azure hover:text-azure transition-colors focus-ring"
        >
          {t("case.viewDetails")}
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <button
        onClick={onOpen}
        className={`block w-full aspect-[4/3] rounded-lg overflow-hidden border border-line focus-ring ${
          reversed ? "md:order-1" : ""
        }`}
        aria-label={t("case.open", { name: project.name })}
      >
        {project.images?.[0] ? (
          <img
            src={project.images[0]}
            alt={project.name}
            className="w-full h-full object-contain bg-ink"
          />
        ) : (
          <ProjectVisual category={project.category} />
        )}
      </button>
    </motion.article>
  );
}