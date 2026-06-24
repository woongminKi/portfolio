import type { Metric } from "@/content/types";
import { cn } from "@/lib/utils";

export function MetricCard({ metric }: { metric: Metric }) {
  const tone =
    metric.status === "hit" ? "text-[var(--color-accent)]"
    : metric.status === "miss" ? "text-amber-400"
    : "text-[var(--color-fg)]";
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <div className={cn("font-mono text-3xl font-semibold tabular-nums", tone)}>{metric.value}</div>
      <div className="mt-1 text-sm text-[var(--color-fg)]">{metric.label}</div>
      {metric.note && <div className="mt-1 text-xs text-[var(--color-muted)]">{metric.note}</div>}
    </div>
  );
}
