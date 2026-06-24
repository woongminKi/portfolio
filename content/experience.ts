import type { ExperienceItem } from "./types";

export const experience: ExperienceItem[] = [
  {
    company: "Forsit",
    role: "Fullstack Engineer",
    period: "2026.03 – 현재",
    tags: ["Node.js", "TypeScript", "Supabase", "React"],
    impact: [
      "마케팅 대시보드 백엔드 0→1 구축, 누락 데이터 1,088건 복구·정합성 0건 달성.",
      "외부 광고 플랫폼 API 연동 파이프라인 설계 및 배포 자동화.",
    ],
  },
  {
    company: "넥스트에디션",
    role: "Fullstack Engineer",
    period: "2025.01 – 2026.03",
    tags: ["React", "Next.js", "Node.js", "AWS"],
    impact: [
      "캠핑 플랫폼 타임어택딜 기능 출시, 참여율 42.6% 상승.",
      "050 안심번호 시스템 구축, 처리 건수 35,221건.",
    ],
  },
  {
    company: "선데이띵커",
    role: "Fullstack Engineer",
    period: "2023.04 – 2024.12",
    tags: ["React", "TypeScript", "Python"],
    impact: [
      "검색 응답속도 7초→1초로 86% 개선.",
      "판다 AI 서비스 DAU 1,000 달성.",
    ],
  },
  {
    company: "아드리엘",
    role: "Product Manager",
    period: "2022.06 – 2023.02",
    tags: ["Angular", "TypeScript", "Redux"],
    impact: [
      "글로벌 마케팅 SaaS 대시보드 81개 feature 구현.",
    ],
  },
  {
    company: "굿닥",
    role: "Performance Marketer",
    period: "2019.06 – 2021.07",
    tags: ["PM", "Data Analytics", "Growth"],
    impact: [
      "데이터 기반 의사결정으로 숏폼 콘텐츠 2개 분기 만에 2억 매출 달성.",
    ],
  },
];
