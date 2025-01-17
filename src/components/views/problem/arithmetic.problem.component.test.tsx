import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, afterEach, Mock } from "vitest";
import ArithmeticProblem from "./arithmetic.problem.component";

// --- Mocks for Redux hooks ---
vi.mock("../../../redux/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";

// --- Mocks for child components ---
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
  }: {
    value: string;
    className: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <input
      data-testid="input-numeric"
      value={value}
      className={className}
      onChange={handleChange}
    />
  ),
}));

// --- Dummy constants and test content ---
const arithmeticOperandTypes = {
  operand: "operand",
  sign: "sign",
  input: "input",
};

const testContentStandard = [
  { type: arithmeticOperandTypes.operand, value: 5 },
  { type: arithmeticOperandTypes.sign, value: "+" },
  { type: arithmeticOperandTypes.input, value: "42" },
];

const testContentUnknown = [
  { type: arithmeticOperandTypes.operand, value: 5 },
  { type: "unknown", value: "x" },
  { type: arithmeticOperandTypes.sign, value: "-" },
  { type: arithmeticOperandTypes.input, value: "42" },
];

// --- Dummy Redux states ---
const validReduxState = [
  {
    id: "problem1",
    problems: [
      [
        // For stateProblemIndex = 0, the last element's value is "42" (matching valid input)
        { value: "42" },
      ],
    ],
  },
];

const invalidReduxState = [
  {
    id: "problem1",
    problems: [
      [
        // For stateProblemIndex = 0, the last element's value is "99" (so input "42" is invalid)
        { value: "99" },
      ],
    ],
  },
];

// --- Setup mocks for Redux hooks ---
const mockDispatch = vi.fn();
(useAppDispatch as Mock).mockReturnValue(mockDispatch);

describe("ArithmeticProblem Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  const defaultProps = {
    problemStateId: "problem1",
    stateProblemIndex: 0,
    content: testContentStandard,
  };

  it("renders a container with class 'problem'", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const { container } = render(<ArithmeticProblem {...defaultProps} />);
    const div = container.querySelector("div.problem");
    expect(div).toBeInTheDocument();
  });

  it("renders a Number component for an operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const numberEl = screen.getByTestId("number");
    expect(numberEl.textContent).toBe("5");
  });

  it("renders a Sign component for a sign operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const signEl = screen.getByTestId("sign");
    expect(signEl.textContent).toBe("+");
  });

  it("renders an InputNumeric component for an input operand", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    expect(inputEl).toBeInTheDocument();
  });

  it("InputNumeric displays value from the last content element", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric") as HTMLInputElement;
    expect(inputEl.value).toBe("42");
  });

  it("InputNumeric has valid class when input value matches state (valid)", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    // When valid, getInputClassName returns "problem__input"
    expect(inputEl.className).toBe("problem__input");
  });

  it("InputNumeric has invalid class when input value does not match state (invalid)", () => {
    (useAppSelector as Mock).mockReturnValue(invalidReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    // When invalid, getInputClassName returns "problem__input problem__input--invalid"
    expect(inputEl.className).toBe("problem__input problem__input--invalid");
  });

  it("dispatches setInputValue action when InputNumeric changes", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    render(<ArithmeticProblem {...defaultProps} />);
    const inputEl = screen.getByTestId("input-numeric");
    fireEvent.change(inputEl, { target: { value: "100" } });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  it("renders children in the correct order: Number, then Sign, then InputNumeric", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const { container } = render(<ArithmeticProblem {...defaultProps} />);
    const children = container.querySelector("div.problem")?.childNodes;
    // Expect 3 rendered children from testContentStandard
    const firstChild = children?.[0] as HTMLElement;
    const secondChild = children?.[1] as HTMLElement;
    const thirdChild = children?.[2] as HTMLElement;
    expect(firstChild.getAttribute("data-testid")).toBe("number");
    // The Sign component is rendered second
    expect(secondChild.getAttribute("data-testid")).toBe("sign");
    // The InputNumeric component is rendered third
    expect(thirdChild.getAttribute("data-testid")).toBe("input-numeric");
  });

  it("does not render an element for an unknown operand type", () => {
    (useAppSelector as Mock).mockReturnValue(validReduxState);
    const propsWithUnknown = {
      problemStateId: "problem1",
      stateProblemIndex: 0,
      content: testContentUnknown,
    };
    const { container } = render(<ArithmeticProblem {...propsWithUnknown} />);
    // testContentUnknown has 4 items but one with type "unknown" should render null,
    // so expect only 3 rendered child elements.
    const children = container.querySelector("div.problem")?.childNodes;
    expect(children?.length).toBe(3);
  });
});
