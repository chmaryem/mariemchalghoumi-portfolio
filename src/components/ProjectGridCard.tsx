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

const TAG_COLORS = [
  "text-azure bg-azure/10 border-azure/25",
  "text-violet bg-violet/10 border-violet/25",
  "text-[#5ecfc0] bg-[#5ecfc0]/10 border-[#5ecfc0]/25",
];

export default function ProjectGridCard({ project, index, onOpen }: Props) {
  const t = useT();
  const color = TAG_COLORS[index % TAG_COLORS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-line bg-surface/40 overflow-hidden hover:border-azure/40 hover:shadow-[0_20px_50px_-20px_rgba(61,127,255,0.25)] transition-[border-color,box-shadow] duration-300"
    >
      <button onClick={onOpen} className="relative block w-full aspect-[16/10] overflow-hidden focus-ring" aria-label={t("case.open", { name: project.name })}>
        {project.images?.[0] ? (
          <img
            src={project.images[0]}
            alt={project.name}
            className="w-full h-full object-contain bg-ink transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <ProjectVisual category={project.category} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <div className="p-6">
        <span className={`inline-block text-[11px] font-medium px-2.5 py-1 rounded-full border mb-3 ${color}`}>
          {t("cat." + project.category)}
        </span>
        <h3 className="font-display font-semibold text-fg text-lg leading-snug mb-2">{project.name}</h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

        <button
          onClick={onOpen}
          className="group/link inline-flex items-center gap-1.5 text-fg text-sm font-medium hover:text-azure transition-colors focus-ring"
        >
          {t("case.viewDetails")}
          <ArrowUpRight size={15} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
}