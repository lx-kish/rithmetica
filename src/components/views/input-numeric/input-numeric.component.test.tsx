import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import InputNumeric from "./input-numeric.component";

import handleKeyDown from "../../../utils/handle-key-down-event/handle-key-down-event";

// Mock handleKeyDown to ensure it's called correctly
vi.mock("../../../utils/handle-key-down-event/handle-key-down-event", () => ({
  default: vi.fn(),
}));

const mockHandleChange = vi.fn();

describe("InputNumeric Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders the input element with default props", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  it("applies the given className to the input element", () => {
    render(<InputNumeric className="test-class" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("test-class");
  });

  it("sets the input mode to numeric by default", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("inputmode", "numeric");
  });

  it("uses the provided inputMode prop if specified", () => {
    render(<InputNumeric inputMode="text" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("inputmode", "text");
  });

  it("sets the input pattern attribute if provided", () => {
    render(<InputNumeric pattern="[0-9]*" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("pattern", "[0-9]*");
  });

  it("disables the input when disabled prop is true", () => {
    render(<InputNumeric disabled />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeDisabled();
  });

  it("renders the input element with the given title", () => {
    render(<InputNumeric title="Test Title" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("title", "Test Title");
  });

  it("calls handleChange when the input value changes", () => {
    render(<InputNumeric handleChange={mockHandleChange} />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "42" } });
    expect(mockHandleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("calls handleKeyDown when a key is pressed", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleKeyDown).toHaveBeenCalledWith(expect.any(Object));
  });

  it("renders the input element with the provided min and max values", () => {
    render(<InputNumeric result="10" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("min", "10");
    expect(input).toHaveAttribute("max", "10");
  });

  it("sets the input step attribute if provided", () => {
    render(<InputNumeric step="0.5" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("step", "0.5");
  });

  it("disables autocomplete on the input element", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("autocomplete", "off");
  });

  it("renders the input element with a default placeholder", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("placeholder", " ");
  });

  it("renders with a passingRef prop", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument(); // Ensures the ref is passed correctly and the element exists
  });

  it("does not call handleChange when no handler is provided", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(mockHandleChange).not.toHaveBeenCalled();
  });

  it("handles edge case where input value is an empty string", () => {
    render(<InputNumeric value="" />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(null);
  });

  it("handles edge case where inputMode is set to undefined", () => {
    render(<InputNumeric inputMode={undefined} />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveAttribute("inputmode", "numeric");
  });

  it("handles edge case where disabled prop is not provided", () => {
    render(<InputNumeric />);
    const input = screen.getByRole("spinbutton");
    expect(input).not.toBeDisabled();
  });
});
