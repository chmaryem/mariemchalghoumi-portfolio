import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl"
        >
          <span className="text-azure text-sm font-medium">Education</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">Academic path</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface/40 p-6 hover:border-azure/30 transition-colors"
            >
              <div className="h-10 w-10 rounded-full bg-azure/10 flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-azure" />
              </div>
              <p className="text-muted text-xs mb-2">{item.date}</p>
              <h3 className="font-display font-semibold text-fg text-base leading-snug mb-1">{item.degree}</h3>
              <p className="text-muted text-sm">{item.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
