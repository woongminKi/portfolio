# 기웅민 — Portfolio

마케터 → PM → 풀스택 → AI. 제품을 만들 줄 아는 AI 엔지니어.

플래그십 프로젝트(Jet-Rag, Director's Note)를 문제 → 가설 → 실행 → 결과 → Lessons 케이스 스터디로 정리한 개인 포트폴리오 사이트.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind v4 · shadcn/ui
- 정적 생성(SSG). 콘텐츠는 타입드 데이터 모듈(`content/`)로 분리.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm test     # vitest
pnpm build
```

## Structure

- `app/` — 라우트 (홈 + `/work/[slug]` 케이스 스터디)
- `components/` — 섹션 · 케이스 스터디 · UI 프리미티브
- `content/` — 프로필 · 경력 · 스킬 · 프로젝트 데이터
