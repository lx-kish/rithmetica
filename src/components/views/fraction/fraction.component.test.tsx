// Fraction.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for additional matchers

import Fraction from "./fraction.component"; // Update the import path accordingly
import IFractionsProblem from "../../../TS/interfaces/IFractionsProblem";

const mockFraction: IFractionsProblem = {
  numerator: 3,
  denominator: 4,
};

describe("Fraction Component", () => {
  it("renders Fraction component with numerator and denominator", () => {
    render(<Fraction className="test" fraction={mockFraction} />);

    // Assert that numerator and denominator are rendered
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("renders Fraction component with empty numerator and denominator", () => {
    const emptyFraction: IFractionsProblem = {
      numerator: undefined,
      denominator: undefined,
    };

    render(<Fraction className="test" fraction={emptyFraction} />);

    // Assert that numerator and denominator are not rendered
    expect(screen.queryByDisplayValue("")).toBeNull();
  });

  it("renders Fraction component with custom class name", () => {
    render(<Fraction className="custom-class" fraction={mockFraction} />);

    // Assert that the custom class name is present in the rendered component
    expect(screen.getByTestId("fraction-span")).toHaveClass("custom-class");
  });

  // Add more tests as needed based on your component behavior
});
