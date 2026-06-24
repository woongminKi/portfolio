import { profile } from "@/content/profile";
import { Section } from "@/components/ui-bits/section";

export function About() {
  return (
    <Section id="about" number="01" title="About">
      <ul className="space-y-3">
        {profile.summary.map((line, idx) => (
          <li key={`${idx}-${line}`} className="flex gap-3 text-base text-[var(--color-muted)]">
            <span className="mt-1 shrink-0 font-mono text-xs text-[var(--color-accent)]">–</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
