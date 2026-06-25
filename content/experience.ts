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
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Angular"],
    impact: [
      "업계 최초 취소 수수료 보험 서비스 '안심 취소' 프론트·어드민 개발, 재이용 의향 93% 확보.",
      "타임어택(액션딜) 기능 출시로 참여자 42.6%·구매 전환율 2% 상승, 농심·나이키 외부 딜 성사.",
      "050 안심번호 시스템을 On-Demand 방식으로 구축, 2,000건 마이그레이션으로 호스트 번호 미노출.",
    ],
  },
  {
    company: "선데이띵커",
    role: "Fullstack Engineer",
    period: "2023.04 – 2024.12",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    impact: [
      "키워드 분석 API 분리·DB 캐싱/인덱싱으로 검색 응답속도 7초→1초(86%) 개선.",
      "블로그 글쓰기 자동완성 '판다 AI' 개발, DAU 1,000 유지·구매 유저 70% 크로스셀링.",
      "판다랭크 크롬 익스텐션 1인 개발(팀 최초 템플릿 도입), 카카오 로그인 추가로 가입률 45% 향상.",
    ],
  },
  {
    company: "아드리엘",
    role: "Product Manager",
    period: "2022.06 – 2023.02",
    tags: ["PM", "Global SaaS", "Dashboard"],
    impact: [
      "글로벌 마케팅 SaaS 대시보드를 기획부터 배포까지 FE·BE·디자이너·QA와 전체 매니징.",
      "콤보 차트·위젯화·리포트 테이블 등 총 81개 작업 기획 및 국내외 매체 채널 연동 설계.",
      "개발·프로덕트 문서화로 신규 입사자 온보딩 효율화.",
    ],
  },
  {
    company: "굿닥",
    role: "Performance Marketer",
    period: "2019.06 – 2021.07",
    tags: ["Data Analytics", "MySQL", "Tableau", "Growth"],
    impact: [
      "MySQL·Tableau 데이터 분석으로 인기 아이템 발굴, 숏폼 영상 2개 제작해 2분기 2억 매출 달성.",
      "디스플레이 광고 ROAS 중심 운영(페이스북·카카오·틱톡)으로 DB 10,000건 유입.",
      "CRM(LMS·앱푸시·카카오 플친) 운영 및 프로모션 타임세일 페이지 기획.",
    ],
  },
];
