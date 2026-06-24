import type { CaseStudySection } from "@/content/types";
import { MetricCard } from "@/components/ui-bits/metric-card";
import { LessonsList } from "@/components/case-study/lessons-list";

const ORDINAL: Record<CaseStudySection["id"], string> = {
  problem: "①",
  hypothesis: "②",
  execution: "③",
  results: "④",
  lessons: "⑤",
};

export function CaseStudySectionView({ section }: { section: CaseStudySection }) {
  return (
    <section className="border-b border-[var(--color-border)] px-6 py-12 md:px-12">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* 번호 배지 + 제목 */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-2xl text-[var(--color-accent)]">
            {ORDINAL[section.id]}
          </span>
          <h2 className="font-sans text-xl font-semibold text-[var(--color-fg)]">
            {section.title}
          </h2>
        </div>

        {/* body 문단 */}
        <div className="space-y-3">
          {section.body.map((para) => (
            <p key={para} className="text-sm leading-relaxed text-[var(--color-muted)] [word-break:keep-all]">
              {para}
            </p>
          ))}
        </div>

        {/* results: MetricCard 그리드 */}
        {section.id === "results" && section.metrics && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {section.metrics.map((m) => (
              <MetricCard key={m.label} metric={m} />
            ))}
          </div>
        )}

        {/* lessons: LessonsList */}
        {section.id === "lessons" && section.lessons && (
          <LessonsList lessons={section.lessons} />
        )}
      </div>
    </section>
  );
}
