export interface PipelineNode {
  label: string;
  detail: string;
}


export const pipeline: PipelineNode[] = [
  { label: "Developer", detail: "Works in the editor and asks the assistant for help." },
  { label: "VS Code Extension", detail: "Captures the request and code context from the editor." },
  { label: "AI Orchestration (MCP)", detail: "Routes the request to the right agents over MCP." },
  { label: "Multi-Agent System", detail: "LangGraph agents coordinate the analysis steps." },
  { label: "RAG Pipeline", detail: "Retrieves relevant code and context before generating a response." },
  { label: "Multi-Query Retrieval", detail: "ChromaDB search across multiple query variations." },
  { label: "Cross-Encoder Reranking", detail: "Reorders retrieved results by true relevance." },
  { label: "Knowledge Graph", detail: "Maps dependencies to help detect vulnerabilities." },
  { label: "LLM Analysis", detail: "Synthesizes findings into a concrete recommendation." },
  { label: "Recommendations", detail: "Surfaced back to the developer in the dashboard." },
  { label: "Developer Feedback", detail: "The developer accepts, edits or rejects the suggestion." },
  { label: "Knowledge Base Improvement", detail: "Feedback is looped back to refine future retrieval." },
];
