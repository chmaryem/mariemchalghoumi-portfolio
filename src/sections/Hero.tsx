import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { profile } from "@/data/profile";

const ROLES = profile.rotatingRoles;

function useRotatingText(words: string[], intervalMs = 2600) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [words.length, intervalMs]);
  return words[index];
}

export default function Hero() {
  const current = useRotatingText(ROLES);
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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
      className="relative min-h-screen flex items-center overflow-hidden bg-ink pt-24 pb-16 md:pt-20 md:pb-0"
    >
      <AnimatedBackground variant="hero" />

      <div className="container-xl relative z-10 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="text-azure font-medium tracking-wide text-sm mb-4">Hello, I'm</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-fg mb-4">
            Mariem
            <br />
            Chalghoumi
          </h1>

          <div className="h-9 mb-5 overflow-hidden">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-lg sm:text-xl text-gradient font-semibold"
            >
              {current}
            </motion.p>
          </div>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-8">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full bg-azure text-white font-medium text-sm hover:bg-azure/90 transition-colors focus-ring"
            >
              View my work
            </button>
            <a
              href={profile.cvFile}
              download
              className="px-6 py-3 rounded-full border border-line text-fg font-medium text-sm hover:border-azure/60 hover:bg-white/5 transition-colors flex items-center gap-2 focus-ring"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-fg transition-colors focus-ring rounded p-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-fg transition-colors focus-ring rounded p-1"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-fg transition-colors focus-ring rounded p-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-1 md:order-2 relative h-[360px] sm:h-[440px] md:h-[620px]"
          style={{ perspective: 1000 }}
        >
          {/* glow behind portrait */}
          <div
            className="absolute inset-0 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, rgba(61,127,255,0.35), rgba(124,108,242,0.18), transparent 70%)",
            }}
          />

          <motion.div
            style={{ rotateX, rotateY, x: translateX }}
            className="relative h-full w-full flex justify-center md:justify-end items-end"
          >
            <img
              src="/assets/profile-cutout.png"
              alt="Portrait of Mariem Chalghoumi"
              className="relative h-full w-auto max-w-none object-contain select-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 76%, transparent 99%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 76%, transparent 99%)",
              }}
              draggable={false}
            />
          </motion.div>

          {/* faint orbit ring, echoes the "network" motif */}
          <div className="absolute -z-10 inset-0 flex items-center justify-center md:justify-end pointer-events-none">
            <div className="w-[85%] aspect-square rounded-full border border-azure/10" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-fg transition-colors focus-ring rounded-full p-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
