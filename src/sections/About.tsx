import { motion } from "framer-motion";
import { aboutStory } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-32 md:self-start"
        >
          <span className="text-azure text-sm font-medium">About</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3 mb-5 leading-tight">
            Building software.
            <br />
            Exploring intelligence.
          </h2>
          <p className="text-muted leading-relaxed max-w-sm">
            A full-stack path that grew, year over year, into an interest in
            making software systems genuinely intelligent — not by chasing
            trends, but by shipping projects that use AI where it earns its
            place.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line max-w-[220px]">
            <img
              src="/assets/profile.png"
              alt="Mariem Chalghoumi"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "3/4", objectPosition: "50% 15%" }}
            />
          </div>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-azure via-violet to-transparent"
          />

          <ol className="space-y-10">
            {aboutStory.map((step, i) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-ink border-2 border-azure" />
                <h3 className="font-display font-semibold text-lg text-fg mb-1">{step.label}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">{step.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
