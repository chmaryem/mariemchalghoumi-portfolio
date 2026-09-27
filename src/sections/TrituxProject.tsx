import { motion } from "framer-motion";
import { pipeline } from "@/data/pipeline";
import { experiences } from "@/data/profile";

const featured = experiences.find((e) => e.featured)!;

export default function TrituxProject() {
  return (
    <section className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(61,127,255,0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-azure text-sm font-medium">Graduation Project · Tritux Group</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3 mb-4">
            AI Assistant for Code Optimization
          </h2>
          <p className="text-muted leading-relaxed">
            {featured.description[0]} {featured.description[2]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          {/* Pipeline visualization */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-line" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-azure via-violet to-azure/30"
            />
            {/* traveling particle */}
            <motion.div
              className="absolute left-[3px] h-2.5 w-2.5 rounded-full bg-azure shadow-[0_0_12px_2px_rgba(61,127,255,0.8)]"
              animate={{ top: ["2%", "98%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
            />

            <ol className="space-y-7">
              {pipeline.map((node, i) => (
                <motion.li
                  key={node.label}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full bg-ink border-2 border-azure/70" />
                  <h3 className="font-display font-semibold text-sm sm:text-base text-fg">{node.label}</h3>
                  <p className="text-muted text-xs sm:text-sm mt-0.5 max-w-xs">{node.detail}</p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Detail card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8 h-fit lg:sticky lg:top-32"
          >
            <h3 className="font-display font-semibold text-fg mb-4">What it does</h3>
            <ul className="space-y-3 mb-6">
              {featured.description.map((line, i) => (
                <li key={i} className="text-muted text-sm leading-relaxed flex gap-2">
                  <span className="text-azure/60 mt-2 h-1 w-1 rounded-full bg-current shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
            <h4 className="text-fg text-sm font-medium mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {featured.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full border border-azure/20 bg-azure/[0.06] text-fg/90"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-fg text-sm font-medium mb-3 mt-6">Demo</h4>
            <div className="aspect-video rounded-xl overflow-hidden border border-line">
              <iframe
                src="https://www.youtube.com/embed/Af9Ds7O2360"
                title="Tritux Group — AI Assistant demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}