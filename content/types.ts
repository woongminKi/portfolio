export type Metric = {
  value: string;
  label: string;
  note?: string;
  status?: "hit" | "miss" | "neutral";
};

export type Lessons = {
  keep: string[];
  problem: string[];
  try: string[];
};

export type CaseStudySection = {
  id: "problem" | "hypothesis" | "execution" | "results" | "lessons";
  title: string;
  body: string[];
  metrics?: Metric[];
  lessons?: Lessons;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  theme: string;            // 관통 주제 한 줄
  highlights: Metric[];     // 카드 미리보기용 대표 지표 2~3개
  sections: CaseStudySection[];
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  email: string;
  github?: string;
  resumeUrl?: string;
  summary: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  tags: string[];
  impact: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};
