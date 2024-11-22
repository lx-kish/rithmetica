import { cleanup, render, screen } from "@testing-library/react";
import StyledSpan from "./styled-span.component";

describe("StyledSpan Component", () => {
  afterEach(cleanup);

  // Rendering with children
  it("renders the correct content", () => {
    render(<StyledSpan>Styled Span Content</StyledSpan>);
    expect(screen.getByText("Styled Span Content")).toBeInTheDocument();
  });

  it("renders a span element for the content", () => {
    render(<StyledSpan>Styled Span Content</StyledSpan>);
    expect(screen.getByText("Styled Span Content").tagName).toBe("SPAN");
  });

  // Applying props
  it("applies the className prop", () => {
    render(
      <StyledSpan className="test-class">Styled Span with Props</StyledSpan>
    );
    expect(screen.getByText("Styled Span with Props")).toHaveClass(
      "test-class"
    );
  });

  it("applies the id prop", () => {
    render(<StyledSpan id="test-id">Styled Span with Props</StyledSpan>);
    expect(screen.getByText("Styled Span with Props")).toHaveAttribute(
      "id",
      "test-id"
    );
  });

  it("applies the role prop", () => {
    render(<StyledSpan role="alert">Styled Span with Props</StyledSpan>);
    expect(screen.getByText("Styled Span with Props")).toHaveAttribute(
      "role",
      "alert"
    );
  });

  // Rendering without children
  it("renders without children as an empty element", () => {
    render(<StyledSpan data-testid="empty-styled-span" />);
    expect(screen.getByTestId("empty-styled-span")).toBeEmptyDOMElement();
  });

  // Null or undefined children
  it("renders correctly with null children", () => {
    render(<StyledSpan data-testid="empty-styled-span">{null}</StyledSpan>);
    expect(screen.getByTestId("empty-styled-span")).toBeEmptyDOMElement();
  });

  it("renders correctly with undefined children", () => {
    render(
      <StyledSpan data-testid="empty-styled-span">{undefined}</StyledSpan>
    );
    expect(screen.getByTestId("empty-styled-span")).toBeEmptyDOMElement();
    // render(<StyledSpan>{undefined}</StyledSpan>);
    // expect(screen.getAllByRole("generic")).toBeEmptyDOMElement();
  });

  // Accessibility
  it("renders with the correct role attribute", () => {
    render(<StyledSpan role="status">Accessible Styled Span</StyledSpan>);
    expect(screen.getByText("Accessible Styled Span")).toHaveAttribute(
      "role",
      "status"
    );
  });

  // Snapshot testing
  it("matches snapshot for consistent UI", () => {
    const { container } = render(
      <StyledSpan className="snapshot-class">Snapshot Test</StyledSpan>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
