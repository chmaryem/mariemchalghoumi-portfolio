import { motion } from "framer-motion";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

const ROW_COLORS = [
  "text-azure bg-azure/10 border-azure/25 hover:bg-azure/20",
  "text-violet bg-violet/10 border-violet/25 hover:bg-violet/20",
  "text-[#5ecfc0] bg-[#5ecfc0]/10 border-[#5ecfc0]/25 hover:bg-[#5ecfc0]/20",
];

export default function Skills() {
  const t = useT();
  const { skillGroups } = useContent();

  return (
    <section id="skills" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse 50% 40% at 15% 10%, rgba(61,127,255,0.18), transparent 70%)" }}
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
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("skills.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("skills.title")}</h2>
         
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-muted mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className={`text-sm font-medium px-3.5 py-1.5 rounded-full border cursor-default transition-colors ${ROW_COLORS[i % ROW_COLORS.length]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}