import { describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { Section } from "@/components/ui-bits/section";

describe("Section", () => {
  it("adds is-visible class in jsdom (reduced-motion / no-matchMedia path)", async () => {
    // jsdom does not implement window.matchMedia, so the component's guard
    // treats it as the reduced-motion path and immediately adds is-visible.
    const { container } = render(
      <Section id="x" number="01" title="T">child</Section>
    );
    const section = container.querySelector("section");
    await waitFor(() => {
      expect(section?.classList.contains("is-visible")).toBe(true);
    });
  });
});
