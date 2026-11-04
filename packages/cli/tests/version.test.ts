import { describe, expect, it } from "vitest";
import { compareVersions } from "../src/version.js";

describe("compareVersions", () => {
  it("orders semantic versions", () => {
    expect(compareVersions("0.2.0", "0.1.9")).toBe(1);
    expect(compareVersions("0.1.0", "0.1.0")).toBe(0);
    expect(compareVersions("0.1.0", "0.2.0")).toBe(-1);
  });
});
