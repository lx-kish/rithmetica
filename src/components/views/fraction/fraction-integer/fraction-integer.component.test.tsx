import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import FractionInteger from "./fraction-integer.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";

const mockProblem: IProblem[] = [
  {
    type: "answers",
    remainedInteger: "",
  },
];

const mockOperand = {
  integer: 3,
  type: "remainedInteger",
};

const mockGetInputClassName = vi.fn();
const mockHandleChange = vi.fn();
const mockIsDisabled = vi.fn();

describe("fraction integer component", () => {
  afterEach(cleanup);

  it("renders fraction input box correctly", () => {
    const { container } = render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(container.querySelectorAll(".fraction__input-box")).toHaveLength(1);
  });

  it("renders 1 input fields correctly", () => {
    render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(screen.getAllByRole("spinbutton", { name: "" })).toHaveLength(1);
  });

  it("renders input with value correctly", () => {
    mockProblem[0].remainedInteger = "3";
    render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(screen.getByDisplayValue("3")).toBeInTheDocument();
    mockProblem[0].remainedInteger = ""; // clean up
  });

  it("calls getInputClassName while renders", () => {
    render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(mockGetInputClassName).toHaveBeenCalled();
  });

  it("calls isDisabled while renders", () => {
    render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(mockIsDisabled).toHaveBeenCalled();
  });

  it("calls handleChange in the input field when the value is changed", () => {
    render(
      <FractionInteger
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    const integerInput = screen.getByRole("spinbutton");
    fireEvent.change(integerInput, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });
});
