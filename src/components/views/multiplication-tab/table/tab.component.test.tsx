import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import Tab from "./tab.component";
import content from "../../../../table.content";

// --- Mocks for child components ---
vi.mock("../tab-header/tab-header.component", () => ({
  default: (props: any) => (
    <div data-testid="tab-header" id={props.id}>
      TabHeader
    </div>
  ),
}));

vi.mock("../tab-empty-line/tab-empty-line.component", () => ({
  default: () => <div data-testid="tab-empty-line">TabEmptyLine</div>,
}));

vi.mock("../tab-line/tab-line.component", () => ({
  default: (props: any) => (
    <div data-testid="tab-line" className={props.className}>
      TabLine: {props.value}
    </div>
  ),
}));

// --- Test Suite ---
describe("Tab Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders a section element with class 'tab'", () => {
    const { container } = render(<Tab />);
    const section = container.querySelector("section.tab");
    expect(section).toBeInTheDocument();
  });

  it("renders a section element with id 'tab'", () => {
    const { container } = render(<Tab />);
    const section = container.querySelector("section");
    expect(section?.id).toBe("tab");
  });

  it("renders exactly two TabHeader components", () => {
    render(<Tab />);
    const headers = screen.getAllByTestId("tab-header");
    expect(headers.length).toBe(2);
  });

  it("renders the first TabHeader with id 'header-stick'", () => {
    render(<Tab />);
    const headers = screen.getAllByTestId("tab-header");
    expect(headers[0].getAttribute("id")).toBe("header-stick");
  });

  it("renders the second TabHeader with an empty id", () => {
    render(<Tab />);
    const headers = screen.getAllByTestId("tab-header");
    expect(headers[1].getAttribute("id")).toBe("");
  });

  it("renders exactly one TabEmptyLine component", () => {
    render(<Tab />);
    const emptyLines = screen.getAllByTestId("tab-empty-line");
    expect(emptyLines.length).toBe(1);
  });

  it("renders exactly nine TabLine components", () => {
    render(<Tab />);
    const tabLines = screen.getAllByTestId("tab-line");
    expect(tabLines.length).toBe(9);
  });

  it("renders a TabLine with text 'TabLine: 2' for index 2", () => {
    render(<Tab />);
    const tabLine = screen.getByText("TabLine: 2");
    expect(tabLine).toBeInTheDocument();
  });

  it("renders a TabLine for index 2 with correct class from content.styles", () => {
    render(<Tab />);
    const tabLine = screen.getByText("TabLine: 2");
    expect(tabLine).toHaveClass(content.styles[2]);
  });

  it("renders the first child of the section as a TabHeader", () => {
    const { container } = render(<Tab />);
    const section = container.querySelector("section");
    expect(section?.firstElementChild?.getAttribute("data-testid")).toBe(
      "tab-header"
    );
  });

  it("renders the second child of the section as a TabEmptyLine", () => {
    const { container } = render(<Tab />);
    const section = container.querySelector("section");
    expect(section?.children[1].getAttribute("data-testid")).toBe(
      "tab-empty-line"
    );
  });

  it("renders the last child of the section as a TabHeader", () => {
    const { container } = render(<Tab />);
    const section = container.querySelector("section");
    expect(section?.lastElementChild?.getAttribute("data-testid")).toBe(
      "tab-header"
    );
  });
});
