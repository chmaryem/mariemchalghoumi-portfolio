import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/ui";
import { useContent } from "@/i18n/content";

const EDGE_LABELS = [
  { label: "AI", className: "top-[18%] left-[4%] sm:left-[8%]" },
  { label: "RAG", className: "top-[42%] right-[2%] sm:right-[4%]" },
  { label: "FULL-STACK", className: "bottom-[22%] left-[2%] sm:left-[6%]" },
];

function useRotatingText(words: string[], intervalMs = 2600) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [words.length, intervalMs]);
  return words[index];
}

export default function Hero() {
  const t = useT();
  const { summary, roles } = useContent();
  const current = useRotatingText(roles);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-3, 3]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-14, 14]);

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
      className="relative min-h-screen flex items-end md:items-center overflow-hidden bg-ink"
    >
      <AnimatedBackground variant="hero" />

      {/* Portrait — bleeds to the right edge, sits behind the typography */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-y-0 right-0 w-full sm:w-[70%] md:w-[52%] lg:w-[46%]"
        style={{
          perspective: 1000,
          maskImage: "radial-gradient(ellipse 75% 85% at 62% 42%, black 45%, transparent 88%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 85% at 62% 42%, black 45%, transparent 88%)",
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 blur-3xl opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(61,127,255,0.3), rgba(124,108,242,0.15), transparent 72%)",
          }}
        />
        <motion.img
          style={{ rotateX, rotateY, x: translateX }}
          src="/assets/profile-cutout.png"
          alt=""
          className="relative h-full w-full object-cover object-top select-none opacity-90"
          draggable={false}
        />
        {EDGE_LABELS.map((e) => (
          <span
            key={e.label}
            className={`hidden md:block absolute font-mono text-[10px] tracking-[0.25em] text-muted/60 uppercase ${e.className}`}
          >
            · {e.label}
          </span>
        ))}
      </motion.div>

      <span
        className="hidden md:block absolute bottom-12 right-[8%] z-10 font-script text-4xl text-fg/80 -rotate-6 select-none"
        aria-hidden="true"
      >
        Mariem
      </span>

      {/* Typography — overlaps the portrait */}
      <div className="container-xl relative z-10 pt-40 pb-16 md:py-0">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-azure text-[11px] tracking-[0.3em] uppercase mb-6"
        >
          {t("hero.kicker")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="font-display font-extrabold text-fg leading-[0.92] tracking-tight text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-4xl"
        >
          Mariem
          <br />
          Chalghoumi
        </motion.h1>

        <div className="h-8 mt-6 mb-6 overflow-hidden max-w-xl">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-mono text-sm sm:text-base text-azure tracking-wide"
          >
            {current}
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-10"
        >
          {summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 text-fg text-sm font-medium border-b border-fg/40 pb-1 hover:border-azure hover:text-azure transition-colors focus-ring"
          >
            {t("hero.viewWork")}
          </button>
          <a href={profile.cvFile} download className="flex items-center gap-2 text-muted text-sm hover:text-fg transition-colors focus-ring rounded">
            <Download size={15} />
            {t("hero.downloadCv")}
          </a>

          <div className="flex items-center gap-4 text-muted ml-0 sm:ml-4">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Linkedin size={18} />
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Github size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-fg transition-colors focus-ring rounded p-1">
              <Mail size={18} />
            </a>
          </div>
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