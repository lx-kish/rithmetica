import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach, Mock } from "vitest";
import Fractions from "./fractions.page";
import useRenderScrollUpBtn from "../../hooks/use-render-scroll-up-btn/use-render-scroll-up-btn";
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
  "../../components/views/header/fractions/fractions.header.content",
  () => ({
    default: ({ pageName }: { pageName: string }) => (
      <div data-testid="fractions-header-content">
        FractionsHeaderContent: {pageName}
      </div>
    ),
  })
);

vi.mock("../../components/views/problems/problems.component", () => ({
  default: ({ pageName }: { pageName: string }) => (
    <div data-testid="problems">Problems: {pageName}</div>
  ),
}));

vi.mock("../../components/views/btn-up/btn-up.component", () => ({
  default: () => <div data-testid="btn-up">BtnUp</div>,
}));

vi.mock("../../components/views/footer/footer.component", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

// --- Mock for custom hook ---
vi.mock(
  "../../hooks/use-render-scroll-up-btn/use-render-scroll-up-btn",
  () => ({
    default: vi.fn(),
  })
);

describe("Fractions Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders NavigationBar component", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const navBar = screen.getByTestId("navigation-bar");
    expect(navBar).toBeInTheDocument();
  });

  it("renders a main element with classes 'problem__main main'", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Fractions />);
    const mainEl = container.querySelector("main.problem__main.main");
    expect(mainEl).toBeInTheDocument();
  });

  it("renders Header component with pageName equal to routes.fractions", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const header = screen.getByTestId("header");
    expect(header.textContent).toContain(routes.fractions);
  });

  it("renders FractionsHeaderContent component with pageName equal to routes.fractions", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const fracHeaderContent = screen.getByTestId("fractions-header-content");
    expect(fracHeaderContent.textContent).toContain(routes.fractions);
  });

  it("renders Problems component with pageName equal to routes.fractions", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const problems = screen.getByTestId("problems");
    expect(problems.textContent).toContain(routes.fractions);
  });

  it("renders BtnUp component when useRenderScrollUpBtn returns true", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(true);
    render(<Fractions />);
    const btnUp = screen.getByTestId("btn-up");
    expect(btnUp).toBeInTheDocument();
  });

  it("does not render BtnUp component when useRenderScrollUpBtn returns false", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const btnUp = screen.queryByTestId("btn-up");
    expect(btnUp).toBeNull();
  });

  it("renders Footer component", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Fractions />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders Header as a child of the main element", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Fractions />);
    const mainEl = container.querySelector("main.problem__main.main");
    const header = screen.getByTestId("header");
    expect(header.parentElement).toBe(mainEl);
  });

  it("renders Footer outside of the main element", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Fractions />);
    const mainEl = container.querySelector("main.problem__main.main");
    const footer = screen.getByTestId("footer");
    expect(mainEl?.contains(footer)).toBe(false);
  });
});
