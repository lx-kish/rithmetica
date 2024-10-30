import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import CollapsibleFrame from "./collapsible-frame.component";

describe("Collapsible component test suit", () => {
  afterEach(cleanup);

  it("renders title correctly", () => {
    render(<CollapsibleFrame title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders children content correctly", () => {
    render(
      <CollapsibleFrame>
        <div>Child Content</div>
      </CollapsibleFrame>
    );
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("calls handleClick when the button is clicked", () => {
    const handleClickMock = vi.fn();
    render(
      <CollapsibleFrame handleClick={handleClickMock} btnClassName="test-btn" />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies provided class names correctly", () => {
    const { container } = render(
      <CollapsibleFrame
        lmntClassName="test-lmnt"
        headerClassName="test-header"
        titleClassName="test-title"
        btnBoxClassName="test-btn-box"
        btnClassName="test-btn"
        iconClassName="test-icon"
        collapsedClassName="test-collapsed"
      />
    );

    // Check if the class names are correctly applied
    expect(container.querySelector(".test-lmnt")).toBeInTheDocument();
    expect(container.querySelector(".test-header")).toBeInTheDocument();
    expect(container.querySelector(".test-title")).toBeInTheDocument();
    expect(container.querySelector(".test-btn-box")).toBeInTheDocument();
    expect(container.querySelector(".test-btn")).toBeInTheDocument();
    expect(container.querySelector(".test-icon")).toBeInTheDocument();
    expect(container.querySelector(".test-collapsed")).toBeInTheDocument();
  });
});
