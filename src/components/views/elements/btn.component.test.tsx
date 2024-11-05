import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import Btn from "./btn.component";

describe("Button test suit", () => {
  afterEach(cleanup);

  it("renders children content correctly", () => {
    render(
      <Btn>
        <div>Child Content</div>
      </Btn>
    );
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("applies provided class names correctly", () => {
    const { container } = render(<Btn className="test-btn" />);

    // Check if the class names are correctly applied
    expect(container.querySelector(".test-btn")).toBeInTheDocument();
  });

  it("applies provided title correctly", () => {
    const { container } = render(<Btn title="test-title" />);

    expect(screen.getByTitle("test-title")).toBeInTheDocument();
  });

  it("calls onClick when the button is clicked", () => {
    const onClickMock = vi.fn();
    render(<Btn onClick={onClickMock} className="test-btn" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
