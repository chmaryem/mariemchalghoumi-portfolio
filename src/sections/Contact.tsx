import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 bg-ink">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-fg leading-tight mb-5">
            Let's build something intelligent.
          </h2>
          <p className="text-muted leading-relaxed mb-10 mx-auto max-w-md">
            I'm open to opportunities in software engineering, artificial
            intelligence, generative AI and innovative technology projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-azure text-white text-sm font-medium hover:bg-azure/90 transition-colors focus-ring"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-line text-fg text-sm font-medium hover:border-azure/50 hover:bg-white/5 transition-colors focus-ring"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-line text-fg text-sm font-medium hover:border-azure/50 hover:bg-white/5 transition-colors focus-ring"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}