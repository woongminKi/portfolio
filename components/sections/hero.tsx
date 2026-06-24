import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-[var(--color-accent)]">{profile.title}</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">{profile.name}</h1>
      <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)] sm:text-xl">{profile.headline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="#work" className="rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)]">프로젝트 보기</a>
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm">이력서 PDF</a>
        <a href={`mailto:${profile.email}`} className="rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm">메일</a>
      </div>
    </section>
  );
}
