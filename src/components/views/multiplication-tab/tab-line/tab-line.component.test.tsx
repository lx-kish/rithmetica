import { render, screen } from "@testing-library/react";
import { vi, beforeEach, afterEach } from "vitest";
import TabLine from "./tab-line.component";
import content from "../../../../table.content";
import * as reduxHooks from "../../../../redux/hooks";

// --- Mocks for child components ---
vi.mock("../tab-cell/tab-cell.component", () => ({
  default: (props: any) => <div data-testid="tab-cell">{props.value}</div>,
}));

vi.mock("../tab-empty-cell/tab-empty-cell.component", () => ({
  default: (props: any) => (
    <div data-testid="tab-empty-cell" className={props.className}>
      {props.children}
    </div>
  ),
}));

vi.mock("../../sign/sign.component", () => ({
  default: (props: any) => <span data-testid="sign">{props.children}</span>,
}));

// --- Test Suite ---
describe("TabLine Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  // === Common Tests (applied with subtractState false) ===
  describe("Common Tests", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    });

    it("renders outer container with provided className", () => {
      const { container } = render(<TabLine className="custom" value={5} />);
      const outer = container.querySelector(".tab__line");
      expect(outer?.className.includes("custom")).toBe(true);
    });

    it("renders left heading cell with correct value", () => {
      const { container } = render(<TabLine className="custom" value={5} />);
      const leftCell = container.querySelectorAll(
        ".tab__heading-cell--side"
      )[0];
      expect(leftCell?.textContent).toBe("5");
    });

    it("renders right heading cell with correct value", () => {
      const { container } = render(<TabLine className="custom" value={5} />);
      const cells = container.querySelectorAll(".tab__heading-cell--side");
      const rightCell = cells[cells.length - 1];
      expect(rightCell?.textContent).toBe("5");
    });

    it("applies content.styles[value] to left heading cell", () => {
      const { container } = render(<TabLine className="custom" value={5} />);
      const leftCell = container.querySelectorAll(
        ".tab__heading-cell--side"
      )[0];
      expect(leftCell?.className.includes(content.styles[5])).toBe(true);
    });

    it("applies content.styles[value] to right heading cell", () => {
      const { container } = render(<TabLine className="custom" value={5} />);
      const cells = container.querySelectorAll(".tab__heading-cell--side");
      const rightCell = cells[cells.length - 1];
      expect(rightCell?.className.includes(content.styles[5])).toBe(true);
    });
  });

  // === Addition Mode Tests (subtractState false) ===
  describe("Addition Mode (subtractState false)", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    });

    it("renders exactly 9 TabEmptyCell components", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const emptyCells = container.querySelectorAll(
        '[data-testid="tab-empty-cell"]'
      );
      expect(emptyCells.length).toBe(9);
    });

    it("renders exactly 9 TabCell components", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const cells = container.querySelectorAll('[data-testid="tab-cell"]');
      expect(cells.length).toBe(9);
    });

    it("renders plus sign in the first TabEmptyCell", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const signElement = container.querySelector('[data-testid="sign"]');
      expect(signElement?.textContent).toBe("+");
    });

    it("renders a TabCell with computed value 6", () => {
      // In addition mode with value=3, for the first rendered TabCell, j = 2 so 2*3 = 6.
      render(<TabLine className="custom" value={3} />);
      const cell = screen.getByText("6");
      expect(cell).toBeInTheDocument();
    });
  });

  // === Subtraction Mode Tests (subtractState true) ===
  describe("Subtraction Mode (subtractState true)", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(true);
    });

    it("renders exactly 9 TabEmptyCell components", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const emptyCells = container.querySelectorAll(
        '[data-testid="tab-empty-cell"]'
      );
      expect(emptyCells.length).toBe(9);
    });

    it("renders exactly 9 TabCell components", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const cells = container.querySelectorAll('[data-testid="tab-cell"]');
      expect(cells.length).toBe(9);
    });

    it("do not render minus sign in the first TabEmptyCell", () => {
      const { container } = render(<TabLine className="custom" value={3} />);
      const signElement = container.querySelector('[data-testid="sign"]');
      expect(signElement?.textContent).toBe("");
    });

    it("renders a TabCell with computed value 30", () => {
      // In subtraction mode with value=3, for i=0 we get j = 10 so 10*3 = 30.
      render(<TabLine className="custom" value={3} />);
      const cell = screen.getByText("30");
      expect(cell).toBeInTheDocument();
    });
  });

  // === Corner Case: value is 0 ===
  describe("Corner Case: value is 0", () => {
    beforeEach(() => {
      vi.spyOn(reduxHooks, "useAppSelector").mockReturnValue(false);
    });

    it("renders left heading cell with text '0'", () => {
      const { container } = render(<TabLine className="custom" value={0} />);
      const leftCell = container.querySelectorAll(
        ".tab__heading-cell--side"
      )[0];
      expect(leftCell?.textContent).toBe("0");
    });
  });
});
