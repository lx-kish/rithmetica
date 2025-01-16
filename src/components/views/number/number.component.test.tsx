import { render } from "@testing-library/react";
import { vi, afterEach } from "vitest";
import Number from "./number.component";

// Mock the content module with predictable style values
vi.mock("../../../table.content", () => ({
  default: {
    styles: {
      0: "style0",
      1: "style1",
      2: "style2",
      3: "style3",
      4: "style4",
      5: "style5",
      6: "style6",
      7: "style7",
      8: "style8",
      9: "style9",
    },
  },
}));

describe("Number Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders an outer span with the provided className", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const outerSpan = container.firstChild as HTMLElement;
    expect(outerSpan.className).toBe("outer-class");
  });

  it("renders no inner spans when the number prop is empty", () => {
    const { container } = render(<Number className="outer-class" number="" />);
    // outer span should have no child nodes
    const innerSpans = container.firstChild?.childNodes;
    expect(innerSpans?.length).toBe(0);
  });

  it("renders three inner spans when the number prop is '123'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const innerSpans = container.firstChild?.childNodes;
    expect(innerSpans?.length).toBe(3);
  });

  it("renders the first inner span with text '1' for number '123'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const firstInnerSpan = container.firstChild?.childNodes[0] as HTMLElement;
    expect(firstInnerSpan.textContent).toBe("1");
  });

  it("renders the second inner span with text '2' for number '123'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const secondInnerSpan = container.firstChild?.childNodes[1] as HTMLElement;
    expect(secondInnerSpan.textContent).toBe("2");
  });

  it("renders the third inner span with text '3' for number '123'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const thirdInnerSpan = container.firstChild?.childNodes[2] as HTMLElement;
    expect(thirdInnerSpan.textContent).toBe("3");
  });

  it("applies the correct class to the first inner span for digit '1'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const firstInnerSpan = container.firstChild?.childNodes[0] as HTMLElement;
    expect(firstInnerSpan.className).toBe("style1");
  });

  it("applies the correct class to the second inner span for digit '2'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const secondInnerSpan = container.firstChild?.childNodes[1] as HTMLElement;
    expect(secondInnerSpan.className).toBe("style2");
  });

  it("applies the correct class to the third inner span for digit '3'", () => {
    const { container } = render(
      <Number className="outer-class" number="123" />
    );
    const thirdInnerSpan = container.firstChild?.childNodes[2] as HTMLElement;
    expect(thirdInnerSpan.className).toBe("style3");
  });

  it("renders an inner span with non-digit 'a' having class 'undefined'", () => {
    const { container } = render(<Number className="outer-class" number="a" />);
    const innerSpan = container.firstChild?.childNodes[0] as HTMLElement;
    expect(innerSpan.className).toBe("undefined");
  });
});
