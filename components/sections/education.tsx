import { education } from "@/content/education";
import { Section } from "@/components/ui-bits/section";

export function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <ul className="space-y-4">
        {education.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-1 border-l border-[var(--color-border)] pl-5 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{item.period}</span>
            <span className="font-medium text-[var(--color-fg)]">{item.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
