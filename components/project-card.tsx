import Link from "next/link";
import type { Project } from "@/content/types";
import { MetricCard } from "@/components/ui-bits/metric-card";
import { StackChip } from "@/components/ui-bits/stack-chip";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-1 text-sm text-[var(--color-muted)]">{project.tagline}</p>
      </div>

      {/* Theme */}
      <p className="font-mono text-xs text-[var(--color-accent)]">{project.theme}</p>

      {/* Highlights — 2~3개 */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))" }}>
        {project.highlights.slice(0, 3).map((metric) => (
          <MetricCard key={`${project.slug}-${metric.label}`} metric={metric} />
        ))}
      </div>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <StackChip key={tech}>{tech}</StackChip>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-3 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 font-mono text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Live
          </a>
        )}
        <Link
          href={`/work/${project.slug}`}
          className="rounded-md border border-[var(--color-accent)] px-4 py-2 font-mono text-xs text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
        >
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
