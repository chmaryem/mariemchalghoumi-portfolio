import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

const RING_GRADIENTS = [
  "conic-gradient(from 0deg, #3D7FFF, #7C6CF2, #3D7FFF)",
  "conic-gradient(from 0deg, #7C6CF2, #5ecfc0, #7C6CF2)",
  "conic-gradient(from 0deg, #5ecfc0, #3D7FFF, #5ecfc0)",
];

export default function Education() {
  const t = useT();
  const { education } = useContent();

  return (
    <section id="education" className="relative py-28 md:py-40 bg-ink overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse 45% 35% at 85% 20%, rgba(94,207,192,0.18), transparent 70%)" }}
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
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("edu.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3">{t("edu.title")}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-line bg-surface/40 hover:border-azure/30 transition-colors p-6"
            >
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: RING_GRADIENTS[i % RING_GRADIENTS.length] }}
              >
                <div className="h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-full bg-surface flex items-center justify-center">
                  <GraduationCap size={18} className="text-fg" />
                </div>
              </div>
              <p className="font-mono text-xs text-muted tracking-wider mb-2">{item.date}</p>
              <h3 className="font-display font-semibold text-fg text-base sm:text-lg leading-snug mb-1">
                {item.degree}
              </h3>
              <p className="text-muted text-sm">{item.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}