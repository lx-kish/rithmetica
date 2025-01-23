import React from "react";
import { render, screen } from "@testing-library/react";
import { vi, afterEach, Mock } from "vitest";
import Arithmetic from "./arithmetic.page";
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
  "../../components/views/header/arithmetic/arithmetic.header.content",
  () => ({
    default: ({ pageName }: { pageName: string }) => (
      <div data-testid="arithmetic-header-content">
        ArithmeticHeaderContent: {pageName}
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

// --- Mock for useRenderScrollUpBtn hook ---
vi.mock(
  "../../hooks/use-render-scroll-up-btn/use-render-scroll-up-btn",
  () => ({
    default: vi.fn(),
  })
);

describe("Arithmetic Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders NavigationBar component", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const navBar = screen.getByTestId("navigation-bar");
    expect(navBar).toBeInTheDocument();
  });

  it('renders a main element with class "problem__main main"', () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Arithmetic />);
    const mainEl = container.querySelector("main.problem__main.main");
    expect(mainEl).toBeInTheDocument();
  });

  it("renders Header component with correct pageName", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const header = screen.getByTestId("header");
    expect(header.textContent).toContain(routes.arithmetic);
  });

  it("renders ArithmeticHeaderContent component with correct pageName", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const arithmeticHeader = screen.getByTestId("arithmetic-header-content");
    expect(arithmeticHeader.textContent).toContain(routes.arithmetic);
  });

  it("renders Problems component with correct pageName", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const problems = screen.getByTestId("problems");
    expect(problems.textContent).toContain(routes.arithmetic);
  });

  it("renders BtnUp component when useRenderScrollUpBtn returns true", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(true);
    render(<Arithmetic />);
    const btnUp = screen.getByTestId("btn-up");
    expect(btnUp).toBeInTheDocument();
  });

  it("does not render BtnUp component when useRenderScrollUpBtn returns false", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const btnUp = screen.queryByTestId("btn-up");
    expect(btnUp).toBeNull();
  });

  it("renders Footer component", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    render(<Arithmetic />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });

  it("renders Header component as a child of the main element", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Arithmetic />);
    const mainEl = container.querySelector("main.problem__main.main");
    const header = screen.getByTestId("header");
    expect(header.parentElement).toBe(mainEl);
  });

  it("renders Footer as the last element in the fragment", () => {
    (useRenderScrollUpBtn as Mock).mockReturnValue(false);
    const { container } = render(<Arithmetic />);
    const footer = screen.getByTestId("footer");
    expect(container.lastChild).toBe(footer);
  });
});
