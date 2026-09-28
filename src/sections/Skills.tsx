import { motion } from "framer-motion";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

export default function Skills() {
  const t = useT();
  const { skillGroups } = useContent();
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("skills.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("skills.title")}</h2>
        </motion.div>

        <div className="divide-y divide-line border-t border-line">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-7"
            >
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
                {group.category}
              </h3>
              <p className="text-fg text-base sm:text-lg leading-relaxed">
                {group.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}