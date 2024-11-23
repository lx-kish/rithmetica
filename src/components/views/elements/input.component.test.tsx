import { createRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import Input from "./input.component";

describe("Input Component", () => {
  it("renders the input element", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("applies the placeholder attribute", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("accepts a custom className", () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("applies additional props to the input element", () => {
    render(<Input id="test-id" aria-label="Custom Label" />);
    const input = screen.getByRole("textbox", { name: "Custom Label" });
    expect(input).toHaveAttribute("id", "test-id");
  });

  it("handles value changes correctly", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders with a forwarded ref", () => {
    const inputRef = createRef<HTMLInputElement>();
    render(<Input passingRef={inputRef} />);
    expect(inputRef.current).toBeInstanceOf(HTMLInputElement);
  });

  it("supports read-only inputs", () => {
    render(<Input readOnly value="read-only value" />);
    const input = screen.getByDisplayValue("read-only value");
    expect(input).toHaveAttribute("readOnly");
  });

  it("supports disabled inputs", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("allows custom input types", () => {
    render(<Input type="email" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("triggers focus when focused programmatically", () => {
    const inputRef = createRef<HTMLInputElement>();
    render(<Input passingRef={inputRef} />);
    inputRef.current?.focus();
    expect(document.activeElement).toBe(inputRef.current);
  });

  it("handles auto-focus correctly", () => {
    render(<Input autoFocus />);
    const input = screen.getByRole("textbox");
    expect(document.activeElement).toBe(input);
  });

  it("applies aria attributes for accessibility", () => {
    render(<Input aria-labelledby="label-id" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-labelledby", "label-id");
  });

  it("renders without crashing when no props are provided", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("supports input with a default value", () => {
    render(<Input defaultValue="default text" />);
    const input = screen.getByDisplayValue("default text");
    expect(input).toBeInTheDocument();
  });

  it("supports required attribute", () => {
    render(<Input required />);
    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
  });

  it("prevents typing in a read-only input", () => {
    render(<Input readOnly value="read-only" />);
    const input = screen.getByDisplayValue("read-only");
    fireEvent.change(input, { target: { value: "attempted value" } });
    expect(input).toHaveValue("read-only");
  });
});
