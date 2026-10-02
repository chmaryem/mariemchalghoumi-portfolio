import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

const RING_GRADIENTS = [
  "conic-gradient(from 0deg, #3D7FFF, #7C6CF2, #3D7FFF)",
  "conic-gradient(from 0deg, #7C6CF2, #5ecfc0, #7C6CF2)",
  "conic-gradient(from 0deg, #5ecfc0, #3D7FFF, #5ecfc0)",
];
const TAG_COLORS = [
  "text-azure bg-azure/10 border-azure/25",
  "text-violet bg-violet/10 border-violet/25",
  "text-[#5ecfc0] bg-[#5ecfc0]/10 border-[#5ecfc0]/25",
];

export default function Experience() {
  const t = useT();
  const { experiences } = useContent();

  return (
    <section id="experience" className="relative py-28 md:py-40 bg-panel/40 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse 45% 35% at 10% 90%, rgba(124,108,242,0.2), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("exp.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("exp.title")}</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-azure/40 via-violet/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -3 }}
                className="relative sm:pl-16 rounded-2xl border border-line bg-surface/40 hover:border-azure/30 transition-colors p-6 sm:p-7"
              >
                <div
                  className="hidden sm:flex absolute left-0 top-6 h-12 w-12 rounded-full items-center justify-center"
                  style={{ background: RING_GRADIENTS[i % RING_GRADIENTS.length] }}
                  aria-hidden="true"
                >
                  <div className="h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-full bg-panel flex items-center justify-center">
                    <Calendar size={16} className="text-fg" />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-muted tracking-wider">{exp.date}</span>
                  {exp.featured && (
                    <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-azure/30 text-azure bg-azure/10 tracking-wide uppercase">
                      {t("exp.featured")}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-semibold text-xl sm:text-2xl text-fg leading-snug">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium mt-1 mb-4 text-gradient inline-block">{exp.company}</p>

                <p className="text-muted text-sm sm:text-[15px] leading-relaxed max-w-xl mb-5">
                  {exp.description.join(" ")}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, ti) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${TAG_COLORS[ti % TAG_COLORS.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}