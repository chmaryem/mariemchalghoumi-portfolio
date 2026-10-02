import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/ui";

export default function Contact() {
  const t = useT();

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-ink overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 20% 100%, rgba(61,127,255,0.14), transparent 70%), radial-gradient(ellipse 55% 45% at 80% 100%, rgba(124,108,242,0.14), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-azure text-xs tracking-[0.2em] uppercase block mb-8"
        >
          {t("contact.kicker")}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-[0.95] text-[11vw] sm:text-7xl lg:text-8xl tracking-tight max-w-5xl mx-auto"
        >
          <span className="text-gradient">{t("contact.title")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted leading-relaxed mt-10 mx-auto max-w-md"
        >
          {t("contact.text")}
        </motion.p>

        <motion.a
          href={`mailto:${profile.email}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-azure to-violet text-white font-display text-lg sm:text-xl font-semibold mt-16 shadow-[0_10px_40px_-10px_rgba(61,127,255,0.5)] hover:shadow-[0_10px_46px_-8px_rgba(124,108,242,0.65)] transition-shadow focus-ring"
        >
          {profile.email}
          <span className="transition-transform duration-500 group-hover:translate-x-2"></span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mt-10"
        >
       
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-azure/25 text-azure bg-azure/10 hover:bg-azure/20 transition-colors"
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-violet/25 text-violet bg-violet/10 hover:bg-violet/20 transition-colors"
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={profile.cvFile}
            download
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full border border-[#5ecfc0]/25 text-[#5ecfc0] bg-[#5ecfc0]/10 hover:bg-[#5ecfc0]/20 transition-colors"
          >
            <Download size={13} />
            {t("contact.cv")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}