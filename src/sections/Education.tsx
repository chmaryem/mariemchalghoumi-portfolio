import { motion } from "framer-motion";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

export default function Education() {
  const t = useT();
  const { education } = useContent();
  return (
    <section id="education" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("edu.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("edu.title")}</h2>
        </motion.div>

        <div className="divide-y divide-line border-t border-line">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 py-7 items-baseline"
            >
              <p className="font-mono text-xs text-muted tracking-wider">{item.date}</p>
              <div>
                <h3 className="font-display font-semibold text-fg text-base sm:text-lg leading-snug">
                  {item.degree}
                </h3>
                <p className="text-muted text-sm mt-1">{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}