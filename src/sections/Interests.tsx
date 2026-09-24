import { motion } from "framer-motion";
import { interests } from "@/data/profile";

// Node positions on a 0-100 viewBox grid, describing the knowledge graph
// LLM -> Generative AI -> {RAG, Agents} -> {Knowledge Graph, Tools} -> AI Software Engineering
const NODES = [
  { id: "llm", label: "LLM", x: 50, y: 8 },
  { id: "genai", label: "Generative AI", x: 50, y: 28 },
  { id: "rag", label: "RAG", x: 25, y: 50 },
  { id: "agents", label: "Multi-Agent Systems", x: 75, y: 50 },
  { id: "kg", label: "Knowledge Graph", x: 20, y: 72 },
  { id: "cv", label: "Computer Vision", x: 80, y: 72 },
  { id: "swe", label: "AI Software Engineering", x: 50, y: 92 },
];

const EDGES: [string, string][] = [
  ["llm", "genai"],
  ["genai", "rag"],
  ["genai", "agents"],
  ["rag", "kg"],
  ["agents", "cv"],
  ["kg", "swe"],
  ["cv", "swe"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export default function Interests() {
  return (
    <section className="relative py-28 md:py-36 bg-panel/40 overflow-hidden">
      <div className="container-xl grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-azure text-sm font-medium">What I'm exploring</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mt-3 mb-5">
            Where software meets intelligence
          </h2>
          <p className="text-muted leading-relaxed max-w-md mb-8">
            The thread connecting my recent projects: using generative AI and
            multi-agent architectures as real components of a system, not
            just an add-on.
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {interests.map((topic) => (
              <li
                key={topic}
                className="text-sm text-muted border border-line rounded-lg px-3 py-2.5 bg-white/[0.02]"
              >
                {topic}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] max-w-md mx-auto w-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {EDGES.map(([a, b], i) => {
              const na = nodeById(a);
              const nb = nodeById(b);
              return (
                <motion.line
                  key={`${a}-${b}`}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke="#3D7FFF"
                  strokeOpacity={0.35}
                  strokeWidth={0.4}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                />
              );
            })}

            {NODES.map((n, i) => (
              <g key={n.id}>
                <motion.circle
                  cx={n.x}
                  cy={n.y}
                  r={n.id === "swe" ? 3.4 : 2.6}
                  fill={n.id === "swe" ? "#3D7FFF" : "#0E1424"}
                  stroke="#3D7FFF"
                  strokeWidth={0.5}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
                <text
                  x={n.x}
                  y={n.y + (n.y > 60 ? 5.5 : -4.5)}
                  textAnchor="middle"
                  fontSize={n.id === "swe" ? 3.1 : 2.7}
                  fill="#F5F7FA"
                  fontFamily="Inter, sans-serif"
                  opacity={0.85}
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
