import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import TabEmptyCell from "./tab-empty-cell.component";

describe("TabEmptyCell component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders without crashing", () => {
    render(<TabEmptyCell />);

    const elements = screen.getAllByRole("generic");
    expect(elements).toHaveLength(2); // empty div within a wrapper div
  });

  it("accepts and applies children correctly", () => {
    render(<TabEmptyCell>Test Content</TabEmptyCell>);

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("accepts and spreads additional div attributes", () => {
    render(<TabEmptyCell id="test-id" data-testid="empty-cell" />);

    expect(screen.getByTestId("empty-cell")).toHaveAttribute("id", "test-id");
  });

  it("handles empty children gracefully", () => {
    render(<TabEmptyCell />);

    const elements = screen.getAllByRole("generic");
    expect(elements[1]).toBeEmptyDOMElement(); // empty div within a wrapper div
  });

  it("handles className prop correctly", () => {
    render(<TabEmptyCell className="custom-class" />);

    const elements = screen.getAllByRole("generic");
    expect(elements[1]).toHaveClass("custom-class"); // empty div within a wrapper div
  });

  it("supports data-* attributes", () => {
    render(<TabEmptyCell data-test="value" />);

    const elements = screen.getAllByRole("generic");
    expect(elements[1]).toHaveAttribute("data-test", "value"); // empty div within a wrapper div
  });

  it("renders valid React elements as children", () => {
    render(
      <TabEmptyCell>
        <span>Valid Child</span>
      </TabEmptyCell>
    );

    expect(screen.getByText("Valid Child")).toBeInTheDocument();
  });

  it("handles non-React element children gracefully", () => {
    render(<TabEmptyCell>123</TabEmptyCell>);
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  it("handles invalid children types gracefully", () => {
    expect(() => render(<TabEmptyCell>{null}</TabEmptyCell>)).not.toThrow();
  });

  it("supports dynamic updates to props", () => {
    const { rerender } = render(<TabEmptyCell>Initial Content</TabEmptyCell>);

    expect(screen.getByText("Initial Content")).toBeInTheDocument();
    rerender(<TabEmptyCell>Updated Content</TabEmptyCell>);
    expect(screen.getByText("Updated Content")).toBeInTheDocument();
  });
});
