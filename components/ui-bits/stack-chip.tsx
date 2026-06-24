export function StackChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]">
      {children}
    </span>
  );
}
