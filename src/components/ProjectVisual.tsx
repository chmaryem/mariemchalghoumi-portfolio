import type { Project } from "@/data/profile";

interface Props {
  category: Project["category"];
}

/**
 * Minimal abstract SVG diagram per project category, standing in for a
 * screenshot — a small pipeline sketch rather than a stock photo.
 */
export default function ProjectVisual({ category }: Props) {
  const stages: Record<Project["category"], string[]> = {
    "Generative AI": ["Doc", "Retrieval", "LLM"],
    AI: ["Data", "Model", "Output"],
    "Computer Vision": ["Image", "Model", "Prediction"],
    "Full-Stack": ["Frontend", "API", "Database"],
    Mobile: ["Mobile UI", "Backend", "Database"],
  };

  const items = stages[category];

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-surface to-ink relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,247,250,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative flex items-center gap-3 px-4">
        {items.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg border border-line bg-ink/60 text-[11px] text-muted whitespace-nowrap">
              {label}
            </div>
            {i < items.length - 1 && <div className="h-px w-6 bg-azure/40" />}
          </div>
        ))}
      </div>
    </div>
  );
}