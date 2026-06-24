import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("setup", () => {
  it("cn merges classes", () => {
    expect(cn("a", false && "b", "c")).toBe("a c");
  });
});
