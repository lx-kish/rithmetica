import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import CollapsibleSticky from "./collapsible-sticky.component";
import useStickHeaderOnScroll from "../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll";

// Mock the custom hook
vi.mock("../../hooks/use-stick-header-on-scroll/use-stick-header-on-scroll");

describe("CollapsibleSticky Component", () => {
  beforeEach(() => {
    // @ts-ignore
    // Set up the mock return value for the custom hook
    useStickHeaderOnScroll.mockReturnValue({
      displayTabHeader: false,
      setDisplayTabHeader: vi.fn(),
    });
  });

  it("renders title correctly", () => {
    render(<CollapsibleSticky title="Sticky Test Title" />);
    expect(screen.getByText("Sticky Test Title")).toBeInTheDocument();
  });

  it("renders children content correctly", () => {
    render(
      <CollapsibleSticky>
        <div>Sticky Child Content</div>
      </CollapsibleSticky>
    );
    expect(screen.getByText("Sticky Child Content")).toBeInTheDocument();
  });

  it("toggles content visibility when the button is clicked", () => {
    render(
      <CollapsibleSticky title="Toggle Test">
        <div>Toggleable Content</div>
      </CollapsibleSticky>
    );

    const toggleButton = screen.getByRole("button");

    // Initially, the content should be hidden
    expect(screen.getByText("Toggleable Content").parentElement).toHaveClass(
      "collapsible--collapsed"
    );

    // Click to expand
    fireEvent.click(toggleButton);
    expect(screen.getByText("Toggleable Content").parentElement).toHaveClass(
      "collapsible--expanded"
    );

    // Click to collapse
    fireEvent.click(toggleButton);
    expect(screen.getByText("Toggleable Content").parentElement).toHaveClass(
      "collapsible--collapsed"
    );
  });

  it("applies class name based on level prop", () => {
    const { container } = render(<CollapsibleSticky level="two" />);

    // Check if the correct class names are applied
    expect(
      container.querySelector(".collapsible__title--level-two")
    ).toBeInTheDocument();
    expect(
      container.querySelector(".collapsible__btn--level-two")
    ).toBeInTheDocument();
  });

  it("applies class names based on borderBottom prop", () => {
    const { container } = render(<CollapsibleSticky borderBottom={true} />);

    // Check if the correct class names are applied
    expect(
      container.querySelector(".collapsible__border-bottom")
    ).toBeInTheDocument();
  });

  it("calls setDisplayTabHeader with correct value when expanded and collapsed", () => {
    const setDisplayTabHeaderMock = vi.fn();
    // @ts-ignore
    useStickHeaderOnScroll.mockReturnValue({
      displayTabHeader: false,
      setDisplayTabHeader: setDisplayTabHeaderMock,
    });

    render(
      <CollapsibleSticky stickyBoxId="testBox" stickyElementId="testElement" />
    );

    const toggleButton = screen.getByRole("button");

    // Click to expand
    fireEvent.click(toggleButton);
    expect(setDisplayTabHeaderMock).toHaveBeenCalledWith(true);

    // Click to collapse
    fireEvent.click(toggleButton);
    expect(setDisplayTabHeaderMock).toHaveBeenCalledWith(false);
  });
});
