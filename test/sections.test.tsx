import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { experience } from "@/content/experience";

describe("About section", () => {
  it("renders section id and a summary line", () => {
    render(<About />);
    expect(document.getElementById("about")).toBeTruthy();
    expect(screen.getByText(profile.summary[0])).toBeInTheDocument();
  });
});

describe("Skills section", () => {
  it("renders section id and a skill item", () => {
    render(<Skills />);
    expect(document.getElementById("skills")).toBeTruthy();
    expect(screen.getAllByText(skills[0].items[0]).length).toBeGreaterThan(0);
  });
});

describe("Experience section", () => {
  it("renders section id and an experience company name", () => {
    render(<Experience />);
    expect(document.getElementById("experience")).toBeTruthy();
    expect(screen.getByText(experience[0].company)).toBeInTheDocument();
  });
});

describe("Contact section", () => {
  it("renders section id and email link", () => {
    render(<Contact />);
    expect(document.getElementById("contact")).toBeTruthy();
    expect(screen.getByText(profile.email)).toBeInTheDocument();
  });
});
