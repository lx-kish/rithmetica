import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils"; // Import act for asynchronous updates
import { useInputScrollRefCallback } from "./use-input-scroll-ref-callback"; // Adjust the import path accordingly

describe("useInputScrollRefCallback", () => {
  it("attaches event listener to input element", async () => {
    // Arrange
    // const mockEvent = { preventDefault: jest.fn() } as WheelEvent;
    const addEventListenerSpy = jest.spyOn(
      HTMLInputElement.prototype,
      "addEventListener"
    );

    // Act
    render(<input ref={useInputScrollRefCallback()} />);

    // Assert
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "wheel",
      expect.any(Function),
      { passive: false }
    );

    // Simulate wheel event to check if preventDefault is called
    // act(() => {
    //   addEventListenerSpy.mock.calls[0][1](mockEvent);
    // });

    // expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it("does not attach event listener if input element is null", () => {
    // Arrange
    const addEventListenerSpy = jest.spyOn(
      HTMLInputElement.prototype,
      "addEventListener"
    );

    // Act
    const { unmount } = render(<input ref={useInputScrollRefCallback()} />);
    unmount();

    // Assert
    expect(addEventListenerSpy).not.toHaveBeenCalled();
  });
});
