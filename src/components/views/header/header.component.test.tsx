import { render, screen, cleanup } from "@testing-library/react";
import { vi } from "vitest";

import Header from "./header.component";

const mockSections = vi.hoisted(() => {
  return {
    default: [
      { link: "home", name: "Home Section", motto: "Welcome to Home" },
      { link: "about", name: "About Section", motto: "Learn More About Us" },
    ],
  };
});

vi.mock("../../../sections", () => mockSections);

const renderComponent = (pageName: string, children?: React.ReactElement) =>
  render(<Header pageName={pageName}>{children}</Header>);

describe("Header component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    cleanup();
  });

  it("renders without crashing", () => {
    renderComponent("home");

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays the correct h1 title based on pageName prop", () => {
    renderComponent("about");

    expect(screen.getByText("About Section")).toBeInTheDocument();
  });

  it("displays the correct h3 motto based on pageName prop", () => {
    renderComponent("about");

    expect(screen.getByText("Learn More About Us")).toBeInTheDocument();
  });

  it("handles missing sectionSettings gracefully", () => {
    renderComponent("non-existent-page");

    expect(screen.queryByRole("heading", { level: 1 })).toBeNull();
  });

  it("renders child elements passed to the children prop", () => {
    renderComponent("home", <div data-testid="child">Child Component</div>);

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("handles missing pageName prop without crashing", () => {
    render(<Header pageName="">{<div>Fallback</div>}</Header>);

    expect(screen.getByText("Fallback")).toBeInTheDocument();
  });

  it("displays fallback text if section is not found", () => {
    renderComponent("non-existent-page");

    expect(screen.queryByText(/section/i)).toBeNull();
  });

  it("handles special characters in pageName", () => {
    renderComponent("about@123");

    expect(screen.queryByText(/section/i)).toBeNull();
  });

  it("supports dynamic updates to pageName prop", () => {
    const { rerender } = renderComponent("home");

    expect(screen.getByText("Home Section")).toBeInTheDocument();
    rerender(<Header pageName="about" />);
    expect(screen.getByText("About Section")).toBeInTheDocument();
  });
});
