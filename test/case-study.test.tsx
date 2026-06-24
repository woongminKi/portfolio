import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CaseStudyHeader } from "@/components/case-study/case-study-header";
import { getProject } from "@/content/projects";

describe("CaseStudyHeader", () => {
  it("shows name and period", () => {
    const p = getProject("directors-note")!;
    render(<CaseStudyHeader project={p} />);
    expect(screen.getByText(p.name)).toBeInTheDocument();
    expect(screen.getByText(p.period)).toBeInTheDocument();
  });
});
