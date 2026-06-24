export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* 로고 / 홈 앵커 */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-[var(--color-fg)] transition-colors hover:text-[var(--color-accent)]"
        >
          기웅민
        </a>

        {/* 우측 내비게이션 */}
        <nav className="flex items-center gap-1">
          {/* 데스크탑: 풀 라벨 / 모바일: 숨김 */}
          <a
            href="#about"
            className="hidden rounded-md px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] sm:block"
          >
            About
          </a>
          <a
            href="#work"
            className="hidden rounded-md px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] sm:block"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hidden rounded-md px-3 py-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-fg)] sm:block"
          >
            Contact
          </a>

          {/* 모바일: 아이콘형 축약 앵커 */}
          <a
            href="#about"
            aria-label="About"
            className="rounded-md px-2 py-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)] sm:hidden"
          >
            01
          </a>
          <a
            href="#work"
            aria-label="Work"
            className="rounded-md px-2 py-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)] sm:hidden"
          >
            02
          </a>
          <a
            href="#contact"
            aria-label="Contact"
            className="rounded-md px-2 py-1.5 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-fg)] sm:hidden"
          >
            03
          </a>

          {/* 이력서 버튼 */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-md border border-[var(--color-accent)] px-3 py-1.5 font-mono text-xs text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            이력서
          </a>
        </nav>
      </div>
    </header>
  );
}
