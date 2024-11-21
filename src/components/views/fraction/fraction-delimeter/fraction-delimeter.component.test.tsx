import { render, cleanup, screen } from "@testing-library/react";

import FractionDelimeter from "./fraction-delimeter.component";

describe("Fraction delimeter component test suit", () => {
  afterEach(cleanup);

  it("renders component correctly", () => {
    render(<FractionDelimeter data-testid="test-delimeter" />);
    expect(screen.getByTestId("test-delimeter")).toBeInTheDocument();
  });

  it("renders component with class name props correctly", () => {
    render(
      <FractionDelimeter className="test-class" data-testid="test-delimeter" />
    );
    expect(screen.getByTestId("test-delimeter")).toHaveClass("test-class");
  });

  it("renders component with ID props correctly", () => {
    render(<FractionDelimeter id="test-id" data-testid="test-delimeter" />);
    expect(screen.getByTestId("test-delimeter")).toHaveAttribute(
      "id",
      "test-id"
    );
  });
});
