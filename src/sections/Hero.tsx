import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Briefcase } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { profile, projects, experiences, education } from "@/data/profile";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

function useRotatingText(words: string[], intervalMs = 2600) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [words.length, intervalMs]);
  return words[index];
}

function gradYear() {
  const m = education[0].date.match(/\d{4}/g);
  return m ? m[m.length - 1] : "2026";
}

const STACK = ["React", "Angular", "Spring Boot", "LangGraph", "RAG"];
const PILL_COLORS = [
  "text-azure bg-azure/10 border-azure/25",
  "text-violet bg-violet/10 border-violet/25",
  "text-[#5ecfc0] bg-[#5ecfc0]/10 border-[#5ecfc0]/25",
];

export default function Hero() {
  const t = useT();
  const { summary, roles } = useContent();
  const current = useRotatingText(roles);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-ink pt-32 pb-20 md:pt-20 md:pb-0"
    >
      <AnimatedBackground variant="hero" />

      <div className="container-xl relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-10 items-center">
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-muted">{t("hero.available")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-display font-extrabold text-fg leading-[0.95] tracking-tight text-[13vw] sm:text-6xl lg:text-7xl"
          >
            Mariem
            <br />
            <span className="text-gradient">Chalghoumi</span>
          </motion.h1>

          <div className="h-9 mt-5 mb-6 overflow-hidden max-w-xl">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-lg sm:text-xl font-semibold text-gradient"
            >
              {current}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-7"
          >
            {summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-2 mb-9"
          >
            {STACK.map((tech, i) => (
              <span
                key={tech}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border ${PILL_COLORS[i % PILL_COLORS.length]}`}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-azure to-violet text-white text-sm font-medium shadow-[0_8px_30px_-8px_rgba(61,127,255,0.5)] hover:shadow-[0_8px_36px_-6px_rgba(124,108,242,0.6)] transition-shadow focus-ring"
            >
              {t("hero.viewWork")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href={profile.cvFile}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-line text-fg text-sm font-medium hover:border-azure/50 hover:bg-white/5 transition-colors focus-ring"
            >
              <Download size={15} />
              {t("hero.downloadCv")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-4 text-muted"
          >
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Linkedin size={18} />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Portrait column — circular frame + floating real-data badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-[78vw] max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square"
          style={{ perspective: 1000 }}
        >
          <div
            className="absolute -inset-8 rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(circle, rgba(61,127,255,0.35), rgba(124,108,242,0.2), transparent 70%)" }}
            aria-hidden="true"
          />

          {/* gentle rotating gradient ring */}
          <motion.div
            className="absolute -inset-1.5 rounded-full"
            style={{ background: "conic-gradient(from 0deg, #3D7FFF, #7C6CF2, #5ecfc0, #3D7FFF)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />

          <motion.div
            style={{ rotateX, rotateY }}
            className="relative h-full w-full rounded-full overflow-hidden border-4 border-ink"
          >
            <img
              src="/assets/profile.png"
              alt="Mariem Chalghoumi"
              className="h-full w-full object-cover select-none"
              style={{ objectPosition: "50% 15%" }}
              draggable={false}
            />
          </motion.div>

          {/* floating code card */}
          <motion.div
            initial={{ opacity: 0, y: -10, x: 10 }}
            animate={{ opacity: 1, y: [0, -8, 0], x: 0 }}
            transition={{ opacity: { duration: 0.6, delay: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
            className="hidden sm:block absolute -top-4 -right-6 lg:-right-10 w-48 rounded-xl border border-line bg-surface/95 backdrop-blur-sm shadow-xl overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            </div>
            <pre className="px-3 py-2.5 font-mono text-[10px] leading-relaxed text-muted whitespace-pre-wrap">
<span className="text-violet">const</span> engineer = {"{"}
{"\n"}  stack: [<span className="text-[#5ecfc0]">"RAG"</span>, <span className="text-[#5ecfc0]">"LangGraph"</span>],
{"\n"}  focus: <span className="text-azure">"{t("hero.focus")}"</span>,
{"\n"}{"}"}
            </pre>
          </motion.div>

          {/* floating stat: graduation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 7, 0] }}
            transition={{ opacity: { duration: 0.6, delay: 0.95 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
            className="absolute -bottom-3 -left-6 lg:-left-10 flex items-center gap-3 rounded-2xl border border-line bg-surface/95 backdrop-blur-sm shadow-xl px-4 py-3"
          >
            <div className="h-8 w-8 rounded-full bg-azure/15 flex items-center justify-center shrink-0">
              <Sparkles size={14} className="text-azure" />
            </div>
            <div>
              <p className="font-display font-bold text-fg text-base leading-none">{gradYear()}</p>
              <p className="text-muted text-[11px] mt-0.5">{t("hero.graduating")}</p>
            </div>
          </motion.div>

          {/* floating stat: projects */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ opacity: { duration: 0.6, delay: 1.1 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 rounded-2xl border border-line bg-surface/95 backdrop-blur-sm shadow-xl px-4 py-3 text-center"
          >
            <p className="font-display font-bold text-fg text-xl leading-none">{projects.length}</p>
            <p className="text-muted text-[10px] mt-1 uppercase tracking-wide">{t("hero.projects")}</p>
          </motion.div>

          {/* floating stat: internships / experiences */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 1, 0] }}
            transition={{ opacity: { duration: 0.6, delay: 1.25 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
            className="hidden sm:flex items-center gap-3 absolute bottom-10 -right-6 lg:-right-10 rounded-2xl border border-line bg-surface/95 backdrop-blur-sm shadow-xl px-4 py-3"
          >
            <div className="h-8 w-8 rounded-full bg-violet/15 flex items-center justify-center shrink-0">
              <Briefcase size={14} className="text-violet" />
            </div>
            <div>
              <p className="font-display font-bold text-fg text-base leading-none">{experiences.length}</p>
              <p className="text-muted text-[11px] mt-0.5">{t("hero.experiences")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label={t("hero.scrollAbout")}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-fg transition-colors focus-ring rounded-full p-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}