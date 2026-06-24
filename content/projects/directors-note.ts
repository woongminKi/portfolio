import type { Project } from "../types";

export const directorsNote: Project = {
  slug: "directors-note",
  name: "Director's Note",
  tagline: "AI 영상평가 SaaS — 입시 연기 실기 평가 자동화 (0→1)",
  role: "Solo Fullstack + AI Engineer (0→1 단독 설계·배포)",
  period: "2026.04 – 2026.06",
  stack: [
    "Next.js", "TypeScript", "Supabase", "Postgres",
    "Vertex AI", "pgvector", "Gemini 2.5 Flash", "KakaoPay",
  ],
  liveUrl: "https://directors-note.vercel.app",
  theme: "0→1 제품 의사결정 + 냉정한 AI 한계 인식",
  highlights: [
    { value: "MVP 출시", label: "사람-라벨 플라이휠", note: "AI 변별력 0 실측 후 보수 피벗", status: "hit" },
    { value: "7 워크스트림", label: "수직 완성", note: "인테이크→배정→채점→공개→결제→환불→정산", status: "hit" },
    { value: "tier-match 1/6", label: "cosine 자동채점 변별력", note: "AI 한계 정직 실측", status: "miss" },
  ],
  sections: [
    {
      id: "problem",
      title: "문제: 입시 연기 실기 평가의 수작업 병목",
      body: [
        "입시 연기 학원은 단체 촬영 영상을 기반으로 실기를 평가한다. 수십 명의 영상을 강사가 일일이 보며 점수를 매기는 방식은 시간이 많이 걸리고 기준이 흔들린다.",
        "원거리·풀샷 촬영 환경에서는 표정과 발성 신호가 약하다. AI가 이 신호를 자동으로 읽어 등급을 산출할 수 있다면, 강사의 시간을 줄이고 평가 일관성을 높일 수 있다는 가설로 프로젝트가 시작됐다.",
        "실제 운영 중인 카타르시스 연기학원의 니즈를 바탕으로, 평가 워크플로우 전체를 처음부터 설계했다.",
      ],
    },
    {
      id: "hypothesis",
      title: "가설: Vertex AI 멀티모달 임베딩으로 영상 등급 자동 산출",
      body: [
        "Vertex AI 멀티모달 임베딩과 pgvector로 참조 영상과의 cosine 유사도를 계산하면, 영상 등급을 자동으로 산출할 수 있다고 가정했다.",
        "등급 기준 영상 6개를 앵커로 두고, 평가 대상 영상의 임베딩이 어느 앵커에 가장 가까운지로 tier를 분류하는 방식이었다. 구현이 단순하고 설명하기 쉬운 접근이었다.",
        "AI 판단이 충분히 신뢰할 수 있다면, 강사는 AI 결과를 검토만 하면 되는 워크플로우를 목표로 했다.",
      ],
    },
    {
      id: "execution",
      title: "실행: AI 한계 실측과 보수 피벗",
      body: [
        "cosine 자동채점 변별력 0 실측: 원거리 풀샷 환경에서 전 tier의 cosine 유사도가 ~0.88로 수렴했다. tier-match는 6개 중 1개(1.7/10점)로 사실상 랜덤 수준이었다. 임베딩이 영상 내용 전반을 잘 표현하지만 연기 품질의 미묘한 차이는 구분하지 못했다.",
        "LLM-as-judge 시도: Gemini 2.5 Flash를 심사위원으로 활용하는 방안을 실험했다. strict 프롬프트에서 겉보기 5/6 통과처럼 보였지만, N=3 재현성 검증에서 붕괴했다. 같은 영상에 A·B·C가 번갈아 나왔다. few-shot 영상 앵커는 토큰 한계로 구현이 불가능했다.",
        "보수 피벗 — 사람-라벨 플라이휠: AI를 빼고 사람이 루브릭(4축) 기반으로 채점하는 방식으로 0→1 ship을 결정했다. AI는 shadow worker로 후순위에 두고, D13 ≥7/10 통과 시 인계하는 조건부 로드맵을 설정했다.",
        "멀티테넌시 RLS: 전 테이블에 3-class visibility RLS를 적용했다. my_academy_id() 함수에서 무한재귀 버그가 발생했고, SECURITY DEFINER로 해결했다. IDOR 없는 데이터 격리를 DB 레이어에서 보장했다.",
        "마켓플레이스 수직 완성: 인테이크→배정→채점→공개→결제(KakaoPay)→환불→정산 7개 워크스트림을 feature flag로 안전하게 배포했다. 법률·결제 선행조건을 flag로 분리해 각 단계를 독립적으로 검증했다.",
      ],
    },
    {
      id: "results",
      title: "결과: AI 한계를 인정하고 MVP를 출시했다",
      body: [
        "AI 자동채점은 실패했다. 하지만 그 실패를 숨기지 않고 데이터로 기록하고, 사람-라벨 MVP로 피벗해 실제 학원에 도입했다. 재현성 분산이 정확도보다 먼저 제품을 죽인다는 것을 직접 확인했다.",
        "사람 평가 MVP 수직 완성(7 워크스트림), 마이그레이션 24개, 유닛 테스트 200개 + DB 통합 테스트 65개, reference 영상 6개 라이브, Vertex 임베딩 결정성 cos=1.0 검증까지 완료했다.",
      ],
      metrics: [
        { value: "tier-match 1/6", label: "cosine 자동채점 변별력", note: "원거리 풀샷 → ~0.88 수렴, 사실상 랜덤", status: "miss" },
        { value: "N=3 붕괴", label: "LLM-as-judge 재현성", note: "같은 영상에 A↔B↔C", status: "miss" },
        { value: "7 워크스트림", label: "사람-라벨 MVP 수직 완성", note: "인테이크→정산 전 워크플로우", status: "hit" },
        { value: "cos=1.0", label: "Vertex 임베딩 결정성", note: "동일 입력 동일 출력 검증", status: "hit" },
        { value: "200 + 65", label: "테스트 (유닛 + DB 통합)", note: "마이그레이션 24건 포함", status: "hit" },
        { value: "학원 도입", label: "카타르시스 연기학원 운영 적용", note: "실사용 환경 배포 완료", status: "hit" },
      ],
    },
    {
      id: "lessons",
      title: "Lessons Learned",
      body: [
        "AI 자동화를 확신할 수 없을 때도 사람-라벨로 day-1 가치를 출시할 수 있다. '완벽한 AI'를 기다리는 것보다 쓸 수 있는 제품을 빠르게 내놓는 것이 더 많은 것을 가르쳐준다.",
        "재현성 분산은 정확도보다 먼저 제품을 죽인다. 겉보기 5/6 통과에 속아 배포했다면 사용자 신뢰를 잃었을 것이다. N=3 재현성 테스트를 early gate로 도입한 것이 결정적이었다.",
        "feature flag는 법률·결제 같은 선행조건이 있는 기능을 안전하게 분리하는 최선의 방법이었다. 7개 워크스트림을 단계별로 검증할 수 있었던 이유다.",
      ],
      lessons: {
        keep: [
          "AI 한계를 데이터로 실측하고 피벗 — 낙관 대신 근거",
          "사람-라벨 플라이휠로 AI 없이도 0→1 가능",
          "feature flag로 복잡한 선행조건을 안전하게 분리",
        ],
        problem: [
          "cosine 유사도가 원거리 풀샷 연기 품질을 변별하지 못함",
          "LLM-as-judge 재현성 검증을 too late에 수행",
          "few-shot 영상 앵커 — 토큰 한계로 불가, 초기 범위 설정 오류",
        ],
        try: [
          "재현성 테스트를 모델 평가 day-1 gate로",
          "AI 신뢰 기준을 사전에 정의(D13 ≥7/10 등 명시적 threshold)",
          "shadow worker 로드맵을 구현 시작 전 문서화",
        ],
      },
    },
  ],
};
