import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/ui";

export default function Contact() {
  const t = useT();
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
          <span className="font-mono text-azure text-xs tracking-[0.2em] uppercase">{t("contact.kicker")}</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-fg leading-tight mt-4 mb-5">
            {t("contact.title")}
          </h2>
          <p className="text-muted leading-relaxed mb-10 mx-auto max-w-md">
            {t("contact.text")}
          </p>

          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-azure text-white text-sm font-medium hover:bg-azure/90 transition-colors focus-ring" >
            <Mail size={16} />
            {profile.email}
          </a>

          <div className="flex items-center justify-center gap-6 mt-8">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted text-sm hover:text-fg transition-colors focus-ring rounded" >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted text-sm hover:text-fg transition-colors focus-ring rounded" >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}