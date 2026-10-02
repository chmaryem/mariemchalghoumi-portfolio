import { useTheme } from "@/theme/ThemeContext";

const OPTIONS = ["light", "dark"] as const;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (target: "light" | "dark", e: React.MouseEvent<HTMLButtonElement>) => {
    if (target === theme) return;
    const rect = e.currentTarget.getBoundingClientRect();
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <div className="flex items-center gap-1 font-mono text-[12px] tracking-wider" role="group" aria-label="Theme">
      {OPTIONS.map((opt, i) => (
        <span key={opt} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted/40">·</span>}
          <button
            onClick={(e) => handleClick(opt, e)}
            aria-pressed={theme === opt}
            className={`px-1 py-1 uppercase transition-colors focus-ring ${
              theme === opt ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            {opt}
          </button>
        </span>
      ))}
    </div>
  );
}