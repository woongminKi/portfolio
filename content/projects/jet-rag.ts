import type { Project } from "../types";

export const jetRag: Project = {
  slug: "jet-rag",
  name: "Jet-Rag",
  tagline: "한국 직장인을 위한 멀티포맷 RAG 지식 에이전트",
  role: "Solo AI Engineer (0→1 설계·구축·운영)",
  period: "2026.04 – 진행 중 (W11–W24 55일 집중 개발 포함)",
  stack: [
    "Python", "FastAPI", "pgvector", "PGroonga", "Supabase",
    "OpenAI API", "DeepInfra", "Vision OCR", "Next.js", "TypeScript",
  ],
  liveUrl: "https://jetrag.woong-s.com",
  theme: "측정 규율 · 아키텍처 무결성 · 비용 현실주의 · 멈출 줄 아는 판단",
  highlights: [
    { value: "80%", label: "검색 정확도 게이트", note: "달성 (노이즈 ±0.012 내)", status: "hit" },
    { value: "0.908", label: "Ragas Faithfulness", note: "목표 0.90 달성", status: "hit" },
    { value: "P95 1.7s", label: "응답 지연", note: "약 30초 → 2초 (94%↓)", status: "hit" },
  ],
  sections: [
    {
      id: "problem",
      title: "문제: 한국 직장인의 문서 과부하",
      body: [
        "한국 직장인은 하루 20개 이상의 문서를 받는다. HWP·PDF·이미지·URL이 뒤섞인 채로 쏟아지고, 일주일이면 내용의 대부분이 기억에서 사라진다.",
        "기존 도구들은 HWP를 지원하지 않거나, 한국어 형태소 분석이 약해 검색 품질이 떨어진다. 표·도식 내부의 텍스트는 OCR 없이는 아예 읽히지 않고, 사내 보안정책으로 외부 클라우드 업로드 자체가 금지된 조직도 많다.",
        "정리된 검색 가능한 지식 베이스가 없다는 것은 같은 문서를 반복해서 찾고, 같은 실수를 반복한다는 의미다. 이 문제를 저비용으로 해결할 수 있다는 가설에서 Jet-Rag가 시작됐다.",
      ],
    },
    {
      id: "hypothesis",
      title: "가설: 멀티포맷 하이브리드 검색 + 저비용 운영",
      body: [
        "7종 포맷(HWP·PDF·이미지·URL·텍스트·표·도식)을 단일 인제스트 파이프라인으로 처리하고, PGroonga Mecab sparse 검색과 pgvector dense 임베딩을 RRF(k=60)로 융합하면 한국어 정확도를 높일 수 있다고 가정했다.",
        "Vision OCR을 통해 표 내부·이미지 문서의 텍스트를 추출하면 기존 도구의 공백을 메울 수 있다. 모든 이를 월 $5~6의 운영비로 제공하는 것이 핵심 베팅이었다.",
        "Day 2에 어댑터 레이어(typing.Protocol)를 먼저 설계한 것이 후일 임베딩 모델 교체와 리랭커 실험을 안전하게 수행하는 기반이 됐다.",
      ],
    },
    {
      id: "execution",
      title: "실행: 결정적 분기점들",
      body: [
        "청킹 정책 개편(DE-65)으로 표 셀을 격리했을 때 단일 글자('2') 노이즈가 발생했다. extreme_short 룰을 당일 추가해 당일 회복했다. 작은 규칙 하나가 인제스트 품질 전체를 지키는 게이트가 됐다.",
        "리랭커 함정: HuggingFace cross-encoder 도입 시 +8~12pp 개선을 기대했지만 정량 베이스라인에서 −50% 회귀가 실측됐다. 오설정이 원인이었지만, 정량 게이트가 없었다면 오히려 배포했을 것이다. 리랭커는 default OFF로 결정했다.",
        "비용 현실주의: 무료 API 가정이 RPD 20 벽에 막혔다. 유료 전환과 함께 증분 재인제스트(/reingest-missing) 전략으로 24× 절감($0.024→$0.001/문서)을 달성했다.",
        "재시도 백오프 설계 실패: 5회×2초 전략이 HTTP/2 idle timeout과 충돌해 성공률 0%로 떨어졌다. 3회×1초+sweep 방식으로 전환해 98%로 회복했다. 단순함이 회복력이라는 교훈을 얻었다.",
        "DeepInfra 임베딩 모델 교체: 어댑터 레이어 덕분에 8개 호출부를 무수정으로 교체했다. n=100 cosine 0.999984, R@10 회귀 0.0000(115/115 top-5 100% 일치)으로 교체 안전성을 정량 증명했다.",
        "멀티유저 Auth+RLS: Supabase JWT ES256/JWKS, 초대코드, RLS 7테이블 25정책, Storage per-user prefix를 설계했다. IDOR 취약점 1건을 QA 단계에서 발견하고 배포 전 차단했다.",
      ],
    },
    {
      id: "results",
      title: "결과: 정직한 수치",
      body: [
        "검색 정확도 80% 게이트를 달성했다. overall top-1 0.7966은 목표 0.80과 노이즈 플로어 ±0.012 범위 안에서 일치하며, 골든셋 재감사로 이 수치의 신뢰도를 입증했다. 특히 Vision caption 보강으로 table_lookup top-1이 0.5→0.92(84% 개선)로 뛰었고, caption-dependent gap을 +0.28→+0.012(96% 압축)로 좁혔다. Faithfulness·Relevancy도 목표를 달성했다.",
        "P95 응답을 약 30초에서 1.705초로 단축(94% 개선, 게이트 2.5초 이내)해 체감 속도 문제를 해결했다. 운영비는 목표 범위인 월 ~$5~6를 유지했다. 유닛테스트 1,330개 이상을 작성했고, 의존성 추가 없이 55일을 유지했다.",
      ],
      metrics: [
        { value: "80% 게이트", label: "검색 정확도", note: "달성 (top-1 0.7966, 노이즈 ±0.012 내)", status: "hit" },
        { value: "0.5→0.92", label: "table_lookup top-1", note: "84% 개선 (Vision caption)", status: "hit" },
        { value: "96%", label: "caption gap 압축", note: "+0.28 → +0.012", status: "hit" },
        { value: "0.908", label: "Ragas Faithfulness", note: "목표 0.90 달성", status: "hit" },
        { value: "0.801", label: "Answer Relevancy", note: "목표 0.80 달성", status: "hit" },
        { value: "P95 1.705s", label: "응답 지연", note: "게이트 2.5s 이내", status: "hit" },
        { value: "100%", label: "인제스트 성공률", note: "HWP·PDF·Vision 전 포맷", status: "hit" },
        { value: "~$5~6/월", label: "운영 비용", note: "RPD 벽 → 유료 전환 후 안정화", status: "neutral" },
        { value: "1,330+", label: "유닛 테스트", note: "W11–W24 55일, 의존성 추가 0", status: "hit" },
        { value: "0.0000", label: "R@10 회귀", note: "DeepInfra 교체 시 115/115 일치", status: "hit" },
      ],
    },
    {
      id: "lessons",
      title: "Lessons Learned",
      body: [
        "가장 큰 배움은 '측정 정직성이 광택보다 중요하다'는 것이었다. 골든셋을 재감사해 깨진 라벨을 걷어내고 노이즈 플로어 ±0.012를 정량화함으로써, 80% 게이트 충족이 추정이 아니라 측정 신뢰도 위에 서 있음을 입증했다.",
        "리랭커 실험은 정량 게이트의 가치를 증명했다. 낙관적 기대만으로 배포했다면 −50% 회귀가 프로덕션에 나갔을 것이다. 어댑터 격리는 테스트로 증명될 때 비로소 진짜 가치를 발휘한다는 것도 확인했다.",
        "자율에도 멈출 지점이 있다. ROI가 1 미만인 기능은 과감하게 default OFF 또는 스코프아웃하는 것이 제품 전체의 속도를 지킨다.",
      ],
      lessons: {
        keep: [
          "정량 게이트 우선 — 정성 낙관을 숫자로 검증한 뒤 배포",
          "어댑터 레이어 조기 설계 — 후일 교체·실험 비용을 0에 가깝게",
          "측정 정직성 — 골든셋 재감사·노이즈 플로어로 지표 신뢰도 입증",
        ],
        problem: [
          "무료 API 가정 → RPD 벽 충돌(비용 현실주의 부재)",
          "재시도 백오프 과설계(5회×2초) → HTTP/2 idle timeout 0%",
          "리랭커 정성 낙관 → 정량 −50% 회귀 실측",
        ],
        try: [
          "비용 모델을 Day 1에 명시적으로 검증",
          "백오프 전략을 단순하게 시작하고 데이터로 조정",
          "골든셋을 프로젝트 시작 시점에 구축",
        ],
      },
    },
  ],
};
