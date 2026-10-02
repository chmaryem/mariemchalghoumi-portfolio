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
        className="absolute inset-0 mix-blend-soft-light"
        style={{
          opacity: strong ? 0.18 : 0.12,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className={`absolute rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite] ${
          strong ? "opacity-25" : "opacity-15"
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
          strong ? "opacity-20" : "opacity-10"
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