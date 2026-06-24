import { describe, it, expect } from "vitest";
import { projects, getProject } from "@/content/projects";
import { profile } from "@/content/profile";

describe("content model", () => {
  it("has two flagship projects with unique slugs", () => {
    expect(projects).toHaveLength(2);
    expect(new Set(projects.map((p) => p.slug)).size).toBe(2);
  });
  it("each project has all 5 case-study sections in order", () => {
    const order = ["problem", "hypothesis", "execution", "results", "lessons"];
    for (const p of projects) {
      expect(p.sections.map((s) => s.id)).toEqual(order);
      expect(p.highlights.length).toBeGreaterThanOrEqual(2);
    }
  });
  it("getProject resolves by slug", () => {
    expect(getProject("jet-rag")?.name).toBe("Jet-Rag");
  });
  it("profile has headline and email", () => {
    expect(profile.headline).toContain("AI");
    expect(profile.email).toContain("@");
  });
});
