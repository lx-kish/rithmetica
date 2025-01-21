import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Sign from "./sign.component";

describe("Sign Component", () => {
  it("renders children text correctly", () => {
    render(<Sign>Hello</Sign>);
    const element = screen.getByText("Hello");
    expect(element).toBeInTheDocument();
  });

  it("applies the given className prop", () => {
    render(<Sign className="test-class">Hello</Sign>);
    const element = screen.getByText("Hello");
    expect(element).toHaveClass("test-class");
  });

  it("passes additional props such as id", () => {
    render(<Sign id="test-id">Hello</Sign>);
    const element = screen.getByText("Hello");
    expect(element.getAttribute("id")).toBe("test-id");
  });

  it("renders a span element", () => {
    render(<Sign>Hello</Sign>);
    const element = screen.getByText("Hello");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders an empty span when no children are provided", () => {
    const { container } = render(<Sign />);
    const spanElement = container.firstChild as HTMLElement;
    expect(spanElement.textContent).toBe("");
  });

  it("renders multiple children correctly", () => {
    render(
      <Sign>
        <div>Test</div>
        <div>Test</div>
      </Sign>
    );

    expect(screen.getAllByText("Test")).toHaveLength(2);
  });

  it("passes data attributes correctly", () => {
    render(<Sign data-test="value">Hello</Sign>);
    const element = screen.getByText("Hello");
    expect(element.getAttribute("data-test")).toBe("value");
  });
});
