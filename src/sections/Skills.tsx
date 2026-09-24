import { motion } from "framer-motion";
import { skillGroups } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-azure text-sm font-medium">Skills</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">Technical toolkit</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-line bg-surface/40 p-6 hover:border-azure/30 transition-colors"
            >
              <h3 className="font-display font-semibold text-fg text-sm mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded-full border border-line bg-white/[0.02] text-muted hover:text-fg hover:border-azure/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
