import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import MultiplicationTab from "./multiplication-tab.page";
import { routes } from "../../TS/constants/constants";

// --- Mocks for child components ---
vi.mock(
  "../../components/views/navigation/navigation-bar/navigation-bar.component",
  () => ({
    default: () => <div data-testid="navigation-bar">NavigationBar</div>,
  })
);

vi.mock("../../components/views/header/header.component", () => ({
  default: ({
    children,
    pageName,
  }: {
    children: React.ReactNode;
    pageName: string;
  }) => (
    <div data-testid="header">
      Header: {pageName} {children}
    </div>
  ),
}));

vi.mock(
  "../../components/views/header/multiplication-tab/multiplication-tab.header.content",
  () => ({
    default: () => (
      <div data-testid="multiplication-tab-header-content">
        MultiplicationTabHeaderContent
      </div>
    ),
  })
);

vi.mock(
  "../../components/views/multiplication-tab/table/tab.component",
  () => ({
    default: () => <div data-testid="tab">Tab</div>,
  })
);

vi.mock("../../components/views/footer/footer.component", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe("MultiplicationTab Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders NavigationBar component", () => {
    render(<MultiplicationTab />);
    const navBar = screen.getByTestId("navigation-bar");
    expect(navBar).toBeInTheDocument();
  });

  it("renders a main element with class 'main'", () => {
    const { container } = render(<MultiplicationTab />);
    const mainEl = container.querySelector("main.main");
    expect(mainEl).toBeInTheDocument();
  });

  it("renders Header component with correct pageName", () => {
    render(<MultiplicationTab />);
    const header = screen.getByTestId("header");
    expect(header.textContent).toContain(routes.multiplicationTab);
  });

  it("renders MultiplicationTabHeaderContent component inside Header", () => {
    render(<MultiplicationTab />);
    const headerContent = screen.getByTestId(
      "multiplication-tab-header-content"
    );
    expect(headerContent).toBeInTheDocument();
  });

  it("renders Tab component", () => {
    render(<MultiplicationTab />);
    const tab = screen.getByTestId("tab");
    expect(tab).toBeInTheDocument();
  });

  it("renders Footer component", () => {
    render(<MultiplicationTab />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders Header component as a child of the main element", () => {
    const { container } = render(<MultiplicationTab />);
    const mainEl = container.querySelector("main.main");
    const header = screen.getByTestId("header");
    expect(header.parentElement).toBe(mainEl);
  });

  it("renders Tab component as a child of the main element", () => {
    const { container } = render(<MultiplicationTab />);
    const mainEl = container.querySelector("main.main");
    const tab = screen.getByTestId("tab");
    expect(tab.parentElement).toBe(mainEl);
  });

  it("renders Footer component outside of the main element", () => {
    const { container } = render(<MultiplicationTab />);
    const mainEl = container.querySelector("main.main");
    const footer = screen.getByTestId("footer");
    expect(mainEl?.contains(footer)).toBe(false);
  });

  it("renders NavigationBar before main element", () => {
    const { container } = render(<MultiplicationTab />);
    const navBar = screen.getByTestId("navigation-bar");
    const mainEl = container.querySelector("main.main");
    // Node.DOCUMENT_POSITION_FOLLOWING equals 4.
    expect(navBar.compareDocumentPosition(mainEl!)).toBe(4);
  });

  it("renders main element before Footer", () => {
    const { container } = render(<MultiplicationTab />);
    const mainEl = container.querySelector("main.main");
    const footer = screen.getByTestId("footer");
    expect(mainEl!.compareDocumentPosition(footer)).toBe(4);
  });
});
