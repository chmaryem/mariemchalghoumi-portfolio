import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "mc-portfolio-theme";
const REVEAL_MS = 620; // when the expanding circle fully covers the screen
const CLEANUP_MS = 1000; // when the overlay is removed

export interface Origin {
  x: number;
  y: number;
}

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (origin?: Origin) => void;
  overlay: { active: boolean; origin: Origin; theme: Theme } | null;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
  overlay: null,
});

function readInitialTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // storage unavailable — fall back to the portfolio's default
  }
  return "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);
  const [overlay, setOverlay] = useState<ThemeContextValue["overlay"]>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const toggleTheme = (origin: Origin = { x: window.innerWidth - 60, y: 40 }) => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("theme-transitioning");
    setOverlay({ active: true, origin, theme: next });

    timers.current.push(
      window.setTimeout(() => setTheme(next), REVEAL_MS * 0.35),
      window.setTimeout(() => setOverlay(null), CLEANUP_MS),
      window.setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), CLEANUP_MS + 50)
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, overlay }}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}