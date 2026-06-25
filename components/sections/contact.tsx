import { profile } from "@/content/profile";
import { Section } from "@/components/ui-bits/section";

export function Contact() {
  return (
    <Section id="contact" number="06" title="Contact">
      <p className="mb-8 max-w-xl text-base text-[var(--color-muted)]">
        새로운 기회나 협업 제안은 언제든 환영합니다.
      </p>
      <div className="flex flex-col gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 text-sm text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span className="font-mono text-xs text-[var(--color-accent)]">01</span>
          <span>{profile.email}</span>
        </a>
        {profile.github && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="font-mono text-xs text-[var(--color-accent)]">02</span>
            <span>{profile.github}</span>
          </a>
        )}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span className="font-mono text-xs text-[var(--color-accent)]">{profile.github ? "03" : "02"}</span>
          <span>이력서 PDF</span>
        </a>
      </div>
    </Section>
  );
}
