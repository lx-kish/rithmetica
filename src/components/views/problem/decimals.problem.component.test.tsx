import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, afterEach, Mock } from "vitest";
import DecimalsProblem from "./decimals.problem.component";

// --- Mock Redux hooks ---
vi.mock("../../../redux/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

// --- Mock child components ---
vi.mock("../number/number.component", () => ({
  default: ({ number, className }: { number: string; className: string }) => (
    <span data-testid="number" className={className}>
      {number}
    </span>
  ),
}));

vi.mock("../sign/sign.component", () => ({
  default: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => (
    <span data-testid="sign" className={className}>
      {children}
    </span>
  ),
}));

vi.mock("../input-numeric/input-numeric.component", () => ({
  default: ({
    value,
    className,
    handleChange,
    pattern,
    step,
    name,
    result,
  }: {
    value: string;
    className: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern: string;
    step: string;
    name: string;
    result: string;
  }) => (
    <input
      data-testid="input-numeric"
      value={value}
      className={className}
      onChange={handleChange}
      pattern={pattern}
      step={step}
      name={name}
      data-result={result}
    />
  ),
}));

// --- Constants and Dummy Data ---
const arithmeticOperandTypes = {
  operand: "operand",
  sign: "sign",
  input: "input",
};

const testContentValid = [
  { type: arithmeticOperandTypes.operand, value: 5 },
  { type: arithmeticOperandTypes.sign, value: "-" },
  { type: arithmeticOperandTypes.input, value: "42" },
];

const testContentUnknown = [
  { type: arithmeticOperandTypes.operand, value: 5 },
  { type: "unknown", value: "x" },
  { type: arithmeticOperandTypes.input, value: "42" },
];

// Dummy Redux states:
const validReduxState = [
  {
    id: "test-problem",
    problems: [
      [
        // For stateProblemIndex = 0, expected input value is "42"
        { value: "42" },
      ],
    ],
  },
];

const invalidReduxState = [
  {
    id: "test-problem",
    problems: [
      [
        // For stateProblemIndex = 0, expected input value is "99", so "42" is invalid.
        { value: "99" },
      ],
    ],
  },
];

// Set up a mock dispatch function.
const mockDispatch = vi.fn();
(useAppDispatch as Mock).mockReturnValue(mockDispatch);

describe("DecimalsProblem Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const defaultProps = {
    problemStateId: "test-problem",
    stateProblemIndex: 0,
    content: testContentValid,
  };

  it('renders a container with class "problem"', () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const { container } = render(<DecimalsProblem {...defaultProps} />);
    const div = container.querySelector("div.problem");
    expect(div).toBeInTheDocument();
  });

  it("renders a Number component for an operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const numberEl = screen.getByTestId("number");
    expect(numberEl.textContent).toBe("5");
  });

  it("renders a Sign component for a sign operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const signEl = screen.getByTestId("sign");
    expect(signEl.textContent).toBe("-");
  });

  it("renders an InputNumeric component for an input operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    expect(inputEl).toBeInTheDocument();
  });

  it('InputNumeric displays the value from the last content element ("42")', () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric") as HTMLInputElement;
    expect(inputEl.value).toBe("42");
  });

  it("InputNumeric has valid class when input value matches state (valid)", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    expect(inputEl.className).toBe("problem__input");
  });

  it("InputNumeric has invalid class when input value does not match state (invalid)", () => {
    (useAppSelector as Mock).mockReturnValue(invalidReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    expect(inputEl.className).toBe("problem__input problem__input--invalid");
  });

  it("dispatches setInputValue when InputNumeric changes", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    fireEvent.change(inputEl, { target: { value: "100", name: "value" } });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it("renders children in correct order: Number, then Sign, then InputNumeric", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const { container } = render(<DecimalsProblem {...defaultProps} />);
    const children = container.querySelector("div.problem")?.childNodes;
    const first = children?.[0] as HTMLElement;
    const second = children?.[1] as HTMLElement;
    const third = children?.[2] as HTMLElement;
    expect(first.getAttribute("data-testid")).toBe("number");
  });

  it("does not render an element for an unknown operand type", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const propsWithUnknown = {
      problemStateId: "test-problem",
      stateProblemIndex: 0,
      content: testContentUnknown,
    };
    const { container } = render(<DecimalsProblem {...propsWithUnknown} />);
    const children = container.querySelector("div.problem")?.childNodes;
    // testContentUnknown has 3 items but one with type "unknown" should render null.
    expect(children?.length).toBe(2);
  });

  it('InputNumeric has the correct pattern attribute "[0-9]+([,.][0-9]+)?"', () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<DecimalsProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    expect(inputEl.getAttribute("pattern")).toBe("[0-9]+([,\\.][0-9]+)?");
  });
});
