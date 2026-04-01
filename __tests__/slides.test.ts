import { describe, it, expect } from "vitest";
import { splitIntoSlides } from "../src/lib/slides";

describe("splitIntoSlides", () => {
  it("splits markdown on --- separators", () => {
    const md = "# Slide 1\nHello\n\n---\n\n# Slide 2\nWorld";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(2);
    expect(slides[0]).toBe("# Slide 1\nHello");
    expect(slides[1]).toBe("# Slide 2\nWorld");
  });

  it("returns single slide when no separators", () => {
    const md = "# Just one slide\nNo breaks here";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(1);
  });

  it("filters out empty slides", () => {
    const md = "# Slide 1\n\n---\n\n\n\n---\n\n# Slide 3";
    const slides = splitIntoSlides(md);
    expect(slides).toHaveLength(2);
  });
});
