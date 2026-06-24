import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/project-card";
import { getProject } from "@/content/projects";

describe("ProjectCard", () => {
  it("links to case study page", () => {
    render(<ProjectCard project={getProject("jet-rag")!} />);
    expect(screen.getByRole("link", { name: /자세히|case study|상세/i })).toHaveAttribute("href", "/work/jet-rag");
  });
});
