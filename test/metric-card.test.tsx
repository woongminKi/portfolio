import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MetricCard } from "@/components/ui-bits/metric-card";

describe("MetricCard", () => {
  it("renders value, label, note", () => {
    render(<MetricCard metric={{ value: "1.7s", label: "P95", note: "게이트 2.5s", status: "hit" }} />);
    expect(screen.getByText("1.7s")).toBeInTheDocument();
    expect(screen.getByText("P95")).toBeInTheDocument();
    expect(screen.getByText("게이트 2.5s")).toBeInTheDocument();
  });

  it("applies accent tone on hit status", () => {
    const { container } = render(<MetricCard metric={{ value: "1.7s", label: "P95", status: "hit" }} />);
    expect(container.querySelector(".text-\\[var\\(--color-accent\\)\\]")).toBeTruthy();
  });

  it("applies amber tone on miss status", () => {
    const { container } = render(<MetricCard metric={{ value: "3.1s", label: "P95", status: "miss" }} />);
    expect(container.querySelector(".text-amber-400")).toBeTruthy();
  });
});
