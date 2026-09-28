import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { profile } from "@/data/profile";
import { useT } from "@/i18n/ui";
import { useLang } from "@/i18n/LanguageContext";

const AUTO_ADVANCE_MS = 5200;
const EXIT_MS = 1500;
const EASE = [0.22, 1, 0.36, 1] as const;
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface Props {
  onReveal: () => void;
  onDone: () => void;
}

/** A line of the name: letters resolve one by one (blur to sharp, small overshoot), spacing tightens. */
function NameLine({ text, delay, s }: { text: string; delay: number; s: number }) {
  return (
    <motion.span
      className="block whitespace-nowrap"
      aria-label={text}
      initial={{ letterSpacing: "0.1em" }}
      animate={{ letterSpacing: "-0.02em" }}
      transition={{ duration: 1.8 * s + 0.01, delay, ease: EASE }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, x: -16, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: [-16, 4, 0], filter: "blur(0px)" }}
          transition={{
            default: { duration: 0.9 * s + 0.01, delay: delay + i * 0.07 * s, ease: EASE },
            x: { duration: 0.9 * s + 0.01, delay: delay + i * 0.07 * s, times: [0, 0.7, 1], ease: EASE },
          }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

/** Small precise cursor, desktop only. Becomes an ENTER label over the enter link. */
function IntroCursor({ hovering, label }: { hovering: boolean; label: string }) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[120]" style={{ x: sx, y: sy }} aria-hidden="true">
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-fg/60 font-mono text-[10px] tracking-[0.2em] text-fg"
        animate={{
          width: hovering ? 76 : 9,
          height: hovering ? 76 : 9,
          backgroundColor: hovering ? "rgba(5,7,11,0.55)" : "rgba(245,247,250,1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {hovering && <span>{label}</span>}
      </motion.div>
    </motion.div>
  );
}


export default function CreativeIntro({ onReveal, onDone }: Props) {
  const t = useT();
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const s = reduce ? 0.12 : 1; // timeline scale
  const d = (n: number) => n * s;

  const [exiting, setExiting] = useState(false);
  const [hoverEnter, setHoverEnter] = useState(false);
  const [fine, setFine] = useState(false);
  const finished = useRef(false);

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    setExiting(true);
    setHoverEnter(false);
    onReveal();
    window.setTimeout(onDone, EXIT_MS);
  };

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 768 && !reduce);
    const timer = window.setTimeout(finish, reduce ? 1600 : AUTO_ADVANCE_MS);
    const skip = () => finish();
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });
    window.addEventListener("keydown", skip);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
      window.removeEventListener("keydown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [first, ...rest] = profile.name.toUpperCase().split(" ");
  const last = rest.join(" ");
  const words = t("intro.tagline").split(" · ");
  const year = new Date().getFullYear();
  const place = lang === "fr" ? "TUNISIE" : "TUNISIA";
  const enterLabel = lang === "fr" ? "ENTRER" : "ENTER";
  const exitT = { duration: 0.9, ease: EXIT_EASE };

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden ${fine ? "cursor-none" : "cursor-pointer"} ${
        exiting ? "pointer-events-none" : ""
      }`}
      onClick={finish}
      role="presentation"
    >
      {/* Base + atmosphere */}
      <motion.div
        className="absolute inset-0 bg-ink"
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 1, delay: exiting ? 0.35 : 0, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(61,127,255,0.20), rgba(124,108,242,0.07) 45%, transparent 70%)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          exiting
            ? { opacity: 0, scale: 3.2 }
            : { opacity: 1, scale: reduce ? 1 : [1, 1.1, 1] }
        }
        transition={
          exiting
            ? { duration: 1.2, ease: EXIT_EASE }
            : { opacity: { duration: 1.6, delay: d(0.2) }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }
        }
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light"
        style={{ backgroundImage: GRAIN }}
        aria-hidden="true"
      />

      {/* Technical marks (tablet and up) */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        {[
          "left-6 top-6 border-l border-t",
          "right-6 top-6 border-r border-t",
          "left-6 bottom-6 border-l border-b",
          "right-6 bottom-6 border-r border-b",
        ].map((c, i) => (
          <motion.span
            key={c}
            className={`absolute h-4 w-4 border-fg/25 ${c}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: d(0.3 + i * 0.1), duration: 0.8 }}
          />
        ))}
        <motion.span
          className="absolute left-0 top-[22%] h-px w-full origin-left bg-gradient-to-r from-fg/15 via-fg/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, x: reduce ? 0 : [0, 24, 0] }}
          transition={{
            scaleX: { duration: 3, delay: d(0.6), ease: EASE },
            x: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.span
          className="absolute left-[9%] top-0 h-full w-px origin-top bg-gradient-to-b from-fg/10 via-fg/5 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, delay: d(0.9), ease: EASE }}
        />
        {[
          { l: "14%", t: "34%", dl: 0.8 },
          { l: "58%", t: "16%", dl: 1.1 },
          { l: "88%", t: "72%", dl: 1.4 },
          { l: "36%", t: "84%", dl: 1.7 },
        ].map((p) => (
          <motion.span
            key={p.l + p.t}
            className="absolute font-mono text-[13px] leading-none text-fg/30"
            style={{ left: p.l, top: p.t }}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: d(p.dl), duration: 0.8 }}
          >
           
          </motion.span>
        ))}
        <motion.div
          className="absolute bottom-24 right-[9%] h-14 w-[84px] opacity-40"
          style={{ backgroundImage: "radial-gradient(rgba(245,247,250,0.5) 1px, transparent 1.3px)", backgroundSize: "14px 14px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: d(1), duration: 1 }}
        />
      </motion.div>

      {/* Portrait: comes into focus behind and beside the type */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[52%]"
        animate={exiting ? { y: -50, scale: 1.05, opacity: 0 } : { y: 0, scale: 1, opacity: 1 }}
        transition={exitT}
        aria-hidden="true"
      >
        <div className="h-full w-full opacity-55 md:opacity-100">
          <motion.img
            src="/assets/profile-cutout.png"
            alt=""
            className="h-full w-full select-none object-cover object-top"
            style={{
              maskImage: "radial-gradient(ellipse 75% 85% at 62% 42%, black 42%, transparent 88%)",
              WebkitMaskImage: "radial-gradient(ellipse 75% 85% at 62% 42%, black 42%, transparent 88%)",
            }}
            initial={{ opacity: 0, x: 28, scale: 1.05, filter: "grayscale(1) contrast(0.8) brightness(0.6) blur(16px)" }}
            animate={{ opacity: 0.6, x: 0, scale: 1, filter: "grayscale(0) contrast(1.05) brightness(1) blur(0px)" }}
            transition={{ duration: 3 * s + 0.01, delay: d(1.2), ease: EASE }}
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Metadata */}
      <div className="container-xl absolute inset-x-0 top-0 flex h-24 items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:text-[11px]">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={exiting ? { opacity: 0, y: -24, x: -30 } : { opacity: 1, y: 0, x: 0 }}
          transition={exiting ? exitT : { delay: d(0.5), duration: 0.7 }}
        >
          <span className="text-azure"></span>  {t("intro.title")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={exiting ? { opacity: 0, y: -24, x: 30 } : { opacity: 1, y: 0, x: 0 }}
          transition={exiting ? exitT : { delay: d(0.9), duration: 0.7 }}
        >
          {place} · {year}
        </motion.span>
      </div>

      {/* Name + roles */}
      <motion.div
        className="container-xl absolute inset-0 flex flex-col justify-center"
        animate={exiting ? { y: -90, opacity: 0, filter: "blur(6px)" } : { y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={exitT}
      >
        <h1 className="font-display text-[10.5vw] font-extrabold leading-[0.9] text-fg md:text-[9rem]">
          <NameLine text={first} delay={d(1.0)} s={s} />
          <NameLine text={last} delay={d(1.5)} s={s} />
        </h1>

        <motion.p
          className="mt-8 font-display text-sm uppercase tracking-[0.32em] text-fg sm:text-base md:text-lg"
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          transition={{ duration: 0.9 * s + 0.01, delay: d(2.5), ease: EASE }}
        >
          {t("intro.title")}
        </motion.p>

        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:text-xs">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 * s + 0.01, delay: d(3 + i * 0.18) }}
            >
              {i > 0 && <span className="text-azure/70">·</span>}
              {w}
            </motion.span>
          ))}
        </p>
      </motion.div>

      {/* Line of light crossing the composition while the name resolves */}
      {!reduce && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-40"
          style={{ background: "linear-gradient(90deg, transparent, rgba(160,190,255,0.10) 60%, rgba(220,232,255,0.55) 99%, transparent 100%)" }}
          initial={{ x: "-12vw", opacity: 0 }}
          animate={{ x: "108vw", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, delay: 1.3, ease: [0.45, 0, 0.25, 1], times: [0, 0.15, 0.85, 1] }}
          aria-hidden="true"
        />
      )}

      {/* Bottom */}
      <div className="container-xl absolute inset-x-0 bottom-0 flex h-24 items-center justify-between">
        <motion.span
          className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted sm:block sm:text-[11px]"
          initial={{ opacity: 0 }}
          animate={exiting ? { opacity: 0, y: 24, x: -30 } : { opacity: 1, y: 0, x: 0 }}
          transition={exiting ? exitT : { delay: d(3.2), duration: 0.7 }}
        >
          MC 
        </motion.span>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            finish();
          }}
          onMouseEnter={() => setHoverEnter(true)}
          onMouseLeave={() => setHoverEnter(false)}
          className={`group ml-auto flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fg focus-ring ${
            fine ? "cursor-none" : ""
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={exiting ? { opacity: 0, y: 24, x: 30 } : { opacity: 1, y: 0, x: 0 }}
          transition={exiting ? exitT : { delay: d(3.8), duration: 0.8, ease: EASE }}
        >
          <span className="relative">
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              {t("intro.enter")}
            </span>
            <span className="absolute -bottom-1.5 left-0 h-px w-full bg-fg/25" />
            <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-[0.25] bg-azure transition-transform duration-500 group-hover:scale-x-100" />
          </span>
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
        </motion.button>
      </div>

      {fine && !exiting && <IntroCursor hovering={hoverEnter} label={enterLabel} />}
    </div>
  );
}