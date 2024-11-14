import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";

import BtnUp from "./btn-up.component";

describe("button up component test suit", () => {
  beforeEach(() => {
    // Mock window.scrollTo
    vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the button with the correct class", () => {
    render(<BtnUp />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-up");
  });

  it("renders the icon with the correct class", () => {
    const { container } = render(<BtnUp />);

    const icon = container.querySelector("button > svg");
    expect(icon).toHaveClass("btn-up__icon");
  });

  it("calls window.scrollTo with correct parameters on click", () => {
    render(<BtnUp />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
