import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-[var(--color-accent)]">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 text-base text-[var(--color-muted)]">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-80"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
