import { cleanup, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import EmptyLine from "./tab-empty-line.component";

describe("EmptyLine Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders without crashing", () => {
    render(<EmptyLine />);

    const allDivs = screen.getAllByRole("generic");
    expect(allDivs).toHaveLength(3);
  });

  it("contains the correct outer container class", () => {
    render(<EmptyLine />);

    const allDivs = screen.getAllByRole("generic");
    const outerDiv = allDivs[1];
    expect(outerDiv).toHaveClass("tab__line--empty-stick");
  });

  it("contains a child div with the correct class", () => {
    render(<EmptyLine />);

    const allDivs = screen.getAllByRole("generic");
    const childDiv = allDivs[2];
    expect(childDiv).toHaveClass("tab__heading-cell tab__heading-cell--side");
  });

  it("ensures the outer div has no additional text content", () => {
    render(<EmptyLine />);

    const allDivs = screen.getAllByRole("generic");
    const emptyLineDiv = allDivs[2];
    expect(emptyLineDiv).toHaveTextContent("");
  });
});
