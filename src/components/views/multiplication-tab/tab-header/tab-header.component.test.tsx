import { render, screen } from "@testing-library/react";
import { vi, beforeEach, afterEach } from "vitest";
import TabHeader from "./tab-header.component";
import content from "../../../../table.content";
import * as reduxHooks from "../../../../redux/hooks";

describe("TabHeader Component", () => {
  // Clean up any mocks after each test.
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // -------- Common tests (independent of subtractState) --------

  it("renders the outer container with the correct class", () => {
    vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    const { container } = render(<TabHeader />);
    const outerDiv = container.querySelector(".tab__line--header");
    expect(outerDiv).toBeInTheDocument();
  });

  it("applies the provided id prop to the outer container", () => {
    vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    const testId = "test-id";
    const { container } = render(<TabHeader id={testId} />);
    const outerDiv = container.querySelector(".tab__line--header");
    expect(outerDiv?.getAttribute("id")).toBe(testId);
  });

  it("renders the left side heading cell with the correct class", () => {
    vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    const { container } = render(<TabHeader />);
    const outerDiv = container.querySelector(".tab__line--header");
    const leftCell = outerDiv?.firstElementChild;
    expect(leftCell).toHaveClass("tab__heading-cell tab__heading-cell--side");
  });

  it("renders the right side heading cell with the correct class", () => {
    vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    const { container } = render(<TabHeader />);
    const outerDiv = container.querySelector(".tab__line--header");
    const children = outerDiv?.children;
    const rightCell = children ? children[children.length - 1] : null;
    expect(rightCell).toHaveClass("tab__heading-cell tab__heading-cell--side");
  });

  // -------- Tests when subtractState is false (addition mode) --------
  describe("when subtractState is false", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    });

    it("renders exactly 9 empty header cells in the fragments", () => {
      const { container } = render(<TabHeader />);
      const emptyCells = container.querySelectorAll(".tab__empty-cell--head");
      expect(emptyCells.length).toBe(9);
    });

    it("renders exactly 9 heading cells (non-side) in the fragments", () => {
      const { container } = render(<TabHeader />);
      // Select heading cells that are NOT side cells
      const headingCells = container.querySelectorAll(
        ".tab__heading-cell:not(.tab__heading-cell--side)"
      );
      expect(headingCells.length).toBe(9);
    });

    it("renders a plus sign in the empty header cells", () => {
      const { container } = render(<TabHeader />);
      const emptyCells = container.querySelectorAll(".tab__empty-cell--head");
      // Check the text content of the first empty header cell
      expect(emptyCells[0].textContent).toBe("+");
    });

    it("renders a heading cell with text '5' and the correct style", () => {
      render(<TabHeader />);
      const cell = screen.getByText("5");
      expect(cell).toHaveClass(content.styles[5]);
    });
  });

  // -------- Tests when subtractState is true (subtraction mode) --------
  describe("when subtractState is true", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(true);
    });

    it("renders exactly 9 empty header cells in the fragments", () => {
      const { container } = render(<TabHeader />);
      const emptyCells = container.querySelectorAll(".tab__empty-cell--head");
      expect(emptyCells.length).toBe(9);
    });

    it("renders a minus sign in the empty header cells", () => {
      const { container } = render(<TabHeader />);
      const emptyCells = container.querySelectorAll(".tab__empty-cell--head");
      expect(emptyCells[0].textContent).toBe("−");
    });

    it("renders a heading cell with text '10' and the correct style", () => {
      render(<TabHeader />);
      const cell = screen.getByText("10");
      expect(cell).toHaveClass(content.styles[10]);
    });
  });
});
