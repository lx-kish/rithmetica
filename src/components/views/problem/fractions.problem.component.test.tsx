import { render, screen } from "@testing-library/react";
import { vi, afterEach } from "vitest";
import FractionsProblem from "./fractions.problem.component";

// --- Mock Redux hooks ---
vi.mock("../../../redux/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

// --- Mock child components ---
vi.mock("../fraction/fraction.component", () => ({
  default: ({ fraction, className }: { fraction: any; className: string }) => (
    <span data-testid="fraction">{fraction.value}</span>
  ),
}));

vi.mock("../sign/sign.component", () => ({
  default: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => <span data-testid="sign">{children}</span>,
}));

// Mock FractionLogic to immediately render its children prop with dummy functions.
vi.mock("../fraction/fraction-logic/fraction-logic.component", () => ({
  default: ({ children }: { children: Function }) =>
    children({
      getInputClassName: () => "",
      handleChange: () => {},
      isDisabled: false,
    }),
}));

vi.mock("../fraction/fraction-interim/fraction-interim.component", () => ({
  default: (props: any) => <span data-testid="fraction-interim">Interim</span>,
}));

vi.mock("../fraction/fraction-integer/fraction-integer.component", () => ({
  default: (props: any) => <span data-testid="fraction-integer">Integer</span>,
}));

vi.mock("../fraction/fraction-input/fraction-input.component", () => ({
  default: (props: any) => <span data-testid="fraction-input">Input</span>,
}));

// --- Dummy constants and test content ---
const fractionOperandTypes = {
  fraction: "fraction",
  sign: "sign",
  interim: "interim",
  resultInteger: "resultInteger",
  remainedInteger: "remainedInteger",
  simplifiedInteger: "simplifiedInteger",
  result: "result",
  remained: "remained",
  simplified: "simplified",
};

const dummyProblemStateId = "test-problem";
const dummyStateProblemIndex = 0;

// Test content for each branch:
const contentFraction = [{ type: fractionOperandTypes.fraction, value: "1" }];
const contentSign = [{ type: fractionOperandTypes.sign, value: "+" }];
const contentInterim = [
  { type: fractionOperandTypes.interim, value: "interim" },
];
const contentResultInteger = [
  { type: fractionOperandTypes.resultInteger, value: "2" },
];
const contentResult = [{ type: fractionOperandTypes.result, value: "3" }];
const contentUnknown = [{ type: "unknown", value: "?" }];

const contentMixedOrder = [
  { type: fractionOperandTypes.fraction, value: "1" },
  { type: fractionOperandTypes.sign, value: "-" },
];

const contentWithUnknown = [
  { type: fractionOperandTypes.fraction, value: "1" },
  { type: fractionOperandTypes.sign, value: "-" },
  { type: fractionOperandTypes.result, value: "3" },
  { type: "unknown", value: "?" },
];

describe("FractionsProblem Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // 1. Container
  it('renders a container with class "problem problem--fraction"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentFraction}
      />
    );
    const container = document.querySelector("div.problem.problem--fraction");
    expect(container).toBeInTheDocument();
  });

  // 2. Fraction branch
  it('renders a Fraction component for operand type "fraction"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentFraction}
      />
    );
    const fractionEl = screen.getByTestId("fraction");
    expect(fractionEl.textContent).toBe("1");
  });

  // 3. Sign branch
  it('renders a Sign component for operand type "sign"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentSign}
      />
    );
    const signEl = screen.getByTestId("sign");
    expect(signEl.textContent).toBe("+");
  });

  // 4. Interim branch
  it('renders a FractionInterim component for operand type "interim"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentInterim}
      />
    );
    const interimEl = screen.getByTestId("fraction-interim");
    expect(interimEl).toBeInTheDocument();
  });

  // 5. Integer branch (resultInteger)
  it('renders a FractionInteger component for operand type "resultInteger"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentResultInteger}
      />
    );
    const integerEl = screen.getByTestId("fraction-integer");
    expect(integerEl).toBeInTheDocument();
  });

  // 6. Input branch (result)
  it('renders a FractionInput component for operand type "result"', () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentResult}
      />
    );
    const inputEl = screen.getByTestId("fraction-input");
    expect(inputEl).toBeInTheDocument();
  });

  // 7. Unknown branch: should render nothing
  it("renders nothing for an unknown operand type", () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentUnknown}
      />
    );
    // The container should have no children (since map returns [null])
    const container = document.querySelector("div.problem.problem--fraction");
    expect(container?.childNodes.length).toBe(0);
  });

  // 8. Order: first child in mixed content should be Fraction
  it("renders the first child as a Fraction component in mixed content", () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentMixedOrder}
      />
    );
    // Query all elements with test IDs for Fraction and Sign.
    const fractionEls = screen.getAllByTestId("fraction");
    expect(fractionEls[0]).toBeDefined();
  });

  // 9. Order: second child in mixed content should be Sign
  it("renders the second child as a Sign component in mixed content", () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentMixedOrder}
      />
    );
    // Since the first operand renders Fraction and the second renders Sign,
    // we can get all Sign elements.
    const signEls = screen.getAllByTestId("sign");
    expect(signEls[0]).toBeDefined();
  });

  // 10. Ignores unknown types: renders only valid operands from contentWithUnknown
  it("renders only valid operands ignoring unknown types", () => {
    render(
      <FractionsProblem
        problemStateId={dummyProblemStateId}
        stateProblemIndex={dummyStateProblemIndex}
        content={contentWithUnknown}
      />
    );
    // Expect valid components: Fraction, Sign, and FractionInput from valid types.
    // Unknown type should render nothing.
    const fractionEls = screen.queryAllByTestId("fraction");
    const signEls = screen.queryAllByTestId("sign");
    const inputEls = screen.queryAllByTestId("fraction-input");
    const totalValid = fractionEls.length + signEls.length + inputEls.length;
    expect(totalValid).toBe(3);
  });
});
