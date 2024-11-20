import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import FractionInput from "./fraction-input.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";

const mockProblem: IProblem[] = [
  {
    type: "answers",
    resultDenominator: "",
    resultNumerator: "",
  },
];

const mockOperand = {
  type: "result",
  denominator: 42,
  integer: "",
  numerator: 142,
};

const mockGetInputClassName = vi.fn();
const mockHandleChange = vi.fn();
const mockIsDisabled = vi.fn();

describe("fraction input component", () => {
  afterEach(cleanup);

  it("renders 1 element with class name 'fraction'", () => {
    const { container } = render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(container.querySelectorAll(".fraction")).toHaveLength(1);
  });

  it("renders 2 input fields correctly", () => {
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(screen.getAllByRole("spinbutton", { name: "" })).toHaveLength(2);
  });

  it("renders delimeter element correctly", () => {
    const { container } = render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(container.querySelector(".fraction__delimeter")).toBeInTheDocument();
  });

  it("renders resultNumerator value correctly", () => {
    mockProblem[0].resultNumerator = "1";
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    mockProblem[0].resultNumerator = ""; // clean up
  });

  it("renders resultDenominator value correctly", () => {
    mockProblem[0].resultDenominator = "1";
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    mockProblem[0].resultDenominator = ""; // clean up
  });

  it("calls getInputClassName while renders", () => {
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    expect(mockGetInputClassName).toHaveBeenCalled();
  });

  it("calls handleChange in the resultNumerator input field when the value is changed", () => {
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    const resultNumerator = screen.getAllByRole("spinbutton", {
      name: "",
    })[0];
    fireEvent.change(resultNumerator, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("calls handleChange in the resultDenominator input field when the value is changed", () => {
    render(
      <FractionInput
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
        isDisabled={mockIsDisabled}
      />
    );

    const resultDenominator = screen.getAllByRole("spinbutton", {
      name: "",
    })[1];
    fireEvent.change(resultDenominator, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });
});
