// BtnUp.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BtnUp from "./btn-up.component";

describe("BtnUp Component", () => {
  test("renders BtnUp component", () => {
    const { getByTestId } = render(<BtnUp />);
    const btnUpElement = getByTestId("btn-up");
    expect(btnUpElement).toBeInTheDocument();
  });

  test("clicking BtnUp scrolls to the top", () => {
    const { getByTestId } = render(<BtnUp />);
    const btnUpElement = getByTestId("btn-up");

    // Mock the scrollTo function
    const originalScrollTo = window.scrollTo;
    window.scrollTo = jest.fn();

    // Trigger a click event on the button
    fireEvent.click(btnUpElement);

    // Check if scrollTo was called with the expected arguments
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Restore the original scrollTo function
    window.scrollTo = originalScrollTo;
  });
});
