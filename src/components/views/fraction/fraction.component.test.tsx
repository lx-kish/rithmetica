import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import Fraction from "./fraction.component";

const mockFraction = {
  type: "fraction",
  numerator: NaN,
  denominator: NaN,
};

describe("fraction component test suit", () => {
  afterEach(cleanup);

  it("should render 1 element with passed class name", () => {
    const { container } = render(
      <Fraction fraction={mockFraction} className="testClassName" />
    );

    expect(container.querySelectorAll(".testClassName")).toHaveLength(1);
  });

  it("should render fraction correclty", () => {
    const numerator = 1;
    const denominator = 2;
    mockFraction.numerator = numerator;
    mockFraction.denominator = denominator;
    const { container } = render(
      <Fraction fraction={mockFraction} className="testClassName" />
    );

    expect(container.querySelectorAll(".problem__digit")).toHaveLength(2);
    mockFraction.numerator = NaN;
    mockFraction.denominator = NaN;
  });

  it("should render numerator correclty", () => {
    const numerator = 1;
    mockFraction.numerator = numerator;
    render(<Fraction fraction={mockFraction} className="testClassName" />);

    expect(screen.getByText(numerator.toString())).toBeInTheDocument();
    mockFraction.numerator = NaN;
  });

  it("should render 2-digit numerator correclty", () => {
    const numerator = 12;
    mockFraction.numerator = numerator;
    render(<Fraction fraction={mockFraction} className="testClassName" />);

    expect(screen.getByText((numerator % 10).toString())).toBeInTheDocument();
    mockFraction.numerator = NaN;
  });

  it("should render denominator correclty", () => {
    const denominator = 3;
    mockFraction.denominator = denominator;
    render(<Fraction fraction={mockFraction} className="testClassName" />);

    expect(screen.getByText(denominator.toString())).toBeInTheDocument();
    mockFraction.denominator = NaN;
  });

  it("should render second digit of denominator correclty", () => {
    const denominator = 34;
    mockFraction.denominator = denominator;
    render(<Fraction fraction={mockFraction} className="testClassName" />);

    expect(screen.getByText((denominator % 10).toString())).toBeInTheDocument();
    mockFraction.denominator = NaN;
  });

  it("renders delimeter element correctly", () => {
    const { container } = render(
      <Fraction fraction={mockFraction} className="testClassName" />
    );

    expect(container.querySelector(".fraction__delimeter")).toBeInTheDocument();
  });
});
