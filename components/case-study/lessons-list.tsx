import type { Lessons } from "@/content/types";

const COLUMNS: { key: keyof Lessons; label: string }[] = [
  { key: "keep", label: "Keep / 유지" },
  { key: "problem", label: "Problem / 문제" },
  { key: "try", label: "Try / 시도" },
];

export function LessonsList({ lessons }: { lessons: Lessons }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {COLUMNS.map(({ key, label }) => (
        <div key={key} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <h4 className="font-mono text-xs font-semibold text-[var(--color-accent)] mb-3">{label}</h4>
          <ul className="space-y-2">
            {lessons[key].map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[var(--color-fg)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-muted)]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
