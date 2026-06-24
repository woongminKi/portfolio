import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/hero";
import { profile } from "@/content/profile";

describe("Hero", () => {
  it("renders profile.name", () => {
    render(<Hero />);
    expect(screen.getByText(profile.name)).toBeInTheDocument();
  });

  it("renders profile.headline", () => {
    render(<Hero />);
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
  });

  it("renders 이력서 PDF link", () => {
    render(<Hero />);
    expect(screen.getByText("이력서 PDF")).toBeInTheDocument();
  });
});
