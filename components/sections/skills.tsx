import { skills } from "@/content/skills";
import { Section } from "@/components/ui-bits/section";
import { StackChip } from "@/components/ui-bits/stack-chip";

export function Skills() {
  return (
    <Section id="skills" number="03" title="Skills">
      <div className="space-y-8">
        {skills.map((group) => (
          <div key={group.label}>
            <p className="mb-3 font-mono text-xs text-[var(--color-accent)]">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <StackChip key={item}>{item}</StackChip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
