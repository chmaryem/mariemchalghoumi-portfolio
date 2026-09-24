import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/profile";
import ProjectVisual from "@/components/ProjectVisual";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const images = project?.images ?? [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-line bg-panel"
          >
            {/* Main image / visual — shown in full, never cropped */}
            <div className="h-72 sm:h-[26rem] border-b border-line bg-ink flex items-center justify-center overflow-hidden">
              {images[activeImage] ? (
                <img
                  src={images[activeImage]}
                  alt={`${project.name} — screenshot ${activeImage + 1}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <ProjectVisual category={project.category} />
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full bg-ink/70 text-fg hover:bg-ink transition-colors focus-ring"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-10">
              <span className="text-azure text-xs font-medium uppercase tracking-wide">{project.category}</span>
              <h3 id="project-modal-title" className="font-display font-bold text-2xl sm:text-3xl text-fg mt-2 mb-4">
                {project.name}
              </h3>
              <p className="text-muted leading-relaxed mb-6 max-w-2xl">{project.description}</p>

              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto scrollbar-thin mb-8 -mx-1 px-1 pb-1">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Show screenshot ${i + 1}`}
                      aria-current={activeImage === i}
                      className={`h-20 w-32 shrink-0 rounded-lg overflow-hidden border-2 transition-colors focus-ring ${
                        activeImage === i ? "border-azure" : "border-line hover:border-azure/40"
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <h4 className="text-fg text-sm font-medium mb-2">Key features</h4>
              <ul className="space-y-1.5 mb-6">
                {project.features.map((f) => (
                  <li key={f} className="text-muted text-sm flex gap-2">
                    <span className="text-azure/60 mt-2 h-1 w-1 rounded-full bg-current shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="text-fg text-sm font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-line text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}