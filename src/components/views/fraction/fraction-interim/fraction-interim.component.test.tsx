import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import FractionInterim from "./fraction-interim.component";

import { IProblem } from "../../../../TS/interfaces/interfaces";

const mockProblem: IProblem[] = [
  {
    type: "answers",
    interimNumerator1: "",
    interimNumerator2: "",
    interimDenominator1: "",
    interimDenominator2: "",
  },
];

const mockOperand = {
  type: "interim",
  numerator1: 72,
  sign: "+",
  numerator2: 70,
  denominator1: 42,
  denominator2: 0,
};

const mockGetInputClassName = vi.fn();
const mockHandleChange = vi.fn();

describe("fraction interim component test suit", () => {
  afterEach(cleanup);

  it("renders 1 element with class name 'fraction'", () => {
    const { container } = render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(container.querySelectorAll(".fraction")).toHaveLength(1);
  });

  it("renders 2 elements with class name 'fraction__interim'", () => {
    const { container } = render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(container.querySelectorAll(".fraction__interim")).toHaveLength(2);
  });

  it("renders 3 input fields in case of operand.sign is NOT ×", () => {
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getAllByRole("spinbutton", { name: "" })).toHaveLength(3);
  });

  it("renders 4 input fields in case of operand.sign is ×", () => {
    mockOperand.sign = "×";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getAllByRole("spinbutton", { name: "" })).toHaveLength(4);
    mockOperand.sign = "+"; // clean up
  });

  it("renders delimeter element correctly", () => {
    const { container } = render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(container.querySelector(".fraction__delimeter")).toBeInTheDocument();
  });

  it("renders one sign element in case of operand.sign is NOT ×", () => {
    const { container } = render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(container.querySelectorAll(".fraction__sign--interim")).toHaveLength(
      1
    );
  });

  it("renders two sign elements in case of operand.sign is ×", () => {
    mockOperand.sign = "×";
    const { container } = render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(container.querySelectorAll(".fraction__sign--interim")).toHaveLength(
      2
    );
    mockOperand.sign = "+"; // clean up
  });

  it("renders interimNumerator1 value correctly", () => {
    mockProblem[0].interimNumerator1 = "72";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getByDisplayValue("72")).toBeInTheDocument();
    mockProblem[0].interimNumerator1 = ""; // clean up
  });

  it("renders interimNumerator2 value correctly", () => {
    mockProblem[0].interimNumerator2 = "70";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getByDisplayValue("70")).toBeInTheDocument();
    mockProblem[0].interimNumerator2 = ""; // clean up
  });

  it("renders interimDenominator1 value correctly", () => {
    mockProblem[0].interimDenominator1 = "42";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getByDisplayValue("42")).toBeInTheDocument();
    mockProblem[0].interimDenominator1 = ""; // clean up
  });

  it("renders interimDenominator2 value correctly", () => {
    mockOperand.sign = "×";
    mockProblem[0].interimDenominator2 = "11";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(screen.getByDisplayValue("11")).toBeInTheDocument();
    // clean up
    mockOperand.sign = "+";
    mockProblem[0].interimDenominator2 = "";
  });

  it("calls getInputClassName while renders", () => {
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    expect(mockGetInputClassName).toHaveBeenCalled();
  });

  it("calls handleChange in the interimNumerator1 input field when the value is changed", () => {
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    const interimNumerator1 = screen.getAllByRole("spinbutton", {
      name: "",
    })[0];
    fireEvent.change(interimNumerator1, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("calls handleChange in the interimNumerator2 input field when the value is changed", () => {
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    const interimNumerator2 = screen.getAllByRole("spinbutton", {
      name: "",
    })[1];
    fireEvent.change(interimNumerator2, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("calls handleChange in the interimDenominator1 input field when the value is changed", () => {
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    const interimDenominator1 = screen.getAllByRole("spinbutton", {
      name: "",
    })[2];
    fireEvent.change(interimDenominator1, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("calls handleChange in the interimDenominator2 input field when the value is changed, and operand.sign is ×", () => {
    mockOperand.sign = "×";
    render(
      <FractionInterim
        content={mockProblem}
        operand={mockOperand}
        getInputClassName={mockGetInputClassName}
        handleChange={mockHandleChange}
      />
    );

    const interimDenominator1 = screen.getAllByRole("spinbutton", {
      name: "",
    })[2];
    fireEvent.change(interimDenominator1, { target: { value: "23" } });

    expect(mockHandleChange).toHaveBeenCalled();
    mockOperand.sign = "+"; // clean up
  });
});
