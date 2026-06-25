import type { SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    label: "AI / RAG",
    items: [
      "Python", "FastAPI", "LangChain", "Ragas",
      "pgvector", "PGroonga", "Supabase", "Vertex AI",
      "OpenAI API", "DeepInfra", "RAG 설계", "멀티포맷 인제스트",
    ],
  },
  {
    label: "Frontend",
    items: [
      "TypeScript", "JavaScript", "React", "Next.js",
      "Redux", "Angular", "Tailwind CSS", "SCSS", "styled-components",
    ],
  },
  {
    label: "Backend / Infra",
    items: [
      "Node.js", "Python", "FastAPI", "MongoDB",
      "Supabase (Postgres)", "AWS (EC2/S3)", "CI/CD", "WebSocket", "RLS",
    ],
  },
];
