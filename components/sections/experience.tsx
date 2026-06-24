import { experience } from "@/content/experience";
import { Section } from "@/components/ui-bits/section";
import { StackChip } from "@/components/ui-bits/stack-chip";

export function Experience() {
  return (
    <Section id="experience" number="04" title="Experience">
      <div className="space-y-10">
        {experience.map((item) => (
          <div key={item.company} className="border-l border-[var(--color-border)] pl-5">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-semibold text-[var(--color-fg)]">{item.role}</span>
              <span className="text-[var(--color-muted)]">@</span>
              <span className="font-semibold text-[var(--color-accent)]">{item.company}</span>
              <span className="w-full font-mono text-xs text-[var(--color-muted)] sm:ml-auto sm:w-auto sm:text-right">{item.period}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <StackChip key={tag}>{tag}</StackChip>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {item.impact.map((line, idx) => (
                <li key={`${idx}-${line}`} className="flex min-w-0 gap-3 text-sm text-[var(--color-muted)]">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-[var(--color-accent)]">▸</span>
                  <span className="min-w-0 break-words">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
