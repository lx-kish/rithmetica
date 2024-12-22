import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import TabCellInput from "./tab-cell-input.component";

const defaultProps = {
  className: "test-class",
  answer: 10,
  value: "5",
  handleChange: vi.fn(),
};

describe("TabCellInput component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders component without errors", () => {
    render(<TabCellInput {...defaultProps} />);

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("renders the component with the correct className", () => {
    render(<TabCellInput {...defaultProps} />);

    expect(screen.getByRole("spinbutton")).toHaveClass("test-class");
  });

  it("renders the component with the correct value", () => {
    render(<TabCellInput {...defaultProps} />);

    expect(screen.getByRole("spinbutton")).toHaveValue(5);
  });

  it("calls handleChange when input value changes", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "15" } });
    expect(defaultProps.handleChange).toHaveBeenCalled();
  });

  it("renders with the correct answer in the min attribute", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("min", "10");
  });

  it("renders with the correct answer in the max attribute", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("max", "10");
  });

  it("does not call handleChange if input value is unchanged", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(defaultProps.handleChange).not.toHaveBeenCalled();
  });

  it("renders the input element with type number", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("type", "number");
  });

  it("renders the input element with the correct step value", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("step", "1");
  });

  it("renders the input element with the correct pattern", () => {
    render(<TabCellInput {...defaultProps} />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("pattern", "[0-9]*");
  });

  it("displays an empty input when value is an empty string", () => {
    render(<TabCellInput {...defaultProps} value="" />);

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(null);
  });

  it("does not allow non-numeric input values", () => {
    render(<TabCellInput {...defaultProps} value="" />);

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue(null);
  });
});
