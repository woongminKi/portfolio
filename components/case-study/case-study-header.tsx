import Link from "next/link";
import type { Project } from "@/content/types";
import { StackChip } from "@/components/ui-bits/stack-chip";

export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 md:px-12">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* 홈 복귀 */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          ← Work
        </Link>

        {/* 이름 + tagline */}
        <div>
          <h1 className="font-mono text-3xl font-semibold text-[var(--color-fg)] md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-[var(--color-muted)]">{project.tagline}</p>
        </div>

        {/* 메타: 역할 / 기간 / 관통 주제 */}
        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-xs text-[var(--color-muted)]">Role</dt>
            <dd className="mt-0.5 text-sm text-[var(--color-fg)]">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--color-muted)]">Period</dt>
            <dd className="mt-0.5 font-mono text-sm text-[var(--color-fg)]">{project.period}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--color-muted)]">Theme</dt>
            <dd className="mt-0.5 text-sm text-[var(--color-accent)]">{project.theme}</dd>
          </div>
        </dl>

        {/* 스택 칩 */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <StackChip key={tech}>{tech}</StackChip>
          ))}
        </div>

        {/* 링크: Live / Repo */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[var(--color-muted)] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Repo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
