import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

export default function Experience() {
  const t = useT();
  const { experiences } = useContent();
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
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("exp.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">
            {t("exp.title")}
          </h2>
        </motion.div>

        <div className="divide-y divide-line border-t border-line">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className={`grid sm:grid-cols-[160px_1fr] gap-2 sm:gap-8 py-10 relative ${
                exp.featured ? "pl-4 -ml-4 border-l-2 border-azure sm:border-l-0 sm:pl-0 sm:ml-0" : ""
              }`}
            >
              <div>
                <p className="font-mono text-xs text-muted tracking-wider">{exp.date}</p>
                {exp.location && (
                  <p className="text-muted text-xs flex items-center gap-1 mt-2">
                    <MapPin size={11} /> {exp.location}
                  </p>
                )}
                {exp.featured && (
                  <p className="font-mono text-[10px] text-azure tracking-[0.2em] uppercase mt-2">
                    {t("exp.featured")}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-fg">{exp.role}</h3>
                <p className="text-azure text-sm font-medium mt-0.5 mb-4">{exp.company}</p>

                <ul className="space-y-1.5 mb-4 max-w-xl">
                  {exp.description.map((line, idx) => (
                    <li key={idx} className="text-muted text-sm sm:text-[15px] leading-relaxed flex gap-2">
                      <span className="text-azure/60 mt-2 h-1 w-1 rounded-full bg-current shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="font-mono text-xs text-muted/80 tracking-wide">
                  {exp.technologies.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}