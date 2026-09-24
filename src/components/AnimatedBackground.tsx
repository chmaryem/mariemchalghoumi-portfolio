interface Props {
  variant?: "hero" | "subtle";
}

/**
 * A shared ambient background: a faint grid, two soft gradient blobs and a
 * grain-like dot texture. The hero variant is stronger; everywhere else it
 * stays quiet so it never competes with content.
 */
export default function AnimatedBackground({ variant = "subtle" }: Props) {
  const strong = variant === "hero";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,247,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: strong ? 0.5 : 0.18,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
        }}
      />
      <div
        className={`absolute rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite] ${
          strong ? "opacity-40" : "opacity-20"
        }`}
        style={{
          width: 560,
          height: 560,
          top: "-10%",
          left: "-8%",
          background: "radial-gradient(circle, #3D7FFF 0%, transparent 70%)",
        }}
      />
      <div
        className={`absolute rounded-full blur-3xl animate-[pulse_13s_ease-in-out_infinite] ${
          strong ? "opacity-30" : "opacity-15"
        }`}
        style={{
          width: 620,
          height: 620,
          bottom: "-15%",
          right: "-10%",
          background: "radial-gradient(circle, #7C6CF2 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />
    </div>
  );
}
