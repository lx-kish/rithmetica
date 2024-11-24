import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";

import CollapsibleSticky from "./collapsible-sticky.component";
import useStickHeaderOnScroll from "../../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";

// Mock the custom hook
vi.mock(
  "../../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll",
  () => ({
    default: vi.fn(() => ({
      setDisplayTabHeader: vi.fn(),
    })),
  })
);

describe("CollapsibleSticky Component", () => {
  afterEach(cleanup);

  it("renders with default props", () => {
    const { container } = render(<CollapsibleSticky />);
    expect(container.querySelector(".collapsible")).toBeInTheDocument();
  });

  it("renders with a title", () => {
    render(<CollapsibleSticky title="Test Title" />);
    const title = screen.getByText("Test Title");
    expect(title).toBeInTheDocument();
  });

  it("applies border-bottom class when borderBottom is true", () => {
    const { container } = render(<CollapsibleSticky borderBottom />);
    expect(
      container.querySelector(".collapsible__border-bottom")
    ).toBeInTheDocument();
  });

  it("DOES NOT apply border-bottom class when borderBottom is false", () => {
    const { container } = render(<CollapsibleSticky />);
    expect(
      container.querySelector(".collapsible__border-bottom")
    ).not.toBeInTheDocument();
  });

  it("handles click events and toggles display state", () => {
    render(<CollapsibleSticky title="Test Title" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button.classList).toContain("collapsible__btn--expanded");
  });

  it("calls setDisplayTabHeader when display state changes", () => {
    const mockSetDisplayTabHeader = vi.fn();

    vi.mocked(useStickHeaderOnScroll).mockReturnValue({
      displayTabHeader: false,
      setDisplayTabHeader: mockSetDisplayTabHeader,
    });

    render(<CollapsibleSticky stickyBoxId="box" stickyElementId="element" />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetDisplayTabHeader).toHaveBeenCalledWith(true);
  });

  it("renders children when provided", () => {
    render(<CollapsibleSticky>test-text</CollapsibleSticky>);
    const child = screen.getByText("test-text");
    expect(child).toBeInTheDocument();
  });

  it("applies correct level class for title", () => {
    render(<CollapsibleSticky level="two" title="test-title" />);
    const title = screen.getByText("test-title");
    expect(title.classList).toContain("collapsible__title--level-two");
  });

  it("does not render sticky elements if stickyBoxId or stickyElementId is missing", () => {
    render(<CollapsibleSticky />);
    const button = screen.queryByRole("button");
    expect(button).not.toHaveClass("sticky");
  });

  it("removes sticky class on scroll if conditions are unmet", () => {
    const { container } = render(
      <CollapsibleSticky stickyBoxId="box" stickyElementId="element" />
    );
    const headerTab = container.querySelector(".collapsible__header");
    expect(headerTab?.classList).not.toContain("sticky");
  });

  it("renders with proper className for collapsed state by default", () => {
    render(<CollapsibleSticky>test-text</CollapsibleSticky>);
    const collapsible = screen.getByText("test-text");
    expect(collapsible.classList).toContain("collapsible--collapsed");
  });
});
