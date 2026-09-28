/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070B",
        panel: "#0B1020",
        surface: "#0E1424",
        line: "#1C2436",
        fg: "#F5F7FA",
        muted: "#9CA3AF",
        azure: "#3D7FFF",
        violet: "#7C6CF2",
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        script: ["Caveat", "cursive"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};