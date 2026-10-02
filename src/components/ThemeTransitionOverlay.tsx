import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/theme/ThemeContext";

// Must match the --c-ink values defined in index.css for each theme.
const INK: Record<"light" | "dark", string> = {
  light: "rgb(247 244 239)",
  dark: "rgb(5 7 11)",
};

/**
 * A circle expands from the toggle's position, tinted with the theme being
 * entered, then fades once the palette underneath has switched — the single
 * "creative transition effect" called for by the design brief.
 */
export default function ThemeTransitionOverlay() {
  const { overlay } = useTheme();

  const size =
    typeof window === "undefined"
      ? 2000
      : Math.hypot(window.innerWidth, window.innerHeight) * 2.2;

  return (
    <AnimatePresence>
      {overlay?.active && (
        <motion.div
          key="theme-transition"
          className="pointer-events-none fixed z-[200] rounded-full"
          style={{
            left: overlay.origin.x,
            top: overlay.origin.y,
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
            background: INK[overlay.theme],
          }}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 1, opacity: [0.9, 0.9, 0] }}
          exit={{ opacity: 0 }}
          transition={{ scale: { duration: 0.62, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.85, times: [0, 0.55, 1] } }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}