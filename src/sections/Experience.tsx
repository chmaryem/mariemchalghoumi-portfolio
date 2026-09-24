import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-panel/40">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="text-azure text-sm font-medium">Experience</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">
            Professional journey
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-azure via-violet to-transparent"
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 md:-left-12 top-1.5 h-4 w-4 rounded-full border-2 ${
                    exp.featured ? "bg-azure border-azure" : "bg-ink border-line"
                  }`}
                />

                <div
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    exp.featured
                      ? "border-azure/30 bg-gradient-to-br from-azure/[0.07] to-violet/[0.05]"
                      : "border-line bg-surface/40"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-lg sm:text-xl text-fg">{exp.role}</h3>
                      <p className="text-azure text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-muted text-sm">{exp.date}</p>
                      {exp.location && (
                        <p className="text-muted text-xs flex items-center gap-1 justify-end mt-1">
                          <MapPin size={12} /> {exp.location}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((line, idx) => (
                      <li key={idx} className="text-muted text-sm sm:text-[15px] leading-relaxed flex gap-2">
                        <span className="text-azure/60 mt-2 h-1 w-1 rounded-full bg-current shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full border border-line text-muted bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
