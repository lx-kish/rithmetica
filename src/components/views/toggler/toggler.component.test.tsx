import { render, screen, fireEvent } from "@testing-library/react";
import { vi, afterEach } from "vitest";
import Toggler from "./toggler.component";

describe("Toggler Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // Default props for tests.
  const defaultProps = {
    checked: true,
    onChange: vi.fn(),
    toggleBox: { className: "toggle-box-class" },
    togglerLeft: { className: "left-class", text: "Left" },
    togglerRight: { className: "right-class", text: "Right" },
    input: {
      id: "toggle-input",
      type: "checkbox",
      name: "toggle",
      value: "on",
    },
  };

  it("renders outer div with provided toggleBox className", () => {
    const { container } = render(<Toggler {...defaultProps} />);
    const outerDiv = container.querySelector("div");
    expect(outerDiv?.getAttribute("class")).toBe("toggle-box-class");
  });

  it("renders outer div without class when toggleBox is undefined", () => {
    const props = { ...defaultProps, toggleBox: undefined };
    const { container } = render(<Toggler {...props} />);
    const outerDiv = container.querySelector("div");
    expect(outerDiv?.getAttribute("class")).toBeNull();
  });

  it("renders label with htmlFor attribute equal to input id when input is provided", () => {
    const { container } = render(<Toggler {...defaultProps} />);
    const label = container.querySelector("label");
    expect(label?.getAttribute("for")).toBe("toggle-input");
  });

  it("renders label without htmlFor attribute when input is undefined", () => {
    const props = { ...defaultProps, input: undefined };
    const { container } = render(<Toggler {...props} />);
    const label = container.querySelector("label");
    expect(label?.getAttribute("for")).toBeNull();
  });

  it("renders left StyledSpan with correct class when togglerLeft is provided", () => {
    render(<Toggler {...defaultProps} />);
    const leftSpan = screen.getByText("Left");
    expect(leftSpan.className).toBe("left-class");
  });

  it("renders left StyledSpan with correct text when togglerLeft is provided", () => {
    render(<Toggler {...defaultProps} />);
    const leftSpan = screen.getByText("Left");
    expect(leftSpan.textContent).toBe("Left");
  });

  it("renders right StyledSpan with correct class when togglerRight is provided", () => {
    render(<Toggler {...defaultProps} />);
    const rightSpan = screen.getByText("Right");
    expect(rightSpan.className).toBe("right-class");
  });

  it("renders right StyledSpan with correct text when togglerRight is provided", () => {
    render(<Toggler {...defaultProps} />);
    const rightSpan = screen.getByText("Right");
    expect(rightSpan.textContent).toBe("Right");
  });

  it("renders Input element with checked prop set correctly", () => {
    render(<Toggler {...defaultProps} />);
    // Assuming Input renders an <input> element with type="checkbox"
    const inputEl = screen.getByRole("checkbox") as HTMLInputElement;
    expect(inputEl.checked).toBe(true);
  });

  it("renders left StyledSpan empty when togglerLeft is undefined", () => {
    const props = { ...defaultProps, togglerLeft: undefined };
    const { container } = render(<Toggler {...props} />);
    // The left StyledSpan is the first span inside the label.
    const label = container.querySelector("label");
    const spans = label?.querySelectorAll("span");
    const leftSpan = spans ? spans[0] : null;
    expect(leftSpan?.textContent).toBe("");
  });

  it("renders right StyledSpan empty when togglerRight is undefined", () => {
    const props = { ...defaultProps, togglerRight: undefined };
    const { container } = render(<Toggler {...props} />);
    // The right StyledSpan is the last span inside the label.
    const label = container.querySelector("label");
    const spans = label?.querySelectorAll("span");
    const rightSpan =
      spans && spans.length > 1 ? spans[spans.length - 1] : null;
    expect(rightSpan?.textContent).toBe("");
  });
});
